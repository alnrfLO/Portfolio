import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { usePageMeta } from '../hooks/usePageMeta'

function MentionsLegalesPage() {
  const { t } = useLanguage()
  const headingRef = usePageMeta(`${t.mentionsLegalesTitle} · Rafael Antunes Oliveira`)

  const sections = [
    { id: 'editeur', title: t.mentionsLegalesEditeurTitle, text: t.mentionsLegalesEditeurText },
    { id: 'hebergement', title: t.mentionsLegalesHebergementTitle, text: t.mentionsLegalesHebergementText },
    { id: 'directeur', title: t.mentionsLegalesDirecteurTitle, text: t.mentionsLegalesDirecteurText },
    { id: 'propriete-intellectuelle', title: t.mentionsLegalesPiTitle, text: t.mentionsLegalesPiText },
    { id: 'donnees-personnelles', title: t.mentionsLegalesDonneesTitle, text: t.mentionsLegalesDonneesText },
    { id: 'cookies', title: t.mentionsLegalesCookiesTitle, text: t.mentionsLegalesCookiesText },
    { id: 'liens-externes', title: t.mentionsLegalesLiensTitle, text: t.mentionsLegalesLiensText },
  ]

  return (
    <main id="contenu-principal" className="min-h-screen px-6 md:px-16 pt-12 pb-24 text-white">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded mb-8"
      >
        <span aria-hidden="true">←</span> {t.retourAccueil}
      </Link>

      <motion.h1
        ref={headingRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-4 focus:outline-none"
      >
        {t.mentionsLegalesTitle}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-gray-300 leading-relaxed mb-4 max-w-3xl"
      >
        {t.mentionsLegalesIntro}
      </motion.p>

      <p className="text-gray-400 text-xs mb-12">{t.mentionsLegalesDerniereMaj}</p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:items-start max-w-4xl">
        <nav aria-label={t.mentionsLegalesTitle} className="md:sticky md:top-36">
          <ul className="flex flex-wrap gap-2 border-b border-cyan-400/10 pb-6 md:flex-col md:gap-1 md:border-b-0 md:border-l md:pb-0 md:pl-4">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-2 rounded-full border border-cyan-400/20 px-3 py-1 text-xs text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors md:rounded md:border-0 md:px-0 md:py-1 md:text-sm"
                >
                  <span className="font-mono text-cyan-400/70" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-heading`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * (i + 1) }}
              className="scroll-mt-36 bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
            >
              <h2 id={`${s.id}-heading`} className="flex items-center gap-3 text-xl font-semibold text-white mb-3">
                <span className="font-mono text-sm text-cyan-400/70" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm">{s.text}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default MentionsLegalesPage
