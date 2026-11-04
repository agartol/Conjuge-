// Vocabulario: cada palabra en modo « écrire » (forma completa y variantes) y en modo « choisir ».
const { chromium } = require('playwright'); const L = require('./lexique.js');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const page = await (await b.newContext({ viewport: { width: 1400, height: 900 } })).newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + require('path').resolve('../index.html') + '#vocabulaire'); await page.waitForTimeout(400);
  let n = 0, fails = 0;
  for (const t of L.themes) {
    await page.click(`#vo-themes .g-topic:has-text("${t.name}")`);
    await page.click('#vo-modes button:has-text("Écrire en français")');
    for (let i = 0; i < t.words.length; i++) {
      const es = (await page.textContent('#vo-card .vo-es')).trim();
      const w = t.words.find(x => x[1] === es);
      const alt = w[0].includes('(e)') ? w[0].replace('(e)', 'e') : w[0].includes(' / ') && !/^(le|la|un|une) \//.test(w[0]) ? w[0].split(' / ')[1] : w[0];
      await page.fill('#vo-card .ans', i % 2 ? alt : w[0]); await page.click('#vo-go');
      const fb = await page.textContent('#vo-card .feedback'); n++;
      if (!fb.startsWith('Correct')) { fails++; console.log('FAIL write', w[0], '|', i % 2 ? alt : w[0], fb.slice(0, 60)); }
      await page.click('#vo-go');
    }
    await page.click('#vo-modes button:has-text("Choisir")');
    for (let i = 0; i < t.words.length; i++) {
      const fr = (await page.$eval('#vo-card .vo-word', e => e.childNodes[0].textContent)).trim();
      const w = t.words.find(x => x[0] === fr);
      await page.click(`#vo-card .opt[data-o="${w[1].replace(/"/g, '\\"')}"]`);
      const fb = await page.textContent('#vo-card .feedback'); n++;
      if (!fb.startsWith('Correct')) { fails++; console.log('FAIL choose', fr); }
      await page.click('#vo-go');
    }
  }
  console.log('vocab checks', n, 'fails', fails);
  // textes à trous: rellenar con la banca de palabras y corregir
  let tf = 0;
  for (const tx of L.textes) {
    const th = L.themes.find(t => t.id === tx.th);
    await page.click(`#vo-themes .g-topic:has-text("${th.name}")`); await page.click('#vo-modes button:has-text("Texte")');
    const ans = [...tx.t.matchAll(/\{\{([^}]+)\}\}/g)].map(m => m[1].split('|')[0]);
    const inputs = await page.$$('#vo-tbody .vo-blank');
    for (let i = 0; i < inputs.length; i++) { await inputs[i].focus(); await page.click(`#vo-bank button[data-w="${ans[i].replace(/"/g, '\\"')}"]:not(.used)`); }
    await page.click('#vo-tcheck');
    const sc = await page.textContent('#vo-tscore'); if (!sc.includes('Tout est juste')) { tf++; console.log('TEXT FAIL', tx.th, sc); }
  }
  console.log('textes', L.textes.length, 'fails', tf);
  await page.screenshot({ path: 'shots/voc-text.png' });
  // sin artículo → menor
  await page.click('#vo-themes .g-topic:has-text("La maison")'); await page.click('#vo-modes button:has-text("Écrire")');
  const es = (await page.textContent('#vo-card .vo-es')).trim(); const w = L.themes.find(t => t.id === 'maison').words.find(x => x[1] === es);
  await page.fill('#vo-card .ans', w[0].replace(/^(le|la|les|l’)\s*/, '')); await page.click('#vo-go');
  console.log('no article:', w[0], '→', await page.textContent('#vo-card .feedback'));
  await page.screenshot({ path: 'shots/voc.png' });
  await page.click('#vo-modes button:has-text("Liste")'); await page.screenshot({ path: 'shots/voc-list.png' });
  console.log('errors', errs); await b.close();
})();
