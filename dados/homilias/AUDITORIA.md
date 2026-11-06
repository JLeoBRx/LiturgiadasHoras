# Auditoria das traduções — Homilias dos santos

> Gerado a partir de `dados/homilias/gregorio-magno/registro-editorial.json` por `ferramentas/homilias/gerar_documentos.mjs`. Não edite à mão.

## Etapas

| Etapa | Estado | Data |
|---|---|---|
| Finalização textual das 40 homilias | concluída | 06/11/2026 |
| Distribuição litúrgica | entregue; aguardando avaliação do responsável | 06/11/2026 |

## Método

- **Texto latino de base:** J.-P. Migne, *Patrologia Latina* 76 (Paris, 1849), na transcrição do Corpus Corporum (Universidade de Zurique) publicada na Wikisource latina, enviada em PDF e separada por homilia em `dados/homilias/gregorio-magno/latim/`. Os números de coluna citados no registro (1434-1661) são os que essa transcrição traz entre colchetes; podem não coincidir com os de outras tiragens da PL 76, que não foram conferidas. É a base declarada da tradução recebida.
- **Texto latino de conferência:** R. Étaix (ed.), *Gregorius Magnus, Homiliae in Evangelia*, CCSL 141, Turnhout: Brepols, 1999 — o PDF enviado. Edição crítica, com aparato de manuscritos e de fontes; usada para resolver passos duvidosos, identificar erros da transcrição de Migne e registrar variantes.
- **Tradução conferida:** o arquivo enviado “Texto Traduzido, as 40 homilias.txt”, obtido no portal OpenSaints (https://opensaints.com/pt-BR/padres-da-igreja/fontes/sao-gregorio-magno-papa/sao-gregorio-magno-papa-homiliae-in-evangelia-ed-migne). Fonte textual declarada pela OpenSaints: Edição de Migne, Patrologia Latina 76, consultada pela OpenSaints na Wikisource latina: https://la.wikisource.org/wiki/Homiliae_in_Evangelia_(ed._Migne). Tradutor: não identificado nos materiais atualmente disponíveis. Não atribuir a tradução à OpenSaints nem a uma pessoa específica sem prova documental.
- **Procedimento:** as 40 homilias foram lidas em paralelo com o latim, parágrafo por parágrafo (Etapa 1: as 9 publicadas primeiro com a CCSL 141 e depois revistas com Migne; as outras 31 com Migne e a CCSL). Em todo ponto em que o português diverge do latim, a CCSL e o seu aparato foram consultados. Verificações automáticas completaram a leitura: números de coluna e de seção, referências desfiguradas, notas editoriais, resíduos de ferramentas, falsos cognatos recorrentes.
- **Regra decisiva:** quando o português segue uma leitura que o aparato atribui a manuscritos, isso é diferença de tradição textual (provavelmente a da edição de Migne), não erro de tradução: o texto fica como recebido e a diferença é registrada como *variante*.
- **Só correções de confiança alta foram aplicadas.** Confiança moderada ou baixa = sugestão ou dúvida, nunca aplicada.
- Escolhas de estilo que não mudam o sentido (artigos, pontuação, tempos verbais harmonizados, ordem das palavras) não foram alteradas nem itemizadas.
- **Reversível:** a tradução recebida está intacta em `dados/homilias/gregorio-magno/recebida/`; o texto publicado (`revisada/`) é gerado a partir dela e do registro. Para desfazer uma correção, mude seu estado para `nao-aplicada` e rode `python3 ferramentas/homilias/aplicar_alteracoes.py`.

## Números

| Tipo | Quantidade |
|---|---|
| Correções de tradução aplicadas | 259 |
| Correções de problemas da fonte aplicadas (artefatos, notas editoriais, referências) | 123 |
| Sugestões não aplicadas | 4 |
| Dúvidas (1 ainda em aberto) | 2 |
| Variantes textuais registradas (texto mantido) | 30 |
| Homilias conferidas | 40 de 40 |

Graus de segurança: **alta** — a correção é sustentada pelo original e pelo contexto; **moderada** — solução plausível, com alguma ambiguidade; **baixa** — não há elementos para uma solução definitiva.

## 1. Alterações efetivamente aplicadas

### 1.1 Correções de tradução

#### G01-06 · Homilia I · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne); Evg. Lc 21, 25-33
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 1
- **Texto latino:** LECTIO EVANGELII SEC. LUC. XXI, 25-32.
- **Tradução recebida:** “LEITURA DO EVANGELHO SEGUNDO LUCAS (21, 25-32).”
- **Tradução aplicada:** “Leitura do Evangelho segundo Lucas 21,25-33.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo. Na Etapa 2 (06/11/2026), a extensão foi corrigida para 21,25-33: a leitura termina em 'Coelum et terra transibunt, verba autem mea non transibunt' (Lc 21,33); é também a extensão dada pela CCSL 141 (Evg. Lc 21, 25-33). O título de Migne, copiado pela tradução, indicava outra extensão.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G01-01 · Homilia I · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 6, § 1 (igual a Migne)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 3
- **Texto latino:** Huic etenim lectioni sancti Evangelii, quam modo vestra fraternitas audivit, paulo superius Dominus praemisit, dicens: Exsurget gens contra gentem…
- **Tradução recebida:** “o Senhor acrescentou um pouco acima, dizendo:”
- **Tradução aplicada:** “o Senhor antepôs, um pouco acima, dizendo:”
- **Justificativa linguística:** 'Praemisit' é 'pôs antes', 'disse antes'; 'acrescentou' diz o contrário e não combina com 'um pouco acima'. Logo depois o latim usa 'adjunxit' (acrescentou) para a passagem que vem a seguir, e a tradução mantém essa distinção.
- **Motivo:** Verbo com sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G01-02 · Homilia I · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 7, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 4
- **Texto latino:** Nam virtutes coelorum movebuntur. Quid etenim Dominus virtutes coelorum nisi angelos, archangelos, thronos, dominationes, principatus et potestates appellat…
- **Tradução recebida:** “Pois as potestades dos céus serão abaladas.”
- **Tradução aplicada:** “Pois as virtudes dos céus serão abaladas.”
- **Justificativa linguística:** 'Virtutes' e 'potestates' são duas das nove ordens de anjos para Gregório (Homilia XXXIV, § 7, enumera ambas). Logo em seguida ele explica que as 'virtutes' significam todas as ordens, entre elas as 'potestates'; traduzir 'virtutes' por 'potestades' torna a explicação circular.
- **Justificativa teológica ou contextual:** Preserva a terminologia angélica que Gregório desenvolve na Homilia XXXIV.
- **Motivo:** Termo técnico trocado por outro da mesma série.
- **Grau de segurança:** alta · **estado:** aplicada

#### G01-03 · Homilia I · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 7, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 4
- **Texto latino:** Quid etenim Dominus virtutes coelorum nisi angelos, archangelos, thronos, dominationes, principatus et potestates appellat
- **Tradução recebida:** “que chama o Senhor de potestades dos céus, senão”
- **Tradução aplicada:** “que chama o Senhor de virtudes dos céus, senão”
- **Justificativa linguística:** Mesma razão de G01-02.
- **Motivo:** Termo técnico trocado por outro da mesma série.
- **Grau de segurança:** alta · **estado:** aplicada

#### G01-04 · Homilia I · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 7, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 5
- **Texto latino:** cum terror judicii virtutibus commotis ostenditur
- **Tradução recebida:** “pelo abalo das potestades”
- **Tradução aplicada:** “pelo abalo das virtudes”
- **Justificativa linguística:** Mesma razão de G01-02: 'virtutibus commotis' retoma as 'virtutes coelorum' do Evangelho.
- **Motivo:** Termo técnico trocado por outro da mesma série.
- **Grau de segurança:** alta · **estado:** aplicada

#### G01-05 · Homilia I · § 3, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 8, § 3 (igual a Migne)
- **Localização no texto:** § 3, fim — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 5
- **Texto latino:** quia tunc moeroris nostri nubila transeunt, et vitae dies aeterni solis claritate fulgescunt.
- **Tradução recebida:** “e os dias da vida eterna resplandecem com a claridade do sol.”
- **Tradução aplicada:** “e os dias da vida resplandecem com a claridade do sol eterno.”
- **Justificativa linguística:** 'Aeterni' concorda com 'solis' (do sol eterno), não com 'vitae'.
- **Justificativa teológica ou contextual:** O sol eterno é imagem de Deus/Cristo, que ilumina a vida dos eleitos; a tradução transferiu o adjetivo e perdeu a imagem.
- **Motivo:** Adjetivo ligado à palavra errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G01-07 · Homilia I · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia I
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 9, § 5: 'plerumque senibus ipsa sua salus aegritudo est'
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-01.txt`, bloco 7
- **Texto latino:** nam etsi languor desit, plerumque sensibus ipsa sua salus aegritudo est (Migne)
- **Tradução recebida:** “a própria saúde já é enfermidade para os sentidos”
- **Tradução aplicada:** “a própria saúde já é enfermidade para os velhos”
- **Justificativa linguística:** Migne traz 'sensibus' (para os sentidos); o texto crítico, 'senibus' (para os velhos). O contexto é a comparação entre o mundo e o homem que envelhece ('loquentis verba anhelitus intercidit… ita mundus in annis prioribus velut in juventute viguit'), e a lição da CCSL dá sentido mais claro: para os velhos, mesmo sem doença, a própria saúde já é enfermidade. A tradução recebida segue Migne. Registra-se a variante, sem alterar o português. Pelo critério C4 (Migne como referência, CCSL quando a justificativa filológica é consistente e o sentido o exige), adota-se 'senibus': o parágrafo compara o mundo ao homem que envelhece.
- **Motivo:** Leitura da CCSL adotada pelo critério C4 (decisão de 06/11/2026).
- **Decisão do responsável (06/11/2026):** adotar a leitura da CCSL. Aprovado no item C4.
- **Grau de segurança:** alta · **estado:** aplicada

#### G02-06 · Homilia II · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia II
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne); Evg. Lc 18, 31-43
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-02.txt`, bloco 0
- **Texto latino:** LECTIO S. EVANGELII SEC. LUC. XVIII, 31-44.
- **Tradução recebida:** “Leitura do Santo Evangelho segundo Lucas 18, 31-44.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 18,31-43.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo. Na Etapa 2 (06/11/2026), a extensão foi corrigida para 18,31-43: Lc 18 tem 43 versículos; a leitura termina em 'Et omnis plebs, ut vidit, dedit laudem Deo' (Lc 18,43); é também a extensão dada pela CCSL 141 (Evg. Lc 18, 31-43). O título de Migne, copiado pela tradução, indicava outra extensão.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G02-02 · Homilia II · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia II
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 13, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-02.txt`, bloco 3
- **Texto latino:** si autem jam credit, sed ut aeternam lucem recipiat rogare dissimulat, atque a precibus cessat
- **Tradução recebida:** “mas dissimula pedir para receber a luz eterna”
- **Tradução aplicada:** “mas descuida de pedir para receber a luz eterna”
- **Justificativa linguística:** Falso cognato: no latim tardio 'dissimulare' + infinitivo é deixar de fazer, descuidar-se; em português 'dissimular' é fingir ou disfarçar.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G02-03 · Homilia II · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia II
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 15, § 5 (igual a Migne)
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-02.txt`, bloco 6
- **Texto latino:** Ecce stat qui ante transibat
- **Tradução recebida:** “Eis que para quem antes passava, agora para;”
- **Tradução aplicada:** “Eis que se detém aquele que antes passava;”
- **Justificativa linguística:** A construção recebida se lê como 'para (preposição) quem antes passava'. O latim diz simplesmente: está parado aquele que antes passava.
- **Motivo:** Construção ambígua que leva a uma leitura errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G02-04 · Homilia II · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia II
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 17, § 8 (igual a Migne)
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-02.txt`, bloco 9
- **Texto latino:** Aspiciamus qua graditur, et ejus vestigia imitando teneamus.
- **Tradução recebida:** “e firmemos os seus passos, imitando-o.”
- **Tradução aplicada:** “e, imitando-o, sigamos as suas pegadas.”
- **Justificativa linguística:** 'Vestigia tenere' é seguir as pegadas de alguém; 'firmemos os seus passos' diz que nós daríamos firmeza aos passos de Cristo.
- **Motivo:** Sentido alterado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G02-05 · Homilia II · § 8, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia II
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 19, § 8 (igual a Migne)
- **Localização no texto:** § 8, fim — `dados/homilias/gregorio-magno/recebida/homilia-02.txt`, bloco 9
- **Texto latino:** sed haec ipsa nostra conversatio ad laudem Dei et alios accendat
- **Tradução recebida:** “a nossa própria conversão inflama os outros”
- **Tradução aplicada:** “o nosso próprio modo de viver inflama os outros”
- **Justificativa linguística:** Falso cognato: 'conversatio' é o modo de viver, a conduta; 'conversão' seria 'conversio'.
- **Justificativa teológica ou contextual:** Gregório fala do exemplo da vida que move os outros a louvar a Deus, como o povo que viu o cego seguir Jesus.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G03-05 · Homilia III · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia III
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-03.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANGELII SEC. MATTH. XII, 46-50.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo Mateus 12, 46-50.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 12,46-50.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G03-01 · Homilia III · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia III
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 20, § 1 (igual a Migne)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-03.txt`, bloco 4
- **Texto latino:** Jesus etenim conditor et redemptor noster matrem se nosse dissimulat
- **Tradução recebida:** “dissimula conhecer sua mãe”
- **Tradução aplicada:** “finge não conhecer sua mãe”
- **Justificativa linguística:** 'Se nosse dissimulat' é agir como quem não conhece; em português 'dissimula conhecer' sugere o contrário (esconder que conhece) ou fica obscuro.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G03-02 · Homilia III · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia III
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 21, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-03.txt`, bloco 6
- **Texto latino:** sic post se timuit vivos in carne relinquere, sicut carnales parentes solent metuere ne mortuos praemittant.
- **Tradução recebida:** “como os pais carnais costumam temer precedê-los mortos.”
- **Tradução aplicada:** “como os pais carnais costumam temer que os filhos morram antes deles.”
- **Justificativa linguística:** 'Ne mortuos praemittant' é 'que os mandem à frente mortos', isto é, que os filhos morram primeiro. A tradução dizia que os pais temem morrer antes dos filhos, o contrário.
- **Justificativa teológica ou contextual:** O contraste de Gregório: Felicidade temia deixar os filhos vivos depois de si, ao passo que os pais comuns temem vê-los morrer antes.
- **Motivo:** Sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G03-03 · Homilia III · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia III
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 22, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-03.txt`, bloco 6
- **Texto latino:** Optavit nullum post se relinquere, ne si quem haberet superstitem, non posset habere consortem.
- **Tradução recebida:** “não pudesse deixar de tê-lo como companheiro.”
- **Tradução aplicada:** “não pudesse tê-lo como companheiro.”
- **Justificativa linguística:** O latim diz 'não pudesse tê-lo como companheiro' (no martírio e na glória). 'Deixar de' inverte o sentido.
- **Motivo:** Sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G03-04 · Homilia III · § 3, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia III
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 23, § 3
- **Localização no texto:** § 3, fim — `dados/homilias/gregorio-magno/recebida/homilia-03.txt`, bloco 6
- **Texto latino:** pro Christo frequenter occubuit, quia et amori illius sola sua mors minime suffecit.
- **Tradução recebida:** “porque para o amor dela sua morte sozinha de modo algum bastou.”
- **Tradução aplicada:** “porque, para o amor d’Ele, a sua morte sozinha de modo algum bastou.”
- **Justificativa linguística:** 'Illius' não se refere ao sujeito (Felicidade), que seria 'suo', mas a Cristo, nomeado logo antes ('pro Christo'). As duas edições têm 'illius'.
- **Justificativa teológica ou contextual:** O amor a Cristo é que pede mais do que uma só morte; a tradução fazia do amor dela a medida.
- **Motivo:** Pronome com referente errado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G04-02 · Homilia IV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-04.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANGELII SEC. MATTH. X, 5-10.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo Mateus 10, 5-10.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 10,5-10.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G04-01 · Homilia IV · § 5, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 31, § 5 (igual a Migne)
- **Localização no texto:** § 5, início — `dados/homilias/gregorio-magno/recebida/homilia-04.txt`, bloco 8
- **Texto latino:** Cuncta erga vos vicissim gratis agite.
- **Tradução recebida:** “Fazei também vós, em relação a tudo, gratuitamente.”
- **Tradução aplicada:** “Fazei tudo gratuitamente uns para com os outros.”
- **Justificativa linguística:** 'Erga vos vicissim' é 'uns para com os outros', 'reciprocamente'; a tradução omitiu a reciprocidade e deixou a frase sem objeto claro.
- **Justificativa teológica ou contextual:** Depois de falar do dom gratuito do ministério, Gregório aplica o 'de graça recebestes, de graça dai' às relações entre os fiéis.
- **Motivo:** Omissão que deixa o sentido obscuro.
- **Grau de segurança:** alta · **estado:** aplicada

#### G05-10 · Homilia V · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. MATTH. IV, 18-22.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO MATEUS 4, 18-22.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 4,18-22.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G05-01 · Homilia V · § 1, 1º parágrafo da homilia

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 33, § 1
- **Localização no texto:** § 1, 1º parágrafo da homilia — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 4
- **Texto latino:** Quanta nos eius miracula uidemus, quot flagellis affligimur, quantis minarum asperitatibus deterremur, et tamen uocantem contemnimus?
- **Tradução recebida:** “e, apesar disso, desprezamos seguir Aquele que nos chama!”
- **Tradução aplicada:** “e, apesar disso, desprezamos Aquele que nos chama!”
- **Justificativa linguística:** O latim diz 'uocantem contemnimus' (desprezamos aquele que chama). O verbo 'seguir' não está no texto, e o aparato da CCSL não registra nenhum manuscrito com 'sequi'.
- **Justificativa teológica ou contextual:** Gregório contrapõe a prontidão de Pedro e André ao nosso desprezo pela própria pessoa que chama; o acréscimo desloca o objeto do desprezo da pessoa de Cristo para o ato de segui-lo.
- **Motivo:** Acréscimo inexistente no original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G05-02 · Homilia V · § 1, fim do 1º parágrafo

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 34, § 1
- **Localização no texto:** § 1, fim do 1º parágrafo — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 4
- **Texto latino:** Quid ergo, fratres carissimi, quid in eius iudicio dicturi sumus
- **Tradução recebida:** “Que diremos, pois, caríssimos, que diremos em seu juízo”
- **Tradução aplicada:** “Que diremos, pois, irmãos caríssimos, que diremos em seu juízo”
- **Justificativa linguística:** O vocativo latino é 'fratres carissimi'; a tradução omitiu 'fratres'. A mesma fórmula é traduzida por 'irmãos caríssimos' no restante da homilia.
- **Motivo:** Omissão de uma expressão do original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G05-03 · Homilia V · § 2, 2º parágrafo da homilia

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 34, § 2
- **Localização no texto:** § 2, 2º parágrafo da homilia — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 5
- **Texto latino:** Aestimationem quippe pretii non habet, sed tamen regnum Dei tantum ualet quantum habes.
- **Tradução recebida:** “e, no entanto, o reino de Deus vale tanto quanto tendes.”
- **Tradução aplicada:** “e, no entanto, o reino de Deus vale tanto quanto tens.”
- **Justificativa linguística:** 'habes' é 2ª pessoa do SINGULAR. Gregório passa do plural com que se dirige aos ouvintes ('relinquitis') para o singular da sentença geral, como faz logo adiante ('nulli quod pati non uis facere', que a própria tradução mantém no singular: 'o que não queres padecer').
- **Justificativa teológica ou contextual:** A máxima se dirige a cada um: o valor do Reino se mede pelo que cada pessoa tem e entrega.
- **Motivo:** Alteração da pessoa gramatical de uma sentença do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G05-04 · Homilia V · § 2, fim do 2º parágrafo

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 35, § 2
- **Localização no texto:** § 2, fim do 2º parágrafo — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 5
- **Texto latino:** Regnum itaque Dei, ut diximus, tantum ualet quantum habes.
- **Tradução recebida:** “Portanto, o reino de Deus, como dissemos, vale tanto quanto tendes.”
- **Tradução aplicada:** “Portanto, o reino de Deus, como dissemos, vale tanto quanto tens.”
- **Justificativa linguística:** Mesma sentença de G05-03, repetida pelo autor: 'quantum habes', 2ª pessoa do singular.
- **Motivo:** Alteração da pessoa gramatical de uma sentença do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G06-05 · Homilia VI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-06.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. MATTH. XI, 2-10.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO MATEUS 11, 2-10.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 11,2-10.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G06-01 · Homilia VI · § 1, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 40, § 1 (igual a Migne)
- **Localização no texto:** § 1, fim — `dados/homilias/gregorio-magno/recebida/homilia-06.txt`, bloco 3
- **Texto latino:** Ac si patenter dicat: Mira quidem facio, sed abjecta perpeti non dedignor. Quia ergo moriendo te subsequor, cavendum valde est hominibus…
- **Tradução recebida:** “Portanto, porque eu Te sigo morrendo,”
- **Tradução aplicada:** “Portanto, porque eu te sigo morrendo,”
- **Justificativa linguística:** Quem fala é Cristo, dirigindo-se a João ('moriendo te subsequor': sigo-te na morte, já que João morre antes). A maiúscula, que a tradução reserva a Deus, faz o pronome parecer dirigido a Cristo.
- **Justificativa teológica ou contextual:** Gregório explica que João, precursor no nascimento, será precursor também na morte e na descida aos infernos; a maiúscula inverte quem precede e quem segue.
- **Motivo:** Pronome com referente trocado pela maiúscula.
- **Grau de segurança:** alta · **estado:** aplicada

#### G06-02 · Homilia VI · § 6, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 43, § 6 (igual a Migne)
- **Localização no texto:** § 6, início — `dados/homilias/gregorio-magno/recebida/homilia-06.txt`, bloco 8
- **Texto latino:** si aeternum regnum vel supplicium erranti denuntiat, cum sanctae annuntiationis verba impendit, profecto angelus existit.
- **Tradução recebida:** “quando lhe oferece palavras de santa admoestação, certamente é anjo.”
- **Tradução aplicada:** “quando lhe oferece palavras do santo anúncio, certamente é anjo.”
- **Justificativa linguística:** 'Annuntiatio' é anúncio, não admoestação. Todo o argumento se apoia na equivalência 'angelus' = 'nuntius' (mensageiro): quem anuncia é anjo.
- **Justificativa teológica ou contextual:** Gregório estende a todos os fiéis o nome de anjo pelo ofício de anunciar; com 'admoestação' perde-se o nexo com o nome.
- **Motivo:** Termo trocado; perde-se o jogo de palavras em que se apoia o argumento.
- **Grau de segurança:** alta · **estado:** aplicada

#### G06-03 · Homilia VI · § 6, perto do fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 44, § 6
- **Localização no texto:** § 6, perto do fim — `dados/homilias/gregorio-magno/recebida/homilia-06.txt`, bloco 8
- **Texto latino:** Mecum vos admoneo, ut ab otioso sermone parcamus, inutiliter loqui declinemus.
- **Tradução recebida:** “Eu vos admoesto comigo mesmo: pouparemos nossa língua da conversa ociosa, evitaremos falar inutilmente.”
- **Tradução aplicada:** “Eu vos admoesto comigo mesmo a que nos abstenhamos da conversa ociosa, a que evitemos falar inutilmente.”
- **Justificativa linguística:** 'Admoneo ut' pede o subjuntivo (exorto a que nos abstenhamos); o futuro do indicativo transforma a exortação em afirmação. 'Língua' não está no latim desta frase. A correção segue Migne, base da tradução; no texto crítico a frase está no imperativo ('parcite… declinate'), sem mudança de sentido.
- **Motivo:** Modo verbal errado e acréscimo.
- **Grau de segurança:** alta · **estado:** aplicada

#### G07-05 · Homilia VII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-07.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. I, 19-28.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO JOÃO 1, 19-28.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 1,19-28.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G07-01 · Homilia VII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 49, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-07.txt`, bloco 6
- **Texto latino:** Qui inter haec mysterium nostri Redemptoris annuntians, hunc in medio hominum et stetisse asserit, et nesciri
- **Tradução recebida:** “E, ao mesmo tempo, anunciando o mistério, afirma que Ele esteve”
- **Tradução aplicada:** “E, ao mesmo tempo, anunciando o mistério de nosso Redentor, afirma que Ele esteve”
- **Justificativa linguística:** A tradução omitiu 'nostri Redemptoris'. O aparato registra apenas a inversão 'redemptoris nostri' em B e F, sem omissão.
- **Justificativa teológica ou contextual:** É o mistério do Redentor — presente no meio dos homens e desconhecido — que João anuncia; sem o complemento, 'o mistério' fica indeterminado.
- **Motivo:** Omissão de uma expressão.
- **Grau de segurança:** alta · **estado:** aplicada

#### G08-10 · Homilia VIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. II, 1-14.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Lucas 2, 1-14.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 2,1-14.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G08-02 · Homilia VIII · § 1, 1º parágrafo da homilia

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 54, § 1
- **Localização no texto:** § 1, 1º parágrafo da homilia — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 4
- **Texto latino:** Qui ergo aeternus permanens temporalis apparuit, alienum est ubi descendit.
- **Tradução recebida:** “Portanto, Aquele que, permanecendo eterno, apareceu temporal, é alheio ao lugar em que desceu.”
- **Tradução aplicada:** “Portanto, para Aquele que, permanecendo eterno, apareceu temporal, é alheio o lugar onde desceu.”
- **Justificativa linguística:** Na oração principal, o sujeito é 'ubi descendit' (o lugar aonde desceu) e o predicado é 'alienum est'. A tradução recebida inverteu a construção, fazendo de Cristo o sujeito ('Aquele ... é alheio ao lugar').
- **Justificativa teológica ou contextual:** O raciocínio do parágrafo é que o lugar (a nossa natureza, 'in alieno nascebatur') é alheio ao Verbo eterno, 'não segundo o poder, mas segundo a natureza'. A correção devolve a conclusão a esse raciocínio.
- **Motivo:** Construção portuguesa que não transmite a sintaxe e o sentido do latim.
- **Grau de segurança:** alta · **estado:** aplicada

#### G08-04 · Homilia VIII · § 1, 1ª frase

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 54, § 1
- **Localização no texto:** § 1, 1ª frase — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 4
- **Texto latino:** Quia, largiente Domino, missarum sollemnia ter hodie celebraturi sumus
- **Tradução recebida:** “hoje celebraremos três vezes os solenes mistérios da missa”
- **Tradução aplicada:** “hoje celebraremos três vezes as solenidades das missas”
- **Justificativa linguística:** 'missarum sollemnia' é literalmente 'as solenidades (celebrações solenes) das missas'; 'mistérios' é acréscimo interpretativo.
- **Justificativa teológica ou contextual:** A expressão não está errada quanto à doutrina, mas introduz um termo que o autor não usa aqui. Gregório refere-se às três missas do Natal.
- **Motivo:** Acréscimo de termo; de pouca consequência. Fica como sugestão para sua decisão. Aplicada por decisão do responsável (C6, 06/11/2026).
- **Decisão do responsável (06/11/2026):** aplicar. Aprovado no item C6.
- **Grau de segurança:** alta · **estado:** aplicada

#### G08-01 · Homilia VIII · § 2, último parágrafo

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 56, § 2
- **Localização no texto:** § 2, último parágrafo — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 5
- **Texto latino:** nulla turpis cogitatio accuset
- **Tradução recebida:** “nenhuma pensamento torpe nos acuse”
- **Tradução aplicada:** “nenhum pensamento torpe nos acuse”
- **Justificativa linguística:** Erro de concordância (digitação): 'pensamento' é masculino.
- **Motivo:** Erro tipográfico da tradução recebida.
- **Grau de segurança:** alta · **estado:** aplicada

#### G08-05 · Homilia VIII · § 2, 1ª frase

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 55, § 2
- **Localização no texto:** § 2, 1ª frase — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 5
- **Texto latino:** eiusque uoci angelorum chori concinunt et congaudentes clamant
- **Tradução recebida:** “os coros dos anjos concordam com a sua voz”
- **Tradução aplicada:** “os coros dos anjos cantam em uníssono com a sua voz”
- **Justificativa linguística:** 'concinere' significa propriamente 'cantar juntos'; o sentido figurado 'concordar' existe, mas aqui o sujeito são 'coros' que 'clamam' o Glória, o que favorece o sentido musical.
- **Motivo:** Perda da imagem do canto. Duas leituras possíveis; não aplicado. Aplicada por decisão do responsável (C6, 06/11/2026).
- **Decisão do responsável (06/11/2026):** aplicar. Aprovado no item C6.
- **Grau de segurança:** alta · **estado:** aplicada

#### G09-01 · Homilia IX · rubrica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 58 (igual a Migne)
- **Localização no texto:** rubrica — `dados/homilias/gregorio-magno/recebida/homilia-09.txt`, bloco 0
- **Texto latino:** Habita ad populum in basilica sancti Silvestri, in die natalis ejus.
- **Tradução recebida:** “no dia de seu nascimento.”
- **Tradução aplicada:** “no dia do seu natalício.”
- **Justificativa linguística:** Para um santo, 'dies natalis' é o dia do nascimento para o céu (a festa), não o do nascimento. A tradução usa 'natalício' nas rubricas das Homilias III e V, com a mesma fórmula latina.
- **Motivo:** Termo litúrgico mal traduzido; uniformidade com as outras rubricas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G09-05 · Homilia IX · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-09.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. MATTH. XXV, 14-30.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Mateus 25, 14-30.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 25,14-30.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G09-02 · Homilia IX · § 1, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 58, § 1 (igual a Migne)
- **Localização no texto:** § 1, início — `dados/homilias/gregorio-magno/recebida/homilia-09.txt`, bloco 3
- **Texto latino:** Lectio sancti Evangelii, fratres charissimi, sollicite considerare nos admonet, ne nos, qui plus caeteris in hoc mundo accepisse aliquid cernimur ab auctore mundi, gravius inde judicemur.
- **Tradução recebida:** “admoesta-nos a considerar com cuidado que nós, que parecemos ter recebido do Autor do mundo algo mais do que os demais neste mundo, por isso mesmo sejamos julgados com mais rigor.”
- **Tradução aplicada:** “admoesta-nos a considerar com cuidado, para que nós, que parecemos ter recebido do Autor do mundo algo mais do que os demais neste mundo, não sejamos por isso julgados com mais rigor.”
- **Justificativa linguística:** 'Ne… judicemur' é 'para que não sejamos julgados'. Sem a negação, a frase recebida faz do julgamento mais severo o objeto da reflexão, em vez do risco a evitar.
- **Motivo:** Omissão da negação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G09-03 · Homilia IX · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 59, § 1 (o aparato registra 'recte docent' em parte dos manuscritos)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-09.txt`, bloco 3
- **Texto latino:** pro intentione tamen supernae patriae docent recta quos possunt de ipsis exterioribus quae acceperunt
- **Tradução recebida:** “ensinam retamente, quanto podem,”
- **Tradução aplicada:** “ensinam retamente a quantos podem,”
- **Justificativa linguística:** 'Quos possunt' é 'aqueles que podem' (os ouvintes que conseguem alcançar), não 'quanto podem'. 'Retamente' corresponde à variante 'recte' e foi mantido.
- **Motivo:** Objeto do verbo mal traduzido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G09-04 · Homilia IX · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 60, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-09.txt`, bloco 5
- **Texto latino:** Notandum quod inutilis servus durum dominum vocat, cui tamen ad lucrum deservire dissimulat
- **Tradução recebida:** “a cujo proveito, contudo, dissimula servir,”
- **Tradução aplicada:** “a cujo proveito, contudo, descuida de servir,”
- **Justificativa linguística:** Falso cognato: 'dissimulare' + infinitivo é deixar de fazer, descuidar-se (como em G02-02).
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G10-09 · Homilia X · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia X
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-10.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. MATTH. II, 1-12.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO MATEUS 2, 1-12.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 2,1-12.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G10-02 · Homilia X · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia X
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 66, § 2
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-10.txt`, bloco 3
- **Texto latino:** Vt enim de eis quiddam usu humano loquar, Deum hunc caeli esse cognouerunt, quia protinus stellam miserunt. Mare cognouit … Terra cognouit … Sol cognouit …
- **Tradução recebida:** “Pois, para falar deles de algum modo segundo o uso humano, reconheceram que Este era o Deus dos céus, porque logo enviaram a estrela.”
- **Tradução aplicada:** “Pois, para falar deles de algum modo segundo o uso humano, os céus reconheceram que Este era Deus, porque logo enviaram a estrela.”
- **Justificativa linguística:** 'caeli' é nominativo plural, sujeito de 'cognouerunt' e de 'miserunt': são os céus que reconhecem e que enviam a estrela. A tradução leu 'caeli' como genitivo ('o Deus dos céus') e deixou o verbo sem sujeito. A frase abre a série céus – mar – terra – sol – pedras – inferno, cada elemento com seu verbo ('Mare cognouit', 'Terra cognouit'…).
- **Justificativa teológica ou contextual:** O argumento de Gregório é que toda a criação reconheceu a divindade de Cristo ('Deum hunc … esse'); na tradução recebida, o primeiro elemento da série desaparecia.
- **Motivo:** Tradução incorreta que desfaz a estrutura retórica do parágrafo.
- **Grau de segurança:** alta · **estado:** aplicada

#### G10-03 · Homilia X · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia X
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 67, § 2
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-10.txt`, bloco 3
- **Texto latino:** Et tamen hunc quem Deum omnia insensibilia elementa senserunt, adhuc infidelium Iudaeorum corda Deum esse minime cognoscunt
- **Tradução recebida:** “Aquele que todos os elementos insensíveis perceberam ser Senhor”
- **Tradução aplicada:** “Aquele que todos os elementos insensíveis perceberam ser Deus”
- **Justificativa linguística:** O latim diz 'Deum' (Deus), e não 'Dominum'. O aparato não registra variante.
- **Justificativa teológica ou contextual:** Todo o parágrafo trata do reconhecimento da DIVINDADE de Cristo pelos elementos ('Deum hunc … esse cognouerunt'; 'Deum clamant'). Trocar 'Deus' por 'Senhor' enfraquece a afirmação.
- **Motivo:** Problema de terminologia teológica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G10-04 · Homilia X · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia X
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 69, § 7
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-10.txt`, bloco 8
- **Texto latino:** Voluptatum nos ergo fallacia nulla decipiat, nulla uana laetitia seducat.
- **Tradução recebida:** “que nenhuma alegria vã vos seduza”
- **Tradução aplicada:** “que nenhuma alegria vã nos seduza”
- **Justificativa linguística:** As duas orações têm o mesmo objeto, 'nos' (nós). A tradução passou para 'vos' na segunda, separando o pregador dos ouvintes.
- **Motivo:** Alteração da pessoa gramatical.
- **Grau de segurança:** alta · **estado:** aplicada

#### G11-03 · Homilia XI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-11.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANGELII SEC. MATTH. XIII, 44--52.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Mateus 13, 44–52.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 13,44-52.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G11-01 · Homilia XI · § 2, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 75, § 2 (igual a Migne)
- **Localização no texto:** § 2, fim — `dados/homilias/gregorio-magno/recebida/homilia-11.txt`, bloco 5
- **Texto latino:** Nam quem perfecte absorbuerit, ad terrena foris desideria velut insensibilem reddit.
- **Tradução recebida:** “Pois aquele a quem ela tiver absorvido perfeitamente torna como insensível aos desejos terrenos exteriores.”
- **Tradução aplicada:** “Pois aquele a quem ela tiver absorvido perfeitamente, ela o torna como insensível aos desejos terrenos exteriores.”
- **Justificativa linguística:** Faltava o objeto de 'torna' ('quem… reddit': torna-o); sem ele a frase fica sem construção.
- **Motivo:** Construção incompleta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G11-02 · Homilia XI · § 4, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 79
- **Localização no texto:** § 4, fim — `dados/homilias/gregorio-magno/recebida/homilia-11.txt`, bloco 8
- **Texto latino:** Quidquid in mente pueriliter hilarescit, hoc disciplinae juvenilis censura coerceat
- **Tradução recebida:** “contenha-o a censura de uma disciplina madura”
- **Tradução aplicada:** “contenha-o a censura de uma disciplina juvenil”
- **Justificativa linguística:** 'Juvenilis' é 'de jovem', em contraste com 'pueriliter' (de criança): Gregório opõe a infância à juventude vigorosa, não à maturidade. 'Madura' conserva o contraste, mas muda a imagem; por isso fica como sugestão.
- **Motivo:** Imagem alterada sem prejuízo grave do sentido. Aplicada por decisão do responsável (C6, 06/11/2026).
- **Decisão do responsável (06/11/2026):** aplicar. Aprovado no item C6.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-07 · Homilia XII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. MATTH. XXV, 1 - 13.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO MATEUS 25, 1-13.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 25,1-13.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-01 · Homilia XII · § 6, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 86, § 6 (igual a Migne)
- **Localização no texto:** § 6, início — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 9
- **Texto latino:** Quia post peccata Deus poenitentiam suscipit, si sciret quisque de praesenti saeculo quo tempore exiret, aliud tempus voluptatibus, atque aliud poenitentiae aptare potuisset.
- **Tradução recebida:** “Porque, se cada um soubesse em que tempo sairia deste mundo,”
- **Tradução aplicada:** “Porque Deus acolhe a penitência depois dos pecados, se cada um soubesse em que tempo sairia deste mundo,”
- **Justificativa linguística:** A oração 'Quia post peccata Deus poenitentiam suscipit' foi omitida; sem ela, falta a premissa do raciocínio (justamente porque há perdão depois do pecado, alguém poderia calcular o tempo da penitência).
- **Justificativa teológica ou contextual:** A frase seguinte ('Aquele que prometeu perdão ao penitente não prometeu o dia de amanhã ao pecador') responde a essa premissa.
- **Motivo:** Omissão de uma oração do original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-02 · Homilia XII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 87, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 10
- **Texto latino:** filiumque suum nomine Maximum, quem ipse jam monachus monachum vidi
- **Tradução recebida:** “a quem eu mesmo, depois de monge, vi também monge,”
- **Tradução aplicada:** “a quem eu mesmo, já monge, vi também monge,”
- **Justificativa linguística:** 'Jam monachus' é 'já sendo monge'; 'depois de monge' é ambíguo e pode ser lido como 'depois de deixar de ser monge'.
- **Motivo:** Expressão ambígua.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-06 · Homilia XII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 87, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 10
- **Texto latino:** vir valde idoneus, sed tantum plenus vitiis, quantum rebus
- **Tradução recebida:** “homem muito capaz,”
- **Tradução aplicada:** “homem de grandes posses,”
- **Justificativa linguística:** No latim tardio 'idoneus' designa com frequência o homem de posses; o contexto ('tão cheio de vícios quanto de riquezas', 'na aquisição de bens') favorece esse sentido, mas o 'sed' (mas) também admite 'respeitável'. Fica como sugestão.
- **Motivo:** Sentido provável diferente do adotado; não há segurança para aplicar. Aplicada por decisão do responsável (C6, 06/11/2026).
- **Decisão do responsável (06/11/2026):** aplicar. Aprovado no item C6.
- **Grau de segurança:** alta · **estado:** aplicada

#### G13-01 · Homilia XIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 89
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-13.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XII, 35-40.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Lucas XII, 35-40.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 12,35-40.”
- **Justificativa linguística:** Capítulo em algarismos arábicos, como nos títulos das outras 39 homilias da tradução. Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da identificação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G13-02 · Homilia XIII · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 93, § 5 (igual a Migne)
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-13.txt`, bloco 8
- **Texto latino:** Ignoras quoniam benignitas Dei ad poenitentiam te adducit? (Rom. II, 4)
- **Tradução recebida:** “Ou desprezas que a bondade de Deus te conduz à penitência?”
- **Tradução aplicada:** “Ignoras que a bondade de Deus te conduz à penitência?”
- **Justificativa linguística:** Gregório cita só a segunda metade de Rm 2,4: 'Ignoras' (não sabes). 'Desprezas' vem da primeira metade do versículo ('contemnis'), que ele não cita, e não combina com o 'que'.
- **Motivo:** Citação bíblica trocada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G13-03 · Homilia XIII · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 94, § 6 (igual a Migne)
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-13.txt`, bloco 9
- **Texto latino:** Et cum certa mors maneat omnibus, nolite de temporalis vitae providentia incerta cogitare.
- **Tradução recebida:** “não penseis de modo incerto no provimento da vida temporal.”
- **Tradução aplicada:** “não penseis no provimento incerto da vida temporal.”
- **Justificativa linguística:** 'Incerta' concorda com 'providentia': o provimento da vida temporal é que é incerto, em contraste com a morte certa ('certa mors').
- **Motivo:** Adjetivo transformado em advérbio; perde-se o contraste certo/incerto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G14-02 · Homilia XIV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-14.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. X, 11-16.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO JOÃO 10, 11-16.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 10,11-16.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G15-05 · Homilia XV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-15.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. VIII, 4-15.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO LUCAS 8, 4-15.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 8,4-15.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G15-01 · Homilia XV · § 2, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 104, § 2 (igual a Migne)
- **Localização no texto:** § 2, início — `dados/homilias/gregorio-magno/recebida/homilia-15.txt`, bloco 4
- **Texto latino:** Et quasi acceptus cibus stomacho languente rejicitur, quando auditus sermo in ventre memoriae non tenetur. Sed quisquis alimenta non retinet, hujus profecto vita desperatur.
- **Tradução recebida:** “E, assim como o alimento recebido é rejeitado por um estômago enfermo quando a palavra ouvida não é conservada no ventre da memória, assim também, de quem não retém o alimento, certamente se desespera a vida.”
- **Tradução aplicada:** “E é como se o alimento recebido fosse rejeitado por um estômago enfermo, quando a palavra ouvida não é conservada no ventre da memória. Ora, de quem não retém os alimentos, certamente se desespera da vida.”
- **Justificativa linguística:** São duas frases no latim: a comparação ('quasi… rejicitur, quando… non tenetur') e a consequência ('Sed quisquis… desperatur'). A tradução as fundiu num 'assim como… assim também' que não tem sentido.
- **Motivo:** Construção que desfaz o raciocínio.
- **Grau de segurança:** alta · **estado:** aplicada

#### G15-02 · Homilia XV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 104, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-15.txt`, bloco 4
- **Texto latino:** Sed qui cunctis aures habentibus Si quis habet aures audiendi audiat dicit, aures procul dubio cordis requirit.
- **Tradução recebida:** “Mas Aquele que, a todos tendo ouvidos, diz:”
- **Tradução aplicada:** “Mas Aquele que diz a todos os que têm ouvidos:”
- **Justificativa linguística:** 'Cunctis aures habentibus' é um dativo: 'a todos os que têm ouvidos'. A construção recebida não se entende.
- **Motivo:** Construção incompreensível.
- **Grau de segurança:** alta · **estado:** aplicada

#### G15-03 · Homilia XV · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 106, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-15.txt`, bloco 6
- **Texto latino:** Sic oliva contusionibus expressa amurcam suam deserit, et in olei liquorem pinguescit.
- **Tradução recebida:** “Assim a oliveira, espremida por golpes,”
- **Tradução aplicada:** “Assim a azeitona, espremida por golpes,”
- **Justificativa linguística:** 'Oliva' aqui é o fruto (espremido no lagar, como a uva antes), não a árvore.
- **Motivo:** Palavra errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G15-04 · Homilia XV · § 5, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 108, § 5 (igual a Migne)
- **Localização no texto:** § 5, fim — `dados/homilias/gregorio-magno/recebida/homilia-15.txt`, bloco 7
- **Texto latino:** cui longus languor brachia tenuit, sed tamen haec a bono opere non ligavit?
- **Tradução recebida:** “mas não os ligou à boa obra?”
- **Tradução aplicada:** “mas não os prendeu longe da boa obra?”
- **Justificativa linguística:** 'A bono opere non ligavit' é 'não os amarrou de modo a afastá-los da boa obra' (a preposição 'a' indica separação). 'Não os ligou à boa obra' diz o contrário.
- **Justificativa teológica ou contextual:** O exemplo de Sérvulo é justamente o de quem, paralítico, continuou a fazer o bem.
- **Motivo:** Sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-07 · Homilia XVI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 2
- **Texto latino:** LECTIO EVANG. SEC. MATTH. IV, 1-11.
- **Tradução recebida:** “LEITURA DO EVANGELHO SEGUNDO MATEUS 4, 1-11.”
- **Tradução aplicada:** “Leitura do Evangelho segundo Mateus 4,1-11.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-01 · Homilia XVI · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 110, § 1
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 4
- **Texto latino:** cum dicitur Deus homo … a diabolo assumptus, mens refugit humana, hoc audire aures expauescunt
- **Tradução recebida:** “a mente recua, os ouvidos humanos se assustam ao ouvir isso”
- **Tradução aplicada:** “a mente humana recua, os ouvidos se assustam ao ouvir isso”
- **Justificativa linguística:** 'humana' (feminino singular) concorda com 'mens', não com 'aures' (que exigiria 'humanae'). A tradução transferiu o adjetivo para os ouvidos.
- **Motivo:** Construção que não transmite a sintaxe do latim.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-02 · Homilia XVI · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 112, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 6
- **Texto latino:** ut a nostris cordibus ipso aditu captus exeat, quo nos aditu intromissus tenebat
- **Tradução recebida:** “para que saia, capturado pela própria entrada por onde nos mantinha”
- **Tradução aplicada:** “para que saia dos nossos corações, capturado pela própria entrada por onde nos mantinha”
- **Justificativa linguística:** A tradução omitiu 'a nostris cordibus' (dos nossos corações). O aparato registra só a ordem 'cordibus nostris' em V, sem omissão.
- **Justificativa teológica ou contextual:** A expressão diz de ONDE o tentador é expulso: dos nossos corações, que ele ocupava.
- **Motivo:** Omissão de uma expressão.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-05 · Homilia XVI · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 114, § 5, aparato à l. 102
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 8
- **Texto latino:** Dum uero per trecentos et sexaginta dies annus ducitur, nos autem per triginta et sex dies affligimur, quasi anni nostri decimas Deo damus (aparato: '+ quinque' em F, K e L p.c.)
- **Tradução recebida:** “trezentos e sessenta e cinco dias”
- **Tradução aplicada:** “trezentos e sessenta dias”
- **Justificativa linguística:** O texto crítico diz 360 dias; 365 é leitura de alguns manuscritos (correção posterior para o ano solar), que a tradução segue. Pelo critério C4, adota-se a leitura da CCSL: o argumento de Gregório (os 36 dias de jejum como dízimo do ano) só fecha com 360 dias; '365' é correção posterior de manuscritos, seguida por Migne.
- **Justificativa teológica ou contextual:** O argumento de Gregório é aritmético: 36 dias de jejum são a DÉCIMA parte (o dízimo) de 360. Com 365 a conta deixa de ser exata.
- **Motivo:** Leitura da CCSL adotada pelo critério C4 (decisão de 06/11/2026).
- **Decisão do responsável (06/11/2026):** adotar a leitura da CCSL. Aprovado no item C4.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-03 · Homilia XVI · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 115, § 6
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 9
- **Texto latino:** Hoc ergo quod tibi subtrahis, alteri largire, ut unde tua caro affligitur, inde egentis proximi caro reparetur.
- **Tradução recebida:** “Logo, aquilo que tirais de vós mesmos, dai-o a outro, para que, daquilo com que a vossa carne é afligida”
- **Tradução aplicada:** “Logo, aquilo que tiras de ti mesmo, dá-o a outro, para que, daquilo com que a tua carne é afligida”
- **Justificativa linguística:** 'tibi', 'subtrahis', 'largire', 'tua' estão na 2ª pessoa do SINGULAR. Gregório passa do plural ao singular para interpelar cada ouvinte; a tradução uniformizou no plural.
- **Motivo:** Alteração da pessoa gramatical.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-04 · Homilia XVI · § 6, última frase

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 115, § 6
- **Localização no texto:** § 6, última frase — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 9
- **Texto latino:** Sic sic nobis afflictis et paenitentibus a Deo dimittitur quod iniuste egimus, si pro amore illius et hoc quod nobis iuste competit, relaxemus.
- **Tradução recebida:** “Assim, assim nos é perdoado por Deus o que fizemos injustamente”
- **Tradução aplicada:** “Assim, assim nos é perdoado por Deus, a nós aflitos e penitentes, o que fizemos injustamente”
- **Justificativa linguística:** A tradução omitiu 'afflictis et paenitentibus', que qualifica 'nobis'. O aparato não registra omissão em nenhum manuscrito.
- **Justificativa teológica ou contextual:** A condição do perdão (a penitência e a aflição de quem jejua) é o tema do parágrafo; a omissão a apagava da frase conclusiva.
- **Motivo:** Omissão de uma expressão.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-12 · Homilia XVII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 2
- **Texto latino:** LECTIO EVANG. SEC. LUC. X, 1-9.
- **Tradução recebida:** “LEITURA DO EVANGELHO SEGUNDO LUCAS 10, 1-9.”
- **Tradução aplicada:** “Leitura do Evangelho segundo Lucas 10,1-9.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-01 · Homilia XVII · § 5, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 120, § 5 (igual a Migne)
- **Localização no texto:** § 5, fim — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 8
- **Texto latino:** Omnis vero qui salutat in via, ex occasione salutat itineris, non ex studio optandae ejusdem salutis. Qui igitur non amore aeternae patriae, sed praemiorum ambitu salutem audientibus praedicat…
- **Tradução recebida:** “não pelo desejo de saudar de fato.”
- **Tradução aplicada:** “não pelo empenho de desejar essa mesma salvação.”
- **Justificativa linguística:** Gregório joga com 'salutare' (saudar) e 'salus' (saúde, salvação): quem saúda de passagem não deseja de fato a 'salus' que a saudação exprime. A frase seguinte ('prega a salvação', 'deseja a salvação dos ouvintes') depende dessa palavra, que a tradução tinha eliminado.
- **Motivo:** Perda do termo em que se apoia o raciocínio.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-02 · Homilia XVII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 121, § 7: 'Verus ergo quisque praedicator'
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 10
- **Texto latino:** Vetus ergo quisque praedicator non ideo praedicare debet, ut in hoc tempore mercedem recipiat (Migne, na transcrição do Corpus Corporum)
- **Tradução recebida:** “Portanto, todo pregador reto não deve”
- **Tradução aplicada:** “Portanto, todo verdadeiro pregador não deve”
- **Justificativa linguística:** A transcrição de Migne usada como base traz 'Vetus' (velho), erro evidente de leitura de 'Verus' (verdadeiro), que é o texto crítico. A tradução recebida contornou o erro com 'reto'; o latim diz 'verdadeiro'.
- **Motivo:** Erro na transcrição latina de base; tradução ajustada ao texto correto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-03 · Homilia XVII · § 8–9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 124, § 9
- **Localização no texto:** § 8–9 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** Quis ergo venturum judicem nuntiet, si praeco tacet? 9. Proinde considerandum nobis est…
- **Tradução recebida:** “se o anunciador se cala? 9. Portanto,”
- **Tradução aplicada:** “se o anunciador se cala? ¶ Portanto,”
- **Justificativa linguística:** O número '9.' é a numeração dos parágrafos de Migne, que ficou solta no meio do texto português. Retirado o número, o parágrafo é separado onde Migne o separa.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-04 · Homilia XVII · § 9–10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 125, § 10
- **Localização no texto:** § 9–10 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** qui praedicationis verbum non subtrahit. 10. Sed tunc vere aliis recta praedicamus…
- **Tradução recebida:** “da pregação. 10. Mas então”
- **Tradução aplicada:** “da pregação. ¶ Mas então”
- **Justificativa linguística:** Mesma razão de G17-03.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-05 · Homilia XVII · § 10–11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 126, § 11
- **Localização no texto:** § 10–11 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** quasi in labro de speculis mulierum lavamur. 11. Est autem valde necessarium…
- **Tradução recebida:** “espelhos das mulheres. 11. É, porém,”
- **Tradução aplicada:** “espelhos das mulheres. ¶ É, porém,”
- **Justificativa linguística:** Mesma razão de G17-03.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-06 · Homilia XVII · § 11–12

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 127, § 12
- **Localização no texto:** § 11–12 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** ex amore veritatis animus inflammatur. 12. Sed inter haec sciendum nobis est…
- **Tradução recebida:** “e para com o próximo. 12. Mas, em meio”
- **Tradução aplicada:** “e para com o próximo. ¶ Mas, em meio”
- **Justificativa linguística:** Mesma razão de G17-03.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-07 · Homilia XVII · § 12–13

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 128, § 13
- **Localização no texto:** § 12–13 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** zelus districtionis accendat. 13. Sed ista cur loquimur…
- **Tradução recebida:** “talvez frouxa. 13. Mas por que”
- **Tradução aplicada:** “talvez frouxa. ¶ Mas por que”
- **Justificativa linguística:** Mesma razão de G17-03.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-09 · Homilia XVII · § 12

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 128, § 12 (igual a Migne)
- **Localização no texto:** § 12 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** ut et iram mansuetudo condiat, et eamdem mansuetudinem, ne fortasse dissoluta sit, zelus districtionis accendat.
- **Tradução recebida:** “e o mesmo zelo da severidade inflame essa mansidão”
- **Tradução aplicada:** “e o zelo da severidade inflame essa mesma mansidão”
- **Justificativa linguística:** 'Eamdem' concorda com 'mansuetudinem' (essa mesma mansidão), não com 'zelus'.
- **Motivo:** Pronome ligado à palavra errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-11 · Homilia XVII · oração final

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 134 (igual a Migne)
- **Localização no texto:** oração final — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 19
- **Texto latino:** praesta, quaesumus, ut hoc quod humano ore dicimur, in tuis oculis esse valeamus.
- **Tradução recebida:** “possamos valer por sê-lo aos teus olhos”
- **Tradução aplicada:** “possamos sê-lo aos teus olhos”
- **Justificativa linguística:** 'Esse valeamus' é simplesmente 'possamos ser'; 'valer por sê-lo' é decalque sem sentido em português.
- **Motivo:** Construção que obscurece a oração.
- **Grau de segurança:** alta · **estado:** aplicada

#### G18-02 · Homilia XVIII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 140, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-18.txt`, bloco 6
- **Texto latino:** qui si divinitatis suae potentiam exercere voluisset, tacito nutu mentis in suis eos ictibus ligaret
- **Tradução recebida:** “os prenderia sob seus golpes”
- **Tradução aplicada:** “os prenderia em seus próprios golpes”
- **Justificativa linguística:** 'In suis ictibus' são os golpes dos próprios perseguidores (os imobilizaria no ato de atirar as pedras); 'sob seus golpes' sugere golpes de Cristo.
- **Motivo:** Possessivo com referente ambíguo que leva ao sentido errado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G18-03 · Homilia XVIII · § 5, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 141, § 5 (igual a Migne)
- **Localização no texto:** § 5, fim — `dados/homilias/gregorio-magno/recebida/homilia-18.txt`, bloco 7
- **Texto latino:** Ecce sustinet, et ejus patientiam dissimulamus.
- **Tradução recebida:** “e dissimulamos sua paciência”
- **Tradução aplicada:** “e não fazemos caso da sua paciência”
- **Justificativa linguística:** Falso cognato: 'dissimulare' é aqui desconsiderar, não fazer caso (como em G02-02 e G09-04); 'dissimular a paciência' não tem sentido em português.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-08 · Homilia XIX · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 2
- **Texto latino:** LECTIO EVANG. SEC. MATTH. XX, 1-16.
- **Tradução recebida:** “LEITURA DO EVANGELHO SEGUNDO MATEUS 20, 1-16.”
- **Tradução aplicada:** “Leitura do Evangelho segundo Mateus 20,1-16.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-01 · Homilia XIX · fim da leitura e início do § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 142–143
- **Localização no texto:** fim da leitura e início do § 1 — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 3
- **Texto latino:** Multi enim sunt vocati, pauci vero electi. [1510] 1. In explanatione sua multa ad loquendum…
- **Tradução recebida:** “mas poucos, eleitos. 1510 1. Em sua”
- **Tradução aplicada:** “mas poucos, eleitos. ¶ Em sua”
- **Justificativa linguística:** Na tradução recebida, a leitura do Evangelho e o começo da homilia estavam no mesmo bloco, separados apenas pelo número de coluna de Migne ('1510') e pelo número do parágrafo ('1.'). Os números são retirados e a homilia passa a começar em parágrafo próprio, como em todas as outras.
- **Motivo:** Artefatos da edição de base e leitura unida ao texto da homilia.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-02 · Homilia XIX · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 143, § 1
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 3
- **Texto latino:** ad extremum vero per apostolos, [1511] dum plebis suae mores excoluit
- **Tradução recebida:** “apóstolos, 1511 enquanto”
- **Tradução aplicada:** “apóstolos, enquanto”
- **Justificativa linguística:** '1511' é número de coluna de Migne, solto no texto.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-03 · Homilia XIX · § 1, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 143, § 1 (igual a Migne)
- **Localização no texto:** § 1, início — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 3
- **Texto latino:** ne vos et extensa processio, et prolixa expositio videatur onerare
- **Tradução recebida:** “nem a sequência mais extensa,”
- **Tradução aplicada:** “nem a procissão demorada,”
- **Justificativa linguística:** 'Processio' é a procissão estacional que precedia a missa (a homilia foi pregada na basílica de São Lourenço, no fim da procissão), não uma 'sequência'.
- **Justificativa teológica ou contextual:** O dado é histórico e litúrgico: Gregório encurta a homilia por causa da longa procissão daquele domingo.
- **Motivo:** Palavra mal traduzida; perde-se um dado litúrgico.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-07 · Homilia XIX · § 7, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 152
- **Localização no texto:** § 7, fim — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 9
- **Texto latino:** Revocemus ergo ante oculos mala quae fecimus
- **Tradução recebida:** “Tragamamos”
- **Tradução aplicada:** “Tragamos”
- **Justificativa linguística:** Erro de digitação.
- **Motivo:** Ortografia.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-01 · Homilia XX · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 153
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. III, 1-11.
- **Tradução recebida:** “LIÇÃO DO SANTO EVANGELHO SEGUNDO LUCAS III, 1-11.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 3,1-11.”
- **Justificativa linguística:** O título da leitura estava marcado como parágrafo da homilia e com fórmula e numeração diferentes das demais homilias ('Lição', capítulo em algarismos romanos). Passa a título da leitura, na forma usada em toda a tradução. Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Organização e uniformidade da identificação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-02 · Homilia XX · fim da leitura e início do § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 154, § 1
- **Localização no texto:** fim da leitura e início do § 1 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 3
- **Texto latino:** et qui habet escas similiter faciat. [1516] 1. Redemptoris nostri praecursor…
- **Tradução recebida:** “faça do mesmo modo. 1516 1. Em que tempo”
- **Tradução aplicada:** “faça do mesmo modo. ¶ Em que tempo”
- **Justificativa linguística:** A leitura do Evangelho e o § 1 estavam num só parágrafo, separados pelo número de coluna de Migne ('1516') e pelo número do parágrafo. Os números são retirados; a leitura passa a bloco de leitura e a homilia começa em parágrafo próprio.
- **Motivo:** Artefatos da edição de base; leitura unida ao texto da homilia.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-03 · Homilia XX · § 2–3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 155, § 3
- **Localização no texto:** § 2–3 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 4
- **Texto latino:** Sequitur: 3. Sicut scriptum est in libro sermonum Isaiae prophetae
- **Tradução recebida:** “Segue-se: 3. Como”
- **Tradução aplicada:** “Segue-se: Como”
- **Justificativa linguística:** Número de parágrafo de Migne solto no texto (aqui depois de 'Segue-se:', por isso sem nova divisão).
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-10 · Homilia XX · § 12, citação de Is 41,18-20

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 165 (igual a Migne)
- **Localização no texto:** § 12, citação de Is 41,18-20 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 14
- **Texto latino:** dabo in solitudine cedrum et spinam, myrtum et lignum olivae; ponam in deserto abietem, ulmum et buxum simul
- **Tradução recebida:** “o cedro e a acácia”
- **Tradução aplicada:** “o cedro e o espinheiro”
- **Justificativa linguística:** Gregório cita a Vulgata ('spinam') e, logo em seguida, comenta o espinheiro como figura dos pregadores que 'pungem'. 'Acácia' vem de tradução moderna do hebraico e desfaz a ligação; a própria tradução usa 'espinheiro' no comentário.
- **Motivo:** Citação bíblica em versão diferente da que o autor comenta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-11 · Homilia XX · § 12, citação de Is 41,18-20

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 165 (igual a Migne)
- **Localização no texto:** § 12, citação de Is 41,18-20 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 14
- **Texto latino:** ponam in deserto abietem, ulmum et buxum simul
- **Tradução recebida:** “o cipreste, o olmo”
- **Tradução aplicada:** “o abeto, o olmo”
- **Justificativa linguística:** 'Abies' é o abeto; Gregório o comenta pela altura que alcança, e a própria tradução usa 'abeto' no comentário.
- **Motivo:** Citação bíblica em versão diferente da que o autor comenta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-12 · Homilia XX · § 13

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 166, § 13 (igual a Migne)
- **Localização no texto:** § 13 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 15
- **Texto latino:** Myrtus vero temperativae virtutis est, ita ut dissoluta membra temperando restringat.
- **Tradução recebida:** “é símbolo da virtude da moderação, de tal sorte que, refreando,”
- **Tradução aplicada:** “tem uma força que tempera, de tal sorte que, temperando,”
- **Justificativa linguística:** 'Virtus' é aqui a propriedade medicinal da planta (adstringente), não a virtude moral; Gregório parte da propriedade natural para chegar ao sentido figurado, que vem na frase seguinte.
- **Motivo:** Sentido alterado: a propriedade natural virou símbolo moral antes do tempo.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-13 · Homilia XX · § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 169, § 15 (igual a Migne)
- **Localização no texto:** § 15 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 17
- **Texto latino:** Latro iste, cruentis manibus abstractus a fauce itineris, suspensus est in patibulo crucis
- **Tradução recebida:** “da voragem do caminho”
- **Tradução aplicada:** “da garganta da estrada”
- **Justificativa linguística:** 'Fauces itineris' é a passagem estreita da estrada, onde os salteadores emboscavam; 'voragem' (abismo, redemoinho) não corresponde.
- **Motivo:** Palavra mal traduzida.
- **Grau de segurança:** alta · **estado:** aplicada

#### G21-08 · Homilia XXI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-21.txt`, bloco 1
- **Texto latino:** LECTIO. S. EVANG. SEC. MARC. XVI, 1-7.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo Marcos 16, 1-7.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Marcos 16,1-7.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G21-01 · Homilia XXI · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 173, § 1
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-21.txt`, bloco 3
- **Texto latino:** Sicque excipiatur ut loquimur
- **Tradução recebida:** “E assim seja acolhida tal como a dizemos”
- **Tradução aplicada:** “E assim seja anotada tal como a dizemos”
- **Justificativa linguística:** 'excipere' é o termo técnico para a anotação taquigráfica feita pelos notários ('exceptores'). O próprio Gregório, no prefácio, diz que as homilias do segundo livro foram 'tomadas por escrito' enquanto ele falava ('sicut loquebar excepta est'). 'acolhida' perde esse sentido.
- **Motivo:** Perda de sentido de um termo técnico.
- **Grau de segurança:** alta · **estado:** aplicada

#### G21-02 · Homilia XXI · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 175, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-21.txt`, bloco 6
- **Texto latino:** Non est hic dicitur per praesentiam carnis, qui tamen numquam deerat per praesentiam maiestatis.
- **Tradução recebida:** “Ele, porém, em parte alguma estará ausente segundo a presença de sua majestade.”
- **Tradução aplicada:** “Ele, porém, nunca estava ausente segundo a presença de sua majestade.”
- **Justificativa linguística:** 'numquam' é temporal (nunca), não espacial (em parte alguma), e 'deerat' é imperfeito (estava ausente), não futuro.
- **Justificativa teológica ou contextual:** Gregório distingue a ausência do corpo no sepulcro da presença permanente da divindade; a tradução mudava a afirmação para uma onipresença futura.
- **Motivo:** Tradução incorreta de advérbio e de tempo verbal.
- **Grau de segurança:** alta · **estado:** aplicada

#### G21-03 · Homilia XXI · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 175, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-21.txt`, bloco 6
- **Texto latino:** cur omnipotens Deus eum quem cunctae ecclesiae praeferre disposuerat ancillae uocem pertimescere et se ipsum negare permisit
- **Tradução recebida:** “temesse a voz de uma criada e negasse a si mesmo.”
- **Tradução aplicada:** “temesse a voz de uma criada e O negasse.”
- **Justificativa linguística:** 'se ipsum' é reflexivo indireto: refere-se ao sujeito de 'permisit' (Deus). Pedro negou a CRISTO, não a si mesmo. O aparato não registra variante.
- **Justificativa teológica ou contextual:** O texto evangélico e toda a passagem tratam da negação do Senhor por Pedro.
- **Motivo:** Tradução incorreta que altera o sentido da frase.
- **Grau de segurança:** alta · **estado:** aplicada

#### G21-06 · Homilia XXI · § 7, conclusão

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 179, § 7
- **Localização no texto:** § 7, conclusão — `dados/homilias/gregorio-magno/recebida/homilia-21.txt`, bloco 9
- **Texto latino:** Ad horum ergo ciuium illam frequentem sollemnitatem festinemus.
- **Tradução recebida:** “Corramos, pois, para aquela frequente solenidade desses cidadãos.”
- **Tradução aplicada:** “Corramos, pois, para aquela solenidade incessante desses cidadãos.”
- **Justificativa linguística:** 'frequens' pode significar (a) 'concorrida, cheia de gente' — a assembleia numerosa dos cidadãos do céu — ou (b) 'contínua, sem interrupção'. Em português, 'frequente' sugere repetição, sentido que não é o do latim em nenhuma das duas leituras. Possibilidades: '…para aquela solenidade concorrida desses cidadãos' ou '…para aquela solenidade incessante desses cidadãos'. Um paralelo do próprio Gregório, na mesma série pascal (Homilia XXVI, § 10), favorece a leitura (b): a solenidade eterna 'non est annua, sed continua' (não é anual, mas contínua). Outro paralelo, na Homilia XXX, § 10, favorece a leitura (a): 'ad illam supernae frequentiae laetitiam', que esta mesma tradução verte por 'àquela alegria da assembleia celeste'. Há, portanto, apoio para as duas leituras no próprio Gregório.
- **Motivo:** 'frequens' entendido como 'contínua' (paralelo da Homilia XXVI, § 10: 'non est annua, sed continua'); decisão do responsável (C5).
- **Decisão do responsável (06/11/2026):** adotar 'incessante'. Aprovado no item C5.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-10 · Homilia XXII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. XX, 1--9.
- **Tradução recebida:** “Leitura do santo Evangelho segundo João 20, 1–9.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 20,1-9.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-09 · Homilia XXII · § 9, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 191, § 9 (igual a Migne)
- **Localização no texto:** § 9, fim — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 14
- **Texto latino:** Si ad amorem Dei pigri non sumus, adjuvat ipse quem amamus, Jesus Christus Dominus noster
- **Tradução recebida:** “Ele mesmo ajuda a nós, que amamos: Jesus Cristo”
- **Tradução aplicada:** “ajuda-nos Aquele mesmo a quem amamos, Jesus Cristo”
- **Justificativa linguística:** 'Quem amamus' é 'a quem amamos' (o objeto do nosso amor é Cristo), não 'nós, que amamos'.
- **Justificativa teológica ou contextual:** A frase final diz que o próprio Cristo, amado, ajuda os que não são preguiçosos no amor; a tradução recebida perdia o objeto do amor.
- **Motivo:** Relativo com função trocada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G23-01 · Homilia XXIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-23.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XXIV, 13-35.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo Lucas 24, 13-35.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 24,13-35.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G23-02 · Homilia XXIII · leitura do Evangelho (Lc 24,28)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 192 (igual a Migne: 'et ipse finxit se longius ire')
- **Localização no texto:** leitura do Evangelho (Lc 24,28) — `dados/homilias/gregorio-magno/recebida/homilia-23.txt`, bloco 2
- **Texto latino:** Et ipse finxit se longius ire.
- **Tradução recebida:** “Aproximaram-se da aldeia para onde iam, e Ele fez menção de seguir adiante.”
- **Tradução aplicada:** “Aproximaram-se da aldeia para onde iam, e Ele fingiu ir mais longe.”
- **Justificativa linguística:** Gregório comenta justamente o verbo 'finxit' (fingiu): explica que 'fingere' é também 'componere', dar forma, e que por isso os que modelam o barro se chamam 'figuli', concluindo que 'a Verdade simples nada fez por duplicidade'. Com 'fez menção de seguir adiante', a tradução recebida apagava a palavra comentada, e a explicação sobre 'fingir' que vem logo depois ficava sem apoio. Divergência encontrada ao preparar a tradução própria piloto desta homilia.
- **Motivo:** Leitura traduzida sem a palavra que o autor comenta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G23-03 · Homilia XXIII · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 193, § 1 (igual a Migne)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-23.txt`, bloco 3
- **Texto latino:** se ire longius finxit. Fingere namque componere dicimus; unde et compositores luti figulos vocamus.
- **Tradução recebida:** “em seus corações, fez menção de seguir adiante.”
- **Tradução aplicada:** “em seus corações, fingiu ir mais longe.”
- **Justificativa linguística:** Gregório comenta justamente o verbo 'finxit' (fingiu): explica que 'fingere' é também 'componere', dar forma, e que por isso os que modelam o barro se chamam 'figuli', concluindo que 'a Verdade simples nada fez por duplicidade'. Com 'fez menção de seguir adiante', a tradução recebida apagava a palavra comentada, e a explicação sobre 'fingir' que vem logo depois ficava sem apoio. Divergência encontrada ao preparar a tradução própria piloto desta homilia.
- **Motivo:** Tradução que apaga a palavra comentada na frase seguinte.
- **Grau de segurança:** alta · **estado:** aplicada

#### G23-04 · Homilia XXIII · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 193, § 1
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-23.txt`, bloco 3
- **Texto latino:** Fingere namque componere dicimus; unde et compositores luti figulos vocamus.
- **Tradução recebida:** “daí também chamarmos oleiros aos que moldam o barro.”
- **Tradução aplicada:** “daí também chamarmos oleiros (em latim, figuli) aos que moldam o barro.”
- **Justificativa linguística:** O jogo de palavras do latim ('fingere' / 'figulus') não passa para o português ('fingir' / 'oleiro'). Uma breve indicação entre parênteses tornaria o raciocínio compreensível; é acréscimo de tradutor, por isso fica como sugestão.
- **Motivo:** Jogo de palavras intraduzível; decisão sua. Aplicada por decisão do responsável (C6, 06/11/2026).
- **Decisão do responsável (06/11/2026):** aplicar. Aprovado no item C6.
- **Grau de segurança:** alta · **estado:** aplicada

#### G24-05 · Homilia XXIV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-24.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. XXI, 1-14.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo João 21, 1-14.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 21,1-14.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G24-01 · Homilia XXIV · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 200, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-24.txt`, bloco 7
- **Texto latino:** Ducamus ergo per trigonum decem et septem, et veniunt ad quinquaginta unum.
- **Tradução recebida:** “Tomemos, pois, o triângulo de dezessete, e chegamos a cinquenta e um.”
- **Tradução aplicada:** “Multipliquemos, pois, dezessete pelo triângulo, e chegamos a cinquenta e um.”
- **Justificativa linguística:** 'Ducere per trigonum' é multiplicar pelo número do triângulo, isto é, por três (17 × 3 = 51), como o próprio Gregório explica logo depois ('decem et septem ter ducimus'). 'O triângulo de dezessete' é, em português, o número triangular de 17, que dá 153 e não 51; a frase recebida contradiz a conta.
- **Motivo:** Termo técnico mal traduzido; a conta perdia o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G24-02 · Homilia XXIV · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 200, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-24.txt`, bloco 7
- **Texto latino:** Ducamus ergo per trigonum quinquaginta et unum, ut fiant centum quinquaginta tres.
- **Tradução recebida:** “Tomemos, pois, o triângulo de cinquenta e um, para que se façam cento e cinquenta e três.”
- **Tradução aplicada:** “Multipliquemos, pois, cinquenta e um pelo triângulo, para que se façam cento e cinquenta e três.”
- **Justificativa linguística:** Mesma razão de G24-01 (51 × 3 = 153).
- **Motivo:** Termo técnico mal traduzido; a conta perdia o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G24-04 · Homilia XXIV · § 6, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 203, § 6 (igual a Migne)
- **Localização no texto:** § 6, fim — `dados/homilias/gregorio-magno/recebida/homilia-24.txt`, bloco 9
- **Texto latino:** Nam qui imperfectorum desideria dignanter inflammat, haec quandoque ad perfectionem roborat
- **Tradução recebida:** “Pois Aquele que dignamente inflama os desejos dos imperfeitos”
- **Tradução aplicada:** “Pois Aquele que benignamente inflama os desejos dos imperfeitos”
- **Justificativa linguística:** Falso cognato: 'dignanter' é 'condescendendo', 'por bondade' (de 'dignari', dignar-se); 'dignamente' seria 'digne'.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-14 · Homilia XXV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. XX, 11-18:
- **Tradução recebida:** “LEITURA do santo Evangelho segundo João 20, 11-18:”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 20,11-18.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-01 · Homilia XXV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 206, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 4
- **Texto latino:** actumque est ut desideria dilata crescerent, et crescentia caperent quod invenissent
- **Tradução recebida:** “os desejos, dilatados, crescessem”
- **Tradução aplicada:** “os desejos, adiados, crescessem”
- **Justificativa linguística:** Falso cognato: 'dilata' é particípio de 'differre' (adiar), não de 'dilatare'. Gregório diz logo depois que os santos desejos crescem com a demora ('dilatione crescunt'), e a própria tradução usa ali 'demora'.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-05 · Homilia XXV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 207, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 4
- **Texto latino:** Mens namque hominis conditoris sui speciem non quaerentis male dura est
- **Tradução recebida:** “é mau endurecida”
- **Tradução aplicada:** “é mal endurecida”
- **Justificativa linguística:** 'Male' é advérbio ('mal'); 'mau' é adjetivo e não cabe aqui.
- **Motivo:** Ortografia.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-07 · Homilia XXV · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 213, § 9: 'quos iam cepit'
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 12
- **Texto latino:** ut aliquando eos etiam quos jam coepit amittat (Migne)
- **Tradução recebida:** “que já havia começado a possuir”
- **Tradução aplicada:** “que já havia capturado”
- **Justificativa linguística:** 'Coepit' em Migne é grafia medieval de 'cepit' (de 'capere', capturar), como lê o texto crítico; a tradução tomou-o por 'coepit' (começou). O contexto é o Leviatã que perde os que já tinha na boca.
- **Motivo:** Verbo mal identificado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-10 · Homilia XXV · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 214, § 9 (igual a Migne)
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 13
- **Texto latino:** ut saltem post morsum fugiat, qui incautus prius cavere noluit ne morderetur
- **Tradução recebida:** “por incautela”
- **Tradução aplicada:** “por imprudência”
- **Justificativa linguística:** 'Incautela' não existe em português; o latim diz 'incautus' (imprudente).
- **Motivo:** Palavra inexistente.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-11 · Homilia XXV · § 9–10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 214, § 10
- **Localização no texto:** § 9–10 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 13
- **Texto latino:** per quod evadat. 10. Adest testis divinae misericordiae…
- **Tradução recebida:** “pela qual escape. 10. Está presente”
- **Tradução aplicada:** “pela qual escape. ¶ Está presente”
- **Justificativa linguística:** Número de parágrafo de Migne solto no texto; o parágrafo é separado onde Migne o separa.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-12 · Homilia XXV · § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 215
- **Localização no texto:** § 10 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 13
- **Texto latino:** Inquinati post aquas salutis, renascamur ex lacrymis. [1553] Itaque…
- **Tradução recebida:** “1553 Portanto”
- **Tradução aplicada:** “Portanto”
- **Justificativa linguística:** '1553' é número de coluna de Migne, solto no texto.
- **Motivo:** Artefato da edição de base dentro do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-13 · Homilia XXV · § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 215, § 10 (igual a Migne)
- **Localização no texto:** § 10 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 13
- **Texto latino:** ut hunc ipsis quoque apostolis, ejus videlicet nuntiis, ipsa nuntiaret.
- **Tradução recebida:** “aos seus mensageiros, tornando-se ela mensageira.”
- **Tradução aplicada:** “aos seus mensageiros.”
- **Justificativa linguística:** 'Tornando-se ela mensageira' não está no latim; o jogo nuntius/nuntiaret já está expresso em 'o anunciou… aos seus mensageiros'.
- **Motivo:** Acréscimo sem sustentação no original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-13 · Homilia XXVI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. XX, 19-31.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo João 20, 19-31.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 20,19-31.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-01 · Homilia XXVI · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 219, § 2
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 4
- **Texto latino:** Itaque dicitur: Sicut misit me Pater, et ego mitto uos, id est, ea uos caritate diligo cum inter scandala persecutorum mitto, qua me caritate Pater diligit, quem uenire ad tolerandas passiones fecit.
- **Tradução recebida:** “isto é: eu vos amo com aquela caridade com que vos envio entre os escândalos dos perseguidores, com a mesma caridade com que o Pai me ama, a mim, a quem fez vir para suportar os sofrimentos.”
- **Tradução aplicada:** “isto é: eu vos amo, quando vos envio entre os escândalos dos perseguidores, com aquela mesma caridade com que o Pai me ama, a mim, a quem fez vir para suportar os sofrimentos.”
- **Justificativa linguística:** 'cum … mitto' é oração temporal (quando vos envio), e 'ea … caritate … qua … caritate' é uma única correlação (com aquela caridade … com que o Pai me ama). A tradução leu 'cum' como 'com que' e criou duas caridades distintas.
- **Justificativa teológica ou contextual:** O sentido é que Cristo ama os discípulos, ao enviá-los às perseguições, com o mesmo amor com que o Pai o ama ao enviá-lo à paixão — o paralelo que todo o parágrafo desenvolve.
- **Motivo:** Tradução incorreta de conjunção que altera a estrutura da frase.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-02 · Homilia XXVI · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 221, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 6
- **Texto latino:** Principatum superni iudicii sortiuntur, ut uice Dei quibusdam peccata retineant, quibusdam relaxent.
- **Tradução recebida:** “e obtêm participação no juízo celeste”
- **Tradução aplicada:** “e recebem o principado do juízo celeste”
- **Justificativa linguística:** 'principatus' é a primazia, a autoridade principal; 'participação' não traduz a palavra e enfraquece a afirmação.
- **Justificativa teológica ou contextual:** Gregório fala da autoridade de perdoar e reter os pecados conferida aos apóstolos 'em lugar de Deus' (uice Dei); 'participação' apaga o caráter de autoridade.
- **Motivo:** Termo que não transmite o sentido do original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-09 · Homilia XXVII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. XV, 12-16.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo João 15, 12-16.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 15,12-16.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-01 · Homilia XXVII · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 230, § 1 (igual a Migne)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 3
- **Texto latino:** Sed aliud est quod sponte impenditur naturae, aliud quod praeceptis dominicis ex charitate debetur obedientiae.
- **Tradução recebida:** “outra é o que, pelos preceitos do Senhor, a obediência deve à caridade”
- **Tradução aplicada:** “outra é o que, por caridade, se deve à obediência aos preceitos do Senhor”
- **Justificativa linguística:** 'Obedientiae' é dativo: o amor 'ex charitate' é devido à obediência aos preceitos. A tradução inverteu os papéis (a obediência devendo à caridade).
- **Justificativa teológica ou contextual:** Gregório distingue o afeto natural, dado espontaneamente, do amor que se deve por obediência ao mandamento de Cristo.
- **Motivo:** Funções sintáticas invertidas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-02 · Homilia XXVII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 233, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 6
- **Texto latino:** Sic sic per amarum poculum confectionis pervenitur ad gaudium salutis.
- **Tradução recebida:** “pelo amargo cálice da provação”
- **Tradução aplicada:** “pelo amargo cálice do remédio”
- **Justificativa linguística:** 'Confectio' é a poção medicinal preparada; a imagem é a do remédio amargo que traz a saúde ('salutis'), como na Homilia III, § 3 ('amarum poculum… purgationis').
- **Motivo:** Imagem trocada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-06 · Homilia XXVII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 235, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 6
- **Texto latino:** Jam pene tot qui videamus non sumus quot veritatis testes habemus.
- **Tradução recebida:** “Já quase não somos tantos nós que vemos, quantos temos testemunhas da verdade.”
- **Tradução aplicada:** “Nós, que vemos, já quase não somos tantos quantas são as testemunhas da verdade que temos.”
- **Justificativa linguística:** Construção recebida ininteligível; reordenada sem mudar palavras de sentido: os vivos que veem já são quase menos numerosos que os mártires.
- **Motivo:** Construção incompreensível.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-07 · Homilia XXVII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 237, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 9
- **Texto latino:** Oratio quippe in peccatum est illa petere quae prohibet ipse qui petitur.
- **Tradução recebida:** “é pedir aquilo que proíbe o próprio Aquele a quem se pede”
- **Tradução aplicada:** “é pedir aquilo que proíbe Aquele mesmo a quem se pede”
- **Justificativa linguística:** 'O próprio Aquele' é construção agramatical; 'ipse qui petitur' é 'aquele mesmo a quem se pede'.
- **Motivo:** Construção agramatical.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-08 · Homilia XXVII · § 9, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 238, § 9 (igual a Migne)
- **Localização no texto:** § 9, início — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 11
- **Texto latino:** Sed ecce in nos graviter inimicus deliquit, damna intulit, juvantes laesit, amantes persecutus est.
- **Tradução recebida:** “feriu os que nos ajudavam, perseguiu os que nos amavam”
- **Tradução aplicada:** “feriu-nos quando o ajudávamos, perseguiu-nos quando o amávamos”
- **Justificativa linguística:** Os particípios 'juvantes' e 'amantes' referem-se a 'nos' (nós, que o ajudávamos e amávamos), não a terceiros que nos ajudavam ou amavam.
- **Justificativa teológica ou contextual:** O exemplo é o do inimigo que retribui o bem com o mal, situação em que Gregório pede o perdão do Pai-nosso.
- **Motivo:** Referente dos particípios trocado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G28-01 · Homilia XXVIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 239
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-28.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. IV, 46-53.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO JOÃO (Jo 4,46-53).”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 4,46-53.”
- **Justificativa linguística:** Referência no formato dos títulos das outras homilias. Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da identificação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G28-02 · Homilia XXVIII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 242, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-28.txt`, bloco 5
- **Texto latino:** Hoc propter Deum honorate in hominibus, quibus tamen commissi non estis, quod facti sunt ad imaginem Dei.
- **Tradução recebida:** “ainda que eles não vos tenham sido confiados”
- **Tradução aplicada:** “ainda que não estejais confiados a eles”
- **Justificativa linguística:** 'Quibus… commissi non estis' é 'aos quais vós não estais confiados' (não estais sob a autoridade deles); a tradução inverteu quem é confiado a quem.
- **Justificativa teológica ou contextual:** Gregório pede que se honre a imagem de Deus em todo homem, inclusive naqueles que não são vossos superiores.
- **Motivo:** Sujeito e complemento invertidos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-12 · Homilia XXIX · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. MARC. XVI, 14-20.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO MARCOS (Mc 16,14-20).”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Marcos 16,14-20.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-08 · Homilia XXIX · § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 253, § 10
- **Localização no texto:** § 10 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** Ecce ut nos post se currere faceret, quos pro nobis saltus manifestata per carnem Veritas dedit
- **Tradução recebida:** “a verdade manifestada na carne deu por nós alguns saltos”
- **Tradução aplicada:** “a Verdade manifestada na carne deu por nós alguns saltos”
- **Justificativa linguística:** 'Veritas' designa aqui o próprio Cristo ('manifestata per carnem'); a tradução usa maiúscula nesse sentido em outras homilias ('a Verdade afirma', Homilia VII).
- **Justificativa teológica ou contextual:** Com minúscula, a frase parece falar de uma verdade abstrata, quando o sujeito é Cristo, a Verdade encarnada, que 'deu os saltos' do céu ao ventre, à cruz, ao sepulcro e de volta ao céu.
- **Motivo:** Perda de sentido teológico por grafia.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-11 · Homilia XXIX · § 10, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 254, § 10
- **Localização no texto:** § 10, fim — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** Trahe me post te, curremus in odorem unguentorum tuorum.
- **Tradução recebida:** “correremos ao perfume de teus ungüentos (Ct 1,3)”
- **Tradução aplicada:** “correremos ao perfume de teus unguentos (Ct 1,3)”
- **Justificativa linguística:** Grafia anterior ao Acordo Ortográfico (trema), conservada na tradução recebida.
- **Motivo:** Atualização ortográfica (Acordo Ortográfico de 1990, em vigor no Brasil desde 2009), sem relação com o sentido; aplicada na revisão do português da Etapa 1, como no restante do site.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-14 · Homilia XXX · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. JOAN. XIV, 23-31.
- **Tradução recebida:** “Leitura do santo Evangelho segundo João XIV, 23-31.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo João 14,23-31.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-01 · Homilia XXX · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 257, § 2
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 4
- **Texto latino:** Ille ergo uere amat, cuius uidelicet mentem delectatio praua ex consensu non superat.
- **Tradução recebida:** “Ama, portanto, verdadeiramente, aquele cuja mente, isto é, a má deleitação não vence pelo consentimento.”
- **Tradução aplicada:** “Ama, portanto, verdadeiramente aquele cuja mente a má deleitação não vence pelo consentimento.”
- **Justificativa linguística:** 'uidelicet' é aqui partícula de reforço; traduzido por 'isto é' e posto entre 'mente' e o sujeito, tornou a frase incompreensível (parece que a mente 'é' a má deleitação). Sujeito: 'delectatio praua'; objeto: 'mentem'.
- **Motivo:** Construção que não transmite o sentido do latim.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-02 · Homilia XXX · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 258, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 6
- **Texto latino:** exorare pro delinquentibus perhibetur, quia eos quos repleuerit exorantes facit
- **Tradução recebida:** “porque faz rogar aqueles de quem se apodera”
- **Tradução aplicada:** “porque faz rogar aqueles que Ele enche”
- **Justificativa linguística:** 'repleo' é encher, preencher; 'apoderar-se' não traduz o verbo. A própria tradução, adiante, verte 'omnes quos repleuerit' por 'a todos os que enche'.
- **Justificativa teológica ou contextual:** Gregório fala do Espírito que enche (replet) os fiéis — linguagem de Pentecostes ('repleti sunt omnes Spiritu sancto', At 2,4); 'apoderar-se' sugere posse ou domínio.
- **Motivo:** Termo que altera o sentido do original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-03 · Homilia XXX · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 258, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 6
- **Texto latino:** Sed ipse Spiritus postulat, qui ad postulandum eos quos repleuerit inflammat.
- **Tradução recebida:** “porque inflama para a súplica aqueles de quem se apodera”
- **Tradução aplicada:** “porque inflama para a súplica aqueles que Ele enche”
- **Justificativa linguística:** Mesmo verbo de G30-02 ('quos repleuerit').
- **Motivo:** Termo que altera o sentido do original.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-06 · Homilia XXX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 260, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** quia idem Spiritus coaeternus est Filio, et habet cognationem maximam lingua cum uerbo. Verbum quippe Patris Filius.
- **Tradução recebida:** “e há máxima afinidade entre a língua e o Verbo”
- **Tradução aplicada:** “e há máxima afinidade entre a língua e a palavra”
- **Justificativa linguística:** O primeiro 'uerbo' é a palavra comum (a língua produz a palavra); só a frase seguinte aplica o termo ao Filho ('Verbum … Patris Filius'). Com maiúscula já no primeiro, perde-se a passagem do sentido comum ao teológico que sustenta o argumento.
- **Motivo:** Perda de um jogo de palavras do autor. Fica como sugestão. Aplicada por decisão do responsável (C6, 06/11/2026).
- **Decisão do responsável (06/11/2026):** aplicar. Aprovado no item C6.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-07 · Homilia XXX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 261, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** Linguas igneas doctores habent, quia dum Deum amando praedicant, corda audientium inflammant.
- **Tradução recebida:** “porque, ao pregarem que Deus deve ser amado, inflamam”
- **Tradução aplicada:** “porque, enquanto pregam a Deus amando-O, inflamam”
- **Justificativa linguística:** 'amando' é gerúndio (amando-O, com amor), não gerundivo: 'que Deus deve ser amado' seria 'Deum amandum'. O objeto de 'praedicant' é 'Deum'.
- **Justificativa teológica ou contextual:** O ponto de Gregório é que o pregador incendeia porque prega com amor; a frase seguinte confirma: 'é ociosa a palavra do mestre, se não pode comunicar o incêndio do amor'.
- **Motivo:** Tradução gramaticalmente incorreta que muda o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-08 · Homilia XXX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 261, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** quia electi mandata caelestia nequaquam frigido corde audiunt, sed ad haec amoris intimi facibus inardescunt.
- **Tradução recebida:** “mas para eles os amores íntimos se incendeiam como tochas.”
- **Tradução aplicada:** “mas se inflamam para eles com as tochas do amor íntimo.”
- **Justificativa linguística:** O sujeito de 'inardescunt' são os eleitos; 'amoris intimi facibus' é ablativo instrumental (com as tochas do amor íntimo) e 'ad haec' remete aos mandamentos. A tradução fez dos 'amores íntimos' o sujeito.
- **Motivo:** Construção que altera o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-09 · Homilia XXX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 262, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** quatenus et columbae simplicitatem astutia serpentis accenderet, et serpentis astutiam columbae simplicitas temperaret.
- **Tradução recebida:** “para que a simplicidade da pomba acendesse a astúcia da serpente”
- **Tradução aplicada:** “para que a astúcia da serpente acendesse a simplicidade da pomba”
- **Justificativa linguística:** Na primeira oração, o sujeito é 'astutia serpentis' e o objeto 'columbae simplicitatem'. A tradução inverteu os papéis, e as duas orações passaram a ter o mesmo sujeito ('a simplicidade da pomba'), desfazendo o quiasmo.
- **Justificativa teológica ou contextual:** A doutrina do trecho é a complementaridade: a prudência desperta a simplicidade, e a simplicidade modera a prudência.
- **Motivo:** Inversão de sujeito e objeto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-10 · Homilia XXX · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 263, § 7
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 11
- **Texto latino:** ut tota simul Trinitas ostendatur operata, repente de sancti Spiritus diuinitate adiungitur: Et Spiritu oris eius omnis uirtus eorum.
- **Tradução recebida:** “E pelo sopro da sua boca todo o poder deles (ibid.).”
- **Tradução aplicada:** “E pelo Espírito da sua boca todo o poder deles (ibid.).”
- **Justificativa linguística:** 'sopro' é tradução corrente do Sl 32,6, mas Gregório lê 'Spiritu' como o Espírito Santo: introduz o versículo dizendo que se trata 'da divindade do Espírito Santo' e conclui 'a força dos céus foi recebida do Espírito'. Com 'sopro', o leitor não vê o argumento.
- **Justificativa teológica ou contextual:** O versículo é usado para mostrar a ação conjunta da Trindade (Verbo e Espírito) na formação dos apóstolos.
- **Motivo:** Perda de sentido teológico necessário ao argumento do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-11 · Homilia XXX · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 265, § 8
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 12
- **Texto latino:** et sanctus iste Spiritus qualis sit artifex considerare uolo
- **Tradução recebida:** “quão grande artista é este Espírito santo”
- **Tradução aplicada:** “quão grande artista é este Espírito Santo”
- **Justificativa linguística:** Nome divino grafado com minúscula, ao contrário de todo o resto da tradução.
- **Motivo:** Erro de grafia de um nome divino.
- **Grau de segurança:** alta · **estado:** aplicada

#### G31-01 · Homilia XXXI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 269
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-31.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XIII, 6-13.
- **Tradução recebida:** “Lição do Santo Evangelho segundo Lucas 13, 6-13.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 13,6-13.”
- **Justificativa linguística:** O título da leitura estava marcado como parágrafo da homilia e com a fórmula 'Lição', diferente das demais homilias. Passa a título da leitura, na forma usada em toda a tradução. Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Organização e uniformidade da identificação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G31-02 · Homilia XXXI · leitura do Evangelho

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 269
- **Localização no texto:** leitura do Evangelho — `dados/homilias/gregorio-magno/recebida/homilia-31.txt`, bloco 2
- **Texto latino:** In illo tempore, dicebat Jesus turbis similitudinem hanc…
- **Tradução recebida:** “Naquele tempo, Jesus dizia”
- **Tradução aplicada:** “Naquele tempo, Jesus dizia”
- **Justificativa linguística:** O texto da leitura (Lc 13,6-13) estava marcado como parágrafo da homilia; passa a bloco de leitura, como nas demais homilias. Nenhuma palavra muda.
- **Motivo:** Organização do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G31-03 · Homilia XXXI · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 273, § 6 (igual a Migne)
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-31.txt`, bloco 8
- **Texto latino:** quid horis omnibus in cogitationibus vestris volvatis semper aspicite
- **Tradução recebida:** “vede sempre o que revolvei a toda hora”
- **Tradução aplicada:** “vede sempre o que revolveis a toda hora”
- **Justificativa linguística:** 'Revolvei' é imperativo; aqui o verbo está numa oração interrogativa indireta e pede o indicativo ('revolveis').
- **Motivo:** Erro de concordância verbal.
- **Grau de segurança:** alta · **estado:** aplicada

#### G31-04 · Homilia XXXI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 274, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-31.txt`, bloco 9
- **Texto latino:** Incurvatus sum et humiliatus sum usquequaque (Psal. XXXVII, 7).
- **Tradução recebida:** “Estou encurvado e profundamente abatido (Sl 37,7)”
- **Tradução aplicada:** “Estou encurvado e humilhado de todo (Sl 37,7)”
- **Justificativa linguística:** Gregório comenta logo depois a palavra 'usquequaque' (de todo, em tudo): quem pensa só nas necessidades da carne estaria curvado, 'mas não de todo'. A tradução do versículo ('profundamente abatido') apagava a palavra comentada.
- **Motivo:** Citação traduzida sem a palavra que o autor comenta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G31-05 · Homilia XXXI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 274, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-31.txt`, bloco 9
- **Texto latino:** in seipso exclamavit, dicens: Incurvatus sum et humiliatus sum usquequaque.
- **Tradução recebida:** “exclamou, dizendo: Estou encurvado e profundamente abatido.”
- **Tradução aplicada:** “exclamou, dizendo: Estou encurvado e humilhado de todo.”
- **Justificativa linguística:** Mesma razão de G31-04.
- **Motivo:** Citação traduzida sem a palavra que o autor comenta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G31-06 · Homilia XXXI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 274, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-31.txt`, bloco 9
- **Texto latino:** incurvatus et humiliatus esset, sed tamen usquequaque non esset.
- **Tradução recebida:** “estaria encurvado e abatido, mas não estaria assim em tudo”
- **Tradução aplicada:** “estaria encurvado e humilhado, mas não de todo”
- **Justificativa linguística:** Mesma razão de G31-04: o comentário retoma as palavras do versículo.
- **Motivo:** Coerência entre a citação e o comentário.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-12 · Homilia XXXII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. IX, 23-27.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO LUCAS IX, 23-27.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 9,23-27.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-01 · Homilia XXXII · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 278, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 5
- **Texto latino:** Nihil in hoc mundo amando possideat
- **Tradução recebida:** “Nada possua neste mundo por amor desordenado,”
- **Tradução aplicada:** “Nada possua neste mundo por amor a ele,”
- **Justificativa linguística:** 'Amando possideat' é 'possua amando' (possua com apego); o adjetivo 'desordenado' não está no latim. Adota-se a mesma solução que a tradução recebida dá à frase paralela da Homilia XXXVII ('nihil in hoc mundo amando possidetis' → 'nada possuís neste mundo por amor a ele').
- **Motivo:** Acréscimo sem base no latim; uniformidade com a Homilia XXXVII.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-02 · Homilia XXXII · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 279, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 5
- **Texto latino:** Relinquamus nosmetipsos quales peccando nos fecimus, et maneamus nosmetipsi quales per gratiam facti sumus.
- **Tradução recebida:** “Deixemos de ser para nós mesmos aquilo que nos fizemos pelo pecado, e permaneçamos para nós mesmos aquilo que fomos feitos pela graça.”
- **Tradução aplicada:** “Deixemos a nós mesmos tais como nos fizemos pecando, e permaneçamos nós mesmos tais como fomos feitos pela graça.”
- **Justificativa linguística:** 'Nosmetipsos' é objeto de 'relinquamus' (deixemos a nós mesmos) e 'nosmetipsi' é sujeito de 'maneamus' (permaneçamos nós mesmos); o duplo 'para nós mesmos' da tradução recebida não tem base no latim e torna a frase obscura. A correção mantém o verbo 'deixar', que é o fio de todo o parágrafo.
- **Motivo:** Construção latina mal interpretada (acusativo e nominativo tomados como dativo).
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-03 · Homilia XXXII · § 2, citação de Pr 12,7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 279, § 2: 'uerte impios et non erunt conuersi namque impii non erunt'; o aparato registra a variante 'conuerte' num dos manuscritos
- **Localização no texto:** § 2, citação de Pr 12,7 — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 5
- **Texto latino:** Verte impios, et non erunt (Prov. XII, 7). Conversi namque impii non erunt…
- **Tradução recebida:** “Derruba os ímpios, e eles deixarão de ser”
- **Tradução aplicada:** “Converte os ímpios, e eles deixarão de ser”
- **Justificativa linguística:** Gregório lê 'verte' como 'converte' e explica logo depois: 'conversi namque impii' (os ímpios convertidos). Traduzido por 'Derruba', o versículo perde a ligação com o comentário que vem a seguir. O aparato da CCSL mostra que um manuscrito chega a escrever 'conuerte'.
- **Motivo:** Citação traduzida em sentido diferente do que o autor comenta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-07 · Homilia XXXII · § 3 (segundo § 3 de Migne)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 281
- **Localização no texto:** § 3 (segundo § 3 de Migne) — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 7
- **Texto latino:** abstinentes et arrogantes per abstinentiam quidem corpus afficiunt
- **Tradução recebida:** “embora pela abstinência aflija[m] o corpo”
- **Tradução aplicada:** “embora pela abstinência aflijam o corpo”
- **Justificativa linguística:** O sujeito é plural ('os abstinentes e arrogantes'); retira-se o colchete deixado na tradução recebida.
- **Motivo:** Marca de edição residual.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-09 · Homilia XXXII · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 283, § 5 (igual a Migne)
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 9
- **Texto latino:** ut nos ipsi qui peccavimus ad pacem Dei rogati veniamus
- **Tradução recebida:** “venhamos à paz de Deus por meio de um pedido.”
- **Tradução aplicada:** “venhamos, rogados, à paz de Deus.”
- **Justificativa linguística:** 'Rogati' é passivo: somos nós os rogados, e é Deus quem roga, como diz o fim do parágrafo ('obsecrat Deus'). 'Por meio de um pedido' deixava indeterminado quem pede e podia sugerir o contrário.
- **Motivo:** Ambiguidade que obscurece o argumento.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-01 · Homilia XXXIII · rubrica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 288
- **Localização no texto:** rubrica — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 1
- **Texto latino:** Habita ad populum in basilica sancti Clementis, feria sexta Quatuor temporum Septembris.
- **Tradução recebida:** “Pregada ao povo na basílica de São Clemente, na sexta-feira das Têmporas de setembro.”
- **Tradução aplicada:** “Pregada ao povo na basílica de São Clemente, na sexta-feira das Têmporas de setembro.”
- **Justificativa linguística:** O bloco é a rubrica (local e ocasião da pregação), mas estava marcado como parágrafo da homilia; passa à etiqueta correta, como nas demais homilias. Nenhuma palavra muda.
- **Motivo:** Organização do texto.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-26 · Homilia XXXIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. VII, 36-50.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo Lucas VII, 36-50.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 7,36-50.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-02 · Homilia XXXIII · fim da leitura / início do § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 288, § 1
- **Localização no texto:** fim da leitura / início do § 1 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 3
- **Texto latino:** …vade in pace. [1592] 1. Cogitanti mihi de Mariae poenitentia…
- **Tradução recebida:** “vai em paz. 1592 1. Ao pensar”
- **Tradução aplicada:** “vai em paz. ¶ Ao pensar”
- **Justificativa linguística:** O § 1 da homilia estava colado ao texto da leitura, precedido do número de coluna de Migne (1592) e do número de seção (1.). Retiram-se os números e o § 1 passa a parágrafo próprio, separado da leitura.
- **Motivo:** Artefato de digitalização; leitura e homilia confundidas no mesmo bloco.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-03 · Homilia XXXIII · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 288
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 3
- **Texto latino:** lavanda ad fontem misericordiae cucurrit, [1594] convivantes non erubuit
- **Tradução recebida:** “à fonte da misericórdia; 1594 não se envergonhou”
- **Tradução aplicada:** “à fonte da misericórdia; não se envergonhou”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-04 · Homilia XXXIII · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 289, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 4
- **Texto latino:** Ore superba dixerat, sed pedes Domini osculans, hoc in Redemptoris sui vestigia figebat.
- **Tradução recebida:** “mas, beijando os pés do Senhor, nisso os fixava nas pegadas do seu Redentor.”
- **Tradução aplicada:** “mas, beijando os pés do Senhor, fixava-a nas pegadas do seu Redentor.”
- **Justificativa linguística:** 'Hoc' retoma 'ore' (a boca, 'os, oris', neutro): a boca que dissera palavras soberbas é a que ela agora fixa nas pegadas do Redentor. 'Nisso os fixava' não tem referente claro e perde o paralelismo com as frases anteriores (olhos, cabelos).
- **Motivo:** Pronome latino mal interpretado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-05 · Homilia XXXIII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 290, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 5
- **Texto latino:** nosmetipsos prius in illorum calamitate defleamus
- **Tradução recebida:** “primeiro choremos em nós mesmos a desgraça deles”
- **Tradução aplicada:** “primeiro choremos a nós mesmos na desgraça deles”
- **Justificativa linguística:** O objeto de 'defleamus' é 'nosmetipsos' (choremos a nós mesmos); 'in illorum calamitate' é a circunstância. A tradução recebida invertia objeto e circunstância. O motivo dado logo a seguir ('porque talvez tenhamos caído ou possamos cair') confirma que se trata de chorar por nós.
- **Motivo:** Objeto e complemento invertidos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-06 · Homilia XXXIII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 290, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 5
- **Texto latino:** jam noster proximus peccator non est
- **Tradução recebida:** “então o nosso próximo pecador já não é,”
- **Tradução aplicada:** “então o nosso próximo já não é pecador,”
- **Justificativa linguística:** 'Peccator' é predicativo: o próximo já não é pecador. A ordem da tradução recebida ('o nosso próximo pecador já não é') pode ser lida como 'o próximo pecador deixa de existir'.
- **Motivo:** Ambiguidade criada pela ordem das palavras.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-08 · Homilia XXXIII · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 292, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 7
- **Texto latino:** si sanctis ejus in tribulatione compatimur
- **Tradução recebida:** “se compadecemos dos seus santos”
- **Tradução aplicada:** “se nos compadecemos dos seus santos”
- **Justificativa linguística:** 'Compadecer-se' é pronominal; falta o 'nos' depois da conjunção 'se'.
- **Motivo:** Erro de regência.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-09 · Homilia XXXIII · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 293, § 6 (igual a Migne: 'perfidus ille populus')
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** ut per eum, sicut diximus, perfidus ille populus ostendatur
- **Tradução recebida:** “seja mostrado aquele povo pérfido”
- **Tradução aplicada:** “seja mostrado aquele povo incrédulo”
- **Justificativa linguística:** No latim cristão, 'perfidus' é quem não tem fé ('per-fides'), e não o traidor ou desleal. O próprio Gregório explica a palavra nas frases seguintes, onde fala de 'infidelis ille populus', traduzido por 'aquele povo infiel'. O português 'pérfido' significa traiçoeiro: é um falso cognato, e acrescenta ao texto uma acusação moral que o latim não faz. É a mesma questão de tradução que levou à revisão da antiga oração da Sexta-feira Santa ('pro perfidis Iudaeis').
- **Motivo:** Falso cognato com peso teológico.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-10 · Homilia XXXIII · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 294
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** Redemptoris sui vestigia osculari non cessat, [1597] quia in ejus amore continuo suspirat
- **Tradução recebida:** “Redentor, 1597 porque suspira”
- **Tradução aplicada:** “Redentor, porque suspira”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-13 · Homilia XXXIII · início do § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 295, § 7
- **Localização no texto:** início do § 7 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** …quo etiam dura consumantur. 7. Libet inter haec…
- **Tradução recebida:** “até as coisas duras se consomem. 7. Entre”
- **Tradução aplicada:** “até as coisas duras se consomem. ¶ Entre”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-14 · Homilia XXXIII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 295, § 7 (igual a Migne: 'sub tanta distributione')
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** quae ejus adversario sub tanta distributione enumerat
- **Tradução recebida:** “ela que as enumera ao seu adversário com tão grande discriminação.”
- **Tradução aplicada:** “ela que as enumera ao seu adversário com tanta minúcia.”
- **Justificativa linguística:** 'Distributio' é aqui a enumeração feita ponto por ponto (água, beijo, óleo). 'Discriminação', no português atual, sugere tratamento desigual ou preconceito, sentido que o latim não tem.
- **Motivo:** Termo que, no português atual, induz a erro de sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-16 · Homilia XXXIII · início do § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 296, § 8
- **Localização no texto:** início do § 8 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** …poenitentiae umbra temperabat. 8. Pensemus quantae pietatis…
- **Tradução recebida:** “pela sombra da penitência. 8. Consideremos”
- **Tradução aplicada:** “pela sombra da penitência. ¶ Consideremos”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-23 · Homilia XXXIII · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 297
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** cum dicit fornicantem mulierem [1599] recipi nequaquam posse
- **Tradução recebida:** “a mulher fornicária 1599 de modo algum”
- **Tradução aplicada:** “a mulher fornicária de modo algum”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-25 · Homilia XXXIII · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 298, § 8 (igual a Migne)
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** Per hoc quod inquinationem nostram perhorrescimus, internae jam munditiae concordamus.
- **Tradução recebida:** “Por isso mesmo que horrorizamos nossa impureza, já concordamos”
- **Tradução aplicada:** “Pelo próprio fato de nos horrorizarmos com a nossa impureza, já concordamos”
- **Justificativa linguística:** 'Perhorrescere' é sentir horror de algo; em português, 'horrorizar' transitivo significa causar horror ('horrorizamos nossa impureza' diria que causamos horror à impureza). Usa-se a forma pronominal 'horrorizar-se com'.
- **Motivo:** Regência verbal que inverte o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-33 · Homilia XXXIV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XV, 1-10.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Lucas (15, 1-10).”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 15,1-10.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-01 · Homilia XXXIV · leitura do Evangelho (Lc 15,8)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 299 (igual a Migne)
- **Localização no texto:** leitura do Evangelho (Lc 15,8) — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 3
- **Texto latino:** nonne accendit lucernam, et evertit domum, et quaerit diligenter
- **Tradução recebida:** “não acende a lâmpada, varre a casa e a procura cuidadosamente”
- **Tradução aplicada:** “não acende a lâmpada, revira a casa e a procura cuidadosamente”
- **Justificativa linguística:** O texto latino da leitura traz 'evertit' (revira). 'Varre' traduz 'emundat', lição de outros códices que Gregório menciona no § 6 justamente para dizer que não contradiz 'evertit'. Com 'varre' na leitura, o comentário do § 6 ('revira a casa…') fica sem apoio. No § 6 a tradução recebida já usa 'revira'.
- **Motivo:** Leitura traduzida segundo lição diferente da comentada pelo autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-02 · Homilia XXXIV · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 300, § 1 (igual a Migne)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 4
- **Texto latino:** loqui me de expositione Evangelii longa mora interveniente prohibuit
- **Tradução recebida:** “impediu-me de falar sobre a exposição do Evangelho, depois de tão longa demora.”
- **Tradução aplicada:** “impediu-me, durante longo tempo, de falar sobre a exposição do Evangelho.”
- **Justificativa linguística:** 'Longa mora interveniente' (ablativo absoluto) indica a duração do impedimento: por um longo intervalo. A tradução recebida ('depois de tão longa demora') dava a entender que a demora antecedeu o impedimento.
- **Motivo:** Ablativo absoluto mal interpretado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-03 · Homilia XXXIV · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 300, § 1 (igual a Migne)
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 4
- **Texto latino:** Hoc etenim dico, quod apud se vestrum unusquisque recognoscit.
- **Tradução recebida:** “Digo isto, com efeito, porque cada um de vós o reconhece em si mesmo.”
- **Tradução aplicada:** “Digo, com efeito, o que cada um de vós reconhece em si mesmo.”
- **Justificativa linguística:** 'Quod' é aqui pronome relativo ('hoc … quod': isto que), não conjunção causal. Gregório não diz por que fala, mas que diz algo que cada ouvinte reconhece em si.
- **Motivo:** Relativo tomado por conjunção causal.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-05 · Homilia XXXIV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 300
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 5
- **Texto latino:** et per disciplinam subditos, [1601] et per humilitatem custodiunt semetipsos
- **Tradução recebida:** “guardam os súditos, 1601 e pela humildade”
- **Tradução aplicada:** “guardam os súditos, e pela humildade”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-07 · Homilia XXXIV · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 301
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 6
- **Texto latino:** quae ad videndum Deum [1602] condita fuerat
- **Tradução recebida:** “para ver a Deus, 1602 tendo o homem perecido”
- **Tradução aplicada:** “para ver a Deus, tendo o homem perecido”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-08 · Homilia XXXIV · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 303
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 8
- **Texto latino:** invisibilibus accenduntur, [1603] lamentis gaudent
- **Tradução recebida:** “inflamam-se pelas invisíveis, 1603 alegram-se nas lágrimas”
- **Tradução aplicada:** “inflamam-se pelas invisíveis, alegram-se nas lágrimas”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-10 · Homilia XXXIV · § 6, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 305, § 6 (igual a Migne)
- **Localização no texto:** § 6, fim — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** hunc aeterna sapientia per carnem miraculis coruscans ex lumine testae reparavit
- **Tradução recebida:** “o restaurou a partir do barro iluminado pela luz.”
- **Tradução aplicada:** “o restaurou pela luz do barro.”
- **Justificativa linguística:** 'Ex lumine testae' é 'pela luz do vaso de barro', retomando a imagem da lâmpada explicada pouco antes ('a lâmpada é luz em barro … a divindade na carne'). A tradução recebida invertia os termos ('barro iluminado pela luz') e desfazia a imagem.
- **Motivo:** Genitivo mal interpretado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-11 · Homilia XXXIV · início do § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 305, § 7
- **Localização no texto:** início do § 7 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** 7. Novem vero angelorum ordines diximus…
- **Tradução recebida:** “ 7. E dissemos que são nove”
- **Tradução aplicada:** “ ¶ E dissemos que são nove”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-13 · Homilia XXXIV · início do § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 306, § 8
- **Localização no texto:** início do § 8 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** 8. Sed cur istos persistentium angelorum choros…
- **Tradução recebida:** “ 8. Mas por que enumeramos”
- **Tradução aplicada:** “ ¶ Mas por que enumeramos”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-14 · Homilia XXXIV · § 8, citação de Sl 103,4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 306, § 8 (igual a Migne)
- **Localização no texto:** § 8, citação de Sl 103,4 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** Qui facit angelos suos spiritus (Psal. CIII, 4). Ac si patenter dicat: Qui eos quos semper habet spiritus, etiam cum voluerit, angelos facit.
- **Tradução recebida:** “Tu fazes de teus anjos espíritos (Sl 103,4).”
- **Tradução aplicada:** “Que faz dos espíritos os seus anjos (Sl 103,4).”
- **Justificativa linguística:** O argumento de Gregório é que 'anjo' é nome de ofício: os espíritos celestes são sempre espíritos e tornam-se anjos (mensageiros) quando enviados. Por isso ele lê o versículo como 'faz anjos os seus espíritos', e o explica assim logo depois. A tradução recebida ('fazes de teus anjos espíritos') dizia o contrário do comentário. Corrige-se também a pessoa verbal: o latim tem 'qui facit' (terceira pessoa).
- **Motivo:** Citação traduzida em sentido oposto ao do comentário do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-15 · Homilia XXXIV · § 8, comentário de Sl 103,4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 306, § 8 (igual a Migne)
- **Localização no texto:** § 8, comentário de Sl 103,4 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** Ac si patenter dicat: Qui eos quos semper habet spiritus, etiam cum voluerit, angelos facit.
- **Tradução recebida:** “Como se dissesse claramente: A esses que sempre tem como espíritos, Tu os fazes também anjos quando queres.”
- **Tradução aplicada:** “Como se dissesse claramente: Aqueles que sempre tem como espíritos, Ele os faz também anjos quando quer.”
- **Justificativa linguística:** O latim está na terceira pessoa ('habet', 'voluerit', 'facit'); a tradução recebida passava à segunda ('Tu os fazes … quando queres'), em desacordo com o próprio início da frase ('que sempre tem').
- **Motivo:** Pessoa verbal trocada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-16 · Homilia XXXIV · início do § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 307, § 9
- **Localização no texto:** início do § 9 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** 9. Michael namque, quis ut Deus…
- **Tradução recebida:** “ 9. Miguel, de fato”
- **Tradução aplicada:** “ ¶ Miguel, de fato”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-19 · Homilia XXXIV · início do § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 308, § 10
- **Localização no texto:** início do § 10 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** 10. Virtutes etenim vocantur…
- **Tradução recebida:** “ 10. Chamam-se virtudes”
- **Tradução aplicada:** “ ¶ Chamam-se virtudes”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-20 · Homilia XXXIV · início do § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 309, § 11
- **Localização no texto:** início do § 11 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** 11. Sed quid prodest nos de angelicis spiritibus ista perstringere…
- **Tradução recebida:** “ 11. Mas de que nos aproveita”
- **Tradução aplicada:** “ ¶ Mas de que nos aproveita”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-21 · Homilia XXXIV · § 12, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 311, § 12 (igual a Migne)
- **Localização no texto:** § 12, início — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 12
- **Texto latino:** Sed haec, fratres charissimi, me loquente, introrsus vos ad vosmetipsos reducite
- **Tradução recebida:** “Mas estas coisas, caríssimos irmãos, enquanto eu falo, reconduzi-as interiormente a vós mesmos;”
- **Tradução aplicada:** “Mas, enquanto eu digo estas coisas, caríssimos irmãos, reconduzi-vos interiormente a vós mesmos;”
- **Justificativa linguística:** O objeto de 'reducite' é 'vos' (reconduzi-vos a vós mesmos); 'haec … me loquente' é 'enquanto digo estas coisas'. A tradução recebida fazia de 'estas coisas' o objeto ('reconduzi-as').
- **Motivo:** Objeto do verbo trocado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-22 · Homilia XXXIV · início do § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 314, § 15
- **Localização no texto:** início do § 15 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 15
- **Texto latino:** 15. Sed ecce dum coelestium civium secreta rimamur…
- **Tradução recebida:** “ 15. Mas eis que”
- **Tradução aplicada:** “ ¶ Mas eis que”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-25 · Homilia XXXIV · § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 315, § 15: 'aut ignorat aut dissimulat' (mesmos verbos, em ordem inversa)
- **Localização no texto:** § 15 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 15
- **Texto latino:** adhuc poenitentiam agere aut dissimulat, aut ignorat
- **Tradução recebida:** “ou finge fazer penitência,”
- **Tradução aplicada:** “ou descuida de fazer penitência,”
- **Justificativa linguística:** 'Dissimulare' é deixar de lado, fazer de conta que não vê, descuidar; não é 'fingir' que se faz (isso seria 'simulare'). Quem chora uns pecados e comete outros não finge fazer penitência: descuida de fazê-la, ou não sabe fazê-la. É o mesmo falso cognato já corrigido em outras homilias.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-29 · Homilia XXXIV · § 17

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 316, § 17 (igual a Migne)
- **Localização no texto:** § 17 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 17
- **Texto latino:** quasi conditori suo dorsum mentis in faciem dedit
- **Tradução recebida:** “foi como se tivesse voltado a face de sua mente de costas para o seu Criador.”
- **Tradução aplicada:** “foi como se tivesse voltado as costas da mente para o rosto do seu Criador.”
- **Justificativa linguística:** O latim diz 'dorsum mentis' (as costas da mente) voltadas 'in faciem' (para o rosto) do Criador. A tradução recebida falava de 'face da mente' voltada 'de costas', invertendo a imagem que o parágrafo desenvolve (o Criador que chama 'post tergum', por trás).
- **Motivo:** Imagem invertida.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-30 · Homilia XXXIV · § 17

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 316, § 17 (igual a Migne)
- **Localização no texto:** § 17 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 17
- **Texto latino:** Quasi dorsum ei in faciem dedimus
- **Tradução recebida:** “É como se déssemos as costas em rosto daquele”
- **Tradução aplicada:** “É como se voltássemos as costas para o rosto daquele”
- **Justificativa linguística:** 'Dar as costas em rosto' decalca o latim 'dorsum in faciem dare' e não é construção portuguesa; o sentido é voltar as costas para o rosto de alguém.
- **Motivo:** Decalque do latim que obscurece o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-31 · Homilia XXXIV · § 17

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 316, § 17 (igual a Migne)
- **Localização no texto:** § 17 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 17
- **Texto latino:** et tamen per praecepta clamat, per patientiam exspectat
- **Tradução recebida:** “clama por seus preceitos, espera por sua paciência.”
- **Tradução aplicada:** “clama por meio dos seus preceitos, espera com paciência.”
- **Justificativa linguística:** 'Per praecepta clamat' é 'clama por meio dos preceitos'. 'Clama por seus preceitos' pode ser lido como 'reclama os seus preceitos', sentido que o latim não tem.
- **Motivo:** Ambiguidade que altera o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-32 · Homilia XXXIV · § 17

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 316, § 17 (igual a Migne)
- **Localização no texto:** § 17 — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 17
- **Texto latino:** Ecce nos peccando auctori nostro terga in faciem dedimus
- **Tradução recebida:** “voltamos as costas em rosto ao nosso Autor”
- **Tradução aplicada:** “voltamos as costas para o rosto do nosso Autor”
- **Justificativa linguística:** Mesmo decalque do latim corrigido no item anterior.
- **Motivo:** Decalque do latim que obscurece o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-11 · Homilia XXXV · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XXI, 9-19.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO LUCAS (Lc 21,9-19).”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 21,9-19.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-01 · Homilia XXXV · leitura do Evangelho (Lc 21,19)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 320 (igual a Migne); no § 4 (p. 324) Gregório comenta 'in patientia uestra'
- **Localização no texto:** leitura do Evangelho (Lc 21,19) — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 2
- **Texto latino:** In patientia vestra possidebitis animas vestras.
- **Tradução recebida:** “Pela vossa perseverança possuireis as vossas almas.”
- **Tradução aplicada:** “Na vossa paciência possuireis as vossas almas.”
- **Justificativa linguística:** O latim tem 'patientia', e a segunda metade da homilia (§§ 4-9) é um comentário sobre a paciência a partir deste versículo, que a própria tradução recebida cita no § 4 como 'Na vossa paciência possuireis as vossas almas'. 'Perseverança' (de outras traduções bíblicas) deixava a leitura em desacordo com o comentário.
- **Motivo:** Leitura em desacordo com o texto comentado pelo autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-03 · Homilia XXXV · § 6, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 326, § 6 (igual a Migne)
- **Localização no texto:** § 6, fim — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 8
- **Texto latino:** ne bonum patientiae quietis tempore pereat, quod in perturbationibus custoditur
- **Tradução recebida:** “para que o bem da paciência não pereça no tempo de repouso, ele que é conservado nas perturbações.”
- **Tradução aplicada:** “para que o bem da paciência, que se conserva nas perturbações, não pereça no tempo de repouso.”
- **Justificativa linguística:** O relativo 'quod' retoma 'bonum patientiae'. Na tradução recebida, 'ele que é conservado' parecia referir-se ao homem paciente; aproxima-se o relativo do seu antecedente.
- **Motivo:** Antecedente do relativo ambíguo.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-05 · Homilia XXXV · § 7, resto da referência partida

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 327, § 7
- **Localização no texto:** § 7, resto da referência partida — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 10
- **Texto latino:** (Matth. XX, 22.) Cui cum protinus responderent…
- **Tradução recebida:** “XX, 22.) Ao que, como prontamente respondessem”
- **Tradução aplicada:** “Ao que, como prontamente respondessem”
- **Justificativa linguística:** Segunda metade da referência partida (ver o item anterior, que a completa no parágrafo precedente).
- **Motivo:** Parágrafo partido na origem.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-06 · Homilia XXXV · início do § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 327, § 8
- **Localização no texto:** início do § 8 — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 10
- **Texto latino:** 8. Fuit quidam diebus nostris Stephanus nomine…
- **Tradução recebida:** “ 8. Houve em nossos dias”
- **Tradução aplicada:** “ ¶ Houve em nossos dias”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-07 · Homilia XXXV · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 328, § 8: 'seruata illa et in ecclesiastica pace patientia ad quantum hunc retributionis culmen euexit'
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 10
- **Texto latino:** Ecce, fratres charissimi, servata illa in Ecclesiastica pace patientia, ad quantum hunc retributionis culmen evexit.
- **Tradução recebida:** “Eis, irmãos caríssimos, a quanto elevou este homem ao cume da retribuição aquela paciência guardada na paz da Igreja.”
- **Tradução aplicada:** “Eis, irmãos caríssimos, a que cume de retribuição o elevou aquela paciência guardada na paz da Igreja.”
- **Justificativa linguística:** 'Ad quantum … culmen' é um só complemento (a que cume); a tradução recebida duplicava-o ('a quanto … ao cume') e tornava a frase confusa.
- **Motivo:** Construção latina desdobrada indevidamente.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-08 · Homilia XXXV · início do § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 329, § 9
- **Localização no texto:** início do § 9 — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 10
- **Texto latino:** 9. Sciendum praeterea est quod tribus modis…
- **Tradução recebida:** “ 9. Deve-se saber, além disso”
- **Tradução aplicada:** “ ¶ Deve-se saber, além disso”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-10 · Homilia XXXV · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 330, § 9 (igual a Migne)
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 10
- **Texto latino:** Si enim fixa mente mansura damna pertimescitis, damna rerum transeuntium gravia non putatis
- **Tradução recebida:** “se com mente firme temeis as perdas das coisas permanentes,”
- **Tradução aplicada:** “se com mente firme temeis as perdas que hão de durar,”
- **Justificativa linguística:** 'Mansura' concorda com 'damna': são perdas que hão de durar (a perda eterna), não perdas de coisas permanentes. A oposição é entre o dano eterno e o dano das coisas que passam.
- **Motivo:** Concordância latina mal interpretada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-19 · Homilia XXXVI · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XIV, 16-24.
- **Tradução recebida:** “Leitura do Santo Evangelho segundo Lucas 14, 16-24.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 14,16-24.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-01 · Homilia XXXVI · § 4, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 335, § 4 (igual a Migne)
- **Localização no texto:** § 4, início — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 6
- **Texto latino:** Loquentes vobis talia mentes vestrae verum dicunt
- **Tradução recebida:** “Dizem a verdade as vossas mentes ao ouvir tais coisas,”
- **Tradução aplicada:** “Dizem a verdade as vossas mentes, ao vos falarem assim,”
- **Justificativa linguística:** 'Loquentes vobis talia' concorda com 'mentes': são as mentes que dizem isso aos ouvintes (retomando o pensamento atribuído a eles no fim do § 3), e não as mentes que ouvem.
- **Motivo:** Particípio mal interpretado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-04 · Homilia XXXVI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 338
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** Quem tamen David invenit
- **Tradução recebida:** “definhou de fome e sede. David, porém,”
- **Tradução aplicada:** “definhou de fome e sede. Davi, porém,”
- **Justificativa linguística:** Uniformidade ortográfica: em toda a tradução recebida o nome aparece na forma portuguesa 'Davi' (Homilias II, VII, VIII, XXV, XXX, XXXIV, XL); só nesta passagem estava 'David'.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-05 · Homilia XXXVI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 338
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** dux David factus est
- **Tradução recebida:** “tornou-se guia de David.”
- **Tradução aplicada:** “tornou-se guia de Davi.”
- **Justificativa linguística:** Uniformidade ortográfica: em toda a tradução recebida o nome aparece na forma portuguesa 'Davi' (Homilias II, VII, VIII, XXV, XXX, XXXIV, XL); só nesta passagem estava 'David'.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-06 · Homilia XXXVI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 338
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** Quem tamen David invenit, eique cibum et potum praebet
- **Tradução recebida:** “David, porém, o encontra”
- **Tradução aplicada:** “Davi, porém, o encontra”
- **Justificativa linguística:** Uniformidade ortográfica: em toda a tradução recebida o nome aparece na forma portuguesa 'Davi' (Homilias II, VII, VIII, XXV, XXX, XXXIV, XL); só nesta passagem estava 'David'.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-07 · Homilia XXXVI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 338
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** quasi David super hostes ducunt
- **Tradução recebida:** “conduzissem David contra os inimigos”
- **Tradução aplicada:** “conduzissem Davi contra os inimigos”
- **Justificativa linguística:** Uniformidade ortográfica: em toda a tradução recebida o nome aparece na forma portuguesa 'Davi' (Homilias II, VII, VIII, XXV, XXX, XXXIV, XL); só nesta passagem estava 'David'.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-08 · Homilia XXXVI · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 338
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** velut David gladio feriunt
- **Tradução recebida:** “como David com a espada”
- **Tradução aplicada:** “como Davi com a espada”
- **Justificativa linguística:** Uniformidade ortográfica: em toda a tradução recebida o nome aparece na forma portuguesa 'Davi' (Homilias II, VII, VIII, XXV, XXX, XXXIV, XL); só nesta passagem estava 'David'.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-11 · Homilia XXXVI · início do § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 342, § 11
- **Localização no texto:** início do § 11 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** Sed haec paucis data sunt. 11. Admonere vos volo…
- **Tradução recebida:** “ 11. Quero exortar-vos”
- **Tradução aplicada:** “ ¶ Quero exortar-vos”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-12 · Homilia XXXVI · § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 343, § 11 (igual a Migne)
- **Localização no texto:** § 11 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** ut terrena quae libent sic nostro corpori serviant, quatenus cordi minime obsistant
- **Tradução recebida:** “para que as coisas terrenas, embora de boa vontade sirvam assim a nosso corpo, de modo algum estorvem o coração.”
- **Tradução aplicada:** “para que as coisas terrenas que agradam sirvam de tal modo a nosso corpo que de modo algum estorvem o coração.”
- **Justificativa linguística:** 'Quae libent' é oração relativa ('as coisas terrenas que agradam'); a tradução recebida leu-a como locução adverbial ('de boa vontade') e perdeu a correlação 'sic … quatenus' (de tal modo … que).
- **Motivo:** Oração relativa mal interpretada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-13 · Homilia XXXVI · início do § 12

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 343, § 12
- **Localização no texto:** início do § 12 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** 12. Hinc etenim Paulus apostolus dicit…
- **Tradução recebida:** “ 12. Por isso, com efeito, o apóstolo Paulo”
- **Tradução aplicada:** “ ¶ Por isso, com efeito, o apóstolo Paulo”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-16 · Homilia XXXVI · § 12

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 344
- **Localização no texto:** § 12 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** sed nihil habere cum peccato cupiunt. [1626] De ipsis quoque rebus habitis…
- **Tradução recebida:** “nada com pecado. 1626 E até das próprias coisas”
- **Tradução aplicada:** “nada com pecado. E até das próprias coisas”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-17 · Homilia XXXVI · início do § 13

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 344, § 13
- **Localização no texto:** início do § 13 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** 13. Ac ne aliquibus ista difficilia esse videantur…
- **Tradução recebida:** “ 13. E, para que isso não pareça difícil”
- **Tradução aplicada:** “ ¶ E, para que isso não pareça difícil”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-18 · Homilia XXXVI · § 13

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 345
- **Localização no texto:** § 13 — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** ac si unquam vulneris nihil habuissent. [1627] Ductus itaque ac sepultus est
- **Tradução recebida:** “tivessem tido ferida alguma. 1627 Foi então levado”
- **Tradução aplicada:** “tivessem tido ferida alguma. Foi então levado”
- **Justificativa linguística:** Número de coluna da edição de Migne (PL 76) que ficou no meio do texto; não pertence à homilia.
- **Motivo:** Artefato de digitalização.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-13 · Homilia XXXVII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XIV, 25-33.
- **Tradução recebida:** “LEITURA do santo Evangelho segundo Lucas 14, 25-33.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 14,25-33.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-01 · Homilia XXXVII · leitura do Evangelho (Lc 14,26)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 347 (igual a Migne)
- **Localização no texto:** leitura do Evangelho (Lc 14,26) — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 2
- **Texto latino:** adhuc autem et animam suam, non potest meus esse discipulus
- **Tradução recebida:** “e até mesmo a sua própria vida, não pode ser meu discípulo.”
- **Tradução aplicada:** “e até mesmo a sua própria alma, não pode ser meu discípulo.”
- **Justificativa linguística:** O latim tem 'animam suam', e Gregório comenta a palavra como 'alma' no § 2 ('somos mandados a odiar … também a nossa própria alma … quando não cedemos aos seus desejos carnais'), onde a própria tradução recebida cita o versículo como 'E até a sua própria alma'. Com 'vida' na leitura, o comentário perde o apoio.
- **Motivo:** Leitura em desacordo com o texto comentado pelo autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-02 · Homilia XXXVII · § 1, citação de Lc 14,26

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 348 (igual a Migne)
- **Localização no texto:** § 1, citação de Lc 14,26 — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 4
- **Texto latino:** adhuc autem et animam suam, non potest meus esse discipulus
- **Tradução recebida:** “e até mesmo a sua própria vida, não pode ser meu discípulo.”
- **Tradução aplicada:** “e até mesmo a sua própria alma, não pode ser meu discípulo.”
- **Justificativa linguística:** O latim tem 'animam suam', e Gregório comenta a palavra como 'alma' no § 2 ('somos mandados a odiar … também a nossa própria alma … quando não cedemos aos seus desejos carnais'), onde a própria tradução recebida cita o versículo como 'E até a sua própria alma'. Com 'vida' na leitura, o comentário perde o apoio.
- **Motivo:** Leitura em desacordo com o texto comentado pelo autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-03 · Homilia XXXVII · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 349, § 2 (igual a Migne)
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 5
- **Texto latino:** et quos adversarios in via Dei patimur odiendo et fugiendo nesciamus
- **Tradução recebida:** “e não saibamos odiar nem evitar aqueles que sofremos como adversários no caminho de Deus.”
- **Tradução aplicada:** “e, odiando-os e fugindo deles, ignoremos aqueles que sofremos como adversários no caminho de Deus.”
- **Justificativa linguística:** 'Nesciamus' é aqui 'não reconheçamos, ignoremos'; 'odiendo et fugiendo' são gerúndios de modo (odiando e fugindo). A tradução recebida leu 'nesciamus odiendo' como 'não saibamos odiar', o que inverte a frase: Gregório diz justamente que, a esses, devemos odiar e evitar. É a explicação de como se pode, ao mesmo tempo, amar e odiar os próximos.
- **Motivo:** Sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-06 · Homilia XXXVII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 353, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 10
- **Texto latino:** Nam cum viginti millibus venire dicitur is contra quem minime sufficit iste qui cum decem millibus venit.
- **Tradução recebida:** “Pois, quando se diz que vem com vinte mil aquele contra quem de modo algum basta este que vem com dez mil.”
- **Tradução aplicada:** “Pois diz-se que vem com vinte mil aquele contra quem de modo algum basta este que vem com dez mil.”
- **Justificativa linguística:** 'Cum' é aqui preposição ('cum viginti millibus', com vinte mil), e não conjunção temporal. Lido como 'quando', deixava a frase sem oração principal.
- **Motivo:** Preposição tomada por conjunção; frase incompleta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-07 · Homilia XXXVII · § 8, nota de Migne

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 354 (sem a nota)
- **Localização no texto:** § 8, nota de Migne — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 11
- **Texto latino:** longe transductus est (Lib. IV Dialog., cap. 57)
- **Tradução recebida:** “foi levado para longe (Lib. IV Dialog., cap. 57);”
- **Tradução aplicada:** “foi levado para longe (Liv. IV dos Diálogos, cap. 57);”
- **Justificativa linguística:** Nota de Migne que remete aos Diálogos de Gregório, onde o mesmo episódio é narrado. Mantida, mas na forma portuguesa já usada pela tradução recebida na Homilia XXXVI ('Liv. IV dos Diálogos, cap. 27').
- **Motivo:** Uniformidade das notas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-08 · Homilia XXXVII · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 354, § 8 (igual a Migne)
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 11
- **Texto latino:** quoties ab ejus conjuge oblatae fuissent hostiae pro animae ejus absolutione
- **Tradução recebida:** “oferecidas por sua esposa as vítimas por sua absolvição.”
- **Tradução aplicada:** “oferecidas por sua esposa as vítimas pela absolvição de sua alma.”
- **Justificativa linguística:** A tradução recebida omitia 'animae' (da sua alma): a esposa, julgando-o morto, oferecia o sacrifício pela alma dele.
- **Motivo:** Omissão.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-09 · Homilia XXXVII · § 8, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 354, § 8 (igual a Migne)
- **Localização no texto:** § 8, fim — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 11
- **Texto latino:** si oblata ab altero potuit in altero solvere vincula corporis
- **Tradução recebida:** “se, oferecida por um por outro, pôde dissolver as cadeias do corpo.”
- **Tradução aplicada:** “se, oferecida por uma pessoa, pôde dissolver as cadeias do corpo de outra.”
- **Justificativa linguística:** 'Ab altero … in altero': oferecida por um, dissolveu as cadeias em outro. 'Por um por outro' era ambíguo (o mesmo 'por' servia de agente e de beneficiário).
- **Motivo:** Ambiguidade.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-10 · Homilia XXXVII · § 9, nota de Migne

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 355 (sem a nota)
- **Localização no texto:** § 9, nota de Migne — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 12
- **Texto latino:** hostiam placationis immolaret (Lib. IV Dialog., cap. 56)
- **Tradução recebida:** “a vítima de propiciação (Lib. IV Dialog., cap. 56).”
- **Tradução aplicada:** “a vítima de propiciação (Liv. IV dos Diálogos, cap. 56).”
- **Justificativa linguística:** Nota de Migne que remete aos Diálogos de Gregório, onde o mesmo episódio é narrado. Mantida, mas na forma portuguesa já usada pela tradução recebida na Homilia XXXVI ('Liv. IV dos Diálogos, cap. 27').
- **Motivo:** Uniformidade das notas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-11 · Homilia XXXVII · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 357, § 9 (igual a Migne)
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 12
- **Texto latino:** missarum solemnia implere se posse recusavit
- **Tradução recebida:** “recusou-se a poder celebrar os solenes mistérios da missa.”
- **Tradução aplicada:** “declarou que não podia celebrar os solenes mistérios da missa.”
- **Justificativa linguística:** 'Recusare se posse' é negar que se pode: o bispo, febril, disse que não estava em condições de celebrar. 'Recusou-se a poder' não faz sentido em português.
- **Motivo:** Construção latina decalcada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-12 · Homilia XXXVII · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 357, § 9 (igual a Migne)
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 12
- **Texto latino:** in episcopii oratorio missas fecit
- **Tradução recebida:** “celebrou a missa no oratório do episcopado”
- **Tradução aplicada:** “celebrou a missa no oratório da casa episcopal”
- **Justificativa linguística:** 'Episcopium' é a residência do bispo; 'episcopado', em português, é o cargo ou o conjunto dos bispos.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-25 · Homilia XXXVIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne); Evg. Mt 22, 1-14
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. MATTH. XXII, 1-13.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Mateus 22, 1-13.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Mateus 22,1-14.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo. Na Etapa 2 (06/11/2026), a extensão foi corrigida para 22,1-14: a leitura termina em 'Multi enim sunt vocati, pauci vero electi' (Mt 22,14), versículo que Gregório comenta no § 14; é também a extensão dada pela CCSL 141 (Evg. Mt 22, 1-14). O título de Migne, copiado pela tradução, indicava outra extensão.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-01 · Homilia XXXVIII · § 4, citação

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 362, § 4: 'diliges amicum tuum et odio habebis inimicum tuum' (igual a Migne)
- **Localização no texto:** § 4, citação — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 6
- **Texto latino:** Diliges amicum tuum, et odio habebis inimicum tuum (Matth. V, 43; Levit. XIX, 18)
- **Tradução recebida:** “Amarás o teu próximo e odiarás o teu inimigo”
- **Tradução aplicada:** “Amarás o teu amigo e odiarás o teu inimigo”
- **Justificativa linguística:** Gregório cita o preceito na forma 'diliges amicum tuum' (amarás o teu amigo), tanto em Migne quanto na CCSL, e argumenta com a oposição amigo/inimigo. A tradução recebida substituiu-a pela forma corrente de Mt 5,43 ('o teu próximo'), que não é a do autor.
- **Motivo:** Citação substituída pela forma de outra versão bíblica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-02 · Homilia XXXVIII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 362, § 4: 'ad sublimia contemplationis sue penna subleuantur'
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 6
- **Texto latino:** ad sublimia contemplationis suae pennis sublevantur
- **Tradução recebida:** “elevam-se às alturas da contemplação com as asas do espírito?”
- **Tradução aplicada:** “elevam-se às alturas com as asas da sua contemplação?”
- **Justificativa linguística:** 'Contemplationis suae' depende de 'pennis' (as asas da sua contemplação), e 'ad sublimia' é o termo do movimento (às alturas). A tradução recebida ligou 'contemplação' a 'alturas' e acrescentou 'do espírito', que não está no latim.
- **Motivo:** Genitivo deslocado e acréscimo sem base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-03 · Homilia XXXVIII · § 6, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 364, § 6 (igual a Migne)
- **Localização no texto:** § 6, início — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 8
- **Texto latino:** Sed is qui invitantem se contemni conspicit regis filii sui nuptias vacuas non habebit.
- **Tradução recebida:** “Mas Aquele que vê ser desprezado por quem convida não deixará vazias as núpcias de seu Filho rei.”
- **Tradução aplicada:** “Mas Aquele que, ao convidar, se vê desprezado não deixará vazias as núpcias do rei seu Filho.”
- **Justificativa linguística:** 'Invitantem se contemni conspicit': vê que ele próprio, o que convida, é desprezado. A tradução recebida dizia que ele é desprezado 'por quem convida', invertendo os papéis.
- **Motivo:** Sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-04 · Homilia XXXVIII · § 7, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 365, § 7: 'in qua cum bonis et mali conueniunt'
- **Localização no texto:** § 7, início — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 9
- **Texto latino:** in qua cum bonis et mali conveniunt
- **Tradução recebida:** “na qual se reúnem maus e bons com os bons.”
- **Tradução aplicada:** “na qual também os maus se reúnem com os bons.”
- **Justificativa linguística:** 'Cum bonis et mali conveniunt' é 'também os maus se reúnem com os bons'. A tradução recebida ('se reúnem maus e bons com os bons') repetia 'bons' e não fazia sentido.
- **Motivo:** Frase truncada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-05 · Homilia XXXVIII · § 7, frase partida entre dois parágrafos

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 365, § 7
- **Localização no texto:** § 7, frase partida entre dois parágrafos — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 9
- **Texto latino:** Haec autem vita (23, q. 4, c. 15) quae inter coelum et infernum sita est…
- **Tradução recebida:** “Mas esta vida”
- **Tradução aplicada:** “Mas esta vida” (e o bloco é unido ao seguinte)
- **Justificativa linguística:** Na tradução recebida o parágrafo está partido no meio da frase ('Mas esta vida' / 'que está situada entre o céu e o inferno'), no ponto em que Migne traz uma nota que remete ao Decreto de Graciano (omitida pela tradução). A correção apenas une os dois pedaços; nenhuma palavra muda.
- **Motivo:** Parágrafo partido na origem.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-11 · Homilia XXXVIII · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 367, § 8
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 11
- **Texto latino:** quanto sanctiores quique sunt, tanto pauciores
- **Tradução recebida:** “quanto mais santos são alguns, tanto mais poucos são.”
- **Tradução aplicada:** “quanto mais santos são alguns, tanto menos numerosos são.”
- **Justificativa linguística:** 'Mais poucos' não é forma correta do comparativo em português; usa-se 'menos numerosos'.
- **Motivo:** Erro gramatical.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-14 · Homilia XXXVIII · § 13

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 372, § 13 (igual a Migne)
- **Localização no texto:** § 13 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 17
- **Texto latino:** Pedes enim qui visitare aegrum negligunt, manus quae nihil indigentibus tribuunt a bono opere jam ex voluntate ligatae sunt.
- **Tradução recebida:** “já estão atados à boa obra por sua própria vontade.”
- **Tradução aplicada:** “já estão, por sua própria vontade, atados longe da boa obra.”
- **Justificativa linguística:** 'A bono opere ligatae' é 'atadas (impedidas) em relação à boa obra': os pés que não visitam o enfermo e as mãos que nada dão já estão presos longe do bem. 'Atados à boa obra' diz o contrário. A frase anterior da própria tradução ('a culpa amarrou longe das boas obras') tem o sentido correto.
- **Motivo:** Sentido invertido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-15 · Homilia XXXVIII · § 14

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 373, § 14 (igual a Migne)
- **Localização no texto:** § 14 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 18
- **Texto latino:** Alter pene totam vitam ducere in pravitate conspicitur
- **Tradução recebida:** “Um é visto levar vida perversa quase até o fim todo da existência,”
- **Tradução aplicada:** “Um é visto levar quase toda a vida na perversidade,”
- **Justificativa linguística:** 'Pene totam vitam ducere in pravitate': passar quase toda a vida na perversidade. A forma recebida ('quase até o fim todo da existência') era confusa e antecipava o 'juxta finem vitae' da oração seguinte.
- **Motivo:** Frase confusa.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-16 · Homilia XXXVIII · § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 374, § 15 (igual a Migne)
- **Localização no texto:** § 15 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 19
- **Texto latino:** Neque enim res longe ante gestas dicimus
- **Tradução recebida:** “Pois não falamos de fatos ocorridos há muito longe,”
- **Tradução aplicada:** “Pois não falamos de fatos ocorridos há muito tempo,”
- **Justificativa linguística:** 'Longe ante' é advérbio de tempo (muito antes); 'há muito longe' não é construção portuguesa.
- **Motivo:** Erro de construção.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-17 · Homilia XXXVIII · § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 374, § 15: 'tharsille amite mee'
- **Localização no texto:** § 15 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 20
- **Texto latino:** huic Tharsillae amitae meae
- **Tradução recebida:** “a esta Tarsila, minha tia-avó,”
- **Tradução aplicada:** “a esta Tarsila, minha tia,”
- **Justificativa linguística:** 'Amita' é a tia paterna, irmã do pai. O próprio parágrafo começa por dizer que Tarsila, Gordiana e Emiliana eram as três irmãs do pai de Gregório ('Tres pater meus sorores habuit'). 'Tia-avó' atribuía a Tarsila um grau de parentesco que o texto não dá.
- **Motivo:** Grau de parentesco errado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-18 · Homilia XXXVIII · § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 375, § 15: 'atauus meus felix'
- **Localização no texto:** § 15 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 20
- **Texto latino:** per visionem atavus meus Felix hujus Romanae Ecclesiae antistes apparuit
- **Tradução recebida:** “apareceu em visão meu bisavô Félix”
- **Tradução aplicada:** “apareceu em visão meu antepassado Félix”
- **Justificativa linguística:** 'Atavus' designa um ascendente remoto (no uso estrito romano, o quinto grau na linha ascendente; no uso corrente, 'antepassado'); 'bisavô' seria 'proavus'. Traduz-se pelo termo genérico, que não atribui ao texto um grau de parentesco determinado.
- **Motivo:** Grau de parentesco sem base no latim.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-19 · Homilia XXXVIII · § 15, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 376, § 15: 'aliud adhuc e uicino refero'
- **Localização no texto:** § 15, fim — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 20
- **Texto latino:** aliud adhuc e vicino refero
- **Tradução recebida:** “refiro ainda outro, próximo deste,”
- **Tradução aplicada:** “refiro ainda outro, também próximo de nós,”
- **Justificativa linguística:** 'E vicino' é 'de perto, recente' (como no início do parágrafo, 'aliquid de proximo'); não significa 'semelhante ao anterior'.
- **Motivo:** Locução latina mal interpretada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-20 · Homilia XXXVIII · § 16, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 376, § 16: 'gratia conuersationis uenit'
- **Localização no texto:** § 16, início — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 21
- **Texto latino:** frater quidam in monasterium meum … gratia conversationis venit
- **Tradução recebida:** “um certo irmão veio, por graça de conversão de vida, ao meu mosteiro”
- **Tradução aplicada:** “um certo irmão veio, para abraçar a conversão de vida, ao meu mosteiro”
- **Justificativa linguística:** 'Gratia' com genitivo é 'por causa de, em vista de' ('gratia conversationis': para abraçar a vida monástica); não é 'graça'. O contraste vem logo a seguir: o irmão dele seguiu-o 'não por zelo de conversão, mas por afeição carnal'.
- **Motivo:** Locução latina mal interpretada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-21 · Homilia XXXVIII · § 16, nota de Migne

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 376 (sem a nota)
- **Localização no texto:** § 16, nota de Migne — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 21
- **Texto latino:** quandoque susceptus est (Lib. IV, Dialog., cap. 38)
- **Tradução recebida:** “foi por fim recebido (Dial., liv. IV, cap. 38).”
- **Tradução aplicada:** “foi por fim recebido (Liv. IV dos Diálogos, cap. 38).”
- **Justificativa linguística:** Nota de Migne que remete aos Diálogos de Gregório; posta na mesma forma da nota do § 15 desta homilia ('Liv. IV dos Diálogos, cap. 16').
- **Motivo:** Uniformidade das notas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-22 · Homilia XXXVIII · § 16

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 378, § 16: 'ab extrema fuerat parte premortuum'
- **Localização no texto:** § 16 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 21
- **Texto latino:** Jam corpus ejus ab extrema fuerat parte praemortuum
- **Tradução recebida:** “Seu corpo já estava meio morto em sua parte extrema;”
- **Tradução aplicada:** “Seu corpo já estava morto nas extremidades;”
- **Justificativa linguística:** 'Ab extrema parte praemortuum': já morto a partir das extremidades (só o peito conservava calor, diz a frase seguinte). 'Meio morto' acrescentava uma gradação que o latim não tem.
- **Motivo:** Tradução imprecisa.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-23 · Homilia XXXVIII · § 16

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 378, § 16
- **Localização no texto:** § 16 — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 21
- **Texto latino:** ab extrema corporis fuerat parte praemortuus
- **Tradução recebida:** “já estava meio morto em sua parte extrema do corpo,”
- **Tradução aplicada:** “já estava morto nas extremidades do corpo,”
- **Justificativa linguística:** Mesma expressão do item anterior, retomada pelo autor.
- **Motivo:** Tradução imprecisa.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-24 · Homilia XXXVIII · § 16, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 379
- **Localização no texto:** § 16, fim — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 21
- **Texto latino:** quia multi sunt vocati, pauci vero electi
- **Tradução recebida:** “mas poucos os escolhidos.”
- **Tradução aplicada:** “mas poucos os eleitos.”
- **Justificativa linguística:** A sentença de Mt 22,14, repetida cinco vezes nesta homilia, está traduzida em todas as outras com 'eleitos'; uniformiza-se a última ocorrência.
- **Motivo:** Uniformidade.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-08 · Homilia XXXIX · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne); Evg. Lc 19, 41-47
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XIX, 42-47.
- **Tradução recebida:** “LEITURA DO SANTO EVANGELHO SEGUNDO LUCAS XIX, 42-47.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 19,41-47.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo. Na Etapa 2 (06/11/2026), a extensão foi corrigida para 19,41-47: a leitura começa em 'cum appropinquaret Jesus Jerusalem, videns civitatem, flevit super illam' (Lc 19,41); é também a extensão dada pela CCSL 141 (Evg. Lc 19, 41-47). O título de Migne, copiado pela tradução, indicava outra extensão.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-01 · Homilia XXXIX · § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 380, § 1: 'prior illa Ierusalem, ut dicitur, funditus est euersa'
- **Localização no texto:** § 1 — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 4
- **Texto latino:** prior illa Jerusalem, ut dicitur, funditus est eversa
- **Tradução recebida:** “aquela Jerusalém anterior foi, por assim dizer, destruída até os fundamentos.”
- **Tradução aplicada:** “aquela Jerusalém anterior, segundo se diz, foi destruída até os fundamentos.”
- **Justificativa linguística:** 'Ut dicitur' é 'como se diz, segundo se conta': Gregório refere uma informação que recebeu. 'Por assim dizer' faria da destruição uma metáfora, sentido que o latim não tem.
- **Motivo:** Locução latina mal interpretada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-02 · Homilia XXXIX · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 386, § 6: 'ementes uero in templo sunt qui …' (igual a Migne)
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 10
- **Texto latino:** Ementes vero in templo sunt qui dum hoc persolvere proximo quod justum est nolunt, dumque rem jure debitam facere contemnunt, dato patronis praemio emunt peccatum.
- **Tradução recebida:** “Mas vós estais no templo quando não quereis pagar ao próximo aquilo que é justo e, desprezando fazer o que lhe é devido por direito, mediante recompensa dada a patronos, comprais o pecado.”
- **Tradução aplicada:** “Compradores no templo, por sua vez, são os que, não querendo pagar ao próximo aquilo que é justo e desprezando fazer o que lhe é devido por direito, mediante recompensa dada a patronos compram o pecado.”
- **Justificativa linguística:** A frase define os 'compradores' do templo ('ementes'), em paralelo com a anterior, que define os 'vendedores' ('vendentes'). A tradução recebida leu 'ementes' como se fosse uma interpelação aos ouvintes ('Mas vós estais no templo … comprais'), o que desfaz o paralelismo e atribui aos ouvintes o que o texto diz de uma categoria de pessoas.
- **Motivo:** Sujeito da frase mal identificado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-03 · Homilia XXXIX · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 386, § 6 (igual a Migne)
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 10
- **Texto latino:** Quibus bene dicitur
- **Tradução recebida:** “E com razão se vos diz:”
- **Tradução aplicada:** “E com razão se lhes diz:”
- **Justificativa linguística:** 'Quibus' retoma os vendedores e compradores das frases anteriores (terceira pessoa); consequência da correção do item anterior.
- **Motivo:** Pessoa gramatical trocada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-04 · Homilia XXXIX · início do § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 386, § 7
- **Localização no texto:** início do § 7 — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 10
- **Texto latino:** 7. Templum quoque et domus Dei est ipsa mens…
- **Tradução recebida:** “ 7. Também o templo”
- **Tradução aplicada:** “ ¶ Também o templo”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-06 · Homilia XXXIX · início do § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 390, § 10
- **Localização no texto:** início do § 10 — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 12
- **Texto latino:** 10. Sed quia ad amorem Dei et proximi…
- **Tradução recebida:** “ 10. Mas, porque para o amor”
- **Tradução aplicada:** “ ¶ Mas, porque para o amor”
- **Justificativa linguística:** Número de seção de Migne que ficou no meio do parágrafo; o parágrafo é dividido nesse ponto, como na edição latina.
- **Motivo:** Artefato de digitalização e divisão de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-07 · Homilia XXXIX · § 10, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 392, § 10 (igual a Migne)
- **Localização no texto:** § 10, fim — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 15
- **Texto latino:** decurrens sermo retineri non potest, quem disponit ipse de quo loquimur
- **Tradução recebida:** “quando a dispõe o próprio aquele de quem falamos,”
- **Tradução aplicada:** “porque a dispõe Aquele mesmo de quem falamos,”
- **Justificativa linguística:** 'O próprio aquele' não é construção portuguesa; o relativo 'quem disponit ipse' é 'que o próprio (Aquele) de quem falamos dispõe'. A conjunção 'quando' não está no latim e torna a frase condicional.
- **Motivo:** Construção incorreta.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-22 · Homilia XL · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), título (igual a Migne)
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 1
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XVI, 19-31.
- **Tradução recebida:** “LEITURA do Santo Evangelho segundo Lucas XVI, 19-31.”
- **Tradução aplicada:** “Leitura do santo Evangelho segundo Lucas 16,19-31.”
- **Justificativa linguística:** Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Uniformidade da formatação.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-05 · Homilia XL · § 3, lacuna da tradução recebida

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 399, § 3: 'nequaquam sermo dei tam uigilanter exprimeret quod diues qui torquetur apud inferos bysso et purpura indutus fuisset. nemo quippe uestimenta precipua nisi ad inanem gloriam querit, uidelicet ut honorabilior ceteris esse uideatur' (igual a Migne)
- **Localização no texto:** § 3, lacuna da tradução recebida — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 5
- **Texto latino:** nequaquam sermo Dei tam vigilanter exprimeret quod dives qui torquetur apud inferos bysso et purpura indutus fuisset. Nemo quippe vestimenta praecipua nisi ad inanem gloriam quaerit, videlicet, ut honorabilior caeteris esse videatur.
- **Tradução recebida:** “exprim glria? Wait correct typo. Need final clean.”
- **Tradução aplicada:** “exprimiria com tanto cuidado que o rico atormentado no inferno se vestira de linho finíssimo e de púrpura. Pois ninguém procura vestes de luxo senão por vã glória, isto é, para parecer mais honrado que os demais.”
- **Justificativa linguística:** Na tradução recebida, a frase interrompe-se no meio de uma palavra ('exprim') e o resto foi substituído por anotações de trabalho deixadas por uma ferramenta automática ('glria? Wait correct typo. Need final clean.'), sem a tradução de duas frases do latim. É a única lacuna desse tipo nas 40 homilias (verificação por busca em todo o texto recebido). As anotações saem do texto de leitura, e as duas frases são traduzidas diretamente do latim, que é o mesmo em Migne e na CCSL. O texto acrescentado não vem da tradução recebida: é tradução própria, identificada como tal neste item. A cópia recebida continua intacta em recebida/.
- **Motivo:** Lacuna e resíduo de ferramenta automática na tradução recebida.
- **Decisão do responsável (06/11/2026):** aprovado. Preenchimento aprovado como está; mantém-se a identificação de tradução própria.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-06 · Homilia XL · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 399, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 6
- **Texto latino:** Nam quia pro sola inani gloria vestimentum pretiosius quaeritur res ipsa testatur, quod nemo vult ibi pretiosis vestibus indui, ubi ab aliis non possit videri.
- **Tradução recebida:** “Pois, visto que se procura uma veste mais preciosa unicamente por vã glória, a própria coisa testemunha que ninguém quer ser vestido com roupas preciosas onde não possa ser visto pelos outros.”
- **Tradução aplicada:** “Pois que se procura uma veste mais preciosa unicamente por vã glória, atesta-o a própria realidade: ninguém quer vestir roupas preciosas onde não possa ser visto pelos outros.”
- **Justificativa linguística:** 'Quia … quaeritur' é o objeto de 'testatur' (a própria realidade atesta que se procura a veste preciosa por vã glória), e 'quod nemo vult…' é a prova. A tradução recebida leu 'quia' como causal ('visto que'), o que inverte a ordem do raciocínio.
- **Motivo:** Conjunção mal interpretada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-07 · Homilia XL · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 400, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 6
- **Texto latino:** si Lazarus pauper et ulcerosus ante ejus januam non jacuisset
- **Tradução recebida:** “não jacesse diante”
- **Tradução aplicada:** “não jazesse diante”
- **Justificativa linguística:** O imperfeito do subjuntivo de 'jazer' é 'jazesse' (forma usada corretamente na própria tradução, mais adiante).
- **Motivo:** Erro ortográfico.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-08 · Homilia XL · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 400, § 4 (igual a Migne)
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 6
- **Texto latino:** Quantus putamus, fratres mei, tunc in corde pauperis tumultus tentationis fuit, cui certe poterat ad poenam sufficere paupertas, etiamsi sanus fuisset
- **Tradução recebida:** “Quão grande julgamos, meus irmãos, ter sido então no coração do pobre o tumulto da tentação, para o qual certamente poderia bastar, como provação, a pobreza, ainda que estivesse são;”
- **Tradução aplicada:** “Quão grande julgamos, meus irmãos, ter sido então o tumulto da tentação no coração do pobre, a quem certamente poderia bastar, como provação, a pobreza, ainda que estivesse são;”
- **Justificativa linguística:** O relativo 'cui' retoma o pobre ('pauperis'), e não o tumulto: era ao pobre que a pobreza bastaria como provação, 'ainda que estivesse são'. A tradução recebida ligava o relativo a 'tumulto'.
- **Motivo:** Antecedente do relativo trocado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-09 · Homilia XL · § 4, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 400, § 4
- **Localização no texto:** § 4, fim — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 6
- **Texto latino:** Conspiciebat ille quotidie cui non miseretur
- **Tradução recebida:** “Aquele contemplava diariamente quem não compadecia;”
- **Tradução aplicada:** “Aquele contemplava diariamente aquele de quem não se compadecia;”
- **Justificativa linguística:** 'Compadecer-se' é pronominal e rege a preposição 'de'.
- **Motivo:** Erro de regência.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-10 · Homilia XL · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 401, § 5: 'quanta est subtilitas iudiciorum dei'
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 7
- **Texto latino:** O quanta est subtilitas judiciorum Dei!
- **Tradução recebida:** “Ó quão sutil é a justiça dos juízos de Deus!”
- **Tradução aplicada:** “Ó quão grande é a sutileza dos juízos de Deus!”
- **Justificativa linguística:** O latim exclama sobre a 'subtilitas' (sutileza, precisão) dos juízos de Deus; 'a justiça' é acréscimo da tradução recebida.
- **Motivo:** Acréscimo sem base no latim.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-11 · Homilia XL · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 405, § 8: 'tanto bonis sua gaudia excrescunt'
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 11
- **Texto latino:** tanto bonis sua gaudia excrescunt
- **Tradução recebida:** “os bens veem suas alegrias”
- **Tradução aplicada:** “os bons veem suas alegrias”
- **Justificativa linguística:** 'Bonis' é aqui 'os bons' (os justos de que trata todo o parágrafo), não 'os bens'.
- **Motivo:** Erro de leitura que altera o sentido.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-12 · Homilia XL · § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 407, § 10: 'nolite accepta remedia dissimulare'
- **Localização no texto:** § 10 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 13
- **Texto latino:** nolite accepta remedia dissimulare
- **Tradução recebida:** “não dissimuleis os remédios recebidos”
- **Tradução aplicada:** “não negligencieis os remédios recebidos”
- **Justificativa linguística:** 'Dissimulare' é aqui 'descuidar, deixar de lado' (paralelo a 'não percais o tempo da misericórdia'); 'dissimular' em português é encobrir ou fingir. Falso cognato já corrigido em outras homilias.
- **Motivo:** Falso cognato.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-13 · Homilia XL · § 10, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 407
- **Localização no texto:** § 10, fim — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 13
- **Texto latino:** tantoque necesse est ut omnibus te humiliare debeas
- **Tradução recebida:** “necessário que Tu te humilhes”
- **Tradução aplicada:** “necessário que tu te humilhes”
- **Justificativa linguística:** O pronome refere-se ao ouvinte, não a Deus; a maiúscula reverencial não cabe.
- **Motivo:** Maiúscula indevida.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-14 · Homilia XL · § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 407: 'speciosus'
- **Localização no texto:** § 11 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 14
- **Texto latino:** frater et compresbyter meus Speciosus
- **Tradução recebida:** “que está presente, Speciosus.”
- **Tradução aplicada:** “que está presente, Especioso.”
- **Justificativa linguística:** Uniformidade dos nomes próprios: a tradução recebida dá forma portuguesa a todos os nomes de pessoas das narrativas de Gregório (Tarsila, Emiliana, Teofânio, Cássio, Martírio, Epifânio, Rômula, Herundina); só aqui mantinha a forma latina.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-15 · Homilia XL · § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 407: 'redempta'
- **Localização no texto:** § 11 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 14
- **Texto latino:** anus quaedam, Redempta nomine
- **Tradução recebida:** “de nome Redempta,”
- **Tradução aplicada:** “de nome Redenta,”
- **Justificativa linguística:** Uniformidade dos nomes próprios: a tradução recebida dá forma portuguesa a todos os nomes de pessoas das narrativas de Gregório (Tarsila, Emiliana, Teofânio, Cássio, Martírio, Epifânio, Rômula, Herundina); só aqui mantinha a forma latina.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-16 · Homilia XL · § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 408
- **Localização no texto:** § 11 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 14
- **Texto latino:** eamdem Redemptam … vocavit
- **Tradução recebida:** “chamou a mesma Redempta”
- **Tradução aplicada:** “chamou a mesma Redenta”
- **Justificativa linguística:** Uniformidade dos nomes próprios: a tradução recebida dá forma portuguesa a todos os nomes de pessoas das narrativas de Gregório (Tarsila, Emiliana, Teofânio, Cássio, Martírio, Epifânio, Rômula, Herundina); só aqui mantinha a forma latina.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-17 · Homilia XL · § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 409
- **Localização no texto:** § 11 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 15
- **Texto latino:** assistentem sibi et trementem Redemptam
- **Tradução recebida:** “Redempta, sua mestra”
- **Tradução aplicada:** “Redenta, sua mestra”
- **Justificativa linguística:** Uniformidade dos nomes próprios: a tradução recebida dá forma portuguesa a todos os nomes de pessoas das narrativas de Gregório (Tarsila, Emiliana, Teofânio, Cássio, Martírio, Epifânio, Rômula, Herundina); só aqui mantinha a forma latina.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-18 · Homilia XL · § 11

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 409
- **Localização no texto:** § 11 — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 15
- **Texto latino:** Necdum vero eadem Redempta et alia ejus discipula
- **Tradução recebida:** “E ainda Redempta e outra”
- **Tradução aplicada:** “E ainda Redenta e outra”
- **Justificativa linguística:** Uniformidade dos nomes próprios: a tradução recebida dá forma portuguesa a todos os nomes de pessoas das narrativas de Gregório (Tarsila, Emiliana, Teofânio, Cássio, Martírio, Epifânio, Rômula, Herundina); só aqui mantinha a forma latina.
- **Motivo:** Uniformidade ortográfica.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-21 · Homilia XL · § 12, conclusão

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 411: 'sed hec omnipotens deus que per me in uestris auribus loquitur per se in uestris mentibus loquatur'
- **Localização no texto:** § 12, conclusão — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 16
- **Texto latino:** Sed haec omnipotens Deus quae per me in vestris auribus loquitur, per se in vestris mentibus loquatur
- **Tradução recebida:** “Mas que este Deus onipotente, que por meu intermédio fala aos vossos ouvidos, fale por si mesmo aos vossos corações,”
- **Tradução aplicada:** “Mas que Deus onipotente, que por meu intermédio diz estas coisas aos vossos ouvidos, as diga Ele mesmo aos vossos corações,”
- **Justificativa linguística:** 'Haec' (estas coisas) é o objeto dos dois verbos ('quae … loquitur … loquatur'); a tradução recebida o tomou por demonstrativo de 'Deus' ('este Deus') e perdeu o objeto.
- **Motivo:** Pronome mal interpretado.
- **Grau de segurança:** alta · **estado:** aplicada

### 1.2 Correções de problemas da fonte

Não mudam palavras de Gregório: retiram números, notas e artefatos que vieram junto com a tradução, ou corrigem referências bíblicas acrescentadas pela edição.

#### G02-01 · Homilia II · início da homilia (cabeçalho e rubrica)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia II
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 12 (o texto crítico traz só 'Homilia II'; a rubrica é de Migne)
- **Localização no texto:** início da homilia (cabeçalho e rubrica) — `dados/homilias/gregorio-magno/recebida/homilia-02.txt`, bloco 0
- **Texto latino:** HOMILIA II. Habita ad populum in basilica sancti Petri apostoli, Dominica in Quinquagesima.
- **Tradução recebida:** “Leitura do Santo Evangelho segundo Lucas 18, 31-44.”
- **Tradução aplicada:** “Leitura do Santo Evangelho segundo Lucas 18, 31-44.”
- **Justificativa linguística:** A tradução recebida não tem cabeçalho nem rubrica para esta homilia (o texto começa direto na leitura). O número e a rubrica foram traduzidos de Migne, com as mesmas fórmulas usadas nas outras homilias ('Proferida ao povo na basílica do santo apóstolo Pedro'). Nada do texto recebido foi alterado.
- **Motivo:** Identificação ausente na fonte portuguesa; acrescentada a partir do latim. A rubrica é de Migne: o texto crítico não a traz.
- **Grau de segurança:** alta · **estado:** aplicada

#### G04-03 · Homilia IV · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-04.txt`, bloco 4
- **Texto latino:** (Act. II, 41; IV, 4)
- **Tradução recebida:** “(At 2,41; 4, 4)”
- **Tradução aplicada:** “(At 2,41; 4,4)”
- **Justificativa linguística:** Espaço indevido depois da vírgula na segunda referência; forma usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G04-04 · Homilia IV · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia IV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-04.txt`, bloco 4
- **Texto latino:** (Psal. XLV, 9; LXV, 5)
- **Tradução recebida:** “(Sl 45,9; 65, 5)”
- **Tradução aplicada:** “(Sl 45,9; 65,5)”
- **Justificativa linguística:** Espaço indevido depois da vírgula na segunda referência; forma usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G10-01 · Homilia X · fim da leitura do Evangelho / início do § 1

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia X
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 66, § 1
- **Localização no texto:** fim da leitura do Evangelho / início do § 1 — `dados/homilias/gregorio-magno/recebida/homilia-10.txt`, bloco 2
- **Texto latino:** (o § 1 começa: 'Sicut ex lectione euangelica, fratres, audistis')
- **Tradução recebida:** “regressaram por outro caminho à sua terra. 1468 1. Como ouvistes na leitura evangélica”
- **Tradução aplicada:** “regressaram por outro caminho à sua terra. ¶ Como ouvistes na leitura evangélica”
- **Justificativa linguística:** A tradução recebida traz, colados ao fim do Evangelho, o número '1468' e a numeração '1.', que não pertencem ao texto (artefatos do material de origem), e junta o § 1 da homilia ao parágrafo da leitura bíblica. A correção apenas retira os dois números e separa o parágrafo; nenhuma palavra do texto muda.
- **Motivo:** Problema da fonte: artefato e junção indevida de parágrafos.
- **Grau de segurança:** alta · **estado:** aplicada

#### G10-10 · Homilia X · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia X
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-10.txt`, bloco 2
- **Texto latino:** (I Cor. XIV, 22)
- **Tradução recebida:** “(I Cor. XIV, 22)”
- **Tradução aplicada:** “(1Cor 14,22)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-04 · Homilia XII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 83, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 6
- **Texto latino:** Dies Domini sicut fur in nocte ita veniet (I Thess. V, 2).
- **Tradução recebida:** “(1 Tess. 5, 2)”
- **Tradução aplicada:** “(1Ts 5,2)”
- **Justificativa linguística:** Referência no formato usado em todo o resto da tradução (abreviatura sem ponto, capítulo e versículo com vírgula).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-05 · Homilia XII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 85, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 7
- **Texto latino:** Ecce nunc tempus acceptabile, ecce nunc dies salutis (II Cor. VI, 2).
- **Tradução recebida:** “(2 Cor 6, 2)”
- **Tradução aplicada:** “(2Cor 6,2)”
- **Justificativa linguística:** Mesma uniformização de G12-04.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G12-03 · Homilia XII · § 7, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 88, § 7 (no texto crítico não há referência; a de Migne é 'Exod. VI')
- **Localização no texto:** § 7, fim — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 10
- **Texto latino:** Per legis quippe mandatum ambulare longius Sabbato non licet (Exod. VI)
- **Tradução recebida:** “(Ex 6)”
- **Tradução aplicada:** “(Ex 16,29)”
- **Justificativa linguística:** A referência é editorial, não de Gregório. Êxodo 6 não trata do sábado; a proibição de sair do lugar no sétimo dia está em Ex 16,29 ('nullus egrediatur de loco suo die septimo'). Migne traz 'Exod. VI', provável erro de impressão.
- **Motivo:** Referência bíblica errada na edição de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G14-01 · Homilia XIV · § 5 (numerado '3' em Migne)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 100, § 5
- **Localização no texto:** § 5 (numerado '3' em Migne) — `dados/homilias/gregorio-magno/recebida/homilia-14.txt`, bloco 7
- **Texto latino:** Per me si quis introierit, salvabitur, et ingredietur, et egredietur, et pascua inveniet (Ibid., 9).
- **Tradução recebida:** “(ibid., 9)”
- **Tradução aplicada:** “(Jo 10,9)”
- **Justificativa linguística:** A referência editorial 'Ibid.' remete a Jo 10, citado logo antes. No texto em português, onde as outras referências vêm por extenso, 'ibid.' fica obscuro.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G16-08 · Homilia XVI · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 9
- **Texto latino:** (Joel. I, 14; II, 15)
- **Tradução recebida:** “(Jl 1,14; 2, 15)”
- **Tradução aplicada:** “(Jl 1,14; 2,15)”
- **Justificativa linguística:** Espaço indevido depois da vírgula na segunda referência; forma usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-08 · Homilia XVII · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 124, § 9
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 11
- **Texto latino:** Animalia tua habitabunt in ea (Psal. LXVII, 11).
- **Tradução recebida:** “habitarão nela Sl 67,11.”
- **Tradução aplicada:** “habitarão nela (Sl 67,11).”
- **Justificativa linguística:** Referência bíblica solta no texto, sem parênteses, como em nenhum outro lugar da tradução.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G17-10 · Homilia XVII · § 15

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 131, § 15
- **Localização no texto:** § 15 — `dados/homilias/gregorio-magno/recebida/homilia-17.txt`, bloco 14
- **Texto latino:** Quomodo obscuratum est aurum… (Thren. IV, 1.)
- **Tradução recebida:** “(Lm 4 Lm 1.)”
- **Tradução aplicada:** “(Lm 4,1.)”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa ('Lm 4 Lm 1').
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G18-01 · Homilia XVIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 135
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-18.txt`, bloco 1
- **Texto latino:** LECTIO. EVANG. SEC. JOAN. VIII, 45-69. (Migne)
- **Tradução recebida:** “LEITURA do Evangelho segundo João 8, 45-69.”
- **Tradução aplicada:** “Leitura do Evangelho segundo João 8,46-59.”
- **Justificativa linguística:** João 8 tem 59 versículos. A leitura vai de 'Quis ex vobis arguet me de peccato?' (8,46) a 'exivit de templo' (8,59), referência dada também pelo índice da tradução de Hurst. '45-69' é erro da edição de Migne, copiado pela tradução. Forma do título uniformizada nas 40 homilias: a tradução recebida alternava maiúsculas e minúsculas, algarismos romanos e arábicos, parênteses e espaços na referência. Adota-se uma só forma ('Leitura do santo Evangelho segundo Lucas 9,23-27.'), com a referência no formato usado em toda a tradução; 'santo' acompanha o latim ('LECTIO S. EVANG.'), e falta onde o latim não o tem (Homilias I, XVI–XIX). No site o título continua a aparecer em maiúsculas, por estilo.
- **Motivo:** Referência bíblica impossível na edição de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-05 · Homilia XIX · § 7, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 152
- **Localização no texto:** § 7, fim — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 9
- **Texto latino:** Deus meus misericordia mea (Psal. LVIII, 18).
- **Tradução recebida:** “minha misericórdia Sl 58 Sl 18.”
- **Tradução aplicada:** “minha misericórdia (Sl 58,18).”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G19-06 · Homilia XIX · § 7, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 152
- **Localização no texto:** § 7, fim — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 9
- **Texto latino:** dicens: Deus meus misericordia mea (Ibid.).
- **Tradução recebida:** “(ibid.)”
- **Tradução aplicada:** “(Sl 58,18)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-04 · Homilia XX · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 156, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 4
- **Texto latino:** Et convalles abundabunt frumento (Psal. LXIV, 14).
- **Tradução recebida:** “trigo Sl 64 Sl 14.”
- **Tradução aplicada:** “trigo (Sl 64,14).”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-15 · Homilia XX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 4
- **Texto latino:** (Luc. XIV, 11; XVIII, 14)
- **Tradução recebida:** “(Lc 14,11; 18, 14)”
- **Tradução aplicada:** “(Lc 14,11; 18,14)”
- **Justificativa linguística:** Espaço indevido depois da vírgula na segunda referência; forma usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-05 · Homilia XX · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 157, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 5
- **Texto latino:** Sed ait: Qui habet sponsam sponsus est (Ibid.).
- **Tradução recebida:** “é o esposo (ibid.)”
- **Tradução aplicada:** “é o esposo (Jo 3,29)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-06 · Homilia XX · § 4, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 158, § 4
- **Localização no texto:** § 4, fim — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 5
- **Texto latino:** A quo et subditur: Illum oportet crescere, me autem minui (Ibid.).
- **Tradução recebida:** “e que eu diminua (ibid.)”
- **Tradução aplicada:** “e que eu diminua (Jo 3,30)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-07 · Homilia XX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 158, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 6
- **Texto latino:** Illum oportet crescere, me autem minui (Ibid.).
- **Tradução recebida:** “e que eu diminua (ibid.)”
- **Tradução aplicada:** “e que eu diminua (Jo 3,30)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-08 · Homilia XX · § 11, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 163
- **Localização no texto:** § 11, fim — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 13
- **Texto latino:** Ignem ardentem exstinguit aqua, et eleemosyna resistit peccatis (Eccli. III, 33).
- **Tradução recebida:** “resiste aos pecados Eclo 3,33.”
- **Tradução aplicada:** “resiste aos pecados (Eclo 3,33).”
- **Justificativa linguística:** Referência sem parênteses, ao contrário do resto da tradução.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G20-09 · Homilia XX · § 12

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 164
- **Localização no texto:** § 12 — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 14
- **Texto latino:** ut cooperatores simus veritatis (III Joan., 7, 8).
- **Tradução recebida:** “da verdade 3Jo 7-8.”
- **Tradução aplicada:** “da verdade (3Jo 7-8).”
- **Justificativa linguística:** Referência sem parênteses, ao contrário do resto da tradução.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-01 · Homilia XXII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 184
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 7
- **Texto latino:** dabis eis scutum cordis laborem tuum (Thren. III, 64, 65)
- **Tradução recebida:** “o teu trabalho Lm 3 Lm 64-65.”
- **Tradução aplicada:** “o teu trabalho (Lm 3,64-65).”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-02 · Homilia XXII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 188
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 11
- **Texto latino:** Exaruit velut testa virtus mea (Psal. XXI, 16).
- **Tradução recebida:** “minha força Sl 21 Sl 16.”
- **Tradução aplicada:** “minha força (Sl 21,16).”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-03 · Homilia XXII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 186
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 11
- **Texto latino:** et comedetis festinantes (Ibid., 11).
- **Tradução recebida:** “às pressas (ibid., 11)”
- **Tradução aplicada:** “às pressas (Ex 12,11)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução (o 'ibid.' remete a Êxodo ou Amós, citados antes, e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-04 · Homilia XXII · § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 188
- **Localização no texto:** § 8 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 12
- **Texto latino:** Et sacrificate de fermentato laudem (Ibid., 5).
- **Tradução recebida:** “fermentado (ibid., 5)”
- **Tradução aplicada:** “fermentado (Am 4,5)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução (o 'ibid.' remete a Êxodo ou Amós, citados antes, e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-05 · Homilia XXII · § 8, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 190
- **Localização no texto:** § 8, fim — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 12
- **Texto latino:** Si quid autem remanserit, igne comburetis (Ibid.).
- **Tradução recebida:** “no fogo (ibid.)”
- **Tradução aplicada:** “no fogo (Ex 12,10)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução (o 'ibid.' remete a Êxodo ou Amós, citados antes, e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-06 · Homilia XXII · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 190
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 13
- **Texto latino:** Renes vestros accingetis (Ibid., 11).
- **Tradução recebida:** “os vossos rins (ibid., 11)”
- **Tradução aplicada:** “os vossos rins (Ex 12,11)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução (o 'ibid.' remete a Êxodo ou Amós, citados antes, e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-07 · Homilia XXII · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 191
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 14
- **Texto latino:** Tenentes baculos in manibus (Ibid.).
- **Tradução recebida:** “nas mãos (Ibid.)”
- **Tradução aplicada:** “nas mãos (Ex 12,11)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução (o 'ibid.' remete a Êxodo ou Amós, citados antes, e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G22-08 · Homilia XXII · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 191
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-22.txt`, bloco 14
- **Texto latino:** Et comedetis festinantes (Ibid.).
- **Tradução recebida:** “apressadamente (Ibid.)”
- **Tradução aplicada:** “apressadamente (Ex 12,11)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução (o 'ibid.' remete a Êxodo ou Amós, citados antes, e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G24-03 · Homilia XXIV · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 203
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-24.txt`, bloco 9
- **Texto latino:** Imperfectum meum viderunt oculi tui, et in libro tuo omnes scribentur (Psal. CXXXVIII, 16).
- **Tradução recebida:** “serão escritos Sl 138 Sl 16.”
- **Tradução aplicada:** “serão escritos (Sl 138,16).”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-15 · Homilia XXV · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 3
- **Texto latino:** (Matth. X, 22; XXIV, 13)
- **Tradução recebida:** “(Mt 10,22; 24, 13)”
- **Tradução aplicada:** “(Mt 10,22; 24,13)”
- **Justificativa linguística:** Espaço indevido depois da vírgula na segunda referência; forma usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-02 · Homilia XXV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 206
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 4
- **Texto latino:** Quaesivi illum, et non inveni (Ibid.).
- **Tradução recebida:** “Procurei-o e não o encontrei (ibid.)”
- **Tradução aplicada:** “Procurei-o e não o encontrei (Ct 3,1)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução ('ibid.' remete ao livro citado logo antes e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-03 · Homilia XXV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 206
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 4
- **Texto latino:** inveni quem diligit anima mea (Ibid., 3, 4).
- **Tradução recebida:** “(ibid., 3-4)”
- **Tradução aplicada:** “(Ct 3,3-4)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução ('ibid.' remete ao livro citado logo antes e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-04 · Homilia XXV · § 2

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 207
- **Localização no texto:** § 2 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 4
- **Texto latino:** Anima mea liquefacta est, ut dilectus locutus est (Ibid., V, 6).
- **Tradução recebida:** “(ibid., 5,6)”
- **Tradução aplicada:** “(Ct 5,6)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução ('ibid.' remete ao livro citado logo antes e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-06 · Homilia XXV · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 208
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 5
- **Texto latino:** Verbum caro factum est, et habitavit in nobis (Ibid., 14).
- **Tradução recebida:** “(ibid., 14)”
- **Tradução aplicada:** “(Jo 1,14)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução ('ibid.' remete ao livro citado logo antes e fica obscuro em português).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-08 · Homilia XXV · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 213 (no texto crítico não há referência; Migne tem 'Matth. XXVI, 76, seq.')
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 12
- **Texto latino:** An non in ore Petrum tenuit, cum negavit (Matth. XXVI, 76, seq.)?
- **Tradução recebida:** “quando negou Mt 26 Mt 76?”
- **Tradução aplicada:** “quando negou (Mt 26,69-75)?”
- **Justificativa linguística:** Referência desfigurada na tradução e errada em Migne: Mateus 26 tem 75 versículos, e a negação de Pedro está em 26,69-75 (a mesma homilia cita depois Mt 26,75).
- **Motivo:** Referência bíblica desfigurada e errada na edição de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G25-09 · Homilia XXV · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 213
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-25.txt`, bloco 12
- **Texto latino:** An non in ore David tenuit… (II Reg. XII, 4)?
- **Tradução recebida:** “(2Rs 12,4)”
- **Tradução aplicada:** “(2Sm 12,4)”
- **Justificativa linguística:** 'II Reg.' da Vulgata corresponde a 2 Samuel na numeração atual, usada nas demais referências da tradução; 2 Reis 12 trata de outro assunto. O pecado de Davi e a parábola de Natã estão em 2Sm 11–12.
- **Motivo:** Referência bíblica com o livro trocado.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-03 · Homilia XXVI · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 222, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 7
- **Texto latino:** Et plerumque contingit ut hunc iudicii locum teneat, cui ad locum uita minime concordat.
- **Tradução recebida:** “E muitas vezes acontece (11, q. 3, c. 88) que”
- **Tradução aplicada:** “E muitas vezes acontece que”
- **Justificativa linguística:** Remissões ao Decreto de Graciano (ex.: 'Causa 11, questão 3, cânon 88'), notas marginais da edição impressa que indicam onde o trecho foi usado no direito canônico medieval. Não pertencem ao texto de Gregório; a CCSL não as tem.
- **Motivo:** Acréscimo editorial que não pertence ao texto do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-04 · Homilia XXVI · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 222, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 7
- **Texto latino:** qui hanc pro suis uoluntatibus, et non pro subiectorum moribus exercet.
- **Tradução recebida:** “e não segundo os costumes dos súditos (Ibid., c. 60).”
- **Tradução aplicada:** “e não segundo os costumes dos súditos.”
- **Justificativa linguística:** Remissões ao Decreto de Graciano (ex.: 'Causa 11, questão 3, cânon 88'), notas marginais da edição impressa que indicam onde o trecho foi usado no direito canônico medieval. Não pertencem ao texto de Gregório; a CCSL não as tem.
- **Motivo:** Acréscimo editorial que não pertence ao texto do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-05 · Homilia XXVI · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 222, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 7
- **Texto latino:** qui in subditorum causis sua uel odia uel gratiam sequuntur.
- **Tradução recebida:** “seguem seus ódios ou seu favor (Ibid., c. 61).”
- **Tradução aplicada:** “seguem seus ódios ou seu favor.”
- **Justificativa linguística:** Remissões ao Decreto de Graciano (ex.: 'Causa 11, questão 3, cânon 88'), notas marginais da edição impressa que indicam onde o trecho foi usado no direito canônico medieval. Não pertencem ao texto de Gregório; a CCSL não as tem.
- **Motivo:** Acréscimo editorial que não pertence ao texto do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-06 · Homilia XXVI · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 222, § 6
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 8
- **Texto latino:** Tunc enim uera est absolutio praesidentis, cum interni arbitrium sequitur iudicis.
- **Tradução recebida:** “Pois então (Ibid., c. 62) é verdadeira”
- **Tradução aplicada:** “Pois então é verdadeira”
- **Justificativa linguística:** Remissões ao Decreto de Graciano (ex.: 'Causa 11, questão 3, cânon 88'), notas marginais da edição impressa que indicam onde o trecho foi usado no direito canônico medieval. Não pertencem ao texto de Gregório; a CCSL não as tem.
- **Motivo:** Acréscimo editorial que não pertence ao texto do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-07 · Homilia XXVI · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 223, § 6
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 8
- **Texto latino:** Soluite eum et sinite abire.
- **Tradução recebida:** “Desligai-o e deixai-o ir (Jo 11,45)”
- **Tradução aplicada:** “Desligai-o e deixai-o ir (Jo 11,44)”
- **Justificativa linguística:** A referência bíblica entre parênteses (nota editorial, não texto do autor) está errada: 'Desligai-o e deixai-o ir' é Jo 11,44. A CCSL, no aparato de fontes, também indica Jo 11,44.
- **Motivo:** Erro na referência bíblica acrescentada pela edição.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-14 · Homilia XXVI · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 12
- **Texto latino:** Absorbebit fluvium, et non mirabitur (Ibid.)
- **Tradução recebida:** “não se admirará (ibid.)”
- **Tradução aplicada:** “não se admirará (Jó 40,18)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G26-15 · Homilia XXVI · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 12
- **Texto latino:** Et habet fiduciam quod influat Jordanis in os ejus (Ibid.)
- **Tradução recebida:** “correrá para a boca (ibid.)”
- **Tradução aplicada:** “correrá para a boca (Jó 40,18)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-03 · Homilia XXVII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 234
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 6
- **Texto latino:** Mihi autem nimis honorificati sunt amici tui, Deus (Psal. CXXXVIII, 17).
- **Tradução recebida:** “ó Deus Sl 138 Sl 17.”
- **Tradução aplicada:** “ó Deus (Sl 138,17).”
- **Justificativa linguística:** Referência desfigurada na fonte portuguesa.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-04 · Homilia XXVII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 234
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 6
- **Texto latino:** Nimis confortatus est principatus eorum (Ibid.).
- **Tradução recebida:** “é a sua autoridade (ibid.)”
- **Tradução aplicada:** “é a sua autoridade (Sl 138,17)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G27-05 · Homilia XXVII · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 235
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-27.txt`, bloco 6
- **Texto latino:** Dinumerabo eos, et super arenam multiplicabuntur (Ibid., 18).
- **Tradução recebida:** “mais do que a areia (ibid., 18)”
- **Tradução aplicada:** “mais do que a areia (Sl 138,18)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G28-03 · Homilia XXVIII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 242
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-28.txt`, bloco 5
- **Texto latino:** Humiliatus sum, et liberavit me (Ibid.).
- **Tradução recebida:** “Ele me libertou” (ibid.)”
- **Tradução aplicada:** “Ele me libertou” (Sl 114,6)”
- **Justificativa linguística:** Referência no formato usado no resto da tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-13 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 3
- **Texto latino:** Videntibus illis, elevatus est, et nubes suscepit eum ab oculis eorum (Ibid., 9)
- **Tradução recebida:** “a seus olhos (ibid., 9)”
- **Tradução aplicada:** “a seus olhos (At 1,9)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-14 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 4
- **Texto latino:** (I Cor. XV, 36)
- **Tradução recebida:** “(I Cor. XV, 36)”
- **Tradução aplicada:** “(1Cor 15,36)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-15 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 4
- **Texto latino:** (Matth. X, 5)
- **Tradução recebida:** “(Mt. X, 5)”
- **Tradução aplicada:** “(Mt 10,5)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-01 · Homilia XXIX · § 3, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 247, § 3
- **Localização no texto:** § 3, fim — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 5
- **Texto latino:** ipse suo iudicio hoc quod errauimus abscondit.
- **Tradução recebida:** “aquilo em que erramos (32, q. 1, c. 10). Segue-se:”
- **Tradução aplicada:** “aquilo em que erramos. Segue-se:”
- **Justificativa linguística:** Remissão ao Decreto de Graciano (Causa 32, questão 1, cânon 10), nota marginal da edição impressa; não pertence ao texto de Gregório.
- **Motivo:** Acréscimo editorial que não pertence ao texto do autor.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-16 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 5
- **Texto latino:** (Tit. I, 16)
- **Tradução recebida:** “(Tit. I, 16)”
- **Tradução aplicada:** “(Tt 1,16)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-17 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 5
- **Texto latino:** (I Joan. II, 4)
- **Tradução recebida:** “(I Jo. II, 4)”
- **Tradução aplicada:** “(1Jo 2,4)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-18 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 6
- **Texto latino:** (I Cor. XIV, 22)
- **Tradução recebida:** “(I Cor. XIV, 22)”
- **Tradução aplicada:** “(1Cor 14,22)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-19 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 6
- **Texto latino:** (Matth. VII, 22, 23; Psal. VI, 9)
- **Tradução recebida:** “(Mt. VII, 22, 23; Sl. VI, 9)”
- **Tradução aplicada:** “(Mt 7,22-23; Sl 6,9)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-02 · Homilia XXIX · § 6

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 250, § 6
- **Localização no texto:** § 6 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 8
- **Texto latino:** Nam Enoch translatus, Elias uero ad caelum subuectus esse memoratur, ut ueniret postmodum qui nec translatus, nec subuectus, caelum aetherium sua uirtute penetraret.
- **Tradução recebida:** “mas de Elias que foi levado ao céu (IV Reg.”
- **Tradução aplicada:** “mas de Elias que foi levado ao céu (IV Reg.” (e o bloco é unido ao seguinte)
- **Justificativa linguística:** Na tradução recebida o parágrafo está partido no meio de uma frase e de uma referência bíblica ('(IV Reg.' / 'II, 11)'). A correção apenas une os dois pedaços; nenhuma palavra muda.
- **Motivo:** Problema de formatação da fonte.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-20 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 8
- **Texto latino:** (Gen. V, 24)
- **Tradução recebida:** “(Gn. V, 24)”
- **Tradução aplicada:** “(Gn 5,24)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-21 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 8
- **Texto latino:** (IV Reg. II, 11)
- **Tradução recebida:** “(IV Reg.”
- **Tradução aplicada:** “(2Rs 2,11),”
- **Justificativa linguística:** Referência na forma usada em toda a tradução. 'IV Reg.' da Vulgata corresponde ao Segundo Livro dos Reis das Bíblias atuais. A referência estava partida entre dois parágrafos na tradução recebida (ver G29-02, que os une).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-03 · Homilia XXIX · § 6 / § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 251, § 7
- **Localização no texto:** § 6 / § 7 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** 7. Considerandum uero nobis est quid est quod Marcus ait
- **Tradução recebida:** “sem ser gerado por união carnal. 7. Devemos ainda considerar”
- **Tradução aplicada:** “sem ser gerado por união carnal. ¶ Devemos ainda considerar”
- **Justificativa linguística:** A tradução recebida traz colados ao texto os números de parágrafo da edição e, num caso, o número '1573' (artefato do material de origem, como o '1468' da Homilia X), juntando quatro parágrafos da edição (§§ 7–10) em um só. A correção retira os números e separa os parágrafos; nenhuma palavra do texto muda.
- **Motivo:** Problema da fonte: numeração e parágrafos juntados.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-04 · Homilia XXIX · § 7 / § 8

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 251, § 8
- **Localização no texto:** § 7 / § 8 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** 8. Sequitur: Illi autem profecti praedicauerunt ubique
- **Tradução recebida:** “combatia por ele desde o céu. 1573 8. Segue-se:”
- **Tradução aplicada:** “combatia por ele desde o céu. ¶ Segue-se:”
- **Justificativa linguística:** A tradução recebida traz colados ao texto os números de parágrafo da edição e, num caso, o número '1573' (artefato do material de origem, como o '1468' da Homilia X), juntando quatro parágrafos da edição (§§ 7–10) em um só. A correção retira os números e separa os parágrafos; nenhuma palavra do texto muda.
- **Motivo:** Problema da fonte: artefato, numeração e parágrafos juntados.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-05 · Homilia XXIX · § 8 / § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 251, § 9
- **Localização no texto:** § 8 / § 9 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** 9. Hoc autem nobis primum quaerendum est
- **Tradução recebida:** “desta tão grande solenidade. 9. A primeira coisa”
- **Tradução aplicada:** “desta tão grande solenidade. ¶ A primeira coisa”
- **Justificativa linguística:** A tradução recebida traz colados ao texto os números de parágrafo da edição e, num caso, o número '1573' (artefato do material de origem, como o '1468' da Homilia X), juntando quatro parágrafos da edição (§§ 7–10) em um só. A correção retira os números e separa os parágrafos; nenhuma palavra do texto muda.
- **Motivo:** Problema da fonte: numeração e parágrafos juntados.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-06 · Homilia XXIX · § 9 / § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 252, § 10
- **Localização no texto:** § 9 / § 10 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** 10. Sed hoc nobis magnopere, fratres carissimi, in hac sollemnitate pensandum est
- **Tradução recebida:** “foi manifestado como homem sublime. 10. Mas isto”
- **Tradução aplicada:** “foi manifestado como homem sublime. ¶ Mas isto”
- **Justificativa linguística:** A tradução recebida traz colados ao texto os números de parágrafo da edição e, num caso, o número '1573' (artefato do material de origem, como o '1468' da Homilia X), juntando quatro parágrafos da edição (§§ 7–10) em um só. A correção retira os números e separa os parágrafos; nenhuma palavra do texto muda.
- **Motivo:** Problema da fonte: numeração e parágrafos juntados.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-07 · Homilia XXIX · § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 253, § 10
- **Localização no texto:** § 10 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** De hac iterum dicit: Ascendens in altum captiuam duxit captiuitatem, dedit dona hominibus.
- **Tradução recebida:** “deu dons aos homens Sl 67 Sl 19.”
- **Tradução aplicada:** “deu dons aos homens (Sl 67,19).”
- **Justificativa linguística:** A referência bíblica (nota editorial) está desfigurada na tradução recebida ('Sl 67 Sl 19'). A citação é do Sl 67(68),19, como indica a forma usada no restante do texto.
- **Motivo:** Referência bíblica desfigurada na fonte.
- **Grau de segurança:** alta · **estado:** aplicada

#### G29-22 · Homilia XXIX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** (IV Reg. II, 11), ut veniret postmodum…
- **Tradução recebida:** “II, 11), para”
- **Tradução aplicada:** “para”
- **Justificativa linguística:** Resto da referência partida (ver o item anterior, que a escreve por inteiro no parágrafo precedente).
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-15 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 3
- **Texto latino:** mandata ejus non custodit, mendax est (Ibid., 20)
- **Tradução recebida:** “é mentiroso (ibid., 20)”
- **Tradução aplicada:** “é mentiroso (1Jo 4,20)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-05 · Homilia XXX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 260, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** attestante Paulo: Deus noster ignis consumens est.
- **Tradução recebida:** “Nosso Deus é um fogo consumidor Hb 12 Hb 29.”
- **Tradução aplicada:** “Nosso Deus é um fogo consumidor (Hb 12,29).”
- **Justificativa linguística:** Referência bíblica (nota editorial) desfigurada na tradução recebida.
- **Motivo:** Referência bíblica desfigurada na fonte.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-16 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** Sed malitia parvuli estote (Ibid.)
- **Tradução recebida:** “pequeninos na malícia (ibid.)”
- **Tradução aplicada:** “pequeninos na malícia (1Cor 14,20)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-20 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 10
- **Texto latino:** (I Joan. I, 8)
- **Tradução recebida:** “(1 Jo 1,8)”
- **Tradução aplicada:** “(1Jo 1,8)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-17 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 11
- **Texto latino:** Et spiritu oris ejus omnis virtus eorum (Ibid.)
- **Tradução recebida:** “todo o poder deles (ibid.)”
- **Tradução aplicada:** “todo o poder deles (Sl 32,6)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-21 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 11
- **Texto latino:** (I Cor. XII, 8, seq.)
- **Tradução recebida:** “(1 Cor 12, 8ss.)”
- **Tradução aplicada:** “(1Cor 12,8ss)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-18 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 12
- **Texto latino:** non loqui (Ibid., IV, 9, 10)
- **Tradução recebida:** “(ibid. 4, 19-20)”
- **Tradução aplicada:** “(At 4,19-20)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa (At 4,19-20, como já trazia a tradução recebida; Migne imprime 'IV, 9, 10').
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-19 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 12
- **Texto latino:** pro nomine Jesu contumelias pati (Ibid., V, 41)
- **Tradução recebida:** “(ibid. 5, 41)”
- **Tradução aplicada:** “(At 5,41)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G30-22 · Homilia XXX · referência bíblica

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), referência (conferida com Migne)
- **Localização no texto:** referência bíblica — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 12
- **Texto latino:** (I Reg. XVI, 18)
- **Tradução recebida:** “(1 Sm 16, 18)”
- **Tradução aplicada:** “(1Sm 16,18)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-04 · Homilia XXXII · § 2, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 279, § 2
- **Localização no texto:** § 2, referência — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 5
- **Texto latino:** Vivit vero in me Christus (Ibid.).
- **Tradução recebida:** “Mas é Cristo que vive em mim (ibid.)”
- **Tradução aplicada:** “Mas é Cristo que vive em mim (Gl 2,20)”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-05 · Homilia XXXII · § 3, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 280, § 3
- **Localização no texto:** § 3, referência — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 6
- **Texto latino:** (I Cor IX, 27)
- **Tradução recebida:** “venha a ser reprovado (I Cor 9, 27)”
- **Tradução aplicada:** “venha a ser reprovado (1Cor 9,27)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-06 · Homilia XXXII · § 3, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 280, § 3
- **Localização no texto:** § 3, referência — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 6
- **Texto latino:** (II Cor. XI, 29.)
- **Tradução recebida:** “me abrase? (II Cor 11, 29.) De fato”
- **Tradução aplicada:** “me abrase? (2Cor 11,29). De fato”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-08 · Homilia XXXII · § 5, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 283, § 5
- **Localização no texto:** § 5, referência — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 9
- **Texto latino:** (II Cor. V, 20)
- **Tradução recebida:** “reconciliai-vos com Deus (II Cor 5, 20)”
- **Tradução aplicada:** “reconciliai-vos com Deus (2Cor 5,20)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G32-10 · Homilia XXXII · § 6, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 284, § 6
- **Localização no texto:** § 6, referência — `dados/homilias/gregorio-magno/recebida/homilia-32.txt`, bloco 10
- **Texto latino:** (Psal. CIV, 44, 45)
- **Tradução recebida:** “e observassem a sua lei Sl 104 Sl 44-45.”
- **Tradução aplicada:** “e observassem a sua lei (Sl 104,44-45).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida ('Sl 104 Sl 44-45'); restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-11 · Homilia XXXIII · § 6, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 294 (aparato de fontes: 'Ct 1'), § 6
- **Localização no texto:** § 6, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** Osculetur me osculo oris sui (Cant. I, 7).
- **Tradução recebida:** “Beije-me ele com o beijo de sua boca (Cant. I, 7).”
- **Tradução aplicada:** “Beije-me ele com o beijo de sua boca (Ct 1,1).”
- **Justificativa linguística:** O versículo 'Osculetur me osculo oris sui' é Ct 1,1 na Vulgata. A transcrição de Migne traz 'I, 7', referência errada que a tradução recebida copiou. Corrige-se o número e a forma da referência.
- **Motivo:** Referência bíblica errada na fonte de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-12 · Homilia XXXIII · § 6, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 294
- **Localização no texto:** § 6, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** Caput Christi, Deus (I Cor. XI, 3).
- **Tradução recebida:** “A cabeça de Cristo é Deus (I Cor. XI, 3).”
- **Tradução aplicada:** “A cabeça de Cristo é Deus (1Cor 11,3).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-15 · Homilia XXXIII · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 295
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** ubi pascas, ubi cubes in meridie (Cant. I, 6).
- **Tradução recebida:** “onde repousas ao meio-dia (Cant. I, 6).”
- **Tradução aplicada:** “onde repousas ao meio-dia (Ct 1,6).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-17 · Homilia XXXIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 296
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** lapidibus obruatur (Exod. XIX, 12; Lev. XX, seq.).
- **Tradução recebida:** “seja apedrejado (Exod. XIX, 12; Lev. XX, seq.).”
- **Tradução aplicada:** “seja apedrejado (Ex 19,12; Lv 20ss).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-19 · Homilia XXXIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 296
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** sustentabant manus ejus (Exod. XVII, 12).
- **Tradução recebida:** “sustentavam-lhe as mãos (Exod. XVII, 12).”
- **Tradução aplicada:** “sustentavam-lhe as mãos (Ex 17,12).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-20 · Homilia XXXIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 296
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** in vertice montium (Isai. II, 2)?
- **Tradução recebida:** “no cume dos montes (Isai. II, 2)?”
- **Tradução aplicada:** “no cume dos montes (Is 2,2)?”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-21 · Homilia XXXIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 297
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** ut convertatur et vival (Ezech. XXXIII, 11).
- **Tradução recebida:** “que se converta e viva (Ezech. XXXIII, 11).”
- **Tradução aplicada:** “que se converta e viva (Ez 33,11).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-22 · Homilia XXXIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 297
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** dicit Dominus (Jerem. III, 1).
- **Tradução recebida:** “diz o Senhor (Jerem. III, 1).”
- **Tradução aplicada:** “diz o Senhor (Jr 3,1).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G33-24 · Homilia XXXIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 297
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-33.txt`, bloco 9
- **Texto latino:** Quid feci? (Jerem. VIII, 6.)
- **Tradução recebida:** “Que fiz eu? (Jerem. VIII, 6.) Certamente”
- **Tradução aplicada:** “Que fiz eu? (Jr 8,6). Certamente”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-04 · Homilia XXXIV · § 2, nota de Migne

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 300, § 2 (sem a nota)
- **Localização no texto:** § 2, nota de Migne — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 5
- **Texto latino:** vera justitia compassionem habet (Dist. 45, c. 15), falsa justitia dedignationem
- **Tradução recebida:** “a verdadeira justiça tem compaixão (Dist. 45, c. 15), a falsa justiça”
- **Tradução aplicada:** “a verdadeira justiça tem compaixão, a falsa justiça”
- **Justificativa linguística:** Nota editorial de Migne que remete ao Decreto de Graciano, onde este passo de Gregório foi reproduzido. Não pertence ao texto da homilia (não está na CCSL 141) e, no meio da frase, passava por referência de fonte. A tradução recebida omite as notas desse tipo nas demais homilias (XXI, XXII, XXIV, XXIX); retira-se também aqui, ficando a nota registrada neste item.
- **Motivo:** Nota editorial que não pertence ao texto; uniformidade com as demais homilias.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-06 · Homilia XXXIV · § 2, nota de Migne

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 300, § 2 (sem a nota)
- **Localização no texto:** § 2, nota de Migne — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 5
- **Texto latino:** hi qui de falsa justitia superbire solent (Ibid.), caeteros quosque despiciunt
- **Tradução recebida:** “por uma falsa justiça (Ibid.) desprezam”
- **Tradução aplicada:** “por uma falsa justiça desprezam”
- **Justificativa linguística:** Segunda nota de Migne ao mesmo cânone do Decreto de Graciano (D. 45, c. 15). Na tradução, o '(Ibid.)' passava por referência bíblica. Não pertence ao texto da homilia (não está na CCSL 141) e, no meio da frase, passava por referência de fonte. A tradução recebida omite as notas desse tipo nas demais homilias (XXI, XXII, XXIV, XXIX); retira-se também aqui, ficando a nota registrada neste item.
- **Motivo:** Nota editorial que não pertence ao texto; uniformidade com as demais homilias.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-09 · Homilia XXXIV · § 6, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 304
- **Localização no texto:** § 6, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 9
- **Texto latino:** Exaruit velut testa virtus mea (Psal. XXI, 16).
- **Tradução recebida:** “secou como barro cozido Sl 21 Sl 16.”
- **Tradução aplicada:** “secou como barro cozido (Sl 21,16).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-12 · Homilia XXXIV · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 306
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** sapphirus, carbunculus, et smaragdus (Ibid., 13).
- **Tradução recebida:** “carbúnculo e esmeralda (ibid., 13).”
- **Tradução aplicada:** “carbúnculo e esmeralda (Ez 28,13).”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-17 · Homilia XXXIV · § 9, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 307
- **Localização no texto:** § 9, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** Dominus potens in praelio (Psal. XXIII, 9, 10).
- **Tradução recebida:** “o Senhor poderoso na batalha Sl 23 Sl 9-10.”
- **Tradução aplicada:** “o Senhor poderoso na batalha (Sl 23,9-10).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-18 · Homilia XXXIV · § 9, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 307
- **Localização no texto:** § 9, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 10
- **Texto latino:** Dominus virtutum ipse est Rex gloriae (Ibid.).
- **Tradução recebida:** “ele é o Rei da glória (ibid.).”
- **Tradução aplicada:** “ele é o Rei da glória (Sl 23,10).”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-24 · Homilia XXXIV · § 15, nota de Migne

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 314, § 15 (sem a nota)
- **Localização no texto:** § 15, nota de Migne — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 15
- **Texto latino:** nosque ad se recipere per poenitentiam quaerit (De poenit., dist. 3, cap. Poenitentiam).
- **Tradução recebida:** “receber-nos de volta a si pela penitência (De poenit., dist. 3, cap. Poenitentiam).”
- **Tradução aplicada:** “receber-nos de volta a si pela penitência.”
- **Justificativa linguística:** Nota editorial de Migne que remete ao Decreto de Graciano (De paenitentia, D. 3, c. 'Poenitentiam'), onde este passo foi reproduzido. Não pertence ao texto da homilia (não está na CCSL 141) e, no meio da frase, passava por referência de fonte. A tradução recebida omite as notas desse tipo nas demais homilias (XXI, XXII, XXIV, XXIX); retira-se também aqui, ficando a nota registrada neste item.
- **Motivo:** Nota editorial que não pertence ao texto; uniformidade com as demais homilias.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-26 · Homilia XXXIV · § 16, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 315
- **Localização no texto:** § 16, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 16
- **Texto latino:** alienam conjugem et concupivit et abstulit (II Reg. XI, 4).
- **Tradução recebida:** “tomou a esposa de outro (2Rs 11,4).”
- **Tradução aplicada:** “tomou a esposa de outro (2Sm 11,4).”
- **Justificativa linguística:** Na Vulgata, 'II Reg.' (Segundo Livro dos Reis) corresponde ao Segundo Livro de Samuel das Bíblias atuais. A tradução recebida converteu a abreviatura em '2Rs', que hoje designa outro livro.
- **Motivo:** Referência bíblica errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-27 · Homilia XXXIV · § 16, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 315
- **Localização no texto:** § 16, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 16
- **Texto latino:** aquam bibere de Bethlehemitica cisterna ex desiderio voluit (II Reg. XXIII, 14, seq.).
- **Tradução recebida:** “água da cisterna de Belém (2Rs 23,14s).”
- **Tradução aplicada:** “água da cisterna de Belém (2Sm 23,14s).”
- **Justificativa linguística:** Na Vulgata, 'II Reg.' (Segundo Livro dos Reis) corresponde ao Segundo Livro de Samuel das Bíblias atuais. A tradução recebida converteu a abreviatura em '2Rs', que hoje designa outro livro.
- **Motivo:** Referência bíblica errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G34-28 · Homilia XXXIV · § 16, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 315
- **Localização no texto:** § 16, referência — `dados/homilias/gregorio-magno/recebida/homilia-34.txt`, bloco 16
- **Texto latino:** Libavit eam Domino (II Reg. XXIII, 17; I Par. XI, 18).
- **Tradução recebida:** “Derramou-a ao Senhor (2Rs 23,17; 1Cr 11,18).”
- **Tradução aplicada:** “Derramou-a ao Senhor (2Sm 23,17; 1Cr 11,18).”
- **Justificativa linguística:** Na Vulgata, 'II Reg.' (Segundo Livro dos Reis) corresponde ao Segundo Livro de Samuel das Bíblias atuais. A tradução recebida converteu a abreviatura em '2Rs', que hoje designa outro livro.
- **Motivo:** Referência bíblica errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-02 · Homilia XXXV · § 3, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 324
- **Localização no texto:** § 3, referência — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 5
- **Texto latino:** in domo Dei ambulavimus cum consensu (Psal. LIV, 13, seq.).
- **Tradução recebida:** “andávamos em concórdia na casa de Deus Sl 54 Sl 13.”
- **Tradução aplicada:** “andávamos em concórdia na casa de Deus (Sl 54,13ss).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G35-04 · Homilia XXXV · § 7, referência partida entre dois parágrafos

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXV
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 327, § 7
- **Localização no texto:** § 7, referência partida entre dois parágrafos — `dados/homilias/gregorio-magno/recebida/homilia-35.txt`, bloco 9
- **Texto latino:** Potestis bibere calicem quem ego bibiturus sum? (Matth. XX, 22.)
- **Tradução recebida:** “que Eu hei de beber? (Mt”
- **Tradução aplicada:** “que Eu hei de beber? (Mt 20,22).” (e o bloco é unido ao seguinte)
- **Justificativa linguística:** Na tradução recebida o § 7 está partido no meio da referência bíblica ('(Mt' / 'XX, 22.)'). Os dois pedaços são unidos (não há divisão de parágrafo em Migne neste ponto) e a referência é escrita na forma usada em toda a tradução.
- **Motivo:** Parágrafo partido na origem; uniformidade da referência.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-02 · Homilia XXXVI · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 337
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** (Luc. XV, 17.)
- **Tradução recebida:** “têm pão em abundância? (Lc 15,17.) De fato”
- **Tradução aplicada:** “têm pão em abundância? (Lc 15,17). De fato”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-03 · Homilia XXXVI · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 338
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 9
- **Texto latino:** Amalecitarum puer ille Aegyptius designat (I Reg. XXX, 11, seq.)
- **Tradução recebida:** “dos amalecitas (1 Rs 30, 11ss.),”
- **Tradução aplicada:** “dos amalecitas (1Sm 30,11ss),”
- **Justificativa linguística:** Na Vulgata, 'I Reg.' (Primeiro Livro dos Reis) corresponde ao Primeiro Livro de Samuel das Bíblias atuais; o episódio do jovem egípcio está em 1Sm 30,11ss. A tradução recebida trazia '1 Rs', que hoje designa outro livro.
- **Motivo:** Referência bíblica errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-09 · Homilia XXXVI · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 339
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 10
- **Texto latino:** quoniam venit (Psal. XCV, 13).
- **Tradução recebida:** “porque Ele vem Sl 95 Sl 13.”
- **Tradução aplicada:** “porque Ele vem (Sl 95,13).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-10 · Homilia XXXVI · § 10, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 341
- **Localização no texto:** § 10, referência — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** Amen amen dico vobis, nescio vos (Ibid.).
- **Tradução recebida:** “não vos conheço (Ibidem).”
- **Tradução aplicada:** “não vos conheço (Mt 25,12).”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-14 · Homilia XXXVI · § 12, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 343
- **Localização no texto:** § 12, referência — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** praeterit enim figura hujus mundi (I Cor. VII, 29, seq.).
- **Tradução recebida:** “passa a figura deste mundo (I Cor. VII, 29 e segs.).”
- **Tradução aplicada:** “passa a figura deste mundo (1Cor 7,29ss).”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G36-15 · Homilia XXXVI · § 12, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 344
- **Localização no texto:** § 12, referência — `dados/homilias/gregorio-magno/recebida/homilia-36.txt`, bloco 13
- **Texto latino:** quomodo placeat uxori (Ibid., 33)
- **Tradução recebida:** “de como agradar à esposa (Ibidem, 33),”
- **Tradução aplicada:** “de como agradar à esposa (1Cor 7,33),”
- **Justificativa linguística:** 'Ibid.' substituído pela referência completa, conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-04 · Homilia XXXVII · § 4, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 350
- **Localização no texto:** § 4, referência — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 7
- **Texto latino:** neque ad dexteram, neque ad sinistram (I Reg. VI, 12).
- **Tradução recebida:** “nem para a direita nem para a esquerda (1Rs 6,12).”
- **Tradução aplicada:** “nem para a direita nem para a esquerda (1Sm 6,12).”
- **Justificativa linguística:** Na Vulgata, 'I Reg.' (Primeiro Livro dos Reis) corresponde ao Primeiro Livro de Samuel das Bíblias atuais; o retorno da arca a Betsames está em 1Sm 6,12. A tradução recebida trazia '1Rs', que hoje designa outro livro.
- **Motivo:** Referência bíblica errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G37-05 · Homilia XXXVII · § 4, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 350
- **Localização no texto:** § 4, referência — `dados/homilias/gregorio-magno/recebida/homilia-37.txt`, bloco 7
- **Texto latino:** orietur sol justitiae (Malach. IV, 2).
- **Tradução recebida:** “nascerá o sol da justiça Ml 4 Ml 2.”
- **Tradução aplicada:** “nascerá o sol da justiça (Ml 4,2).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne (Ml 4,2 na numeração da Vulgata, como as demais referências da tradução; Ml 3,20 nas Bíblias que seguem o hebraico).
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-06 · Homilia XXXVIII · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 365 (aparato de fontes: 'Cf. Gn 4, 1-')
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 10
- **Texto latino:** alter reprobus fuit (Genes. I, 1, seq.)
- **Tradução recebida:** “o outro foi réprobo (Gn 1,1 e segs.).”
- **Tradução aplicada:** “o outro foi réprobo (Gn 4,1ss).”
- **Justificativa linguística:** Os dois filhos do primeiro homem, um eleito e outro réprobo, são Abel e Caim, cuja história está em Gn 4. A referência de Migne ('Genes. I, 1'), copiada pela tradução, não corresponde ao episódio; o aparato de fontes da CCSL remete a Gn 4.
- **Motivo:** Referência bíblica errada na fonte de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-07 · Homilia XXXVIII · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 365 (aparato de fontes: 'Cf. Gn 6, 10; 9, 18-27')
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 10
- **Texto latino:** et unus reprobus fuit (Ibid., VI, 7)
- **Tradução recebida:** “e um foi réprobo (ibid., 6, 7).”
- **Tradução aplicada:** “e um foi réprobo (Gn 6,10; 9,18-27).”
- **Justificativa linguística:** Os três filhos de Noé estão nomeados em Gn 6,10, e a reprovação de Cam em Gn 9,18-27, como indica o aparato de fontes da CCSL. A referência de Migne ('VI, 7'), copiada pela tradução, remete à decisão de Deus de destruir os homens, que não é o ponto citado.
- **Motivo:** Referência bíblica errada na fonte de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-08 · Homilia XXXVIII · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 365 (aparato: 'Cf. Gn 21, 1-21')
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 10
- **Texto latino:** (Ibid., XXI, 10, seq.)
- **Tradução recebida:** “o outro foi réprobo (ibid., 21, 10 e segs.).”
- **Tradução aplicada:** “o outro foi réprobo (Gn 21,10ss).”
- **Justificativa linguística:** Referência a Gênesis restituída por extenso no lugar de 'ibid.', conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-09 · Homilia XXXVIII · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 366 (aparato: 'Cf. Gn 27, 27-37')
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 10
- **Texto latino:** (Ibid., XXVII, 37)
- **Tradução recebida:** “o outro réprobo (ibid., 27, 37).”
- **Tradução aplicada:** “o outro réprobo (Gn 27,37).”
- **Justificativa linguística:** Referência a Gênesis restituída por extenso no lugar de 'ibid.', conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-10 · Homilia XXXVIII · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 366 (aparato: 'Cf. Gn 37, 27-28')
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 10
- **Texto latino:** (Ibid., XXXVII, 28)
- **Tradução recebida:** “vendedores do próprio irmão (ibid., 37, 28).”
- **Tradução aplicada:** “vendedores do próprio irmão (Gn 37,28).”
- **Justificativa linguística:** Referência a Gênesis restituída por extenso no lugar de 'ibid.', conforme o critério adotado nas demais homilias.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-12 · Homilia XXXVIII · § 8, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 367 (aparato de fontes: 'Ps 101, 8')
- **Localização no texto:** § 8, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 11
- **Texto latino:** Factus est sicut passer unicus in aedificio (Psal. CI, 1).
- **Tradução recebida:** “como o pardal solitário no telhado (Sl 101,1).”
- **Tradução aplicada:** “como o pardal solitário no telhado (Sl 101,8).”
- **Justificativa linguística:** O versículo do pardal solitário é Sl 101,8 na Vulgata, como indica o aparato de fontes da CCSL; a referência de Migne ('CI, 1'), copiada pela tradução, aponta para o título do salmo.
- **Motivo:** Referência bíblica errada na fonte de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G38-13 · Homilia XXXVIII · § 12, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXVIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 372
- **Localização no texto:** § 12, referência — `dados/homilias/gregorio-magno/recebida/homilia-38.txt`, bloco 16
- **Texto latino:** et in libro tuo omnes scribentur (Psal. CXXXVIII, 16).
- **Tradução recebida:** “e no teu livro todos serão escritos Sl 138,16.”
- **Tradução aplicada:** “e no teu livro todos serão escritos (Sl 138,16).”
- **Justificativa linguística:** Referência sem parênteses e solta no fim da citação; posta na forma usada em toda a tradução.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G39-05 · Homilia XXXIX · § 7, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 387
- **Localização no texto:** § 7, referência — `dados/homilias/gregorio-magno/recebida/homilia-39.txt`, bloco 10
- **Texto latino:** et in aeternum non peccabis (Eccli. VII, 40).
- **Tradução recebida:** “e jamais pecarás Eclo 7 Eclo 40.”
- **Tradução aplicada:** “e jamais pecarás (Eclo 7,40).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-01 · Homilia XL · § 2, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 395
- **Localização no texto:** § 2, referência — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 4
- **Texto latino:** Lingua canum tuorum ex inimicis ab ipso (Psal. LXVII, 24).
- **Tradução recebida:** “da parte dele mesmo Sl 67 Sl 24.”
- **Tradução aplicada:** “da parte dele mesmo (Sl 67,24).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-02 · Homilia XL · § 2, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 397
- **Localização no texto:** § 2, referência — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 4
- **Texto latino:** Mihi autem adhaerere Deo bonum est (Psal. LXXII, 28).
- **Tradução recebida:** “aderir a Deus é o bem Sl 72 Sl 28.”
- **Tradução aplicada:** “aderir a Deus é o bem (Sl 72,28).”
- **Justificativa linguística:** Referência desfigurada na tradução recebida; restituída a partir de Migne.
- **Motivo:** Referência bíblica desfigurada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-03 · Homilia XL · § 3, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 398 (aparato de fontes: 'Cf. Ex 22, 1; II Sm 12, 6')
- **Localização no texto:** § 3, referência — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 5
- **Texto latino:** In illo enim non tenacia, sed rapina multatur (II Reg. XII, 6).
- **Tradução recebida:** “mas o roubo (2Rs 12,6).”
- **Tradução aplicada:** “mas o roubo (2Sm 12,6).”
- **Justificativa linguística:** Na Vulgata, 'II Reg.' corresponde ao Segundo Livro de Samuel das Bíblias atuais (2Sm 12,6: a restituição quádrupla na parábola de Natã). A tradução recebida trazia '2Rs', que hoje designa outro livro.
- **Motivo:** Referência bíblica errada.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-04 · Homilia XL · § 3, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 398 (aparato de fontes: 'Cf. Ex 22, 1; II Sm 12, 6')
- **Localização no texto:** § 3, referência — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 5
- **Texto latino:** Ibi res injuste sublata restitutione quadrupli punitur (Matth. XIX, 8).
- **Tradução recebida:** “com restituição quádrupla (Mt 19,8).”
- **Tradução aplicada:** “com restituição quádrupla (Ex 22,1).”
- **Justificativa linguística:** A frase fala da Lei antiga ('ibi'), que manda restituir o quádruplo do que foi roubado (Ex 22,1), como indica o aparato de fontes da CCSL. A referência de Migne ('Matth. XIX, 8'), copiada pela tradução, remete a um versículo sobre o divórcio, sem relação com o passo.
- **Motivo:** Referência bíblica errada na fonte de base.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-19 · Homilia XL · § 12, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 410
- **Localização no texto:** § 12, referência — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 16
- **Texto latino:** (II Cor. VIII, 14)
- **Tradução recebida:** “(II Cor. VIII, 14)”
- **Tradução aplicada:** “(2Cor 8,14)”
- **Justificativa linguística:** Referência na forma abreviada usada em toda a tradução.
- **Motivo:** Uniformidade das referências bíblicas.
- **Grau de segurança:** alta · **estado:** aplicada

#### G40-20 · Homilia XL · § 12, referência

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XL
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 410
- **Localização no texto:** § 12, referência — `dados/homilias/gregorio-magno/recebida/homilia-40.txt`, bloco 16
- **Texto latino:** Quandiu fecistis uni de his fratribus meis minimis, mihi fecistis (Matth. XXV, 45).
- **Tradução recebida:** “(Mt 25,45)”
- **Tradução aplicada:** “(Mt 25,40)”
- **Justificativa linguística:** As palavras citadas ('Quandiu fecistis… mihi fecistis') são de Mt 25,40; o v. 45 é a forma negativa ('non fecistis… nec mihi fecistis'). A referência de Migne foi copiada pela tradução; na Homilia XXXIX a mesma citação já está referida como Mt 25,40.
- **Motivo:** Referência bíblica errada na fonte de base.
- **Grau de segurança:** alta · **estado:** aplicada

## 2. Alterações sugeridas, mas não aplicadas

Cada uma traz a decisão do responsável (relatório final da Etapa 1, 06/11/2026).

#### G07-04 · Homilia VII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 50, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-07.txt`, bloco 6
- **Texto latino:** Vnde etiam per prophetam dicit: In Idumaeam extendam calceamentum meum. Per Idumaeam quippe gentilitas … In Idumaeam ergo Dominus …
- **Tradução recebida:** “Sobre Edom estenderei a minha sandália (Sl 59,10)”
- **Tradução proposta:** “Sobre a Idumeia estenderei a minha sandália (Sl 59,10)”
- **Justificativa linguística:** Gregório usa o nome latino 'Idumaea' (Idumeia), três vezes no trecho; a tradução moderniza para 'Edom'. As duas designações indicam a mesma região, e não há erro de sentido.
- **Motivo:** Atualização de um nome antigo. Fica para sua decisão (seriam três ocorrências).
- **Decisão do responsável (06/11/2026):** manter a tradução recebida. Recomendação aprovada no item C6.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G19-04 · Homilia XIX · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 147, § 3 (igual a Migne)
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-19.txt`, bloco 5
- **Texto latino:** qui Deum in cruce confessus est, et pene cum voce sententiae spiritum exhalavit vitae
- **Tradução recebida:** “e quase ao mesmo tempo em que proferiu a sentença de vida exalou o espírito”
- **Tradução proposta:** “e quase à própria voz da sentença exalou o espírito de vida”
- **Justificativa linguística:** A ordem latina favorece 'spiritum… vitae' (o sopro de vida) e 'vox sententiae' como a sentença ouvida da boca de Cristo, mas a construção é condensada e admite as duas leituras.
- **Motivo:** Construção ambígua; não aplicado.
- **Decisão do responsável (06/11/2026):** manter a tradução recebida. Recomendação aprovada no item C6.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G29-09 · Homilia XXIX · § 9

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 252, § 9, aparato às l. 193-194
- **Localização no texto:** § 9 — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** Quia nascente Domino uidebatur diuinitas humiliata, ascendente uero est Domino humanitas exaltata. (aparato: 'domino est humanitas'; 'domino humanitas' sem 'est' em E e Ba p.c.; 'domino humanitas est' em T M)
- **Tradução recebida:** “ao subir o Senhor, porém, vê-se a humanidade exaltada.”
- **Tradução proposta:** “ao subir o Senhor, porém, a humanidade foi exaltada.”
- **Justificativa linguística:** No texto crítico há um contraste deliberado: 'uidebatur' (parecia) para a divindade humilhada e 'est … exaltata' (foi exaltada) para a humanidade. A tradução estende 'parecia/via-se' às duas. Mas dois manuscritos omitem 'est', e então 'uidebatur' pode valer para as duas orações, como na tradução.
- **Justificativa teológica ou contextual:** O contraste tem peso doutrinal: a divindade não pode ser realmente humilhada (apenas 'parecia'), mas a humanidade de Cristo foi realmente exaltada na Ascensão.
- **Motivo:** Correção sustentada pelo texto crítico, mas há variante que apoia a tradução. Fica para sua decisão.
- **Decisão do responsável (06/11/2026):** manter a tradução recebida. Recomendação aprovada no item C6.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G30-04 · Homilia XXX · § 3, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 259, § 3
- **Localização no texto:** § 3, fim — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 6
- **Texto latino:** Sed quia suggerere aliquando dicimus subministrare, inuisibilis Spiritus suggerere dicitur, non quod nobis scientiam ab imo inferat, sed ab occulto.
- **Tradução recebida:** “no sentido de trazer à mente”
- **Tradução proposta:** “no sentido de fornecer”
- **Justificativa linguística:** 'subministrare' é fornecer, prover (por baixo, às ocultas); é esse sentido que justifica o fim da frase ('não … desde baixo, mas desde o oculto'). A dificuldade vem de a tradução verter 'suggerere' por 'recordar' em toda a homilia, o que torna o jogo de palavras de Gregório difícil de reproduzir.
- **Motivo:** Perda de um jogo de palavras do autor; solução depende de rever a tradução de 'suggerere'. Fica para sua decisão.
- **Decisão do responsável (06/11/2026):** manter a tradução recebida. Recomendação aprovada no item C6. Sem revisão geral de 'suggerere' nesta etapa.
- **Grau de segurança:** moderada · **estado:** não aplicada

## 3. Dúvidas

Dúvidas de sentido que as fontes não resolvem, com a decisão tomada. Uma decisão marcada como provisória mantém a dúvida em aberto.

#### G05-08 · Homilia V · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 36, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 7
- **Texto latino:** Ostendat nostrae obsequium deuotionis immutatae sollemnitas mentis.
- **Tradução recebida:** “Que a solenidade mostre, em nosso serviço de devoção, uma mente transformada”
- **Justificativa linguística:** A frase admite duas construções: (a) sujeito 'obsequium nostrae deuotionis', objeto 'sollemnitas immutatae mentis' — 'Que o obséquio da nossa devoção mostre a solenidade de uma mente transformada'; (b) sujeito 'sollemnitas', objeto 'obsequium' — 'Que a solenidade mostre o obséquio da nossa devoção, (próprio) de uma mente transformada'. A tradução recebida segue, com liberdade, a leitura (b).
- **Motivo:** Ambiguidade sintática real; não há base para escolher. Tradução recebida mantida; dúvida registrada.
- **Decisão do responsável (06/11/2026):** manter a tradução recebida. A sintaxe admite as duas leituras; não há segurança para alterar.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G20-14 · Homilia XX · § 12, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 164, § 12 (igual a Migne)
- **Localização no texto:** § 12, início — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 14
- **Texto latino:** Ut autem quanta esset virtus in continentia et susceptione indigentium Redemptor noster ostenderet
- **Tradução recebida:** “quão grande era a força da continência e do acolhimento dos necessitados”
- **Justificativa linguística:** As duas edições têm 'continentia'. O contexto fala só de sustentar e acolher os necessitados, o que favorece o sentido de 'manutenção'; mas não há paralelo seguro em Gregório para essa acepção.
- **Motivo:** Duas leituras plausíveis; texto mantido.
- **Decisão do responsável (06/11/2026):** manter 'continência' por enquanto (provisória). Dúvida mantida no registro para eventual comparação com outras obras de Gregório (Moralia, Regula pastoralis).
- **Grau de segurança:** baixa · **estado:** não aplicada

## 4. Variantes textuais (diferenças de edição; texto mantido)

Em cada caso abaixo, o português não segue o texto crítico, mas segue uma leitura atestada nos manuscritos ou na edição impressa. Nada foi alterado.

| Registro | Homilia | Tradução recebida | Latim crítico e aparato |
|---|---|---|---|
| G05-09 | V | lançando a rede ao mar | mittentes retia sua in mare (aparato: 'rete' em E L) |
| G05-05 | V | anuncia a proximidade do dia do seu severo juízo | districti sui iudicii propinquitatem denuntiat (aparato: 'diem propinquantem' em S J N M) |
| G05-06 | V | se renunciais aos desejos terrenos | Multa, fratres, relinquitis, si desideriis renuntiatis (aparato: 'desideriis' + 'terrenis' em J S M L R p.c.) |
| G05-07 | V | seja um dia conduzida a desprezar as próprias, com a ajuda de nosso Senhor Jesus Cristo, etc. | quandoque ad propria contemnenda perducatur (aparato: + 'praestante domino nostro' em F V) |
| G06-04 | VI | Na medida em que conseguimos resistir à língua | Inquantum reniti linguae praevalemus (Migne) |
| G07-03 | VII | no quarto domingo do Advento do Senhor | Homilia lectionis eiusdem habita ad populum in basilica beati Petri apostoli. (sem indicação do domingo) |
| G07-02 | VII | anuncia o consolo do Redentor à Judeia abandonada e desamparada | derelictae ac destitutae Iudaeae solacium (suae: α) redemptionis annuntiat (aparato: 'redemptoris' em F V N M) |
| G08-03 | VIII | juntou-se ao anjo uma multidão da milícia do exército celeste | Migne (transcrição, camada latim/): 'facta est cum angelo multitudo militiae coelestis exercitus'; CCSL 141, p. 53: 'multitudo militiae caelestis', com 'exercitus' só no manuscrito E (aparato). |
| G08-09 | VIII | porque não havia lugar para eles na hospedaria | quia non erat ei locus in diuersorio |
| G08-06 | VIII | que a ambição não nos dilacere por meio dos deleites terrenos, que a ira não nos inflame | non ambitio per terrena oblectamenta dilaniet. (aparato: + 'non ira inflammet' em M p.c.) |
| G08-07 | VIII | porque por ti Deus se fez homem, Ele que vive e reina pelos séculos dos séculos. Amém. | quia propter te factus est Deus homo. (aparato: doxologias acrescentadas em S e V) |
| G08-08 | VIII | antes que o nosso Redentor nascesse na carne | Prius quippe quam Redemptor noster per carnem (in carne: α) nasceretur … Hinc est enim quod Loth uel Iosue angelos adorant (β; α: Gedeon angelum adorat) … angelis (aparato: + 'eius' em M p.c.) aequales sumus |
| G10-05 | X | no dia da Epifania | habita ad populum in basilica beati Petri apostoli die sancto theophaniae (aparato: 'epiphaniae' em N J M; 'die theophaniae' em R) |
| G10-06 | X | irmãos caríssimos | Sicut ex lectione euangelica, fratres, audistis (aparato: + 'karissimi' em F V M p.c.) |
| G10-07 | X | Por isso também se diz por Paulo: As profecias foram dadas aos fiéis | α: Vnde etiam per Paulum dicitur: Prophetiae fidelibus non infidelibus, signa autem infidelibus non fidelibus. — β: Quia et illis prophetiae tamquam fidelibus non infidelibus, et istis signa tamquam infidelibus non fidelibus data sunt. |
| G10-08 | X | por graça de nosso Senhor, etc. | ad eam malis amaricati redeamus. (aparato: + 'praestante domino nostro I. C. …' em vários manuscritos) |
| G16-06 | XVI | no primeiro domingo da Quaresma | Homilia lectionis eiusdem habita ad populum in basilica sancti Iohannis quae appellatur constantiniana. (sem indicação do domingo) |
| G21-07 | XXI | E, levantando os olhos, viram a pedra revolvida. Com efeito, era muito grande. | Quis reuoluit nobis lapidem ab ostio monumenti? Erat enim magnus ualde. Et respicientes uiderunt reuolutum lapidem. |
| G21-04 | XXI | avançam para o Senhor | ad Deum per sancta desideria proficiscuntur (aparato: 'dominum' em V L X) |
| G21-05 | XXI | Por isso está escrito no Cântico dos Cânticos | Vnde scriptum est: Laeua eius … (aparato: + 'in canticis canticorum' em F e Ba) |
| G26-09 | XXVI | na oitava da Páscoa | Homilia lectionis eiusdem habita ad populum in basilica beati Iohannis quae appellatur constantiniana. (sem indicação do dia) |
| G26-10 | XXVI | fortalecesse para a fé | praebendo palpabile, formaret ad fidem (aparato: 'firmaret' em S) |
| G26-08 | XXVI | Isto é: assim como o Pai, Deus, enviou a mim, Deus, também eu vos envio, homem, a vós, homens. | Migne (PL 76, col. 1553-1554), § 2: 'Dixit eis: Pax vobis. Sicut misit me Pater, et ego mitto vos. Id est, sicut misit me Pater Deus Deum, et ego mitto vos homo homines. Pater Filium misit…'. A CCSL 141 (p. 219, § 2) não tem a frase 'Id est… homo homines', e o aparato não a registra em nenhum manuscrito. |
| G26-11 | XXVI | Jesus lhe disse: Porque me viste, Tomé, creste. | Dicit ei Iesus: Quia uidisti me, credidisti. |
| G26-12 | XXVI | Ele aparecerá com os seus, com os anjos | Migne (PL 76, col. 1558 da tiragem de 1849; conferido na imagem da página do PDF de Migne): 'Certe in die tremendi examinis suis, cum angelis, cum archangelis…'; CCSL 141, p. 226: 'in die tremendi examinis sui, cum angelis…'. |
| G29-10 | XXIX | Naquele tempo, estando à mesa os onze discípulos, Jesus apareceu-lhes e censurou a sua incredulidade | In illo tempore dixit Iesus discipulis suis: Euntes in uniuersum mundum … (o texto crítico começa em Mc 16,15; o aparato registra em E p.c., F p.c. e X o acréscimo do v. 14: 'recumbentibus undecim discipulis apparuit illis Iesus et exprobrauit incredulitatem illorum…') |
| G30-13 | XXX | porque em sua própria vontade se opõe a Ele | quia ei in sua uoluptate contradicit (aparato: 'uoluntate' em E B S F V A X) |
| G30-12 | XXX | Naquela, Deus, permanecendo em si mesmo, assumiu o homem | In illa quippe Deus in se creando suscepit hominem (aparato: 'permanens … semetipsum creauit' em J, L p.c., X, M p.c.) |
| G33-18 | XXXIII | Apareceu em carne nosso Criador e Redentor, | Apparuit conditor et Redemptor noster in carne |
| G35-09 | XXXV | Não será esquecido para sempre o pobre; | Non in finem oblivio erit pauperis (Psal. IX, 19). |

## 5. Problemas encontrados nas fontes

- **Tradução portuguesa sem tradutor identificado:** o arquivo não traz tradutor, edição nem licença. Foi obtido no portal OpenSaints, que declara na página de introdução aos textos adicionais dos Padres da Igreja: https://opensaints.com/pt-BR/padres-da-igreja/: “Anyone may do anything they wish with any part of this material, whether for private, educational or commercial purposes.” Também declara que os prefácios adicionais produzidos pelo responsável do projeto OpenSaints são disponibilizados em domínio público. Alcance: não se estende automaticamente a materiais de terceiros apenas hospedados ou referenciados pelo site. Verificação: informado pelo responsável deste projeto no relatório editorial de 06/11/2026; as páginas não puderam ser abertas na sessão que registrou esta informação (restrição de rede).
- **Decisão editorial (06/11/2026):** Manter preservadas as 40 homilias recebidas e publicadas as 9 revisadas, com atribuição transparente da fonte (OpenSaints; Migne/PL 76 via Wikisource). A ausência de identificação do tradutor não é motivo automático para suspender ou ocultar a publicação. Não excluir 'recebida/', não ocultar homilias, não desfazer revisões, não reiniciar a tradução; a CCSL 141 continua como instrumento de conferência; a tradução própria do latim continua prevista.
- **Decisão editorial (06/11/2026):** Uniformizar os títulos das leituras nas 40 homilias (forma única, referência em algarismos arábicos).
- **Decisão editorial (06/11/2026):** G29-11 passa de sugestão a correção aplicada (grafia do Acordo Ortográfico, como no restante do site); G26-08 continua dúvida, agora com a conferência de Migne.
- **Decisão editorial (06/11/2026):** Criada a camada traducao-propria/ com um piloto (Homilia XXIII); a tradução integral das 40 homilias fica para depois, homilia por homilia, com revisão humana.
- **Decisão editorial (06/11/2026):** G08-03 e G26-12 deixam de ser sugestões e passam a variantes: a conferência com Migne mostrou que a tradução recebida segue a edição de base nesses pontos.
- **Decisão editorial (06/11/2026):** Etapa 1 aprovada. C1: preenchimento da lacuna da Homilia XL aprovado. C2: frase da Homilia XXVI mantida com nota editorial. C3: PDFs protegidos permanecem por ora; o responsável fará a exclusão. C4: Migne como referência, com a leitura da CCSL adotada quando houver justificativa filológica consistente e o sentido o exigir (aplicado em G01-07 e G16-05; demais variantes avaliadas e mantidas). C5: G05-08 mantida; G20-14 mantida por enquanto, com a dúvida registrada; G21-06 'incessante'. C6: aplicar G08-04, G08-05, G11-02, G12-06, G23-04, G30-06; manter G07-04, G19-04, G29-09, G30-04. C7: tradução própria piloto aprovada como experiência metodológica, separada da recebida.
- **Decisão editorial (06/11/2026):** Extensão da leitura corrigida no título das Homilias I (Lc 21,25-33), II (Lc 18,31-43), XXXVIII (Mt 22,1-14) e XXXIX (Lc 19,41-47), conforme o próprio texto da leitura e a CCSL 141. A Homilia IV fica com Mt 10,5-10: a leitura de Migne vai até o v. 10 (a CCSL corta no v. 8), e a tradução segue Migne. A perícope da Homilia XVIII (Jo 8,46-59) foi corrigida no catálogo.
- **Decisão editorial (06/11/2026):** Distribuição das 40 homilias registrada em distribuicao.json e aplicada ao índice do site por ferramentas/homilias/aplicar_distribuicao.mjs: 37 homilias no calendário (11 com correspondência litúrgica; 84 correspondências bíblicas plenas) e 3 só no catálogo geral (IV, XXXI, XXXII), sem data litúrgica. As 9 homilias já publicadas mantêm todas as correspondências anteriores; foram acrescentadas São Tomé e Pentecostes (XXVI), São Marcos e Conversão de São Paulo (XXIX), 6º domingo da Páscoa (Ano C) e terça-feira da 5ª semana da Páscoa (XXX). Duas dúvidas ficam para decisão do responsável (IX: São Silvestre; XXVIII: São Nereu e Santo Aquiles); por ora, nenhuma das duas correspondências é usada.
- **Marcas do processo de tradução:** linhas “Trecho N” e “PT” entre os parágrafos. Não fazem parte do texto; foram retiradas só na divisão por homilia (a camada recebida as registra em `@trechos`).
- **Homilia II sem cabeçalho nem rubrica:** o texto começa direto no Evangelho, dentro do bloco da Homilia I.
- **Artefatos numéricos** (números de coluna de Migne, como “1468”, “1573”) e numeração de parágrafos colada ao texto, juntando parágrafos — corrigidos nas 40 homilias (ver 1.2).
- **Remissões ao Decreto de Graciano** — notas marginais da edição impressa, como “(11, q. 3, c. 88)”, dentro do texto — retiradas onde a tradução as conservava.
- **Referências bíblicas desfiguradas** (“Sl 67 Sl 19”, “Hb 12 Hb 29”), “ibid.” e abreviaturas latinas — corrigidas e uniformizadas nas 40 homilias.
- **Blocos com etiqueta errada** (título ou texto da leitura marcado como parágrafo, leitura colada ao § 1, parágrafos partidos no meio de uma frase) — corrigidos.
- **Rubricas com dados ausentes do texto crítico:** a indicação do domingo nas Homilias VII, XVI e XXVI vem da edição impressa (ver variantes G07-03, G16-06, G26-09). Por isso a VII e a XXVI entram no calendário só pela correspondência bíblica, e a XVI pela ocasião confirmada no próprio texto (§ 5).
- **Lacuna na Homilia XL, § 3:** duas frases faltam na tradução recebida e, no lugar delas, há anotações de trabalho de uma ferramenta automática (“exprim glria? Wait correct typo. Need final clean.”). É a única ocorrência nas 40 homilias. Na camada revisada, as anotações saíram e as frases foram traduzidas do latim, como tradução própria identificada (G40-05).
- **Erros da edição de Migne nas referências bíblicas**, copiados pela tradução (ex.: Ct 1,1 dada como “I, 7”; Sl 101,8 como “CI, 1”; Mt 19,8 no lugar de Ex 22,1) — corrigidos com o aparato de fontes da CCSL.
- **Livros dos Reis e de Samuel:** a tradução recebida converteu “I/II Reg.” da Vulgata em “1Rs/2Rs”, que hoje designam outros livros — corrigidos para 1Sm/2Sm.
- **Erros da transcrição latina de base** (Corpus Corporum), identificados pela CCSL, sem efeito na tradução (ex.: “non” por “nos”, “concidit” por “condidit”) — registrados como problemas da fonte.
- **Grafia anterior ao Acordo Ortográfico:** “ungüentos” (Homilia XXIX), atualizada na Etapa 1 (G29-11).
- **Texto latino (CCSL 141):** a digitalização traz aviso de direitos reservados (Brepols). Foi usada só para conferência; nenhum texto latino é publicado no site, apenas citações curtas nesta auditoria.
- **Santo Antônio:** a tradução portuguesa é de Frei Ary E. Pintarelli, OFM (Vozes, 2019), indicada no próprio PDF, obtido do site academia.edu. A tradução inglesa (Paul Spilsbury, a partir da edição crítica de 1979) foi capturada do site franciscan-archive.org em 2006.
- **São João Maria Vianney:** os PDFs são documentos do Word convertidos, sem folha de rosto; há erros de reconhecimento de ligaduras (“SancLfication”, “ChréLen”).

## 6. Textos cuja autenticidade ou atribuição precisa de investigação

- **Homilia XXVI, § 2** — a frase “Isto é: assim como o Pai, Deus, enviou a mim, Deus, também eu vos envio, homem, a vós, homens” está em Migne (PL 76, col. 1553-1554), base da tradução, mas não no texto crítico nem no seu aparato (registro G26-08). Por decisão do responsável (C2), continua no texto, com nota editorial na página da homilia.
- **São João Maria Vianney** — os 4 tomos são a coleção tradicional dos sermões escritos pelo Cura d’Ars. A dependência destes textos de coletâneas de sermões de outros autores, e a extensão dos retoques dos editores, precisam ser investigadas antes de apresentá-los como palavras do santo. Os “sermões inéditos” do tomo 4 exigem identificação da fonte. Esta auditoria não afirma nem nega a autoria: registra que o material enviado não permite verificá-la.
- **Santo Antônio de Pádua** — a autoria dos *Sermones dominicales et festivi* é sólida (edição crítica de 1979), mas os textos não foram conferidos com o latim porque ele não foi enviado.

## 7. Homilias examinadas e não inseridas na Liturgia Diária

| Santo | Texto | Motivo |
|---|---|---|
| São Gregório Magno | Homilia IV (Mt 10,5-10) | publicada só no catálogo geral, sem data litúrgica: Nenhum dia do lecionário atual lê Mt 10,5-10 de modo a cobrir a passagem comentada: as leituras mais próximas (São Barnabé; 14ª semana do Tempo Comum) têm só 3 ou 4 versículos em comum com ela. |
| São Gregório Magno | Homilia XXXI (Lc 13,6-13) | publicada só no catálogo geral, sem data litúrgica: A passagem comentada (Lc 13,6-13) junta a parábola da figueira estéril e a cura da mulher curvada; o lecionário atual lê as duas em dias diferentes, e nenhum deles cobre a maior parte do que a homilia comenta. |
| São Gregório Magno | Homilia XXXII (Lc 9,23-27) | publicada só no catálogo geral, sem data litúrgica: Os santos do dia em que foi pregada não estão no calendário atual, e a única leitura de Lucas que coincide com a passagem (quinta-feira depois das Cinzas, Lc 9,22-25) fica abaixo do critério de correspondência plena. |
| São João Maria Vianney | todos os sermões | sem tradução portuguesa; edição de origem e autoria a investigar |
| Santo Antônio de Pádua | todos os sermões | direitos da tradução portuguesa (Vozes, 2019); sem texto latino para conferência |
