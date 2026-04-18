import { CalendarDays, ChevronDown } from 'lucide-react'
import { socialLinks } from '../../data/salonData'

function scrollToRituels() {
  const el = document.getElementById('rituels')
  if (!el) return
  const offset = 80
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
}

export default function SoinsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">

      {/* ── Fond simulé slow-motion (Ken Burns lent) ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="video-slowmo absolute inset-[-6%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/IMG_7567.webp')",
            filter: 'blur(3px) brightness(0.62) saturate(0.80)',
          }}
        />
        {/* Overlay vert feuille très léger */}
        <div className="absolute inset-0 bg-terracotta/14" />
        {/* Voile sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/45 to-charcoal/65" />
      </div>

      {/* ── Halo central subtil ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(31,106,115,0.12) 0%, transparent 75%)',
        }}
      />

      {/* ── Contenu centré ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Surtitre */}
        <p
          className="font-sans text-xs tracking-[0.40em] uppercase text-terracotta-light/80 mb-6"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.15s both' }}
        >
          Rituels capillaires
        </p>

        {/* Titre principal */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-pearl leading-[1.1] mb-4"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.35s both' }}
        >
          Rituels de<br />
          <span className="italic">Soin Profond</span>
        </h1>

        {/* Ligne dessinée */}
        <div
          className="flex items-center justify-center mb-7"
          style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out 0.9s both' }}
        >
          <div className="line-hero-draw h-px w-20 bg-pearl/35" />
          <div className="mx-3 w-1.5 h-1.5 rounded-full bg-terracotta-light/70" />
          <div className="line-hero-draw h-px w-10 bg-pearl/20" />
        </div>

        {/* Sous-titre */}
        <p
          className="font-sans text-sm md:text-base text-pearl/70 leading-relaxed max-w-xl mx-auto mb-10"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.55s both' }}
        >
          Parce qu&apos;une belle matière est la base<br className="hidden md:block" />
          de toute transformation.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.75s both' }}
        >
          {/* CTA principal */}
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-copper btn-shimmer inline-flex items-center gap-3 bg-copper text-pearl px-9 py-4 font-sans text-xs tracking-[0.22em] uppercase"
            aria-label="Réserver un soin sur Planity"
          >
            <CalendarDays size={15} />
            Réserver un soin
          </a>

          {/* CTA secondaire */}
          <button
            onClick={scrollToRituels}
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-pearl/65 hover:text-pearl border border-pearl/25 hover:border-pearl/50 px-7 py-4 transition-all duration-300"
            aria-label="Découvrir nos rituels de soin"
          >
            Découvrir nos rituels
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out 1.3s both' }}
        >
          <span className="font-sans text-xs tracking-[0.22em] uppercase text-pearl/25">Découvrir</span>
          <ChevronDown size={16} className="text-pearl/30 animate-float" />
        </div>

      </div>
    </section>
  )
}
