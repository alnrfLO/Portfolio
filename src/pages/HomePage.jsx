import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useLanguage } from '../context/useLanguage'
import { usePageMeta } from '../hooks/usePageMeta'

function HomePage() {
  const { t } = useLanguage()
  const headingRef = usePageMeta(t.pageTitleHome)

  return (
    <main id="contenu-principal">
      <Hero headingRef={headingRef} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default HomePage
