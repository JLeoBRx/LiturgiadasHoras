#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera a camada REVISADA dos sermões de Santo Antônio de Pádua a partir da
camada RECEBIDA (tradução do Lírio Católico) e do registro editorial.

  dados/homilias/antonio/recebida/<código>.txt
    + dados/homilias/antonio/registro-editorial.json (só entradas "aplicada")
    -> dados/homilias/antonio/revisada/<código>.txt

A camada recebida nunca é alterada. Cada entrada aplicada aponta para um bloco
da recebida ("bloco", contado a partir de 0, sem o cabeçalho) e pode:
  - trocar um trecho: "antes" (copiado exatamente; precisa aparecer uma vez só
    no bloco) -> "depois";
  - mover o bloco (parágrafo fora de ordem na página): "mover_para_antes_do_bloco"
    ou "mover_para_depois_do_bloco";
  - preencher uma lacuna (@lacuna) com tradução própria: tipo "traducao-propria",
    "depois" = texto traduzido do latim; o bloco passa a "@paragrafo N" e o texto
    fica identificado no cabeçalho (@traducao-propria).
Se uma entrada não puder ser aplicada exatamente, o script para e NADA é gravado.

Desfazer: mude o estado da entrada para "nao-aplicada" e rode de novo.
Uso:  python3 ferramentas/homilias/antonio/aplicar_alteracoes.py [--verificar]
"""
import json
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
BASE = os.path.join(RAIZ, "dados", "homilias", "antonio")
APLICAVEIS = {"correcao", "estrutura", "traducao-propria", "problema-fonte"}


def ler(caminho):
    """-> (cabeçalho: [linhas], blocos: [[marca, texto]])"""
    txt = open(caminho, encoding="utf-8").read().rstrip("\n")
    partes = txt.split("\n\n")
    cab = partes[0].split("\n")
    blocos = []
    for p in partes[1:]:
        linhas = p.split("\n")
        blocos.append([linhas[0], "\n".join(linhas[1:])])
    return cab, blocos


def revisar(codigo, registros):
    cab, blocos = ler(os.path.join(BASE, "recebida", codigo + ".txt"))
    erros, aplicadas, proprias = [], [], []
    regs = [r for r in registros if r["sermao"] == codigo and r["estado"] == "aplicada"]
    for r in regs:
        if r["tipo"] not in APLICAVEIS:
            erros.append("%s: tipo %s não se aplica ao texto" % (r["id"], r["tipo"]))
            continue
        if r["tipo"] == "correcao" and r.get("confianca") != "alta":
            erros.append("%s: só correções de confiança alta são aplicadas" % r["id"])
            continue
        b = r["bloco"]
        if not 0 <= b < len(blocos):
            erros.append("%s: bloco %s inexistente" % (r["id"], b))
            continue
        if r["tipo"] == "traducao-propria":
            if not blocos[b][0].startswith("@lacuna"):
                erros.append("%s: tradução própria só preenche lacunas" % r["id"])
                continue
            blocos[b] = ["@paragrafo " + blocos[b][0].split()[1], r["depois"]]
            proprias.append(r["id"])
        elif "antes" in r:
            k = blocos[b][1].count(r["antes"])
            if k != 1:
                erros.append("%s: 'antes' aparece %d vez(es) no bloco %d" % (r["id"], k, b))
                continue
            blocos[b][1] = blocos[b][1].replace(r["antes"], r["depois"])
        aplicadas.append(r["id"])
    # movimentos de blocos, depois das trocas de texto (os índices referem-se à recebida)
    ordem = list(range(len(blocos)))
    for r in regs:
        for chave, desloc in (("mover_para_antes_do_bloco", 0), ("mover_para_depois_do_bloco", 1)):
            if chave in r:
                ordem.remove(r["bloco"])
                ordem.insert(ordem.index(r[chave]) + desloc, r["bloco"])
    blocos = [blocos[i] for i in ordem]
    cab = [l for l in cab if not l.startswith("@camada")]
    cab.insert(1, "@camada tradução revisada — tradução do Lírio Católico conferida com o latim; gerada por "
                  "ferramentas/homilias/antonio/aplicar_alteracoes.py a partir da recebida e do registro editorial; não editar à mão")
    cab.append("@alteracoes " + (", ".join(aplicadas) if aplicadas else "(nenhuma)"))
    if proprias:
        cab.append("@traducao-propria " + ", ".join(proprias) + " (trechos traduzidos do latim neste projeto; ver registro)")
    return erros, "\n".join(cab) + "\n\n" + "\n\n".join(("%s\n%s" % (m, t)) if t else m for m, t in blocos) + "\n"


def main():
    reg = json.load(open(os.path.join(BASE, "registro-editorial.json"), encoding="utf-8"))
    codigos = [c["sermao"] for c in reg["colacao"]]
    erros, saidas = [], {}
    for c in codigos:
        e, s = revisar(c, reg["registros"])
        erros += e
        saidas[c] = s
    if erros:
        sys.exit("NADA FOI GRAVADO:\n  " + "\n  ".join(erros))
    pasta = os.path.join(BASE, "revisada")
    if "--verificar" in sys.argv:
        dif = [c for c, s in saidas.items() if not os.path.exists(os.path.join(pasta, c + ".txt"))
               or open(os.path.join(pasta, c + ".txt"), encoding="utf-8").read() != s]
        sys.exit("revisada desatualizada: " + ", ".join(dif) if dif else 0)
    os.makedirs(pasta, exist_ok=True)
    for c, s in saidas.items():
        open(os.path.join(pasta, c + ".txt"), "w", encoding="utf-8").write(s)
    print("revisadas:", len(saidas))


if __name__ == "__main__":
    main()
