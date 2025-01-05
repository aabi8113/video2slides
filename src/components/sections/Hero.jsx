import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureCard from '../ui/FeatureCard'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../utils/animations'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="pt-32 px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your <span className="text-emerald-400">Videos</span> into
            <br />
            Stunning <span className="text-emerald-400">Presentations</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto"
          >
            Our AI-powered platform automatically converts your video content into 
            professional presentations, saving you hours of manual work.
          </motion.p>

          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="space-x-6"
          >
            <Button>Get Started Free</Button>
            <Button variant="secondary">Watch Demo</Button>
          </motion.div>
        </div>

        {/* Demo Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
            <img 
              src="demo-image.jpg"
              alt="Platform Demo"
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80'
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              inView={inView}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "AI-Powered Conversion",
    description: "Advanced algorithms extract key points from your videos",
    icon: "🤖"
  },
  {
    title: "Smart Formatting",
    description: "Automatically formatted presentations with professional layouts",
    icon: "✨"
  },
  {
    title: "Quick Export",
    description: "Export to multiple formats including PowerPoint and PDF",
    icon: "📤"
  }
]

export default Hero