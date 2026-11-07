/**
 * Etapa 2: distribuição das homilias de São Gregório Magno no calendário.
 *
 * Lê dados/homilias/gregorio-magno/distribuicao.json (decisões editadas à mão) e:
 *   - confere cada correspondência bíblica com o arquivo de leituras do dia:
 *     referência, versículos em comum e força. Uma correspondência que não
 *     seja "plena" pelos critérios do próprio arquivo é RECUSADA (erro), e nada
 *     é gravado;
 *   - confere as correspondências litúrgicas com o santoral e o lecionário;
 *   - gera as entradas das 40 homilias em dados/homilias/indice.json (as de
 *     outras obras ficam como estão; notas editoriais são preservadas);
 *   - gera dados/homilias/DISTRIBUICAO.md: tabela das 40, classificação,
 *     datas em três anos litúrgicos (A, B, C), justificativas, correspondências
 *     recusadas e dúvidas.
 *
 * Uso:  node ferramentas/homilias/aplicar_distribuicao.mjs
 * O teste ferramentas/testes/homilias.test.mjs confere que o índice e o
 * relatório estão em dia com distribuicao.json.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { versiculos, intersecao, formatar } from './referencias.mjs';
import { descreverChave, evangelhosDaChave } from './lecionario.mjs';
import * as dados from '../../js/dados.js';
import { CalendarioLiturgico, datasDoAno, isoDeNumero } from '../../js/liturgical-calendar.js';
import * as LD from '../../js/daily-liturgy.js';
import * as HM from '../../js/homilias.js';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const ler = (p) => JSON.parse(fs.readFileSync(path.join(RAIZ, p), 'utf8'));
const ROM = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
  'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL'];
const OBRA = 'gregorio-homiliae-in-evangelia';
const id = (n) => `gregorio-hom-${String(n).padStart(2, '0')}`;
const md = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n+/g, ' ');
const pct = (x) => `${Math.round(x * 100)}%`;
const NAO_FOI_PREGADA = 'A homilia não foi pregada para este dia: a ligação é a leitura do Evangelho.';

/** Força de uma correspondência bíblica, pelos limiares de distribuicao.json. */
export function medir(pericope, referencia, lim) {
  const P = versiculos(pericope), R = versiculos(referencia);
  const O = intersecao(P, R);
  const daHomilia = P.size ? O.size / P.size : 0;
  const doDia = R.size ? O.size / R.size : 0;
  const plena = daHomilia >= lim.cobre_a_homilia
    || (doDia >= lim.cobre_o_dia && (R.size >= lim.minimo_de_versiculos_do_dia || daHomilia >= lim.minimo_da_homilia_se_curto));
  return { P, R, O, daHomilia, doDia, forca: plena ? 'plena' : O.size >= 2 ? 'parcial' : 'nenhuma' };
}

/**
 * Nota sobre a ocasião mostrada na página da homilia (a rubrica da tradução
 * segue Migne): diz quando o lugar ou o dia vêm só do título de Migne.
 */
export function notaOcasiao(ccsl, migne) {
  const lugarCcsl = /\bin (basilica|cimiterio|fontes)\s+\w/.test(ccsl);
  const diaMigne = /(Dominica|Sabbato|Feria|feria|in crastino|in octavis|die natalis|die sancto|in die|Ascensione)/.test(migne);
  const diaCcsl = /\bdie\b/.test(ccsl);
  if (!lugarCcsl && diaMigne) return 'O lugar e o dia indicados no título constam só da edição de Migne; a edição crítica (CCSL 141) não os especifica.';
  if (diaMigne && !diaCcsl) return 'O dia indicado no título consta só da edição de Migne; a edição crítica (CCSL 141) indica apenas o lugar.';
  return null;
}

/** Texto mostrado no site para uma correspondência bíblica sem descrição própria. */
function descreverBiblica(pericope, ref, m) {
  let s;
  if (m.O.size === m.P.size && m.O.size === m.R.size) s = pericope === ref ? `Comenta o Evangelho deste dia: ${ref}.` : `Comenta ${pericope}, que corresponde ao Evangelho deste dia (${ref}).`;
  else if (m.O.size === m.R.size) s = `Comenta ${pericope}, passagem que inclui todo o Evangelho deste dia (${ref}).`;
  else if (m.O.size === m.P.size) s = `Comenta ${pericope}, parte do Evangelho deste dia (${ref}).`;
  else s = `Comenta ${pericope}; o Evangelho deste dia (${ref}) coincide com essa passagem em ${formatar(m.O)}.`;
  return `${s} ${NAO_FOI_PREGADA}`;
}

function nomeCelebracao(idc, SAN) {
  const f = SAN.fixas.find((x) => x.id === idc);
  if (f) return `${f.nome} (${f.data.split('-').reverse().join('/')})`;
  const m = SAN.moveis[idc];
  return m ? (m.nome || idc) : null;
}

// ---------------------------------------------------------------- geração
export async function gerarDistribuicao() {
  const DIST = ler('dados/homilias/gregorio-magno/distribuicao.json');
  const CAT = ler('dados/homilias/gregorio-magno/catalogo.json');
  const REG = ler('dados/homilias/gregorio-magno/registro-editorial.json');
  const IND = ler('dados/homilias/indice.json');
  const LDI = ler('dados/liturgia-diaria/indice.json');
  const SAN = ler('dados/calendario/santoral.json');
  const lim = DIST.criterios.biblica_plena.limiares;
  const erros = [];
  const anteriores = new Map(IND.homilias.filter((h) => h.obra === OBRA).map((h) => [h.numero, h]));
  const colacao = new Map(REG.colacao.map((c) => [c.homilia, c]));
  const decisoes = new Map(DIST.homilias.map((d) => [d.numero, d]));
  const calculo = new Map(); // numero -> [{leituras, ref, medida}]

  const entradas = CAT.homilias.map((c) => {
    const n = c.numero;
    const d = decisoes.get(n);
    if (!d) { erros.push(`Homilia ${ROM[n]}: falta em distribuicao.json`); return null; }
    const ant = anteriores.get(n);
    const corr = [];
    for (const l of d.liturgicas || []) {
      if (l.celebracao) {
        const nome = nomeCelebracao(l.celebracao, SAN);
        if (!nome) erros.push(`Homilia ${ROM[n]}: celebração ${l.celebracao} não está no santoral`);
        corr.push({ tipo: 'liturgica', celebracao: l.celebracao, dia: nome, descricao: l.descricao });
      } else {
        for (const k of l.chaves || []) if (!LDI.leituras[k]) erros.push(`Homilia ${ROM[n]}: chave ${k} não existe no lecionário`);
        corr.push({ tipo: 'liturgica', chaves: l.chaves, dia: (l.chaves || []).map((k) => descreverChave(k, SAN)).join('; '), descricao: l.descricao });
      }
      if (!l.descricao || !l.fundamento) erros.push(`Homilia ${ROM[n]}: correspondência litúrgica sem descrição ou fundamento`);
    }
    const calc = [];
    for (const b of d.biblicas || []) {
      if (!LDI.leituras[b.leituras]) { erros.push(`Homilia ${ROM[n]}: leituras ${b.leituras} não existem`); continue; }
      // a seção "Evangelho" do arquivo que mais coincide com a passagem comentada
      const opcoes = evangelhosDaChave(LDI, b.leituras).map((ref) => ({ ref, m: medir(c.pericope, ref, lim) }))
        .sort((x, y) => y.m.O.size - x.m.O.size);
      const melhor = opcoes[0];
      if (!melhor || melhor.m.forca !== 'plena') {
        erros.push(`Homilia ${ROM[n]}: ${b.leituras} (${melhor ? melhor.ref : 'sem Evangelho'}) não é correspondência plena (${melhor ? `${pct(melhor.m.doDia)} do dia, ${pct(melhor.m.daHomilia)} da homilia` : '—'})`);
        continue;
      }
      calc.push({ leituras: b.leituras, ref: melhor.ref, m: melhor.m, outros: opcoes.length - 1 });
      corr.push({
        tipo: 'biblica', leituras: b.leituras, leitura: 'Evangelho', referencia_do_dia: melhor.ref, versiculos_comentados: formatar(melhor.m.O),
        dia: descreverChave(b.leituras, SAN), descricao: b.descricao || descreverBiblica(c.pericope, melhor.ref, melhor.m),
      });
    }
    calculo.set(n, calc);
    if (d.situacao === 'catalogo' ? corr.length || !d.motivo_catalogo : !corr.length) erros.push(`Homilia ${ROM[n]}: situação '${d.situacao}' incoerente com as correspondências`);
    if (ant && ant.rubrica_latina !== d.rubrica_ccsl) erros.push(`Homilia ${ROM[n]}: rubrica latina diverge da já publicada`);
    const ccsl = ant?.ccsl || `CCSL 141, p. ${(colacao.get(n)?.ccsl_paginas || c.ccsl_paginas).replace('-', '–')}`;
    return {
      id: id(n), obra: OBRA, numero: n, livro: c.livro, titulo: `Homilia ${ROM[n]}`, pericope: c.pericope,
      rubrica_latina: d.rubrica_ccsl, ccsl, arquivo: `homilias/gregorio-magno/revisada/homilia-${String(n).padStart(2, '0')}`,
      ...(notaOcasiao(d.rubrica_ccsl, d.rubrica_migne) ? { ocasiao_nota: notaOcasiao(d.rubrica_ccsl, d.rubrica_migne) } : {}),
      estado: d.estado || 'publicada', situacao: d.situacao,
      ...(d.situacao === 'catalogo' ? { motivo_catalogo: d.motivo_catalogo } : {}),
      ...(ant?.notas_editoriais ? { notas_editoriais: ant.notas_editoriais } : {}),
      correspondencias: corr,
    };
  });
  for (const d of DIST.homilias) if (!CAT.homilias.some((c) => c.numero === d.numero)) erros.push(`distribuicao.json: homilia ${d.numero} fora do catálogo`);
  if (erros.length) throw new Error('distribuição recusada:\n  - ' + erros.join('\n  - '));

  const outras = IND.homilias.filter((h) => h.obra !== OBRA);
  const indice = { ...IND, _leia: LEIA_INDICE, homilias: [...entradas, ...outras] };
  const datas = await datasNosAnos(indice, SAN);
  return { indice, md: relatorio(DIST, CAT, indice, calculo, datas, SAN) };
}

const LEIA_INDICE = [
  'Homilias dos santos no site. As entradas de São Gregório Magno são GERADAS por ferramentas/homilias/aplicar_distribuicao.mjs a partir de dados/homilias/gregorio-magno/distribuicao.json (decisões e justificativas); não as edite aqui.',
  "estado: 'publicada' aparece no site; qualquer outro valor (ex.: 'suspensa') esconde a homilia sem apagar nada.",
  'ocasiao_nota: quando o lugar ou o dia da pregação (que a página mostra a partir do título da tradução, que segue Migne) não constam da edição crítica.',
  "situacao: 'calendario' (aparece na Liturgia Diária nos dias das suas correspondências) ou 'catalogo' (só no catálogo geral, #/homilias, sem data litúrgica; motivo_catalogo diz por quê).",
  "correspondencias: 'liturgica' (pregada para esta celebração: 'celebracao' = id da celebração do dia, ou 'chaves' = chaves de leituras do dia do tempo) e 'biblica' (comenta a leitura proclamada: 'leituras' = chave de dados/liturgia-diaria/indice.json, 'leitura' = seção, 'referencia_do_dia' = referência exatamente como no arquivo de leituras, 'versiculos_comentados' = trecho comentado pela homilia que também é lido no dia). 'dia' = nome legível do dia ou da celebração. Correspondência só temática NUNCA entra aqui.",
  'arquivo: camada revisada (texto publicado), gerada a partir da tradução recebida e do registro editorial. Ver dados/homilias/LEIA-ME.md.',
  'Os testes (ferramentas/testes/homilias.test.mjs) conferem a integridade dos textos, as referências bíblicas e os dias em que cada homilia aparece.',
  'notas_editoriais: observações do editor sobre o texto (ex.: frase presente só em Migne), mostradas na página da homilia; o texto em si não muda.',
];

// ---------------------------------------------------------------- datas (pelo próprio mecanismo do site)
const ANOS_LITURGICOS = [2026, 2027, 2028]; // começam no 1º domingo do Advento destes anos: A, B, C
async function datasNosAnos(indice, SAN) {
  dados.definirCarregador(async (c) => { try { return fs.readFileSync(path.join(RAIZ, c), 'utf8'); } catch { return null; } });
  await LD.iniciar();
  const cal = new CalendarioLiturgico(SAN);
  const out = new Map(); // id -> [{ano, iso, op}]
  for (const a of ANOS_LITURGICOS) {
    const ini = datasDoAno(a).advento1, fim = datasDoAno(a + 1).advento1 - 1;
    for (let n = ini; n <= fim; n++) {
      const iso = isoDeNumero(n);
      const d = cal.dia(iso);
      for (const op of [null, ...d.opcoes.map((o) => o.id)]) {
        for (const { homilia: h } of HM.homiliasDoDia(LD.resolver(d, op), indice)) {
          if (!out.has(h.id)) out.set(h.id, []);
          const l = out.get(h.id);
          if (!l.some((x) => x.iso === iso)) l.push({ ano: a, iso, op: op ? d.opcoes.find((o) => o.id === op).nome : null, ciclo: cal.dia(isoDeNumero(datasDoAno(a).advento1)).cicloDominical });
        }
      }
    }
  }
  return out;
}
const dataCurta = (iso) => iso.split('-').reverse().join('/');

// ---------------------------------------------------------------- DISTRIBUICAO.md
function relatorio(DIST, CAT, indice, calculo, datas, SAN) {
  const H = indice.homilias.filter((h) => h.obra === OBRA);
  const dec = new Map(DIST.homilias.map((d) => [d.numero, d]));
  const L = [];
  const lit = H.filter((h) => h.correspondencias.some((c) => c.tipo === 'liturgica'));
  const noCal = H.filter((h) => h.situacao === 'calendario');
  const cat = H.filter((h) => h.situacao === 'catalogo');
  const nBib = H.reduce((s, h) => s + h.correspondencias.filter((c) => c.tipo === 'biblica').length, 0);
  const naoUsadas = DIST.homilias.flatMap((d) => (d.nao_usadas || []).map((x) => ({ ...x, numero: d.numero })));
  const duvidas = DIST.homilias.flatMap((d) => (d.duvidas || []).map((x) => ({ ...x, numero: d.numero })));
  const rotulos = (h) => HM.ondeAparece(h);
  const ciclos = (h) => {
    if (!h.correspondencias.length) return '—';
    const porCorr = h.correspondencias.map((c) => [...new Set([c.leituras, ...(c.chaves || [])].filter(Boolean).map((k) => (k.match(/-([ABC])$/) || [])[1]))]);
    const todoAno = porCorr.some((l) => !l.length || l.includes(undefined));
    const abc = [...new Set(porCorr.flat().filter(Boolean))].sort();
    if (abc.length === 3) return 'todo ano';
    return todoAno ? (abc.length ? `todo ano; mais no Ano ${abc.join(', ')}` : 'todo ano') : `Ano ${abc.join(', ')}`;
  };

  L.push('# Distribuição das homilias de São Gregório Magno no calendário (Etapa 2)', '');
  L.push('> Gerado por `ferramentas/homilias/aplicar_distribuicao.mjs` a partir de `dados/homilias/gregorio-magno/distribuicao.json`. Não edite à mão: altere as decisões no arquivo de distribuição e rode o script.', '');
  L.push('## Critérios', '');
  const C = DIST.criterios;
  L.push(`- **Correspondência litúrgica.** ${C.liturgica}`);
  L.push(`- **Correspondência bíblica plena.** ${C.biblica_plena.regra} ${C.biblica_plena.contagem}`);
  L.push(`- **Parcial.** ${C.parcial}`, `- **Paralela.** ${C.paralela}`, `- **Temática.** ${C.tematica}`, `- **Catálogo geral.** ${C.catalogo}`);
  L.push('- Toda correspondência bíblica aparece no site com o rótulo “Correspondência bíblica”, e as novas dizem expressamente que a homilia não foi pregada para aquele dia.', '');
  L.push('## Resumo', '', '| | Quantidade |', '|---|---|');
  L.push(`| Homilias no calendário (Liturgia Diária) | ${noCal.length} |`, `| Homilias só no catálogo geral | ${cat.length} (${cat.map((h) => ROM[h.numero]).join(', ')}) |`);
  L.push(`| Com correspondência litúrgica | ${lit.length} (${lit.map((h) => ROM[h.numero]).join(', ')}) |`);
  L.push(`| Correspondências bíblicas plenas publicadas | ${nBib} |`, `| Correspondências examinadas e não usadas | ${naoUsadas.length} |`, `| Dúvidas decididas pelo responsável | ${duvidas.filter((x) => x.decisao).length} |`, `| Dúvidas em aberto | ${duvidas.filter((x) => !x.decisao).length} |`, '');

  L.push('## As 40 homilias', '', 'Ocasião: rubrica da edição crítica (CCSL 141); entre parênteses, o dia que só o título de Migne indica. Anos: “todo ano” quando ao menos uma correspondência vale em todos os anos (festas, solenidades, dias de semana: o Evangelho dos dias de semana é o mesmo nos anos I e II); “Ano A/B/C” quando depende do ciclo dominical.', '');
  L.push('| Nº | Passagem | Ocasião | Classificação | Dias | Anos | Situação |', '|---|---|---|---|---|---|---|');
  for (const h of H) {
    const d = dec.get(h.numero);
    const tem = (t) => h.correspondencias.some((c) => c.tipo === t);
    const classe = tem('liturgica') && tem('biblica') ? 'litúrgica + bíblica' : tem('liturgica') ? 'litúrgica' : tem('biblica') ? 'bíblica' : 'sem correspondência suficiente';
    L.push(`| ${ROM[h.numero]} | ${h.pericope} | ${md(ocasiao(d))} | ${classe} | ${md(rotulos(h).join('; ') || '—')} | ${ciclos(h)} | ${h.situacao === 'catalogo' ? 'catálogo geral' : 'calendário'} |`);
  }
  L.push('');

  L.push('## Homilias ligadas a mais de uma celebração ou ciclo', '');
  for (const h of H.filter((x) => rotulos(x).length > 1)) L.push(`- **${ROM[h.numero]}** (${h.pericope}): ${rotulos(h).join('; ')}.`);
  L.push('');
  L.push('## Homilias sem correspondência adequada (só no catálogo geral)', '');
  for (const h of cat) L.push(`- **${ROM[h.numero]}** (${h.pericope}): ${h.motivo_catalogo}`);
  L.push('');

  L.push('## As 8 candidatas fortes da Etapa 1', '', '| Nº | Resultado da verificação |', '|---|---|');
  for (const d of DIST.homilias.filter((x) => x.candidata_forte_etapa_1)) L.push(`| ${ROM[d.numero]} | ${md(d.justificativa)} |`);
  L.push('');

  L.push('## Ocasiões antigas não convertidas em celebrações atuais', '', 'Datas que constam só nos títulos de Migne, ou celebrações do século VI que mudaram ou deixaram de existir. Nenhuma foi usada.', '');
  for (const x of naoUsadas.filter((y) => y.classe === 'ocasiao-antiga' || y.classe === 'fora-do-calendario')) L.push(`- **${ROM[x.numero]}** — ${md(x.alvo)}: ${x.motivo}`);
  L.push('');

  L.push('## Dúvidas em aberto', '');
  const abertas = duvidas.filter((x) => !x.decisao);
  if (!abertas.length) L.push('Nenhuma.');
  for (const x of abertas) L.push(`- **Homilia ${ROM[x.numero]}.** ${x.questao} *Opção adotada por ora:* ${x.opcao_adotada}`);
  L.push('');
  const decididas = duvidas.filter((x) => x.decisao);
  if (decididas.length) {
    L.push('## Decisões do responsável', '');
    for (const x of decididas) L.push(`- **Homilia ${ROM[x.numero]}** (${x.decisao.data.split('-').reverse().join('/')}, alternativa ${x.decisao.escolha}). ${x.questao} **Decisão:** ${x.decisao.texto}`);
    L.push('');
  }

  if (DIST.lecionario?.length) {
    L.push('## Problemas encontrados nos dados da Liturgia Diária', '');
    for (const x of DIST.lecionario) L.push(`- **${x.estado}.** ${x.descricao}`);
    L.push('');
  }

  L.push('## Detalhe por homilia', '');
  const cicloDe = new Map([...datas.values()].flat().map((x) => [x.ano, x.ciclo]));
  const anos = ANOS_LITURGICOS.map((a) => `${a}–${a + 1}${cicloDe.has(a) ? ` (Ano ${cicloDe.get(a)})` : ''}`).join(', ');
  for (const h of H) {
    const d = dec.get(h.numero);
    L.push(`### Homilia ${ROM[h.numero]} — ${h.pericope}`, '');
    L.push(`- **Rubrica (CCSL 141):** *${d.rubrica_ccsl}*`, `- **Título em Migne:** *${d.rubrica_migne}*`);
    if (d.ocasiao_no_texto) L.push(`- **No texto:** ${d.ocasiao_no_texto}`);
    L.push(`- **Situação:** ${h.situacao === 'catalogo' ? 'só no catálogo geral' : 'no calendário'}. ${d.justificativa}`);
    if (h.situacao === 'catalogo') L.push(`- **Por que fica sem data:** ${h.motivo_catalogo}`);
    for (const c of h.correspondencias.filter((x) => x.tipo === 'liturgica')) L.push(`- **Litúrgica — ${c.dia}:** ${c.descricao} *(fundamento: ${(d.liturgicas.find((l) => (l.celebracao && l.celebracao === c.celebracao) || (l.chaves && l.chaves.join() === (c.chaves || []).join())) || {}).fundamento})*`);
    const calc = calculo.get(h.numero) || [];
    if (calc.length) {
      L.push('', '| Correspondência bíblica | Evangelho do dia | Em comum | Do dia | Da homilia |', '|---|---|---|---|---|');
      for (const x of calc) L.push(`| ${md(descreverChave(x.leituras, SAN))} | ${x.ref}${x.outros ? ` (o arquivo traz mais ${x.outros} Evangelho${x.outros > 1 ? 's' : ''})` : ''} | ${formatar(x.m.O)} | ${pct(x.m.doDia)} | ${pct(x.m.daHomilia)} |`);
      L.push('');
    }
    const nu = d.nao_usadas || [];
    if (nu.length) { L.push('Examinadas e não usadas:', ''); for (const x of nu) L.push(`- *${x.classe}* — ${md(x.alvo)}: ${x.motivo}`); L.push(''); }
    for (const x of d.duvidas || []) L.push(x.decisao ? `**Decisão do responsável (${x.decisao.data.split('-').reverse().join('/')}):** ${x.decisao.texto}` : `**Dúvida:** ${x.questao} *Por ora:* ${x.opcao_adotada}`, '');
    const ds = datas.get(h.id) || [];
    L.push(`**Datas nos anos litúrgicos ${anos}:** ${ds.length ? ANOS_LITURGICOS.map((a) => { const l = ds.filter((x) => x.ano === a); return l.length ? `${a}–${a + 1}: ${l.map((x) => `${dataCurta(x.iso)}${x.op ? ` (se escolhida a memória de ${x.op})` : ''}`).join(', ')}` : null; }).filter(Boolean).join('; ') : 'nenhuma (catálogo geral).'}`, '');
  }
  return L.join('\n');
}

function ocasiao(d) {
  const lugar = d.rubrica_ccsl.replace(/^Homilia lectionis eiusdem\s+/, '').replace(/\.$/, '');
  const extra = d.rubrica_migne.match(/(Dominica.+|Sabbato.+|Feria.+|feria.+|in crastino.+|in octavis.+)$/);
  return `${lugar}${extra ? ` (Migne: ${extra[1].replace(/\.$/, '')})` : ''}`;
}

// ---------------------------------------------------------------- CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const r = await gerarDistribuicao();
  fs.writeFileSync(path.join(RAIZ, 'dados', 'homilias', 'indice.json'), JSON.stringify(r.indice, null, 2));
  fs.writeFileSync(path.join(RAIZ, 'dados', 'homilias', 'DISTRIBUICAO.md'), r.md);
  const H = r.indice.homilias.filter((h) => h.obra === OBRA);
  console.log(`gerados: indice.json (${H.length} homilias; ${H.filter((h) => h.situacao === 'calendario').length} no calendário, ${H.filter((h) => h.situacao === 'catalogo').length} só no catálogo) e DISTRIBUICAO.md`);
}
