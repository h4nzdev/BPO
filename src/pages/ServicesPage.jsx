import { Headphones, Database, Users, Settings, BarChart3, Globe, CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import CTASection from '../components/sections/CTASection'
import { useGSAPReveal } from '../hooks/useGSAPReveal'

const services = [
  { num: '01', icon: Headphones, name: 'Customer Support', desc: 'Inbound/outbound voice, email, and chat support — 24/7, multilingual, brand-trained agents who represent you professionally.' },
  { num: '02', icon: Database, name: 'Data Management', desc: 'Accurate data entry, cleansing, migration, and processing pipelines that keep your business intelligence clean and reliable.' },
  { num: '03', icon: Users, name: 'Virtual Assistance', desc: 'Skilled VAs for scheduling, research, email management, and administrative tasks — giving your team back their time.' },
  { num: '04', icon: BarChart3, name: 'Lead Generation', desc: 'Targeted outreach, prospect research, and pipeline management to keep your sales funnel consistently full.' },
  { num: '05', icon: Settings, name: 'Back Office Operations', desc: 'Order processing, billing support, compliance documentation, and internal coordination — all handled with precision.' },
  { num: '06', icon: Globe, name: 'Content Moderation', desc: 'Scalable moderation for user-generated content — protecting your platform and community around the clock.' },
]

const problems = [
  { problem: 'High operational costs', solution: 'Cost-effective offshore teams at 60–70% lower overhead' },
  { problem: 'Scaling takes months', solution: 'Deploy trained agents in 2–4 weeks, not quarters' },
  { problem: 'Inconsistent service quality', solution: 'SOPs, QA teams, and weekly performance reviews built in' },
  { problem: 'Limited talent locally', solution: 'Access to deep Filipino talent pools in key disciplines' },
  { problem: 'Management overhead', solution: 'Dedicated team leads handle day-to-day management for you' },
]

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your business, pain points, and operational goals in depth.' },
  { num: '02', title: 'Custom Proposal', desc: 'We design a tailored service package with transparent pricing.' },
  { num: '03', title: 'Team Assembly', desc: 'We recruit, vet, and train agents specific to your exact needs.' },
  { num: '04', title: 'Onboarding & Launch', desc: 'Smooth integration with your tools, systems, and workflows.' },
  { num: '05', title: 'Ongoing Optimization', desc: 'Monthly reviews, KPI tracking, and continuous improvement cycles.' },
]

export default function ServicesPage() {
  const gridRef = useGSAPReveal({ y: 40, duration: 0.7, stagger: 0.09 })
  const benefitsRef = useGSAPReveal({ y: 30, duration: 0.65, stagger: 0.08 })
  const stepsRef = useGSAPReveal({ y: 30, duration: 0.65, stagger: 0.1 })

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'var(--color-primary)' }}
      >
        {/* Grid mesh */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="svc-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00C2A8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" opacity="0.03" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <span>Home</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
              <span style={{ color: 'var(--color-accent)' }}>Services</span>
            </div>
            <SectionLabel className="mb-5">What We Offer</SectionLabel>
            <h1
              className="font-syne font-bold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
            >
              End-to-End{' '}
              <span style={{ color: 'var(--color-accent)' }}>BPO Solutions</span>
              <br />
              Built to Scale.
            </h1>
            <p className="font-dm-sans text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.58)' }}>
              From customer support to back-office operations — we deliver the expertise your business needs to grow confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ num, icon: Icon, name, desc }) => (
              <div
                key={name}
                className="group p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'white',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = 'var(--color-accent)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,194,168,0.09)', borderRadius: '4px' }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="font-space-mono text-xs font-bold" style={{ color: 'rgba(0,194,168,0.4)' }}>
                    {num}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-lg mb-3" style={{ color: 'var(--color-primary)' }}>
                  {name}
                </h3>
                <p className="font-dm-sans text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {desc}
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 text-sm font-dm-sans font-medium transition-all duration-200 opacity-0 group-hover:opacity-100"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Learn more <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging the Gap — Problem vs Solution */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-4">Why Outsource?</SectionLabel>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
              Bridging the Gap
            </h2>
            <p className="font-dm-sans text-base mt-4 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Common operational pain points — and how Nexa Solutions solves them.
            </p>
          </div>

          {/* Header row */}
          <div className="hidden md:grid grid-cols-2 gap-4 mb-4 px-5">
            <div className="font-space-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
              — The Challenge
            </div>
            <div className="font-space-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
              — The Solution
            </div>
          </div>

          <div ref={benefitsRef} className="space-y-3">
            {problems.map(({ problem, solution }) => (
              <div key={problem} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  className="flex items-start gap-4 p-5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
                    {problem}
                  </span>
                </div>
                <div
                  className="flex items-start gap-4 p-5"
                  style={{ background: 'rgba(0,194,168,0.07)', border: '1px solid rgba(0,194,168,0.18)' }}
                >
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                  <span className="font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.78)' }}>
                    {solution}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-4">Our Process</SectionLabel>
            <h2 className="font-syne font-bold text-3xl md:text-4xl" style={{ color: 'var(--color-primary)' }}>
              How It Works
            </h2>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {steps.map(({ num, title, desc }, i) => (
              <div key={num} className="relative">
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-full w-4 h-px z-10"
                    style={{ background: 'rgba(0,194,168,0.3)' }}
                  />
                )}
                <div
                  className="p-6 h-full"
                  style={{ background: 'white', border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center font-space-mono font-bold text-sm mb-5 flex-shrink-0"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', borderRadius: '2px' }}
                  >
                    {num}
                  </div>
                  <h3 className="font-syne font-bold text-sm mb-2" style={{ color: 'var(--color-primary)' }}>
                    {title}
                  </h3>
                  <p className="font-dm-sans text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Needs"
        subtitle="Every engagement starts with a conversation. Let's find the right fit for you."
      />
    </>
  )
}
