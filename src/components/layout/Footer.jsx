import { Link } from 'react-router-dom'
import { Link2, Share2, Globe, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const socials = [
  { Icon: Link2, label: 'LinkedIn' },
  { Icon: Share2, label: 'Twitter/X' },
  { Icon: Globe, label: 'Facebook' },
  { Icon: ExternalLink, label: 'Instagram' },
]

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  'Customer Support',
  'Data Management',
  'Virtual Assistance',
  'Lead Generation',
  'Back Office',
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', borderTop: '3px solid var(--color-accent)' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <div className="font-syne font-bold text-2xl text-white mb-3">
              Nexa <span style={{ color: 'var(--color-accent)' }}>Solutions</span>
            </div>
            <p className="font-dm-sans text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Precision outsourcing for growth-focused businesses. People-first. Results-driven.
            </p>
            <div className="flex gap-4">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-space-mono text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="font-dm-sans text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { e.target.style.color = 'white' }}
                    onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space-mono text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-dm-sans text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { e.target.style.color = 'white' }}
                    onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space-mono text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Contact</h4>
            <ul className="space-y-4">
              {[
                { Icon: Mail, text: 'hello@nexasolutions.com' },
                { Icon: Phone, text: '+63 (2) 8888-0000' },
                { Icon: MapPin, text: 'Metro Manila, Philippines' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex gap-3 items-start">
                  <Icon size={14} style={{ color: 'var(--color-accent)', marginTop: 3, flexShrink: 0 }} />
                  <span className="font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-dm-sans text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Nexa Solutions BPO. All rights reserved.
          </p>
          <p className="font-dm-sans text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Built by <span style={{ color: 'var(--color-accent)' }}>Black Funnel Tech</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
