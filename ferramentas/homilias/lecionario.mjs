/**
 * Dias e Evangelhos do lecionário do site (dados/liturgia-diaria), para as
 * ferramentas das homilias (inventário e distribuição no calendário).
 * O site não depende disto.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export const DIAS = { domingo: 'Domingo', segunda: 'Segunda-feira', terca: 'Terça-feira', quarta: 'Quarta-feira', quinta: 'Quinta-feira', sexta: 'Sexta-feira', sabado: 'Sábado' };
const ESPECIAIS = {
  'natal-noite': 'Natal — Missa da noite', 'natal-aurora': 'Natal — Missa da aurora', 'natal-dia': 'Natal — Missa do dia', epifania: 'Epifania do Senhor',
  pascoa: 'Domingo da Páscoa — Missa do dia', pentecostes: 'Pentecostes', 'vigilia-pascal': 'Vigília Pascal',
};
/** Nome legível de uma chave de leituras ("TC-34-sexta-I" -> "Sexta-feira da 34ª semana do Tempo Comum, Ano I"). */
export function descreverChave(k, santoral) {
  if (ESPECIAIS[k]) return ESPECIAIS[k];
  let m;
  if ((m = k.match(/^vigilia-pascal-([ABC])$/))) return `Vigília Pascal, Ano ${m[1]}`;
  if ((m = k.match(/^(ascensaodosenhor|divinamisericordia|santissimatrindade|corpuschristi|scj|cristoreidouniverso|sagradafamilia|batismo)-([ABC])$/))) {
    const n = { ascensaodosenhor: 'Ascensão do Senhor', divinamisericordia: '2º Domingo da Páscoa', santissimatrindade: 'Santíssima Trindade', corpuschristi: 'Corpo e Sangue de Cristo', scj: 'Sagrado Coração de Jesus', cristoreidouniverso: 'Cristo Rei', sagradafamilia: 'Sagrada Família', batismo: 'Batismo do Senhor' }[m[1]];
    return `${n}, Ano ${m[2]}`;
  }
  if ((m = k.match(/^santo:(.+?)(?:-([ABC]))?$/))) {
    const s = santoral.fixas.find((x) => x.id === m[1]) || santoral.moveis[m[1]];
    return s ? `${s.nome}${s.data ? ` (${s.data.split('-').reverse().join('/')})` : ''}` : `celebração ${m[1]}`;
  }
  if ((m = k.match(/^TC-(\d+)-domingo-([ABC])$/))) return `${m[1]}º Domingo do Tempo Comum, Ano ${m[2]}`;
  if ((m = k.match(/^TC-(\d+)-(\w+)-(I|II)$/))) return `${DIAS[m[2]]} da ${m[1]}ª semana do Tempo Comum, Ano ${m[3]}`;
  if ((m = k.match(/^ADV-(\d)-domingo-([ABC])$/))) return `${m[1]}º Domingo do Advento, Ano ${m[2]}`;
  if ((m = k.match(/^ADV-(\d)-(\w+)$/))) return `${DIAS[m[2]]} da ${m[1]}ª semana do Advento`;
  if ((m = k.match(/^ADV-dez(\d\d)$/))) return `${+m[1]} de dezembro (Advento)`;
  if ((m = k.match(/^NAT-dez(\d\d)$/))) return `${+m[1]} de dezembro (oitava do Natal)`;
  if ((m = k.match(/^NAT-jan(\d\d)$/))) return `${+m[1]} de janeiro (tempo do Natal)`;
  if ((m = k.match(/^NAT-apos-epifania-(\w+)$/))) return `${DIAS[m[1]]} depois da Epifania`;
  if ((m = k.match(/^QUA-0-(\w+)$/))) return `${DIAS[m[1]]} depois das Cinzas`;
  if ((m = k.match(/^QUA-(\d)-domingo-([ABC])$/))) return `${m[1]}º Domingo da Quaresma, Ano ${m[2]}`;
  if ((m = k.match(/^QUA-(\d)-(\w+)$/))) return `${DIAS[m[2]]} da ${m[1]}ª semana da Quaresma`;
  if ((m = k.match(/^SS-(\w+)$/))) return `${DIAS[m[1]]} Santa`;
  if ((m = k.match(/^PAS-1-(\w+)$/))) return `${DIAS[m[1]]} da oitava da Páscoa`;
  if ((m = k.match(/^PAS-(\d)-domingo-([ABC])$/))) return `${m[1]}º Domingo da Páscoa, Ano ${m[2]}`;
  if ((m = k.match(/^PAS-(\d)-(\w+)$/))) return `${DIAS[m[2]]} da ${m[1]}ª semana da Páscoa`;
  return k;
}

/** Evangelhos de cada conjunto de leituras do site: [{chave, ref}] */
export function evangelhosDoLecionario(LDI) {
  const out = [];
  for (const [k, arq] of Object.entries(LDI.leituras)) {
    let t;
    try { t = fs.readFileSync(path.join(RAIZ, 'dados', 'liturgia-diaria', arq + '.txt'), 'utf8'); } catch { continue; }
    for (const m of t.matchAll(/^@secao Evangelho\s*\|\s*(.+)$/gm)) {
      const ref = m[1].trim();
      if (/^[1-3]?\s?[A-Z][a-z]{0,3}\s+\d/.test(ref)) out.push({ chave: k, ref });
    }
  }
  return out;
}

/** Evangelhos (seções "Evangelho" com referência) de um conjunto de leituras: ["Lc 21,29-33", …] */
export function evangelhosDaChave(LDI, chave) {
  const arq = LDI.leituras[chave];
  if (!arq) return [];
  const t = fs.readFileSync(path.join(RAIZ, 'dados', 'liturgia-diaria', arq + '.txt'), 'utf8');
  return [...t.matchAll(/^@secao Evangelho\s*\|\s*(.+)$/gm)].map((m) => m[1].trim());
}
