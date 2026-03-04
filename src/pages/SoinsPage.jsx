import SoinsHero       from '../components/soins/SoinsHero'
import PhilosophieSoin  from '../components/soins/PhilosophieSoin'
import NosRituels       from '../components/soins/NosRituels'
import ExperienceSalon  from '../components/soins/ExperienceSalon'
import AvantApres       from '../components/soins/AvantApres'
import CTAFinalSoins    from '../components/soins/CTAFinalSoins'

export default function SoinsPage() {
  return (
    <>
      <SoinsHero />        {/* 1 — Hero immersif bleu nuit + Ken Burns                     */}
      <PhilosophieSoin />  {/* 2 — Philosophie split crème / photo macro + 3 piliers       */}
      <NosRituels />       {/* 3 — 5 cartes rituels fond ivoire + stagger + icon pulse     */}
      <ExperienceSalon />  {/* 4 — Expérience salon bleu nuit + lumière animée + cascade   */}
      <AvantApres />       {/* 5 — Slider avant/après draggable + glow séparateur          */}
      <CTAFinalSoins />    {/* 6 — CTA final fond vert feuille + pulse pearl + rassurant   */}
    </>
  )
}
