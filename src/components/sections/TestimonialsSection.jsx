import React from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from '../ui/TestimonialCard'
import { fadeIn } from '../../utils/animations'
import MetricsGrid from '../ui/MetricsGrid'

const TestimonialsSection = () => {
  return (
    <div className="py-20">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Trusted by Thousands
        </h2>
        <p className="text-gray-400">
          See what our users are saying about video2slides
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <MetricsGrid metrics={metrics} />
    </div>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "video2slides has revolutionized my content creation process. What used to take hours now takes minutes!"
  },
  {
    name: "Michael Chen",
    role: "Education Professional",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The AI accuracy is impressive. It captures all the key points from my lecture videos perfectly."
  },
  {
    name: "Emma Davis",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The export quality and customization options are exactly what we needed for our presentations."
  }
]

const metrics = [
  { label: "Active Users", value: "50,000+" },
  { label: "Videos Processed", value: "1M+" },
  { label: "Time Saved", value: "500,000 hrs" },
  { label: "Satisfaction Rate", value: "99.9%" }
]

export default TestimonialsSection