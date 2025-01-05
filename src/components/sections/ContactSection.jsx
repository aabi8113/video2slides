import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'
import SocialIcon from '../ui/SocialIcon'
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useLoading } from '../../context/LoadingContext'

const ContactSection = () => {
  const { setIsLoading } = useLoading()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [setIsLoading])

  return (
    <div className="py-20 bg-gray-800/50">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <SocialIcon {...method} />
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                {method.label}
              </h3>
              <p className="text-gray-400">
                {method.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const contactMethods = [
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@video2slides",
    href: "https://instagram.com/video2slides",
    color: "#E1306C"
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    value: "@video2slides",
    href: "https://twitter.com/video2slides",
    color: "#1DA1F2"
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@video2slides.com",
    href: "mailto:hello@video2slides.com",
    color: "#10b981"
  }
]

export default ContactSection