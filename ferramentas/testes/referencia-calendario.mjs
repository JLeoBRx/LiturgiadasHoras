/**
 * Cálculo de REFERÊNCIA do calendário, usado só pelos testes.
 *
 * É escrito de forma independente do motor do site (js/liturgical-calendar.js):
 * a Páscoa vem do algoritmo de Gauss (o site usa outro algoritmo) e as datas
 * usam objetos Date próprios. Assim, quando os dois concordam, a chance de um
 * erro comum aos dois é pequena.
 *
 * Regras do Brasil consideradas: Epifania no domingo entre 2 e 8 de janeiro,
 * Ascensão no 7º domingo da Páscoa, Corpus Christi na quinta-feira.
 */

const DIA = 86400000;
const d = (ano, mes, dia) => new Date(Date.UTC(ano, mes - 1, dia));
const soma = (data, dias) => new Date(data.getTime() + dias * DIA);
const dif = (a, b) => Math.round((a.getTime() - b.getTime()) / DIA);
const semana = (data) => data.getUTCDay(); // 0 = domingo
export const iso = (data) => data.toISOString().slice(0, 10);

/** Páscoa pelo algoritmo de Gauss (calendário gregoriano, 1583–4099). */
export function pascoaGauss(ano) {
  const a = ano % 19, b = ano % 4, c = ano % 7;
  const k = Math.floor(ano / 100);
  const p = Math.floor((13 + 8 * k) / 25);
  const q = Math.floor(k / 4);
  const M = (15 - p + k - q) % 30;
  const N = (4 + k - q) % 7;
  const dd = (19 * a + M) % 30;
  const e = (2 * b + 4 * c + 6 * dd + N) % 7;
  let dia = 22 + dd + e; // março
  if (dd === 29 && e === 6) return d(ano, 4, 19);
  if (dd === 28 && e === 6 && (11 * M + 11) % 30 < 19) return d(ano, 4, 18);
  return dia <= 31 ? d(ano, 3, dia) : d(ano, 4, dia - 31);
}

/** Letra(s) dominical(is), como na p. 18 do livro: "A", "b", "c" … "g". */
export function letraDominical(ano) {
  const letras = ['A', 'b', 'c', 'd', 'e', 'f', 'g'];
  const ds = semana(d(ano, 1, 1));                // dia da semana de 1º de janeiro
  const i = (7 - ds) % 7;                         // distância até o 1º domingo
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  return bissexto ? letras[i] + letras[(i + 6) % 7] : letras[i];
}

/** Ciclo do ano litúrgico que termina no ano civil informado. */
const cicloDominicalDe = (anoLiturgico) => ['C', 'A', 'B'][anoLiturgico % 3];
const cicloFerialDe = (anoLiturgico) => (anoLiturgico % 2 === 1 ? 'I' : 'II');

/** Todos os campos da Tabela Temporária para um ano. */
export function tabelaDoAno(ano) {
  const pascoa = pascoaGauss(ano);
  const cinzas = soma(pascoa, -46);
  const pentecostes = soma(pascoa, 49);
  // 1º domingo do Advento: 4º domingo antes do Natal
  const natal = d(ano, 12, 25);
  const advento4 = soma(natal, -(semana(natal) === 0 ? 7 : semana(natal)));
  const advento1 = soma(advento4, -21);
  const cristoRei = soma(advento1, -7);
  // Batismo do Senhor (Brasil): domingo depois da Epifania (domingo entre 2 e 8/jan);
  // se a Epifania cai em 7 ou 8, o Batismo vai para a segunda-feira
  const jan2 = d(ano, 1, 2);
  const epifania = soma(jan2, (7 - semana(jan2)) % 7);
  const domingoBatismo = epifania.getUTCDate() >= 7 ? epifania : soma(epifania, 7);
  const ultimoTC = soma(cinzas, -1);
  const primeiroTC = soma(pentecostes, 1);
  const semanaAntes = Math.floor(dif(ultimoTC, domingoBatismo) / 7) + 1;
  const domingoDoPrimeiroTC = soma(primeiroTC, -semana(primeiroTC));
  const semanaDepois = 34 - dif(cristoRei, domingoDoPrimeiroTC) / 7;
  return {
    letra_dominical: letraDominical(ano),
    ciclo_dominical: `${cicloDominicalDe(ano)}-${cicloDominicalDe(ano + 1)}`,
    ciclo_ferial: cicloFerialDe(ano),
    quarta_feira_de_cinzas: iso(cinzas),
    pascoa: iso(pascoa),
    ascensao_calendario_geral: iso(soma(pascoa, 39)),
    ascensao_brasil: iso(soma(pascoa, 42)),
    pentecostes: iso(pentecostes),
    corpus_christi: iso(soma(pentecostes, 11)),
    ultimo_dia_tc_antes_da_quaresma: iso(ultimoTC),
    semana_tc_antes_da_quaresma: semanaAntes,
    primeiro_dia_tc_depois_de_pentecostes: iso(primeiroTC),
    semana_tc_depois_de_pentecostes: semanaDepois,
    primeiro_domingo_do_advento: iso(advento1),
  };
}

/** Dia da semana (0 = domingo) de uma data ISO. */
export const diaDaSemana = (s) => semana(new Date(s + 'T00:00:00Z'));
