// Série : deuxième chance (un jour manqué ne casse pas la série si le lendemain est réussi).
const { chromium } = require('playwright'); const path = require('path');
const fake = iso => `(()=>{const R=Date,T=new R('${iso}').getTime(),s=R.now();class D extends R{constructor(...a){a.length?super(...a):super(T+R.now()-s)}static now(){return T+R.now()-s}}window.Date=D})()`;
const cases = [
  ['hier manqué, aujourd’hui à faire', { '2026-12-06': 25, '2026-12-07': 25, '2026-12-08': 25 }, 3, 'risque'],
  ['hier manqué, aujourd’hui réussi', { '2026-12-06': 25, '2026-12-07': 25, '2026-12-08': 25, '2026-12-10': 25 }, 4, 'sauve'],
  ['deux jours manqués', { '2026-12-06': 25, '2026-12-07': 25 }, 0, 'eteinte'],
  ['trou d’un jour dans le passé', { '2026-12-07': 25, '2026-12-09': 25 }, 2, 'normal'],
  ['série normale', { '2026-12-08': 25, '2026-12-09': 25 }, 2, 'normal'],
  ['deux trous séparés', { '2026-12-03': 25, '2026-12-05': 25, '2026-12-06': 25, '2026-12-08': 25, '2026-12-10': 25 }, 5, 'sauve'],
];
(async () => {
  const b = await chromium.launch(); let fails = 0;
  for (const [name, days, want, kind] of cases) {
    const ctx = await b.newContext(); await ctx.addInitScript(fake('2026-12-10T12:00:00'));
    await ctx.addInitScript(d => { if (!sessionStorage.getItem('x')) { sessionStorage.setItem('x', 1); localStorage.setItem('atelier-conj-v1', JSON.stringify({ days: d, goal: 20 })); } }, days);
    const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
    await page.goto('file://' + path.resolve(__dirname, '../index.html') + '#hoy'); await page.waitForTimeout(300);
    const n = +(await page.textContent('#h-streak .streak-n')), msg = await page.textContent('#h-streak .streak-msg');
    const dots = await page.$$eval('#h-streak .wdot', ds => ds.map(d => d.className.replace('wdot ', '')).join(' '));
    const okMsg = kind === 'risque' ? /Deuxième chance/.test(msg) : kind === 'sauve' ? /deuxième chance/.test(msg) : !/chance/i.test(msg);
    const ok = n === want && okMsg && !errs.length; if (!ok) fails++;
    console.log(ok ? 'OK ' : 'ÉCHEC', name, '→', n, '|', dots, '|', msg, errs);
    if (process.env.OUT && name.startsWith('hier manqué, auj')) await page.locator('#h-streak').screenshot({ path: path.join(process.env.OUT || '.', 'racha-' + kind + '.png') });
    await ctx.close();
  }
  await b.close(); process.exit(fails ? 1 : 0);
})();
