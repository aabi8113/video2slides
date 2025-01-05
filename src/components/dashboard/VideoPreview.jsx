import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const VideoPreview = ({ file }) => {
  const videoRef = useRef(null)
  const objectUrlRef = useRef(null)

  useEffect(() => {
    if (file && videoRef.current) {
      // Store the object URL in a ref
      objectUrlRef.current = URL.createObjectURL(file)
      videoRef.current.src = objectUrlRef.current
    }

    // Cleanup function
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current)
        objectUrlRef.current = null
      }
    }
  }, [file])

  if (!file) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Video Preview</h3>
      <div className="rounded-lg overflow-hidden bg-gray-800">
        <video
          ref={videoRef}
          controls
          className="w-full max-h-[400px]"
          controlsList="nodownload"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  )
}

export default VideoPreview