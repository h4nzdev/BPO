import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from '../../utils/gsapConfig'

export default function PageTransition({ children }) {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    }, el)
    return () => ctx.revert()
  }, [location.pathname])

  return <div ref={ref}>{children}</div>
}
