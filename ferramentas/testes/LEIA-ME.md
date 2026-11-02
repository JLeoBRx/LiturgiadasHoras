# Testes do calendário litúrgico

```bash
node --test "ferramentas/testes/*.test.mjs"
```

Para conferir mais anos à frente (o padrão vai até 2100):

```bash
CALENDARIO_TESTE_ATE=2200 node --test "ferramentas/testes/*.test.mjs"
```

## O que é conferido

| Grupo | O que verifica |
|---|---|
| Dados de referência | Cada ano de `dados/tabela-temporaria-cnbb.json` confere com um cálculo independente (`referencia-calendario.mjs`, Páscoa pelo algoritmo de Gauss) e com os dias da semana obrigatórios (Cinzas = quarta, Pentecostes = domingo…). Pega erros de digitação nos próprios dados. |
| Tabela Temporária | O site (`js/liturgical-calendar.js`) produz, para cada ano, Cinzas, Páscoa, Ascensão no Brasil, Pentecostes, Corpus Christi, fim e reinício do Tempo Comum com o número da semana, 1º domingo do Advento e ciclos A/B/C e I/II. |
| Divergências documentadas | Os 7 erros do PDF do vol. II (ver o documento “7Erros”): o teste exige o valor correto e **falha se o site produzir o valor do PDF**. Eles não são exceções. |
| Anos posteriores | Do ano seguinte ao último da tabela até 2100: site × cálculo independente. |

## Como acrescentar anos depois de 2023

1. Copie de uma fonte oficial (por exemplo, o Diretório da Liturgia da CNBB) os valores do ano.
2. Acrescente um objeto em `"anos"` de `dados/tabela-temporaria-cnbb.json`, com os mesmos campos
   dos anos existentes (datas em `AAAA-MM-DD`).
3. Rode os testes. Se algum valor tiver sido digitado errado, o grupo “Dados de referência” falha e
   indica o campo.

Se uma fonte trouxer um valor que contradiga o cálculo (como os 7 do PDF), registre-o em
`"divergencias_documentadas"` com `valor_pdf`, `valor_correto`, `origem` e `evidencias`, e guarde
em `"anos"` sempre o valor correto.
