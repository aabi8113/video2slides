import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '../ui/Logo'
import NavbarItems from './NavbarItems'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-6 py-4 bg-gray-900/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between">
          <Logo />
          
          {/* Desktop Menu */}
          <NavbarItems />

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-emerald-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg mt-2 rounded-2xl p-6 border border-gray-800 shadow-xl"
          >
            <NavbarItems isMobile />
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar