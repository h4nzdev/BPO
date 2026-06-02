import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, ArrowRight, ChevronDown } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import { useGSAPReveal } from '../hooks/useGSAPReveal'
import { gsap } from '../utils/gsapConfig'


const faqs = [
  {
    q: 'How quickly can you onboard a team?',
    a: 'Typically 2–4 weeks from contract signing, depending on role complexity and required training.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve e-commerce, SaaS, healthcare, real estate, finance, and more. Our teams are trained to adapt.',
  },
  {
    q: 'Do you offer trial periods?',
    a: 'Yes — we offer a 30-day pilot program so you can evaluate fit before committing long-term.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer monthly retainer pricing based on team size and role type. Every package is custom-quoted after a discovery call.',
  },
]

const contactItems = [
  { Icon: Mail, label: 'Email', value: 'hello@nexasolutions.com', href: 'mailto:hello@nexasolutions.com' },
  { Icon: Phone, label: 'Phone', value: '+63 (2) 8888-0000', href: 'tel:+6328888000' },
  { Icon: MapPin, label: 'Location', value: 'Metro Manila, Philippines', href: null },
  { Icon: Clock, label: 'Hours', value: 'Mon–Fri, 8AM–6PM PHT', href: null },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px solid var(--color-border)', background: 'white' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-dm-sans font-medium text-sm"
        style={{ color: 'var(--color-primary)' }}
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 ml-4"
          style={{
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'var(--color-accent)',
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.32s ease, opacity 0.25s ease',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="px-6 pb-5 font-dm-sans text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)
  const faqRef = useGSAPReveal({ y: 30, duration: 0.6, stagger: 0.08 })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1500))
    const ok = Math.random() > 0.1
    if (ok) {
      setStatus('success')
      gsap.fromTo(formRef.current, { scale: 0.97 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' })
    } else {
      setStatus('error')
    }
  }

  const inputBase = 'w-full px-4 py-3 font-dm-sans text-sm transition-all duration-200'
  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'white',
    outline: 'none',
    borderRadius: '4px',
  }
  const focusHandlers = {
    onFocus: (e) => {
      e.target.style.borderColor = 'var(--color-accent)'
      e.target.style.boxShadow = '0 0 0 2px rgba(0,194,168,0.15)'
    },
    onBlur: (e) => {
      e.target.style.borderColor = 'rgba(255,255,255,0.12)'
      e.target.style.boxShadow = 'none'
    },
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'var(--color-primary)' }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00C2A8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" opacity="0.03" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionLabel className="mb-5">Get in Touch</SectionLabel>
          <h1
            className="font-syne font-bold text-white leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Let&apos;s{' '}
            <span style={{ color: 'var(--color-accent-warm)' }}>Talk.</span>
          </h1>
          <p className="font-dm-sans text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Ready to start a conversation? Fill in the form or reach out directly — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact layout — dark split */}
      <section className="py-0" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Form */}
            <div className="lg:col-span-7">
              <div
                ref={formRef}
                className="p-8 md:p-10"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderTop: '3px solid var(--color-accent)',
                }}
              >
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} style={{ color: 'var(--color-accent)', margin: '0 auto 1rem' }} />
                    <h3 className="font-syne font-bold text-xl mb-2 text-white">Message Sent!</h3>
                    <p className="font-dm-sans text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', message: '' }) }}
                      className="font-dm-sans text-sm underline"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-syne font-bold text-xl text-white mb-6">Send Us a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-dm-sans text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Full Name *
                        </label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputBase} style={inputStyle} {...focusHandlers} />
                      </div>
                      <div>
                        <label className="block font-dm-sans text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Email Address *
                        </label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputBase} style={inputStyle} {...focusHandlers} />
                      </div>
                    </div>

                    <div>
                      <label className="block font-dm-sans text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Company
                      </label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className={inputBase} style={inputStyle} {...focusHandlers} />
                    </div>

                    <div>
                      <label className="block font-dm-sans text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your needs..."
                        className={inputBase}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        {...focusHandlers}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 font-dm-sans text-sm">
                        <AlertCircle size={15} />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-dm-sans font-medium text-base transition-opacity hover:opacity-88 disabled:opacity-60"
                      style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', borderRadius: '4px' }}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <ArrowRight size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-5 space-y-6">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-5 items-start p-6"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderLeft: '3px solid rgba(0,194,168,0.35)',
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,194,168,0.1)', borderRadius: '4px' }}
                  >
                    <Icon size={16} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div className="font-space-mono text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-dm-sans text-sm font-medium text-white transition-colors duration-200"
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'white' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-dm-sans text-sm font-medium text-white">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center mb-4">FAQ</SectionLabel>
            <h2 className="font-syne font-bold text-2xl md:text-3xl" style={{ color: 'var(--color-primary)' }}>
              Common Questions
            </h2>
          </div>
          <div ref={faqRef} className="space-y-3">
            {faqs.map((faq) => (
              <FAQ key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
