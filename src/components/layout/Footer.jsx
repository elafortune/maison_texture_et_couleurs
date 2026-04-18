import { Instagram, CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import TikTokIcon from '../ui/TikTokIcon'
import { socialLinks } from '../../data/salonData'

export default function Footer() {
  return (
    <footer className="bg-onyx text-stone relative overflow-hidden">
      {/* Halo teal subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(166,90,46,0.08)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">

          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <span className="font-serif text-2xl tracking-[0.12em] text-pearl">
              Maison<span className="gradient-text mx-1.5">&</span>Texture
            </span>
            <p className="font-sans text-sm leading-relaxed text-stone/60 max-w-xs">
              Salon de coiffure expert en coupes, couleurs et soins capillaires.
              Un espace où chaque cheveu est traité avec soin.
            </p>
            <div className="flex items-start gap-2 mt-1">
              <div className="w-4 h-px bg-terracotta/50 mt-2 flex-shrink-0" />
              <address className="font-sans text-xs text-stone/40 not-italic leading-relaxed">
                50 rue de la Chaussée d&apos;Antin<br />75009 Paris
              </address>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-1">
              Navigation
            </span>
            {[
              { label: 'Accueil', to: '/' },
              { label: 'Prestations', to: '/prestations' },
              { label: 'Soins', to: '/soins' },
              { label: 'FAQ', to: '/#faq' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="font-sans text-sm text-stone/50 hover:text-pearl transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Adresse */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-1">
              Nous trouver
            </span>
            <div className="flex items-start gap-2 text-stone/50">
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-terracotta/60" />
              <address className="font-sans text-sm not-italic leading-relaxed">
                50 rue de la<br />
                Chaussée d&apos;Antin<br />
                75009 Paris
              </address>
            </div>
            <a
              href="https://maps.google.com/?q=50+rue+de+la+Chaussée+d'Antin+75009+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-stone/30 hover:text-copper transition-colors tracking-wide mt-1"
            >
              Voir sur Google Maps →
            </a>
          </div>

          {/* Réservation */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-1">
              Reserver
            </span>
            <a
              href={socialLinks.planity}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone/50 hover:text-copper transition-colors text-sm w-fit"
            >
              <CalendarDays size={16} />
              <span>Reserver en ligne</span>
            </a>
            <p className="font-sans text-xs text-stone/30 leading-relaxed max-w-[180px]">
              Via Planity — Paris 9e
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-1">
              Nous suivre
            </span>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone/50 hover:text-copper transition-colors text-sm"
            >
              <Instagram size={17} />
              <span>Instagram</span>
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone/50 hover:text-copper transition-colors text-sm"
            >
              <TikTokIcon className="w-[17px] h-[17px]" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs tracking-widest uppercase text-stone/25">
            &copy; {new Date().getFullYear()} Maison Texture & couleur
          </p>
          <p className="font-sans text-xs text-stone/20">
            Tous droits reserves
          </p>
        </div>
      </div>
    </footer>
  )
}
