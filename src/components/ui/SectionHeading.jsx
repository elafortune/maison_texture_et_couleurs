export default function SectionHeading({ title, subtitle, light = false, centered = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p
          className={`mb-3 font-sans text-xs tracking-[0.28em] uppercase font-medium ${
            light ? 'text-terracotta-light' : 'text-terracotta'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight ${
          light ? 'text-pearl' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}
      >
        <div className={`w-6 h-px ${light ? 'bg-terracotta-light/50' : 'bg-terracotta/60'}`} />
        <div className={`w-1 h-1 rounded-full ${light ? 'bg-copper-light/60' : 'bg-copper'}`} />
        <div className={`w-10 h-px ${light ? 'bg-copper-light/40' : 'bg-copper/70'}`} />
      </div>
    </div>
  )
}
