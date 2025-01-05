import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="relative h-10 w-10"
      >
        <div className="absolute inset-0 bg-emerald-500 rounded-lg rotate-45 transform origin-center"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
      </motion.div>
      <span className="text-emerald-400 font-bold text-xl">video2slides</span>
    </Link>
  )
}

export default Logo