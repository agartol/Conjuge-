// Genera verbs-data.js a partir de la librería (Lefff) + correcciones a mano.
const fv = require('french-verbs');
const L = require('french-verbs-lefff/dist/conjugations.json');
const fs = require('fs');

const GROUPS = [
  { id: 'base', name: 'Essentiels', verbs: 'être avoir aller venir faire dire pouvoir vouloir devoir savoir prendre mettre voir' },
  { id: 'er', name: 'Réguliers en -er', verbs: 'parler aimer travailler habiter regarder écouter chercher trouver donner demander penser jouer arriver entrer rester tomber rentrer monter oublier étudier montrer porter laisser gagner aider utiliser raconter préparer visiter fermer expliquer décider continuer danser chanter apporter marcher rencontrer accepter refuser inviter rêver créer' },
  { id: 'ortho', name: '-er à changement orthographique', verbs: 'manger voyager nager changer commencer avancer acheter amener emmener préférer espérer répéter appeler rappeler jeter payer essayer envoyer nettoyer employer' },
  { id: 'ir', name: 'Réguliers en -ir (2e groupe)', verbs: 'finir choisir réussir grandir maigrir réfléchir remplir obéir agir' },
  { id: 'irr', name: 'Irréguliers (3e groupe)', verbs: 'partir sortir dormir sentir servir mentir ouvrir offrir découvrir souffrir courir mourir tenir obtenir devenir revenir apprendre comprendre promettre permettre attendre entendre répondre vendre perdre descendre rendre croire recevoir apercevoir boire lire écrire décrire conduire construire traduire produire connaître reconnaître paraître disparaître naître vivre suivre plaire rire sourire craindre peindre éteindre rejoindre battre convaincre interdire' },
  { id: 'pron', name: 'Pronominaux', verbs: 'se_lever se_coucher se_réveiller s’habiller se_promener se_dépêcher s’amuser se_reposer se_laver se_marier se_souvenir s’asseoir se_sentir s’appeler s’inquiéter s’occuper se_taire s’ennuyer' },
];
const ETRE = new Set('aller venir arriver partir entrer sortir rester tomber rentrer monter descendre naître mourir devenir revenir'.split(' '));
const NO_IMPE = new Set(['pouvoir', 'devoir', 'naître', 'mourir', 'apercevoir']);

// correcciones (forma canónica / variantes aceptadas separadas por |)
const OVR = {
  asseoir: {
    pres: 'assieds|assois assieds|assois assied|assoit asseyons|assoyons asseyez|assoyez asseyent|assoient',
    fut: 'assiér|assoir', subj: 'asseye|assoie asseyes|assoies asseye|assoie asseyions|assoyions asseyiez|assoyiez asseyent|assoient',
    imp: 'assey|assoy', ppr: 'asseyant|assoyant', impe: 'assieds|assois asseyons|assoyons asseyez|assoyez',
  },
  payer: { pres: 'paie|paye paies|payes paie|paye payons payez paient|payent', fut: 'paier|payer', subj: 'paie|paye paies|payes paie|paye payions payiez paient|payent', impe: 'paie|paye payons payez' },
  essayer: { pres: 'essaie|essaye essaies|essayes essaie|essaye essayons essayez essaient|essayent', fut: 'essaier|essayer', subj: 'essaie|essaye essaies|essayes essaie|essaye essayions essayiez essaient|essayent', impe: 'essaie|essaye essayons essayez' },
  pouvoir: { pres: 'peux|puis peux peut pouvons pouvez peuvent' },
  taire: { pres: 'tais tais tait taisons taisez taisent' },
};

const g = (v, t, p) => fv.getConjugation(L, v, t, p, { aux: 'AVOIR' }, false);
const out = { groups: [], verbs: {} };
const irregularFlags = {};

for (const grp of GROUPS) {
  const list = grp.verbs.split(' ').map(x => x.replace('_', ' '));
  out.groups.push({ id: grp.id, name: grp.name, verbs: list });
  for (const inf of list) {
    const refl = /^(se |s’)/.test(inf);
    const base = refl ? inf.replace(/^(se |s’)/, '') : inf;
    const P6 = t => [0, 1, 2, 3, 4, 5].map(p => g(base, t, p));
    const d = {
      g: grp.id, refl: refl ? 1 : 0, base,
      pres: P6('PRESENT'), imp: P6('IMPARFAIT'), fut: P6('FUTUR'), cond: P6('CONDITIONNEL_PRESENT'), subj: P6('SUBJONCTIF_PRESENT'),
      pp: g(base, 'PARTICIPE_PASSE', 0), ppr: g(base, 'PARTICIPE_PRESENT', 0),
      impe: NO_IMPE.has(base) ? null : [1, 3, 4].map(p => g(base, 'IMPERATIF_PRESENT', p)),
      aux: refl || ETRE.has(base) ? 'être' : 'avoir',
    };
    const o = OVR[base];
    if (o) {
      const sp = s => s.split(' ');
      if (o.pres) d.pres = sp(o.pres);
      if (o.subj) d.subj = sp(o.subj);
      if (o.impe) d.impe = sp(o.impe);
      if (o.ppr) d.ppr = o.ppr;
      if (o.fut) {
        const st = o.fut.split('|');
        const E1 = ['ai', 'as', 'a', 'ons', 'ez', 'ont'], E2 = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
        d.fut = E1.map(e => st.map(s => s + e).join('|'));
        d.cond = E2.map(e => st.map(s => s + e).join('|'));
      }
      if (o.imp) {
        const st = o.imp.split('|'), E2 = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
        d.imp = E2.map(e => st.map(s => s + e).join('|'));
      }
    }
    out.verbs[inf] = d;
  }
}

// ---- detección de tiempos irregulares (para el apartado de irregulares) ----
const first = s => s.split('|')[0];
for (const [inf, d] of Object.entries(out.verbs)) {
  const f = {};
  const nousStem = first(d.pres[3]).replace(/ons$/, '');
  const ilsStem = first(d.pres[5]).replace(/ent$/, '');
  const infNoE = d.base.replace(/re$/, 'r');
  const futStem = first(d.fut[0]).replace(/ai$/, '');
  f.fut = futStem !== infNoE;
  f.cond = f.fut;
  const impStem = first(d.imp[0]).replace(/ais$/, '');
  f.imp = impStem !== nousStem && impStem !== nousStem.replace(/e$/, '');
  const subjReg = [ilsStem + 'e', ilsStem + 'es', ilsStem + 'e', null, null, ilsStem + 'ent'];
  f.subj = [0, 1, 2, 5].some(p => first(d.subj[p]) !== subjReg[p]) || [3, 4].some(p => first(d.subj[p]) !== first(d.imp[p]).replace(/ions$/, 'ions').replace(/iez$/, 'iez'));
  const stem2 = d.base.slice(0, -2);
  f.pc = ![stem2 + 'é', stem2 + 'i', stem2 + 'u'].includes(d.pp);
  f.ger = d.ppr.split('|')[0] !== nousStem + 'ant' && d.ppr.split('|')[0] !== nousStem.replace(/e$/, '') + 'ant';
  if (d.impe) {
    const reg = [1, 3, 4].map(p => { let x = first(d.pres[p]); if (p === 1 && /e$/.test(first(d.pres[0])) && x.endsWith('es')) x = x.slice(0, -1); return x; });
    f.impe = d.impe.some((x, k) => first(x) !== reg[k]);
  }
  f.pres = d.g === 'irr' || d.g === 'base' || (d.refl && ['asseoir', 'souvenir', 'sentir', 'taire'].includes(d.base));
  d.irrVerb = f.pres ? 1 : 0;
  d.irr = Object.keys(f).filter(k => f[k]);
}

fs.writeFileSync('verbs-data.js', 'const VDATA = ' + JSON.stringify(out) + ';\nif (typeof module !== "undefined") module.exports = VDATA;\n');
console.log('verbs', Object.keys(out.verbs).length, 'bytes', fs.statSync('verbs-data.js').size);
for (const inf of ['être', 'aller', 'prendre', 'venir', 'attendre', 'recevoir', 'savoir', 'vouloir', 'finir', 'acheter', 's’asseoir', 'dire'])
  console.log(inf.padEnd(10), out.verbs[inf].irr.join(','));
