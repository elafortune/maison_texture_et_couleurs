import { CalendarDays, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

const reassurances = [
  { icon: ShieldCheck, label: 'Réservation sécurisée',   desc: 'Données protégées via Planity' },
  { icon: Clock,       label: 'Confirmation instantanée', desc: 'Créneau confirmé immédiatement' },
  { icon: CalendarDays,label: 'Disponible 24h/24',        desc: 'Réservez à tout moment, en ligne' },
]

export default function BookingCTA() {
  const ref = useScrollReveal()

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: '#0B1525' }}  /* bleu nuit */
    >

      {/* Vidéo slow-motion simulée — remplacer par <video autoPlay muted loop playsInline> */}
      <div className="absolute inset-[-8%] pointer-events-none" aria-hidden="true">
        <div
          className="video-slowmo absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600&q=80')",
            filter: 'blur(10px) brightness(0.22) saturate(0.7)',
          }}
        />
      </div>

      {/* Voile bleu nuit sur la vidéo */}
      <div className="absolute inset-0 bg-[#0B1525]/60 pointer-events-none" />

      {/* Halo de lumière subtil — centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(31,106,115,0.08)_0%,_transparent_70%)] pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div ref={ref} className="reveal">

          {/* Surtitre */}
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-stone/50 mb-6">
            Réservation en ligne
          </p>

          {/* Titre principal */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-pearl leading-[1.15] mb-6">
            Prête à révéler<br />
            <span className="italic">votre beauté naturelle&nbsp;?</span>
          </h2>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="w-10 h-px bg-pearl/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-copper/60" />
            <div className="w-10 h-px bg-pearl/20" />
          </div>

          {/* Sous-titre */}
          <p className="font-sans text-sm md:text-base text-stone/60 leading-relaxed mb-10 max-w-md mx-auto">
            Réservez votre moment en quelques clics.<br />
            <span className="text-stone/40">Simple, rapide, immédiat.</span>
          </p>

          {/* Bouton principal crème avec pulse */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={socialLinks.planity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream-pulse inline-flex items-center gap-3 bg-pearl text-charcoal px-10 py-4 font-sans text-xs tracking-[0.22em] uppercase"
              aria-label="Prendre rendez-vous sur Planity"
            >
              <CalendarDays size={16} />
              Prendre rendez-vous
            </a>

            {/* Sous-texte rassurant */}
            <p className="font-sans text-xs text-stone/35 tracking-[0.15em]">
              Confirmation instantanée via Planity · Sans engagement
            </p>
            <a
              href="https://maps.google.com/?q=50+rue+de+la+Chaussée+d'Antin+75009+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs text-stone/30 hover:text-stone/60 transition-colors tracking-wide"
            >
              <MapPin size={11} />
              50 rue de la Chaussée d&apos;Antin · 75009 Paris
            </a>
          </div>

          {/* 3 éléments rassurants */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-pearl/8">
            {reassurances.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-pearl/15 flex items-center justify-center">
                  <Icon size={17} className="text-stone/50" />
                </div>
                <p className="font-serif text-sm text-pearl/80">{label}</p>
                <p className="font-sans text-xs text-stone/35 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
