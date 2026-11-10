#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extrai, das 85 páginas do Lírio Católico (espelho HTTrack enviado pelo
responsável do projeto), o texto português dos sermões de Santo Antônio de
Pádua, sem alterar nenhuma palavra.

Entrada (nunca alterada):
  Homilia dos Santos/Homilia de Santos/santo antonio de padua (1195 - 1231)/
      view lirio/view/<slug>/index.html

Saída: estrutura em JSON (para o catálogo e a camada recebida/), com, por
página: slug, rótulo ("Sermões Dominicais · Parte I · Sermão n.º 2"), título
português e latino, contagem declarada de seções e parágrafos, e as seções
com os parágrafos (número do parágrafo da edição, quando a página o dá, e os
blocos <p> de texto).

Os parágrafos que o Lírio deixou sem tradução ("Trecho ainda sem tradução —
texto em latim") trazem, na página, o texto latino da edição crítica do
Centro Studi Antoniani. Esse latim NÃO é copiado: fica registrado como lacuna
(com o número de caracteres), porque o projeto decidiu não reproduzir o texto
da edição crítica.

Uso:
  python3 ferramentas/homilias/antonio/extrair_lirio.py <saida.json>
  python3 ferramentas/homilias/antonio/extrair_lirio.py --recebida
      (grava dados/homilias/antonio/recebida/<código>.txt, um por sermão)

Formato da camada recebida (o mesmo das outras camadas de homilias: "@marca",
uma linha por parágrafo <p> da página, linha em branco entre blocos):
  @titulo, @titulo-latino, @secao N (título da seção), @temas (parágrafo sem
  número, como os "temas do sermão" e os prólogos), @paragrafo N (parágrafo
  numerado pela edição; o número vem da âncora da página ou do próprio texto),
  @lacuna N (parágrafo sem tradução no Lírio).
"""
import html
import json
import os
import re
import sys
from html.parser import HTMLParser

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
PASTA = os.path.join(RAIZ, "Homilia dos Santos", "Homilia de Santos", "santo antonio de padua (1195 - 1231)", "view lirio", "view")


class Pagina(HTMLParser):
    """Lê uma página do Lírio. Guarda o texto exatamente como está (entidades decodificadas)."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.pilha = []          # classes dos elementos abertos
        self.rotulo = self.h1 = self.titulo_la = self.meta = ""
        self.secoes = []
        self.par = None          # parágrafo em leitura
        self.texto_idioma = None  # "Português" | "Latim" dentro de sa-texto
        self.p = None            # <p> em leitura
        self.em = None           # campo de cabeçalho em leitura
        self.h2 = None
        self.sem_pt = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = a.get("class", "")
        self.pilha.append((tag, cls))
        if tag == "p" and cls == "sa-rotulo":
            self.em = "rotulo"
        elif tag == "h1":
            self.em = "h1"
        elif tag == "span" and cls == "sa-titulo-la":
            self.em = "titulo_la"
        elif tag == "p" and cls == "sa-topo-meta":
            self.em = "meta"
        elif tag == "section" and "sa-secao" in cls.split():
            self.secoes.append({"n": int(a.get("data-s")), "titulo": "", "paragrafos": []})
        elif tag == "h2" and self.secoes and self._dentro("sa-secao-topo"):
            self.h2 = ""
        elif tag == "div" and cls == "sa-par":
            pid = a.get("id")
            self.par = {"id": pid, "numero": int(pid[1:]) if pid and re.fullmatch(r"p\d+", pid) else None,
                        "data_i": a.get("data-i"), "idioma": None, "blocos": []}
            self.secoes[-1]["paragrafos"].append(self.par)
        elif tag == "div" and "sa-texto" in cls.split() and self.par is not None:
            self.par["idioma"] = a.get("data-idioma")
            self.texto_idioma = a.get("data-idioma")
        elif tag == "p" and self.texto_idioma:
            self.p = ""
        elif tag == "span" and cls == "sa-sem-pt" and self.par is not None:
            self.sem_pt = True
            self.par["aviso"] = ""
        elif tag == "i" and self.h2 is not None:
            pass

    def _dentro(self, classe):
        return any(classe in c.split() for _, c in self.pilha)

    def handle_endtag(self, tag):
        if not self.pilha:
            return
        t, cls = self.pilha.pop()
        if tag == "p" and self.p is not None and self.texto_idioma:
            self.par["blocos"].append(self.p)
            self.p = None
        elif tag == "span" and self.sem_pt:
            self.sem_pt = False
        elif tag == "div" and "sa-texto" in cls.split():
            self.texto_idioma = None
        elif tag == "div" and cls == "sa-par":
            self.par = None
        elif tag == "h2" and self.h2 is not None:
            self.secoes[-1]["titulo"] = self.h2.strip()
            self.h2 = None
        elif self.em == "titulo_la" and tag == "span":
            self.em = "h1"
        elif self.em in ("rotulo", "h1", "meta") and tag in ("p", "h1"):
            self.em = None

    def handle_data(self, data):
        if self.sem_pt:
            self.par["aviso"] += data
        elif self.p is not None:
            self.p += data
        elif self.h2 is not None:
            self.h2 += data
        elif self.em == "rotulo":
            self.rotulo += data
        elif self.em == "h1":
            self.h1 += data
        elif self.em == "titulo_la":
            self.titulo_la += data
        elif self.em == "meta":
            self.meta += data


def ler(slug):
    t = open(os.path.join(PASTA, slug, "index.html"), encoding="utf-8").read()
    pg = Pagina()
    pg.feed(t)
    m = re.search(r"(\d+) seç(?:ão|ões)\s*·\s*(\d+) parágrafos?", pg.meta)
    rot = re.match(r"(.+?) · (?:(Parte [IVX]+) · )?Sermão n\.º (\d+)", pg.rotulo.strip())
    coll = pg.meta.split("·")[0].strip()
    out = {
        "slug": slug,
        "rotulo": pg.rotulo.strip(),
        "colecao": rot.group(1) if rot else None,
        "parte": rot.group(2) if rot else None,
        "numero_na_colecao": int(rot.group(3)) if rot else None,
        "secao_da_obra": coll,
        "titulo": pg.h1.strip(),
        "titulo_latino": pg.titulo_la.strip(),
        "secoes_declaradas": int(m.group(1)) if m else None,
        "paragrafos_declarados": int(m.group(2)) if m else None,
        "secoes": [],
    }
    for s in pg.secoes:
        pars = []
        for p in s["paragrafos"]:
            item = {"numero": p["numero"], "idioma": p["idioma"]}
            if p["idioma"] == "Latim":
                # texto latino da edição crítica exibido pelo Lírio no lugar da tradução: não copiado
                item["lacuna"] = {"aviso": p.get("aviso", "").strip(), "caracteres_do_latim_omitido": sum(len(b) for b in p["blocos"])}
                item["blocos"] = []
            else:
                item["blocos"] = p["blocos"]
            pars.append(item)
        out["secoes"].append({"n": s["n"], "titulo": s["titulo"], "paragrafos": pars})
    return out


def codigo(x):
    """Código do sermão na edição do Centro Studi Antoniani: sd01-sd72, sm01-sm07, sf01-sf06."""
    n = x["numero_na_colecao"]
    return "sd%02d" % n if n <= 72 else ("sm%02d" % (n - 72) if n <= 79 else "sf%02d" % (n - 79))


def numero_do_texto(p):
    """Número do parágrafo: âncora da página (id="pN") ou o número no começo do texto."""
    if p["numero"] is not None:
        return p["numero"]
    if p["blocos"]:
        m = re.match(r"^(\d{1,3})\s*[.\-–]?\s", p["blocos"][0])
        return int(m.group(1)) if m else None
    return None


def publicado_em(slug):
    t = open(os.path.join(PASTA, slug, "index.html"), encoding="utf-8").read()
    m = re.search(r'article:published_time" content="(\d{4}-\d{2}-\d{2})', t)
    return m.group(1) if m else None


def texto_recebido(x):
    slug = x["slug"]
    cab = [
        "@origem Lírio Católico, https://www.liriocatolico.com.br/santo_antonio_sermoes/view/%s/ (publicada em %s); "
        "cópia da página enviada pelo responsável do projeto: Homilia dos Santos/Homilia de Santos/santo antonio de padua "
        "(1195 - 1231)/view lirio/view/%s/index.html" % (slug, publicado_em(slug), slug),
        "@camada tradução recebida — texto exato da página do Lírio Católico, sem nenhuma alteração; gerada por "
        "ferramentas/homilias/antonio/extrair_lirio.py; não editar à mão",
        "@sermao " + codigo(x),
        "@rotulo " + x["rotulo"],
    ]
    if x["secoes_declaradas"] is not None:
        cab.append("@declarado %d seções · %d parágrafos" % (x["secoes_declaradas"], x["paragrafos_declarados"]))
    blocos = [("@titulo", x["titulo"]), ("@titulo-latino", x["titulo_latino"])]
    for s in x["secoes"]:
        blocos.append(("@secao %d" % s["n"], s["titulo"]))
        for p in s["paragrafos"]:
            n = numero_do_texto(p)
            if "lacuna" in p:
                blocos.append(("@lacuna %d" % n, "[Sem tradução no Lírio Católico (\"%s\"). A página exibe aqui o texto latino "
                               "da edição crítica (%d caracteres), que não é reproduzido nesta camada.]"
                               % (p["lacuna"]["aviso"], p["lacuna"]["caracteres_do_latim_omitido"])))
            else:
                for b in p["blocos"]:
                    assert "\n" not in b, (slug, b[:60])
                blocos.append(("@paragrafo %d" % n if n is not None else "@temas", "\n".join(p["blocos"])))
    return "\n".join(cab) + "\n\n" + "\n\n".join("%s\n%s" % b for b in blocos) + "\n"


def main():
    slugs = sorted(os.listdir(PASTA))
    dados = [ler(s) for s in slugs]
    if sys.argv[1] == "--recebida":
        destino = os.path.join(RAIZ, "dados", "homilias", "antonio", "recebida")
        os.makedirs(destino, exist_ok=True)
        for x in dados:
            open(os.path.join(destino, codigo(x) + ".txt"), "w", encoding="utf-8").write(texto_recebido(x))
        print("recebida:", len(dados), "arquivos em", destino)
        return
    json.dump(dados, open(sys.argv[1], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("páginas:", len(dados))


if __name__ == "__main__":
    main()
