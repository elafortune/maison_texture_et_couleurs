import { useEffect, useRef } from 'react'
import { Scissors } from 'lucide-react'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

const sousPrestation = [
  { name: 'Coupe courte structurée',     desc: 'Pour un style affirmé, facile à porter au quotidien.' },
  { name: 'Coupe longue dégradée',       desc: 'Volume et légèreté, mouvement naturel préservé.' },
  { name: 'Frange & contouring visage',  desc: 'La frange taillée sur mesure qui sublime les traits.' },
  { name: 'Coupe transformation',        desc: "Un nouveau départ pour révéler votre identité." },
]

export default function CoupeSection() {
  const textRef  = useScrollReveal()
  const imageRef = useRef(null)
  const itemsRef = useRef(null)

  /* Parallaxe légère sur l'image */
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      const container = imageRef.current.parentElement
      const rect = container.getBoundingClientRect()
      const progress = (window.innerHeight * 0.5 - rect.top) / window.innerHeight
      const offset = Math.max(-20, Math.min(20, progress * 35))
      imageRef.current.style.transform = `scale(1.12) translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Apparition en cascade des sous-prestations */
  useEffect(() => {
    if (!itemsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = itemsRef.current.querySelectorAll('.stagger-item')
          items.forEach((el, i) => setTimeout(() => el.classList.add('stagger-visible'), i * 130))
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(itemsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="coupe" className="py-20 md:py-28 bg-pearl scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Colonne texte — gauche ── */}
          <div ref={textRef} className="reveal order-2 lg:order-1">

            {/* Tag catégorie */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-copper/50" />
              <span className="font-sans text-xs tracking-[0.28em] uppercase text-copper/75">Coupe</span>
            </div>

            {/* Titre */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-5">
              La coupe<br /><span className="italic">signature</span>
            </h2>

            {/* Ligne décorative */}
            <div className="line-draw w-16 h-px bg-copper/35 mb-7" />

            {/* Description */}
            <p className="font-sans text-sm text-slate leading-relaxed mb-10 max-w-md">
              Chaque coupe est pensée selon votre morphologie, votre texture et votre style de vie.
              Notre approche privilégie le mouvement naturel et la facilité d'entretien.
            </p>

            {/* Sous-prestations en cascade */}
            <div ref={itemsRef} className="space-y-3 mb-10">
              {sousPrestation.map((item, i) => (
                <div
                  key={i}
                  className="stagger-item flex items-start gap-4 p-4 border border-linen/70 bg-white/60 hover:border-copper/30 hover:bg-white/90 transition-all duration-250"
                >
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-copper/30 flex items-center justify-center">
                    <Scissors size={10} className="text-copper/70" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal leading-snug">{item.name}</p>
                    <p className="font-sans text-xs text-slate/65 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={socialLinks.planity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-copper btn-shimmer inline-flex items-center gap-3 bg-copper text-pearl px-8 py-3.5 font-sans text-xs tracking-[0.22em] uppercase"
              aria-label="Réserver une coupe sur Planity"
            >
              <Scissors size={14} />
              Réserver une coupe
            </a>
          </div>

          {/* ── Colonne image — droite ── */}
          <div className="order-1 lg:order-2 relative h-[380px] md:h-[500px] lg:h-[620px] overflow-hidden">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/IMG_5959.jpeg')",
                transform: 'scale(1.12)',
                willChange: 'transform',
              }}
            />
            {/* Voile dégradé côté texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-pearl/25 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}
