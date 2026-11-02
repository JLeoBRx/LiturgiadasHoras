# Regras do calendário litúrgico no Brasil — conferência com a CNBB

Conferência feita em novembro de 2026 entre as regras do motor
(`js/liturgical-calendar.js`) e as normas litúrgicas seguidas pela CNBB.
Cada regra é testada em `regras-brasil.test.mjs` contra um cálculo de
referência isolado (`referencia-calendario.mjs`, função `regrasDoBrasil`) de
1994 a 2100, e contra datas confirmadas em fontes publicadas
(`dados/regras-brasil-cnbb.json`).

## Resultado

| Celebração | Regra no Brasil | Fonte | Motor |
|---|---|---|---|
| Epifania | Domingo entre 2 e 8 de janeiro | *Liturgia das Horas*, vol. II (CNBB), Calendário: “Domingo entre os dias 2 e 8 inclusive: EPIFANIA DO SENHOR” | conforme |
| Batismo do Senhor | Domingo depois da Epifania; se a Epifania cai em 7 ou 8/1, segunda-feira | Livro: “Domingo entre os dias 9 e 13 inclusive”; norma posterior da segunda-feira (ex.: 09/01/2023) | conforme |
| Ascensão | 7º domingo da Páscoa | Livro: “7º domingo pascal: ASCENSÃO DO SENHOR”; Tabela Temporária, “Ascensão no Brasil” | conforme |
| Corpus Christi | Quinta-feira depois da Santíssima Trindade | Livro: “Quinta-feira depois do domingo da Santíssima TRINDADE” | conforme |
| São Pedro e São Paulo | 29/6 se for domingo; senão, o **domingo entre 28/6 e 4/7** | Decisão da CNBB com aprovação da Santa Sé; datas de 2021, 2024 e 2026 | **corrigido** |
| Assunção | 15/8 se for domingo; senão, o domingo seguinte | CNBB: “no domingo subsequente ao dia 15 de agosto quando este não cai em um domingo, conforme autorização da Santa Sé” | conforme |
| Todos os Santos | 1º/11 se for domingo; senão, o domingo seguinte; **se 1º/11 é sábado, fica no sábado** | CNBB; orientação de 2025 | **corrigido** |
| Fiéis Defuntos | Sempre 2/11, mesmo no domingo | Acervo: “Mesmo quando o dia 2 de novembro for domingo, celebra-se a Comemoração de Todos os Fiéis Defuntos”; CNBB, 2025 | conforme (ver correção acima) |
| N. Sra. Aparecida | 12/10, solenidade, mesmo no domingo | Livro, Calendário: “N. SENHORA DA CONCEIÇÃO APARECIDA — Solenidade” | conforme |
| São José | 19/3; no domingo da Quaresma, segunda-feira; na Semana Santa, sábado antes de Ramos | Normas Universais do Ano Litúrgico (n. 5 e 60); Congregação para o Culto Divino (2008) | conforme |
| Anunciação | 25/3; no domingo da Quaresma, segunda-feira; na Semana Santa ou na oitava da Páscoa, segunda depois do 2º domingo da Páscoa | Normas Universais (n. 5 e 60); Congregação para o Culto Divino (2008) | conforme |
| Imaculada Conceição | 8/12; no domingo do Advento, segunda-feira 9/12 | Normas Universais; aplicada em 2024 | conforme |
| Sagrada Família, Santíssima Trindade, Cristo Rei | Como no Calendário Romano Geral | Calendário Romano Geral; Livro | conforme |

## As duas correções

**São Pedro e São Paulo.** O motor usava “o domingo seguinte a 29/6”. Quando
29/6 cai numa segunda-feira, isso dava o domingo 5/7; no Brasil a solenidade é
celebrada no domingo 28/6 (o domingo entre 28/6 e 4/7). Em 2026, as dioceses
celebraram em 28/6 “por determinação da CNBB”; o site mostrava 5/7. Afeta 2020,
2026, 2037, 2043, 2048…

**Todos os Santos e Fiéis Defuntos.** Quando 1º/11 cai num sábado, o motor
passava Todos os Santos para o domingo 2/11 e Finados para segunda-feira 3/11.
A CNBB orientou o contrário em 2025: “No sábado, 1º de novembro, celebra-se
durante todo o dia a Solenidade de Todos os Santos. No domingo, 2 de novembro,
o dia inteiro será dedicado à Comemoração de Todos os Fiéis Defuntos.” Agora
Todos os Santos fica no sábado, inclusive nas Vésperas e Completas, e Finados
fica no domingo, sem I Vésperas. Afeta 2025, 2031, 2036, 2042…

## Datas confirmadas em fontes

| Data | Celebração | Fonte |
|---|---|---|
| 09/01/2023 (segunda) | Batismo do Senhor | [Vatican News, Palavra do dia](https://www.vaticannews.va/pt/palavra-do-dia/2023/01/09.html) |
| 04/07/2021 | São Pedro e São Paulo | [Roteiro de 04/07/2021](https://www.materecclesiae.com.br/solenidade-de-sao-pedro-e-sao-paulo-dia-do-papa-ano-b-04-07-2021/); CNBB, coleta do Óbolo “neste domingo (4)” |
| 30/06/2024 | São Pedro e São Paulo | [Diocese de São José dos Campos](https://diocese-sjc.org.br/wp-content/uploads/2024/05/30-de-junho-de-2024-SOLENIDADE-DE-SAO-PEDRO-E-SAO-PAULO-APOSTOLOS-MISSA-DO-DIA-.pdf) |
| 28/06/2026 | São Pedro e São Paulo | [Diocese de Erexim](https://diocesedeerexim.org.br/hinario-domingos/solenidade-de-sao-pedro-e-sao-paulo-28-06-2026-ano-a/); [Diocese de São José dos Campos](https://diocese-sjc.org.br/wp-content/uploads/2026/05/28-de-junho-de-2026-Missa-do-dia-Sao-Pedro-e-Sao-Paulo.pdf); [Arquidiocese de Diamantina](https://arquidiamantina.org.br/homilia-solenidade-de-sao-pedro-e-sao-paulo-28-de-junho-de-2026/) |
| 18/08/2024 | Assunção | [Diocese de Blumenau](https://diocesedeblumenau.org.br/padreraul/wp-content/uploads/sites/11/2024/08/2024-08-13-Festa-Gloria-N.pdf) |
| 07/11/2021 | Todos os Santos | [CNBB, Celebrar em Família](https://www.cnbb.org.br/wp-content/uploads/2021/10/61-Celebrar-em-Familia-Sol.-Todos-os-Santos.pdf) |
| 01/11/2025 (sábado) | Todos os Santos | Orientação da CNBB, 2025 ([Comunidade Shalom](https://comshalom.org/proximo-fim-de-semana-tera-duas-missas-de-preceito-entenda-o-motivo/), [CNBB Oeste 1](https://cnbboeste1.org.br/cnbb-esclarece-liturgia-para-as-celebracoes-de-1o-e-2-de-novembro/)) |
| 02/11/2025 (domingo) | Fiéis Defuntos | Mesma orientação |
| 09/12/2024 | Imaculada Conceição | [Catholic World Report](https://www.catholicworldreport.com/2024/12/07/immaculate-conception-on-an-advent-sunday-when-to-go-to-mass/) |

## Limites da conferência

- O texto oficial da decisão da CNBB sobre as transferências para o domingo e
  o Diretório da Liturgia não estavam acessíveis; as regras de São Pedro e São
  Paulo, Assunção e Todos os Santos foram confirmadas por publicações da CNBB e
  de dioceses e pelas datas efetivamente celebradas. Uma página de calendário
  diocesano de 2021 dava 27/6 para São Pedro e São Paulo, em conflito com as
  demais fontes (4/7); prevaleceu 4/7.
- Quando houver o Diretório da Liturgia de um ano, basta acrescentar as datas em
  `dados/regras-brasil-cnbb.json` (`datas_confirmadas`): o teste confere o site e
  a referência contra elas.
