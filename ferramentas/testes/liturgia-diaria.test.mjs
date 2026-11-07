/**
 * Liturgia Diária: correções do índice de leituras e das referências.
 *
 * Executar:  node --test "ferramentas/testes/*.test.mjs"
 *
 * 1. Leituras de santos: o índice foi gerado com a ajuda de uma tabela
 *    estrangeira (Liturgical Calendar API, lecionário em inglês), que não é a
 *    referência oficial brasileira. Nenhuma "leitura própria" de santo vinda
 *    dela pode cair num arquivo de domingo ou dia do tempo. São Nicolau (6/12),
 *    sem leitura própria confirmada, usa as leituras da féria.
 * 2. Referências: o Evangelho de cada arquivo usado pelo site é identificado
 *    com o livro (ex.: "Jo 7,37-39", não "7,37-39").
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as dados from '../../js/dados.js';
import { CalendarioLiturgico } from '../../js/liturgical-calendar.js';
import * as LD from '../../js/daily-liturgy.js';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DADOS = path.join(RAIZ, 'dados');
dados.definirCarregador(async (c) => { try { return fs.readFileSync(path.join(RAIZ, c), 'utf8'); } catch { return null; } });
await LD.iniciar();
const lerJSON = (p) => JSON.parse(fs.readFileSync(path.join(RAIZ, p), 'utf8'));
const LDI = lerJSON('dados/liturgia-diaria/indice.json');
const cal = new CalendarioLiturgico(lerJSON('dados/calendario/santoral.json'));
const TEMPORAL = /^(TC|ADV|QUA|PAS|NAT|SS)-/;
const arquivo = (rel) => fs.readFileSync(path.join(DADOS, 'liturgia-diaria', rel + '.txt'), 'utf8');

describe('Liturgia Diária: leituras próprias de santos', () => {
  test('São Nicolau (6/12) não tem leitura própria no índice: a memória usa as leituras da féria', () => {
    assert.equal(LDI.leituras['santo:saonicolau'], undefined, 'o mapeamento para o 14º domingo do Tempo Comum, Ano C, voltou');
    assert.ok(LDI.missal['santo:saonicolau'], 'as orações próprias do Missal continuam');
    let vistos = 0;
    for (let a = 2025; a <= 2045; a++) {
      const d = cal.dia(`${a}-12-06`);
      if (!d.opcoes.some((o) => o.id === 'saonicolau')) { assert.equal(d.diaSemana, 0, `${a}: sem a memória num dia de semana`); continue; }
      vistos++;
      assert.equal(d.tempo, 'advento');
      const feria = LD.resolver(d, null), memoria = LD.resolver(d, 'saonicolau');
      assert.match(memoria.chave, /^ADV-\d-\w+$/, `${a}: a memória não usa a féria do Advento`);
      assert.equal(memoria.chave, feria.chave);
      assert.deepEqual(memoria.alternativas, []);
      assert.ok(!memoria.substitutas);
    }
    assert.ok(vistos >= 15);
  });

  test('nenhuma leitura de santo vinda da tabela estrangeira aponta para um domingo ou dia do tempo', () => {
    const temporais = new Set(Object.entries(LDI.leituras).filter(([k]) => TEMPORAL.test(k)).map(([, v]) => v));
    const estrangeiras = Object.keys(LDI.leituras).filter((k) => k.startsWith('santo:') && LDI.metodo[k] === 'tabela-aberta');
    assert.ok(estrangeiras.length > 10);
    for (const k of estrangeiras) assert.ok(!temporais.has(LDI.leituras[k]), `${k} -> ${LDI.leituras[k]}, arquivo de um dia do tempo`);
    // e o gerador do índice mantém a exclusão e a regra (se for rodado de novo, o erro não volta)
    const gerador = fs.readFileSync(path.join(RAIZ, 'ferramentas', 'gerar_indice_liturgia_diaria.py'), 'utf8');
    assert.match(gerador, /SEM_LEITURAS_PROPRIAS = \{[^}]*"santo:saonicolau"/);
    assert.match(gerador, /TEMPORAL\.match\(k\)/);
  });
});

describe('Liturgia Diária: referências do Evangelho', () => {
  test('Pentecostes: o Evangelho da Missa da vigília é identificado como Jo 7,37-39', () => {
    const t = arquivo(LDI.leituras.pentecostes);
    const evs = [...t.matchAll(/^@secao Evangelho\s*\|\s*(.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(evs, ['Jo 7,37-39', 'Jo 7,37-39', 'Jo 20,19-23']);
    // a proclamação confirma o livro; o texto da leitura não muda
    assert.equal((t.match(/segundo\*\* \*\*João\*\* \{7,37-39\}/g) || []).length, 2);
    for (const variante of ['leituras/At2111b1Cor123b71213Jo201923', 'leituras/At2111c1Cor123b71213Jo201923']) {
      assert.ok(!/^@secao Evangelho \| 7,37-39$/m.test(arquivo(variante)), `${variante}: referência sem o livro`);
    }
  });

  test('todo Evangelho dos arquivos usados pelo site traz o livro (exceção registrada, para decisão)', () => {
    // Pendente, registrado em dados/homilias/gregorio-magno/distribuicao.json (lecionario):
    // quinta-feira da 9ª semana do Tempo Comum, Ano I — "12,28b-34", sem "Mc".
    const PENDENTES = new Set(['leituras/Tb6101171917849aMc1228b34|12,28b-34']);
    const semLivro = [];
    for (const arq of new Set(Object.values(LDI.leituras))) {
      if (!fs.existsSync(path.join(DADOS, 'liturgia-diaria', arq + '.txt'))) continue;
      for (const m of arquivo(arq).matchAll(/^@secao Evangelho[^|\n]*\|\s*(.+)$/gm)) {
        const ref = m[1].trim();
        if (!/^(Mt|Mc|Lc|Jo)\s?\d/.test(ref) && !PENDENTES.has(`${arq}|${ref}`)) semLivro.push(`${arq}: ${ref}`);
      }
    }
    assert.deepEqual(semLivro, []);
  });
});
