const { chromium } = require('playwright'); const E = require('./engine.js');
const Y = sel => `(()=>{const r=document.querySelector('${sel}').getBoundingClientRect();return Math.round(r.top+scrollY)})()`;
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  for (const W of [1440, 1280, 1100, 960]) {
    const page = await (await b.newContext({ viewport: { width: W, height: 900 } })).newPage();
    await page.goto('file://' + require('path').resolve('../index.html') + '#conjugar'); await page.waitForTimeout(300);
    const pos = {};
    for (const v of ['être', 'se souvenir', 's’inquiéter', 'reconnaître', 'parler', 'pouvoir', 'se dépêcher'])
      for (const t of E.TENSES) { await page.selectOption('#c-verb', v); await page.click(`#c-tenses [data-t="${t.id}"]`);
        const y = await page.evaluate(Y('#c-check')); (pos[y] = pos[y] || []).push(v + '/' + t.id); }
    console.log(W, 'conj', Object.fromEntries(Object.entries(pos).map(([k, v]) => [k, v.length + ' ' + v.slice(0, 3).join(',')])));
    await page.goto('file://' + require('path').resolve('../index.html') + '#tarjetas'); await page.waitForTimeout(300);
    const kp = {};
    for (let i = 0; i < 60; i++) { const y = await page.evaluate(Y('#k-go')); kp[y] = (kp[y] || 0) + 1; await page.click('#k-skip'); }
    console.log(W, 'cards ask', kp);
    if (W === 1440) { await page.screenshot({ path: 'shots/card-small.png' }); }
    await page.close();
  }
  await b.close();
})();
