// Gramática: responde bien a todos los ejercicios de cada tema y comprueba que se dan por buenos.
const { chromium } = require('playwright'); const B3 = require('./bank3.js');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const page = await (await b.newContext({ viewport: { width: 1400, height: 900 } })).newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + require('path').resolve('../index.html') + '#pronoms'); await page.waitForTimeout(400);
  let fails = 0, n = 0;
  for (const grp of B3.groups) {
    await page.click(`.tab[data-view="${grp.id}"]`);
    for (const t of B3.topics.filter(x => x.g === grp.id)) {
      await page.click(`.g-topic:has-text("${t.name.slice(0, 25).replace(/"/g, '\\"')}")`);
      for (let k = 0; k < t.ex.length; k++) {
        const txt = await page.textContent('#g-card');
        const kind = (await page.$('#g-card .opt')) ? 'q' : (await page.$('#g-card .g-blank')) ? 'g' : 't';
        const cands = t.ex.filter(x => x.k === kind && (x.k === 't' ? (txt.includes(x.i) && txt.includes(x.f)) : x.s.split('___').map(p => p.trim()).filter(Boolean).every(p => txt.includes(p))));
        const it = cands.sort((a, b) => (b.s || b.f).length - (a.s || a.f).length)[0];
        if (!it) { console.log('NOT FOUND', t.id, txt.slice(0, 80)); fails++; await page.click('#g-skip'); continue; }
        n++;
        if (it.k === 'q') await page.click(`#g-card .opt[data-i="${it.c}"]`);
        else if (it.k === 'g') { const A = Array.isArray(it.a[0]) ? it.a : [it.a]; for (let i = 0; i < A.length; i++) await page.fill(`#g-card .g-blank[data-b="${i}"]`, A[i][0]); await page.click('#g-go'); }
        else { await page.fill('#g-card .ans', it.a[0]); await page.click('#g-go'); }
        const fb = await page.textContent('#g-card .feedback');
        if (!fb.startsWith('Correct')) { fails++; console.log('FAIL', it.id, fb.slice(0, 120)); }
        await page.click('#g-go');
      }
    }
  }
  console.log('grammar items', n, 'fails', fails);
  // fallo + error frecuente
  await page.click('.tab[data-view="pronoms"]'); await page.click('.g-topic:has-text("Pronoms COD")');
  await page.screenshot({ path: 'shots/g-fiche.png' });
  const it = B3.topics.find(x => x.id === 'codcoi');
  for (let k = 0; k < 6; k++) { const q = await page.$('#g-card .g-blank'); if (q) { await page.fill('#g-card .g-blank', 'zz'); await page.click('#g-go'); break; } await page.click('#g-skip'); }
  await page.screenshot({ path: 'shots/g-wrong.png', fullPage: true });
  await page.click('.tab[data-view="hoy"]'); await page.waitForTimeout(200);
  console.log('hoy errs has COD:', (await page.textContent('#v-hoy')).includes('Pronoms COD'));
  await page.click('.tab[data-view="tarjetas"]'); await page.waitForTimeout(200); await page.screenshot({ path: 'shots/g-card.png' });
  console.log('errors', errs); await b.close();
})();
