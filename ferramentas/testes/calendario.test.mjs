/**
 * Testes automáticos do calendário litúrgico (js/liturgical-calendar.js).
 *
 * Executar:   node --test "ferramentas/testes/*.test.mjs"
 * Mais anos:  CALENDARIO_TESTE_ATE=2200 node --test "ferramentas/testes/*.test.mjs"
 *
 * Base: Tabela Temporária 1994–2023 da Liturgia das Horas (vol. II, Brasil),
 * com os VALORES OFICIALMENTE CORRETOS em ferramentas/testes/dados/
 * tabela-temporaria-cnbb.json. Os 7 erros do PDF estão documentados nesse
 * arquivo e o teste exige que o site NÃO os reproduza: eles nunca valem como
 * exceção. Ver também o documento "7Erros".
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CalendarioLiturgico, datasDoAno, isoDeNumero } from '../../js/liturgical-calendar.js';
import { tabelaDoAno, diaDaSemana } from './referencia-calendario.mjs';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const TABELA = JSON.parse(fs.readFileSync(path.join(AQUI, 'dados', 'tabela-temporaria-cnbb.json'), 'utf8'));
const SANTORAL = JSON.parse(fs.readFileSync(path.join(RAIZ, 'dados', 'calendario', 'santoral.json'), 'utf8'));
const cal = new CalendarioLiturgico(SANTORAL);

const ULTIMO_ANO_TABELA = Math.max(...TABELA.anos.map((a) => a.ano));
const ATE = Number(process.env.CALENDARIO_TESTE_ATE || 2100);

/** Valores que o SITE produz para um ano, com os mesmos nomes da tabela. */
function siteDoAno(ano) {
  const D = datasDoAno(ano);
  const s = (n) => isoDeNumero(n);
  const ultimoTC = s(D.cinzas - 1);
  const primeiroTC = s(D.pentecostes + 1);
  const diaUltimoTC = cal.dia(ultimoTC);
  const diaPrimeiroTC = cal.dia(primeiroTC);
  return {
    valores: {
      ciclo_dominical: `${cal.dia(`${ano}-01-15`).cicloDominical}-${cal.dia(s(D.advento1)).cicloDominical}`,
      ciclo_ferial: cal.dia(`${ano}-07-15`).cicloFerial,
      quarta_feira_de_cinzas: s(D.cinzas),
      pascoa: s(D.pascoa),
      ascensao_brasil: s(D.ascensao),
      pentecostes: s(D.pentecostes),
      corpus_christi: s(D.corpusChristi),
      ultimo_dia_tc_antes_da_quaresma: ultimoTC,
      semana_tc_antes_da_quaresma: diaUltimoTC.semana,
      primeiro_dia_tc_depois_de_pentecostes: primeiroTC,
      semana_tc_depois_de_pentecostes: diaPrimeiroTC.semana,
      primeiro_domingo_do_advento: s(D.advento1),
    },
    // o que o site diz sobre esses dias (tempo litúrgico e celebração)
    conferencias: [
      ['Quarta-feira de Cinzas', cal.dia(s(D.cinzas)).temporal.celebracao === 'cinzas'],
      ['último dia do Tempo Comum é Tempo Comum', diaUltimoTC.tempo === 'comum'],
      ['primeiro dia depois de Pentecostes é Tempo Comum', diaPrimeiroTC.tempo === 'comum'],
      ['Pentecostes ainda é Tempo Pascal', cal.dia(s(D.pentecostes)).temporal.celebracao === 'pentecostes'],
      ['Ascensão no domingo (Brasil)', cal.dia(s(D.ascensao)).temporal.celebracao === 'ascensaodosenhor'],
      ['Corpus Christi na quinta-feira', cal.dia(s(D.corpusChristi)).temporal.celebracao === 'corpuschristi'],
      ['1º domingo do Advento', cal.dia(s(D.advento1)).tempo === 'advento' && cal.dia(s(D.advento1)).semana === 1],
    ],
  };
}

function comparar(esperado, obtido, campos) {
  const erros = [];
  for (const c of campos) {
    if (String(obtido[c]) !== String(esperado[c])) erros.push(`${c}: esperado ${esperado[c]}, site ${obtido[c]}`);
  }
  return erros;
}

const CAMPOS_DO_SITE = Object.keys(siteDoAno(2000).valores);

// ------------------------------------------------------------------------
describe('Dados de referência: cada ano confere com o cálculo independente', () => {
  for (const linha of TABELA.anos) {
    test(`${linha.ano}`, () => {
      const ref = tabelaDoAno(linha.ano);
      const erros = comparar(ref, linha, TABELA.campos);
      assert.deepEqual(erros, [], `Valor de referência incoerente em ${linha.ano} (erro de digitação ao copiar a tabela?)`);
      // dias da semana que não podem variar
      assert.equal(diaDaSemana(linha.quarta_feira_de_cinzas), 3, 'Cinzas deve ser quarta-feira');
      assert.equal(diaDaSemana(linha.pascoa), 0, 'Páscoa deve ser domingo');
      assert.equal(diaDaSemana(linha.pentecostes), 0, 'Pentecostes deve ser domingo');
      assert.equal(diaDaSemana(linha.ascensao_brasil), 0, 'Ascensão no Brasil deve ser domingo');
      assert.equal(diaDaSemana(linha.corpus_christi), 4, 'Corpus Christi deve ser quinta-feira');
      assert.equal(diaDaSemana(linha.primeiro_domingo_do_advento), 0, '1º domingo do Advento deve ser domingo');
    });
  }
});

// ------------------------------------------------------------------------
describe(`Tabela Temporária ${TABELA.anos[0].ano}–${ULTIMO_ANO_TABELA}: o site produz os valores oficialmente corretos`, () => {
  for (const linha of TABELA.anos) {
    test(`${linha.ano}`, () => {
      const site = siteDoAno(linha.ano);
      assert.deepEqual(comparar(linha, site.valores, CAMPOS_DO_SITE), []);
      for (const [nome, ok] of site.conferencias) assert.ok(ok, `${linha.ano}: ${nome}`);
    });
  }
});

// ------------------------------------------------------------------------
describe('Divergências documentadas do PDF: nunca aceitas como resultado', () => {
  for (const dv of TABELA.divergencias_documentadas) {
    test(`${dv.ano} · ${dv.campo}: PDF ${dv.valor_pdf} × correto ${dv.valor_correto}`, () => {
      assert.equal(dv.tipo, 'erro documental');
      assert.notEqual(dv.valor_pdf, dv.valor_correto, 'divergência sem diferença');
      const linha = TABELA.anos.find((a) => a.ano === dv.ano);
      assert.ok(linha, `ano ${dv.ano} ausente da tabela`);
      assert.equal(linha[dv.campo], dv.valor_correto, 'a tabela de referência deve guardar o valor correto, não o do PDF');
      assert.equal(String(tabelaDoAno(dv.ano)[dv.campo]), dv.valor_correto, 'o cálculo independente deve confirmar o valor correto');
      const site = siteDoAno(dv.ano).valores[dv.campo];
      assert.notEqual(String(site), dv.valor_pdf, 'o site reproduziu o erro do PDF');
      assert.equal(String(site), dv.valor_correto);
    });
  }
});

// ------------------------------------------------------------------------
describe(`Anos posteriores à tabela (${ULTIMO_ANO_TABELA + 1}–${ATE}): site × cálculo independente`, () => {
  test(`todos os anos de ${ULTIMO_ANO_TABELA + 1} a ${ATE}`, () => {
    const erros = [];
    for (let ano = ULTIMO_ANO_TABELA + 1; ano <= ATE; ano++) {
      const site = siteDoAno(ano);
      erros.push(...comparar(tabelaDoAno(ano), site.valores, CAMPOS_DO_SITE).map((e) => `${ano} ${e}`));
      for (const [nome, ok] of site.conferencias) if (!ok) erros.push(`${ano} ${nome}`);
    }
    assert.deepEqual(erros, []);
  });
});
