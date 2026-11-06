# Camada `traducao-propria/`: tradução própria do latim

**Identificação:** tradução própria com auxílio de IA e revisão editorial.

Esta camada guarda uma tradução feita diretamente do texto latino das *Homilias sobre os Evangelhos* (Migne, PL 76, camada `../latim/`), conferido com a edição crítica (CCSL 141). Ela é independente da tradução recebida (camada `../recebida/`) e da tradução recebida revisada (camada `../revisada/`). Não substitui nenhuma das duas, que continuam intactas. **Nada desta pasta é publicado no site:** o site lê apenas `../revisada/`, e só para as homilias com correspondência aprovada.

## Conteúdo

| Arquivo | O que é |
|---|---|
| `homilia-23.txt` | Homilia XXIII completa (piloto), no mesmo formato de blocos das outras camadas (`@cabecalho`, `@rubrica`, `@leitura-titulo`, `@leitura`, `@paragrafo`) |
| `notas-homilia-23.md` | Texto de base, decisões de tradução e comparação com a tradução recebida |
| `glossario.md` | Vocabulário e critérios fixados na Etapa 1 (falsos cognatos, palavras comentadas pelo autor, referências, nomes) |

## Trechos de tradução própria já presentes na camada revisada

Dois trechos da camada `../revisada/` não vêm da tradução recebida. Foram traduzidos do latim porque a tradução recebida não os tinha. Estão identificados no registro:

- **Homilia II (G02-01):** cabeçalho e rubrica, que faltavam na tradução recebida.
- **Homilia XL, § 3 (G40-05):** duas frases. No lugar delas, a tradução recebida tinha anotações de uma ferramenta automática ("Wait correct typo. Need final clean.").

As demais correções da camada revisada mudam palavras ou construções da tradução recebida e são justificadas uma a uma no registro. Não são tradução nova.

## Método

1. **Traduzir do latim.** O texto de base é Migne, base declarada da tradução recebida. A tradução recebida não é consultada durante este passo.
2. **Conferir com a CCSL 141.** Erros da transcrição de Migne e variantes que mudam o sentido são indicados nas notas.
3. **Comparar com a tradução recebida,** passo a passo. Uma divergência de sentido em que a tradução recebida esteja errada é registrada no `registro-editorial.json` e corrigida na camada revisada, como em G23-02 e G23-03. As diferenças apenas de redação ficam nas notas.
4. **Aplicar os critérios do `glossario.md`.**
5. **Revisão editorial humana.** Só depois dela o arquivo deixa o estado "piloto".

## Estado

| Homilia | Estado |
|---|---|
| XXIII | piloto traduzido; aguarda revisão editorial |
| as outras 39 | não traduzidas |

## Por que não as 40 agora

- **Volume.** Os 40 textos latinos somam cerca de 91 mil palavras (620 mil caracteres). Uma tradução integral feita de uma só vez, sem revisão humana passo a passo, não teria a qualidade que se exige de um texto litúrgico. O resultado seria uma terceira versão a conferir inteira, e não uma tradução pronta.
- **Pouco a ganhar já.** A Etapa 1 deixou a tradução recebida colacionada e corrigida nas 40 homilias. O que uma tradução nova acrescentaria agora é sobretudo diferença de estilo.
- **O piloto confirma o método.** A tradução direta, seguida de comparação, ainda encontra problemas: em XXIII, um que a colação não tinha apanhado. Isso justifica continuar homilia por homilia, com revisão.

## Proposta

Avançar uma homilia de cada vez, a começar pelas publicadas, com o mesmo método e o mesmo glossário. Cada nova homilia acrescenta um `homilia-NN.txt` e um `notas-homilia-NN.md`.
