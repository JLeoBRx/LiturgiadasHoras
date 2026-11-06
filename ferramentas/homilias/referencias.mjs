/**
 * Leitura de referências bíblicas no formato usado pelo lecionário do site
 * ("Lc 2,1-14", "Jo 1,6-8.19-28", "Lc 21,25-28.34-36", "Lc 7,36–8,3",
 * "Jo 20,1-2.11-18", "Mt 4,12-23 ou 4,12-17") e comparação de versículos.
 * Usado pelos testes e pelo gerador do inventário; o site não depende disto.
 *
 * versiculos("Lc 2,1-14") -> Set { "Lc 2:1", …, "Lc 2:14" }
 * Letras de meio versículo (12a, 3b) contam como o versículo inteiro.
 * Num trecho que atravessa capítulos ("7,36–8,3"), o fim do primeiro
 * capítulo é aproximado (até o versículo 80), o que basta para comparar.
 */
const FIM_CAP = 80;

export function versiculos(ref) {
  const out = new Set();
  if (!ref) return out;
  const alternativas = String(ref).split(/\s+ou\s+/i);
  let livro = null;
  for (const alt of alternativas) {
    let s = alt.trim().replace(/[–—]/g, '-').replace(/\s+/g, ' ');
    const m = s.match(/^((?:[1-3]\s?)?[A-ZÁÉÍÓÚ][a-záéíóúç]{0,3})\s+(.*)$/);
    if (m) { livro = m[1].replace(/\s/g, ''); s = m[2]; }
    if (!livro) continue;
    let cap = null;
    // partes separadas por ";" (mudança de capítulo) e "." (salto de versículos)
    for (const parte of s.split(/;\s*/)) {
      let p = parte.trim();
      const mc = p.match(/^(\d+),(.*)$/);
      if (mc) { cap = +mc[1]; p = mc[2]; }
      if (cap == null) continue;
      for (const seg of p.split('.')) {
        const x = seg.trim().replace(/[a-z]/g, '');
        if (!x) continue;
        const cruz = x.match(/^(\d+)-(\d+),(\d+)$/);           // 36-8,3
        if (cruz) {
          for (let v = +cruz[1]; v <= FIM_CAP; v++) out.add(`${livro} ${cap}:${v}`);
          cap = +cruz[2];
          for (let v = 1; v <= +cruz[3]; v++) out.add(`${livro} ${cap}:${v}`);
          continue;
        }
        const r = x.match(/^(\d+)(?:-(\d+))?$/);
        if (!r) continue;
        const a = +r[1], b = r[2] ? +r[2] : a;
        for (let v = a; v <= b; v++) out.add(`${livro} ${cap}:${v}`);
      }
    }
  }
  return out;
}

export const intersecao = (a, b) => new Set([...a].filter((x) => b.has(x)));
export const contido = (a, b) => [...a].every((x) => b.has(x));
