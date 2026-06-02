import LoginForm from '../components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel — brand */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: 'var(--color-primary)' }}
      >
        {/* Grid mesh */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="login-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#00C2A8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#login-grid)" opacity="0.04" />
        </svg>

        <div className="relative z-10">
          <div className="font-syne font-bold text-2xl text-white">
            Nexa <span style={{ color: 'var(--color-accent)' }}>Solutions</span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
            <span className="font-space-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
              Team Portal
            </span>
          </div>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Your Resource<br />
            <span style={{ color: 'var(--color-accent)' }}>Hub Awaits.</span>
          </h2>
          <p className="font-dm-sans text-base" style={{ color: 'rgba(255,255,255,0.52)' }}>
            Access onboarding materials, SOPs, training videos, and internal references — all in one place.
          </p>
        </div>

        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-3 px-5 py-3"
            style={{
              background: 'rgba(0,194,168,0.1)',
              border: '1px solid rgba(0,194,168,0.2)',
              borderRadius: '4px',
            }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-accent)' }} />
            <span className="font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Secure access · Team members only
            </span>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 py-16"
        style={{ background: 'white' }}
      >
        <div className="lg:hidden font-syne font-bold text-xl mb-10" style={{ color: 'var(--color-primary)' }}>
          Nexa <span style={{ color: 'var(--color-accent)' }}>Solutions</span>
        </div>

        <div className="max-w-sm w-full mx-auto">
          <h1 className="font-syne font-bold text-2xl mb-2" style={{ color: 'var(--color-primary)' }}>
            Sign In
          </h1>
          <p className="font-dm-sans text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Use your Nexa Solutions team credentials to continue.
          </p>

          <LoginForm />

          <p className="font-dm-sans text-xs text-center mt-8" style={{ color: 'var(--color-text-muted)' }}>
            Demo credentials:{' '}
            <span style={{ color: 'var(--color-accent)' }}>team@nexasolutions.com</span>
            {' / '}
            <span style={{ color: 'var(--color-accent)' }}>nexa2024</span>
          </p>
        </div>
      </div>
    </div>
  )
}
