import React from 'react'
import { motion } from 'framer-motion'

const DemoPlayer = ({ currentStep }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
      <motion.img 
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={demoImages[currentStep]}
        alt={`Demo Step ${currentStep + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

const demoImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
]

export default DemoPlayer