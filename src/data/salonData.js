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
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80',
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
      'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
  {
    id: 'keratine',
    name: 'Soin \u00e0 la k\u00e9ratine',
    description:
      "Traitement restructurant qui referme les \u00e9cailles, r\u00e9duit le frisottis et offre une brillance miroir.",
    duree: '45 min',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
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
