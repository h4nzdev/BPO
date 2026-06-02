import { useState } from 'react'
import { BookOpen, FileText, Video, Database, Search, LogOut, ExternalLink } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import Badge from '../components/ui/Badge'

const categories = [
  {
    icon: BookOpen,
    title: 'Onboarding Materials',
    desc: 'Start here — essential guides for new team members.',
    count: 12,
    badge: 'Start Here',
  },
  {
    icon: FileText,
    title: 'SOPs & Guides',
    desc: 'Step-by-step procedures for all operational processes.',
    count: 34,
    badge: 'Operations',
  },
  {
    icon: Video,
    title: 'Training Videos',
    desc: 'Video walkthroughs for tools, workflows, and skills.',
    count: 18,
    badge: 'Media',
  },
  {
    icon: Database,
    title: 'Internal References',
    desc: 'Company policies, org charts, and reference documents.',
    count: 9,
    badge: 'Reference',
  },
]

const pinned = [
  { title: 'Employee Handbook v3.2', type: 'PDF', updated: '2 days ago' },
  { title: 'Q1 2024 KPI Dashboard', type: 'Spreadsheet', updated: '1 week ago' },
  { title: 'Client Communication Script — Tier 1', type: 'Doc', updated: '3 days ago' },
]

export default function ResourceCenterPage() {
  const { user, logout } = useAuth()
  const [search, setSearch] = useState('')

  const filtered = categories.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-surface)' }}>
      {/* Dashboard Header */}
      <div style={{ background: 'var(--color-primary)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-space-mono text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-accent)' }}>
              Resource Center
            </div>
            <h1 className="font-syne font-bold text-xl text-white">
              Welcome back, {user?.name || 'Team Member'}
            </h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-dm-sans text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
          >
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="relative max-w-md mb-10">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-11 pr-4 py-3 rounded-xl font-dm-sans text-sm"
            style={{
              background: 'white',
              border: '1.5px solid var(--color-border)',
              color: 'var(--color-text)',
              outline: 'none',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,194,168,0.1)' }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
          />
        </div>

        {/* Categories Grid */}
        <section className="mb-12">
          <h2 className="font-syne font-bold text-lg mb-6" style={{ color: 'var(--color-primary)' }}>
            Resource Categories
          </h2>
          {filtered.length === 0 ? (
            <p className="font-dm-sans text-sm" style={{ color: 'var(--color-text-muted)' }}>
              No categories match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map(({ icon: Icon, title, desc, count, badge }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border transition-all duration-200 hover:shadow-md cursor-pointer group"
                  style={{ background: 'white', borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(0,194,168,0.1)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <Badge variant="accent">{badge}</Badge>
                  </div>
                  <h3 className="font-syne font-bold text-sm mb-1" style={{ color: 'var(--color-primary)' }}>
                    {title}
                  </h3>
                  <p className="font-dm-sans text-xs leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    {desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-space-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {count} items
                    </span>
                    <button
                      className="font-dm-sans text-xs font-medium transition-colors"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      View →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Pinned Items */}
        <section>
          <h2 className="font-syne font-bold text-lg mb-6" style={{ color: 'var(--color-primary)' }}>
            Pinned Items
          </h2>
          <div className="space-y-3">
            {pinned.map(({ title, type, updated }) => (
              <div
                key={title}
                className="flex items-center justify-between p-4 rounded-xl border hover:shadow-sm transition-shadow"
                style={{ background: 'white', borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,194,168,0.08)' }}
                  >
                    <FileText size={14} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <p className="font-dm-sans text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                      {title}
                    </p>
                    <p className="font-space-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {type} · Updated {updated}
                    </p>
                  </div>
                </div>
                <button
                  className="flex items-center gap-1.5 font-dm-sans text-xs transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)' }}
                >
                  Open <ExternalLink size={12} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
