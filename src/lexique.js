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
      ['un astronaute', 'un astronauta'], ['la station spatiale', 'la estación espacial'], ['la Terre', 'la Tierra'], ['la Lune', 'la Luna'], ['décoller', 'despegar'], ['atterrir', 'aterrizar'], ['l’espace', 'el espacio', 'm.'] ] }
  ]
};
if (typeof module !== 'undefined') module.exports = LEX;
