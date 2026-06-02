import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { useGSAPReveal } from '../../hooks/useGSAPReveal'

export default function CTASection({
  title = 'Ready to Scale Your Business?',
  subtitle = "Let's discuss how Nexa Solutions can handle your operational needs.",
  linkText = 'Get a Quote',
  linkHref = '/contact',
}) {
  const ref = useGSAPReveal({ y: 30, duration: 0.7, stagger: 0.1 })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--color-primary)' }}>
      {/* Decorative diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(0,194,168,0.05) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none"
        style={{
          borderBottom: '3px solid var(--color-accent)',
          borderLeft: '3px solid var(--color-accent)',
          opacity: 0.25,
        }}
      />
      <div
        className="absolute top-0 right-16 w-16 h-16 pointer-events-none"
        style={{
          borderTop: '3px solid var(--color-accent-warm)',
          borderRight: '3px solid var(--color-accent-warm)',
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div ref={ref}>
          <SectionLabel className="justify-center mb-4">Take Action</SectionLabel>
          <h2
            className="font-syne font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {title}
          </h2>
          <p className="font-dm-sans text-lg mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {subtitle}
          </p>
          <Link to={linkHref}>
            <button
              className="inline-flex items-center gap-2 px-10 py-4 font-dm-sans font-medium text-base transition-all duration-200 hover:opacity-88"
              style={{ background: 'var(--color-accent-warm)', color: 'var(--color-primary)', borderRadius: '4px' }}
            >
              {linkText} <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
