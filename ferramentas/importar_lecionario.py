#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Importa o Lecionário (leituras da Missa) e o Missal (orações da Missa) do
acervo para dados/liturgia-diaria.

  dados/liturgia-diaria/leituras/<referencias>.txt   leituras de cada dia
  dados/liturgia-diaria/missal/<tempo>/<dia>.txt     orações próprias

Também gera ferramentas/saida/catalogo_lecionario.json com as referências
de cada arquivo (usado por gerar_indice_liturgia_diaria.py).

ATENÇÃO: sobrescreve os arquivos. Use apenas na importação inicial.
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from conversor_lecionario import Lecionario  # noqa: E402
from conversor_html import Documento  # noqa: E402

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACERVO = os.path.join(RAIZ, "Recursos", "Liturgia das Horas", "assets", "Resources")
PREFIXO = "Recursos/Liturgia das Horas/assets/Resources/"

# abreviações usadas nos nomes dos arquivos do acervo (ordem: mais longas antes)
LIVROS = ["1Cor", "2Cor", "1Ts", "2Ts", "1Tm", "2Tm", "1Pd", "2Pd", "1Jo", "2Jo", "3Jo", "1Sm", "2Sm",
          "1Rs", "2Rs", "1Cr", "2Cr", "1Mc", "2Mc", "Eclo", "Ecl", "Est", "Esd", "Ex", "Ez", "Ef",
          "Gn", "Gl", "Hab", "Hb", "Ag", "Am", "Ap", "At", "Br", "Cl", "Ct", "Dn", "Dt", "Fl", "Fm",
          "Is", "Jd", "Jl", "Jn", "Jó", "Joh", "Jo", "Jr", "Js", "Jt", "Jz", "Lc", "Lm", "Lv", "Mc",
          "Ml", "Mq", "Mt", "Na", "Ne", "Nm", "Os", "Pr", "Rm", "Rt", "Sb", "Sf", "Sl", "Tb", "Tg",
          "Tt", "Zc", "Ab"]

INCIPIT = [
    (r"segundo Mateus", "Mt"), (r"segundo Marcos", "Mc"), (r"segundo Lucas", "Lc"), (r"segundo João", "Jo"),
    (r"Atos dos Apóstolos", "At"), (r"Apocalipse", "Ap"), (r"Primeira Carta de São Paulo aos Coríntios", "1Cor"),
    (r"Segunda Carta de São Paulo aos Coríntios", "2Cor"), (r"aos Romanos", "Rm"), (r"aos Gálatas", "Gl"),
    (r"aos Efésios", "Ef"), (r"aos Filipenses", "Fl"), (r"aos Colossenses", "Cl"),
    (r"Primeira Carta de São Paulo aos Tessalonicenses", "1Ts"), (r"Segunda Carta de São Paulo aos Tessalonicenses", "2Ts"),
    (r"Primeira Carta de São Paulo a Timóteo", "1Tm"), (r"Segunda Carta de São Paulo a Timóteo", "2Tm"),
    (r"a Tito", "Tt"), (r"a Filêmon", "Fm"), (r"aos Hebreus", "Hb"), (r"Carta de São Tiago", "Tg"),
    (r"Primeira Carta de São Pedro", "1Pd"), (r"Segunda Carta de São Pedro", "2Pd"),
    (r"Primeira Carta de São João", "1Jo"), (r"Segunda Carta de São João", "2Jo"), (r"Terceira Carta de São João", "3Jo"),
    (r"Carta de São Judas", "Jd"), (r"Gênesis", "Gn"), (r"Êxodo", "Ex"), (r"Levítico", "Lv"), (r"Números", "Nm"),
    (r"Deuteronômio", "Dt"), (r"Josué", "Js"), (r"Juízes", "Jz"), (r"Rute", "Rt"), (r"Primeiro Livro de Samuel", "1Sm"),
    (r"Segundo Livro de Samuel", "2Sm"), (r"Primeiro Livro dos Reis", "1Rs"), (r"Segundo Livro dos Reis", "2Rs"),
    (r"Primeiro Livro das Crônicas", "1Cr"), (r"Segundo Livro das Crônicas", "2Cr"), (r"Esdras", "Esd"),
    (r"Neemias", "Ne"), (r"Tobias", "Tb"), (r"Judite", "Jt"), (r"Ester", "Est"), (r"Macabeus", "Mc"),
    (r"Jó", "Jó"), (r"Provérbios", "Pr"), (r"Eclesiastes", "Ecl"), (r"Cântico dos Cânticos", "Ct"),
    (r"Sabedoria", "Sb"), (r"Eclesiástico", "Eclo"), (r"Isaías", "Is"), (r"Jeremias", "Jr"),
    (r"Lamentações", "Lm"), (r"Baruc", "Br"), (r"Ezequiel", "Ez"), (r"Daniel", "Dn"), (r"Oseias", "Os"),
    (r"Joel", "Jl"), (r"Amós", "Am"), (r"Abdias", "Ab"), (r"Jonas", "Jn"), (r"Miqueias", "Mq"), (r"Naum", "Na"),
    (r"Habacuc", "Hab"), (r"Sofonias", "Sf"), (r"Ageu", "Ag"), (r"Zacarias", "Zc"), (r"Malaquias", "Ml"),
]


def so_alnum(s):
    return re.sub(r"[^0-9A-Za-zÀ-ÿ]", "", s)


def livros_do_nome(base, refs):
    """Usa o nome do arquivo (referências concatenadas) para descobrir o livro
    de cada leitura. refs = lista de referências sem livro (ex.: '11,17-26.33')."""
    res = []
    pos = 0
    for r in refs:
        alvo = so_alnum(r)
        achou = None
        for liv in sorted(LIVROS, key=len, reverse=True):
            i = base.find(liv + alvo, pos)
            if i == pos or (i >= 0 and achou is None and i - pos < 3):
                achou = (liv, i)
                break
        if achou:
            res.append(achou[0])
            pos = achou[1] + len(achou[0]) + len(alvo)
        else:
            res.append(None)
    return res


ROTULOS_MISSAL = ["Antífona da entrada", "Antífona de entrada", "Coleta", "Oração do dia", "Sobre as oferendas",
                  "Oração sobre as oferendas", "Antífona da comunhão", "Antífona de comunhão", "Depois da comunhão",
                  "Oração depois da comunhão", "Oração sobre o povo", "Bênção solene", "Prefácio"]


def estruturar_missal(txt):
    """Transforma '{Coleta}' etc. em seções (@secao Coleta)."""
    cab, _, corpo = txt.partition("\n\n")
    linhas = corpo.split("\n")
    out = []
    for l in linhas:
        m = re.match(r"^\{(%s)\}\s*(?:\{([^{}]*)\})?\s*(.*)$" % "|".join(re.escape(r) for r in ROTULOS_MISSAL), l)
        if m:
            ref = (m.group(2) or "").strip()
            out.append("")
            out.append("@secao %s%s" % (m.group(1), (" | " + ref) if ref else ""))
            out.append("@texto")
            if m.group(3).strip():
                out.append(m.group(3).strip())
            continue
        if l.startswith("@texto") and out and out[-1].startswith("@texto"):
            continue
        out.append(l)
    corpo = "\n".join(out)
    corpo = re.sub(r"@texto\n+(?=@secao)", "", corpo)
    corpo = re.sub(r"^\s*@texto\s*\n(?=\s*\n@secao)", "", corpo)
    return cab + "\n\n" + re.sub(r"\n{3,}", "\n\n", corpo).strip() + "\n"


def slug_arquivo(base):
    s = re.sub(r"[^0-9A-Za-z]+", "-", base).strip("-")
    return s


def main():
    raiz_lec = os.path.join(ACERVO, "lecionario")
    saida = os.path.join(RAIZ, "dados", "liturgia-diaria")
    catalogo = {}
    for dp, dn, fn in os.walk(raiz_lec):
        for f in sorted(fn):
            if not f.endswith(".htm"):
                continue
            rel = os.path.relpath(os.path.join(dp, f), raiz_lec)
            base = f[:-4]
            with open(os.path.join(dp, f), encoding="utf-8", errors="replace") as fh:
                html = fh.read()
            L = Lecionario(html).processar()
            # livro de cada leitura (exceto salmo e aclamação)
            leit = [s for s in L.secoes if s["nome"] not in ("Salmo responsorial", "Aclamação ao Evangelho", "Sequência", "Introdução") and s["ref"]]
            refs_sem = [re.sub(r"[{}]", "", s["ref"]) for s in leit]
            livros = livros_do_nome(base, refs_sem)
            for s, liv in zip(leit, livros):
                if not liv:
                    inc = " ".join(" ".join(l) for t, l in s["blocos"] if t == "leitura")
                    for pat, ab in INCIPIT:
                        if re.search(pat, inc):
                            liv = ab
                            if ab == "Mc" and "Macabeus" in inc:
                                liv = "2Mc" if "Segundo" in inc else "1Mc"
                            break
                if liv == "Joh":
                    liv = "Jó"
                if liv and not re.match(r"^[0-9]?[A-ZÁÉÍÓÚ]", s["ref"]):
                    s["ref"] = "%s %s" % (liv, re.sub(r"[{}]", "", s["ref"]).strip())
            sub = os.path.dirname(rel)
            ident = (sub + "/" if sub else "") + slug_arquivo(base)
            dest = os.path.join(saida, "leituras", ident + ".txt")
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            with open(dest, "w", encoding="utf-8") as fh:
                fh.write(L.para_texto([("origem", PREFIXO + "lecionario/" + rel)]))
            catalogo[ident] = {
                "origem": "lecionario/" + rel,
                "secoes": [[s["nome"], re.sub(r"[{}]", "", s["ref"]).strip()] for s in L.secoes],
            }
    # ---------------- missal (orações próprias da Missa)
    raiz_mis = os.path.join(ACERVO, "missal")
    n_mis = 0
    for dp, dn, fn in os.walk(raiz_mis):
        for f in sorted(fn):
            if not f.endswith(".htm"):
                continue
            rel = os.path.relpath(os.path.join(dp, f), raiz_mis)
            with open(os.path.join(dp, f), encoding="utf-8", errors="replace") as fh:
                html = fh.read()
            doc = Documento(html, "missal/" + rel, None).processar()
            dest = os.path.join(saida, "missal", rel[:-4] + ".txt")
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            txt = doc.para_texto([("origem", PREFIXO + "missal/" + rel)])
            if rel.startswith("proprio/"):
                txt = estruturar_missal(txt)
            with open(dest, "w", encoding="utf-8") as fh:
                fh.write(txt)
            n_mis += 1
    os.makedirs(os.path.join(RAIZ, "ferramentas", "saida"), exist_ok=True)
    with open(os.path.join(RAIZ, "ferramentas", "saida", "catalogo_lecionario.json"), "w", encoding="utf-8") as fh:
        json.dump(catalogo, fh, ensure_ascii=False, indent=1)
    sem_livro = [k for k, v in catalogo.items() if any(n not in ("Salmo responsorial", "Aclamação ao Evangelho", "Sequência", "Introdução") and r and not re.match(r"^[0-9]?[A-ZÁÉÍÓÚ]", r) for n, r in v["secoes"])]
    print("lecionário:", len(catalogo), "arquivos | missal:", n_mis)
    print("leituras sem livro identificado:", len(sem_livro), sem_livro[:10])


if __name__ == "__main__":
    main()
