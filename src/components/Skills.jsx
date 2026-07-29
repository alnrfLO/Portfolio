import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

const techItems = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"],
  Backend: ["Node.js", "PHP", "Python", "C++", "C#"],
  BDD: ["MySQL", "Postgres", "MongoDB"],
  Outils: ["GitLab", "GitHub", "Agile / Scrum", "Git"],
}

const certifFichiers = {
  DIF: "/assets/certif/DIF.png",
  PSC1: "/assets/certif/PSC-ANTUNES-Rafael.pdf",
  PSSM: "/assets/certif/PSSM.png",
}

function Skills() {
  const { t } = useLanguage()

  const skills = [
    { categorie: t.skillsCategorieFrontend, items: techItems.Frontend },
    { categorie: t.skillsCategorieBackend, items: techItems.Backend },
    { categorie: t.skillsCategorieBDD, items: techItems.BDD },
    { categorie: t.skillsCategorieOutils, items: techItems.Outils },
    { categorie: t.skillsCategorieLangues, items: t.skillsLanguesItems },
    { categorie: t.skillsCategorieSoft, items: t.skillsSoftItems },
    { categorie: t.skillsCategorieCertifications, items: [] },
  ]

  const certifications = [
    { key: 'DIF', nom: t.certifDIF, fichier: certifFichiers.DIF },
    { key: 'PSC1', nom: t.certifPSC1, fichier: certifFichiers.PSC1 },
    { key: 'PSSM', nom: t.certifPSSM, fichier: certifFichiers.PSSM },
  ]

  return (
    <section id="Skills" className="min-h-screen px-6 md:px-16 pt-32 pb-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        {t.skillsTitle}
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((groupe, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all"
          >
            <h3 className="font-semibold mb-4 text-lg text-white">
              {groupe.categorie}
            </h3>

            {groupe.categorie === t.skillsCategorieCertifications ? (
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <a
                    key={cert.key}
                    href={cert.fichier}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-all group">
                    <span className="text-white text-lg" aria-hidden="true">📜</span>
                    <span className="text-white text-sm group-hover:text-white transition-colors">{cert.nom}</span>
                    <span className="sr-only"> {t.nouvelleFenetre}</span>
                    <span aria-hidden="true" className="ml-auto text-white/50 group-hover:text-white transition-colors">↗</span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {groupe.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full border border-cyan-400/40 text-sm text-white hover:bg-cyan-400/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
