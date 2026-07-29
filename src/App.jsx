import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { useLanguage } from './context/useLanguage'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AccessibilitePage from './pages/AccessibilitePage'
import MentionsLegalesPage from './pages/MentionsLegalesPage'
const cv = '/assets/CV_Rafael_Antunes_oliveira.pdf'

function App() {
  const { t } = useLanguage()
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-[#04080f] focus:font-semibold"
      >
        {t.skipToContent}
      </a>
      <div className="min-h-screen text-white pt-[140px] md:pt-[120px]" style={{ background: 'linear-gradient(135deg, #10222A 0%, #234755 50%, #070C13 100%)' }}>
        <div className="fixed inset-x-0 top-0 z-50 bg-[#0b2030] border-b border-cyan-400/20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-base">
            <p className="text-center text-white font-medium sm:text-left">
              {t.bandeauAlternance}
            </p>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-100 font-semibold hover:bg-cyan-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition"
            >
              {t.monCV}
              <span className="sr-only"> {t.nouvelleFenetre}</span>
            </a>
          </div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accessibilite" element={<AccessibilitePage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        </Routes>

        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
