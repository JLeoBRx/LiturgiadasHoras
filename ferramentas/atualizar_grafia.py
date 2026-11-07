"""Atualiza a grafia (Acordo Ortográfico de 1990) nos textos de dados/.
Uso: python3 ferramentas/atualizar_grafia.py . [--aplicar]   (sem --aplicar: só lista)

Regras aplicadas (só acentos e trema; hífens não foram alterados):
  - ditongos abertos éi/ói em paroxítonas: Galiléia → Galileia, apóio → apoio
    (oxítonas como anéis, herói, heróis continuam com acento);
  - hiatos: dêem → deem, vôo → voo;
  - trema: tranqüilo → tranquilo;
  - acentos diferenciais: pára → para, pêlo → pelo.
Não se alteram: linhas @origem e @salmo, arquivos.json, indice.json,
"eléison" (termo grego da liturgia) e "ÓInspirai" (falta de espaço no acervo).
Rode de novo depois de reimportar o acervo, pois os importadores sobrescrevem dados/."""
import os, re, sys, collections
RAIZ = sys.argv[1]; APLICAR = '--aplicar' in sys.argv
L = r"A-Za-zÀ-ÖØ-öø-ÿ"
PALAVRA = re.compile(rf"[{L}]+")
TIRA = str.maketrans({'é': 'e', 'É': 'E', 'ó': 'o', 'Ó': 'O', 'ê': 'e', 'Ê': 'E', 'ô': 'o', 'Ô': 'O', 'ü': 'u', 'Ü': 'U', 'á': 'a', 'Á': 'A'})
DIFERENCIAIS = {'pára': 'para', 'Pára': 'Para', 'pêlo': 'pelo', 'pêlos': 'pelos', 'Pêlo': 'Pelo', 'pélo': 'pelo', 'péla': 'pela',
                'pólo': 'polo', 'pólos': 'polos', 'pêra': 'pera', 'pêras': 'peras', 'côa': 'coa', 'côas': 'coas'}

# fora do Acordo: termo grego da liturgia; "ÓInspirai" é falta de espaço no acervo
EXCECOES = {'eléison', 'Eléison', 'ELÉISON'}

def nova(w):
    if w in EXCECOES or re.match(r"^Ó[A-Z]", w): return w, None
    if w in DIFERENCIAIS: return DIFERENCIAIS[w], 'diferencial'
    lw = w.lower()
    # 1) ditongos abertos éi/ói em paroxítonas (não no fim: anéis, herói, heróis ficam)
    m = re.search(r"[éÉóÓ][iI]", w)
    if m and not re.search(r"[éÉóÓ][iI][sS]?$", w):
        i = m.start()
        return w[:i] + w[i].translate(TIRA) + w[i + 1:], 'ditongo aberto'
    # 2) hiatos êe(m) e ôo
    if re.search(r"[êÊ][eE][mM]$", w) or re.search(r"[ôÔ][oO]", w):
        return re.sub(r"[êÊ](?=[eE][mM]$)|[ôÔ](?=[oO])", lambda x: x.group().translate(TIRA), w), 'hiato'
    # 3) trema depois de g/q
    if re.search(r"[gGqQ][üÜ]", w):
        return re.sub(r"(?<=[gGqQ])[üÜ]", lambda x: x.group().translate(TIRA), w), 'trema'
    # 4) i/u tônicos depois de ditongo em paroxítonas (feiúra, baiúca)
    if re.search(r"[aeiouAEIOU][iuIU][úíÚÍ][a-z]", w) and not re.search(r"[úíÚÍ][sS]?$", w):
        return re.sub(r"(?<=[aeiouAEIOU][iuIU])[úíÚÍ]", lambda x: x.group().translate({ord('ú'): 'u', ord('í'): 'i', ord('Ú'): 'U', ord('Í'): 'I'}), w), 'i/u tônico'
    return w, None

cont = collections.Counter(); exemplos = collections.defaultdict(collections.Counter); arquivos = set()
for raiz, _, fs in os.walk(os.path.join(RAIZ, 'dados')):
    for f in fs:
        if not (f.endswith('.txt') or f.endswith('.json')) or f in ('arquivos.json', 'indice.json'): continue
        p = os.path.join(raiz, f)
        t = open(p, encoding='utf-8').read()
        linhas = t.split('\n'); mudou = False
        for k, ln in enumerate(linhas):
            if ln.startswith('@origem') or ln.startswith('@salmo') or '"oficio"' in ln or ln.lstrip().startswith('"santo:') or 'Recursos/' in ln:
                continue
            def troca(mo):
                w = mo.group(); n, cat = nova(w)
                if cat: cont[cat] += 1; exemplos[cat][f"{w} → {n}"] += 1
                return n
            novo = PALAVRA.sub(troca, ln)
            if novo != ln: linhas[k] = novo; mudou = True
        if mudou:
            arquivos.add(os.path.relpath(p, RAIZ))
            if APLICAR: open(p, 'w', encoding='utf-8').write('\n'.join(linhas))
print('total', sum(cont.values()), dict(cont), 'arquivos', len(arquivos))
for cat, c in exemplos.items():
    print('\n##', cat, sum(c.values()))
    print('; '.join(f"{k} ({v})" for k, v in sorted(c.items(), key=lambda x: -x[1])))
