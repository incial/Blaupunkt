import React, { useState, useEffect } from 'react'
import { LayLoader } from './index'

const LayLoaderExample = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleResetLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  if (isLoading) {
    return (
      <LayLoader 
        size="large" 
        color="blue" 
        text="Loading content..." 
        fullScreen={true} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">LayLoader Component Examples</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Small Blue Loader */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Small Blue Loader</h3>
            <div className="flex justify-center">
              <LayLoader size="small" color="blue" />
            </div>
          </div>

          {/* Medium Purple Loader */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Medium Purple Loader</h3>
            <div className="flex justify-center">
              <LayLoader size="medium" color="purple" />
            </div>
          </div>

          {/* Large Green Loader */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Large Green Loader</h3>
            <div className="flex justify-center">
              <LayLoader size="large" color="green" />
            </div>
          </div>

          {/* Orange Loader without text */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Orange Loader (No Text)</h3>
            <div className="flex justify-center">
              <LayLoader size="medium" color="orange" showText={false} />
            </div>
          </div>

          {/* Dark background with white loader */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-white">White Loader (Dark BG)</h3>
            <div className="flex justify-center">
              <LayLoader size="medium" color="white" text="Processing..." />
            </div>
          </div>

          {/* Custom text loader */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Custom Text</h3>
            <div className="flex justify-center">
              <LayLoader 
                size="medium" 
                color="blue" 
                text="Please wait..." 
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleResetLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Show Full Screen Loader
          </button>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
          <div className="bg-gray-100 p-4 rounded text-sm font-mono">
            <p className="mb-2">{'// Basic usage'}</p>
            <p className="mb-2">{'<LayLoader />'}</p>
            <br />
            <p className="mb-2">{'// With custom props'}</p>
            <p className="mb-2">{'<LayLoader size="large" color="purple" text="Loading..." />'}</p>
            <br />
            <p className="mb-2">{'// Full screen loader'}</p>
            <p className="mb-2">{'<LayLoader fullScreen={true} />'}</p>
            <br />
            <p className="mb-2">{'// Without text'}</p>
            <p>{'<LayLoader showText={false} />'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayLoaderExample
