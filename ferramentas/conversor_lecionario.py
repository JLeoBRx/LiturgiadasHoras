# -*- coding: utf-8 -*-
"""
Conversor dos arquivos do Lecionário (acervo/lecionario) para o formato de
texto por blocos (ver dados/LEIA-ME.md).

Estrutura de saída:
  @secao Primeira leitura | Ref.        (Segunda leitura, Evangelho, ...)
  @tema                                 frase-tema (itálico)
  @leitura                              "Leitura do Livro..." + referência
  @texto                                texto (uma linha por linha de sentido)
  @secao Salmo responsorial | Ref.
  @refrao                               R. do salmo
  @versos                               estrofes do salmo
  @secao Aclamação ao Evangelho | Ref.
"""
import re
from bs4 import BeautifulSoup, NavigableString, Tag, Comment

VERMELHO = {"red", "#cc0000", "#ff0000", "#c00", "#990000", "#cc3300", "#800000", "#cc0033"}
CABECALHOS = {
    "PRIMEIRA LEITURA": "Primeira leitura", "SEGUNDA LEITURA": "Segunda leitura",
    "TERCEIRA LEITURA": "Terceira leitura", "QUARTA LEITURA": "Quarta leitura",
    "QUINTA LEITURA": "Quinta leitura", "SEXTA LEITURA": "Sexta leitura",
    "SÉTIMA LEITURA": "Sétima leitura", "EPÍSTOLA": "Epístola", "EVANGELHO": "Evangelho",
    "CARTA": "Carta", "SALMO RESPONSORIAL": "Salmo responsorial",
    "ALELUIA E ACLAMAÇÃO AO EVANGELHO": "Aclamação ao Evangelho",
}


def ns(s):
    return re.sub(r"[ \t\r\n\f\v ]+", " ", s)


def vermelho(el):
    if not isinstance(el, Tag):
        return False
    if el.name == "font" and (el.get("color") or "").lower() in VERMELHO:
        return True
    st = (el.get("style") or "").lower().replace(" ", "")
    if "color:#cc0000" in st or "color:red" in st:
        return True
    c = " ".join(el.get("class") or [])
    return "termo-vermelho" in c or "num-vermelho" in c


def eh_numero_versiculo(el):
    st = (el.get("style") or "").replace(" ", "").lower()
    return el.name == "div" and "min-width:20px" in st and ("font-size:9px" in st or "color:#cc0000" in st)


class Linear:
    def __init__(self):
        self.out = []

    def w(self, s):
        self.out.append(s)

    def walk(self, node, red=False):
        if isinstance(node, Comment):
            return
        if isinstance(node, NavigableString):
            t = ns(str(node))
            if t:
                self.w(t)
            return
        if not isinstance(node, Tag):
            return
        n = node.name.lower()
        st = (node.get("style") or "").replace(" ", "").lower()
        if n in ("script", "style", "head", "title", "meta", "img"):
            return
        if "display:none" in st:
            return
        if n == "br":
            self.w("\n")
            return
        if eh_numero_versiculo(node):
            t = ns(node.get_text()).strip()
            if t:
                self.w("\x02[%s] " % t)
            return
        txt = ns(node.get_text()).strip()
        if n == "center" or (n in ("font", "span", "b") and txt in CABECALHOS and (red or vermelho(node))):
            if txt.upper() in CABECALHOS:
                self.w("\n⟪cab⟫%s\n" % txt.upper())
                return
        if n == "p" and (node.get("align") or "").lower() == "right":
            self.w("\n⟪tema⟫%s\n" % txt)
            return
        if n == "h3":
            return
        if n == "a" and node.get("onclick"):
            return
        r = red or vermelho(node)
        if r and not red:
            inner = Linear()
            for ch in node.children:
                inner.walk(ch, True)
            s = "".join(inner.out)
            core = s.strip()
            if not core:
                self.w(s)
                return
            # preserva quebras internas
            partes = [p.strip() for p in core.split("\n")]
            self.w((" " if s[:1] == " " else "") + "\n".join("{%s}" % p if p and not p.startswith("⟪") and not p.startswith("\x02") else p for p in partes) + (" " if s[-1:] == " " else ""))
            return
        bloco = n in ("div", "p", "center", "blockquote", "li", "tr", "h1", "h2", "h4")
        if n in ("b", "strong"):
            inner = Linear()
            for ch in node.children:
                inner.walk(ch, red)
            s = "".join(inner.out)
            if s.strip() and "\n" not in s.strip():
                self.w((" " if s[:1] == " " else "") + "**" + s.strip() + "**" + (" " if s[-1:] == " " else ""))
            else:
                self.w(s)
            return
        if n in ("i", "em"):
            inner = Linear()
            for ch in node.children:
                inner.walk(ch, red)
            s = "".join(inner.out)
            if s.strip() and "\n" not in s.strip():
                self.w((" " if s[:1] == " " else "") + "_" + s.strip() + "_" + (" " if s[-1:] == " " else ""))
            else:
                self.w(s)
            return
        if bloco:
            self.w("\x01")
        for ch in node.children:
            self.walk(ch, red)
        if bloco:
            self.w("\x01")


def linhas_de(html):
    soup = BeautifulSoup(html, "lxml")
    lin = Linear()
    lin.walk(soup.body or soup)
    s = "".join(lin.out)
    # \x02 (número de versículo) sempre começa linha; \x01 = quebra suave
    s = s.replace("\x02", "\x01")
    s = re.sub(r"[\x01 \t]*\x01[\x01 \t]*", "\n", s)
    out = []
    for l in s.split("\n"):
        l = re.sub(r"[ \t]+", " ", l).strip()
        l = l.replace("{ ", "{").replace(" }", "}").replace("{}", "")
        out.append(l)
    # junta número de versículo isolado com a linha seguinte
    res = []
    i = 0
    while i < len(out):
        l = out[i]
        if re.fullmatch(r"\[\w{1,4}\]", l) and i + 1 < len(out) and out[i + 1]:
            res.append(l + " " + out[i + 1])
            i += 2
            continue
        res.append(l)
        i += 1
    return res


RE_REF = r"[0-9][0-9,.\-–a-zA-Z; ]*"


class Lecionario:
    """Estrutura um arquivo do lecionário em seções."""

    def __init__(self, html):
        self.linhas = linhas_de(html)
        self.secoes = []

    def nova(self, nome, ref=""):
        s = {"nome": nome, "ref": ref, "blocos": []}
        self.secoes.append(s)
        return s

    def processar(self):
        sec = None
        modo = None
        for l in self.linhas:
            if not l:
                if sec is not None and sec["blocos"] and sec["blocos"][-1][1] and sec["blocos"][-1][1][-1] != "":
                    sec["blocos"][-1][1].append("")
                continue
            m = re.match(r"^⟪cab⟫(.*)$", l)
            if m:
                nome = CABECALHOS.get(m.group(1).strip(), m.group(1).strip().capitalize())
                sec = self.nova(nome)
                modo = "inicio"
                continue
            m = re.match(r"^⟪tema⟫(.*)$", l)
            if m:
                if sec is None:
                    sec = self.nova("Leitura")
                t = m.group(1).strip().strip("_").strip()
                if t:
                    sec["blocos"].append(["tema", [t]])
                continue
            plain = re.sub(r"[{}*_]", "", l).strip()
            if re.match(r"^(Salmo responsorial|SALMO RESPONSORIAL)\b", plain):
                sec = self.nova("Salmo responsorial")
                resto = plain[len("Salmo responsorial"):].strip()
                if resto:
                    sec["ref"] = resto
                modo = "salmo-ref"
                continue
            if re.match(r"^(Aclamação ao Evangelho|Aclamação|Aleluia e aclamação ao Evangelho|Sequência)\b", plain, re.I):
                nome = "Sequência" if plain.lower().startswith("sequ") else "Aclamação ao Evangelho"
                sec = self.nova(nome)
                resto = re.sub(r"^(Aclamação ao Evangelho|Aclamação|Aleluia e aclamação ao Evangelho|Sequência)", "", plain, flags=re.I).strip()
                if resto:
                    sec["ref"] = resto
                modo = "acl-ref"
                continue
            if sec is None:
                sec = self.nova("Introdução")
                modo = "texto"
            if modo == "salmo-ref" and re.match(r"^\{?\s*(Sl|Cf\.|Is|Dn|Ex|Lc|1Sm|Jt|Jr|Tb|Fl|Ef|Cl|Ap|Hab|Dt|1Cr|Sb)\b", l) and not sec["ref"]:
                sec["ref"] = plain
                continue
            if modo in ("salmo-ref",) and re.match(r"^\(?R\.", plain):
                sec["blocos"].append(["refrao", [re.sub(r"^\{?R\.\}?\s*", "", l).strip()]])
                modo = "salmo"
                continue
            if modo == "acl-ref" and not sec["ref"] and re.fullmatch(r"\{[^{}]+\}", l) and re.search(r"\d", l):
                sec["ref"] = plain
                continue
            if modo == "inicio":
                # cabeçalho da leitura: "Leitura do ... {ref}" ou "Proclamação do Evangelho ... {ref}"
                if re.match(r"^(\*\*)?(Leitura|Início|Proclamação|Princípio|Conclusão|Fim)", plain):
                    m2 = re.search(r"\{([^{}]*\d[^{}]*)\}\s*$", l)
                    if m2:
                        sec["ref"] = sec["ref"] or m2.group(1).strip()
                    sec["blocos"].append(["leitura", [l]])
                    modo = "texto"
                    continue
            if modo == "salmo":
                tipo = "versos"
            else:
                tipo = "texto"
                if modo not in ("salmo",):
                    modo = "texto" if modo in ("inicio", "acl-ref", "texto") else modo
            if sec["blocos"] and sec["blocos"][-1][0] == tipo:
                sec["blocos"][-1][1].append(l)
            else:
                sec["blocos"].append([tipo, [l]])
        return self

    def referencias(self):
        return [(s["nome"], s["ref"]) for s in self.secoes if s["ref"]]

    def para_texto(self, cab):
        out = []
        for k, v in cab:
            out.append("@%s %s" % (k, v))
        out.append("")
        for s in self.secoes:
            ref = re.sub(r"[{}]", "", s["ref"]).strip()
            out.append("@secao %s%s" % (s["nome"], (" | " + ref) if ref else ""))
            out.append("")
            for tipo, linhas in s["blocos"]:
                while linhas and not linhas[-1]:
                    linhas.pop()
                if not any(linhas):
                    continue
                out.append("@" + tipo)
                out.extend(linhas)
                out.append("")
        return "\n".join(out).rstrip() + "\n"
