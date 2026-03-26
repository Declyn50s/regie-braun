import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const anchorId = decodeURIComponent(hash.slice(1))

      requestAnimationFrame(() => {
        const anchor = document.getElementById(anchorId)

        if (anchor) {
          anchor.scrollIntoView()
          return
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })

      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, search, hash])

  return null
}
