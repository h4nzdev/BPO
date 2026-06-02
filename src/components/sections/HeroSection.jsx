import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Award, Database, BadgeCheck } from 'lucide-react'
import { gsap } from '../../utils/gsapConfig'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4mx8obYcRCm4RyId99Jc9Rgq8AhxwUtFhcyEjw6G9WtgySClh3vUmAUKyuC49mtp4lOwPOkHXX-MBDBFkrFtCGaoF11IJWxan_dfrFyf5cW3lU40Ikr5flHk-O9t7V3ZHXXCmfTJn7pyNxh72dUjZWQ-Nem_rsP7VzlK9g3_ZROPgNda9ZqLbJQsuM9xA7stsEpl4nABVj77fRy-gjRwNOKV77KG07XVVyNcPtNIQHH5VOEUE3DpkDkNK-oWjrXe_XFlYmNRkfWhM'

const HEADLINE_WORDS = [
  { text: 'Operational', accent: false },
  { text: 'Excellence', accent: true },
  { text: 'at Scale', accent: false },
]

const TRUST_BADGES = [
  { Icon: ShieldCheck, label: 'ISO 27001' },
  { Icon: Database, label: 'SOC 2 Certified' },
  { Icon: BadgeCheck, label: 'GDPR Compliant' },
  { Icon: Award, label: 'Top BPO 2024' },
]

const TICKER = [
  'Customer Support',
  'Data Management',
  'Virtual Assistance',
  'Lead Generation',
  'Back Office Operations',
  'Content Moderation',
]

export default function HeroSection() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgesRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll('.hero-word') ?? []
      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(labelRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .fromTo(
          words,
          { opacity: 0, y: 36, skewX: 3 },
          { opacity: 1, y: 0, skewX: 0, stagger: 0.11, duration: 0.65, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(subRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.35')
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .fromTo(badgesRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45 }, '-=0.1')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--color-primary)', paddingTop: '5rem' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.32 }}
        />
        {/* Dark vignette — stronger at edges, lighter at center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.92) 75%, rgba(11,31,58,0.98) 100%)',
          }}
        />
      </div>

      {/* Subtle teal center glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 48%, rgba(0,194,168,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Grid mesh */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" aria-hidden="true">
        <defs>
          <pattern id="kinetic-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#00C2A8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kinetic-grid)" opacity="0.03" />
      </svg>

      {/* Centered content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 py-20">
        <div className="max-w-4xl w-full">

          {/* Label with lines on both sides */}
          <div
            ref={labelRef}
            className="inline-flex items-center gap-4 justify-center mb-10"
            style={{ opacity: 0 }}
          >
            <span className="w-8 h-px flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
            <span
              className="font-space-mono text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              Global Operations
            </span>
            <span className="w-8 h-px flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
          </div>

          {/* Headline — word-by-word reveal */}
          <h1
            ref={headlineRef}
            className="font-syne font-bold leading-none mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', letterSpacing: '-0.02em' }}
          >
            {HEADLINE_WORDS.map(({ text, accent }, i) => (
              <span
                key={i}
                className="hero-word inline-block"
                style={{
                  opacity: 0,
                  color: accent ? 'var(--color-accent)' : 'white',
                  marginRight: i < HEADLINE_WORDS.length - 1 ? '0.28em' : 0,
                }}
              >
                {text}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className="font-dm-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ color: 'rgba(255,255,255,0.6)', opacity: 0 }}
          >
            Seamlessly integrating precision technology with elite human expertise to accelerate your enterprise growth.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            style={{ opacity: 0 }}
          >
            <Link to="/contact">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 font-space-mono text-sm uppercase tracking-wider font-bold transition-all duration-200"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  boxShadow: '0 0 28px rgba(0,194,168,0.4)',
                  borderRadius: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 44px rgba(0,194,168,0.6)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 28px rgba(0,194,168,0.4)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Get a Quote <ArrowRight size={15} />
              </button>
            </Link>
            <Link to="/services">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 font-space-mono text-sm uppercase tracking-wider font-bold transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: 'var(--color-accent-warm)',
                  border: '1px solid var(--color-accent-warm)',
                  borderRadius: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-warm)'
                  e.currentTarget.style.color = 'var(--color-primary)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--color-accent-warm)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                See Services
              </button>
            </Link>
          </div>

          {/* Trust badges */}
          <div
            ref={badgesRef}
            className="flex items-center gap-6 justify-center flex-wrap"
            style={{ opacity: 0 }}
          >
            <span
              className="font-space-mono text-xs uppercase tracking-wider"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Trusted Standards:
            </span>
            {TRUST_BADGES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                <Icon size={14} />
                <span className="font-dm-sans text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee ticker */}
      <div
        className="relative z-10 w-full overflow-hidden flex-shrink-0"
        style={{
          background: 'rgba(0,0,0,0.3)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          height: '3rem',
        }}
      >
        <div className="animate-marquee flex items-center h-full">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 font-space-mono text-xs uppercase tracking-widest flex-shrink-0"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              {item}
              <span style={{ color: 'var(--color-accent)', fontSize: '7px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
