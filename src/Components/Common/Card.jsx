import React from 'react'

const Card = ({
  image,
  title,
  gradient = 'from-[#5E90BC]/0 to-[#5E90BC]/70'
}) => {
  return (
    <div className='group relative w-full max-w-[180px] sm:max-w-[280px] lg:max-w-[360px] h-[240px] sm:h-[350px] lg:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 touch-manipulation'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-gray-300'
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      />
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />{' '}
      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6'>
        <div className='w-[85%] sm:w-full rounded-b-xl sm:rounded-b-2xl p-2 sm:p-3 lg:p-4 -m-2 sm:-m-3 lg:-m-4'>
          <h3 className='text-white text-base sm:text-lg lg:text-xl font-semibold leading-tight text-left'>
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card
