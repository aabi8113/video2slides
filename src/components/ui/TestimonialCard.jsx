import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ name, role, image, content }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  )
}

export default TestimonialCard