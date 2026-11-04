// Grammaire : fiches et exercices (contenu original, d'après le programme du cours).
// Types d'exercice :
//   { k: 'g', s, a, w }      trou(s) à compléter : « ___ » dans s ; a = réponses acceptées (un tableau par trou s'il y en a plusieurs)
//   { k: 'q', s, o, c, w }   choix : o = options, c = index de la bonne réponse (les options sont mélangées à l'affichage)
//   { k: 't', i, f, a, w }   transformation : consigne i, phrase de départ f, phrases acceptées a
const BANK3 = {
  groups: [
    { id: 'pronoms', name: 'Pronoms', intro: 'Choisis un thème : lis la fiche, puis entraîne-toi. Les exercices que tu rates reviennent plus souvent.' },
    { id: 'connecteurs', name: 'Connecteurs logiques', intro: 'Cause, conséquence, opposition, concession et temps : les mots qui relient les idées, indispensables pour la production écrite du DELF B1.' }
  ],
  topics: [
    /* ======================= PRONOMS ======================= */
    {
      id: 'relatifs', g: 'pronoms', name: 'Pronoms relatifs : qui, que, où, dont',
      tip: 'Regarde le verbe qui suit : sans sujet → qui ; avec un sujet mais sans COD → que ; construit avec « de » → dont ; un lieu ou un moment → où.',
      fiche: [
        ['qui', 'Sujet du verbe qui suit.', ['J’ai un ami qui habite à Lyon.', 'Prends le bus qui s’arrête devant la fac.']],
        ['que (qu’)', 'COD du verbe qui suit : après que, il y a toujours un sujet.', ['Le livre que je lis est passionnant.', 'La maison qu’ils ont achetée est ancienne.']],
        ['où', 'Complément de lieu ou de temps.', ['La ville où je suis né est au bord de la mer.', 'Je me souviens du jour où on s’est rencontrés.']],
        ['dont', 'Remplace « de + nom » : parler de, avoir besoin de, être fier de, se souvenir de, le nom de…', ['Le film dont je t’ai parlé sort demain.', 'J’ai une collègue dont le mari est pilote.']]
      ],
      note: 'Avec que + passé composé, le participe s’accorde avec le nom remplacé : les photos que j’ai prises.',
      links: [['Pronoms relatifs (francaisfacile.com)', 'https://www.francaisfacile.com/exercices/exercice-francais-2/exercice-francais-12937.php']],
      ex: [
        { k: 'q', s: 'C’est une région ___ il fait beau toute l’année.', o: ['où', 'qui', 'que', 'dont'], c: 0, w: 'Lieu → où.' },
        { k: 'q', s: 'L’architecte ___ a dessiné ce musée est japonais.', o: ['qui', 'que', 'où', 'dont'], c: 0, w: 'Le verbe « a dessiné » n’a pas de sujet : qui est le sujet.' },
        { k: 'q', s: 'Voici le dictionnaire ___ j’ai besoin pour mon cours.', o: ['dont', 'que', 'qui', 'où'], c: 0, w: 'Avoir besoin de quelque chose → dont.' },
        { k: 'q', s: 'La série ___ tu regardes est très populaire.', o: ['que', 'qui', 'dont', 'où'], c: 0, w: '« tu » est le sujet ; la série est le COD de regardes → que.' },
        { k: 'q', s: 'Je n’oublierai jamais l’année ___ j’ai vécu à Montréal.', o: ['où', 'que', 'dont', 'qui'], c: 0, w: 'Où s’emploie aussi pour un moment : l’année où, le jour où.' },
        { k: 'q', s: 'C’est un chanteur ___ tout le monde connaît.', o: ['que', 'qui', 'dont', 'où'], c: 0, w: '« tout le monde » est le sujet ; le chanteur est le COD de connaît → que.' },
        { k: 'q', s: 'J’ai un voisin ___ la fille joue au basket en équipe nationale.', o: ['dont', 'que', 'qui', 'où'], c: 0, w: 'La fille de mon voisin → dont.' },
        { k: 'q', s: 'C’est le projet ___ nous sommes le plus fiers.', o: ['dont', 'que', 'où', 'qui'], c: 0, w: 'Être fier de quelque chose → dont.' },
        { k: 'g', s: 'Les étudiants ___ arrivent en retard attendent la pause.', a: ['qui'], w: 'Arrivent n’a pas d’autre sujet → qui.' },
        { k: 'g', s: 'Le quartier ___ nous habitons est très calme.', a: ['où'], w: 'Lieu → où.' },
        { k: 'g', s: 'L’appartement ___ nous avons visité hier est trop cher.', a: ['que'], w: 'Nous est le sujet, l’appartement est le COD de « avons visité » → que.' },
        { k: 'g', s: 'C’est un roman ___ on parle beaucoup en ce moment.', a: ['dont'], w: 'Parler de quelque chose → dont.' },
        { k: 'g', s: 'Le film ___ on a vu samedi était un peu long.', a: ['qu’'], w: 'Devant une voyelle, que devient qu’ (qu’on, qu’il, qu’elle). Qui ne s’élide jamais.' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif.', f: 'J’ai lu un article. Cet article parle des drones.', a: ['J’ai lu un article qui parle des drones.'], w: 'Cet article est sujet de « parle » → qui.' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif.', f: 'Le musée est fermé. Nous voulions visiter ce musée.', a: ['Le musée que nous voulions visiter est fermé.'], w: 'Ce musée est COD de « visiter » → que, placé juste après le nom.' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif.', f: 'Voici le lycée. J’ai fait mes études dans ce lycée.', a: ['Voici le lycée où j’ai fait mes études.'], w: 'Dans ce lycée = lieu → où.' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif.', f: 'C’est une exposition. Tout le monde parle de cette exposition.', a: ['C’est une exposition dont tout le monde parle.'], w: 'Parler de cette exposition → dont.' }
      ]
    },
    {
      id: 'relief', g: 'pronoms', name: 'La mise en relief : ce qui, ce que, ce dont… c’est',
      tip: 'Ce qui + verbe ; ce que + sujet + verbe ; ce dont + verbe construit avec « de ». Puis c’est (ou ce sont devant un pluriel).',
      fiche: [
        ['Ce qui… c’est', 'Ce qui est le sujet du verbe.', ['Ce qui me plaît, c’est la musique.', 'Ce qui m’inquiète, c’est le prix.']],
        ['Ce que… c’est', 'Ce que est le COD : il est suivi d’un sujet.', ['Ce que j’aime, c’est voyager.', 'Ce qu’elle préfère, c’est le cinéma.']],
        ['Ce dont… c’est', 'Pour les verbes construits avec de (avoir besoin de, rêver de, parler de…).', ['Ce dont j’ai besoin, c’est de repos.', 'Ce dont il rêve, c’est d’un voyage au Japon.']],
        ['C’est… qui / C’est… que', 'Pour insister sur un sujet (qui) ou sur un complément (que).', ['C’est Marie qui a gagné.', 'C’est à Lyon que je l’ai rencontré.']]
      ],
      note: 'Devant un nom pluriel, on écrit ce sont (registre soutenu) ; à l’oral, c’est est aussi accepté : Ce que je préfère, ce sont les petits cafés.',
      links: [['La mise en relief (lepointdufle.net)', 'https://www.lepointdufle.net/ressources_fle/pronoms_relatifs.htm']],
      ex: [
        { k: 'g', s: '___ m’énerve, ___ le bruit des motos.', a: [['ce qui'], ['c’est']], w: 'M’énerve n’a pas de sujet → ce qui.' },
        { k: 'g', s: '___ je rêve, ___ d’une maison à la campagne.', a: [['ce dont'], ['c’est']], w: 'Rêver de quelque chose → ce dont. On garde le de après c’est.' },
        { k: 'g', s: '___ elle cherche, ___ un appartement près de la fac.', a: [['ce qu’'], ['c’est']], w: 'Elle est le sujet → ce que, qui devient ce qu’ devant une voyelle.' },
        { k: 'g', s: '___ me fait peur, ___ les orages.', a: [['ce qui'], ['ce sont', 'c’est']], w: 'Ce qui + verbe ; devant un pluriel, ce sont (ou c’est à l’oral).' },
        { k: 'g', s: '___ nous avons besoin, ___ de temps.', a: [['ce dont'], ['c’est']], w: 'Avoir besoin de → ce dont.' },
        { k: 'g', s: '___ je préfère à Valence, ___ la plage de la Malvarrosa.', a: [['ce que'], ['c’est']], w: 'Je est le sujet de préfère → ce que.' },
        { k: 'g', s: '___ intéresse les jeunes, ___ les réseaux sociaux.', a: [['ce qui'], ['ce sont', 'c’est']], w: 'Intéresse n’a pas de sujet → ce qui.' },
        { k: 'g', s: '___ il se plaint, ___ du bruit des voisins.', a: [['ce dont'], ['c’est']], w: 'Se plaindre de quelque chose → ce dont.' },
        { k: 'q', s: 'C’est Paul ___ a préparé ce délicieux gâteau.', o: ['qui', 'que', 'dont'], c: 0, w: 'On insiste sur le sujet → c’est… qui.' },
        { k: 'q', s: 'C’est à Lyon ___ j’ai fait mes études.', o: ['que', 'où', 'qui'], c: 0, w: 'On insiste sur un complément → c’est… que (même pour un lieu).' },
        { k: 'q', s: 'C’est toi ___ as raison.', o: ['qui', 'que', 'ce qui'], c: 0, w: 'C’est toi qui as : le verbe s’accorde avec toi.' },
        { k: 't', i: 'Mets en relief le complément avec « ce que… c’est ».', f: 'J’adore la cuisine italienne.', a: ['Ce que j’adore, c’est la cuisine italienne.'], w: 'La cuisine italienne est le COD → ce que.' },
        { k: 't', i: 'Mets en relief le sujet avec « ce qui… c’est ».', f: 'Le mensonge m’énerve.', a: ['Ce qui m’énerve, c’est le mensonge.'], w: 'Le mensonge est le sujet → ce qui.' },
        { k: 't', i: 'Mets en relief avec « ce dont… c’est ».', f: 'J’ai besoin d’une semaine de vacances.', a: ['Ce dont j’ai besoin, c’est d’une semaine de vacances.'], w: 'Avoir besoin de → ce dont ; on garde de (d’) après c’est.' },
        { k: 't', i: 'Insiste sur le sujet avec « c’est… qui ».', f: 'Mercedes a créé ce blog.', a: ['C’est Mercedes qui a créé ce blog.'], w: 'C’est + sujet + qui + verbe.' }
      ]
    },
    {
      id: 'codcoi', g: 'pronoms', name: 'Pronoms COD et COI',
      tip: 'Verbe + quelqu’un / quelque chose sans préposition → le, la, les. Verbe + à + personne → lui, leur. Le pronom se place devant le verbe conjugué, devant l’auxiliaire ou devant l’infinitif.',
      fiche: [
        ['COD', 'me, te, le / la (l’), nous, vous, les : le verbe se construit sans préposition.', ['Je regarde la télé. → Je la regarde.', 'Tu connais mes parents ? → Tu les connais ?']],
        ['COI', 'me, te, lui, nous, vous, leur : verbe + à + personne (parler, téléphoner, répondre, écrire, donner, dire, offrir, demander…).', ['Je parle à Marie. → Je lui parle.', 'Il téléphone à ses parents. → Il leur téléphone.']],
        ['Place', 'Devant le verbe conjugué ; au passé composé, devant l’auxiliaire ; avec un infinitif, devant l’infinitif.', ['Je l’ai vu hier.', 'Je vais l’appeler ce soir.', 'Je ne lui ai pas répondu.']],
        ['Impératif', 'Affirmatif : après le verbe, avec un trait d’union (me → moi). Négatif : devant le verbe.', ['Regarde-la ! Donne-moi ton numéro.', 'Ne la regarde pas !']],
        ['Accord', 'Au passé composé avec avoir, le participe s’accorde avec un COD placé avant.', ['Ces photos ? Je les ai prises à Paris.']]
      ],
      note: 'Attention : leur (pronom) ne prend jamais de -s. Je leur parle ≠ leurs livres.',
      links: [['Le, la, les, lui, leur (avosplumes.org)', 'https://www.avosplumes.org/students/exercises/le-la-les-lui-leur/']],
      ex: [
        { k: 'g', s: 'Tu connais Julie ? — Oui, je ___ connais depuis le lycée.', a: ['la'], w: 'Connaître quelqu’un (sans préposition), féminin → la.' },
        { k: 'g', s: 'Tu as écrit à tes grands-parents ? — Oui, je ___ ai écrit hier.', a: ['leur'], w: 'Écrire à + personnes au pluriel → leur.' },
        { k: 'g', s: 'Tu téléphones à Marc ce soir ? — Oui, je ___ téléphone à 20 heures.', a: ['lui'], w: 'Téléphoner à + une personne → lui.' },
        { k: 'g', s: 'Ces baskets ? Je ___ ai achetées en soldes.', a: ['les'], w: 'Acheter quelque chose → COD les ; le participe s’accorde : achetées.' },
        { k: 'g', s: 'Tu me prêtes ton vélo ? — Oui, je ___ le prête.', a: ['te'], w: 'Prêter quelque chose à quelqu’un : à toi → te.' },
        { k: 'g', s: 'Mon chef ? Je ___ ai demandé deux jours de congé.', a: ['lui'], w: 'Demander quelque chose à quelqu’un → lui.' },
        { k: 'g', s: 'Ce documentaire, tu ___ as vu ?', a: ['l’'], w: 'Le devient l’ devant une voyelle (l’as).' },
        { k: 'g', s: 'Les enfants ? Je ___ attends devant l’école.', a: ['les'], w: 'Attendre quelqu’un (sans préposition) → les.' },
        { k: 'q', s: 'Tu parles à tes voisins ? — Non, je ne ___ parle jamais.', o: ['leur', 'les', 'lui'], c: 0, w: 'Parler à + plusieurs personnes → leur.' },
        { k: 'q', s: 'La lettre ? Je ___ ai envoyée lundi.', o: ['l’', 'la', 'lui'], c: 0, w: 'La devient l’ devant une voyelle ; envoyée s’accorde avec la lettre.' },
        { k: 'q', s: 'Tes clés ? Je les ai ___ dans ton sac.', o: ['mises', 'mis', 'mise'], c: 0, w: 'Les (= les clés, féminin pluriel) est placé avant → mises.' },
        { k: 'q', s: 'Ta sœur ? Je vais ___ inviter à mon anniversaire.', o: ['l’', 'lui', 'la'], c: 0, w: 'Inviter quelqu’un → COD ; la devient l’ devant une voyelle, et le pronom se place devant l’infinitif : l’inviter.' },
        { k: 't', i: 'Remplace « le gâteau » par un pronom.', f: 'Je vais préparer le gâteau.', a: ['Je vais le préparer.'], w: 'Avec un infinitif, le pronom se place devant l’infinitif.' },
        { k: 't', i: 'Remplace « à Sophie » par un pronom.', f: 'Nous avons offert un livre à Sophie.', a: ['Nous lui avons offert un livre.'], w: 'Offrir à quelqu’un → lui, devant l’auxiliaire. Pas d’accord avec un COI.' },
        { k: 't', i: 'Mets à l’impératif affirmatif et remplace « ta mère » par un pronom.', f: 'Tu appelles ta mère.', a: ['Appelle-la !', 'Appelle-la.'], w: 'Impératif affirmatif : verbe-trait d’union-pronom ; appelle sans -s.' },
        { k: 't', i: 'Mets la phrase à la forme négative.', f: 'Je l’ai vu au concert.', a: ['Je ne l’ai pas vu au concert.'], w: 'La négation encadre le pronom et l’auxiliaire : ne l’ai pas.' }
      ]
    },
    {
      id: 'eny', g: 'pronoms', name: 'Les pronoms EN et Y',
      tip: 'Y remplace un lieu ou « à + chose ». EN remplace « de + nom », un partitif (du, de la, des) ou une quantité (le nombre reste).',
      fiche: [
        ['Y : un lieu', 'Avec à, en, dans, chez, sur…', ['Tu vas à Paris ? — Oui, j’y vais demain.', 'Il est chez lui ? — Oui, il y est.']],
        ['Y : à + chose', 'Penser à, s’intéresser à, répondre à, participer à… (pour une personne : à lui, à elle).', ['Tu penses à ton examen ? — Oui, j’y pense.', 'Tu penses à ta sœur ? — Oui, je pense à elle.']],
        ['EN : de + nom', 'Venir de, parler de, avoir besoin de, s’occuper de…', ['Tu reviens de la plage ? — Oui, j’en reviens.', 'Il a besoin de son ordinateur ? — Oui, il en a besoin.']],
        ['EN : quantité', 'Avec du, de la, des, ou un nombre / une quantité (le nombre reste à la fin).', ['Tu veux du café ? — Oui, j’en veux.', 'Tu as des frères ? — Oui, j’en ai deux.', 'Il y a beaucoup de monde ? — Oui, il y en a beaucoup.']],
        ['Place', 'Comme les autres pronoms. À l’impératif affirmatif, le -s revient devant y et en.', ['Je n’y vais pas.', 'Vas-y ! Manges-en !']]
      ],
      note: 'Avec en, le participe passé ne s’accorde pas : Des pommes ? J’en ai acheté.',
      links: [],
      ex: [
        { k: 'g', s: 'Tu vas souvent au théâtre ? — Oui, j’___ vais une fois par mois.', a: ['y'], w: 'Au théâtre = lieu → y.' },
        { k: 'g', s: 'Tu bois du thé le matin ? — Oui, j’___ bois une tasse.', a: ['en'], w: 'Du thé = partitif → en ; la quantité (une tasse) reste.' },
        { k: 'g', s: 'Combien de cousins as-tu ? — J’___ ai six.', a: ['en'], w: 'Quantité → en + le nombre à la fin.' },
        { k: 'g', s: 'Tu penses à tes vacances ? — Oui, j’___ pense tout le temps.', a: ['y'], w: 'Penser à + chose → y.' },
        { k: 'g', s: 'Elle revient de Madrid ? — Oui, elle ___ revient ce soir.', a: ['en'], w: 'Revenir de + lieu → en.' },
        { k: 'g', s: 'Vous habitez à Valence depuis longtemps ? — Oui, nous ___ habitons depuis 2019.', a: ['y'], w: 'À Valence = lieu → y.' },
        { k: 'g', s: 'Tu as besoin de ton dictionnaire ? — Non, je n’___ ai pas besoin.', a: ['en'], w: 'Avoir besoin de → en.' },
        { k: 'g', s: 'Il s’intéresse à l’architecture ? — Oui, il s’___ intéresse beaucoup.', a: ['y'], w: 'S’intéresser à + chose → y.' },
        { k: 'q', s: 'Tu as parlé du projet à la prof ? — Oui, je lui ___ ai parlé.', o: ['en', 'y', 'le'], c: 0, w: 'Parler de quelque chose → en (et lui pour « à la prof »).' },
        { k: 'q', s: 'Tu penses à ta grand-mère ? — Oui, je pense souvent ___.', o: ['à elle', 'y', 'lui'], c: 0, w: 'Penser à + personne → à lui / à elle, pas y.' },
        { k: 'q', s: 'Il reste du pain ? — Non, il n’y ___ a plus.', o: ['en', 'y', 'le'], c: 0, w: 'Du pain = partitif → en ; il n’y en a plus.' },
        { k: 'q', s: 'Va à la pharmacie ! → ___ !', o: ['Vas-y', 'Va-y', 'Y va'], c: 0, w: 'À l’impératif, le -s revient devant y : vas-y.' },
        { k: 'q', s: 'Des cerises ? J’en ai ___ deux kilos.', o: ['acheté', 'achetées', 'achetés'], c: 0, w: 'Avec en, pas d’accord du participe.' },
        { k: 't', i: 'Remplace « des pommes » par un pronom.', f: 'J’ai acheté des pommes au marché.', a: ['J’en ai acheté au marché.'], w: 'Des + nom → en, devant l’auxiliaire, sans accord.' },
        { k: 't', i: 'Remplace « à la bibliothèque » par un pronom.', f: 'Je vais à la bibliothèque cet après-midi.', a: ['J’y vais cet après-midi.'], w: 'Lieu → y ; je devient j’ devant y.' },
        { k: 't', i: 'Réponds à la forme négative avec « en ».', f: 'Vous avez des animaux ?', a: ['Non, nous n’en avons pas.', 'Non, je n’en ai pas.', 'Non, on n’en a pas.'], w: 'Ne + en + verbe + pas.' }
      ]
    },
    {
      id: 'toniques', g: 'pronoms', name: 'Les pronoms toniques',
      tip: 'moi, toi, lui, elle, nous, vous, eux, elles : pour insister, après c’est, après une préposition, dans les réponses courtes et après que dans une comparaison.',
      fiche: [
        ['Formes', 'moi, toi, lui, elle, nous, vous, eux, elles.', []],
        ['Pour insister', 'Devant ou après le sujet.', ['Moi, je préfère le thé.', 'Lui, il ne vient jamais.']],
        ['Après c’est', '', ['Qui a appelé ? — C’est elle.', 'C’est nous qui avons gagné.']],
        ['Après une préposition', 'avec, pour, chez, sans, avant, après, à côté de…', ['Je dîne chez eux.', 'Ce cadeau est pour toi.', 'Je pense à lui.']],
        ['Réponses courtes, aussi, non plus', '', ['Qui veut un café ? — Moi !', 'J’aime le jazz. — Moi aussi.', 'Je n’aime pas le froid. — Moi non plus.']],
        ['Comparaison et double sujet', '', ['Il est plus grand que moi.', 'Paul et moi, nous partons demain.']]
      ],
      note: '',
      links: [['Pronoms toniques (wordwall.net)', 'https://wordwall.net/fr/resource/3221529/pronoms-toniques-et-langues-a11']],
      ex: [
        { k: 'g', s: '___, je m’appelle Lucas. Et toi ?', a: ['moi'], w: 'Pour insister sur je → moi.' },
        { k: 'g', s: 'Ce bouquet est pour ___, maman !', a: ['toi'], w: 'Après une préposition (pour) → pronom tonique.' },
        { k: 'g', s: 'Mes cousins ? Je passe Noël chez ___.', a: ['eux'], w: 'Chez + pronom tonique ; masculin pluriel → eux.' },
        { k: 'g', s: 'Qui a peint ce tableau ? C’est ___ (Annick) !', a: ['elle'], w: 'Après c’est → pronom tonique.' },
        { k: 'g', s: 'Mon frère est plus âgé que ___ (je).', a: ['moi'], w: 'Après que dans une comparaison → pronom tonique.' },
        { k: 'g', s: 'J’adore le chocolat. — ___ aussi ! (nous)', a: ['nous'], w: 'Réponse courte avec aussi → pronom tonique.' },
        { k: 'g', s: 'Je ne mange pas de viande. — ___ non plus. (je)', a: ['moi'], w: 'Accord avec une phrase négative → moi non plus.' },
        { k: 'g', s: 'Mes amies ? Je pense souvent à ___.', a: ['elles'], w: 'Penser à + personne → à + pronom tonique.' },
        { k: 'g', s: 'Paul et ___ (je), nous allons au concert samedi.', a: ['moi'], w: 'Dans un sujet double, on utilise le pronom tonique.' },
        { k: 'q', s: 'Tu viens au cinéma avec ___ ?', o: ['nous', 'on', 'notre'], c: 0, w: 'Après une préposition → nous (jamais on).' },
        { k: 'q', s: 'C’est ___ qui avez gagné le concours !', o: ['vous', 'nous', 'eux'], c: 0, w: 'Le verbe « avez » s’accorde avec vous.' },
        { k: 'q', s: 'Mon grand-père ? Je pense beaucoup à ___.', o: ['lui', 'le', 'y'], c: 0, w: 'Penser à + personne → à lui.' },
        { k: 'q', s: 'Ils sont partis sans ___ (Julie et Marie).', o: ['elles', 'eux', 'les'], c: 0, w: 'Julie et Marie = féminin pluriel → elles.' },
        { k: 't', i: 'Insiste sur le sujet avec un pronom tonique en début de phrase.', f: 'Je préfère la montagne.', a: ['Moi, je préfère la montagne.'], w: 'Pronom tonique + virgule + sujet.' }
      ]
    },
    {
      id: 'on', g: 'pronoms', name: 'Le pronom ON',
      tip: 'On se conjugue toujours à la 3e personne du singulier. Il peut vouloir dire « nous », « les gens » ou « quelqu’un ».',
      fiche: [
        ['On = nous', 'Très fréquent à l’oral. Possessif : notre / nos ; pronom tonique : nous.', ['On va au cinéma ce soir ?', 'On a pris notre voiture.']],
        ['On = les gens', 'Une vérité générale.', ['En France, on dîne vers 20 heures.']],
        ['On = quelqu’un', 'Une personne inconnue.', ['On a volé mon vélo !', 'On frappe à la porte.']],
        ['Accord', 'Le verbe est au singulier, mais quand on = nous, le participe et l’adjectif peuvent s’accorder.', ['On est arrivés en retard.', 'On est fatiguées (nous, les filles).']]
      ],
      note: 'À la forme négative, n’oublie pas le n’ devant une voyelle : on n’a pas faim (on entend la liaison).',
      links: [['Le pronom ON (allofle.com)', 'https://allofle.com/le-pronom-personnel-on-grammaire-du-niveau-debutant/']],
      ex: [
        { k: 'g', s: 'On ___ (aller) à la piscine demain ?', a: ['va'], w: 'On → 3e personne du singulier : on va.' },
        { k: 'g', s: 'Au Japon, on ___ (manger) avec des baguettes.', a: ['mange'], w: 'On = les gens ; verbe au singulier.' },
        { k: 'g', s: 'Après le match, on ___ (être) très fatigués.', a: ['est'], w: 'On est ; l’adjectif s’accorde avec le sens (nous).' },
        { k: 'g', s: 'Ce soir, on ___ (faire) une fête chez nous.', a: ['fait'], w: 'Faire → on fait.' },
        { k: 'g', s: 'On ___ (pouvoir) entrer, s’il vous plaît ?', a: ['peut'], w: 'Pouvoir → on peut.' },
        { k: 'q', s: 'Nous, on ___ souvent au restaurant le dimanche.', o: ['va', 'allons', 'vont'], c: 0, w: 'Le sujet du verbe est on → va.' },
        { k: 'q', s: 'On a oublié ___ parapluies dans le train.', o: ['nos', 'leurs', 'ses'], c: 0, w: 'On = nous → nos.' },
        { k: 'q', s: 'On ___ a pas compris la question.', o: ['n’', 'ne', '—'], c: 0, w: 'La négation est obligatoire à l’écrit : on n’a pas.' },
        { k: 'q', s: '« On parle français au Québec. » Ici, on veut dire :', o: ['les gens en général', 'nous', 'quelqu’un d’inconnu'], c: 0, w: 'Vérité générale → les gens.' },
        { k: 'q', s: '« On a frappé à la porte. » Ici, on veut dire :', o: ['quelqu’un d’inconnu', 'nous', 'les gens en général'], c: 0, w: 'Une personne qu’on ne connaît pas → quelqu’un.' },
        { k: 't', i: 'Remplace « nous » par « on ».', f: 'Nous partons demain matin.', a: ['On part demain matin.'], w: 'On part (3e personne du singulier).' },
        { k: 't', i: 'Remplace « nous » par « on ».', f: 'Nous sommes allés à la plage.', a: ['On est allés à la plage.', 'On est allé à la plage.'], w: 'On est allés : l’auxiliaire est au singulier ; le participe peut s’accorder au pluriel.' },
        { k: 't', i: 'Remplace « nous » par « on ».', f: 'Nous avons fini nos devoirs.', a: ['On a fini nos devoirs.'], w: 'On a fini ; le possessif reste nos.' }
      ]
    },
    {
      id: 'demonstratifs', g: 'pronoms', name: 'Adjectifs et pronoms démonstratifs',
      tip: 'Adjectif : ce / cet / cette / ces + nom. Pronom : celui, celle, ceux, celles, jamais seul : + -ci / -là, + de, + qui / que / dont.',
      fiche: [
        ['Adjectifs', 'ce (masculin), cet (masculin devant voyelle ou h muet), cette (féminin), ces (pluriel).', ['ce livre, cet hôtel, cette ville, ces enfants']],
        ['Pronoms', 'celui (m. s.), celle (f. s.), ceux (m. pl.), celles (f. pl.).', []],
        ['+ -ci / -là', 'Pour choisir entre deux choses.', ['Quelle robe ? Celle-ci ou celle-là ?']],
        ['+ de', 'Pour indiquer à qui appartient quelque chose.', ['Ce n’est pas ma voiture, c’est celle de mon frère.']],
        ['+ qui / que / dont', 'Avec une proposition relative.', ['Ceux qui ont fini peuvent sortir.', 'Le gâteau que je préfère, c’est celui que fait ma grand-mère.']],
        ['Neutres', 'ceci, cela, ça (oral) : pour une idée ou une chose non nommée.', ['Je n’aime pas ça.', 'Cela me paraît difficile.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'J’aime beaucoup ___ hôtel.', a: ['cet'], w: 'Hôtel commence par un h muet → cet.' },
        { k: 'g', s: '___ chaussures sont trop chères pour moi.', a: ['ces'], w: 'Pluriel → ces.' },
        { k: 'g', s: '___ université est l’une des plus anciennes d’Europe.', a: ['cette'], w: 'Université est féminin → cette.' },
        { k: 'g', s: 'Quel stylo veux-tu ? ___-ci ou celui-là ?', a: ['celui'], w: 'Stylo, masculin singulier → celui.' },
        { k: 'g', s: 'Ce n’est pas mon portable, c’est ___ de ma sœur.', a: ['celui'], w: 'Le portable (m. s.) → celui de.' },
        { k: 'g', s: 'Mes photos sont belles, mais ___ de Julien sont magnifiques.', a: ['celles'], w: 'Les photos (f. pl.) → celles de.' },
        { k: 'g', s: '___ qui veulent participer doivent s’inscrire avant vendredi.', a: ['ceux'], w: 'Les personnes en général (m. pl.) → ceux qui.' },
        { k: 'g', s: 'Tu préfères quelle maison ? — ___ qui a un grand jardin.', a: ['celle'], w: 'La maison (f. s.) → celle qui.' },
        { k: 'q', s: 'Ces exercices sont faciles, mais ___ de demain seront plus difficiles.', o: ['ceux', 'celles', 'ces'], c: 0, w: 'Les exercices (m. pl.) → ceux.' },
        { k: 'q', s: 'Parmi tous ces gâteaux, ___ au chocolat est le meilleur.', o: ['celui', 'celle', 'ce'], c: 0, w: 'Le gâteau (m. s.) → celui.' },
        { k: 'q', s: 'Je n’ai jamais dit ___ !', o: ['ça', 'celui', 'ce'], c: 0, w: 'Une idée non nommée → pronom neutre ça (cela).' },
        { k: 'q', s: 'De toutes les villes que j’ai visitées, ___ que je préfère, c’est Lyon.', o: ['celle', 'celui', 'ce'], c: 0, w: 'La ville (f. s.) → celle que.' }
      ]
    },
    {
      id: 'possessifs', g: 'pronoms', name: 'Adjectifs et pronoms possessifs',
      tip: 'Le possessif s’accorde avec la chose possédée, pas avec le possesseur. Pronoms : le mien, la mienne, les miens, les miennes… le nôtre, le leur.',
      fiche: [
        ['Adjectifs', 'mon, ton, son (m.) · ma, ta, sa (f.) · mes, tes, ses (pl.) · notre, votre, leur · nos, vos, leurs.', ['mon amie (devant une voyelle, ma → mon)']],
        ['Pronoms (un possesseur)', 'le mien / la mienne / les miens / les miennes ; le tien… ; le sien…', ['C’est ta voiture ? — Oui, c’est la mienne.']],
        ['Pronoms (plusieurs possesseurs)', 'le nôtre / la nôtre / les nôtres ; le vôtre… ; le leur / la leur / les leurs.', ['Leur maison est grande, la nôtre est petite.']],
        ['Avec à et de', 'à + le → au, de + le → du.', ['Je pense au mien.', 'Il parle du sien.']]
      ],
      note: 'Son / sa / ses dépendent du nom qui suit : Paul aime sa mère ; Marie aime son père.',
      links: [],
      ex: [
        { k: 'g', s: 'C’est ta voiture ? — Oui, c’est la ___.', a: ['mienne'], w: 'La voiture (f. s.), à moi → la mienne.' },
        { k: 'g', s: 'Ce sont les clés de Paul ? — Oui, ce sont les ___.', a: ['siennes'], w: 'Les clés (f. pl.), à lui → les siennes.' },
        { k: 'g', s: 'Notre appartement est petit. Et le ___ ? (vous)', a: ['vôtre'], w: 'L’appartement (m. s.), à vous → le vôtre (avec accent).' },
        { k: 'g', s: 'J’ai oublié mon parapluie. Tu peux me prêter le ___ ?', a: ['tien'], w: 'Le parapluie (m. s.), à toi → le tien.' },
        { k: 'g', s: 'Leurs enfants sont à l’école, et les ___ ? (nous)', a: ['nôtres'], w: 'Les enfants (pl.), à nous → les nôtres.' },
        { k: 'g', s: 'Ma sœur s’appelle Ana. Et la ___, comment elle s’appelle ? (tu)', a: ['tienne'], w: 'La sœur (f. s.), à toi → la tienne.' },
        { k: 'g', s: 'Ces livres sont à Marie et à Paul ? — Oui, ce sont les ___.', a: ['leurs'], w: 'Plusieurs possesseurs, pluriel → les leurs.' },
        { k: 'g', s: 'C’est ___ école préférée. (je)', a: ['mon'], w: 'Devant un nom féminin qui commence par une voyelle, ma → mon.' },
        { k: 'g', s: 'Les étudiants ont rendu ___ rédactions au professeur.', a: ['leurs'], w: 'Plusieurs possesseurs et plusieurs rédactions → leurs.' },
        { k: 'q', s: 'Pierre et Julie adorent ___ maison.', o: ['leur', 'leurs', 'sa'], c: 0, w: 'Plusieurs possesseurs, une seule maison → leur.' },
        { k: 'q', s: 'Ma voiture est rouge ; ___ est bleue. (Marc)', o: ['la sienne', 'le sien', 'la leur'], c: 0, w: 'La voiture (f. s.), à lui → la sienne.' },
        { k: 'q', s: 'Votre fils et ___ jouent ensemble tous les jours. (nous)', o: ['le nôtre', 'notre', 'les nôtres'], c: 0, w: 'Le fils (m. s.), à nous → le nôtre.' },
        { k: 'q', s: 'Paul téléphone à ___ mère tous les soirs.', o: ['sa', 'son', 'leur'], c: 0, w: 'Mère est féminin → sa (même si Paul est un homme).' }
      ]
    },

    /* ======================= CONNECTEURS ======================= */
    {
      id: 'cause', g: 'connecteurs', name: 'Exprimer la cause',
      tip: 'parce que, car, comme, puisque + phrase ; grâce à (positif), à cause de (négatif), en raison de + nom.',
      fiche: [
        ['parce que', 'La plus courante ; répond à « pourquoi ? ».', ['Je ne viens pas parce que je suis malade.']],
        ['car', 'Surtout à l’écrit ; jamais en début de phrase.', ['Le magasin est fermé, car c’est un jour férié.']],
        ['comme', 'Toujours en début de phrase.', ['Comme il pleuvait, nous sommes restés à la maison.']],
        ['puisque', 'Cause évidente ou déjà connue.', ['Puisque tu as faim, mange quelque chose !']],
        ['grâce à + nom', 'Cause positive.', ['J’ai réussi grâce à tes conseils.']],
        ['à cause de + nom', 'Cause négative.', ['Le vol est annulé à cause de la tempête.']],
        ['en raison de + nom', 'Registre formel (annonces, administration).', ['Le musée est fermé en raison de travaux.']]
      ],
      note: 'À cause de + le → à cause du ; grâce à + le → grâce au.',
      links: [['La cause et la conséquence (francaisfacile.com)', 'https://www.francaisfacile.com/exercices/exercice-francais-2/exercice-francais-84696.php']],
      ex: [
        { k: 'q', s: '___ il neigeait, les cours ont été annulés.', o: ['Comme', 'Car', 'Grâce à'], c: 0, w: 'En début de phrase + phrase → comme.' },
        { k: 'q', s: 'J’ai trouvé ce stage ___ mon professeur.', o: ['grâce à', 'à cause de', 'parce que'], c: 0, w: 'Cause positive + nom → grâce à.' },
        { k: 'q', s: 'Le train a deux heures de retard ___ la grève.', o: ['à cause de', 'grâce à', 'car'], c: 0, w: 'Cause négative + nom → à cause de.' },
        { k: 'q', s: 'Je n’ai pas répondu ___ je n’avais plus de batterie.', o: ['parce que', 'à cause de', 'comme'], c: 0, w: 'Au milieu de la phrase + phrase → parce que.' },
        { k: 'q', s: '___ tu connais bien la ville, c’est toi qui nous guides !', o: ['Puisque', 'Car', 'À cause de'], c: 0, w: 'Cause évidente, connue de tous → puisque.' },
        { k: 'q', s: 'Il a été embauché, ___ il parle quatre langues.', o: ['car', 'comme', 'grâce à'], c: 0, w: 'Car relie deux phrases ; il ne commence jamais la phrase.' },
        { k: 'q', s: 'La piscine est fermée ___ des travaux de rénovation.', o: ['en raison de', 'grâce à', 'puisque'], c: 0, w: 'Cause négative, registre formel + nom → en raison de. Puisque est suivi d’une phrase.' },
        { k: 'g', s: 'Nous sommes restés à l’intérieur ___ mauvais temps.', a: ['à cause du'], w: 'Cause négative ; à cause de + le → à cause du.' },
        { k: 'g', s: 'Elle a progressé très vite ___ cours particuliers.', a: ['grâce aux'], w: 'Cause positive ; grâce à + les → grâce aux.' },
        { k: 'g', s: 'Je prends un taxi ___ je suis en retard.', a: ['parce que', 'car', 'puisque'], w: 'Une phrase complète suit → parce que (ou car, puisque).' },
        { k: 't', i: 'Relie les deux phrases avec « comme ».', f: 'Il était très fatigué. Il s’est couché tôt.', a: ['Comme il était très fatigué, il s’est couché tôt.'], w: 'Comme + cause, en début de phrase, puis la conséquence.' },
        { k: 't', i: 'Relie les deux phrases avec « car ».', f: 'Je fais du yoga. Je veux être moins stressé.', a: ['Je fais du yoga car je veux être moins stressé.', 'Je fais du yoga, car je veux être moins stressé.'], w: 'Car se place entre les deux phrases.' },
        { k: 't', i: 'Relie les deux phrases avec « grâce à ».', f: 'Elle a réussi son examen. Son travail régulier l’a aidée.', a: ['Elle a réussi son examen grâce à son travail régulier.'], w: 'Grâce à + nom.' }
      ]
    },
    {
      id: 'consequence', g: 'connecteurs', name: 'Exprimer la conséquence',
      tip: 'donc, alors, du coup (oral), c’est pourquoi, c’est pour ça que, par conséquent (formel) ; si / tellement + adjectif + que.',
      fiche: [
        ['donc, alors', 'Les plus courants.', ['Il pleut, donc je prends mon parapluie.', 'Le bus ne passait pas, alors j’ai marché.']],
        ['du coup', 'Registre familier, surtout à l’oral.', ['J’ai raté le train, du coup je suis arrivé en retard.']],
        ['c’est pourquoi, c’est pour ça que', 'En début de proposition.', ['Je suis malade, c’est pourquoi je reste au lit.']],
        ['par conséquent', 'Registre formel, à l’écrit.', ['Les températures baissent ; par conséquent, la consommation d’énergie augmente.']],
        ['si / tellement + adjectif ou adverbe + que', 'La conséquence vient d’une intensité.', ['Il fait si chaud que je ne dors pas.', 'Elle parle tellement vite que je ne comprends rien.']],
        ['tellement de + nom + que', '', ['Il y avait tellement de monde que nous sommes partis.']]
      ],
      note: '',
      links: [['La cause et la conséquence (francaisfacile.com)', 'https://www.francaisfacile.com/exercices/exercice-francais-2/exercice-francais-84696.php']],
      ex: [
        { k: 'q', s: 'J’avais très faim, ___ j’ai mangé deux sandwichs.', o: ['donc', 'car', 'parce que'], c: 0, w: 'J’ai mangé est le résultat → donc.' },
        { k: 'q', s: 'Le musée était fermé, ___ nous sommes allés au parc.', o: ['alors', 'puisque', 'grâce à'], c: 0, w: 'Conséquence → alors.' },
        { k: 'q', s: 'Il fait ___ froid que le lac est gelé.', o: ['si', 'tellement de', 'donc'], c: 0, w: 'Si + adjectif + que.' },
        { k: 'q', s: 'Elle a ___ travail qu’elle ne sort plus le soir.', o: ['tellement de', 'si', 'très'], c: 0, w: 'Tellement de + nom + que.' },
        { k: 'q', s: 'Les transports sont en grève ; ___, de nombreux salariés travaillent à distance.', o: ['par conséquent', 'parce que', 'comme'], c: 0, w: 'Registre formel → par conséquent.' },
        { k: 'q', s: 'Mon téléphone était déchargé, ___ je ne t’ai pas appelé.', o: ['c’est pour ça que', 'car', 'à cause de'], c: 0, w: 'Conséquence → c’est pour ça que.' },
        { k: 'q', s: 'À l’oral, entre amis : « J’ai oublié mes clés, ___ j’ai dormi chez Paul. »', o: ['du coup', 'par conséquent', 'en raison de'], c: 0, w: 'Registre familier → du coup.' },
        { k: 'g', s: 'Il pleut beaucoup, c’est ___ nous restons à la maison.', a: ['pourquoi'], w: 'C’est pourquoi + conséquence.' },
        { k: 'g', s: 'Le professeur parle ___ vite que personne ne prend de notes.', a: ['si', 'tellement'], w: 'Si / tellement + adverbe + que.' },
        { k: 'g', s: 'Il y avait ___ de bruit que je n’ai pas pu dormir.', a: ['tellement'], w: 'Tellement de + nom + que.' },
        { k: 't', i: 'Relie les deux phrases avec « donc ».', f: 'Je suis fatigué. Je vais me coucher.', a: ['Je suis fatigué, donc je vais me coucher.', 'Je suis fatigué donc je vais me coucher.'], w: 'Cause, donc conséquence.' },
        { k: 't', i: 'Relie les deux phrases avec « si… que ».', f: 'Le film était long. Je me suis endormi.', a: ['Le film était si long que je me suis endormi.'], w: 'Si se place devant l’adjectif, que introduit la conséquence.' },
        { k: 't', i: 'Exprime la même idée avec « c’est pourquoi ».', f: 'Je reste à la maison parce que je suis malade.', a: ['Je suis malade, c’est pourquoi je reste à la maison.'], w: 'On commence par la cause, puis c’est pourquoi + conséquence.' }
      ]
    },
    {
      id: 'opposition', g: 'connecteurs', name: 'Exprimer l’opposition',
      tip: 'mais ; alors que / tandis que + phrase (deux faits différents) ; par contre (familier) ; en revanche (soutenu) ; au contraire.',
      fiche: [
        ['mais', 'Le plus courant.', ['Je comprends l’italien, mais je ne le parle pas.']],
        ['alors que, tandis que', 'Comparent deux faits qui s’opposent.', ['J’adore la mer alors que mon mari préfère la montagne.']],
        ['par contre', 'Registre familier.', ['L’appart est petit ; par contre, il est très bien situé.']],
        ['en revanche', 'Registre soutenu (à l’écrit, à l’examen).', ['Cette ville est bruyante le jour ; en revanche, les nuits sont calmes.']],
        ['au contraire', 'Dit le contraire de ce qui précède.', ['Il n’est pas timide, au contraire : il parle à tout le monde.']]
      ],
      note: 'Opposition ou concession ? L’opposition compare deux faits (moi / toi, hier / aujourd’hui). La concession présente un résultat inattendu (il a étudié, pourtant il a échoué).',
      links: [],
      ex: [
        { k: 'q', s: 'J’adore le café ___ ma sœur ne boit que du thé.', o: ['alors que', 'puisque', 'donc'], c: 0, w: 'Deux faits qui s’opposent → alors que.' },
        { k: 'q', s: 'Mon studio est petit ; ___, il est très lumineux. (registre familier)', o: ['par contre', 'en revanche', 'car'], c: 0, w: 'Registre familier → par contre.' },
        { k: 'q', s: 'Le centre-ville est animé ; ___, les quartiers du nord sont très calmes. (registre soutenu)', o: ['en revanche', 'par contre', 'donc'], c: 0, w: 'Registre soutenu → en revanche.' },
        { k: 'q', s: 'Je lis bien l’allemand ___ je ne le parle pas.', o: ['mais', 'car', 'donc'], c: 0, w: 'Opposition simple → mais.' },
        { k: 'q', s: 'Ma sœur est très sportive, ___ moi, je déteste courir.', o: ['tandis que', 'parce que', 'grâce à'], c: 0, w: 'Comparaison de deux personnes → tandis que.' },
        { k: 'q', s: 'Les loyers sont très chers à Paris ; ___, ils restent abordables en province.', o: ['en revanche', 'donc', 'puisque'], c: 0, w: 'Opposition entre deux situations → en revanche.' },
        { k: 'q', s: 'Il n’est pas paresseux ; ___, il travaille tout le week-end.', o: ['au contraire', 'alors que', 'grâce à'], c: 0, w: 'On dit le contraire de ce qui précède → au contraire.' },
        { k: 'g', s: 'Hier, il a plu toute la journée ___ aujourd’hui il fait un soleil magnifique.', a: ['alors que', 'tandis que', 'mais'], w: 'Deux moments comparés → alors que (ou tandis que, mais).' },
        { k: 'g', s: 'Thomas est très calme, ___ son frère jumeau ne tient pas en place.', a: ['alors que', 'tandis que', 'mais'], w: 'Deux personnes comparées → alors que / tandis que.' },
        { k: 't', i: 'Relie les deux phrases avec « alors que ».', f: 'Paul travaille beaucoup. Son frère ne fait rien.', a: ['Paul travaille beaucoup alors que son frère ne fait rien.', 'Paul travaille beaucoup, alors que son frère ne fait rien.'], w: 'Alors que relie les deux faits.' },
        { k: 't', i: 'Relie les deux phrases avec « en revanche ».', f: 'Cet hôtel est cher. Il est très confortable.', a: ['Cet hôtel est cher ; en revanche, il est très confortable.', 'Cet hôtel est cher, en revanche il est très confortable.', 'Cet hôtel est cher. En revanche, il est très confortable.', 'Cet hôtel est cher, en revanche, il est très confortable.'], w: 'En revanche se place au début de la deuxième idée, souvent après un point-virgule.' }
      ]
    },
    {
      id: 'concession', g: 'connecteurs', name: 'Exprimer la concession',
      tip: 'bien que + subjonctif ; même si + indicatif ; malgré + nom ; pourtant, cependant, toutefois + phrase ; quand même (oral).',
      fiche: [
        ['bien que + subjonctif', '', ['Bien qu’il pleuve, je sors.', 'Bien qu’elle soit fatiguée, elle continue.']],
        ['même si + indicatif', 'Jamais de subjonctif après même si. Si devient s’ devant il / ils.', ['Même s’il pleut, je sors.']],
        ['malgré + nom', '', ['Malgré la pluie, je sors.']],
        ['pourtant, cependant, toutefois', 'Le résultat n’est pas celui qu’on attendait.', ['Il a beaucoup étudié ; pourtant, il a échoué.']],
        ['quand même', 'À l’oral, après le verbe.', ['Il pleut, mais je sors quand même.']]
      ],
      note: 'Bien que (+ subjonctif) et même si (+ indicatif) ont presque le même sens : seul le mode change.',
      links: [],
      ex: [
        { k: 'q', s: '___ elle soit malade, elle est venue au cours.', o: ['Bien qu’', 'Même si', 'Malgré'], c: 0, w: 'Soit est un subjonctif → bien que.' },
        { k: 'q', s: '___ il fait froid, nous allons nous baigner.', o: ['Même s’', 'Bien qu’', 'Malgré'], c: 0, w: 'Fait est un indicatif → même si (s’il).' },
        { k: 'q', s: '___ la neige, le train est arrivé à l’heure.', o: ['Malgré', 'Bien que', 'Pourtant'], c: 0, w: 'Suivi d’un nom → malgré.' },
        { k: 'q', s: 'Il a révisé toute la nuit ; ___, il a raté l’examen.', o: ['pourtant', 'donc', 'car'], c: 0, w: 'Résultat inattendu → pourtant.' },
        { k: 'q', s: 'Bien que tu ___ raison, je ne suis pas d’accord.', o: ['aies', 'as', 'auras'], c: 0, w: 'Bien que + subjonctif : que tu aies.' },
        { k: 'q', s: 'Même si tu ___ raison, je ne suis pas d’accord.', o: ['as', 'aies', 'aurais'], c: 0, w: 'Même si + indicatif : tu as.' },
        { k: 'q', s: 'La situation est difficile ; ___, des solutions existent.', o: ['cependant', 'grâce à', 'puisque'], c: 0, w: 'Cependant = pourtant, registre plus soutenu.' },
        { k: 'g', s: 'Nous sommes partis en randonnée ___ la tempête.', a: ['malgré'], w: 'Devant un nom → malgré.' },
        { k: 'g', s: 'Bien qu’il ___ (être) très occupé, il m’aide toujours.', a: ['soit'], w: 'Bien que + subjonctif : qu’il soit.' },
        { k: 'g', s: 'Bien que nous ___ (avoir) peu de temps, nous allons visiter le Louvre.', a: ['ayons'], w: 'Bien que + subjonctif : que nous ayons.' },
        { k: 'g', s: 'Il fait beau, mais il prend son parapluie ___.', a: ['quand même'], w: 'À l’oral, après le verbe → quand même.' },
        { k: 't', i: 'Exprime la même idée avec « malgré ».', f: 'Bien qu’il pleuve, nous partons en randonnée.', a: ['Malgré la pluie, nous partons en randonnée.'], w: 'Malgré + nom : il pleut → la pluie.' },
        { k: 't', i: 'Exprime la même idée avec « bien que ».', f: 'Il est riche ; pourtant, il n’est pas heureux.', a: ['Bien qu’il soit riche, il n’est pas heureux.'], w: 'Bien que + subjonctif : qu’il soit.' },
        { k: 't', i: 'Relie les deux phrases avec « même si ».', f: 'Je suis fatigué. Je vais finir ce travail.', a: ['Même si je suis fatigué, je vais finir ce travail.'], w: 'Même si + indicatif.' }
      ]
    },
    {
      id: 'temps', g: 'connecteurs', name: 'Les marqueurs temporels',
      tip: 'il y a (un moment passé) · depuis (ça continue, + présent) · pendant (durée fermée) · en (temps nécessaire) · dans (dans le futur) · pour (durée prévue).',
      fiche: [
        ['il y a + durée', 'Un moment dans le passé.', ['Je suis arrivé à Valence il y a deux ans.']],
        ['depuis + durée / date', 'L’action a commencé dans le passé et continue : verbe au présent.', ['J’habite ici depuis 2021.', 'J’apprends le français depuis trois ans.']],
        ['ça fait / il y a… que + présent', 'Même sens que depuis, en début de phrase.', ['Ça fait une heure que je t’attends !']],
        ['pendant + durée', 'Une durée fermée, terminée.', ['J’ai vécu à Paris pendant cinq ans.']],
        ['en + durée', 'Le temps nécessaire pour faire quelque chose.', ['J’ai lu ce roman en un week-end.']],
        ['dans + durée', 'Un moment dans le futur.', ['Le train part dans dix minutes.']],
        ['pour + durée', 'Une durée prévue.', ['Je pars en Erasmus pour six mois.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'J’apprends le piano ___ quatre ans.', a: ['depuis'], w: 'L’action continue (j’apprends, présent) → depuis.' },
        { k: 'g', s: 'Nous sommes arrivés à Lyon ___ deux semaines.', a: ['il y a'], w: 'Un moment passé → il y a.' },
        { k: 'g', s: 'Il a travaillé à Londres ___ cinq ans, puis il est rentré en Espagne.', a: ['pendant'], w: 'Durée terminée → pendant.' },
        { k: 'g', s: 'Le concert commence ___ une heure : dépêche-toi !', a: ['dans'], w: 'Dans le futur → dans.' },
        { k: 'g', s: 'J’ai fait ce puzzle de mille pièces ___ une seule journée.', a: ['en'], w: 'Temps nécessaire → en.' },
        { k: 'g', s: 'Ça fait une heure ___ je t’attends devant le cinéma !', a: ['que'], w: 'Ça fait + durée + que + présent.' },
        { k: 'g', s: 'Elle part au Canada ___ un an.', a: ['pour'], w: 'Durée prévue → pour.' },
        { k: 'g', s: 'Je n’ai pas vu mes cousins ___ Noël.', a: ['depuis'], w: 'Depuis + date ; la situation continue.' },
        { k: 'q', s: 'Il a plu ___ toute la nuit.', o: ['pendant', 'depuis', 'il y a'], c: 0, w: 'Durée terminée → pendant.' },
        { k: 'q', s: 'Mon cousin s’est marié ___ un mois.', o: ['il y a', 'depuis', 'dans'], c: 0, w: 'Action ponctuelle passée → il y a.' },
        { k: 'q', s: 'Je reviens ___ cinq minutes, attends-moi !', o: ['dans', 'en', 'il y a'], c: 0, w: 'Futur → dans.' },
        { k: 'q', s: 'Ils ont construit leur maison ___ six mois seulement.', o: ['en', 'dans', 'depuis'], c: 0, w: 'Temps nécessaire → en.' },
        { k: 't', i: 'Exprime la même idée avec « depuis ».', f: 'J’ai commencé à travailler ici il y a trois ans et je travaille encore ici.', a: ['Je travaille ici depuis trois ans.'], w: 'Depuis + présent pour une situation qui continue.' },
        { k: 't', i: 'Exprime la même idée avec « ça fait… que ».', f: 'J’habite à Valence depuis dix ans.', a: ['Ça fait dix ans que j’habite à Valence.'], w: 'Ça fait + durée + que + présent.' }
      ]
    }
  ]
};
// Identifiants des exercices : <thème>-<numéro>
BANK3.topics.forEach(t => t.ex.forEach((x, i) => { x.id = t.id + '-' + (i + 1); x.topic = t.id; }));
if (typeof module !== 'undefined') module.exports = BANK3;
