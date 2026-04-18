import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://maison-texture-et-couleurs.com'
const OG_IMAGE = `${BASE_URL}/IMG_5978.webp`

function buildBreadcrumb(canonical) {
  if (canonical === '/') return null
  const label = canonical === '/prestations' ? 'Prestations' : 'Soins'
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": label, "item": `${BASE_URL}${canonical}` },
    ],
  })
}

export default function SEO({ title, description, canonical, ogImage = OG_IMAGE }) {
  const url = `${BASE_URL}${canonical}`
  const breadcrumb = buildBreadcrumb(canonical)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {breadcrumb && (
        <script type="application/ld+json">{breadcrumb}</script>
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content="Maison Texture & Couleur" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Maison Texture & Couleur — Salon Paris 9e" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
