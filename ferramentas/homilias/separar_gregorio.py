#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Separa a tradução portuguesa RECEBIDA das 40 Homiliae in Evangelia de São
Gregório Magno em um arquivo por homilia, SEM ALTERAR NENHUMA PALAVRA.

Origem (nunca é modificada):
  Homilia dos Santos/Homilia de Santos/São Gregório Magno, Papa (540–604)/
  Texto Traduzido, as 40 homilias.txt

Saída: dados/homilias/gregorio-magno/recebida/homilia-NN.txt
  - cada parágrafo da origem vira um bloco, na mesma ordem e com o mesmo texto;
  - só se retiram as linhas "Trecho N" e "PT", que são marcas do processo de
    tradução e não fazem parte do texto (ficam registradas em @trechos);
  - o papel de cada parágrafo (cabeçalho, rubrica, título da leitura, leitura,
    parágrafo da homilia) é só uma etiqueta: o texto não muda.

A camada "revisada" NÃO é tocada por este script: ela é gerada por
aplicar_alteracoes.py a partir desta camada e do registro editorial.
O teste ferramentas/testes/homilias.test.mjs confere, palavra por palavra,
que estes arquivos reproduzem a origem.
"""
import os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ORIGEM_REL = "Homilia dos Santos/Homilia de Santos/São Gregório Magno, Papa (540–604)/Texto Traduzido, as 40 homilias.txt"
DESTINO = os.path.join(RAIZ, "dados", "homilias", "gregorio-magno", "recebida")
ROM = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX',
       'XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV',
       'XXXVI','XXXVII','XXXVIII','XXXIX','XL']
MARCA = re.compile(r'^(Trecho \d+|PT)\s*$')


def paragrafos_com_marcas(txt):
    """[(texto, trecho_corrente)] na ordem da origem, sem as linhas de marca."""
    out, trecho = [], None
    for linha in txt.split('\n'):
        m = MARCA.match(linha)
        if m:
            if linha.startswith('Trecho'): trecho = linha.strip()
            continue
        if linha.strip():
            out.append([linha.rstrip('\n'), trecho])
    return out


def separar(txt):
    """Divide em homilias. Um cabeçalho pode estar no meio de uma linha
    ("... Amém. HOMILIA IX. Proferida..."): a linha é cortada ali, sem perda."""
    pars = []
    for texto, trecho in paragrafos_com_marcas(txt):
        # "LIVRO PRIMEIRO." / "LIVRO SEGUNDO." ficam junto do cabeçalho que vem logo depois
        partes = re.split(r'(?=LIVRO (?:PRIMEIRO|SEGUNDO)\. HOMILIA )|(?<!LIVRO PRIMEIRO\. )(?<!LIVRO SEGUNDO\. )(?=HOMILIA (?:PRIMEIRA|[IVXL]+)\.)', texto)
        partes = [p for p in partes if p != '']
        # o que vem antes do cabeçalho continua no mesmo parágrafo de origem
        for k, p in enumerate(partes):
            pars.append({'texto': p, 'trecho': trecho, 'continua': k > 0})
    homilias, atual = {}, None
    for p in pars:
        m = re.match(r'(?:LIVRO (?:PRIMEIRO|SEGUNDO)\. )?HOMILIA (PRIMEIRA|[IVXL]+)\.', p['texto'])
        # o texto pode começar com "LIVRO PRIMEIRO. HOMILIA PRIMEIRA." ou "LIVRO SEGUNDO. HOMILIA XXI."
        m2 = re.search(r'HOMILIA (PRIMEIRA|[IVXL]+)\.', p['texto'][:40])
        if m2 and (m or p['texto'].startswith('HOMILIA') or p['texto'].startswith('LIVRO')):
            n = 1 if m2.group(1) == 'PRIMEIRA' else ROM.index(m2.group(1)) + 1
            atual = n
            homilias[n] = []
        elif atual == 1 and re.match(r'Leitura do Santo Evangelho segundo Lucas 18', p['texto']):
            # a Homilia II não tem cabeçalho nem rubrica na origem (ver registro editorial)
            atual = 2
            homilias[2] = []
        if atual is None:
            homilias.setdefault(0, []).append(p)   # prefácio (carta a Secundino)
        else:
            homilias[atual].append(p)
    return homilias


def papel(i, p, lista):
    t = p['texto']
    if re.match(r'(LIVRO (PRIMEIRO|SEGUNDO)\. )?HOMILIA ', t): return 'cabecalho'
    if re.match(r'(Proferida|Pronunciada|Dirigida)\b', t) and i <= 2: return 'rubrica'
    if re.match(r'LEITURA|Leitura do', t) and i <= 3: return 'leitura-titulo'
    if i > 0 and lista[i - 1]['_papel'] == 'leitura-titulo': return 'leitura'
    return 'paragrafo'


def main():
    txt = open(os.path.join(RAIZ, ORIGEM_REL), encoding='utf-8').read()
    homilias = separar(txt)
    faltam = [n for n in range(0, 41) if n not in homilias]
    if faltam:
        sys.exit(f'homilias não encontradas: {faltam}')
    os.makedirs(DESTINO, exist_ok=True)
    for n, lista in sorted(homilias.items()):
        for i, p in enumerate(lista):
            p['_papel'] = papel(i, p, lista)
        trechos = sorted({p['trecho'] for p in lista if p['trecho']}, key=lambda s: int(s.split()[1]))
        nome = 'prefacio' if n == 0 else f'homilia-{n:02d}'
        linhas = [f'@origem {ORIGEM_REL}', '@camada tradução recebida — cópia exata da origem; não editar à mão',
                  f'@trechos {", ".join(trechos) if trechos else "(nenhuma marca de trecho)"}', '']
        for p in lista:
            linhas.append(f"@{p['_papel']}" + (' continua' if p['continua'] else ''))
            linhas.append(p['texto'])
            linhas.append('')
        with open(os.path.join(DESTINO, nome + '.txt'), 'w', encoding='utf-8') as fh:
            fh.write('\n'.join(linhas))
    print('arquivos gerados:', len(homilias), '(prefácio + 40 homilias)')


if __name__ == '__main__':
    main()
