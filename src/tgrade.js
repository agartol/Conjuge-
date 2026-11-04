const fs=require('fs'); const t=fs.readFileSync('app.template.html','utf8');
const code=t.slice(t.indexOf("  const PUNCT = "), t.indexOf("  function gradeView"));
const bare = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe');
eval(code + ';global.G=gradeSentence;');
const cases=[
 ['Je n’ai pas vu ce film.', 'Je n’ai pas vu ce film.'],
 ['je n’ai pas vu ce film.', 'Je n’ai pas vu ce film.'],
 ['Je n’ai pas vu ce film', 'Je n’ai pas vu ce film.'],
 ['Je n’ ai  pas vu ce film .', 'Je n’ai pas vu ce film.'],
 ['Je n\'ai pas vu ce flim.', 'Je n’ai pas vu ce film.'],
 ['Je ai pas vu ce film.', 'Je n’ai pas vu ce film.'],
 ['Tu n’as pas vu ce film.', 'Je n’ai pas vu ce film.'],
 ['Elle est allee au marche.', 'Elle est allée au marché.'],
 ['Depeche toi !', 'Dépêche-toi !'],
 ['Ne le mange pas!', 'Ne le mange pas !'],
 ['Il m’a demandé où j’habitais', 'Il m’a demandé où j’habitais.'],
 ['Paul a dit qu’il était fatigue.', 'Paul a dit qu’il était fatigué.'],
 ['Paul a dit qu il était fatigué.', 'Paul a dit qu’il était fatigué.'],
];
for (const [u,e] of cases){ const r=G(u,[e]); console.log(r.level.padEnd(6), JSON.stringify(u).padEnd(40), r.issues.map(x=>x.sev[0]+':'+x.msg).join(' | ')); }
