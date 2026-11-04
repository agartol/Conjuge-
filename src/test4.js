const { chromium } = require('playwright'); const fs=require('fs');
const B2 = require('./bank2.js');
const skel = c => '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + c + '</body></html>';
fs.writeFileSync('preview.html', skel(fs.readFileSync('atelier-conjugaison.html','utf8')));
const MOCK = `
window.__calls = [];
const mockSample = async () => ({ text: 'x' });
mockSample.json = async (prompt, opts) => {
  window.__calls.push(prompt.slice(0, 60));
  await new Promise(r => setTimeout(r, 300));
  if (prompt.includes('8 nouvelles phrases')) return [
    { s: 'Hier soir, nous [regarder] un film à la télé.', t: 'pc', a: ['avons regardé'], w: 'Acción terminada (hier soir).' },
    { s: 'Il faut que vous [venir] demain.', t: 'subj', a: ['veniez'], w: 'Il faut que + subjonctif.' },
    { s: 'mala frase sin hueco', t: 'pc', a: ['x'], w: '' } ];
  if (prompt.includes('"valida"')) return { valida: true, explicacion: 'Tu versión también es correcta.' };
  const t = (prompt.split('<texte>')[1] || '').split('</texte>')[0].trim();
  const w = t.split(/\\s+/);
  return { cumple_consigna: false, nota: 6.5, comentario: 'Buen intento: revisa los tiempos.', errores: [
    { fragmento: w[1] || w[0], tipo: 'tiempo verbal', explicacion: 'Aquí va imparfait.', correccion: 'était' },
    { fragmento: w[3] || w[0], tipo: 'ortografía', explicacion: 'Falta el acento.', correccion: 'été' },
    { fragmento: 'no existe en el texto', tipo: 'sintaxis', explicacion: 'x', correccion: 'y' } ], version_corregida: 'Texte corrigé complet.' };
};
window.claude = { use: async n => n === 'sample' ? mockSample : null };`;
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 950 } });
  await ctx.addInitScript(MOCK);
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push('console ' + m.text()); });
  await page.goto('file://' + process.cwd() + '/preview.html'); await page.waitForTimeout(800);
  await page.screenshot({ path: 'shots/n-hoy-empty.png' });
  // fecha examen
  await page.fill('#h-date', '2026-12-12'); await page.click('#h-exam .btn');
  console.log('exam:', (await page.textContent('#h-exam .stat-n')));
  // sesión
  await page.click('#h-go');
  for (let i = 0; i < 15; i++) {
    const hasOpt = await page.$('#h-card .opt'); 
    if (hasOpt) await page.click('#h-card .opt >> nth=0');
    else { const ins = await page.$$('#h-card .ans'); for (const x of ins) await x.fill(i % 2 ? 'abc' : 'xyz'); await page.click('#h-next'); }
    await page.click('#h-next');
  }
  console.log('session done:', await page.textContent('#h-done .big-score'));
  await page.click('#h-done .btn:has-text("Volver")');
  await page.screenshot({ path: 'shots/n-hoy.png', fullPage: true });
  // textos
  await page.click('.tab[data-view="textos"]'); await page.waitForTimeout(200);
  const tx = B2.textos[0]; const ans = [...tx.text.matchAll(/\{\{([^|]+)\|([^|]+)\|/g)].map(m => m[2].split('/')[0]);
  const ins = await page.$$('#x-text .ans'); for (let i = 0; i < ins.length; i++) await ins[i].fill(i === 2 ? 'est' : ans[i]);
  await page.click('#x-check'); console.log('texto score:', await page.textContent('#x-score'), 'fix shown before solution?', await page.isVisible('#x-why'));
  await page.click('#x-show'); await page.screenshot({ path: 'shots/n-textos.png', fullPage: true });
  // todos los textos correctos
  let txFail = 0;
  for (const t of B2.textos) { await page.click(`#x-list button:has-text("${t.title.replace(/"/g,'')}")`); const a = [...t.text.matchAll(/\{\{([^|]+)\|([^|]+)\|/g)].map(m => m[2].split('/')[0]);
    await page.evaluate(a => [...document.querySelectorAll('#x-text .ans')].forEach((x, i) => x.value = a[i]), a); await page.click('#x-check');
    const sc = await page.textContent('#x-score'); if (!sc.includes('Tout est juste')) { txFail++; console.log('TX FAIL', t.id, sc); } }
  console.log('textos fails', txFail);
  // transformar: all items correct
  await page.click('.tab[data-view="transformar"]'); let trFail = 0;
  for (let i = 0; i < B2.transform.length; i++) {
    const from = await page.textContent('#r2-card .from'); const it = B2.transform.find(x => from.trim().startsWith(x.from));
    await page.fill('#r2-in', i === 0 ? 'respuesta rara' : it.a[0]); await page.click('#r2-go');
    const fb = await page.textContent('#r2-card .feedback');
    if (i === 0) { await page.click('#r2-card .btn.small'); await page.waitForTimeout(500); console.log('askValid:', (await page.textContent('#r2-card')).includes('correcte elle aussi')); await page.screenshot({ path: 'shots/n-transf.png' }); }
    else if (!fb.startsWith('Correct')) { trFail++; console.log('TR FAIL', it.id, fb.slice(0, 80)); }
    await page.click('#r2-go');
  }
  console.log('transform fails', trFail);
  // hipótesis all
  await page.click('.tab[data-view="hipotesis"]'); let hpFail = 0;
  for (let i = 0; i < B2.hipotesis.length; i++) {
    const s = (await page.textContent('#hp-card .sentence')).replace(/\s+/g, ' ');
    const it = B2.hipotesis.find(x => s.includes(x.s.split('[')[0].trim().slice(0, 12)) && s.includes(x.s.split(']').pop().trim().slice(0, 8)));
    await page.evaluate(a => a.forEach((x, k) => { document.getElementById('hp-in-' + k).value = x[0]; }), it.a);
    await page.click('#hp-go'); const fb = await page.textContent('#hp-card .feedback'); if (!fb.startsWith('Correct')) { hpFail++; console.log('HP FAIL', it.id, fb.slice(0, 60)); }
    if (i === 0) await page.screenshot({ path: 'shots/n-hip.png' });
    await page.click('#hp-go');
  }
  console.log('hip fails', hpFail);
  // dictado
  await page.click('.tab[data-view="dictado"]'); await page.waitForTimeout(300);
  await page.fill('#d-in', 'nous prenions'); await page.click('#d-go'); 
  await page.click('#d-go'); await page.click('#d-mode button[data-m="frases"]'); await page.fill('#d-in', 'Il fait beau aujourd hui'); await page.click('#d-go');
  await page.screenshot({ path: 'shots/n-dict.png' });
  // escribir: copiar y abrir Claude
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.click('.tab[data-view="escribir"]'); await page.fill('#w-text', 'Hier il fait beau et nous sommes allé a la plage.');
  const [popup] = await Promise.all([page.context().waitForEvent('page', { timeout: 3000 }).catch(() => null), page.click('#w-copy')]);
  await page.waitForTimeout(300);
  console.log('popup:', popup && popup.url(), '| note:', await page.textContent('#w-out'));
  console.log('clipboard:', (await page.evaluate(() => navigator.clipboard.readText())).replace(/\n/g, ' / ').slice(0, 160));
  if (popup) await popup.close();
  await page.screenshot({ path: 'shots/n-escribir.png', fullPage: true });
  // generador en frases
  await page.click('.tab[data-view="frases"]'); await page.click('#f-gen'); await page.waitForTimeout(700);
  console.log('gen note:', await page.textContent('#f-gen-note'), '| card:', (await page.textContent('#f-card .sentence')).slice(0, 50));
  // tiempo errors -> confusions
  await page.click('.tab[data-view="tiempo"]'); for (let i = 0; i < 4; i++) { await page.click('#t-card .opt >> nth=0'); await page.click('#t-next'); }
  await page.click('.tab[data-view="progreso"]'); await page.screenshot({ path: 'shots/n-prog.png', fullPage: true });
  await page.click('.tab[data-view="hoy"]'); await page.screenshot({ path: 'shots/n-hoy2.png', fullPage: true });
  // error buttons
  const eb = await page.$$('#h-errs .btn'); if (eb.length) { await eb[0].click(); console.log('err button →', await page.evaluate(() => location.hash)); }
  // other views no error
  for (const v of ['conjugar','tarjetas','irregulares','trampas','examen']) { await page.click(`.tab[data-view="${v}"]`); await page.waitForTimeout(100); }
  console.log('claude calls', await page.evaluate(() => window.__calls.length));
  console.log('ERRORS', errs);
  await b.close();
})();
