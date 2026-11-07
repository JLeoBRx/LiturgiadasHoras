/**
 * Homilias dos santos na Liturgia Diária.
 *
 * Executar:  node --test "ferramentas/testes/*.test.mjs"
 *
 * 1. Integridade: a camada "recebida" reproduz, palavra por palavra, o arquivo
 *    original enviado (que nunca é alterado).
 * 2. Nenhuma alteração silenciosa: a camada "revisada" (texto publicado) é
 *    exatamente a recebida mais as correções registradas como aplicadas; toda
 *    entrada do registro aponta para um texto que existe.
 * 3. Correspondências: cada referência bíblica declarada confere com o arquivo
 *    de leituras do dia e com a passagem comentada pela homilia.
 * 4. Calendário: de 2025 a 2045, cada homilia aparece exatamente nos dias
 *    esperados — e em nenhum outro.
 * 5. Documentos: auditoria e inventário correspondem aos dados atuais.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as dados from '../../js/dados.js';
import { CalendarioLiturgico, datasDoAno, isoDeNumero, numeroDia } from '../../js/liturgical-calendar.js';
import * as LD from '../../js/daily-liturgy.js';
import * as HM from '../../js/homilias.js';
import { versiculos, intersecao, contido } from '../homilias/referencias.mjs';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const DADOS = path.join(RAIZ, 'dados');
dados.definirCarregador(async (c) => { try { return fs.readFileSync(path.join(RAIZ, c), 'utf8'); } catch { return null; } });
await LD.iniciar();
await HM.iniciar();
const lerJSON = (p) => JSON.parse(fs.readFileSync(path.join(RAIZ, p), 'utf8'));
const cal = new CalendarioLiturgico(lerJSON('dados/calendario/santoral.json'));
const INDICE = lerJSON('dados/homilias/indice.json');
const REG = lerJSON('dados/homilias/gregorio-magno/registro-editorial.json');
const LDI = lerJSON('dados/liturgia-diaria/indice.json');
const G = path.join(DADOS, 'homilias', 'gregorio-magno');
const ORIGEM = path.join(RAIZ, 'Homilia dos Santos', 'Homilia de Santos', 'São Gregório Magno, Papa (540–604)', 'Texto Traduzido, as 40 homilias.txt');

/** blocos de um arquivo de camada: [{marca, continua, texto}] */
function blocos(arq) {
  const t = fs.readFileSync(arq, 'utf8').replace(/\n+$/, '');
  return t.split('\n\n').map((p) => p.split('\n')).filter((l) => l[0] && !/^@(origem|camada|trechos|correcoes)\b/.test(l[0]) && l.length > 1)
    .map(([m, ...resto]) => ({ marca: m.split(' ')[0], continua: / continua$/.test(m), texto: resto.join('\n') }));
}
const arquivos = ['prefacio', ...Array.from({ length: 40 }, (_, i) => `homilia-${String(i + 1).padStart(2, '0')}`)];

// ------------------------------------------------------------------------
describe('Homilias: integridade da tradução recebida', () => {
  test('os 41 arquivos (prefácio + 40 homilias) reproduzem exatamente o original', () => {
    // separação independente da do script: parágrafos do original, sem as marcas "Trecho N" e "PT"
    const original = fs.readFileSync(ORIGEM, 'utf8').split('\n')
      .filter((l) => l.trim() && !/^(Trecho \d+|PT)\s*$/.test(l));
    const reconstruido = [];
    for (const a of arquivos) {
      for (const b of blocos(path.join(G, 'recebida', a + '.txt'))) {
        if (b.continua) reconstruido[reconstruido.length - 1] += b.texto; // cabeçalho que estava no meio da linha
        else reconstruido.push(b.texto);
      }
    }
    assert.equal(reconstruido.length, original.length, 'número de parágrafos');
    const dif = reconstruido.findIndex((p, i) => p !== original[i]);
    assert.equal(dif, -1, dif >= 0 ? `parágrafo ${dif} difere do original` : '');
  });
});

// ------------------------------------------------------------------------
describe('Homilias: nenhuma alteração silenciosa', () => {
  const colacionadas = REG.colacao.map((c) => c.homilia);
  test('o registro é consistente', () => {
    const ids = new Set();
    const TIPOS = { correcao: ['aplicada', 'nao-aplicada'], sugestao: ['nao-aplicada'], duvida: ['nao-aplicada'], variante: ['nao-aplicada'], 'problema-fonte': ['nao-aplicada'] };
    for (const r of REG.registros) {
      assert.ok(!ids.has(r.id), `id repetido ${r.id}`); ids.add(r.id);
      for (const k of ['homilia', 'tipo', 'estado', 'confianca', 'bloco', 'localizacao', 'ccsl', 'latim', 'antes', 'justificativa_linguistica', 'motivo']) assert.ok(r[k] !== undefined && r[k] !== '', `${r.id}: falta ${k}`);
      assert.ok(TIPOS[r.tipo]?.includes(r.estado), `${r.id}: tipo/estado inválido`);
      assert.ok(['alta', 'moderada', 'baixa'].includes(r.confianca), `${r.id}: confiança inválida`);
      if (r.estado === 'aplicada') assert.equal(r.confianca, 'alta', `${r.id}: só correções de confiança alta são aplicadas`);
      if (['correcao', 'sugestao'].includes(r.tipo)) assert.ok(r.depois, `${r.id}: falta o texto proposto`);
      assert.ok(colacionadas.includes(r.homilia), `${r.id}: homilia não está na lista de colação`);
      const rec = blocos(path.join(G, 'recebida', `homilia-${String(r.homilia).padStart(2, '0')}.txt`));
      assert.equal(rec[r.bloco].texto.split(r.antes).length - 1, 1, `${r.id}: 'antes' deve aparecer uma vez no bloco ${r.bloco} da recebida`);
    }
  });
  for (const n of colacionadas) {
    test(`Homilia ${n}: revisada = recebida + correções aplicadas`, () => {
      const nn = String(n).padStart(2, '0');
      const rec = blocos(path.join(G, 'recebida', `homilia-${nn}.txt`)).map((b) => ({ ...b, antes: [] }));
      const aplicadas = REG.registros.filter((x) => x.homilia === n && x.estado === 'aplicada');
      for (const r of aplicadas) {
        rec[r.bloco].texto = rec[r.bloco].texto.replace(r.antes, r.depois);
        // blocos acrescentados antes (ex.: cabeçalho ausente, traduzido do latim)
        for (const [marca, texto] of r.insere_antes || []) rec[r.bloco].antes.push({ marca, texto });
        // etiqueta corrigida (ex.: título da leitura marcado como parágrafo na recebida)
        if (r.nova_marca) rec[r.bloco].marca = r.nova_marca;
      }
      // parágrafo partido no meio de uma frase na origem: une ao seguinte (de trás para frente)
      for (const r of aplicadas.filter((x) => x.une_ao_seguinte).sort((a, b) => b.bloco - a.bloco)) {
        rec[r.bloco].texto += ' ' + rec[r.bloco + 1].texto;
        rec.splice(r.bloco + 1, 1);
      }
      const esperado = rec.flatMap((b) => [...b.antes, ...b.texto.split('\n\n').map((t, i) => ({ marca: i ? '@paragrafo' : b.marca, texto: t }))]);
      const rev = blocos(path.join(G, 'revisada', `homilia-${nn}.txt`));
      assert.deepEqual(rev.map((b) => [b.marca, b.texto]), esperado.map((b) => [b.marca, b.texto]));
      const textoRev = rev.map((b) => b.texto).join('\n');
      for (const r of REG.registros.filter((x) => x.homilia === n && x.estado !== 'aplicada')) {
        assert.ok(textoRev.includes(r.antes), `${r.id}: o texto não aplicado deveria continuar como recebido`);
      }
    });
  }
  test('só há camada revisada para homilias conferidas com o latim', () => {
    const rev = fs.readdirSync(path.join(G, 'revisada')).map((f) => +f.match(/\d+/)[0]).sort((a, b) => a - b);
    assert.deepEqual(rev, [...colacionadas].sort((a, b) => a - b));
  });
});

// ------------------------------------------------------------------------
const PUBLICADAS = INDICE.homilias.filter((h) => h.estado === 'publicada');
const evangelhoDoArquivo = (chave, leitura) => {
  const t = fs.readFileSync(path.join(DADOS, 'liturgia-diaria', LDI.leituras[chave] + '.txt'), 'utf8');
  return [...t.matchAll(/^@secao ([^|\n]+?)\s*\|\s*(.+)$/gm)].filter((m) => m[1].trim() === leitura).map((m) => m[2].trim());
};

describe('Homilias: dados publicados e correspondências', () => {
  test('cada homilia publicada tem texto, metadados e colação com o latim', () => {
    const colacionadas = REG.colacao.map((c) => c.homilia);
    for (const h of PUBLICADAS) {
      for (const k of ['id', 'obra', 'numero', 'titulo', 'pericope', 'rubrica_latina', 'ccsl', 'arquivo']) assert.ok(h[k], `${h.id}: falta ${k}`);
      const ob = INDICE.obras[h.obra];
      assert.ok(ob && INDICE.autores[ob.autor], `${h.id}: obra ou autor ausente`);
      for (const k of ['edicao_critica', 'autenticidade', 'traducao']) assert.ok(ob[k], `${h.obra}: falta ${k}`);
      for (const k of ['tradutor', 'origem', 'direitos', 'revisao']) assert.ok(ob.traducao[k], `${h.obra}: tradução sem ${k}`);
      assert.ok(fs.existsSync(path.join(DADOS, h.arquivo + '.txt')), `${h.id}: arquivo ausente`);
      assert.ok(colacionadas.includes(h.numero), `${h.id}: publicada sem colação com o latim`);
      if (h.situacao === 'catalogo') {
        // só no catálogo geral: sem data litúrgica, e com o motivo declarado
        assert.equal(h.correspondencias.length, 0, `${h.id}: homilia do catálogo com correspondência`);
        assert.ok(h.motivo_catalogo, `${h.id}: falta o motivo de ficar só no catálogo`);
      } else {
        assert.equal(h.situacao, 'calendario', `${h.id}: situação desconhecida`);
        assert.ok(h.correspondencias?.length, `${h.id}: sem correspondência`);
      }
    }
  });
  test('a passagem comentada confere com o título da leitura no próprio texto', async () => {
    for (const h of PUBLICADAS) {
      const t = await HM.carregarTexto(h);
      const m = h.pericope.match(/^\S+ (\d+),(\d+)-(\d+)$/);
      assert.ok(m, `${h.id}: perícope em formato inesperado`);
      const romano = (n) => ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'][+n];
      assert.match(t.leituraTitulo.replace(/\s/g, ''), new RegExp(`(${m[1]}|${romano(m[1])}),${m[2]}-${m[3]}`), `${h.id}: título da leitura não traz ${h.pericope}`);
      assert.ok(t.leitura && t.paragrafos.join(' ').split(/\s+/).length > 500, `${h.id}: texto incompleto`);
    }
  });
  test('correspondências: só litúrgica ou bíblica, e todas verificáveis', () => {
    const celebracoes = new Set([...lerJSON('dados/calendario/santoral.json').fixas.map((c) => c.id), ...Object.keys(lerJSON('dados/calendario/santoral.json').moveis)]);
    for (const h of PUBLICADAS) {
      const pericope = versiculos(h.pericope);
      for (const c of h.correspondencias) {
        assert.ok(['liturgica', 'biblica'].includes(c.tipo), `${h.id}: tipo ${c.tipo} não pode ser usado para publicar`);
        assert.ok(c.descricao, `${h.id}: correspondência sem descrição`);
        if (c.tipo === 'liturgica') {
          assert.ok(c.celebracao || c.chaves?.length, `${h.id}: correspondência litúrgica sem alvo`);
          if (c.celebracao) assert.ok(celebracoes.has(c.celebracao), `${h.id}: celebração ${c.celebracao} desconhecida`);
          for (const k of c.chaves || []) assert.ok(LDI.leituras[k], `${h.id}: chave ${k} inexistente`);
        } else {
          assert.ok(LDI.leituras[c.leituras], `${h.id}: leituras ${c.leituras} inexistentes`);
          const refs = evangelhoDoArquivo(c.leituras, c.leitura);
          assert.ok(refs.includes(c.referencia_do_dia), `${h.id}: ${c.leituras} traz ${refs.join(' / ') || 'nada'} em "${c.leitura}", não ${c.referencia_do_dia}`);
          const comum = versiculos(c.versiculos_comentados);
          assert.ok(comum.size > 0, `${h.id}: versículos comentados ilegíveis`);
          assert.ok(contido(comum, pericope), `${h.id}: ${c.versiculos_comentados} não está na passagem comentada (${h.pericope})`);
          assert.ok(contido(comum, versiculos(c.referencia_do_dia)), `${h.id}: ${c.versiculos_comentados} não é lido no dia (${c.referencia_do_dia})`);
          assert.ok(intersecao(pericope, versiculos(c.referencia_do_dia)).size >= comum.size, `${h.id}: interseção menor que a declarada`);
        }
      }
    }
  });
});

// ------------------------------------------------------------------------
describe('Homilias: dias em que aparecem (2025–2045)', () => {
  const DE = 2025, ATE = 2045;
  const aparicoes = new Map(PUBLICADAS.map((h) => [h.id, []]));
  for (let n = numeroDia(DE, 1, 1); n <= numeroDia(ATE, 12, 31); n++) {
    const iso = isoDeNumero(n);
    const dia = cal.dia(iso);
    for (const op of [null, ...dia.opcoes.map((o) => o.id)]) {
      const res = LD.resolver(dia, op);
      for (const { homilia: h, motivos } of HM.homiliasDoDia(res)) {
        assert.ok(motivos.length, 'homilia sem motivo');
        aparicoes.get(h.id).push({ iso, op, motivos: motivos.map((m) => m.tipo), chave: res.chave });
      }
    }
  }
  const dias = (id) => [...new Set(aparicoes.get(id).map((a) => a.iso))].sort();
  const anos = Array.from({ length: ATE - DE + 1 }, (_, i) => DE + i);
  const D = (a) => datasDoAno(a);

  // Dias esperados das 40 homilias, calculados SÓ com o calendário (sem
  // daily-liturgy.js nem homilias.js) a partir desta lista, escrita à mão
  // e independente de distribuicao.json. Cada item é:
  //   'cel:ID'      a celebração do dia (ou uma memória à escolha) é ID;
  //   'cel:ID-B'    idem, num dia do Ano B;
  //   'TC-34-sexta' dia do tempo com as leituras do tempo (anos I e II);
  //   'TC-17-domingo-A', 'QUA-1-domingo' (Anos A, B e C), 'PAS-1-quarta'…
  // As leituras do tempo valem nos dias sem celebração própria e nas
  // memórias; festas e solenidades têm leituras próprias.
  const ESPERADO = {
    1: ['TC-34-sexta'], 2: ['TC-33-segunda'], 3: ['TC-16-terca'], 4: [],
    5: ['cel:santoandre', 'TC-3-domingo-A'], 6: ['ADV-3-domingo-A'], 7: ['ADV-3-domingo-B', 'NAT-jan02'], 8: ['cel:natal'],
    9: ['TC-21-sabado', 'TC-33-domingo-A'], 10: ['cel:epifania'], 11: ['cel:santaines', 'TC-17-domingo-A'],
    12: ['cel:santaines', 'TC-21-sexta', 'TC-32-domingo-A'], 13: ['cel:fieisdefuntos', 'TC-29-terca', 'TC-19-domingo-C'],
    14: ['PAS-4-domingo-B', 'PAS-4-segunda'], 15: ['TC-24-sabado'], 16: ['QUA-1-domingo'],
    17: ['cel:saolucas', 'cel:saotimoteoetito', 'TC-26-quinta', 'TC-14-domingo-C'], 18: ['QUA-5-quinta'],
    19: ['TC-20-quarta', 'TC-25-domingo-A'], 20: ['ADV-2-domingo-C'], 21: ['cel:pascoa', 'cel:sabadosanto-B'],
    22: ['cel:pascoa', 'cel:joaoevangelista'], 23: ['PAS-1-quarta', 'PAS-3-domingo-A'], 24: ['PAS-1-sexta', 'PAS-3-domingo-C'],
    25: ['PAS-1-terca', 'cel:stamariamadalena'], 26: ['cel:divinamisericordia', 'cel:saotome', 'cel:pentecostes'],
    27: ['cel:saopancracio', 'PAS-5-sexta', 'PAS-6-domingo-B', 'cel:saomatias'], 28: ['QUA-4-segunda'],
    29: ['cel:ascensaodosenhor', 'cel:saomarcos', 'cel:conversaosaopaulo'], 30: ['cel:pentecostes', 'PAS-6-domingo-C', 'PAS-5-terca'],
    31: [], 32: [], 33: ['TC-24-quinta', 'TC-11-domingo-C'], 34: ['TC-31-quinta', 'TC-24-domingo-C', 'cel:scj-C'],
    35: ['TC-33-domingo-C', 'TC-34-quarta'], 36: ['TC-31-terca'], 37: ['cel:saosebastiao', 'TC-23-domingo-C', 'TC-31-quarta'],
    38: ['TC-20-quinta', 'TC-28-domingo-A'], 39: ['TC-33-quinta'], 40: ['QUA-2-quinta', 'TC-26-domingo-C'],
  };
  const SEMANA = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  const PREFIXO = { comum: 'TC', advento: 'ADV', quaresma: 'QUA', pascoa: 'PAS' };
  const doTempo = (d) => {
    if (d.tempo === 'natal' && d.mes === 1 && d.subtipo === 'antes-epifania') return `NAT-jan${String(d.dia).padStart(2, '0')}`;
    if (!PREFIXO[d.tempo] || d.semana == null) return null;
    return d.diaSemana === 0 ? `${PREFIXO[d.tempo]}-${d.semana}-domingo-${d.cicloDominical}` : `${PREFIXO[d.tempo]}-${d.semana}-${SEMANA[d.diaSemana]}`;
  };
  const leiturasDoTempo = (d) => d.celebracao.tipo === 'temporal' ? !d.celebracao.id : ['memoria', 'memoria-facultativa'].includes(d.celebracao.grau);
  function diasDe(itens) {
    const out = [];
    for (let n = numeroDia(DE, 1, 1); n <= numeroDia(ATE, 12, 31); n++) {
      const iso = isoDeNumero(n);
      const d = cal.dia(iso);
      const vale = itens.some((it) => {
        const c = it.match(/^cel:([^-]+)(?:-([ABC]))?$/);
        if (c) return (d.celebracao.id === c[1] || d.opcoes.some((o) => o.id === c[1])) && (!c[2] || d.cicloDominical === c[2]);
        const k = doTempo(d);
        return !!k && leiturasDoTempo(d) && (k === it || k.startsWith(it + '-'));
      });
      if (vale) out.push(iso);
    }
    return out;
  }
  for (const h of PUBLICADAS.filter((x) => x.obra === 'gregorio-homiliae-in-evangelia')) {
    test(`${h.id}: exatamente nos dias calculados pelo calendário`, () => {
      assert.ok(ESPERADO[h.numero], `defina os dias esperados de ${h.id} neste teste`);
      const esp = diasDe(ESPERADO[h.numero]);
      const obs = dias(h.id);
      const falta = esp.filter((x) => !obs.includes(x)), sobra = obs.filter((x) => !esp.includes(x));
      assert.deepEqual({ falta, sobra }, { falta: [], sobra: [] }, `${h.id}: dias divergentes`);
      assert.equal(esp.length > 0, h.situacao === 'calendario', `${h.id}: situação incoerente com os dias`);
    });
  }
  test('datas conferidas à mão (2026–2027)', () => {
    const em = (iso, op = null) => HM.homiliasDoDia(LD.resolver(cal.dia(iso), op)).map((x) => x.homilia.numero).sort((a, b) => a - b);
    assert.deepEqual(em('2026-11-27'), [1]);                // sexta-feira da 34ª semana do Tempo Comum
    assert.deepEqual(em('2027-01-21'), [11, 12]);           // Santa Inês (quinta-feira)
    assert.deepEqual(em('2027-01-20'), []);                 // 20/1 sem escolher memória
    assert.deepEqual(em('2027-01-20', 'saosebastiao'), [37]);
    assert.deepEqual(em('2027-01-20', 'saofabiano'), []);
    assert.deepEqual(em('2027-02-25'), [40]);               // quinta-feira da 2ª semana da Quaresma
    assert.deepEqual(em('2027-03-28'), [21, 22]);           // Páscoa: XXI (pregada no dia) e XXII (Jo 20,1-9)
    assert.deepEqual(em('2027-03-31'), [23]);               // quarta-feira da oitava da Páscoa
    assert.deepEqual(em('2027-05-12'), []);
    assert.deepEqual(em('2027-05-12', 'saopancracio'), [27]);
    assert.deepEqual(em('2027-05-12', 'nereueaquiles'), []); // dúvida da Homilia XXVIII: não ligada
    assert.deepEqual(em('2027-05-16'), [26, 30]);           // Pentecostes
    assert.deepEqual(em('2027-07-03'), [26]);               // São Tomé
    assert.deepEqual(em('2027-10-18'), [17]);               // São Lucas
    assert.deepEqual(em('2027-12-27'), [22]);               // São João Evangelista
    assert.deepEqual(em('2026-12-31'), []);                 // São Silvestre não é oferecido na oitava do Natal (decisão D1)
    assert.deepEqual(em('2027-12-06', 'saonicolau'), []);   // São Nicolau: leituras da féria; a XVII não é ligada (D3)
    // Santa Rosa de Lima (festa) sem leituras próprias no acervo: o site mostra as do dia de semana
    // (Mt 20,1-16a em 2028), mas elas não são as da festa, e a Homilia XIX não aparece
    assert.ok(LD.resolver(cal.dia('2028-08-23'), null).substitutas);
    assert.deepEqual(em('2028-08-23'), []);
  });
  test('as 9 homilias publicadas antes da Etapa 2 continuam nos dias de antes', () => {
    for (const [id, l] of Object.entries(esperado)) {
      const obs = dias(id);
      for (const x of l) assert.ok(obs.includes(x), `${id}: deixou de aparecer em ${x}`);
      if (!['gregorio-hom-26', 'gregorio-hom-29', 'gregorio-hom-30'].includes(id)) assert.deepEqual(obs, l, `${id}: dias mudaram`);
    }
  });
  // dias calculados na etapa anterior (só as 9 homilias publicadas então)
  const esperado = {
    'gregorio-hom-08': anos.map((a) => `${a}-12-25`),
    // 3º domingo do Advento quando começa um Ano B + 2 de janeiro (exceto quando é domingo: Epifania)
    'gregorio-hom-07': anos.flatMap((a) => {
      const r = [];
      if (cal.dia(`${a}-01-02`).diaSemana !== 0) r.push(`${a}-01-02`);
      const adv3 = isoDeNumero(D(a).advento1 + 14);
      if (cal.dia(adv3).cicloDominical === 'B') r.push(adv3);
      return r;
    }),
    'gregorio-hom-26': anos.map((a) => isoDeNumero(D(a).divinaMisericordia)),
    'gregorio-hom-29': anos.map((a) => isoDeNumero(D(a).ascensao)),
    'gregorio-hom-30': anos.map((a) => isoDeNumero(D(a).pentecostes)),
    'gregorio-hom-10': anos.map((a) => isoDeNumero(D(a).epifania)),
    'gregorio-hom-16': anos.map((a) => isoDeNumero(D(a).quaresma1)),
    // Páscoa (todos os anos) + Sábado Santo nos anos B (a página mostra as leituras da Vigília, Mc 16,1-7)
    'gregorio-hom-21': anos.flatMap((a) => [isoDeNumero(D(a).pascoa), ...(cal.dia(isoDeNumero(D(a).pascoa)).cicloDominical === 'B' ? [isoDeNumero(D(a).sabadoSanto)] : [])]).sort(),
    // Santo André (quando 30/11 não é domingo) + 3º domingo do Tempo Comum, Ano A
    'gregorio-hom-05': anos.flatMap((a) => {
      const r = [];
      if (cal.dia(`${a}-11-30`).celebracao.id === 'santoandre') r.push(`${a}-11-30`);
      for (let n = numeroDia(a, 1, 1); n <= numeroDia(a, 12, 31); n++) {
        const d = cal.dia(isoDeNumero(n));
        if (d.tempo === 'comum' && d.semana === 3 && d.diaSemana === 0 && d.cicloDominical === 'A' && d.celebracao.tipo === 'temporal') r.push(isoDeNumero(n));
      }
      return r;
    }).sort(),
  };
  test('Santo André no domingo (2025, 2031…): a festa é omitida e a homilia não aparece', () => {
    assert.equal(cal.dia('2031-11-30').diaSemana, 0);
    assert.ok(!dias('gregorio-hom-05').includes('2031-11-30'));
  });
  test('dia sem correspondência: nenhuma homilia', () => {
    assert.deepEqual(HM.homiliasDoDia(LD.resolver(cal.dia('2026-11-06'), null)), []);
  });
});

describe('Homilias: documentos gerados', () => {
  test('AUDITORIA.md, INVENTARIO.md e inventario.json estão em dia com os dados', async () => {
    const { gerar } = await import('../homilias/gerar_documentos.mjs');
    const r = gerar();
    const ler = (n) => fs.readFileSync(path.join(DADOS, 'homilias', n), 'utf8');
    const msg = 'rode: node ferramentas/homilias/gerar_documentos.mjs';
    assert.equal(ler('inventario.json'), JSON.stringify(r.inventario, null, 1) + '\n', msg);
    assert.equal(ler('INVENTARIO.md'), r.inventarioMd, msg);
    assert.equal(ler('AUDITORIA.md'), r.auditoriaMd, msg);
  });
});

// ------------------------------------------------------------------------
describe('Homilias: Etapa 1 (latim, revisão final e tradução própria)', () => {
  const lerCamada = (arq) => {
    const [cab, ...corpo] = fs.readFileSync(arq, 'utf8').replace(/\n+$/, '').split('\n\n');
    const h = Object.fromEntries(cab.split('\n').map((l) => [l.split(' ')[0], l.slice(l.indexOf(' ') + 1)]));
    return { h, corpo: corpo.map((b) => { const [m, ...r] = b.split('\n'); return { marca: m.split(' ')[0], texto: r.join('\n') }; }) };
  };
  const lista = (s) => (s || '').split(',').map((x) => x.trim()).filter(Boolean);

  test('camada latim/: 41 arquivos de Migne, com colunas e numeração declaradas conferindo com o texto', () => {
    for (const a of arquivos) {
      const { h, corpo } = lerCamada(path.join(G, 'latim', a + '.txt'));
      assert.match(h['@fonte'], /Migne, Patrologia Latina 76/, a);
      assert.match(h['@camada'], /sem alteração de palavras/, a);
      const texto = corpo.map((b) => b.texto).join('\n');
      assert.deepEqual(texto.match(/\[(\d{4})\]/g)?.map((c) => c.slice(1, -1)) || [], lista(h['@colunas']), `${a}: colunas`);
      const nums = corpo.filter((b) => b.marca === '@paragrafo').map((b) => b.texto.match(/^(\d+)\. /)?.[1]).filter(Boolean);
      assert.deepEqual(nums, lista(h['@numeracao']), `${a}: numeração de Migne`);
      if (a === 'prefacio') continue;
      assert.deepEqual(corpo.slice(0, 3).map((b) => b.marca), ['@cabecalho', '@leitura-titulo', '@leitura'], a);
      assert.match(corpo[0].texto, /^(LIBER (PRIMUS|SECUNDUS)\. )?HOMILIA/, a);
      assert.match(corpo[1].texto, /^LECTIO/, a);
    }
  });

  test('camada revisada/: sem resíduos de digitalização nem de ferramentas nas 40 homilias', () => {
    const padroes = {
      'número de coluna de Migne': /(?<![\d,(])\b1[3-6]\d\d\b(?![\d,)])/,
      'número de seção no meio do parágrafo': /[a-zà-ú,;.!?»”] (?:[1-9]|[12]\d)\. [A-ZÁÉÍÓÚÂÊÔÀ]/,
      'referência desfigurada (ex.: "Sl 64 Sl 14")': /\b[1-3]?[A-Z][a-zó]{0,3} \d+ [1-3]?[A-Z][a-zó]{0,3} \d+/,
      'ibid. no lugar da referência': /\((?:ibid|ibidem)\b/i,
      'referência em abreviatura latina': /\((?:[1-4] ?)?(?:I{1,3}|IV)? ?[A-Z][a-z]{1,6}\.? [IVXLC]+[,.][^)]*\)/,
      'nota ao Decreto de Graciano': /\((?:Dist\.|De poenit|De consecr|\d+, q\.)/,
      'texto de ferramenta em inglês': /\b(?:Wait|Need|typo|final clean)\b/,
      'grafia anterior ao Acordo Ortográfico (trema)': /[üÜ]/,
    };
    for (let n = 1; n <= 40; n++) {
      const nn = String(n).padStart(2, '0');
      const t = blocos(path.join(G, 'revisada', `homilia-${nn}.txt`)).map((b) => b.texto).join('\n');
      for (const [nome, re] of Object.entries(padroes)) assert.ok(!re.test(t), `Homilia ${n}: ${nome}: «${(t.match(re) || [''])[0]}»`);
      const tit = blocos(path.join(G, 'revisada', `homilia-${nn}.txt`)).find((b) => b.marca === '@leitura-titulo').texto;
      assert.match(tit, /^Leitura do (santo )?Evangelho segundo (Mateus|Marcos|Lucas|João) \d+,\d+-\d+\.$/, `Homilia ${n}: forma do título da leitura`);
    }
  });

  test('colação: as 40 homilias têm estado final, referências conferidas e ressalvas; dúvida em aberto implica ressalva', () => {
    const estados = ['finalizada', 'finalizada-com-ressalvas', 'pendente-de-decisao', 'pendente-de-fonte-adicional'];
    assert.deepEqual(REG.colacao.map((c) => c.homilia).sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    for (const c of REG.colacao) {
      assert.ok(estados.includes(c.estado_final), `Homilia ${c.homilia}: estado_final`);
      assert.ok(c.referencias_biblicas && Array.isArray(c.ressalvas), `Homilia ${c.homilia}: referencias_biblicas e ressalvas`);
      // dúvida em aberto = sem decisão do responsável, ou decidida só provisoriamente ("pendente")
      const duvidas = REG.registros.filter((r) => r.homilia === c.homilia && r.tipo === 'duvida' && r.estado !== 'aplicada' && (!r.decisao || r.decisao.pendente));
      if (duvidas.length) assert.notEqual(c.estado_final, 'finalizada', `Homilia ${c.homilia}: tem dúvida em aberto (${duvidas.map((d) => d.id)})`);
    }
  });

  test('Etapa 1 encerrada: decisões do responsável registradas e aplicadas', () => {
    assert.equal(REG.etapas?.etapa_1?.estado, 'concluída');
    const ids = (f) => REG.registros.filter(f).map((r) => r.id).sort();
    // C4 e C5/C6: o que foi aprovado está aplicado; o que foi mantido continua como recebido
    for (const id of ['G01-07', 'G16-05', 'G21-06', 'G08-04', 'G08-05', 'G11-02', 'G12-06', 'G23-04', 'G30-06']) {
      const r = REG.registros.find((x) => x.id === id);
      assert.ok(r.estado === 'aplicada' && r.decisao, `${id}: decisão aprovada não aplicada`);
    }
    for (const id of ['G05-08', 'G20-14', 'G07-04', 'G19-04', 'G29-09', 'G30-04', 'G40-05', 'G26-08']) assert.ok(REG.registros.find((x) => x.id === id).decisao, `${id}: sem decisão registrada`);
    // nenhuma sugestão ou dúvida ficou sem decisão
    assert.deepEqual(ids((r) => ['sugestao', 'duvida'].includes(r.tipo) && !r.decisao), []);
    // C2: a frase da Homilia XXVI continua no texto e a nota editorial está no índice
    const h26 = INDICE.homilias.find((h) => h.numero === 26);
    assert.ok(h26.notas_editoriais?.some((n) => n.registro === 'G26-08' && /Migne/.test(n.texto) && /CCSL 141/.test(n.texto)));
    assert.ok(fs.readFileSync(path.join(G, 'revisada', 'homilia-26.txt'), 'utf8').includes('Isto é: assim como o Pai, Deus, enviou a mim, Deus'));
  });

  test('texto acrescentado por tradução própria na camada revisada está identificado no registro', () => {
    const lacuna = REG.registros.find((r) => r.id === 'G40-05');
    assert.match(lacuna.origem_do_texto, /tradução própria/);
    const c40 = REG.colacao.find((c) => c.homilia === 40);
    assert.equal(c40.estado_final, 'finalizada-com-ressalvas');
  });

  test('camada traducao-propria/: identificada, com notas, mesma estrutura do latim e fora do site', () => {
    const P = path.join(G, 'traducao-propria');
    const arqs = fs.readdirSync(P).filter((f) => /^homilia-\d\d\.txt$/.test(f));
    assert.ok(arqs.length >= 1);
    for (const f of arqs) {
      const { h, corpo } = lerCamada(path.join(P, f));
      assert.match(h['@camada'], /^tradução própria com auxílio de IA e revisão editorial/, f);
      assert.ok(fs.existsSync(path.join(P, f.replace('homilia-', 'notas-homilia-').replace('.txt', '.md'))), `${f}: notas`);
      const lat = lerCamada(path.join(G, 'latim', f)).corpo;
      const conta = (bs, m) => bs.filter((b) => b.marca === m).length;
      for (const m of ['@leitura-titulo', '@leitura', '@paragrafo']) assert.equal(conta(corpo, m), conta(lat, m), `${f}: blocos ${m}`);
      assert.ok(!/\[\d{4}\]/.test(corpo.map((b) => b.texto).join('\n')), `${f}: número de coluna`);
    }
    // o site lê só a camada revisada
    assert.ok(!JSON.stringify(INDICE).includes('traducao-propria'));
    assert.ok(!fs.readFileSync(path.join(RAIZ, 'js', 'homilias.js'), 'utf8').includes('traducao-propria'));
  });

  test('glossário da tradução própria remete a entradas que existem no registro', () => {
    const g = fs.readFileSync(path.join(G, 'traducao-propria', 'glossario.md'), 'utf8');
    const ids = new Set(REG.registros.map((r) => r.id));
    const citados = [...new Set(g.match(/G\d\d-\d\d/g))];
    assert.ok(citados.length > 20);
    for (const id of citados) assert.ok(ids.has(id), `glossário cita ${id}, que não existe`);
  });
});

// ------------------------------------------------------------------------
describe('Homilias: Etapa 2 (distribuição no calendário)', () => {
  const DIST = lerJSON('dados/homilias/gregorio-magno/distribuicao.json');
  const GREG = INDICE.homilias.filter((h) => h.obra === 'gregorio-homiliae-in-evangelia');
  // correspondências bíblicas publicadas antes da Etapa 2 (descrições escritas então)
  const ANTERIORES = new Set(['5:santo:santoandre', '5:TC-3-domingo-A', '7:ADV-3-domingo-B', '7:NAT-jan02', '8:natal-noite', '10:epifania',
    '16:QUA-1-domingo-A', '21:vigilia-pascal-B', '26:divinamisericordia-A', '26:divinamisericordia-B', '26:divinamisericordia-C', '29:ascensaodosenhor-B']);

  test('índice e DISTRIBUICAO.md estão em dia com distribuicao.json', async () => {
    const { gerarDistribuicao } = await import('../homilias/aplicar_distribuicao.mjs');
    const r = await gerarDistribuicao();
    const msg = 'rode: node ferramentas/homilias/aplicar_distribuicao.mjs';
    assert.equal(fs.readFileSync(path.join(DADOS, 'homilias', 'indice.json'), 'utf8'), JSON.stringify(r.indice, null, 2), msg);
    assert.equal(fs.readFileSync(path.join(DADOS, 'homilias', 'DISTRIBUICAO.md'), 'utf8'), r.md, msg);
  });

  test('as 40 homilias estão no índice e em distribuicao.json, com justificativa', () => {
    assert.deepEqual(GREG.map((h) => h.numero), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.deepEqual(DIST.homilias.map((d) => d.numero), Array.from({ length: 40 }, (_, i) => i + 1));
    for (const d of DIST.homilias) {
      assert.ok(d.justificativa && d.rubrica_ccsl && d.rubrica_migne, `Homilia ${d.numero}: falta justificativa ou rubrica`);
      for (const l of d.liturgicas) assert.ok(l.fundamento && l.descricao, `Homilia ${d.numero}: litúrgica sem fundamento`);
      for (const x of d.nao_usadas || []) assert.ok(x.alvo && x.motivo && ['parcial', 'paralela', 'tematica', 'ocasiao-antiga', 'fora-do-calendario', 'outra-celebracao', 'dados'].includes(x.classe), `Homilia ${d.numero}: recusa sem classe ou motivo`);
      for (const x of d.duvidas || []) assert.ok(x.questao && x.opcao_adotada, `Homilia ${d.numero}: dúvida incompleta`);
    }
  });

  test('Etapa 2 encerrada: decisões D1–D4 registradas e nenhuma dúvida em aberto', () => {
    assert.equal(REG.etapas?.etapa_2?.estado, 'concluída');
    assert.equal(REG.etapas.etapa_2.data_de_conclusao, '2026-11-07');
    const duvidas = DIST.homilias.flatMap((d) => (d.duvidas || []).map((x) => ({ ...x, numero: d.numero })));
    assert.deepEqual(duvidas.map((x) => [x.numero, x.decisao?.escolha]), [[9, '(a)'], [28, '(a)']]);
    const h = REG.historico.find((x) => x.data === '2026-11-07' && /D1–D4/.test(x.origem));
    assert.ok(h && /santo:saonicolau/.test(h.alteracoes) && /Jo 7,37-39/.test(h.alteracoes), 'histórico das decisões D1–D4');
    assert.equal(GREG.filter((x) => x.situacao === 'catalogo').map((x) => x.numero).join(), '4,31,32');
    assert.equal(GREG.filter((x) => x.estado === 'publicada').length, 40);
  });

  test('as 8 candidatas fortes da Etapa 1 foram verificadas e estão no calendário', () => {
    const fortes = DIST.homilias.filter((d) => d.candidata_forte_etapa_1).map((d) => d.numero);
    assert.deepEqual(fortes, [6, 12, 13, 19, 22, 23, 37, 40]);
    for (const n of fortes) assert.equal(GREG[n - 1].situacao, 'calendario');
  });

  test('toda correspondência bíblica publicada é plena pelos critérios declarados', () => {
    const lim = DIST.criterios.biblica_plena.limiares;
    for (const h of GREG) {
      const P = versiculos(h.pericope);
      for (const c of h.correspondencias.filter((x) => x.tipo === 'biblica')) {
        const R = versiculos(c.referencia_do_dia);
        const O = intersecao(P, R);
        const daHomilia = O.size / P.size, doDia = O.size / R.size;
        const plena = daHomilia >= lim.cobre_a_homilia || (doDia >= lim.cobre_o_dia && (R.size >= lim.minimo_de_versiculos_do_dia || daHomilia >= lim.minimo_da_homilia_se_curto));
        assert.ok(plena, `${h.id} × ${c.leituras}: ${O.size} versículos em comum (${Math.round(doDia * 100)}% do dia, ${Math.round(daHomilia * 100)}% da homilia)`);
      }
    }
  });

  test('nenhuma correspondência recusada ou em dúvida está no índice', () => {
    let n = 0;
    for (const d of DIST.homilias) {
      const h = GREG[d.numero - 1];
      const usadas = new Set(h.correspondencias.flatMap((c) => [c.leituras, c.celebracao, ...(c.chaves || [])]).filter(Boolean));
      for (const x of d.nao_usadas || []) {
        const alvos = [...x.alvo.matchAll(/\b(santo:[a-z]+|(?:TC|PAS|QUA|ADV)-[\w-]+?)(?=[\s/(]|$)/g)].map((m) => m[1]);
        const cel = x.alvo.match(/^([a-z]+) \(/);
        if (cel) alvos.push(cel[1]);
        for (const a of alvos) { n++; assert.ok(!usadas.has(a), `Homilia ${d.numero}: ${a} foi recusada, mas está no índice`); }
      }
    }
    assert.ok(n >= 30, 'poucas recusas reconhecidas: confira o formato de nao_usadas');
    // as duas dúvidas abertas: correspondências não usadas
    assert.ok(!GREG[8].correspondencias.some((c) => c.celebracao === 'saosilvestre'));
    assert.ok(!GREG[27].correspondencias.some((c) => c.celebracao === 'nereueaquiles'));
  });

  test('correspondência bíblica nova diz que a homilia não foi pregada para o dia', () => {
    for (const h of GREG) {
      for (const c of h.correspondencias.filter((x) => x.tipo === 'biblica')) {
        if (ANTERIORES.has(`${h.numero}:${c.leituras}`)) continue;
        assert.match(c.descricao, /não foi pregada para este dia/, `${h.id} × ${c.leituras}`);
      }
      for (const c of h.correspondencias) assert.ok(c.dia, `${h.id}: correspondência sem nome do dia`);
    }
  });

  test('correspondência litúrgica só para celebração do calendário atual, com a ocasião na rubrica crítica ou no texto', () => {
    const lit = GREG.filter((h) => h.correspondencias.some((c) => c.tipo === 'liturgica')).map((h) => h.numero);
    assert.deepEqual(lit, [5, 8, 10, 11, 12, 16, 21, 27, 29, 30, 37]);
    for (const n of lit) {
      const d = DIST.homilias[n - 1];
      for (const l of d.liturgicas) assert.ok(/rubrica da edição crítica|texto/.test(l.fundamento), `Homilia ${n}: fundamento ${l.fundamento}`);
      if (d.liturgicas.some((l) => l.celebracao && !['natal', 'epifania', 'pascoa', 'ascensaodosenhor', 'pentecostes'].includes(l.celebracao))) {
        assert.match(d.rubrica_ccsl, /die natalis/, `Homilia ${n}: santo sem o natalício na rubrica crítica`);
      }
    }
  });

  test('catálogo: rótulos dos dias juntam os anos sem perder "todo ano"', () => {
    assert.deepEqual(HM.juntarRotulos(['Sexta-feira da 34ª semana do Tempo Comum, Ano I', 'Sexta-feira da 34ª semana do Tempo Comum, Ano II']), ['Sexta-feira da 34ª semana do Tempo Comum (anos I e II)']);
    assert.deepEqual(HM.juntarRotulos(['Ascensão do Senhor', 'Ascensão do Senhor, Ano B']), ['Ascensão do Senhor']);
    assert.deepEqual(HM.juntarRotulos(['3º Domingo do Advento, Ano B', '2 de janeiro (tempo do Natal)']), ['3º Domingo do Advento, Ano B', '2 de janeiro (tempo do Natal)']);
    assert.deepEqual(HM.ondeAparece(GREG[28]), ['Ascensão do Senhor', 'São Marcos Evangelista (25/04)', 'Conversão de São Paulo, Apóstolo (25/01)']);
  });

  test('Liturgia Diária: todo Evangelho está em seção própria (não dentro da aclamação)', () => {
    const PROCL = /^(?:\*\*)?Proclamação do Evangelho de Jesus Cristo segundo /;
    let vistos = 0;
    for (const arq of new Set(Object.values(LDI.leituras))) {
      const p = path.join(DADOS, 'liturgia-diaria', arq + '.txt');
      if (!fs.existsSync(p)) continue;
      let secao = '';
      for (const l of fs.readFileSync(p, 'utf8').split('\n')) {
        if (l.startsWith('@secao')) secao = l;
        else if (PROCL.test(l)) { vistos++; assert.match(secao, /^@secao Evangelho/, `${arq}: Evangelho dentro de "${secao}"`); }
      }
    }
    assert.ok(vistos > 300);
  });
});
