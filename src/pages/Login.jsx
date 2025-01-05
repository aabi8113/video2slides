import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'
import Button from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'
import { useLoading } from '../context/LoadingContext'
import Toast from '../components/ui/Toast'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { setIsLoading } = useLoading()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Get user data from localStorage
      const storedUserData = localStorage.getItem('user')
      const storedUser = storedUserData ? JSON.parse(storedUserData) : null

      if (storedUser && 
          storedUser.email === formData.email && 
          storedUser.password === formData.password) {
        // Login successful
        await login(storedUser)
        setFormData({ email: '', password: '' })
        setShowToast(true)
        
        // Hide toast after delay and navigate
        setTimeout(() => {
          setShowToast(false)
          navigate('/dashboard')
        }, 1500)
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError('An error occurred during login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Toast 
        message="Login successful!" 
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      
      <div className="max-w-md mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
        >
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <Button type="submit" className="w-full">
              Log In
            </Button>

            <p className="text-center text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-emerald-400 hover:underline"
              >
                Sign up
              </button>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Login