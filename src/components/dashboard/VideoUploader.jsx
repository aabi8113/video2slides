import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'
import VideoPreview from './VideoPreview'

const VideoUploader = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef()

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true)
    } else {
      setIsDragging(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files && files[0]) {
      validateAndProcessFile(files[0])
    }
  }

  const handleFileSelect = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      validateAndProcessFile(files[0])
    }
  }

  const validateAndProcessFile = (file) => {
    const validTypes = ['video/mp4', 'video/webm', 'video/ogg']
    const maxSize = 100 * 1024 * 1024 // 100MB

    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid video file (MP4, WebM, or OGG)')
      return
    }

    if (file.size > maxSize) {
      alert('File size must be less than 100MB')
      return
    }

    setFile(file)
    simulateUpload()
  }

  const simulateUpload = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="video/*"
            className="hidden"
          />
          
          <div className="space-y-4">
            <div className="text-4xl">📹</div>
            <h3 className="text-xl font-semibold text-white">
              Drag & Drop your video here
            </h3>
            <p className="text-gray-400">
              or{' '}
              <button 
                onClick={() => fileInputRef.current.click()}
                className="text-emerald-400 hover:underline"
              >
                browse files
              </button>
            </p>
            <div className="text-sm text-gray-400">
              Supported formats: MP4, WebM, OGG (max 100MB)
            </div>
          </div>
        </div>

        {file && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-white">
              <span>{file.name}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <VideoPreview file={file} />
      </motion.div>
    </div>
  )
}

export default VideoUploader