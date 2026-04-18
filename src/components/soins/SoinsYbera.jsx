import { useEffect, useRef } from 'react'
import { Check, CalendarDays } from 'lucide-react'
import { soinsYbera, socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function SoinsYbera() {
  const headingRef = useScrollReveal()
  const gridRef    = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('stagger-visible'), i * 120)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="soins-ybera" className="py-20 md:py-32 bg-ivory scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-terracotta/40" />
            <span className="font-sans text-xs tracking-[0.30em] uppercase text-terracotta/70">Soins Ybera Paris</span>
            <span className="w-8 h-px bg-terracotta/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-5">
            Des soins conçus pour<br /><span className="italic">sublimer votre chevelure</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-terracotta/35" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/50" />
            <div className="w-14 h-px bg-terracotta/22" />
          </div>
          <p className="font-sans text-sm text-slate leading-relaxed max-w-lg mx-auto">
            Des résultats visibles dès la première séance.
            Des cheveux sublimés, brillants et en pleine santé.
          </p>
        </div>

        {/* Grille 2×2 */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soinsYbera.map((soin) => (
            <div
              key={soin.id}
              className="stagger-item group bg-white border border-linen/70 hover:border-terracotta/25 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(166,90,46,0.12)] transition-all duration-350 flex flex-col p-8"
            >
              {/* Header carte */}
              <div className="flex items-start gap-4 mb-5">
                <span className="text-2xl flex-shrink-0 mt-0.5">{soin.emoji}</span>
                <div>
                  <span className="inline-block font-sans text-xs tracking-[0.18em] uppercase text-terracotta/65 bg-terracotta/8 px-3 py-1 mb-2">
                    {soin.tag}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal font-light leading-snug">
                    {soin.name}
                  </h3>
                  <p className="font-sans text-xs text-slate/55 mt-1">{soin.subtitle}</p>
                </div>
              </div>

              {/* Ligne décorative */}
              <div className="w-8 h-px bg-terracotta/30 mb-5 transition-all duration-300 group-hover:w-14 group-hover:bg-terracotta/55" />

              {/* Description */}
              <p className="font-sans text-sm text-slate leading-relaxed mb-5">
                {soin.description}
              </p>

              {/* Bienfaits */}
              <ul className="space-y-2 mb-5 flex-1">
                {soin.bienfaits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={12} strokeWidth={2.5} className="flex-shrink-0 mt-0.5 text-terracotta" />
                    <span className="font-sans text-xs text-slate/70 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Résultat */}
              <div className="bg-linen/60 border-l-2 border-terracotta/40 pl-4 py-3 pr-3">
                <p className="font-sans text-xs text-slate italic leading-relaxed">
                  ✨ {soin.resultat}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-5">
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-copper btn-shimmer inline-flex items-center gap-3 bg-copper text-pearl px-10 py-4 font-sans text-xs tracking-[0.22em] uppercase"
            aria-label="Réserver un soin sur Planity"
          >
            <CalendarDays size={15} />
            Réserver mon soin
          </a>
          <p className="font-sans text-xs text-charcoal/30 tracking-[0.12em]">
            Diagnostic capillaire offert à chaque première visite
          </p>
        </div>

      </div>
    </section>
  )
}
