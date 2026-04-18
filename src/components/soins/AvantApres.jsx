import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'

/* ── Slider interactif ── */
function SliderBA() {
  const [pos, setPos]       = useState(48)
  const containerRef        = useRef(null)
  const isDragging          = useRef(false)

  const calcPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    return Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100))
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/8] md:aspect-[16/7] overflow-hidden cursor-col-resize select-none group"
      onMouseDown={(e) => { isDragging.current = true; setPos(calcPos(e.clientX)) }}
      onMouseMove={(e) => { if (isDragging.current) setPos(calcPos(e.clientX)) }}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onTouchStart={(e) => setPos(calcPos(e.touches[0].clientX))}
      onTouchMove={(e) => { e.preventDefault(); setPos(calcPos(e.touches[0].clientX)) }}
    >
      {/* ── Image APRÈS — fond complet ── */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          backgroundImage: "url('/IMG_6005.webp')",
          filter: 'saturate(1.25) brightness(1.04)',
        }}
      />

      {/* ── Image AVANT — clippée à gauche ── */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-75"
        style={{ width: `${pos}%` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{
            backgroundImage: "url('/IMG_5974.webp')",
            width: `${10000 / pos}%`,
            filter: 'saturate(0.55) brightness(0.82)',
          }}
        />
      </div>

      {/* ── Séparateur avec micro-effet lumière ── */}
      <div
        className="absolute top-0 bottom-0 w-px z-10 pointer-events-none"
        style={{
          left: `${pos}%`,
          background: 'rgba(255,255,255,0.92)',
          boxShadow: '0 0 16px 3px rgba(255,255,255,0.50), 0 0 5px 1px rgba(255,255,255,0.85)',
        }}
      >
        {/* Poignée draggable */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-pearl shadow-[0_4px_20px_rgba(0,0,0,0.28)] flex items-center justify-center gap-0">
          <ChevronLeft  size={12} className="text-charcoal" />
          <ChevronRight size={12} className="text-charcoal" />
        </div>
      </div>

      {/* ── Labels ── */}
      <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
        <span className="font-sans text-xs uppercase tracking-[0.22em] text-pearl bg-onyx/65 backdrop-blur-sm px-3 py-1.5">
          Avant
        </span>
      </div>
      <div className="absolute bottom-5 right-5 z-20 pointer-events-none">
        <span className="font-sans text-xs uppercase tracking-[0.22em] text-pearl bg-terracotta/80 backdrop-blur-sm px-3 py-1.5">
          Après
        </span>
      </div>

      {/* ── Hint glisser ── */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="font-sans text-xs tracking-[0.22em] uppercase text-pearl/50 bg-onyx/30 backdrop-blur-sm px-4 py-1.5">
          ← Glisser pour comparer →
        </span>
      </div>
    </div>
  )
}

/* ── Section Avant/Après ── */
export default function AvantApres() {
  const headingRef = useScrollReveal()
  const sliderRef  = useScrollReveal()

  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-pearl/20" />
            <span className="font-sans text-xs tracking-[0.30em] uppercase text-pearl/40">Transformations</span>
            <span className="w-8 h-px bg-pearl/20" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-pearl leading-tight mb-5">
            Avant &amp; Après
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-terracotta-light/35" />
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta-light/50" />
            <div className="w-12 h-px bg-terracotta-light/22" />
          </div>
          <p className="font-sans text-sm text-stone/50 leading-relaxed max-w-md mx-auto">
            Des résultats visibles. Une matière transformée.
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="reveal">
          <SliderBA />
        </div>

      </div>
    </section>
  )
}
