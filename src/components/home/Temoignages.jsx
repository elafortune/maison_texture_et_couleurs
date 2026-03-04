import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'

const temoignages = [
  {
    nom: 'Sophie M.',
    service: 'Coloration & coupe',
    texte: "Un accueil chaleureux et un résultat incroyable. Je n'ai jamais autant aimé ma couleur.",
  },
  {
    nom: 'Laura B.',
    service: 'Balayage',
    texte: 'Un vrai moment pour soi. Écoute, conseils et perfection.',
  },
  {
    nom: 'Camille D.',
    service: 'Soin Olaplex',
    texte: 'Professionnalisme et douceur. Je recommande les yeux fermés.',
  },
]

/* ── Étoiles animées ── */
function AnimatedStars({ isActive }) {
  return (
    <div className="flex items-center gap-1 mb-6" aria-label="Note : 5 étoiles sur 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={15}
          className={`text-copper fill-copper ${isActive ? 'star-pop' : 'opacity-0 scale-0'}`}
          style={isActive ? { animationDelay: `${i * 0.09}s` } : {}}
        />
      ))}
    </div>
  )
}

/* ── Points de navigation ── */
function Dots({ count, current, onChange }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Témoignage ${i + 1}`}
          className={`rounded-full transition-all duration-400 ${
            i === current
              ? 'w-6 h-1.5 bg-copper'
              : 'w-1.5 h-1.5 bg-stone/30 hover:bg-stone/60'
          }`}
        />
      ))}
    </div>
  )
}

export default function Temoignages() {
  const headingRef = useScrollReveal()
  const [current, setCurrent] = useState(0)

  /* Auto-avance lente */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % temoignages.length)
    }, 4800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="grain-bg py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* Titre */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="font-sans text-xs tracking-[0.28em] uppercase font-medium text-copper mb-3">
            Témoignages
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-pearl leading-tight">
            Elles nous font confiance
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="w-6 h-px bg-copper/50" />
            <div className="w-1 h-1 rounded-full bg-copper/60" />
            <div className="w-10 h-px bg-copper/35" />
          </div>
        </div>

        {/* Slider — cross dissolve */}
        <div className="relative" style={{ minHeight: '260px' }}>
          {temoignages.map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                zIndex: i === current ? 10 : 0,
                pointerEvents: i === current ? 'auto' : 'none',
              }}
              aria-hidden={i !== current}
            >
              {/* Carte témoignage */}
              <div className="bg-white w-full max-w-2xl mx-auto p-8 md:p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]">

                {/* Guillemet décoratif */}
                <div className="font-serif text-5xl text-copper/20 leading-none mb-2 select-none" aria-hidden="true">
                  &ldquo;
                </div>

                {/* Étoiles animées — re-trigger à chaque slide via key */}
                <AnimatedStars key={`stars-${i}-${current === i}`} isActive={i === current} />

                {/* Citation */}
                <blockquote className="font-serif text-lg md:text-xl text-charcoal leading-relaxed mb-8 italic">
                  {t.texte}
                </blockquote>

                {/* Auteur */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-linen flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-sm text-copper">{t.nom[0]}</span>
                  </div>
                  <div>
                    <p className="font-serif text-sm text-charcoal">{t.nom}</p>
                    <p className="font-sans text-xs text-slate/60 tracking-[0.15em] uppercase mt-0.5">{t.service}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="font-sans text-xs text-copper/60 tracking-widest uppercase">Google ★ 5/5</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation par points */}
        <Dots count={temoignages.length} current={current} onChange={setCurrent} />

        {/* Note globale */}
        <p className="text-center font-sans text-xs text-stone/25 mt-6">
          Note moyenne : 5 / 5 · Google Reviews · Paris 9e
        </p>

      </div>
    </section>
  )
}
