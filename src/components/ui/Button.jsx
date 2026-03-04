import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
}) {
  const base =
    'inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 px-8 py-3.5'

  const variants = {
    primary:
      'btn-shimmer bg-copper text-pearl hover:bg-copper-dark border border-copper hover:border-copper-dark',
    outline:
      'border border-charcoal text-charcoal hover:bg-charcoal hover:text-pearl',
    'outline-light':
      'border border-pearl/40 text-pearl hover:bg-pearl hover:text-charcoal',
    ghost:
      'text-charcoal hover:text-copper underline-offset-4 hover:underline px-0 py-0',
    terracotta:
      'btn-shimmer bg-terracotta text-pearl hover:bg-terracotta-light border border-terracotta',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (to)   return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}
