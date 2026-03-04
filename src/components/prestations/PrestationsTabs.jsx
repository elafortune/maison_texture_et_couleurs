import { useState } from 'react'
import { prestationCategories } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

function PrestationCard({ name, description, price }) {
  return (
    <div className="card-glow bg-pearl border border-linen p-6 hover:border-copper/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg text-charcoal mb-2">{name}</h4>
          <p className="font-sans text-sm text-slate leading-relaxed">{description}</p>
        </div>
        <span className="flex-shrink-0 font-sans text-xs text-terracotta font-medium whitespace-nowrap mt-1 border border-terracotta/20 px-2 py-0.5">
          {price}
        </span>
      </div>
    </div>
  )
}

export default function PrestationsTabs() {
  const [activeId, setActiveId] = useState(prestationCategories[0].id)
  const ref = useScrollReveal()

  const active = prestationCategories.find((c) => c.id === activeId)

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">

        {/* Tabs */}
        <div ref={ref} className="reveal flex flex-wrap gap-0 mb-12 border-b border-linen">
          {prestationCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`flex items-center gap-2 px-5 py-3.5 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-200 border-b-2 -mb-px ${
                activeId === cat.id
                  ? 'border-copper text-copper bg-pearl'
                  : 'border-transparent text-slate hover:text-charcoal hover:bg-pearl/50'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Description catégorie */}
        <div className="mb-8 flex items-center gap-3 reveal">
          <div className="w-4 h-px bg-terracotta/60" />
          <p className="font-sans text-sm text-slate italic">{active.description}</p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-3 gap-3 mb-10 reveal">
          {active.photos.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {active.items.map((item) => (
            <PrestationCard key={item.name} {...item} />
          ))}
        </div>

        <p className="mt-10 font-sans text-xs text-stone/50 text-center tracking-wide">
          Les tarifs sont indicatifs et peuvent varier selon la longueur et l'epaisseur des
          cheveux. Un devis precis est etabli lors de la consultation.
        </p>
      </div>
    </section>
  )
}
