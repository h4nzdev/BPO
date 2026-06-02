import { Link2, Share2 } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import CTASection from '../components/sections/CTASection'
import { useGSAPReveal } from '../hooks/useGSAPReveal'

const team = [
  { name: 'Michelle Samson', role: 'Chief Executive Officer', bio: 'Visionary leader with 10+ years in BPO strategy and workforce transformation across global markets.' },
  { name: 'Carlo Reyes', role: 'Head of Operations', bio: 'Expert in process optimization, SLA management, and cross-functional team performance.' },
  { name: 'Ana Torres', role: 'Client Success Manager', bio: 'Dedicated to ensuring every client relationship delivers measurable ROI and long-term value.' },
  { name: 'Jio Fernandez', role: 'Head of Technology', bio: 'Drives digital transformation and systems integration across all operational workflows.' },
  { name: 'Mia Lim', role: 'HR & Talent Director', bio: 'Builds and nurtures the people infrastructure that powers our service excellence.' },
  { name: 'Ryan Santos', role: 'Quality Assurance Lead', bio: 'Ensures every output meets our exacting standards through rigorous QA processes.' },
]

const culture = [
  { title: 'Continuous Learning', desc: 'Monthly training programs, certifications, and mentorship tracks for every team member.' },
  { title: 'Work-Life Balance', desc: 'Flexible arrangements and wellness programs that keep our people energized and engaged.' },
  { title: 'Inclusive Culture', desc: 'A diverse, welcoming environment where every voice is heard and valued.' },
]

function TeamCard({ name, role, bio }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  return (
    <div
      className="group relative overflow-hidden transition-all duration-300"
      style={{
        background: 'white',
        border: '1px solid var(--color-border)',
        borderTop: '3px solid transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderTopColor = 'var(--color-accent)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderTopColor = 'transparent'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div
        className="h-48 flex items-center justify-center relative"
        style={{ background: 'var(--color-surface-dark)' }}
      >
        <div
          className="w-18 h-18 flex items-center justify-center font-syne font-bold text-2xl text-white"
          style={{
            width: '4.5rem',
            height: '4.5rem',
            background: 'rgba(0,194,168,0.18)',
            border: '2px solid var(--color-accent)',
            borderRadius: '50%',
          }}
        >
          {initials}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(11,31,58,0.88)' }}
        >
          {[{ Icon: Link2, label: 'LinkedIn' }, { Icon: Share2, label: 'Twitter/X' }].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-syne font-bold text-base mb-1" style={{ color: 'var(--color-primary)' }}>
          {name}
        </h3>
        <div className="font-space-mono text-xs mb-3" style={{ color: 'var(--color-accent)' }}>
          {role}
        </div>
        <p className="font-dm-sans text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {bio}
        </p>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const teamRef = useGSAPReveal({ y: 40, duration: 0.7, stagger: 0.1 })
  const cultureRef = useGSAPReveal({ y: 30, duration: 0.6, stagger: 0.12 })

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'var(--color-primary)' }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="team-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00C2A8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-grid)" opacity="0.03" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionLabel className="mb-5">The Team</SectionLabel>
          <h1
            className="font-syne font-bold text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          >
            Meet the People<br />
            <span style={{ color: 'var(--color-accent)' }}>Behind Nexa.</span>
          </h1>
          <p className="font-dm-sans text-lg max-w-xl mt-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Our team is our greatest product — a collective of passionate professionals committed to your success.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-4">Life at Nexa</SectionLabel>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">Our Culture</h2>
          </div>
          <div ref={cultureRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culture.map(({ title, desc }) => (
              <div
                key={title}
                className="text-center p-8"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: '3px solid rgba(0,194,168,0.35)',
                }}
              >
                <h3 className="font-syne font-bold text-lg text-white mb-3">{title}</h3>
                <p className="font-dm-sans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="We're Growing. Work With Us."
        subtitle="Join a team that invests in your growth as much as our clients' success."
        linkText="Get in Touch"
      />
    </>
  )
}
