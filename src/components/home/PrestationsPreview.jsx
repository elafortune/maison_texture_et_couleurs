import { useEffect, useRef } from 'react'
import { ArrowRight, Scissors, Palette, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'

const services = [
  {
    label: 'Coupe',
    desc: 'Une coupe sur-mesure qui révèle votre personnalité — femme, homme et enfant.',
    img: '/IMG_6770.webp',
    icon: Scissors,
    to: '/prestations',
  },
  {
    label: 'Coloration',
    desc: 'Couleurs vibrantes ou naturelles, balayage, mèches et corrections sur-mesure.',
    img: '/IMG_6774.webp',
    icon: Palette,
    to: '/prestations',
  },
  {
    label: 'Soin',
    desc: 'Traitements capillaires ciblés pour nourrir, réparer et sublimer votre chevelure.',
    img: '/IMG_6769.webp',
    icon: Sparkles,
    to: '/soins',
  },
  {
    label: 'Coiffure & Événement',
    desc: 'Brushing, chignons et coiffures de cérémonie pour toutes vos occasions spéciales.',
    img: '/IMG_6771.webp',
    icon: Star,
    to: '/prestations',
  },
]

export default function PrestationsPreview() {
  const headingRef = useScrollReveal()
  const sectionRef = useRef(null)

  /* Stagger cards — IntersectionObserver sur le conteneur */
  useEffect(() => {
    const container = sectionRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('stagger-visible'), i * 150)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-28 bg-copper">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="font-sans text-xs tracking-[0.28em] uppercase font-medium text-pearl/60 mb-3">
            Nos expertises
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-pearl">
            Des prestations pensées pour vous
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="w-6 h-px bg-pearl/40" />
            <div className="w-1 h-1 rounded-full bg-pearl/50" />
            <div className="w-10 h-px bg-pearl/30" />
          </div>
          <p className="mt-5 font-sans text-sm text-pearl/70 leading-relaxed max-w-lg mx-auto">
            Chaque service est conçu pour respecter votre nature de cheveux tout en révélant votre personnalité.
          </p>
        </div>

        {/* Grille cartes avec stagger */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map(({ label, desc, img, icon: Icon, to }) => (
            <div key={label} className="stagger-item card-lift group bg-pearl flex flex-col overflow-hidden">

              {/* Image avec saturation au hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-linen">
                <img
                  src={img}
                  alt={`${label} — Maison Texture & couleur`}
                  className="card-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Corps de la carte */}
              <div className="flex flex-col flex-1 p-5">

                {/* Icône + titre */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="icon-micro text-copper flex-shrink-0" />
                  <h3 className="font-serif text-lg text-charcoal leading-snug">{label}</h3>
                </div>

                {/* Séparateur */}
                <div className="w-6 h-px bg-copper/50 mb-3" />

                {/* Description */}
                <p className="font-sans text-xs text-slate leading-relaxed flex-1">{desc}</p>

                {/* Bouton */}
                <Link
                  to={to}
                  className="mt-5 inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-copper group-hover:gap-3 transition-all duration-300"
                  aria-label={`En savoir plus sur ${label}`}
                >
                  En savoir plus <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
