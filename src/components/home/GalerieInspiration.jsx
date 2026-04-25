import { useEffect, useRef, useState } from 'react'
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import { socialLinks } from '../../data/salonData'

/* ── Photos avec aspect ratios variés pour effet Pinterest ── */
const photos = [
  { id: 1, img: '/IMG_7556.webp', label: 'Coupe précision', alt: 'Coupe précision cheveux bouclés Paris 9e — Maison Texture & Couleur', aspect: 'aspect-[3/4]', parallax: true },
  { id: 2, img: '/IMG_6097_3.webp', label: 'Balayage soleil', alt: 'Balayage Curly Hair Painting Paris 9e — Maison Texture & Couleur', aspect: 'aspect-square', parallax: false },
  { id: 3, img: '/IMG_5926.webp', label: 'Coloration rousse', alt: 'Coloration rousse sur-mesure salon Paris 9e — Maison Texture & Couleur', aspect: 'aspect-[2/3]', parallax: true },
  { id: 4, img: '/coiffage_volume.webp', label: 'Coiffage volume', alt: 'Coiffage volume cheveux texturés Paris — Maison Texture & Couleur', aspect: 'aspect-[4/3]', parallax: false },
  { id: 5, img: '/IMG_7180.webp', label: 'Soin brillance', alt: 'Soin Ybera brillance et nutrition capillaire Paris 9e — Maison Texture & Couleur', aspect: 'aspect-[3/4]', parallax: false },
  { id: 6, img: '/IMG_5405_2.webp', label: 'Lissage kératine', alt: 'Lissage Ybera kératine cheveux frisés Paris — Maison Texture & Couleur', aspect: 'aspect-square', parallax: false },
]

/* ── Slider Avant / Après ── */
function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const calcPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
  }

  return (
    <div className="mt-6">
      <p className="font-sans text-xs tracking-[0.25em] uppercase text-pearl/50 text-center mb-3">
        Glisser pour comparer
      </p>
      <div
        ref={containerRef}
        className="relative aspect-[16/9] overflow-hidden cursor-col-resize select-none bg-charcoal"
        onMouseDown={(e) => { isDragging.current = true; setPos(calcPos(e.clientX)) }}
        onMouseMove={(e) => { if (isDragging.current) setPos(calcPos(e.clientX)) }}
        onMouseUp={() => { isDragging.current = false }}
        onMouseLeave={() => { isDragging.current = false }}
        onTouchStart={(e) => setPos(calcPos(e.touches[0].clientX))}
        onTouchMove={(e) => { e.preventDefault(); setPos(calcPos(e.touches[0].clientX)) }}
      >
        {/* Image APRÈS — fond complet */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/IMG_6005.webp')", filter: 'saturate(1.2) brightness(1.05)' }} />

        {/* Image AVANT — clippée à gauche */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/IMG_5974.webp')",
              width: `${10000 / pos}%`,
              filter: 'saturate(0.6) brightness(0.85)',
            }}
          />
        </div>

        {/* Ligne diviseur */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-pearl/90 z-10 pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          {/* Poignée */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pearl shadow-lg flex items-center justify-center">
            <ChevronLeft size={11} className="text-charcoal" />
            <ChevronRight size={11} className="text-charcoal" />
          </div>
        </div>

        {/* Labels fixes */}
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
          <span className="font-sans text-xs uppercase tracking-widest text-pearl bg-onyx/70 px-3 py-1">Avant</span>
        </div>
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
          <span className="font-sans text-xs uppercase tracking-widest text-pearl bg-copper/85 px-3 py-1">Après</span>
        </div>
      </div>
    </div>
  )
}

/* ── Composant principal ── */
export default function GalerieInspiration() {
  const headingRef  = useScrollReveal()
  const gridRef     = useRef(null)
  const parallaxRef = useRef([])   /* refs pour les grandes images avec parallaxe */

  /* Stagger d'apparition des photos */
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

  /* Micro-parallaxe — rAF pour éviter le forced reflow */
  useEffect(() => {
    let rafId = null
    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        parallaxRef.current.forEach((img) => {
          if (!img) return
          const rect = img.parentElement.getBoundingClientRect()
          const offset = ((rect.top + rect.height / 2) - window.innerHeight / 2) * 0.06
          img.style.transform = `translateY(${offset}px) scale(1.12)`
        })
        rafId = null
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  let parallaxIndex = 0

  return (
    <section className="py-20 md:py-28 bg-terracotta">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div ref={headingRef} className="reveal text-center mb-12">
          <p className="font-sans text-xs tracking-[0.28em] uppercase font-medium text-pearl/60 mb-3">
            Galerie
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-pearl leading-tight">
            Nos inspirations
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 mb-5">
            <div className="w-6 h-px bg-pearl/40" />
            <div className="w-1 h-1 rounded-full bg-pearl/50" />
            <div className="w-10 h-px bg-pearl/30" />
          </div>
          <p className="font-sans text-sm text-pearl/65 leading-relaxed max-w-lg mx-auto">
            Des créations réelles, des transformations authentiques. Laissez-vous inspirer.
          </p>
        </div>

        {/* Grille masonry type Pinterest */}
        <div ref={gridRef} className="columns-2 md:columns-3 gap-3">
          {photos.map((photo) => {
            const isParallax = photo.parallax
            const pIdx = isParallax ? parallaxIndex++ : null

            return (
              <div
                key={photo.id}
                className="stagger-item mb-3 break-inside-avoid group relative overflow-hidden"
              >
                <div className={`relative ${photo.aspect} overflow-hidden bg-charcoal/30`}>
                  <img
                    ref={isParallax ? (el) => { parallaxRef.current[pIdx] = el } : null}
                    src={photo.img}
                    alt={photo.alt}
                    className={`w-full h-full object-cover transition-transform duration-500 ${!isParallax ? 'group-hover:scale-105' : ''}`}
                    style={isParallax ? { transform: 'scale(1.12)', transformOrigin: 'center' } : {}}
                    loading="lazy"
                  />

                  {/* Overlay bleu nuit au hover */}
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/55 transition-colors duration-400" />

                  {/* Label hover */}
                  <div className="absolute inset-0 flex items-end p-4">
                    <p className="font-serif text-sm text-pearl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {photo.label}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slider Avant / Après */}
        <BeforeAfter />

        {/* Bouton Instagram */}
        <div className="mt-10 text-center reveal">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-pearl text-charcoal px-8 py-3.5 font-sans text-xs tracking-[0.2em] uppercase hover:bg-linen transition-colors duration-300"
            aria-label="Suivre Maison Texture & couleur sur Instagram"
          >
            <Instagram size={16} />
            Suivre sur Instagram
          </a>
        </div>

      </div>
    </section>
  )
}
