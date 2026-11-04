// Recorre todas las vistas e interactúa con ellas en varios anchos y en modo oscuro; informa de errores de JavaScript.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const errs = [];
  for (const [W, dark] of [[1440, false], [1100, true], [820, false]]) {
    const ctx = await b.newContext({ viewport: { width: W, height: 900 }, colorScheme: dark ? 'dark' : 'light' });
    const page = await ctx.newPage(); page.on('pageerror', e => errs.push(W + ' ' + e.message));
    await page.goto('file://' + require('path').resolve('../index.html') + '#hoy'); await page.waitForTimeout(400);
    const views = await page.$$eval('.tab', t => t.map(x => x.dataset.view));
    for (const v of views) {
      await page.evaluate(v => { location.hash = v; }, v); await page.waitForTimeout(150);
      const click = async s => { const el = await page.$(s); if (el && await el.isVisible()) await el.click({ timeout: 2000 }).catch(() => {}); };
      const fillAll = async s => { for (const el of await page.$$(s)) if (await el.isVisible() && await el.isEditable()) await el.fill('abc'); };
      if (v === 'hoy') { await click('#h-go'); for (let i = 0; i < 15; i++) { const o = await page.$('#h-card .opt:not([disabled])'); if (o) await o.click(); else { await fillAll('#h-card .ans'); await click('#h-next'); } await click('#h-next'); } }
      if (v === 'conjugar') { await fillAll('#c-grid .ans'); await click('#c-check'); await click('#c-show'); await click('#c-next'); await click('#c-rand'); }
      if (v === 'tarjetas') for (let i = 0; i < 10; i++) { await fillAll('#k-card .ans'); await click('#k-go'); await click('#k-go'); }
      if (v === 'irregulares') { await click('#i-list button >> nth=3'); }
      if (v === 'dictado') { await fillAll('#v-dictado .ans'); await click('#d-check'); }
      if (v === 'frases') for (let i = 0; i < 5; i++) { await fillAll('#f-card .ans'); await click('#f-go'); await click('#f-go'); }
      if (v === 'tiempo') for (let i = 0; i < 5; i++) { await click('#t-card .opt >> nth=0'); await click('#t-next'); }
      if (v === 'textos') { await fillAll('#x-text .ans'); await click('#x-check'); await click('#x-show'); }
      if (v === 'transformar') for (let i = 0; i < 4; i++) { await fillAll('#r2-card .ans'); await click('#r2-go'); await click('#r2-go'); }
      if (v === 'hipotesis') { await fillAll('#v-hipotesis .ans'); await click('#hp-go'); }
      if (v === 'trampas') for (let i = 0; i < 4; i++) { await click('#r-card .opt >> nth=0'); await click('#r-next'); }
      if (['pronoms', 'connecteurs', 'phrase', 'idees', 'revision'].includes(v)) {
        const n = (await page.$$('#g-topics .g-topic')).length;
        for (let k = 0; k < n; k++) { await click(`#g-topics .g-topic >> nth=${k}`); for (let i = 0; i < 3; i++) { const o = await page.$('#g-card .opt:not([disabled])'); if (o) await o.click(); else { await fillAll('#g-card .ans'); await click('#g-go'); } await click('#g-go'); } }
      }
      if (v === 'vocabulaire') {
        const n = (await page.$$('#vo-themes .g-topic')).length;
        for (let k = 0; k < n; k += 3) { await click(`#vo-themes .g-topic >> nth=${k}`);
          for (const m of ['Liste', 'Choisir', 'Écrire', 'Texte']) { await click(`#vo-modes button:has-text("${m}")`);
            if (m === 'Choisir') { await click('#vo-card .opt >> nth=0'); await click('#vo-go'); }
            if (m === 'Écrire') { await fillAll('#vo-card .ans'); await click('#vo-go'); await click('#vo-go'); }
            if (m === 'Texte') { await click('#vo-bank button >> nth=0'); await click('#vo-tcheck'); await click('#vo-tshow'); await click('#vo-tnext'); } } }
      }
      if (v === 'escribir') { await fillAll('#w-text'); await click('#w-new'); }
      if (v === 'examen') { await click('#e-begin'); for (let i = 0; i < 20; i++) { await fillAll('#e-in'); await click('#e-next'); } }
      if (v === 'progreso') { await page.waitForTimeout(100); }
    }
    await page.screenshot({ path: `shots/all-${W}.png`, fullPage: false });
    await ctx.close();
  }
  console.log('JS errors:', errs.length ? [...new Set(errs)] : 'none'); await b.close();
})();
