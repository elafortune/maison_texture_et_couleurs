import { Outlet } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import JsonLd from '../seo/JsonLd'
import { socialLinks } from '../../data/salonData'

export default function Layout() {
  return (
    <>
      <JsonLd />
      <ScrollToTop />
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />

      {/* Bouton sticky Planity — mobile uniquement */}
      <a
        href={socialLinks.planity}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Réserver en ligne sur Planity"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-copper text-pearl py-4 px-6 flex items-center justify-center gap-3 font-sans text-xs tracking-[0.2em] uppercase shadow-lg"
      >
        <CalendarDays size={16} />
        Réserver en ligne
      </a>
    </>
  )
}
