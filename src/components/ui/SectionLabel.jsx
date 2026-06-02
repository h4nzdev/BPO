export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-accent ${className}`}>
      <span className="w-6 h-px bg-accent flex-shrink-0" />
      {children}
      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
    </div>
  )
}
