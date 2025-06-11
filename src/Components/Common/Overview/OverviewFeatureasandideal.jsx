import React from 'react'

const OverviewFeatureasandideal = ({ overviewData }) => {
  return (
    <div className='w-full py-4'>
      {/* Features and Ideal Use Cases Section */}
      {(overviewData?.features?.active ||
        overviewData?.ideal?.active ||
        overviewData?.IdealandFeaturesImage) && (
        <div className='max-w-7xl mx-auto px-8'>          {/* Desktop Layout - Flex Row */}
          <div className='hidden md:flex md:items-start md:gap-12 py-4'>
            {/* Content Section - Left Side */}
            <div className='flex-[2] space-y-8'>
              {/* Features Section */}
              {overviewData?.features?.active &&
                overviewData.features.data?.length > 0 && (
                  <div>
                    {overviewData.features.title && (
                      <h4 className='text-xl font-medium text-black mb-6'>
                        {overviewData.features.title}
                      </h4>
                    )}
                    <ul className='list-disc list-inside space-y-3 pl-4'>
                      {overviewData.features.data.map((item, index) => (
                        <li
                          key={`feature-${index}`}
                          className='text-lg text-gray-700 leading-relaxed'
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Ideal Use Cases Section */}
              {overviewData?.ideal?.active &&
                overviewData.ideal.data?.length > 0 && (
                  <div>
                    {overviewData.ideal.title && (
                      <h4 className='text-xl font-medium text-black mb-6'>
                        {overviewData.ideal.title}
                      </h4>
                    )}
                    <ul className='list-disc list-inside space-y-3 pl-4'>
                      {overviewData.ideal.data.map((item, index) => (
                        <li
                          key={`ideal-${index}`}
                          className='text-lg text-gray-700 leading-relaxed'
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Image Section - Right Side */}
            {overviewData?.IdealandFeaturesImage && (
              <div className='flex-[1] flex justify-center'>
                <img
                  src={overviewData.IdealandFeaturesImage}
                  alt='Features and Ideal Use Cases'
                  className='w-full h-auto rounded-lg shadow-lg object-cover'
                  style={{
                    maxHeight: '500px',
                    minHeight: '400px'
                  }}
                />
              </div>
            )}
          </div>          {/* Mobile Layout - Stacked */}
          <div className='md:hidden space-y-6 py-4'>
            {/* Features Section */}
            {overviewData?.features?.active &&
              overviewData.features.data?.length > 0 && (
                <div>
                  {overviewData.features.title && (
                    <h4 className='text-xl font-medium text-black mb-6'>
                      {overviewData.features.title}
                    </h4>
                  )}
                  <ul className='list-disc list-inside space-y-3'>
                    {overviewData.features.data.map((item, index) => (
                      <li
                        key={`feature-mobile-${index}`}
                        className='text-lg text-gray-700 leading-relaxed'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Ideal Use Cases Section */}
            {overviewData?.ideal?.active &&
              overviewData.ideal.data?.length > 0 && (
                <div>
                  {overviewData.ideal.title && (
                    <h4 className='text-xl font-medium text-black mb-6'>
                      {overviewData.ideal.title}
                    </h4>
                  )}
                  <ul className='list-disc list-inside space-y-3'>
                    {overviewData.ideal.data.map((item, index) => (
                      <li
                        key={`ideal-mobile-${index}`}
                        className='text-lg text-gray-700 leading-relaxed'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  )
}

export default OverviewFeatureasandideal