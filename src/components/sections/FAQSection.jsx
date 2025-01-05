import React from 'react'
import { motion } from 'framer-motion'
import Accordion from '../ui/Accordion'
import { fadeIn } from '../../utils/animations'

const FAQSection = () => {
  return (
    <div className="py-20">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </motion.div>
    </div>
  )
}

const faqs = [
  {
    question: "How accurate is the AI conversion?",
    answer: "Our AI achieves 95%+ accuracy in extracting key points from clear video content. The system continuously learns and improves from user feedback."
  },
  {
    question: "What video formats are supported?",
    answer: "We support all major video formats including MP4, AVI, MOV, and WMV. Maximum file size is 2GB per video."
  },
  {
    question: "Can I customize the slide designs?",
    answer: "Yes! We offer multiple professional templates and the ability to customize colors, fonts, and layouts to match your brand."
  },
  {
    question: "How long does the conversion take?",
    answer: "Most videos are processed within 5-10 minutes, depending on length and complexity. You'll receive an email when your slides are ready."
  }
]

export default FAQSection