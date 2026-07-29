import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { usePageMeta } from '../hooks/usePageMeta'

function AccessibilitePage() {
  const { t } = useLanguage()
  const headingRef = usePageMeta(`${t.accessibiliteTitle} · Rafael Antunes Oliveira`)

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
        {t.accessibiliteTitle}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-gray-300 leading-relaxed mb-12 max-w-3xl"
      >
        {t.accessibiliteIntro}
      </motion.p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-3">{t.accessibiliteEtatTitle}</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{t.accessibiliteEtatText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-3">{t.accessibiliteLimitesTitle}</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{t.accessibiliteLimitesText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">{t.accessibiliteFaitTitle}</h2>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            {t.accessibiliteFaitItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">{t.accessibiliteOutilsTitle}</h2>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            {t.accessibiliteOutilsItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-3">{t.accessibiliteContactTitle}</h2>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">{t.accessibiliteContactText}</p>
        <a
          href="mailto:rafael.atns.dev@gmail.com?subject=Probl%C3%A8me%20d%27accessibilit%C3%A9"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-all"
        >
          {t.accessibiliteSignaler}
        </a>
        <p className="text-gray-400 text-xs mt-6">{t.accessibiliteDerniereMaj}</p>
      </motion.div>
    </main>
  )
}

export default AccessibilitePage
