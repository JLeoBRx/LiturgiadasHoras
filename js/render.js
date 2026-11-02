/**
 * Transforma blocos de texto (js/texto.js) em HTML para leitura.
 * Toda a marcação visual dos textos litúrgicos fica aqui.
 */
import { lerSalmo } from './texto.js';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const ICONE_INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>';

/** Formatação dentro da linha: {rubrica}, **negrito**, _itálico_, [versículo], V. e R., asterisco e cruz. */
export function inline(txt) {
  let s = esc(txt);
  s = s.replace(/\{([^{}]*)\}/g, (m, x) => (/^\s*(R\.|V\.|Ant\.?\s*\d*|\*|†)\s*$/.test(x) ? `<span class="mk">${x.trim()}</span>` : `<span class="rubrica-inline">${x}</span>`));
  s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[\s(“"'])_([^_]+?)_(?=[\s.,;:!?)”"']|$)/g, '$1<em>$2</em>');
  s = s.replace(/\[(\(?[0-9]+[a-z]?\)?|[a-z])\]\s*/g, '<sup class="v">$1</sup>');
  s = s.replace(/^(V\.|R\.|℣|℟)(?=\s)/, '<span class="mk">$1</span>');
  s = s.replace(/(\s)(R\.|V\.)(?=\s|$)/g, '$1<span class="mk">$2</span>');
  s = s.replace(/(\s)\*(?=\s|$)/g, '$1<span class="mk">*</span>');
  s = s.replace(/^\*(?=\s)/, '<span class="mk">*</span>');
  s = s.replace(/(\s)†(?=\s|$)/g, '$1<span class="mk">†</span>');
  s = s.replace(/^–(?=\s)/, '<span class="mk">–</span>');
  return s;
}

/** Parágrafos: linha em branco separa parágrafos; quebras viram <br>. */
function paragrafos(txt, cls = '') {
  return txt.split(/\n\s*\n/).map((p) => {
    const linhas = p.split('\n').map((l) => l.trim()).filter(Boolean);
    if (!linhas.length) return '';
    const soRubrica = linhas.every((l) => /^\{[^{}]*\}$/.test(l));
    if (soRubrica) return `<p class="rubrica">${linhas.map((l) => esc(l.slice(1, -1))).join('<br>')}</p>`;
    const fmt = (l) => {
      if (/^(\s*\{[^{}]*\}\s*)+$/.test(l)) {
        const t = l.replace(/[{}]/g, '').replace(/^[\s–—_-]{6,}/, '').trim();
        const sep = /^\s*\{[–—_-]{6,}\}/.test(l) ? '<hr class="sep">' : '';
        return sep + (t ? `<span class="rubrica-linha">${esc(t)}</span>` : '');
      }
      return inline(l);
    };
    return `<p${cls ? ` class="${cls}"` : ''}>${linhas.map(fmt).join('<br>')}</p>`;
  }).join('');
}

function salmoHTML(s, opcoes = {}) {
  if (!s) return '<div class="lacuna">' + ICONE_INFO + '<span>Salmo não encontrado na biblioteca.</span></div>';
  let h = '<div class="salmo">';
  if (s.titulo && !opcoes.semCabecalho) h += `<p class="tit">${inline(s.titulo)}</p>`;
  if (s.subtitulo && !opcoes.semCabecalho) h += `<p class="subtit">${inline(s.subtitulo)}</p>`;
  if (s.citacao && !opcoes.semCabecalho) h += `<p class="cit">${inline(s.citacao)}</p>`;
  for (const p of s.partes) {
    if (p.parte) h += `<p class="parte">${esc(p.parte)}</p>`;
    for (const e of p.estrofes) {
      h += '<div class="estrofe">';
      for (const v of e) {
        if (v.marcador === 'R.') {
          h += `<p class="verso refrao"><span class="mk">R.</span> ${inline(v.linhas.join(' ').replace(/^\(R\.\s*/, '(').replace(/^R\.\s*/, ''))}</p>`;
          continue;
        }
        const marc = v.marcador ? `<span class="marc">${esc(v.marcador)}</span>` : '<span class="marc"></span>';
        h += `<p class="verso">${marc}${inline(v.linhas[0])}${v.linhas.slice(1).map((l) => `<span class="cont">${inline(l)}</span>`).join('')}</p>`;
      }
      h += '</div>';
    }
  }
  return h + '</div>';
}

const GLORIA = [
  ['–', 'Glória ao Pai e ao Filho e ao Espírito Santo. *', 'Como era no princípio, agora e sempre. Amém.'],
];

/** Converte a lista de blocos de um ofício em HTML. */
export function oficioHTML(blocos) {
  let h = '';
  let ultimaAntifona = null;
  for (let i = 0; i < blocos.length; i++) {
    const b = blocos[i];
    const t = b.texto || '';
    switch (b.tipo) {
      case 'titulo':
      case 'celebracao':
        break; // o cabeçalho da página já mostra estas informações
      case 'biografia':
        h += `<details class="bio"><summary>Sobre a celebração</summary>${paragrafos(t)}</details>`;
        break;
      case 'secao': {
        const [nome, ref] = b.arg.split('|').map((x) => x.trim());
        if (/^Conclusão da Hora$/i.test(nome) && !blocos[i + 1]) break;
        h += `<h3 class="secao">${inline(nome)}${ref ? ` <span class="ref">${inline(ref)}</span>` : ''}</h3>`;
        break;
      }
      case 'rubrica':
        h += `<p class="rubrica">${esc(t).replace(/\n/g, '<br>')}</p>`;
        break;
      case 'hino':
        h += `<div class="hino">${t.split(/\n\s*\n/).map((e) => `<p class="estrofe">${e.split('\n').map((l) => /^\{[^{}]*\}$/.test(l.trim()) ? `<span class="rubrica-inline">${esc(l.trim().slice(1, -1))}</span>` : inline(l)).join('<br>')}</p>`).join('')}</div>`;
        break;
      case 'antifona': {
        const num = b.arg ? b.arg : '';
        let texto = t;
        let rep = false;
        if (!num && ultimaAntifona) {
          // repetição abreviada no acervo ("Ant. Quando..."): mostra a antífona inteira
          const a = ultimaAntifona.replace(/\s+/g, ' ').trim();
          const r = t.replace(/\s+/g, ' ').trim().replace(/[.,;…]+$/, '');
          if (r.length < a.length && a.startsWith(r)) texto = ultimaAntifona;
          rep = true;
        }
        if (num) ultimaAntifona = t;
        h += `<p class="antifona${rep ? ' repeticao' : ''}"><span class="mk">Ant.${num ? ' ' + esc(num) : ''}</span> ${texto.split('\n').map(inline).join('<br>')}</p>`;
        if (rep) ultimaAntifona = null;
        break;
      }
      case 'salmo':
        h += salmoHTML(b.salmo);
        break;
      case 'versos':
        h += salmoHTML(lerSalmo(t), { semCabecalho: true });
        break;
      case 'gloria':
        h += `<div class="salmo gloria"><div class="estrofe">${GLORIA.map(([m, a, c]) => `<p class="verso"><span class="marc">${m}</span>${inline(a)}<span class="cont">${inline(c)}</span></p>`).join('')}</div></div>`;
        break;
      case 'leitura':
        h += `<p class="incipit">${t.split('\n').map(inline).join('<br>')}</p>`;
        break;
      case 'tema':
        h += `<p class="tema">${inline(t)}</p>`;
        break;
      case 'refrao':
        h += `<p class="refrao-salmo"><span class="mk">R.</span> ${inline(t.replace(/^R\.\s*/, ''))}</p>`;
        break;
      case 'lacuna':
        h += `<div class="lacuna">${ICONE_INFO}<span>${esc(t)}</span></div>`;
        break;
      case 'responsorio':
      case 'preces':
      case 'oracao':
      case 'texto':
      default:
        h += paragrafos(t);
    }
  }
  return h;
}

const ROTULOS = /^\{(Antífona d[ae] entrada|Coleta|Oração do dia|Sobre as oferendas|Oração sobre as oferendas|Antífona d[ae] comunhão|Depois da comunhão|Oração depois da comunhão|Prefácio|Bênção solene|Oração sobre o povo)\}\s*(?:\{([^{}]*)\})?\s*(.*)$/i;

function introducaoHTML(blocos, id, ancoras) {
  const linhas = blocos.map((b) => b.texto || '').join('\n\n').split('\n');
  let titulo = '';
  while (linhas.length && !linhas[0].trim()) linhas.shift();
  if (linhas.length && /^\{[^{}]+\}$/.test(linhas[0].trim()) && !ROTULOS.test(linhas[0].trim())) titulo = linhas.shift().trim().slice(1, -1);
  let corpo = '', buf = [];
  const flush = () => { if (buf.join('').trim()) corpo += paragrafos(buf.join('\n')); buf = []; };
  for (const l of linhas) {
    const m = l.trim().match(ROTULOS);
    if (m) {
      flush();
      corpo += `<h4 class="subsecao">${esc(m[1])}${m[2] ? ` <span class="ref">${esc(m[2])}</span>` : ''}</h4>`;
      if (m[3]) buf.push(m[3]);
    } else buf.push(l);
  }
  flush();
  if (!corpo.trim() && !titulo) return '';
  const nome = titulo || 'Orações próprias';
  ancoras.push({ id, nome });
  return `<section class="bloco-leitura intro" id="${id}"><h3 class="secao">${esc(nome)}</h3>${corpo}</section>`;
}

/** Leituras da Missa: agrupa por seção em cartões. */
export function leiturasHTML(blocos) {
  const grupos = [];
  let g = null;
  for (const b of blocos) {
    if (b.tipo === 'secao') { g = { secao: b, blocos: [] }; grupos.push(g); continue; }
    if (!g) { g = { secao: null, blocos: [] }; grupos.push(g); }
    g.blocos.push(b);
  }
  const ancoras = [];
  let html = '';
  grupos.forEach((gr, i) => {
    if (gr.secao && /^Introdução$/i.test(gr.secao.arg)) {
      // orações próprias / título da missa que o acervo traz antes das leituras
      html += introducaoHTML(gr.blocos, 'l' + i, ancoras);
      return;
    }
    const [nome, ref] = gr.secao ? gr.secao.arg.split('|').map((x) => x.trim()) : ['', ''];
    const id = 'l' + i;
    if (nome) ancoras.push({ id, nome });
    let corpo = '';
    for (const b of gr.blocos) {
      if (b.tipo === 'versos') {
        corpo += `<div class="salmo">${b.texto.split(/\n\s*\n/).map((e) => `<div class="estrofe">${e.split('\n').filter((l) => l.trim()).map((l) => `<p class="verso"><span class="marc"></span>${inline(l)}</p>`).join('')}</div>`).join('')}</div>`;
      } else corpo += oficioHTML([b]);
    }
    html += `<section class="bloco-leitura" id="${id}"><h3 class="secao">${inline(nome)}${ref ? ` <span class="ref">${inline(ref)}</span>` : ''}</h3>${corpo}</section>`;
  });
  return { html, ancoras };
}

export { esc };
