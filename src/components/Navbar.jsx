import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

const nomsLangues = { fr: 'langueFr', en: 'langueEn', pt: 'languePt', es: 'langueEs' }
const lienClasses = "text-white hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded transition-colors"

function NavBar() {
  const { langue, setLangue, t } = useLanguage()
  const { pathname } = useLocation()
  const langues = ['fr', 'en', 'pt', 'es']
  const surAccueil = pathname === '/'

  return (
    <header className="bg-[#071520] backdrop-blur-md border-b border-white/10 py-4">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <nav aria-label={t.menuPrincipal}>
          {surAccueil ? (
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li><a className={lienClasses} href="#Accueil">{t.accueil}</a></li>
              <li><a className={lienClasses} href="#A-Propos">{t.apropos}</a></li>
              <li><a className={lienClasses} href="#Skills">{t.skills}</a></li>
              <li><a className={lienClasses} href="#Projects">{t.projets}</a></li>
              <li><a className={lienClasses} href="#Contact">{t.contact}</a></li>
            </ul>
          ) : (
            <Link to="/" className={`inline-flex items-center gap-2 ${lienClasses}`}>
              <span aria-hidden="true">←</span> {t.retourAccueil}
            </Link>
          )}
        </nav>

        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label={t.changerLangue}>
          {langues.map(l => (
            <button
              key={l}
              onClick={() => setLangue(l)}
              aria-pressed={langue === l}
              aria-label={t[nomsLangues[l]]}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                langue === l
                  ? 'bg-cyan-400 text-[#04080f]'
                  : 'border border-cyan-400/40 text-white hover:bg-cyan-400/10'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar