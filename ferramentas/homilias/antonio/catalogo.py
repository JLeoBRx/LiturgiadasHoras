#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Monta o catálogo dos 85 itens dos Sermones dominicales et festivi de Santo
Antônio de Pádua e a camada latim/ (só estrutura, sem texto).

Entradas:
  - páginas do Lírio Católico (via extrair_lirio.py);
  - estrutura extraída dos PDFs do Centro Studi Antoniani por
    extrair_latim_csa.py (pasta local, fora do repositório; o texto latino
    não é copiado: só números de parágrafo, seções e páginas);
  - sumário da tradução da Vozes (dados/homilias/antonio/sumario.json).

Saídas (no repositório):
  dados/homilias/antonio/catalogo.json
  dados/homilias/antonio/latim/<código>.json

Uso:  python3 ferramentas/homilias/antonio/catalogo.py <pasta_local_da_extracao_do_latim>
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extrair_lirio as EL  # noqa: E402

RAIZ = EL.RAIZ
BASE = os.path.join(RAIZ, "dados", "homilias", "antonio")
PDFS = "Homilia dos Santos/Homilia de Santos/santo antonio de padua (1195 - 1231)/files - httpswwwcentrostudiantonianiitfonti-dei-sermones"
EDICAO = "Sancti Antonii Patavini Sermones dominicales et festivi, edição crítica, Centro Studi Antoniani, Pádua, 1979, 3 vols."
PUBLICACAO = ("consultada na publicação em PDF do Centro Studi Antoniani (\"Fonti dei Sermones\", centrostudiantoniani.it), que traz "
              "o texto crítico de 1979, o seu aparato e as fontes, ampliadas em 2021")
COLECOES = {"sd": ("Sermões dominicais", "Sermones dominicales"), "sm": ("Sermões marianos", "Sermones mariani"),
            "sf": ("Sermões festivos", "Sermones festivi")}


def tipo(titulo_latino):
    t = titulo_latino.lower()
    return "prologo" if t.startswith("prologus") else ("epilogo" if t.startswith("epilogus") else "sermao")


def main():
    pasta_la = sys.argv[1]
    csa = {f[:4]: json.load(open(os.path.join(pasta_la, f), encoding="utf-8")) for f in os.listdir(pasta_la) if f.endswith(".json")}
    lirio = sorted((EL.ler(s) for s in sorted(os.listdir(EL.PASTA))), key=lambda x: x["numero_na_colecao"])
    vozes = json.load(open(os.path.join(BASE, "sumario.json"), encoding="utf-8"))["sermoes"]
    # o sumário da Vozes lista só os sermões (sem prólogos e epílogo): dominicais, marianos, festivos
    ordem_vozes = [x for x in lirio if tipo(x["titulo_latino"]) == "sermao"]
    ordem_vozes = ([x for x in ordem_vozes if EL.codigo(x).startswith("sd")] + [x for x in ordem_vozes if EL.codigo(x).startswith("sm")]
                   + [x for x in ordem_vozes if EL.codigo(x).startswith("sf")])
    assert len(ordem_vozes) == len(vozes) == 76
    vz = {EL.codigo(x): v["titulo"] for x, v in zip(ordem_vozes, vozes)}
    os.makedirs(os.path.join(BASE, "latim"), exist_ok=True)
    itens = []
    for x in lirio:
        c = EL.codigo(x)
        la = csa[c]
        # Lírio: parágrafos numerados, lacunas, ordem
        pars = [(EL.numero_do_texto(p), p, s["n"]) for s in x["secoes"] for p in s["paragrafos"]]
        nums_pt = [n for n, _, _ in pars if n is not None]
        fora = [n for i, n in enumerate(nums_pt) if i + 1 < len(nums_pt) and n > nums_pt[i + 1] and nums_pt[i + 1] != 1]
        nums_la = [p["numero"] for s in la["secoes"] for p in s["paragrafos"]]
        secoes_la = [s for s in la["secoes"] if s["paragrafos"] or s["titulo"]]
        item = {
            "codigo": c,
            "ordem": x["numero_na_colecao"],
            "colecao": COLECOES[c[:2]][0],
            "colecao_latina": COLECOES[c[:2]][1],
            "parte": x["parte"],
            "parte_descricao": x["secao_da_obra"] if c.startswith("sd") else None,
            "tipo": tipo(x["titulo_latino"]),
            "titulo": x["titulo"],
            "titulo_latino": x["titulo_latino"],
            "lirio": {
                "pagina": "https://www.liriocatolico.com.br/santo_antonio_sermoes/view/%s/" % x["slug"],
                "slug": x["slug"],
                "publicada_em": EL.publicado_em(x["slug"]),
                "rotulo": x["rotulo"],
                "secoes": len(x["secoes"]),
                "secoes_declaradas": x["secoes_declaradas"],
                "paragrafos_declarados": x["paragrafos_declarados"],
                "paragrafos_numerados": len(nums_pt),
                "lacunas": [EL.numero_do_texto(p) for _, p, _ in pars if "lacuna" in p],
                "sem_ancora_na_pagina": [n for n, p, _ in pars if n is not None and p["numero"] is None],
                "fora_de_ordem": fora,
            },
            "latim": {
                "arquivo_pdf": PDFS + "/" + la["arquivo"],
                "titulo_no_pdf": la["titulo"],
                "secoes": len(secoes_la),
                "paragrafos": len(nums_la),
                "notas": len(la["notas"]),
            },
            "vozes_titulo": vz.get(c),
        }
        itens.append(item)
        estrutura = {
            "_leia": "Estrutura do texto latino deste sermão na edição crítica, sem o texto: por decisão do projeto, o texto da "
                     "edição do Centro Studi Antoniani não é reproduzido (ver dados/homilias/antonio/LEIA-ME.md).",
            "sermao": c,
            "edicao": EDICAO,
            "consulta": PUBLICACAO + "; arquivo " + la["arquivo"],
            "titulo_no_pdf": la["titulo"],
            "paginas_do_pdf": max([pg for s in la["secoes"] for p in s["paragrafos"] for pg in p["paginas"]] or [1]),
            "parte_preliminar": bool(la["preliminar"].strip()),
            "secoes": [{"n": i + 1, "paragrafos": [{"n": p["numero"], "paginas_do_pdf": p["paginas"], "notas": len(p["notas"])}
                                                  for p in s["paragrafos"]]} for i, s in enumerate(secoes_la)],
            "notas": len(la["notas"]),
        }
        json.dump(estrutura, open(os.path.join(BASE, "latim", c + ".json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    cat = {
        "_leia": [
            "Catálogo dos 85 itens dos Sermones dominicales et festivi de Santo Antônio de Pádua (1195–1231): 72 dominicais "
            "(com 7 prólogos e o epílogo), 7 marianos (com o prólogo) e 6 festivos, na ordem e com os códigos da edição do "
            "Centro Studi Antoniani (sd01–sd72, sm01–sm07, sf01–sf06).",
            "Gerado por ferramentas/homilias/antonio/catalogo.py a partir das páginas do Lírio Católico, da estrutura dos PDFs do "
            "Centro Studi Antoniani (sem o texto latino) e do sumário da tradução da Vozes. Não editar à mão.",
            "A situação da colação de cada sermão está em registro-editorial.json (colacao).",
        ],
        "edicao_de_referencia": EDICAO,
        "consulta_do_latim": PUBLICACAO,
        "itens": itens,
    }
    json.dump(cat, open(os.path.join(BASE, "catalogo.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("catálogo:", len(itens), "itens; latim/:", len(itens), "arquivos de estrutura")


if __name__ == "__main__":
    main()
