import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { gsap } from '../../utils/gsapConfig'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const drawerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(drawerRef.current, { x: '100%' }, { x: '0%', duration: 0.4, ease: 'power3.out' })
      gsap.fromTo(overlayRef.current, { opacity: 0, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'auto', duration: 0.3 })
    } else {
      document.body.style.overflow = ''
      gsap.to(drawerRef.current, { x: '100%', duration: 0.35, ease: 'power3.in' })
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3 })
    }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--color-primary)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <span className="font-syne font-bold text-xl text-white tracking-tight">
              Nexa <span style={{ color: 'var(--color-accent)' }}>Solutions</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, path }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative font-dm-sans text-sm font-medium transition-colors duration-200 pb-0.5 group"
                  style={{ color: isActive ? 'var(--color-accent)' : 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={(e) => { if (!isActive) e.target.style.color = 'white' }}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = 'rgba(255,255,255,0.75)' }}
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: 'var(--color-accent)',
                    }}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 font-dm-sans font-medium text-sm transition-all duration-200"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  borderRadius: '4px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                Get a Quote <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="lg:hidden fixed inset-0 z-40"
        style={{ background: 'rgba(0,0,0,0.65)', opacity: 0, pointerEvents: 'none' }}
        onClick={() => setMenuOpen(false)}
      />

      <div
        ref={drawerRef}
        className="lg:hidden fixed top-0 right-0 h-full w-72 z-50 flex flex-col p-8"
        style={{ background: 'var(--color-primary)', transform: 'translateX(100%)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-syne font-bold text-white">
            Nexa <span style={{ color: 'var(--color-accent)' }}>Solutions</span>
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-white p-1" aria-label="Close navigation menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="font-dm-sans text-lg transition-colors"
              style={{ color: location.pathname === path ? 'var(--color-accent)' : 'rgba(255,255,255,0.75)' }}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4">
            <Link to="/contact">
              <button
                className="w-full px-6 py-3 font-dm-sans font-medium text-sm transition-opacity hover:opacity-88"
                style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', borderRadius: '4px' }}
              >
                Get a Quote
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
