const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'], headless: false });
  const page = await (await b.newContext({ viewport: { width: 1400, height: 900 } })).newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + require('path').resolve('../index.html') + '#conjugar'); await page.waitForTimeout(400);
  await page.click('#c-tenses [data-t="recent"]');
  const seq = [];
  for (let i = 0; i < 5; i++) { seq.push(await page.$eval('#c-verb', s => s.value) + '/' + await page.$eval('#c-tenses [aria-pressed=true]', e => e.dataset.t)); await page.click('#c-next'); }
  console.log(seq.join(' '));
  await page.screenshot({ path: 'shots/next.png' });
  await page.click('.tab[data-view="phrase"]'); await page.click('.g-topic:has-text("La voix passive")'); await page.screenshot({ path: 'shots/phrase.png' });
  console.log('errs', errs); await b.close();
})();
