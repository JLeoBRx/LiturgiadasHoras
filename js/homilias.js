/**
 * Homilias dos santos na Liturgia Diária.
 *
 * Os dados ficam em dados/homilias/indice.json. Uma homilia só aparece num
 * dia quando uma das suas correspondências, conferidas e registradas no
 * índice, vale para aquele dia:
 *   - "liturgica": a homilia foi pregada para esta celebração
 *       (campo "celebracao" = id da celebração do dia, ou "chaves" = chaves
 *        de leituras do dia do tempo, ex. "QUA-1-domingo-A");
 *   - "biblica": a homilia comenta a leitura proclamada neste dia
 *       (campo "leituras" = chave do conjunto de leituras em
 *        dados/liturgia-diaria/indice.json; a referência é conferida pelos testes).
 * Num dia de festa cujas leituras próprias faltam no acervo (o site mostra as
 * do dia de semana), as correspondências bíblicas não valem: aquelas não são
 * as leituras da celebração.
 * Correspondências apenas temáticas NÃO são usadas para mostrar homilias
 * (ficam no inventário, em dados/homilias/inventario.json).
 * Sem correspondência, não há botão: a ausência é preferível a uma
 * associação incorreta.
 */
import * as dados from './dados.js';
import { lerDocumento } from './texto.js';

let indice = null;

export async function iniciar() {
  if (indice) return indice;
  indice = (await dados.json('homilias/indice.json')) || { homilias: [], autores: {}, obras: {} };
  return indice;
}

export const autor = (id) => indice?.autores?.[id] || null;
export const obra = (id) => indice?.obras?.[id] || null;
export const homilia = (id) => indice?.homilias?.find((h) => h.id === id && h.estado === 'publicada') || null;
/** Homilias publicadas (catálogo geral), na ordem da obra. */
export const publicadas = () => (indice?.homilias || []).filter((h) => h.estado === 'publicada').sort((a, b) => (a.obra || '').localeCompare(b.obra || '') || a.numero - b.numero);

/**
 * Onde uma homilia aparece na Liturgia Diária, em rótulos legíveis. Junta o
 * mesmo dia em anos diferentes: "…, Ano I" + "…, Ano II" -> "… (anos I e II)"
 * (o Evangelho dos dias de semana é o mesmo nos dois anos); "…, Ano A" +
 * "…, Ano B" + "…, Ano C" -> "… (anos A, B e C)".
 */
export function juntarRotulos(rotulos) {
  const grupos = new Map();
  for (const r of rotulos.filter(Boolean)) {
    const m = r.match(/^(.*), Ano (I|II|A|B|C)$/);
    const base = m ? m[1] : r;
    if (!grupos.has(base)) grupos.set(base, []);
    if (m && !grupos.get(base).includes(m[2])) grupos.get(base).push(m[2]);
  }
  return [...grupos].map(([base, anos]) => {
    if (!anos.length) return base;
    if (anos.length === 1) return `${base}, Ano ${anos[0]}`;
    return `${base} (anos ${anos.slice(0, -1).join(', ')} e ${anos[anos.length - 1]})`;
  });
}
export const ondeAparece = (h) => juntarRotulos((h.correspondencias || []).map((c) => c.dia));

/**
 * Homilias do dia.
 * @param {object} res  resultado de daily-liturgy.resolver(dia, opcao)
 * @param {object} [ind] índice a usar (padrão: o carregado por iniciar(); as
 *   ferramentas passam um índice ainda não gravado para calcular as datas)
 * @returns [{ homilia, motivos: [correspondencia + {rotuloLeituras}] }]
 */
export function homiliasDoDia(res, ind = indice) {
  if (!ind) return [];
  const cel = res.celebracao || {};
  const conjuntos = [{ chave: res.chave, rotulo: null }, ...(res.alternativas || []).map((a) => ({ chave: a.chave, rotulo: a.rotulo }))]
    .filter((c) => c.chave);
  const chaves = new Set(conjuntos.map((c) => c.chave));
  const out = [];
  for (const h of ind.homilias) {
    if (h.estado !== 'publicada') continue;
    const motivos = [];
    for (const c of h.correspondencias || []) {
      if (c.tipo === 'liturgica') {
        const porCelebracao = c.celebracao && cel.id === c.celebracao;
        const porChave = (c.chaves || []).some((k) => chaves.has(k));
        if (porCelebracao || porChave) motivos.push({ ...c });
      } else if (c.tipo === 'biblica' && !res.substitutas) {
        const conj = conjuntos.find((x) => x.chave === c.leituras);
        if (conj) motivos.push({ ...c, rotuloLeituras: conj.rotulo });
      }
    }
    if (motivos.length) out.push({ homilia: h, motivos });
  }
  // correspondência litúrgica primeiro; depois a ordem da obra
  out.sort((a, b) => (b.motivos.some((m) => m.tipo === 'liturgica') - a.motivos.some((m) => m.tipo === 'liturgica')) || (a.homilia.numero - b.homilia.numero));
  return out;
}

/** Texto publicado (camada revisada) -> { cabecalho, rubrica, leituraTitulo, leitura, paragrafos } */
export async function carregarTexto(h) {
  const t = await dados.texto(h.arquivo + '.txt');
  if (t == null) return null;
  const blocos = lerDocumento(t).blocos;
  const r = { cabecalho: [], rubrica: [], leituraTitulo: '', leitura: '', paragrafos: [], meta: {} };
  for (const b of blocos) {
    if (b.tipo === 'cabecalho') r.cabecalho.push(b.texto);
    else if (b.tipo === 'rubrica') r.rubrica.push(b.texto);
    else if (b.tipo === 'leitura-titulo') r.leituraTitulo = b.texto;
    else if (b.tipo === 'leitura') r.leitura = b.texto;
    else if (b.tipo === 'paragrafo') r.paragrafos.push(b.texto);
  }
  // para exibir a ocasião sem repetir o número da homilia (o texto do arquivo não muda)
  r.ocasiao = [...r.cabecalho, ...r.rubrica].join(' ').replace(/^(LIVRO (PRIMEIRO|SEGUNDO)\. )?HOMILIA (PRIMEIRA|[IVXL]+)\.\s*/, '').trim();
  return r;
}

/** Descrição curta, para o visitante, de por que a homilia está neste dia. */
export function descreverMotivo(m) {
  if (m.tipo === 'liturgica') return { rotulo: 'Correspondência litúrgica', texto: m.descricao };
  const onde = m.rotuloLeituras && !m.descricao.toLowerCase().includes(m.rotuloLeituras.toLowerCase()) ? ` (${m.rotuloLeituras})` : '';
  return { rotulo: 'Correspondência bíblica', texto: `${m.descricao}${onde}` };
}
