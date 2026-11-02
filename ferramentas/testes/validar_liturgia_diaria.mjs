// Verifica, para todos os dias de um intervalo, se a Liturgia Diária encontra
// leituras e orações. Uso: node ferramentas/testes/validar_liturgia_diaria.mjs 2025 2031
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const dados = await import(path.join(RAIZ, 'js/dados.js'));
dados.definirCarregador(async (c) => { try { return fs.readFileSync(path.join(RAIZ, c), 'utf8'); } catch { return null; } });
const { CalendarioLiturgico, isoDeNumero, numeroDia } = await import(path.join(RAIZ, 'js/liturgical-calendar.js'));
const LD = await import(path.join(RAIZ, 'js/daily-liturgy.js'));
await LD.iniciar();
const cal = new CalendarioLiturgico(JSON.parse(fs.readFileSync(path.join(RAIZ, 'dados/calendario/santoral.json'), 'utf8')));
const [a0, a1] = [Number(process.argv[2] || 2025), Number(process.argv[3] || 2031)];
const semL = new Map(), semM = new Map(); let total = 0, comL = 0, comM = 0;
const add = (m, k, v) => { if (!m.has(k)) m.set(k, []); m.get(k).push(v); };
for (let n = numeroDia(a0, 1, 1); n <= numeroDia(a1, 12, 31); n++) {
  const dia = cal.dia(isoDeNumero(n));
  const r = LD.resolver(dia);
  total++;
  if (r.leituras) comL++; else add(semL, LD.chaveTemporal(dia) + ' | ' + (dia.celebracao.id || ''), dia.data + ' ' + dia.celebracao.nome);
  if (r.missal) comM++; else add(semM, (dia.celebracao.id || dia.tempo), dia.data + ' ' + dia.celebracao.nome);
}
console.log(`dias: ${total} | com leituras: ${comL} (${(100 * comL / total).toFixed(1)}%) | com orações: ${comM} (${(100 * comM / total).toFixed(1)}%)`);
console.log('\nSEM LEITURAS:');
for (const [k, v] of [...semL].sort((a, b) => b[1].length - a[1].length)) console.log(' ', k, v.length, '| ex.:', v.slice(0, 2).join(' ; '));
console.log('\nSEM ORAÇÕES:');
for (const [k, v] of [...semM].sort((a, b) => b[1].length - a[1].length).slice(0, 40)) console.log(' ', k, v.length, '| ex.:', v.slice(0, 2).join(' ; '));
