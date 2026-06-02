export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${className}`}
      style={{ background: 'white', borderColor: 'var(--color-border)' }}
      {...props}
    >
      {children}
    </div>
  )
}
