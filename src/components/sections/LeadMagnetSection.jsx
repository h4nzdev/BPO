import { useState } from 'react'
import { Download, ArrowRight } from 'lucide-react'
import { useGSAPReveal } from '../../hooks/useGSAPReveal'

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useGSAPReveal({ y: 40, duration: 0.75, stagger: 0.15 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-accent)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <span
              className="font-space-mono text-xs uppercase tracking-widest mb-4 block"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Free Resource
            </span>
            <h2
              className="font-syne font-bold mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#FFFFFF' }}
            >
              Scale Your Business Efficiency
            </h2>
            <p className="font-dm-sans text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Download our exclusive whitepaper on Operational Velocity: 10 strategies to optimize your BPO partnerships for measurable growth.
            </p>

            {submitted ? (
              <div
                className="inline-flex items-center gap-3 px-6 py-4 font-dm-sans font-medium"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  borderRadius: '4px',
                }}
              >
                ✓ Check your inbox — guide is on its way!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Corporate email"
                  className="flex-1 px-5 py-3 font-dm-sans text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#FFFFFF',
                    outline: 'none',
                    borderRadius: '4px',
                  }}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 font-dm-sans font-medium text-sm flex-shrink-0 transition-all duration-200 hover:opacity-88"
                  style={{
                    background: 'var(--color-primary)',
                    color: 'white',
                    borderRadius: '4px',
                  }}
                >
                  Download Ebook <Download size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Book mockup */}
          <div className="flex justify-center">
            <div
              className="transition-transform duration-500 hover:rotate-0"
              style={{ transform: 'rotate(3deg)' }}
            >
              <div
                className="p-8 w-56 h-72 flex flex-col justify-end shadow-2xl"
                style={{
                  background: 'rgba(11,31,58,0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '4px',
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{
                    background: 'var(--color-primary)',
                    borderRadius: '4px',
                  }}
                >
                  <Download size={28} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div
                  className="font-space-mono text-xs uppercase tracking-widest mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Whitepaper 2024
                </div>
                <div className="font-syne font-bold text-lg leading-tight" style={{ color: '#FFFFFF' }}>
                  Operational<br />Velocity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
