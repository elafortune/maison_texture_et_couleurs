import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    // Sitemap only during client build (not SSR pass)
    !isSsrBuild && sitemap({
      hostname: 'https://maison-texture-et-couleurs.com',
      dynamicRoutes: ['/', '/prestations', '/soins'],
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
      priority: 0.8,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // manualChunks is incompatible with SSR (deps are external)
        manualChunks: isSsrBuild ? undefined : {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
        },
      },
    },
    assetsInlineLimit: 4096,
  },
}))
