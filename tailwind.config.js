/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals — beige sable chaud dominant
        pearl:   '#FAF8F5',   // Blanc très chaud
        ivory:   '#F2EAE0',   // Ivoire sablé
        linen:   '#D8CFC6',   // Beige sable clair (charte client)
        // Texte
        stone:   '#A8B8B9',   // Gris bleuté clair (charte client)
        slate:   '#6B7C7D',   // Gris medium
        // Fonds sombres
        charcoal: '#1F3F3B',  // Vert canard foncé (charte client)
        onyx:     '#1C1C1C',  // Noir profond (charte client)
        // Accent principal — TERRACOTTA dominant
        copper:        '#A65A2E',
        'copper-dark': '#8A4520',
        'copper-light':'#C4784A',
        // Accent secondaire — teal en support
        terracotta:       '#1F6A73',
        'terracotta-light':'#2A8A96',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':       'fadeIn 0.9s ease-out forwards',
        'fade-in-up':    'fadeInUp 0.9s ease-out forwards',
        'fade-in-down':  'fadeInDown 0.6s ease-out forwards',
        shimmer:         'shimmer 0.55s ease forwards',
        float:           'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { left: '-100%' },
          '100%': { left: '150%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
