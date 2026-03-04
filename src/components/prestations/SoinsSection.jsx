import { useEffect, useRef } from 'react'
import { Clock, ExternalLink } from 'lucide-react'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function SoinsSection({ soins }) {
  const headingRef = useScrollReveal()
  const gridRef    = useRef(null)

  /* Stagger sur les cartes soins */
  useEffect(() => {
    if (!gridRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = gridRef.current.querySelectorAll('.stagger-item')
          items.forEach((el, i) => setTimeout(() => el.classList.add('stagger-visible'), i * 90))
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="soins" className="py-20 md:py-28 bg-charcoal scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper/45" />
            <span className="font-sans text-xs tracking-[0.28em] uppercase text-copper/70">Soins</span>
            <span className="w-8 h-px bg-copper/45" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-pearl leading-tight mb-5">
            Prendre soin de<br /><span className="italic">votre chevelure</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-px bg-copper/40" />
            <div className="w-1 h-1 rounded-full bg-copper/50" />
            <div className="w-10 h-px bg-copper/28" />
          </div>
          <p className="font-sans text-sm text-stone/55 leading-relaxed max-w-lg mx-auto">
            Des soins professionnels adaptés à chaque type de cheveu,<br className="hidden md:block" />
            pour nourrir, réparer et sublimer en profondeur.
          </p>
        </div>

        {/* Grille cartes soins */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {soins.map((soin) => (
            <div
              key={soin.id}
              className="stagger-item group flex flex-col overflow-hidden border border-pearl/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <div
                  className="card-img absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${soin.image}')` }}
                />
                <div className="absolute inset-0 bg-charcoal/45" />
              </div>

              {/* Contenu */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-sm md:text-base text-pearl leading-snug">{soin.name}</h3>
                  <span className="flex-shrink-0 flex items-center gap-1 font-sans text-xs text-stone/45 mt-0.5">
                    <Clock size={11} />
                    {soin.duree}
                  </span>
                </div>
                <p className="font-sans text-xs text-stone/55 leading-relaxed">{soin.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA global */}
        <div className="mt-12 text-center">
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-copper btn-shimmer inline-flex items-center gap-3 bg-copper text-pearl px-10 py-4 font-sans text-xs tracking-[0.22em] uppercase"
            aria-label="Réserver un soin sur Planity"
          >
            <ExternalLink size={14} />
            Réserver un soin
          </a>
        </div>

      </div>
    </section>
  )
}
