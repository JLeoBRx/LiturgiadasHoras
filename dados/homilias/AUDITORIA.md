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
| Correções de tradução aplicadas | 28 |
| Correções de problemas da fonte aplicadas (artefatos, notas editoriais, referências) | 14 |
| Sugestões não aplicadas | 10 |
| Dúvidas não resolvidas | 3 |
| Variantes textuais registradas (texto mantido) | 24 |
| Homilias conferidas | 9 de 40 |

Graus de segurança: **alta** — a correção é sustentada pelo original e pelo contexto; **moderada** — solução plausível, com alguma ambiguidade; **baixa** — não há elementos para uma solução definitiva.

## 1. Alterações efetivamente aplicadas

### 1.1 Correções de tradução

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
