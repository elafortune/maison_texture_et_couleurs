import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const HomePage        = lazy(() => import('./pages/HomePage'))
const PrestationsPage = lazy(() => import('./pages/PrestationsPage'))
const SoinsPage       = lazy(() => import('./pages/SoinsPage'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-pearl" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/prestations" element={<PrestationsPage />} />
          <Route path="/soins" element={<SoinsPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
