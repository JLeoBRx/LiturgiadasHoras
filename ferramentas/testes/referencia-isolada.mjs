/**
 * Roda o cálculo de referência (referencia-calendario.mjs) num processo
 * SEPARADO, com o modelo de permissões do Node: esse processo só pode ler o
 * próprio arquivo da referência. Se a referência tentar importar o motor do
 * site (js/), ler o santoral (dados/) ou a tabela de testes, o processo falha
 * com ERR_ACCESS_DENIED e os testes param.
 *
 * Assim, a independência entre a referência e o motor é verificada a cada
 * execução dos testes, e não apenas prometida num comentário.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
export const ARQUIVO_REFERENCIA = path.join(AQUI, 'referencia-calendario.mjs');

const [maior, menor] = process.versions.node.split('.').map(Number);
// Node 22.13+ e 23.5+: --permission; versões anteriores: --experimental-permission
const FLAG = maior > 23 || (maior === 23 && menor >= 5) || (maior === 22 && menor >= 13) ? '--permission' : '--experimental-permission';

/** Executa um trecho de código ESM no processo restrito; devolve stdout ou lança o erro. */
export function executarIsolado(codigo) {
  const r = spawnSync(process.execPath, [FLAG, `--allow-fs-read=${ARQUIVO_REFERENCIA}`, '--input-type=module', '-e', codigo], {
    encoding: 'utf8', maxBuffer: 256 * 1024 * 1024,
  });
  if (r.status !== 0) {
    const e = new Error(`processo isolado falhou (código ${r.status}):\n${r.stderr}`);
    e.stderr = r.stderr;
    throw e;
  }
  return r.stdout;
}

/** Valores da referência, calculados no processo restrito, para os anos pedidos. */
export function referenciaIsolada(anos) {
  const url = pathToFileURL(ARQUIVO_REFERENCIA).href;
  const saida = executarIsolado(`
    const r = await import(${JSON.stringify(url)});
    const out = {};
    for (const a of ${JSON.stringify(anos)}) out[a] = { tabela: r.tabelaDoAno(a), brasil: r.regrasDoBrasil(a) };
    process.stdout.write(JSON.stringify(out));
  `);
  return JSON.parse(saida);
}
