import { useEffect, useRef } from 'react'
import { Check, Clock, CalendarDays } from 'lucide-react'
import { lissagesYbera, socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function LissagesYbera() {
  const headingRef = useScrollReveal()
  const cardsRef   = useRef(null)

  useEffect(() => {
    const grid = cardsRef.current
    if (!grid) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('stagger-visible'), i * 130)
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
    <section id="lissages" className="py-20 md:py-28 bg-charcoal scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-pearl/20" />
            <span className="font-sans text-xs tracking-[0.30em] uppercase text-pearl/40">Lissages Ybera Paris</span>
            <span className="w-8 h-px bg-pearl/20" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-pearl leading-tight mb-5">
            Une solution sur-mesure<br /><span className="italic">pour chaque chevelure</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-copper/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-copper/50" />
            <div className="w-12 h-px bg-copper/25" />
          </div>
          <p className="font-sans text-sm text-stone/60 leading-relaxed max-w-lg mx-auto">
            Parce que chaque cheveu est unique, nous proposons plusieurs types de lissages Ybera Paris,
            adaptés à vos besoins et à la nature de vos cheveux.
          </p>
        </div>

        {/* Cartes */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lissagesYbera.map((lissage) => (
            <div
              key={lissage.id}
              className={`stagger-item relative flex flex-col p-8 transition-all duration-300 ${
                lissage.highlight
                  ? 'bg-copper shadow-[0_20px_60px_-10px_rgba(166,90,46,0.40)]'
                  : 'bg-pearl border border-linen hover:border-copper/30'
              }`}
            >
              {/* Badge recommandé */}
              {lissage.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase bg-pearl text-copper px-4 py-1 shadow-sm">
                    Recommandé
                  </span>
                </div>
              )}

              {/* Emoji + nom */}
              <div className="text-2xl mb-5">{lissage.emoji}</div>
              <h3 className={`font-serif text-xl font-light leading-snug mb-1 ${lissage.highlight ? 'text-pearl' : 'text-charcoal'}`}>
                {lissage.name}
              </h3>
              <p className={`font-sans text-xs tracking-wide mb-5 ${lissage.highlight ? 'text-pearl/65' : 'text-slate/55'}`}>
                {lissage.subtitle}
              </p>

              {/* Description */}
              <p className={`font-sans text-sm leading-relaxed mb-6 ${lissage.highlight ? 'text-pearl/80' : 'text-slate/70'}`}>
                {lissage.description}
              </p>

              {/* Bienfaits */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {lissage.bienfaits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      className={`flex-shrink-0 mt-0.5 ${lissage.highlight ? 'text-pearl' : 'text-copper'}`}
                    />
                    <span className={`font-sans text-xs leading-relaxed ${lissage.highlight ? 'text-pearl/80' : 'text-slate/65'}`}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Résultat */}
              <div className={`p-3.5 mb-5 ${lissage.highlight ? 'bg-pearl/15' : 'bg-linen/60'}`}>
                <p className={`font-sans text-xs italic leading-relaxed ${lissage.highlight ? 'text-pearl' : 'text-slate/60'}`}>
                  ✨ {lissage.resultat}
                </p>
              </div>

              {/* Durée */}
              <div className="flex items-center gap-2 mb-6">
                <Clock size={12} className={lissage.highlight ? 'text-pearl/50' : 'text-slate/40'} />
                <span className={`font-sans text-xs ${lissage.highlight ? 'text-pearl/55' : 'text-slate/50'}`}>
                  Tenue : {lissage.tenue}
                </span>
              </div>

              {/* CTA */}
              <a
                href={socialLinks.planity}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase py-3.5 px-6 transition-colors duration-300 ${
                  lissage.highlight
                    ? 'bg-pearl text-copper hover:bg-linen'
                    : 'bg-copper text-pearl hover:bg-charcoal'
                }`}
              >
                <CalendarDays size={13} />
                Réserver
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
