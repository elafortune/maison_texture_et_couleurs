import { Clock } from 'lucide-react'
import { soins } from '../../data/salonData'
import SectionHeading from '../ui/SectionHeading'
import useScrollReveal from '../../hooks/useScrollReveal'

function SoinCard({ name, description, duree, image }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal card-glow bg-pearl border border-linen hover:border-copper/30 overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-charcoal mb-3">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-px bg-terracotta/50" />
          <div className="w-1 h-1 rounded-full bg-copper/60" />
          <div className="w-6 h-px bg-copper/30" />
        </div>
        <p className="font-sans text-sm text-slate leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-1.5 mt-5 text-stone/60">
          <Clock size={12} />
          <span className="font-sans text-xs">{duree}</span>
        </div>
      </div>
    </div>
  )
}

export default function SoinsList() {
  const ref = useScrollReveal()

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <SectionHeading subtitle="Prendre soin de vous" title="Nos soins capillaires" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {soins.map((soin) => (
            <SoinCard key={soin.id} {...soin} />
          ))}
        </div>

        {/* Bloc conseil */}
        <div className="mt-14 bg-charcoal relative overflow-hidden p-8 md:p-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(166,90,46,0.20)_0%,_transparent_65%)]" />
          <div className="absolute inset-0 noise-overlay" />
          <div className="relative z-10">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-terracotta mb-3">
              Conseil
            </p>
            <p className="font-serif text-xl text-pearl font-light mb-3">
              Vous ne savez pas quel soin choisir ?
            </p>
            <p className="font-sans text-sm text-stone/70 max-w-md mx-auto leading-relaxed">
              Notre equipe vous propose un diagnostic capillaire personnalise pour identifier
              le traitement le plus adapte a votre chevelure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
