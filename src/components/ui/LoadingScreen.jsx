import React from 'react'
import { motion } from 'framer-motion'
import LoadingIcon from './LoadingIcon'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50"
    >
      <LoadingIcon />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-emerald-400 font-medium"
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen