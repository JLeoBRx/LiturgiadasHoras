#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Lê os PDFs da edição do Centro Studi Antoniani ("Fonti dei Sermones",
centrostudiantoniani.it) e separa, por sermão, o texto latino em parágrafos
numerados, as notas de rodapé (fontes, referências bíblicas) e a página de
cada parágrafo.

USO SÓ PARA CONFERÊNCIA. Por decisão do projeto (diretriz "politica centro
studian.txt", enviada pelo responsável), o texto da edição crítica NÃO é
reproduzido no repositório público: a saída deste script deve ficar fora do
repositório (ex.: numa pasta de trabalho local). No repositório ficam apenas
as referências (sermão, parágrafo, página) e citações curtas no registro
editorial.

Classificação pelo tamanho da fonte (conferida nos PDFs):
  corpo do texto ~10,3 pt; notas ~9,4 pt; chamadas de nota ~6-8,5 pt;
  títulos em negrito.

Uso:  python3 ferramentas/homilias/antonio/extrair_latim_csa.py <pasta_dos_pdfs> <pasta_de_saida>
"""
import json
import os
import re
import sys

import pdfplumber

CORPO, NOTA = 10.0, 9.0


def linhas_da_pagina(pg):
    """Palavras agrupadas em linhas; chamadas de nota ficam na linha cujo corpo cobrem."""
    ws = pg.extract_words(extra_attrs=["size", "fontname"], keep_blank_chars=False, use_text_flow=True)
    # chamada de nota = número em corpo pequeno; versaletes (corpo pequeno, letras) são texto
    marcas = [w for w in ws if w["size"] < NOTA and re.fullmatch(r"\d{1,3}", w["text"])]
    normais = [w for w in ws if not (w["size"] < NOTA and re.fullmatch(r"\d{1,3}", w["text"]))]
    linhas = []
    for w in sorted(normais, key=lambda w: (round(w["bottom"]), w["x0"])):
        for ln in linhas:
            if abs(ln["bottom"] - w["bottom"]) < 2.5:
                ln["ws"].append(w)
                break
        else:
            linhas.append({"top": w["top"], "bottom": w["bottom"], "ws": [w]})
            continue
        ln["top"] = min(ln["top"], w["top"])
    sobras = []
    for m in marcas:
        alvo = None
        for ln in linhas:
            if ln["top"] - 3 <= m["bottom"] <= ln["bottom"] + 1:
                alvo = ln
                break
        if alvo is None:
            # chamada isolada (número de nota no rodapé, acima da nota): vai para a linha logo abaixo
            abaixo = [ln for ln in linhas if ln["top"] >= m["top"] - 1]
            alvo = min(abaixo, key=lambda ln: ln["top"]) if abaixo else None
        if alvo is None:
            sobras.append(m)
            continue
        alvo["ws"].append(dict(m, marca=True))
    for ln in linhas:
        ln["ws"].sort(key=lambda w: w["x0"])
        tam = [w["size"] for w in ln["ws"] if not w.get("marca")] or [0]
        neg = [w for w in ln["ws"] if not w.get("marca") and "Bold" in w["fontname"]]
        ln["tipo"] = "titulo" if neg and len(neg) >= len([w for w in ln["ws"] if not w.get("marca")]) * 0.6 else (
            "corpo" if max(tam) >= CORPO else "nota")
        ln["x0"] = min(w["x0"] for w in ln["ws"])
    linhas.sort(key=lambda ln: ln["top"])
    # Rodapé: abaixo do filete separador das notas (retângulo fino, curto, na margem
    # esquerda), tudo é nota. Quadros (tabelas desenhadas com retângulos) são sempre
    # notas, mesmo em corpo maior: são comparações de fontes, não texto de Antônio.
    sep = [r for r in pg.rects if r["height"] < 1.5 and 60 < (r["x1"] - r["x0"]) < 260 and r["x0"] < 130]
    corte = min((r["top"] for r in sep), default=None)
    quadros = [r for r in pg.rects if r not in sep]
    if quadros:
        qx0, qx1 = min(r["x0"] for r in quadros), max(r["x1"] for r in quadros)
        qt, qb = min(r["top"] for r in quadros), max(r["bottom"] for r in quadros)
    for ln in linhas:
        if corte is not None and ln["top"] > corte:
            ln["tipo"] = "nota"
        elif quadros and qt - 1 <= ln["top"] <= qb + 1 and ln["x0"] >= qx0 - 1:
            ln["tipo"] = "nota"
    return linhas


def texto_da_linha(ln, chamadas=True):
    """Junta as palavras; sem espaço quando encostadas (troca de fonte no meio da palavra, versaletes)."""
    s, ant = "", None
    for w in ln["ws"]:
        if w.get("marca"):
            if chamadas:
                s += " [^%s]" % w["text"]
            ant = w
            continue
        if ant is not None and not ant.get("marca") and w["x0"] - ant["x1"] < 0.8:
            s += w["text"]
        else:
            s += (" " if s else "") + w["text"]
        ant = w
    return re.sub(r"\s+([,.;:!?)\]’”»])", r"\1", s).strip()


def ler_sermao(caminho):
    pdf = pdfplumber.open(caminho)
    corpo, notas, titulos = [], [], []
    for i, pg in enumerate(pdf.pages, 1):
        for ln in linhas_da_pagina(pg):
            t = texto_da_linha(ln)
            if re.fullmatch(r"\d{1,3}", t.strip()) and ln["tipo"] != "corpo":
                continue  # número de página
            if ln["tipo"] == "nota":
                notas.append((i, ln, t))
            else:
                corpo.append((i, ln, t))
    pdf.close()
    # notas: "[^n] texto" inicia a nota n
    nd, atual = {}, None
    for _, ln, t in notas:
        m = re.match(r"^\[\^(\d+)\]\s*(.*)$", t)
        if m:
            atual = int(m.group(1))
            nd[atual] = m.group(2)
        elif atual is not None:
            nd[atual] += " " + t
    # corpo: parágrafos "N - ", títulos em negrito
    sermao = {"titulo": None, "preliminar": "", "secoes": [], "notas": {str(k): v.strip() for k, v in nd.items()}}
    secao = {"titulo": None, "paragrafos": []}
    par = None
    xs = sorted(round(ln["x0"]) for _, ln, _ in corpo if ln["tipo"] == "corpo")
    margem = xs[len(xs) // 10] if xs else 0  # margem esquerda do corpo (linhas não recuadas)
    for pagina, ln, t in corpo:
        if ln["tipo"] == "titulo":
            limpo = re.sub(r"\[\^\d+\]", "", t).strip()
            if sermao["titulo"] is None:
                sermao["titulo"] = limpo
                continue
            if secao["paragrafos"] or secao["titulo"] or sermao["preliminar"]:
                sermao["secoes"].append(secao)
            secao = {"titulo": limpo, "paragrafos": []}
            par = None
            continue
        # início de parágrafo: "N - ", "N -Texto", "N -– Texto", "N Texto" (formas que aparecem nos PDFs);
        # sem hífen, só vale se for o número seguinte e a linha estiver recuada
        m = re.match(r"^(\d{1,3})\s*((?:[-–]\s*)+)?(?=[^\d\s])(.*)$", t)
        if m:
            n = int(m.group(1))
            anterior = par["numero"] if par else 0
            recuada = ln["x0"] > margem + 8
            if not (m.group(2) or (recuada and n in (anterior + 1, 1))) or not (n in (anterior + 1, 1) or m.group(2)):
                m = None
        if m:
            m = (int(m.group(1)), m.group(3))
            par = {"numero": m[0], "texto": m[1], "paginas": [pagina]}
            secao["paragrafos"].append(par)
        elif par is None:
            sermao["preliminar"] += (" " if sermao["preliminar"] else "") + t
        else:
            par["texto"] += " " + t
            if pagina not in par["paginas"]:
                par["paginas"].append(pagina)
    sermao["secoes"].append(secao)
    for s in sermao["secoes"]:
        for p in s["paragrafos"]:
            p["texto"] = re.sub(r"(\w)- (\w)", r"\1\2", p["texto"])  # hifenização de fim de linha
            p["notas"] = [int(n) for n in re.findall(r"\[\^(\d+)\]", p["texto"])]
    return sermao


def main():
    pasta, saida = sys.argv[1], sys.argv[2]
    os.makedirs(saida, exist_ok=True)
    for f in sorted(os.listdir(pasta)):
        if not re.match(r"s[dfm]\d\d_.*\.pdf$", f):
            continue
        s = ler_sermao(os.path.join(pasta, f))
        s["arquivo"] = f
        json.dump(s, open(os.path.join(saida, f[:-4] + ".json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        n = sum(len(x["paragrafos"]) for x in s["secoes"])
        print(f, "parágrafos:", n, "notas:", len(s["notas"]))


if __name__ == "__main__":
    main()
