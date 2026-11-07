#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Importa textos que, no aplicativo original, ficavam dentro do código
JavaScript (e não nos HTML do acervo):

  - antífonas do Invitatório            (invitatorio.js)
  - antífonas do Benedictus/Magnificat dos domingos do Tempo Comum,
    Anos A, B e C                       (aoh.js)

Os arquivos .js legíveis foram fornecidos à parte (versões dos arquivos
.js.bin do acervo). O script apenas LÊ as cadeias de texto desses arquivos;
nenhum código é executado.

Saída:
  dados/liturgia-das-horas/invitatorio/antifonas.txt
  dados/liturgia-das-horas/tempo-comum/domingos/domingo-NN.txt

Uso:
  python3 ferramentas/importar_antifonas.py --fonte PASTA_COM_OS_JS
"""
import argparse
import codecs
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from conversor_html import Inline, limpar_linhas  # noqa: E402
from bs4 import BeautifulSoup  # noqa: E402

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LITERAL = r'"((?:[^"\\]|\\.)*)"'


def ler_js(caminho):
    with open(caminho, encoding="ascii", errors="replace") as fh:
        return fh.read().replace("\r", "")


def decodificar(lit):
    return codecs.decode(lit, "unicode_escape")


def html_para_texto(html):
    """Converte o pequeno trecho HTML da antífona para o formato de texto."""
    soup = BeautifulSoup("<div>%s</div>" % html, "lxml")
    t = limpar_linhas(Inline()(soup.div))
    t = re.sub(r"\{\s*\}", "", t)
    return "\n".join(l.strip() for l in t.split("\n")).strip()


# Antífonas que, no app, estavam escritas direto na regra de escolha
# (invitatorio.js, função antifonaInvitatorio)
ANTIFONAS_DA_REGRA = {
    "TA24": "Hoje sabereis que o Senhor mesmo virá,<br>e amanhã haveis de ver sua glória em nosso meio.",
    "TN": "Jesus por nós nasceu:<br>vinde todos adoremos.",
    "TN2": "A Jesus que se revela, vinde todos, adoremos.",
}

EXPLICACAO_INVITATORIO = """@documento Antífonas do Invitatório

@rubrica
Chaves usadas pelo site (js/liturgy-hours.js):
TC<semana do saltério><dia> = Tempo Comum (ex.: TC1segunda);
TA1 = Advento até 16/dez; TA2 = de 17 a 23/dez; TA24 = 24 de dezembro;
TN = Oitava do Natal e dias antes da Epifania; TN2 = depois da Epifania;
TQ = Quaresma; TSS = Semana Santa; TP1 = Tempo Pascal até a 6ª semana; TP2 = 7ª semana;
demais chaves = id da celebração em dados/calendario/santoral.json.
Uma linha "= outra-chave" usa a mesma antífona de outra chave.
Nas memórias do Tempo Pascal o site acrescenta "Aleluia." ao final.
"""


def invitatorio(fonte):
    s = ler_js(os.path.join(fonte, "invitatorio.js"))
    textos = {m.group(1): decodificar(m.group(2)) for m in re.finditer(r"antifona\.(\w+)=" + LITERAL, s)}
    apelidos = {m.group(1): m.group(2) for m in re.finditer(r"antifona\.(\w+)=antifona\.(\w+)", s)}
    for k, v in ANTIFONAS_DA_REGRA.items():
        textos.setdefault(k, v)
    ordem = [k for k in re.findall(r"antifona\.(\w+)=", s)]
    for k in ANTIFONAS_DA_REGRA:
        ordem.append(k)
    vistos = set()
    out = ["@origem invitatorio.js (código do aplicativo original; texto que antes ficava fora dos HTML)",
           EXPLICACAO_INVITATORIO]
    for k in ordem:
        if k in vistos:
            continue
        vistos.add(k)
        out.append("@antifona %s" % k)
        if k in apelidos and k not in textos:
            out.append("= %s" % apelidos[k])
        else:
            out.append(html_para_texto(textos[k]))
        out.append("")
    dest = os.path.join(RAIZ, "dados", "liturgia-das-horas", "invitatorio", "antifonas.txt")
    with open(dest, "w", encoding="utf-8") as fh:
        fh.write("\n".join(out).rstrip() + "\n")
    return len(vistos)


MOMENTOS = [("vesperasI", "vesperas-i", "I Vésperas (Magnificat)"),
            ("laudes", "laudes", "Laudes (Benedictus)"),
            ("vesperasII", "vesperas-ii", "II Vésperas (Magnificat)")]


def domingos(fonte):
    s = ler_js(os.path.join(fonte, "aoh.js"))
    ant = {m.group(1): decodificar(m.group(2)) for m in re.finditer(r"antifonaDomingoTC\.(\w+)=" + LITERAL, s)}
    semanas = sorted({int(re.search(r"\d+$", k).group(0)) for k in ant})
    pasta = os.path.join(RAIZ, "dados", "liturgia-das-horas", "tempo-comum", "domingos")
    os.makedirs(pasta, exist_ok=True)
    n = 0
    for w in semanas:
        out = ["@origem aoh.js (código do aplicativo original; texto que antes ficava fora dos HTML)",
               "@documento %dº Domingo do Tempo Comum — antífonas do Cântico evangélico" % w, ""]
        for chave_js, chave, nome in MOMENTOS:
            v = ant.get("%s%02d" % (chave_js, w))
            if not v:
                continue
            partes = re.split(r'<font color="red">\s*Ano ([ABC])\s*</font>', v)
            # partes = [antes, 'A', texto, 'B', texto, 'C', texto]
            out.append("@secao %s" % nome)
            out.append("")
            for i in range(1, len(partes) - 1, 2):
                out.append("@antifona %s-%s" % (chave, partes[i]))
                out.append(html_para_texto(partes[i + 1]))
                out.append("")
                n += 1
        with open(os.path.join(pasta, "domingo-%02d.txt" % w), "w", encoding="utf-8") as fh:
            fh.write("\n".join(out).rstrip() + "\n")
    return len(semanas), n


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--fonte", required=True, help="pasta com invitatorio.js e aoh.js")
    a = ap.parse_args()
    print("antífonas do Invitatório:", invitatorio(a.fonte))
    print("domingos do Tempo Comum, antífonas:", domingos(a.fonte))


if __name__ == "__main__":
    main()
