import { useEffect, useRef } from 'react'
import { Droplets, Zap, Leaf, Palette, Sparkles, Clock, CalendarDays } from 'lucide-react'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

const rituels = [
  {
    id: 'hydratation',
    name: 'Soin Hydratation Intense',
    description:
      'Redonne souplesse et douceur aux cheveux secs et déshydratés. Idéal après exposition au soleil ou au froid.',
    icon: Droplets,
    duree: '30 min',
    tag: 'Hydratation',
  },
  {
    id: 'reparation',
    name: 'Soin Réparation Profonde',
    description:
      'Renforce la fibre capillaire fragilisée par les techniques chimiques ou la chaleur. Résultats visibles dès la première séance.',
    icon: Zap,
    duree: '45 min',
    tag: 'Réparation',
  },
  {
    id: 'cuir-chevelu',
    name: 'Rituel Cuir Chevelu',
    description:
      'Purifie, apaise et stimule la racine pour favoriser une croissance saine. Massage detox inclus.',
    icon: Leaf,
    duree: '40 min',
    tag: 'Équilibre',
  },
  {
    id: 'post-coloration',
    name: 'Soin Post Coloration',
    description:
      "Prolonge l'éclat et fixe les pigments tout en protégeant la fibre des agressions extérieures.",
    icon: Palette,
    duree: '20 min',
    tag: 'Couleur',
  },
  {
    id: 'olaplex',
    name: 'Traitement Olaplex',
    description:
      "Reconstruction moléculaire des ponts disulfures pour réparer en profondeur les cheveux très abîmés.",
    icon: Sparkles,
    duree: '30 min',
    tag: 'Reconstruction',
  },
]

/* ── Carte rituel ── */
function RituelCard({ rituel, delay }) {
  const { name, description, icon: Icon, duree, tag } = rituel

  return (
    <div
      className="stagger-item ritual-card group bg-white border border-linen/70 hover:border-terracotta/25 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_-8px_rgba(31,106,115,0.14)] transition-all duration-350 flex flex-col p-7"
    >
      {/* Icône + tag */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-full border border-terracotta/20 bg-terracotta/5 flex items-center justify-center flex-shrink-0">
          <Icon
            size={20}
            className="icon-ritual text-terracotta"
            strokeWidth={1.5}
          />
        </div>
        <span className="font-sans text-xs tracking-[0.18em] uppercase text-terracotta/60 bg-terracotta/8 px-3 py-1 mt-0.5">
          {tag}
        </span>
      </div>

      {/* Titre */}
      <h3 className="font-serif text-lg text-charcoal leading-snug mb-3 group-hover:text-charcoal transition-colors">
        {name}
      </h3>

      {/* Ligne décorative */}
      <div className="w-8 h-px bg-terracotta/30 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-terracotta/55" />

      {/* Description */}
      <p className="font-sans text-xs text-slate leading-relaxed flex-1 mb-6">
        {description}
      </p>

      {/* Durée */}
      <div className="flex items-center justify-between pt-4 border-t border-linen/50">
        <span className="flex items-center gap-1.5 font-sans text-xs text-stone/50">
          <Clock size={12} />
          {duree}
        </span>
        <span className="font-sans text-xs text-terracotta/70 group-hover:text-terracotta transition-colors duration-200">
          Sur rendez-vous →
        </span>
      </div>
    </div>
  )
}

/* ── Section principale ── */
export default function NosRituels() {
  const headingRef = useScrollReveal()
  const gridRef    = useRef(null)

  /* Stagger d'apparition des cartes */
  useEffect(() => {
    if (!gridRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = gridRef.current.querySelectorAll('.stagger-item')
          items.forEach((el, i) => setTimeout(() => el.classList.add('stagger-visible'), i * 110))
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="rituels" className="py-20 md:py-32 bg-ivory scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Heading ── */}
        <div ref={headingRef} className="reveal text-center mb-16">

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-terracotta/40" />
            <span className="font-sans text-xs tracking-[0.30em] uppercase text-terracotta/70">Nos soins</span>
            <span className="w-8 h-px bg-terracotta/40" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-5">
            Nos Rituels
          </h2>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-terracotta/35" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/50" />
            <div className="w-14 h-px bg-terracotta/22" />
          </div>

          <p className="font-sans text-sm text-slate leading-relaxed max-w-lg mx-auto">
            Chaque rituel est pensé pour répondre à un besoin précis —<br className="hidden md:block" />
            diagnostiqué et adapté lors de votre consultation.
          </p>
        </div>

        {/* ── Grille de cartes ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {rituels.map((rituel, i) => (
            <RituelCard key={rituel.id} rituel={rituel} delay={i} />
          ))}
        </div>

        {/* ── CTA + note diagnostic ── */}
        <div className="mt-14 flex flex-col items-center gap-5">
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-copper btn-shimmer inline-flex items-center gap-3 bg-copper text-pearl px-10 py-4 font-sans text-xs tracking-[0.22em] uppercase"
            aria-label="Réserver un soin sur Planity"
          >
            <CalendarDays size={15} />
            Réserver un rituel
          </a>
          <p className="font-sans text-xs text-charcoal/30 tracking-[0.12em]">
            Diagnostic capillaire offert à chaque première visite
          </p>
        </div>

      </div>
    </section>
  )
}
