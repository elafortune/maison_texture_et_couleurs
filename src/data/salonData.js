// ─── Couleurs & Balayages Prestige ────────────────────────────────────────────
export const balayagesPrestige = [
  {
    id: 'curl-lumiere',
    emoji: '✨',
    name: 'Balayage Curl Lumière',
    tag: 'Curly Hair Painting',
    subtitle: 'La technique phare pour boucles & frisés',
    description: "Application sur cheveux secs, respect total du mouvement naturel. La lumière épouse chaque boucle pour un résultat d'une beauté unique.",
    bienfaits: [
      'Application sur cheveux secs',
      'Placement mèche par mèche',
      'Lumière naturelle qui suit les boucles',
      'Résultat ultra personnalisé',
    ],
    resultat: 'Une chevelure illuminée qui révèle la beauté naturelle de vos boucles.',
    featured: false,
  },
  {
    id: 'curl-contouring',
    emoji: '💫',
    name: 'Curl Contouring',
    tag: 'Prestation Signature',
    subtitle: 'Placement stratégique & sublimation du visage',
    description: "Notre prestation la plus premium. Chaque mèche est placée selon votre coupe, la forme de votre visage et le comportement naturel de vos boucles. Un résultat spectaculaire, entièrement sur-mesure.",
    bienfaits: [
      'Analyse morphologique personnalisée',
      'Placement stratégique mèche par mèche',
      'Sublimation du volume et de la forme',
      'Résultat unique et spectaculaire',
    ],
    resultat: 'Une transformation qui magnifie votre visage et valorise chaque boucle à la perfection.',
    featured: true,
  },
  {
    id: 'sun-kissed-curls',
    emoji: '☀️',
    name: 'Sun Kissed Curls',
    tag: 'Balayage Soleil',
    subtitle: 'Effet retour de vacances naturel',
    description: "Un éclaircissement léger et lumineux sur les longueurs. Parfait pour les cheveux ondulés à bouclés qui veulent de la lumière sans trop de contraste.",
    bienfaits: [
      'Éclaircissement léger et naturel',
      'Respect des ondulations',
      'Effet lumineux sur les longueurs',
      'Idéal pour ondulés à bouclés',
    ],
    resultat: 'Des cheveux dorés par le soleil, naturels et pleins de vie.',
    featured: false,
  },
  {
    id: 'sculpt-curl-color',
    emoji: '🔥',
    name: 'Sculpt Curl Color',
    tag: 'Balayage Sculptant',
    subtitle: 'Contrastes marqués & relief de boucles',
    description: "Des contrastes affirmés qui sculptent le volume et donnent du caractère. Pour les cheveux très bouclés ou volumineux qui veulent être mis en valeur.",
    bienfaits: [
      'Contrastes marqués et intenses',
      'Travail sur les volumes',
      'Relief et profondeur aux boucles',
      'Parfait pour cheveux très bouclés',
    ],
    resultat: 'Une chevelure sculptée, volumineuse et pleine de caractère.',
    featured: false,
  },
  {
    id: 'glow-curly',
    emoji: '🌈',
    name: 'Glow Curly',
    tag: 'Gloss & Patine',
    subtitle: 'Neutralisation, reflets & brillance miroir',
    description: "Reflets sur-mesure — cendré, doré, cuivré — pour une brillance exceptionnelle et une définition parfaite de chaque boucle.",
    bienfaits: [
      'Neutralisation des reflets indésirables',
      'Ton personnalisé (cendré, doré, cuivré)',
      'Brillance miroir immédiate',
      'Définition des boucles améliorée',
    ],
    resultat: 'Des cheveux lumineux, avec des reflets sublimes et une brillance hors du commun.',
    featured: false,
  },
  {
    id: 'face-framing-curly',
    emoji: '🎯',
    name: 'Face Framing Curly',
    tag: 'Technique Express',
    subtitle: 'Illumination ciblée autour du visage',
    description: "Un éclaircissement précis et stratégique autour du visage pour l'illuminer sans toucher toute la chevelure. Rapide, élégant, efficace.",
    bienfaits: [
      'Éclaircissement ciblé autour du visage',
      'Résultat naturel et subtil',
      'Illumine sans traiter toute la chevelure',
      'Séance rapide',
    ],
    resultat: 'Un éclat lumineux autour du visage qui illumine tout le regard.',
    featured: false,
  },
]

// ─── Lissages Ybera ───────────────────────────────────────────────────────────
export const lissagesYbera = [
  {
    id: 'discovery',
    emoji: '💎',
    name: 'Lissage Discovery',
    subtitle: 'Le lissage naturel & disciplinant',
    description: 'Idéal pour celles qui souhaitent détendre leur chevelure tout en conservant du mouvement.',
    bienfaits: [
      'Réduit les frisottis',
      'Détend la fibre capillaire sans la raidir',
      'Apporte souplesse et brillance',
      'Facilite le coiffage',
    ],
    resultat: 'Des cheveux plus lisses, naturels et faciles à coiffer au quotidien.',
    tenue: "jusqu'à 3 mois",
    parfaitPour: 'un effet naturel sans cheveux plats',
    highlight: false,
  },
  {
    id: 'premium',
    emoji: '👑',
    name: 'Lissage Brésilien Premium',
    subtitle: 'Le lissage ultime & réparation extrême',
    description: 'Le soin le plus complet pour lisser, réparer et sublimer même les cheveux très abîmés.',
    bienfaits: [
      'Lissage longue durée',
      'Réparation intense de la fibre capillaire',
      "Élimine les frisottis à 100%",
      'Apporte douceur et brillance exceptionnelle',
      "Protège contre l'humidité",
    ],
    resultat: 'Des cheveux parfaitement lisses, ultra brillants et profondément réparés.',
    tenue: "jusqu'à 5 mois",
    parfaitPour: 'cheveux épais, très bouclés ou sensibilisés',
    highlight: true,
  },
  {
    id: 'fashion',
    emoji: '🌿',
    name: 'Lissage Fashion',
    subtitle: 'Le lissage intense & élégant',
    description: 'Le compromis parfait entre lissage et soin, pour des cheveux visiblement transformés.',
    bienfaits: [
      'Lisse efficacement la fibre capillaire',
      'Réduit considérablement le volume',
      'Apporte une brillance miroir',
      'Répare en profondeur',
    ],
    resultat: 'Des cheveux lisses, soyeux et parfaitement disciplinés.',
    tenue: '3 à 5 mois',
    parfaitPour: 'un rendu lisse durable et structuré',
    highlight: false,
  },
]

// ─── Soins Ybera ───────────────────────────────────────────────────────────────
export const soinsYbera = [
  {
    id: 'renaissance',
    emoji: '💎',
    name: 'Soin Renaissance Absolue',
    subtitle: 'Réparation profonde & transformation capillaire',
    tag: 'Bot capillaire réparateur profond',
    description: 'Le soin idéal pour les cheveux abîmés, cassants ou sensibilisés par les techniques chimiques et la chaleur.',
    bienfaits: [
      'Répare la fibre capillaire en profondeur',
      'Renforce et stoppe la casse',
      'Redonne élasticité et vitalité',
      'Apporte une brillance intense',
    ],
    resultat: 'Des cheveux visiblement réparés, plus forts et éclatants de santé.',
  },
  {
    id: 'lumiere',
    emoji: '🌟',
    name: 'Soin Lumière Sublime',
    subtitle: 'Hydratation intense & brillance miroir',
    tag: 'Soin hydratant et brillance miroir',
    description: "Un véritable bain d'hydratation pour redonner vie aux cheveux ternes et fatigués.",
    bienfaits: [
      'Hydrate en profondeur',
      'Apporte une brillance miroir',
      'Assouplit et adoucit la fibre',
      'Améliore la texture des cheveux',
    ],
    resultat: 'Une chevelure lumineuse, soyeuse et pleine de mouvement.',
  },
  {
    id: 'discipline',
    emoji: '🧘',
    name: 'Soin Discipline Parfaite',
    subtitle: 'Lissage naturel & anti-frisottis',
    tag: 'Lissage Ybera / anti-frisottis',
    description: 'Parfait pour les cheveux difficiles à coiffer, indisciplinés ou sujets aux frisottis.',
    bienfaits: [
      'Réduit durablement les frisottis',
      'Facilite le coiffage quotidien',
      'Lisse sans effet figé',
      "Protège contre l'humidité",
    ],
    resultat: 'Des cheveux fluides, disciplinés et élégants jour après jour.',
  },
  {
    id: 'nutrition',
    emoji: '🌸',
    name: 'Soin Nutrition Suprême',
    subtitle: 'Nutrition intense & douceur absolue',
    tag: 'Soin nourrissant intense',
    description: 'Le soin parfait pour les cheveux secs, déshydratés ou fragilisés.',
    bienfaits: [
      'Nourrit intensément la fibre capillaire',
      'Répare les longueurs',
      'Apporte douceur et souplesse',
      'Protège durablement',
    ],
    resultat: 'Des cheveux nourris, doux et faciles à coiffer.',
  },
]

// ─── Liens sociaux ────────────────────────────────────────────────────────────
export const socialLinks = {
  instagram: 'https://www.instagram.com/maisontexture.couleur?igsh=YnF0aTd4ZG1kNmZ4',
  tiktok: 'https://www.tiktok.com/',
  planity: 'https://www.planity.com/maison-texture-couleurs-75009-paris',
}

// ─── Prestations ──────────────────────────────────────────────────────────────
export const prestationCategories = [
  {
    id: 'coupe',
    label: 'Coupe',
    icon: '\u2702\uFE0F',
    description: 'Une coupe sur-mesure qui r\u00e9v\u00e8le votre personnalit\u00e9.',
    photos: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
    ],
    items: [
      {
        name: 'Coupe femme',
        description: 'Coupe ciseau ou d\u00e9grad\u00e9, brushing inclus.',
      },
      {
        name: 'Coupe homme',
        description: 'Coupe classique, d\u00e9grad\u00e9 ou coupe tendance.',
      },
      {
        name: 'Coupe enfant (- 12 ans)',
        description: 'Coupe adapt\u00e9e aux plus jeunes.',
      },
      {
        name: 'Frange',
        description: "R\u00e9\u00e9quilibrage ou cr\u00e9ation d'une frange.",
      },
    ],
  },
  {
    id: 'couleur',
    label: 'Couleur',
    icon: '\uD83C\uDFA8',
    description: 'Des couleurs vibrantes, naturelles ou audacieuses, adapt\u00e9es \u00e0 votre style.',
    photos: [
      '/IMG_4504_2.jpeg',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
    ],
    items: [
      {
        name: 'Coloration globale',
        description: 'Couleur pleine sur toute la chevelure.',
      },
      {
        name: 'M\u00e8ches / Balayage',
        description: '\u00c9claircissement partiel ou balayage soleil.',
      },
      {
        name: 'Ombre hair / Tie & dye',
        description: "D\u00e9grad\u00e9 de couleur pour un effet naturel.",
      },
      {
        name: 'Couleur fantaisie',
        description: 'Teintes vives, pastels ou cr\u00e9ations uniques.',
      },
      {
        name: 'Correction de couleur',
        description: "R\u00e9\u00e9quilibrage ou neutralisation de teinte.",
      },
    ],
  },
  {
    id: 'coiffage',
    label: 'Coiffage',
    icon: '\u2728',
    description: 'Mises en forme professionnelles pour chaque occasion.',
    photos: [
      '/IMG_7209.jpeg',
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    ],
    items: [
      {
        name: 'Brushing',
        description: 'Lissage ou mise en forme au brushing.',
      },
      {
        name: 'Lissage/Gainage',
        description: 'Coiffage liss\u00e9 \u00e0 la pince ou au lisseur.',
      },
      {
        name: 'Mise en plis / Ondulations',
        description: 'Bigoudis, ondulations naturelles ou waves.',
      },
      {
        name: 'Chignon & coiffures de c\u00e9r\u00e9monie',
        description: "\u00c9labor\u00e9es pour mariages et \u00e9v\u00e9nements.",
      },
      {
        name: 'Tresses & locks',
        description: 'Tresses plaqu\u00e9es, box braids, cornrows et locks.',
      },
    ],
  },
  {
    id: 'techniques',
    label: 'Techniques sp\u00e9ciales',
    icon: '\u2728',
    description: 'Des traitements avanc\u00e9s pour sublimer et prot\u00e9ger votre chevelure.',
    photos: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
    ],
    items: [
      {
        name: 'Lissage br\u00e9silien',
        description: "Lissage k\u00e9ratine longue dur\u00e9e pour une brillance et une douceur exceptionnelles.",
      },
      {
        name: 'Permanente',
        description: "Boucles durables ou d\u00e9frisation adapt\u00e9e \u00e0 votre type de cheveux.",
      },
      {
        name: 'Extensions',
        description: "Pose d'extensions \u00e0 k\u00e9ratine, bandes ou tissages.",
      },
    ],
  },
]

// ─── Soins ────────────────────────────────────────────────────────────────────
export const soins = [
  {
    id: 'hydratation',
    name: 'Soin hydratant intense',
    description:
      "Masque nourrissant enrichi en huiles v\u00e9g\u00e9tales qui restaure la souplesse et l'\u00e9clat des cheveux secs ou ab\u00eem\u00e9s.",
    duree: '30 min',
    image: '/IMG_4501.jpeg',
  },
  {
    id: 'keratine',
    name: 'Soin \u00e0 la k\u00e9ratine',
    description:
      "Traitement restructurant qui referme les \u00e9cailles, r\u00e9duit le frisottis et offre une brillance miroir.",
    duree: '45 min',
    image: '/IMG_6767.jpeg',
  },
  {
    id: 'cuir-chevelu',
    name: 'Soin cuir chevelu',
    description:
      "Diagnostic + massage d\u00e9tox pour r\u00e9\u00e9quilibrer le cuir chevelu, stimuler la pousse et r\u00e9duire les pellicules.",
    duree: '40 min',
    image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80',
  },
  {
    id: 'couleur-protect',
    name: 'Soin protecteur couleur',
    description:
      "Formule sp\u00e9cifique qui prolonge l'\u00e9clat des colorations et prot\u00e8ge la fibre capillaire des agressions ext\u00e9rieures.",
    duree: '20 min',
    image: 'https://images.pexels.com/photos/3993323/pexels-photo-3993323.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'olaplex',
    name: 'Traitement Olaplex',
    description:
      "Reconstruction mol\u00e9culaire des ponts disulfures pour r\u00e9parer en profondeur les cheveux tr\u00e8s ab\u00eem\u00e9s.",
    duree: '30 min',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
  },
  {
    id: 'huile',
    name: "Bain d'huile & massage",
    description:
      "Application d'huiles essentielles chauff\u00e9es et massage cr\u00e2nien pour une relaxation totale et un boost de brillance.",
    duree: '35 min',
    image: '/IMG_6770.jpeg',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    question: "Quelle coloration est adaptée à ma texture de cheveux ?",
    answer:
      "Tout dépend de votre type de cheveu et de votre objectif. Lors de votre consultation, notre coloriste analyse votre fibre capillaire, votre historique de coloration et votre style de vie pour recommander la technique la plus adaptée — coloration globale, balayage ou décoloration douce.",
  },
  {
    question: "Combien de temps dure un balayage ?",
    answer:
      "Un balayage prend en général entre 2h et 3h30, selon la longueur de vos cheveux, la technique choisie et le résultat souhaité. Nous prenons le temps nécessaire pour garantir un résultat naturel et lumineux.",
  },
  {
    question: "Dois-je faire un soin avant une coloration ?",
    answer:
      "Oui, c'est même recommandé. Un soin préparatoire renforce la fibre capillaire et permet une meilleure fixation de la couleur. Nous proposons des soins Olaplex et des traitements protecteurs intégrés à votre prestation colorisation.",
  },
  {
    question: "Comment entretenir ma coupe entre deux visites ?",
    answer:
      "Nous vous conseillons toujours en fin de prestation sur les produits adaptés à votre type de cheveu et les gestes quotidiens pour maintenir votre coupe. Un shampooing adapté, un soin hebdomadaire et une petite routine suffisent généralement.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez réserver directement en ligne via Planity — la confirmation est instantanée. Vous pouvez aussi nous contacter par téléphone ou nous écrire sur Instagram. Nous répondons sous 24h.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer:
      "Nous vous demandons de nous prévenir au moins 24h à l'avance en cas d'annulation ou de report. Cela nous permet d'offrir le créneau à un autre client.",
  },
]
