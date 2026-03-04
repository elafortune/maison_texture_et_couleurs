import { ChevronDown } from 'lucide-react'

export default function PrestationsHero() {
  return (
    <section className="relative min-h-[62vh] md:min-h-[68vh] flex items-center overflow-hidden bg-pearl pt-16 md:pt-20">

      {/* Arrière-plan flou — cheveux en mouvement */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="ken-burns absolute inset-[-5%] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80')",
            filter: 'blur(7px) brightness(0.90) saturate(0.65)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pearl/88 via-pearl/78 to-pearl/92" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">

        {/* Surtitre */}
        <p
          className="font-sans text-xs tracking-[0.35em] uppercase text-copper/70 mb-5"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.15s both' }}
        >
          Maison Texture &amp; couleur
        </p>

        {/* Titre principal */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] mb-3"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.35s both' }}
        >
          Nos prestations
        </h1>

        {/* Ligne dessinée sous le titre */}
        <div
          className="flex items-center justify-center mb-8"
          style={{ opacity: 0, animation: 'fadeIn 0.4s ease-out 0.85s both' }}
        >
          <div className="line-hero-draw h-px w-20 bg-copper/45" />
          <div className="mx-3 w-1.5 h-1.5 rounded-full bg-copper/60" />
          <div className="line-hero-draw h-px w-10 bg-copper/25" />
        </div>

        {/* Sous-titre */}
        <p
          className="font-sans text-sm md:text-base text-slate leading-relaxed max-w-lg mx-auto"
          style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.55s both' }}
        >
          Des services sur mesure, pensés pour révéler<br className="hidden md:block" />
          la beauté naturelle de chaque texture.
        </p>

        {/* Scroll indicator */}
        <div
          className="mt-14 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out 1.2s both' }}
        >
          <span className="font-sans text-xs tracking-[0.22em] uppercase text-charcoal/30">Explorer</span>
          <ChevronDown size={17} className="text-copper/45 animate-float" />
        </div>

      </div>
    </section>
  )
}
