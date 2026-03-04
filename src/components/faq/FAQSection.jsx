import { useState } from 'react'
import { Plus, MessageCircle, X, ExternalLink } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { faqItems, socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

/* ── Item accordéon ── */
function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div
      className={`border-b border-linen/70 last:border-b-0 transition-all duration-300 ${
        isOpen ? 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.09)] bg-white rounded-sm' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-sans text-sm md:text-base font-medium text-charcoal group-hover:text-copper transition-colors duration-200 pr-6 leading-snug">
          {question}
        </span>

        {/* Icône + qui tourne en × à l'ouverture */}
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-350 ${
            isOpen
              ? 'bg-copper border-copper text-pearl rotate-45'
              : 'border-linen text-charcoal/50 group-hover:border-copper/50 group-hover:text-copper'
          }`}
          style={{ transitionProperty: 'transform, background-color, border-color, color' }}
          aria-hidden="true"
        >
          <Plus size={15} />
        </span>
      </button>

      {/* Contenu — animation via CSS grid rows trick (smooth, sans max-height) */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="grid transition-all duration-400 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm text-slate leading-relaxed border-l-2 border-copper/25 pl-4 pb-5 pt-1 ml-1">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Mini-chat flottant ── */
function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-3">

      {/* Bulle message */}
      {open && (
        <div
          className="bg-white border border-linen shadow-[0_8px_32px_-4px_rgba(0,0,0,0.18)] px-4 py-4 w-52 animate-fade-in-up"
          role="dialog"
          aria-label="Mini chat conseil"
        >
          <p className="font-sans text-xs text-charcoal leading-relaxed mb-3">
            Besoin d&apos;un conseil personnalisé ?
          </p>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-xs text-copper hover:text-copper-dark transition-colors"
            aria-label="Nous écrire sur Instagram"
          >
            Nous écrire <ExternalLink size={11} />
          </a>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat conseil'}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? 'bg-charcoal text-pearl rotate-0'
            : 'bg-copper text-pearl hover:bg-copper-dark hover:scale-105'
        }`}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>

      {/* Pastille d'animation quand fermé */}
      {!open && (
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-terracotta border-2 border-white animate-pulse" />
      )}
    </div>
  )
}

/* ── Section principale ── */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const headingRef  = useScrollReveal()
  const accordionRef = useScrollReveal()
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <div ref={headingRef} className="reveal">
            <SectionHeading subtitle="Une question ?" title="On répond à vos questions" />
          </div>

          {/* Accordéon */}
          <div ref={accordionRef} className="bg-pearl border border-linen/60 px-6 md:px-10 reveal">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          <p className="text-center font-sans text-xs text-charcoal/30 mt-8 reveal">
            Autre question ? Écrivez-nous sur{' '}
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-copper hover:underline">
              Instagram
            </a>
          </p>

        </div>
      </section>

      {/* Mini-chat flottant */}
      <FloatingChat />
    </>
  )
}
