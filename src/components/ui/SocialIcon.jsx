import React from 'react'
import { motion } from 'framer-motion'

const SocialIcon = ({ icon: Icon, href, color }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      className="inline-block p-3 rounded-full"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon size={24} style={{ color }} />
    </motion.a>
  )
}

export default SocialIcon