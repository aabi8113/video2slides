import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'
import DemoPlayer from '../ui/DemoPlayer'
import ProcessStep from '../ui/ProcessStep'

const DemoSection = () => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          See <span className="text-emerald-400">video2slides</span> in Action
        </h2>
        
        <DemoPlayer currentStep={currentStep} />
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {demoSteps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              isActive={currentStep === index}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const demoSteps = [
  {
    title: "Upload Video",
    description: "Start by uploading your video content",
    icon: "📤"
  },
  {
    title: "AI Processing",
    description: "Our AI extracts key points and visuals",
    icon: "🤖"
  },
  {
    title: "Export Slides",
    description: "Download your professionally formatted slides",
    icon: "✨"
  }
]

export default DemoSection