import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const LayLoader = ({ 
  size = 'medium', 
  color = 'blue', 
  text = 'Loading...', 
  showText = true,
  fullScreen = false 
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: 'w-8 h-8',
      layer: 'w-6 h-6',
      text: 'text-sm'
    },
    medium: {
      container: 'w-12 h-12',
      layer: 'w-10 h-10',
      text: 'text-base'
    },
    large: {
      container: 'w-16 h-16',
      layer: 'w-14 h-14',
      text: 'text-lg'
    }
  }

  // Color configurations
  const colorConfig = {
    blue: {
      layer1: 'border-blue-500',
      layer2: 'border-blue-400',
      layer3: 'border-blue-300',
      text: 'text-blue-600'
    },
    purple: {
      layer1: 'border-purple-500',
      layer2: 'border-purple-400',
      layer3: 'border-purple-300',
      text: 'text-purple-600'
    },
    green: {
      layer1: 'border-green-500',
      layer2: 'border-green-400',
      layer3: 'border-green-300',
      text: 'text-green-600'
    },
    orange: {
      layer1: 'border-orange-500',
      layer2: 'border-orange-400',
      layer3: 'border-orange-300',
      text: 'text-orange-600'
    },
    white: {
      layer1: 'border-white',
      layer2: 'border-white/80',
      layer3: 'border-white/60',
      text: 'text-white'
    }
  }

  const currentSize = sizeConfig[size]
  const currentColor = colorConfig[color]

  // Animation variants for the layers
  const layerVariants = {
    animate: (custom) => ({
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
        delay: custom * 0.2
      }
    })
  }

  // Text animation variants
  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const LoaderContent = () => (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Layered Spinner */}
      <div className={`relative ${currentSize.container}`}>
        {/* Layer 1 - Outer */}
        <motion.div
          custom={0}
          variants={layerVariants}
          animate="animate"
          className={`absolute inset-0 ${currentSize.layer} border-4 ${currentColor.layer1} border-t-transparent rounded-full`}
        />
        
        {/* Layer 2 - Middle */}
        <motion.div
          custom={1}
          variants={layerVariants}
          animate="animate"
          className={`absolute inset-1 ${currentSize.layer} border-3 ${currentColor.layer2} border-t-transparent rounded-full`}
          style={{ width: 'calc(100% - 8px)', height: 'calc(100% - 8px)' }}
        />
        
        {/* Layer 3 - Inner */}
        <motion.div
          custom={2}
          variants={layerVariants}
          animate="animate"
          className={`absolute inset-2 ${currentSize.layer} border-2 ${currentColor.layer3} border-t-transparent rounded-full`}
          style={{ width: 'calc(100% - 16px)', height: 'calc(100% - 16px)' }}
        />
      </div>

      {/* Loading Text */}
      {showText && (
        <motion.p
          variants={textVariants}
          animate="animate"
          className={`font-medium ${currentColor.text} ${currentSize.text}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <LoaderContent />
      </div>
    )
  }

  return <LoaderContent />
}

export default LayLoader
