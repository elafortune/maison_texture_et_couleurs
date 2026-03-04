import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linen">

      {/* Image immersive de fond — remplacer src par la vraie photo salon */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1400&q=80')" }}
        role="img"
        aria-label="Intérieur du salon Maison Texture & couleur"
      />

      {/* Voile beige — maintient l'identité colorblock tout en gardant la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-linen/80 via-linen/65 to-linen/85" />

      {/* Contenu centré */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-copper mb-8 animate-fade-in">
          Paris 9e
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-charcoal leading-[1.1] animate-fade-in-up">
          Maison
          <br />
          <span className="gradient-text">texture</span>
          <span className="text-charcoal/25 mx-3">&</span>
          <span className="text-charcoal">couleur</span>
        </h1>

        <div className="mt-8 mb-8 flex items-center justify-center gap-3 animate-fade-in">
          <div className="w-12 h-px bg-copper/50" />
          <div className="w-2 h-2 rounded-full bg-copper" />
          <div className="w-12 h-px bg-copper/50" />
        </div>

        <p className="font-sans text-sm md:text-base text-charcoal/60 tracking-[0.25em] uppercase animate-fade-in-up">
          L&apos;art capillaire sur-mesure
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <Button to="/prestations" variant="primary">Nos prestations</Button>
          <Button to="/soins" variant="outline">Nos soins</Button>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <div className="w-px h-10 bg-gradient-to-b from-copper/40 to-transparent" />
      </div>
    </section>
  )
}
