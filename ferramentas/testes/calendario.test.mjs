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
 * exceção. Ver também ferramentas/testes/7Erros.md.
 *
 * O cálculo de referência roda num processo separado que só pode ler o
 * próprio arquivo (referencia-isolada.mjs): ele não tem acesso ao motor do
 * site nem aos dados do site.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CalendarioLiturgico, datasDoAno, isoDeNumero } from '../../js/liturgical-calendar.js';
import { referenciaIsolada } from './referencia-isolada.mjs';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const TABELA = JSON.parse(fs.readFileSync(path.join(AQUI, 'dados', 'tabela-temporaria-cnbb.json'), 'utf8'));
const SANTORAL = JSON.parse(fs.readFileSync(path.join(RAIZ, 'dados', 'calendario', 'santoral.json'), 'utf8'));
const cal = new CalendarioLiturgico(SANTORAL);

const PRIMEIRO_ANO_TABELA = Math.min(...TABELA.anos.map((a) => a.ano));
const ULTIMO_ANO_TABELA = Math.max(...TABELA.anos.map((a) => a.ano));
const ATE = Number(process.env.CALENDARIO_TESTE_ATE || 2100);

// referência calculada uma vez, no processo isolado
const ANOS = Array.from({ length: Math.max(ATE, ULTIMO_ANO_TABELA) - PRIMEIRO_ANO_TABELA + 1 }, (_, i) => PRIMEIRO_ANO_TABELA + i);
const REF = referenciaIsolada(ANOS);
const tabelaDoAno = (ano) => REF[ano].tabela;
const diaDaSemana = (s) => new Date(s + 'T00:00:00Z').getUTCDay();

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

// ------------------------------------------------------------------------
// Particularidades legítimas: parecem erros, mas são regras do calendário.
const LETRAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const bissexto = (a) => (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
const somaDias = (s, n) => new Date(Date.parse(s + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
/** letra do calendário de uma data (1º/jan = A), contando o ano como comum, como no livro */
const letraDaData = (iso) => {
  const [, m, d] = iso.split('-').map(Number);
  const diaDoAno = Math.round((Date.UTC(2001, m - 1, d) - Date.UTC(2001, 0, 1)) / 86400000);
  return LETRAS[diaDoAno % 7];
};
/** primeiro domingo, segundo o SITE, a partir de uma data */
const primeiroDomingoDoSite = (iso) => { let s = iso; while (cal.dia(s).diaSemana !== 0) s = somaDias(s, 1); return s; };

const PARTICULARIDADES = {
  ascensao_no_domingo: (l, site) => [
    diaDaSemana(l.ascensao_brasil) === 0 || 'Ascensão no Brasil fora do domingo',
    diaDaSemana(l.ascensao_calendario_geral) === 4 || 'Ascensão do Calendário Geral fora da quinta-feira',
    somaDias(l.ascensao_calendario_geral, 3) === l.ascensao_brasil || 'domingo não é 3 dias depois da quinta-feira',
    site.ascensao_brasil === l.ascensao_brasil || 'site com outra data',
    cal.dia(l.ascensao_calendario_geral).temporal.celebracao !== 'ascensaodosenhor' || 'site celebra a Ascensão na quinta-feira',
  ],
  duas_letras_ciclo_dominical: (l, site) => {
    const [a, b] = l.ciclo_dominical.split('-');
    return [
      'ABC'.indexOf(b) === ('ABC'.indexOf(a) + 1) % 3 || `ciclo ${l.ciclo_dominical} não avança A→B→C`,
      site.ciclo_dominical === l.ciclo_dominical || 'site com outro ciclo',
    ];
  },
  duas_letras_dominicais_bissexto: (l) => {
    const ld = l.letra_dominical.toLowerCase();
    const r = [ld.length === (bissexto(l.ano) ? 2 : 1) || 'número de letras não corresponde ao ano bissexto'];
    r.push(letraDaData(primeiroDomingoDoSite(`${l.ano}-01-01`)) === ld[0] || '1ª letra não indica os domingos de janeiro no site');
    if (ld.length === 2) r.push(letraDaData(primeiroDomingoDoSite(`${l.ano}-03-01`)) === ld[1] || '2ª letra não indica os domingos depois de 24/2 no site');
    return r;
  },
  salto_semanas_tempo_comum: (l, site) => [
    [1, 2].includes(l.semana_tc_depois_de_pentecostes - l.semana_tc_antes_da_quaresma) || 'salto diferente de 0 ou 1 semana omitida',
    site.semana_tc_antes_da_quaresma === l.semana_tc_antes_da_quaresma && site.semana_tc_depois_de_pentecostes === l.semana_tc_depois_de_pentecostes || 'site com outra numeração',
  ],
  corpus_na_quinta: (l, site) => [
    diaDaSemana(l.corpus_christi) === 4 || 'Corpus Christi fora da quinta-feira',
    site.corpus_christi === l.corpus_christi && cal.dia(l.corpus_christi).temporal.celebracao === 'corpuschristi' || 'site com outra data',
  ],
  advento_27nov_3dez: (l, site) => [
    l.primeiro_domingo_do_advento >= `${l.ano}-11-27` && l.primeiro_domingo_do_advento <= `${l.ano}-12-03` || 'fora de 27/11–3/12',
    site.primeiro_domingo_do_advento === l.primeiro_domingo_do_advento || 'site com outra data',
  ],
};

describe('Particularidades legítimas: valem em todos os anos e o site as reproduz', () => {
  test('toda particularidade registrada tem verificação', () => {
    assert.deepEqual(TABELA.particularidades_legitimas.map((p) => p.id).filter((id) => !PARTICULARIDADES[id]), []);
  });
  for (const p of TABELA.particularidades_legitimas) {
    test(p.nome, () => {
      assert.equal(p.tipo, 'particularidade legítima');
      const erros = [];
      const linhas = [...TABELA.anos, ...ANOS.filter((a) => a > ULTIMO_ANO_TABELA).map((a) => ({ ano: a, ...tabelaDoAno(a) }))];
      for (const l of linhas) {
        for (const r of PARTICULARIDADES[p.id](l, siteDoAno(l.ano).valores)) if (r !== true) erros.push(`${l.ano}: ${r}`);
      }
      assert.deepEqual(erros, []);
    });
  }
});

// ------------------------------------------------------------------------
describe('Documentação: 7Erros.md descreve todas as divergências e particularidades', () => {
  const md = fs.readFileSync(path.join(AQUI, '7Erros.md'), 'utf8');
  test('cada divergência dos dados está no documento, com o valor do PDF e o correto', () => {
    for (const dv of TABELA.divergencias_documentadas) {
      assert.ok(md.includes(`\`${dv.valor_pdf}\``) && md.includes(`\`${dv.valor_correto}\``), `${dv.ano} ${dv.campo} ausente do 7Erros.md`);
    }
  });
  test('o documento não lista divergências a mais nem a menos', () => {
    const secao = md.split('## Os 7 erros')[1].split('\n## ')[0];
    const linhas = secao.split('\n').filter((l) => /^\| \d+ \| \d{4} \|/.test(l));
    assert.equal(linhas.length, TABELA.divergencias_documentadas.length);
  });
  test('cada particularidade legítima está no documento', () => {
    for (const p of TABELA.particularidades_legitimas) assert.ok(md.includes(`| ${p.nome} |`), `${p.nome} ausente do 7Erros.md`);
  });
});
