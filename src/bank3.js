// Grammaire : fiches et exercices (contenu original, d'après le programme du cours).
// Types d'exercice :
//   { k: 'g', s, a, w }      trou(s) à compléter : « ___ » dans s ; a = réponses acceptées (un tableau par trou s'il y en a plusieurs)
//   { k: 'q', s, o, c, w }   choix : o = options, c = index de la bonne réponse (les options sont mélangées à l'affichage)
//   { k: 't', i, f, a, w }   transformation : consigne i, phrase de départ f, phrases acceptées a
const BANK3 = {
  groups: [
    { id: 'pronoms', name: 'Pronoms', intro: 'Choisis un thème : lis la fiche, puis entraîne-toi. Les exercices que tu rates reviennent plus souvent.' },
    { id: 'connecteurs', name: 'Connecteurs logiques', intro: 'Cause, conséquence, opposition, concession et temps : les mots qui relient les idées, indispensables pour la production écrite du DELF B1.' },
    { id: 'phrase', name: 'La phrase', intro: 'Poser une question, dire non, la voix passive, comparer, les adverbes et la place des adjectifs.' },
    { id: 'idees', name: 'Exprimer une idée', intro: 'Conseiller, souhaiter, obliger ou interdire : des structures qu’on utilise tout le temps à l’oral et dans la production écrite.' },
    { id: 'revision', name: 'Révision A1-A2', intro: 'Les bases à ne plus rater : articles, féminin et pluriel des noms et des adjectifs, nombres.' }
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
      id: 'relcomposes', g: 'pronoms', name: 'Les pronoms relatifs composés',
      tip: 'Après une préposition : lequel, laquelle, lesquels, lesquelles. À + lequel → auquel ; de + lequel → duquel. Pour une personne, on dit souvent préposition + qui.',
      fiche: [
        ['Préposition + lequel', 'S’accorde avec le nom : lequel, laquelle, lesquels, lesquelles.', ['Le stylo avec lequel j’écris est neuf.', 'La table sur laquelle tu as posé tes clés.']],
        ['à + lequel', 'auquel, à laquelle, auxquels, auxquelles (penser à, s’intéresser à, répondre à…).', ['Le projet auquel je pense.', 'Les questions auxquelles tu as répondu.']],
        ['de + lequel', 'duquel, de laquelle, desquels, desquelles, après une locution (près de, à côté de, au milieu de, en face de).', ['Le parc près duquel j’habite.']],
        ['Préposition + qui', 'Pour les personnes (lequel est aussi possible).', ['La collègue avec qui je travaille.', 'Les amis chez qui nous dormons.']]
      ],
      note: 'Dont ou duquel ? Dont remplace « de » seul (parler de → dont) ; duquel s’utilise après une locution avec de (près de, à côté de → près duquel).',
      links: [],
      ex: [
        { k: 'q', s: 'Voici le stylo avec ___ j’ai signé le contrat.', o: ['lequel', 'laquelle', 'que'], c: 0, w: 'Préposition + chose masculine → lequel.' },
        { k: 'q', s: 'La table sur ___ tu as posé tes clés est sale.', o: ['laquelle', 'lequel', 'que'], c: 0, w: 'Table est féminin → sur laquelle.' },
        { k: 'q', s: 'C’est le projet ___ je pense depuis des mois.', o: ['auquel', 'à lequel', 'dont'], c: 0, w: 'Penser à + lequel → auquel.' },
        { k: 'q', s: 'Les questions ___ tu as répondu étaient difficiles.', o: ['auxquelles', 'auxquels', 'desquelles'], c: 0, w: 'Répondre à + questions (f. pl.) → auxquelles.' },
        { k: 'q', s: 'Le parc près ___ j’habite est immense.', o: ['duquel', 'dont', 'auquel'], c: 0, w: 'Près de + lequel → duquel.' },
        { k: 'q', s: 'La collègue avec ___ je travaille est très sympa.', o: ['qui', 'que', 'dont'], c: 0, w: 'Préposition + personne → qui (ou laquelle).' },
        { k: 'g', s: 'Voici la raison pour ___ je suis venu.', a: ['laquelle'], w: 'Raison est féminin → pour laquelle.' },
        { k: 'g', s: 'Ce sont des sujets ___ je m’intéresse beaucoup.', a: ['auxquels'], w: 'S’intéresser à + sujets (m. pl.) → auxquels.' },
        { k: 'g', s: 'Le jardin au milieu ___ il y a une fontaine est magnifique.', a: ['duquel'], w: 'Au milieu de + lequel → duquel.' },
        { k: 'g', s: 'Les amis chez ___ nous dormons habitent à Lyon.', a: ['qui', 'lesquels'], w: 'Préposition + personnes → qui.' },
        { k: 'g', s: 'C’est une entreprise pour ___ j’aimerais travailler.', a: ['laquelle'], w: 'Entreprise est féminin → pour laquelle.' },
        { k: 'g', s: 'L’ami à ___ j’ai prêté mon vélo ne me l’a pas rendu.', a: ['qui', 'auquel'], w: 'À + personne → à qui (auquel est possible mais rare).' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif composé.', f: 'Voici l’ordinateur. Je travaille avec cet ordinateur.', a: ['Voici l’ordinateur avec lequel je travaille.'], w: 'Avec + lequel.' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif composé.', f: 'C’est une question. Je n’ai pas pensé à cette question.', a: ['C’est une question à laquelle je n’ai pas pensé.'], w: 'Penser à → à laquelle.' },
        { k: 't', i: 'Relie les deux phrases avec un pronom relatif.', f: 'La femme est architecte. Je parle avec cette femme.', a: ['La femme avec qui je parle est architecte.', 'La femme avec laquelle je parle est architecte.'], w: 'Avec + qui (ou laquelle) ; la relative suit le nom.' }
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
    ,
    /* ======================= LA PHRASE ======================= */
    {
      id: 'interrogation', g: 'phrase', name: 'L’interrogation',
      tip: 'Trois façons de poser une question : l’intonation (oral), est-ce que (courant) et l’inversion (soutenu). Entre deux voyelles, on ajoute -t- : aime-t-elle ?',
      fiche: [
        ['Intonation', 'Registre familier, à l’oral : la voix monte.', ['Tu aimes le jazz ?']],
        ['Est-ce que', 'Registre courant.', ['Est-ce que tu aimes le jazz ?', 'Où est-ce que tu habites ?']],
        ['Inversion', 'Registre soutenu, à l’écrit : verbe-trait d’union-sujet. -t- entre deux voyelles. Avec un nom sujet, on le reprend par un pronom.', ['Aimes-tu le jazz ?', 'Parle-t-il anglais ?', 'Marie vient-elle ce soir ?']],
        ['Mots interrogatifs', 'qui, que (qu’est-ce que), quoi (après une préposition), où, quand, comment, pourquoi, combien (de).', ['Que fais-tu ?', 'À quoi penses-tu ?', 'Combien de frères as-tu ?']],
        ['Quel', 'quel / quelle / quels / quelles + nom, ou + être. S’accorde avec le nom.', ['Quelle heure est-il ?', 'Quels sont tes films préférés ?']]
      ],
      note: 'Avec l’inversion, on n’utilise jamais est-ce que : « Où habites-tu ? » ou « Où est-ce que tu habites ? », mais pas les deux.',
      links: [],
      ex: [
        { k: 'q', s: '___ heure est-il ?', o: ['Quelle', 'Quel', 'Qu’est-ce que'], c: 0, w: 'Heure est féminin singulier → quelle.' },
        { k: 'q', s: '___ sont tes chanteurs préférés ?', o: ['Quels', 'Quelles', 'Qui'], c: 0, w: 'Quel + être ; chanteurs est masculin pluriel → quels.' },
        { k: 'q', s: '___ vous faites ce week-end ?', o: ['Qu’est-ce que', 'Que', 'Quel'], c: 0, w: 'Sans inversion → qu’est-ce que. Avec inversion, on dirait « Que faites-vous ? ».' },
        { k: 'q', s: '___ as-tu rencontré à la fête ?', o: ['Qui', 'Quoi', 'Quel'], c: 0, w: 'On demande une personne → qui.' },
        { k: 'q', s: 'À ___ tu penses ?', o: ['quoi', 'que', 'qu’est-ce que'], c: 0, w: 'Après une préposition (à, de, avec…) → quoi.' },
        { k: 'q', s: '___ coûte ce billet de train ?', o: ['Combien', 'Comment', 'Quel'], c: 0, w: 'Le prix → combien.' },
        { k: 'q', s: 'Elle aime le théâtre. → Avec l’inversion : ___', o: ['Aime-t-elle le théâtre ?', 'Aime-elle le théâtre ?', 'Elle aime-t-elle le théâtre ?'], c: 0, w: 'Aime finit par une voyelle et elle commence par une voyelle → -t-.' },
        { k: 'g', s: '___ langues parles-tu ?', a: ['quelles'], w: 'Langues est féminin pluriel → quelles.' },
        { k: 'g', s: '___ est-ce que tu habites ? — À Valence.', a: ['où'], w: 'Le lieu → où.' },
        { k: 'g', s: '___ allez-vous ? — Très bien, merci.', a: ['comment'], w: 'La manière, l’état → comment.' },
        { k: 'g', s: '___ est-ce que tu apprends le français ? — Parce que je veux étudier à Paris.', a: ['pourquoi'], w: 'La réponse commence par parce que → pourquoi.' },
        { k: 't', i: 'Pose la question avec « est-ce que ».', f: 'Vous habitez à Montréal.', a: ['Est-ce que vous habitez à Montréal ?'], w: 'Est-ce que + phrase affirmative + point d’interrogation.' },
        { k: 't', i: 'Pose la question avec l’inversion.', f: 'Tu parles espagnol.', a: ['Parles-tu espagnol ?'], w: 'Verbe-trait d’union-sujet.' },
        { k: 't', i: 'Pose la question avec l’inversion.', f: 'Il arrive demain.', a: ['Arrive-t-il demain ?'], w: 'Arrive finit par une voyelle → -t- : arrive-t-il.' },
        { k: 't', i: 'Pose la question avec l’inversion.', f: 'Ils finissent à six heures.', a: ['Finissent-ils à six heures ?'], w: 'Finissent finit par une consonne : pas de -t-.' },
        { k: 't', i: 'Pose la question avec « où » et l’inversion (tu).', f: 'J’habite à Lyon.', a: ['Où habites-tu ?'], w: 'Mot interrogatif + verbe-trait d’union-sujet.' }
      ]
    },
    {
      id: 'negation', g: 'phrase', name: 'La négation',
      tip: 'ne… pas, ne… plus, ne… jamais, ne… rien, ne… personne, ne… ni… ni. Aux temps composés, la négation encadre l’auxiliaire, sauf personne, qui se place après le participe.',
      fiche: [
        ['ne… pas / plus / jamais / pas encore', 'plus : l’action s’est arrêtée ; jamais : à aucun moment ; pas encore : pas jusqu’à maintenant.', ['Il ne fume plus.', 'Je ne suis jamais allé en Grèce.']],
        ['ne… rien / ne… personne', 'rien = aucune chose ; personne = aucune personne. Aux temps composés : rien avant le participe, personne après.', ['Je n’ai rien vu.', 'Je n’ai vu personne.']],
        ['Rien / personne sujets', 'En début de phrase, suivis de ne.', ['Personne ne m’a appelé.', 'Rien n’est impossible.']],
        ['ne… ni… ni', 'Deux éléments niés.', ['Elle ne boit ni café ni thé.', 'Je n’aime ni le froid ni la pluie.']],
        ['Article', 'un, une, des, du, de la → de (d’) après la négation, sauf avec être.', ['Je n’ai pas de voiture.', 'Ce n’est pas un problème.']],
        ['Infinitif', 'ne pas, ne plus, ne jamais se placent ensemble devant l’infinitif.', ['Il m’a conseillé de ne pas sortir.']],
        ['ne… que', '= seulement : ce n’est pas une vraie négation, l’article ne change pas.', ['Je n’ai que dix euros.', 'Il ne boit que de l’eau.']]
      ],
      note: 'À l’oral, on supprime souvent ne (« J’sais pas »), mais à l’écrit et à l’examen, il est obligatoire.',
      links: [['La négation (lepointdufle.net)', 'https://www.lepointdufle.net/ressources_fle/negation2.htm']],
      ex: [
        { k: 'g', s: 'Il ne fume ___ : il a arrêté l’année dernière.', a: ['plus'], w: 'L’action s’est arrêtée → ne… plus.' },
        { k: 'g', s: 'Je n’ai ___ mangé de sushis : c’est la première fois !', a: ['jamais'], w: 'À aucun moment → ne… jamais.' },
        { k: 'g', s: 'Il n’y a ___ dans le frigo : il est complètement vide.', a: ['rien'], w: 'Aucune chose → ne… rien.' },
        { k: 'g', s: 'J’ai sonné trois fois, mais ___ n’a ouvert la porte.', a: ['personne'], w: 'Aucune personne, en position de sujet → personne ne.' },
        { k: 'g', s: 'Elle ne mange ___ viande ___ poisson : elle est végétarienne.', a: [['ni'], ['ni']], w: 'Deux éléments niés → ne… ni… ni.' },
        { k: 'g', s: 'Tu as fini tes devoirs ? — Non, pas ___.', a: ['encore'], w: 'Pas jusqu’à maintenant → pas encore.' },
        { k: 'q', s: 'Je n’ai pas ___ voiture.', o: ['de', 'une', 'la'], c: 0, w: 'Après la négation, un / une / des → de.' },
        { k: 'q', s: 'Ce n’est pas ___ problème.', o: ['un', 'de', 'd’'], c: 0, w: 'Avec être, l’article ne change pas.' },
        { k: 'q', s: 'Hier soir, ___', o: ['je n’ai vu personne.', 'je n’ai personne vu.', 'je n’ai pas vu personne.'], c: 0, w: 'Personne se place après le participe, sans pas.' },
        { k: 'q', s: 'Le médecin m’a dit ___ sel.', o: ['de ne pas manger de', 'de ne manger pas de', 'de pas manger de'], c: 0, w: 'Devant un infinitif : ne pas + infinitif.' },
        { k: 'q', s: '___ est impossible !', o: ['Rien n’', 'Rien', 'Ne rien'], c: 0, w: 'Rien sujet + ne (n’) + verbe.' },
        { k: 't', i: 'Mets à la forme négative avec « ne… jamais ».', f: 'Je suis allé au Canada.', a: ['Je ne suis jamais allé au Canada.'], w: 'Ne… jamais encadre l’auxiliaire.' },
        { k: 't', i: 'Réponds négativement avec « ne… rien ».', f: 'Tu as acheté quelque chose ?', a: ['Non, je n’ai rien acheté.'], w: 'Rien se place entre l’auxiliaire et le participe.' },
        { k: 't', i: 'Réponds négativement avec « ne… personne ».', f: 'Tu connais quelqu’un à Lyon ?', a: ['Non, je ne connais personne à Lyon.'], w: 'Ne + verbe + personne.' },
        { k: 't', i: 'Réponds négativement avec « ne… ni… ni ».', f: 'Tu aimes le café et le thé ?', a: ['Non, je n’aime ni le café ni le thé.'], w: 'Ne + verbe + ni… ni.' },
        { k: 't', i: 'Réponds négativement avec « ne… plus ».', f: 'Tu fais encore du piano ?', a: ['Non, je ne fais plus de piano.'], w: 'Ne… plus ; du devient de après la négation.' },
        { k: 'g', s: 'Je n’ai ___ dix euros : je ne peux pas acheter ce livre.', a: ['que'], w: 'Ne… que = seulement.' },
        { k: 'q', s: 'Il ne boit ___ de l’eau : jamais de soda.', o: ['que', 'pas', 'plus'], c: 0, w: 'Ne… que = seulement ; l’article (de l’) ne change pas.' },
        { k: 't', i: 'Remplace « seulement » par « ne… que ».', f: 'Elle parle seulement espagnol.', a: ['Elle ne parle qu’espagnol.'], w: 'Ne + verbe + que (qu’ devant une voyelle).' }
      ]
    },
    {
      id: 'passive', g: 'phrase', name: 'La voix passive',
      tip: 'être (au temps du verbe actif) + participe passé accordé avec le sujet. L’agent est introduit par « par » (ou « de » avec les verbes de sentiment et d’état).',
      fiche: [
        ['Formation', 'Le COD de la phrase active devient le sujet. Être se met au temps du verbe actif.', ['Le chat mange la souris. → La souris est mangée par le chat.']],
        ['Les temps', 'présent : est construit · passé composé : a été construit · imparfait : était construit · futur : sera construit.', ['Ce pont a été construit en 1990.', 'Les résultats seront publiés demain.']],
        ['Accord', 'Le participe s’accorde avec le sujet.', ['Les lettres ont été envoyées.']],
        ['par ou de', 'par pour une action ; de pour un sentiment ou un état (aimé de, respecté de, couvert de, entouré de).', ['La Joconde a été peinte par Léonard de Vinci.', 'La montagne est couverte de neige.']],
        ['Sans agent', 'Quand l’agent est inconnu ou évident, on ne le dit pas. On peut aussi utiliser on.', ['Mon vélo a été volé. = On a volé mon vélo.']],
        ['Avec un verbe modal ou au futur proche', 'devoir / pouvoir + être + participe ; aller + être + participe.', ['Ce document doit être signé.', 'Les travaux vont être terminés en juin.']]
      ],
      note: 'Seuls les verbes avec un COD peuvent se mettre au passif : on ne peut pas dire « il a été parlé ».',
      links: [],
      ex: [
        { k: 'g', s: 'Ce roman ___ (traduire, présent) dans trente langues.', a: ['est traduit'], w: 'Présent passif : est + participe, accordé avec ce roman.' },
        { k: 'g', s: 'Le musée Guggenheim de Bilbao ___ (dessiner, passé composé) par Frank Gehry.', a: ['a été dessiné'], w: 'Passé composé passif : a été + participe.' },
        { k: 'g', s: 'Les résultats ___ (publier, futur simple) vendredi.', a: ['seront publiés'], w: 'Futur passif : seront + participe accordé (pluriel).' },
        { k: 'g', s: 'Autrefois, la ville ___ (entourer, imparfait) de remparts.', a: ['était entourée'], w: 'Imparfait passif : était + participe accordé (féminin).' },
        { k: 'g', s: 'La tour Eiffel ___ (visiter, présent) par des millions de touristes.', a: ['est visitée'], w: 'Accord avec la tour (féminin).' },
        { k: 'g', s: 'Les invitations ___ (envoyer, passé composé) hier.', a: ['ont été envoyées'], w: 'Ont été + participe accordé (féminin pluriel).' },
        { k: 'q', s: 'Le sommet est couvert ___ neige toute l’année.', o: ['de', 'par', 'avec'], c: 0, w: 'Un état → de.' },
        { k: 'q', s: 'Le téléphone a été inventé ___ Graham Bell.', o: ['par', 'de', 'à'], c: 0, w: 'Une action → par.' },
        { k: 'q', s: 'Pendant la tempête, plusieurs maisons ___.', o: ['ont été détruites', 'ont détruit', 'sont détruit'], c: 0, w: 'Passif : ont été + participe accordé avec maisons.' },
        { k: 'q', s: 'Le chat mange la souris. → ___', o: ['La souris est mangée par le chat.', 'La souris est mangé par le chat.', 'La souris a mangé le chat.'], c: 0, w: 'Le COD (la souris) devient sujet ; le participe s’accorde.' },
        { k: 't', i: 'Mets la phrase à la voix passive.', f: 'Le jury choisit les gagnants.', a: ['Les gagnants sont choisis par le jury.'], w: 'Présent → sont choisis ; accord au masculin pluriel.' },
        { k: 't', i: 'Mets la phrase à la voix passive.', f: 'Un architecte célèbre a dessiné ce pont.', a: ['Ce pont a été dessiné par un architecte célèbre.'], w: 'Passé composé → a été dessiné.' },
        { k: 't', i: 'Mets la phrase à la voix passive.', f: 'La mairie fermera la piscine en août.', a: ['La piscine sera fermée par la mairie en août.', 'En août, la piscine sera fermée par la mairie.'], w: 'Futur → sera fermée ; accord au féminin.' },
        { k: 't', i: 'Mets la phrase à la voix active.', f: 'Le gâteau a été préparé par ma grand-mère.', a: ['Ma grand-mère a préparé le gâteau.'], w: 'L’agent devient sujet ; a été préparé → a préparé.' },
        { k: 't', i: 'Mets la phrase à la voix passive, sans agent.', f: 'On a volé mon vélo.', a: ['Mon vélo a été volé.'], w: 'On = agent inconnu : on ne le dit pas.' },
        { k: 'g', s: 'Ce document doit ___ (signer) avant lundi.', a: ['être signé'], w: 'Devoir + être + participe.' },
        { k: 'g', s: 'Les travaux ___ (terminer, futur proche) en juin.', a: ['vont être terminés'], w: 'Futur proche passif : vont être + participe accordé.' },
        { k: 'g', s: 'La réunion ___ (annuler, plus-que-parfait) à cause de la grève.', a: ['avait été annulée'], w: 'Plus-que-parfait passif : avait été + participe accordé.' },
        { k: 'q', s: 'Hier, le voleur ___ par la police.', o: ['a été arrêté', 'est arrêté', 'était arrêté'], c: 0, w: 'Action ponctuelle passée → passé composé passif.' },
        { k: 't', i: 'Mets la phrase à la voix passive, sans agent.', f: 'On répare la route.', a: ['La route est réparée.'], w: 'Présent passif ; on ne dit pas l’agent.' },
        { k: 't', i: 'Mets la phrase à la voix passive.', f: 'Les élèves respectent ce professeur.', a: ['Ce professeur est respecté par les élèves.', 'Ce professeur est respecté des élèves.', 'Ce professeur est respecté de ses élèves.'], w: 'Respecter (sentiment) → de ou par.' }
      ]
    },
    {
      id: 'accord', g: 'phrase', name: 'L’accord du participe passé',
      tip: 'Avec être : accord avec le sujet. Avec avoir : pas d’accord avec le sujet, mais accord avec le COD s’il est placé avant. Verbes pronominaux : accord avec le sujet, sauf si le COD vient après ou si « se » est un COI.',
      fiche: [
        ['Avec être', 'Le participe s’accorde avec le sujet.', ['Elle est partie.', 'Ils sont arrivés en retard.']],
        ['Avec avoir', 'Pas d’accord avec le sujet. Accord avec le COD seulement s’il est placé avant le verbe (pronom la, les, l’ ; que ; quel + nom).', ['Elles ont mangé.', 'Les photos que j’ai prises.', 'Ces fleurs, je les ai achetées.', 'Quelles villes as-tu visitées ?']],
        ['Verbes pronominaux', 'En général, accord avec le sujet. Pas d’accord si le COD est après le verbe, ni si se est un COI (se parler, se téléphoner, s’écrire, se dire…).', ['Elle s’est levée.', 'Elle s’est lavé les mains.', 'Ils se sont téléphoné.']],
        ['Avec en', 'Pas d’accord.', ['Des cerises ? J’en ai mangé.']]
      ],
      note: '',
      links: [['L’accord du participe passé avec être (ortholud.com)', 'https://www.ortholud.com/conjugaison/participe/etre.php']],
      ex: [
        { k: 'g', s: 'Marie est ___ (partir) à huit heures.', a: ['partie'], w: 'Être → accord avec le sujet (Marie).' },
        { k: 'g', s: 'Mes amis sont ___ (arriver) en retard.', a: ['arrivés'], w: 'Être → accord au masculin pluriel.' },
        { k: 'g', s: 'Elles ont ___ (manger) au restaurant.', a: ['mangé'], w: 'Avoir → pas d’accord avec le sujet.' },
        { k: 'g', s: 'Les lettres que j’ai ___ (écrire) sont sur la table.', a: ['écrites'], w: 'Que (= les lettres) est un COD placé avant → écrites.' },
        { k: 'g', s: 'Cette robe ? Je l’ai ___ (acheter) en soldes.', a: ['achetée'], w: 'L’ (= cette robe) placé avant → achetée.' },
        { k: 'g', s: 'Quelles villes as-tu ___ (visiter) cet été ?', a: ['visitées'], w: 'Quelles villes, COD placé avant → visitées.' },
        { k: 'g', s: 'Elle s’est ___ (lever) tôt ce matin.', a: ['levée'], w: 'Pronominal : accord avec le sujet.' },
        { k: 'g', s: 'Elle s’est ___ (laver) les mains.', a: ['lavé'], w: 'Le COD (les mains) est après le verbe → pas d’accord.' },
        { k: 'g', s: 'Ils se sont ___ (téléphoner) hier soir.', a: ['téléphoné'], w: 'Téléphoner à quelqu’un : se est un COI → pas d’accord.' },
        { k: 'g', s: 'Paul et moi, nous nous sommes ___ (promener) au bord de la mer.', a: ['promenés'], w: 'Pronominal : accord avec nous (masculin pluriel).' },
        { k: 'g', s: 'Des cerises ? J’en ai ___ (cueillir) deux kilos.', a: ['cueilli'], w: 'Avec en, pas d’accord.' },
        { k: 'q', s: 'Les fleurs qu’il m’a ___ sont magnifiques.', o: ['offertes', 'offert', 'offerts'], c: 0, w: 'Que (= les fleurs) est placé avant → offertes.' },
        { k: 'q', s: 'Ma sœur a ___ un nouvel appartement.', o: ['acheté', 'achetée'], c: 0, w: 'Avoir, COD après le verbe → pas d’accord.' },
        { k: 'q', s: 'Elles se sont ___ des cadeaux.', o: ['offert', 'offertes'], c: 0, w: 'Le COD (des cadeaux) est après le verbe → pas d’accord.' },
        { k: 'q', s: 'Les filles sont ___ au cinéma.', o: ['allées', 'allé', 'allés'], c: 0, w: 'Être → accord avec les filles.' },
        { k: 't', i: 'Remplace « les clés » par un pronom.', f: 'J’ai perdu les clés.', a: ['Je les ai perdues.'], w: 'Les placé avant → perdues.' },
        { k: 't', i: 'Mets la phrase au passé composé.', f: 'Elles se maquillent.', a: ['Elles se sont maquillées.'], w: 'Pronominal → être, accord avec le sujet.' }
      ]
    },
    {
      id: 'comparaison', g: 'phrase', name: 'Le comparatif et le superlatif',
      tip: 'plus / moins / aussi + adjectif + que ; plus de / moins de / autant de + nom + que ; bon → meilleur, bien → mieux ; superlatif : le / la / les plus (moins) + adjectif + de.',
      fiche: [
        ['Avec un adjectif ou un adverbe', 'plus… que (+), moins… que (–), aussi… que (=).', ['Paris est plus grand que Lyon.', 'Il court aussi vite que moi.']],
        ['Avec un nom ou un verbe', 'plus de / moins de / autant de + nom ; verbe + plus / moins / autant.', ['J’ai plus de livres que toi.', 'Il travaille autant que moi.']],
        ['Irréguliers', 'bon → meilleur ; bien → mieux ; mauvais → plus mauvais ou pire.', ['Ce gâteau est meilleur que l’autre.', 'Elle chante mieux que moi.']],
        ['Superlatif', 'le / la / les + plus / moins + adjectif (+ de + groupe). Le meilleur, le mieux.', ['C’est la ville la plus peuplée d’Espagne.', 'C’est le meilleur restaurant du quartier.']]
      ],
      note: 'Après le superlatif, on emploie de (et non « en ») : le plus grand musée du monde.',
      links: [['Comparatif et superlatif (lingolia)', 'https://francais.lingolia.com/fr/grammaire/les-adjectifs/le-comparatif-et-le-superlatif/exercices']],
      ex: [
        { k: 'g', s: 'Madrid est ___ grande que Valence. (+)', a: ['plus'], w: 'Supériorité → plus… que.' },
        { k: 'g', s: 'Ce restaurant est bon, mais l’autre est ___. (+)', a: ['meilleur'], w: 'Bon → meilleur (jamais « plus bon »).' },
        { k: 'g', s: 'Elle chante ___ que sa sœur. (bien, +)', a: ['mieux'], w: 'Bien → mieux.' },
        { k: 'g', s: 'J’ai ___ livres que toi. (+)', a: ['plus de'], w: 'Avec un nom → plus de.' },
        { k: 'g', s: 'Il travaille ___ que moi. (=)', a: ['autant'], w: 'Avec un verbe, égalité → autant.' },
        { k: 'g', s: 'Mon frère est ___ sportif que moi. (=)', a: ['aussi'], w: 'Avec un adjectif, égalité → aussi… que.' },
        { k: 'g', s: 'C’est le bâtiment le plus haut ___ la ville.', a: ['de'], w: 'Superlatif + de + lieu.' },
        { k: 'g', s: 'C’est ___ meilleure pizza de la ville !', a: ['la'], w: 'Pizza est féminin → la meilleure.' },
        { k: 'q', s: 'Ce film est ___ que le livre.', o: ['meilleur', 'mieux', 'plus bon'], c: 0, w: 'On compare des choses (adjectif bon) → meilleur.' },
        { k: 'q', s: 'Tu parles français ___ que l’année dernière.', o: ['mieux', 'meilleur', 'plus bien'], c: 0, w: 'On compare une manière (adverbe bien) → mieux.' },
        { k: 'q', s: 'Il y a ___ touristes en août qu’en novembre.', o: ['plus de', 'plus', 'autant'], c: 0, w: 'Avec un nom → plus de.' },
        { k: 'q', s: 'Le Mont-Blanc est la montagne ___ haute des Alpes.', o: ['la plus', 'plus', 'le plus'], c: 0, w: 'Superlatif après le nom : la montagne la plus haute.' },
        { k: 't', i: 'Compare avec « moins… que ».', f: 'Le train est rapide. L’avion est plus rapide.', a: ['Le train est moins rapide que l’avion.'], w: 'Infériorité → moins + adjectif + que.' },
        { k: 't', i: 'Fais une phrase au superlatif (+).', f: 'Le Louvre / le musée / visité / le monde', a: ['Le Louvre est le musée le plus visité du monde.'], w: 'Le + nom + le plus + adjectif + du (de + le) monde.' }
      ]
    },
    {
      id: 'adverbes', g: 'phrase', name: 'Les adverbes en -ment et leur place',
      tip: 'Adjectif au féminin + -ment (lente → lentement). -ant → -amment, -ent → -emment. Les adverbes courts se placent entre l’auxiliaire et le participe : j’ai bien dormi.',
      fiche: [
        ['Formation', 'adjectif féminin + -ment. Si l’adjectif masculin finit par une voyelle : masculin + -ment.', ['lent → lentement ; heureux → heureusement', 'vrai → vraiment ; poli → poliment']],
        ['-ant, -ent', '-ant → -amment ; -ent → -emment (même prononciation [amɑ̃]).', ['courant → couramment', 'évident → évidemment ; prudent → prudemment']],
        ['Irréguliers', '', ['gentil → gentiment ; bref → brièvement ; bon → bien ; mauvais → mal']],
        ['Place', 'Après le verbe conjugué. Aux temps composés, les adverbes courts (bien, mal, beaucoup, déjà, souvent, toujours, encore, vraiment) entre l’auxiliaire et le participe ; les adverbes longs en -ment, souvent après le participe. Devant un adjectif : très, trop, vraiment.', ['Il parle lentement.', 'J’ai bien dormi. Il a déjà fini.', 'Il a répondu poliment.']]
      ],
      note: '',
      links: [['Les adverbes en -ment (tolearnfrench.com)', 'https://www.tolearnfrench.com/exercises/exercise-french-2/exercise-french-114686.php']],
      ex: [
        { k: 'g', s: 'lent → ___', a: ['lentement'], w: 'Féminin lente + -ment.' },
        { k: 'g', s: 'heureux → ___', a: ['heureusement'], w: 'Féminin heureuse + -ment.' },
        { k: 'g', s: 'vrai → ___', a: ['vraiment'], w: 'L’adjectif finit par une voyelle : vrai + -ment.' },
        { k: 'g', s: 'courant → ___', a: ['couramment'], w: '-ant → -amment.' },
        { k: 'g', s: 'évident → ___', a: ['évidemment'], w: '-ent → -emment.' },
        { k: 'g', s: 'prudent → ___', a: ['prudemment'], w: '-ent → -emment.' },
        { k: 'g', s: 'gentil → ___', a: ['gentiment'], w: 'Forme irrégulière : gentiment.' },
        { k: 'g', s: 'Elle parle ___ (doux) à son bébé.', a: ['doucement'], w: 'Féminin douce + -ment.' },
        { k: 'g', s: 'Il conduit trop ___ (rapide).', a: ['rapidement'], w: 'Rapide finit par -e : rapide + -ment.' },
        { k: 'q', s: 'Quelle phrase est correcte ?', o: ['J’ai bien dormi.', 'J’ai dormi bien.', 'Je bien ai dormi.'], c: 0, w: 'Adverbe court entre l’auxiliaire et le participe.' },
        { k: 'q', s: 'Quelle phrase est correcte ?', o: ['Il a déjà fini.', 'Il a fini déjà.', 'Il déjà a fini.'], c: 0, w: 'Déjà se place entre l’auxiliaire et le participe.' },
        { k: 'q', s: 'Quelle phrase est correcte ?', o: ['Nous avons beaucoup travaillé.', 'Nous beaucoup avons travaillé.', 'Beaucoup nous avons travaillé.'], c: 0, w: 'Beaucoup entre l’auxiliaire et le participe.' },
        { k: 't', i: 'Ajoute l’adverbe « souvent » à la bonne place.', f: 'Nous sommes allés au cinéma cet été.', a: ['Nous sommes souvent allés au cinéma cet été.'], w: 'Adverbe court entre l’auxiliaire et le participe.' },
        { k: 't', i: 'Remplace « de façon polie » par un adverbe.', f: 'Il a répondu de façon polie.', a: ['Il a répondu poliment.'], w: 'Poli finit par une voyelle : poli + -ment.' }
      ]
    },
    {
      id: 'adjectifs', g: 'phrase', name: 'La place des adjectifs',
      tip: 'En général, l’adjectif se place après le nom (couleur, nationalité, forme). Avant le nom : les adjectifs courts et fréquents (beau, joli, bon, mauvais, grand, petit, jeune, vieux, nouveau, gros, long).',
      fiche: [
        ['Après le nom', 'La plupart des adjectifs : couleur, nationalité, forme, adjectifs longs, participes.', ['une voiture rouge, un étudiant italien, une table ronde, un film intéressant']],
        ['Avant le nom', 'Adjectifs courts et fréquents : beauté (beau, joli), âge (jeune, vieux, nouveau), qualité (bon, mauvais), taille (grand, petit, gros, long).', ['une jolie maison, un vieux pont, une bonne idée']],
        ['bel, nouvel, vieil', 'Devant un nom masculin qui commence par une voyelle ou un h muet.', ['un bel appartement, un nouvel ami, un vieil homme']],
        ['Le sens change', 'un grand homme (célèbre) / un homme grand (taille) ; mon ancien appartement (d’avant) / un meuble ancien (vieux) ; ma propre chambre (à moi) / une chambre propre (rangée) ; un cher ami (aimé) / un sac cher (prix).', []]
      ],
      note: 'Avec deux adjectifs, chacun garde sa place : une jolie robe bleue.',
      links: [],
      ex: [
        { k: 'q', s: 'J’ai acheté ___.', o: ['une voiture rouge', 'une rouge voiture'], c: 0, w: 'Les couleurs se placent après le nom.' },
        { k: 'q', s: 'Ils habitent dans ___.', o: ['un bel appartement', 'un beau appartement', 'un appartement bel'], c: 0, w: 'Devant une voyelle, beau → bel, avant le nom.' },
        { k: 'q', s: 'Je te présente ___, Marc.', o: ['un vieil ami', 'un vieux ami', 'un ami vieil'], c: 0, w: 'Devant une voyelle, vieux → vieil.' },
        { k: 'q', s: 'Nous avons étudié avec ___.', o: ['un professeur canadien', 'un canadien professeur'], c: 0, w: 'La nationalité se place après le nom.' },
        { k: 'q', s: '« Mon ancien appartement », ça veut dire :', o: ['l’appartement où j’habitais avant', 'un appartement très vieux'], c: 0, w: 'Ancien avant le nom = précédent.' },
        { k: 'q', s: '« Un homme grand », ça veut dire :', o: ['un homme de grande taille', 'un homme célèbre et important'], c: 0, w: 'Grand après le nom = la taille ; un grand homme = célèbre.' },
        { k: 'q', s: '« Ma propre chambre », ça veut dire :', o: ['la chambre qui est à moi', 'une chambre bien rangée'], c: 0, w: 'Propre avant le nom = à moi ; après = rangée, pas sale.' },
        { k: 'g', s: 'Mes parents ont acheté un ___ ordinateur. (nouveau)', a: ['nouvel'], w: 'Devant une voyelle, nouveau → nouvel.' },
        { k: 'g', s: 'C’est un ___ hôtel au bord de la mer. (beau)', a: ['bel'], w: 'Hôtel commence par un h muet → bel.' },
        { k: 'g', s: 'Ma grand-mère m’a raconté une ___ histoire. (vieux)', a: ['vieille'], w: 'Histoire est féminin → vieille, avant le nom.' },
        { k: 't', i: 'Ajoute l’adjectif à la bonne place.', f: 'Ils ont acheté une maison. (grand)', a: ['Ils ont acheté une grande maison.'], w: 'Grand se place avant le nom ; accord au féminin.' },
        { k: 't', i: 'Ajoute les deux adjectifs à la bonne place.', f: 'J’ai vu un film. (beau, italien)', a: ['J’ai vu un beau film italien.'], w: 'Beau avant le nom, la nationalité après.' },
        { k: 't', i: 'Ajoute les deux adjectifs à la bonne place.', f: 'Elle porte une robe. (joli, bleu)', a: ['Elle porte une jolie robe bleue.'], w: 'Joli avant, la couleur après ; accord au féminin.' }
      ]
    }
    ,
    /* ======================= EXPRIMER UNE IDÉE ======================= */
    {
      id: 'conseil', g: 'idees', name: 'Donner un conseil',
      tip: 'Tu devrais / tu pourrais / il faudrait + infinitif ; à ta place, si j’étais toi + conditionnel ; il vaut mieux, c’est préférable de, je te conseille de + infinitif ; l’impératif.',
      fiche: [
        ['Le conditionnel', 'devoir, pouvoir, falloir au conditionnel + infinitif : c’est le conseil le plus poli.', ['Tu devrais te reposer.', 'Tu pourrais demander de l’aide.', 'Il faudrait dormir davantage.']],
        ['À ta place / si j’étais toi', '+ conditionnel.', ['À ta place, je prendrais le train.', 'Si j’étais toi, j’accepterais ce poste.']],
        ['Expressions + infinitif', 'il vaut mieux, c’est préférable de, je te conseille de, je te recommande de.', ['Il vaut mieux partir tôt.', 'C’est préférable d’arriver à l’heure.', 'Je te conseille de réserver.']],
        ['L’impératif', 'Plus direct.', ['Repose-toi cinq minutes !', 'Ne travaille pas trop tard.']]
      ],
      note: 'Dans une lettre ou à l’examen, préfère le conditionnel : c’est plus poli que l’impératif.',
      links: [],
      ex: [
        { k: 'g', s: 'Tu as l’air fatigué : tu ___ (devoir, conditionnel) te reposer.', a: ['devrais'], w: 'Devoir au conditionnel : tu devrais.' },
        { k: 'g', s: 'À ta place, je ___ (prendre, conditionnel) le train, c’est plus rapide.', a: ['prendrais'], w: 'À ta place + conditionnel.' },
        { k: 'g', s: 'Si j’étais toi, j’___ (accepter) ce poste.', a: ['accepterais'], w: 'Si j’étais toi + conditionnel.' },
        { k: 'g', s: 'Il ___ (valoir, présent) mieux partir tôt pour éviter les bouchons.', a: ['vaut'], w: 'Il vaut mieux + infinitif.' },
        { k: 'g', s: 'Je te conseille ___ réserver ta place à l’avance.', a: ['de'], w: 'Conseiller de + infinitif.' },
        { k: 'g', s: 'Vous ___ (pouvoir, conditionnel) demander de l’aide à votre professeure.', a: ['pourriez'], w: 'Pouvoir au conditionnel : vous pourriez.' },
        { k: 'g', s: 'Il ___ (falloir, conditionnel) que tu dormes un peu plus.', a: ['faudrait'], w: 'Falloir au conditionnel : il faudrait.' },
        { k: 'q', s: 'Il vaut mieux ___ un pull : il fait froid ce soir.', o: ['prendre', 'que tu prends', 'prends'], c: 0, w: 'Il vaut mieux + infinitif.' },
        { k: 'q', s: 'C’est préférable ___ arriver à l’heure à l’examen.', o: ['d’', 'que', 'à'], c: 0, w: 'C’est préférable de (d’) + infinitif.' },
        { k: 'q', s: 'Quel conseil est le plus poli ?', o: ['Tu pourrais fermer la fenêtre ?', 'Ferme la fenêtre !', 'Tu fermes la fenêtre.'], c: 0, w: 'Le conditionnel est plus poli que l’impératif.' },
        { k: 't', i: 'Donne le même conseil avec « tu devrais ».', f: 'Repose-toi un peu !', a: ['Tu devrais te reposer un peu.'], w: 'Tu devrais + infinitif ; le pronom se place devant l’infinitif.' },
        { k: 't', i: 'Donne le même conseil avec « à ta place ».', f: 'Tu devrais aller chez le médecin.', a: ['À ta place, j’irais chez le médecin.'], w: 'À ta place + je + conditionnel (aller → j’irais).' },
        { k: 't', i: 'Donne le même conseil avec « il vaut mieux ».', f: 'Tu ne devrais pas conduire la nuit.', a: ['Il vaut mieux ne pas conduire la nuit.'], w: 'Il vaut mieux + ne pas + infinitif.' }
      ]
    },
    {
      id: 'souhait', g: 'idees', name: 'Exprimer un souhait',
      tip: 'Un seul sujet : j’aimerais / je voudrais / je souhaite + infinitif. Deux sujets : vouloir que, souhaiter que, aimer que + subjonctif. Espérer que + indicatif.',
      fiche: [
        ['Un seul sujet', 'aimer et vouloir au conditionnel, souhaiter, espérer + infinitif.', ['J’aimerais partir en vacances.', 'Je souhaite réussir mon examen.', 'J’espère venir demain.']],
        ['Deux sujets', 'vouloir que, souhaiter que, aimer que + subjonctif.', ['Je voudrais que tu viennes.', 'Nous souhaitons que vous soyez heureux.']],
        ['Espérer que', '+ indicatif (souvent au futur), jamais de subjonctif.', ['J’espère qu’il fera beau.']],
        ['Si seulement', '+ imparfait (souhait difficile à réaliser).', ['Si seulement j’avais plus de temps !']]
      ],
      note: 'Même sujet → infinitif : on dit « Je veux partir », jamais « Je veux que je parte ».',
      links: [],
      ex: [
        { k: 'g', s: 'J’___ (aimer, conditionnel) partir au Japon l’été prochain.', a: ['aimerais'], w: 'Aimer au conditionnel + infinitif.' },
        { k: 'g', s: 'Je veux que tu ___ (venir) à ma fête samedi.', a: ['viennes'], w: 'Vouloir que + subjonctif : que tu viennes.' },
        { k: 'g', s: 'Nous souhaitons que vous ___ (être) très heureux.', a: ['soyez'], w: 'Souhaiter que + subjonctif : que vous soyez.' },
        { k: 'g', s: 'J’espère que tu ___ (aller, présent) mieux.', a: ['vas'], w: 'Espérer que + indicatif.' },
        { k: 'g', s: 'Elle voudrait que nous ___ (faire) moins de bruit.', a: ['fassions'], w: 'Vouloir que + subjonctif : que nous fassions.' },
        { k: 'g', s: 'Je ___ (vouloir, conditionnel) un café, s’il vous plaît.', a: ['voudrais'], w: 'Demande polie : je voudrais.' },
        { k: 'q', s: 'Je souhaite ___ ce concours.', o: ['réussir', 'que je réussisse', 'que je réussis'], c: 0, w: 'Un seul sujet → infinitif.' },
        { k: 'q', s: 'J’espère qu’il ___ beau demain.', o: ['fera', 'fasse', 'faire'], c: 0, w: 'Espérer que + indicatif (futur).' },
        { k: 'q', s: 'Mes parents aimeraient que je ___ des études de médecine.', o: ['fasse', 'fais', 'faire'], c: 0, w: 'Deux sujets : aimer que + subjonctif.' },
        { k: 'q', s: 'Si seulement j’___ plus de temps libre !', o: ['avais', 'ai', 'aurai'], c: 0, w: 'Si seulement + imparfait.' },
        { k: 't', i: 'Exprime le souhait avec « je voudrais que ».', f: 'Tu m’aides.', a: ['Je voudrais que tu m’aides.'], w: 'Je voudrais que + subjonctif (aides = même forme qu’au présent).' },
        { k: 't', i: 'Exprime le souhait avec « j’aimerais ».', f: 'Je veux apprendre le japonais.', a: ['J’aimerais apprendre le japonais.'], w: 'J’aimerais + infinitif.' }
      ]
    },
    {
      id: 'obligation', g: 'idees', name: 'Exprimer l’obligation et l’interdiction',
      tip: 'Il faut + infinitif (en général) ; il faut que + subjonctif (une personne précise) ; devoir + infinitif ; être obligé de + infinitif. Interdiction : il est interdit de, il ne faut pas.',
      fiche: [
        ['Il faut + infinitif', 'Obligation générale.', ['Il faut boire beaucoup d’eau.']],
        ['Il faut que + subjonctif', 'Obligation pour une personne précise.', ['Il faut que tu finisses ce travail.', 'Il faut que nous partions.']],
        ['devoir, être obligé de', '+ infinitif.', ['Nous devons rendre la rédaction jeudi.', 'Je suis obligé de travailler samedi.']],
        ['Il est nécessaire / indispensable', 'de + infinitif, ou que + subjonctif.', ['Il est indispensable d’avoir son passeport.', 'Il est nécessaire que vous soyez à l’heure.']],
        ['L’interdiction', 'il est interdit de, il ne faut pas, défense de (panneaux), ne pas + infinitif.', ['Il est interdit de fumer.', 'Il ne faut pas toucher.']]
      ],
      note: '« Il ne faut pas » = c’est interdit. Pour dire que ce n’est pas obligatoire : « ce n’est pas la peine de », « tu n’es pas obligé de ».',
      links: [['Il faut que + subjonctif (eoiestepona.org)', 'https://www.eoiestepona.org/html/juan/exercices/3FRANCES/subjonctif/ilfaut_subjonctif1.htm']],
      ex: [
        { k: 'g', s: 'Il faut que tu ___ (finir) ce travail avant ce soir.', a: ['finisses'], w: 'Il faut que + subjonctif : que tu finisses.' },
        { k: 'g', s: 'Il faut que nous ___ (partir) tout de suite.', a: ['partions'], w: 'Subjonctif de partir : que nous partions.' },
        { k: 'g', s: 'Il est indispensable que vous ___ (avoir) votre passeport.', a: ['ayez'], w: 'Subjonctif d’avoir : que vous ayez.' },
        { k: 'g', s: 'Nous ___ (devoir, présent) rendre la rédaction jeudi.', a: ['devons'], w: 'Devoir + infinitif : nous devons.' },
        { k: 'g', s: 'Je suis obligé ___ travailler samedi.', a: ['de'], w: 'Être obligé de + infinitif.' },
        { k: 'g', s: 'Il ___ (falloir, présent) boire beaucoup d’eau quand il fait chaud.', a: ['faut'], w: 'Obligation générale : il faut + infinitif.' },
        { k: 'q', s: 'En général, il faut ___ ses devoirs tous les jours.', o: ['faire', 'que fait', 'fais'], c: 0, w: 'Obligation générale → il faut + infinitif.' },
        { k: 'q', s: 'Il faut que j’___ à la banque cet après-midi.', o: ['aille', 'vais', 'aller'], c: 0, w: 'Il faut que + subjonctif : que j’aille.' },
        { k: 'q', s: 'Dans ce musée, il est interdit ___ photos.', o: ['de prendre des', 'prendre des', 'que prendre des'], c: 0, w: 'Il est interdit de + infinitif.' },
        { k: 'q', s: '« Il ne faut pas fumer ici » veut dire :', o: ['c’est interdit de fumer ici', 'ce n’est pas nécessaire de fumer ici'], c: 0, w: 'Il ne faut pas = interdiction.' },
        { k: 't', i: 'Exprime la même obligation avec « il faut que ».', f: 'Tu dois être patient.', a: ['Il faut que tu sois patient.'], w: 'Il faut que + subjonctif : que tu sois.' },
        { k: 't', i: 'Exprime la même obligation avec « devoir ».', f: 'Il faut que nous prenions le métro.', a: ['Nous devons prendre le métro.'], w: 'Nous devons + infinitif.' }
      ]
    },
    {
      id: 'subjind', g: 'idees', name: 'Subjonctif ou indicatif ?',
      tip: 'Subjonctif après la volonté, l’obligation, les sentiments, le doute et l’opinion négative. Indicatif après la certitude, l’opinion affirmative (je pense que, je crois que) et espérer que.',
      fiche: [
        ['Subjonctif', 'volonté (vouloir que, souhaiter que) ; obligation (il faut que) ; sentiments (être content / triste / désolé que, avoir peur que, regretter que) ; doute et possibilité (douter que, il est possible que) ; opinion négative ou question (je ne pense pas que, penses-tu que… ?).', ['Je suis content que tu viennes.', 'J’ai peur qu’il pleuve.', 'Je ne pense pas qu’il ait raison.']],
        ['Indicatif', 'certitude (je suis sûr que, il est certain que, il est évident que) ; opinion affirmative (je pense que, je crois que, je trouve que, il me semble que) ; espérer que ; il est probable que.', ['Je pense qu’il a raison.', 'Je suis sûr que tu réussiras.', 'J’espère que tu vas bien.']],
        ['Même sujet', 'On utilise l’infinitif : être content de, avoir peur de.', ['Je suis heureux d’être ici.', 'J’ai peur de rater le train.']]
      ],
      note: 'Astuce : je pense que + indicatif, mais je ne pense pas que + subjonctif.',
      links: [],
      ex: [
        { k: 'g', s: 'Je suis content que tu ___ (venir) ce soir.', a: ['viennes'], w: 'Sentiment → subjonctif : que tu viennes.' },
        { k: 'g', s: 'J’ai peur qu’il ___ (pleuvoir) demain.', a: ['pleuve'], w: 'Avoir peur que + subjonctif.' },
        { k: 'g', s: 'Je pense qu’il ___ (avoir) raison.', a: ['a'], w: 'Opinion affirmative → indicatif.' },
        { k: 'g', s: 'Je ne pense pas qu’il ___ (avoir) raison.', a: ['ait'], w: 'Opinion négative → subjonctif : qu’il ait.' },
        { k: 'g', s: 'Il est possible que nous ___ (être) en retard.', a: ['soyons'], w: 'Possibilité → subjonctif.' },
        { k: 'g', s: 'Je suis sûr que tu ___ (réussir) ton examen.', a: ['réussiras', 'réussis', 'vas réussir'], w: 'Certitude → indicatif.' },
        { k: 'g', s: 'Il est probable qu’elle ___ (venir, futur).', a: ['viendra'], w: 'Il est probable que → indicatif.' },
        { k: 'g', s: 'Je doute qu’il ___ (savoir) la réponse.', a: ['sache'], w: 'Doute → subjonctif : qu’il sache.' },
        { k: 'g', s: 'Elle regrette que vous ___ (partir) si tôt.', a: ['partiez'], w: 'Regretter que + subjonctif.' },
        { k: 'g', s: 'Il est évident que tu ___ (faire, présent) des progrès.', a: ['fais'], w: 'Il est évident que → indicatif.' },
        { k: 'q', s: 'Je crois qu’elle ___ malade.', o: ['est', 'soit', 'être'], c: 0, w: 'Croire que (affirmatif) → indicatif.' },
        { k: 'q', s: 'Je ne crois pas qu’elle ___ malade.', o: ['soit', 'est', 'sera'], c: 0, w: 'Ne pas croire que → subjonctif.' },
        { k: 'q', s: 'Nous sommes désolés que vous ___ attendre.', o: ['deviez', 'devez', 'devrez'], c: 0, w: 'Sentiment → subjonctif : que vous deviez.' },
        { k: 'q', s: 'J’espère que tu ___ bien.', o: ['vas', 'ailles', 'aller'], c: 0, w: 'Espérer que → indicatif.' },
        { k: 'q', s: 'Je suis heureux ___ ici avec vous.', o: ['d’être', 'que je sois', 'que je suis'], c: 0, w: 'Même sujet → de + infinitif.' },
        { k: 'q', s: 'Il est certain qu’il ___ demain.', o: ['viendra', 'vienne', 'venir'], c: 0, w: 'Certitude → indicatif.' },
        { k: 't', i: 'Commence la phrase par « Je ne pense pas que ».', f: 'Il fera beau demain.', a: ['Je ne pense pas qu’il fasse beau demain.'], w: 'Opinion négative → subjonctif : qu’il fasse.' },
        { k: 't', i: 'Commence la phrase par « Je suis triste que ».', f: 'Tu pars en Erasmus.', a: ['Je suis triste que tu partes en Erasmus.'], w: 'Sentiment → subjonctif : que tu partes.' },
        { k: 't', i: 'Commence la phrase par « Je suis sûr que ».', f: 'Vous allez aimer ce film.', a: ['Je suis sûr que vous allez aimer ce film.', 'Je suis sûre que vous allez aimer ce film.'], w: 'Certitude → indicatif : la phrase ne change pas.' }
      ]
    },

    /* ======================= RÉVISION A1-A2 ======================= */
    {
      id: 'articles', g: 'revision', name: 'Les articles : définis, indéfinis, partitifs',
      tip: 'le, la, l’, les : une chose connue ou en général (après aimer, adorer, détester). un, une, des : une chose qu’on peut compter. du, de la, de l’ : une quantité qu’on ne compte pas. Après une négation ou une quantité → de.',
      fiche: [
        ['Définis', 'le, la, l’, les : chose connue, unique ou générale ; après aimer, adorer, préférer, détester.', ['Le soleil brille.', 'J’adore le chocolat.']],
        ['Indéfinis', 'un, une, des : une chose qu’on compte, pas encore identifiée.', ['Il y a une voiture devant la maison.']],
        ['Partitifs', 'du, de la, de l’ (des) : une quantité qu’on ne compte pas.', ['Je mange du pain.', 'Tu veux de l’eau ?']],
        ['de (d’)', 'Après une négation (sauf être) et après une quantité : beaucoup de, un peu de, un kilo de, assez de.', ['Je n’ai pas d’argent.', 'Un kilo de tomates.']],
        ['Contractions', 'à + le = au, à + les = aux ; de + le = du, de + les = des.', ['Je vais au cinéma.', 'Je reviens du marché.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'J’adore ___ chocolat noir.', a: ['le'], w: 'Après adorer → article défini.' },
        { k: 'g', s: 'Je mange ___ chocolat tous les jours.', a: ['du'], w: 'Une quantité non comptable → partitif du.' },
        { k: 'g', s: 'Il y a ___ voiture rouge devant la maison.', a: ['une'], w: 'Une chose qu’on compte, non identifiée → une.' },
        { k: 'g', s: 'Tu veux ___ eau ?', a: ['de l’'], w: 'Partitif devant une voyelle → de l’.' },
        { k: 'g', s: 'Je n’ai pas ___ argent sur moi.', a: ['d’'], w: 'Après une négation → de (d’).' },
        { k: 'g', s: 'Elle a acheté beaucoup ___ fruits au marché.', a: ['de'], w: 'Après une quantité → de.' },
        { k: 'g', s: 'Ce soir, nous allons ___ cinéma.', a: ['au'], w: 'À + le → au.' },
        { k: 'g', s: 'Je reviens ___ marché avec des légumes.', a: ['du'], w: 'De + le → du.' },
        { k: 'q', s: 'Le matin, je bois ___ café.', o: ['du', 'le', 'un de'], c: 0, w: 'Une quantité non comptable → du.' },
        { k: 'q', s: '___ soleil est une étoile.', o: ['Le', 'Un', 'Du'], c: 0, w: 'Une chose unique → le.' },
        { k: 'q', s: 'Je voudrais un kilo ___ tomates.', o: ['de', 'des', 'du'], c: 0, w: 'Après une quantité → de.' },
        { k: 'q', s: 'Ce n’est pas ___ bonne idée.', o: ['une', 'de', 'la'], c: 0, w: 'Avec être, l’article ne change pas après la négation.' }
      ]
    },
    {
      id: 'femnoms', g: 'revision', name: 'Le féminin des noms',
      tip: 'En général + e (un ami → une amie). -er → -ère, -ien → -ienne, -on → -onne, -eur → -euse, -teur → -trice. Certains noms ne changent pas (un / une journaliste).',
      fiche: [
        ['+ e', '', ['un étudiant → une étudiante', 'un ami → une amie']],
        ['Terminaisons', '-er → -ère ; -ien → -ienne ; -on → -onne ; -eur → -euse ; -teur → -trice.', ['un boulanger → une boulangère', 'un musicien → une musicienne', 'un vendeur → une vendeuse', 'un acteur → une actrice']],
        ['Invariables', 'Les noms en -e et beaucoup de professions : seul l’article change.', ['un / une journaliste, un / une architecte, un / une élève']],
        ['Mots différents', '', ['un homme → une femme, un père → une mère, un roi → une reine, un neveu → une nièce']]
      ],
      note: 'Aujourd’hui, on dit aussi une professeure, une ingénieure, une auteure (ou autrice).',
      links: [],
      ex: [
        { k: 'g', s: 'un acteur → une ___', a: ['actrice'], w: '-teur → -trice.' },
        { k: 'g', s: 'un boulanger → une ___', a: ['boulangère'], w: '-er → -ère.' },
        { k: 'g', s: 'un musicien → une ___', a: ['musicienne'], w: '-ien → -ienne.' },
        { k: 'g', s: 'un vendeur → une ___', a: ['vendeuse'], w: '-eur → -euse.' },
        { k: 'g', s: 'un lion → une ___', a: ['lionne'], w: '-on → -onne.' },
        { k: 'g', s: 'un journaliste → une ___', a: ['journaliste'], w: 'Nom en -e : il ne change pas.' },
        { k: 'g', s: 'un directeur → une ___', a: ['directrice'], w: '-teur → -trice.' },
        { k: 'g', s: 'un infirmier → une ___', a: ['infirmière'], w: '-ier → -ière.' },
        { k: 'g', s: 'un coiffeur → une ___', a: ['coiffeuse'], w: '-eur → -euse.' },
        { k: 'g', s: 'un roi → une ___', a: ['reine'], w: 'Mot différent.' },
        { k: 'q', s: 'Ma sœur est ___.', o: ['architecte', 'architectesse', 'architecteuse'], c: 0, w: 'Architecte est invariable.' },
        { k: 'q', s: 'Édith Piaf était une grande ___.', o: ['chanteuse', 'chanteure', 'chantrice'], c: 0, w: 'Chanteur → chanteuse.' }
      ]
    },
    {
      id: 'femadj', g: 'revision', name: 'Le féminin des adjectifs',
      tip: 'En général + e. -e ne change pas. -eux → -euse, -if → -ive, -er → -ère, -el → -elle, -en → -enne, -on → -onne, -et → -ette. Irréguliers : belle, nouvelle, vieille, blanche, longue, douce, gentille.',
      fiche: [
        ['Règle générale', '+ e ; les adjectifs en -e ne changent pas.', ['grand → grande', 'rouge → rouge']],
        ['Terminaisons', '-eux → -euse ; -if → -ive ; -er → -ère ; -el → -elle ; -en → -enne ; -on → -onne ; -et → -ette.', ['heureux → heureuse', 'sportif → sportive', 'cher → chère', 'italien → italienne']],
        ['Irréguliers', '', ['beau → belle ; nouveau → nouvelle ; vieux → vieille', 'blanc → blanche ; long → longue ; doux → douce ; gentil → gentille ; frais → fraîche']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'Il est sportif, elle est ___.', a: ['sportive'], w: '-if → -ive.' },
        { k: 'g', s: 'Il est heureux, elle est ___.', a: ['heureuse'], w: '-eux → -euse.' },
        { k: 'g', s: 'un pull blanc, une chemise ___', a: ['blanche'], w: 'Irrégulier : blanc → blanche.' },
        { k: 'g', s: 'un vieux livre, une ___ maison', a: ['vieille'], w: 'Irrégulier : vieux → vieille.' },
        { k: 'g', s: 'un exercice difficile, une question ___', a: ['difficile'], w: 'Adjectif en -e : il ne change pas.' },
        { k: 'g', s: 'un garçon gentil, une fille ___', a: ['gentille'], w: 'Gentil → gentille.' },
        { k: 'g', s: 'un repas cher, une voiture ___', a: ['chère'], w: '-er → -ère.' },
        { k: 'g', s: 'un manteau long, une robe ___', a: ['longue'], w: 'Irrégulier : long → longue.' },
        { k: 'g', s: 'un ami italien, une amie ___', a: ['italienne'], w: '-en → -enne.' },
        { k: 'g', s: 'un beau jardin, une ___ fleur', a: ['belle'], w: 'Irrégulier : beau → belle.' },
        { k: 'q', s: 'Elle porte une chemise ___.', o: ['neuve', 'neufe', 'neuf'], c: 0, w: '-f → -ve : neuf → neuve.' },
        { k: 'q', s: 'C’est une femme très ___.', o: ['créative', 'créatife', 'créatif'], c: 0, w: '-if → -ive.' }
      ]
    },
    {
      id: 'pluriel', g: 'revision', name: 'Le pluriel des noms et des adjectifs',
      tip: 'En général + s. -s, -x, -z ne changent pas. -eau, -au, -eu → + x. -al → -aux. Exceptions : bleus, pneus, festivals, travaux, bijoux… et œil → yeux.',
      fiche: [
        ['Règle générale', '+ s ; -s, -x, -z ne changent pas.', ['un livre → des livres', 'un prix → des prix']],
        ['-eau, -au, -eu → + x', 'Sauf pneu, bleu → pneus, bleus.', ['un gâteau → des gâteaux', 'un jeu → des jeux']],
        ['-al → -aux', 'Sauf bal, festival, carnaval, banal, final → -als.', ['un journal → des journaux', 'national → nationaux']],
        ['-ou, -ail', '-ou → -ous, sauf bijou, caillou, chou, genou, hibou, joujou, pou → -oux. -ail → -ails, sauf travail → travaux.', ['un trou → des trous ; un bijou → des bijoux']],
        ['Irréguliers', '', ['un œil → des yeux ; monsieur → messieurs ; madame → mesdames']]
      ],
      note: 'Devant un adjectif pluriel placé avant le nom, des devient de (registre soigné) : de beaux livres.',
      links: [],
      ex: [
        { k: 'g', s: 'un gâteau → des ___', a: ['gâteaux'], w: '-eau → -eaux.' },
        { k: 'g', s: 'un journal → des ___', a: ['journaux'], w: '-al → -aux.' },
        { k: 'g', s: 'un bijou → des ___', a: ['bijoux'], w: 'Exception en -ou → -oux.' },
        { k: 'g', s: 'un festival → des ___', a: ['festivals'], w: 'Exception en -al → -als.' },
        { k: 'g', s: 'un œil → des ___', a: ['yeux'], w: 'Pluriel irrégulier.' },
        { k: 'g', s: 'un travail → des ___', a: ['travaux'], w: 'Exception en -ail → -aux.' },
        { k: 'g', s: 'un prix → des ___', a: ['prix'], w: 'Les noms en -x ne changent pas.' },
        { k: 'g', s: 'un jeu → des ___', a: ['jeux'], w: '-eu → -eux.' },
        { k: 'g', s: 'un trou → des ___', a: ['trous'], w: '-ou → -ous (règle générale).' },
        { k: 'g', s: 'un pneu → des ___', a: ['pneus'], w: 'Exception en -eu → -eus.' },
        { k: 'g', s: 'un problème national → des problèmes ___', a: ['nationaux'], w: 'Adjectif en -al → -aux.' },
        { k: 'q', s: 'J’ai vu des ___ dans le champ.', o: ['chevaux', 'chevals', 'chevaus'], c: 0, w: 'Cheval → chevaux.' },
        { k: 'q', s: 'Elle a les yeux ___.', o: ['bleus', 'bleux', 'bleu'], c: 0, w: 'Exception : bleu → bleus.' }
      ]
    },
    {
      id: 'nombres', g: 'revision', name: 'Les nombres',
      tip: '70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix. Et dans 21, 31… 71 (vingt et un, soixante et onze). Vingt et cent prennent un -s quand ils sont multipliés et à la fin du nombre. Mille ne prend jamais de -s.',
      fiche: [
        ['70 à 99', '', ['70 soixante-dix, 71 soixante et onze, 77 soixante-dix-sept', '80 quatre-vingts, 81 quatre-vingt-un, 90 quatre-vingt-dix, 99 quatre-vingt-dix-neuf']],
        ['et', 'Dans 21, 31, 41, 51, 61 et 71 (pas dans 81 ni 91).', ['vingt et un, soixante et onze, quatre-vingt-un']],
        ['Cent, vingt, mille', 'quatre-vingts, deux cents (avec -s), mais quatre-vingt-trois, deux cent un (sans -s). Mille est invariable.', ['300 trois cents, 450 quatre cent cinquante, 2000 deux mille']],
        ['Traits d’union', 'Depuis la réforme de 1990, on peut mettre des traits d’union partout : deux-cent-trois. Les deux écritures sont acceptées.', []],
        ['Ordinaux', '+ -ième ; 1er = premier / première.', ['deuxième, cinquième, neuvième, vingt et unième']]
      ],
      note: 'En Belgique et en Suisse, on dit septante (70) et nonante (90) ; en Suisse, parfois huitante (80).',
      links: [],
      ex: [
        { k: 'g', s: '71 → ___', a: ['soixante et onze', 'soixante-et-onze'], w: 'Soixante et onze (avec et).' },
        { k: 'g', s: '80 → ___', a: ['quatre-vingts'], w: 'Quatre-vingts prend un -s à la fin du nombre.' },
        { k: 'g', s: '85 → ___', a: ['quatre-vingt-cinq'], w: 'Pas de -s à vingt quand un autre nombre suit.' },
        { k: 'g', s: '92 → ___', a: ['quatre-vingt-douze'], w: '80 + 12.' },
        { k: 'g', s: '21 → ___', a: ['vingt et un', 'vingt-et-un'], w: 'Vingt et un (avec et).' },
        { k: 'g', s: '300 → ___', a: ['trois cents', 'trois-cents'], w: 'Cent multiplié, à la fin du nombre → cents.' },
        { k: 'g', s: '450 → ___', a: ['quatre cent cinquante', 'quatre-cent-cinquante'], w: 'Cent suivi d’un autre nombre → pas de -s.' },
        { k: 'g', s: '1966 → ___', a: ['mille neuf cent soixante-six', 'mille-neuf-cent-soixante-six', 'dix-neuf cent soixante-six'], w: 'Mille neuf cent soixante-six (mille ne prend jamais de -s).' },
        { k: 'g', s: '2026 → ___', a: ['deux mille vingt-six', 'deux-mille-vingt-six'], w: 'Mille est invariable : deux mille.' },
        { k: 'g', s: 'le 9e étage → le ___ étage', a: ['neuvième'], w: 'Neuf → neuvième (f → v).' },
        { k: 'g', s: 'la 5e rue → la ___ rue', a: ['cinquième'], w: 'Cinq → cinquième (on ajoute u).' },
        { k: 'q', s: 'Mon grand-père a ___ ans.', o: ['quatre-vingts', 'quatre-vingt', 'quatre-vingts-un'], c: 0, w: 'À la fin du nombre, quatre-vingts prend un -s.' },
        { k: 'q', s: 'Ce vélo coûte ___ euros.', o: ['deux mille', 'deux milles', 'deux mils'], c: 0, w: 'Mille est invariable.' }
      ]
    }
    ,
    {
      id: 'doubles', g: 'pronoms', name: 'Les doubles pronoms',
      tip: 'Ordre : me, te, se, nous, vous → le, la, les → lui, leur → y → en. Je te le donne ; je le lui donne. À l’impératif affirmatif : donne-le-moi !',
      fiche: [
        ['L’ordre', 'me / te / se / nous / vous + le / la / les + lui / leur + y + en.', ['Je te le prête.', 'Je le lui ai dit.', 'Il m’en a parlé.', 'Il y en a.']],
        ['Temps composés', 'Les deux pronoms se placent devant l’auxiliaire ; le participe s’accorde avec le COD placé avant.', ['Les photos ? Je les leur ai envoyées.']],
        ['Impératif affirmatif', 'Verbe + COD + COI, avec des traits d’union ; me → moi.', ['Donne-le-moi !', 'Envoie-la-leur.']],
        ['Impératif négatif', 'Ordre normal, devant le verbe.', ['Ne me le dis pas !']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'Tu me prêtes ta voiture ? — Oui, je ___ ___ prête.', a: [['te'], ['la']], w: 'te (à toi) + la (ta voiture) : je te la prête.' },
        { k: 'g', s: 'Tu as donné le livre à Paul ? — Oui, je ___ ___ ai donné.', a: [['le'], ['lui']], w: 'le (le livre) + lui (à Paul).' },
        { k: 'g', s: 'Tu as envoyé les photos à tes parents ? — Oui, je ___ ___ ai envoyées.', a: [['les'], ['leur']], w: 'les + leur ; envoyées s’accorde avec les photos.' },
        { k: 'g', s: 'Il t’a parlé de son projet ? — Oui, il ___ ___ a parlé.', a: [['m’'], ['en']], w: 'me (m’) + en (de son projet).' },
        { k: 'g', s: 'Il reste du café ? — Oui, il ___ ___ a encore.', a: [['y'], ['en']], w: 'Il y en a : y toujours avant en.' },
        { k: 'q', s: 'Tu peux me prêter ton stylo ? — Oui, je ___ prête.', o: ['te le', 'le te', 'lui le'], c: 0, w: 'Te avant le.' },
        { k: 'q', s: 'Les clés ? Donne-___ !', o: ['les-moi', 'moi-les', 'me-les'], c: 0, w: 'Impératif affirmatif : COD puis moi.' },
        { k: 'q', s: 'La vérité ? Ne ___ dis pas, je préfère ne pas savoir !', o: ['me la', 'la me', 'la-moi'], c: 0, w: 'Impératif négatif : ordre normal, me avant la.' },
        { k: 'q', s: 'Tu offres ce bracelet à ta sœur ? — Oui, je ___ offre.', o: ['le lui', 'lui le', 'la lui'], c: 0, w: 'Le (ce bracelet) avant lui (à ta sœur).' },
        { k: 't', i: 'Remplace les compléments par des pronoms.', f: 'Je donne le dossier à mon chef.', a: ['Je le lui donne.'], w: 'le + lui devant le verbe.' },
        { k: 't', i: 'Remplace « ses photos » par un pronom.', f: 'Elle m’a montré ses photos.', a: ['Elle me les a montrées.'], w: 'me + les ; accord du participe avec les (photos).' },
        { k: 't', i: 'Remplace les compléments par des pronoms.', f: 'Rends le livre à Marie !', a: ['Rends-le-lui !', 'Rends-le-lui.'], w: 'Impératif affirmatif : verbe-COD-COI.' }
      ]
    },
    {
      id: 'but', g: 'connecteurs', name: 'Exprimer le but',
      tip: 'pour / afin de + infinitif (même sujet) ; pour que / afin que + subjonctif (deux sujets différents).',
      fiche: [
        ['pour + infinitif', 'Le sujet est le même.', ['Je fais du sport pour rester en forme.', 'Je note tout pour ne pas oublier.']],
        ['pour que + subjonctif', 'Les sujets sont différents.', ['Je parle lentement pour que tu comprennes.']],
        ['afin de, afin que', 'Même sens, registre formel (lettres, examen).', ['Nous vous écrivons afin d’obtenir des informations.', 'Afin que tout le monde puisse participer, la réunion aura lieu en ligne.']]
      ],
      note: 'Pour ne pas + infinitif : la négation se place devant l’infinitif.',
      links: [],
      ex: [
        { k: 'g', s: 'Je fais du sport ___ rester en forme.', a: ['pour', 'afin de'], w: 'Même sujet → pour + infinitif.' },
        { k: 'g', s: 'Je parle lentement pour que tu ___ (comprendre).', a: ['comprennes'], w: 'Pour que + subjonctif : que tu comprennes.' },
        { k: 'g', s: 'Le professeur répète la consigne afin que tout le monde ___ (pouvoir) suivre.', a: ['puisse'], w: 'Afin que + subjonctif ; tout le monde est singulier : puisse.' },
        { k: 'g', s: 'Il économise ___ s’acheter une moto.', a: ['pour', 'afin de'], w: 'Même sujet → pour + infinitif.' },
        { k: 'g', s: 'J’écris une liste pour ne ___ oublier les courses.', a: ['pas'], w: 'Pour ne pas + infinitif.' },
        { k: 'q', s: 'Je t’appelle ___ tu saches la nouvelle avant les autres.', o: ['pour que', 'pour', 'parce que'], c: 0, w: 'Deux sujets (je / tu) → pour que + subjonctif.' },
        { k: 'q', s: 'Elle étudie le soir ___ réussir son examen.', o: ['pour', 'pour que', 'afin que'], c: 0, w: 'Même sujet → pour + infinitif.' },
        { k: 'q', s: 'Ouvre la fenêtre pour que l’air frais ___.', o: ['entre', 'entrer', 'entrera'], c: 0, w: 'Pour que + subjonctif : qu’il entre.' },
        { k: 'q', s: 'Dans une lettre formelle : « Nous vous écrivons ___ obtenir des informations. »', o: ['afin d’', 'pour que', 'alors'], c: 0, w: 'Registre formel, même sujet → afin de.' },
        { k: 't', i: 'Relie les deux phrases avec « pour que ».', f: 'Je t’explique la règle. Tu la comprends.', a: ['Je t’explique la règle pour que tu la comprennes.'], w: 'Pour que + subjonctif.' },
        { k: 't', i: 'Relie les deux phrases avec « pour ».', f: 'Je vais à la bibliothèque. Je veux étudier au calme.', a: ['Je vais à la bibliothèque pour étudier au calme.'], w: 'Même sujet → pour + infinitif.' }
      ]
    },
    {
      id: 'chronologie', g: 'connecteurs', name: 'La chronologie d’un récit',
      tip: 'd’abord, ensuite, puis, après, enfin ; avant de + infinitif ; après + infinitif passé (après avoir mangé, après être sorti) ; pendant que ; dès que.',
      fiche: [
        ['Les étapes', 'd’abord → ensuite / puis / après → enfin / finalement.', ['D’abord, je me lève ; ensuite, je prends une douche ; enfin, je pars.']],
        ['avant de + infinitif', 'Même sujet.', ['Lave-toi les mains avant de manger.']],
        ['après + infinitif passé', 'avoir ou être à l’infinitif + participe passé.', ['Après avoir fini, j’ai regardé un film.', 'Après être rentrée, elle a dîné.']],
        ['pendant que, quand, dès que', 'Deux actions en même temps ou l’une juste après l’autre.', ['Il chante pendant qu’il cuisine.', 'Dès qu’il est arrivé, nous sommes partis.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: '___, je me lève ; ensuite, je prends une douche ; enfin, je pars au travail.', a: ['d’abord'], w: 'La première étape → d’abord.' },
        { k: 'g', s: 'Lave-toi les mains avant ___ manger.', a: ['de'], w: 'Avant de + infinitif.' },
        { k: 'g', s: 'Après avoir ___ (finir) mes devoirs, j’ai regardé un film.', a: ['fini'], w: 'Après avoir + participe passé.' },
        { k: 'g', s: 'Après être ___ (rentrer) chez elle, Léa a dîné.', a: ['rentrée'], w: 'Après être + participe accordé avec le sujet (Léa).' },
        { k: 'g', s: 'Il écoute la radio ___ il cuisine.', a: ['pendant qu’', 'quand'], w: 'Deux actions en même temps → pendant que.' },
        { k: 'q', s: 'D’abord, on coupe les légumes ; ___, on les fait cuire.', o: ['ensuite', 'enfin', 'd’abord'], c: 0, w: 'Étape suivante → ensuite.' },
        { k: 'q', s: '___, après trois heures de route, nous sommes arrivés.', o: ['Enfin', 'D’abord', 'Avant'], c: 0, w: 'La dernière étape → enfin.' },
        { k: 'q', s: 'Avant ___, il a fermé toutes les fenêtres.', o: ['de partir', 'partir', 'qu’il part'], c: 0, w: 'Avant de + infinitif.' },
        { k: 'q', s: 'Après ___ le film, nous sommes allés au restaurant.', o: ['avoir vu', 'voir', 'avoir voir'], c: 0, w: 'Après + infinitif passé.' },
        { k: 't', i: 'Relie les deux phrases avec « avant de ».', f: 'Je réfléchis. Ensuite, je réponds.', a: ['Je réfléchis avant de répondre.'], w: 'Avant de + infinitif.' },
        { k: 't', i: 'Relie les deux phrases avec « après » + infinitif passé.', f: 'Il a mangé. Ensuite, il est sorti.', a: ['Après avoir mangé, il est sorti.'], w: 'Après avoir + participe passé.' }
      ]
    },
    {
      id: 'presentatifs', g: 'revision', name: 'C’est, il est, il y a, voici',
      tip: 'C’est / ce sont + déterminant + nom, nom propre ou pronom tonique. Il / elle est + adjectif ou profession sans article. Il y a = quelque chose existe. Voici / voilà pour présenter.',
      fiche: [
        ['C’est / ce sont', '+ un, le, mon… + nom ; + nom propre ; + pronom tonique ; + adjectif pour une idée générale.', ['C’est un acteur célèbre.', 'C’est Marie.', 'Ce sont mes parents.', 'Apprendre une langue, c’est passionnant.']],
        ['Il / elle est', '+ adjectif ; + profession, nationalité ou religion sans article.', ['Il est grand.', 'Elle est médecin.', 'Il est français.']],
        ['Il y a', 'Pour dire qu’une chose existe ; invariable.', ['Il y a un parc près de chez moi.', 'Il y a beaucoup de monde.']],
        ['Voici / voilà', 'Pour présenter ou montrer.', ['Voici mon frère.', 'Tiens, voilà ton café !']]
      ],
      note: 'On dit « Il est professeur », mais « C’est un professeur » (avec un article).',
      links: [],
      ex: [
        { k: 'q', s: 'Regarde cet homme : ___ un acteur très connu.', o: ['c’est', 'il est', 'il y a'], c: 0, w: 'Article + nom → c’est.' },
        { k: 'q', s: 'Mon père ? ___ ingénieur.', o: ['Il est', 'C’est', 'Il y a'], c: 0, w: 'Profession sans article → il est.' },
        { k: 'q', s: '___ un supermarché au coin de la rue.', o: ['Il y a', 'C’est', 'Il est'], c: 0, w: 'Pour dire qu’une chose existe → il y a.' },
        { k: 'q', s: 'Apprendre une langue, ___ difficile mais passionnant.', o: ['c’est', 'il est', 'il y a'], c: 0, w: 'Idée générale + adjectif → c’est.' },
        { k: 'q', s: '___ Marie, ma meilleure amie.', o: ['C’est', 'Elle est', 'Il y a'], c: 0, w: 'Nom propre → c’est.' },
        { k: 'q', s: 'Qui sont ces enfants ? — ___ mes neveux.', o: ['Ce sont', 'Ils sont', 'Il y a'], c: 0, w: 'Déterminant + nom pluriel → ce sont.' },
        { k: 'q', s: 'Elle est française ? — Oui, ___ de Lyon.', o: ['elle est', 'c’est', 'il y a'], c: 0, w: 'Elle est + origine.' },
        { k: 'g', s: 'Tiens, ___ ton cadeau !', a: ['voici', 'voilà'], w: 'Pour montrer → voici / voilà.' },
        { k: 'g', s: 'Dans ma ville, il ___ a deux musées.', a: ['y'], w: 'Il y a.' },
        { k: 'g', s: 'Ma sœur ? ___ est très sportive.', a: ['elle'], w: 'Adjectif → elle est.' },
        { k: 'g', s: '___ sont mes parents, sur la photo.', a: ['ce'], w: 'Ce sont + nom pluriel.' }
      ]
    },
    {
      id: 'lieu', g: 'revision', name: 'Les prépositions de lieu',
      tip: 'à + ville ; en + pays féminin (ou qui commence par une voyelle) ; au + pays masculin ; aux + pays pluriel ; chez + personne. Et : dans, sur, sous, devant, derrière, entre, à côté de, en face de, près de, loin de.',
      fiche: [
        ['Villes et pays', 'à Paris ; en France, en Italie, en Iran ; au Portugal, au Japon ; aux États-Unis.', ['Elle habite à Lisbonne, au Portugal.']],
        ['D’où ?', 'de / d’ + ville et pays féminin ; du + pays masculin ; des + pluriel.', ['Je viens de Madrid.', 'Il revient d’Espagne.', 'Elle vient du Japon.']],
        ['chez', '+ personne ou profession.', ['Je dîne chez mes parents.', 'Je vais chez le dentiste.']],
        ['Situer', 'dans, sur, sous, devant, derrière, entre, à côté de, en face de, près de, loin de, au-dessus de, au bord de.', ['Le chat dort sous la table.', 'La pharmacie est en face de la mairie.', 'Le parking est à côté du supermarché.']]
      ],
      note: 'Les pays qui finissent par -e sont souvent féminins (la France, l’Espagne), sauf le Mexique, le Cambodge, le Mozambique…',
      links: [],
      ex: [
        { k: 'g', s: 'Elle habite ___ Lisbonne.', a: ['à'], w: 'Ville → à.' },
        { k: 'g', s: 'Nous partons en vacances ___ Italie.', a: ['en'], w: 'Pays féminin → en.' },
        { k: 'g', s: 'Mon cousin travaille ___ Canada.', a: ['au'], w: 'Pays masculin → au.' },
        { k: 'g', s: 'Ils ont vécu deux ans ___ États-Unis.', a: ['aux'], w: 'Pays pluriel → aux.' },
        { k: 'g', s: 'Demain, je vais ___ le dentiste.', a: ['chez'], w: 'Personne, profession → chez.' },
        { k: 'g', s: 'Le chat dort ___ la table (en dessous).', a: ['sous'], w: 'En dessous → sous.' },
        { k: 'g', s: 'La pharmacie est ___ face de la mairie.', a: ['en'], w: 'En face de.' },
        { k: 'g', s: 'Le parking est à côté ___ supermarché.', a: ['du'], w: 'À côté de + le → du.' },
        { k: 'g', s: 'Ma collègue vient ___ Japon.', a: ['du'], w: 'Venir de + pays masculin → du.' },
        { k: 'g', s: 'Il revient ___ Espagne la semaine prochaine.', a: ['d’'], w: 'De + pays féminin → de (d’ devant une voyelle).' },
        { k: 'q', s: 'J’ai grandi ___ Mexique.', o: ['au', 'en', 'à'], c: 0, w: 'Le Mexique est masculin → au.' },
        { k: 'q', s: 'Ils passent l’été ___ Grèce.', o: ['en', 'au', 'à la'], c: 0, w: 'La Grèce est féminin → en.' },
        { k: 'q', s: 'La banque se trouve ___ la poste et la boulangerie.', o: ['entre', 'devant', 'sur'], c: 0, w: 'Au milieu de deux choses → entre.' },
        { k: 'q', s: 'Ce soir, on dîne ___ mes grands-parents.', o: ['chez', 'à', 'en'], c: 0, w: 'Chez + personne.' }
      ]
    },
    {
      id: 'heure', g: 'revision', name: 'L’heure, la date et la fréquence',
      tip: 'à + heure ; en + mois, année, été, automne, hiver (mais au printemps) ; le lundi = chaque lundi ; le 14 juillet. Fréquence : toujours, souvent, parfois, rarement, jamais, une fois par semaine.',
      fiche: [
        ['L’heure', 'Il est huit heures et quart / et demie / moins le quart ; midi, minuit. À quelle heure ? À 15 heures.', ['Il est sept heures moins le quart.', 'Le cours commence à 15 heures.']],
        ['Mois, années, saisons', 'en mai, en 2026, en été, en automne, en hiver ; au printemps ; au mois de mai.', ['Je suis né en 2004.', 'Au printemps, les arbres fleurissent.']],
        ['Jours et dates', 'lundi = ce lundi ; le lundi = tous les lundis ; le 14 juillet.', ['Je fais du yoga le samedi.', 'Nous sommes le 3 novembre.']],
        ['Fréquence', 'toujours, souvent, parfois, rarement, ne… jamais ; tous les jours ; une fois par semaine.', ['Je vais à la piscine deux fois par semaine.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'Mon anniversaire est ___ mars.', a: ['en'], w: 'Mois → en (ou au mois de).' },
        { k: 'g', s: 'Je suis né ___ 2004.', a: ['en'], w: 'Année → en.' },
        { k: 'g', s: '___ printemps, les arbres sont en fleurs.', a: ['au'], w: 'Exception : au printemps.' },
        { k: 'g', s: '___ hiver, il fait froid.', a: ['en'], w: 'En hiver, en été, en automne.' },
        { k: 'g', s: 'Le cours commence ___ 15 heures.', a: ['à'], w: 'Heure précise → à.' },
        { k: 'g', s: '8 h 15 → Il est huit heures et ___.', a: ['quart'], w: 'Et quart = 15 minutes.' },
        { k: 'g', s: '10 h 30 → Il est dix heures et ___.', a: ['demie'], w: 'Et demie (avec -e après heures).' },
        { k: 'g', s: '6 h 45 → Il est sept heures moins le ___.', a: ['quart'], w: 'Moins le quart = 15 minutes avant.' },
        { k: 'g', s: '12 h 00 → Il est ___.', a: ['midi'], w: '12 heures du jour = midi.' },
        { k: 'q', s: 'Je fais du yoga ___ samedi (tous les samedis).', o: ['le', 'en', 'au'], c: 0, w: 'Le + jour = habitude.' },
        { k: 'q', s: 'Aujourd’hui, nous sommes ___ 14 juillet.', o: ['le', 'en', 'au'], c: 0, w: 'Date → le.' },
        { k: 'q', s: 'Je vais à la piscine deux fois ___ semaine.', o: ['par', 'pour', 'en'], c: 0, w: 'Fréquence → par.' },
        { k: 'q', s: 'Il n’est ___ en retard : c’est quelqu’un de très ponctuel.', o: ['jamais', 'toujours', 'souvent'], c: 0, w: 'Ne… jamais.' }
      ]
    },
    {
      id: 'quantite', g: 'revision', name: 'La quantité et l’intensité',
      tip: 'très + adjectif ou adverbe ; beaucoup + verbe ; beaucoup de, trop de, assez de, peu de + nom ; un kilo de, une bouteille de, une tranche de ; quelques + nom pluriel.',
      fiche: [
        ['très / beaucoup', 'très + adjectif ou adverbe ; verbe + beaucoup ; beaucoup de + nom. Avec avoir faim, avoir peur… → très.', ['Ce gâteau est très bon.', 'Elle travaille beaucoup.', 'Il y a beaucoup de voitures.', 'J’ai très faim.']],
        ['trop, assez, peu', '+ adjectif ; de + nom.', ['C’est trop cher.', 'Il n’y a pas assez de chaises.', 'Il mange peu de légumes.']],
        ['Quantités précises', 'un kilo de, un litre de, une bouteille de, un paquet de, une tranche de, un morceau de.', ['Un kilo de tomates, une bouteille d’eau.']],
        ['quelques, plusieurs', '+ nom pluriel.', ['J’ai invité quelques amis.']]
      ],
      note: 'Après une quantité, on utilise toujours de (d’), jamais du, de la ou des.',
      links: [],
      ex: [
        { k: 'q', s: 'Ce gâteau est ___ bon.', o: ['très', 'beaucoup', 'beaucoup de'], c: 0, w: 'Très + adjectif.' },
        { k: 'q', s: 'Elle travaille ___.', o: ['beaucoup', 'très', 'beaucoup de'], c: 0, w: 'Verbe + beaucoup.' },
        { k: 'q', s: 'Il y a ___ voitures dans cette rue.', o: ['beaucoup de', 'très', 'beaucoup des'], c: 0, w: 'Beaucoup de + nom.' },
        { k: 'q', s: 'Je n’ai pas déjeuné, j’ai ___ faim !', o: ['très', 'beaucoup', 'beaucoup de'], c: 0, w: 'Avoir faim → très faim.' },
        { k: 'q', s: 'Je voudrais une bouteille ___ eau, s’il vous plaît.', o: ['d’', 'de l’', 'des'], c: 0, w: 'Après une quantité → de (d’).' },
        { k: 'g', s: 'Tu as mis ___ de sel : la soupe est immangeable !', a: ['trop'], w: 'Excès → trop de.' },
        { k: 'g', s: 'Il n’y a pas ___ de chaises pour tout le monde.', a: ['assez'], w: 'Quantité suffisante → assez de.' },
        { k: 'g', s: 'Achète un paquet ___ pâtes, s’il te plaît.', a: ['de'], w: 'Après une quantité → de.' },
        { k: 'g', s: 'Ce soir, j’ai invité ___ amis à dîner (deux ou trois).', a: ['quelques'], w: 'Un petit nombre → quelques.' },
        { k: 'g', s: 'Il mange ___ de légumes : il devrait en manger plus.', a: ['peu', 'trop peu'], w: 'Petite quantité → peu de.' }
      ]
    },
    {
      id: 'indefinis', g: 'revision', name: 'Les indéfinis : tout, chaque, quelqu’un…',
      tip: 'tout / toute / tous / toutes + le, la, les… ; tout le monde (+ verbe au singulier) ; chaque + nom singulier ; plusieurs, quelques ; quelqu’un, quelque chose ; aucun(e)… ne.',
      fiche: [
        ['tout', 'tout (m. s.), toute (f. s.), tous (m. pl.), toutes (f. pl.) + déterminant + nom.', ['toute la journée, tous les élèves, toutes les semaines']],
        ['tout le monde', 'Verbe au singulier.', ['Tout le monde est content.']],
        ['chaque, plusieurs, quelques', 'chaque + nom singulier ; plusieurs, quelques + pluriel.', ['Chaque étudiant a un livre.', 'J’ai lu plusieurs livres de cet auteur.']],
        ['quelqu’un, quelque chose', 'Contraires : personne, rien.', ['Il y a quelqu’un ?', 'Tu veux quelque chose ?']],
        ['aucun(e)', 'Avec ne ; s’accorde avec le nom.', ['Je n’ai aucune idée.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'Il a plu ___ la journée.', a: ['toute'], w: 'La journée est féminin singulier → toute.' },
        { k: 'g', s: '___ les élèves ont réussi l’examen.', a: ['tous'], w: 'Masculin pluriel → tous.' },
        { k: 'g', s: 'Je fais du sport ___ les semaines.', a: ['toutes'], w: 'Féminin pluriel → toutes.' },
        { k: 'g', s: 'Il a mangé ___ le gâteau, il n’en reste plus !', a: ['tout'], w: 'Masculin singulier → tout.' },
        { k: 'g', s: '___ le monde est d’accord.', a: ['tout'], w: 'Tout le monde (verbe au singulier).' },
        { k: 'g', s: 'On sonne : il y a ___ à la porte.', a: ['quelqu’un'], w: 'Une personne → quelqu’un.' },
        { k: 'g', s: 'Tu veux boire ___ ?', a: ['quelque chose'], w: 'Une chose → quelque chose.' },
        { k: 'q', s: '___ étudiant a reçu un livre.', o: ['Chaque', 'Chaques', 'Tous'], c: 0, w: 'Chaque est toujours singulier.' },
        { k: 'q', s: 'Tout le monde ___ content.', o: ['est', 'sont', 'êtes'], c: 0, w: 'Tout le monde + verbe au singulier.' },
        { k: 'q', s: 'Je n’ai ___ idée.', o: ['aucune', 'aucun', 'pas aucune'], c: 0, w: 'Idée est féminin → aucune, avec ne (sans pas).' },
        { k: 'q', s: 'J’ai lu ___ livres de cet auteur.', o: ['plusieurs', 'chaque', 'aucun'], c: 0, w: 'Plus d’un → plusieurs + pluriel.' },
        { k: 'q', s: 'Les filles sont ___ arrivées en retard.', o: ['toutes', 'tous', 'tout'], c: 0, w: 'Les filles → toutes.' }
      ]
    },
    {
      id: 'verbesprep', g: 'revision', name: 'Les verbes et leurs prépositions',
      tip: 'jouer à (sport) / jouer de (instrument) ; penser à, s’intéresser à, participer à ; avoir besoin de, se souvenir de ; commencer à, apprendre à, aider à ; décider de, essayer de, oublier de, arrêter de.',
      fiche: [
        ['jouer à / jouer de', 'à + sport ou jeu ; de + instrument (avec contraction : au, du).', ['Je joue au tennis.', 'Il joue du piano, elle joue de la guitare.']],
        ['Verbes + à', 'penser à, s’intéresser à, participer à, répondre à, commencer à, apprendre à, aider quelqu’un à, continuer à.', ['Elle apprend à nager.']],
        ['Verbes + de', 'avoir besoin de, avoir envie de, parler de, se souvenir de, s’occuper de, décider de, essayer de, oublier de, arrêter de, finir de, accepter de, refuser de.', ['J’ai décidé d’apprendre le chinois.', 'Il a arrêté de fumer.']],
        ['Sans préposition', 'aimer, adorer, détester, préférer, vouloir, pouvoir, devoir, savoir, aller + infinitif.', ['J’aime danser.']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'g', s: 'Mon frère joue ___ piano.', a: ['du'], w: 'Instrument → jouer de (du piano).' },
        { k: 'g', s: 'Le samedi, nous jouons ___ football.', a: ['au'], w: 'Sport → jouer à (au football).' },
        { k: 'g', s: 'J’ai décidé ___ apprendre le chinois.', a: ['d’'], w: 'Décider de (d’) + infinitif.' },
        { k: 'g', s: 'Elle a commencé ___ courir l’année dernière.', a: ['à'], w: 'Commencer à + infinitif.' },
        { k: 'g', s: 'N’oublie pas ___ fermer la porte à clé !', a: ['de'], w: 'Oublier de + infinitif.' },
        { k: 'g', s: 'Il a arrêté ___ fumer.', a: ['de'], w: 'Arrêter de + infinitif.' },
        { k: 'g', s: 'Je t’aide ___ porter tes valises.', a: ['à'], w: 'Aider quelqu’un à + infinitif.' },
        { k: 'g', s: 'Tu te souviens ___ notre premier voyage ?', a: ['de'], w: 'Se souvenir de.' },
        { k: 'g', s: 'Il s’intéresse ___ l’architecture.', a: ['à'], w: 'S’intéresser à.' },
        { k: 'q', s: 'J’ai envie ___ une glace.', o: ['d’', 'à', 'pour'], c: 0, w: 'Avoir envie de (d’).' },
        { k: 'q', s: 'Ils participent ___ un concours de photo.', o: ['à', 'de', 'en'], c: 0, w: 'Participer à.' },
        { k: 'q', s: 'Elle apprend ___ nager.', o: ['à', 'de', '—'], c: 0, w: 'Apprendre à + infinitif.' },
        { k: 'q', s: 'Je joue ___ guitare depuis dix ans.', o: ['de la', 'à la', 'la'], c: 0, w: 'Instrument → jouer de la guitare.' }
      ]
    },
    {
      id: 'exclamation', g: 'revision', name: 'L’exclamation',
      tip: 'Quel / quelle / quels / quelles + (adjectif) + nom ! ; Comme / Que + phrase ! ; à l’oral : Qu’est-ce que + phrase !',
      fiche: [
        ['Quel + nom', 'S’accorde avec le nom.', ['Quelle belle vue !', 'Quel temps magnifique !', 'Quels beaux enfants !']],
        ['Comme / Que + phrase', '', ['Comme il fait chaud !', 'Que c’est bon !']],
        ['Qu’est-ce que + phrase', 'Registre familier, à l’oral.', ['Qu’est-ce que tu es drôle !']]
      ],
      note: '',
      links: [],
      ex: [
        { k: 'q', s: '___ belle vue !', o: ['Quelle', 'Quel', 'Comme'], c: 0, w: 'Vue est féminin → quelle.' },
        { k: 'q', s: '___ il fait chaud aujourd’hui !', o: ['Comme', 'Quel', 'Quelle'], c: 0, w: 'Devant une phrase → comme.' },
        { k: 'q', s: '___ beaux enfants !', o: ['Quels', 'Quelles', 'Quel'], c: 0, w: 'Enfants, masculin pluriel → quels.' },
        { k: 'q', s: '___ c’est bon !', o: ['Que', 'Quel', 'Quelle'], c: 0, w: 'Devant une phrase → que (ou comme).' },
        { k: 'g', s: '___ temps magnifique !', a: ['quel'], w: 'Temps est masculin singulier → quel.' },
        { k: 'g', s: '___ histoires incroyables !', a: ['quelles'], w: 'Féminin pluriel → quelles.' },
        { k: 'g', s: 'Qu’est-___ que tu es drôle !', a: ['ce'], w: 'Qu’est-ce que + phrase (oral).' },
        { k: 't', i: 'Transforme en phrase exclamative avec « quel ».', f: 'C’est une bonne idée.', a: ['Quelle bonne idée !'], w: 'Quelle + adjectif + nom.' },
        { k: 't', i: 'Transforme en phrase exclamative avec « comme ».', f: 'Cette ville est belle.', a: ['Comme cette ville est belle !'], w: 'Comme + phrase.' },
        { k: 't', i: 'Transforme en phrase exclamative avec « que ».', f: 'Ces chaussures sont chères.', a: ['Que ces chaussures sont chères !'], w: 'Que + phrase.' }
      ]
    }
  ]
};
// Identifiants des exercices : <thème>-<numéro>
BANK3.topics.forEach(t => t.ex.forEach((x, i) => { x.id = t.id + '-' + (i + 1); x.topic = t.id; }));
if (typeof module !== 'undefined') module.exports = BANK3;
