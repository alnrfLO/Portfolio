import { useState, useEffect } from 'react'
import translations from '../translations'
import { LanguageContext } from './useLanguage'

export function LanguageProvider({ children }) {
  const [langue, setLangue] = useState('fr')
  const t = translations[langue]

  useEffect(() => {
    document.documentElement.lang = langue
  }, [langue])

  return (
    <LanguageContext.Provider value={{ langue, setLangue, t }}>
      {children}
    </LanguageContext.Provider>
  )
}