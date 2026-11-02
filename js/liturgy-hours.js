/**
 * Liturgia das Horas: decide QUAIS textos (arquivos em
 * dados/liturgia-das-horas) formam cada hora de um dia, e monta o ofício.
 *
 * Muitos ofícios do acervo são compostos de partes:
 *   - salmodia do saltério + próprio do dia (ex.: Advento, Natal);
 *   - salmodia do Ofício das Leituras + leituras da semana (Tempo Comum).
 * As regras abaixo reproduzem essa composição a partir dos nomes dos
 * arquivos. Para mudar um texto, edite o arquivo .txt; para mudar QUAL
 * arquivo é usado num dia, ajuste as regras deste módulo.
 */
import { DIAS_CHAVE } from './liturgical-calendar.js';
import * as dados from './dados.js';
import { lerDocumento, lerSalmo, textoDaSecao } from './texto.js';

export const HORAS = [
  { id: 'invitatorio', nome: 'Invitatório', curto: 'Invitatório', momento: 'Para começar o dia' },
  { id: 'leituras', nome: 'Ofício das Leituras', curto: 'Leituras', momento: 'A qualquer hora' },
  { id: 'laudes', nome: 'Laudes', curto: 'Laudes', momento: 'Oração da manhã' },
  { id: 'terca', nome: 'Terça', curto: 'Terça', momento: 'Meio da manhã' },
  { id: 'sexta', nome: 'Sexta', curto: 'Sexta', momento: 'Meio-dia' },
  { id: 'nona', nome: 'Noa', curto: 'Noa', momento: 'Meio da tarde' },
  { id: 'vesperas', nome: 'Vésperas', curto: 'Vésperas', momento: 'Oração da tarde' },
  { id: 'completas', nome: 'Completas', curto: 'Completas', momento: 'Antes de dormir' },
];
export const HORA = Object.fromEntries(HORAS.map((h) => [h.id, h]));

const LH = 'liturgia-das-horas/';
let arquivos = null;

export async function iniciar() {
  if (arquivos) return;
  const j = await dados.json(LH + 'arquivos.json');
  arquivos = new Set(j ? j.arquivos : []);
}
const existe = (p) => arquivos.has(p);
const dd = (n) => String(n).padStart(2, '0');

/** primeiro caminho existente de uma lista de candidatos */
function primeiro(...cands) {
  for (const c of cands.flat()) if (c && existe(c)) return c;
  return null;
}
/** lista de partes; null se alguma parte obrigatória faltar */
function partes(...lista) {
  const r = [];
  for (const p of lista) {
    if (!p) continue;
    if (Array.isArray(p)) { const x = primeiro(...p); if (!x) return null; r.push(x); }
    else { if (!existe(p)) return null; r.push(p); }
  }
  return r.length ? r : null;
}

/**
 * Hino das Completas na Quaresma (Liturgia das Horas, vol. II, p. 34-35 e
 * 965-966): na 1ª, 3ª e 5ª semanas, "Agora que o clarão" (arquivos comuns);
 * nas semanas restantes — dias depois das Cinzas, 2ª e 4ª semanas e Semana
 * Santa —, "Ó Cristo, dia e esplendor" (arquivos -ii e -par do acervo).
 */
const hinoParDaQuaresma = (dia) => (dia.tempo === 'quaresma' || dia.tempo === 'triduo') && ![1, 3, 5].includes(dia.semana);

// --------------------------------------------------------------- ofício do tempo (ferial)
function ferial(dia, hora) {
  const d = DIAS_CHAVE[dia.diaSemana];
  const P = dia.semanaSalterio;
  const W = dia.semana;
  const r = { partes: null, preencher: {}, notas: [] };

  switch (dia.tempo) {
    case 'comum': {
      const sal = `tempo-comum/salterio/semana-${P}/${d}`;
      if (hora === 'leituras') r.partes = partes(`${sal}-leituras`, `tempo-comum/leituras/semana-${dd(W)}/${d}`);
      else if (hora === 'completas') r.partes = partes(`tempo-comum/completas/${d}`);
      else r.partes = partes(`${sal}-${hora}`);
      // oração do domingo (o saltério dominical deixa a oração em aberto)
      const semanaDom = (d === 'sabado' && hora === 'vesperas') ? W + 1 : W;
      r.preencher.oracao = `tempo-comum/leituras/semana-${dd(semanaDom)}/domingo`;
      // antífonas do Benedictus/Magnificat dos domingos (Anos A, B e C)
      const momento = d === 'sabado' && hora === 'vesperas' ? 'vesperas-i'
        : d === 'domingo' && hora === 'laudes' ? 'laudes'
          : d === 'domingo' && hora === 'vesperas' ? 'vesperas-ii' : null;
      if (momento) r.preencher.antifonas = { arquivo: `tempo-comum/domingos/domingo-${dd(semanaDom)}`, momento };
      break;
    }
    case 'advento': {
      const dia_ = dia.mes === 12 ? dia.dia : 0; // 0 = novembro (antes de 17/dez)
      const dez = `advento/proprio/dezembro-${dd(dia_)}`;
      if (dia.diaSemana === 0) {
        if (W <= 2) {
          r.partes = hora === 'leituras'
            ? partes(`advento/semana-${W}/domingo-leituras`, `advento/leituras/semana-${W}/domingo`)
            : partes(`advento/semana-${W}/domingo-${hora}`);
        } else if (W === 3) {
          const suf = dia_ >= 17 ? '-a-partir-de-17-dez' : '';
          r.partes = hora === 'leituras'
            ? partes([`advento/semana-3/domingo-leituras${suf}`, 'advento/semana-3/domingo-leituras'], 'advento/leituras/semana-3/domingo')
            : partes([`advento/semana-3/domingo-${hora}${suf}`, `advento/semana-3/domingo-${hora}`]);
        } else {
          const v24 = `advento/salterio-24-dez/semana-4/domingo-${hora}`;
          const v17 = `advento/salterio-17-a-23-dez/semana-4/domingo-${hora}`;
          if (hora === 'leituras') {
            r.partes = partes('advento/salterio/semana-4/domingo-leituras', 'advento/leituras/semana-4/domingo');
          } else if (dia_ === 24) {
            r.partes = partes(v24);
          } else if (existe(v17)) {
            r.partes = partes(v17);
          } else if (existe(v24)) {
            r.partes = partes(v24);
            r.notas.push('O acervo não traz esta hora própria do IV Domingo para os dias 18 a 23; foi usado o texto do IV Domingo previsto para 24 de dezembro.');
          }
        }
        if (hora === 'completas') r.partes = partes(dia_ >= 17 ? ['advento/completas/domingo-a-partir-de-17-dez', 'advento/completas/domingo'] : 'advento/completas/domingo');
      } else if (dia_ <= 16) {
        if (hora === 'completas') r.partes = partes(`advento/completas/${d}`);
        else if (W <= 2) {
          if (hora === 'leituras') r.partes = partes(`advento/semana-${W}/${d}-leituras`, `advento/leituras/semana-${W}/${d}`);
          else if (hora === 'vesperas' && d === 'sabado' && dia_ === 16) r.partes = partes(['advento/semana-2/sabado-vesperas-dez-16', 'advento/semana-2/sabado-vesperas']);
          else r.partes = partes(`advento/semana-${W}/${d}-${hora}`);
        } else {
          if (hora === 'leituras') r.partes = partes(`advento/salterio/semana-${W}/${d}-leituras`, `advento/proprio/semana-${W}/${d}-leituras`, `advento/leituras/semana-${W}/${d}`);
          else r.partes = partes(`advento/salterio/semana-${W}/${d}-${hora}`, [`advento/proprio/semana-${W}/${d}-${hora}`]);
        }
      } else {
        // 17 a 24 de dezembro
        if (hora === 'completas') r.partes = partes([`advento/completas/${d}-a-partir-de-17-dez`, `advento/completas/${d}`]);
        else if (hora === 'leituras') r.partes = partes(`advento/salterio/semana-${W}/${d}-leituras`, `${dez}/leituras`, `advento/leituras/dezembro-${dd(dia_)}`);
        else if (hora === 'vesperas' && d === 'sabado') {
          // I Vésperas do IV Domingo
          r.partes = partes(dia_ === 23
            ? ['advento/salterio/semana-3/sabado-vesperas-dez-23', 'advento/salterio-17-a-23-dez/semana-3/sabado-vesperas']
            : ['advento/salterio-17-a-23-dez/semana-3/sabado-vesperas', 'advento/salterio/semana-3/sabado-vesperas']);
        } else {
          const cab = dia_ === 24
            ? [`advento/salterio-24-dez/semana-${W}/${d}-${hora}`, `advento/salterio/semana-${W}/${d}-${hora}`]
            : (hora === 'laudes' || hora === 'vesperas')
              ? [`advento/salterio-17-a-23-dez/semana-${W}/${d}-${hora}`, `advento/salterio/semana-${W}/${d}-${hora}`]
              : [`advento/salterio/semana-${W}/${d}-${hora}`];
          r.partes = partes(cab, `${dez}/${hora}`);
        }
      }
      break;
    }
    case 'natal': {
      const { mes, dia: n } = dia;
      if (mes === 12) {
        const pasta = `natal/dezembro-${dd(n)}`;
        if (hora === 'leituras') r.partes = partes(`${pasta}/leituras`, `natal/leituras/dezembro-${dd(n)}`);
        else if (hora === 'completas') r.partes = partes('natal/completas/oitava-ii');
        else r.partes = partes(`${pasta}/${hora}`);
      } else if (dia.subtipo === 'antes-epifania') {
        const pasta = `natal/janeiro-${dd(n)}`;
        const sal = `natal/salterio/semana-${P}/${d}`;
        if (hora === 'leituras') r.partes = partes(`${sal}-leituras`, `${pasta}/leituras`, `natal/leituras/janeiro-${dd(n)}`);
        else if (hora === 'completas') r.partes = partes('natal/completas/antes-da-epifania');
        else r.partes = partes(`${sal}-${hora}`, `${pasta}/${hora}`);
      } else {
        if (hora === 'leituras') r.partes = partes(`natal/apos-epifania/${d}-leituras`, `natal/leituras/apos-epifania-${d}`);
        else if (hora === 'completas') r.partes = partes('natal/completas/apos-epifania');
        else r.partes = partes(`natal/apos-epifania/${d}-${hora}`);
      }
      break;
    }
    case 'quaresma': {
      let pasta;
      if (W === 0) pasta = `quaresma/apos-cinzas/${d}`;
      else if (W === 6) pasta = `semana-santa/${d}`;
      else pasta = `quaresma/semana-${W}/${d}`;
      if (hora === 'completas') r.partes = partes(hinoParDaQuaresma(dia) ? [`quaresma/completas/${d}-ii`, `quaresma/completas/${d}`] : `quaresma/completas/${d}`);
      else r.partes = partes(`${pasta}-${hora}`);
      break;
    }
    case 'triduo': {
      if (hora === 'completas') r.partes = partes(d === 'sexta' ? 'quaresma/completas/triduo' : 'quaresma/completas/sabadosanto');
      break;
    }
    case 'pascoa': {
      const pasta = `pascoa/semana-${W}/${d}`;
      if (hora === 'completas') r.partes = partes([`${pasta}-completas`, `pascoa/completas/${d}`]);
      else r.partes = partes(`${pasta}-${hora}`);
      break;
    }
  }
  return r;
}

// --------------------------------------------------------------- celebrações com ofício próprio
function completasDaSolenidade(dia, qual) {
  const t = dia.tempo;
  const pasta = { comum: 'tempo-comum', pascoa: 'pascoa', quaresma: 'quaresma', natal: 'natal', advento: 'tempo-comum', triduo: 'quaresma' }[t] || 'tempo-comum';
  const par = pasta === 'quaresma' && hinoParDaQuaresma(dia) ? `quaresma/completas/solenidade-${qual}-par` : null;
  return primeiro(par, `${pasta}/completas/solenidade-${qual}`, `tempo-comum/completas/solenidade-${qual}`);
}

function proprio(cel, dia, hora) {
  if (!cel || !cel.oficio) return null;
  const of = cel.oficio;
  // Vésperas do Sábado Santo: no acervo estão no arquivo "pascoa_Ivesperas"
  if (cel.id === 'sabadosanto' && hora === 'vesperas' && existe('proprio/pascoa/i-vesperas')) {
    return { partes: ['proprio/pascoa/i-vesperas'], preencher: {}, notas: [] };
  }
  const cands = [];
  if (dia.tempo === 'pascoa') cands.push(`${of}/${hora}-tempo-pascal`);
  if (dia.diaSemana === 0) cands.push(`${of}/${hora}-domingo`);
  cands.push(`${of}/${hora}`);
  if (hora === 'completas') {
    const c = primeiro(`${of}/completas`);
    if (c) return { partes: [c], preencher: {}, notas: [] };
    if (cel.grau === 'solenidade' || cel.precedencia <= 2) {
      const s = completasDaSolenidade(dia, 'ii');
      if (s) return { partes: [s], preencher: {}, notas: [] };
    }
    return null;
  }
  const p = primeiro(cands);
  return p ? { partes: [p], preencher: {}, notas: [] } : null;
}

/** celebração que o usuário está seguindo neste dia */
export function celebracaoEscolhida(dia, opcaoId) {
  if (opcaoId && dia.opcoes) {
    const o = dia.opcoes.find((x) => x.id === opcaoId);
    if (o) return { ...o, tipo: 'santo', escolhida: true };
  }
  return dia.celebracao;
}

/** memória do calendário sem textos próprios no acervo (santoral.json: "oficio": null) */
const semTextosProprios = (cel) => !!cel && cel.tipo === 'santo' && !cel.oficio;
const avisoSemTextos = (cel) => `${cel.nome}: o acervo não traz os textos próprios desta memória. Usa-se o ofício do dia de semana.`;

const TEM_I_VESPERAS = (c, dia) => c && (dia.diaSemana === 0 || c.grau === 'solenidade' || (c.tipo === 'temporal' && c.precedencia <= 5));

/**
 * Antífona do Invitatório (mesma regra do aplicativo original):
 * celebração própria pelo seu id; senão, conforme o tempo litúrgico.
 * Retorna { chaves: [em ordem de preferência], aleluia }
 */
function chavesInvitatorio(dia, cel) {
  let tempo;
  switch (dia.tempo) {
    case 'comum': tempo = `TC${dia.semanaSalterio}${DIAS_CHAVE[dia.diaSemana]}`; break;
    case 'quaresma': tempo = dia.semana === 6 ? 'TSS' : 'TQ'; break;
    case 'triduo': tempo = 'TSS'; break;
    case 'pascoa': tempo = dia.semana <= 6 ? 'TP1' : 'TP2'; break;
    case 'advento': tempo = dia.mes === 12 && dia.dia === 24 ? 'TA24' : (dia.mes === 12 && dia.dia >= 17 ? 'TA2' : 'TA1'); break;
    case 'natal': tempo = dia.subtipo === 'apos-epifania' ? 'TN2' : 'TN'; break;
    default: tempo = null;
  }
  const memoria = cel && (cel.grau === 'memoria' || cel.grau === 'memoria-facultativa');
  return {
    chaves: [cel && cel.id, tempo].filter(Boolean),
    aleluia: !!(cel && cel.id && memoria && dia.tempo === 'pascoa' && cel.id !== 'santacatarina'),
  };
}

/** Lê um arquivo de antífonas (@antifona chave + texto; "= outra" = mesma antífona). */
async function antifonasDe(caminho) {
  const t = await dados.texto(LH + caminho + '.txt');
  if (t == null) return null;
  const mapa = {};
  for (const b of lerDocumento(t).blocos) if (b.tipo === 'antifona' && b.arg) mapa[b.arg] = b.texto;
  const resolver = (k, n = 0) => {
    const v = mapa[k];
    if (v == null || n > 5) return null;
    const m = v.match(/^=\s*(\S+)\s*$/);
    return m ? resolver(m[1], n + 1) : v;
  };
  return { obter: resolver, origem: LH + caminho + '.txt' };
}

const RUBRICA_INVITATORIO = 'Em seguida diz-se o salmo com sua antífona, em forma responsorial. Anuncia-se a antífona e imediatamente repete-se a mesma.';
// Ordinário da Liturgia das Horas (Invitatório)
const RUBRICA_INVITATORIO_INDIVIDUAL = 'Na recitação individual não é necessário repetir a antífona; basta dizê-la no começo e no fim do salmo.';

/**
 * Decide os arquivos de uma hora.
 * Retorna { partes: [...], preencher, notas, titulo, primeirasVesperas }
 */
export function resolverHora(cal, dia, hora, opcaoId) {
  const cel = celebracaoEscolhida(dia, opcaoId);
  let res = null;
  let titulo = HORA[hora].nome;
  let celebracaoDaHora = cel;

  if (hora === 'invitatorio') {
    return {
      partes: ['invitatorio/salmo-94'], alternativas: ['invitatorio/salmo-99', 'invitatorio/salmo-66', 'invitatorio/salmo-23'],
      preencher: { invitatorio: chavesInvitatorio(dia, cel) }, notas: semTextosProprios(cel) ? [avisoSemTextos(cel)] : [], titulo, celebracao: cel, hora,
    };
  }

  // Vésperas e Completas: verificar as I Vésperas do dia seguinte
  if (hora === 'vesperas' || hora === 'completas') {
    const amanha = cal.dia(cal.proximo(dia.data));
    const cA = amanha.celebracao;
    const pHoje = cel.escolhida ? 12 : (cel.precedencia ?? 13);
    // empate: no sábado vence o domingo; em 24/12 vence o Natal
    const empateVence = cA && cA.precedencia === pHoje && ((dia.diaSemana === 6 && amanha.diaSemana === 0) || (dia.mes === 12 && dia.dia === 24));
    if (TEM_I_VESPERAS(cA, amanha) && (cA.precedencia < pHoje || empateVence) && cel.id !== 'sabadosanto') {
      celebracaoDaHora = cA;
      if (hora === 'vesperas') {
        titulo = 'I Vésperas';
        const iv = cA.oficio ? primeiro(`${cA.oficio}/i-vesperas`) : null;
        if (iv) res = { partes: [iv], preencher: {}, notas: [] };
        else if (amanha.tempo === 'advento' && amanha.semana === 1 && amanha.diaSemana === 0) {
          res = { partes: partes('advento/semana-1/domingo-i-vesperas'), preencher: {}, notas: [] };
        } else {
          // véspera de domingo: o arquivo de sábado do saltério já é a I Vésperas
          res = ferial(dia, 'vesperas');
          if (amanha.tempo === 'comum') res.preencher.oracao = `tempo-comum/leituras/semana-${dd(amanha.semana)}/domingo`;
        }
      } else {
        if (cA.grau === 'solenidade' && amanha.diaSemana !== 0) {
          const s = completasDaSolenidade(amanha, 'i');
          res = s ? { partes: [s], preencher: {}, notas: [] } : null;
        } else if (amanha.diaSemana === 0 && dia.diaSemana === 6) {
          res = ferial(dia, 'completas');
        }
        if (!res && dia.mes === 12 && dia.dia === 24) res = { partes: partes('natal/completas/vespera-natal'), preencher: {}, notas: [] };
      }
    }
  }

  if (!res) {
    if (cel.oficio) {
      res = proprio(cel, dia, hora);
      if (res && res.partes && ['laudes', 'vesperas', 'leituras'].includes(hora)) {
        const f = ferial(dia, hora);
        if (f.partes) res.ferial = f.partes; // usado se o próprio remeter ao dia de semana
      }
      if (res && cel.tipo === 'santo' && hora === 'leituras') {
        // memórias: as leituras ficam como no acervo (ofício completo)
      }
    }
    if (!res || !res.partes) {
      const f = ferial(dia, hora);
      if (f.partes) {
        res = f;
        if (cel.oficio && cel.tipo === 'santo' && ['terca', 'sexta', 'nona'].includes(hora)) {
          res.notas.push('Na memória, a Hora Média é a do dia de semana.');
        }
      } else if (!res) res = f;
    }
    if (hora === 'vesperas' && (cel.grau === 'solenidade' || dia.diaSemana === 0)) titulo = 'II Vésperas';
    // celebração sem textos próprios no acervo (santoral.json: "oficio": null)
    if (semTextosProprios(cel) && celebracaoDaHora === cel && ['leituras', 'laudes', 'vesperas'].includes(hora)) {
      res.notas = [...(res.notas || []), avisoSemTextos(cel)];
    }
  }
  return { ...res, hora, titulo, celebracao: celebracaoDaHora };
}

// --------------------------------------------------------------- montagem do texto
const cacheSalmos = new Map();
export async function salmo(id) {
  const chave = (dados.versao() || '') + '|' + id;
  if (cacheSalmos.has(chave)) return cacheSalmos.get(chave);
  const p = dados.texto(id + '.txt').then((t) => (t == null ? null : lerSalmo(t)));
  cacheSalmos.set(chave, p);
  return p;
}

const TEXTO_LACUNA = {
  'antifona-benedictus': 'A antífona própria do Cântico evangélico (Benedictus) deste domingo não está disponível no acervo.',
  'antifona-magnificat': 'A antífona própria do Cântico evangélico (Magnificat) deste domingo não está disponível no acervo.',
  'antifona-invitatorio': 'A antífona do Invitatório deste dia não está disponível no acervo.',
  oracao: 'A oração própria não está disponível no acervo.',
};

/**
 * Monta o ofício: carrega as partes, junta os blocos, resolve salmos da
 * biblioteca e preenche lacunas quando possível.
 * opcoes.invitatorio: 'comunitaria' (antífona depois de cada estrofe, padrão)
 *                     ou 'individual' (antífona só no começo e no fim do salmo)
 * Retorna { blocos, origens, lacunas, notas }
 */
export async function montarOficio(res, dia, opcoes = {}) {
  const origens = [];
  let blocos = [];
  const lacunas = [];
  for (const p of res.partes || []) {
    const t = await dados.texto(LH + p + '.txt');
    if (t == null) { lacunas.push({ codigo: 'arquivo', texto: `Arquivo não encontrado: ${p}` }); continue; }
    const doc = lerDocumento(t);
    origens.push({ arquivo: LH + p + '.txt', origem: doc.meta.origem || '' });
    blocos.push(...doc.blocos.map((b) => ({ ...b, parte: p })));
  }
  // quando se juntam duas partes, o versículo da salmodia do saltério
  // é substituído pelo do próprio, se houver
  blocos = removerDuplicacoes(blocos);

  // próprio que remete ao dia de semana (seções vazias / sem salmodia)
  if (res.ferial) blocos = await completarComFerial(blocos, res.ferial, origens);

  // antífonas que o acervo guardava fora dos HTML
  let antInv = null, antInvTexto = null, antDom = null, antDomTexto = null;
  if (res.preencher?.invitatorio) {
    antInv = await antifonasDe('invitatorio/antifonas');
    for (const k of res.preencher.invitatorio.chaves) {
      antInvTexto = antInv && antInv.obter(k);
      if (antInvTexto) break;
    }
    if (antInvTexto && res.preencher.invitatorio.aleluia && !/aleluia\.?\s*$/i.test(antInvTexto)) antInvTexto = antInvTexto.replace(/\s*$/, ' Aleluia.');
    if (antInvTexto) origens.push({ arquivo: antInv.origem, origem: '(antífona do Invitatório)' });
  }
  if (res.preencher?.antifonas && dia) {
    antDom = await antifonasDe(res.preencher.antifonas.arquivo);
    antDomTexto = antDom && antDom.obter(`${res.preencher.antifonas.momento}-${dia.cicloDominical}`);
    if (antDomTexto) origens.push({ arquivo: antDom.origem, origem: `(antífona do domingo, Ano ${dia.cicloDominical})` });
  }
  let primeiraInv = true;

  // preencher lacunas conhecidas
  for (let i = 0; i < blocos.length; i++) {
    const b = blocos[i];
    if (b.tipo !== 'lacuna') continue;
    if (b.arg === 'antifona-invitatorio' && antInvTexto) {
      blocos[i] = { tipo: 'refrao', arg: '', texto: antInvTexto, invitatorio: true };
      if (primeiraInv) { blocos.splice(i, 0, { tipo: 'rubrica', arg: '', texto: RUBRICA_INVITATORIO, invitatorio: true }); i++; primeiraInv = false; }
      continue;
    }
    if ((b.arg === 'antifona-benedictus' || b.arg === 'antifona-magnificat') && antDomTexto) {
      blocos[i] = { tipo: 'antifona', arg: '', texto: antDomTexto };
      continue;
    }
    if (b.arg === 'oracao' && res.preencher?.oracao) {
      const t = await dados.texto(LH + res.preencher.oracao + '.txt');
      let ora = t ? textoDaSecao(lerDocumento(t), 'Oração') : null;
      // na Hora Média, a oração do domingo termina com a conclusão breve
      if (ora && ['terca', 'sexta', 'nona'].includes(res.hora)) ora = ora.replace(/\.?\s*Por nosso Senhor Jesus Cristo, vosso Filho[\s\S]*$/, '. Por Cristo, nosso Senhor.');
      if (ora) { blocos[i] = { tipo: 'oracao', arg: '', texto: ora, preenchido: res.preencher.oracao }; continue; }
    }
    if (b.arg === 'conclusao-invitatorio' || b.arg === 'rubrica-invitatorio') { blocos[i] = null; continue; }
    const msg = TEXTO_LACUNA[b.arg] || 'Texto não disponível no acervo.';
    let extra = '';
    if ((b.arg === 'antifona-benedictus' || b.arg === 'antifona-magnificat') && dia) extra = ` (Ano ${dia.cicloDominical})`;
    blocos[i] = { tipo: 'lacuna', arg: b.arg, texto: msg.replace(' deste domingo', ' deste domingo' + extra) };
    lacunas.push(blocos[i]);
  }
  blocos = blocos.filter(Boolean);
  if (opcoes.invitatorio === 'individual') blocos = invitatorioIndividual(blocos);
  if (res.hora === 'leituras' && !blocos.some((b) => b.tipo === 'secao' && /leitura/i.test(b.arg))) {
    const l = { tipo: 'lacuna', arg: 'leituras', texto: 'As leituras deste Ofício das Leituras não estão disponíveis no acervo.' };
    const k = blocos.findIndex((b) => b.tipo === 'secao' && /^(Oração|Hino$)/i.test(b.arg) && blocos.some((x) => x.tipo === 'salmo'));
    blocos.splice(k > 0 ? k : blocos.length, 0, l);
    lacunas.push(l);
  }

  // a mesma lacuna (antífona repetida antes e depois do salmo/cântico,
  // estrofes do invitatório) é avisada uma só vez
  const vistas = new Set();
  blocos = blocos.filter((b) => {
    if (b.tipo !== 'lacuna' || !b.arg || b.arg === 'leituras') return true;
    if (vistas.has(b.arg)) return false;
    vistas.add(b.arg);
    return true;
  });

  // salmos da biblioteca
  for (const b of blocos) {
    if (b.tipo === 'salmo' && b.arg) b.salmo = await salmo(b.arg);
  }
  return { blocos, origens, lacunas, notas: res.notas || [] };
}

/** Recitação individual: a antífona do Invitatório só no começo e no fim do salmo. */
function invitatorioIndividual(blocos) {
  const refroes = blocos.map((b, i) => (b.tipo === 'refrao' && b.invitatorio ? i : -1)).filter((i) => i >= 0);
  if (refroes.length < 3) return blocos;
  const tirar = new Set(refroes.slice(1, -1));
  return blocos
    .filter((b, i) => !tirar.has(i))
    .map((b) => (b.tipo === 'rubrica' && b.invitatorio ? { ...b, texto: RUBRICA_INVITATORIO_INDIVIDUAL } : b));
}

const SECOES_FIM = /^(Leitura breve|Primeira leitura|Segunda leitura|Responsório breve|Cântico evangélico|Preces|Oração|Conclusão)/i;

function trechoDaSecao(blocos, nome) {
  const i = blocos.findIndex((b) => b.tipo === 'secao' && b.arg.toLowerCase().startsWith(nome.toLowerCase()));
  if (i < 0) return null;
  let j = i + 1;
  for (; j < blocos.length; j++) {
    const b = blocos[j];
    if (b.tipo !== 'secao') continue;
    if (/^Primeira leitura/i.test(nome) && /^Responsório/i.test(b.arg)) continue;
    if (SECOES_FIM.test(b.arg) && !b.arg.toLowerCase().startsWith(nome.toLowerCase())) break;
  }
  return blocos.slice(i + 1, j);
}

async function completarComFerial(blocos, partesFerial, origens) {
  const vazia = (i) => blocos[i].tipo === 'secao' && (i + 1 >= blocos.length || blocos[i + 1].tipo === 'secao');
  const precisa = blocos.some((b, i) => vazia(i) && /^(Salmodia|Primeira leitura)/i.test(b.arg)) || !blocos.some((b) => b.tipo === 'salmo');
  if (!precisa) return blocos;
  let fer = [];
  for (const p of partesFerial) {
    const t = await dados.texto(LH + p + '.txt');
    if (t) fer.push(...lerDocumento(t).blocos.map((b) => ({ ...b, parte: p, doDiaDeSemana: true })));
  }
  fer = removerDuplicacoes(fer);
  const out = [];
  let usou = false;
  for (let i = 0; i < blocos.length; i++) {
    out.push(blocos[i]);
    if (vazia(i) && /^(Salmodia|Primeira leitura)/i.test(blocos[i].arg)) {
      const tr = trechoDaSecao(fer, blocos[i].arg.startsWith('Salmodia') ? 'Salmodia' : 'Primeira leitura');
      if (tr && tr.length) { out.push(...tr); usou = true; }
    }
  }
  if (!out.some((b) => b.tipo === 'salmo')) {
    // não há seção de salmodia: insere a do dia antes da leitura
    const k = out.findIndex((b) => b.tipo === 'secao' && /^(Leitura breve|Primeira leitura)/i.test(b.arg));
    const tr = trechoDaSecao(fer, 'Salmodia');
    if (k > 0 && tr) { out.splice(k, 0, { tipo: 'secao', arg: 'Salmodia', texto: '' }, ...tr); usou = true; }
  }
  if (usou) origens.push(...partesFerial.map((p) => ({ arquivo: LH + p + '.txt', origem: '(salmodia/leitura do dia de semana)' })));
  return out;
}

function removerDuplicacoes(blocos) {
  // remove título/introdução repetidos quando uma parte começa outra vez
  const out = [];
  let viuIntro = false;
  for (let i = 0; i < blocos.length; i++) {
    const b = blocos[i];
    const intro = b.tipo === 'texto' && /Vinde, ó Deus, em meu auxílio/.test(b.texto);
    if (intro) { if (viuIntro) continue; viuIntro = true; }
    out.push(b);
  }
  // versículo duplicado (salmodia + próprio): mantém o último antes da 1ª leitura
  const idxLeitura = out.findIndex((b) => b.tipo === 'secao' && /^Primeira leitura/i.test(b.arg));
  if (idxLeitura > 0) {
    const versos = [];
    for (let i = 0; i < idxLeitura; i++) {
      const b = out[i];
      if (b.tipo === 'texto' && /^V\. /.test(b.texto) && /\nR\. /.test(b.texto) && b.texto.split('\n').length <= 4) versos.push(i);
    }
    if (versos.length > 1) {
      for (const i of versos.slice(0, -1)) out[i] = null;
    }
  }
  return out.filter(Boolean);
}
