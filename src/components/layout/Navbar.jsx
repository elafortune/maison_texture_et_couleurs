import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Instagram, Menu, X, CalendarDays } from 'lucide-react'
import TikTokIcon from '../ui/TikTokIcon'
import { socialLinks } from '../../data/salonData'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Prestations', to: '/prestations' },
  { label: 'Soins', to: '/soins' },
  { label: 'FAQ', to: '/#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isSolid = scrolled || open
  const isHome  = pathname === '/'

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'bg-onyx/88 backdrop-blur-xl border-b border-stone/10 shadow-lg shadow-onyx/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-lg md:text-xl tracking-[0.15em] text-pearl/90 hover:text-pearl transition-colors"
        >
          Maison Texture<span className="gradient-text mx-1.5">&</span>Couleurs
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => {
            const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)
            const isAnchor = to.startsWith('/#')

            const transparentColor = (!isSolid && isHome)
              ? 'text-charcoal/80 hover:text-copper'
              : 'text-stone/70 hover:text-pearl'
            const fontSize = (!isSolid && isHome) ? 'text-[13px]' : 'text-xs'

            if (isAnchor) {
              return (
                <a
                  key={label}
                  href={to}
                  className={`nav-link font-sans ${fontSize} tracking-[0.18em] uppercase ${transparentColor} transition-colors`}
                >
                  {label}
                </a>
              )
            }
            return (
              <Link
                key={label}
                to={to}
                className={`nav-link font-sans ${fontSize} tracking-[0.18em] uppercase transition-colors ${
                  isActive ? 'text-copper active-link' : transparentColor
                }`}
              >
                {label}
              </Link>
            )
          })}

          {/* Icônes sociales */}
          <div className="flex items-center gap-4 ml-3 pl-4 border-l border-stone/15">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-copper transition-colors ${(!isSolid && isHome) ? 'text-charcoal/65' : 'text-stone/50'}`}
              aria-label="Instagram"
            >
              <Instagram size={(!isSolid && isHome) ? 19 : 17} />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-copper transition-colors ${(!isSolid && isHome) ? 'text-charcoal/65' : 'text-stone/50'}`}
              aria-label="TikTok"
            >
              <TikTokIcon className={(!isSolid && isHome) ? 'w-[19px] h-[19px]' : 'w-[17px] h-[17px]'} />
            </a>
          </div>

          {/* Bouton réservation */}
          <a
            href={socialLinks.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer ml-2 flex items-center gap-2 bg-copper text-pearl px-5 py-2 font-sans text-xs tracking-[0.15em] uppercase hover:bg-copper-dark transition-colors duration-300"
          >
            <CalendarDays size={14} />
            Reservation
          </a>
        </div>

        {/* Toggle mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-pearl/80 hover:text-pearl transition-colors"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-onyx/97 backdrop-blur-xl border-t border-stone/10 animate-fade-in-down">
          <div className="flex flex-col items-center gap-7 py-10">
            {navLinks.map(({ label, to }) => {
              const isAnchor = to.startsWith('/#')
              if (isAnchor) {
                return (
                  <a
                    key={label}
                    href={to}
                    onClick={() => setOpen(false)}
                    className="font-sans text-sm tracking-[0.2em] uppercase text-stone/60 hover:text-pearl transition-colors"
                  >
                    {label}
                  </a>
                )
              }
              return (
                <Link
                  key={label}
                  to={to}
                  className="font-sans text-sm tracking-[0.2em] uppercase text-stone/60 hover:text-pearl transition-colors"
                >
                  {label}
                </Link>
              )
            })}

            {/* Bouton réservation mobile */}
            <a
              href={socialLinks.planity}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-shimmer flex items-center gap-2 bg-copper text-pearl px-8 py-3 font-sans text-xs tracking-[0.2em] uppercase hover:bg-copper-dark transition-colors duration-300"
            >
              <CalendarDays size={14} />
              Reservation en ligne
            </a>

            <div className="flex items-center gap-6 pt-2 border-t border-stone/10 w-24 justify-center">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone/50 hover:text-copper transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone/50 hover:text-copper transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
