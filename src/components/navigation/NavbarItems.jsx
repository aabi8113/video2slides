import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import NavLink from '../ui/NavLink'
import Toast from '../ui/Toast'
import { useAuth } from '../../context/AuthContext'
import { useLoading } from '../../context/LoadingContext'

const NavbarItems = ({ isMobile = false }) => {
  const { user, logout } = useAuth()
  const { setIsLoading } = useLoading()
  const navigate = useNavigate()
  const [showToast, setShowToast] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    logout()
    setShowToast(true)
    
    // Hide loading and toast after delay
    setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setShowToast(false)
        navigate('/')
      }, 1000)
    }, 500)
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <>
      <Toast 
        message="Signed out successfully" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
      
      <div className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        
        {user?.isLoggedIn ? (
          <>
            <NavLink href="/dashboard">Dashboard</NavLink>
            {/* <NavLink href="/presentations">Presentations</NavLink> */}
            <div className="text-gray-400">
              Welcome, {user.name}
            </div>
            <Button onClick={handleSignOut} variant="secondary">
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <NavLink href="/login">Login</NavLink>
            <Button onClick={handleSignUp}>
              Sign Up
            </Button>
          </>
        )}
      </div>
    </>
  )
}

export default NavbarItems