# Auditoria das traduções — Homilias dos santos

> Gerado a partir de `dados/homilias/gregorio-magno/registro-editorial.json` por `ferramentas/homilias/gerar_documentos.mjs`. Não edite à mão.

## Método

- **Texto latino de referência:** R. Étaix (ed.), *Gregorius Magnus, Homiliae in Evangelia*, CCSL 141, Turnhout: Brepols, 1999 — o PDF enviado. Edição crítica, com aparato de manuscritos e as duas redações do próprio Gregório (α e β).
- **Tradução conferida:** o arquivo enviado “Texto Traduzido, as 40 homilias.txt”, obtido no portal OpenSaints (https://opensaints.com/pt-BR/padres-da-igreja/fontes/sao-gregorio-magno-papa/sao-gregorio-magno-papa-homiliae-in-evangelia-ed-migne). Fonte textual declarada pela OpenSaints: Edição de Migne, Patrologia Latina 76, consultada pela OpenSaints na Wikisource latina: https://la.wikisource.org/wiki/Homiliae_in_Evangelia_(ed._Migne). Tradutor: não identificado nos materiais atualmente disponíveis. Não atribuir a tradução à OpenSaints nem a uma pessoa específica sem prova documental. A edição de Migne não foi enviada.
- **Procedimento:** cada homilia publicada foi lida em paralelo com o latim, parágrafo por parágrafo. Em todo ponto em que o português diverge do texto crítico, o aparato foi consultado; quando o OCR era duvidoso, a imagem da página.
- **Regra decisiva:** quando o português segue uma leitura que o aparato atribui a manuscritos, isso é diferença de tradição textual (provavelmente a da edição de Migne), não erro de tradução: o texto fica como recebido e a diferença é registrada como *variante*.
- **Só correções de confiança alta foram aplicadas.** Confiança moderada ou baixa = sugestão ou dúvida, nunca aplicada.
- Escolhas de estilo que não mudam o sentido (artigos, pontuação, tempos verbais harmonizados, ordem das palavras) não foram alteradas nem itemizadas.
- **Reversível:** a tradução recebida está intacta em `dados/homilias/gregorio-magno/recebida/`; o texto publicado (`revisada/`) é gerado a partir dela e do registro. Para desfazer uma correção, mude seu estado para `nao-aplicada` e rode `python3 ferramentas/homilias/aplicar_alteracoes.py`.

## Números

| Tipo | Quantidade |
|---|---|
| Correções de tradução aplicadas | 81 |
| Correções de problemas da fonte aplicadas (artefatos, notas editoriais, referências) | 30 |
| Sugestões não aplicadas | 13 |
| Dúvidas não resolvidas | 4 |
| Variantes textuais registradas (texto mantido) | 25 |
| Homilias conferidas | 24 de 40 |

Graus de segurança: **alta** — a correção é sustentada pelo original e pelo contexto; **moderada** — solução plausível, com alguma ambiguidade; **baixa** — não há elementos para uma solução definitiva.

## 1. Alterações efetivamente aplicadas

### 1.1 Correções de tradução

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

#### G13-01 · Homilia XIII · título da leitura

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 89
- **Localização no texto:** título da leitura — `dados/homilias/gregorio-magno/recebida/homilia-13.txt`, bloco 2
- **Texto latino:** LECTIO S. EVANG. SEC. LUC. XII, 35-40.
- **Tradução recebida:** “Lucas XII, 35-40.”
- **Tradução aplicada:** “Lucas 12, 35-40.”
- **Justificativa linguística:** Capítulo em algarismos arábicos, como nos títulos das outras 39 homilias da tradução.
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
- **Tradução aplicada:** “LEITURA DO SANTO EVANGELHO SEGUNDO LUCAS 3, 1-11.”
- **Justificativa linguística:** O título da leitura estava marcado como parágrafo da homilia e com fórmula e numeração diferentes das demais homilias ('Lição', capítulo em algarismos romanos). Passa a título da leitura, na forma usada em toda a tradução.
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
- **Tradução recebida:** “João 8, 45-69.”
- **Tradução aplicada:** “João 8, 46-59.”
- **Justificativa linguística:** João 8 tem 59 versículos. A leitura vai de 'Quis ex vobis arguet me de peccato?' (8,46) a 'exivit de templo' (8,59), referência dada também pelo índice da tradução de Hurst. '45-69' é erro da edição de Migne, copiado pela tradução.
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

## 2. Alterações sugeridas, mas não aplicadas

#### G07-04 · Homilia VII · § 3

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 50, § 3
- **Localização no texto:** § 3 — `dados/homilias/gregorio-magno/recebida/homilia-07.txt`, bloco 6
- **Texto latino:** Vnde etiam per prophetam dicit: In Idumaeam extendam calceamentum meum. Per Idumaeam quippe gentilitas … In Idumaeam ergo Dominus …
- **Tradução recebida:** “Sobre Edom estenderei a minha sandália (Sl 59,10)”
- **Tradução proposta:** “Sobre a Idumeia estenderei a minha sandália (Sl 59,10)”
- **Justificativa linguística:** Gregório usa o nome latino 'Idumaea' (Idumeia), três vezes no trecho; a tradução moderniza para 'Edom'. As duas designações indicam a mesma região, e não há erro de sentido.
- **Motivo:** Atualização de um nome antigo. Fica para sua decisão (seriam três ocorrências).
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G08-03 · Homilia VIII · leitura do Evangelho (Lc 2,13)

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 53, l. 19-20 e aparato
- **Localização no texto:** leitura do Evangelho (Lc 2,13) — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 3
- **Texto latino:** facta est cum angelo multitudo militiae caelestis (aparato: + 'exercitus' em E)
- **Tradução recebida:** “juntou-se ao anjo uma multidão da milícia do exército celeste”
- **Tradução proposta:** “juntou-se ao anjo uma multidão da milícia celeste”
- **Justificativa linguística:** 'do exército' não está no texto crítico nem na Vulgata; só um manuscrito (E) acrescenta 'exercitus'. Pode ser glosa do tradutor ou leitura da edição de Migne, que não foi conferida.
- **Motivo:** Possível acréscimo. Não aplicado porque a edição-base da tradução (Migne) não pôde ser consultada.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G08-04 · Homilia VIII · § 1, 1ª frase

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 54, § 1
- **Localização no texto:** § 1, 1ª frase — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 4
- **Texto latino:** Quia, largiente Domino, missarum sollemnia ter hodie celebraturi sumus
- **Tradução recebida:** “hoje celebraremos três vezes os solenes mistérios da missa”
- **Tradução proposta:** “hoje celebraremos três vezes as solenidades das missas”
- **Justificativa linguística:** 'missarum sollemnia' é literalmente 'as solenidades (celebrações solenes) das missas'; 'mistérios' é acréscimo interpretativo.
- **Justificativa teológica ou contextual:** A expressão não está errada quanto à doutrina, mas introduz um termo que o autor não usa aqui. Gregório refere-se às três missas do Natal.
- **Motivo:** Acréscimo de termo; de pouca consequência. Fica como sugestão para sua decisão.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G08-05 · Homilia VIII · § 2, 1ª frase

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia VIII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 55, § 2
- **Localização no texto:** § 2, 1ª frase — `dados/homilias/gregorio-magno/recebida/homilia-08.txt`, bloco 5
- **Texto latino:** eiusque uoci angelorum chori concinunt et congaudentes clamant
- **Tradução recebida:** “os coros dos anjos concordam com a sua voz”
- **Tradução proposta:** “os coros dos anjos cantam em uníssono com a sua voz”
- **Justificativa linguística:** 'concinere' significa propriamente 'cantar juntos'; o sentido figurado 'concordar' existe, mas aqui o sujeito são 'coros' que 'clamam' o Glória, o que favorece o sentido musical.
- **Motivo:** Perda da imagem do canto. Duas leituras possíveis; não aplicado.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G11-02 · Homilia XI · § 4, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 79
- **Localização no texto:** § 4, fim — `dados/homilias/gregorio-magno/recebida/homilia-11.txt`, bloco 8
- **Texto latino:** Quidquid in mente pueriliter hilarescit, hoc disciplinae juvenilis censura coerceat
- **Tradução recebida:** “contenha-o a censura de uma disciplina madura”
- **Tradução proposta:** “contenha-o a censura de uma disciplina juvenil”
- **Justificativa linguística:** 'Juvenilis' é 'de jovem', em contraste com 'pueriliter' (de criança): Gregório opõe a infância à juventude vigorosa, não à maturidade. 'Madura' conserva o contraste, mas muda a imagem; por isso fica como sugestão.
- **Motivo:** Imagem alterada sem prejuízo grave do sentido.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G12-06 · Homilia XII · § 7

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XII
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 87, § 7 (igual a Migne)
- **Localização no texto:** § 7 — `dados/homilias/gregorio-magno/recebida/homilia-12.txt`, bloco 10
- **Texto latino:** vir valde idoneus, sed tantum plenus vitiis, quantum rebus
- **Tradução recebida:** “homem muito capaz,”
- **Tradução proposta:** “homem muito abastado,”
- **Justificativa linguística:** No latim tardio 'idoneus' designa com frequência o homem de posses; o contexto ('tão cheio de vícios quanto de riquezas', 'na aquisição de bens') favorece esse sentido, mas o 'sed' (mas) também admite 'respeitável'. Fica como sugestão.
- **Motivo:** Sentido provável diferente do adotado; não há segurança para aplicar.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G16-05 · Homilia XVI · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 114, § 5, aparato à l. 102
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-16.txt`, bloco 8
- **Texto latino:** Dum uero per trecentos et sexaginta dies annus ducitur, nos autem per triginta et sex dies affligimur, quasi anni nostri decimas Deo damus (aparato: '+ quinque' em F, K e L p.c.)
- **Tradução recebida:** “trezentos e sessenta e cinco dias”
- **Tradução proposta:** “trezentos e sessenta dias”
- **Justificativa linguística:** O texto crítico diz 360 dias; 365 é leitura de alguns manuscritos (correção posterior para o ano solar), que a tradução segue.
- **Justificativa teológica ou contextual:** O argumento de Gregório é aritmético: 36 dias de jejum são a DÉCIMA parte (o dízimo) de 360. Com 365 a conta deixa de ser exata.
- **Motivo:** A decisão é sua: seguir o texto crítico ou a tradição seguida pela tradução.
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
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G26-12 · Homilia XXVI · § 10

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 226, § 10
- **Localização no texto:** § 10 — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 13
- **Texto latino:** Certe in die tremendi examinis sui, cum angelis, cum archangelis, cum thronis et dominationibus … apparebit
- **Tradução recebida:** “Ele aparecerá com os seus, com os anjos”
- **Tradução proposta:** “Ele aparecerá com os anjos”
- **Justificativa linguística:** 'com os seus' não está no texto crítico. Não foi possível confirmar no aparato se algum manuscrito o tem.
- **Motivo:** Possível acréscimo, sem efeito no sentido. Fica como sugestão.
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
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G29-11 · Homilia XXIX · § 10, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXIX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 254, § 10
- **Localização no texto:** § 10, fim — `dados/homilias/gregorio-magno/recebida/homilia-29.txt`, bloco 9
- **Texto latino:** Trahe me post te, curremus in odorem unguentorum tuorum.
- **Tradução recebida:** “correremos ao perfume de teus ungüentos (Ct 1,3)”
- **Tradução proposta:** “correremos ao perfume de teus unguentos (Ct 1,3)”
- **Justificativa linguística:** Grafia anterior ao Acordo Ortográfico (trema), conservada na tradução recebida.
- **Motivo:** Atualização ortográfica, sem relação com o sentido; não aplicada para não alterar a tradução recebida além do necessário.
- **Grau de segurança:** alta · **estado:** não aplicada

#### G30-04 · Homilia XXX · § 3, fim

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 259, § 3
- **Localização no texto:** § 3, fim — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 6
- **Texto latino:** Sed quia suggerere aliquando dicimus subministrare, inuisibilis Spiritus suggerere dicitur, non quod nobis scientiam ab imo inferat, sed ab occulto.
- **Tradução recebida:** “no sentido de trazer à mente”
- **Tradução proposta:** “no sentido de fornecer”
- **Justificativa linguística:** 'subministrare' é fornecer, prover (por baixo, às ocultas); é esse sentido que justifica o fim da frase ('não … desde baixo, mas desde o oculto'). A dificuldade vem de a tradução verter 'suggerere' por 'recordar' em toda a homilia, o que torna o jogo de palavras de Gregório difícil de reproduzir.
- **Motivo:** Perda de um jogo de palavras do autor; solução depende de rever a tradução de 'suggerere'. Fica para sua decisão.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G30-06 · Homilia XXX · § 5

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 260, § 5
- **Localização no texto:** § 5 — `dados/homilias/gregorio-magno/recebida/homilia-30.txt`, bloco 8
- **Texto latino:** quia idem Spiritus coaeternus est Filio, et habet cognationem maximam lingua cum uerbo. Verbum quippe Patris Filius.
- **Tradução recebida:** “e há máxima afinidade entre a língua e o Verbo”
- **Tradução proposta:** “e há máxima afinidade entre a língua e a palavra”
- **Justificativa linguística:** O primeiro 'uerbo' é a palavra comum (a língua produz a palavra); só a frase seguinte aplica o termo ao Filho ('Verbum … Patris Filius'). Com maiúscula já no primeiro, perde-se a passagem do sentido comum ao teológico que sustenta o argumento.
- **Motivo:** Perda de um jogo de palavras do autor. Fica como sugestão.
- **Grau de segurança:** moderada · **estado:** não aplicada

## 3. Dúvidas ainda não resolvidas

#### G05-08 · Homilia V · § 4

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia V
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 36, § 4
- **Localização no texto:** § 4 — `dados/homilias/gregorio-magno/recebida/homilia-05.txt`, bloco 7
- **Texto latino:** Ostendat nostrae obsequium deuotionis immutatae sollemnitas mentis.
- **Tradução recebida:** “Que a solenidade mostre, em nosso serviço de devoção, uma mente transformada”
- **Justificativa linguística:** A frase admite duas construções: (a) sujeito 'obsequium nostrae deuotionis', objeto 'sollemnitas immutatae mentis' — 'Que o obséquio da nossa devoção mostre a solenidade de uma mente transformada'; (b) sujeito 'sollemnitas', objeto 'obsequium' — 'Que a solenidade mostre o obséquio da nossa devoção, (próprio) de uma mente transformada'. A tradução recebida segue, com liberdade, a leitura (b).
- **Motivo:** Ambiguidade sintática real; não há base para escolher. Tradução recebida mantida; dúvida registrada.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G20-14 · Homilia XX · § 12, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XX
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 164, § 12 (igual a Migne)
- **Localização no texto:** § 12, início — `dados/homilias/gregorio-magno/recebida/homilia-20.txt`, bloco 14
- **Texto latino:** Ut autem quanta esset virtus in continentia et susceptione indigentium Redemptor noster ostenderet
- **Tradução recebida:** “quão grande era a força da continência e do acolhimento dos necessitados”
- **Justificativa linguística:** As duas edições têm 'continentia'. O contexto fala só de sustentar e acolher os necessitados, o que favorece o sentido de 'manutenção'; mas não há paralelo seguro em Gregório para essa acepção.
- **Motivo:** Duas leituras plausíveis; texto mantido.
- **Grau de segurança:** baixa · **estado:** não aplicada

#### G21-06 · Homilia XXI · § 7, conclusão

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 179, § 7
- **Localização no texto:** § 7, conclusão — `dados/homilias/gregorio-magno/recebida/homilia-21.txt`, bloco 9
- **Texto latino:** Ad horum ergo ciuium illam frequentem sollemnitatem festinemus.
- **Tradução recebida:** “Corramos, pois, para aquela frequente solenidade desses cidadãos.”
- **Justificativa linguística:** 'frequens' pode significar (a) 'concorrida, cheia de gente' — a assembleia numerosa dos cidadãos do céu — ou (b) 'contínua, sem interrupção'. Em português, 'frequente' sugere repetição, sentido que não é o do latim em nenhuma das duas leituras. Possibilidades: '…para aquela solenidade concorrida desses cidadãos' ou '…para aquela solenidade incessante desses cidadãos'. Um paralelo do próprio Gregório, na mesma série pascal (Homilia XXVI, § 10), favorece a leitura (b): a solenidade eterna 'non est annua, sed continua' (não é anual, mas contínua). Outro paralelo, na Homilia XXX, § 10, favorece a leitura (a): 'ad illam supernae frequentiae laetitiam', que esta mesma tradução verte por 'àquela alegria da assembleia celeste'. Há, portanto, apoio para as duas leituras no próprio Gregório.
- **Motivo:** Duas leituras possíveis; não há base para escolher. Mantido; dúvida registrada.
- **Grau de segurança:** moderada · **estado:** não aplicada

#### G26-08 · Homilia XXVI · § 2, início

- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia XXVI
- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), p. 219, § 2 e aparato à l. 27
- **Localização no texto:** § 2, início — `dados/homilias/gregorio-magno/recebida/homilia-26.txt`, bloco 4
- **Texto latino:** Dicit eis: Pax uobis. Sicut misit me Pater, et ego mitto uos. Pater Filium misit … (a CCSL não tem a frase 'id est, sicut misit me Pater Deus Deum…', e o aparato não a registra em nenhum manuscrito)
- **Tradução recebida:** “Isto é: assim como o Pai, Deus, enviou a mim, Deus, também eu vos envio, homem, a vós, homens.”
- **Justificativa linguística:** A frase não está no texto crítico nem no aparato. Provavelmente vem da edição de Migne (base declarada da tradução), mas essa edição não foi enviada para conferência. Se for interpolação, a frase não é de Gregório.
- **Justificativa teológica ou contextual:** A frase afirma a divindade do Pai e do Filho e a humanidade dos enviados; é ortodoxa, mas não pode ser apresentada como palavra do autor sem verificação.
- **Motivo:** Autenticidade a investigar (comparar com PL 76). Mantida no texto como recebida, até sua decisão.
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
| G26-11 | XXVI | Jesus lhe disse: Porque me viste, Tomé, creste. | Dicit ei Iesus: Quia uidisti me, credidisti. |
| G29-10 | XXIX | Naquele tempo, estando à mesa os onze discípulos, Jesus apareceu-lhes e censurou a sua incredulidade | In illo tempore dixit Iesus discipulis suis: Euntes in uniuersum mundum … (o texto crítico começa em Mc 16,15; o aparato registra em E p.c., F p.c. e X o acréscimo do v. 14: 'recumbentibus undecim discipulis apparuit illis Iesus et exprobrauit incredulitatem illorum…') |
| G30-13 | XXX | porque em sua própria vontade se opõe a Ele | quia ei in sua uoluptate contradicit (aparato: 'uoluntate' em E B S F V A X) |
| G30-12 | XXX | Naquela, Deus, permanecendo em si mesmo, assumiu o homem | In illa quippe Deus in se creando suscepit hominem (aparato: 'permanens … semetipsum creauit' em J, L p.c., X, M p.c.) |

## 5. Problemas encontrados nas fontes

- **Tradução portuguesa sem tradutor identificado:** o arquivo não traz tradutor, edição nem licença. Foi obtido no portal OpenSaints, que declara na página de introdução aos textos adicionais dos Padres da Igreja: https://opensaints.com/pt-BR/padres-da-igreja/: “Anyone may do anything they wish with any part of this material, whether for private, educational or commercial purposes.” Também declara que os prefácios adicionais produzidos pelo responsável do projeto OpenSaints são disponibilizados em domínio público. Alcance: não se estende automaticamente a materiais de terceiros apenas hospedados ou referenciados pelo site. Verificação: informado pelo responsável deste projeto no relatório editorial de 06/11/2026; as páginas não puderam ser abertas na sessão que registrou esta informação (restrição de rede).
- **Decisão editorial (06/11/2026):** Manter preservadas as 40 homilias recebidas e publicadas as 9 revisadas, com atribuição transparente da fonte (OpenSaints; Migne/PL 76 via Wikisource). A ausência de identificação do tradutor não é motivo automático para suspender ou ocultar a publicação. Não excluir 'recebida/', não ocultar homilias, não desfazer revisões, não reiniciar a tradução; a CCSL 141 continua como instrumento de conferência; a tradução própria do latim continua prevista.
- **Marcas do processo de tradução:** linhas “Trecho N” e “PT” entre os parágrafos. Não fazem parte do texto; foram retiradas só na divisão por homilia (a camada recebida as registra em `@trechos`).
- **Homilia II sem cabeçalho nem rubrica:** o texto começa direto no Evangelho, dentro do bloco da Homilia I.
- **Artefatos numéricos** (“1468”, “1573”) e numeração de parágrafos colados ao texto, juntando parágrafos (Homilias X e XXIX) — corrigidos nas homilias publicadas (ver 1.2).
- **Remissões ao Decreto de Graciano** — notas marginais da edição impressa, como “(11, q. 3, c. 88)”, dentro do texto (Homilias XXVI e XXIX) — retiradas nas homilias publicadas.
- **Referências bíblicas desfiguradas** (“Sl 67 Sl 19”, “Hb 12 Hb 29”) e uma errada (Jo 11,45 por 11,44) — corrigidas nas homilias publicadas.
- **Rubricas com dados ausentes do texto crítico:** a indicação do domingo nas Homilias VII, XVI e XXVI vem da edição impressa (ver variantes G07-03, G16-06, G26-09). Por isso a VII e a XXVI entram no calendário só pela correspondência bíblica, e a XVI pela ocasião confirmada no próprio texto (§ 5).
- **Grafia anterior ao Acordo Ortográfico** em alguns pontos (ex.: “ungüentos”), mantida como recebida.
- **Texto latino (CCSL 141):** a digitalização traz aviso de direitos reservados (Brepols). Foi usada só para conferência; nenhum texto latino é publicado no site, apenas citações curtas nesta auditoria.
- **Santo Antônio:** a tradução portuguesa é de Frei Ary E. Pintarelli, OFM (Vozes, 2019), indicada no próprio PDF, obtido do site academia.edu. A tradução inglesa (Paul Spilsbury, a partir da edição crítica de 1979) foi capturada do site franciscan-archive.org em 2006.
- **São João Maria Vianney:** os PDFs são documentos do Word convertidos, sem folha de rosto; há erros de reconhecimento de ligaduras (“SancLfication”, “ChréLen”).

## 6. Textos cuja autenticidade ou atribuição precisa de investigação

- **Homilia XXVI, § 2** — a frase “Isto é: assim como o Pai, Deus, enviou a mim, Deus, também eu vos envio, homem, a vós, homens” não está no texto crítico nem no aparato (registro G26-08). Está publicada como recebida, mas marcada como dúvida de confiança baixa: conferir com a PL 76.
- **São João Maria Vianney** — os 4 tomos são a coleção tradicional dos sermões escritos pelo Cura d’Ars. A dependência destes textos de coletâneas de sermões de outros autores, e a extensão dos retoques dos editores, precisam ser investigadas antes de apresentá-los como palavras do santo. Os “sermões inéditos” do tomo 4 exigem identificação da fonte. Esta auditoria não afirma nem nega a autoria: registra que o material enviado não permite verificá-la.
- **Santo Antônio de Pádua** — a autoria dos *Sermones dominicales et festivi* é sólida (edição crítica de 1979), mas os textos não foram conferidos com o latim porque ele não foi enviado.

## 7. Homilias examinadas e não inseridas

| Santo | Texto | Motivo |
|---|---|---|
| São Gregório Magno | Homilia I (Lc 21,25-32) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia II (Lc 18,31-44) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia III (Mt 12,46-50) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia IV (Mt 10,5-10) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia VI (Mt 11,2-10) | correspondência identificada (3º domingo do Advento, Ano A), mas ainda não conferida com o latim — próxima da fila |
| São Gregório Magno | Homilia IX (Mt 25,14-30) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XI (Mt 13,44-52) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XII (Mt 25,1-13) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XIII (Lc 12,35-40) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XIV (Jo 10,11-16) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XV (Lc 8,4-15) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XVII (Lc 10,1-9) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XVIII (Jo 8,45-69) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XIX (Mt 20,1-16) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XX (Lc 3,1-11) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXII (Jo 20,1-9) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXIII (Lc 24,13-35) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXIV (Jo 21,1-14) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXV (Jo 20,11-18) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXVII (Jo 15,12-16) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXVIII (Jo 4,46-53) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXI (Lc 13,6-13) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXII (Lc 9,23-27) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXIII (Lc 7,36-50) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXIV (Lc 15,1-10) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXV (Lc 21,9-19) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXVI (Lc 14,16-24) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXVII (Lc 14,25-33) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXVIII (Mt 22,1-13) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XXXIX (Lc 19,42-47) | tradução ainda não conferida com a CCSL 141 |
| São Gregório Magno | Homilia XL (Lc 16,19-31) | tradução ainda não conferida com a CCSL 141 |
| São João Maria Vianney | todos os sermões | sem tradução portuguesa; edição de origem e autoria a investigar |
| Santo Antônio de Pádua | todos os sermões | direitos da tradução portuguesa (Vozes, 2019); sem texto latino para conferência |
