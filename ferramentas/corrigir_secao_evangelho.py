"""Dá seção própria ao Evangelho nos arquivos de leituras em que a importação o
deixou dentro da seção "Aclamação ao Evangelho".

Defeito corrigido (31 arquivos de dados/liturgia-diaria/leituras, encontrados na
Etapa 2 das homilias): o Evangelho vinha logo depois da aclamação, sem
"@secao Evangelho | referência", às vezes precedido de uma linha solta
"EVANGELHO (mais longo)", "EVANGELHO (mais breve)" ou "EVANGELHO (apropriado)",
e a linha "Proclamação do Evangelho…" ficava num bloco @texto. No site, o
Evangelho aparecia com o título e a referência da aclamação.

A correção não muda nenhuma palavra das leituras:
  - a linha solta vira o cabeçalho "@secao Evangelho | <referência>"
    ("@secao Evangelho (forma breve) | …" para a forma breve); sem linha solta,
    o cabeçalho é inserido antes do bloco do Evangelho;
  - a linha "Proclamação…" passa a um bloco @leitura e o texto segue em @texto,
    como nos demais arquivos;
  - a referência é a que o próprio arquivo dá: o livro do título ("segundo
    Mateus") e os versículos entre chaves ("{25,14-30}").

É idempotente: um arquivo já corrigido não muda.
Uso:  python3 ferramentas/corrigir_secao_evangelho.py [--verificar]
"""
import json
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
LIVROS = {"Mateus": "Mt", "Marcos": "Mc", "Lucas": "Lc", "João": "Jo"}
# a linha vem com ou sem negrito e com ou sem chaves na referência
PROCLAMACAO = re.compile(r"^(?:\*\*)?Proclamação do Evangelho de Jesus Cristo segundo (Mateus|Marcos|Lucas|João)(?:\*\*)?\s*\{?([0-9][^}]*?)\}?\s*$")
MARCADOR = re.compile(r"^EVANGELHO \((mais longo|mais breve|apropriado)\)\s*$")


def corrigir(linhas):
    """Devolve (novas_linhas, n_correcoes)."""
    n = 0
    i = 0
    while i < len(linhas):
        m = PROCLAMACAO.match(linhas[i])
        if not m:
            i += 1
            continue
        s = max(k for k in range(i) if linhas[k].startswith("@secao"))
        if linhas[s].split("|")[0].strip().startswith("@secao Evangelho"):
            i += 1
            continue
        ref = f"{LIVROS[m.group(1)]} {m.group(2).strip()}"
        # bloco @texto que contém a proclamação
        t = max(k for k in range(s, i) if linhas[k].startswith("@"))
        if linhas[t] != "@texto":
            raise ValueError(f"linha {i + 1}: proclamação fora de um bloco @texto")
        # início do Evangelho: a linha solta, ou o @tema logo antes do bloco
        inicio = None
        for k in range(t - 1, s, -1):
            if MARCADOR.match(linhas[k]):
                inicio = k
                break
            if linhas[k].startswith("@") and linhas[k] not in ("@tema",):
                break
        nome = "Evangelho"
        if inicio is not None:
            if MARCADOR.match(linhas[inicio]).group(1) == "mais breve":
                nome = "Evangelho (forma breve)"
            cabecalho = [f"@secao {nome} | {ref}"]
            linhas[inicio:inicio + 1] = cabecalho
        else:
            tema = t - 1
            while tema > s and not linhas[tema].startswith("@"):
                tema -= 1
            inicio = tema if linhas[tema] == "@tema" else t
            linhas[inicio:inicio] = [f"@secao {nome} | {ref}", ""]
            i += 2
            t += 2
        # proclamação em @leitura; o resto em @texto
        linhas[t] = "@leitura"
        if linhas[i + 1].strip() == "":
            linhas[i + 2:i + 2] = ["@texto"]  # "Proclamação…", linha em branco, "@texto", o texto
        else:
            linhas[i + 1:i + 1] = ["", "@texto"]
        n += 1
        i += 1
    return linhas, n


def main():
    verificar = "--verificar" in sys.argv
    indice = json.loads((RAIZ / "dados" / "liturgia-diaria" / "indice.json").read_text(encoding="utf-8"))
    total = 0
    for arq in sorted(set(indice["leituras"].values())):
        p = RAIZ / "dados" / "liturgia-diaria" / (arq + ".txt")
        if not p.exists():
            continue
        texto = p.read_text(encoding="utf-8")
        final = texto.endswith("\n")
        linhas, n = corrigir(texto.split("\n") if not final else texto[:-1].split("\n"))
        if n:
            total += n
            print(f"{arq}: {n} Evangelho(s) com seção própria")
            if not verificar:
                p.write_text("\n".join(linhas) + ("\n" if final else ""), encoding="utf-8")
    print(f"total: {total}" + (" (só verificação)" if verificar else ""))
    return 1 if (verificar and total) else 0


if __name__ == "__main__":
    sys.exit(main())
