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
      const rec = blocos(path.join(G, 'recebida', `homilia-${nn}.txt`)).map((b) => ({ ...b }));
      for (const r of REG.registros.filter((x) => x.homilia === n && x.estado === 'aplicada')) rec[r.bloco].texto = rec[r.bloco].texto.replace(r.antes, r.depois);
      const esperado = rec.flatMap((b) => b.texto.split('\n\n').map((t, i) => ({ marca: i ? '@paragrafo' : b.marca, texto: t })));
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
      assert.ok(h.correspondencias?.length, `${h.id}: sem correspondência`);
    }
  });
  test('a passagem comentada confere com o título da leitura no próprio texto', async () => {
    for (const h of PUBLICADAS) {
      const t = await HM.carregarTexto(h);
      const m = h.pericope.match(/^\S+ (\d+),(\d+)-(\d+)$/);
      assert.ok(m, `${h.id}: perícope em formato inesperado`);
      assert.match(t.leituraTitulo.replace(/\s/g, ''), new RegExp(`${m[1]},${m[2]}-${m[3]}`), `${h.id}: título da leitura não traz ${h.pericope}`);
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
  const esperado = {
    'gregorio-hom-08': anos.map((a) => `${a}-12-25`),
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
  for (const h of PUBLICADAS) {
    test(`${h.id}: só nos dias com correspondência`, () => {
      assert.ok(esperado[h.id], `defina os dias esperados de ${h.id} neste teste`);
      assert.deepEqual(dias(h.id), esperado[h.id]);
    });
  }
  test('Santo André no domingo (2025, 2031…): a festa é omitida e a homilia não aparece', () => {
    assert.equal(cal.dia('2031-11-30').diaSemana, 0);
    assert.ok(!dias('gregorio-hom-05').includes('2031-11-30'));
  });
  test('dia sem correspondência: nenhuma homilia', () => {
    assert.deepEqual(HM.homiliasDoDia(LD.resolver(cal.dia('2026-11-06'), null)), []);
  });
});
