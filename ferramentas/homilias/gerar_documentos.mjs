/**
 * Gera, a partir dos dados (nunca à mão):
 *   dados/homilias/inventario.json   inventário das homilias (para máquinas)
 *   dados/homilias/INVENTARIO.md     inventário legível
 *   dados/homilias/AUDITORIA.md      auditoria das traduções (todas as decisões)
 *
 * Uso:  node ferramentas/homilias/gerar_documentos.mjs
 * O teste ferramentas/testes/homilias.test.mjs confere que estes arquivos
 * estão em dia com os dados (se não estiverem, rode este script).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { versiculos, intersecao } from './referencias.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const ler = (p) => JSON.parse(fs.readFileSync(path.join(RAIZ, p), 'utf8'));
const ROM = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
  'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL'];
const md = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n+/g, ' ');

// ---------------------------------------------------------------- dias do lecionário
const DIAS = { domingo: 'Domingo', segunda: 'Segunda-feira', terca: 'Terça-feira', quarta: 'Quarta-feira', quinta: 'Quinta-feira', sexta: 'Sexta-feira', sabado: 'Sábado' };
const ESPECIAIS = {
  'natal-noite': 'Natal — Missa da noite', 'natal-aurora': 'Natal — Missa da aurora', 'natal-dia': 'Natal — Missa do dia', epifania: 'Epifania do Senhor',
  pascoa: 'Domingo da Páscoa — Missa do dia', pentecostes: 'Pentecostes', 'vigilia-pascal': 'Vigília Pascal',
};
function descreverChave(k, santoral) {
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
function evangelhosDoLecionario(LDI) {
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

/** Correspondências bíblicas candidatas de uma perícope (ainda não verificadas). */
function candidatas(pericope, evangelhos, santoral) {
  const P = versiculos(pericope);
  const vistos = new Set(), out = [];
  for (const { chave, ref } of evangelhos) {
    const R = versiculos(ref);
    const O = intersecao(P, R);
    if (O.size < 3 || vistos.has(chave + ref)) continue;
    const doDia = O.size / R.size, daHomilia = O.size / P.size;
    if (doDia < 0.5 && daHomilia < 0.5) continue;
    vistos.add(chave + ref);
    out.push({ chave, dia: descreverChave(chave, santoral), referencia_do_dia: ref, versiculos_em_comum: O.size, cobre_o_evangelho_do_dia: Math.round(doDia * 100), cobre_a_homilia: Math.round(daHomilia * 100) });
  }
  return out.sort((a, b) => (b.cobre_o_evangelho_do_dia + b.cobre_a_homilia) - (a.cobre_o_evangelho_do_dia + a.cobre_a_homilia) || a.dia.localeCompare(b.dia));
}

// ---------------------------------------------------------------- Vianney e Antônio
// Correspondência litúrgica PROVÁVEL pelo título (não verificada): ocasião que existe no calendário atual.
const VIANNEY_OCASIOES = [
  [/JOUR DE NOËL/, 'Natal do Senhor (25/12)'], [/^EPIPHANIE/, 'Epifania do Senhor'], [/MERCREDI DES CENDRES/, 'Quarta-feira de Cinzas'],
  [/PREMIER DIMANCHE DE CARÊME/, '1º Domingo da Quaresma'], [/QUASIMODO/, '2º Domingo da Páscoa (oitava)'],
  [/DIMANCHE DE L'AVENT/, 'Domingo do Advento (numeração tridentina; o Evangelho difere do atual)'],
  [/SAINT JEAN-BAPTISTE/, 'Natividade de São João Batista (24/6)'], [/ASSOMPTION/, 'Assunção de Nossa Senhora'],
  [/NATIVITÉ DE LA STE VIERGE/, 'Natividade de Nossa Senhora (8/9)'], [/SAINT ROSAIRE/, 'Nossa Senhora do Rosário (7/10)'],
  [/ANGES GARDIENS/, 'Santos Anjos da Guarda (2/10)'], [/TOUS LES SAINTS/, 'Todos os Santos'], [/MORTS/, 'Fiéis Defuntos (2/11)'],
  [/DÉDICACE/, 'Dedicação de uma igreja (data local)'],
];
const ANTONIO_OCASIOES = [
  [/Quarta-feira de Cinzas/, 'Quarta-feira de Cinzas'], [/^I domingo da Quaresma/, '1º Domingo da Quaresma'], [/^II domingo da Quaresma/, '2º Domingo da Quaresma'],
  [/Domingo de Ramos/, 'Domingo de Ramos'], [/Ceia do Senhor/, 'Quinta-feira Santa — Ceia do Senhor'], [/Páscoa do Senhor|ressurreição do Senhor/, 'Domingo da Páscoa'],
  [/Oitava da Páscoa/, '2º Domingo da Páscoa (oitava)'], [/Ascensão/, 'Ascensão do Senhor'], [/Pentecostes \(|Festa de Pentecostes/, 'Pentecostes'],
  [/Natal do Senhor/, 'Natal do Senhor'], [/Santo Estêvão/, 'Santo Estêvão (26/12)'], [/São João Evangelista/, 'São João Evangelista (27/12)'],
  [/Santos Inocentes/, 'Santos Inocentes (28/12)'], [/Circuncisão/, 'Santa Maria, Mãe de Deus (1/1; o Evangelho atual inclui a circuncisão, Lc 2,21)'],
  [/Epifania do Senhor/, 'Epifania do Senhor'], [/Natividade da Bem-aventurada/, 'Natividade de Nossa Senhora (8/9)'], [/Anunciação/, 'Anunciação do Senhor (25/3)'],
  [/Purificação/, 'Apresentação do Senhor (2/2)'], [/Assunção/, 'Assunção de Nossa Senhora'], [/Conversão de São Paulo/, 'Conversão de São Paulo (25/1)'],
  [/Cátedra de São Pedro/, 'Cátedra de São Pedro (22/2)'], [/Filipe e Tiago/, 'Santos Filipe e Tiago (3/5)'], [/Natividade de São João Batista/, 'Natividade de São João Batista (24/6)'],
  [/Pedro e Paulo/, 'São Pedro e São Paulo'],
];
const ocasiaoAtual = (tabela, titulo) => (tabela.find(([re]) => re.test(titulo || '')) || [])[1] || null;

// ---------------------------------------------------------------- geração
export function gerar() {
  const IND = ler('dados/homilias/indice.json');
  const REG = ler('dados/homilias/gregorio-magno/registro-editorial.json');
  const CAT = ler('dados/homilias/gregorio-magno/catalogo.json');
  const VIA = ler('dados/homilias/vianney/sumario.json');
  const ANT = ler('dados/homilias/antonio/sumario.json');
  const LDI = ler('dados/liturgia-diaria/indice.json');
  const SAN = ler('dados/calendario/santoral.json');
  const evangelhos = evangelhosDoLecionario(LDI);
  const publicadas = new Map(IND.homilias.filter((h) => h.estado === 'publicada').map((h) => [h.numero, h]));
  const colacao = new Set(REG.colacao.map((c) => c.homilia));
  const rubrica = (n) => {
    const t = fs.readFileSync(path.join(RAIZ, 'dados', 'homilias', 'gregorio-magno', 'revisada', `homilia-${String(n).padStart(2, '0')}.txt`), 'utf8');
    const b = t.split('\n\n').map((p) => p.split('\n')).filter((l) => /^@(cabecalho|rubrica)/.test(l[0])).map((l) => l.slice(1).join(' '));
    return b.join(' ').replace(/^(LIVRO (PRIMEIRO|SEGUNDO)\. )?HOMILIA (PRIMEIRA|[IVXL]+)\.\s*/, '').trim() || '(sem rubrica)';
  };
  const gregorio = CAT.homilias.map((c) => {
    const h = publicadas.get(c.numero);
    const cand = candidatas(c.pericope, evangelhos, SAN);
    return {
      numero: c.numero, livro: c.livro, titulo: `Homilia ${ROM[c.numero]}`, titulo_de_trabalho: c.titulo_de_trabalho,
      pericope: c.pericope, pericope_hurst: c.pericope_hurst, ccsl_paginas: c.ccsl_paginas,
      ocasiao_na_traducao: rubrica(c.numero),
      estado: h ? 'publicada' : (colacao.has(c.numero) ? 'conferida, não publicada' : 'aguardando colação com o latim'),
      correspondencias_publicadas: h ? h.correspondencias.map((x) => ({ tipo: x.tipo, descricao: x.descricao, ...(x.leituras ? { leituras: x.leituras, dia: descreverChave(x.leituras, SAN) } : {}), ...(x.celebracao ? { celebracao: x.celebracao } : {}), ...(x.chaves ? { chaves: x.chaves } : {}) })) : [],
      correspondencias_biblicas_candidatas: h ? [] : cand,
      estado_final: (REG.colacao.find((x) => x.homilia === c.numero) || {}).estado_final || null,
      observacao: c.numero === 2 ? 'Na tradução recebida faltam o cabeçalho e a rubrica desta homilia; foram traduzidos de Migne na camada revisada (G02-01).' : '',
    };
  });
  const vianney = VIA.sermoes.map((s) => ({ tomo: s.tomo, pagina: s.pagina, ocasiao: s.ocasiao, titulo: s.titulo, ocasiao_atual_provavel: ocasiaoAtual(VIANNEY_OCASIOES, s.ocasiao), estado: 'não publicado' }));
  const antonio = ANT.sermoes.map((s) => ({ colecao: s.colecao, titulo: s.titulo, ocasiao_atual_provavel: ocasiaoAtual(ANTONIO_OCASIOES, s.titulo), estado: 'não publicado' }));
  const inventario = {
    _leia: ['Gerado por ferramentas/homilias/gerar_documentos.mjs — não editar à mão.', 'As correspondências "candidatas" e "prováveis" NÃO estão no site: foram calculadas para orientar o trabalho e precisam de verificação antes de qualquer publicação.'],
    gregorio_magno: gregorio, joao_maria_vianney: vianney, antonio_de_padua: antonio,
  };
  return { inventario, inventarioMd: inventarioMd(inventario, REG), auditoriaMd: auditoriaMd(REG, IND, gregorio) };
}

// ---------------------------------------------------------------- INVENTARIO.md
function inventarioMd(inv, REG) {
  const g = inv.gregorio_magno;
  const pub = g.filter((h) => h.estado === 'publicada');
  const L = [];
  L.push('# Inventário das homilias dos santos', '', '> Gerado a partir dos dados por `ferramentas/homilias/gerar_documentos.mjs`. Não edite à mão: altere os dados e rode o script.', '');
  L.push('## Resumo', '', '| Santo | Material recebido | Textos | No site | Motivo principal |', '|---|---|---|---|---|');
  L.push(`| São Gregório Magno | tradução portuguesa (40 homilias), texto latino de Migne (PL 76), texto latino crítico (CCSL 141), planilha de inventário | 40 homilias | ${pub.length} | as 40 estão colacionadas com o latim (Etapa 1); as demais aguardam a distribuição no calendário (Etapa 2, não iniciada) |`);
  L.push(`| São João Maria Vianney | texto francês dos 4 tomos (transcrição em Word) | ${inv.joao_maria_vianney.length} sermões | 0 | não há tradução portuguesa; edição de origem não identificada |`);
  L.push(`| Santo Antônio de Pádua | tradução portuguesa (Vozes, 2019) e tradução inglesa (Spilsbury) | ${inv.antonio_de_padua.length} sermões | 0 | direitos da tradução portuguesa; sem texto latino para conferência |`, '');
  L.push('## Critérios', '');
  L.push('- **Correspondência litúrgica:** a homilia foi pregada para a mesma celebração que o calendário atual mantém (Natal, Epifania, Páscoa, Ascensão, Pentecostes, festa de um santo, 1º domingo da Quaresma). A ocasião é tirada da rubrica da edição crítica ou do próprio texto, nunca só do título de trabalho.');
  L.push('- **Correspondência bíblica:** a passagem comentada é lida naquele dia no lecionário do site. Os versículos em comum são conferidos automaticamente pelos testes.');
  L.push('- **Correspondência temática:** nunca é usada para pôr uma homilia num dia. Fica registrada aqui para avaliação futura.');
  L.push('- Domingos do calendário antigo (Septuagésima, “domingo depois de Pentecostes” etc.) **não** são convertidos automaticamente em domingos atuais: a numeração e os Evangelhos mudaram.');
  L.push('- As candidatas abaixo foram calculadas sobre o índice de leituras do site, que foi reconstruído (ver `dados/liturgia-diaria/indice.json`). Antes de publicar, confira o dia no Lecionário.', '');

  L.push('## São Gregório Magno — Homiliae in Evangelia', '');
  const lista = (f) => g.filter(f).map((h) => ROM[h.numero]).join(', ') || 'nenhuma';
  L.push('### Situação das 40 homilias', '', '| Camada | Homilias | Quantidade |', '|---|---|---|');
  L.push(`| Recebida: cópia exata da tradução, \`recebida/\` | prefácio e I a XL | ${g.length} + prefácio |`);
  L.push(`| Revisada: conferida com Migne (PL 76) e a CCSL 141, \`revisada/\` | ${lista((h) => REG.colacao.some((c) => c.homilia === h.numero))} | ${REG.colacao.length} |`);
  L.push(`| Publicada na Liturgia Diária | ${lista((h) => h.estado === 'publicada')} | ${pub.length} |`);
  L.push(`| Aguardando colação com o latim | ${lista((h) => !REG.colacao.some((c) => c.homilia === h.numero))} | ${g.length - REG.colacao.length} |`);
  const propria = fs.readdirSync(path.join(RAIZ, 'dados', 'homilias', 'gregorio-magno', 'traducao-propria')).map((f) => f.match(/^homilia-(\d\d)\.txt$/)).filter(Boolean).map((m) => +m[1]);
  L.push(`| Tradução própria do latim, \`traducao-propria/\` (não publicada) | ${lista((h) => propria.includes(h.numero))} (piloto) | ${propria.length} |`, '');
  L.push('### Estado final de cada homilia (Etapa 1)', '', 'Estados: **finalizada**: texto colacionado, correções aplicadas, nenhuma dúvida em aberto (pode haver sugestões de redação para sua decisão); **finalizada com ressalvas**: texto utilizável, com dúvida em aberto ou trecho que merece atenção (ver ressalvas).', '');
  L.push('| Nº | Estado final | Correções aplicadas | Sugestões | Dúvidas | Variantes e problemas da fonte | Ressalvas |', '|---|---|---|---|---|---|---|');
  for (const c of [...REG.colacao].sort((a, b) => a.homilia - b.homilia)) {
    const rs = REG.registros.filter((r) => r.homilia === c.homilia);
    const ids = (f) => rs.filter(f).map((r) => r.id).join(', ') || '—';
    L.push(`| ${ROM[c.homilia]} | ${c.estado_final === 'finalizada-com-ressalvas' ? 'finalizada com ressalvas' : c.estado_final} | ${rs.filter((r) => r.estado === 'aplicada').length} | ${ids((r) => r.tipo === 'sugestao')} | ${ids((r) => r.tipo === 'duvida')} | ${rs.filter((r) => r.tipo === 'variante' || r.tipo === 'problema-fonte').length} | ${md(c.ressalvas.join(' ')) || '—'} |`);
  }
  L.push('');
  L.push(`Procedência da tradução recebida: ${REG.procedencia.fonte_de_obtencao_da_traducao}; fonte textual declarada: ${REG.procedencia.fonte_textual_declarada}. Tradutor: ${REG.procedencia.tradutor}`, '');
  L.push('### Homilias no site', '', '| Nº | Passagem | Ocasião (rubrica da tradução revisada) | Dias em que aparece |', '|---|---|---|---|');
  for (const h of pub) {
    L.push(`| ${h.titulo} | ${h.pericope} | ${md(h.ocasiao_na_traducao)} | ${h.correspondencias_publicadas.map((c) => `**${c.tipo === 'liturgica' ? 'litúrgica' : 'bíblica'}:** ${md(c.dia || c.descricao)}`).join('<br>')} |`);
  }
  L.push('', '### Homilias não inseridas (colacionadas; aguardando a Etapa 2)', '');
  L.push('Nenhuma destas foi publicada. A tradução de todas já foi colacionada com o latim (Etapa 1); a escolha dos dias em que entram no calendário é a Etapa 2, que ainda não começou. As correspondências bíblicas candidatas abaixo são só orientação para essa etapa (porcentagens: quanto do Evangelho do dia a homilia comenta / quanto da passagem da homilia é lido no dia).', '');
  L.push('| Nº | Passagem | Ocasião histórica (rubrica da tradução revisada) | Candidatas no calendário atual | Observação |', '|---|---|---|---|---|');
  for (const h of g.filter((x) => x.estado !== 'publicada')) {
    const c = h.correspondencias_biblicas_candidatas.slice(0, 6).map((x) => `${md(x.dia)} — ${x.referencia_do_dia} (${x.cobre_o_evangelho_do_dia}% / ${x.cobre_a_homilia}%)`).join('<br>') || '— nenhuma no lecionário do site';
    L.push(`| ${h.titulo} | ${h.pericope}${h.pericope_hurst !== h.pericope ? ` (Hurst: ${h.pericope_hurst})` : ''} | ${md(h.ocasiao_na_traducao)} | ${c} | ${md(h.observacao)} |`);
  }
  L.push('', '## São João Maria Vianney — Sermons', '');
  L.push('Nenhum sermão foi inserido. Motivos: (1) não foi enviada tradução portuguesa, e traduzir 75 sermões seria produzir um texto novo, que precisa da sua decisão e revisão; (2) os PDFs são transcrições em Word, sem folha de rosto, editor ou data, de modo que a edição de origem não pode ser identificada a partir do material; (3) o tomo 4 inclui uma seção de “sermões inéditos”, cuja procedência precisa ser verificada; (4) a dependência destes sermões de coletâneas de outros pregadores do século XVIII é questão a investigar antes de apresentá-los como textos do Cura d’Ars (ver a auditoria).', '');
  L.push('| Tomo, p. | Ocasião (como no texto) | Título | Ocasião atual provável (não verificada) |', '|---|---|---|---|');
  for (const s of inv.joao_maria_vianney) L.push(`| ${s.tomo}, ${s.pagina} | ${md(s.ocasiao)} | ${md(s.titulo)} | ${md(s.ocasiao_atual_provavel || '— (domingo do calendário antigo ou tema; sem correspondência definida)')} |`);
  L.push('', '## Santo Antônio de Pádua — Sermões', '');
  L.push('Nenhum sermão foi inserido. Motivos: (1) a tradução portuguesa enviada é a de Frei Ary E. Pintarelli, OFM (Vozes, 2019), obra protegida, e não há registro de autorização para publicá-la; (2) não foi enviado o texto latino (edição crítica do Centro Studi Antoniani, Pádua, 1979), indispensável para conferir a tradução; (3) os sermões não são homilias pregadas, mas esquemas para pregadores, organizados pelos domingos e festas do calendário do século XIII.', '');
  L.push('| Coleção | Sermão | Ocasião atual provável (não verificada) |', '|---|---|---|');
  for (const s of inv.antonio_de_padua) L.push(`| ${s.colecao} | ${md(s.titulo)} | ${md(s.ocasiao_atual_provavel || '— (domingo do calendário antigo; exige verificação do Evangelho)')} |`);
  L.push('');
  return L.join('\n');
}

// ---------------------------------------------------------------- AUDITORIA.md
const ESTADO = { aplicada: 'aplicada', 'nao-aplicada': 'não aplicada' };
function entrada(r) {
  const L = [`#### ${r.id} · Homilia ${ROM[r.homilia]} · ${r.localizacao}`, ''];
  L.push(`- **Santo e homilia:** São Gregório Magno, Homiliae in Evangelia, Homilia ${ROM[r.homilia]}`);
  L.push(`- **Referência bibliográfica:** CCSL 141 (Étaix, 1999), ${r.ccsl}`);
  L.push(`- **Localização no texto:** ${r.localizacao} — \`dados/homilias/gregorio-magno/recebida/homilia-${String(r.homilia).padStart(2, '0')}.txt\`, bloco ${r.bloco}`);
  L.push(`- **Texto latino:** ${r.latim}`);
  L.push(`- **Tradução recebida:** “${r.antes.replace(/\n/g, ' ¶ ')}”`);
  if (r.depois !== undefined) L.push(`- **Tradução ${r.estado === 'aplicada' ? 'aplicada' : 'proposta'}:** “${r.depois.replace(/\n\n/g, ' ¶ ')}”${r.une_ao_seguinte ? ' (e o bloco é unido ao seguinte)' : ''}`);
  L.push(`- **Justificativa linguística:** ${r.justificativa_linguistica}`);
  if (r.justificativa_teologica) L.push(`- **Justificativa teológica ou contextual:** ${r.justificativa_teologica}`);
  L.push(`- **Motivo:** ${r.motivo}`);
  if (r.decisao) L.push(`- **Decisão do responsável (${r.decisao.data.split('-').reverse().join('/')}):** ${r.decisao.escolha}${r.decisao.pendente ? ' (provisória)' : ''}. ${r.decisao.texto}`);
  if (r.avaliacao_c4) L.push(`- **Critério C4:** ${r.avaliacao_c4}`);
  L.push(`- **Grau de segurança:** ${r.confianca} · **estado:** ${ESTADO[r.estado]}`, '');
  return L.join('\n');
}
function auditoriaMd(REG, IND, gregorio) {
  const R = REG.registros;
  const grupo = (f) => R.filter(f).sort((a, b) => a.homilia - b.homilia || a.bloco - b.bloco || a.id.localeCompare(b.id));
  const aplic = grupo((r) => r.estado === 'aplicada');
  const fonteAplic = aplic.filter((r) => /fonte|editorial|Graciano|referência/i.test(r.motivo));
  const tradAplic = aplic.filter((r) => !fonteAplic.includes(r));
  const sug = grupo((r) => r.tipo === 'sugestao');
  const duv = grupo((r) => r.tipo === 'duvida');
  const varia = grupo((r) => r.tipo === 'variante');
  const L = [];
  L.push('# Auditoria das traduções — Homilias dos santos', '', '> Gerado a partir de `dados/homilias/gregorio-magno/registro-editorial.json` por `ferramentas/homilias/gerar_documentos.mjs`. Não edite à mão.', '');
  if (REG.etapas) {
    L.push('## Etapas', '', '| Etapa | Estado | Data |', '|---|---|---|');
    for (const e of Object.values(REG.etapas)) L.push(`| ${e.nome} | ${e.estado} | ${(e.data_de_conclusao || e.autorizada_em || '').split('-').reverse().join('/')} |`);
    L.push('');
  }
  L.push('## Método', '');
  L.push('- **Texto latino de base:** J.-P. Migne, *Patrologia Latina* 76 (Paris, 1849), na transcrição do Corpus Corporum (Universidade de Zurique) publicada na Wikisource latina, enviada em PDF e separada por homilia em `dados/homilias/gregorio-magno/latim/`. Os números de coluna citados no registro (1434-1661) são os que essa transcrição traz entre colchetes; podem não coincidir com os de outras tiragens da PL 76, que não foram conferidas. É a base declarada da tradução recebida.');
  L.push('- **Texto latino de conferência:** R. Étaix (ed.), *Gregorius Magnus, Homiliae in Evangelia*, CCSL 141, Turnhout: Brepols, 1999 — o PDF enviado. Edição crítica, com aparato de manuscritos e de fontes; usada para resolver passos duvidosos, identificar erros da transcrição de Migne e registrar variantes.');
  const P = REG.procedencia;
  L.push(`- **Tradução conferida:** o arquivo enviado “Texto Traduzido, as 40 homilias.txt”, obtido no portal OpenSaints (${P.fonte_de_obtencao_da_traducao.replace(/^Portal OpenSaints: /, '')}). Fonte textual declarada pela OpenSaints: ${P.fonte_textual_declarada}. Tradutor: ${P.tradutor}`);
  L.push('- **Procedimento:** as 40 homilias foram lidas em paralelo com o latim, parágrafo por parágrafo (Etapa 1: as 9 publicadas primeiro com a CCSL 141 e depois revistas com Migne; as outras 31 com Migne e a CCSL). Em todo ponto em que o português diverge do latim, a CCSL e o seu aparato foram consultados. Verificações automáticas completaram a leitura: números de coluna e de seção, referências desfiguradas, notas editoriais, resíduos de ferramentas, falsos cognatos recorrentes.');
  L.push('- **Regra decisiva:** quando o português segue uma leitura que o aparato atribui a manuscritos, isso é diferença de tradição textual (provavelmente a da edição de Migne), não erro de tradução: o texto fica como recebido e a diferença é registrada como *variante*.');
  L.push('- **Só correções de confiança alta foram aplicadas.** Confiança moderada ou baixa = sugestão ou dúvida, nunca aplicada.');
  L.push('- Escolhas de estilo que não mudam o sentido (artigos, pontuação, tempos verbais harmonizados, ordem das palavras) não foram alteradas nem itemizadas.');
  L.push('- **Reversível:** a tradução recebida está intacta em `dados/homilias/gregorio-magno/recebida/`; o texto publicado (`revisada/`) é gerado a partir dela e do registro. Para desfazer uma correção, mude seu estado para `nao-aplicada` e rode `python3 ferramentas/homilias/aplicar_alteracoes.py`.', '');
  L.push('## Números', '', '| Tipo | Quantidade |', '|---|---|');
  L.push(`| Correções de tradução aplicadas | ${tradAplic.length} |`, `| Correções de problemas da fonte aplicadas (artefatos, notas editoriais, referências) | ${fonteAplic.length} |`, `| Sugestões não aplicadas | ${sug.length} |`, `| Dúvidas (${duv.filter((r) => !r.decisao || r.decisao.pendente).length} ainda em aberto) | ${duv.length} |`, `| Variantes textuais registradas (texto mantido) | ${varia.length} |`, `| Homilias conferidas | ${REG.colacao.length} de 40 |`, '');
  L.push('Graus de segurança: **alta** — a correção é sustentada pelo original e pelo contexto; **moderada** — solução plausível, com alguma ambiguidade; **baixa** — não há elementos para uma solução definitiva.', '');
  L.push('## 1. Alterações efetivamente aplicadas', '', '### 1.1 Correções de tradução', '');
  for (const r of tradAplic) L.push(entrada(r));
  L.push('### 1.2 Correções de problemas da fonte', '', 'Não mudam palavras de Gregório: retiram números, notas e artefatos que vieram junto com a tradução, ou corrigem referências bíblicas acrescentadas pela edição.', '');
  for (const r of fonteAplic) L.push(entrada(r));
  L.push('## 2. Alterações sugeridas, mas não aplicadas', '', 'Cada uma traz a decisão do responsável (relatório final da Etapa 1, 06/11/2026).', '');
  for (const r of sug) L.push(entrada(r));
  L.push('## 3. Dúvidas', '', 'Dúvidas de sentido que as fontes não resolvem, com a decisão tomada. Uma decisão marcada como provisória mantém a dúvida em aberto.', '');
  for (const r of duv) L.push(entrada(r));
  L.push('## 4. Variantes textuais (diferenças de edição; texto mantido)', '', 'Em cada caso abaixo, o português não segue o texto crítico, mas segue uma leitura atestada nos manuscritos ou na edição impressa. Nada foi alterado.', '');
  L.push('| Registro | Homilia | Tradução recebida | Latim crítico e aparato |', '|---|---|---|---|');
  for (const r of varia) L.push(`| ${r.id} | ${ROM[r.homilia]} | ${md(r.antes)} | ${md(r.latim)} |`);
  L.push('', '## 5. Problemas encontrados nas fontes', '');
  const PR = REG.procedencia.politica_de_reutilizacao_declarada;
  L.push(`- **Tradução portuguesa sem tradutor identificado:** o arquivo não traz tradutor, edição nem licença. Foi obtido no portal OpenSaints, que declara na ${PR.onde}: “${PR.texto}” Também declara que ${PR.tambem_declarado}. Alcance: ${PR.alcance}. Verificação: ${PR.verificacao}.`);
  for (const h of REG.historico) L.push(`- **Decisão editorial (${h.data.split('-').reverse().join('/')}):** ${h.decisao}`);
  L.push('- **Marcas do processo de tradução:** linhas “Trecho N” e “PT” entre os parágrafos. Não fazem parte do texto; foram retiradas só na divisão por homilia (a camada recebida as registra em `@trechos`).');
  L.push('- **Homilia II sem cabeçalho nem rubrica:** o texto começa direto no Evangelho, dentro do bloco da Homilia I.');
  L.push('- **Artefatos numéricos** (números de coluna de Migne, como “1468”, “1573”) e numeração de parágrafos colada ao texto, juntando parágrafos — corrigidos nas 40 homilias (ver 1.2).');
  L.push('- **Remissões ao Decreto de Graciano** — notas marginais da edição impressa, como “(11, q. 3, c. 88)”, dentro do texto — retiradas onde a tradução as conservava.');
  L.push('- **Referências bíblicas desfiguradas** (“Sl 67 Sl 19”, “Hb 12 Hb 29”), “ibid.” e abreviaturas latinas — corrigidas e uniformizadas nas 40 homilias.');
  L.push('- **Blocos com etiqueta errada** (título ou texto da leitura marcado como parágrafo, leitura colada ao § 1, parágrafos partidos no meio de uma frase) — corrigidos.');
  L.push('- **Rubricas com dados ausentes do texto crítico:** a indicação do domingo nas Homilias VII, XVI e XXVI vem da edição impressa (ver variantes G07-03, G16-06, G26-09). Por isso a VII e a XXVI entram no calendário só pela correspondência bíblica, e a XVI pela ocasião confirmada no próprio texto (§ 5).');
  L.push('- **Lacuna na Homilia XL, § 3:** duas frases faltam na tradução recebida e, no lugar delas, há anotações de trabalho de uma ferramenta automática (“exprim glria? Wait correct typo. Need final clean.”). É a única ocorrência nas 40 homilias. Na camada revisada, as anotações saíram e as frases foram traduzidas do latim, como tradução própria identificada (G40-05).');
  L.push('- **Erros da edição de Migne nas referências bíblicas**, copiados pela tradução (ex.: Ct 1,1 dada como “I, 7”; Sl 101,8 como “CI, 1”; Mt 19,8 no lugar de Ex 22,1) — corrigidos com o aparato de fontes da CCSL.');
  L.push('- **Livros dos Reis e de Samuel:** a tradução recebida converteu “I/II Reg.” da Vulgata em “1Rs/2Rs”, que hoje designam outros livros — corrigidos para 1Sm/2Sm.');
  L.push('- **Erros da transcrição latina de base** (Corpus Corporum), identificados pela CCSL, sem efeito na tradução (ex.: “non” por “nos”, “concidit” por “condidit”) — registrados como problemas da fonte.');
  L.push('- **Grafia anterior ao Acordo Ortográfico:** “ungüentos” (Homilia XXIX), atualizada na Etapa 1 (G29-11).');
  L.push('- **Texto latino (CCSL 141):** a digitalização traz aviso de direitos reservados (Brepols). Foi usada só para conferência; nenhum texto latino é publicado no site, apenas citações curtas nesta auditoria.');
  L.push('- **Santo Antônio:** a tradução portuguesa é de Frei Ary E. Pintarelli, OFM (Vozes, 2019), indicada no próprio PDF, obtido do site academia.edu. A tradução inglesa (Paul Spilsbury, a partir da edição crítica de 1979) foi capturada do site franciscan-archive.org em 2006.');
  L.push('- **São João Maria Vianney:** os PDFs são documentos do Word convertidos, sem folha de rosto; há erros de reconhecimento de ligaduras (“SancLfication”, “ChréLen”).', '');
  L.push('## 6. Textos cuja autenticidade ou atribuição precisa de investigação', '');
  L.push('- **Homilia XXVI, § 2** — a frase “Isto é: assim como o Pai, Deus, enviou a mim, Deus, também eu vos envio, homem, a vós, homens” está em Migne (PL 76, col. 1553-1554), base da tradução, mas não no texto crítico nem no seu aparato (registro G26-08). Por decisão do responsável (C2), continua no texto, com nota editorial na página da homilia.');
  L.push('- **São João Maria Vianney** — os 4 tomos são a coleção tradicional dos sermões escritos pelo Cura d’Ars. A dependência destes textos de coletâneas de sermões de outros autores, e a extensão dos retoques dos editores, precisam ser investigadas antes de apresentá-los como palavras do santo. Os “sermões inéditos” do tomo 4 exigem identificação da fonte. Esta auditoria não afirma nem nega a autoria: registra que o material enviado não permite verificá-la.');
  L.push('- **Santo Antônio de Pádua** — a autoria dos *Sermones dominicales et festivi* é sólida (edição crítica de 1979), mas os textos não foram conferidos com o latim porque ele não foi enviado.', '');
  L.push('## 7. Homilias examinadas e não inseridas', '');
  L.push('| Santo | Texto | Motivo |', '|---|---|---|');
  for (const h of gregorio.filter((x) => x.estado !== 'publicada')) L.push(`| São Gregório Magno | ${h.titulo} (${h.pericope}) | colacionada (estado: ${h.estado_final === 'finalizada-com-ressalvas' ? 'finalizada com ressalvas' : h.estado_final}); a distribuição no calendário é a Etapa 2, não iniciada |`);
  L.push('| São João Maria Vianney | todos os sermões | sem tradução portuguesa; edição de origem e autoria a investigar |');
  L.push('| Santo Antônio de Pádua | todos os sermões | direitos da tradução portuguesa (Vozes, 2019); sem texto latino para conferência |', '');
  return L.join('\n');
}

// ---------------------------------------------------------------- CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const r = gerar();
  const D = path.join(RAIZ, 'dados', 'homilias');
  fs.writeFileSync(path.join(D, 'inventario.json'), JSON.stringify(r.inventario, null, 1) + '\n');
  fs.writeFileSync(path.join(D, 'INVENTARIO.md'), r.inventarioMd);
  fs.writeFileSync(path.join(D, 'AUDITORIA.md'), r.auditoriaMd);
  console.log('gerados: inventario.json, INVENTARIO.md, AUDITORIA.md');
}
