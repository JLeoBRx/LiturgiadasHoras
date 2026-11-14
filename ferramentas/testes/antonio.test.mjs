/**
 * Sermões de Santo Antônio de Pádua — Etapa 1 (colação textual).
 *
 * Executar:  node --test "ferramentas/testes/*.test.mjs"
 *
 * 1. A camada recebida reproduz, palavra por palavra, o texto das 85 páginas
 *    do Lírio Católico (cópia enviada, nunca alterada).
 * 2. A camada revisada é exatamente a recebida mais as alterações registradas
 *    como aplicadas; toda entrada do registro aponta para um texto que existe.
 * 3. O texto da edição crítica do Centro Studi Antoniani não é reproduzido:
 *    a camada latim/ só tem estrutura, as lacunas do Lírio não copiam o
 *    latim, e as citações latinas do registro são curtas.
 * 4. Catálogo: os 85 itens, na organização da edição.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const A = path.join(RAIZ, 'dados', 'homilias', 'antonio');
const PAGINAS = path.join(RAIZ, 'Homilia dos Santos', 'Homilia de Santos', 'santo antonio de padua (1195 - 1231)', 'view lirio', 'view');
const ler = (p) => fs.readFileSync(p, 'utf8');
const CAT = JSON.parse(ler(path.join(A, 'catalogo.json')));
const REG = JSON.parse(ler(path.join(A, 'registro-editorial.json')));

/** arquivo de camada -> { cab: [linhas], blocos: [[marca, texto]] } */
function camada(arq) {
  const partes = ler(arq).replace(/\n+$/, '').split('\n\n');
  return { cab: partes[0].split('\n'), blocos: partes.slice(1).map((b) => { const l = b.split('\n'); return [l[0], l.slice(1).join('\n')]; }) };
}
const entidades = (s) => s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

describe('Santo Antônio: integridade da tradução recebida (Lírio Católico)', () => {
  test('85 páginas e 85 arquivos na camada recebida, um por item do catálogo', () => {
    assert.equal(fs.readdirSync(PAGINAS).length, 85);
    assert.equal(CAT.itens.length, 85);
    for (const i of CAT.itens) assert.ok(fs.existsSync(path.join(A, 'recebida', i.codigo + '.txt')), i.codigo);
  });
  for (const item of CAT.itens) {
    test(`${item.codigo}: recebida = texto da página ${item.lirio.slug}`, () => {
      const html = ler(path.join(PAGINAS, item.lirio.slug, 'index.html'));
      // parágrafos portugueses da página, na ordem: cada <p> uma linha; parágrafos sem tradução (latim) contados à parte
      const pagina = [];
      let lacunas = 0;
      for (const m of html.matchAll(/<div class="sa-texto sa-pt" data-idioma="(Português|Latim)"[^>]*>(.*?)<\/div>/g)) {
        if (m[1] === 'Latim') { lacunas++; continue; }
        pagina.push([...m[2].matchAll(/<p>(.*?)<\/p>/g)].map((p) => entidades(p[1])).join('\n'));
      }
      const { cab, blocos } = camada(path.join(A, 'recebida', item.codigo + '.txt'));
      assert.ok(cab.some((l) => l.startsWith('@origem Lírio Católico')), 'procedência no cabeçalho');
      const recebida = blocos.filter(([m]) => m === '@temas' || m.startsWith('@paragrafo')).map(([, t]) => t);
      assert.deepEqual(recebida, pagina);
      assert.equal(blocos.filter(([m]) => m.startsWith('@lacuna')).length, lacunas);
      const titulos = [...html.matchAll(/<h2>(.*?) ?<a class="sa-ancora"/g)].map((m) => entidades(m[1]).trim());
      const secoes = blocos.filter(([m]) => m.startsWith('@secao'));
      assert.equal(secoes.length, (html.match(/<section class="sa-secao[ "]/g) || []).length, 'número de seções');
      assert.deepEqual(secoes.map(([, t]) => t).filter(Boolean), titulos);
      const h1 = html.match(/<h1>(.*?) <span class="sa-titulo-la" lang="la">(.*?)<\/span><\/h1>/);
      assert.equal(blocos[0][1], entidades(h1[1]).trim());
      assert.equal(blocos[1][1], entidades(h1[2]).trim());
    });
  }
});

describe('Santo Antônio: nenhuma alteração silenciosa', () => {
  const TIPOS = ['correcao', 'sugestao', 'duvida', 'variante', 'problema-fonte', 'traducao-propria', 'estrutura'];
  const codigos = new Set(CAT.itens.map((i) => i.codigo));
  test('o registro é consistente', () => {
    const ids = new Set();
    for (const r of REG.registros) {
      assert.ok(!ids.has(r.id), `${r.id} repetido`);
      ids.add(r.id);
      assert.ok(codigos.has(r.sermao), `${r.id}: sermão ${r.sermao}`);
      assert.ok(TIPOS.includes(r.tipo), `${r.id}: tipo ${r.tipo}`);
      assert.ok(['aplicada', 'nao-aplicada'].includes(r.estado), `${r.id}: estado`);
      for (const k of ['localizacao', 'justificativa', 'confianca', 'motivo', 'fonte_consultada']) assert.ok(r[k], `${r.id}: falta ${k}`);
      if (r.tipo === 'correcao' && r.estado === 'aplicada') assert.equal(r.confianca, 'alta', `${r.id}: só correção de confiança alta é aplicada`);
      if (['sugestao', 'duvida', 'variante'].includes(r.tipo)) assert.equal(r.estado, 'nao-aplicada', `${r.id}: ${r.tipo} não se aplica`);
      const { blocos } = camada(path.join(A, 'recebida', r.sermao + '.txt'));
      assert.ok(blocos[r.bloco], `${r.id}: bloco ${r.bloco}`);
      if (r.antes !== undefined) assert.equal(blocos[r.bloco][1].split(r.antes).length - 1, 1, `${r.id}: 'antes' deve aparecer uma vez no bloco ${r.bloco}`);
      if (r.tipo === 'traducao-propria') assert.match(blocos[r.bloco][0], /^@lacuna/, `${r.id}: tradução própria só preenche lacunas`);
      assert.ok(!r.latim || r.latim.length <= 400, `${r.id}: citação latina longa demais (o texto da edição não é reproduzido)`);
    }
  });
  test('só os sermões colacionados têm camada revisada', () => {
    const rev = fs.existsSync(path.join(A, 'revisada')) ? fs.readdirSync(path.join(A, 'revisada')).map((f) => f.replace('.txt', '')).sort() : [];
    assert.deepEqual(rev, REG.colacao.map((c) => c.sermao).sort());
    for (const c of REG.colacao) {
      assert.ok(codigos.has(c.sermao));
      assert.equal(c.nivel, 'integral');
      assert.ok(['finalizada', 'finalizada-com-ressalvas'].includes(c.estado_final), `${c.sermao}: estado final`);
      assert.ok(c.resultado && c.paragrafos_conferidos >= 0);
    }
  });
  for (const c of REG.colacao) {
    test(`${c.sermao}: revisada = recebida + alterações aplicadas`, () => {
      const rec = camada(path.join(A, 'recebida', c.sermao + '.txt'));
      const rev = camada(path.join(A, 'revisada', c.sermao + '.txt'));
      const blocos = rec.blocos.map((b) => [...b]);
      const regs = REG.registros.filter((r) => r.sermao === c.sermao && r.estado === 'aplicada');
      for (const r of regs) {
        if (r.tipo === 'traducao-propria') blocos[r.bloco] = ['@paragrafo ' + blocos[r.bloco][0].split(' ')[1], r.depois];
        else if (r.antes !== undefined) blocos[r.bloco][1] = blocos[r.bloco][1].replace(r.antes, r.depois);
      }
      const ordem = blocos.map((_, i) => i);
      for (const r of regs) {
        for (const [k, d] of [['mover_para_antes_do_bloco', 0], ['mover_para_depois_do_bloco', 1]]) {
          if (r[k] === undefined) continue;
          ordem.splice(ordem.indexOf(r.bloco), 1);
          ordem.splice(ordem.indexOf(r[k]) + d, 0, r.bloco);
        }
      }
      assert.deepEqual(rev.blocos, ordem.map((i) => blocos[i]));
      assert.ok(rev.cab.some((l) => l === '@alteracoes ' + (regs.length ? regs.map((r) => r.id).join(', ') : '(nenhuma)')));
    });
  }
});

describe('Santo Antônio: texto da edição crítica não reproduzido', () => {
  test('camada latim/ só com estrutura (seções, parágrafos, páginas), sem texto', () => {
    const arqs = fs.readdirSync(path.join(A, 'latim'));
    assert.equal(arqs.length, 85);
    for (const f of arqs) {
      const t = ler(path.join(A, 'latim', f));
      const j = JSON.parse(t);
      assert.ok(j.edicao && j.consulta && j.secoes, f);
      assert.ok(!/"texto"|"preliminar"|"notas": \{/.test(t), `${f}: não deve conter texto`);
      for (const s of j.secoes) for (const p of s.paragrafos) assert.deepEqual(Object.keys(p).sort(), ['n', 'notas', 'paginas_do_pdf']);
    }
  });
  test('as lacunas do Lírio não copiam o latim que a página exibe', () => {
    for (const i of CAT.itens) {
      for (const camadaNome of ['recebida', 'revisada']) {
        const arq = path.join(A, camadaNome, i.codigo + '.txt');
        if (!fs.existsSync(arq)) continue;
        for (const [m, t] of camada(arq).blocos) if (m.startsWith('@lacuna')) assert.match(t, /^\[Sem tradução no Lírio Católico .*não é reproduzido nesta camada\.\]$/);
      }
    }
  });
  test('nenhum PDF copiado para dados/', () => {
    const pdfs = [];
    const andar = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (e.isDirectory()) andar(path.join(d, e.name)); else if (/\.pdf$/i.test(e.name)) pdfs.push(e.name); } };
    andar(path.join(RAIZ, 'dados'));
    assert.deepEqual(pdfs, []);
  });
});

describe('Santo Antônio: catálogo e procedência', () => {
  test('85 itens na organização da edição (72 dominicais em 3 partes, 7 marianos, 6 festivos)', () => {
    const conta = (f) => CAT.itens.filter(f).length;
    assert.equal(conta((i) => i.codigo.startsWith('sd')), 72);
    assert.equal(conta((i) => i.codigo.startsWith('sm')), 7);
    assert.equal(conta((i) => i.codigo.startsWith('sf')), 6);
    assert.deepEqual(['Parte I', 'Parte II', 'Parte III'].map((p) => conta((i) => i.parte === p)), [26, 29, 17]);
    assert.equal(conta((i) => i.tipo === 'sermao'), 76);
    assert.deepEqual(CAT.itens.map((i) => i.ordem), Array.from({ length: 85 }, (_, k) => k + 1));
    for (const i of CAT.itens) assert.ok(fs.existsSync(path.join(A, 'latim', i.codigo + '.json')), i.codigo);
  });
  test('a tradução recebida é creditada ao Lírio Católico, e o método declarado está registrado', () => {
    const p = REG.procedencia.traducao_recebida;
    assert.match(p.fonte, /Lírio Católico/);
    assert.match(p.credito, /Tradução: Lírio Católico/);
    assert.match(p.metodo_declarado, /Inteligência Artificial/);
    assert.match(REG.procedencia.latim.diretriz, /não é reproduzido/);
    assert.equal(REG.procedencia.estado_inicial.commit, '08fd880');
  });
});
