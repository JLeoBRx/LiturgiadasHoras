/**
 * Regras próprias do calendário litúrgico no Brasil (CNBB).
 *
 * Executar:  node --test "ferramentas/testes/*.test.mjs"
 *
 * 1. Datas confirmadas em fontes publicadas (dados/regras-brasil-cnbb.json):
 *    o site e a referência isolada têm de dar exatamente essas datas.
 * 2. Para todos os anos da Tabela Temporária até CALENDARIO_TESTE_ATE
 *    (padrão 2100), cada celebração com regra própria aparece no site uma
 *    única vez, no dia que a referência isolada calcula.
 * Explicação e fontes: ferramentas/testes/REGRAS-DO-BRASIL.md.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CalendarioLiturgico, isoDeNumero } from '../../js/liturgical-calendar.js';
import { referenciaIsolada } from './referencia-isolada.mjs';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const REGRAS = JSON.parse(fs.readFileSync(path.join(AQUI, 'dados', 'regras-brasil-cnbb.json'), 'utf8'));
const TABELA = JSON.parse(fs.readFileSync(path.join(AQUI, 'dados', 'tabela-temporaria-cnbb.json'), 'utf8'));
const cal = new CalendarioLiturgico(JSON.parse(fs.readFileSync(path.join(RAIZ, 'dados', 'calendario', 'santoral.json'), 'utf8')));

const DE = Math.min(...TABELA.anos.map((a) => a.ano));
const ATE = Number(process.env.CALENDARIO_TESTE_ATE || 2100);
const anosConfirmados = REGRAS.datas_confirmadas.map((c) => Number(c.data.slice(0, 4)));
const ANOS = [...new Set([...Array.from({ length: ATE - DE + 1 }, (_, i) => DE + i), ...anosConfirmados])].sort((a, b) => a - b);
const REF = referenciaIsolada(ANOS);
const IDS = REGRAS.regras.map((r) => r.id);

/** Em que dia(s) do ano o site coloca cada celebração. */
const cacheSite = new Map();
function siteNoAno(ano) {
  if (cacheSite.has(ano)) return cacheSite.get(ano);
  const onde = Object.fromEntries(IDS.map((id) => [id, []]));
  for (const [n, dia] of cal.ano(ano)) {
    const id = dia.celebracao && dia.celebracao.id;
    if (id in onde) onde[id].push(isoDeNumero(n));
  }
  cacheSite.set(ano, onde);
  return onde;
}

describe('Regras do Brasil: cada regra do arquivo é calculada pela referência', () => {
  test('toda regra documentada tem cálculo na referência', () => {
    const semCalculo = IDS.filter((id) => !(id in REF[DE].brasil));
    assert.deepEqual(semCalculo, []);
  });
});

describe('Regras do Brasil: datas confirmadas em fontes publicadas', () => {
  for (const c of REGRAS.datas_confirmadas) {
    test(`${c.data} · ${c.id}`, () => {
      const ano = Number(c.data.slice(0, 4));
      assert.ok(c.fonte && c.url, 'cada data confirmada precisa de fonte e endereço');
      assert.equal(REF[ano].brasil[c.id], c.data, 'a referência isolada discorda da fonte');
      assert.deepEqual(siteNoAno(ano)[c.id], [c.data], 'o site discorda da fonte');
    });
  }
});

describe(`Regras do Brasil: site × referência isolada, ${DE}–${ATE}`, () => {
  for (const id of IDS) {
    test(id, () => {
      const erros = [];
      for (const ano of ANOS) {
        const esperado = [REF[ano].brasil[id]];
        const site = siteNoAno(ano)[id];
        if (JSON.stringify(site) !== JSON.stringify(esperado)) erros.push(`${ano}: site ${site.join(', ') || '—'} × referência ${esperado[0]}`);
      }
      assert.deepEqual(erros, []);
    });
  }
});

describe('Regras do Brasil: casos que o motor errava antes da conferência', () => {
  test('29/6 na segunda-feira: São Pedro e São Paulo no domingo 28/6 (2026), não em 5/7', () => {
    assert.equal(cal.dia('2026-06-28').celebracao.id, 'pedroepaulo');
    assert.notEqual(cal.dia('2026-07-05').celebracao.id, 'pedroepaulo');
  });
  test('1º/11 no sábado: Todos os Santos no sábado e Finados no domingo 2/11 (2025)', () => {
    assert.equal(cal.dia('2025-11-01').celebracao.id, 'todosossantos');
    assert.equal(cal.dia('2025-11-02').celebracao.id, 'fieisdefuntos');
    assert.notEqual(cal.dia('2025-11-03').celebracao.id, 'fieisdefuntos');
  });
  test('as correções estão registradas no arquivo de regras', () => {
    assert.deepEqual(REGRAS.correcoes_no_motor.map((c) => c.id).sort(), ['pedroepaulo', 'todosossantos']);
  });
});
