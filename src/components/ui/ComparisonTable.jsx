import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'

const ComparisonTable = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Why Choose video2slides?
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="p-4 text-left text-white">Features</th>
              <th className="p-4 text-center text-emerald-400">video2slides</th>
              <th className="p-4 text-center text-gray-400">Others</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-4 text-white">{feature.name}</td>
                <td className="p-4 text-center text-emerald-400">
                  {feature.video2slides ? "✓" : "×"}
                </td>
                <td className="p-4 text-center text-gray-400">
                  {feature.others ? "✓" : "×"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

const features = [
  { name: "AI-Powered Extraction", video2slides: true, others: false },
  { name: "Smart Formatting", video2slides: true, others: true },
  { name: "Multiple Export Formats", video2slides: true, others: true },
  { name: "Real-time Processing", video2slides: true, others: false },
  { name: "Custom Branding", video2slides: true, others: false },
  { name: "24/7 Support", video2slides: true, others: false }
]

export default ComparisonTable