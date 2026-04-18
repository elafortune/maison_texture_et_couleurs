import useScrollReveal from '../../hooks/useScrollReveal'

const values = [
  { label: 'Sur-mesure', desc: 'Chaque prestation adaptée à votre morphologie.' },
  { label: 'Expertise',  desc: 'Formés aux dernières techniques capillaires.' },
  { label: 'Produits pro', desc: 'Soins et colorations de qualité professionnelle.' },
  { label: 'Écoute',    desc: 'Un échange approfondi avant chaque prestation.' },
]

/* ── Feuilles SVG abstraites ── */
function Leaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grande feuille — coin haut droit */}
      <svg className="leaf-float-1 absolute -top-6 right-8 w-28 h-40 opacity-[0.07] text-charcoal" viewBox="0 0 60 90" fill="currentColor">
        <path d="M30,3 C52,3 57,45 30,87 C3,45 8,3 30,3 Z" />
      </svg>
      {/* Feuille horizontale — milieu gauche */}
      <svg className="leaf-float-2 absolute top-1/3 -left-4 w-24 h-14 opacity-[0.06] text-charcoal" viewBox="0 0 100 60" fill="currentColor">
        <path d="M5,30 C5,5 50,2 95,30 C50,58 5,55 5,30 Z" />
      </svg>
      {/* Petite feuille — haut gauche */}
      <svg className="leaf-float-3 absolute top-20 left-1/4 w-10 h-16 opacity-[0.05] text-charcoal" viewBox="0 0 40 70" fill="currentColor">
        <path d="M20,3 C36,3 38,35 20,67 C2,35 4,3 20,3 Z" />
      </svg>
      {/* Feuille penchée — bas droite */}
      <svg className="leaf-float-4 absolute bottom-10 right-1/4 w-16 h-22 opacity-[0.06] text-charcoal" viewBox="0 0 50 80" fill="currentColor">
        <path d="M25,3 C44,5 47,40 25,77 C3,40 6,5 25,3 Z" style={{ transform: 'rotate(20deg)', transformOrigin: 'center' }} />
      </svg>
      {/* Grande feuille — bas gauche */}
      <svg className="leaf-float-5 absolute -bottom-8 left-6 w-32 h-44 opacity-[0.05] text-charcoal" viewBox="0 0 80 110" fill="currentColor">
        <path d="M40,5 C70,8 78,55 40,105 C2,55 10,8 40,5 Z" />
      </svg>
    </div>
  )
}

export default function SalonPresentation() {
  const textRef   = useScrollReveal()
  const photoRef  = useScrollReveal()
  const valuesRef = useScrollReveal()

  return (
    <section id="about" className="relative py-20 md:py-28 bg-stone overflow-hidden">

      {/* Feuilles animées en fond */}
      <Leaves />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Logo animé — apparition au chargement */}
        <div className="flex justify-center mb-14">
          <div className="logo-appear relative w-16 h-16 flex items-center justify-center" aria-label="Maison Texture & couleur">
            <div className="absolute inset-0 rounded-full border border-copper/35" />
            <div className="absolute inset-[6px] rounded-full border border-copper/15" />
            <span className="font-serif text-lg tracking-[0.15em] text-copper relative z-10 select-none">MT</span>
          </div>
        </div>

        {/* Grille texte + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Bloc texte avec titre + ligne animée */}
          <div ref={textRef} className="reveal">

            {/* Surtitre */}
            <p className="font-sans text-xs tracking-[0.28em] uppercase font-medium text-terracotta mb-4">
              Notre identité
            </p>

            {/* Titre */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-charcoal mb-4">
              Un espace dédié<br />à votre beauté
            </h2>

            {/* Ligne animée qui se dessine */}
            <div className="flex items-center gap-2 mb-8">
              <div className="line-draw h-px bg-copper w-14" />
              <div className="line-draw w-1.5 h-1.5 rounded-full bg-copper/70" style={{ transitionDelay: '0.75s' }} />
              <div className="line-draw h-px bg-copper/50 w-8" style={{ transitionDelay: '0.65s' }} />
            </div>

            {/* Texte */}
            <div className="space-y-4 font-sans text-charcoal/75 leading-relaxed text-sm md:text-base">
              <p>Maison Texture &amp; couleur est un salon de coiffure où le soin du détail rencontre la passion des cheveux. Chaque prestation est pensée sur-mesure pour vous.</p>
              <p>Notre équipe vous accueille dans un cadre chaleureux et moderne. Coupe du quotidien, couleur audacieuse ou soin profond — nous mettons notre expertise à votre service.</p>
              <p>Nous utilisons exclusivement des produits professionnels sélectionnés pour leur efficacité et le respect de la fibre capillaire.</p>
            </div>
          </div>

          {/* Photo intérieure du salon — Ken Burns */}
          <div ref={photoRef} className="reveal reveal-delay-2 relative aspect-[4/5] overflow-hidden bg-charcoal/10">

            {/* Cadre décoratif */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-copper/50 z-10 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-copper/50 z-10 pointer-events-none" />

            {/* Image Ken Burns — remplacer par <img src="..." className="ken-burns ..." /> */}
            <div
              className="ken-burns absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/IMG_5923.jpeg')" }}
              role="img"
              aria-label="Intérieur du salon Maison Texture & couleur"
            />

            {/* Voile subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* 4 valeurs en bandeau */}
        <div ref={valuesRef} className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {values.map(({ label, desc }) => (
            <div key={label} className="border-t-2 border-copper pt-4">
              <p className="font-serif text-base text-charcoal mb-1">{label}</p>
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
