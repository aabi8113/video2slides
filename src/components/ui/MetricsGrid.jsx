import React from 'react'
import { motion } from 'framer-motion'

const MetricsGrid = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800/50 p-6 rounded-xl text-center"
        >
          <h3 className="text-3xl font-bold text-emerald-400 mb-2">
            {metric.value}
          </h3>
          <p className="text-gray-400">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default MetricsGrid