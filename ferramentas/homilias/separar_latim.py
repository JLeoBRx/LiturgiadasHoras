#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera a camada LATIM das Homiliae in Evangelia de São Gregório Magno: o texto
da edição de Migne (Patrologia Latina 76, Paris 1849), na transcrição do
Corpus Corporum (Universidade de Zurique, Ph. Roelli, 2013) publicada na
Wikisource latina, a partir do PDF enviado pelo responsável do projeto:

  Homilia dos Santos/…/Texto latino (Migne, PL 76)/Homiliae_in_Evangelia_(ed._Migne).pdf
        -> dados/homilias/gregorio-magno/latim/{prefacio,homilia-01..40}.txt

Nenhuma palavra é alterada. Só há três normalizações, todas reversíveis:
  - as quebras de linha da impressão do PDF viram espaços;
  - os números de coluna de Migne, soltos no texto (ex.: "1437"), são
    marcados entre colchetes ("[1437]") para não se confundirem com o texto;
  - cada parágrafo numerado de Migne ("2. Haec nos…") começa um bloco
    @paragrafo, e a leitura do Evangelho fica num bloco @leitura.

A numeração dos parágrafos fica exatamente como na fonte, mesmo quando ela
salta ou se repete (registrado em @numeracao).

Requer o pdftotext (poppler-utils). Uso: python3 ferramentas/homilias/separar_latim.py
"""
import os, re, subprocess, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PDF_REL = "Homilia dos Santos/Homilia de Santos/São Gregório Magno, Papa (540–604)/Texto latino (Migne, PL 76)/Homiliae_in_Evangelia_(ed._Migne).pdf"
DESTINO = os.path.join(RAIZ, "dados", "homilias", "gregorio-magno", "latim")
FONTE = ("Wikisource (la), «Homiliae in Evangelia (ed. Migne)», revisão oldid=196510 — texto do Corpus Corporum "
         "(Universidade de Zurique, codificado por Ph. Roelli, 2013) a partir de J.-P. Migne, Patrologia Latina 76, Paris, 1849")

COLUNA = re.compile(r"(?<![\d,.\-\[])\b(1[3-6]\d\d)\b(?![\d,\]])")
# parágrafo numerado de Migne: "… fecit. 2. Haec" | "… [1437] 2. Haec" | "… quaerebant 4. Quid"
SECAO = re.compile(r"(?<![\d,\-]) (?<!, )(\d{1,2})\. (?=[A-Z])")
CABECALHO = re.compile(r"(?:LIBER (?:PRIMUS|SECUNDUS)\. )?HOMILIA (?:PRIMA|[IVXL]+)\.")
LECTIO = re.compile(r"LECTIO\b[^.]*?(?:\.[^.]*?)*?[IVXL]+, ?\d+[\d\-–,. ]*?[.:](?= )")


def texto_do_pdf():
    caminho = os.path.join(RAIZ, PDF_REL)
    t = subprocess.run(["pdftotext", caminho, "-"], capture_output=True, check=True).stdout.decode("utf-8")
    t = t.replace("\f", "\n")
    fim = t.index('Receptum de "https://la.wikisource.org')
    corpo = t[t.index("Praefatio."):fim]
    s = re.sub(r"\s*\n\s*", " ", corpo).strip()
    return re.sub(r" {2,}", " ", s)


def marcar_colunas(s):
    return COLUNA.sub(r"[\1]", s)


def blocos_da_homilia(p):
    """-> [(marca, texto)], numeracao"""
    m = LECTIO.search(p)
    blocos = []
    if m:
        blocos.append(("cabecalho", p[: m.start()].strip()))
        blocos.append(("leitura-titulo", m.group(0).strip()))
        resto = p[m.end():].strip()
        # a leitura termina no primeiro parágrafo numerado ou, se a homilia
        # não numera o primeiro parágrafo, na primeira marca de coluna
        s1 = SECAO.search(resto)
        c1 = re.search(r"\[1[3-6]\d\d\]", resto)
        corte = None
        if s1 and s1.group(1) == "1":
            corte = s1.start()
        elif c1:
            corte = c1.start()
        if corte is None:
            raise SystemExit("leitura sem fim reconhecível: " + p[:60])
        blocos.append(("leitura", resto[:corte].strip()))
        corpo = resto[corte:].strip()
    else:
        c = CABECALHO.match(p)
        blocos.append(("cabecalho", p[: c.end()].strip()))
        corpo = p[c.end():].strip()
    pos = [x.start() for x in SECAO.finditer(" " + corpo)]
    pos = [max(0, x - 0) for x in pos]
    cortes = [0] + [x for x in pos if x > 0] + [len(corpo)]
    numeracao = [int(x.group(1)) for x in SECAO.finditer(" " + corpo)]
    for a, b in zip(cortes, cortes[1:]):
        trecho = corpo[a:b].strip()
        if trecho:
            blocos.append(("paragrafo", trecho))
    return blocos, numeracao


def gravar(nome, blocos, colunas, numeracao=None):
    linhas = [f"@origem {PDF_REL}", f"@fonte {FONTE}",
              "@camada texto latino — transcrição de Migne, sem alteração de palavras; gerada por ferramentas/homilias/separar_latim.py; não editar à mão",
              "@colunas " + ", ".join(colunas)]
    if numeracao is not None:
        linhas.append("@numeracao " + (", ".join(map(str, numeracao)) or "(sem parágrafos numerados)"))
    out = "\n".join(linhas) + "\n\n" + "\n\n".join(f"@{m}\n{t}" for m, t in blocos) + "\n"
    with open(os.path.join(DESTINO, nome), "w", encoding="utf-8") as f:
        f.write(out)


def main():
    s = texto_do_pdf()
    pos = [m.start() for m in CABECALHO.finditer(s)]
    if len(pos) != 40:
        raise SystemExit(f"esperadas 40 homilias, encontradas {len(pos)}")
    os.makedirs(DESTINO, exist_ok=True)
    pref = marcar_colunas(s[: pos[0]].strip())
    cab = re.match(r"Praefatio\. AD SECUNDINUM TAUROMENITANUM EPISCOPUM\.", pref)
    gravar("prefacio.txt", [("cabecalho", cab.group(0)), ("paragrafo", pref[cab.end():].strip())],
           re.findall(r"\[(\d{4})\]", pref))
    for i, (a, b) in enumerate(zip(pos, pos[1:] + [len(s)]), start=1):
        p = marcar_colunas(s[a:b].strip())
        blocos, numeracao = blocos_da_homilia(p)
        gravar(f"homilia-{i:02d}.txt", blocos, re.findall(r"\[(\d{4})\]", p), numeracao)
    print(f"gravados: prefácio e 40 homilias em {os.path.relpath(DESTINO, RAIZ)}")


if __name__ == "__main__":
    main()
