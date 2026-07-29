import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

function Footer() {
  const { t } = useLanguage()
  const lienClasses = "underline hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"

  return (
    <footer className="px-6 md:px-16 py-8 text-center text-sm text-gray-300 border-t border-cyan-400/10">
      <p>
        © {new Date().getFullYear()} Rafael Antunes Oliveira ·{' '}
        <Link to="/accessibilite" className={lienClasses}>{t.accessibiliteTitle}</Link>
        {' · '}
        <Link to="/mentions-legales" className={lienClasses}>{t.mentionsLegales}</Link>
      </p>
    </footer>
  )
}

export default Footer
