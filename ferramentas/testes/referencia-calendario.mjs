/**
 * Cálculo de REFERÊNCIA do calendário, usado só pelos testes.
 *
 * É escrito de forma independente do motor do site (js/liturgical-calendar.js):
 * a Páscoa vem do algoritmo de Gauss (o site usa outro algoritmo) e as datas
 * usam objetos Date próprios. Assim, quando os dois concordam, a chance de um
 * erro comum aos dois é pequena.
 *
 * Este arquivo NÃO pode importar nem ler nada: os testes o executam num
 * processo que só tem permissão de ler este arquivo (referencia-isolada.mjs).
 *
 * Regras do Brasil: ver regrasDoBrasil() e REGRAS-DO-BRASIL.md.
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

/** primeiro domingo a partir de uma data (a própria data, se for domingo) */
const domingoAPartirDe = (data) => soma(data, (7 - semana(data)) % 7);

/**
 * Datas das celebrações com regra própria no Brasil (ver REGRAS-DO-BRASIL.md).
 * Escrito sem consultar o motor do site: cada regra está como na norma.
 * As chaves são os identificadores das celebrações no site.
 */
export function regrasDoBrasil(ano) {
  const pascoa = pascoaGauss(ano);
  const ramos = soma(pascoa, -7);
  const divinaMisericordia = soma(pascoa, 7);
  const r = {};

  // Epifania: domingo entre 2 e 8 de janeiro
  const epifania = domingoAPartirDe(d(ano, 1, 2));
  r.epifania = epifania;
  // Batismo: domingo depois da Epifania; se ela cai em 7 ou 8, segunda-feira
  r.batismo = epifania.getUTCDate() >= 7 ? soma(epifania, 1) : soma(epifania, 7);
  // Ascensão: 7º domingo da Páscoa; Corpus Christi: quinta depois da Trindade
  r.ascensaodosenhor = soma(pascoa, 42);
  r.santissimatrindade = soma(pascoa, 56);
  r.corpuschristi = soma(pascoa, 60);

  // São José (19/3) e Anunciação (25/3): se caem em domingo da Quaresma,
  // vão para segunda-feira; na Semana Santa, São José vai para o sábado
  // antes de Ramos e a Anunciação para a segunda depois do 2º domingo da Páscoa
  const naSemanaSanta = (x) => x >= ramos && x <= pascoa;
  const jose = d(ano, 3, 19);
  r.saojose = naSemanaSanta(jose) ? soma(ramos, -1) : semana(jose) === 0 ? soma(jose, 1) : jose;
  const anunciacao = d(ano, 3, 25);
  r.anunciacao = anunciacao >= ramos && anunciacao <= divinaMisericordia ? soma(divinaMisericordia, 1)
    : semana(anunciacao) === 0 ? soma(anunciacao, 1) : anunciacao;

  // São Pedro e São Paulo: 29/6 ou, se não for domingo, o domingo entre 28/6 e 4/7
  const pp = d(ano, 6, 29);
  r.pedroepaulo = semana(pp) === 0 ? pp : domingoAPartirDe(d(ano, 6, 28));
  // Assunção: 15/8 ou, se não for domingo, o domingo seguinte
  const as = d(ano, 8, 15);
  r.assuncao = semana(as) === 0 ? as : domingoAPartirDe(d(ano, 8, 16));
  // N. Sra. Aparecida: sempre 12/10 (solenidade, vence o domingo do Tempo Comum)
  r.NSAparecida = d(ano, 10, 12);
  // Todos os Santos: 1º/11 ou, se não for domingo, o domingo seguinte;
  // mas se 1º/11 é sábado fica no sábado, porque 2/11 (domingo) é dos Fiéis Defuntos
  const ts = d(ano, 11, 1);
  r.todosossantos = semana(ts) === 0 || semana(ts) === 6 ? ts : domingoAPartirDe(d(ano, 11, 2));
  r.fieisdefuntos = d(ano, 11, 2);
  // Imaculada Conceição: 8/12; se cai no domingo do Advento, segunda-feira 9/12
  const im = d(ano, 12, 8);
  r.imaculada = semana(im) === 0 ? soma(im, 1) : im;
  // Sagrada Família: domingo na oitava do Natal; se não houver, 30/12
  const natal = d(ano, 12, 25);
  r.sagradafamilia = semana(natal) === 0 ? d(ano, 12, 30) : domingoAPartirDe(soma(natal, 1));
  // Cristo Rei: domingo antes do 1º do Advento
  const advento4 = soma(natal, -(semana(natal) === 0 ? 7 : semana(natal)));
  r.cristoreidouniverso = soma(advento4, -28);

  return Object.fromEntries(Object.entries(r).map(([k, v]) => [k, iso(v)]));
}
