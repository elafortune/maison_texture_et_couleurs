import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PrestationsPage from './pages/PrestationsPage'
import SoinsPage from './pages/SoinsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/prestations" element={<PrestationsPage />} />
        <Route path="/soins" element={<SoinsPage />} />
      </Route>
    </Routes>
  )
}
