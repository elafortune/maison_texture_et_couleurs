import { Instagram } from 'lucide-react'
import TikTokIcon from '../ui/TikTokIcon'
import { socialLinks } from '../../data/salonData'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function SocialCTA() {
  const ref = useScrollReveal()
  return (
    <section className="py-20 md:py-24 bg-charcoal">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div ref={ref} className="reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-copper mb-4">Suivez-nous</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-pearl mb-5">Rejoignez notre univers</h2>
          <div className="w-16 h-px bg-copper mx-auto mb-6" />
          <p className="font-sans text-sm text-stone/60 leading-relaxed mb-10 max-w-md mx-auto">
            Inspirations, avant/apres, coulisses du salon... Retrouvez-nous sur Instagram et TikTok.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 border border-stone/20 text-stone/70 hover:border-copper hover:text-pearl transition-all duration-300">
              <Instagram size={17} />
              <span className="font-sans text-xs tracking-[0.2em] uppercase">Instagram</span>
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 border border-stone/20 text-stone/70 hover:border-copper hover:text-pearl transition-all duration-300">
              <TikTokIcon className="w-[17px] h-[17px]" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
