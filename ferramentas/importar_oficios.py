#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Importa os ofícios da Liturgia das Horas do acervo original
(Recursos/Liturgia das Horas/assets/Resources/oficio) para arquivos de texto
editáveis em dados/liturgia-das-horas, e cria a biblioteca de salmos e
cânticos (dados/salmos e dados/canticos), sem textos duplicados.

ATENÇÃO: este script é para a IMPORTAÇÃO INICIAL. Ele sobrescreve os
arquivos de dados. Depois de começar a editar os textos à mão, não o
execute de novo (ou use --destino para gerar em outra pasta e comparar).

Uso:
    python3 ferramentas/importar_oficios.py [--destino PASTA]
"""
import argparse
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from conversor_html import Biblioteca, Documento, serializar_item  # noqa: E402

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACERVO = os.path.join(RAIZ, "Recursos", "Liturgia das Horas", "assets", "Resources")
PREFIXO_ORIGEM = "Recursos/Liturgia das Horas/assets/Resources/"

DIAS = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
RE_DIA = "(" + "|".join(DIAS) + ")"
HORAS = {
    "laudes": "laudes", "vesperas": "vesperas", "Ivesperas": "i-vesperas",
    "terca": "terca", "sexta": "sexta", "nona": "nona", "leituras": "leituras",
    "completas": "completas", "vigilia": "vigilia",
}
RE_HORA = "(Ivesperas|laudes|vesperas|terca|sexta|nona|leituras|completas|vigilia)"
MESES = {"dezembro": "dezembro", "janeiro": "janeiro"}


def h(x):
    return HORAS.get(x, x)


def sufixo(s):
    """Converte sufixos do arquivo original em sufixos legíveis."""
    if not s:
        return ""
    s = s.strip("_")
    mapa = {
        "TP": "tempo-pascal", "domingo": "domingo", "oc": "alternativo",
        "alternativo": "alternativo", "par": "ano-par", "impar": "ano-impar",
        "17": "a-partir-de-17-dez", "16": "dez-16", "23": "dez-23", "2dom": "domingo",
    }
    partes = [p for p in re.split(r"_", s) if p]
    return "-" + "-".join(mapa.get(p, p.lower()) for p in partes)


def nome_completas(x):
    """completas_domingoII -> domingo-ii ; completas_solenidadeI_par -> solenidade-i-par"""
    m = re.match(r"^([a-z_]+?)(I{1,2})?(_par)?$", x)
    if not m:
        return x.lower()
    base = {"antesdaepifania": "antes-da-epifania", "aposepifania": "apos-epifania"}.get(m.group(1), m.group(1))
    base = base.replace("_", "-")
    if m.group(2):
        base += "-" + m.group(2).lower()
    if m.group(3):
        base += "-par"
    return base


def destino(rel):
    """Caminho de destino (relativo a dados/liturgia-das-horas) para um
    arquivo do acervo (relativo a oficio/). None = não importar."""
    nome = os.path.basename(rel)
    base = re.sub(r"\.html?$", "", nome)
    pasta = os.path.dirname(rel)

    # ---------------- Tempo Comum
    if pasta == "tempocomum/horas":
        m = re.match(r"^(\d)" + RE_DIA + "_" + RE_HORA + "$", base)
        if m:
            return "tempo-comum/salterio/semana-%s/%s-%s.txt" % (m.group(1), m.group(2), h(m.group(3)))
        m = re.match(r"^completas_(\w+)$", base)
        if m:
            return "tempo-comum/completas/%s.txt" % nome_completas(m.group(1))
        m = re.match(r"^vigilia_(\w+)$", base)
        if m:
            return "tempo-comum/vigilia/%s.txt" % m.group(1).replace("_", "-")
    if pasta == "tempocomum/leituras":
        if base.endswith("_old"):
            return None
        m = re.match(r"^(\d\d)" + RE_DIA + "TC$", base)
        if m:
            return "tempo-comum/leituras/semana-%s/%s.txt" % (m.group(1), m.group(2))
    if pasta == "tempocomum/leituras/bienal":
        m = re.match(r"^(\d\d)" + RE_DIA + r"TC(_\w+)$", base)
        if m:
            return "tempo-comum/leituras-bienal/semana-%s/%s%s.txt" % (m.group(1), m.group(2), sufixo(m.group(3)))

    # ---------------- Advento
    if pasta == "advento/horas":
        m = re.match(r"^(\d)" + RE_DIA + "_" + RE_HORA + r"(\d\d)?$", base)
        if m:
            return "advento/semana-%s/%s-%s%s.txt" % (m.group(1), m.group(2), h(m.group(3)), sufixo(m.group(4)))
        m = re.match(r"^completas" + RE_DIA + r"(17)?$", base)
        if m:
            return "advento/completas/%s%s.txt" % (m.group(1), sufixo(m.group(2)))
        m = re.match(r"^vigilia_(\w+)$", base)
        if m:
            return "advento/vigilia/%s.txt" % m.group(1).replace("_", "-")
    if pasta in ("advento/salterio", "advento/salterio/entre17e23", "advento/salterio/dia24"):
        sub = {"advento/salterio": "salterio", "advento/salterio/entre17e23": "salterio-17-a-23-dez",
               "advento/salterio/dia24": "salterio-24-dez"}[pasta]
        m = re.match(r"^(\d)" + RE_DIA + "_" + RE_HORA + r"(\d\d)?$", base)
        if m:
            return "advento/%s/semana-%s/%s-%s%s.txt" % (sub, m.group(1), m.group(2), h(m.group(3)), sufixo(m.group(4)))
    if pasta == "advento/propriodotempo":
        m = re.match(r"^(\d\d)_" + RE_HORA + "$", base)
        if m:
            return "advento/proprio/dezembro-%s/%s.txt" % (m.group(1), h(m.group(2)))
        m = re.match(r"^(\d)" + RE_DIA + "_" + RE_HORA + "$", base)
        if m:
            return "advento/proprio/semana-%s/%s-%s.txt" % (m.group(1), m.group(2), h(m.group(3)))
    if pasta in ("advento/leituras", "advento/leituras/bienal"):
        sub = "leituras" if pasta.endswith("leituras") else "leituras-bienal"
        m = re.match(r"^(\d)" + RE_DIA + r"Advento(_\w+)?$", base)
        if m:
            return "advento/%s/semana-%s/%s%s.txt" % (sub, m.group(1), m.group(2), sufixo(m.group(3)))
        m = re.match(r"^(\d\d)dezembro(_\w+)?$", base)
        if m:
            return "advento/%s/dezembro-%s%s.txt" % (sub, m.group(1), sufixo(m.group(2)))

    # ---------------- Natal
    if pasta == "natal/horas":
        m = re.match(r"^(\d+)(dezembro|janeiro)_" + RE_HORA + "$", base)
        if m:
            return "natal/%s-%02d/%s.txt" % (m.group(2), int(m.group(1)), h(m.group(3)))
        m = re.match(r"^2domingo_leituras_(\d)janeiro$", base)
        if m:
            return "natal/domingo-2/leituras-salmodia-%02d-janeiro.txt" % int(m.group(1))
        m = re.match(r"^2domingo_" + RE_HORA + "$", base)
        if m:
            return "natal/domingo-2/%s.txt" % h(m.group(1))
        m = re.match(r"^" + RE_DIA + "_aposepifania_" + RE_HORA + "$", base)
        if m:
            return "natal/apos-epifania/%s-%s.txt" % (m.group(1), h(m.group(2)))
        m = re.match(r"^completas_(\w+)$", base)
        if m:
            return "natal/completas/%s.txt" % nome_completas(m.group(1))
        m = re.match(r"^vigilia_(\w+)$", base)
        if m:
            return "natal/vigilia/%s.txt" % m.group(1).replace("_", "-")
    if pasta == "natal/salterio":
        m = re.match(r"^(\d)" + RE_DIA + "_" + RE_HORA + "$", base)
        if m:
            return "natal/salterio/semana-%s/%s-%s.txt" % (m.group(1), m.group(2), h(m.group(3)))
        m = re.match(r"^3domingo_batismo_" + RE_HORA + "$", base)
        if m:
            return "natal/salterio/batismo-do-senhor/%s.txt" % h(m.group(1))
    if pasta in ("natal/leituras", "natal/leituras/bienal"):
        sub = "leituras" if pasta.endswith("leituras") else "leituras-bienal"
        m = re.match(r"^(\d+)(dezembro|janeiro)(_\w+)?$", base)
        if m:
            return "natal/%s/%s-%02d%s.txt" % (sub, m.group(2), int(m.group(1)), sufixo(m.group(3)))
        m = re.match(r"^" + RE_DIA + r"_aposepifania(_\w+)?$", base)
        if m:
            return "natal/%s/apos-epifania-%s%s.txt" % (sub, m.group(1), sufixo(m.group(2)))

    # ---------------- Quaresma e Semana Santa
    if pasta == "quaresma/horas":
        m = re.match(r"^(\d)" + RE_DIA + "quaresma_" + RE_HORA + r"(_\w+)?$", base)
        if m:
            return "quaresma/semana-%s/%s-%s%s.txt" % (m.group(1), m.group(2), h(m.group(3)), sufixo(m.group(4)))
        m = re.match(r"^" + RE_DIA + "cinzas_" + RE_HORA + "$", base)
        if m:
            return "quaresma/apos-cinzas/%s-%s.txt" % (m.group(1), h(m.group(2)))
        m = re.match(r"^" + RE_DIA + "feirasanta_" + RE_HORA + "$", base)
        if m:
            return "semana-santa/%s-%s.txt" % (m.group(1), h(m.group(2)))
        m = re.match(r"^completas_(\w+)$", base)
        if m:
            return "quaresma/completas/%s.txt" % nome_completas(m.group(1))
        m = re.match(r"^vigilia_(\w+)$", base)
        if m:
            return "quaresma/vigilia/%s.txt" % m.group(1).replace("_", "-")
    if pasta == "quaresma/oficiodasleituras":
        m = re.match(r"^(\d)" + RE_DIA + "_quaresma$", base)
        if m:
            return "quaresma/semana-%s/%s-leituras.txt" % (m.group(1), m.group(2))
        m = re.match(r"^" + RE_DIA + "cinzas$", base)
        if m:
            return "quaresma/apos-cinzas/%s-leituras.txt" % m.group(1)
        m = re.match(r"^" + RE_DIA + "feirasanta$", base)
        if m:
            return "semana-santa/%s-leituras.txt" % m.group(1)
    if pasta == "quaresma/oficiodasleituras/bienal":
        m = re.match(r"^(\d)" + RE_DIA + r"_quaresma(_\w+)$", base)
        if m:
            return "quaresma/leituras-bienal/semana-%s/%s%s.txt" % (m.group(1), m.group(2), sufixo(m.group(3)))
        m = re.match(r"^" + RE_DIA + r"(cinzas|feirasanta)(_\w+)$", base)
        if m:
            q = "apos-cinzas" if m.group(2) == "cinzas" else "semana-santa"
            return "quaresma/leituras-bienal/%s/%s%s.txt" % (q, m.group(1), sufixo(m.group(3)))

    # ---------------- Páscoa
    if pasta == "pascoa/horas":
        m = re.match(r"^(\d)" + RE_DIA + "pascoa_" + RE_HORA + "$", base)
        if m:
            return "pascoa/semana-%s/%s-%s.txt" % (m.group(1), m.group(2), h(m.group(3)))
        m = re.match(r"^completas_(\w+)$", base)
        if m:
            return "pascoa/completas/%s.txt" % nome_completas(m.group(1))
        m = re.match(r"^vigilia_(\w+)$", base)
        if m:
            return "pascoa/vigilia/%s.txt" % m.group(1).replace("_", "-")
    if pasta == "pascoa/oficiodasleituras":
        m = re.match(r"^(\d)" + RE_DIA + "Pascoa$", base)
        if m:
            return "pascoa/semana-%s/%s-leituras.txt" % (m.group(1), m.group(2))
    if pasta == "pascoa/oficiodasleituras/bienal":
        m = re.match(r"^(\d)" + RE_DIA + r"Pascoa(_\w+)$", base)
        if m:
            return "pascoa/leituras-bienal/semana-%s/%s%s.txt" % (m.group(1), m.group(2), sufixo(m.group(3)))

    # ---------------- Próprio (solenidades, festas, memórias)
    if rel == "proprio/horas/santateresinha_leituras.htm":
        # versão antiga (HTML sem estrutura) do Ofício das Leituras
        return "proprio/santateresinha/leituras-formato-antigo.txt"
    if pasta == "proprio/horas":
        m = re.match(r"^([A-Za-z]+)_(comum_)?" + RE_HORA + r"(_\w+)?$", base)
        if m:
            extra = sufixo(m.group(4))
            if m.group(2):
                extra = "-comum" + extra
            return "proprio/%s/%s%s.txt" % (m.group(1), h(m.group(3)), extra)
    if pasta == "proprio/oficiodasleituras":
        m = re.match(r"^([A-Za-z]+)(_\w+)?$", base)
        if m:
            return "proprio/%s/leituras%s.txt" % (m.group(1), sufixo(m.group(2)))
    if pasta == "proprio/oficiodasleituras/bienal":
        m = re.match(r"^([A-Za-z]+)(_\w+)$", base)
        if m:
            return "proprio/%s/leituras-bienal%s.txt" % (m.group(1), sufixo(m.group(2)))

    # ---------------- Comuns, ofícios especiais e outros
    if pasta == "outros":
        m = re.match(r"^comum_([a-z]+)_" + RE_HORA + r"(_TP)?$", base)
        if m:
            return "comuns/%s/%s%s.txt" % (m.group(1), h(m.group(2)), sufixo(m.group(3)))
        m = re.match(r"^oficio_fieisdefuntos_" + RE_HORA + "$", base)
        if m:
            return "oficio-dos-fieis-defuntos/%s.txt" % h(m.group(1))
        m = re.match(r"^memoria_santamaria_sabado_" + RE_HORA + "$", base)
        if m:
            return "santa-maria-no-sabado/%s.txt" % h(m.group(1))
        m = re.match(r"^salmodia_comp_(terca|sexta|nona)(_TC)?$", base)
        if m:
            return "salmodia-complementar/%s%s.txt" % (m.group(1), "-tempo-comum" if m.group(2) else "")
        return "outros/%s.txt" % base
    if pasta == "invitatorio":
        m = re.match(r"^invitatorio(\d+)$", base)
        if m:
            return "invitatorio/salmo-%s.txt" % m.group(1)
    return "nao-classificados/%s/%s.txt" % (pasta.replace("/", "-"), base)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--destino", default=os.path.join(RAIZ, "dados"))
    args = ap.parse_args()
    raiz_oficio = os.path.join(ACERVO, "oficio")
    saida_lh = os.path.join(args.destino, "liturgia-das-horas")
    bib = Biblioteca()
    catalogo = {}
    nao_class = []
    arquivos = []
    for dp, dn, fn in os.walk(raiz_oficio):
        for f in fn:
            if f.endswith((".htm", ".html")):
                arquivos.append(os.path.relpath(os.path.join(dp, f), raiz_oficio))
    arquivos.sort()
    usados = {}
    for rel in arquivos:
        dest = destino(rel)
        if dest is None:
            continue
        if dest.startswith("nao-classificados"):
            nao_class.append(rel)
        if dest in usados:
            print("AVISO: destino repetido", dest, rel, usados[dest])
            dest = dest.replace(".txt", "-2.txt")
        usados[dest] = rel
        caminho = os.path.join(raiz_oficio, rel)
        with open(caminho, encoding="utf-8", errors="replace") as fh:
            html = fh.read()
        origem = "oficio/" + rel
        # o invitatório é um modelo: os salmos ficam no próprio arquivo, com
        # marcas onde se repete a antífona do dia
        doc = Documento(html, origem, None if rel.startswith("invitatorio/") else bib).processar()

        txt = doc.para_texto([("origem", PREFIXO_ORIGEM + origem)])
        out = os.path.join(saida_lh, dest)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "w", encoding="utf-8") as fh:
            fh.write(txt)
        cel = [b for b in doc.blocos if b[0] == "celebracao"]
        catalogo[origem] = {
            "destino": "liturgia-das-horas/" + dest,
            "documento": doc.titulo_doc,
            "celebracao": cel[0][2] if cel else "",
            "titulos": [b[1] for b in doc.blocos if b[0] == "titulo"],
            "secoes": [b[1] for b in doc.blocos if b[0] == "secao"],
            "lacunas": [b[1] for b in doc.blocos if b[0] == "lacuna"],
            "tem_intro": any("Vinde, ó Deus, em meu auxílio" in b[2] for b in doc.blocos),
            "salmos": doc.salmos_usados,
        }
    # biblioteca
    bib.finalizar()
    for iid, item in bib.itens.items():
        out = os.path.join(args.destino, item["pasta"], iid + ".txt")
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "w", encoding="utf-8") as fh:
            fh.write(serializar_item(item, iid))
    # lista de arquivos disponíveis (usada pelo site para escolher os textos)
    lista = sorted(d[:-4] for d in usados)
    with open(os.path.join(saida_lh, "arquivos.json"), "w", encoding="utf-8") as fh:
        json.dump({"_leia": "Lista gerada automaticamente dos ofícios disponíveis. Se criar um arquivo novo, inclua-o aqui.",
                   "arquivos": lista}, fh, ensure_ascii=False, indent=0)
    os.makedirs(os.path.join(RAIZ, "ferramentas", "saida"), exist_ok=True)
    with open(os.path.join(RAIZ, "ferramentas", "saida", "catalogo_oficios.json"), "w", encoding="utf-8") as fh:
        json.dump(catalogo, fh, ensure_ascii=False, indent=1)
    print("ofícios:", len(catalogo), "| salmos/cânticos na biblioteca:", len(bib.itens))
    print("não classificados:", len(nao_class))
    for r in nao_class[:50]:
        print("  ", r)


if __name__ == "__main__":
    main()
