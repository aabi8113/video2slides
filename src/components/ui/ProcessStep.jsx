import React from 'react'
import { motion } from 'framer-motion'

const ProcessStep = ({ title, description, icon, isActive, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-xl cursor-pointer transition-colors ${
        isActive 
          ? 'bg-emerald-500/20 border-2 border-emerald-500' 
          : 'bg-gray-800/50 border-2 border-transparent'
      }`}
      onClick={onClick}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}

export default ProcessStep