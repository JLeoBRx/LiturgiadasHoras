/**
 * Leitura do formato de texto por blocos usado em dados/ (ver dados/LEIA-ME.md).
 * Este módulo só interpreta o texto; não gera HTML.
 */

const METADADOS = new Set(['origem', 'documento', 'usos', 'fonte', 'nota-edicao']);

/** Documento de ofício/leitura -> { meta, blocos: [{tipo, arg, texto}] } */
export function lerDocumento(txt) {
  const meta = {};
  const blocos = [];
  let atual = null;
  const linhas = (txt || '').replace(/\r\n?/g, '\n').split('\n');
  for (const linha of linhas) {
    const m = linha.match(/^@([a-z][a-z0-9-]*)(?:\s+(.*))?$/i);
    if (m) {
      const tipo = m[1].toLowerCase();
      const arg = (m[2] || '').trim();
      if (METADADOS.has(tipo) && !atual) { meta[tipo] = arg; continue; }
      if (METADADOS.has(tipo)) { meta[tipo] = arg; continue; }
      atual = { tipo, arg, linhas: [] };
      blocos.push(atual);
      continue;
    }
    if (atual) atual.linhas.push(linha);
  }
  for (const b of blocos) {
    while (b.linhas.length && !b.linhas[b.linhas.length - 1].trim()) b.linhas.pop();
    while (b.linhas.length && !b.linhas[0].trim()) b.linhas.shift();
    b.texto = b.linhas.join('\n');
    delete b.linhas;
  }
  return { meta, blocos };
}

/**
 * Salmo/cântico da biblioteca -> { titulo, subtitulo, citacao, origem, partes }
 * partes: [{ parte, estrofes: [[{ marcador, linhas }]] }]
 */
export function lerSalmo(txt) {
  const r = { titulo: '', subtitulo: '', citacao: '', origem: '', partes: [] };
  let parte = { parte: '', estrofes: [[]] };
  r.partes.push(parte);
  const novaEstrofe = () => {
    const e = parte.estrofes;
    if (e[e.length - 1].length) e.push([]);
  };
  for (const linhaBruta of (txt || '').replace(/\r\n?/g, '\n').split('\n')) {
    const linha = linhaBruta.replace(/\s+$/, '');
    const m = linha.match(/^@([a-z-]+)(?:\s+(.*))?$/i);
    if (m) {
      const k = m[1].toLowerCase(), v = (m[2] || '').trim();
      if (k === 'parte') {
        if (parte.estrofes.some((e) => e.length) || parte.parte) {
          parte = { parte: v, estrofes: [[]] };
          r.partes.push(parte);
        } else parte.parte = v;
      } else r[k] = v;
      continue;
    }
    if (!linha.trim()) { novaEstrofe(); continue; }
    const est = parte.estrofes[parte.estrofes.length - 1];
    const mm = linha.match(/^([–=\-+]|R\.|\(R\.)\s+(.*)$/);
    if (mm) {
      const marc = mm[1] === '-' ? '–' : mm[1];
      est.push({ marcador: marc === '(R.' ? 'R.' : marc, linhas: [marc === '(R.' ? '(R. ' + mm[2] : mm[2]] });
    } else if (/^\s{1,}/.test(linha) && est.length) {
      est[est.length - 1].linhas.push(linha.trim());
    } else {
      est.push({ marcador: '', linhas: [linha.trim()] });
    }
  }
  for (const p of r.partes) p.estrofes = p.estrofes.filter((e) => e.length);
  r.partes = r.partes.filter((p) => p.estrofes.length || p.parte);
  return r;
}

/** Texto do primeiro bloco de um tipo após uma seção (ex.: a oração) */
export function textoDaSecao(doc, nomeSecao, tipos = ['oracao', 'texto']) {
  const i = doc.blocos.findIndex((b) => b.tipo === 'secao' && b.arg.toLowerCase().startsWith(nomeSecao.toLowerCase()));
  if (i < 0) return null;
  for (let j = i + 1; j < doc.blocos.length; j++) {
    const b = doc.blocos[j];
    if (b.tipo === 'secao') break;
    if (tipos.includes(b.tipo)) return b.texto;
  }
  return null;
}
