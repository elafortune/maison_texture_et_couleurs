import { CalendarDays, ShieldCheck, Zap } from 'lucide-react'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

const reassurances = [
  { icon: ShieldCheck, label: 'Réservation sécurisée',    desc: 'Via Planity, données protégées' },
  { icon: Zap,         label: 'Confirmation instantanée', desc: 'Créneau confirmé immédiatement' },
  { icon: CalendarDays,label: 'En ligne 24h/24',          desc: 'Réservez à tout moment' },
]

export default function CTAFinalSoins() {
  const ref = useScrollReveal()

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-terracotta">

      {/* ── Dégradé doux pour profondeur ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 40%, rgba(42,138,150,0.30) 0%, transparent 65%)',
        }}
      />
      {/* Vignette bords */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(31,63,59,0.35) 100%)',
        }}
      />

      {/* ── Contenu ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div ref={ref} className="reveal">

          {/* Surtitre */}
          <p className="font-sans text-xs tracking-[0.38em] uppercase text-pearl/55 mb-7">
            Réservation en ligne
          </p>

          {/* Titre */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-pearl leading-[1.15] mb-6">
            Prête à redonner vie<br />
            <span className="italic">à votre chevelure&nbsp;?</span>
          </h2>

          {/* Ligne */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-pearl/25" />
            <div className="w-1.5 h-1.5 rounded-full bg-pearl/50" />
            <div className="w-10 h-px bg-pearl/25" />
          </div>

          {/* Sous-titre */}
          <p className="font-sans text-sm md:text-base text-pearl/65 leading-relaxed mb-10 max-w-md mx-auto">
            Réservation en ligne, simple et immédiate.<br />
            <span className="text-pearl/40">Votre rituel vous attend.</span>
          </p>

          {/* Bouton principal */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <a
              href={socialLinks.planity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal-pulse btn-shimmer inline-flex items-center gap-3 bg-pearl text-charcoal px-12 py-5 font-sans text-xs tracking-[0.25em] uppercase shadow-[0_8px_32px_-4px_rgba(0,0,0,0.20)]"
              aria-label="Réserver mon rituel sur Planity"
            >
              <CalendarDays size={16} />
              Réserver mon rituel
            </a>
            <p className="font-sans text-xs text-pearl/30 tracking-[0.15em]">
              Sans engagement · Annulation libre jusqu'à 24h avant
            </p>
          </div>

          {/* 3 éléments rassurants */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-pearl/12">
            {reassurances.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center">
                  <Icon size={17} className="text-pearl/50" />
                </div>
                <p className="font-serif text-sm text-pearl/80">{label}</p>
                <p className="font-sans text-xs text-pearl/35 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
