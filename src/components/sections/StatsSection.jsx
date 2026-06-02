import { useGSAPReveal } from '../../hooks/useGSAPReveal'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { end: 50, suffix: '+', label: 'Global Clients', desc: 'Across diverse industries' },
  { end: 5, suffix: '+', label: 'Years of Innovation', desc: 'Proven track record' },
  { end: 98, suffix: '%', label: 'Retention Rate', desc: 'Long-term partnerships' },
]

export default function StatsSection() {
  const ref = useGSAPReveal({ y: 20, duration: 0.65, stagger: 0.12 })

  return (
    <section
      className="py-14 md:py-18"
      style={{
        background: 'var(--color-surface-dark)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3">
          {stats.map(({ end, suffix, label, desc }, i) => (
            <div
              key={label}
              className="flex flex-col items-center py-10 px-6 text-center"
              style={{
                borderRight:
                  i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div
                className="font-syne font-bold mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  lineHeight: 1,
                  color: 'var(--color-accent)',
                }}
              >
                <AnimatedCounter end={end} suffix={suffix} />
              </div>
              <div className="font-syne font-semibold text-base text-white mb-1">{label}</div>
              <div className="font-dm-sans text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
