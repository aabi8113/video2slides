import React, { createContext, useContext, useState, useEffect } from 'react'
import SessionAuth from '../services/sessionAuth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session first
    const sessionCreds = SessionAuth.getStoredCredentials()
    if (sessionCreds) {
      setUser(sessionCreds.user)
    }
    setLoading(false)
  }, [])

  const login = (userData) => {
    const authenticatedUser = { ...userData, isLoggedIn: true }
    // Store in sessionStorage for temporary session
    SessionAuth.storeCredentials(authenticatedUser, 'session-token')
    setUser(authenticatedUser)
  }

  const logout = () => {
    // Clear session storage but keep localStorage for future logins
    SessionAuth.clearCredentials()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}