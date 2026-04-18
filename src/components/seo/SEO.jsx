import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://maison-texture-et-couleurs.com'

export default function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${BASE_URL}${canonical}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${BASE_URL}${canonical}`} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content={`${BASE_URL}/IMG_5978.jpeg`} />
    </Helmet>
  )
}
