// Valida, para todos os dias de um intervalo, se cada hora da Liturgia das
// Horas é montada com arquivos existentes e uma estrutura coerente.
// Uso: node ferramentas/testes/validar_horas.mjs 2025 2031
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const dados = await import(path.join(RAIZ, 'js/dados.js'));
dados.definirCarregador(async (c) => { try { return fs.readFileSync(path.join(RAIZ, c), 'utf8'); } catch { return null; } });
const { CalendarioLiturgico, isoDeNumero, numeroDia } = await import(path.join(RAIZ, 'js/liturgical-calendar.js'));
const LH = await import(path.join(RAIZ, 'js/liturgy-hours.js'));
await LH.iniciar();
const santoral = JSON.parse(fs.readFileSync(path.join(RAIZ, 'dados/calendario/santoral.json'), 'utf8'));
const cal = new CalendarioLiturgico(santoral);
const [a0, a1] = [Number(process.argv[2] || 2025), Number(process.argv[3] || 2031)];
const montar = process.argv.includes('--montar');
const falhas = new Map(); const avisos = new Map();
let total = 0;
const add = (m, k, v) => { if (!m.has(k)) m.set(k, []); m.get(k).push(v); };
for (let n = numeroDia(a0, 1, 1); n <= numeroDia(a1, 12, 31); n++) {
  const iso = isoDeNumero(n);
  const dia = cal.dia(iso);
  const escolhas = [null, ...dia.opcoes.map((o) => o.id)];
  for (const op of escolhas) {
    for (const h of LH.HORAS) {
      total++;
      const r = LH.resolverHora(cal, dia, h.id, op);
      const chave = `${dia.tempo}/${h.id}/${op ? 'opcao' : r.celebracao?.tipo}`;
      if (!r.partes || !r.partes.length) { add(falhas, chave, `${iso} ${r.celebracao?.nome}`); continue; }
      if (montar) {
        const o = await LH.montarOficio(r, dia);
        const tipos = o.blocos.map((b) => b.tipo);
        if (h.id !== 'invitatorio' && !tipos.includes('oracao') && !(h.id === 'leituras' && tipos.includes('leitura')) && h.id !== 'completas')
          add(avisos, `${h.id}: sem oração`, `${iso} ${r.partes.join(' + ')}`);
        if (h.id === 'leituras' && !o.blocos.some((b) => b.tipo === 'secao' && /leitura/i.test(b.arg)))
          add(avisos, `leituras: sem leituras`, `${iso} ${r.partes.join(' + ')}`);
        if (['laudes', 'vesperas', 'terca', 'sexta', 'nona', 'leituras', 'completas'].includes(h.id) && !tipos.includes('salmo'))
          add(avisos, `${h.id}: sem salmodia`, `${iso} ${r.partes.join(' + ')}`);
        const iSal = o.blocos.findIndex((b) => b.tipo === 'secao' && /^Salmodia/i.test(b.arg));
        const nIntro = o.blocos.slice(0, iSal < 0 ? o.blocos.length : iSal).filter((b) => b.tipo === 'secao' && /^Hino$/i.test(b.arg)).length;
        if (nIntro > 1) add(avisos, `${h.id}: hino repetido`, `${iso} ${r.partes.join(' + ')}`);
        for (const l of o.lacunas) add(avisos, `lacuna ${l.arg || l.codigo}`, `${iso} ${h.id}`);
      }
    }
  }
}
console.log('combinações verificadas:', total);
console.log('\nFALHAS (hora sem texto):');
for (const [k, v] of [...falhas].sort((a, b) => b[1].length - a[1].length)) console.log(' ', k, v.length, '| ex.:', v.slice(0, 4).join(' ; '));
if (montar) {
  console.log('\nAVISOS:');
  for (const [k, v] of [...avisos].sort((a, b) => b[1].length - a[1].length)) console.log(' ', k, v.length, '| ex.:', v.slice(0, 3).join(' ; '));
}
