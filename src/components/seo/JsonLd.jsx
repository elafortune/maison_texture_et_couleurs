export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Maison Texture & Couleur",
    "description": "Salon de coiffure expert en coupe, coloration et soins capillaires au cœur de Paris 9e.",
    "url": "https://maison-texture-et-couleurs.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 rue de la Chaussée d'Antin",
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
    "priceRange": "€€",
    "image": "https://maison-texture-et-couleurs.com/IMG_5978.jpeg"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
