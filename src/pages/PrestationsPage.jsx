import SEO from '../components/seo/SEO'
import PrestationsHero      from '../components/prestations/PrestationsHero'
import PrestationsStickyNav from '../components/prestations/PrestationsStickyNav'
import CouleursPrestige     from '../components/prestations/CouleursPrestige'
import LissagesYbera        from '../components/prestations/LissagesYbera'
import PrestationSection    from '../components/prestations/PrestationSection'
import CoupeSection         from '../components/prestations/CoupeSection'
import { prestationCategories } from '../data/salonData'

export default function PrestationsPage() {
  const coiffage = prestationCategories.find((c) => c.id === 'coiffage')

  return (
    <>
      <SEO
        title="Couleurs, Balayages & Lissages Ybera | Maison Texture Paris 9e"
        description="Balayages Curl Contouring, Curly Hair Painting, Lissages Ybera (Discovery, Fashion, Premium), coiffage et coupe sur-mesure. Salon Paris 9e."
        canonical="/prestations"
      />
      <PrestationsHero />
      <PrestationsStickyNav />
      <CouleursPrestige />
      <LissagesYbera />
      <PrestationSection category={coiffage} reversed={false} bgClass="bg-ivory" />
      <CoupeSection />
    </>
  )
}
