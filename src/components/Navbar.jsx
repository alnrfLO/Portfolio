import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/useLanguage'

const nomsLangues = { fr: 'langueFr', en: 'langueEn', pt: 'languePt', es: 'langueEs' }
const lienClasses = "text-white hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded transition-colors"

function NavBar() {
  const { langue, setLangue, t } = useLanguage()
  const { pathname } = useLocation()
  const [menuOuvert, setMenuOuvert] = useState(false)
  const langues = ['fr', 'en', 'pt', 'es']
  const surAccueil = pathname === '/'

  useEffect(() => {
    setMenuOuvert(false)
  }, [pathname])

  const fermerMenu = () => setMenuOuvert(false)

  return (
    <header className="bg-[#071520] backdrop-blur-md border-b border-white/10 py-4">
      <div className="mx-auto flex items-center justify-between px-6 sm:px-8">
        {surAccueil ? (
          <span className="font-display font-semibold text-white md:hidden">RAF</span>
        ) : (
          <Link to="/" className={`inline-flex items-center gap-2 ${lienClasses}`}>
            <span aria-hidden="true">←</span> {t.retourAccueil}
          </Link>
        )}

        {surAccueil && (
          <button
            type="button"
            onClick={() => setMenuOuvert(o => !o)}
            aria-expanded={menuOuvert}
            aria-controls="menu-mobile"
            aria-label={menuOuvert ? t.fermerMenu : t.ouvrirMenu}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
          >
            <span aria-hidden="true" className={`block h-0.5 w-6 bg-white transition-transform ${menuOuvert ? 'rotate-45 translate-y-2' : ''}`} />
            <span aria-hidden="true" className={`block h-0.5 w-6 bg-white transition-opacity ${menuOuvert ? 'opacity-0' : ''}`} />
            <span aria-hidden="true" className={`block h-0.5 w-6 bg-white transition-transform ${menuOuvert ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        )}

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav aria-label={t.menuPrincipal}>
            {surAccueil ? (
              <ul className="flex flex-wrap gap-6 lg:gap-8">
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

          <div className="flex gap-2" role="group" aria-label={t.changerLangue}>
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
      </div>

      {surAccueil && (
        <div
          id="menu-mobile"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${menuOuvert ? 'max-h-96' : 'max-h-0'}`}
        >
          <nav aria-label={t.menuPrincipal} className="px-6 pt-4">
            <ul className="flex flex-col gap-4 text-center">
              <li><a onClick={fermerMenu} className={lienClasses} href="#Accueil">{t.accueil}</a></li>
              <li><a onClick={fermerMenu} className={lienClasses} href="#A-Propos">{t.apropos}</a></li>
              <li><a onClick={fermerMenu} className={lienClasses} href="#Skills">{t.skills}</a></li>
              <li><a onClick={fermerMenu} className={lienClasses} href="#Projects">{t.projets}</a></li>
              <li><a onClick={fermerMenu} className={lienClasses} href="#Contact">{t.contact}</a></li>
            </ul>
          </nav>

          <div className="flex justify-center gap-2 px-6 pt-6 pb-4" role="group" aria-label={t.changerLangue}>
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
      )}
    </header>
  )
}

export default NavBar