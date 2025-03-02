import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'
import { FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useLoading } from '../context/LoadingContext'

const Presentations = ({ presentations }) => {
  const { setIsLoading } = useLoading()
  const [expandedId, setExpandedId] = useState(null)

  const handleDownload = async (downloadUrl, title) => {
    try {
      setIsLoading(true)
      const response = await fetch(downloadUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${title.replace(/\s+/g, '_')}.pptx`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <h1 className="text-3xl font-bold text-white mb-6">Your Presentations</h1>
          
          {presentations.length === 0 ? (
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center">
              <p className="text-gray-400 text-lg">No presentations found</p>
              <p className="text-gray-500 mt-2">Upload a video to create your first presentation</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {presentations.map((presentation) => (
                <motion.div
                  key={presentation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {presentation.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Created on {new Date(presentation.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleDownload(presentation.downloadUrl, presentation.title)}
                        className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                      >
                        <FaDownload />
                        <span>Download PPT</span>
                      </button>
                      <button
                        onClick={() => toggleExpand(presentation.id)}
                        className="flex items-center space-x-2 px-4 py-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
                      >
                        {expandedId === presentation.id ? <FaChevronUp /> : <FaChevronDown />}
                        <span>Summary</span>
                      </button>
                    </div>
                  </div>
                  {expandedId === presentation.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-6 bg-gray-800/30">
                        <h4 className="text-emerald-400 font-medium mb-3">Video Summary</h4>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-gray-300 whitespace-pre-line">
                            {presentation.summary}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Presentations