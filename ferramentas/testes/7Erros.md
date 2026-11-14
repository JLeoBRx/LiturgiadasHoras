# 7Erros — divergências documentais da Tabela Temporária

Os 7 valores divergentes da Tabela Temporária do PDF são todos **erros
documentais**: cada um contradiz a data da Páscoa e pelo menos um outro valor
da mesma linha da tabela. Nenhum deles é uma particularidade legítima do
calendário litúrgico.

- **Fonte:** *Liturgia das Horas*, vol. II, tradução para o Brasil (CNBB;
  Vozes, Paulinas, Paulus, Ave-Maria, 2011), Tabela Temporária, p. 16–17,
  conforme o PDF do commit `7980c84`.
- **Padrão principal:** 5 dos 7 erros estão nas colunas da Quaresma (Cinzas e
  último dia do Tempo Comum) e caem nos anos bissextos de 2012, 2016 e 2020,
  sempre 1 dia antes da data correta.
- **Nos testes:** os valores oficialmente corretos são a referência. Os 7
  valores do PDF ficam registrados e verificados como **errados**, nunca como
  exceção aceita.

Este arquivo, os dados em `dados/tabela-temporaria-cnbb.json` e os testes são
mantidos juntos: o teste “Documentação” falha se uma divergência ou
particularidade dos dados não estiver descrita aqui.

## Os 7 erros

O dia da semana entre parênteses mostra por que o valor do PDF não pode estar certo.

| # | Ano | Item da tabela | Valor no PDF | Valor liturgicamente correto | Origem da divergência |
|---|---|---|---|---|---|
| 1 | 2001 | Pentecostes | 31 maio (quinta-feira) · `2001-05-31` | 3 jun. 2001 (domingo) · `2001-06-03` | Erro de digitação isolado. A mesma linha traz Páscoa 15 abr. (+49 dias = 3 jun.), Corpus Christi 14 jun. (11 dias depois de 3 jun.) e retomada do Tempo Comum em 4 jun., todos coerentes com 3 jun. |
| 2 | 2012 | Quarta-feira de Cinzas | 21 fev. (terça-feira) · `2012-02-21` | 22 fev. 2012 (quarta-feira) · `2012-02-22` | Conta que não considerou o 29 de fevereiro (ano bissexto): Páscoa 8 abr. − 46 dias dá 22 fev.; sem o dia 29, dá 21 fev. |
| 3 | 2012 | Último dia do Tempo Comum antes da Quaresma | 20 fev. (segunda-feira) · `2012-02-20` | 21 fev. 2012 (terça-feira) · `2012-02-21` | Erro derivado do n. 2: o PDF usa a véspera da Quarta-feira de Cinzas errada. |
| 4 | 2013 | Pentecostes | 9 maio (quinta-feira) · `2013-05-09` | 19 maio 2013 (domingo) · `2013-05-19` | Provável cópia da coluna vizinha: 9 maio é a Ascensão no Calendário Geral, que aparece na mesma linha como “(9)12 maio”. Corpus Christi 30 maio e retomada do Tempo Comum em 20 maio confirmam 19 maio. |
| 5 | 2016 | Último dia do Tempo Comum antes da Quaresma | 8 fev. (segunda-feira) · `2016-02-08` | 9 fev. 2016 (terça-feira) · `2016-02-09` | Conta que não considerou o 29 de fevereiro (ano bissexto). A própria linha traz Cinzas certa, 10 fev., cuja véspera é 9 fev. |
| 6 | 2020 | Quarta-feira de Cinzas | 25 fev. (terça-feira) · `2020-02-25` | 26 fev. 2020 (quarta-feira) · `2020-02-26` | Conta que não considerou o 29 de fevereiro (ano bissexto): Páscoa 12 abr. − 46 dias dá 26 fev. |
| 7 | 2020 | Último dia do Tempo Comum antes da Quaresma | 24 fev. (segunda-feira) · `2020-02-24` | 25 fev. 2020 (terça-feira) · `2020-02-25` | Erro derivado do n. 6. |

Os valores corretos foram conferidos de três formas independentes: pelo
cálculo da Páscoa (Quarta-feira de Cinzas = Páscoa − 46 dias; Pentecostes =
Páscoa + 49 dias), pelo dia da semana (Cinzas cai sempre numa quarta-feira e
Pentecostes num domingo) e pela coerência com as outras colunas da mesma
linha. Se as falhas estão no livro impresso ou só na digitalização do PDF não
é possível saber sem o exemplar em papel.

## Erros documentais × particularidades legítimas

Todos os 7 itens acima são erros documentais. Já as particularidades abaixo
também aparecem na Tabela Temporária e podem parecer erros, mas são regras do
calendário; o site as reproduz e os testes as verificam como corretas em todos
os anos.

| Particularidade | Como aparece na tabela | Por que é legítima |
|---|---|---|
| Ascensão no domingo | “(21)24 maio” em 2020: quinta-feira entre parênteses, domingo fora | O Calendário Geral põe a Ascensão na quinta-feira; no Brasil ela é transferida para o 7º domingo da Páscoa |
| Duas letras no ciclo dominical | “A-B” em 2020 | A 1ª letra vale de janeiro até o Advento; a 2ª, a partir do 1º domingo do Advento, quando começa o novo ano litúrgico |
| Duas letras dominicais em ano bissexto | “ed” em 2020 | A 1ª indica os domingos até 24 de fevereiro, a 2ª depois dessa data (explicação da p. 18 do livro) |
| Salto na numeração das semanas do Tempo Comum | 2020: até a 7ª semana antes da Quaresma, retomada na 9ª após Pentecostes | Depois de Pentecostes a semana é contada para trás a partir de Cristo Rei (34ª); a semana que não cabe no ano é omitida |
| Corpus Christi na quinta-feira | 11 jun. 2020 | No Brasil a solenidade não é transferida para o domingo |
| 1º domingo do Advento entre 27/11 e 3/12 | 29 nov. 2020 | É o 4º domingo antes do Natal |

Critério usado para separar as duas coisas: um valor é **erro documental**
quando contradiz o cálculo da Páscoa ou outra coluna da mesma linha. É
**particularidade legítima** quando decorre de uma norma (Calendário Geral,
decisão da CNBB ou Normas Universais sobre o Ano Litúrgico) e é coerente com
o resto da linha.

## Como os testes usam esses dados

| Arquivo | Papel |
|---|---|
| `dados/tabela-temporaria-cnbb.json` | Os 30 anos (1994–2023) com os valores corretos, em `anos`; os 7 erros em `divergencias_documentadas` (valor do PDF, valor correto, origem e evidências); as particularidades em `particularidades_legitimas` |
| `referencia-calendario.mjs` | Cálculo independente do site (Páscoa pelo algoritmo de Gauss), que confere os dados e os anos futuros |
| `referencia-isolada.mjs` | Roda a referência num processo que só pode ler o próprio arquivo dela: não tem acesso ao motor nem aos dados do site |
| `calendario.test.mjs` | Tabela Temporária, 7 divergências, particularidades, anos futuros e esta documentação |
| `regras-brasil.test.mjs` e `independencia.test.mjs` | Regras do Brasil (ver `REGRAS-DO-BRASIL.md`) e prova de independência da referência |

O que os grupos de testes garantem:

1. **Dados de referência:** cada ano da tabela confere com o cálculo
   independente (14 campos por ano, 420 ao todo); um erro de digitação nos
   dados faz o teste falhar.
2. **Tabela Temporária:** o site produz os valores corretos de 1994 a 2023.
3. **Divergências documentadas:** para cada um dos 7 erros, o teste exige o
   valor correto e falha se o site devolver o valor do PDF.
4. **Particularidades legítimas:** cada uma vale em todos os anos, e o site
   a reproduz.
5. **Anos posteriores:** de 2024 a 2100, o site é comparado com o cálculo
   independente (o limite pode ser ampliado, por exemplo
   `CALENDARIO_TESTE_ATE=2200`).

**Prova de que os testes pegam o erro.** Com o valor do PDF de 2012 colocado
nos dados, 3 testes falharam; com o motor alterado para repetir o erro dos
anos bissextos, 8 testes falharam.

**Para ampliar depois de 2023:** acrescente o ano em `anos`, copiando os
valores de uma fonte oficial como o Diretório da Liturgia da CNBB. O teste já
confere o novo ano contra o site e contra o cálculo independente, e o
intervalo dos anos seguintes se ajusta sozinho. Se a fonte trouxer um valor
que contradiga o cálculo, registre-o em `divergencias_documentadas` (e aqui),
e guarde em `anos` sempre o valor correto.
