import Hero from '../components/home/Hero'
import SalonPresentation from '../components/home/SalonPresentation'
import PrestationsPreview from '../components/home/PrestationsPreview'
import GalerieInspiration from '../components/home/GalerieInspiration'
import Temoignages from '../components/home/Temoignages'
import BookingCTA from '../components/home/BookingCTA'
import FAQSection from '../components/faq/FAQSection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Noir profond #1C1C1C */}
      <Hero />
      {/* 2. Identité — Vert canard foncé #1F3F3B */}
      <SalonPresentation />
      {/* 3. Prestations — Bleu-vert teal #1F6A73 */}
      <PrestationsPreview />
      {/* 4. Galerie — Gris bleuté clair #A8B8B9 */}
      <GalerieInspiration />
      {/* 5. Témoignages — Beige sable clair #D8CFC6 */}
      <Temoignages />
      {/* 6. Réservation — Terracotta #A65A2E */}
      <BookingCTA />
      {/* 7. FAQ — Blanc #FFFFFF */}
      <FAQSection />
    </>
  )
}
