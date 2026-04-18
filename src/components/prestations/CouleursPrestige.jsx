import { useEffect, useRef } from 'react'
import { Check, CalendarDays } from 'lucide-react'
import { balayagesPrestige, socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function CouleursPrestige() {
  const headingRef = useScrollReveal()
  const cardsRef   = useRef(null)

  useEffect(() => {
    const grid = cardsRef.current
    if (!grid) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('stagger-visible'), i * 110)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="couleur" className="py-20 md:py-28 bg-terracotta scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper/40" />
            <span className="font-sans text-xs tracking-[0.30em] uppercase text-copper/70">Couleurs & Balayages</span>
            <span className="w-8 h-px bg-copper/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-pearl leading-tight mb-5">
            L&apos;art de la couleur<br /><span className="italic">sur cheveux texturés</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-copper/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-copper/50" />
            <div className="w-12 h-px bg-copper/25" />
          </div>
          <p className="font-sans text-sm text-stone/55 leading-relaxed max-w-xl mx-auto">
            Chaque balayage est réalisé sur cheveux secs, dans le respect total de votre texture.
            Parce que la couleur doit révéler vos boucles, pas les effacer.
          </p>
        </div>

        {/* Grille de cartes */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {balayagesPrestige.map((p) => (
            <div
              key={p.id}
              className={`stagger-item relative flex flex-col p-8 transition-all duration-300 ${
                p.featured
                  ? 'bg-copper shadow-[0_20px_60px_-10px_rgba(166,90,46,0.40)]'
                  : 'bg-pearl border border-linen hover:border-copper/30'
              }`}
            >
              {/* Badge signature */}
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase bg-pearl text-copper px-4 py-1 shadow-sm">
                    Signature
                  </span>
                </div>
              )}

              {/* Emoji + tag */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{p.emoji}</span>
                <span className={`font-sans text-xs tracking-[0.18em] uppercase px-3 py-1 ${
                  p.featured ? 'bg-pearl/20 text-pearl/80' : 'bg-copper/8 text-copper/60'
                }`}>
                  {p.tag}
                </span>
              </div>

              {/* Nom & sous-titre */}
              <h3 className={`font-serif text-xl font-light leading-snug mb-1 ${p.featured ? 'text-pearl' : 'text-charcoal'}`}>
                {p.name}
              </h3>
              <p className={`font-sans text-xs tracking-wide mb-5 ${p.featured ? 'text-pearl/65' : 'text-slate/55'}`}>
                {p.subtitle}
              </p>

              {/* Description */}
              <p className={`font-sans text-sm leading-relaxed mb-6 ${p.featured ? 'text-pearl/80' : 'text-slate/70'}`}>
                {p.description}
              </p>

              {/* Bienfaits */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {p.bienfaits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      className={`flex-shrink-0 mt-0.5 ${p.featured ? 'text-pearl' : 'text-copper'}`}
                    />
                    <span className={`font-sans text-xs leading-relaxed ${p.featured ? 'text-pearl/80' : 'text-slate/65'}`}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Résultat */}
              <div className={`p-3.5 mb-5 ${p.featured ? 'bg-pearl/15' : 'bg-linen/60'}`}>
                <p className={`font-sans text-xs italic leading-relaxed ${p.featured ? 'text-pearl' : 'text-slate/60'}`}>
                  ✨ {p.resultat}
                </p>
              </div>

              {/* CTA */}
              <a
                href={socialLinks.planity}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase py-3.5 px-6 transition-colors duration-300 ${
                  p.featured
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

        {/* Encart pack */}
        <div className="mt-10 border border-copper/25 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-copper/5">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-copper/70 mb-2">Pack exclusif</p>
            <h3 className="font-serif text-xl text-pearl font-light mb-2">Balayage + Rituel Boucles</h3>
            <p className="font-sans text-sm text-stone/50 leading-relaxed max-w-md">
              Combinez votre balayage avec un soin reconstructeur profond et un coiffage de définition des boucles inclus.
            </p>
          </div>
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 border border-copper/50 text-copper px-8 py-3.5 font-sans text-xs tracking-[0.22em] uppercase hover:bg-copper hover:text-pearl transition-all duration-300"
          >
            <CalendarDays size={13} />
            Réserver le pack
          </a>
        </div>

      </div>
    </section>
  )
}
