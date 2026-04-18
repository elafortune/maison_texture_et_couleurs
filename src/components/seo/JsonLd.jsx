import { faqItems } from '../../data/salonData'

const BASE_URL = 'https://maison-texture-et-couleurs.com'

const hairSalonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Maison Texture & Couleur",
  "description": "Salon de coiffure expert en coupe, coloration et soins capillaires au coeur de Paris 9e.",
  "url": BASE_URL,
  "telephone": "+33612271566",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "50 rue de la Chaussee d'Antin",
    "addressLocality": "Paris",
    "postalCode": "75009",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8745,
    "longitude": 2.3318
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/maisontexture.couleur",
    "https://www.planity.com/maison-texture-couleurs-75009-paris"
  ],
  "priceRange": "\u20ac\u20ac",
  "image": `${BASE_URL}/IMG_5978.webp`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations capillaires",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coupe femme sur-mesure" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balayage Curl Contouring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coloration globale" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lissage Ybera" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soin Ybera Renaissance" } },
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer,
    },
  })),
}

function Schema({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function JsonLd() {
  return (
    <>
      <Schema data={hairSalonSchema} />
      <Schema data={faqSchema} />
    </>
  )
}
