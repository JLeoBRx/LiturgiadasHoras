/**
 * Calendário visual (interface). A lógica litúrgica vem de
 * liturgical-calendar.js; aqui só desenhamos o mês e o painel do dia.
 */
import { NOMES_MESES, NOMES_DIAS, dataPorExtenso, nomeGrau, hojeIso } from './liturgical-calendar.js';
import { esc } from './render.js';

const CORES = { verde: '#2f7a5c', roxo: '#6a4c9c', rosa: '#c06c8b', vermelho: '#b8443a', branco: '#c9a24f', preto: '#4a4740' };
const NOMES_CORES = { verde: 'Verde', roxo: 'Roxo', rosa: 'Rosa', vermelho: 'Vermelho', branco: 'Branco', preto: 'Preto' };

export function corHex(c) { return CORES[c] || CORES.verde; }

function rotuloCurto(d) {
  const c = d.celebracao;
  if (c.tipo === 'santo' || c.id || d.diaSemana === 0) return c.nome;
  if (d.opcoes.length) return d.opcoes.filter((o) => o.id !== 'santamarianosabado').map((o) => o.nome).join(' · ');
  return '';
}

export function desenharMes(cal, ano, mes, selecionado) {
  const dias = cal.mes(ano, mes);
  const hoje = hojeIso();
  const primeiro = dias[0].diaSemana;
  let grade = '';
  for (let i = 0; i < primeiro; i++) grade += '<div class="cal-dia vazio" aria-hidden="true"></div>';
  for (const d of dias) {
    const festivo = d.celebracao.grau === 'solenidade' || d.celebracao.grau === 'festa' || d.diaSemana === 0 || d.celebracao.precedencia <= 5;
    const classes = ['cal-dia', d.diaSemana === 0 ? 'domingo' : '', d.data === hoje ? 'hoje' : '', d.data === selecionado ? 'selecionado' : '', festivo ? 'festivo' : ''].join(' ');
    const rot = rotuloCurto(d);
    const marcas = d.opcoes.filter((o) => o.id !== 'santamarianosabado').length + d.comemoracoes.length;
    grade += `<button class="${classes}" data-dia="${d.data}" style="--c:${corHex(d.cor)}" aria-label="${esc(dataPorExtenso(d.data))}: ${esc(d.celebracao.nome)}">
      <span class="num">${d.dia}</span>
      <span class="nome-cel">${esc(rot)}</span>
      ${marcas ? `<span class="marcas">${'<i></i>'.repeat(Math.min(marcas, 3))}</span>` : ''}
      <span class="faixa"></span>
    </button>`;
  }
  const semana = NOMES_DIAS.map((n) => `<div>${n.slice(0, 3)}</div>`).join('');
  const legenda = ['verde', 'roxo', 'branco', 'vermelho', 'rosa'].map((c) => `<span><i style="background:${CORES[c]}"></i>${NOMES_CORES[c]}</span>`).join('');
  return `<div class="cal-grade"><div class="cal-semana">${semana}</div><div class="cal-dias">${grade}</div></div>
    <div class="cal-legenda">${legenda}<span>• memórias facultativas</span></div>`;
}

export function detalheDia(d) {
  const c = d.celebracao;
  const santos = [
    ...d.opcoes.map((o) => `${esc(o.nome)} <small>(memória facultativa)</small>`),
    ...d.comemoracoes.map((o) => `${esc(o.nome)} <small>(comemoração)</small>`),
  ];
  const linhas = [
    ['Dia', NOMES_DIAS[d.diaSemana]],
    ['Tempo', d.nomeTempo + (d.semana ? ` · ${d.semana}ª semana` : '')],
    d.semanaSalterioRomano ? ['Saltério', `Semana ${d.semanaSalterioRomano}`] : null,
    ['Ano', `${d.cicloDominical} (domingos) · ${d.cicloFerial} (dias de semana)`],
    ['Cor', NOMES_CORES[d.cor] || ''],
  ].filter(Boolean);
  return `<div class="cal-detalhe" style="--c:${corHex(d.cor)}">
    <div class="data">${esc(dataPorExtenso(d.data))}</div>
    <h2>${esc(c.nome)}</h2>
    <div class="grau">${esc(nomeGrau(c))}${c.transferida ? ' · transferida' : ''}</div>
    <dl>${linhas.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
    ${santos.length ? `<div class="secao-titulo" style="margin:6px 0 4px">Santos e memórias</div><ul class="santos">${santos.map((s) => `<li>${s}</li>`).join('')}</ul>` : ''}
    <div class="acoes">
      <a class="botao primario" href="#/horas/${d.data}">Liturgia das Horas</a>
      <a class="botao" href="#/liturgia-diaria/${d.data}">Liturgia Diária</a>
    </div>
  </div>`;
}

export function seletorAno(anoAtual) {
  let h = '<select id="cal-ano" aria-label="Ano">';
  for (let a = anoAtual - 30; a <= anoAtual + 30; a++) h += `<option value="${a}"${a === anoAtual ? ' selected' : ''}>${a}</option>`;
  return h + '</select>';
}

export function seletorMes(mesAtual) {
  return '<select id="cal-mes" aria-label="Mês">' + NOMES_MESES.map((m, i) => `<option value="${i + 1}"${i + 1 === mesAtual ? ' selected' : ''}>${m}</option>`).join('') + '</select>';
}
