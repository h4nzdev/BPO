import { Quote } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { useGSAPReveal } from '../../hooks/useGSAPReveal'

const testimonials = [
  {
    quote:
      'Nexa Solutions transformed our support operations from a cost center into a strategic advantage. Their precision is unmatched.',
    name: 'Sarah Jenkins',
    role: 'COO, TechFlow Inc.',
    initials: 'SJ',
  },
  {
    quote:
      'The scalability they offer allowed us to enter three new markets in six months without missing a beat. Truly elite service.',
    name: 'Marcus Thorne',
    role: 'Director of Operations, GlobalLogistics',
    initials: 'MT',
  },
  {
    quote:
      'Security was our main concern, and Nexa Solutions\'s protocols exceeded our internal standards. A partner we can fully trust.',
    name: 'Elena Rodriguez',
    role: 'CTO, FinGuard Solutions',
    initials: 'ER',
  },
  {
    quote:
      'Their team integrated seamlessly with ours. We scaled from 5 to 30 agents in just 6 months with zero drop in quality.',
    name: 'James Reyes',
    role: 'COO, TechVenture PH',
    initials: 'JR',
  },
]

export default function TestimonialsSection() {
  const headerRef = useGSAPReveal({ y: 28, duration: 0.7 })

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div ref={headerRef} className="text-center">
          <SectionLabel className="justify-center mb-4">Client Stories</SectionLabel>
          <h2 className="font-syne font-bold text-3xl md:text-4xl" style={{ color: 'var(--color-primary)' }}>
            Trusted by Industry Leaders
          </h2>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        className="no-scrollbar flex gap-6 overflow-x-auto pb-4 px-6 max-w-7xl mx-auto snap-x snap-mandatory"
      >
        {testimonials.map(({ quote, name, role, initials }) => (
          <div
            key={name}
            className="flex flex-col flex-shrink-0 snap-center p-8"
            style={{
              minWidth: '320px',
              maxWidth: '400px',
              width: '38vw',
              background: 'var(--color-surface-dark)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderTop: '3px solid rgba(0,194,168,0.5)',
            }}
          >
            <Quote
              size={32}
              className="mb-6 flex-shrink-0"
              style={{ color: 'rgba(0,194,168,0.45)' }}
            />
            <p
              className="font-dm-sans text-base italic leading-relaxed flex-1 mb-8"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              &ldquo;{quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center font-syne font-bold text-xs text-white flex-shrink-0"
                style={{
                  background: 'var(--color-primary)',
                  border: '1.5px solid rgba(0,194,168,0.4)',
                  borderRadius: '50%',
                }}
              >
                {initials}
              </div>
              <div>
                <div className="font-syne font-semibold text-sm text-white">{name}</div>
                <div className="font-dm-sans text-xs uppercase tracking-wide" style={{ color: 'var(--color-accent)' }}>
                  {role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
