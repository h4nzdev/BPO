import { Target, Eye, Shield, TrendingUp, Heart, Lightbulb, Users, Globe } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import CTASection from '../components/sections/CTASection'
import { useGSAPReveal } from '../hooks/useGSAPReveal'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with full transparency — no hidden fees, no surprises.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'Every output is held to a standard that reflects pride in our craft.' },
  { icon: Heart, title: 'Empathy', desc: 'We serve your clients as if they were our own.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We continuously improve through technology and smarter workflows.' },
  { icon: Users, title: 'Teamwork', desc: 'Our people are our greatest asset — we invest in them daily.' },
  { icon: Globe, title: 'Global Mindset', desc: 'Filipino-led, world-class standards, serving clients everywhere.' },
]

const story = [
  'Founded in Metro Manila, Nexa Solutions was built on the belief that Filipino talent — when empowered and properly supported — delivers world-class business outcomes.',
  'Since our founding, we\'ve partnered with startups, SMEs, and enterprise clients across North America, Australia, and Europe — helping them scale operations without sacrificing service quality.',
  'Today, Nexa Solutions is a team of over 200 professionals, united by a shared commitment to excellence, integrity, and continuous growth.',
]

export default function AboutPage() {
  const storyRef = useGSAPReveal({ y: 40, duration: 0.75, stagger: 0.1 })
  const mvRef = useGSAPReveal({ y: 40, duration: 0.75, stagger: 0.15 })
  const valuesRef = useGSAPReveal({ y: 40, duration: 0.65, stagger: 0.08 })

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'var(--color-primary)' }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00C2A8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" opacity="0.03" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6 font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span>Home</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: 'var(--color-accent)' }}>About</span>
          </div>
          <SectionLabel className="mb-5">Our Story</SectionLabel>
          <h1
            className="font-syne font-bold text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          >
            People-First.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Results-Driven.</span>
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: CEO Quote */}
            <div className="lg:col-span-5">
              <div
                className="p-8 md:p-10"
                style={{
                  background: 'var(--color-primary)',
                  borderLeft: '4px solid var(--color-accent)',
                }}
              >
                <blockquote
                  className="font-syne font-bold text-xl md:text-2xl leading-snug text-white mb-6"
                >
                  &ldquo;We started Nexa Solutions because we believed great outsourcing shouldn&apos;t mean sacrificing quality or connection.&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center font-syne font-bold text-xs text-white flex-shrink-0"
                    style={{
                      background: 'rgba(0,194,168,0.15)',
                      border: '1.5px solid rgba(0,194,168,0.4)',
                      borderRadius: '50%',
                    }}
                  >
                    MS
                  </div>
                  <div>
                    <div className="font-syne font-semibold text-sm text-white">Michelle Samson</div>
                    <div className="font-dm-sans text-xs" style={{ color: 'var(--color-accent)' }}>CEO, Nexa Solutions</div>
                  </div>
                </footer>
              </div>
            </div>

            {/* Right: Story paragraphs */}
            <div className="lg:col-span-7 space-y-5">
              {story.map((text, i) => (
                <p key={i} className="font-dm-sans text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-4">Purpose</SectionLabel>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">Mission &amp; Vision</h2>
          </div>

          <div ref={mvRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <div
              className="p-10"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '3px solid var(--color-accent)',
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center mb-6"
                style={{ background: 'rgba(0,194,168,0.12)', borderRadius: '4px' }}
              >
                <Target size={20} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-4">Our Mission</h3>
              <p className="font-dm-sans text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                To provide businesses worldwide with reliable, scalable, and people-first BPO solutions that drive measurable growth — while creating meaningful careers for Filipino professionals.
              </p>
            </div>

            {/* Vision */}
            <div
              className="p-10 md:mt-8"
              style={{
                background: 'rgba(0,194,168,0.06)',
                border: '1px solid rgba(0,194,168,0.18)',
                borderTop: '3px solid var(--color-accent)',
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center mb-6"
                style={{ background: 'rgba(0,194,168,0.15)', borderRadius: '4px' }}
              >
                <Eye size={20} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-4">Our Vision</h3>
              <p className="font-dm-sans text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                To be the most trusted BPO partner in Southeast Asia — recognized not just for operational excellence, but for the positive impact we create in every organization we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-4">What We Stand For</SectionLabel>
            <h2 className="font-syne font-bold text-3xl md:text-4xl" style={{ color: 'var(--color-primary)' }}>
              Our Core Values
            </h2>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 transition-all duration-300"
                style={{
                  background: 'white',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--color-accent)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ background: 'rgba(0,194,168,0.08)', borderRadius: '4px' }}
                >
                  <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="font-syne font-bold text-base mb-2" style={{ color: 'var(--color-primary)' }}>
                  {title}
                </h3>
                <p className="font-dm-sans text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 md:py-28 text-center" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="font-syne font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
          >
            We don&apos;t just fill seats.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>We build partnerships.</span>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        subtitle="Let's find the right BPO solution for your business."
      />
    </>
  )
}
