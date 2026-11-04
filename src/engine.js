// Motor de conjugación — lee VDATA (verbs-data.js). 9 tiempos.
const ENGINE = ((D) => {
  const TENSES = [
    { id: 'pres',   name: 'Présent',              dark: '#C00000', light: '#F7E0E0', ddark: '#FF7A7A' },
    { id: 'proche', name: 'Futur proche',         dark: '#E36C09', light: '#FCEDE1', ddark: '#FFA65C' },
    { id: 'fut',    name: 'Futur simple',         dark: '#00838F', light: '#E0F0F2', ddark: '#4FD0DC' },
    { id: 'cond',   name: 'Conditionnel présent', dark: '#AD1457', light: '#F5E3EB', ddark: '#F07AAE' },
    { id: 'imp',    name: 'Imparfait',            dark: '#3949AB', light: '#E7E9F5', ddark: '#97A3F0' },
    { id: 'pc',     name: 'Passé composé',        dark: '#5D4037', light: '#ECE8E7', ddark: '#C9A89C' },
    { id: 'subj',   name: 'Subjonctif présent',   dark: '#827717', light: '#F0EFE3', ddark: '#D4C84E' },
    { id: 'ger',    name: 'Gérondif',             dark: '#D84315', light: '#FAE8E3', ddark: '#FF8A65' },
    { id: 'impe',   name: 'Impératif',            dark: '#00695C', light: '#E0EDEB', ddark: '#5CC9B9' },
    { id: 'pqp',    name: 'Plus-que-parfait',     dark: '#7030A0', light: '#EEE6F4', ddark: '#C495E8', adv: 1 },
    { id: 'futa',   name: 'Futur antérieur',      dark: '#1565C0', light: '#E3EDF9', ddark: '#7FB2F0', adv: 1 },
    { id: 'condp',  name: 'Conditionnel passé',   dark: '#2E7D32', light: '#E6EFE6', ddark: '#7FCB84', adv: 1 },
  ];
  const PERS = ['je', 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'];
  const REFL = ['me', 'te', 'se', 'nous', 'vous', 'se'];
  const IMPE_P = [1, 3, 4];
  const V = D.verbs, VERBS = Object.keys(V), GROUPS = D.groups;
  const ETRE = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
  const ALLER = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
  const AVOIR = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];
  const AUX = {
    pc:    { avoir: AVOIR, 'être': ETRE },
    pqp:   { avoir: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'], 'être': ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'] },
    futa:  { avoir: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'], 'être': ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'] },
    condp: { avoir: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'], 'être': ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'] },
  };
  const VOW = /^[aeiouyâàäéèêëîïôöûùüœh]/i;
  const ELID = new Set(['je', 'me', 'te', 'se', 'de', 'que']);
  const el = (w, next) => (ELID.has(w) && VOW.test(next)) ? w.slice(0, -1) + "'" : w + ' ';
  const join = (a, b) => (a.endsWith("'") ? a + b : a.trimEnd() + ' ' + b);
  const alts = s => s.split('|');

  const available = (inf, t) => !(t === 'impe' && !V[inf].impe);
  const personsFor = t => t === 'ger' ? [0] : t === 'impe' ? [1, 3, 4] : [0, 1, 2, 3, 4, 5];
  const agree = (pp, p) => pp + ['(e)', '(e)', '(e)', '(e)s', '(e)(s)', '(e)s'][p];
  const agreeVariants = (pp, p) => {
    const o = new Set([agree(pp, p)]);
    const sg = [pp, pp + 'e'], pl = [pp.endsWith('s') ? pp : pp + 's', pp + 'es'];
    if (p <= 2) sg.forEach(x => o.add(x));
    if (p === 3 || p === 5) { pl.forEach(x => o.add(x)); o.add(pp + '(e)s'); }
    if (p === 4) { sg.concat(pl).forEach(x => o.add(x)); o.add(pp + '(e)s'); }
    return [...o];
  };
  const withRefl = (v, p, form) => v.refl ? join(el(REFL[p], form), form) : form;

  // {answer, accept[], label} o null
  function cell(inf, t, p, g) {
    const v = V[inf];
    if (!available(inf, t)) return null;
    let forms = [];
    switch (t) {
      case 'pres': case 'imp': case 'fut': case 'cond': case 'subj':
        forms = alts(v[t][p]).map(f => withRefl(v, p, f)); break;
      case 'proche': forms = [ALLER[p] + ' ' + (v.refl ? join(el(REFL[p], v.base), v.base) : v.base)]; break;
      case 'pc': case 'pqp': case 'futa': case 'condp': {
        const aux = AUX[t][v.aux][p];
        const head = v.refl ? join(el(REFL[p], aux), aux) : aux;
        forms = v.aux === 'être' ? agreeVariants(v.pp, p).map(x => head + ' ' + x) : [head + ' ' + v.pp];
        break;
      }
      case 'ger': {
        const pp = alts(v.ppr);
        forms = v.refl ? [...pp.map(x => 'en ' + join(el('se', x), x)), ...REFL.flatMap(r => pp.map(x => 'en ' + join(el(r, x), x)))] : pp.map(x => 'en ' + x);
        break;
      }
      case 'impe': {
        const k = IMPE_P.indexOf(p); if (k < 0) return null;
        forms = alts(v.impe[k]).map(f => v.refl ? f + '-' + ['toi', 'nous', 'vous'][k] : f);
        break;
      }
    }
    let lab = label(t, p, forms[0]), full = forms[0], gtag = '';
    // Temps composés avec être : si on demande un genre (g = 'm' | 'f'), seule la forme accordée est juste.
    if (g && needsG(inf, t)) {
      const pp = v.pp, f = g === 'f';
      const form = p <= 2 ? (f ? pp + 'e' : pp) : (f ? pp + 'es' : (pp.endsWith('s') ? pp : pp + 's'));
      const aux = AUX[t][v.aux][p], head = v.refl ? join(el(REFL[p], aux), aux) : aux;
      forms = [head + ' ' + form]; full = forms[0]; gtag = (f ? 'f.' : 'm.') + (p === 4 ? ' pl.' : '');
      if (p === 2) lab = f ? 'elle' : 'il';
      if (p === 5) lab = f ? 'elles' : 'ils';
    }
    const accept = new Set(forms);
    forms.forEach(f => { if (f.includes('aît')) accept.add(f.replace(/aît/g, 'ait')); });
    const answer = forms[0];
    return { answer, full, accept: [...accept], label: lab, g: gtag };
  }
  const COMP = new Set(['pc', 'pqp', 'futa', 'condp']);
  const needsG = (inf, t) => COMP.has(t) && V[inf].aux === 'être';
  function label(t, p, ans) {
    if (t === 'ger') return 'gérondif';
    if (t === 'impe') return '(' + PERS[p].split(' ')[0] + ')';
    const v = VOW.test(ans);
    if (t === 'subj') return [v ? "que j'" : 'que je', 'que tu', "qu'il / qu'elle", 'que nous', 'que vous', "qu'ils / qu'elles"][p];
    return p === 0 ? (v ? "j'" : 'je') : PERS[p];
  }
  return { TENSES, PERS, V, VERBS, GROUPS, cell, available, personsFor, needsG };
})(typeof VDATA !== 'undefined' ? VDATA : require('./verbs-data.js'));
if (typeof module !== 'undefined') module.exports = ENGINE;
