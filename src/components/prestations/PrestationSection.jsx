import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

/* Titres par catégorie */
const titleMap = {
  couleur:    { main: 'La couleur',    italic: 'sublimée'  },
  coiffage:   { main: "L'art du",      italic: 'coiffage'  },
  techniques: { main: 'Techniques',    italic: 'avancées'  },
}

export default function PrestationSection({ category, reversed = false, bgClass = 'bg-ivory' }) {
  const textRef  = useScrollReveal()
  const imageRef = useRef(null)
  const itemsRef = useRef(null)

  const title = titleMap[category.id] || { main: category.label, italic: '' }

  /* Parallaxe légère */
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      const container = imageRef.current.parentElement
      const rect = container.getBoundingClientRect()
      const progress = (window.innerHeight * 0.5 - rect.top) / window.innerHeight
      const offset = Math.max(-18, Math.min(18, progress * 28))
      imageRef.current.style.transform = `scale(1.12) translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Stagger sur les items */
  useEffect(() => {
    if (!itemsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = itemsRef.current.querySelectorAll('.stagger-item')
          items.forEach((el, i) => setTimeout(() => el.classList.add('stagger-visible'), i * 110))
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(itemsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={category.id} className={`py-20 md:py-28 ${bgClass} scroll-mt-32`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image ── */}
          <div
            className={`relative h-[340px] md:h-[460px] lg:h-[560px] overflow-hidden ${
              reversed ? 'order-1 lg:order-2' : 'order-1'
            }`}
          >
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${category.photos[0]}')`,
                transform: 'scale(1.12)',
                willChange: 'transform',
              }}
            />
            <div className={`absolute inset-0 ${
              reversed
                ? 'bg-gradient-to-l from-transparent to-transparent'
                : 'bg-gradient-to-r from-transparent to-transparent'
            }`} />
          </div>

          {/* ── Texte ── */}
          <div
            ref={textRef}
            className={`reveal ${reversed ? 'order-2 lg:order-1' : 'order-2'}`}
          >
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-copper/50" />
              <span className="font-sans text-xs tracking-[0.28em] uppercase text-copper/75">
                {category.label}
              </span>
            </div>

            {/* Titre */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-5">
              {title.main}<br /><span className="italic">{title.italic}</span>
            </h2>

            {/* Ligne décorative */}
            <div className="line-draw w-16 h-px bg-copper/35 mb-7" />

            {/* Description */}
            <p className="font-sans text-sm text-slate leading-relaxed mb-8 max-w-md">
              {category.description}
            </p>

            {/* Liste de prestations */}
            <div ref={itemsRef} className="space-y-0 mb-10 border border-linen/60">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="stagger-item px-5 py-4 border-b border-linen/50 last:border-b-0 bg-white/40 hover:bg-white/70 transition-colors duration-200"
                >
                  <p className="font-sans text-sm font-medium text-charcoal leading-snug">{item.name}</p>
                  <p className="font-sans text-xs text-slate/60 mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={socialLinks.planity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-copper btn-shimmer inline-flex items-center gap-3 bg-copper text-pearl px-8 py-3.5 font-sans text-xs tracking-[0.22em] uppercase"
              aria-label={`Réserver une prestation ${category.label} sur Planity`}
            >
              <ExternalLink size={14} />
              Réserver
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
