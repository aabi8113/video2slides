import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingContext'
import { AuthProvider } from './context/AuthContext'
import MainLayout from './components/layout/MainLayout'
import Hero from './components/sections/Hero'
import Features from './pages/Features'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ContactSection from './components/sections/ContactSection'
import { useAuth } from './context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (!user?.isLoggedIn) {
    return <Navigate to="/login" />
  }

  return children
}

function App() {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/features" element={<Features />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
          </MainLayout>
        </Router>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default App