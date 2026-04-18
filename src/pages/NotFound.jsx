import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page introuvable — Maison Texture & Couleur"
        description="Cette page n'existe pas. Retournez à l'accueil du salon Maison Texture & Couleur, Paris 9e."
        canonical="/404"
      />
      <main className="min-h-screen flex items-center justify-center bg-pearl px-6">
        <div className="text-center max-w-md">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-copper mb-6">
            Erreur 404
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-4">
            Page introuvable
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-px bg-copper/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-copper" />
            <div className="w-10 h-px bg-copper/40" />
          </div>
          <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-10">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-copper text-pearl px-8 py-3.5 font-sans text-xs tracking-[0.2em] uppercase hover:bg-charcoal transition-colors duration-300"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </>
  )
}
