import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import VideoPreview from './VideoPreview';
import { FaDownload } from 'react-icons/fa';

const VideoUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [presentation, setPresentation] = useState(null);
  const fileInputRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) validateAndProcessFile(files[0]);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files[0]) validateAndProcessFile(files[0]);
  };

  const validateAndProcessFile = (file) => {
    const validTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    const maxSize = 100 * 1024 * 1024; // 100MB

    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid video file (MP4, WebM, or OGG)');
      return;
    }
    if (file.size > maxSize) {
      alert('File size must be less than 100MB');
      return;
    }

    setFile(file);
    simulateUpload(file);
  };

  const simulateUpload = async (file) => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      setProgress(25);
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert('Upload failed: ' + errorText);
        return;
      }

      const data = await response.json();
      console.log(data.ppt_filename)
      setProgress(100);
      setPresentation({
        id: Date.now().toString(),
        title: file.name,
        createdAt: new Date().toISOString(),
        summary: data.summary,
        downloadUrl: `http://127.0.0.1:5000/${data.ppt_url}`,
      });
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('An error occurred while uploading the video.');
      setProgress(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
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
            <h3 className="text-xl font-semibold text-white">Drag & Drop your video here</h3>
            <p className="text-gray-400">
              or{' '}
              <button
                onClick={() => fileInputRef.current.click()}
                className="text-emerald-400 hover:underline"
              >
                browse files
              </button>
            </p>
            <div className="text-sm text-gray-400">Supported formats: MP4, WebM, OGG (max 100MB)</div>
          </div>
        </div>

        {file && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-white">
              <span>{file.name}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <VideoPreview file={file} />
          </div>
        )}

        {presentation && (
          <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white">Generated Presentation</h3>
            <p className="text-sm text-gray-400">Created on {new Date(presentation.createdAt).toLocaleDateString()}</p>
            <div className="mt-4">
              <h4 className="text-emerald-400 font-medium">Summary</h4>
              <p className="text-gray-300 whitespace-pre-line mt-2">{presentation.summary}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <a
                href={presentation.downloadUrl}
                download={`${presentation.title.replace(/\s+/g, '_')}.pptx`}
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                <FaDownload />
                <span>Download PPT</span>
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default VideoUploader;
