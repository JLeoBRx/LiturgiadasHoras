# -*- coding: utf-8 -*-
"""
Conversor dos HTML do acervo (Recursos/Liturgia das Horas) para o formato
de texto por blocos usado pelo site (ver dados/LEIA-ME.md).

Formato de saída (resumo):
  @titulo Laudes                  título principal da hora
  @secao Leitura breve | 2Ts 3,10 título de seção (com referência opcional)
  @texto                          parágrafo comum (V./R. ficam em vermelho)
  @rubrica                        instrução litúrgica (vermelho, menor)
  @hino                           poesia; linha em branco separa estrofes
  @antifona 1                     antífona (número opcional)
  @salmo salmo-005-2-10-12-13     inclui um texto da biblioteca de salmos
  @gloria                         "Glória ao Pai..." padrão no fim do salmo
  @leitura / @tema                cabeçalho de leitura e seu tema
  @responsorio                    responsório (uma linha por verso)
  @lacuna <codigo>                texto que não existe no acervo

Marcação dentro do texto:
  {texto}   trecho em vermelho (rubrica)
  **texto** negrito
  _texto_   itálico
  [12]      número de versículo
"""
import re
import unicodedata
from bs4 import BeautifulSoup, NavigableString, Tag, Comment

MARCADORES = {"V.", "R.", "*", "†", "–", "-", "+", "℣", "℟", "R/.", "V/.", "V/", "R/",
              "Ant.", "Ant", "=", "R. ", "V. "}

TAGS_LACUNA = re.compile(r"^(a\d|o|cs|rubricainvitatorio)$")


def norm_espacos(s):
    s = s.replace("\u00a0", " ").replace("\r", "\n")
    return re.sub(r"[ \t\n\f\v]+", " ", s)


def classes(el):
    if not isinstance(el, Tag):
        return []
    c = el.get("class") or []
    if isinstance(c, str):
        c = c.split()
    return [x.strip() for x in c if x.strip()]


def eh_vermelho(el):
    c = classes(el)
    if any(x.startswith("termo-vermelho") or x.startswith("num-vermelho") for x in c):
        return True
    if el.name == "font":
        cor = (el.get("color") or "").lower()
        if cor in ("red", "#cc0000", "#ff0000", "#c00", "#990000", "#cc3300", "#800000"):
            return True
    estilo = (el.get("style") or "").lower().replace(" ", "")
    if "color:#cc0000" in estilo or "color:red" in estilo or "color:#ff0000" in estilo:
        return True
    return False


class Inline:
    """Converte conteúdo inline em texto marcado. Coleta lacunas encontradas."""

    def __init__(self):
        self.lacunas = []

    def __call__(self, node, dentro_vermelho=False):
        return self.conv(node, dentro_vermelho)

    def conv(self, node, red=False):
        if isinstance(node, Comment):
            return ""
        if isinstance(node, NavigableString):
            return norm_espacos(str(node))
        if not isinstance(node, Tag):
            return ""
        n = node.name.lower()
        c = classes(node)
        if n in ("script", "style", "title", "meta", "head", "img"):
            return ""
        if n == "a" and ("link-externo" in c or node.get("onclick")):
            t = norm_espacos(node.get_text()).strip()
            if not t or node.find("sup") is not None or "latim" in t.lower() or len(t) < 3:
                return ""
            # link para outro texto: mantém só as palavras
            return " " + t + " "
        if TAGS_LACUNA.match(n):
            cod = n
            self.lacunas.append(cod)
            return "⟦lacuna:%s⟧" % cod
        if n == "br":
            return "\n"
        if n == "hr":
            return "\n"
        inner = "".join(self.conv(ch, red or eh_vermelho(node)) for ch in node.children)
        if n in ("b", "strong"):
            if not inner.strip():
                return inner
            return envolver(inner, "**")
        if n in ("i", "em"):
            if not inner.strip():
                return inner
            return envolver(inner, "_")
        if "num-vermelho" in " ".join(c):
            t = inner.strip()
            return "[%s] " % t if t else ""
        if eh_vermelho(node) and not red:
            t = inner.strip()
            if not t:
                return inner
            if t in MARCADORES or re.fullmatch(r"(Ant\.?\s*\d*|R\.|V\.|\*|†|–|-|\(?\d+\)?)", t):
                return " " + t + " " if inner != inner.strip() else t
            if re.fullmatch(r"[()\[\].,;:!]+", t):
                return inner
            # vermelho com quebras: aplica por linha
            partes = [p for p in t.split("\n")]
            out = "\n".join("{%s}" % p.strip() if p.strip() else "" for p in partes)
            lead = " " if inner[:1] == " " else ""
            trail = " " if inner[-1:] == " " else ""
            return lead + out + trail
        if "texto-sem-label" in c or "linha-responsorio" in c:
            return "\x01" + inner.strip() + "\x01"
        if n == "p":
            return "\n\n" + inner.strip() + "\n\n"
        if n in ("div", "center", "blockquote", "h1", "h2", "h3", "h4", "li", "tr"):
            return "\x01" + inner + "\x01"
        return inner


def envolver(inner, m):
    lead = inner[: len(inner) - len(inner.lstrip())]
    trail = inner[len(inner.rstrip()):]
    core = inner.strip()
    # não atravessa quebras de linha: aplica por linha
    linhas = core.split("\n")
    core = "\n".join(m + l.strip() + m if l.strip() else "" for l in linhas)
    return lead + core + trail


def resolver_quebras(txt):
    """\x01 = quebra 'suave' (fim de elemento de bloco): vira uma quebra
    simples, a menos que já haja uma linha em branco explícita."""
    def rep(m):
        run = m.group(0)
        n = run.count("\n")
        return "\n\n" if n >= 2 else "\n"
    return re.sub(r"[\x01\n \t]*\x01[\x01\n \t]*", rep, txt)


def limpar_linhas(txt):
    """Normaliza espaços por linha, remove espaços antes de pontuação e
    colapsa mais de uma linha em branco."""
    txt = resolver_quebras(txt)
    txt = re.sub(r"(?<=[^\s\[(])\[(\(?\d+[a-z]?\)?)\]", r" [\1]", txt)
    linhas = []
    for l in txt.split("\n"):
        l = re.sub(r"[ \t]+", " ", l).strip()
        l = re.sub(r"\s+([,.;:!?])(?=\s|$)", r"\1", l)
        l = l.replace("{ ", "{").replace(" }", "}")
        l = l.replace("{}", "")
        linhas.append(l)
    out = "\n".join(linhas)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip("\n")


def so_rubrica(txt):
    """True se o texto inteiro está entre chaves (vermelho)."""
    t = txt.strip()
    if not t:
        return False
    sem = re.sub(r"\{[^{}]*\}", "", t)
    return sem.strip() == "" and "{" in t


def tirar_chaves(txt):
    return re.sub(r"\{([^{}]*)\}", r"\1", txt)


def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return s


# --------------------------------------------------------------------------
# Biblioteca de salmos e cânticos (deduplicação)
# --------------------------------------------------------------------------

class Biblioteca:
    def __init__(self):
        self.itens = {}       # id -> dict(titulo, subtitulo, citacao, versos, fontes)
        self.por_texto = {}   # chave normalizada -> id

    @staticmethod
    def chave(versos):
        """Chave tolerante: só letras e números (ignora pontuação, espaços,
        marcações e números de versículo). Textos que diferem apenas nisso
        são considerados o mesmo salmo."""
        t = re.sub(r"\[[^\]]*\]", "", versos)
        t = unicodedata.normalize("NFC", t).lower()
        t = re.sub(r"[^0-9a-zà-ÿ]+", "", t)
        return t

    def registrar(self, base_id, cab, versos, fonte, pasta):
        k = self.chave(versos)
        if k in self.por_texto:
            iid = self.por_texto[k]
            it = self.itens[iid]
            it["fontes"].append(fonte)
            it["variantes"][versos] = it["variantes"].get(versos, 0) + 1
            for campo in ("titulo", "subtitulo", "citacao"):
                if cab.get(campo):
                    it["cabs"].setdefault(campo, {})
                    it["cabs"][campo][cab[campo]] = it["cabs"][campo].get(cab[campo], 0) + 1
            return iid
        iid = base_id
        n = 2
        while iid in self.itens:
            iid = "%s-v%d" % (base_id, n)
            n += 1
        cabs = {c: {cab[c]: 1} for c in ("titulo", "subtitulo", "citacao") if cab.get(c)}
        self.itens[iid] = dict(versos=versos, fontes=[fonte], pasta=pasta,
                               variantes={versos: 1}, cabs=cabs)
        self.por_texto[k] = iid
        return iid

    def finalizar(self):
        """Escolhe, para cada item, a forma mais frequente do texto e do
        cabeçalho."""
        for it in self.itens.values():
            it["versos"] = max(it["variantes"].items(), key=lambda kv: kv[1])[0]
            for campo, opcoes in it["cabs"].items():
                it[campo] = max(opcoes.items(), key=lambda kv: kv[1])[0]


LIVROS_CANTICOS = r"(Ex|Dt|1Sm|1Cr|Tb|Jt|Eclo|Sb|Is|Jr|Ez|Dn|Hab|Ef|Fl|Cl|1Tm|1Pd|Ap|Lc|Rm|Sir|Jn|Os|Sf|Ne|Esd|Mq|Pr|Jó)"


def id_para_titulo(titulo, parte=None, contexto=""):
    """Gera um identificador legível a partir do título do salmo/cântico."""
    t = tirar_chaves(titulo or "").strip()
    t = t.replace(" ", " ")
    pasta = "salmos"
    low = t.lower()
    base = None
    m = re.match(r"^salmo\s*(\d+)\s*([a-z])?\s*(?:\(\s*(\d+)\s*([a-z])?\s*\))?\s*,?\s*(.*)$", low)
    if m:
        num = int(m.group(1))
        letra = (m.group(2) or "")
        resto = slug(m.group(5) or "")
        base = "salmo-%03d%s" % (num, letra)
        if resto:
            base += "-" + resto
    elif "benedictus" in low:
        pasta, base = "canticos", "benedictus"
    elif "magnificat" in low:
        pasta, base = "canticos", "magnificat"
    elif "nunc dimittis" in low or "simeão" in low or "simeao" in low:
        pasta, base = "canticos", "nunc-dimittis"
    elif low.startswith("cântico") or low.startswith("cantico") or re.match(r"^(cf\.\s*)?" + LIVROS_CANTICOS.lower() + r"\b", low):
        pasta = "canticos"
        r = re.sub(r"^c[âa]ntico\s*", "", t, flags=re.I)
        r = re.sub(r"^cf\.?\s*", "", r, flags=re.I)
        base = slug(r) or "cantico"
    elif t:
        pasta = "canticos" if "cântico" in contexto.lower() else "salmos"
        base = slug(t)[:60] or "texto"
    else:
        base = "trecho"
    if parte:
        base += "-" + slug(parte)
    return pasta, base


# --------------------------------------------------------------------------
# Conversão de um documento de ofício
# --------------------------------------------------------------------------

CLASSES_BLOCO = {"verso-container", "subtitulos", "titulo-salmo", "subtitulo-salmo", "salmodia",
                 "bloco-geral", "titulo-principal", "cabecalho-leitura", "antifona", "hino-texto",
                 "responsorio-bloco", "citacao-salmo"}


def eh_bloco(el):
    return isinstance(el, Tag) and bool(CLASSES_BLOCO.intersection(classes(el)))


def dividir(el):
    """Divide os filhos de um elemento em (conteúdo inline inicial, resto),
    onde o resto começa no primeiro filho que é um bloco. Serve para HTML
    malformado em que um <div> não foi fechado."""
    filhos = list(el.children)
    for i, ch in enumerate(filhos):
        if eh_bloco(ch):
            return filhos[:i], filhos[i:]
    return filhos, []


class Documento:
    def __init__(self, html, fonte, biblioteca=None):
        self.soup = BeautifulSoup(html, "lxml")
        self.fonte = fonte
        self.bib = biblioteca
        self.blocos = []           # lista de (tipo, argumento, texto)
        self.inline = Inline()
        self.lacunas = []
        self.run = None            # versos em acumulação
        self.cab = {}              # cabeçalho pendente de salmo
        self.ultimo_titulo_salmo = ""
        self.contexto_secao = ""
        self.titulo_doc = ""
        self.salmos_usados = []

    # -- utilidades
    def emit(self, tipo, arg="", texto=""):
        texto = limpar_linhas(texto) if texto else ""
        if tipo == "secao":
            self.ultimo_titulo_salmo = ""
        if tipo == "texto" and self.blocos and self.blocos[-1][0] == "secao":
            sec = self.blocos[-1][1].lower()
            if sec.startswith("responsório") or sec.startswith("responsorio"):
                tipo = "responsorio"
            elif sec.startswith("preces"):
                tipo = "preces"
            elif sec.startswith("oração") and "dia" not in sec:
                tipo = "oracao"
        if tipo in ("texto",) and not texto:
            return
        if tipo == "texto" and so_rubrica(texto):
            tipo, texto = "rubrica", tirar_chaves(texto)
        texto = re.sub(r"\{?⟦lacuna:rubricainvitatorio⟧\}?", "", texto).strip("\n") if texto else texto
        if tipo in ("texto", "oracao", "preces", "responsorio", "rubrica") and "⟦lacuna:" in texto and not re.sub(r"[{}]|⟦lacuna:[^⟧]*⟧", "", texto).strip():
            for cod in re.findall(r"⟦lacuna:([^⟧]*)⟧", texto):
                self.blocos.append(("lacuna", self.nome_lacuna(cod), ""))
            return
        self.blocos.append((tipo, arg, texto))

    def nome_lacuna(self, cod):
        ctx = self.contexto_secao.lower()
        if cod == "o":
            return "oracao"
        if "invitatorio" in self.fonte:
            return "conclusao-invitatorio" if cod == "cs" else "antifona-invitatorio" if cod.startswith("a") else ("rubrica-invitatorio" if "rubrica" in cod else cod)
        if cod in ("a1", "a2", "a3"):
            if "benedictus" in ctx:
                return "antifona-benedictus"
            if "magnificat" in ctx:
                return "antifona-magnificat"
            return "antifona-" + cod
        return cod

    # -- versos (salmos)
    def iniciar_run(self):
        if self.run is None:
            self.run = {"linhas": [], "cab": self.cab, "partes": []}
            self.cab = {}

    def verso(self, el):
        self.iniciar_run()
        marc = el.find(class_="marcador-esquerdo")
        m = marc.get_text("", strip=True) if marc else ""
        m = m.replace(" ", "").strip()
        tv = el.find(class_="texto-verso") or el
        txt = limpar_linhas(self.inline(tv))
        linhas = [l for l in txt.split("\n") if l.strip()]
        if not linhas:
            return
        out = []
        for i, l in enumerate(linhas):
            if i == 0 and m in ("–", "=", "-", "+"):
                out.append(("– " if m in ("–", "-") else m + " ") + l)
            elif i == 0 and m:
                out.append(m + " " + l)
            else:
                out.append("  " + l)
        self.run["linhas"].extend(out)

    def quebra_estrofe(self):
        if self.run is not None and self.run["linhas"] and self.run["linhas"][-1] != "":
            self.run["linhas"].append("")

    def fechar_run(self):
        if self.run is None:
            return
        linhas = self.run["linhas"]
        while linhas and linhas[-1] == "":
            linhas.pop()
        while linhas and linhas[0] == "":
            linhas.pop(0)
        cab = self.run["cab"]
        self.run = None
        if not linhas:
            if cab:
                self.cab = cab
            return
        # separa a doxologia final
        gloria = None
        texto = "\n".join(linhas)
        mg = re.search(r"(?:^|\n)[–=]?\s*Glória ao Pai e ao Filho e ao Espírito Santo\.?\s*\*?\s*\n?\s*Como era no princípio, agora e sempre\. Amém\.?\s*$", texto)
        if mg:
            gloria = texto[mg.start():].strip()
            texto = texto[: mg.start()].rstrip()
        so_gloria = not texto.strip()
        if not so_gloria:
            titulo = cab.get("titulo") or self.ultimo_titulo_salmo
            parte = cab.get("parte")
            if cab.get("titulo"):
                self.ultimo_titulo_salmo = cab["titulo"]
            ctx = self.contexto_secao
            if not titulo and ("benedictus" in ctx.lower() or "magnificat" in ctx.lower() or "nunc" in ctx.lower() or "simeão" in ctx.lower()):
                titulo = ctx
            pasta, base = id_para_titulo(titulo, parte, ctx)
            if not titulo:
                base = "trecho-" + slug(self.fonte.split("/")[-1].rsplit(".", 1)[0])
            if self.bib is not None:
                cabecalho = {k: cab.get(k, "") for k in ("titulo", "subtitulo", "citacao")}
                if not cabecalho["titulo"] and titulo and not cab.get("parte"):
                    cabecalho["titulo"] = ""
                corpo = texto
                if cab.get("parte"):
                    corpo = "@parte %s\n%s" % (cab["parte"], corpo)
                iid = self.bib.registrar(base, cabecalho, corpo, self.fonte, pasta)
                self.blocos.append(("salmo", "%s/%s" % (pasta, iid), ""))
                self.salmos_usados.append("%s/%s" % (pasta, iid))
            else:
                self.blocos.append(("versos", "", texto))
        if gloria:
            padrao = "Glória ao Pai e ao Filho e ao Espírito Santo"
            self.blocos.append(("gloria", "", ""))

    # -- elementos
    def processar(self):
        body = self.soup.body or self.soup
        t = self.soup.find("title")
        if t:
            self.titulo_doc = norm_espacos(t.get_text()).strip()
        filhos = [c for c in body.children]
        self.processar_lista(filhos, topo=True)
        self.fechar_run()
        return self

    def proximo_relevante(self, lista, i):
        for j in range(i + 1, len(lista)):
            el = lista[j]
            if isinstance(el, NavigableString):
                if str(el).strip():
                    return el
                continue
            if isinstance(el, Tag):
                c = classes(el)
                if "espacador-estrofe" in c or "espacador-bloco" in c or el.name == "br":
                    continue
                return el
        return None

    def processar_lista(self, lista, topo=False):
        buf = []

        def flush():
            if buf:
                txt = "".join(buf)
                buf.clear()
                if txt.strip():
                    self.fechar_run()
                    self.emit("texto", "", txt)

        for i, el in enumerate(lista):
            if isinstance(el, Comment):
                continue
            if isinstance(el, NavigableString):
                if str(el).strip():
                    buf.append(self.inline(el))
                continue
            if not isinstance(el, Tag):
                continue
            c = classes(el)
            n = el.name.lower()
            if n in ("script", "style", "meta", "title", "link"):
                continue
            if "verso-container" in c:
                flush()
                self.verso(el)
                continue
            if "espacador-estrofe" in c or "espacador-bloco" in c:
                if self.run is not None:
                    self.quebra_estrofe()
                continue
            if n == "a" and ("link-externo" in c or el.get("onclick")):
                if self.inline(el).strip():
                    buf.append(self.inline(el))
                continue
            if "subtitulos" in c and "alinhamento-centro" in c:
                # marcador de parte (I, II, III) de um salmo
                flush()
                parte = norm_espacos(el.get_text()).strip()
                if self.run is not None and self.run["linhas"]:
                    self.fechar_run()
                self.cab = dict(self.cab)
                self.cab["parte"] = parte
                if not self.cab.get("titulo"):
                    pass
                continue
            if "titulo-salmo" in c:
                flush()
                t = limpar_linhas(self.inline(el)).replace("\n", " ")
                if re.match(r"^(salmo|c[âa]ntico|cf\.|sl\b)", t.strip(), re.I) or re.match(r"^" + LIVROS_CANTICOS + r"\s*\d", t.strip()):
                    self.fechar_run()
                    self.cab = {"titulo": t.strip()}
                else:
                    self.fechar_run()
                    self.contexto_secao = t
                    self.emit("secao", t.strip())
                continue
            if "subtitulo-salmo" in c:
                flush()
                t = limpar_linhas(self.inline(el)).replace("\n", " ").strip()
                prox = self.proximo_relevante(lista, i)
                pc = classes(prox) if isinstance(prox, Tag) else []
                eh_cab = isinstance(prox, Tag) and (
                    "verso-container" in pc or "citacao-salmo" in pc or prox.find(class_="citacao-salmo") is not None
                    or "subtitulos" in pc and "alinhamento-centro" in pc)
                if eh_cab:
                    self.fechar_run()
                    self.cab = dict(self.cab)
                    self.cab["subtitulo"] = t
                else:
                    self.fechar_run()
                    self.contexto_secao = t
                    self.emit("secao", t)
                continue
            if "citacao-salmo" in c or (n == "div" and not c and el.find(class_="citacao-salmo") is not None and len(el.get_text(strip=True)) < 400):
                flush()
                t = limpar_linhas(self.inline(el)).replace("\n", " ").strip()
                self.fechar_run()
                self.cab = dict(self.cab)
                self.cab["citacao"] = t
                continue
            if "antifona" in c:
                flush()
                self.fechar_run()
                ini, resto = dividir(el)
                if resto:
                    for x in resto:
                        x.extract()
                    self.antifona(el)
                    self.processar_lista(resto)
                else:
                    self.antifona(el)
                continue
            if "titulo-principal" in c:
                flush()
                self.fechar_run()
                t = limpar_linhas(self.inline(el))
                self.emit("titulo", " / ".join(x.strip() for x in t.split("\n") if x.strip()))
                continue
            if "salmodia" in c:
                flush()
                self.fechar_run()
                self.contexto_secao = "Salmodia"
                self.emit("secao", "Salmodia")
                continue
            if "subtitulos" in c or (n == "span" and "subtitulos" in c):
                flush()
                self.fechar_run()
                self.secao(el)
                continue
            if "hino-texto" in c or "hino-texto-wrapper" in c:
                flush()
                self.fechar_run()
                if el.find(class_="hino-texto") is not None and "hino-texto-wrapper" in c:
                    self.processar_lista(list(el.children))
                else:
                    self.emit("hino", "", self.inline(el))
                continue
            if "cabecalho-leitura" in c:
                flush()
                self.fechar_run()
                self.cabecalho_leitura(el)
                continue
            if "responsorio-bloco" in c:
                flush()
                self.fechar_run()
                self.emit("responsorio", "", self.inline(el))
                continue
            if "bloco-geral" in c or (n == "div" and topo):
                flush()
                if self.run is not None and self.run["linhas"]:
                    t = limpar_linhas(self.inline(el))
                    if re.match(r"^\(?R\.", t) and len(t) < 220 and t.count("\n") <= 2:
                        if self.run["linhas"][-1] != "":
                            self.run["linhas"].append("")
                        ls = t.split("\n")
                        self.run["linhas"].append(ls[0])
                        self.run["linhas"].extend("  " + x for x in ls[1:])
                        self.run["linhas"].append("")
                        continue
                self.fechar_run()
                self.bloco(el, c)
                continue
            # inline/outros: acumula
            buf.append(self.inline(el))
        flush()

    def antifona(self, el):
        lab = el.find(class_="termo-vermelho-ant")
        rot = ""
        if lab is not None:
            rot = norm_espacos(lab.get_text()).strip()
            lab.extract()
        m = re.match(r"^Ant\.?\s*(\d*)\s*(.*)$", rot)
        arg = ""
        if m:
            arg = m.group(1)
            if m.group(2):
                arg = (arg + " " + m.group(2)).strip()
        elif rot:
            arg = rot
        txt = limpar_linhas(self.inline(el))
        if "⟦lacuna:" in txt and not re.sub(r"⟦lacuna:[^⟧]*⟧", "", txt).strip():
            for cod in re.findall(r"⟦lacuna:([^⟧]*)⟧", txt):
                self.blocos.append(("lacuna", self.nome_lacuna(cod), ""))
            return
        self.emit("antifona", arg, txt)

    def secao(self, el):
        spans = el.find_all("span", recursive=False)
        ref = ""
        cit = el.find(class_="citacao-subtitulo")
        if cit is not None:
            ref = norm_espacos(cit.get_text()).strip()
            cit.extract()
        txt = limpar_linhas(self.inline(el))
        partes = [p.strip() for p in txt.split("\n") if p.strip()]
        if not ref and len(spans) >= 2:
            nome = norm_espacos(spans[0].get_text()).strip()
            ref = norm_espacos(" ".join(s.get_text() for s in spans[1:])).strip()
            titulo = nome
        else:
            titulo = " ".join(partes)
            if not ref:
                m = re.match(r"^(Responsório|Leitura breve|Leitura|Cântico evangélico[^|]*?)\s+((?:Cf\.\s*)?[0-9]?[A-ZÁÉÍÓÚ][a-zç]{0,4}\s*\d.*)$", titulo)
                if m:
                    titulo, ref = m.group(1).strip(), m.group(2).strip()
        titulo = tirar_chaves(titulo).strip()
        if not titulo and not ref:
            return
        self.contexto_secao = titulo
        self.emit("secao", titulo + (" | " + ref if ref else ""))

    def cabecalho_leitura(self, el):
        linhas = []
        tema = None
        for ch in el.children:
            if isinstance(ch, Tag) and "tema-leitura" in classes(ch):
                tema = limpar_linhas(self.inline(ch))
                continue
            if isinstance(ch, Tag) and "espacador-bloco" in classes(ch):
                continue
            linhas.append(self.inline(ch))
        self.emit("leitura", "", "".join(linhas))
        if tema:
            tema = tirar_chaves(tema).strip().strip("_").strip()
            tema = tirar_chaves(tema)
            self.emit("tema", "", tema)

    def bloco(self, el, c):
        # cabeçalho de celebração (nome do santo + grau)
        centros = el.find_all(class_="alinhamento-centro", recursive=False)
        if centros and len(el.get_text(strip=True)) < 300 and all(
                isinstance(x, NavigableString) and not str(x).strip() or isinstance(x, Tag) and "alinhamento-centro" in classes(x)
                for x in el.children):
            linhas = []
            for x in centros:
                t = limpar_linhas(self.inline(x)).replace("\n", " ")
                linhas.append(t)
            self.emit("celebracao", "", "\n".join(linhas))
            return
        # blocos com sub-blocos (hino dentro de bloco-geral, ou HTML malformado)
        if any(eh_bloco(x) for x in el.find_all(True)):
            self.processar_lista(list(el.children))
            return
        txt = self.inline(el)
        # biografia: bloco logo após cabeçalho de celebração
        if self.blocos and self.blocos[-1][0] == "celebracao" and len(txt) > 120:
            self.emit("biografia", "", txt)
            return
        self.emit("texto", "", txt)

    # -- saída
    def para_texto(self, cabecalho_extra=None):
        out = []
        if cabecalho_extra:
            for k, v in cabecalho_extra:
                out.append("@%s %s" % (k, v))
        if self.titulo_doc:
            out.append("@documento %s" % self.titulo_doc)
        out.append("")
        for tipo, arg, texto in self.blocos:
            linha = "@" + tipo + ((" " + arg) if arg else "")
            out.append(linha)
            if texto:
                out.append(texto)
            out.append("")
        return "\n".join(out).rstrip() + "\n"


def serializar_item(item, iid):
    out = []
    if item.get("titulo"):
        out.append("@titulo " + item["titulo"])
    if item.get("subtitulo"):
        out.append("@subtitulo " + item["subtitulo"])
    if item.get("citacao"):
        out.append("@citacao " + item["citacao"])
    fontes = item.get("fontes", [])
    if fontes:
        out.append("@origem " + fontes[0])
        if len(fontes) > 1:
            out.append("@usos %d" % len(fontes))
    out.append("")
    out.append(item["versos"])
    return "\n".join(out).rstrip() + "\n"
