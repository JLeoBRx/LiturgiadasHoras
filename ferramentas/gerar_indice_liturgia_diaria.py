#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera dados/liturgia-diaria/indice.json: qual arquivo de leituras (e de
orações do Missal) corresponde a cada dia litúrgico.

O acervo traz as leituras nomeadas apenas pelas referências bíblicas
(ex.: 1Cor11172633Lc7110 = 1Cor 11,17-26.33 + Lc 7,1-10). O mapeamento
"dia -> leituras" do aplicativo original não está disponível (código
criptografado). Por isso o índice é reconstruído assim:

 1. tabelas de referências do projeto aberto Liturgical Calendar API
    (ferramentas/fontes-externas), comparando livro, capítulo e versículo
    inicial de cada leitura;
 2. dias de semana do Tempo Comum: o Evangelho segue leitura contínua
    (Marcos: semanas 1-9; Mateus: 10-21; Lucas: 22-34). Cada Evangelho
    aparece em dois arquivos (Ano I e Ano II); o ano é decidido pelo
    livro da primeira leitura;
 3. domingos dos Anos B e C: tabela de Evangelhos (abaixo).

Chaves geradas (usadas por js/daily-liturgy.js):
  TC-24-segunda-II, TC-24-domingo-A, ADV-1-segunda, ADV-dez17,
  NAT-dez29, NAT-jan03, NAT-apos-epifania-segunda, QUA-0-quinta,
  QUA-2-terca, QUA-1-domingo-A, SS-segunda, PAS-1-segunda,
  PAS-3-domingo-B, natal-noite, santo:<id do santoral>, <id da festa>-A ...
"""
import json
import os
import re
from collections import defaultdict

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXT = os.path.join(RAIZ, "ferramentas", "fontes-externas", "liturgicalcalendarapi")
CAT = os.path.join(RAIZ, "ferramentas", "saida", "catalogo_lecionario.json")
SANTORAL = os.path.join(RAIZ, "dados", "calendario", "santoral.json")

EN_PT = {
    "Genesis": "Gn", "Exodus": "Ex", "Leviticus": "Lv", "Numbers": "Nm", "Deuteronomy": "Dt", "Joshua": "Js",
    "Judges": "Jz", "Ruth": "Rt", "1 Samuel": "1Sm", "2 Samuel": "2Sm", "1 Kings": "1Rs", "2 Kings": "2Rs",
    "1 Chronicles": "1Cr", "2 Chronicles": "2Cr", "Ezra": "Esd", "Nehemiah": "Ne", "Tobit": "Tb", "Judith": "Jt",
    "Esther": "Est", "1 Maccabees": "1Mc", "2 Maccabees": "2Mc", "Job": "Jó", "Psalm": "Sl", "Psalms": "Sl",
    "Proverbs": "Pr", "Ecclesiastes": "Ecl", "Song of Songs": "Ct", "Wisdom": "Sb", "Sirach": "Eclo",
    "Isaiah": "Is", "Jeremiah": "Jr", "Lamentations": "Lm", "Baruch": "Br", "Ezekiel": "Ez", "Daniel": "Dn",
    "Hosea": "Os", "Joel": "Jl", "Amos": "Am", "Obadiah": "Ab", "Jonah": "Jn", "Micah": "Mq", "Nahum": "Na",
    "Habakkuk": "Hab", "Zephaniah": "Sf", "Haggai": "Ag", "Zechariah": "Zc", "Malachi": "Ml", "Matthew": "Mt",
    "Mark": "Mc", "Luke": "Lc", "John": "Jo", "Acts": "At", "Romans": "Rm", "1 Corinthians": "1Cor",
    "2 Corinthians": "2Cor", "Galatians": "Gl", "Ephesians": "Ef", "Philippians": "Fl", "Colossians": "Cl",
    "1 Thessalonians": "1Ts", "2 Thessalonians": "2Ts", "1 Timothy": "1Tm", "2 Timothy": "2Tm", "Titus": "Tt",
    "Philemon": "Fm", "Hebrews": "Hb", "James": "Tg", "1 Peter": "1Pd", "2 Peter": "2Pd", "1 John": "1Jo",
    "2 John": "2Jo", "3 John": "3Jo", "Jude": "Jd", "Revelation": "Ap",
}
DIAS_EN = {"Sunday": "domingo", "Monday": "segunda", "Tuesday": "terca", "Wednesday": "quarta", "Thursday": "quinta",
           "Friday": "sexta", "Saturday": "sabado"}
DIAS = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]


# ------------------------------------------------------------------ referências
def ancora_pt(ref):
    """'1Cor 11,17-26.33' -> ('1Cor', 11, '17')"""
    if not ref:
        return None
    ref = re.sub(r"^Joh\b", "Jó", ref.strip())
    ref = ref.replace("Cf.", "").replace("cf.", "").strip()
    m = re.match(r"^([1-3]?[A-ZÁÉÍÓÚa-zéó]+)\s*(\d+)\s*,\s*X?(\d+)", ref)
    if not m:
        m2 = re.match(r"^([1-3]?[A-ZÁÉÍÓÚa-zéó]+)\s*(\d+)", ref)
        if m2:
            return (m2.group(1), int(m2.group(2)), "")
        return None
    return (m.group(1), int(m.group(2)), m.group(3))


def ancora_en(ref):
    """'1 Corinthians 11:17-26, 33' -> ('1Cor', 11, '17')  (primeira opção se houver '|')"""
    if not ref:
        return None
    ref = ref.split("|")[0].strip()
    ref = re.sub(r"^(Cf\.|cf\.)\s*", "", ref)
    m = re.match(r"^((?:[1-3] )?[A-Z][a-zA-Z ]+?)\s+(\d+)\s*[:,]\s*(\d+)", ref)
    if not m:
        return None
    livro = EN_PT.get(m.group(1).strip())
    if not livro:
        return None
    return (livro, int(m.group(2)), m.group(3))


def carregar_catalogo():
    cat = json.load(open(CAT, encoding="utf-8"))
    arquivos = {}
    for ident, v in cat.items():
        secs = v["secoes"]
        l1 = next((r for n, r in secs if n == "Primeira leitura"), None)
        l2 = next((r for n, r in secs if n == "Segunda leitura"), None)
        ev = next((r for n, r in secs if n == "Evangelho"), None)
        arquivos[ident] = {"l1": ancora_pt(l1), "l2": ancora_pt(l2), "ev": ancora_pt(ev), "refs": secs}
    return arquivos


def no_nome(nome, anc, exato=True):
    """A âncora (livro, cap, vers) aparece no nome do arquivo?"""
    if not anc:
        return True
    liv, cap, ver = anc
    alvo = "%s%d%s" % (liv, cap, ver if exato else "")
    alts = [alvo]
    if liv == "Jó":
        alts.append(alvo.replace("Jó", "Joh"))
    for a in alts:
        i = nome.find(a)
        while i >= 0:
            antes = nome[i - 1] if i > 0 else ""
            depois_ok = not (liv == "Jo" and nome[i + 2:i + 3] == "h")
            numerado = liv[0].isalpha() and antes in "123" and antes != "" and not (i >= 2 and nome[i - 2].isdigit())
            if depois_ok and not numerado:
                return True
            i = nome.find(a, i + 1)
    return False


def casar_nome(arquivos, l1=None, ev=None, l2=None, tem2=None, usados=None, sem_l2=False):
    """Casamento pelo nome do arquivo (que concatena as referências)."""
    melhores, melhor = [], -1
    for ident, a in arquivos.items():
        nome = ident.split("/")[-1].replace("-", "")
        if ev and not no_nome(nome, ev, False):
            continue
        if l1 and not no_nome(nome, l1, False):
            continue
        if l2 and not no_nome(nome, l2, False):
            continue
        tem_seg = bool(a["l2"]) or any(n == "Segunda leitura" for n, r in a["refs"]) or len(re.findall(r"[A-ZÁÉÍÓÚ][a-zó]*", nome)) >= 3
        if tem2 is True and not tem_seg:
            continue
        if tem2 is False and tem_seg:
            continue
        pont = sum(2 for x in (ev, l1, l2) if x and no_nome(nome, x, True))
        if usados is not None and ident in usados:
            pont -= 3
        if pont > melhor:
            melhores, melhor = [ident], pont
        elif pont == melhor:
            melhores.append(ident)
    return melhores


def casar(arquivos, l1=None, ev=None, l2=None, tem2=None, usados=None):
    """Arquivos cujas âncoras batem com as dadas (livro+capítulo+versículo inicial)."""
    def ok(a, b):
        if b is None:
            return True
        if a is None:
            return False
        return a[0] == b[0] and a[1] == b[1] and (not b[2] or not a[2] or a[2] == b[2])
    r = []
    for ident, a in arquivos.items():
        if l1 and not ok(a["l1"], l1):
            continue
        if ev and not ok(a["ev"], ev):
            continue
        if l2 and not ok(a["l2"], l2):
            continue
        nome = ident.split("/")[-1]
        tem_seg = bool(a["l2"]) or len(re.findall(r"[A-ZÁÉÍÓÚ][a-zó]*", nome)) >= 3
        if tem2 is True and not tem_seg:
            continue
        if tem2 is False and tem_seg:
            continue
        r.append(ident)
    if usados is not None and len(r) > 1:
        r2 = [x for x in r if x not in usados]
        if r2:
            r = r2
    if not r:
        r = casar_nome(arquivos, l1=l1, ev=ev, l2=l2, tem2=tem2, usados=usados)
    return r


def ext(nome):
    return json.load(open(os.path.join(EXT, "lectionary", nome + ".en.json"), encoding="utf-8"))


# ------------------------------------------------------------------ tabelas próprias
# Evangelhos dos domingos do Tempo Comum, anos B e C (2º ao 34º domingo)
DOM_B = {2: "Jo 1,35", 3: "Mc 1,14", 4: "Mc 1,21", 5: "Mc 1,29", 6: "Mc 1,40", 7: "Mc 2,1", 8: "Mc 2,18",
         9: "Mc 2,23", 10: "Mc 3,20", 11: "Mc 4,26", 12: "Mc 4,35", 13: "Mc 5,21", 14: "Mc 6,1", 15: "Mc 6,7",
         16: "Mc 6,30", 17: "Jo 6,1", 18: "Jo 6,24", 19: "Jo 6,41", 20: "Jo 6,51", 21: "Jo 6,60", 22: "Mc 7,1",
         23: "Mc 7,31", 24: "Mc 8,27", 25: "Mc 9,30", 26: "Mc 9,38", 27: "Mc 10,2", 28: "Mc 10,17",
         29: "Mc 10,35", 30: "Mc 10,46", 31: "Mc 12,28", 32: "Mc 12,38", 33: "Mc 13,24", 34: "Jo 18,33"}
DOM_C = {2: "Jo 2,1", 3: "Lc 1,1", 4: "Lc 4,21", 5: "Lc 5,1", 6: "Lc 6,17", 7: "Lc 6,27", 8: "Lc 6,39",
         9: "Lc 7,1", 10: "Lc 7,11", 11: "Lc 7,36", 12: "Lc 9,18", 13: "Lc 9,51", 14: "Lc 10,1", 15: "Lc 10,25",
         16: "Lc 10,38", 17: "Lc 11,1", 18: "Lc 12,13", 19: "Lc 12,32", 20: "Lc 12,49", 21: "Lc 13,22",
         22: "Lc 14,1", 23: "Lc 14,25", 24: "Lc 15,1", 25: "Lc 16,1", 26: "Lc 16,19", 27: "Lc 17,5",
         28: "Lc 17,11", 29: "Lc 18,1", 30: "Lc 18,9", 31: "Lc 19,1", 32: "Lc 20,27", 33: "Lc 21,5",
         34: "Lc 23,35"}
L1_B = {2: "1Sm 3,3", 3: "Jn 3,1", 4: "Dt 18,15", 5: "Jó 7,1", 6: "Lv 13,1", 7: "Is 43,18", 8: "Os 2,16",
        9: "Dt 5,12", 10: "Gn 3,9", 11: "Ez 17,22", 12: "Jó 38,1", 13: "Sb 1,13", 14: "Ez 2,2", 15: "Am 7,12",
        16: "Jr 23,1", 17: "2Rs 4,42", 18: "Ex 16,2", 19: "1Rs 19,4", 20: "Pr 9,1", 21: "Js 24,1", 22: "Dt 4,1",
        23: "Is 35,4", 24: "Is 50,5", 25: "Sb 2,12", 26: "Nm 11,25", 27: "Gn 2,18", 28: "Sb 7,7", 29: "Is 53,10",
        30: "Jr 31,7", 31: "Dt 6,2", 32: "1Rs 17,10", 33: "Dn 12,1", 34: "Dn 7,13"}
L1_C = {2: "Is 62,1", 3: "Ne 8,2", 4: "Jr 1,4", 5: "Is 6,1", 6: "Jr 17,5", 7: "1Sm 26,2", 8: "Eclo 27,",
        9: "1Rs 8,41", 10: "1Rs 17,17", 11: "2Sm 12,7", 12: "Zc 12,10", 13: "1Rs 19,16", 14: "Is 66,10",
        15: "Dt 30,10", 16: "Gn 18,1", 17: "Gn 18,20", 18: "Ecl 1,2", 19: "Sb 18,6", 20: "Jr 38,4",
        21: "Is 66,18", 22: "Eclo 3,", 23: "Sb 9,13", 24: "Ex 32,7", 25: "Am 8,4", 26: "Am 6,1", 27: "Hab 1,2",
        28: "2Rs 5,14", 29: "Ex 17,8", 30: "Eclo 35,", 31: "Sb 11,22", 32: "2Mc 7,1", 33: "Ml 3,19", 34: "2Sm 5,1"}
# festas com leituras próprias: (primeira leitura, evangelho, com segunda leitura?)
FESTAS = {
    "santo:transfiguracao-A": ("Dn 7,9", "Mt 17,1", False), "santo:transfiguracao-A-domingo": ("Dn 7,9", "Mt 17,1", True),
    "santo:transfiguracao-B": ("Dn 7,9", "Mc 9,2", False), "santo:transfiguracao-B-domingo": ("Dn 7,9", "Mc 9,2", True),
    "santo:transfiguracao-C": ("Dn 7,9", "Lc 9,28", False), "santo:transfiguracao-C-domingo": ("Dn 7,9", "Lc 9,28", True),
    "santo:exaltacao": ("Nm 21,4", "Jo 3,13", False), "santo:exaltacao-domingo": ("Nm 21,4", "Jo 3,13", True),
    "santo:apresentacao": ("Ml 3,1", "Lc 2,22", False), "santo:apresentacao-domingo": ("Ml 3,1", "Lc 2,22", True),
    "santo:latrao": ("Ez 47,1", "Jo 2,13", None), "santo:natividade": ("Mq 5,1", "Mt 1,1", None),
    "santo:assuncao": ("Ap 11,19", "Lc 1,39", None), "santo:pedroepaulo": ("At 12,1", "Mt 16,13", None),
    "santo:saojoao": ("Is 49,1", "Lc 1,57", None), "santo:saomateus": ("Ef 4,1", "Mt 9,9", None),
    "santo:saolucas": ("2Tm 4,10", "Lc 10,1", None), "santo:santoandre": ("Rm 10,9", "Mt 4,18", None),
    "santo:saobartolomeu": ("Ap 21,9", "Jo 1,45", None), "santo:simaoejudas": ("Ef 2,19", "Lc 6,12", None),
    "santo:saotiago": ("2Cor 4,7", "Mt 20,20", None), "santo:stamariamadalena": ("Ct 3,1", "Jo 20,1", None),
    "santo:saolourenco": ("2Cor 9,6", "Jo 12,24", None), "santo:arcanjos": ("Dn 7,9", "Jo 1,47", None),
    "santo:anjos": ("Ex 23,20", "Mt 18,1", None), "santo:saojoaquimesantana": ("Eclo 44,1", "Mt 13,16", None),
    "santo:santamarta": ("1Jo 4,7", "Jo 11,19", None), "santo:fieisdefuntos": ("2Mc 12,43", "Mt 5,1", None),
    "santo:maedaigreja": ("Gn 3,9", "Jo 19,25", None), "santo:NSDores": ("Hb 5,7", "Jo 19,25", None),
    "santo:joaoevangelista": ("1Jo 1,1", "Jo 20,2", None),
    "natal-vigilia": ("Is 62,1", "Mt 1,1", True), "natal-noite": ("Is 9,1", "Lc 2,1", True),
    "natal-aurora": ("Is 62,11", "Lc 2,15", True), "natal-dia": ("Is 52,7", "Jo 1,1", True),
    "NAT-dez29": ("1Jo 2,3", "Lc 2,22", False), "NAT-dez30": ("1Jo 2,12", "Lc 2,36", False),
    "NAT-dez31": ("1Jo 2,18", "Jo 1,1", False), "NAT-jan02": ("1Jo 2,22", "Jo 1,19", False),
    "NAT-jan03": ("1Jo 2,29", "Jo 1,29", False), "NAT-jan04": ("1Jo 3,7", "Jo 1,35", False),
    "NAT-jan05": ("1Jo 3,11", "Jo 1,43", False), "NAT-jan06": ("1Jo 5,5", "Mc 1,7", False),
    "NAT-jan07": ("1Jo 5,14", "Jo 2,1", False),
    "pascoa": ("At 10,34", "Jo 20,1", True), "pentecostes": ("At 2,1", "Jo 20,19", True),
    "vigilia-pascal-A": ("Gn 1,1", "Mt 28,1", True), "vigilia-pascal-B": ("Gn 1,1", "Mc 16,1", True),
    "vigilia-pascal-C": ("Gn 1,1", "Lc 24,1", True),
}

# domingos e solenidades dos tempos fortes, anos B e C: (primeira leitura, evangelho)
FESTIVOS_BC = {
    "ADV-1-domingo-B": ("Is 63,16", "Mc 13,33"), "ADV-2-domingo-B": ("Is 40,1", "Mc 1,1"),
    "ADV-3-domingo-B": ("Is 61,1", "Jo 1,6"), "ADV-4-domingo-B": ("2Sm 7,1", "Lc 1,26"),
    "ADV-1-domingo-C": ("Jr 33,14", "Lc 21,25"), "ADV-2-domingo-C": ("Br 5,1", "Lc 3,1"),
    "ADV-3-domingo-C": ("Sf 3,14", "Lc 3,10"), "ADV-4-domingo-C": ("Mq 5,1", "Lc 1,39"),
    "sagradafamilia-B": (None, "Lc 2,22"), "sagradafamilia-C": (None, "Lc 2,41"),
    "batismo-B": (None, "Mc 1,7"), "batismo-C": (None, "Lc 3,15"),
    "QUA-1-domingo-B": ("Gn 9,8", "Mc 1,12"), "QUA-2-domingo-B": ("Gn 22,1", "Mc 9,2"),
    "QUA-3-domingo-B": ("Ex 20,1", "Jo 2,13"), "QUA-4-domingo-B": ("2Cr 36,14", "Jo 3,14"),
    "QUA-5-domingo-B": ("Jr 31,31", "Jo 12,20"),
    "QUA-1-domingo-C": ("Dt 26,4", "Lc 4,1"), "QUA-2-domingo-C": ("Gn 15,5", "Lc 9,28"),
    "QUA-3-domingo-C": ("Ex 3,1", "Lc 13,1"), "QUA-4-domingo-C": ("Js 5,9", "Lc 15,1"),
    "QUA-5-domingo-C": ("Is 43,16", "Jo 8,1"),
    "ramos-B": (None, "Mc 14,1"), "ramos-C": (None, "Lc 22,14"),
    "divinamisericordia-B": ("At 4,32", "Jo 20,19"), "divinamisericordia-C": ("At 5,12", "Jo 20,19"),
    "PAS-3-domingo-B": ("At 3,13", "Lc 24,35"), "PAS-4-domingo-B": ("At 4,8", "Jo 10,11"),
    "PAS-5-domingo-B": ("At 9,26", "Jo 15,1"), "PAS-6-domingo-B": ("At 10,25", "Jo 15,9"),
    "PAS-3-domingo-C": ("At 5,27", "Jo 21,1"), "PAS-4-domingo-C": ("At 13,14", "Jo 10,27"),
    "PAS-5-domingo-C": ("At 14,21", "Jo 13,31"), "PAS-6-domingo-C": ("At 15,1", "Jo 14,23"),
    "ascensaodosenhor-B": ("At 1,1", "Mc 16,15"), "ascensaodosenhor-C": ("At 1,1", "Lc 24,46"),
    "santissimatrindade-B": ("Dt 4,32", "Mt 28,16"), "santissimatrindade-C": ("Pr 8,22", "Jo 16,12"),
    "TC-2-domingo-C": ("Is 62,1", "Jo 2,1"), "TC-25-domingo-C": ("Am 8,4", "Lc 16,1"),
    "TC-26-domingo-C": ("Am 6,1", "Lc 16,19"),
    "corpuschristi-B": ("Ex 24,3", "Mc 14,12"), "corpuschristi-C": ("Gn 14,18", "Lc 9,11"),
    "scj-B": ("Os 11,1", "Jo 19,31"), "scj-C": ("Ez 34,11", "Lc 15,3"),
}

# Evangelhos dos dias de semana do Tempo Comum (segunda a sábado), semanas 1 a 34
EV_SEMANA = """
Mc 1,14|Mc 1,21|Mc 1,29|Mc 1,40|Mc 2,1|Mc 2,13
Mc 2,18|Mc 2,23|Mc 3,1|Mc 3,7|Mc 3,13|Mc 3,20
Mc 3,22|Mc 3,31|Mc 4,1|Mc 4,21|Mc 4,26|Mc 4,35
Mc 5,1|Mc 5,21|Mc 6,1|Mc 6,7|Mc 6,14|Mc 6,30
Mc 6,53|Mc 7,1|Mc 7,14|Mc 7,24|Mc 7,31|Mc 8,1
Mc 8,11|Mc 8,14|Mc 8,22|Mc 8,27|Mc 8,34|Mc 9,2
Mc 9,14|Mc 9,30|Mc 9,38|Mc 9,41|Mc 10,1|Mc 10,13
Mc 10,17|Mc 10,28|Mc 10,32|Mc 10,46|Mc 11,11|Mc 11,27
Mc 12,1|Mc 12,13|Mc 12,18|Mc 12,28|Mc 12,35|Mc 12,38
Mt 5,1|Mt 5,13|Mt 5,17|Mt 5,20|Mt 5,27|Mt 5,33
Mt 5,38|Mt 5,43|Mt 6,1|Mt 6,7|Mt 6,19|Mt 6,24
Mt 7,1|Mt 7,6|Mt 7,15|Mt 7,21|Mt 8,1|Mt 8,5
Mt 8,18|Mt 8,23|Mt 8,28|Mt 9,1|Mt 9,9|Mt 9,14
Mt 9,18|Mt 9,32|Mt 10,1|Mt 10,7|Mt 10,16|Mt 10,24
Mt 10,34|Mt 11,20|Mt 11,25|Mt 11,28|Mt 12,1|Mt 12,14
Mt 12,38|Mt 12,46|Mt 13,1|Mt 13,10|Mt 13,18|Mt 13,24
Mt 13,31|Mt 13,36|Mt 13,44|Mt 13,47|Mt 13,54|Mt 14,1
Mt 14,13|Mt 14,22|Mt 15,21|Mt 16,13|Mt 16,24|Mt 17,14
Mt 17,22|Mt 18,1|Mt 18,15|Mt 18,21|Mt 19,3|Mt 19,13
Mt 19,16|Mt 19,23|Mt 20,1|Mt 22,1|Mt 22,34|Mt 23,1
Mt 23,13|Mt 23,23|Mt 23,27|Mt 24,42|Mt 25,1|Mt 25,14
Lc 4,16|Lc 4,31|Lc 4,38|Lc 5,1|Lc 5,33|Lc 6,1
Lc 6,6|Lc 6,12|Lc 6,20|Lc 6,27|Lc 6,39|Lc 6,43
Lc 7,1|Lc 7,11|Lc 7,31|Lc 7,36|Lc 8,1|Lc 8,4
Lc 8,16|Lc 8,19|Lc 9,1|Lc 9,7|Lc 9,18|Lc 9,43
Lc 9,46|Lc 9,51|Lc 9,57|Lc 10,1|Lc 10,13|Lc 10,17
Lc 10,25|Lc 10,38|Lc 11,1|Lc 11,5|Lc 11,15|Lc 11,27
Lc 11,29|Lc 11,37|Lc 11,42|Lc 11,47|Lc 12,1|Lc 12,8
Lc 12,13|Lc 12,35|Lc 12,39|Lc 12,49|Lc 12,54|Lc 13,1
Lc 13,10|Lc 13,18|Lc 13,22|Lc 13,31|Lc 14,1|Lc 14,1
Lc 14,12|Lc 14,15|Lc 14,25|Lc 15,1|Lc 16,1|Lc 16,9
Lc 17,1|Lc 17,7|Lc 17,11|Lc 17,20|Lc 17,26|Lc 18,1
Lc 18,35|Lc 19,1|Lc 19,11|Lc 19,41|Lc 19,45|Lc 20,27
Lc 21,1|Lc 21,5|Lc 21,12|Lc 21,20|Lc 21,29|Lc 21,34
"""
# livros da primeira leitura por semana (Ano I | Ano II)
LIVROS_SEMANA = {
    1: ("Hb", "1Sm"), 2: ("Hb", "1Sm 2Sm"), 3: ("Hb", "2Sm"), 4: ("Hb", "2Sm 1Rs Eclo"), 5: ("Gn", "1Rs"),
    6: ("Gn Hb", "Tg"), 7: ("Eclo", "Tg"), 8: ("Eclo", "1Pd Jd"), 9: ("Tb", "2Pd 2Tm"), 10: ("2Cor", "1Rs"),
    11: ("2Cor", "1Rs 2Rs Eclo 2Cr"), 12: ("Gn", "2Rs Lm"), 13: ("Gn", "Am"), 14: ("Gn", "Os Is"), 15: ("Ex", "Is Mq"),
    16: ("Ex", "Mq Jr"), 17: ("Ex Lv", "Jr"), 18: ("Nm Dt", "Jr Na Hab"), 19: ("Dt Js", "Ez"), 20: ("Jz Rt", "Ez"),
    21: ("1Ts", "2Ts 1Cor"), 22: ("1Ts Cl", "1Cor"), 23: ("Cl 1Tm", "1Cor"), 24: ("1Tm", "1Cor"),
    25: ("Esd Ag Zc", "Pr Ecl"), 26: ("Zc Ne Br", "Jó"), 27: ("Jn Ml Jl", "Gl"), 28: ("Rm", "Gl Ef"),
    29: ("Rm", "Ef"), 30: ("Rm", "Ef Fl"), 31: ("Rm", "Fl"), 32: ("Sb", "Tt Fm 2Jo 3Jo"),
    33: ("1Mc 2Mc", "Ap"), 34: ("Dn", "Ap"),
}

# Ano I e Ano II dos dias de semana do Tempo Comum: livros da primeira leitura
LIVROS_ANO_I = {"Hb", "Gn", "Tb", "2Cor", "Ex", "Lv", "Nm", "Dt", "Js", "Jz", "Rt", "1Ts", "Cl", "1Tm",
                "Esd", "Ag", "Zc", "Ne", "Br", "Jn", "Ml", "Jl", "Rm", "Sb", "1Mc", "2Mc", "Dn"}
LIVROS_ANO_II = {"1Sm", "2Sm", "1Rs", "Tg", "1Pd", "Jd", "2Pd", "2Tm", "2Rs", "Lm", "Am", "Os", "Is", "Mq",
                 "Jr", "Na", "Hab", "Ez", "2Ts", "1Cor", "Pr", "Ecl", "Jó", "Gl", "Ef", "Fl", "Tt", "Fm",
                 "2Jo", "3Jo", "Ap", "2Cr"}
ORDEM_EV = {"Mc": 0, "Mt": 1, "Lc": 2}


def main():
    arquivos = carregar_catalogo()
    indice = {}
    origem = {}
    usados = set()

    def por(chave, ident, metodo):
        if chave in indice and indice[chave] != ident:
            return
        indice[chave] = ident
        origem[chave] = metodo
        usados.add(ident)

    # ---------- 1. tempos fortes (dias de semana)
    conv = {}
    for k in ext("feriale_tempus_adventus"):
        m = re.match(r"AdventWeekday(\d)(\w+)", k)
        if m and m.group(2) in DIAS_EN:
            conv[k] = "ADV-%s-%s" % (m.group(1), DIAS_EN[m.group(2)])
        m = re.match(r"AdventWeekdayDec(\d+)", k)
        if m:
            conv[k] = "ADV-dez%s" % m.group(1)
    for k in ext("feriale_tempus_nativitatis"):
        m = re.match(r"ChristmasWeekday(Dec|Jan)(\d+)", k)
        if m:
            conv[k] = "NAT-%s%02d" % ("dez" if m.group(1) == "Dec" else "jan", int(m.group(2)))
        m = re.match(r"DayAfterEpiphany(\w+day)$", k)
        if m:
            conv[k] = "NAT-apos-epifania-%s" % DIAS_EN[m.group(1)]
    for k in ext("feriale_tempus_quadragesimae"):
        if k == "AshWednesday":
            conv[k] = "cinzas"
        m = re.match(r"(\w+day)AfterAshWednesday", k)
        if m:
            conv[k] = "QUA-0-%s" % DIAS_EN[m.group(1)]
        m = re.match(r"LentWeekday(\d)(\w+)", k)
        if m:
            conv[k] = "QUA-%s-%s" % (m.group(1), DIAS_EN[m.group(2)])
        m = re.match(r"(Mon|Tue|Wed)HolyWeek", k)
        if m:
            conv[k] = "SS-%s" % {"Mon": "segunda", "Tue": "terca", "Wed": "quarta"}[m.group(1)]
    for k in ext("feriale_tempus_paschatis"):
        m = re.match(r"(Mon|Tue|Wed|Thu|Fri|Sat)OctaveEaster", k)
        if m:
            conv[k] = "PAS-1-%s" % {"Mon": "segunda", "Tue": "terca", "Wed": "quarta", "Thu": "quinta", "Fri": "sexta", "Sat": "sabado"}[m.group(1)]
        m = re.match(r"EasterWeekday(\d)(\w+)", k)
        if m:
            conv[k] = "PAS-%s-%s" % (m.group(1), DIAS_EN[m.group(2)])
    for nome in ["feriale_tempus_adventus", "feriale_tempus_nativitatis", "feriale_tempus_quadragesimae", "feriale_tempus_paschatis"]:
        for k, v in ext(nome).items():
            if k not in conv or not isinstance(v, dict) or not v.get("gospel"):
                continue
            r = casar(arquivos, l1=ancora_en(v.get("first_reading")), ev=ancora_en(v.get("gospel")), tem2=False, usados=usados)
            if not r:
                r = casar(arquivos, l1=ancora_en(v.get("first_reading")), ev=ancora_en(v.get("gospel")), usados=usados)
            if len(r) >= 1:
                por(conv[k], r[0], "tabela-aberta")

    # ---------- 2. domingos e solenidades (ano A da tabela aberta)
    mapa_dom = {"Advent": "ADV", "Lent": "QUA", "OrdSunday": "TC", "Easter": "PAS"}
    especiais = {"HolyFamily": "sagradafamilia", "BaptismLord": "batismo", "PalmSun": "ramos",
                 "Ascension": "ascensaodosenhor", "Trinity": "santissimatrindade", "CorpusChristi": "corpuschristi",
                 "SacredHeart": "scj", "ChristKing": "cristoreidouniverso", "Easter2": "divinamisericordia"}
    unicos = {"MaryMotherOfGod": "santamaria", "Epiphany": "epifania", "HolyThurs": "ceiadosenhor",
              "GoodFri": "paixaodosenhor", "EasterVigil": "vigilia-pascal", "Easter": "pascoa", "Pentecost": "pentecostes"}
    for ano in "ABC":
        for k, v in ext("dominicale_et_festivum_" + ano).items():
            if not isinstance(v, dict):
                continue
            if k == "Christmas":
                for sub, nome in (("vigil", "vigilia"), ("night", "noite"), ("dawn", "aurora"), ("day", "dia")):
                    s = v.get(sub) or {}
                    r = casar(arquivos, l1=ancora_en(s.get("first_reading")), ev=ancora_en(s.get("gospel")), usados=usados) if s.get("gospel") else []
                    if r:
                        por("natal-" + nome, r[0], "tabela-aberta")
                continue
            if not v.get("gospel"):
                continue
            if k in unicos:
                chave = unicos[k]
            elif k in especiais:
                chave = "%s-%s" % (especiais[k], ano)
            else:
                m = re.match(r"(Advent|Lent|OrdSunday|Easter)(\d+)$", k)
                if not m:
                    continue
                chave = "%s-%s-domingo-%s" % (mapa_dom[m.group(1)], m.group(2), ano)
            r = casar(arquivos, l1=ancora_en(v.get("first_reading")), ev=ancora_en(v.get("gospel")), l2=ancora_en(v.get("second_reading")), usados=usados)
            if not r:
                r = casar(arquivos, l1=ancora_en(v.get("first_reading")), ev=ancora_en(v.get("gospel")), usados=usados)
            if r:
                por(chave, r[0], "tabela-aberta")

    # ---------- 3. domingos B e C (tabela própria)
    for chave, (l1, evref) in FESTIVOS_BC.items():
        if chave.startswith("TC-") and chave not in indice:
            r = casar(arquivos, l1=ancora_pt(l1) if l1 else None, ev=ancora_pt(evref), usados=usados)
            if r:
                por(chave, r[0], "tabela-evangelhos")
    def anc(s):
        return ancora_pt(s.replace(",", ",")) if s else None
    for ano, tab in (("B", DOM_B), ("C", DOM_C)):
        for sem, evref in tab.items():
            chave = "TC-%d-domingo-%s" % (sem, ano) if sem != 34 else "cristoreidouniverso-%s" % ano
            if chave in indice:
                continue
            l1tab = (L1_B if ano == "B" else L1_C).get(sem)
            r = casar(arquivos, l1=ancora_pt(l1tab) if l1tab else None, ev=anc(evref), tem2=True, usados=usados)
            if len(r) == 1:
                por(chave, r[0], "tabela-evangelhos")
            elif len(r) > 1:
                # textos repetidos no acervo (mesmas leituras): usa o primeiro
                origem.setdefault("_ambiguos", []).append([chave, r])
                por(chave, sorted(r)[0], "tabela-evangelhos")
    for chave, (l1, evref) in FESTIVOS_BC.items():
        if chave in indice:
            continue
        r = casar(arquivos, l1=anc(l1), ev=anc(evref), usados=usados)
        if len(r) >= 1:
            por(chave, r[0], "tabela-evangelhos")

    # ---------- 4. dias de semana do Tempo Comum (tabela dos Evangelhos)
    linhas_ev = [l for l in EV_SEMANA.strip().split("\n") if l.strip()]
    relatorio_seq = {"semanas": len(linhas_ev), "sem_arquivo": []}
    for w, linha in enumerate(linhas_ev, start=1):
        for j, evref in enumerate(linha.split("|")):
            dia = DIAS[1 + j]
            ev = ancora_pt(evref)
            def ev_ok(x):
                a = arquivos[x]["ev"]
                if a:  # referência lida do texto: precisa ser exatamente o mesmo início
                    return a[0] == ev[0] and a[1] == ev[1] and a[2] == ev[2]
                return no_nome(x.split("/")[-1], ev, True)
            cands = [x for x in casar_nome(arquivos, ev=ev, tem2=False) if ev_ok(x)]
            livI, livII = (set(t.split()) for t in LIVROS_SEMANA[w])
            for ano, livs in (("I", livI), ("II", livII)):
                chave = "TC-%d-%s-%s" % (w, dia, ano)
                def livro_l1(x):
                    if arquivos[x]["l1"]:
                        return arquivos[x]["l1"][0]
                    nome = x.split("/")[-1]
                    for lv in sorted(livI | livII | {"Jó"}, key=len, reverse=True):
                        if re.match(re.escape(lv) + r"\d", nome) or (lv == "Jó" and re.match(r"Joh\d", nome)):
                            return lv
                    return None
                bons = [x for x in cands if livro_l1(x) in livs]
                if len(bons) >= 1:
                    por(chave, sorted(bons, key=lambda x: x in usados)[0], "tabela-evangelhos-semana")
                else:
                    relatorio_seq["sem_arquivo"].append(chave)

    # conferência com a tabela aberta (ano II e alguns do ano I)
    divergencias = []
    for ano, nome in (("I", "feriale_per_annum_I"), ("II", "feriale_per_annum_II")):
        for k, v in ext(nome).items():
            m = re.match(r"OrdWeekday(\d+)(\w+)", k)
            if not m or not isinstance(v, dict) or not v.get("gospel"):
                continue
            chave = "TC-%s-%s-%s" % (m.group(1), DIAS_EN[m.group(2)], ano)
            r = casar(arquivos, l1=ancora_en(v.get("first_reading")), ev=ancora_en(v.get("gospel")))
            if not r:
                continue
            if chave in indice and indice[chave] not in r:
                divergencias.append([chave, indice[chave], r])
            if chave not in indice:
                por(chave, r[0], "tabela-aberta")

    # ---------- 5. santos (datas fixas): tabela aberta + santoral do Brasil
    sant = json.load(open(SANTORAL, encoding="utf-8"))
    por_data = defaultdict(list)
    for c in sant["fixas"]:
        por_data[c["data"]].append(c["id"])
    datas_en = {}
    for e in json.load(open(os.path.join(EXT, "missals", "propriumdesanctis_1970.json"), encoding="utf-8")):
        datas_en[e["event_key"]] = "%02d-%02d" % (e["month"], e["day"])
    extra_datas = {"StJohnPaulII": "10-22", "StJohnXXIII": "10-11", "MaryMotherChurch": None}
    sanct = ext("sanctorum")
    for k, v in sanct.items():
        if not isinstance(v, dict) or not v.get("gospel"):
            continue
        data = datas_en.get(k) or extra_datas.get(k)
        if not data:
            continue
        ids = por_data.get(data, [])
        if len(ids) != 1:
            # vários santos no dia: tenta pelo nome
            continue
        r = casar(arquivos, l1=ancora_en(v.get("first_reading")), ev=ancora_en(v.get("gospel")), usados=usados)
        if not r:
            r = casar(arquivos, ev=ancora_en(v.get("gospel")), l1=ancora_en(v.get("first_reading")))
        if r:
            por("santo:" + ids[0], r[0], "tabela-aberta")

    for chave, (l1, ev, tem2) in FESTAS.items():
        a1, a2 = ancora_pt(l1), ancora_pt(ev)
        r = [x for x in casar_nome(arquivos, l1=a1, ev=a2, tem2=tem2)
             if no_nome(x.split("/")[-1], a1, True) and no_nome(x.split("/")[-1], a2, True)]
        if not r:
            r = casar(arquivos, l1=a1, ev=a2, tem2=tem2, usados=usados)
        if r:
            indice.pop(chave, None)
            por(chave, r[0], "tabela-festas")

    # santos próprios do Brasil e outros conhecidos (primeira leitura, evangelho)
    PROPRIOS = {
        "santo:NSAparecida": ("Est 5,1", "Jo 2,1"),
        "santo:todosossantos": ("Ap 7,2", "Mt 5,1"),
        "santo:fieisdefuntos": (None, None),
        "santo:assuncao": ("Ap 11,19", "Lc 1,39"),
        "santo:pedroepaulo": ("At 12,1", "Mt 16,13"),
        "santo:saojoao": ("Is 49,1", "Lc 1,57"),
        "santo:imaculada": ("Gn 3,9", "Lc 1,26"),
        "santo:anunciacao": ("Is 7,10", "Lc 1,26"),
        "santo:saojose": ("2Sm 7,4", "Mt 1,16"),
        "santo:NSGuadalupe": (None, "Lc 1,39"),
        "santo:santarosa": (None, None),
    }
    for chave, (l1, ev) in PROPRIOS.items():
        if chave in indice or not ev:
            continue
        r = casar(arquivos, l1=anc(l1), ev=anc(ev))
        if r:
            por(chave, r[0], "tabela-propria")

    # ---------- 6. Missal (orações próprias)
    missal = {}
    raiz_m = os.path.join(RAIZ, "dados", "liturgia-diaria", "missal", "proprio")
    for tempo, pasta in (("ADV", "advento"), ("QUA", "quaresma"), ("PAS", "pascoa"), ("TC", "tempocomum"),
                         ("NAT", "natal"), ("SS", "semanasanta"), ("proprio", "proprio")):
        p = os.path.join(raiz_m, pasta)
        if not os.path.isdir(p):
            continue
        for f in sorted(os.listdir(p)):
            base = f[:-4]
            caminho = "missal/proprio/%s/%s" % (pasta, base)
            if pasta == "proprio":
                missal["santo:" + base] = caminho
                missal[base] = caminho
                continue
            m = re.match(r"^(\d+)(domingo|segunda|terca|quarta|quinta|sexta|sabado)(AD|QA|PA|TC|NA)$", base)
            if m:
                missal["%s-%s-%s" % (tempo, m.group(1), m.group(2))] = caminho
                continue
            m = re.match(r"^(\d+)dezembroAD$", base)
            if m:
                missal["ADV-dez%s" % m.group(1)] = caminho
                continue
            m = re.match(r"^(\d+)dezembroNA$", base)
            if m:
                missal["NAT-dez%s" % m.group(1)] = caminho
                continue
            m = re.match(r"^(\w+?)_(antesdaepifania|ateobatismo)$", base)
            if m:
                missal["NAT-%s-%s" % ("antes-epifania" if m.group(2) == "antesdaepifania" else "apos-epifania", m.group(1))] = caminho
                continue
            m = re.match(r"^2domingoNA$", base)
            if m:
                missal["NAT-domingo-2"] = caminho
                continue
            m = re.match(r"^(\w+)_semanasanta$", base)
            if m:
                missal["SS-%s" % m.group(1)] = caminho
                continue
            missal["%s:%s" % (tempo, base)] = caminho

    for k in list(indice):
        indice[k] = "leituras/" + indice[k]
    saida = {
        "_leia": ("Liga cada dia litúrgico ao arquivo de leituras (pasta leituras/) e de orações (pasta missal/). "
                  "Pode ser corrigido à mão: basta trocar o caminho do arquivo. Chaves: TC-24-segunda-II = "
                  "segunda-feira da 24ª semana do Tempo Comum, Ano II; TC-24-domingo-A = 24º domingo, Ano A; "
                  "santo:<id> = celebração do santoral."),
        "leituras": dict(sorted(indice.items())),
        "missal": dict(sorted(missal.items())),
        "metodo": dict(sorted((k, v) for k, v in origem.items() if not k.startswith("_"))),
    }
    out = os.path.join(RAIZ, "dados", "liturgia-diaria", "indice.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(saida, fh, ensure_ascii=False, indent=1)
    sem_uso = sorted(set(arquivos) - usados)
    print("chaves de leituras:", len(indice), "| missal:", len(missal))
    print("sequência dos Evangelhos (encontrados, esperados):", relatorio_seq)
    print("divergências com a tabela aberta:", len(divergencias))
    for d in divergencias[:10]:
        print("   ", d)
    print("ambíguos:", origem.get("_ambiguos", [])[:5])
    print("arquivos do lecionário não usados:", len(sem_uso))
    json.dump({"sem_uso": sem_uso, "divergencias": divergencias}, open(os.path.join(RAIZ, "ferramentas", "saida", "relatorio_indice_ld.json"), "w"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
