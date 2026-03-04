import { useEffect, useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

/* Phrases qui apparaissent mot à mot */
const lignes = [
  "Plus qu\u2019un soin, une pause.",
  "Un rituel o\u00f9 le temps ralentit,",
  "o\u00f9 chaque geste est pr\u00e9cis,",
  "o\u00f9 la d\u00e9tente accompagne la transformation.",
]

export default function ExperienceSalon() {
  const headingRef = useScrollReveal()
  const linesRef   = useRef(null)

  /* Apparition progressive des lignes au scroll */
  useEffect(() => {
    if (!linesRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = linesRef.current.querySelectorAll('.cascade-item')
          items.forEach((el, i) => setTimeout(() => el.classList.add('cascade-visible'), i * 210))
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(linesRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: '#0B1525' }}>

      {/* ── Fond slow-motion flou ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="video-slowmo absolute inset-[-6%] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1600&q=80')",
            filter: 'blur(9px) brightness(0.20) saturate(0.55)',
          }}
        />
        {/* Voile bleu nuit */}
        <div className="absolute inset-0 bg-[#0B1525]/70" />
      </div>

      {/* ── Lumière ambiante animée ── */}
      <div
        className="light-drift absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: '70%',
          height: '70%',
          top: '15%',
          left: '15%',
          background: 'radial-gradient(ellipse, rgba(31,106,115,0.55) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* ── Contenu ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Surtitre */}
        <div ref={headingRef} className="reveal">
          <p className="font-sans text-xs tracking-[0.38em] uppercase text-terracotta-light/60 mb-8">
            L&apos;expérience en salon
          </p>

          {/* Titre */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-pearl leading-[1.15] mb-10">
            Un moment<br />
            <span className="italic">pour vous</span>
          </h2>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-px bg-pearl/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta-light/50" />
            <div className="w-10 h-px bg-pearl/15" />
          </div>
        </div>

        {/* Lignes de texte — apparition progressive */}
        <div ref={linesRef} className="space-y-3">
          {lignes.map((ligne, i) => (
            <p
              key={i}
              className={`cascade-item font-serif leading-relaxed ${
                i === 0
                  ? 'text-xl md:text-2xl text-pearl/90 font-light'
                  : 'text-base md:text-lg text-pearl/55 font-light italic'
              }`}
            >
              {ligne}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
