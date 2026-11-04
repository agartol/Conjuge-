const { chromium } = require('playwright'); const fs=require('fs');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript(fs.readFileSync('test4.js','utf8').split('const MOCK = `')[1].split('`;')[0].replace(/\\\\/g,'\\'));
  const page = await ctx.newPage();
  await page.goto('file://' + process.cwd() + '/preview.html#hoy'); await page.waitForTimeout(600);
  const SP = /[áíóúñ¿¡]|\b(y|el|los|las|del|una|para|con|sin|está|más|también|frase|frases|tiempo|tiempos|verbo|verbos|errores|respuesta|respuestas|hueco|huecos|palabra|palabras|semana|días|sesión|ejercicios?|consigna|nuevas|todos|todas|forma|formas|elige|escribe|hoy|vez|veces|ver|tipo|regla|raíz|bien|mal|Correcto|Siguiente|Comprobar|Saltar)\b/;
  const views = ['hoy','conjugar','tarjetas','irregulares','dictado','frases','tiempo','textos','transformar','hipotesis','trampas','escribir','examen','progreso'];
  for (const v of views) {
    await page.click(`.tab[data-view="${v}"]`); await page.waitForTimeout(250);
    if (v === 'escribir') { await page.fill('#w-text', 'Hier il fait beau.'); }
    if (v === 'transformar') { await page.fill('#r2-in', 'xx'); await page.click('#r2-go'); }
    if (v === 'tarjetas') { await page.fill('#k-in', 'xx'); await page.click('#k-go'); }
    if (v === 'frases') { await page.fill('#f-in', 'xx'); await page.click('#f-go'); }
    if (v === 'tiempo') { await page.click('#t-card .opt >> nth=0'); }
    if (v === 'trampas') { await page.click('#r-card .opt >> nth=0'); }
    if (v === 'hipotesis') { await page.click('#hp-go'); }
    if (v === 'conjugar') { await page.click('#c-check'); await page.click('#c-show'); }
    if (v === 'textos') { await page.click('#x-check'); await page.click('#x-show'); }
    const txt = await page.evaluate(() => document.querySelector('.view:not([hidden])').innerText + '\n' + document.querySelector('.sidenav').innerText);
    const lines = txt.split('\n').filter(l => SP.test(l));
    console.log('==', v, lines.length ? lines.slice(0, 8).map(l => l.slice(0, 140)) : 'OK');
  }
  await page.click('.tab[data-view="examen"]'); await page.click('#e-begin'); for (let i=0;i<20;i++){ await page.fill('#e-in','x'); await page.click('#e-next'); }
  const et = await page.evaluate(() => document.querySelector('#e-done').innerText); console.log('== exam results', et.split('\n').filter(l=>SP.test(l)).slice(0,6));
  await b.close();
})();
