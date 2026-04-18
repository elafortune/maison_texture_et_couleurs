import { useState, useEffect } from 'react'

const navItems = [
  { id: 'couleur',  label: 'Couleurs & Balayages' },
  { id: 'lissages', label: 'Lissages Ybera' },
  { id: 'coiffage', label: 'Coiffage' },
  { id: 'coupe',    label: 'Coupe' },
]

export default function PrestationsStickyNav() {
  const [active, setActive] = useState('couleur')

  /* Détection section active au scroll */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActive(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Scroll fluide vers la section avec offset */
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 130 // navbar fixe + barre sticky
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setActive(id)
  }

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-pearl/96 backdrop-blur-md border-b border-linen/70 shadow-sm">
      <nav
        className="max-w-5xl mx-auto px-4 flex items-center overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
        aria-label="Navigation des prestations"
      >
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`relative flex-shrink-0 px-4 md:px-5 py-4 font-sans text-xs tracking-[0.14em] uppercase transition-colors duration-200 whitespace-nowrap group ${
              active === id
                ? 'text-charcoal'
                : 'text-slate/60 hover:text-charcoal'
            }`}
          >
            {label}

            {/* Indicateur vert feuille — terracotta (#1F6A73) dans la config */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out ${
                active === id
                  ? 'w-full bg-terracotta'
                  : 'w-0 bg-terracotta group-hover:w-full'
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  )
}
