#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera dados/calendario/santoral.json: calendário dos santos (datas fixas)
para o Brasil, ligando cada celebração à pasta do seu ofício próprio em
dados/liturgia-das-horas/proprio/<id>.

Graus: solenidade | festa | memoria | memoria-facultativa
Os nomes vêm do cabeçalho dos próprios arquivos do acervo.
Depois de gerado, o arquivo pode (e deve) ser editado à mão.
"""
import json, os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAT = os.path.join(RAIZ, "ferramentas", "saida", "catalogo_oficios.json")

S, F, M, MF = "solenidade", "festa", "memoria", "memoria-facultativa"
# cor: branco | vermelho | roxo | verde | rosa | preto
TAB = [
 ("01-02","basilioegregorio",M,"branco"),("01-03","ssnomedejesus",MF,"branco"),
 ("01-07","raimundopenyafort",MF,"branco"),("01-13","santohilario",MF,"branco"),("01-17","santoantao",M,"branco"),
 ("01-20","saofabiano",MF,"vermelho"),("01-20","saosebastiao",MF,"vermelho"),("01-21","santaines",M,"vermelho"),
 ("01-22","saovicente",MF,"vermelho"),("01-24","saofranciscosales",M,"branco"),("01-25","conversaosaopaulo",F,"branco"),
 ("01-26","saotimoteoetito",M,"branco"),("01-27","angelamerici",MF,"branco"),("01-28","santotomas",M,"branco"),
 ("01-31","saojoaobosco",M,"branco"),
 ("02-02","apresentacao",F,"branco"),("02-03","saobras",MF,"vermelho"),("02-03","santooscar",MF,"branco"),
 ("02-05","santaagueda",M,"vermelho"),("02-06","saopaulomiki",M,"vermelho"),("02-08","jeronimoemiliani",MF,"branco"),
 ("02-08","josefinabakhita",MF,"branco"),("02-10","santaescolastica",M,"branco"),("02-11","NSLourdes",MF,"branco"),
 ("02-14","saociriloemetodio",M,"branco"),("02-17","setesantos",MF,"branco"),("02-21","pedrodamiao",MF,"branco"),
 ("02-22","catedra",F,"branco"),("02-23","policarpo",M,"vermelho"),("02-27","gregorionarek",MF,"branco"),
 ("03-04","saocasimiro",MF,"branco"),("03-07","perpetuaefelicidade",M,"vermelho"),("03-08","joaodedeus",MF,"branco"),
 ("03-09","franciscaromana",MF,"branco"),("03-17","saopatricio",MF,"branco"),("03-18","cirilojerusalem",MF,"branco"),
 ("03-19","saojose",S,"branco"),("03-23","turibiodemogrovejo",MF,"branco"),("03-25","anunciacao",S,"branco"),
 ("04-02","franciscodepaula",MF,"branco"),("04-04","santoisidoro",MF,"branco"),("04-05","saovicenteferrer",MF,"branco"),
 ("04-07","joaodelasalle",M,"branco"),("04-11","estanislau",M,"vermelho"),("04-13","martinhoI",MF,"vermelho"),
 ("04-21","santoanselmo",MF,"branco"),("04-23","saojorge",MF,"vermelho"),("04-24","saofidelis",MF,"vermelho"),
 ("04-25","saomarcos",F,"vermelho"),("04-28","pedrochanel",MF,"vermelho"),("04-28","saoluismontfort",MF,"branco"),
 ("04-29","santacatarina",M,"branco"),("04-30","saopiov",MF,"branco"),
 ("05-01","saojoseoperario",MF,"branco"),("05-02","santoatanasio",M,"branco"),("05-03","saofilipeetiago",F,"vermelho"),
 ("05-10","joaodeavila",MF,"branco"),("05-12","nereueaquiles",MF,"vermelho"),("05-12","saopancracio",MF,"vermelho"),
 ("05-13","NSFatima",MF,"branco"),("05-14","saomatias",F,"vermelho"),("05-18","joaoi",MF,"vermelho"),
 ("05-20","saobernardino",MF,"branco"),("05-22","ritadecassia",MF,"branco"),("05-25","saobeda",MF,"branco"),
 ("05-25","saogregoriovii",MF,"branco"),("05-25","madalenadepazzi",MF,"branco"),("05-26","saofilipeneri",M,"branco"),
 ("05-27","agostinhodecantuaria",MF,"branco"),("05-29","paulovi",MF,"branco"),("05-31","visitacao",F,"branco"),
 ("06-01","saojustino",M,"vermelho"),("06-02","marcelinoepedro",MF,"vermelho"),("06-03","saocarloslwanga",M,"vermelho"),
 ("06-05","saobonifacio",M,"vermelho"),("06-06","norberto",MF,"branco"),("06-09","josedeanchieta",M,"branco"),
 ("06-09","santoefrem",MF,"branco"),("06-11","saobarnabe",M,"vermelho"),("06-13","santoantonio",M,"branco"),
 ("06-19","saoromualdo",MF,"branco"),("06-21","saoluisgonzaga",M,"branco"),("06-22","paulinodenola",MF,"branco"),
 ("06-22","joaofishertomasmore",MF,"vermelho"),("06-24","saojoao",S,"branco"),("06-27","saociriloalexandria",MF,"branco"),
 ("06-28","santoirineu",M,"vermelho"),("06-29","pedroepaulo",S,"vermelho"),("06-30","protomartiresroma",MF,"vermelho"),
 ("07-03","saotome",F,"vermelho"),("07-04","isabeldeportugal",MF,"branco"),("07-05","santoantoniomzacaria",MF,"branco"),
 ("07-06","mariagoretti",MF,"vermelho"),("07-09","santapaulina",M,"branco"),("07-09","agostinhozhaorong",MF,"vermelho"),
 ("07-11","saobento",M,"branco"),("07-13","santohenrique",MF,"branco"),("07-14","camilodelellis",MF,"branco"),
 ("07-15","saoboaventura",M,"branco"),("07-16","NSCarmo",F,"branco"),("07-17","inaciodeazevedo",M,"vermelho"),
 ("07-20","santoapolinario",MF,"vermelho"),("07-21","lourencodebrindisi",MF,"branco"),("07-22","stamariamadalena",F,"branco"),
 ("07-23","santabrigida",MF,"branco"),("07-24","saocharbel",MF,"branco"),("07-25","saotiago",F,"vermelho"),
 ("07-26","saojoaquimesantana",M,"branco"),("07-29","santamarta",M,"branco"),("07-30","saopedrocrisologo",MF,"branco"),
 ("07-31","santoinacio",M,"branco"),
 ("08-01","santoafonso",M,"branco"),("08-02","eusebiovercelli",MF,"branco"),("08-02","pedroeymard",MF,"branco"),
 ("08-04","saojmvianney",M,"branco"),("08-05","santamariamaior",MF,"branco"),("08-06","transfiguracao",F,"branco"),
 ("08-07","saosisto",MF,"vermelho"),("08-07","saocaetano",MF,"branco"),("08-08","saodomingos",M,"branco"),
 ("08-09","beneditadacruz",MF,"vermelho"),("08-10","saolourenco",F,"vermelho"),("08-11","santaclara",M,"branco"),
 ("08-12","santajoanadechantal",MF,"branco"),("08-13","santadulce",M,"branco"),("08-13","saoponciano",MF,"vermelho"),
 ("08-14","saomaximiliano",M,"vermelho"),("08-15","assuncao",S,"branco"),("08-16","estevaodahungria",MF,"branco"),
 ("08-19","saojoaoeudes",MF,"branco"),("08-20","saobernardo",M,"branco"),("08-21","saopiox",M,"branco"),
 ("08-22","NSRainha",M,"branco"),("08-23","santarosa",F,"branco"),("08-24","saobartolomeu",F,"vermelho"),
 ("08-25","saoluisdefranca",MF,"branco"),("08-25","josedecalasanz",MF,"branco"),("08-27","santamonica",M,"branco"),
 ("08-28","santoagostinho",M,"branco"),("08-29","martiriobatista",M,"vermelho"),
 ("09-03","saogregorio",M,"branco"),("09-05","santateresadecalcuta",MF,"branco"),("09-08","natividade",F,"branco"),
 ("09-09","saopedroclaver",MF,"branco"),("09-12","ssnomedemaria",MF,"branco"),("09-13","saojoaocrisostomo",M,"branco"),
 ("09-14","exaltacao",F,"vermelho"),("09-15","NSDores",M,"branco"),("09-16","cornelioecipriano",M,"vermelho"),
 ("09-17","saoroberto",MF,"branco"),("09-17","hildegarda",MF,"branco"),("09-19","saojanuario",MF,"vermelho"),
 ("09-20","santoandrekim",M,"vermelho"),("09-21","saomateus",F,"vermelho"),("09-23","saopio",M,"branco"),
 ("09-26","cosmeedamiao",MF,"vermelho"),("09-27","saovicentedepaulo",M,"branco"),("09-28","saovenceslau",MF,"vermelho"),
 ("09-28","lourencoruiz",MF,"vermelho"),("09-29","arcanjos",F,"branco"),("09-30","saojeronimo",M,"branco"),
 ("10-01","santateresinha",M,"branco"),("10-02","anjos",M,"branco"),("10-03","andreeambrosio",M,"vermelho"),
 ("10-04","saofrancisco",M,"branco"),("10-05","beneditoonegro",MF,"branco"),("10-05","faustinakowalska",MF,"branco"),("10-06","saobruno",MF,"branco"),
 ("10-07","NSRosario",M,"branco"),("10-09","saodionisio",MF,"vermelho"),("10-09","saojoaoleonardi",MF,"branco"),
 ("10-09","saojoaonewman",MF,"branco"),("10-11","joaoxxiii",MF,"branco"),("10-12","NSAparecida",S,"branco"),
 ("10-14","saocalisto",MF,"vermelho"),("10-15","santateresa",M,"branco"),("10-16","santaedviges",MF,"branco"),
 ("10-16","margaridaalacoque",MF,"branco"),("10-17","inaciodeantioquia",M,"vermelho"),("10-18","saolucas",F,"vermelho"),
 ("10-19","joaobrebeuf",MF,"vermelho"),("10-19","paulodacruz",MF,"branco"),("10-19","pedroalcantara",MF,"branco"),
 ("10-22","joaopauloii",MF,"branco"),("10-23","joaocapistrano",MF,"branco"),("10-24","antoniomariaclaret",MF,"branco"),
 ("10-25","antoniogalvao",M,"branco"),("10-28","simaoejudas",F,"vermelho"),
 ("11-01","todosossantos",S,"branco"),("11-02","fieisdefuntos","comemoracao-defuntos","roxo"),
 ("11-03","martinhodelima",MF,"branco"),("11-04","carlosborromeu",M,"branco"),("11-09","latrao",F,"branco"),
 ("11-10","saoleao",M,"branco"),("11-11","saomartinho",M,"branco"),("11-12","saojosafa",M,"vermelho"),
 ("11-15","santoalberto",MF,"branco"),("11-16","margaridadaescocia",MF,"branco"),("11-16","santagertrudes",MF,"branco"),
 ("11-17","isabeldahungria",M,"branco"),("11-18","basilicaspedroepaulo",MF,"branco"),("11-19","roquegonzalez",M,"vermelho"),
 ("11-21","apresentacaoNS",M,"branco"),("11-22","santacecilia",M,"vermelho"),("11-23","saoclemente",MF,"vermelho"),
 ("11-23","saocolumbano",MF,"branco"),("11-24","santoandredung",M,"vermelho"),("11-25","catarinadealexandria",MF,"vermelho"),
 ("11-30","santoandre",F,"vermelho"),
 ("12-03","franciscoxavier",M,"branco"),("12-04","joaodamasceno",MF,"branco"),("12-06","saonicolau",MF,"branco"),
 ("12-07","santoambrosio",M,"branco"),("12-08","imaculada",S,"branco"),("12-09","saojoaodiego",MF,"branco"),
 ("12-10","NSLoreto",MF,"branco"),("12-11","saodamaso",MF,"branco"),("12-12","NSGuadalupe",F,"branco"),
 ("12-13","santaluzia",M,"vermelho"),("12-14","saojoaodacruz",M,"branco"),("12-21","pedrocanisio",MF,"branco"),
 ("12-23","joaocancio",MF,"branco"),("12-26","santoestevao",F,"vermelho"),("12-27","joaoevangelista",F,"branco"),
 ("12-28","santosinocentes",F,"vermelho"),("12-29","tomasbecket",MF,"vermelho"),("12-31","saosilvestre",MF,"branco"),
]
# celebrações presentes no acervo mas próprias de ordens religiosas ou de
# outros calendários: ficam desativadas (podem ser ativadas à mão)
INATIVOS = [
 ("09-04","tiagodeviterbo",MF,"branco","Próprio agostiniano."),
 ("09-22","tomasdevilanova",F,"branco","Próprio agostiniano."),
 ("12-04","joaocalabria",MF,"branco","Próprio de congregação religiosa."),
 ("06-26","josemariaescriva",MF,"branco","Não consta do calendário geral; usado em alguns calendários particulares."),
]
# celebrações do calendário do Brasil SEM textos próprios no acervo: entram com
# "oficio": null e o site usa o ofício do dia de semana, com um aviso
SEM_TEXTOS = [
 ("04-23","santoadalberto","Santo Adalberto, Bispo e Mártir",MF,"vermelho"),
]
AVISO_SEM_TEXTOS = "O acervo não traz os textos próprios desta memória; usam-se o ofício e as orações do dia de semana."
# solenidades e festas móveis (datas calculadas pelo motor do calendário)
MOVEIS = {
 "natal": (S, "branco"), "santamaria": (S, "branco"), "sagradafamilia": (F, "branco"), "epifania": (S, "branco"), "batismo": (F, "branco"),
 "cinzas": ("cinzas", "roxo"), "ramos": ("domingo", "vermelho"), "ceiadosenhor": ("triduo", "branco"),
 "paixaodosenhor": ("triduo", "vermelho"), "sabadosanto": ("triduo", "roxo"), "pascoa": ("triduo", "branco"),
 "divinamisericordia": ("domingo", "branco"), "ascensaodosenhor": (S, "branco"), "pentecostes": (S, "vermelho"),
 "maedaigreja": (M, "branco"), "santissimatrindade": (S, "branco"), "corpuschristi": (S, "branco"),
 "scj": (S, "branco"), "icvm": (M, "branco"), "cristoreidouniverso": (S, "branco"),
 "santamarianosabado": (MF, "branco"),
}


NOMES = {
 "santamaria": "Santa Maria, Mãe de Deus", "cinzas": "Quarta-feira de Cinzas",
 "ceiadosenhor": "Quinta-feira Santa — Ceia do Senhor", "paixaodosenhor": "Sexta-feira da Paixão do Senhor",
 "sabadosanto": "Sábado Santo", "pascoa": "Domingo da Páscoa na Ressurreição do Senhor",
 "divinamisericordia": "2º Domingo da Páscoa (da Divina Misericórdia)",
 "corpuschristi": "Santíssimo Corpo e Sangue de Cristo",
 "andreeambrosio": "Santos André de Soveral, Ambrósio Francisco Ferro e Companheiros, Mártires",
 "santoandredung": "Santo André Dung-Lac, Presbítero, e Companheiros, Mártires",
 "franciscodepaula": "São Francisco de Paula, Eremita",
 "NSGuadalupe": "Nossa Senhora de Guadalupe, Padroeira da América Latina",
 # os arquivos destes santos não têm cabeçalho com o nome (nome tirado do próprio texto)
 "joaodedeus": "São João de Deus, Religioso",
 "franciscaromana": "Santa Francisca Romana, Religiosa",
 "pedroeymard": "São Pedro Julião Eymard, Presbítero",
 "estevaodahungria": "Santo Estêvão da Hungria",
 "faustinakowalska": "Santa Faustina Kowalska, Virgem",
 "joaocancio": "São João Câncio, Presbítero",
}


def nome_bonito(t):
    t = re.sub(r"\{[^}]*\}", "", t).split("|")[0].strip().strip(",")
    menores = {"de","da","do","das","dos","e","o","a","os","as","em","no","na","ao","à","um","uma","para"}
    romanos = {"I","II","III","IV","V","VI","VII","X","XXIII"}
    out = []
    for i, w in enumerate(t.split()):
        lw = w.lower()
        if w.strip(",") in romanos:
            out.append(w)
        elif i > 0 and lw in menores:
            out.append(lw)
        else:
            out.append(lw[:1].upper() + lw[1:])
    s = " ".join(out)
    s = s.replace("(De ", "(de ").replace("Sant'ana", "Sant'Ana")
    s = re.sub(r"\s+para Comemoração.*$", "", s, flags=re.I)
    return s


def main():
    cat = json.load(open(CAT, encoding="utf-8"))
    nomes, horas = {}, {}
    for src, info in cat.items():
        m = re.match(r"liturgia-das-horas/proprio/([^/]+)/(.+)\.txt", info["destino"])
        if not m:
            continue
        slug, hora = m.group(1), m.group(2)
        horas.setdefault(slug, set()).add(hora)
        if info["celebracao"] and "Até o presente" not in info["celebracao"]:
            linhas = [l for l in info["celebracao"].split("\n") if not l.startswith("{")]
            if linhas and (slug not in nomes or hora == "leituras"):
                nomes[slug] = " ".join(linhas)
    faltando = []
    def item(data, slug, grau, cor, ativo=True, nota=None):
        if slug not in horas:
            faltando.append(slug)
        d = {"data": data, "id": slug, "nome": NOMES.get(slug) or nome_bonito(nomes.get(slug, slug)), "grau": grau, "cor": cor,
             "oficio": "proprio/" + slug}
        if not ativo:
            d["ativo"] = False
        if nota:
            d["nota"] = nota
        return d
    fixos = [item(*t) for t in TAB]
    fixos += [item(d, s, g, c, False, n) for d, s, g, c, n in INATIVOS]
    fixos += [{"data": d, "id": s, "nome": n, "grau": g, "cor": c, "oficio": None, "nota": AVISO_SEM_TEXTOS}
              for d, s, n, g, c in SEM_TEXTOS]
    fixos.sort(key=lambda x: (x["data"], x["id"]))
    moveis = {s: {"id": s, "nome": NOMES.get(s) or nome_bonito(nomes.get(s, s)), "grau": g, "cor": c, "oficio": "proprio/" + s}
              for s, (g, c) in MOVEIS.items()}
    usados = {t[1] for t in TAB} | {t[1] for t in INATIVOS} | set(MOVEIS)
    sobra = sorted(set(horas) - usados)
    saida = {
        "_leia": ("Calendário dos santos para o Brasil. 'data' = MM-DD. 'grau': solenidade, festa, memoria, "
                  "memoria-facultativa. 'oficio' aponta para a pasta dos textos em dados/liturgia-das-horas. "
                  "Use \"ativo\": false para desligar uma celebração sem apagá-la. "
                  "Sem textos próprios no acervo: \"oficio\": null (o site usa o ofício do dia e avisa)."),
        "fixas": fixos,
        "moveis": moveis,
    }
    out = os.path.join(RAIZ, "dados", "calendario", "santoral.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(saida, fh, ensure_ascii=False, indent=2)
    print("fixas:", len(fixos), "móveis:", len(moveis))
    print("sem ofício no acervo:", faltando)
    print("pastas do próprio não usadas no calendário:", sobra)

if __name__ == "__main__":
    main()
