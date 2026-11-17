// Séance du jour : exercices nouveaux chaque jour, et les ratés reviennent à la séance suivante.
const { chromium } = require('playwright'); const path = require('path');
const fake = iso => `(()=>{const R=Date,T=new R('${iso}').getTime(),s=R.now();class D extends R{constructor(...a){a.length?super(...a):super(T+R.now()-s)}static now(){return T+R.now()-s}}window.Date=D})()`;
const LS = 'atelier-conj-v1';
async function day(b, iso, store, wrong) {
  const ctx = await b.newContext(); await ctx.addInitScript(fake(iso));
  if (store) await ctx.addInitScript(([k, v]) => localStorage.setItem(k, v), [LS, store]);
  const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + path.resolve(__dirname, '../index.html') + '#hoy');
  const plan = await page.textContent('#h-plan');
  await page.click('#h-go');
  for (let n = 0; n < 60; n++) {
    if (await page.isVisible('#h-done')) break;
    const opt = page.locator('#h-card .opt:not([disabled])');
    if (await opt.count()) { await opt.first().click(); }
    else {
      const ins = page.locator('#h-card input.ans:not([readonly])');
      for (let i = 0; i < await ins.count(); i++) await ins.nth(i).fill(wrong ? 'zzz' : 'zzz');
      if (await page.isVisible('#h-next')) await page.click('#h-next');
    }
    await page.waitForTimeout(30);
    if (await page.isVisible('#h-next') && (await page.textContent('#h-next')) !== 'Vérifier') await page.click('#h-next');
  }
  const P = JSON.parse(await page.evaluate(k => localStorage.getItem(k), LS));
  const raw = await page.evaluate(k => localStorage.getItem(k), LS);
  await ctx.close(); return { P, raw, errs, plan };
}
(async () => {
  const b = await chromium.launch();
  // Jour 1 : tout raté
  const d1 = await day(b, '2026-12-01T10:00:00');
  const k1 = Object.keys(d1.P.ds); console.log('jour 1 :', k1.length, 'exercices, ratés :', k1.filter(k => !d1.P.ds[k][1]).length, 'erreurs JS', d1.errs);
  // On marque comme réussis tous les exercices du jour 1 sauf ceux de « tr », « hip » et « p » (piège)
  const keepFail = k => /^(t|h|p):/.test(k);
  const d1ds = JSON.parse(JSON.stringify(d1.P.ds)); for (const k of k1) if (!keepFail(k)) d1.P.ds[k][1] = 1;
  for (const k of Object.keys(d1.P.srs)) d1.P.srs[k][0] = 2;
  const d2 = await day(b, '2026-12-02T10:00:00', JSON.stringify(d1.P));
  const k2 = Object.keys(d2.P.ds).filter(k => d2.P.ds[k][0] !== d1.P.ds[k]?.[0] || !k1.includes(k));
  const again = k2.filter(k => k1.includes(k));
  console.log('jour 2 :', k2.length, 'exercices ; répétés du jour 1 :', again, 'erreurs JS', d2.errs);
  const bad = again.filter(k => !keepFail(k));
  const f1 = p => k1.filter(k => k.startsWith(p) && !d1ds[k][1]).length, exp = Math.min(f1('t:'), 1) + f1('h:') + f1('p:');
  console.log('attendus répétés :', exp);
  // Jour 3 : tout réussi la veille → aucun exercice du jour 1 ou 2
  for (const k of Object.keys(d2.P.ds)) d2.P.ds[k][1] = 1;
  for (const k of Object.keys(d2.P.srs)) d2.P.srs[k][0] = 2;
  const d3 = await day(b, '2026-12-03T10:00:00', JSON.stringify(d2.P));
  const k3 = Object.keys(d3.P.ds).filter(k => d3.P.ds[k][0] === d3.P.ds[k][0] && !Object.keys(d2.P.ds).includes(k) || d3.P.ds[k][0] > d2.P.ds[k]?.[0]);
  const rep3 = k3.filter(k => Object.keys(d2.P.ds).includes(k));
  console.log('jour 3 :', k3.length, 'exercices ; répétés :', rep3.length, 'erreurs JS', d3.errs);
  console.log('plan :', d2.plan);
  const ok = !d1.errs.length && !d2.errs.length && !d3.errs.length && k1.length === 15 && again.length === exp && !bad.length && k3.length === 15 && !rep3.length;
  console.log(ok ? 'OK' : 'ÉCHEC'); await b.close(); process.exit(ok ? 0 : 1);
})();
