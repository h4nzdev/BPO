export default function Badge({ children, variant = 'accent', className = '' }) {
  const variants = {
    accent: 'bg-accent/10 text-accent',
    warm: 'bg-accent-warm/10 text-accent-warm',
    primary: 'bg-primary/10 text-primary',
    muted: 'bg-muted/10 text-muted',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full font-space-mono text-xs uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
