export default function Divider({ className = '' }) {
  return <hr className={`border-0 h-px ${className}`} style={{ background: 'var(--color-border)' }} />
}
