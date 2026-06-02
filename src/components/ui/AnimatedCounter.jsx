import { useRef, useEffect } from 'react'
import { gsap } from '../../utils/gsapConfig'

export default function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { value: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate() {
          el.textContent = prefix + Math.round(obj.value) + suffix
        },
      })
    }, el)

    return () => ctx.revert()
  }, [end, prefix, suffix, duration])

  return <span ref={ref}>{prefix}0{suffix}</span>
}
