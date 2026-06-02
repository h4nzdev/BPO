import { useRef, useEffect } from 'react'
import { gsap } from '../utils/gsapConfig'

export function useGSAPReveal({ y = 40, duration = 0.8, stagger = 0.1, delay = 0 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.children.length > 0 ? Array.from(el.children) : [el]

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [y, duration, stagger, delay])

  return ref
}
