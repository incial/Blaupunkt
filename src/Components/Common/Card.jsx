import React from 'react'

const Card = ({ image, title, gradient = "from-blue-400/0 to-blue-600" }) => {
  return (
    <div className="group relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-300"
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className=" rounded-b-2xl p-4 -m-4">
          <h3 className="text-white text-xl font-semibold leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card
