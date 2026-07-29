import { useEffect, useRef } from 'react'

export function usePageMeta(title) {
  const headingRef = useRef(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    document.title = title
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    headingRef.current?.focus()
  }, [title])

  return headingRef
}
