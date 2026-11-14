#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Verificação estrutural dos 85 itens: tradução do Lírio Católico × texto latino
da edição crítica (estrutura extraída localmente por extrair_latim_csa.py).

Para cada sermão:
  - parágrafos numerados nos dois lados; os que só existem num deles;
    duplicados; ordem;
  - extensão de cada parágrafo (palavras do português ÷ palavras do latim):
    a razão é muito estável no conjunto (mediana ~1,47); valores fora da
    faixa indicam omissão, acréscimo ou erro de divisão, e cada caso é
    examinado à mão;
  - referências bíblicas: as do português (entre parênteses) × as das notas
    da edição, parágrafo por parágrafo.

Saída (no repositório, sem texto latino): dados/homilias/antonio/verificacao-estrutural.json
Uso:  python3 ferramentas/homilias/antonio/verificar_estrutura.py <pasta_local_da_extracao_do_latim>
"""
import json
import os
import re
import statistics
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extrair_lirio as EL  # noqa: E402

BASE = os.path.join(EL.RAIZ, "dados", "homilias", "antonio")
FAIXA = (0.95, 1.95)  # fora disto, o parágrafo é examinado à mão
LIVROS = {  # abreviaturas da edição (latim) -> do Lírio (numeração e nomes da Vulgata)
    "Gen": "Gn", "Gn": "Gn", "Ex": "Ex", "Lev": "Lv", "Num": "Nm", "Deut": "Dt", "Ios": "Js", "Iudc": "Jz", "Iudic": "Jz",
    "Judc": "Jz", "Ruth": "Rt", "Rt": "Rt", "1Reg": "1Rs", "2Reg": "2Rs", "3Reg": "3Rs", "4Reg": "4Rs", "4Re": "4Rs", "2Re": "2Rs",
    "2Rg": "2Rs", "1Par": "1Cr", "2Par": "2Cr", "1Esd": "Esd", "Esdr": "Esd", "1Esdr": "Esd", "2Esd": "2Esd", "2Esdr": "2Esd",
    "3Esd": "3Esd", "Neh": "Ne", "Tob": "Tb", "Iudt": "Jt", "Esth": "Est", "Esther": "Est", "Iob": "Jó", "Jb": "Jó", "Ps": "Sl",
    "Prov": "Pr", "Pr": "Pr", "Pro": "Pr", "Eccle": "Ecl", "Cant": "Ct", "Ct": "Ct", "Sap": "Sb", "Eccli": "Eclo", "Si": "Eclo",
    "Is": "Is", "Ier": "Jr", "Lam": "Lm", "Bar": "Br", "Ez": "Ez", "Dan": "Dn", "Os": "Os", "Ioel": "Jl", "Joel": "Jl",
    "Am": "Am", "Abd": "Ab", "Ion": "Jn", "Mich": "Mq", "Nah": "Na", "Hab": "Hab", "Soph": "Sf", "Agg": "Ag", "Ag": "Ag",
    "Zach": "Zc", "Za": "Zc", "Mal": "Ml", "1Mach": "1Mc", "1Macc": "1Mc", "2Mach": "2Mc", "Mt": "Mt", "Mc": "Mc", "Lc": "Lc",
    "Io": "Jo", "Gv": "Jo", "Act": "At", "Rom": "Rm", "Rm": "Rm", "1Cor": "1Cor", "1Co": "1Cor", "2Cor": "2Cor", "Gal": "Gl",
    "Eph": "Ef", "Phil": "Fl", "Phl": "Fl", "Phip": "Fl", "Col": "Cl", "1Thess": "1Ts", "2Thess": "2Ts", "1Tim": "1Tm",
    "1Tm": "1Tm", "2Tim": "2Tm", "Tit": "Tt", "Tt": "Tt", "Philm": "Fm", "Hebr": "Hb", "He": "Hb", "Iac": "Tg", "1Pt": "1Pd",
    "2Pt": "2Pd", "1Io": "1Jo", "2Io": "2Jo", "3Io": "3Jo", "Iud": "Jd", "Apoc": "Ap", "Ap": "Ap",
}
PT_LIVROS = set(LIVROS.values())
REF_LA = re.compile(r"(?<![A-Za-z])((?:[1-4]\s?)?[A-Z][a-z]{0,6})\s+(\d{1,3}),\s?(\d{1,3})")
REF_PT = re.compile(r"((?:[1-4]\s?)?[A-ZÁÉÍÓÚ][a-zéó]{0,4})\s+(\d{1,3}),\s?(\d{1,3})")


LC = re.compile(r"(?<![A-Za-z])((?:[1-4]\s?)?[A-Z][a-z]{0,6})\s+(?:l\.\s?c\.|ibid)")


def refs_latim(notas, numeros):
    """Referências das notas do parágrafo; "Mt l.c." / "Mt ibidem" (passagem já citada) vale para o livro todo."""
    out = []
    for k in numeros:
        nota = notas.get(str(k), "")
        for m in REF_LA.finditer(nota):
            liv = LIVROS.get(m.group(1).replace(" ", ""))
            if liv:
                out.append((liv, int(m.group(2)), int(m.group(3))))
        for m in LC.finditer(nota):
            liv = LIVROS.get(m.group(1).replace(" ", ""))
            if liv:
                out.append((liv, None, None))
    return out


def refs_portugues(texto):
    out = []
    for par in re.findall(r"\(([^()]*\d+,\s?\d+[^()]*)\)", texto):
        livro = None
        for pedaco in re.split(r";\s*", par):
            m = REF_PT.search(pedaco)
            if m and m.group(1).replace(" ", "") in PT_LIVROS:
                livro = m.group(1).replace(" ", "")
                out.append((livro, int(m.group(2)), int(m.group(3))))
            elif livro:
                m2 = re.match(r"\s*(\d{1,3}),\s?(\d{1,3})", pedaco)
                if m2:
                    out.append((livro, int(m2.group(1)), int(m2.group(2))))
    return out


limpa = lambda s: re.sub(r"\s?\[\^\d+\]", "", s)
palavras = lambda s: len(re.findall(r"\w+", s))


def main():
    pasta_la = sys.argv[1]
    csa = {f[:4]: json.load(open(os.path.join(pasta_la, f), encoding="utf-8")) for f in os.listdir(pasta_la) if f.endswith(".json")}
    lirio = sorted((EL.ler(s) for s in sorted(os.listdir(EL.PASTA))), key=lambda x: x["numero_na_colecao"])
    saida, todas = {}, []
    for x in lirio:
        c = EL.codigo(x)
        la = csa[c]
        lapars = [p for s in la["secoes"] for p in s["paragrafos"]]
        ptpars = [(EL.numero_do_texto(p), p) for s in x["secoes"] for p in s["paragrafos"]]
        nla = [p["numero"] for p in lapars]
        npt = [n for n, _ in ptpars if n is not None]
        r = {"paragrafos_latim": len(nla), "paragrafos_portugues": len(npt),
             "so_no_latim": sorted(set(nla) - set(npt)), "so_no_portugues": sorted(set(npt) - set(nla)),
             "duplicados_no_latim": sorted({n for n in nla if nla.count(n) > 1}),
             "duplicados_no_portugues": sorted({n for n in npt if npt.count(n) > 1}),
             "lacunas": [n for n, p in ptpars if "lacuna" in p], "extensao": [], "fora_da_faixa": [],
             "referencias": {"conferidas": 0, "coincidem": 0, "divergentes": [], "so_no_latim": 0}}
        # pares por número; quando o número se repete (dois sermões numerados de novo no mesmo arquivo), por ordem
        vistos = {}
        for n, p in ptpars:
            if n is None or "lacuna" in p:
                continue
            i = vistos.get(n, 0)
            vistos[n] = i + 1
            cand = [q for q in lapars if q["numero"] == n]
            if i >= len(cand):
                continue
            q = cand[i]
            a, b = palavras(limpa(q["texto"])), palavras(" ".join(p["blocos"]))
            razao = round(b / a, 2) if a else None
            r["extensao"].append([n, a, b, razao])
            if a > 40 and razao is not None:
                todas.append(razao)
                if not FAIXA[0] <= razao <= FAIXA[1]:
                    r["fora_da_faixa"].append([n, razao])
            rl = refs_latim(la["notas"], q["notas"])
            rp = refs_portugues(" ".join(p["blocos"]))
            for ref in rp:
                r["referencias"]["conferidas"] += 1
                if ref in rl or any(x[0] == ref[0] and (x[1] is None or (x[1] == ref[1] and abs(x[2] - ref[2]) <= 2)) for x in rl):
                    r["referencias"]["coincidem"] += 1
                else:
                    r["referencias"]["divergentes"].append([n, "%s %d,%d" % ref, sorted({"%s %d,%d" % x for x in rl if x[0] == ref[0] and x[1]})])
            r["referencias"]["so_no_latim"] += len([x for x in rl if x[1] and not any(y[0] == x[0] and y[1] == x[1] for y in rp)])
        saida[c] = r
    med = statistics.median(todas)
    doc = {"_leia": ["Gerado por ferramentas/homilias/antonio/verificar_estrutura.py; não editar à mão. Não contém texto latino: só números.",
                     "extensao: [parágrafo, palavras do latim, palavras do português, razão]. fora_da_faixa: parágrafos com razão fora de "
                     "%.2f–%.2f (mediana do conjunto: %.2f), examinados um a um (ver registro-editorial.json)." % (FAIXA[0], FAIXA[1], med),
                     "referencias: as do português (entre parênteses) × as das notas da edição, por parágrafo; 'divergentes' são as do "
                     "português sem correspondente nas notas (mesmo livro e capítulo, versículo inicial até 2 de distância)."],
           "mediana_da_razao": med, "faixa": FAIXA, "sermoes": saida}
    json.dump(doc, open(os.path.join(BASE, "verificacao-estrutural.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    fora = sum(len(v["fora_da_faixa"]) for v in saida.values())
    div = sum(len(v["referencias"]["divergentes"]) for v in saida.values())
    conf = sum(v["referencias"]["conferidas"] for v in saida.values())
    print("parágrafos fora da faixa:", fora, "| referências conferidas:", conf, "divergentes:", div)


if __name__ == "__main__":
    main()
