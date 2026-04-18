import SEO from '../components/seo/SEO'
import SoinsHero      from '../components/soins/SoinsHero'
import PhilosophieSoin from '../components/soins/PhilosophieSoin'
import SoinsYbera     from '../components/soins/SoinsYbera'
import AvantApres     from '../components/soins/AvantApres'
import CTAFinalSoins  from '../components/soins/CTAFinalSoins'

export default function SoinsPage() {
  return (
    <>
      <SEO
        title="Soins Ybera Paris 9e — Renaissance, Lumière, Discipline, Nutrition | Maison Texture"
        description="Soins Ybera Paris : Renaissance Absolue, Lumière Sublime, Discipline Parfaite, Nutrition Suprême. Résultats visibles dès la première séance. Paris 9e."
        canonical="/soins"
      />
      <SoinsHero />
      <PhilosophieSoin />
      <SoinsYbera />
      <AvantApres />
      <CTAFinalSoins />
    </>
  )
}
