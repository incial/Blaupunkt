import React from 'react'

const Overview = ({ overviewData }) => {
  // Get background image from the provided data
  const backgroundImage = overviewData?.BgImage || null
  return (
    <div>
      {/* Mobile View - With Background Image */}
      <div className='relative sm:mb-12 lg:mb-16 mb-12 overflow-hidden md:hidden'>
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
        <div className='absolute inset-0 bg-black/40' />

        {/* Text Content - White for mobile */}
        <h1 className='relative text-3xl sm:text-3xl lg:text-4xl font-semibold text-center text-white py-8 px-8'>
          Overview
        </h1>
      </div>
      {/* Desktop View - Text Only */}
      <div className='hidden md:block sm:mb-12 lg:mb-4 mb-12'>
        <h1 className='text-3xl sm:text-3xl lg:text-4xl font-semibold text-center text-black py-16 px-8'>
          Overview{' '}
        </h1>
      </div>
      {/* Mobile View - Stacked Layout */}
      <div className='md:hidden'>
        {/* Section 1: Text Content and Image */}
        <div className='bg-white'>
          {/* Text Content */}
          <div className='sm:max-w-4xl mx-auto px-8 pt-8 pb-4'>
            {' '}
            {/* Render paragraphs if para is active */}
            {overviewData?.para?.active && overviewData.para.data.length > 0 && (
              <div className='mb-6'>
                {overviewData.para.data
                  .filter(
                    item =>
                      !(
                        typeof item === 'object' &&
                        item.subheading?.includes('Monta Backend Integration')
                      )
                  )
                  .map((item, index) => (
                    <div key={index} className='mb-6'>
                      {/* Render subheading if it exists */}
                      {typeof item === 'object' && item.subheading && (
                        <h3 className='text-xl font-semibold text-black mb-3 text-left'>
                          {item.subheading}
                        </h3>
                      )}
                      <p className='text-lg text-left text-black py-2 leading-relaxed'>
                        {typeof item === 'object' ? item.text : item}
                      </p>
                    </div>
                  ))}
              </div>
            )}
            {/* Render list if list is active */}
            {overviewData?.list?.active && overviewData.list.data.length > 0 && (
              <div className='max-w-4xl mx-auto px-8'>
                <ul className='space-y-3'>
                  {overviewData.list.data.map((item, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-black mr-3 mt-1'>•</span>
                      <span className='text-lg text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Fallback message if neither para nor list is active or has data */}
            {(!overviewData?.para?.active ||
              overviewData.para.data.length === 0) &&
              (!overviewData?.list?.active ||
                overviewData.list.data.length === 0) && (
                <p className='text-base text-center text-gray-500 py-4 px-8'>
                  No overview data available.
                </p>
              )}
          </div>
          {/* Image */}
          <div className='flex justify-center py-6 px-8'>
            {overviewData?.image && (
              <img
                src={overviewData.image}
                alt='Product Overview'
                className='w-full h-auto rounded-lg shadow-lg object-cover'
                style={{
                  maxHeight: overviewData.imageHeight?.mobile || '400px',
                  minHeight: overviewData.imageMinHeight?.mobile || '300px'
                }}
              />
            )}
          </div>
        </div>
        {/* Section 2: Advantages Monta Backend Integration: */}        <div className='px-8'>
          <div className='sm:max-w-6xl mx-auto'>
            {overviewData?.para?.active && overviewData?.para?.data?.some(
              item =>
                typeof item === 'object' && 
                item.subheading?.includes('Monta Backend Integration') && 
                item.active
            ) && (
              <div className='py-6 sm:font-medium'>
                {overviewData.para.data
                  .filter(
                    item =>
                      typeof item === 'object' &&
                      item.subheading?.includes('Monta Backend Integration') &&
                      item.active
                  )                  .map((item, index) => (                    <div key={`monta-${index}`}>
                      <h3 className='text-2xl font-semibold text-black mb-3 text-left'>
                        {item.subheading}
                      </h3>
                      <p className='text-lg text-left text-black py-2 leading-relaxed font-medium'>
                        {item.text}
                      </p>
                      {/* Display list items if available in the data */}
                      {item.listItems && item.listItems.length > 0 && (
                        <ul className='mt-3 space-y-2'>
                          {item.listItems.map((listItem, i) => (
                            <li
                              key={`monta-mobile-list-${i}`}
                              className='flex items-start'
                            >                      <span className='text-lg text-gray-700 font-medium'>
                                {listItem.includes(':') ? (
                                  <>
                                    <strong>{listItem.split(':')[0]}</strong>:
                                    {listItem.split(':').slice(1).join(':')}
                                  </>
                                ) : (
                                  listItem
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>{' '}
      </div>
      {/* Desktop View - Flex Row Layout */}
      <div className='hidden md:flex md:items-stretch max-w-7xl mx-auto px-8 py-8 gap-12'>
        {/* Image - Left Side (60% width) */}
        <div className='flex-[4] flex items-start justify-center'>
          {overviewData?.image && (
            <img
              src={overviewData.image}
              alt='Product Overview'
              className='w-full h-full rounded-lg object-cover'
              style={{
                maxHeight: overviewData.imageHeight?.desktop || '500px',
                minHeight: overviewData.imageMinHeight?.desktop || '400px'
              }}
            />
          )}
        </div>
        {/* Text Content - Right Side (40% width) */}{' '}
        <div className='flex-[2] flex flex-col justify-center pl-4'>
          {/* Render paragraphs if para is active */}
          {overviewData?.para?.active && overviewData.para.data.length > 0 && (
            <div className='mb-6'>
              {overviewData.para.data
                .filter(
                  item =>
                    !(
                      typeof item === 'object' &&
                      item.subheading?.includes('Monta Backend Integration')
                    )
                )
                .map((item, index) => (
                  <div key={index} className='mb-6'>
                    {/* Render subheading if it exists */}
                    {typeof item === 'object' && item.subheading && (
                      <h3 className='text-xl font-semibold text-black mb-3 text-left'>
                        {item.subheading}
                      </h3>
                    )}
                    <p className='text-lg text-left text-black py-2 leading-relaxed'>
                      {typeof item === 'object' ? item.text : item}
                    </p>
                  </div>
                ))}
            </div>
          )}
          {/* Render list if list is active */}
          {overviewData?.list?.active && overviewData.list.data.length > 0 && (
            <div>
              <ul className='space-y-4'>
                {overviewData.list.data.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='text-black mr-3 mt-1 text-xl'>•</span>
                    <span className='text-lg text-gray-700 leading-relaxed'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Fallback message if neither para nor list is active or has data */}
          {(!overviewData?.para?.active ||
            overviewData.para.data.length === 0) &&
            (!overviewData?.list?.active ||
              overviewData.list.data.length === 0) && (
              <p className='text-base text-left text-gray-500 py-4'>
                No overview data available.
              </p>
            )}
        </div>
      </div>{' '}
      {/* Monta Backend Integration Section - Desktop */}      <div className='hidden md:block mt-4 px-28 py-16'>
        <div>
          {/* Enhanced way to show Monta Integration from para data */}
          {overviewData?.para?.active && overviewData?.para?.data?.some(
            item =>
              typeof item === 'object' && 
              item.subheading?.includes('Monta Backend Integration') &&
              item.active
          ) && (
            <div className='mt-6'>
              {overviewData.para.data
                .filter(
                  item =>
                    typeof item === 'object' &&
                    item.subheading?.includes('Monta Backend Integration') &&
                    item.active
                )                .map((item, index) => (                  <div key={`monta-desktop-${index}`} className='text-left'>
                    <h3 className='text-3xl font-semibold text-black mb-10'>
                      {item.subheading}
                    </h3>{' '}
                    <p className='text-lg text-black leading-relaxed font-medium'>
                      {item.text}
                    </p>{' '}
                    {/* Display list items if available in the data */}
                    {item.listItems && item.listItems.length > 0 && (
                      <ul className='mt-4 space-y-6  text-left'>
                        {item.listItems.map((listItem, i) => (
                          <li
                            key={`monta-list-${i}`}
                            className='flex items-start'
                          >
                            <span className='text-lg text-gray-700 leading-relaxed font-medium'>
                              {listItem.includes(':') ? (
                                <>
                                  <strong>{listItem.split(':')[0]}</strong>:
                                  {listItem.split(':').slice(1).join(':')}
                                </>
                              ) : (
                                listItem
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>{' '}
      </div>
    </div>
  )
}

export default Overview
