/**
 * Interface do site: rotas, telas e ajustes do leitor.
 * Rotas (hash, para funcionar em qualquer hospedagem estática):
 *   #/                                 início (hoje)
 *   #/horas/AAAA-MM-DD                 horas do dia
 *   #/horas/AAAA-MM-DD/laudes?op=id    um ofício (op = memória escolhida)
 *   #/liturgia-diaria/AAAA-MM-DD       liturgia da Missa
 *   #/liturgia-diaria/AAAA-MM-DD/homilia/ID   homilia de um santo ligada ao dia
 *   #/calendario/AAAA-MM?dia=...       calendário
 *   #/sobre                            créditos e como editar os textos
 */
import * as dados from './dados.js';
import {
  CalendarioLiturgico, hojeIso, dataPorExtenso, nomeGrau, NOMES_DIAS, NOMES_MESES,
} from './liturgical-calendar.js';
import * as LH from './liturgy-hours.js';
import * as LD from './daily-liturgy.js';
import * as HM from './homilias.js';
import { oficioHTML, leiturasHTML, esc, ICONE_INFO } from './render.js';
import { desenharMes, detalheDia, seletorAno, seletorMes, corHex } from './calendar.js';

const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');
let cal = null;

// ------------------------------------------------------------- ícones
const I = {
  invitatorio: '<path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M18 12h3M16.3 7.7l2.1-2.1"/><path d="M7 16a5 5 0 0 1 10 0"/><path d="M3 20h18"/>',
  leituras: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5z"/>',
  laudes: '<path d="M12 2v2M4.9 6.9l1.4 1.4M2 14h2M20 14h2M17.7 8.3l1.4-1.4"/><path d="M6 18a6 6 0 0 1 12 0"/><path d="M2 18h20M9 22h6"/>',
  terca: '<circle cx="12" cy="13" r="4"/><path d="M12 3v3M12 20v1M4.2 7.2l1.6 1.6M18.2 18.2l1.6 1.6M3 13h2M19 13h2M18.2 7.8l1.6-1.6"/>',
  sexta: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
  nona: '<circle cx="12" cy="11" r="4"/><path d="M12 3v2M5 11H3M21 11h-2M6.3 5.3l1.4 1.4M16.3 6.7l1.4-1.4"/><path d="M3 19h18M6 22h12"/>',
  vesperas: '<path d="M6 16a6 6 0 0 1 12 0"/><path d="M12 6v3M4.9 9.9l1.4 1.4M17.7 11.3l1.4-1.4M2 16h20M7 20h10"/>',
  completas: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  casa: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/>',
  livro: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5z"/>',
  cruz: '<path d="M12 3v18M7 8h10"/>',
  calendario: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  ajustes: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
  esq: '<path d="m15 18-6-6 6-6"/>',
  som: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  dir: '<path d="m9 18 6-6-6-6"/>',
  hoje: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/>',
  pomba: '<path d="M4 14c3 0 5-2 6-5 1 3 3 5 6 5l4-2-3 5c-2 3-6 4-10 3L4 14z"/><path d="M10 9c0-3 2-5 5-5"/>',
};
const svg = (n, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[n] || ''}</svg>`;

// ------------------------------------------------------------- preferências
const prefs = {
  ler(k, padrao) { try { const v = localStorage.getItem('liturgia.' + k); return v == null ? padrao : JSON.parse(v); } catch { return padrao; } },
  gravar(k, v) { try { localStorage.setItem('liturgia.' + k, JSON.stringify(v)); } catch { /* sem armazenamento */ } },
};
const TAMANHOS = [0.98, 1.12, 1.26, 1.42];
function aplicarPrefs() {
  const tema = prefs.ler('tema', 'auto');
  if (tema === 'auto') document.documentElement.removeAttribute('data-tema');
  else document.documentElement.setAttribute('data-tema', tema);
  const t = prefs.ler('tamanho', 1);
  document.documentElement.style.setProperty('--tam-texto', TAMANHOS[t] + 'rem');
  dados.definirVersao(prefs.ler('versao', null));
}

// escolha de memória facultativa por data
function escolhaDoDia(iso) { return prefs.ler('escolha.' + iso, null); }
function gravarEscolha(iso, id) {
  prefs.gravar('escolha.' + iso, id || null);
}

// ------------------------------------------------------------- utilidades de tela
function carregando() { app.innerHTML = '<div class="carregando"><div class="pontinhos"><span></span><span></span><span></span></div></div>'; }
function definirCor(cor) { document.body.dataset.cor = cor || 'verde'; }
function marcarNav(rota) {
  document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('ativo', a.dataset.nav === rota));
}
function isoValido(s) { return /^\d{4}-\d{2}-\d{2}$/.test(s || '') && !Number.isNaN(Date.parse(s)); }
function saudacao() {
  const h = new Date().getHours();
  return h < 5 ? 'Boa noite' : h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
}
function horaSugerida() {
  const h = new Date().getHours();
  if (h < 5) return 'completas';
  if (h < 9) return 'laudes';
  if (h < 11) return 'terca';
  if (h < 14) return 'sexta';
  if (h < 17) return 'nona';
  if (h < 20) return 'vesperas';
  return 'completas';
}
function rotuloTempo(d) {
  const p = [d.nomeTempo];
  if (d.semanaSalterioRomano) p.push(`Saltério ${d.semanaSalterioRomano}`);
  return p.join(' · ');
}
function navegadorData(iso, base, extra = '') {
  return `<div class="navegador-data">
    <a class="botao-icone" href="#/${base}/${cal.proximo(iso, -1)}" aria-label="Dia anterior">${svg('esq')}</a>
    <label class="data-atual" style="cursor:pointer">
      <span>${esc(NOMES_DIAS[new Date(iso + 'T12:00').getDay()])}, ${esc(dataPorExtenso(iso))}</span>
      <input type="date" value="${iso}" data-ir="${base}" aria-label="Escolher data">
    </label>
    <a class="botao-icone" href="#/${base}/${cal.proximo(iso, 1)}" aria-label="Dia seguinte">${svg('dir')}</a>
    ${iso !== hojeIso() ? `<a class="botao fino" href="#/${base}/${hojeIso()}">${svg('hoje')} Hoje</a>` : ''}
    ${extra}
  </div>`;
}
function ligarSeletorData() {
  const inp = $('input[type="date"][data-ir]', app);
  if (!inp) return;
  const lab = inp.closest('label');
  lab.addEventListener('click', (e) => {
    e.preventDefault();
    if (inp.showPicker) { try { inp.showPicker(); return; } catch { /* segue */ } }
    inp.style.pointerEvents = 'auto'; inp.focus(); inp.click();
  });
  inp.addEventListener('change', () => { if (isoValido(inp.value)) location.hash = `#/${inp.dataset.ir}/${inp.value}`; });
}

function cartaoDia(d, cel) {
  const c = cel || d.celebracao;
  const etiquetas = [];
  if (d.semana != null && d.tempo !== 'natal' && d.tempo !== 'triduo') etiquetas.push(d.semana === 0 ? 'Depois das Cinzas' : `${d.semana}ª semana`);
  if (d.semanaSalterioRomano) etiquetas.push(`Saltério ${d.semanaSalterioRomano}`);
  etiquetas.push(d.diaSemana === 0 ? `Ano ${d.cicloDominical}` : `Ano ${d.cicloDominical} · ${d.cicloFerial}`);
  const outros = [];
  if (c !== d.celebracao && cel) outros.push(`Dia: ${esc(d.celebracao.nome)}`);
  if (d.comemoracoes.length) outros.push('Comemoração: ' + d.comemoracoes.map((x) => esc(x.nome)).join(', '));
  return `<div class="cartao-dia" style="--cor-dia:${corHex(c.cor || d.cor)}">
    <span class="rotulo-tempo"><span class="ponto-cor"></span>${esc(rotuloTempo(d))}</span>
    <h2>${esc(c.nome)}</h2>
    <div class="grau">${esc(nomeGrau(c))}${c.transferida ? ' · celebração transferida' : ''}</div>
    <div class="etiquetas">${etiquetas.map((e) => `<span class="etiqueta">${esc(e)}</span>`).join('')}</div>
    ${outros.length ? `<div class="comemoracoes">${outros.join('<br>')}</div>` : ''}
  </div>`;
}

function blocoEscolha(d, opAtual, base) {
  if (!d.opcoes.length) return '';
  const itens = [{ id: '', nome: d.celebracao.tipo === 'temporal' ? `Ofício do ${d.nomeTempo}` : d.celebracao.nome }, ...d.opcoes];
  return `<div class="escolha">
    <p>${d.opcoes.length > 1 ? 'Hoje há memórias facultativas' : 'Hoje há memória facultativa'}. Escolha qual celebração deseja acompanhar:</p>
    <div class="chips">${itens.map((o) => `<button class="chip" data-op="${o.id}" aria-pressed="${(opAtual || '') === o.id}">${esc(o.nome)}</button>`).join('')}</div>
  </div>`;
}
function ligarEscolha(iso, aoMudar) {
  app.querySelectorAll('.chip[data-op]').forEach((b) => b.addEventListener('click', () => {
    gravarEscolha(iso, b.dataset.op);
    aoMudar(b.dataset.op);
  }));
}

function gradeHoras(iso, op, destaque) {
  return `<div class="grade-horas">${LH.HORAS.map((h) => `
    <a class="hora${h.id === destaque ? ' sugerida' : ''}" href="#/horas/${iso}/${h.id}${op ? '?op=' + encodeURIComponent(op) : ''}">
      <span class="icone">${svg(h.id)}</span>
      <span class="nome">${esc(h.nome)}</span>
      <span class="momento">${esc(h.momento)}</span>
    </a>`).join('')}</div>`;
}

// ------------------------------------------------------------- telas
async function telaInicio() {
  marcarNav('inicio');
  const iso = hojeIso();
  const d = cal.dia(iso);
  const op = escolhaDoDia(iso);
  const cel = LH.celebracaoEscolhida(d, op);
  definirCor(cel.cor || d.cor);
  const res = LD.resolver(d, op);
  let evangelho = '';
  if (res.leituras) {
    const t = await dados.texto('liturgia-diaria/' + res.leituras + '.txt');
    const m = t && t.match(/@secao Evangelho \| ([^\n]+)/);
    if (m) evangelho = m[1];
  }
  app.innerHTML = `<div class="pagina">
    <p class="saudacao">${saudacao()} — ${esc(NOMES_DIAS[d.diaSemana].toLowerCase())}, ${esc(dataPorExtenso(iso))}</p>
    <h1 class="titulo-pagina">Que bom ter você aqui.<br>Vamos rezar?</h1>
    ${cartaoDia(d, cel)}
    ${blocoEscolha(d, op)}
    <div class="secao-titulo">Liturgia das Horas</div>
    ${gradeHoras(iso, op, horaSugerida())}
    <div class="secao-titulo">Também hoje</div>
    <div class="atalhos">
      <a class="atalho" href="#/liturgia-diaria/${iso}">
        <span class="icone">${svg('cruz')}</span>
        <span><strong>Liturgia Diária</strong><span>${evangelho ? 'Evangelho: ' + esc(evangelho) : 'Leituras da Missa de hoje'}</span></span>
        <span class="seta">${svg('dir', 'width="18" height="18"')}</span>
      </a>
      <a class="atalho" href="#/calendario">
        <span class="icone">${svg('calendario')}</span>
        <span><strong>Calendário litúrgico</strong><span>Consulte outros dias, santos e festas</span></span>
        <span class="seta">${svg('dir', 'width="18" height="18"')}</span>
      </a>
    </div>
  </div>`;
  ligarEscolha(iso, () => telaInicio());
}

async function telaHorasDia(iso) {
  marcarNav('horas');
  const d = cal.dia(iso);
  const op = escolhaDoDia(iso);
  const cel = LH.celebracaoEscolhida(d, op);
  definirCor(cel.cor || d.cor);
  app.innerHTML = `<div class="pagina">
    <h1 class="titulo-pagina">Liturgia das Horas</h1>
    ${navegadorData(iso, 'horas')}
    ${cartaoDia(d, cel)}
    ${blocoEscolha(d, op)}
    <div class="secao-titulo">Escolha sua oração</div>
    ${gradeHoras(iso, op, iso === hojeIso() ? horaSugerida() : null)}
  </div>`;
  ligarSeletorData();
  ligarEscolha(iso, () => telaHorasDia(iso));
}

async function telaOficio(iso, hora, op) {
  marcarNav('horas');
  if (!LH.HORA[hora]) { location.hash = `#/horas/${iso}`; return; }
  const d = cal.dia(iso);
  if (op === undefined) op = escolhaDoDia(iso);
  const cel = LH.celebracaoEscolhida(d, op);
  const res = LH.resolverHora(cal, d, hora, op);
  const celHora = res.celebracao || cel;
  definirCor(celHora.cor || d.cor);
  carregando();
  const of = await LH.montarOficio(res, d, { invitatorio: prefs.ler('invitatorio', 'comunitaria') });
  const idx = LH.HORAS.findIndex((h) => h.id === hora);
  const ant = LH.HORAS[idx - 1], prox = LH.HORAS[idx + 1];
  const q = op ? '?op=' + encodeURIComponent(op) : '';
  const subt = esc((celHora || cel).nome);
  const navHoras = LH.HORAS.map((h) => `<a href="#/horas/${iso}/${h.id}${q}" class="${h.id === hora ? 'ativo' : ''}">${esc(h.curto)}</a>`).join('');
  const alternativas = (res.alternativas || []).length ? `<p class="rubrica">Em lugar do Salmo 94(95), pode-se usar os Salmos 99(100), 66(67) ou 23(24).</p>` : '';
  app.innerHTML = `<div class="pagina leitura">
    <nav class="nav-horas" aria-label="Horas do dia">${navHoras}</nav>
    <header class="cab-oficio">
      <span class="rotulo-tempo" style="display:flex"><span class="ponto-cor"></span>${esc(rotuloTempo(d))}</span>
      <h1>${esc(res.titulo || LH.HORA[hora].nome)}</h1>
      <div class="sub">${esc(NOMES_DIAS[d.diaSemana])}, ${esc(dataPorExtenso(iso))}<br><strong>${subt}</strong></div>
    </header>
    ${!res.celebracao || (celHora.id === cel.id && celHora.nome === cel.nome) ? blocoEscolha(d, op) : ''}
    ${(of.notas || []).map((n) => `<div class="nota">${esc(n)}</div>`).join('')}
    <article class="texto-liturgico">${alternativas}${oficioHTML(of.blocos)}</article>
    <div class="seguinte">
      ${ant ? `<a href="#/horas/${iso}/${ant.id}${q}"><small>Anterior</small><strong>${esc(ant.nome)}</strong></a>` : `<a href="#/horas/${cal.proximo(iso, -1)}/completas"><small>Dia anterior</small><strong>Completas</strong></a>`}
      ${prox ? `<a class="dir" href="#/horas/${iso}/${prox.id}${q}"><small>Próxima</small><strong>${esc(prox.nome)}</strong></a>` : `<a class="dir" href="#/horas/${cal.proximo(iso, 1)}/invitatorio"><small>Amanhã</small><strong>Invitatório</strong></a>`}
    </div>
    <details class="fontes"><summary>Origem dos textos</summary><ul>${of.origens.map((o) => `<li><code>dados/${esc(o.arquivo)}</code>${o.origem ? `<br>acervo: <code>${esc(o.origem)}</code>` : ''}</li>`).join('')}</ul></details>
  </div>`;
  ligarEscolha(iso, (novo) => { location.hash = `#/horas/${iso}/${hora}${novo ? '?op=' + encodeURIComponent(novo) : ''}`; });
  window.scrollTo({ top: 0 });
}

async function telaLiturgiaDiaria(iso, op, alt) {
  marcarNav('diaria');
  const d = cal.dia(iso);
  if (op === undefined) op = escolhaDoDia(iso);
  const cel = LH.celebracaoEscolhida(d, op);
  definirCor(cel.cor || d.cor);
  carregando();
  const res = LD.resolver(d, op);
  const m = await LD.montar(res, alt);
  const lt = m.leituras ? leiturasHTML(m.leituras) : { html: '', ancoras: [] };
  const oracoes = m.missal ? `<section class="bloco-leitura" id="oracoes"><h3 class="secao">Orações da Missa</h3>${oficioHTML(m.missal)}</section>` : '';
  const homilias = HM.homiliasDoDia(res);
  const q = op ? '?op=' + encodeURIComponent(op) : '';
  const secaoHomilia = homilias.length ? `<section class="bloco-leitura bloco-homilia" id="homilia"><h3 class="secao">Homilia</h3>
    ${homilias.map(({ homilia: h, motivos }) => cartaoHomilia(h, motivos, `#/liturgia-diaria/${iso}/homilia/${encodeURIComponent(h.id)}${q}`)).join('')}
  </section>` : '';
  const anc = [...lt.ancoras];
  if (oracoes) anc.push({ id: 'oracoes', nome: 'Orações' });
  if (secaoHomilia) anc.push({ id: 'homilia', nome: 'Homilia' });
  const chaveAtual = alt || res.chave;
  const alternativas = res.alternativas.length ? `<div class="escolha"><p>Leituras:</p><div class="chips">${res.alternativas.map((a) => `<button class="chip" data-alt="${esc(a.chave)}" aria-pressed="${a.chave === chaveAtual}">${esc(a.rotulo)}</button>`).join('')}</div></div>` : '';
  app.innerHTML = `<div class="pagina leitura">
    <h1 class="titulo-pagina" style="margin-top:22px">Liturgia Diária</h1>
    ${navegadorData(iso, 'liturgia-diaria')}
    ${cartaoDia(d, cel)}
    ${blocoEscolha(d, op)}
    ${alternativas}
    ${[...res.notas, ...m.lacunas].map((n) => `<div class="lacuna" style="margin-top:16px">${ICONE_INFO}<span>${esc(n)}</span></div>`).join('')}
    ${anc.length ? `<nav class="indice-leituras" aria-label="Partes">${anc.map((a) => `<a href="#${a.id}" data-ancora="${a.id}">${esc(a.nome)}</a>`).join('')}</nav>` : ''}
    <article class="texto-liturgico">${lt.html}${oracoes}
      ${!m.missal ? `<div class="lacuna">${ICONE_INFO}<span>As orações próprias da Missa deste dia não estão disponíveis no acervo.</span></div>` : ''}
      ${secaoHomilia}
    </article>
    <details class="fontes"><summary>Origem dos textos</summary><ul>${m.origens.map((o) => `<li><code>dados/${esc(o.arquivo)}</code>${o.origem ? `<br>acervo: <code>${esc(o.origem)}</code>` : ''}</li>`).join('')}</ul></details>
  </div>`;
  ligarSeletorData();
  ligarEscolha(iso, (novo) => telaLiturgiaDiaria(iso, novo || null));
  app.querySelectorAll('[data-alt]').forEach((b) => b.addEventListener('click', () => telaLiturgiaDiaria(iso, op, b.dataset.alt)));
  app.querySelectorAll('[data-ancora]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(a.dataset.ancora)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

// ------------------------------------------------------------- homilias dos santos
function cartaoHomilia(h, motivos, href) {
  const a = HM.autor(HM.obra(h.obra)?.autor) || {};
  const ob = HM.obra(h.obra) || {};
  return `<div class="homilia-cartao">
    <p class="homilia-autor">${esc(a.nome || '')}${a.titulo ? `<span>${esc(a.titulo)}</span>` : ''}</p>
    <p class="homilia-titulo">${esc(h.titulo)} · <em>${esc(ob.titulo || '')}</em></p>
    <ul class="homilia-motivos">${motivos.map((m) => { const d = HM.descreverMotivo(m); return `<li><strong>${esc(d.rotulo)}.</strong> ${esc(d.texto)}</li>`; }).join('')}</ul>
    <a class="botao" href="${href}">${svg('livro')} Ler a homilia</a>
  </div>`;
}

let leitorVoz = null;
function pararVoz() { try { window.speechSynthesis?.cancel(); } catch { /* sem voz */ } leitorVoz = null; }
window.addEventListener('hashchange', pararVoz);

async function telaHomilia(iso, id, op) {
  marcarNav('diaria');
  const h = HM.homilia(decodeURIComponent(id));
  const q = op ? '?op=' + encodeURIComponent(op) : '';
  const voltar = `#/liturgia-diaria/${iso}${q}`;
  if (!h) { location.hash = voltar; return; }
  const d = cal.dia(iso);
  if (op === undefined) op = escolhaDoDia(iso);
  const res = LD.resolver(d, op);
  const cel = LH.celebracaoEscolhida(d, op);
  definirCor(cel.cor || d.cor);
  carregando();
  const t = await HM.carregarTexto(h);
  const ob = HM.obra(h.obra) || {};
  const a = HM.autor(ob.autor) || {};
  const doDia = HM.homiliasDoDia(res).find((x) => x.homilia.id === h.id);
  if (!t) { app.innerHTML = `<div class="pagina"><div class="lacuna" style="margin-top:30px">${ICONE_INFO}<span>O texto desta homilia não foi encontrado.</span></div></div>`; return; }
  const tr = ob.traducao || {};
  const temVoz = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  app.innerHTML = `<div class="pagina leitura">
    <a class="voltar" href="${voltar}">${svg('esq')} Liturgia Diária · ${esc(dataPorExtenso(iso))}</a>
    <header class="cab-oficio cab-homilia">
      <span class="rotulo-tempo" style="display:flex"><span class="ponto-cor"></span>Homilia dos santos</span>
      <h1>${esc(a.nome || '')}</h1>
      <div class="sub">${esc(a.titulo || '')}${a.datas ? ` · ${esc(a.datas)}` : ''}<br><strong>${esc(h.titulo)}</strong> — ${esc(ob.titulo || '')}${h.livro ? `, livro ${esc(h.livro)}` : ''}</div>
    </header>
    <dl class="homilia-meta">
      <div><dt>Passagem comentada</dt><dd>${esc(h.pericope)}</dd></div>
      <div><dt>Ocasião em que foi pregada</dt><dd>${esc(t.ocasiao || '—')}</dd></div>
      ${doDia ? `<div><dt>Por que está neste dia</dt><dd><ul>${doDia.motivos.map((m) => { const x = HM.descreverMotivo(m); return `<li><strong>${esc(x.rotulo)}.</strong> ${esc(x.texto)}</li>`; }).join('')}</ul></dd></div>`
        : `<div><dt>Liturgia deste dia</dt><dd>Esta homilia não está associada à liturgia de ${esc(dataPorExtenso(iso))}.</dd></div>`}
    </dl>
    ${temVoz ? `<div class="controle-voz" role="group" aria-label="Ouvir a homilia">
      <button class="botao fino" data-voz="ouvir">${svg('som')} Ouvir</button>
      <button class="botao fino" data-voz="pausar" hidden>Pausar</button>
      <button class="botao fino" data-voz="continuar" hidden>Continuar</button>
      <button class="botao fino" data-voz="parar" hidden>Parar</button>
      <small>Leitura pela voz sintetizada do seu aparelho (não é uma gravação).</small>
    </div>` : ''}
    <article class="texto-liturgico texto-homilia">
      ${t.leituraTitulo ? `<h3 class="secao">${esc(t.leituraTitulo)}</h3>` : ''}
      ${t.leitura ? `<p class="homilia-leitura">${esc(t.leitura)}</p>` : ''}
      <h3 class="secao">Homilia</h3>
      ${t.paragrafos.map((p) => `<p>${esc(p)}</p>`).join('')}
    </article>
    <section class="homilia-fonte">
      <h3>Fonte</h3>
      <p><strong>Texto latino de referência:</strong> ${esc(ob.edicao_critica || '')}${h.ccsl ? ` — ${esc(h.ccsl)}` : ''}.</p>
      ${h.rubrica_latina ? `<p><strong>Rubrica latina:</strong> <em>${esc(h.rubrica_latina)}</em></p>` : ''}
      ${ob.edicao_historica ? `<p><strong>Edição antiga:</strong> ${esc(ob.edicao_historica)}</p>` : ''}
      <p><strong>Tradução portuguesa:</strong> tradutor ${esc(tr.tradutor || 'não identificado')}. ${esc(tr.origem || '')}</p>
      <p><strong>Revisão:</strong> ${esc(tr.revisao || '')}</p>
      ${ob.autenticidade ? `<p><strong>Autoria:</strong> ${esc(ob.autenticidade)}</p>` : ''}
      <p class="homilia-arquivo">Arquivo do texto publicado: <code>dados/${esc(h.arquivo)}.txt</code></p>
    </section>
    <div class="seguinte"><a href="${voltar}"><small>Voltar para</small><strong>Liturgia Diária</strong></a><a class="dir" href="#/calendario/${iso.slice(0, 7)}?dia=${iso}"><small>Ver no</small><strong>Calendário</strong></a></div>
  </div>`;
  if (temVoz) ligarVoz([t.leituraTitulo, t.leitura, 'Homilia.', ...t.paragrafos].filter(Boolean));
  window.scrollTo({ top: 0 });
}

/** Leitura em voz alta, parágrafo por parágrafo (Web Speech API, sem serviços externos). */
function ligarVoz(partes) {
  const sintese = window.speechSynthesis;
  const bt = (k) => app.querySelector(`[data-voz="${k}"]`);
  const estado = (falando, pausado) => {
    bt('ouvir').hidden = falando;
    bt('pausar').hidden = !falando || pausado;
    bt('continuar').hidden = !falando || !pausado;
    bt('parar').hidden = !falando;
  };
  const vozPt = () => (sintese.getVoices() || []).find((v) => /^pt(-|_)BR/i.test(v.lang)) || (sintese.getVoices() || []).find((v) => /^pt/i.test(v.lang)) || null;
  bt('ouvir').addEventListener('click', () => {
    pararVoz();
    const meu = {};
    leitorVoz = meu;
    let i = 0;
    const proxima = () => {
      if (leitorVoz !== meu) return;
      if (i >= partes.length) { estado(false, false); leitorVoz = null; return; }
      const u = new SpeechSynthesisUtterance(partes[i++]);
      u.lang = 'pt-BR';
      const v = vozPt(); if (v) u.voice = v;
      u.onend = proxima;
      u.onerror = () => { if (leitorVoz === meu) { estado(false, false); leitorVoz = null; } };
      sintese.speak(u);
    };
    estado(true, false);
    proxima();
  });
  bt('pausar').addEventListener('click', () => { sintese.pause(); estado(true, true); });
  bt('continuar').addEventListener('click', () => { sintese.resume(); estado(true, false); });
  bt('parar').addEventListener('click', () => { pararVoz(); estado(false, false); });
}

function telaCalendario(ano, mes, sel) {
  marcarNav('calendario');
  const hoje = hojeIso();
  if (!sel) sel = (ano === +hoje.slice(0, 4) && mes === +hoje.slice(5, 7)) ? hoje : `${ano}-${String(mes).padStart(2, '0')}-01`;
  const dSel = cal.dia(sel);
  definirCor(dSel.cor);
  const ant = mes === 1 ? [ano - 1, 12] : [ano, mes - 1];
  const prox = mes === 12 ? [ano + 1, 1] : [ano, mes + 1];
  const fmt = ([a, m]) => `${a}-${String(m).padStart(2, '0')}`;
  app.innerHTML = `<div class="pagina">
    <div class="cal-cab">
      <h1>${NOMES_MESES[mes - 1]} ${ano}</h1>
      <a class="botao-icone" href="#/calendario/${fmt(ant)}" aria-label="Mês anterior">${svg('esq')}</a>
      <a class="botao-icone" href="#/calendario/${fmt(prox)}" aria-label="Próximo mês">${svg('dir')}</a>
      ${seletorMes(mes)} ${seletorAno(ano)}
      <a class="botao fino" href="#/calendario/${hoje.slice(0, 7)}?dia=${hoje}">${svg('hoje')} Hoje</a>
    </div>
    <div class="cal-layout">
      <div>${desenharMes(cal, ano, mes, sel)}</div>
      <div id="cal-detalhe">${detalheDia(dSel)}</div>
    </div>
  </div>`;
  app.querySelectorAll('.cal-dia[data-dia]').forEach((b) => b.addEventListener('click', () => {
    history.replaceState(null, '', `#/calendario/${fmt([ano, mes])}?dia=${b.dataset.dia}`);
    app.querySelectorAll('.cal-dia.selecionado').forEach((x) => x.classList.remove('selecionado'));
    b.classList.add('selecionado');
    const d = cal.dia(b.dataset.dia);
    definirCor(d.cor);
    $('#cal-detalhe').innerHTML = detalheDia(d);
    if (window.innerWidth < 980) $('#cal-detalhe').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  const ir = () => { location.hash = `#/calendario/${$('#cal-ano').value}-${String($('#cal-mes').value).padStart(2, '0')}`; };
  $('#cal-ano').addEventListener('change', ir);
  $('#cal-mes').addEventListener('change', ir);
}

function telaSobre() {
  marcarNav('');
  definirCor('verde');
  app.innerHTML = `<div class="pagina sobre">
    <h1 class="titulo-pagina" style="margin-top:22px">Sobre</h1>
    <p>Um espaço simples para rezar a <strong>Liturgia das Horas</strong> e acompanhar a <strong>Liturgia Diária</strong>. Sem propagandas, sem distrações.</p>
    <h2>Como funciona</h2>
    <p>O site identifica a data de hoje, calcula o calendário litúrgico (tempos, semanas, saltério, solenidades, festas e memórias, com as particularidades do Brasil) e abre os textos correspondentes. Quando há memória facultativa, você escolhe qual celebração quer acompanhar.</p>
    <p>Quando algum texto não existe no acervo, isso é indicado com um aviso — nenhum texto litúrgico foi inventado para preencher lacunas.</p>
    <h2>Créditos</h2>
    <p><strong>Textos da Liturgia das Horas, Lecionários, Missal e documentos da Igreja</strong><br>Conferência Nacional dos Bispos do Brasil (CNBB)<br>© Todos os direitos reservados.</p>
    <p><strong>Coletas salmódicas</strong><br>Secretariado Nacional de Liturgia — Conferência Episcopal Portuguesa<br>© Todos os direitos reservados.</p>
    <p><strong>Homilias de São Gregório Magno</strong><br>Tradução portuguesa obtida no portal OpenSaints, a partir do texto latino da edição de Migne (Patrologia Latina 76); tradutor não identificado. Revisão deste projeto, conferida com a edição crítica de R. Étaix (CCSL 141, Brepols, 1999).</p>
    <h2>Para quem cuida do conteúdo</h2>
    <p>Todos os textos estão em arquivos <code>.txt</code> na pasta <code>dados/</code>. Os salmos ficam em <code>dados/salmos/</code> (um arquivo por salmo, usado em todos os ofícios). Veja o guia em <code>dados/LEIA-ME.md</code>.</p>
  </div>`;
}

// ------------------------------------------------------------- ajustes
function abrirAjustes() {
  const existente = $('.painel');
  if (existente) { existente.remove(); return; }
  const tema = prefs.ler('tema', 'auto');
  const tam = prefs.ler('tamanho', 1);
  const inv = prefs.ler('invitatorio', 'comunitaria');
  const div = document.createElement('div');
  div.className = 'painel';
  div.setAttribute('role', 'dialog');
  div.setAttribute('aria-label', 'Ajustes de leitura');
  div.innerHTML = `<h4>Ajustes de leitura</h4>
    <div class="linha"><span>Tema</span><div class="segmentado" data-k="tema">
      ${[['auto', 'Auto'], ['claro', 'Claro'], ['escuro', 'Escuro']].map(([v, r]) => `<button data-v="${v}" aria-pressed="${tema === v}">${r}</button>`).join('')}</div></div>
    <div class="linha"><span>Texto</span><div class="segmentado" data-k="tamanho">
      ${['A−', 'A', 'A+', 'A++'].map((r, i) => `<button data-v="${i}" aria-pressed="${tam === i}">${r}</button>`).join('')}</div></div>
    <div class="linha"><span>Invitatório</span><div class="segmentado" data-k="invitatorio">
      ${[['comunitaria', 'Em grupo'], ['individual', 'Sozinho']].map(([v, r]) => `<button data-v="${v}" aria-pressed="${inv === v}">${r}</button>`).join('')}</div></div>
    <p class="dica">Sozinho: a antífona do Invitatório é dita só no começo e no fim do salmo.</p>
    <div class="linha oculto" id="linha-versao"><span>Versão</span><select id="sel-versao"></select></div>`;
  document.body.appendChild(div);
  div.querySelectorAll('.segmentado').forEach((g) => g.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    const k = g.dataset.k; const v = k === 'tamanho' ? Number(b.dataset.v) : b.dataset.v;
    prefs.gravar(k, v); aplicarPrefs();
    g.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    if (k === 'invitatorio' && /\/invitatorio(\?|$)/.test(location.hash)) rotear();
  }));
  dados.listarVersoes().then((vs) => {
    if (!vs.length) return;
    const sel = $('#sel-versao', div);
    const atual = prefs.ler('versao', null);
    sel.innerHTML = `<option value="">Texto oficial</option>` + vs.map((v) => `<option value="${esc(v.id)}"${v.id === atual ? ' selected' : ''}>${esc(v.nome)}</option>`).join('');
    $('#linha-versao', div).classList.remove('oculto');
    sel.addEventListener('change', () => { prefs.gravar('versao', sel.value || null); aplicarPrefs(); rotear(); });
  });
  setTimeout(() => document.addEventListener('click', function fora(e) {
    if (!div.contains(e.target) && !e.target.closest('#bt-ajustes')) { div.remove(); document.removeEventListener('click', fora); }
  }), 0);
}

// ------------------------------------------------------------- rotas
async function rotear() {
  const h = location.hash.replace(/^#\/?/, '');
  const [caminho, query = ''] = h.split('?');
  const qs = new URLSearchParams(query);
  const p = caminho.split('/').filter(Boolean);
  $('.painel')?.remove();
  try {
    if (!p.length) return await telaInicio();
    if (p[0] === 'horas') {
      const iso = isoValido(p[1]) ? p[1] : hojeIso();
      if (p[2]) {
        const op = qs.has('op') ? (qs.get('op') || null) : undefined;
        if (op !== undefined) gravarEscolha(iso, op);
        return await telaOficio(iso, p[2], op);
      }
      return await telaHorasDia(iso);
    }
    if (p[0] === 'liturgia-diaria') {
      const iso = isoValido(p[1]) ? p[1] : hojeIso();
      if (p[2] === 'homilia' && p[3]) return await telaHomilia(iso, p[3], qs.has('op') ? qs.get('op') || null : undefined);
      return await telaLiturgiaDiaria(iso, qs.has('op') ? qs.get('op') || null : undefined, qs.get('l') || null);
    }
    if (p[0] === 'calendario') {
      const hoje = hojeIso();
      const m = (p[1] || '').match(/^(\d{4})-(\d{2})$/);
      const ano = m ? +m[1] : +hoje.slice(0, 4), mes = m ? +m[2] : +hoje.slice(5, 7);
      return telaCalendario(ano, Math.min(12, Math.max(1, mes)), isoValido(qs.get('dia')) ? qs.get('dia') : null);
    }
    if (p[0] === 'sobre') return telaSobre();
    location.hash = '#/';
  } catch (e) {
    console.error(e);
    app.innerHTML = `<div class="pagina"><div class="lacuna" style="margin-top:30px">${ICONE_INFO}<span>Não foi possível carregar esta página. Verifique se o site está sendo aberto por um servidor (e não diretamente do arquivo). Detalhe: ${esc(e.message)}</span></div></div>`;
  }
}

async function iniciar() {
  aplicarPrefs();
  const santoral = await dados.json('calendario/santoral.json');
  cal = new CalendarioLiturgico(santoral);
  await Promise.all([LH.iniciar(), LD.iniciar(), HM.iniciar()]);
  $('#bt-ajustes').addEventListener('click', abrirAjustes);
  window.addEventListener('hashchange', rotear);
  const topo = $('.topo');
  window.addEventListener('scroll', () => topo.classList.toggle('rolou', window.scrollY > 4), { passive: true });
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', aplicarPrefs);
  await rotear();
}

iniciar();
