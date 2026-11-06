# Homilias dos santos

Esta pasta guarda as homilias que aparecem na **Liturgia Diária** (botão
“Homilia”) e o material ainda não publicado. Uma homilia só aparece num dia
quando existe uma correspondência **litúrgica** ou **bíblica** conferida;
correspondências apenas temáticas ficam no inventário e não aparecem no site.

- [`AUDITORIA.md`](AUDITORIA.md): cada alteração na tradução, as sugestões não
  aplicadas, as dúvidas, as variantes do latim, os problemas da fonte e a
  autenticidade.
- [`INVENTARIO.md`](INVENTARIO.md): todas as homilias e sermões recebidos, com
  a situação de cada um (publicado, a conferir, sem correspondência, sem
  tradução…).

Os dois documentos e o `inventario.json` são **gerados**. Não os edite à mão:
rode `node ferramentas/homilias/gerar_documentos.mjs`. Os testes falham se eles
estiverem desatualizados.

## Camadas do texto (nada é sobrescrito)

| Camada | Onde | Quem escreve |
|---|---|---|
| Fonte original | `Homilia dos Santos/…` (arquivos enviados) | ninguém: nunca é alterada |
| Tradução recebida | `gregorio-magno/recebida/homilia-NN.txt` | `ferramentas/homilias/separar_gregorio.py`, cópia exata da origem dividida por homilia |
| Decisões editoriais | `gregorio-magno/registro-editorial.json` | à mão: cada correção, sugestão, dúvida, variante ou problema, com latim, justificativa e confiança |
| Tradução revisada (= texto publicado) | `gregorio-magno/revisada/homilia-NN.txt` | `ferramentas/homilias/aplicar_alteracoes.py`, recebida + correções com estado `aplicada` |
| O que o site mostra | `indice.json` | à mão: metadados, fonte e correspondências |

Os testes conferem que:

- a recebida reproduz palavra por palavra o arquivo original;
- a revisada é exatamente a recebida mais as correções aplicadas;
- toda sugestão ou dúvida não aplicada continua intacta no texto publicado.

## Formato dos arquivos de texto

O formato é o mesmo dos outros textos do site (`@tipo` + parágrafo, com uma
linha em branco entre blocos):

```
@origem …                  (de onde veio)
@camada …                  (recebida ou revisada)
@cabecalho                 HOMILIA X. …
@rubrica                   Proferida ao povo na basílica…
@leitura-titulo            Leitura do santo Evangelho segundo…
@leitura                   Naquele tempo…
@paragrafo                 texto da homilia (um bloco por parágrafo)
```

`[continua]` marca um bloco que, no original, estava partido entre dois
trechos. O site exibe apenas o que estiver em `@leitura` e em `@paragrafo`,
com escape de HTML e sem marcação embutida.

## Corrigir uma passagem

1. Confira com o latim (CCSL 141, página e §), olhando também o aparato
   crítico. Se a leitura do português aparece em algum manuscrito ou
   edição, ela é uma **variante**: registre e não mude.
2. Acrescente uma entrada em `registros` com os campos `homilia`, `tipo`,
   `estado`, `confianca`, `bloco` (contado a partir de 0 no arquivo da
   recebida), `localizacao`, `ccsl`, `latim`, `antes` (copiado exatamente),
   `depois`, `justificativa_linguistica`, `justificativa_teologica` e `motivo`.
3. Só uma correção de confiança **alta** recebe `"estado": "aplicada"`.
   As outras ficam como `sugestao` ou `duvida`, com estado `nao-aplicada`.
4. Rode:

```bash
python3 ferramentas/homilias/aplicar_alteracoes.py
```

```bash
node ferramentas/homilias/gerar_documentos.mjs
```

```bash
node --test "ferramentas/testes/*.test.mjs"
```

O script para sem gravar nada se o texto `antes` não for encontrado
exatamente uma vez no bloco indicado.

## Desfazer uma correção

Mude o estado da entrada para `"nao-aplicada"` e rode os dois scripts de novo.
A camada recebida não muda. Para voltar ao texto recebido inteiro, apague o
arquivo da revisada e retire a homilia de `colacao` e de `indice.json`.

## Publicar outra homilia

1. Faça a colação completa com o latim (passo anterior) e acrescente a homilia
   em `colacao` no registro, com as páginas da CCSL e do PDF.
2. Rode `aplicar_alteracoes.py` para gerar a revisada.
3. Em `indice.json`, acrescente a homilia com `"estado": "publicada"` e as
   correspondências:
   - `{"tipo": "liturgica", "celebracao": "<id da celebração>"}` ou
     `{"tipo": "liturgica", "chaves": ["QUA-1-domingo-A", …]}`, quando a
     homilia foi pregada para aquela celebração (rubrica ou o próprio texto o
     dizem);
   - `{"tipo": "biblica", "leituras": "<chave do dia em liturgia-diaria/indice.json>",
     "referencia_do_dia": "…", "versiculos_comentados": "…"}`, quando ela
     comenta a leitura daquele dia. Os testes conferem a referência com o
     arquivo de leituras e exigem que os versículos comentados estejam
     contidos nas duas passagens.
4. Acrescente em `ferramentas/testes/homilias.test.mjs` os dias esperados
   (o teste exige que cada homilia apareça exatamente nesses dias, de 2025 a
   2045, e em nenhum outro).
5. Rode `gerar_documentos.mjs` e os testes.

Na dúvida, não publique. Uma homilia ausente é preferível a uma associação
incorreta.

## Outros autores

- `vianney/sumario.json`: os 75 sermões dos quatro tomos em francês enviados.
  Não há tradução portuguesa nem identificação segura da edição, por isso
  nada é publicado.
- `antonio/sumario.json`: os 76 sermões. A tradução portuguesa é da Vozes
  (2019), com direitos reservados e sem autorização registrada, e não há
  latim para conferir. Nada é publicado.

## Áudio

A página da homilia oferece “Ouvir”, que usa a voz sintetizada do próprio
aparelho (Web Speech API, pt-BR) e lê parágrafo por parágrafo. Não é uma
gravação, e o site avisa isso. Quando o navegador não tem síntese de voz, o
botão não aparece.
