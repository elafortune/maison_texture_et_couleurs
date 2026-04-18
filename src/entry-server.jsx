import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PrestationsPage from './pages/PrestationsPage'
import SoinsPage from './pages/SoinsPage'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/prestations" element={<PrestationsPage />} />
            <Route path="/soins" element={<SoinsPage />} />
          </Route>
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  return { html, helmet }
}
