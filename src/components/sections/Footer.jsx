import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const Footer = () => {
  const { user } = useAuth()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-emerald-500 font-bold text-xl mb-4">VideoToSlides</h3>
          <p className="text-gray-400">
            Transform your video content into engaging presentations with ease.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <address className="text-gray-400 not-italic">
            <p className="mt-2">
              <a href="mailto:contact@videotoslides.com" className="hover:text-emerald-500">
                contact@videotoslides.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/features" className="hover:text-emerald-500">Features</Link></li>
            <li><Link to="/dashboard" className="hover:text-emerald-500">Dashboard</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-500">Contact</Link></li>
            {!user?.isLoggedIn && (
              <li><Link to="/login" className="hover:text-emerald-500">Login</Link></li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <SocialLink href="#" icon={<FaTwitter size={24} />} />
            <SocialLink href="#" icon={<FaGithub size={24} />} />
            <SocialLink href="#" icon={<FaLinkedin size={24} />} />
            <SocialLink href="#" icon={<FaEnvelope size={24} />} />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} VideoToSlides. All rights reserved.</p>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }) => (
  <a href={href} className="text-gray-400 hover:text-emerald-500 transition-colors">
    {icon}
  </a>
)

export default Footer