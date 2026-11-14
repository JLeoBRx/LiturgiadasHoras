# Textos do site — guia de edição

Todos os textos que aparecem no site estão nesta pasta, em arquivos de texto
simples (`.txt`, UTF-8). Você pode abri-los em qualquer editor (Bloco de
Notas, VS Code, o próprio editor do GitHub) e alterar o texto **sem mexer no
código do site**. Ao salvar e publicar, o site já mostra a nova versão.

```
dados/
├── calendario/santoral.json        datas e graus dos santos e festas (Brasil)
├── liturgia-das-horas/             ofícios (cada hora de cada dia)
│   ├── tempo-comum/
│   │   ├── salterio/semana-1/segunda-laudes.txt   …  (4 semanas do saltério)
│   │   ├── leituras/semana-24/segunda.txt          (leituras do Ofício das Leituras)
│   │   └── completas/segunda.txt
│   ├── advento/  natal/  quaresma/  semana-santa/  pascoa/
│   ├── proprio/<celebração>/laudes.txt  …          (solenidades, festas e memórias)
│   ├── tempo-comum/domingos/domingo-31.txt     (antífonas do Benedictus/Magnificat, Anos A/B/C)
│   ├── invitatorio/antifonas.txt                (antífona do Invitatório de cada dia)
│   ├── comuns/  invitatorio/  salmodia-complementar/  …
│   └── arquivos.json               lista dos ofícios disponíveis (gerada)
├── salmos/        um arquivo por salmo  (ex.: salmo-062-2-9.txt)
├── canticos/      cânticos bíblicos e evangélicos (benedictus.txt, magnificat.txt…)
├── liturgia-diaria/
│   ├── leituras/  leituras da Missa (um arquivo por conjunto de leituras)
│   ├── missal/    orações da Missa (coleta, oferendas, comunhão…)
│   └── indice.json  qual arquivo vale para cada dia
└── versoes/       versões alternativas dos textos (ver abaixo)
```

## Como achar um texto

- **Um salmo**: `dados/salmos/salmo-NNN-...txt`, com o número da Vulgata em
  três dígitos (o da Bíblia hebraica está entre parênteses no título).
  Ex.: o Salmo 62(63),2-9 está em `salmos/salmo-062-2-9.txt`.
  Cada salmo existe **uma única vez** e é usado em todos os ofícios onde
  aparece: corrigiu aqui, corrigiu no site inteiro. Quando o acervo traz o
  mesmo salmo com diferenças reais (outra divisão, refrões de Aleluia etc.),
  há variantes com final `-v2`, `-v3`.
- **Um ofício**: siga tempo → semana → dia → hora. Ex.: Vésperas da segunda-feira
  da III semana do saltério no Tempo Comum:
  `liturgia-das-horas/tempo-comum/salterio/semana-3/segunda-vesperas.txt`.
- **Antífona do Invitatório**: `liturgia-das-horas/invitatorio/antifonas.txt`.
  Cada antífona tem uma chave (ex.: `TC1segunda` = Tempo Comum, semana I do
  saltério, segunda-feira; `TQ` = Quaresma; `carlosborromeu` = o santo).
  A explicação das chaves está no início do arquivo.
- **Antífona do Benedictus/Magnificat de um domingo do Tempo Comum**:
  `liturgia-das-horas/tempo-comum/domingos/domingo-NN.txt`, com as versões
  `laudes-A`, `vesperas-i-B`, `vesperas-ii-C` etc.
- **Um santo**: `liturgia-das-horas/proprio/<id>/` — o `<id>` é o mesmo de
  `calendario/santoral.json` (ex.: `carlosborromeu`).
- **No próprio site**: no fim de cada ofício, abra “Origem dos textos” para ver
  exatamente quais arquivos foram usados.

## Formato dos arquivos

Cada bloco começa com uma linha `@tipo`. O texto do bloco vem nas linhas
seguintes, até o próximo `@`.

| Linha            | O que é                                                    |
|------------------|------------------------------------------------------------|
| `@origem …`      | arquivo do acervo de onde o texto veio (não aparece no site) |
| `@secao Nome \| Ref.` | título de uma parte (Hino, Leitura breve, Preces…)    |
| `@texto`         | parágrafo comum                                            |
| `@hino`          | hino (linha em branco separa as estrofes)                  |
| `@antifona 1`    | antífona (o número é opcional)                             |
| `@salmo salmos/salmo-005-2-10-12-13` | insere um salmo da biblioteca          |
| `@gloria`        | “Glória ao Pai…” no fim do salmo                           |
| `@leitura` / `@tema` | cabeçalho de uma leitura e sua frase-tema              |
| `@responsorio`, `@preces`, `@oracao` | partes com formatação própria          |
| `@rubrica`       | instrução litúrgica (aparece em vermelho, menor)           |
| `@biografia`     | nota sobre o santo                                         |
| `@lacuna codigo` | texto que **não existe no acervo** (o site mostra um aviso) |

Dentro do texto:

- `{texto}` → vermelho (rubrica);  `**texto**` → negrito;  `_texto_` → itálico;
- `[12]` → número de versículo;
- `V.`, `R.`, `*`, `†` e `–` no início das linhas ficam vermelhos sozinhos.

Nos salmos, cada verso começa com `– ` (ou `= ` para versos de três linhas) e
as linhas de continuação começam com dois espaços. Linha em branco separa
estrofes. `@parte II` marca as divisões de um salmo.

```
@titulo Salmo 5,2-10.12-13
@subtitulo Oração da manhã para pedir ajuda

– [2] Escutai, ó Senhor Deus, minhas palavras, *
  atendei o meu gemido!
– [3] Ficai atento ao clamor da minha prece, *
  ó meu Rei e meu Senhor!
```

## Versões alternativas (ex.: linguagem para jovens)

Para criar uma versão adaptada **sem apagar o original**:

1. Escolha um nome curto, por exemplo `jovem`.
2. Copie o arquivo que quer adaptar para `dados/versoes/jovem/` mantendo o
   mesmo caminho. Ex.: `dados/salmos/salmo-062-2-9.txt` →
   `dados/versoes/jovem/salmos/salmo-062-2-9.txt`.
3. Edite a cópia.
4. Declare a versão em `dados/versoes/versoes.json`:
   `{"versoes": [{"id": "jovem", "nome": "Linguagem jovem"}]}`.

No site, em **Ajustes** (ícone no canto superior), aparece a opção “Versão”.
Quando a versão escolhida não tiver um arquivo adaptado, o site usa o
original automaticamente. Funciona para salmos, ofícios e leituras.

## Corrigir qual texto vale em cada dia

- **Santos e datas**: `calendario/santoral.json` (data `MM-DD`, grau,
  cor). Para desligar uma celebração sem apagá-la, use `"ativo": false`.
  Uma celebração sem textos próprios no acervo fica com `"oficio": null`:
  o site usa o ofício do dia de semana e mostra um aviso.
- **Leituras da Missa**: `liturgia-diaria/indice.json`, seção `"leituras"`.
  As chaves seguem o padrão `TC-24-segunda-II` (segunda-feira da 24ª semana
  do Tempo Comum, Ano II), `TC-24-domingo-A`, `ADV-dez17`,
  `QUA-2-terca`, `PAS-3-domingo-B`, `santo:<id>`… Basta trocar o caminho do
  arquivo.
- **Composição das horas**: as regras ficam em `js/liturgy-hours.js`
  (por exemplo, “no Advento de 17 a 23 de dezembro, as Laudes usam a
  salmodia de `salterio-17-a-23-dez` + o próprio do dia”).

## Cuidados

- Salve sempre em **UTF-8** (acentos).
- Não renomeie arquivos sem atualizar quem aponta para eles
  (`arquivos.json`, `indice.json` ou as linhas `@salmo`).
- Os scripts em `ferramentas/` refazem a importação a partir do acervo e
  **sobrescrevem** esta pasta. Depois de editar à mão, não os execute de novo
  sobre `dados/` (use `--destino` para gerar em outra pasta e comparar).
