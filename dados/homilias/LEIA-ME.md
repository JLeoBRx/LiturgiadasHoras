# Homilias dos santos

Esta pasta guarda as homilias que aparecem na **Liturgia Diária** (botão
“Homilia”) e no **catálogo geral** do site (`#/homilias`), e o material ainda
não publicado. Uma homilia só aparece num dia quando existe uma
correspondência **litúrgica** ou **bíblica** conferida; correspondências apenas
temáticas ficam documentadas e não aparecem no site. Uma homilia publicada sem
correspondência suficiente fica só no catálogo geral, sem data litúrgica.

- [`AUDITORIA.md`](AUDITORIA.md): cada alteração na tradução, as sugestões não
  aplicadas, as dúvidas, as variantes do latim, os problemas da fonte e a
  autenticidade.
- [`INVENTARIO.md`](INVENTARIO.md): todas as homilias e sermões recebidos, com
  a situação de cada um (publicado, a conferir, sem correspondência, sem
  tradução…).
- [`DISTRIBUICAO.md`](DISTRIBUICAO.md): a distribuição das 40 homilias de São
  Gregório no calendário (Etapa 2): critérios, tabela das 40, datas em três
  anos litúrgicos, correspondências usadas e recusadas, dúvidas.

Esses documentos e o `inventario.json` são **gerados**. Não os edite à mão:
rode `node ferramentas/homilias/gerar_documentos.mjs` (auditoria e inventário)
e `node ferramentas/homilias/aplicar_distribuicao.mjs` (índice e distribuição).
Os testes falham se eles estiverem desatualizados.

## Procedência da tradução de São Gregório Magno

| Campo | Registro |
|---|---|
| Autor original | São Gregório Magno (c. 540–604) |
| Obra | *Homiliae in Evangelia* (40 homilias) |
| Fonte textual declarada pela OpenSaints | edição de Migne, *Patrologia Latina* 76, na [Wikisource latina](https://la.wikisource.org/wiki/Homiliae_in_Evangelia_(ed._Migne)) |
| Fonte de obtenção da tradução portuguesa | [portal OpenSaints](https://opensaints.com/pt-BR/padres-da-igreja/fontes/sao-gregorio-magno-papa/sao-gregorio-magno-papa-homiliae-in-evangelia-ed-migne) |
| Tradutor | não identificado nos materiais atualmente disponíveis |
| Revisões do projeto | uma a uma em `gregorio-magno/registro-editorial.json` |
| Edição crítica de conferência | R. Étaix, CCSL 141 (Brepols, 1999); usada só para conferir, sem publicar seu texto |

A OpenSaints declara uma política de reutilização na introdução aos textos
adicionais dos Padres da Igreja: “Anyone may do anything they wish with any
part of this material, whether for private, educational or commercial
purposes.” A declaração não se estende automaticamente a materiais de
terceiros apenas hospedados ou referenciados pelo site.

Não atribua a tradução à OpenSaints nem a uma pessoa específica sem prova
documental. Os dados completos e a decisão editorial de 06/11/2026 estão em
`procedencia` e `historico`, no registro editorial.

A tradução própria, feita diretamente do latim, começou na Etapa 1 com um
piloto (Homilia XXIII). Ela fica numa camada separada,
`gregorio-magno/traducao-propria/`, identificada como "tradução própria com
auxílio de IA e revisão editorial", sem apagar nem sobrescrever a recebida e a
revisada; ver o LEIA-ME dessa pasta. Nada dessa camada é publicado no site.

## Camadas do texto (nada é sobrescrito)

| Camada | Onde | Quem escreve |
|---|---|---|
| Fonte original | `Homilia dos Santos/…` (arquivos enviados) | ninguém: nunca é alterada |
| Texto latino (Migne, PL 76) | `gregorio-magno/latim/homilia-NN.txt` (e `prefacio.txt`) | `ferramentas/homilias/separar_latim.py`, transcrição do Corpus Corporum via Wikisource, sem alteração de palavras |
| Tradução recebida | `gregorio-magno/recebida/homilia-NN.txt` | `ferramentas/homilias/separar_gregorio.py`, cópia exata da origem dividida por homilia |
| Decisões editoriais | `gregorio-magno/registro-editorial.json` | à mão: cada correção, sugestão, dúvida, variante ou problema, com latim, justificativa e confiança |
| Tradução revisada (= texto publicado) | `gregorio-magno/revisada/homilia-NN.txt` | `ferramentas/homilias/aplicar_alteracoes.py`, recebida + correções com estado `aplicada` |
| Tradução própria (não publicada) | `gregorio-magno/traducao-propria/` | à mão, do latim; piloto da Homilia XXIII, notas e glossário |
| Distribuição no calendário | `gregorio-magno/distribuicao.json` | à mão: para cada homilia, as correspondências usadas e recusadas, com fundamento e justificativa |
| O que o site mostra | `indice.json` | as entradas de São Gregório são geradas por `ferramentas/homilias/aplicar_distribuicao.mjs` a partir de `distribuicao.json`; as obras e os autores, à mão |

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

## Mudar os dias de uma homilia de São Gregório

As 40 homilias estão publicadas (Etapa 2). Os dias em que cada uma aparece
vêm de `gregorio-magno/distribuicao.json`:

- `liturgicas`: a homilia foi pregada para a celebração, que existe no
  calendário atual (`celebracao` = id do santoral, ou `chaves` de um dia do
  tempo). Exige a ocasião na rubrica da edição crítica ou no próprio texto,
  e um `fundamento`.
- `biblicas`: `{"leituras": "<chave de liturgia-diaria/indice.json>"}`. O
  script lê o Evangelho do arquivo de leituras, calcula os versículos em
  comum e **recusa** (sem gravar nada) uma correspondência que não seja plena
  pelos critérios do próprio arquivo (`criterios.biblica_plena`).
- `nao_usadas` e `duvidas`: o que foi examinado e recusado, ou espera decisão.
- `situacao`: `calendario` ou `catalogo` (com `motivo_catalogo`).

Depois de editar:

```bash
node ferramentas/homilias/aplicar_distribuicao.mjs
```

```bash
node ferramentas/homilias/gerar_documentos.mjs
```

Acerte também a lista `ESPERADO` em `ferramentas/testes/homilias.test.mjs`
(escrita à parte, de propósito: o teste calcula os dias só com o calendário e
exige que cada homilia apareça exatamente neles, de 2025 a 2045) e rode os
testes. Para esconder uma homilia sem apagar nada, acrescente
`"estado": "suspensa"` à entrada dela em `distribuicao.json` e rode o script.

Na dúvida, não publique a correspondência. Uma homilia ausente de um dia é
preferível a uma associação incorreta.

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
