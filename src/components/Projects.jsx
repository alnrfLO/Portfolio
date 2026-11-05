import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/useLanguage'

const img = (chemin) => `/assets/projets/${chemin}`

const projects = [
  { id: "proj1", titre: "Snake", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/snake", live: "https://github.com/alnrfLO/snake", photos: [img("python/snake/partie.webp"), img("python/snake/game-over.webp")] },
  { id: "proj2", titre: "Tetris", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/tetris", live: "https://github.com/alnrfLO/tetris", photos: [img("python/tetris/partie.webp"), img("python/tetris/accueil.webp")] },
  { id: "proj3", titre: "Pong", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/pong", live: "https://github.com/alnrfLO/pong", photos: [img("python/pong/partie.webp"), img("python/pong/echange.webp")] },
  { id: "proj4", titre: "TicTacToe", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/tictactoe", live: "https://github.com/alnrfLO/tictactoe", photos: [img("python/tictactoe/partie.webp"), img("python/tictactoe/debut.webp")] },
  { id: "proj5", titre: "SAE 203", tech: "HTML/CSS/PHP", type: "scolaire", github: "https://github.com/alnrfLO/SAE203", live: "https://github.com/alnrfLO/SAE203", photos: [img("203/4.png")], enTravaux: true },
  { id: "proj6", titre: "SAE 303", tech: "JS/HTML/CSS", type: "scolaire", github: "https://github.com/alnrfLO/SAE303", live: "https://github.com/alnrfLO/SAE303", photos: [img("303/departement.webp"), img("303/carte.webp")] },
  { id: "proj8", titre: "Que regarder ce soir ?", tech: "React", type: "perso", github: "https://github.com/alnrfLO/que-regarder-ce-soir", live: "https://que-regarder-ce-soir.vercel.app", photos: [img("Que-regarder-ce-soir/suggestion.webp"), img("Que-regarder-ce-soir/fiche.webp")] },
  { id: "proj9", titre: "Wiki Yofukashi no uta", tech: "React", type: "perso", github: "https://github.com/alnrfLO/yofukashi-no-uta", live: "https://yofukashi-wiki.vercel.app", photos: [img("yofukashi-no-uta/accueil.webp"), img("yofukashi-no-uta/personnages.webp"), img("yofukashi-no-uta/chronologie.webp")] },
  { id: "proj10", titre: "Poker Game", tech: "React", type: "perso", github: "https://github.com/alnrfLO/poker/", live: "https://poker-murex-seven.vercel.app", photos: [img("poker/accueil.webp"), img("poker/2.png"), img("poker/regles.webp"), img("poker/familles.webp")] },
  { id: "proj11", titre: "Blackjack", tech: "Python", type: "perso", github: "https://github.com/alnrfLO/blackjack", live: "https://github.com/alnrfLO/blackjack", photos: [img("blackjack/mise.webp"), img("blackjack/main.webp"), img("blackjack/resultat.webp")] },
  { id: "proj12", titre: "Wiki Porto", tech: "Python", type: "perso", github: "https://github.com/alnrfLO/fc_porto_wiki", live: "https://github.com/alnrfLO/fc_porto_wiki", photos: [img("porto/accueil.webp"), img("porto/fiche-match.webp"), img("porto/classements.webp")] },
  { id: "proj13", titre: "Visual Novel", tech: "Ren'Py", type: "perso", github: "https://github.com/alnrfLO/visual-novel", live: "https://github.com/alnrfLO/visual-novel", photos: [], enTravaux: true },
  { id: "proj14", titre: "SAE 401", tech: "HTML/CSS/PHP", type: "scolaire", github: "https://github.com/alnrfLO/SAE401", live: "https://github.com/alnrfLO/SAE401", photos: [img("sae401/accueil.webp"), img("sae401/actualites.webp")] },
  { id: "proj15", titre: "Mathdle", tech: "React", type: "perso", github: "https://github.com/alnrfLO/mathdle", live: "https://mathdlee.vercel.app", photos: [img("mathdle/partie.webp"), img("mathdle/menu.webp")] },
  { id: "proj16", titre: "Codex du Voyageur (Dashboard gaming)", tech: "JS/HTML/CSS", type: "perso", github: "https://github.com/alnrfLO/alnrflo-dashboard", live: "https://github.com/alnrfLO/alnrflo-dashboard", photos: [img("dashboard/accueil.webp"), img("dashboard/league-of-legends.webp"), img("dashboard/genshin.webp")] },
  { id: "proj17", titre: "MCU Watchlist", tech: "React", type: "perso", github: "https://github.com/alnrfLO/mcu-watchlist", live: "https://github.com/alnrfLO/mcu-watchlist", photos: [img("mcu-watchlist/accueil.webp"), img("mcu-watchlist/calendrier.webp"), img("mcu-watchlist/stats.webp")] },
  { id: "proj18", titre: "Chaos (mod Minecraft)", tech: "Java", type: "perso", github: "https://github.com/alnrfLO/chaos_mode", live: "https://github.com/alnrfLO/chaos_mode", photos: [img("chaos/portail.webp"), img("chaos/dimension.webp"), img("chaos/campfire.webp"), img("chaos/campfire-interface.webp"), img("chaos/onglet-creatif.webp"), img("chaos/epee.webp")] },
]

const couleurs = {
  "Python": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "HTML/CSS/PHP": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "JS/HTML/CSS": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "React": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Java": "bg-red-500/20 text-red-300 border-red-500/30",
}

const technosDisponibles = ["Toutes", ...new Set(projects.map(p => p.tech))]

const couleursType = {
  perso: "text-pink-400 bg-pink-400/10",
  scolaire: "text-green-400 bg-green-400/10",
}

const boutonPhoto = "absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628]/75 text-white hover:bg-[#0a1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors"

function Galerie({ project }) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const total = project.photos.length
  const precedente = () => setIndex(i => (i === 0 ? total - 1 : i - 1))
  const suivante = () => setIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-white">
        <img
          src={project.photos[index]}
          alt={`${project.titre}, ${t.captureEcran} ${index + 1}/${total}`}
          width="1920"
          height="1080"
          className="block aspect-video w-full object-contain"
        />
        {total > 1 && (
          <>
            <span aria-hidden="true" className="absolute bottom-2 right-2 rounded-full bg-[#0a1628]/75 px-2 py-1 text-xs text-white">{index + 1}/{total}</span>
            <button onClick={precedente} aria-label={t.photoPrecedente} className={`${boutonPhoto} left-2`}>
              <span aria-hidden="true" className="text-xl leading-none">‹</span>
            </button>
            <button onClick={suivante} aria-label={t.photoSuivante} className={`${boutonPhoto} right-2`}>
              <span aria-hidden="true" className="text-xl leading-none">›</span>
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {project.photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`${t.voirPhoto} ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${i === index ? 'w-5 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Modal({ project, onClose, returnFocusRef }) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const titleId = `modal-title-${project.id}`
  const couleurTech = couleurs[project.tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
  const aUnSite = project.live && project.live !== project.github

  useEffect(() => {
    const previouslyFocused = returnFocusRef?.current ?? document.activeElement
    const root = document.getElementById('root')
    const overflowInitial = document.body.style.overflow
    root?.setAttribute('inert', '')
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      root?.removeAttribute('inert')
      document.body.style.overflow = overflowInitial
      previouslyFocused?.focus?.()
    }
  }, [onClose, returnFocusRef])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        className="relative flex w-full max-w-3xl max-h-[92dvh] flex-col overflow-hidden rounded-t-2xl border border-b-0 border-cyan-400/20 bg-[#0a1628] bg-[image:radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_60%)] shadow-[0_0_80px_-20px_rgba(34,211,238,0.45)] sm:max-h-[88dvh] sm:rounded-2xl sm:border-b [@media(max-height:500px)]:overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

        {/* En-tête */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5 sm:px-8 sm:pt-8">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full ${couleursType[project.type]}`}>
                {project.type === 'perso' ? t.perso : t.scolaire}
              </span>
              {project.enTravaux && (
                <span className="text-xs px-2 py-1 rounded-full border border-cyan-400/60 bg-cyan-400/20 text-cyan-300 uppercase tracking-wider font-semibold">
                  {t.enTravaux}
                </span>
              )}
            </div>
            <h3 id={titleId} className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">{project.titre}</h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={t.fermer}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors"
          >
            <svg aria-hidden="true" focusable="false" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        {/* Contenu défilant (sur écran très bas, c'est toute la modale qui défile) */}
        <div className="overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8 [@media(max-height:500px)]:shrink-0 [@media(max-height:500px)]:overflow-visible">
          {/* Captures d'écran ; bandeau « travaux » pour les projets qui n'en ont pas encore */}
          {project.photos.length > 0 ? (
            <Galerie project={project} />
          ) : (
            <div className="relative mb-8 flex min-h-56 flex-col overflow-hidden rounded-xl border border-amber-400/40 bg-black/30 sm:min-h-72">
              <div aria-hidden="true" className="h-3 shrink-0 bg-[repeating-linear-gradient(-45deg,#fbbf24_0_14px,#0a1628_14px_28px)]" />
              <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-4 text-center">
                <span aria-hidden="true" className="text-4xl">🚧</span>
                <p className="font-display text-lg font-bold uppercase tracking-widest text-amber-300">{t.videosTitre}</p>
                <p className="max-w-md text-sm leading-relaxed text-gray-300">{t.videosTexte}</p>
              </div>
              <div aria-hidden="true" className="h-3 shrink-0 bg-[repeating-linear-gradient(-45deg,#fbbf24_0_14px,#0a1628_14px_28px)]" />
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">{t.labelProjet}</h4>
              <p className="leading-relaxed text-gray-300">
                {t[project.id + 'desc'] || t.descAVenir}
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">{t.labelTechnos}</h4>
              <ul className="flex flex-wrap gap-2">
                {project.tech.split('/').map(techno => (
                  <li key={techno} className={`text-xs px-3 py-1.5 rounded-full border ${couleurTech}`}>{techno}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-white/10 bg-black/20 px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-all ${
              aUnSite
                ? 'border border-white/15 text-white hover:border-cyan-400/60 hover:bg-cyan-400/10'
                : 'bg-cyan-400 font-semibold text-[#04080f] hover:bg-cyan-300'
            }`}
          >
            <svg aria-hidden="true" focusable="false" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.81 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.930 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.230 3.285-1.230.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.920.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            {t.voirCode}<span className="sr-only"> {t.nouvelleFenetre}</span>
          </a>
          {aUnSite && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#04080f] hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-all"
            >
              {t.voirProjet}
              <svg aria-hidden="true" focusable="false" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
              <span className="sr-only"> {t.nouvelleFenetre}</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function Projects() {
  const [selected, setSelected] = useState(null)
  const [filtre, setFiltre] = useState("tous")
  const [techno, setTechno] = useState("Toutes")
  const { t } = useLanguage()
  const triggerRef = useRef(null)

  const ouvrirProjet = (p, e) => {
    triggerRef.current = e.currentTarget
    setSelected(p)
  }

  const fermerProjet = useCallback(() => setSelected(null), [])

  const projectsFiltres = projects
    .filter(p => filtre === "tous" || p.type === filtre)
    .filter(p => techno === "Toutes" || p.tech === techno)

  return (
    <section id="Projects" className="min-h-screen px-6 md:px-16 pt-32 pb-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-8"
      >
        {t.projetsTitle}
      </motion.h2>

      {/* Filtre statut */}
      <div className="mb-8">
        <p className="text-sm text-cyan-400/70 mb-3 text-center">{t.filtreStatut}</p>
        <div className="flex justify-center gap-3" role="group" aria-label={t.filtrerParStatutLabel}>
          {[
            { key: "tous", label: t.tous },
            { key: "perso", label: t.perso },
            { key: "scolaire", label: t.scolaire },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFiltre(f.key)}
              aria-pressed={filtre === f.key}
              className={`px-5 py-2 rounded-full border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                filtre === f.key
                  ? 'bg-cyan-400 text-[#04080f] border-cyan-400 font-semibold'
                  : 'border-cyan-400/40 text-white hover:bg-cyan-400/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtre techno */}
      <div className="mb-10">
        <p className="text-sm text-cyan-400/70 mb-3 text-center">{t.filtreTechno}</p>
        <div className="flex justify-center gap-3 flex-wrap" role="group" aria-label={t.filtrerParTechnoLabel}>
          {technosDisponibles.map(tech => (
            <button
              key={tech}
              onClick={() => setTechno(tech)}
              aria-pressed={techno === tech}
              className={`px-5 py-2 rounded-full border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                techno === tech
                  ? 'bg-cyan-400 text-[#04080f] border-cyan-400 font-semibold'
                  : 'border-cyan-400/40 text-white hover:bg-cyan-400/10'
              }`}
            >
              {tech === "Toutes" ? t.toutes : tech}
            </button>
          ))}
        </div>
      </div>

      {/* Grille projets */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectsFiltres.map((p, i) => (
          <motion.button
            key={p.titre}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={(e) => ouvrirProjet(p, e)}
            aria-label={`${p.titre} : ${t.voirDetails}`}
            className="text-left bg-white/[0.03] border-l-2 border-cyan-400/40 rounded-r-xl p-6 hover:bg-white/[0.06] hover:border-cyan-400/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs px-2 py-1 rounded-full border ${couleurs[p.tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
                {p.tech}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${couleursType[p.type]}`}>
                {p.type === 'perso' ? t.perso : t.scolaire}
              </span>
            </div>
            <h3 className="text-white font-bold mb-2">{p.titre}</h3>
            <p className="text-gray-300 text-sm">{t[p.id + 'desc'] ? t[p.id + 'desc'].substring(0, 80) + '...' : t.clicDetails}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && <Modal key={selected.id} project={selected} onClose={fermerProjet} returnFocusRef={triggerRef} />}
      </AnimatePresence>
    </section>
  )
}

export default Projects