import { forwardRef } from 'react'

const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className = '', ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center font-dm-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none'

  const variants = {
    primary: 'bg-accent-warm text-primary hover:opacity-88 focus-visible:ring-accent-warm',
    secondary: 'bg-accent text-white hover:opacity-88 focus-visible:ring-accent',
    ghost: 'bg-transparent text-white border border-white/20 hover:border-white/50 hover:text-white focus-visible:ring-white',
    outline: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ borderRadius: '4px' }}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
