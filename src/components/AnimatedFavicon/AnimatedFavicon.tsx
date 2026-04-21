'use client'

import { useEffect, useRef } from 'react'

const CURSOR_ON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1e1e1e"/><text x="6" y="24" font-family="monospace" font-size="24" font-weight="bold" fill="#f8f8f8">S</text><rect x="20" y="24" width="8" height="3" fill="#ffa500"/></svg>`

const CURSOR_OFF = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1e1e1e"/><text x="6" y="24" font-family="monospace" font-size="24" font-weight="bold" fill="#f8f8f8">S</text></svg>`

function toDataUri(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const FAVICON_ON = toDataUri(CURSOR_ON)
const FAVICON_OFF = toDataUri(CURSOR_OFF)

export default function AnimatedFavicon() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const visibleRef = useRef(true)

  useEffect(() => {
    let link = document.getElementById('animated-favicon') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = 'animated-favicon'
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      document.head.appendChild(link)
    }

    link.href = FAVICON_ON

    const start = () => {
      if (intervalRef.current) return
      intervalRef.current = setInterval(() => {
        visibleRef.current = !visibleRef.current
        link!.href = visibleRef.current ? FAVICON_ON : FAVICON_OFF
      }, 800)
    }

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop()
      } else {
        start()
      }
    }

    start()
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      link?.remove()
    }
  }, [])

  return null
}
