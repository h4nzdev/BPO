import { Link } from 'react-router-dom'
import { Link2, Share2, Globe, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const BG = '#0B1F3A'
const ACCENT = '#00C2A8'
const WARM = '#F4A527'

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

const MUTED = 'rgba(255,255,255,0.65)'
const FAINT = 'rgba(255,255,255,0.42)'
const DIVIDER = 'rgba(255,255,255,0.10)'

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: BG, borderTop: `3px solid ${ACCENT}` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{ borderBottom: `1px solid ${DIVIDER}` }}
        >
          {/* Brand */}
          <div>
            <div className="font-syne font-bold text-2xl text-white mb-3">
              Nexa Solutions
            </div>
            <p
              className="font-dm-sans text-sm leading-relaxed mb-6"
              style={{ color: MUTED }}
            >
              Precision outsourcing for growth-focused businesses. People-first. Results-driven.
            </p>
            <div className="flex gap-4">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.50)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-space-mono text-xs uppercase tracking-widest mb-5"
              style={{ color: ACCENT }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="font-dm-sans text-sm transition-colors duration-200"
                    style={{ color: MUTED }}
                    onMouseEnter={(e) => { e.target.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.target.style.color = MUTED }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-space-mono text-xs uppercase tracking-widest mb-5"
              style={{ color: ACCENT }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-dm-sans text-sm transition-colors duration-200"
                    style={{ color: MUTED }}
                    onMouseEnter={(e) => { e.target.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.target.style.color = MUTED }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-space-mono text-xs uppercase tracking-widest mb-5"
              style={{ color: ACCENT }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { Icon: Mail, text: 'hello@nexasolutions.com' },
                { Icon: Phone, text: '+63 (2) 8888-0000' },
                { Icon: MapPin, text: 'Metro Manila, Philippines' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex gap-3 items-start">
                  <Icon
                    size={14}
                    style={{ color: ACCENT, marginTop: 3, flexShrink: 0 }}
                  />
                  <span
                    className="font-dm-sans text-sm"
                    style={{ color: MUTED }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-dm-sans text-xs" style={{ color: FAINT }}>
            © {new Date().getFullYear()} Nexa Solutions BPO. All rights reserved.
          </p>
          <p className="font-dm-sans text-xs" style={{ color: FAINT }}>
            Built by{' '}
            <span style={{ color: '#ffffff', fontWeight: 500 }}>Black Funnel Tech</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
