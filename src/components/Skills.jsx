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

      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
        {skills.map((groupe, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="border-t border-cyan-400/15 pt-5"
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
                    className="flex items-center gap-3 py-1 text-white/90 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors group">
                    <span className="text-sm">{cert.nom}</span>
                    <span className="sr-only"> {t.nouvelleFenetre}</span>
                    <span aria-hidden="true" className="text-white/40 group-hover:text-cyan-300 transition-colors">↗</span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {groupe.items.map((skill, j) => (
                  <span
                    key={j}
                    className="text-sm text-gray-300"
                  >
                    {skill}{j < groupe.items.length - 1 && <span className="text-cyan-400/40 ml-3">·</span>}
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
