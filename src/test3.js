const { chromium } = require('playwright'); const fs=require('fs');
const E = require('./engine.js'); const B = require('./bank.js');
const skel = c => '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + c + '</body></html>';
fs.writeFileSync('preview.html', skel(fs.readFileSync('atelier-conjugaison.html','utf8')));
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const page = await (await b.newContext({ viewport: { width: 1400, height: 900 } })).newPage();
  const errs=[]; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + process.cwd() + '/preview.html#conjugar'); await page.waitForTimeout(500);
  // fill all grids via page JS for speed
  const res = await page.evaluate(async ({ verbs, tenses }) => {
    const fails = []; let n = 0;
    const sel = document.querySelector('#c-verb');
    for (const v of verbs) { sel.value = v; sel.dispatchEvent(new Event('change'));
      for (const t of tenses) { document.querySelector(`#c-tenses [data-t="${t}"]`).click();
        const ins = [...document.querySelectorAll('#c-grid .ans')]; if (!ins.length) continue;
        window.__fill && 0;
        ins.forEach(i => { i.value = i.dataset.ans || ''; });
        n++; fails.push([v, t, ins.length]); } }
    return { n };
  }, { verbs: E.VERBS, tenses: E.TENSES.map(t => t.id) });
  // real check: for each verb/tense, fill answers from engine (Node side) – done in batches
  let bad = 0, grids = 0;
  for (const v of E.VERBS) {
    await page.selectOption('#c-verb', v);
    for (const t of E.TENSES) {
      if (!E.available(v, t.id)) continue;
      await page.click(`#c-tenses [data-t="${t.id}"]`);
      const gs = await page.$$eval('#c-grid .prow', rs => rs.map(r => { const g = r.querySelector('.gtag'); return g ? g.textContent[0] : undefined; }));
      const ans = E.personsFor(t.id).map((p, k) => E.cell(v, t.id, p, gs[k] || undefined).answer);
      await page.evaluate(a => { [...document.querySelectorAll('#c-grid .ans')].forEach((i, k) => i.value = a[k]); document.querySelector('#c-check').click(); }, ans);
      const sc = await page.textContent('#c-score'); grids++;
      if (!sc.includes('Tout est juste')) { bad++; console.log('FAIL', v, t.id, sc); }
    }
  }
  console.log('grids', grids, 'fail', bad);
  // wrong answer → no solution shown, then Ver solución shows
  await page.selectOption('#c-verb', 'prendre'); await page.click('#c-tenses [data-t="fut"]');
  await page.fill('#c-grid .ans >> nth=0', 'prenderai'); await page.click('#c-check');
  console.log('after check fix count:', await page.$$eval('#c-grid .fix', e => e.length), 'marks', await page.$$eval('#c-grid .mark', e => e.map(x => x.textContent).join('')));
  await page.click('#c-show'); console.log('after show:', await page.$$eval('#c-grid .fix', e => e.map(x => x.textContent).slice(0, 3)));
  await page.screenshot({ path: 'shots/d-conj.png' });
  // frases
  await page.click('.tab[data-view="frases"]'); let fb = 0;
  for (let i = 0; i < B.frases.length; i++) { const id = await page.getAttribute('#f-card', 'data-id'); const it = B.frases.find(f => f.id === id);
    await page.fill('#f-in', it.a[0]); await page.click('#f-go');
    const t = await page.textContent('#f-card .feedback'); if (!t.startsWith('Correct')) { fb++; console.log('FRASE FAIL', id, t); }
    await page.click('#f-go'); }
  console.log('frases fail', fb);
  // irregulares: click every verb
  await page.click('.tab[data-view="irregulares"]');
  const n = await page.$$eval('#i-list button', e => e.length);
  for (let i = 0; i < n; i++) await page.click(`#i-list button >> nth=${i}`);
  console.log('irregular verbs rendered', n);
  await page.click('#i-list button:has-text("prendre")'); await page.screenshot({ path: 'shots/d-irr.png' });
  await page.fill('#i-search', 'etre'); await page.click('#i-list button >> nth=0'); await page.screenshot({ path: 'shots/d-irr-etre.png' });
  // tiempo + trampas loops
  await page.click('.tab[data-view="tiempo"]'); for (let i = 0; i < 5; i++) { await page.click('#t-card .opt >> nth=0'); await page.click('#t-next'); }
  await page.click('.tab[data-view="trampas"]'); for (let i = 0; i < 5; i++) { await page.click('#r-card .opt >> nth=0'); await page.click('#r-next'); }
  await page.click('.tab[data-view="tarjetas"]'); await page.selectOption('#k-group', 'irr'); await page.screenshot({ path: 'shots/d-cards.png' });
  await page.emulateMedia({ colorScheme: 'dark' }); await page.click('.tab[data-view="irregulares"]'); await page.screenshot({ path: 'shots/d-irr-dark.png' });
  console.log('errors', errs);
  await b.close();
})();
