import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <section
      className="py-10"
      style={{ background: 'var(--color-primary)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-syne font-semibold text-lg text-white mb-1">Stay in the loop</h3>
          <p className="font-dm-sans text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Industry insights and Nexa Solutions updates — no spam, ever.
          </p>
        </div>

        {subscribed ? (
          <p className="font-dm-sans text-sm" style={{ color: 'var(--color-accent)' }}>
            ✓ You&apos;re subscribed. Thanks!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-4 py-3 font-dm-sans text-sm"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <button
              type="submit"
              className="px-5 py-3 font-dm-sans text-sm font-medium text-white transition-opacity hover:opacity-85 flex-shrink-0"
              style={{ background: 'var(--color-accent)', borderRadius: '4px' }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
