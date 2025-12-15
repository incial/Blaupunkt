import React from 'react'

const ImageHeader = ({
  title,
  backgroundImage = null,
  showBackgroundImage = true,
  textColor = {
    mobile: 'text-white',
    desktop: 'text-black'
  },
  overlayOpacity = 'bg-black/40',
  className = '',
  mobileClassName = '',
  desktopClassName = '',
  containerClassName = '',
  minHeight = 'min-h-[100px]'
}) => {
  return (
    <div className={containerClassName}>
      {' '}
      {/* Mobile View - With Background Image */}
      {showBackgroundImage && (
        <div
          className={`relative sm:mb-12 lg:mb-16 mb-12 overflow-hidden md:hidden ${minHeight} ${mobileClassName}`}
        >
          {/* Background Image */}
          {backgroundImage && (
            <div
              className='absolute inset-0 bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          )}

          {/* Overlay for better text readability */}
          {backgroundImage && (
            <div className={`absolute inset-0 ${overlayOpacity}`} />
          )}

          {/* Text Content - White for mobile */}
          <h1
            className={`relative text-3xl sm:text-3xl lg:text-4xl font-semibold text-center ${textColor.mobile} py-8 px-8 ${className}`}
          >
            {title}
          </h1>
        </div>
      )}
      {/* Desktop View - Text Only */}
      <div
        className={`hidden md:block sm:mb-12 lg:mb-4 mb-12 ${desktopClassName}`}
      >
        <h1
          className={`text-3xl sm:text-3xl lg:text-4xl font-semibold text-center ${textColor.desktop} py-16 px-8 ${className}`}
        >
          {title}
        </h1>
      </div>{' '}
      {/* Fallback for mobile when no background image is provided */}
      {!showBackgroundImage && (
        <div
          className={`md:hidden sm:mb-12 lg:mb-16 mb-12 ${minHeight} flex items-center justify-center ${mobileClassName}`}
        >
          <h1
            className={`text-3xl sm:text-3xl lg:text-4xl font-semibold text-center ${textColor.desktop} py-8 px-8 ${className}`}
          >
            {title}
          </h1>
        </div>
      )}
    </div>
  )
}

export default ImageHeader
