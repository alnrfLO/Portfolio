import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

function TimelineItem({ date, titre, detail, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-cyan-400/30 last:border-transparent"
    >
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
      <span className="text-cyan-400 text-sm font-mono">{date}</span>
      <h4 className="text-white font-bold mt-1">{titre}</h4>
      <p className="text-gray-300 text-sm mt-1">{detail}</p>
    </motion.div>
  )
}

function About() {
  const { t } = useLanguage()

  return (
    <section id="A-Propos" className="min-h-screen px-6 md:px-16 pt-32 pb-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        {t.apropos}
      </motion.h2>

      {/* Intro */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="border-l-2 border-cyan-400/30 pl-6"
        >
          <h3 className="text-xl font-semibold text-white mb-3">{t.introTitle}</h3>
          <p className="text-gray-300 leading-relaxed">{t.introText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="border-l-2 border-cyan-400/30 pl-6"
        >
          <h3 className="text-xl font-semibold text-white mb-3">{t.sportTitle}</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            {t.sportAchievements.map((a, i) => (
              <li key={i}><span aria-hidden="true">{a.medal}</span> {a.text}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Timelines */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-8">{t.formationTitle}</h3>
          {t.formationItems.map((item, i) => <TimelineItem key={i} {...item} index={i} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-8">{t.experienceTitle}</h3>
          {t.experienceItems.map((item, i) => <TimelineItem key={i} {...item} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}

export default About