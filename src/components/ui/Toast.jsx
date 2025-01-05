import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Toast = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg border border-gray-700">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast