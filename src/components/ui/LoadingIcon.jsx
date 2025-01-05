import React from 'react'
import { motion } from 'framer-motion'

const LoadingIcon = () => {
  return (
    <div className="relative w-16 h-16">
      {/* Video frame */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.8, 1], rotate: [0, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 border-4 border-emerald-500 rounded-lg"
      />
      
      {/* Slides */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 0.5],
          x: [20, 0, 0, -20]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-8 h-8 bg-emerald-500 rounded-sm" />
      </motion.div>
    </div>
  )
}

export default LoadingIcon