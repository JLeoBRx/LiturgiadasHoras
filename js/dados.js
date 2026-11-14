/**
 * Carregamento dos arquivos de conteúdo (pasta dados/).
 *
 * Versões alternativas de textos: se existir uma versão escolhida (ex.:
 * "jovem"), o site procura primeiro em dados/versoes/<versao>/<caminho> e,
 * se não encontrar, usa o texto original em dados/<caminho>.
 * As versões disponíveis são declaradas em dados/versoes/versoes.json.
 */

const BASE = 'dados/';
const cache = new Map();
let versaoAtiva = null;
let versoesDisponiveis = null;
let carregadorPersonalizado = null; // usado nos testes (Node)

export function definirCarregador(fn) { carregadorPersonalizado = fn; }

export function definirVersao(v) {
  versaoAtiva = v || null;
  cache.clear();
}
export function versao() { return versaoAtiva; }

async function buscar(caminho) {
  if (carregadorPersonalizado) return carregadorPersonalizado(caminho);
  const r = await fetch(caminho, { cache: 'no-cache' });
  if (!r.ok) return null;
  return await r.text();
}

/** Lê um arquivo de texto de dados/ (com fallback de versão). null = não existe. */
export async function texto(caminho) {
  const chave = (versaoAtiva || '') + '|' + caminho;
  if (cache.has(chave)) return cache.get(chave);
  const p = (async () => {
    if (versaoAtiva) {
      const alt = await buscar(`${BASE}versoes/${versaoAtiva}/${caminho}`).catch(() => null);
      if (alt != null) return alt;
    }
    return await buscar(BASE + caminho).catch(() => null);
  })();
  cache.set(chave, p);
  return p;
}

export async function json(caminho) {
  const t = await texto(caminho);
  if (t == null) return null;
  return JSON.parse(t);
}

export async function listarVersoes() {
  if (versoesDisponiveis) return versoesDisponiveis;
  const t = await buscar(BASE + 'versoes/versoes.json').catch(() => null);
  try { versoesDisponiveis = t ? JSON.parse(t).versoes || [] : []; } catch { versoesDisponiveis = []; }
  return versoesDisponiveis;
}
