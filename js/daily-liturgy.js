/**
 * Liturgia Diária (leituras e orações da Missa do dia).
 *
 * Independente da Liturgia das Horas. Usa o índice
 * dados/liturgia-diaria/indice.json, que liga cada dia litúrgico ao arquivo
 * de leituras (dados/liturgia-diaria/leituras) e ao de orações do Missal
 * (dados/liturgia-diaria/missal). O índice pode ser corrigido à mão.
 */
import { DIAS_CHAVE } from './liturgical-calendar.js';
import * as dados from './dados.js';
import { lerDocumento } from './texto.js';

const LD = 'liturgia-diaria/';
let indice = null;

export async function iniciar() {
  if (indice) return;
  indice = (await dados.json(LD + 'indice.json')) || { leituras: {}, missal: {} };
}

const dd = (n) => String(n).padStart(2, '0');

/** chave do dia "do tempo" (sem santos) */
function chaveTemporal(dia) {
  const d = DIAS_CHAVE[dia.diaSemana];
  const w = dia.semana;
  const c = dia.cicloDominical;
  switch (dia.tempo) {
    case 'comum': return dia.diaSemana === 0 ? `TC-${w}-domingo-${c}` : `TC-${w}-${d}-${dia.cicloFerial}`;
    case 'advento':
      if (dia.diaSemana === 0) return `ADV-${w}-domingo-${c}`;
      if (dia.mes === 12 && dia.dia >= 17) return `ADV-dez${dd(dia.dia)}`;
      return `ADV-${w}-${d}`;
    case 'natal':
      if (dia.mes === 12) return `NAT-dez${dd(dia.dia)}`;
      if (dia.subtipo === 'antes-epifania') return `NAT-jan${dd(dia.dia)}`;
      return `NAT-apos-epifania-${d}`;
    case 'quaresma':
      if (w === 0) return `QUA-0-${d}`;
      if (w === 6) return `SS-${d}`;
      return dia.diaSemana === 0 ? `QUA-${w}-domingo-${c}` : `QUA-${w}-${d}`;
    case 'pascoa': return dia.diaSemana === 0 ? `PAS-${w}-domingo-${c}` : `PAS-${w}-${d}`;
    default: return null;
  }
}

function chaveMissalTemporal(dia) {
  const d = DIAS_CHAVE[dia.diaSemana];
  const w = dia.semana;
  switch (dia.tempo) {
    case 'comum': return [`TC-${w}-domingo`];
    case 'advento':
      if (dia.mes === 12 && dia.dia >= 17 && dia.diaSemana !== 0) return [`ADV-dez${dd(dia.dia)}`, dia.dia === 24 ? 'ADV:_24dezembroAD' : null];
      return [`ADV-${w}-${d}`];
    case 'natal':
      if (dia.mes === 12) return [`NAT-dez${dd(dia.dia)}`];
      return [dia.subtipo === 'antes-epifania' ? `NAT-antes-epifania-${d}` : `NAT-apos-epifania-${d}`];
    case 'quaresma':
      if (w === 0) return [`QUA:${d}_depoisdascinzas`];
      if (w === 6) return [`SS-${d}`];
      return [`QUA-${w}-${d}`];
    case 'pascoa':
      if (w === 1) return [`PAS:${d}_oitava`];
      return [`PAS-${w}-${d}`];
    default: return [];
  }
}

function celebracaoEscolhida(dia, opcaoId) {
  if (opcaoId && dia.opcoes) {
    const o = dia.opcoes.find((x) => x.id === opcaoId);
    if (o) return { ...o, tipo: 'santo', escolhida: true };
  }
  return dia.celebracao;
}

const primeiraChave = (tabela, lista) => lista.find((k) => k && tabela[k]);

/**
 * Decide quais arquivos usar. Retorna:
 * { leituras, missal, alternativas: [{rotulo, leituras}], notas, substitutas }
 * substitutas = true quando a celebração tem leituras próprias que faltam no
 * acervo e o site mostra as do dia de semana.
 */
export function resolver(dia, opcaoId) {
  const cel = celebracaoEscolhida(dia, opcaoId);
  const L = indice.leituras, M = indice.missal;
  const c = dia.cicloDominical, dom = dia.diaSemana === 0;
  const notas = [];
  const alternativas = [];
  const tk = chaveTemporal(dia);
  let chaveL = null;
  let chavesM = [];
  let substitutas = false; // leituras do dia de semana no lugar das próprias, que faltam no acervo

  const id = cel && cel.id;
  if (id === 'natal') {
    chaveL = primeiraChave(L, ['natal-dia', 'natal-noite', 'natal-aurora']);
    for (const [k, r] of [['natal-vigilia', 'Missa da vigília'], ['natal-noite', 'Missa da noite'], ['natal-aurora', 'Missa da aurora'], ['natal-dia', 'Missa do dia']]) {
      if (L[k]) alternativas.push({ rotulo: r, chave: k, leituras: L[k] });
    }
    chavesM = ['santo:natal', 'natal'];
  } else if (id === 'sabadosanto') {
    chaveL = primeiraChave(L, [`vigilia-pascal-${c}`]);
    if (chaveL) notas.push('Durante o dia não se celebra a Missa. As leituras abaixo são as da Vigília Pascal, celebrada na noite santa.');
    chavesM = ['santo:sabadosanto'];
  } else if (cel && cel.tipo === 'santo') {
    const proprias = [dom ? `santo:${id}-${c}-domingo` : null, `santo:${id}-${c}`, dom ? `santo:${id}-domingo` : null, `santo:${id}`];
    const kp = primeiraChave(L, proprias);
    const memoria = cel.grau === 'memoria' || cel.grau === 'memoria-facultativa';
    if (memoria) {
      // memória: leituras do dia de semana; as próprias do santo, se houver, ficam como opção
      chaveL = L[tk] ? tk : kp;
      if (kp && kp !== chaveL) alternativas.push({ rotulo: 'Leituras próprias da memória', chave: kp, leituras: L[kp] });
      if (L[tk]) alternativas.unshift({ rotulo: 'Leituras do dia de semana', chave: tk, leituras: L[tk] });
    } else {
      chaveL = kp;
      if (!chaveL) {
        chaveL = L[tk] ? tk : null;
        substitutas = !!chaveL;
        notas.push('As leituras próprias desta celebração não foram encontradas no acervo; mostramos as leituras do dia.');
      }
    }
    chavesM = [`santo:${id}`];
    if (!cel.oficio && !M[`santo:${id}`]) notas.push(`${cel.nome}: o acervo não traz as orações próprias desta memória. As orações abaixo são as do dia de semana.`);
  } else if (cel && cel.id) {
    // solenidades e festas móveis (Epifania, Páscoa, Pentecostes...)
    chaveL = primeiraChave(L, [`${id}-${c}`, id]);
    chavesM = [`santo:${id}`, id];
    if (id === 'pascoa' && L[`vigilia-pascal-${c}`]) alternativas.push({ rotulo: 'Vigília Pascal', chave: `vigilia-pascal-${c}`, leituras: L[`vigilia-pascal-${c}`] }, { rotulo: 'Missa do dia', chave: 'pascoa', leituras: L.pascoa });
  } else {
    chaveL = L[tk] ? tk : null;
  }
  chavesM.push(...chaveMissalTemporal(dia));
  const km = primeiraChave(M, chavesM);
  return {
    chave: chaveL,
    leituras: chaveL ? L[chaveL] : null,
    missal: km ? M[km] : null,
    alternativas: alternativas.length > 1 ? alternativas : [],
    substitutas,
    notas,
    celebracao: cel,
  };
}

/** Carrega os textos (leituras e orações). */
export async function montar(res, chaveEscolhida) {
  const L = indice.leituras;
  const arquivo = chaveEscolhida && L[chaveEscolhida] ? L[chaveEscolhida] : res.leituras;
  const out = { leituras: null, missal: null, origens: [], lacunas: [] };
  if (arquivo) {
    const t = await dados.texto(LD + arquivo + '.txt');
    if (t != null) {
      const doc = lerDocumento(t);
      out.leituras = doc.blocos;
      out.origens.push({ arquivo: LD + arquivo + '.txt', origem: doc.meta.origem || '' });
    }
  }
  if (!out.leituras) out.lacunas.push('As leituras deste dia não estão disponíveis no acervo.');
  if (res.missal) {
    const t = await dados.texto(LD + res.missal + '.txt');
    if (t != null) {
      const doc = lerDocumento(t);
      out.missal = doc.blocos;
      out.origens.push({ arquivo: LD + res.missal + '.txt', origem: doc.meta.origem || '' });
    }
  }
  return out;
}

export { chaveTemporal };
