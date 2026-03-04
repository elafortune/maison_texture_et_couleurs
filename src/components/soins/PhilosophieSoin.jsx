import { useEffect, useRef } from 'react'
import { Droplets, Leaf, Zap } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'

const piliers = [
  { icon: Droplets, label: 'Hydratation', desc: 'Réhydrater en profondeur' },
  { icon: Leaf,     label: 'Nutrition',   desc: 'Nourrir la fibre' },
  { icon: Zap,      label: 'Réparation',  desc: 'Reconstruire les ponts' },
]

export default function PhilosophieSoin() {
  const imageRef   = useRef(null)
  const textRef    = useScrollReveal()
  const cascadeRef = useRef(null)

  /* Parallaxe légère sur la photo */
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      const rect = imageRef.current.parentElement.getBoundingClientRect()
      const progress = (window.innerHeight * 0.5 - rect.top) / window.innerHeight
      const offset = Math.max(-20, Math.min(20, progress * 32))
      imageRef.current.style.transform = `scale(1.12) translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Cascade des éléments texte + icônes */
  useEffect(() => {
    if (!cascadeRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = cascadeRef.current.querySelectorAll('.cascade-item')
          items.forEach((el, i) => setTimeout(() => el.classList.add('cascade-visible'), i * 140))
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(cascadeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-28 bg-pearl overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Colonne texte — gauche ── */}
          <div ref={textRef} className="reveal order-2 lg:order-1">

            {/* Tag */}
            <div className="cascade-item flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-terracotta/50" />
              <span className="font-sans text-xs tracking-[0.30em] uppercase text-terracotta/75">
                Notre philosophie
              </span>
            </div>

            {/* Titre */}
            <div ref={cascadeRef} className="space-y-0">
              <h2 className="cascade-item font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-light text-charcoal leading-tight mb-6">
                Du soin à la<br /><span className="italic">transformation</span>
              </h2>

              {/* Ligne décorative */}
              <div className="cascade-item line-draw w-14 h-px bg-terracotta/35 mb-8" />

              {/* Citation */}
              <p className="cascade-item font-serif text-lg text-charcoal/85 leading-relaxed italic mb-6">
                &ldquo;Un cheveu sain révèle toute la beauté d&apos;une coupe ou d&apos;une couleur.&rdquo;
              </p>

              {/* Corps du texte */}
              <p className="cascade-item font-sans text-sm text-slate leading-relaxed mb-3">
                Nos rituels sont conçus pour hydrater, réparer et renforcer en profondeur,
                tout en respectant votre texture naturelle.
              </p>
              <p className="cascade-item font-sans text-sm text-slate leading-relaxed mb-10">
                Chaque soin débute par un <span className="text-charcoal font-medium">diagnostic personnalisé</span> afin
                d&apos;adapter la formule à vos besoins réels.
              </p>

              {/* 3 piliers — icônes minimalistes vert feuille */}
              <div className="cascade-item grid grid-cols-3 gap-4 pt-6 border-t border-linen/60">
                {piliers.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-terracotta/25 flex items-center justify-center">
                      <Icon size={17} className="text-terracotta" strokeWidth={1.5} />
                    </div>
                    <p className="font-serif text-xs text-charcoal leading-tight">{label}</p>
                    <p className="font-sans text-xs text-slate/55 leading-tight">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Colonne image — droite ── */}
          <div className="order-1 lg:order-2 relative h-[380px] md:h-[520px] lg:h-[640px] overflow-hidden">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80')",
                transform: 'scale(1.12)',
                willChange: 'transform',
              }}
            />
            {/* Voile crème côté texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-pearl/20 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}
