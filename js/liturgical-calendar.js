/**
 * Motor do calendário litúrgico (Rito Romano, calendário do Brasil).
 *
 * Este módulo NÃO depende da interface: recebe uma data e devolve as
 * informações litúrgicas do dia (tempo, semana, saltério, ciclos,
 * celebração e memórias). Os dados dos santos vêm de
 * dados/calendario/santoral.json.
 *
 * Regras próprias do Brasil consideradas:
 *  - Epifania no domingo entre 2 e 8 de janeiro;
 *  - Ascensão no 7º domingo da Páscoa;
 *  - Batismo do Senhor no domingo seguinte; se a Epifania cai em 7 ou 8,
 *    na segunda-feira;
 *  - Ascensão no 7º domingo da Páscoa;
 *  - São Pedro e São Paulo no domingo entre 28 de junho e 4 de julho;
 *  - Assunção no domingo seguinte a 15 de agosto;
 *  - Todos os Santos no domingo seguinte a 1º de novembro; quando o dia 1º
 *    é sábado, fica no sábado, pois o domingo, 2/11, é dos Fiéis Defuntos;
 *  - Corpus Christi na quinta-feira.
 * Conferência com as fontes: ferramentas/testes/REGRAS-DO-BRASIL.md.
 */

const DIA_MS = 86400000;

export const NOMES_DIAS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
export const DIAS_CHAVE = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
export const NOMES_MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

export const NOMES_TEMPOS = {
  advento: 'Advento',
  natal: 'Tempo do Natal',
  comum: 'Tempo Comum',
  quaresma: 'Quaresma',
  triduo: 'Tríduo Pascal',
  pascoa: 'Tempo Pascal',
};

export const NOMES_GRAUS = {
  solenidade: 'Solenidade',
  festa: 'Festa',
  memoria: 'Memória',
  'memoria-facultativa': 'Memória facultativa',
  'comemoracao-defuntos': 'Comemoração',
  comemoracao: 'Comemoração',
};

const ROMANOS = ['', 'I', 'II', 'III', 'IV'];

// ---------------------------------------------------------------- datas
/** número do dia (dias desde 1970-01-01, UTC) */
export function numeroDia(ano, mes, dia) {
  return Math.floor(Date.UTC(ano, mes - 1, dia) / DIA_MS);
}
export function deNumero(n) {
  const d = new Date(n * DIA_MS);
  return { ano: d.getUTCFullYear(), mes: d.getUTCMonth() + 1, dia: d.getUTCDate() };
}
export function diaSemana(n) {
  return ((n + 4) % 7 + 7) % 7; // 0 = domingo
}
export function isoDeNumero(n) {
  const { ano, mes, dia } = deNumero(n);
  return `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
}
export function numeroDeIso(iso) {
  const [a, m, d] = iso.split('-').map(Number);
  return numeroDia(a, m, d);
}
export function hojeIso() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function domingoAteOuAntes(n) {
  return n - diaSemana(n);
}

/** Domingo de Páscoa (computus gregoriano) */
export function pascoa(ano) {
  const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
  return numeroDia(ano, mes, dia);
}

/** Datas-chave do ano civil */
export function datasDoAno(ano) {
  const P = pascoa(ano);
  const natal = numeroDia(ano, 12, 25);
  const dsNatal = diaSemana(natal);
  const advento4 = natal - (dsNatal === 0 ? 7 : dsNatal);
  const advento1 = advento4 - 21;
  const jan2 = numeroDia(ano, 1, 2);
  const epifania = jan2 + ((7 - diaSemana(jan2)) % 7); // domingo entre 2 e 8/jan
  const batismo = (epifania >= numeroDia(ano, 1, 7)) ? epifania + 1 : epifania + 7;
  // Sagrada Família: domingo na oitava do Natal; se não houver, 30/12
  let sagradaFamilia = null;
  for (let n = natal + 1; n <= natal + 6; n++) if (diaSemana(n) === 0) sagradaFamilia = n;
  if (sagradaFamilia === null) sagradaFamilia = numeroDia(ano, 12, 30);
  return {
    pascoa: P,
    cinzas: P - 46,
    quaresma1: P - 42,
    ramos: P - 7,
    quintaSanta: P - 3,
    sextaSanta: P - 2,
    sabadoSanto: P - 1,
    divinaMisericordia: P + 7,
    ascensao: P + 42,
    pentecostes: P + 49,
    maeDaIgreja: P + 50,
    trindade: P + 56,
    corpusChristi: P + 60,
    sagradoCoracao: P + 68,
    coracaoMaria: P + 69,
    advento1,
    cristoRei: advento1 - 7,
    natal,
    sagradaFamilia,
    epifania,
    batismo,
  };
}

// ---------------------------------------------------------------- tempo
const ord = (n) => `${n}º`;
const orda = (n) => `${n}ª`;

/**
 * Calcula a parte "temporal" de um dia (sem os santos).
 * precedencia: número da Tabela dos Dias Litúrgicos (1 = maior).
 */
export function temporal(n) {
  const { ano, mes, dia } = deNumero(n);
  const ds = diaSemana(n);
  const D = datasDoAno(ano);
  const Dant = datasDoAno(ano - 1);
  const t = { n, ds, tempo: null, semana: null, semanaSalterio: null, nome: '', precedencia: 13, celebracao: null, cor: 'verde' };
  const nomeDia = NOMES_DIAS[ds];
  // ano litúrgico (começa no 1º domingo do Advento)
  const anoLit = n >= D.advento1 ? ano + 1 : ano;
  t.anoLiturgico = anoLit;
  t.cicloDominical = ['C', 'A', 'B'][anoLit % 3];
  t.cicloFerial = anoLit % 2 === 1 ? 'I' : 'II';

  const salterioPorDomingos = (adv1) => {
    const semanas = Math.floor((domingoAteOuAntes(n) - adv1) / 7);
    return (semanas % 4) + 1;
  };

  if (n < D.batismo) {
    // ---- Tempo do Natal (janeiro)
    t.tempo = 'natal'; t.cor = 'branco';
    t.semanaSalterio = salterioPorDomingos(Dant.advento1);
    if (mes === 1 && dia === 1) {
      Object.assign(t, { nome: 'Santa Maria, Mãe de Deus', precedencia: 3, celebracao: 'santamaria' });
    } else if (n === D.epifania) {
      Object.assign(t, { nome: 'Epifania do Senhor', precedencia: 2, celebracao: 'epifania' });
    } else if (n < D.epifania) {
      t.nome = `${nomeDia}, ${dia} de janeiro — Tempo do Natal`;
      t.subtipo = 'antes-epifania';
    } else {
      t.nome = `${nomeDia} depois da Epifania`;
      t.subtipo = 'apos-epifania';
    }
  } else if (n === D.batismo) {
    Object.assign(t, { tempo: 'natal', nome: 'Batismo do Senhor', precedencia: 5, celebracao: 'batismo', cor: 'branco' });
    t.semanaSalterio = salterioPorDomingos(Dant.advento1);
  } else if (n < D.cinzas) {
    // ---- Tempo Comum (antes da Quaresma)
    t.tempo = 'comum';
    t.semana = Math.floor((n - domingoAteOuAntes(D.batismo)) / 7) + 1;
    t.semanaSalterio = ((t.semana - 1) % 4) + 1;
    if (ds === 0) { t.nome = `${ord(t.semana)} Domingo do Tempo Comum`; t.precedencia = 6; }
    else t.nome = `${nomeDia} da ${orda(t.semana)} Semana do Tempo Comum`;
  } else if (n < D.quaresma1) {
    // ---- Cinzas e dias seguintes
    t.tempo = 'quaresma'; t.semana = 0; t.semanaSalterio = 4; t.cor = 'roxo';
    if (n === D.cinzas) Object.assign(t, { nome: 'Quarta-feira de Cinzas', precedencia: 2, celebracao: 'cinzas' });
    else { t.nome = `${nomeDia} depois das Cinzas`; t.precedencia = 9; t.subtipo = 'apos-cinzas'; }
  } else if (n < D.ramos) {
    // ---- Quaresma
    t.tempo = 'quaresma'; t.cor = 'roxo';
    t.semana = Math.floor((n - D.quaresma1) / 7) + 1;
    t.semanaSalterio = ((t.semana - 1) % 4) + 1;
    if (ds === 0) {
      t.nome = `${ord(t.semana)} Domingo da Quaresma`; t.precedencia = 2;
      if (t.semana === 4) t.cor = 'rosa';
    } else { t.nome = `${nomeDia} da ${orda(t.semana)} Semana da Quaresma`; t.precedencia = 9; }
  } else if (n < D.quintaSanta) {
    // ---- Semana Santa (domingo a quarta)
    t.tempo = 'quaresma'; t.semana = 6; t.semanaSalterio = 2; t.cor = 'roxo'; t.precedencia = 2;
    t.subtipo = 'semana-santa';
    if (n === D.ramos) Object.assign(t, { nome: 'Domingo de Ramos da Paixão do Senhor', celebracao: 'ramos', cor: 'vermelho' });
    else t.nome = `${nomeDia} Santa`;
  } else if (n < D.pascoa) {
    // ---- Tríduo Pascal
    t.tempo = 'triduo'; t.precedencia = 1; t.semanaSalterio = 2;
    if (n === D.quintaSanta) Object.assign(t, { nome: 'Quinta-feira Santa — Ceia do Senhor', celebracao: 'ceiadosenhor', cor: 'branco', tempo: 'quaresma', semana: 6, subtipo: 'semana-santa' });
    else if (n === D.sextaSanta) Object.assign(t, { nome: 'Sexta-feira da Paixão do Senhor', celebracao: 'paixaodosenhor', cor: 'vermelho' });
    else Object.assign(t, { nome: 'Sábado Santo', celebracao: 'sabadosanto', cor: 'roxo' });
  } else if (n <= D.pentecostes) {
    // ---- Tempo Pascal
    t.tempo = 'pascoa'; t.cor = 'branco';
    t.semana = Math.floor((n - D.pascoa) / 7) + 1;
    t.semanaSalterio = ((t.semana - 1) % 4) + 1;
    if (n === D.pascoa) Object.assign(t, { nome: 'Domingo da Páscoa na Ressurreição do Senhor', precedencia: 1, celebracao: 'pascoa' });
    else if (n < D.divinaMisericordia) Object.assign(t, { nome: `${nomeDia} da Oitava da Páscoa`, precedencia: 2, subtipo: 'oitava' });
    else if (n === D.divinaMisericordia) Object.assign(t, { nome: '2º Domingo da Páscoa (da Divina Misericórdia)', precedencia: 2, celebracao: 'divinamisericordia' });
    else if (n === D.ascensao) Object.assign(t, { nome: 'Ascensão do Senhor', precedencia: 2, celebracao: 'ascensaodosenhor' });
    else if (n === D.pentecostes) Object.assign(t, { nome: 'Domingo de Pentecostes', precedencia: 2, celebracao: 'pentecostes', cor: 'vermelho' });
    else if (ds === 0) Object.assign(t, { nome: `${ord(t.semana)} Domingo da Páscoa`, precedencia: 2 });
    else t.nome = `${nomeDia} da ${orda(t.semana)} Semana da Páscoa`;
  } else if (n < D.advento1) {
    // ---- Tempo Comum (depois de Pentecostes)
    t.tempo = 'comum';
    t.semana = 34 - Math.round((D.cristoRei - domingoAteOuAntes(n)) / 7);
    t.semanaSalterio = ((t.semana - 1) % 4) + 1;
    if (ds === 0) { t.nome = `${ord(t.semana)} Domingo do Tempo Comum`; t.precedencia = 6; }
    else t.nome = `${nomeDia} da ${orda(t.semana)} Semana do Tempo Comum`;
    if (n === D.trindade) Object.assign(t, { nome: 'Santíssima Trindade', precedencia: 3, celebracao: 'santissimatrindade', cor: 'branco' });
    if (n === D.corpusChristi) Object.assign(t, { nome: 'Santíssimo Corpo e Sangue de Cristo', precedencia: 3, celebracao: 'corpuschristi', cor: 'branco' });
    if (n === D.sagradoCoracao) Object.assign(t, { nome: 'Sagrado Coração de Jesus', precedencia: 3, celebracao: 'scj', cor: 'branco' });
    if (n === D.cristoRei) Object.assign(t, { nome: 'Nosso Senhor Jesus Cristo, Rei do Universo', precedencia: 3, celebracao: 'cristoreidouniverso', cor: 'branco' });
  } else if (n < D.natal) {
    // ---- Advento
    t.tempo = 'advento'; t.cor = 'roxo';
    t.semana = Math.floor((n - D.advento1) / 7) + 1;
    t.semanaSalterio = ((t.semana - 1) % 4) + 1;
    if (ds === 0) {
      t.nome = `${ord(t.semana)} Domingo do Advento`; t.precedencia = 2;
      if (t.semana === 3) t.cor = 'rosa';
    } else if (mes === 12 && dia >= 17) {
      t.nome = `${nomeDia}, ${dia} de dezembro — Advento`; t.precedencia = 9;
    } else t.nome = `${nomeDia} da ${orda(t.semana)} Semana do Advento`;
  } else {
    // ---- Natal (dezembro)
    t.tempo = 'natal'; t.cor = 'branco';
    t.semanaSalterio = salterioPorDomingos(D.advento1);
    if (n === D.natal) Object.assign(t, { nome: 'Natal do Senhor', precedencia: 2, celebracao: 'natal' });
    else if (n === D.sagradaFamilia) Object.assign(t, { nome: 'Sagrada Família de Jesus, Maria e José', precedencia: 5, celebracao: 'sagradafamilia' });
    else Object.assign(t, { nome: `${dia} de dezembro — Oitava do Natal`, precedencia: 9, subtipo: 'oitava' });
  }
  return t;
}

// ---------------------------------------------------------------- santos
const SENHOR_FESTAS = new Set(['apresentacao', 'transfiguracao', 'exaltacao', 'latrao']);
const FESTAS_PROPRIAS = new Set(['santarosa', 'NSGuadalupe', 'NSCarmo']);
// Brasil (CNBB): solenidades celebradas no domingo de uma janela de 7 dias,
// quando o dia próprio não é domingo. [mês, dia] = primeiro dia da janela.
const TRANSFERIDAS_DOMINGO_BR = {
  pedroepaulo: [6, 28],   // domingo entre 28/6 e 4/7
  assuncao: [8, 16],      // domingo seguinte a 15/8 (16 a 21/8)
  todosossantos: [11, 2], // domingo seguinte a 1º/11 (2 a 7/11), mas não 2/11
};

function precedenciaSanto(c) {
  switch (c.grau) {
    case 'solenidade': return 3;
    case 'comemoracao-defuntos': return 3;
    case 'festa': return SENHOR_FESTAS.has(c.id) ? 5 : (FESTAS_PROPRIAS.has(c.id) ? 8 : 7);
    case 'memoria': return 10;
    case 'memoria-facultativa': return 12;
    default: return 13;
  }
}

/**
 * Calendário completo de um ano civil, com santos e transferências.
 */
export class CalendarioLiturgico {
  constructor(santoral) {
    this.santoral = santoral;
    this.cache = new Map();
    this.moveis = santoral.moveis || {};
  }

  celebracaoMovel(id) {
    const m = this.moveis[id];
    return m ? { ...m } : { id, nome: id, grau: 'solenidade', oficio: 'proprio/' + id };
  }

  ano(ano) {
    if (this.cache.has(ano)) return this.cache.get(ano);
    const ini = numeroDia(ano, 1, 1), fim = numeroDia(ano, 12, 31);
    const D = datasDoAno(ano);
    const dias = new Map();
    for (let n = ini; n <= fim; n++) dias.set(n, { temporal: temporal(n), santos: [] });

    // celebrações fixas
    const colocar = [];
    for (const c of this.santoral.fixas) {
      if (c.ativo === false) continue;
      const [m, d] = c.data.split('-').map(Number);
      if (m === 2 && d === 29 && !((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) continue;
      colocar.push({ ...c, n: numeroDia(ano, m, d), precedencia: precedenciaSanto(c) });
    }
    // Brasil: transferências para o domingo
    for (const c of colocar) {
      const janela = TRANSFERIDAS_DOMINGO_BR[c.id];
      if (!janela || diaSemana(c.n) === 0) continue;
      const ini = numeroDia(ano, janela[0], janela[1]);
      const domingo = ini + ((7 - diaSemana(ini)) % 7);
      // 1º/11 no sábado: o domingo 2/11 é da Comemoração dos Fiéis Defuntos,
      // e Todos os Santos fica no sábado (orientação da CNBB, 2025)
      if (c.id === 'todosossantos' && domingo === numeroDia(ano, 11, 2)) continue;
      c.dataOriginal = c.n;
      c.n = domingo;
      c.transferida = true;
    }

    // solenidades impedidas
    for (const c of colocar.filter((x) => x.grau === 'solenidade')) {
      const t0 = dias.get(c.n)?.temporal;
      if (!t0) continue;
      const impedida = t0.precedencia <= 2 || (t0.precedencia === 3 && t0.celebracao);
      if (!impedida) continue;
      c.transferida = true; c.dataOriginal = c.n;
      if (c.id === 'saojose' && c.n >= D.ramos && c.n <= D.pascoa) { c.n = D.ramos - 1; continue; }
      if (c.id === 'anunciacao' && c.n >= D.ramos && c.n <= D.divinaMisericordia) { c.n = D.divinaMisericordia + 1; continue; }
      let n = c.n + 1;
      while (n <= fim) {
        const tt = dias.get(n).temporal;
        const ocupado = colocar.some((o) => o !== c && o.n === n && o.precedencia <= 8);
        if (tt.precedencia > 8 && !ocupado) break;
        n++;
      }
      c.n = n;
    }
    for (const c of colocar) if (dias.has(c.n)) dias.get(c.n).santos.push(c);

    // celebrações móveis com grau de memória
    const memMovel = (n, id) => { if (dias.has(n)) dias.get(n).santos.push({ ...this.celebracaoMovel(id), n, precedencia: 10 }); };
    memMovel(D.maeDaIgreja, 'maedaigreja');
    memMovel(D.coracaoMaria, 'icvm');

    const res = new Map();
    for (const [n, info] of dias) res.set(n, this.resolverDia(n, info));
    this.cache.set(ano, res);
    return res;
  }

  resolverDia(n, { temporal: t, santos }) {
    const dia = {
      ...t,
      data: isoDeNumero(n),
      ...deNumero(n),
      diaSemana: t.ds,
      nomeDiaSemana: NOMES_DIAS[t.ds],
      nomeTempo: NOMES_TEMPOS[t.tempo],
      semanaSalterioRomano: ROMANOS[t.semanaSalterio] || '',
      celebracao: null,       // celebração principal
      opcoes: [],             // memórias facultativas (escolha do usuário)
      comemoracoes: [],       // memórias que viram apenas comemoração
      omitidas: [],
    };
    // celebração temporal principal
    const temporalCel = t.celebracao
      ? { ...this.celebracaoMovel(t.celebracao), nome: t.nome, precedencia: t.precedencia, tipo: 'temporal', cor: t.cor }
      : { id: null, nome: t.nome, grau: t.ds === 0 ? 'domingo' : (t.subtipo === 'oitava' ? 'oitava' : (t.subtipo === 'semana-santa' ? 'semana-santa' : 'feria')), precedencia: t.precedencia, tipo: 'temporal', cor: t.cor };
    const ordenados = [...santos].sort((a, b) => a.precedencia - b.precedencia);
    const maior = ordenados[0];
    // vence o dia: solenidades, festas e memórias obrigatórias com precedência
    // maior que a do dia (no domingo do Tempo Comum, só solenidades e festas do Senhor)
    if (maior && maior.precedencia <= 11 && maior.precedencia < t.precedencia && (t.ds !== 0 || maior.precedencia <= 5)) {
      dia.celebracao = { ...maior, tipo: 'santo' };
      for (const s of ordenados.slice(1)) dia.omitidas.push(s);
    } else {
      dia.celebracao = temporalCel;
      for (const s of ordenados) {
        if (t.ds === 0 || t.precedencia <= 9) {
          // Quaresma, 17-24/dez e oitava do Natal: memórias viram comemoração
          if (t.precedencia === 9 && s.precedencia >= 10) dia.comemoracoes.push(s);
          else dia.omitidas.push(s);
        } else if (s.precedencia === 12) {
          dia.opcoes.push(s); // memória facultativa: escolha de quem reza
        } else {
          dia.omitidas.push(s);
        }
      }
    }
    // Santa Maria no sábado (Tempo Comum, sem memória obrigatória)
    if (t.tempo === 'comum' && t.ds === 6 && dia.celebracao.tipo === 'temporal') {
      dia.opcoes.push({ ...this.celebracaoMovel('santamarianosabado'), precedencia: 12 });
    }
    dia.cor = dia.celebracao.cor || t.cor;
    dia.temporal = { nome: t.nome, precedencia: t.precedencia, celebracao: t.celebracao, cor: t.cor };
    return dia;
  }

  /** Informações litúrgicas de uma data ISO (AAAA-MM-DD) */
  dia(iso) {
    const n = numeroDeIso(iso);
    const { ano } = deNumero(n);
    return this.ano(ano).get(n);
  }

  /** Dias de um mês (1-12) */
  mes(ano, mes) {
    const r = [];
    const ini = numeroDia(ano, mes, 1);
    const fim = numeroDia(mes === 12 ? ano + 1 : ano, mes === 12 ? 1 : mes + 1, 1);
    for (let n = ini; n < fim; n++) r.push(this.ano(ano).get(n));
    return r;
  }

  proximo(iso, delta = 1) {
    return isoDeNumero(numeroDeIso(iso) + delta);
  }
}

/** Texto curto do grau para exibição */
export function nomeGrau(c) {
  if (!c) return '';
  if (c.tipo === 'temporal') {
    if (c.grau === 'domingo') return 'Domingo';
    if (c.grau === 'feria') return 'Dia de semana';
    if (c.grau === 'oitava') return 'Dia da Oitava';
    if (c.grau === 'semana-santa') return 'Semana Santa';
    return NOMES_GRAUS[c.grau] || '';
  }
  return NOMES_GRAUS[c.grau] || '';
}

/** "1 de novembro de 2026" */
export function dataPorExtenso(iso, comAno = true) {
  const [a, m, d] = iso.split('-').map(Number);
  return `${d} de ${NOMES_MESES[m - 1]}${comAno ? ' de ' + a : ''}`;
}
