import { Link } from 'react-router-dom'
import { Target, Zap, Shield, ArrowRight } from 'lucide-react'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import LeadMagnetSection from '../components/sections/LeadMagnetSection'
import NewsletterSection from '../components/sections/NewsletterSection'
import SectionLabel from '../components/ui/SectionLabel'
import { useGSAPReveal } from '../hooks/useGSAPReveal'

const edges = [
  {
    Icon: Target,
    title: 'Precise Execution',
    desc: 'Rigorous process engineering ensures zero-defect delivery across all business functions.',
  },
  {
    Icon: Zap,
    title: 'Kinetic Agility',
    desc: 'Fast-response infrastructure designed to scale with your market demands in real-time.',
  },
  {
    Icon: Shield,
    title: 'Secure Infrastructure',
    desc: 'Enterprise-grade security protocols protecting your data at every touchpoint.',
  },
]

const services = [
  {
    name: 'Customer Support',
    desc: '24/7 multi-channel support that builds brand loyalty through every interaction.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxLoYkyOJXQX7v1M2W2Fsu4Zc6jXST1m5c_UXYLqKwrOnEuGWvlAQxWfxYwmZxKVfNJqmNdCHK9Cwqet6ajnHm23vC_NqbBtcXiwTY5E93wqDW025kcnhbAA0fN_2QjNy4zjgZJAM2gcUnn8Y2K3JDV1Q_beRoILRsV8FFH9HgODcknRywE4-S-ZE4X7gz-okUcnAxaDIyJ5dvsC_SC7Iae1kaHGtjh3izzKY7QV4Ux58gRveVfEchNfbmhiDDXDoEAT2vlwWQeUnb',
  },
  {
    name: 'Back Office',
    desc: 'Streamlined data processing and administrative workflows for maximum efficiency.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAE159VOoiGez2dX3u8bjxC8dejmEHIW7fdyCmK-WkY5fmPKu3lxr4Y3Q8iNbLp2fwv-ik53om_uh1B8x1L7ddGuiektIAzmtSJ5rr2J8Hw-5CbGisDkQSfrMspJBuiRZ1AW6e-duDHhNU8SyvScKJhttVoXp5mAEyvE9OQH5NVj9vuDz1VyScbTvaiTPcJSd0FXvUmK4C0_sYXEzZdDzjmt7mnXM_Dboee1b1q2yNwQbjivXqGkQ5UuZa8zDtCUT2P1KNLaoxJlfB',
  },
  {
    name: 'IT Solutions',
    desc: 'Custom technical support and infrastructure management for the modern enterprise.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCL8b1ezGDgC9GEFutjAeeSTpwmGX-Kaqy8bwDLGzmVzT1qQI2RLTMC-hGWltDOu-26_FaHs3NhZPs44xyk6i3ema1Kzf2ixXwMQv-95fmczXZwQ84omJ8x_vFDo-IJdOnd0KWbbBPnh3AH3GIDbIZKh6wjAPcIBUj-4jmZKbbsVZEfNF5ZMmsrM261lbXBdS5XrQS79ySmmqWc8ir4zROWsa5f_FfYuCoHdvcDJuqre',
  },
]

export default function HomePage() {
  const edgesRef = useGSAPReveal({ y: 36, duration: 0.7, stagger: 0.1 })
  const servicesRef = useGSAPReveal({ y: 36, duration: 0.7, stagger: 0.1 })

  return (
    <>
      <HeroSection />
      <StatsSection />

      {/* Why Nexa Solutions — "The Edge" */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <SectionLabel className="mb-4">The Edge</SectionLabel>
            <h2
              className="font-syne font-bold"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-primary)' }}
            >
              Why Partner with Nexa Solutions
            </h2>
          </div>

          <div ref={edgesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {edges.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group p-8 transition-all duration-300"
                style={{
                  background: 'white',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--color-accent)'
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Icon
                  size={32}
                  className="mb-5 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: 'var(--color-accent)' }}
                />
                <h3
                  className="font-syne font-bold text-lg mb-3"
                  style={{ color: 'var(--color-primary)' }}
                >
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

      {/* Services Preview — image cards */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-surface-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel className="mb-4">Our Expertise</SectionLabel>
              <h2
                className="font-syne font-bold text-white"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Enterprise Solutions
              </h2>
            </div>
            <Link to="/services">
              <button
                className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-wider transition-colors duration-200 flex-shrink-0"
                style={{ color: 'var(--color-accent)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
              >
                View All Services <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map(({ name, desc, image }) => (
              <div
                key={name}
                className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: 'var(--color-primary)' }}
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.6) 0%, transparent 60%)' }}
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-syne font-bold text-lg text-white mb-2">{name}</h4>
                  <p className="font-dm-sans text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {desc}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-wider font-bold transition-colors duration-200"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Learn More <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <LeadMagnetSection />
      <NewsletterSection />
    </>
  )
}
