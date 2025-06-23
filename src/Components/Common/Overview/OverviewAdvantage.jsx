import React from 'react'

const OverviewAdvantage = ({ overviewData }) => {
  if (!overviewData) {
    return null
  }
  return (
    <div className='w-full py-4'>
      {/* Monta Backend Integration Section - Desktop */}
      <div className='hidden md:block max-w-7xl mx-auto px-8 py-4'>
        {/* Enhanced way to show Monta Integration from para data */}
        {overviewData?.para?.active &&
          overviewData?.para?.data?.some(
            item =>
              typeof item === 'object' &&
              item.subheading?.includes('Monta Backend Integration') &&
              item.active
          ) && (
            <div>
              {overviewData.para.data
                .filter(
                  item =>
                    typeof item === 'object' &&
                    item.subheading?.includes('Monta Backend Integration') &&
                    item.active
                )
                .map((item, index) => (
                  <div key={`monta-desktop-${index}`}>
                    <h3 className='text-3xl font-semibold text-black mb-6'>
                      {item.subheading}
                    </h3>
                    <p className='text-lg text-black leading-relaxed mb-6'>
                      {item.text}
                    </p>
                    {/* Display list items if available in the data */}
                    {item.listItems && item.listItems.length > 0 && (
                      <ul className='space-y-4'>
                        {item.listItems.map((listItem, i) => (
                          <li
                            key={`monta-list-${i}`}
                            className='flex items-start'
                          >
                            <span className='text-lg  text-gray-700 leading-relaxed'>
                              {listItem.includes(':') ? (
                                <>
                                  <span className='font-semibold'>{listItem.split(':')[0]}</span>:
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
      {/* Monta Backend Integration Section - Mobile */}
      <div className='md:hidden max-w-7xl mx-auto px-4 py-4'>
        {/* Enhanced way to show Monta Integration from para data */}
        {overviewData?.para?.active &&
          overviewData?.para?.data?.some(
            item =>
              typeof item === 'object' &&
              item.subheading?.includes('Monta Backend Integration') &&
              item.active
          ) && (
            <div>
              {overviewData.para.data
                .filter(
                  item =>
                    typeof item === 'object' &&
                    item.subheading?.includes('Monta Backend Integration') &&
                    item.active
                )
                .map((item, index) => (
                  <div key={`monta-mobile-${index}`}>
                    <h3 className='text-2xl font-semibold text-black mb-6'>
                      {item.subheading}
                    </h3>
                    <p className='text-base text-black leading-relaxed mb-6'>
                      {item.text}
                    </p>
                    {/* Display list items if available in the data */}
                    {item.listItems && item.listItems.length > 0 && (
                      <ul className='space-y-3'>
                        {item.listItems.map((listItem, i) => (
                          <li
                            key={`monta-mobile-list-${i}`}
                            className='flex items-start'
                          >
                            <span className='text-base text-gray-700 leading-relaxed'>
                              {listItem.includes(':') ? (
                                <>
                                  <span className='font-semibold'>{listItem.split(':')[0]}</span>:
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
    </div>
  )
}

export default OverviewAdvantage
