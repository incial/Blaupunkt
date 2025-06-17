import React from 'react'

const ModelCard = ({
  image,
  modelCode = 'B1P16AT1',
  connectorType = 'Type 1',
  current = '16A',
  cableLength = '2 Meters',
  ipClass = '65',
  phaseType = 'Single - Phase'
}) => {
  return (
    <div className='relative w-full max-w-[300px] transition-all duration-300 mx-auto'>
      {/* Outer container with light blue border */}
      <div className='rounded-xl'>
        {/* White inner container */}
        <div className='bg-white rounded-lg overflow-hidden'>
          {/* Product Image Container */}
          <div className='w-full aspect-square flex items-center justify-center border-3 border-[#93C5FD] rounded-xl'>
            {image ? (
              <img
                src={image}
                alt={`${modelCode} charging cable`}
                className='w-full h-full object-cover rounded-lg'
              />
            ) : (
              // Default charging cable illustration
              <div className='w-32 h-32 flex items-center justify-center'>
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Charging cable illustration */}
                  <circle cx="60" cy="60" r="45" stroke="#22C55E" strokeWidth="6" fill="none" />
                  <path
                    d="M25 45 C25 35, 35 35, 45 45 L45 55 C45 65, 55 65, 65 55 L65 45 C65 35, 75 35, 85 45"
                    stroke="#1F2937"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="25" cy="45" r="8" fill="#1F2937" />
                  <circle cx="85" cy="45" r="8" fill="#1F2937" />
                  <rect x="20" y="40" width="10" height="10" rx="2" fill="#22C55E" />
                  <rect x="80" y="40" width="10" height="10" rx="2" fill="#22C55E" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className=' pt-10 pb-6'>
            {/* Model Code - Primary heading */}
            <h3 className='text-lg font-bold text-[#1E3A8A] mb-4 text-left'>
              {modelCode}
            </h3>
            
            {/* Specifications List */}
            <div className='space-y-1 text-md'>
              <div className='flex items-center'>
                <span className='font-normal text-gray-700'>Connector:</span>
                <span className='text-gray-900 font-normal'>{connectorType}</span>
              </div>
              
              <div className='flex items-center'>
                <span className='font-normal text-gray-700'>Current:</span>
                <span className='text-gray-900 font-normal'>{current}</span>
              </div>
              
              <div className='flex items-center'>
                <span className='font-normal text-gray-700'>Cable Length:</span>
                <span className='text-gray-900 font-normal'>{cableLength}</span>
              </div>
              
              <div className='flex items-center'>
                <span className='font-normal text-gray-700'>IP Class:</span>
                <span className='text-gray-900 font-normal'>{ipClass}</span>
              </div>
              
              <div className='flex items-center'>
                <span className='font-normal text-gray-700'>Phase Type:</span>
                <span className='text-gray-900 font-normal'>{phaseType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelCard