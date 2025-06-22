import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({
  title,
  description,
  breadcrumbs,
  buttonText,
  mainImage,
  imageAlt,
  thumbnails
}) => {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0)
  // Get currently displayed image from thumbnails or use main image
  const currentDisplayImage =
    thumbnails && thumbnails.length > activeThumbIndex
      ? thumbnails[activeThumbIndex].image
      : mainImage
  // Get alt text for current image
  const currentAltText =
    thumbnails && thumbnails.length > activeThumbIndex
      ? thumbnails[activeThumbIndex].alt || imageAlt || 'Product Image'
      : imageAlt || 'Product Image'

  return (
    <div className='w-full bg-white py-16 px-6 lg:py-0'>
      {/* Container */}
      <div className='max-w-md mx-auto space-y-6 sm:max-w-2xl lg:max-w-6xl xl:max-w-7xl'>
        {' '}
        {/* Breadcrumb Navigation */}
        <div className='flex items-center justify-center mb-8 lg:mb-12 lg:mt-16'>
          <div className='flex items-center gap-1 text-[12px] lg:text-sm font-myriad font-normal'>
            {breadcrumbs?.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className='text-blaupunkt-secondary-light'>/</span>
                )}
                {crumb.active ? (
                  <span className='text-blaupunkt-secondary'>{crumb.text}</span>
                ) : (
                  <Link
                    to={crumb.path}
                    className='text-blaupunkt-secondary-light hover:text-blaupunkt-secondary cursor-pointer'
                  >
                    {crumb.text}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Main Content - Desktop Flex Layout */}
        <div className='flex flex-col lg:flex-row lg:gap-12 lg:items-start space-y-6 lg:space-y-0'>
          {' '}
          {/* Text Content Section */}
          <div className='lg:flex-1 lg:max-w-2xl h-full flex'>
            {/* Main Content Card */}{' '}
            <div className='border-2 border-blaupunkt-secondary-light rounded-2xl p-6 lg:p-8 h-[300px] lg:h-[500px] xl:h-[500px] flex flex-col justify-between w-full'>
              <div>
                {' '}
                {/* Main Heading */}
                <h1 className='text-[32px] lg:text-5xl xl:text-6xl font-semibold font-myriad text-blaupunkt-dark leading-[1.2] lg:leading-[1.1] mb-8  w-[230px] lg:w-[350px]'>
                  {title}
                </h1>{' '}
                {/* Description */}{' '}
                <p className='text-[15px] lg:text-lg xl:text-xl font-light font-myriad text-blaupunkt-primary-darker leading-[1.4] lg:leading-[1.6] w-[230px] lg:w-[350px]'>
                  {description}
                </p>
              </div>
              {/* Connect Button */}
              <div className='flex justify-start mt-auto'>
                <button className='bg-blaupunkt-primary-darker text-white px-6 py-3 lg:px-8 lg:py-4 rounded-2xl font-semibold font-myriad text-[14px] lg:text-base xl:text-lg leading-[1.2] hover:bg-blaupunkt-primary-dark transition-colors duration-300 hover:scale-105 transform'>
                  {buttonText || 'Connect'}
                </button>
              </div>
            </div>
          </div>
          {/* Product Image Section */}
          <div className='lg:flex-1 lg:max-w-2xl'>
            <div className='relative w-full h-[350px] lg:h-[500px] xl:h-[500px] bg-white rounded-2xl overflow-hidden shadow-lg'>
              {' '}
              {/* Product Image Background with animation */}
              <div className='w-full h-full bg-white relative overflow-hidden'>
                {' '}
                <img
                  src={currentDisplayImage}
                  alt={currentAltText}
                  className='w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105'
                  style={{ animation: 'fadeIn 0.5s ease-in-out' }}
                />
                <style jsx='true'>{`
                  @keyframes fadeIn {
                    0% {
                      opacity: 0.7;
                      transform: scale(0.98);
                    }
                    100% {
                      opacity: 1;
                      transform: scale(1);
                    }
                  }
                `}</style>
              </div>
              {/* Gradient Overlay at Bottom */}
              <div className='absolute bottom-0 left-0 right-0 h-[189px] lg:h-[250px] bg-gradient-to-t from-white to-transparent pointer-events-none'></div>{' '}
              {/*Sub images at bottom area*/}
              <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 lg:gap-6 p-4 lg:p-6'>
                {thumbnails && thumbnails.length > 0
                  ? thumbnails.map((thumb, index) => (
                      <div
                        key={index}
                        className={`relative ${
                          activeThumbIndex === index
                            ? 'z-10 transform scale-110'
                            : ''
                        }`}
                      >
                        <img
                          src={thumb.image || mainImage}
                          alt={thumb.alt || `Thumbnail ${index + 1}`}
                          className={`w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] xl:w-[60px] xl:h-[60px] object-cover rounded-lg shadow-md hover:scale-110 transition-all duration-300 cursor-pointer 
                          ${
                            activeThumbIndex === index
                              ? 'border-2 border-blaupunkt-primary-darker shadow-lg'
                              : 'opacity-80 hover:opacity-100'
                          }`}
                          onClick={() => setActiveThumbIndex(index)}
                          onKeyDown={e =>
                            e.key === 'Enter' && setActiveThumbIndex(index)
                          }
                          tabIndex={0}
                          role='button'
                          aria-label={`View ${
                            thumb.alt || `image ${index + 1}`
                          }`}
                        />
                        {activeThumbIndex === index && (
                          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blaupunkt-primary-darker rounded-full'></div>
                        )}
                      </div>
                    ))
                  : // Default thumbnails if none provided
                    Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <div
                          key={index}
                          className={`relative ${
                            activeThumbIndex === index
                              ? 'z-10 transform scale-110'
                              : ''
                          }`}
                        >
                          <img
                            src={mainImage}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] xl:w-[60px] xl:h-[60px] object-cover rounded-lg shadow-md hover:scale-110 transition-all duration-300 cursor-pointer
                          ${
                            activeThumbIndex === index
                              ? 'border-2 border-blaupunkt-primary-darker shadow-lg'
                              : 'opacity-80 hover:opacity-100'
                          }`}
                            onClick={() => setActiveThumbIndex(index)}
                            onKeyDown={e =>
                              e.key === 'Enter' && setActiveThumbIndex(index)
                            }
                            tabIndex={0}
                            role='button'
                            aria-label={`View image ${index + 1}`}
                          />
                          {activeThumbIndex === index && (
                            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blaupunkt-primary-darker rounded-full'></div>
                          )}
                        </div>
                      ))}
              </div>
            </div>{' '}
          </div>
        </div>
        <hr className='hidden lg:block border-blaupunkt-primary-darker border-t-2 my-32 mx-4' />
      </div>
    </div>
  )
}

export default HeroSection
