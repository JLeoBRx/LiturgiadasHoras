/**
 * Independência entre o cálculo de referência e o motor do site.
 *
 * Executar:  node --test "ferramentas/testes/*.test.mjs"
 *
 * Os testes do calendário só provam algo se a referência não usar o código
 * nem os dados do motor. Aqui isso é verificado de três formas:
 *  1. o arquivo da referência não importa nem lê nada;
 *  2. o processo isolado onde ela roda é de fato bloqueado ao tentar ler o
 *     motor (js/) ou os dados do site (dados/) — teste de controle;
 *  3. o motor também não lê os dados dos testes.
 * E, como prova prática, os dois algoritmos de Páscoa (Gauss na referência,
 * Meeus/Jones/Butcher no motor) concordam em todo o calendário gregoriano.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pascoa, isoDeNumero } from '../../js/liturgical-calendar.js';
import { ARQUIVO_REFERENCIA, executarIsolado } from './referencia-isolada.mjs';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const semComentarios = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');

describe('Independência do cálculo de referência', () => {
  test('o arquivo da referência não importa nem lê nada', () => {
    const codigo = semComentarios(fs.readFileSync(ARQUIVO_REFERENCIA, 'utf8'));
    for (const proibido of [/\bimport\b/, /\brequire\s*\(/, /\bfetch\s*\(/, /\bprocess\b/, /\breadFile/, /\bglobalThis\b/]) {
      assert.doesNotMatch(codigo, proibido, `referencia-calendario.mjs usa ${proibido}`);
    }
  });

  test('controle: o processo isolado não consegue carregar o motor do site', () => {
    const motor = pathToFileURL(path.join(RAIZ, 'js', 'liturgical-calendar.js')).href;
    assert.throws(() => executarIsolado(`await import(${JSON.stringify(motor)});`), /ERR_ACCESS_DENIED/);
  });

  test('controle: o processo isolado não consegue ler os dados do site nem os dos testes', () => {
    for (const arq of [path.join(RAIZ, 'dados', 'calendario', 'santoral.json'), path.join(AQUI, 'dados', 'tabela-temporaria-cnbb.json')]) {
      assert.throws(() => executarIsolado(`const fs = await import('node:fs'); fs.readFileSync(${JSON.stringify(arq)});`), /ERR_ACCESS_DENIED/);
    }
  });

  test('o motor do site não lê a referência nem os dados dos testes', () => {
    for (const f of fs.readdirSync(path.join(RAIZ, 'js'))) {
      const codigo = semComentarios(fs.readFileSync(path.join(RAIZ, 'js', f), 'utf8'));
      assert.doesNotMatch(codigo, /ferramentas|testes\/|referencia|tabela-temporaria|regras-brasil/, `js/${f}`);
    }
  });

  test('Páscoa: motor e referência (algoritmos diferentes) concordam de 1583 a 4099', () => {
    const url = pathToFileURL(ARQUIVO_REFERENCIA).href;
    const ref = JSON.parse(executarIsolado(`
      const r = await import(${JSON.stringify(url)});
      const out = {};
      for (let a = 1583; a <= 4099; a++) out[a] = r.iso(r.pascoaGauss(a));
      process.stdout.write(JSON.stringify(out));
    `));
    const erros = [];
    for (let a = 1583; a <= 4099; a++) if (isoDeNumero(pascoa(a)) !== ref[a]) erros.push(`${a}: motor ${isoDeNumero(pascoa(a))} × referência ${ref[a]}`);
    assert.deepEqual(erros, []);
  });
});
