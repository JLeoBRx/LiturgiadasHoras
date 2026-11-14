# Inventário das homilias dos santos

> Gerado a partir dos dados por `ferramentas/homilias/gerar_documentos.mjs`. Não edite à mão: altere os dados e rode o script.

## Resumo

| Santo | Material recebido | Textos | No site | Motivo principal |
|---|---|---|---|---|
| São Gregório Magno | tradução portuguesa (40 homilias), texto latino de Migne (PL 76), texto latino crítico (CCSL 141), planilha de inventário | 40 homilias | 40 (37 na Liturgia Diária, 3 só no catálogo geral) | as 40 estão colacionadas com o latim (Etapa 1) e distribuídas no calendário (Etapa 2, ver DISTRIBUICAO.md) |
| São João Maria Vianney | texto francês dos 4 tomos (transcrição em Word) | 75 sermões | 0 | não há tradução portuguesa; edição de origem não identificada |
| Santo Antônio de Pádua | tradução portuguesa (Vozes, 2019) e tradução inglesa (Spilsbury) | 76 sermões | 0 | direitos da tradução portuguesa; sem texto latino para conferência |

## Critérios

- **Correspondência litúrgica:** a homilia foi pregada para a mesma celebração que o calendário atual mantém (Natal, Epifania, Páscoa, Ascensão, Pentecostes, festa de um santo, 1º domingo da Quaresma). A ocasião é tirada da rubrica da edição crítica ou do próprio texto, nunca só do título de trabalho.
- **Correspondência bíblica:** a passagem comentada é lida naquele dia no lecionário do site. Os versículos em comum são conferidos automaticamente pelos testes.
- **Correspondência temática:** nunca é usada para pôr uma homilia num dia. Fica registrada aqui para avaliação futura.
- Domingos do calendário antigo (Septuagésima, “domingo depois de Pentecostes” etc.) **não** são convertidos automaticamente em domingos atuais: a numeração e os Evangelhos mudaram.
- A distribuição das homilias de São Gregório (critérios, correspondências usadas e recusadas, datas) está em `DISTRIBUICAO.md`, gerado de `gregorio-magno/distribuicao.json`.

## São Gregório Magno — Homiliae in Evangelia

### Situação das 40 homilias

| Camada | Homilias | Quantidade |
|---|---|---|
| Recebida: cópia exata da tradução, `recebida/` | prefácio e I a XL | 40 + prefácio |
| Revisada: conferida com Migne (PL 76) e a CCSL 141, `revisada/` | I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL | 40 |
| Publicada na Liturgia Diária (nos dias das suas correspondências) | I, II, III, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL | 37 |
| Publicada só no catálogo geral (sem data litúrgica) | IV, XXXI, XXXII | 3 |
| Aguardando colação com o latim | nenhuma | 0 |
| Tradução própria do latim, `traducao-propria/` (não publicada) | XXIII (piloto) | 1 |

### Estado final de cada homilia (Etapa 1)

Estados: **finalizada**: texto colacionado, correções aplicadas, nenhuma dúvida em aberto (pode haver sugestões de redação para sua decisão); **finalizada com ressalvas**: texto utilizável, com dúvida em aberto ou trecho que merece atenção (ver ressalvas).

| Nº | Estado final | Correções aplicadas | Sugestões | Dúvidas | Variantes e problemas da fonte | Ressalvas |
|---|---|---|---|---|---|---|
| I | finalizada | 7 | — | — | 0 | 'para os velhos' (senibus, CCSL) adotado em lugar de 'para os sentidos' (sensibus, Migne) pelo critério C4 (G01-07). |
| II | finalizada | 6 | — | — | 0 | O cabeçalho e a rubrica faltavam na tradução recebida; foram traduzidos de Migne (G02-01). |
| III | finalizada | 5 | — | — | 0 | — |
| IV | finalizada | 4 | — | — | 0 | — |
| V | finalizada | 5 | — | G05-08 | 4 | Dúvida de construção (G05-08) decidida: mantida a tradução recebida, porque a sintaxe admite as duas leituras. |
| VI | finalizada | 4 | — | — | 1 | — |
| VII | finalizada | 2 | G07-04 | — | 2 | Sugestão G07-04 ('Idumeia') não aplicada: mantido 'Edom' por decisão do responsável (C6). |
| VIII | finalizada | 5 | — | — | 5 | Sugestões G08-04 e G08-05 aplicadas por decisão do responsável (C6). G08-03 ('do exército') é variante: a palavra está em Migne. |
| IX | finalizada | 5 | — | — | 0 | — |
| X | finalizada | 6 | — | — | 4 | — |
| XI | finalizada | 3 | — | — | 0 | — |
| XII | finalizada | 7 | — | — | 0 | — |
| XIII | finalizada | 3 | — | — | 0 | — |
| XIV | finalizada | 2 | — | — | 0 | Migne numera dois parágrafos como '3' (o segundo deveria ser o 5); a numeração não aparece na tradução. |
| XV | finalizada | 5 | — | — | 0 | — |
| XVI | finalizada | 7 | — | — | 1 | '360 dias' (CCSL) adotado em lugar de '365' (Migne) pelo critério C4 (G16-05). |
| XVII | finalizada | 12 | — | — | 0 | Um erro da transcrição latina de base ('Vetus' por 'Verus', § 7) foi identificado pela CCSL 141 (G17-02). |
| XVIII | finalizada | 3 | — | — | 0 | — |
| XIX | finalizada | 7 | G19-04 | — | 0 | — |
| XX | finalizada com ressalvas | 14 | — | G20-14 | 0 | Dúvida sobre 'continentia' no § 12 (G20-14): mantido 'continência' por decisão do responsável, com a dúvida registrada para comparação com outras obras de Gregório. |
| XXI | finalizada | 5 | — | — | 3 | 'frequente' substituído por 'incessante' por decisão do responsável (G21-06). |
| XXII | finalizada | 10 | — | — | 0 | — |
| XXIII | finalizada | 4 | — | — | 0 | Sugestão G23-04 ('oleiros (em latim, figuli)') aplicada por decisão do responsável (C6). Tradução própria piloto aprovada como experiência metodológica (C7). |
| XXIV | finalizada | 5 | — | — | 0 | — |
| XXV | finalizada | 15 | — | — | 0 | — |
| XXVI | finalizada | 10 | — | — | 5 | Frase do § 2 presente em Migne e ausente da CCSL (G26-08): mantida, com nota editorial na página da homilia (decisão C2). G26-12 ('com os seus') é variante: Migne imprime 'examinis suis'. |
| XXVII | finalizada | 9 | — | — | 0 | — |
| XXVIII | finalizada | 3 | — | — | 0 | — |
| XXIX | finalizada | 20 | G29-09 | — | 1 | Referência ao Segundo Livro dos Reis partida entre dois parágrafos na origem, reconstituída (G29-02, G29-21, G29-22). Sugestão G29-09 não aplicada: mantida a tradução recebida, que tem apoio em variante textual (C6). |
| XXX | finalizada | 19 | G30-04 | — | 2 | Sugestão G30-06 aplicada (C6); G30-04 mantida sem revisão geral de 'suggerere' nesta etapa. |
| XXXI | finalizada | 6 | — | — | 1 | Um erro da transcrição latina de base ('non' por 'nos', § 8) foi identificado pela CCSL 141 (G31-07); a tradução já estava correta. |
| XXXII | finalizada | 11 | — | — | 1 | Migne repete a numeração '3.' (dois parágrafos com o mesmo número); a numeração foi mantida como impressa na camada latim/. Um erro da transcrição latina de base ('prorant' por 'proruat', § 8) foi identificado pela CCSL 141 (G32-11); a tradução já estava correta. |
| XXXIII | finalizada | 24 | — | — | 2 | Um erro da transcrição latina de base ('retinebamur' por 'renitebamur', § 5) foi identificado pela CCSL 141 (G33-07); a tradução já estava correta. A mesma transcrição traz 'vival' por 'vivat' (Ez 33,11, § 8), erro tipográfico evidente sem efeito na tradução. Variante Migne × CCSL registrada (G33-18: 'conditor et Redemptor noster' × 'conditor noster'); a tradução segue Migne. |
| XXXIV | finalizada | 32 | — | — | 1 | Três notas editoriais de Migne que remetem ao Decreto de Graciano foram retiradas do texto de leitura e ficam registradas (G34-04, G34-06, G34-24); a nota que remete a Dionísio Areopagita (§ 12) foi mantida, porque indica a fonte de uma afirmação que o próprio Gregório atribui a esse autor. Um erro da transcrição latina de base ('concidit' por 'condidit', § 15) foi identificado pela CCSL 141 (G34-23); a tradução já estava correta. |
| XXXV | finalizada | 10 | — | — | 1 | Variante Migne × CCSL registrada (G35-09: 'pauperis' × 'pauperum', Sl 9,19); a tradução segue Migne. O título da homilia traz a rubrica (local e ocasião) no mesmo bloco do cabeçalho, como em várias outras homilias da tradução recebida; mantido. |
| XXXVI | finalizada | 19 | — | — | 0 | A nota de Migne que remete aos Diálogos de Gregório (livro IV, cap. 27), onde o mesmo episódio do conde Teofânio é narrado, foi mantida, porque a própria tradução recebida a traduziu ('Liv. IV dos Diálogos, cap. 27') e ela informa o leitor. |
| XXXVII | finalizada | 13 | — | — | 0 | As duas notas de Migne que remetem aos Diálogos de Gregório foram mantidas e postas na forma portuguesa já usada pela tradução recebida na Homilia XXXVI. |
| XXXVIII | finalizada | 25 | — | — | 0 | As duas notas de Migne que remetem ao Decreto de Graciano ('23, q. 4') já tinham sido omitidas pela tradução recebida; as que remetem aos Diálogos de Gregório foram mantidas, numa só forma. |
| XXXIX | finalizada | 8 | — | — | 0 | O versículo de Lc 19,42 é traduzido de três maneiras ao longo da homilia, porque Gregório o comenta em partes ('Se também tu conhecesses', 'E na verdade neste teu dia…'); as formas foram mantidas, por acompanharem o comentário. As notas de Migne que remetem ao Decreto de Graciano ('1, q. 3, c. 10') já tinham sido omitidas pela tradução recebida. |
| XL | finalizada com ressalvas | 22 | — | — | 0 | Lacuna na tradução recebida (§ 3): duas frases faltavam e no lugar delas havia anotações de trabalho de uma ferramenta automática ('Wait correct typo. Need final clean.'). As anotações foram retiradas e as duas frases traduzidas do latim (G40-05). Esse trecho é tradução própria, não da tradução recebida; está identificado no registro e pode ser revisto ou revertido. A nota de Migne que remete ao Decreto de Graciano ('De poenit., dist. 3, can. Cavendum') já tinha sido omitida pela tradução recebida. Preenchimento da lacuna aprovado pelo responsável (C1, 06/11/2026). |

Procedência da tradução recebida: Portal OpenSaints: https://opensaints.com/pt-BR/padres-da-igreja/fontes/sao-gregorio-magno-papa/sao-gregorio-magno-papa-homiliae-in-evangelia-ed-migne; fonte textual declarada: Edição de Migne, Patrologia Latina 76, consultada pela OpenSaints na Wikisource latina: https://la.wikisource.org/wiki/Homiliae_in_Evangelia_(ed._Migne). Tradutor: não identificado nos materiais atualmente disponíveis. Não atribuir a tradução à OpenSaints nem a uma pessoa específica sem prova documental.

### Homilias na Liturgia Diária

| Nº | Passagem | Ocasião (rubrica da tradução revisada) | Dias em que aparece |
|---|---|---|---|
| Homilia I | Lc 21,25-33 | Proferida ao povo na basílica do santo apóstolo Pedro, no segundo domingo do Advento do Senhor. | **bíblica:** Sexta-feira da 34ª semana do Tempo Comum, Ano I<br>**bíblica:** Sexta-feira da 34ª semana do Tempo Comum, Ano II |
| Homilia II | Lc 18,31-43 | Proferida ao povo na basílica do santo apóstolo Pedro, no domingo da Quinquagésima. | **bíblica:** Segunda-feira da 33ª semana do Tempo Comum, Ano I<br>**bíblica:** Segunda-feira da 33ª semana do Tempo Comum, Ano II |
| Homilia III | Mt 12,46-50 | Pronunciada ao povo na basílica de santa Felicidade mártir, no dia do seu natalício. | **bíblica:** Terça-feira da 16ª semana do Tempo Comum, Ano I<br>**bíblica:** Terça-feira da 16ª semana do Tempo Comum, Ano II |
| Homilia V | Mt 4,18-22 | Pronunciada ao povo na basílica do bem-aventurado apóstolo André, no dia de sua festa natalícia. | **litúrgica:** Santo André, Apóstolo (30/11)<br>**bíblica:** Santo André, Apóstolo (30/11)<br>**bíblica:** 3º Domingo do Tempo Comum, Ano A |
| Homilia VI | Mt 11,2-10 | Proferida ao povo na basílica dos santos Marcelino e Pedro, no terceiro domingo do Advento do Senhor. | **bíblica:** 3º Domingo do Advento, Ano A |
| Homilia VII | Jo 1,19-28 | Proferida ao povo na basílica do santo apóstolo Pedro, no quarto domingo do Advento do Senhor. | **bíblica:** 3º Domingo do Advento, Ano B<br>**bíblica:** 2 de janeiro (tempo do Natal) |
| Homilia VIII | Lc 2,1-14 | Pronunciada ao povo na basílica da bem-aventurada Virgem Maria, no dia do Natal do Senhor. | **litúrgica:** Natal do Senhor<br>**bíblica:** Natal — Missa da noite |
| Homilia IX | Mt 25,14-30 | Proferida ao povo na basílica de São Silvestre, no dia do seu natalício. | **bíblica:** Sábado da 21ª semana do Tempo Comum, Ano I<br>**bíblica:** Sábado da 21ª semana do Tempo Comum, Ano II<br>**bíblica:** 33º Domingo do Tempo Comum, Ano A |
| Homilia X | Mt 2,1-12 | Pronunciada ao povo na basílica do santo apóstolo Pedro, no dia da Epifania. | **litúrgica:** Epifania do Senhor<br>**bíblica:** Epifania do Senhor |
| Homilia XI | Mt 13,44-52 | Proferida ao povo na basílica de Santa Inês, no dia de seu natalício. | **litúrgica:** Santa Inês, Virgem e Mártir (21/01)<br>**bíblica:** 17º Domingo do Tempo Comum, Ano A |
| Homilia XII | Mt 25,1-13 | Pronunciada ao povo na basílica de santa Inês, no dia do seu natalício. | **litúrgica:** Santa Inês, Virgem e Mártir (21/01)<br>**bíblica:** Sexta-feira da 21ª semana do Tempo Comum, Ano I<br>**bíblica:** Sexta-feira da 21ª semana do Tempo Comum, Ano II<br>**bíblica:** 32º Domingo do Tempo Comum, Ano A |
| Homilia XIII | Lc 12,35-40 | Pronunciada ao povo na basílica do bem-aventurado Félix, confessor, no dia natalício dele. | **bíblica:** Comemoração de Todos os Fiéis Defuntos (02/11)<br>**bíblica:** Terça-feira da 29ª semana do Tempo Comum, Ano I<br>**bíblica:** Terça-feira da 29ª semana do Tempo Comum, Ano II<br>**bíblica:** 19º Domingo do Tempo Comum, Ano C |
| Homilia XIV | Jo 10,11-16 | Proferida ao povo na basílica do bem-aventurado apóstolo Pedro, no segundo domingo depois da Páscoa. | **bíblica:** 4º Domingo da Páscoa, Ano B<br>**bíblica:** Segunda-feira da 4ª semana da Páscoa |
| Homilia XV | Lc 8,4-15 | Proferida ao povo na basílica do santo apóstolo Paulo, no domingo da Sexagésima. | **bíblica:** Sábado da 24ª semana do Tempo Comum, Ano I<br>**bíblica:** Sábado da 24ª semana do Tempo Comum, Ano II |
| Homilia XVI | Mt 4,1-11 | Pronunciada ao povo na basílica de São João, chamada Constantiniana, no primeiro domingo da Quaresma. | **litúrgica:** 1º Domingo da Quaresma, Ano A<br>**litúrgica:** 1º Domingo da Quaresma, Ano B<br>**litúrgica:** 1º Domingo da Quaresma, Ano C<br>**bíblica:** 1º Domingo da Quaresma, Ano A |
| Homilia XVII | Lc 10,1-9 | Proferida aos bispos nas fontes do Latrão. | **bíblica:** São Lucas, Evangelista (18/10)<br>**bíblica:** Santos Timóteo e Tito, Bispos (26/01)<br>**bíblica:** Quinta-feira da 26ª semana do Tempo Comum, Ano I<br>**bíblica:** Quinta-feira da 26ª semana do Tempo Comum, Ano II<br>**bíblica:** 14º Domingo do Tempo Comum, Ano C |
| Homilia XVIII | Jo 8,46-59 | Proferida ao povo na basílica do santo apóstolo Pedro, no Domingo da Paixão. | **bíblica:** Quinta-feira da 5ª semana da Quaresma |
| Homilia XIX | Mt 20,1-16 | Pronunciada ao povo na basílica do bem-aventurado Lourenço mártir, no Domingo da Septuagésima. | **bíblica:** Quarta-feira da 20ª semana do Tempo Comum, Ano I<br>**bíblica:** Quarta-feira da 20ª semana do Tempo Comum, Ano II<br>**bíblica:** 25º Domingo do Tempo Comum, Ano A |
| Homilia XX | Lc 3,1-11 | Pronunciada ao povo na basílica de São João Batista, no sábado das Quatro Têmporas antes do Natal de Cristo. | **bíblica:** 2º Domingo do Advento, Ano C |
| Homilia XXI | Mc 16,1-7 | Proferida ao povo na basílica da bem-aventurada Virgem Maria, no santo dia da Páscoa. | **litúrgica:** Domingo da Páscoa na Ressurreição do Senhor<br>**bíblica:** Vigília Pascal, Ano B |
| Homilia XXII | Jo 20,1-9 | Pronunciada ao povo na basílica do bem-aventurado João, chamada Constantiniana, no sábado depois da Páscoa. | **bíblica:** Domingo da Páscoa — Missa do dia<br>**bíblica:** São João, Apóstolo e Evangelista (27/12) |
| Homilia XXIII | Lc 24,13-35 | Proferida ao povo na basílica do bem-aventurado apóstolo Pedro, no dia seguinte à Páscoa. | **bíblica:** Quarta-feira da oitava da Páscoa<br>**bíblica:** 3º Domingo da Páscoa, Ano A |
| Homilia XXIV | Jo 21,1-14 | Pronunciada ao povo na basílica do bem-aventurado Lourenço mártir, fora dos muros da Cidade, na quarta-feira da Páscoa. | **bíblica:** Sexta-feira da oitava da Páscoa<br>**bíblica:** 3º Domingo da Páscoa, Ano C |
| Homilia XXV | Jo 20,11-18 | Proferida ao povo na basílica de São João, chamada Constantiniana, na quinta-feira da Páscoa. | **bíblica:** Terça-feira da oitava da Páscoa<br>**bíblica:** Santa Maria Madalena (22/07) |
| Homilia XXVI | Jo 20,19-31 | Proferida ao povo na basílica do bem-aventurado João, chamada Constantiniana, na oitava da Páscoa. | **bíblica:** 2º Domingo da Páscoa, Ano A<br>**bíblica:** 2º Domingo da Páscoa, Ano B<br>**bíblica:** 2º Domingo da Páscoa, Ano C<br>**bíblica:** São Tomé, Apóstolo (03/07)<br>**bíblica:** Pentecostes |
| Homilia XXVII | Jo 15,12-16 | Proferida ao povo na basílica de São Pancrácio mártir, no dia de sua festa natalícia. | **litúrgica:** São Pancrácio, Mártir (12/05)<br>**bíblica:** Sexta-feira da 5ª semana da Páscoa<br>**bíblica:** 6º Domingo da Páscoa, Ano B<br>**bíblica:** São Matias, Apóstolo (14/05) |
| Homilia XXVIII | Jo 4,46-53 | Dirigida ao povo na basílica dos santos Nereu e Aquileu, no dia do seu natalício. | **bíblica:** Segunda-feira da 4ª semana da Quaresma |
| Homilia XXIX | Mc 16,14-20 | Dirigida ao povo na basílica do bem-aventurado apóstolo Pedro, na Ascensão do Senhor. | **litúrgica:** Ascensão do Senhor<br>**bíblica:** Ascensão do Senhor, Ano B<br>**bíblica:** São Marcos Evangelista (25/04)<br>**bíblica:** Conversão de São Paulo, Apóstolo (25/01) |
| Homilia XXX | Jo 14,23-31 | Proferida ao povo na basílica do santo apóstolo Pedro, no santo dia de Pentecostes. | **litúrgica:** Domingo de Pentecostes<br>**bíblica:** 6º Domingo da Páscoa, Ano C<br>**bíblica:** Terça-feira da 5ª semana da Páscoa |
| Homilia XXXIII | Lc 7,36-50 | Pregada ao povo na basílica de São Clemente, na sexta-feira das Têmporas de setembro. | **bíblica:** Quinta-feira da 24ª semana do Tempo Comum, Ano I<br>**bíblica:** Quinta-feira da 24ª semana do Tempo Comum, Ano II<br>**bíblica:** 11º Domingo do Tempo Comum, Ano C |
| Homilia XXXIV | Lc 15,1-10 | Dirigida ao povo na basílica dos bem-aventurados João e Paulo, no terceiro domingo depois de Pentecostes. | **bíblica:** Quinta-feira da 31ª semana do Tempo Comum, Ano I<br>**bíblica:** Quinta-feira da 31ª semana do Tempo Comum, Ano II<br>**bíblica:** 24º Domingo do Tempo Comum, Ano C<br>**bíblica:** Sagrado Coração de Jesus, Ano C |
| Homilia XXXV | Lc 21,9-19 | Proferida ao povo na basílica de São Menas mártir, no dia do seu natalício. | **bíblica:** 33º Domingo do Tempo Comum, Ano C<br>**bíblica:** Quarta-feira da 34ª semana do Tempo Comum, Ano I<br>**bíblica:** Quarta-feira da 34ª semana do Tempo Comum, Ano II |
| Homilia XXXVI | Lc 14,16-24 | Proferida ao povo na basílica dos bem-aventurados apóstolos Filipe e Tiago, no segundo domingo depois de Pentecostes. | **bíblica:** Terça-feira da 31ª semana do Tempo Comum, Ano I<br>**bíblica:** Terça-feira da 31ª semana do Tempo Comum, Ano II |
| Homilia XXXVII | Lc 14,25-33 | Pronunciada ao povo na basílica do bem-aventurado mártir Sebastião, no dia de sua festa natalícia. | **litúrgica:** São Sebastião, Mártir (20/01)<br>**bíblica:** 23º Domingo do Tempo Comum, Ano C<br>**bíblica:** Quarta-feira da 31ª semana do Tempo Comum, Ano I<br>**bíblica:** Quarta-feira da 31ª semana do Tempo Comum, Ano II |
| Homilia XXXVIII | Mt 22,1-14 | Proferida ao povo na basílica do bem-aventurado Clemente, mártir. | **bíblica:** Quinta-feira da 20ª semana do Tempo Comum, Ano I<br>**bíblica:** Quinta-feira da 20ª semana do Tempo Comum, Ano II<br>**bíblica:** 28º Domingo do Tempo Comum, Ano A |
| Homilia XXXIX | Lc 19,41-47 | Proferida ao povo na basílica do bem-aventurado João, chamada Constantiniana. | **bíblica:** Quinta-feira da 33ª semana do Tempo Comum, Ano I<br>**bíblica:** Quinta-feira da 33ª semana do Tempo Comum, Ano II |
| Homilia XL | Lc 16,19-31 | Proferida ao povo na basílica do santo mártir Lourenço, no segundo domingo depois de Pentecostes. | **bíblica:** Quinta-feira da 2ª semana da Quaresma<br>**bíblica:** 26º Domingo do Tempo Comum, Ano C |

### Homilias só no catálogo geral (sem data litúrgica)

Publicadas no catálogo geral do site (#/homilias), sem dia no calendário: não têm correspondência litúrgica nem bíblica plena. As candidatas abaixo, todas parciais, foram examinadas e recusadas (ver DISTRIBUICAO.md; porcentagens: quanto do Evangelho do dia a homilia comenta / quanto da passagem comentada é lido no dia).

| Nº | Passagem | Ocasião histórica (rubrica da tradução revisada) | Por que fica sem data | Candidatas parciais |
|---|---|---|---|---|
| Homilia IV | Mt 10,5-10 | Proferida ao povo na basílica de santo Estêvão mártir, sobre os apóstolos. | Nenhum dia do lecionário atual lê Mt 10,5-10 de modo a cobrir a passagem comentada: as leituras mais próximas (São Barnabé; 14ª semana do Tempo Comum) têm só 3 ou 4 versículos em comum com ela. | São Barnabé, Apóstolo (11/06) — Mt 10,7-13 (57% / 67%)<br>Quinta-feira da 14ª semana do Tempo Comum, Ano I — Mt 10,7-15 (44% / 67%)<br>Quinta-feira da 14ª semana do Tempo Comum, Ano II — Mt 10,7-15 (44% / 67%)<br>11º Domingo do Tempo Comum, Ano A — Mt 9,36-10,8 (36% / 67%)<br>Quarta-feira da 14ª semana do Tempo Comum, Ano I — Mt 10,1-7 (43% / 50%)<br>Quarta-feira da 14ª semana do Tempo Comum, Ano II — Mt 10,1-7 (43% / 50%) |
| Homilia XXXI | Lc 13,6-13 | Proferida ao povo na basílica de São Lourenço mártir, no sábado das Quatro Têmporas de setembro. | A passagem comentada (Lc 13,6-13) junta a parábola da figueira estéril e a cura da mulher curvada; o lecionário atual lê as duas em dias diferentes, e nenhum deles cobre a maior parte do que a homilia comenta. | Segunda-feira da 30ª semana do Tempo Comum, Ano I — Lc 13,10-17 (50% / 50%)<br>Segunda-feira da 30ª semana do Tempo Comum, Ano II — Lc 13,10-17 (50% / 50%)<br>3º Domingo da Quaresma, Ano C — Lc 13,1-9 (44% / 50%)<br>Sábado da 29ª semana do Tempo Comum, Ano I — Lc 13,1-9 (44% / 50%)<br>Sábado da 29ª semana do Tempo Comum, Ano II — Lc 13,1-9 (44% / 50%) |
| Homilia XXXII | Lc 9,23-27 | Proferida ao povo na basílica dos santos Processo e Martiniano, no dia natalício deles. | Os santos do dia em que foi pregada não estão no calendário atual, e a única leitura de Lucas que coincide com a passagem (quinta-feira depois das Cinzas, Lc 9,22-25) fica abaixo do critério de correspondência plena. | Quinta-feira depois das Cinzas — Lc 9,22-25 (75% / 60%) |

## São João Maria Vianney — Sermons

Nenhum sermão foi inserido. Motivos: (1) não foi enviada tradução portuguesa, e traduzir 75 sermões seria produzir um texto novo, que precisa da sua decisão e revisão; (2) os PDFs são transcrições em Word, sem folha de rosto, editor ou data, de modo que a edição de origem não pode ser identificada a partir do material; (3) o tomo 4 inclui uma seção de “sermões inéditos”, cuja procedência precisa ser verificada; (4) a dependência destes sermões de coletâneas de outros pregadores do século XVIII é questão a investigar antes de apresentá-los como textos do Cura d’Ars (ver a auditoria).

| Tomo, p. | Ocasião (como no texto) | Título | Ocasião atual provável (não verificada) |
|---|---|---|---|
| 1, 4 | PREMIER DIMANCHE DE L'AVENT | Sur le Jugement dernier | Domingo do Advento (numeração tridentina; o Evangelho difere do atual) |
| 1, 11 | PREMIER DIMANCHE DE L'AVENT | Sur les vérités éternelles | Domingo do Advento (numeração tridentina; o Evangelho difere do atual) |
| 1, 19 | DEUXIEME DIMANCHE DE L'AVENT | Sur le respect humain | Domingo do Advento (numeração tridentina; o Evangelho difere do atual) |
| 1, 25 | QUATRIEME DIMANCHE DE L'AVENT | Sur la Satisfaction | Domingo do Advento (numeração tridentina; o Evangelho difere do atual) |
| 1, 33 | POUR LE JOUR DE NOËL | Sur le Mystère | Natal do Senhor (25/12) |
| 1, 40 | POUR LE JOUR DE NOËL | Sur le Mystère | Natal do Senhor (25/12) |
| 1, 46 | PREMIER DIMANCHE DE L'ANNEE | Sur la Sanctification du Chrétien | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 54 | EPIPHANIE | Sur les Rois Mages | Epifania do Senhor |
| 1, 60 | DEUXIÈME DIMANCHE APRÈS L'ÉPIPHANIE | Sur le Mariage | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 67 | TROISIÈME DIMANCHE APRÈS L'ÉPIPHANIE | Sur la prière d'un pécheur qui ne veut pas quitter le péché | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 75 | TROISIÈME DIMANCHE APRES L'ÉPIPHANIE | Sur l'enfer des Chrétiens | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 82 | QUATRIÈME DIMANCHE APRES L'ÉPIPHANIE | Sur les ennemis de notre salut | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 89 | LA SEXAGÉSIME | Sur la parole de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 97 | MERCREDI DES CENDRES | Sur la Pénitence | Quarta-feira de Cinzas |
| 1, 106 | PREMIER DIMANCHE DE CARÊME | Sur les tentations | 1º Domingo da Quaresma |
| 1, 113 | PREMIER DIMANCHE DE CARÊME | Sur les Indulgences | 1º Domingo da Quaresma |
| 1, 120 | DEUXIÈME DIMANCHE DE CARÊME | Sur l'aumône | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 128 | QUATRIÈME DIMANCHE DE CARÊME | Sur la mort du pécheur | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 1, 138 | DIMANCHE DE LA PASSION | Sur la Contrition | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 3 | DIMANCHE DE QUASIMODO | Sur la Confession Pascale | 2º Domingo da Páscoa (oitava) |
| 2, 8 | 2ème DIMANCHE APRES PÂQUES | Sur la Persévérance | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 16 | 3ème DIMANCHE APRES PÂQUES | Sur les Afflictions | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 22 | 5ème DIMANCHE APRES PÂQUES | Sur la Prière | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 30 | 5ème DIMANCHE APRES PÂQUES | Sur les Rogations et les Processions | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 52 | 2ème dimanche après la Pentecôte | Sur la sainte Messe | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 80 | 5ème dimanche après la Pentecôte | Sur le deuxième Commandement de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 89 | 6ème dimanche après la Pentecôte | Sur la Communion | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 98 | 7ème dimanche après la Pentecôte | Sur la fausse et vraie Vertu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 106 | 7ème dimanche après la Pentecôte | Sur le Mensonge | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 123 | 8ème dimanche après la Pentecôte | Sur le jugement particulier | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 129 | 9ème dimanche après la Pentecôte | Sur les larmes de Jésus‐Christ | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 138 | 10ème dimanche après la Pentecôte | Sur l’orgueil | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 146 | 11ème dimanche après la Pentecôte | Sur le jugement téméraire | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 154 | 11ème dimanche après la Pentecôte | Sur la Médisance | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 2, 162 | 11ème dimanche après la Pentecôte | Sur les péchés cachés en confession | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 3 | 12ème DIMANCHE APRÈS LA PENTECÔTE | Sur le premier Commandement de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 10 | 12ème DIMANCHE APRÈS LA PENTECÔTE | Sur le premier Commandement de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 18 | 12ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'amour du prochain. | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 25 | 13ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'Absolution | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 31 | 13ème DIMANCHE APRÈS LA PENTECÔTE | Sur le service de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 38 | 14ème DIMANCHE APRÈS LA PENTECÔTE | Sur le Monde | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 45 | 15ème DIMANCHE APRÈS LA PENTECÔTE | Sur la pensée de la mort | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 52 | 16ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'Humilité | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 57 | 17ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'amour de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 64 | 17ème DIMANCHE APRÈS LA PENTECÔTE | Sur la Charité | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 70 | 17ème DIMANCHE APRÈS LA PENTECÔTE | Sur la pureté | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 77 | 18ème DIMANCHE APRÈS LA PENTECÔTE | Sur la Tiédeur | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 83 | 18ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'Envie | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 90 | 19ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'Impureté | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 104 | 20ème DIMANCHE APRÈS LA PENTECÔTE | Sur l'Ivrognerie | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 110 | 21ème DIMANCHE APRÈS LA PENTECÔTE | Sur la colère | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 117 | 22ème DIMANCHE APRÈS LA PENTECÔTE | Sur la restitution | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 3, 123 | 23ème DIMANCHE APRÈS LA PENTECÔTE | Sur la mort du juste | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 3 | 3 MAI ‐ INVENTION DE LA SAINTE CROIX | Sur la Croix | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 9 | 24 JUIN FÊTE DE SAINT JEAN-BAPTISTE | Dieu est admirable dans ses saints | Natividade de São João Batista (24/6) |
| 4, 16 | 1er AOUT SUR LE MARTYRE DES MACHABÉES | Nous sommes prêts à mourir plutôt que de violer la loi de Dieu et de notre pays. | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 22 | 15 AOUT FÊTE DE L'ASSOMPTION DE LA STE VIERGE | Sur les grandeurs de Marie. | Assunção de Nossa Senhora |
| 4, 28 | 8 SEPTEMBRE FÊTE DE LA NATIVITÉ DE LA STE VIERGE | C'est de Marie qu'il nous est né un Sauveur. | Natividade de Nossa Senhora (8/9) |
| 4, 34 | PREMIER DIMANCHE D'OCTOBRE FÊTE DU SAINT ROSAIRE | Jésus dit au disciple qu'il aimait : Mon Fils, voilà votre Mère. | Nossa Senhora do Rosário (7/10) |
| 4, 40 | 2 OCTOBRE FÊTE DES SAINTS ANGES GARDIENS | Les anges de ces petits enfants voient sans cesse la face de mon Père céleste | Santos Anjos da Guarda (2/10) |
| 4, 46 | 1er NOVEMBRE FÊTE DE TOUS LES SAINTS | Sur la Sainteté | Todos os Santos |
| 4, 51 | DEUXIÈME SERMON POUR LA FÊTE DE TOUS LES SAINTS | Sur le culte des Saints et des saintes Images | Todos os Santos |
| 4, 55 | 2 NOVEMBRE COMMÉMORATION DES MORTS | La nuit vient, pendant laquelle personne ne peut plus travailler | Fiéis Defuntos (2/11) |
| 4, 61 | AUTRE SERMON POUR LE JOUR DES MORTS | Ayez pitié de moi, vous au moins qui êtes mes amis, car la main du Seigneur s'appesantit sur moi. | Fiéis Defuntos (2/11) |
| 4, 66 | SERMON POUR LA FÊTE DU SAINT PATRON | J'ai cherché parmi eux un homme qui se présentât comme un rempart entre moi et eux… | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 73 | SERMON POUR LA FÊTE DE LA DÉDICACE | Du respect que l'on doit avoir dans les églises | Dedicação de uma igreja (data local) |
| 4, 80 | SERMON SUR LA RELIGION | L'impie a dit dans son cœur : Non, il n'y a point de Dieu | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 85 | SERMON SUR LA CONFIRMATION | Dispositions qu'il faut avoir pour recevoir ce sacrement | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 91 | SERMON SUR L'EXTRÊME-ONCTION | Le Seigneur portera secours au malade sur son lit de douleur… | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 98 | SERMONS INÉDITS — SERMON SUR L'EXAMEN DE CONSCIENCE | Celui qui cache ses péchés se perdra… | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 106 | SERMONS INÉDITS — SERMON SUR LES QUALITÉS DE LA CONFESSION | Je me lèverai, et j'irai me jeter aux pieds de mon père… | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 114 | SERMONS INÉDITS — SERMON SUR LE PÉCHÉ MORTEL | Malheur à nous, parce que nous avons péché. | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 121 | SERMONS INÉDITS — SERMON SUR LA COMMUNION INDIGNE | L'âme qui péchera, mourra | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 129 | SERMONS INÉDITS — SERMON SUR LES DEVOIRS DES PARENTS | Pères et mères, élevez vos enfants… | — (domingo do calendário antigo ou tema; sem correspondência definida) |
| 4, 138 | SERMONS INÉDITS — SERMON SUR LES INDULGENCES |  | — (domingo do calendário antigo ou tema; sem correspondência definida) |

## Santo Antônio de Pádua — Sermões

Nenhum sermão foi inserido. Motivos: (1) a tradução portuguesa enviada é a de Frei Ary E. Pintarelli, OFM (Vozes, 2019), obra protegida, e não há registro de autorização para publicá-la; (2) não foi enviado o texto latino (edição crítica do Centro Studi Antoniani, Pádua, 1979), indispensável para conferir a tradução; (3) os sermões não são homilias pregadas, mas esquemas para pregadores, organizados pelos domingos e festas do calendário do século XIII.

| Coleção | Sermão | Ocasião atual provável (não verificada) |
|---|---|---|
| dominicais e festivos | Domingo da Septuagésima | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Domingo da Sexagésima | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Domingo da quinquagésima | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Início do jejum (Quarta-feira de Cinzas) | Quarta-feira de Cinzas |
| dominicais e festivos | I domingo da Quaresma (1) | 1º Domingo da Quaresma |
| dominicais e festivos | I domingo da Quaresma (2) – A penitência | 1º Domingo da Quaresma |
| dominicais e festivos | II domingo da Quaresma (1) | 2º Domingo da Quaresma |
| dominicais e festivos | II domingo da Quaresma (2) | 2º Domingo da Quaresma |
| dominicais e festivos | III domingo da Quaresma | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | IV domingo da Quaresma | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | V domingo da Quaresma | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Domingo de Ramos | Domingo de Ramos |
| dominicais e festivos | A Ceia do Senhor (Quinta-feira Santa) | Quinta-feira Santa — Ceia do Senhor |
| dominicais e festivos | Páscoa do Senhor (1) | Domingo da Páscoa |
| dominicais e festivos | A ressurreição do Senhor (2) | Domingo da Páscoa |
| dominicais e festivos | Oitava da Páscoa | 2º Domingo da Páscoa (oitava) |
| dominicais e festivos | II domingo depois da Páscoa | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | III domingo depois da Páscoa | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | IV domingo depois da Páscoa | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | V domingo depois da Páscoa | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | VI domingo depois da Páscoa | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Ladainhas ou rogações | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Ascensão do Senhor | Ascensão do Senhor |
| dominicais e festivos | Domingo de Pentecostes (1) | Pentecostes |
| dominicais e festivos | Festa de Pentecostes (2) | Pentecostes |
| dominicais e festivos | I domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | II domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | III domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | IV domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | V domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | VI domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | VII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | VIII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | IX domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | X domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XI domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XIII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XIV domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XV domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XVI domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XVII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XVIII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XIX domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XX domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XXI domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XXII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XXIII domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | XXIV domingo depois de Pentecostes | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | I domingo do Advento | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | II domingo do Advento | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | III domingo do Advento | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | IV domingo do Advento | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Natal do Senhor | Natal do Senhor |
| dominicais e festivos | Festa de Santo Estêvão protomártir | Santo Estêvão (26/12) |
| dominicais e festivos | Festa de São João Evangelista | São João Evangelista (27/12) |
| dominicais e festivos | Festa dos Santos Inocentes | Santos Inocentes (28/12) |
| dominicais e festivos | I domingo depois do Natal | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Circuncisão do Senhor | Santa Maria, Mãe de Deus (1/1; o Evangelho atual inclui a circuncisão, Lc 2,21) |
| dominicais e festivos | II domingo depois do Natal | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | Epifania do Senhor | Epifania do Senhor |
| dominicais e festivos | I domingo depois da oitava da epifania | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | II domingo depois da oitava da epifania | — (domingo do calendário antigo; exige verificação do Evangelho) |
| dominicais e festivos | III domingo depois da oitava da epifania | — (domingo do calendário antigo; exige verificação do Evangelho) |
| marianos | Natividade da Bem-aventurada Virgem Maria | Natividade de Nossa Senhora (8/9) |
| marianos | Anunciação da Bem-aventurada Virgem Maria (1) | Anunciação do Senhor (25/3) |
| marianos | Purificação da Bem-aventurada Virgem Maria (1) | Apresentação do Senhor (2/2) |
| marianos | Assunção da Bem-aventurada Virgem Maria | Assunção de Nossa Senhora |
| marianos | Purificação da Bem-aventurada Virgem Maria (2) | Apresentação do Senhor (2/2) |
| marianos | Anunciação da Bem-aventurada Virgem Maria (2) | Anunciação do Senhor (25/3) |
| festivos | Conversão de São Paulo | Conversão de São Paulo (25/1) |
| festivos | Cátedra de São Pedro | Cátedra de São Pedro (22/2) |
| festivos | Festa dos Santos Apóstolos Filipe e Tiago | Santos Filipe e Tiago (3/5) |
| festivos | Invenção da Santa Cruz | — (domingo do calendário antigo; exige verificação do Evangelho) |
| festivos | Natividade de São João Batista | Natividade de São João Batista (24/6) |
| festivos | Festa dos Santos Apóstolos Pedro e Paulo | São Pedro e São Paulo |
