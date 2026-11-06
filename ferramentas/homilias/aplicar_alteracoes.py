#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera a camada REVISADA (texto publicado no site) das homilias de São Gregório
Magno a partir da camada RECEBIDA e do registro editorial.

  recebida/homilia-NN.txt  +  registro-editorial.json (só estado "aplicada")
        -> revisada/homilia-NN.txt

Só são geradas as homilias listadas em "colacao" no registro (as que foram
conferidas com o latim). Cada correção aplicada precisa encontrar o texto
"antes" exatamente uma vez no bloco indicado; caso contrário o script para e
nada é gravado. A camada recebida nunca é alterada.

Para desfazer uma correção: mude seu estado para "nao-aplicada" e rode de novo.
"""
import json, os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE = os.path.join(RAIZ, "dados", "homilias", "gregorio-magno")


def ler_blocos(caminho):
    """-> (cabeçalho [linhas @meta], [(marca, texto)])"""
    txt = open(caminho, encoding="utf-8").read()
    partes = txt.split("\n\n")
    meta, blocos = [], []
    for p in partes:
        if not p.strip():
            continue
        linhas = p.split("\n")
        if linhas[0].startswith("@") and len(linhas) == 1 and not blocos and linhas[0].split()[0] in ("@origem", "@camada", "@trechos"):
            meta.append(linhas[0]); continue
        if all(l.startswith("@") for l in linhas) and not blocos:
            meta.extend(linhas); continue
        blocos.append((linhas[0], "\n".join(linhas[1:])))
    return meta, blocos


def main():
    reg = json.load(open(os.path.join(BASE, "registro-editorial.json"), encoding="utf-8"))
    colacao = {c["homilia"]: c for c in reg.get("colacao", [])}
    erros, saidas = [], {}
    for n in sorted(colacao):
        meta, blocos = ler_blocos(os.path.join(BASE, "recebida", f"homilia-{n:02d}.txt"))
        blocos = [list(b) + [[]] for b in blocos]  # [marca, texto, blocos a inserir antes]
        for r in reg["registros"]:
            if r["homilia"] != n or r["estado"] != "aplicada":
                continue
            if r["tipo"] != "correcao" or r["confianca"] != "alta":
                erros.append(f"{r['id']}: só correções de confiança alta podem ser aplicadas"); continue
            alvo = blocos[r["bloco"]][1]
            k = alvo.count(r["antes"])
            if k != 1:
                erros.append(f"{r['id']}: 'antes' aparece {k} vez(es) no bloco {r['bloco']}"); continue
            blocos[r["bloco"]][1] = alvo.replace(r["antes"], r["depois"])
            # uma correção pode acrescentar blocos antes do indicado (ex.: cabeçalho
            # que falta na tradução recebida, traduzido do latim): "insere_antes"
            for marca, texto in r.get("insere_antes", []):
                blocos[r["bloco"]][2].append([marca, texto])
        # uma correção pode unir o bloco ao seguinte ("une_ao_seguinte": parágrafo
        # partido no meio de uma frase na origem); as uniões vêm antes das separações
        for r in sorted((x for x in reg["registros"] if x["homilia"] == n and x["estado"] == "aplicada" and x.get("une_ao_seguinte")),
                        key=lambda x: -x["bloco"]):
            b = r["bloco"]
            if blocos[b + 1][2]:
                erros.append(f"{r['id']}: não se pode unir um bloco que recebe inserções"); continue
            blocos[b][1] = blocos[b][1] + " " + blocos[b + 1][1]
            del blocos[b + 1]
        # uma correção pode separar parágrafos (linha em branco em "depois"):
        # o primeiro pedaço mantém a etiqueta, os seguintes viram @paragrafo
        separados = []
        for m, t, antes in blocos:
            separados.extend(list(x) for x in antes)
            pedacos = t.split("\n\n")
            separados.append([m, pedacos[0]])
            separados.extend(["@paragrafo", x] for x in pedacos[1:])
        blocos = separados
        aplicadas = [r["id"] for r in reg["registros"] if r["homilia"] == n and r["estado"] == "aplicada"]
        cab = [l for l in meta if not l.startswith("@camada")]
        cab.insert(1, "@camada tradução revisada — gerada por ferramentas/homilias/aplicar_alteracoes.py; não editar à mão")
        cab.append("@correcoes " + (", ".join(aplicadas) if aplicadas else "(nenhuma)"))
        corpo = "\n\n".join(f"{m}\n{t}" for m, t in blocos)
        saidas[n] = "\n".join(cab) + "\n\n" + corpo + "\n"
    if erros:
        sys.exit("NADA FOI GRAVADO:\n  " + "\n  ".join(erros))
    os.makedirs(os.path.join(BASE, "revisada"), exist_ok=True)
    for n, s in saidas.items():
        open(os.path.join(BASE, "revisada", f"homilia-{n:02d}.txt"), "w", encoding="utf-8").write(s)
    print("revisadas:", ", ".join(f"{n:02d}" for n in saidas))


if __name__ == "__main__":
    main()
