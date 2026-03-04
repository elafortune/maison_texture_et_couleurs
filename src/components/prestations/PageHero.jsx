export default function PageHero({ subtitle, title, description }) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-charcoal relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-copper" />
      <div className="relative max-w-6xl mx-auto px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-copper mb-4 animate-fade-in">{subtitle}</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-pearl animate-fade-in-up">{title}</h1>
        <div className="mt-5 w-16 h-px bg-copper" />
        {description && <p className="mt-6 font-sans text-sm text-stone/70 max-w-xl leading-relaxed animate-fade-in-up">{description}</p>}
      </div>
    </section>
  )
}
