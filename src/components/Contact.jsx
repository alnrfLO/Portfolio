import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

const cv = '/assets/CV_Rafael_Antunes_oliveira.pdf'

function Contact() {
  const { t } = useLanguage()
  
  return (
    <section id="Contact" className="min-h-screen px-6 md:px-16 py-32 text-white flex flex-col items-center justify-center">
    <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-white mb-4"
    >
    {t.contactTitle}
    </motion.h2>
    
    <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
    className="text-gray-300 mb-12 text-center"
    >
    {t.contactDesc}
    </motion.p>
    
    <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10">
    
    {/* Formulaire */}
    <motion.form
    action="https://formspree.io/f/xrbnlbdd"
    method="POST"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
    className="flex flex-col gap-4"
    >
    <div className="flex flex-col gap-1">
      <label htmlFor="contact-name" className="text-sm text-cyan-400/80">{t.votrenom}</label>
      <input
      id="contact-name"
      type="text"
      name="name"
      required
      className="bg-white/5 border border-cyan-400/20 rounded-xl text-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:border-cyan-400 transition-colors"
      />
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="contact-email" className="text-sm text-cyan-400/80">{t.votreemail}</label>
      <input
      id="contact-email"
      type="email"
      name="email"
      required
      className="bg-white/5 border border-cyan-400/20 rounded-xl text-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:border-cyan-400 transition-colors"
      />
    </div>
    <div className="flex flex-col gap-1 flex-1">
      <label htmlFor="contact-message" className="text-sm text-cyan-400/80">{t.votremessage}</label>
      <textarea
      id="contact-message"
      name="message"
      rows="5"
      required
      className="bg-white/5 border border-cyan-400/20 rounded-xl text-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:border-cyan-400 transition-colors resize-none flex-1"
      />
    </div>
    <button
    type="submit"
    className="border border-cyan-400/40 text-cyan-400 font-semibold text-lg py-4 rounded-xl hover:bg-cyan-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors"
    >
    {t.envoyer}
    </button>
    </motion.form>
    
    {/* Liens */}
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    className="flex flex-col justify-center"
    >
    <div className="flex flex-col gap-1 mb-8">
    <a
    href="mailto:rafael.atns.dev@gmail.com"
    className="flex items-center gap-3 py-3 text-white/90 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded transition-colors group"
    >
    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    <span className="text-sm font-medium">Email</span>
    <span aria-hidden="true" className="ml-auto text-white/30 group-hover:text-cyan-300 transition-colors">↗</span>
    </a>

    <a
    href="https://github.com/alnrfLO"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 py-3 text-white/90 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded transition-colors group"
    >
    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.81 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    <span className="text-sm font-medium">GitHub</span>
    <span className="sr-only"> {t.nouvelleFenetre}</span>
    <span aria-hidden="true" className="ml-auto text-white/30 group-hover:text-cyan-300 transition-colors">↗</span>
    </a>

    <a
    href="https://www.linkedin.com/in/rafatns/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 py-3 text-white/90 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded transition-colors group"
    >
    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
    <span className="text-sm font-medium">LinkedIn</span>
    <span className="sr-only"> {t.nouvelleFenetre}</span>
    <span aria-hidden="true" className="ml-auto text-white/30 group-hover:text-cyan-300 transition-colors">↗</span>
    </a>
    </div>

    <a
    href={cv}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-400 text-[#04080f] font-display font-semibold hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-colors"
    >
    <svg aria-hidden="true" focusable="false" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    <span className="text-sm">{t.monCV}</span>
    <span className="sr-only"> {t.nouvelleFenetre}</span>
    </a>
    </motion.div>
    
    </div>
    </section>
  )
}

export default Contact
