# Liturgia — uma experiência jovem de oração

Site estático (HTML, CSS e JavaScript, sem servidor e sem serviços pagos)
para rezar a **Liturgia das Horas** e acompanhar a **Liturgia Diária**.
Ao abrir, ele identifica o dia litúrgico de hoje e oferece as orações do dia;
o calendário permite consultar qualquer data passada ou futura.

- **Início** — o dia litúrgico de hoje, a hora sugerida para agora e atalhos.
- **Liturgia das Horas** — Invitatório, Ofício das Leituras, Laudes, Terça,
  Sexta, Noa, Vésperas e Completas, cada hora com a sua estrutura própria.
  Quando há memória facultativa, o site pergunta qual celebração seguir.
- **Liturgia Diária** — leituras, salmo, aclamação, Evangelho e orações da
  Missa do dia (área independente do Ofício das Leituras).
- **Calendário** — navegação por dias, meses e anos, com tempo, semana do
  saltério, ciclos, celebração, santos e memórias de cada dia.

Modo claro/escuro, ajuste do tamanho do texto, forma de rezar o Invitatório
(em grupo, com a antífona depois de cada estrofe, ou sozinho, só no começo e
no fim), navegação entre as horas e leitura confortável no celular. Sem anúncios.

## Como abrir

O site carrega os textos com `fetch`, então precisa ser servido por HTTP
(abrir o `index.html` direto do disco não funciona):

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

**Publicar no GitHub Pages:** Settings → Pages → *Deploy from a branch* →
escolha o branch e a pasta `/ (root)`. Todos os caminhos são relativos e as
rotas usam `#/…`, então funciona em qualquer domínio ou subpasta. O arquivo
`.nojekyll` evita o processamento desnecessário pelo Jekyll.

As fontes (Inter, Literata, Fraunces) vêm do Google Fonts; sem internet, o
site usa as fontes do sistema e continua funcionando.

## Estrutura

```
index.html              página única (rotas: #/, #/horas/…, #/liturgia-diaria/…, #/calendario/…)
css/style.css           identidade visual, leitura, modo escuro
css/calendar.css        calendário
js/liturgical-calendar.js  motor do calendário litúrgico (independente da interface)
js/liturgy-hours.js     regras de composição de cada hora + montagem do ofício
js/daily-liturgy.js     Liturgia Diária (índice de leituras e orações)
js/texto.js             leitura do formato de texto dos arquivos
js/render.js            texto → HTML (rubricas, antífonas, salmos…)
js/calendar.js          desenho do calendário
js/dados.js             carregamento dos arquivos (com versões alternativas)
js/app.js               telas, rotas e ajustes
dados/                  TODOS os textos, em .txt editáveis — ver dados/LEIA-ME.md
ferramentas/            scripts de importação do acervo e testes
Recursos/               acervo original (intocado)
```

Os textos ficam separados da lógica: para corrigir ou adaptar um salmo, uma
leitura ou uma oração, edite o `.txt` correspondente em `dados/` — não é
preciso mexer no código. Cada salmo existe uma única vez em `dados/salmos/`
e é reaproveitado em todos os ofícios. Há suporte a **versões alternativas**
(ex.: uma futura adaptação da linguagem dos salmos para jovens) sem apagar o
texto original. O guia completo está em [`dados/LEIA-ME.md`](dados/LEIA-ME.md).

## O acervo (`Recursos/Liturgia das Horas`)

A pasta é o conteúdo descompactado de um aplicativo Android (Titanium). O
material útil está em `assets/Resources/`:

| Pasta | Conteúdo | Uso no site |
|---|---|---|
| `oficio/` (3.739 HTML) | ofícios por tempo (advento, natal, quaresma, páscoa, tempo comum), próprio dos santos, comuns, completas, invitatório | `dados/liturgia-das-horas` (3.738 ofícios) + `dados/salmos` e `dados/canticos` (519 textos únicos) |
| `lecionario/` (779 HTML) | leituras da Missa, nomeadas pelas referências (ex.: `1Cor11172633Lc7110`) | `dados/liturgia-diaria/leituras` |
| `missal/` (519 HTML) | orações próprias (coleta, oferendas, comunhão), ordinário, prefácios | `dados/liturgia-diaria/missal` |
| `estaticos/paginas.json` | índice dos ofícios na ordem do breviário | guia para as regras de composição |
| `salterio/`, `comentarios/`, `catequeses/`, `evangelho/`, `rosario/`, `santos/` | saltério completo, comentários, devoções, imagens | não usados (fora do escopo pedido) |
| `*.js.bin` | código do aplicativo, **criptografado** | versões legíveis de `invitatorio.js` e `aoh.js` (fornecidas à parte) usadas para extrair as antífonas |

Muitos ofícios do acervo são **compostos de partes** (por exemplo, a
salmodia do saltério + o próprio do dia, ou a salmodia do Ofício das Leituras
+ as leituras da semana). Como a lógica do aplicativo original está
criptografada, essas regras foram reconstruídas de forma aberta em
`js/liturgy-hours.js`, a partir dos nomes dos arquivos, do
`paginas.json` e das normas litúrgicas.

### Calendário litúrgico

`js/liturgical-calendar.js` calcula Páscoa, tempos, semanas, semana do
saltério, ciclos dominical (A/B/C) e ferial (I/II), precedência entre
celebrações e transferências, com as regras do Brasil: Epifania no domingo
entre 2 e 8 de janeiro, Ascensão no 7º domingo da Páscoa, São Pedro e São
Paulo, Assunção e Todos os Santos no domingo seguinte, N. Sra. Aparecida
como solenidade. As datas dos santos estão em `dados/calendario/santoral.json`
(232 celebrações fixas; todas, exceto Santo Adalberto, ligadas a textos do
acervo). Algumas
celebrações próprias de ordens religiosas que existem no acervo ficaram
desativadas (`"ativo": false`).

### Liturgia Diária e dependência externa

O acervo não traz a tabela “dia → leituras” (ela estava no código
criptografado). O índice `dados/liturgia-diaria/indice.json` foi
reconstruído por `ferramentas/gerar_indice_liturgia_diaria.py`, cruzando:

1. referências bíblicas do projeto aberto **Liturgical Calendar API**
   (licença Apache 2.0, cópia em `ferramentas/fontes-externas/`) — usadas
   **só na geração do índice**; o site não depende delas para funcionar e
   nenhum texto litúrgico vem dali;
2. a leitura contínua dos Evangelhos nos dias de semana do Tempo Comum e a
   sequência dos livros da primeira leitura (Anos I e II);
3. tabelas dos domingos dos Anos B e C e das festas com leituras próprias.

O índice é um JSON legível e pode ser corrigido à mão.

## Lacunas do acervo (sinalizadas no site)

Nenhum texto foi inventado. Quando algo não existe no acervo, o site mostra
um aviso discreto no lugar.

As **antífonas do Invitatório** e as **antífonas do Benedictus e do
Magnificat dos domingos do Tempo Comum (Anos A, B e C)** não estavam nos
HTML: o aplicativo as guardava no código (`invitatorio.js` e `aoh.js`).
Com as versões legíveis desses arquivos, elas foram extraídas por
`ferramentas/importar_antifonas.py` para
`dados/liturgia-das-horas/invitatorio/antifonas.txt` e
`dados/liturgia-das-horas/tempo-comum/domingos/domingo-NN.txt`, e o site as
escolhe com a mesma regra do aplicativo (por tempo litúrgico, semana do
saltério, dia e celebração; nas memórias do Tempo Pascal acrescenta
“Aleluia”).

Lacunas que continuam:

- **Ofício das Leituras do IV Domingo do Advento**: o arquivo do acervo não
  traz as leituras.
- **Hora Média do IV Domingo do Advento entre 18 e 23 de dezembro**: o
  acervo só tem a versão de 24/12, que é usada com um aviso.
- **Santo Adalberto** (23/04, memória facultativa): o acervo não traz os textos
  próprios; quando escolhido, o site usa o ofício e as orações do dia e avisa.
- **Nossa Senhora do Carmo** (16/07, festa): as leituras próprias da Missa não
  estão no índice; o site mostra as do dia, com aviso.
- **Coletas salmódicas** (oração depois do salmo do Invitatório): o texto está
  em `salterio/coletasalmodica.js.bin`, ainda criptografado.
- **Liturgia Diária**: faltam no acervo as leituras do 9º domingo do Ano A,
  31º do Ano A e 7º e 8º do Ano B; e as orações próprias da Missa de Natal,
  Ramos, Ceia do Senhor, Sábado Santo, Páscoa e Pentecostes.
- Alguns textos têm pequenos erros de digitação no próprio acervo
  (ex.: “teuSenhor”); foram mantidos como estão para preservar a fonte.

## Ferramentas e testes

```bash
python3 ferramentas/importar_oficios.py        # acervo → dados/liturgia-das-horas, salmos, cânticos
python3 ferramentas/importar_lecionario.py     # acervo → dados/liturgia-diaria (leituras e missal)
python3 ferramentas/gerar_santoral.py          # dados/calendario/santoral.json
python3 ferramentas/gerar_indice_liturgia_diaria.py
python3 ferramentas/importar_antifonas.py --fonte PASTA_COM_invitatorio.js_E_aoh.js
```

⚠️ Os importadores sobrescrevem `dados/`. Depois de editar os textos à mão,
use `--destino OUTRA_PASTA` (importar_oficios) para não perder as edições.

```bash
node ferramentas/testes/validar_horas.mjs 2025 2031             # toda hora de todo dia tem texto?
node ferramentas/testes/validar_horas.mjs 2026 2027 --montar    # monta os ofícios e lista avisos/lacunas
node ferramentas/testes/validar_liturgia_diaria.mjs 2025 2031
```

Resultado atual: todas as horas de todos os dias de 2025 a 2031 (26.208
combinações, incluindo as memórias facultativas) são montadas com textos
existentes; a Liturgia Diária encontra leituras em 99,9% dos dias e orações
em 98,4%.

## Créditos

**Textos da Liturgia das Horas, Lecionários, Missal e documentos da Igreja**
Conferência Nacional dos Bispos do Brasil (CNBB) — © Todos os direitos reservados.

**Coletas salmódicas**
Secretariado Nacional de Liturgia — Conferência Episcopal Portuguesa — © Todos os direitos reservados.
