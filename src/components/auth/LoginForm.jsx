import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { gsap } from '../../utils/gsapConfig'
import Button from '../ui/Button'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const formRef = useRef(null)

  const shake = () => {
    gsap.to(formRef.current, {
      keyframes: [
        { x: -10, duration: 0.07 },
        { x: 10, duration: 0.07 },
        { x: -8, duration: 0.07 },
        { x: 8, duration: 0.07 },
        { x: -4, duration: 0.07 },
        { x: 0, duration: 0.07 },
      ],
      ease: 'none',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    const result = login(email, password)
    setLoading(false)
    if (result.success) {
      navigate('/resources')
    } else {
      setError(result.error)
      shake()
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-5" noValidate>
      <div>
        <label className="block font-dm-sans text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
          Email Address
        </label>
        <div className="relative">
          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="team@nexasolutions.com"
            className="w-full pl-11 pr-4 py-3 rounded-xl font-dm-sans text-sm transition-all duration-200"
            style={{
              background: 'var(--color-surface)',
              border: `1.5px solid ${error ? '#ef4444' : 'var(--color-border)'}`,
              color: 'var(--color-text)',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,194,168,0.12)' }}
            onBlur={(e) => { e.target.style.borderColor = error ? '#ef4444' : 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
          />
        </div>
      </div>

      <div>
        <label className="block font-dm-sans text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
          Password
        </label>
        <div className="relative">
          <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full pl-11 pr-12 py-3 rounded-xl font-dm-sans text-sm transition-all duration-200"
            style={{
              background: 'var(--color-surface)',
              border: `1.5px solid ${error ? '#ef4444' : 'var(--color-border)'}`,
              color: 'var(--color-text)',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,194,168,0.12)' }}
            onBlur={(e) => { e.target.style.borderColor = error ? '#ef4444' : 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {error && (
        <p className="font-dm-sans text-sm text-red-500">{error}</p>
      )}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full mt-2"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Verifying...
          </span>
        ) : (
          'Access Resource Center'
        )}
      </Button>

      <p className="text-center font-dm-sans text-sm" style={{ color: 'var(--color-text-muted)' }}>
        <button
          type="button"
          className="transition-colors"
          style={{ color: 'var(--color-accent)' }}
        >
          Forgot password?
        </button>
      </p>
    </form>
  )
}
