import React from 'react'
import ImageHeader from '../Common/ImageHeader'
import ModelCard from './ModelCard'
import { Entirepagedata } from '../../Data/index.js'

const ChargingStationModels = ({ category }) => {
  // Get models data from the page data based on the current category
  const categoryData = Entirepagedata[category] || {}
  const modelsData = categoryData.modelsData || { sections: [] }

  return (
    <div className='w-full'>
      {/* Header with proper background image */}
      <ImageHeader
        title={modelsData.title || 'Models'}
        backgroundImage={categoryData?.OverviewData?.BgImage}
        showBackgroundImage={!!categoryData?.OverviewData?.BgImage}
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        {/* Sections */}
        <div className='space-y-16 sm:space-y-20 lg:space-y-24'>
          {modelsData.sections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className='w-full'>
              {' '}
              {/* Section Title */}
              <div className='mb-8 sm:mb-12 lg:mb-16'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-blaupunkt-dark mb-4 sm:mb-6'>
                  {section.name}
                </h2>
              </div>
              {/* Categories within section */}
              <div className='space-y-16 sm:space-y-24 lg:space-y-32'>
                {section.categories?.map((category, categoryIndex) => (
                  <div key={categoryIndex} className='w-full'>
                    {/* Category Header */}
                    <div className='mb-6 sm:mb-8 lg:mb-9'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                        <h3 className='text-blaupunkt-primary-darker font-medium text-lg sm:text-xl lg:text-2xl'>
                          {category.name}
                        </h3>
                        <p className='text-blaupunkt-gray sm:ml-2 text-sm sm:text-base lg:text-lg font-light'>
                          {category.description}
                        </p>
                      </div>
                    </div>{' '}                    {/* Models Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'>                      {category.models?.map((model, modelIndex) => (
                        <ModelCard
                          key={modelIndex}
                          image={model.image}
                          modelCode={model.modelCode}
                          customFields={[
                            { label: 'Maximum Power', value: model.maximumPower },
                            { label: 'Current', value: model.current },
                            { label: 'Cable Length', value: model.cableLength },
                            { label: 'Phase Type', value: model.phaseType }
                          ]}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChargingStationModels
