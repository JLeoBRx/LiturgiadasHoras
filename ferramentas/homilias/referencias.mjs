/**
 * Leitura de referências bíblicas no formato usado pelo lecionário do site
 * ("Lc 2,1-14", "Jo 1,6-8.19-28", "Lc 21,25-28.34-36", "Lc 7,36–8,3",
 * "Jo 20,1-2.11-18", "Mt 4,12-23 ou 4,12-17") e comparação de versículos.
 * Usado pelos testes e pelo gerador do inventário; o site não depende disto.
 *
 * versiculos("Lc 2,1-14") -> Set { "Lc 2:1", …, "Lc 2:14" }
 * Letras de meio versículo (12a, 3b) contam como o versículo inteiro.
 * Num trecho que atravessa capítulos ("7,36–8,3"), o fim do primeiro
 * capítulo é o número real de versículos nos quatro Evangelhos; nos demais
 * livros é aproximado (até o versículo 80), o que basta para comparar.
 */
const FIM_CAP = 80;
const VERSICULOS_POR_CAPITULO = {
  Mt: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],
  Mc: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
  Lc: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53],
  Jo: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],
};
const fimDoCapitulo = (livro, cap) => VERSICULOS_POR_CAPITULO[livro]?.[cap - 1] ?? FIM_CAP;

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
          for (let v = +cruz[1]; v <= fimDoCapitulo(livro, cap); v++) out.add(`${livro} ${cap}:${v}`);
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
