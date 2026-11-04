// Traducciones al español (tarjetas de verbos y, más adelante, vocabulario).
const LEX = {
  verbes: {
    'être': 'ser, estar', 'avoir': 'tener, haber', 'aller': 'ir', 'venir': 'venir', 'faire': 'hacer', 'dire': 'decir',
    'pouvoir': 'poder', 'vouloir': 'querer', 'devoir': 'deber, tener que', 'savoir': 'saber', 'prendre': 'tomar, coger',
    'mettre': 'poner', 'voir': 'ver', 'parler': 'hablar', 'aimer': 'querer, gustar', 'travailler': 'trabajar',
    'habiter': 'vivir, habitar', 'regarder': 'mirar', 'écouter': 'escuchar', 'chercher': 'buscar', 'trouver': 'encontrar',
    'donner': 'dar', 'demander': 'preguntar, pedir', 'penser': 'pensar', 'jouer': 'jugar, tocar', 'arriver': 'llegar',
    'entrer': 'entrar', 'rester': 'quedarse', 'tomber': 'caer(se)', 'rentrer': 'volver (a casa)', 'monter': 'subir',
    'oublier': 'olvidar', 'étudier': 'estudiar', 'montrer': 'mostrar, enseñar', 'porter': 'llevar (puesto)',
    'laisser': 'dejar', 'gagner': 'ganar', 'aider': 'ayudar', 'utiliser': 'utilizar', 'raconter': 'contar, relatar',
    'préparer': 'preparar', 'visiter': 'visitar', 'fermer': 'cerrar', 'expliquer': 'explicar', 'décider': 'decidir',
    'continuer': 'continuar', 'danser': 'bailar', 'chanter': 'cantar', 'apporter': 'traer', 'marcher': 'andar, caminar',
    'rencontrer': 'conocer, encontrarse con', 'accepter': 'aceptar', 'refuser': 'rechazar, negarse', 'inviter': 'invitar',
    'rêver': 'soñar', 'créer': 'crear', 'manger': 'comer', 'voyager': 'viajar', 'nager': 'nadar', 'changer': 'cambiar',
    'commencer': 'empezar', 'avancer': 'avanzar', 'acheter': 'comprar', 'amener': 'traer (a alguien)',
    'emmener': 'llevar (a alguien)', 'préférer': 'preferir', 'espérer': 'esperar (desear)', 'répéter': 'repetir',
    'appeler': 'llamar', 'rappeler': 'volver a llamar, recordar', 'jeter': 'tirar', 'payer': 'pagar', 'essayer': 'intentar, probar',
    'envoyer': 'enviar', 'nettoyer': 'limpiar', 'employer': 'emplear, usar', 'finir': 'terminar', 'choisir': 'elegir',
    'réussir': 'aprobar, tener éxito', 'grandir': 'crecer', 'maigrir': 'adelgazar', 'réfléchir': 'reflexionar',
    'remplir': 'llenar, rellenar', 'obéir': 'obedecer', 'agir': 'actuar', 'partir': 'irse, marcharse', 'sortir': 'salir',
    'dormir': 'dormir', 'sentir': 'oler, sentir', 'servir': 'servir', 'mentir': 'mentir', 'ouvrir': 'abrir', 'offrir': 'regalar, ofrecer',
    'découvrir': 'descubrir', 'souffrir': 'sufrir', 'courir': 'correr', 'mourir': 'morir', 'tenir': 'sujetar, sostener',
    'obtenir': 'obtener', 'devenir': 'convertirse en, llegar a ser', 'revenir': 'volver', 'apprendre': 'aprender',
    'comprendre': 'entender, comprender', 'promettre': 'prometer', 'permettre': 'permitir', 'attendre': 'esperar (aguardar)',
    'entendre': 'oír', 'répondre': 'responder', 'vendre': 'vender', 'perdre': 'perder', 'descendre': 'bajar',
    'rendre': 'devolver', 'croire': 'creer', 'recevoir': 'recibir', 'apercevoir': 'divisar, percibir', 'boire': 'beber',
    'lire': 'leer', 'écrire': 'escribir', 'décrire': 'describir', 'conduire': 'conducir', 'construire': 'construir',
    'traduire': 'traducir', 'produire': 'producir', 'connaître': 'conocer', 'reconnaître': 'reconocer',
    'paraître': 'parecer', 'disparaître': 'desaparecer', 'naître': 'nacer', 'vivre': 'vivir', 'suivre': 'seguir',
    'plaire': 'gustar, agradar', 'rire': 'reír', 'sourire': 'sonreír', 'craindre': 'temer', 'peindre': 'pintar',
    'éteindre': 'apagar', 'rejoindre': 'reunirse con, alcanzar', 'battre': 'golpear, vencer', 'convaincre': 'convencer',
    'interdire': 'prohibir', 'se lever': 'levantarse', 'se coucher': 'acostarse', 'se réveiller': 'despertarse',
    's’habiller': 'vestirse', 'se promener': 'pasear', 'se dépêcher': 'darse prisa', 's’amuser': 'divertirse',
    'se reposer': 'descansar', 'se laver': 'lavarse', 'se marier': 'casarse', 'se souvenir': 'acordarse',
    's’asseoir': 'sentarse', 'se sentir': 'sentirse', 's’appeler': 'llamarse', 's’inquiéter': 'preocuparse',
    's’occuper': 'ocuparse', 'se taire': 'callarse', 's’ennuyer': 'aburrirse'
  }
  ,
  // Vocabulaire par thème (programme du cours). [français, espagnol, genre si l’article ne le montre pas]
  themes: [
    { id: 'personne', name: 'Décrire une personne', words: [
      ['grand(e)', 'alto/a'], ['petit(e)', 'bajo/a'], ['mince', 'delgado/a'], ['gros / grosse', 'gordo/a'], ['les cheveux bouclés', 'el pelo rizado'], ['les cheveux raides', 'el pelo liso'],
      ['les yeux marron', 'los ojos marrones'], ['barbu', 'con barba'], ['chauve', 'calvo/a'], ['la taille', 'la estatura'], ['sympathique', 'simpático/a'], ['timide', 'tímido/a'],
      ['bavard(e)', 'hablador/a'], ['drôle', 'gracioso/a'], ['têtu(e)', 'testarudo/a'], ['généreux / généreuse', 'generoso/a'], ['égoïste', 'egoísta'], ['paresseux / paresseuse', 'perezoso/a'],
      ['travailleur / travailleuse', 'trabajador/a'], ['jaloux / jalouse', 'celoso/a'] ] },
    { id: 'metiers', name: 'Les métiers et le travail', words: [
      ['le médecin', 'el médico / la médica'], ['l’infirmier / l’infirmière', 'el enfermero / la enfermera'], ['l’avocat / l’avocate', 'el abogado / la abogada'], ['l’ingénieur / l’ingénieure', 'el ingeniero / la ingeniera'],
      ['le / la journaliste', 'el / la periodista'], ['le boulanger / la boulangère', 'el panadero / la panadera'], ['le serveur / la serveuse', 'el camarero / la camarera'], ['le pompier', 'el bombero'],
      ['le plombier', 'el fontanero'], ['l’électricien', 'el electricista', 'm.'], ['le / la comptable', 'el / la contable'], ['le / la fonctionnaire', 'el funcionario / la funcionaria'],
      ['le salaire', 'el sueldo'], ['l’entretien d’embauche', 'la entrevista de trabajo', 'm.'], ['le chômage', 'el paro'], ['le CV', 'el currículum'], ['le stage', 'las prácticas'], ['embaucher', 'contratar'], ['démissionner', 'dimitir'] ] },
    { id: 'benevolat', name: 'Le bénévolat', words: [
      ['le bénévolat', 'el voluntariado'], ['le / la bénévole', 'el / la voluntario/a'], ['une association', 'una asociación'], ['la solidarité', 'la solidaridad'], ['faire un don', 'hacer una donación'],
      ['une collecte', 'una colecta'], ['les sans-abri', 'las personas sin hogar'], ['la banque alimentaire', 'el banco de alimentos'], ['s’engager', 'comprometerse'], ['les personnes âgées', 'las personas mayores'],
      ['aider', 'ayudar'], ['partager', 'compartir'], ['le quartier', 'el barrio'], ['l’entraide', 'la ayuda mutua', 'f.'], ['la pauvreté', 'la pobreza'] ] },
    { id: 'egalite', name: 'L’égalité femmes-hommes', words: [
      ['l’égalité', 'la igualdad', 'f.'], ['l’inégalité', 'la desigualdad', 'f.'], ['les droits', 'los derechos'], ['le droit de vote', 'el derecho al voto'], ['l’écart salarial', 'la brecha salarial', 'm.'],
      ['le harcèlement', 'el acoso'], ['la parité', 'la paridad'], ['la lutte', 'la lucha'], ['revendiquer', 'reivindicar'], ['une manifestation', 'una manifestación'], ['les tâches ménagères', 'las tareas domésticas'],
      ['le congé maternité', 'la baja por maternidad'], ['le congé paternité', 'la baja por paternidad'], ['un poste de direction', 'un puesto directivo'], ['le plafond de verre', 'el techo de cristal'], ['les violences conjugales', 'la violencia de género (en la pareja)'] ] },
    { id: 'medias', name: 'Les jeunes et l’information', words: [
      ['les réseaux sociaux', 'las redes sociales'], ['une fausse information', 'un bulo, una noticia falsa'], ['s’informer', 'informarse'], ['un journal', 'un periódico'], ['un abonnement', 'una suscripción'],
      ['le gros titre', 'el titular'], ['la une', 'la portada (de un periódico)'], ['un influenceur / une influenceuse', 'un influencer'], ['publier', 'publicar'], ['vérifier', 'comprobar'], ['la source', 'la fuente'],
      ['en ligne', 'en línea'], ['un abonné / une abonnée', 'un seguidor / una seguidora'], ['l’esprit critique', 'el espíritu crítico', 'm.'], ['une vidéo virale', 'un vídeo viral'], ['un écran', 'una pantalla'] ] },
    { id: 'sante', name: 'Chez le médecin', words: [
      ['le rendez-vous', 'la cita'], ['l’ordonnance', 'la receta (médica)', 'f.'], ['le médicament', 'el medicamento'], ['un comprimé', 'una pastilla'], ['la pharmacie', 'la farmacia'],
      ['avoir mal à la tête', 'tener dolor de cabeza'], ['avoir de la fièvre', 'tener fiebre'], ['tousser', 'toser'], ['éternuer', 'estornudar'], ['un rhume', 'un resfriado'], ['être enrhumé(e)', 'estar resfriado/a'],
      ['la grippe', 'la gripe'], ['une blessure', 'una herida'], ['se casser la jambe', 'romperse la pierna'], ['les urgences', 'urgencias'], ['une piqûre', 'una inyección'], ['guérir', 'curarse'], ['la douleur', 'el dolor'] ] },
    { id: 'maison', name: 'La maison', words: [
      ['la cuisine', 'la cocina'], ['la salle de bains', 'el cuarto de baño'], ['la chambre', 'el dormitorio'], ['le salon', 'el salón'], ['la salle à manger', 'el comedor'], ['l’entrée', 'la entrada', 'f.'],
      ['le couloir', 'el pasillo'], ['le grenier', 'el desván'], ['la cave', 'el sótano, la bodega'], ['l’escalier', 'la escalera', 'm.'], ['le rez-de-chaussée', 'la planta baja'], ['l’étage', 'el piso, la planta', 'm.'],
      ['le toit', 'el tejado'], ['le loyer', 'el alquiler'], ['le / la propriétaire', 'el propietario / la propietaria'], ['le / la locataire', 'el inquilino / la inquilina'], ['déménager', 'mudarse'], ['un placard', 'un armario empotrado'], ['les volets', 'las contraventanas'] ] },
    { id: 'art', name: 'Le dessin et la peinture', words: [
      ['un tableau', 'un cuadro'], ['une toile', 'un lienzo'], ['le peintre', 'el pintor'], ['le pinceau', 'el pincel'], ['un dessin', 'un dibujo'], ['un crayon', 'un lápiz'], ['un paysage', 'un paisaje'],
      ['un portrait', 'un retrato'], ['une nature morte', 'un bodegón'], ['au premier plan', 'en primer plano'], ['à l’arrière-plan', 'al fondo'], ['les couleurs chaudes', 'los colores cálidos'], ['les couleurs froides', 'los colores fríos'],
      ['une œuvre', 'una obra'], ['un chef-d’œuvre', 'una obra maestra'], ['une exposition', 'una exposición'], ['une huile sur toile', 'un óleo sobre lienzo'], ['esquisser', 'esbozar'] ] },
    { id: 'ville', name: 'La ville et l’architecture', words: [
      ['un bâtiment', 'un edificio'], ['un immeuble', 'un bloque de pisos'], ['la façade', 'la fachada'], ['un quartier', 'un barrio'], ['une place', 'una plaza'], ['un pont', 'un puente'], ['le trottoir', 'la acera'],
      ['un gratte-ciel', 'un rascacielos'], ['la mairie', 'el ayuntamiento'], ['un plan', 'un plano'], ['construire', 'construir'], ['la rénovation', 'la reforma, la rehabilitación'], ['le patrimoine', 'el patrimonio'],
      ['un espace vert', 'una zona verde'], ['la banlieue', 'las afueras'], ['le centre-ville', 'el centro (de la ciudad)'], ['un chantier', 'una obra (en construcción)'], ['l’urbanisme', 'el urbanismo', 'm.'] ] },
    { id: 'techno', name: 'Inventions, technologie et espace', words: [
      ['une invention', 'un invento'], ['un inventeur / une inventrice', 'un inventor / una inventora'], ['un avion', 'un avión'], ['un drone', 'un dron'], ['l’intelligence artificielle', 'la inteligencia artificial', 'f.'],
      ['un logiciel', 'un programa (informático)'], ['une application', 'una aplicación'], ['télécharger', 'descargar'], ['un ordinateur', 'un ordenador'], ['une fusée', 'un cohete'], ['un satellite', 'un satélite'],
      ['un astronaute', 'un astronauta'], ['la station spatiale', 'la estación espacial'], ['la Terre', 'la Tierra'], ['la Lune', 'la Luna'], ['décoller', 'despegar'], ['atterrir', 'aterrizar'], ['l’espace', 'el espacio', 'm.'] ] },
    { id: 'famille', name: 'La famille', words: [
      ['les parents', 'los padres'], ['le frère / la sœur', 'el hermano / la hermana'], ['le fils / la fille', 'el hijo / la hija'], ['le mari / la femme', 'el marido / la mujer'], ['les grands-parents', 'los abuelos'],
      ['le petit-fils / la petite-fille', 'el nieto / la nieta'], ['l’oncle / la tante', 'el tío / la tía'], ['le cousin / la cousine', 'el primo / la prima'], ['le neveu / la nièce', 'el sobrino / la sobrina'],
      ['le beau-père', 'el suegro, el padrastro'], ['la belle-mère', 'la suegra, la madrastra'], ['un enfant unique', 'un hijo único'], ['les jumeaux / les jumelles', 'los gemelos / las gemelas'], ['le couple', 'la pareja'],
      ['célibataire', 'soltero/a'], ['se marier', 'casarse'], ['divorcer', 'divorciarse'], ['s’entendre bien avec', 'llevarse bien con'], ['élever', 'criar (a un hijo)'] ] },
    { id: 'loisirs', name: 'Les loisirs et le sport', words: [
      ['les loisirs', 'el ocio'], ['le temps libre', 'el tiempo libre'], ['un passe-temps', 'un pasatiempo'], ['la randonnée', 'el senderismo'], ['faire du vélo', 'montar en bici'], ['la natation', 'la natación'],
      ['un jeu vidéo', 'un videojuego'], ['la lecture', 'la lectura'], ['le jardinage', 'la jardinería'], ['le bricolage', 'el bricolaje'], ['la pêche', 'la pesca'], ['jouer aux cartes', 'jugar a las cartas'],
      ['un match', 'un partido'], ['un spectateur / une spectatrice', 'un espectador / una espectadora'], ['s’inscrire', 'apuntarse, inscribirse'], ['se détendre', 'relajarse'], ['faire du shopping', 'ir de compras'], ['un entraînement', 'un entrenamiento'] ] },
    { id: 'etudes', name: 'Les études', words: [
      ['l’université', 'la universidad', 'f.'], ['la fac', 'la facultad'], ['un étudiant / une étudiante', 'un estudiante / una estudiante'], ['le cours', 'la clase'], ['un examen', 'un examen'], ['une note', 'una nota'],
      ['réussir un examen', 'aprobar un examen'], ['rater un examen', 'suspender un examen'], ['la bourse', 'la beca'], ['le diplôme', 'el título'], ['la licence', 'el grado'], ['réviser', 'repasar, estudiar'],
      ['un exposé', 'una exposición oral'], ['la bibliothèque', 'la biblioteca'], ['la rentrée', 'la vuelta a clase'], ['un emploi du temps', 'un horario'], ['un mémoire', 'un trabajo de fin de estudios'], ['le programme', 'el temario'] ] },
    { id: 'voyages', name: 'Les voyages et les transports', words: [
      ['un billet', 'un billete'], ['un aller-retour', 'un billete de ida y vuelta'], ['un aller simple', 'un billete de ida'], ['la gare', 'la estación (de tren)'], ['l’aéroport', 'el aeropuerto', 'm.'], ['un vol', 'un vuelo'],
      ['une valise', 'una maleta'], ['un sac à dos', 'una mochila'], ['réserver', 'reservar'], ['une auberge de jeunesse', 'un albergue juvenil'], ['le passeport', 'el pasaporte'], ['la carte d’identité', 'el DNI'],
      ['le quai', 'el andén'], ['une correspondance', 'un transbordo, una conexión'], ['louer une voiture', 'alquilar un coche'], ['le métro', 'el metro'], ['un embouteillage', 'un atasco'], ['le départ', 'la salida'], ['l’arrivée', 'la llegada', 'f.'] ] },
    { id: 'environnement', name: 'L’environnement', words: [
      ['l’environnement', 'el medio ambiente', 'm.'], ['la pollution', 'la contaminación'], ['le réchauffement climatique', 'el calentamiento global'], ['recycler', 'reciclar'], ['les déchets', 'los residuos'],
      ['la poubelle', 'el cubo de basura'], ['trier', 'separar (la basura)'], ['gaspiller', 'desperdiciar'], ['le gaspillage', 'el desperdicio'], ['les énergies renouvelables', 'las energías renovables'], ['une éolienne', 'un aerogenerador'],
      ['protéger', 'proteger'], ['la planète', 'el planeta'], ['la sécheresse', 'la sequía'], ['une inondation', 'una inundación'], ['les transports en commun', 'el transporte público'], ['le développement durable', 'el desarrollo sostenible'], ['la biodiversité', 'la biodiversidad'] ] },
    { id: 'alimentation', name: 'L’alimentation et les courses', words: [
      ['les courses', 'la compra'], ['le marché', 'el mercado'], ['les fruits', 'la fruta'], ['les légumes', 'las verduras'], ['la viande', 'la carne'], ['le poisson', 'el pescado'], ['le pain', 'el pan'],
      ['le fromage', 'el queso'], ['les œufs', 'los huevos'], ['le lait', 'la leche'], ['le beurre', 'la mantequilla'], ['une pomme de terre', 'una patata'], ['le riz', 'el arroz'], ['les pâtes', 'la pasta'],
      ['une recette', 'una receta (de cocina)'], ['un repas', 'una comida'], ['le petit-déjeuner', 'el desayuno'], ['le déjeuner', 'la comida (del mediodía)'], ['le dîner', 'la cena'], ['végétarien(ne)', 'vegetariano/a'] ] },
    { id: 'vetements', name: 'Les vêtements', words: [
      ['un pantalon', 'un pantalón'], ['une chemise', 'una camisa'], ['un pull', 'un jersey'], ['une veste', 'una chaqueta'], ['un manteau', 'un abrigo'], ['une robe', 'un vestido'], ['une jupe', 'una falda'],
      ['un jean', 'unos vaqueros'], ['un tee-shirt', 'una camiseta'], ['les chaussures', 'los zapatos'], ['les baskets', 'las zapatillas de deporte'], ['une écharpe', 'una bufanda'], ['un chapeau', 'un sombrero'],
      ['une ceinture', 'un cinturón'], ['essayer', 'probarse'], ['la taille', 'la talla'], ['la pointure', 'el número (de calzado)'], ['à la mode', 'de moda'], ['la cabine d’essayage', 'el probador'] ] },
    { id: 'meteo', name: 'Le temps qu’il fait', words: [
      ['la météo', 'el pronóstico del tiempo'], ['il fait beau', 'hace buen tiempo'], ['il fait chaud', 'hace calor'], ['il fait froid', 'hace frío'], ['il pleut', 'llueve'], ['il neige', 'nieva'],
      ['le soleil', 'el sol'], ['la pluie', 'la lluvia'], ['la neige', 'la nieve'], ['le vent', 'el viento'], ['un nuage', 'una nube'], ['un orage', 'una tormenta'], ['le brouillard', 'la niebla'],
      ['nuageux / nuageuse', 'nublado/a'], ['ensoleillé(e)', 'soleado/a'], ['un parapluie', 'un paraguas'], ['la canicule', 'la ola de calor'], ['les saisons', 'las estaciones'] ] },
    { id: 'sentiments', name: 'Les sentiments', words: [
      ['heureux / heureuse', 'feliz'], ['triste', 'triste'], ['en colère', 'enfadado/a'], ['avoir peur', 'tener miedo'], ['fier / fière', 'orgulloso/a'], ['déçu(e)', 'decepcionado/a'],
      ['inquiet / inquiète', 'preocupado/a'], ['surpris(e)', 'sorprendido/a'], ['la joie', 'la alegría'], ['la tristesse', 'la tristeza'], ['la colère', 'el enfado'], ['avoir honte', 'tener vergüenza'],
      ['ému(e)', 'emocionado/a'], ['stressé(e)', 'estresado/a'], ['être de bonne humeur', 'estar de buen humor'], ['être de mauvaise humeur', 'estar de mal humor'], ['se sentir seul(e)', 'sentirse solo/a'], ['la confiance', 'la confianza'] ] }
  ]
  ,
  // Textes à trous du vocabulaire : {{réponse}} ou {{réponse|autre réponse acceptée}}
  textes: [
    { th: 'personne', t: 'Mon meilleur ami s’appelle Hugo. Il est {{grand}} et {{mince}}, il a {{les cheveux bouclés}} et une petite barbe : il est {{barbu}}. Il est très {{sympathique}} et un peu {{bavard}} : il parle tout le temps ! Mais il est aussi {{têtu}} : quand il a une idée, il ne change jamais d’avis. Heureusement, il est {{généreux}} et il partage tout.' },
    { th: 'metiers', t: 'Ma sœur est {{infirmière}} à l’hôpital : elle travaille la nuit. Mon frère, lui, cherche du travail : il est au {{chômage}} depuis trois mois. Il a envoyé son {{CV}} à plusieurs entreprises et demain, il a un {{entretien d’embauche}}. Il aimerait devenir {{journaliste}}, mais pour commencer, il va faire un {{stage}} dans un journal local. Le {{salaire}} n’est pas très élevé, mais c’est une bonne expérience.' },
    { th: 'benevolat', t: 'Le samedi, je fais du {{bénévolat}} dans une {{association}} de mon {{quartier}}. Nous aidons les {{sans-abri}} et les {{personnes âgées}} qui vivent seules. En décembre, nous organisons une grande {{collecte}} pour la {{banque alimentaire}}. Pour moi, la {{solidarité}}, c’est essentiel.' },
    { th: 'egalite', t: 'Aujourd’hui encore, l’{{égalité}} entre les femmes et les hommes n’est pas complète. Il existe un {{écart salarial}} : à travail égal, les femmes gagnent souvent moins. Très peu de femmes ont un {{poste de direction}} : c’est ce qu’on appelle le {{plafond de verre}}. À la maison, les {{tâches ménagères}} ne sont pas toujours partagées. Le 8 mars, beaucoup de personnes participent à une {{manifestation}} pour {{revendiquer}} leurs droits.' },
    { th: 'medias', t: 'Aujourd’hui, beaucoup de jeunes s’informent sur les {{réseaux sociaux}} plutôt que dans un {{journal}}. Le problème, ce sont les {{fausses informations}} qui circulent très vite. Avant de {{partager}} une vidéo, il faut {{vérifier}} la {{source}}. Il est important de développer son {{esprit critique}}.' },
    { th: 'sante', t: 'Hier, je me suis senti mal : j’avais {{de la fièvre}} et je toussais beaucoup. J’ai pris {{rendez-vous}} chez le médecin. Il m’a dit que j’avais {{la grippe}}. Il m’a fait une {{ordonnance}} et je suis allé à la {{pharmacie}} acheter les {{médicaments}}. Je dois prendre un {{comprimé}} trois fois par jour. J’espère {{guérir}} vite !' },
    { th: 'maison', t: 'Nous venons de {{déménager}} dans un appartement au deuxième {{étage}}. Il y a trois pièces : un grand {{salon}}, une {{chambre}} et une petite {{cuisine}}. La {{salle de bains}} est au bout du {{couloir}}. Le {{loyer}} est un peu cher, mais le {{propriétaire}} est très sympathique.' },
    { th: 'art', t: 'Ce {{tableau}} est une {{huile sur toile}} de Claude Monet. C’est un {{paysage}} : on voit un jardin avec un pont japonais. Au {{premier plan}}, il y a un étang couvert de fleurs. À l’{{arrière-plan}}, on aperçoit des arbres. Le {{peintre}} utilise surtout des {{couleurs froides}}, du vert et du bleu, qui donnent une impression de calme. C’est un vrai {{chef-d’œuvre}}.' },
    { th: 'ville', t: 'J’habite dans un vieil {{immeuble}} du {{centre-ville}}. Sa {{façade}} a été rénovée l’année dernière. En face, il y a une grande {{place}} avec une fontaine et la {{mairie}}. La ville a beaucoup changé : on a construit un nouveau {{pont}} et de nombreux {{espaces verts}}. Mais il y a toujours un {{chantier}} quelque part, et c’est bruyant !' },
    { th: 'techno', t: 'L’{{avion}} a été inventé au début du XXe siècle. Aujourd’hui, on utilise des {{drones}} pour filmer ou livrer des colis. Grâce à l’{{intelligence artificielle}}, une {{application}} peut traduire une conversation en temps réel. Dans l’espace, une {{fusée}} peut transporter des {{satellites}} ou des {{astronautes}} jusqu’à la {{station spatiale}}.' },
    { th: 'famille', t: 'Je viens d’une grande famille. Mes {{parents}} ont trois enfants : j’ai un {{frère}} et une {{sœur}}. Ma sœur et moi, nous sommes {{jumelles}} : nous sommes nées le même jour ! Mon frère s’est {{marié}} l’année dernière. Mes {{grands-parents}} habitent à la campagne et nous allons chez eux tous les dimanches avec mes {{cousins}}. Je m’{{entends}} très bien avec toute ma famille.' },
    { th: 'loisirs', t: 'Pendant mon {{temps libre}}, j’aime beaucoup faire de la {{randonnée}} en montagne. Le mercredi, je vais à la piscine : la {{natation}}, c’est mon sport préféré. Le soir, je préfère la {{lecture}} ou les {{jeux vidéo}}. Mon père, lui, adore le {{bricolage}} et le {{jardinage}}. Et toi, quel est ton {{passe-temps}} préféré ?' },
    { th: 'etudes', t: 'Je suis {{étudiante}} en architecture à la {{fac}}. Cette année, j’ai beaucoup de {{cours}} et mon {{emploi du temps}} est chargé. Je passe des heures à la {{bibliothèque}} pour {{réviser}}. Le mois dernier, j’ai {{réussi}} tous mes {{examens}} avec de bonnes {{notes}} ! L’année prochaine, j’aimerais obtenir une {{bourse}} pour étudier à l’étranger.' },
    { th: 'voyages', t: 'Pour les vacances, nous avons {{réservé}} un {{vol}} pour Lyon : j’ai acheté un {{aller-retour}} en ligne. Le jour du {{départ}}, nous sommes arrivés à l’{{aéroport}} deux heures avant, avec nos {{valises}}. N’oublie pas ton {{passeport}} ou ta {{carte d’identité}} ! À Lyon, nous avons dormi dans une {{auberge de jeunesse}} et nous avons pris le {{métro}} pour visiter la ville.' },
    { th: 'environnement', t: 'Pour protéger la {{planète}}, chacun peut agir. À la maison, on peut {{trier}} ses {{déchets}} et {{recycler}} le plastique et le verre. Il ne faut pas {{gaspiller}} l’eau ni la nourriture. Pour aller au travail, il vaut mieux prendre les {{transports en commun}} que la voiture. Enfin, les {{énergies renouvelables}} aident à lutter contre le {{réchauffement climatique}}.' },
    { th: 'alimentation', t: 'Le samedi matin, je fais les {{courses}} au {{marché}}. J’achète des {{fruits}}, des {{légumes}} et du {{fromage}}. Comme je suis {{végétarienne}}, je n’achète pas de {{viande}}. Ce soir, je vais préparer une {{recette}} de ma grand-mère : un gratin de {{pommes de terre}}. Pour le {{dîner}}, nous serons six !' },
    { th: 'vetements', t: 'Hier, je suis allée faire du shopping : je cherchais une {{robe}} pour un mariage. Dans un magasin, j’ai trouvé une {{jupe}} et une {{chemise}} très jolies. Je les ai {{essayées}} dans la {{cabine d’essayage}}, mais la {{taille}} n’était pas bonne. Finalement, j’ai acheté des {{chaussures}} et une {{écharpe}}… mais pas de robe !' },
    { th: 'meteo', t: 'Quelle journée ! Ce matin, il y avait du {{brouillard}} et on ne voyait rien. À midi, le {{soleil}} est sorti et il faisait très {{chaud}}. Mais l’après-midi, de gros {{nuages}} noirs sont arrivés, puis il y a eu un {{orage}} avec beaucoup de {{vent}}. Heureusement, j’avais mon {{parapluie}} ! Selon la {{météo}}, demain, il va {{neiger}} en montagne.' },
    { th: 'sentiments', t: 'Le jour des résultats de l’examen, j’étais très {{inquiète}}. Mais j’ai réussi ! Quelle {{joie}} ! Mes parents étaient très {{fiers}} de moi. Ma meilleure amie, elle, a raté l’examen : elle était {{déçue}} et un peu {{triste}}. Je lui ai dit de ne pas avoir {{honte}} : elle le réussira la prochaine fois. Le soir, nous étions tous de bonne {{humeur}}.' }
  ]
};
if (typeof module !== 'undefined') module.exports = LEX;
