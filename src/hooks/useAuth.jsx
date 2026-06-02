import { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext(null)

const MOCK_CREDENTIALS = { email: 'team@nexasolutions.com', password: 'nexa2024' }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = sessionStorage.getItem('nexa_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const login = useCallback((email, password) => {
    if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
      const userData = { name: 'Team Member', email }
      sessionStorage.setItem('nexa_user', JSON.stringify(userData))
      setUser(userData)
      return { success: true }
    }
    return { success: false, error: 'Invalid email or password.' }
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem('nexa_user')
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
