import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'
import FeatureCard from '../components/ui/FeatureCard'
import { useLoading } from '../context/LoadingContext'

const Features = () => {
  const { setIsLoading } = useLoading()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [setIsLoading])

  const features = [
    {
      title: "AI-Powered Extraction",
      description: "Our advanced AI algorithms automatically extract key points and content from your videos with high accuracy.",
      icon: "🤖"
    },
    {
      title: "Smart Formatting",
      description: "Automatically format your presentations with professional layouts and designs that match your brand.",
      icon: "✨"
    },
    {
      title: "Quick Export",
      description: "Export your presentations in multiple formats including PowerPoint, PDF, and more.",
      icon: "📤"
    },
    {
      title: "Real-time Processing",
      description: "Watch as your video transforms into slides in real-time with our powerful processing engine.",
      icon: "⚡"
    },
    {
      title: "Custom Branding",
      description: "Apply your brand colors, logos, and fonts to maintain consistency across all presentations.",
      icon: "🎨"
    },
    {
      title: "Collaboration Tools",
      description: "Share and collaborate on presentations with your team in real-time.",
      icon: "👥"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for Your <span className="text-emerald-400">Video Content</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your videos into professional presentations with our cutting-edge features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              inView={true}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features