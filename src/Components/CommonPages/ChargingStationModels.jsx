import React from 'react'
import ImageHeader from '../Common/ImageHeader'
import { Entirepagedata } from '../../Utils/data'

// Placeholder images from the Figma design
const chargingStationCableImage = 'http://localhost:3845/assets/02ddd4f661e166d8045cc0bd82cb4b96ed83cc36.png'
const chargingStationSocketImage = 'http://localhost:3845/assets/d79cfdbe4df1f7110eee0aea32518af785ef23fb.png'

const ChargingStationModels = ({ category }) => {
  // Get models data from the page data based on the current category
  const categoryData = Entirepagedata[category] || {}
  const modelsData = categoryData.modelsData || { sections: [] }

  return (
    <div className="w-full">
      {/* Header with proper background image */}
      <ImageHeader
        title={modelsData.title || 'Models'}
        backgroundImage={categoryData?.OverviewData?.BgImage}
        showBackgroundImage={!!categoryData?.OverviewData?.BgImage}
      />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Sections */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {modelsData.sections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="w-full">              {/* Section Title */}
              <div className="mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blaupunkt-dark mb-4 sm:mb-6">
                  {section.name}
                </h2>
              </div>

              {/* Categories within section */}
              <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                {section.categories?.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="w-full">
                    {/* Category Header */}
                    <div className="mb-6 sm:mb-8 lg:mb-9">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <h3 className="text-blaupunkt-primary-darker font-medium text-lg sm:text-xl lg:text-2xl">
                          {category.name}
                        </h3>
                        <p className="text-blaupunkt-gray sm:ml-2 text-sm sm:text-base lg:text-lg font-light">
                          {category.description}
                        </p>
                      </div>
                    </div>{/* Models Grid */}
                    <div className="flex gap-4 sm:gap-6 lg:gap-7 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                      {category.models?.map((model, modelIndex) => (
                        <div 
                          key={modelIndex}
                          className="relative flex-shrink-0 group"
                          style={{ width: 'clamp(220px, 30vw, 246px)' }}
                        >
                          {/* Model Card */}
                          <div className="bg-white rounded-xl border-2 border-blaupunkt-secondary-light overflow-hidden mb-3 sm:mb-4"
                               style={{ 
                                 width: 'clamp(220px, 30vw, 246px)', 
                                 height: 'clamp(230px, 30vw, 258px)' 
                               }}>
                            {/* Model Image */}
                            <div 
                              className="w-full h-full bg-white bg-cover bg-center relative"
                              style={{ 
                                backgroundImage: `url('${section.name.includes('Cable') ? chargingStationCableImage : chargingStationSocketImage}')`,
                                backgroundSize: section.name.includes('Cable') ? '100% 126.51%' : '103.82% 100%'
                              }}
                            >                              {/* Model Code - positioned at bottom of image */}
                              <div 
                                className="absolute text-blaupunkt-primary-darker font-medium text-base sm:text-lg"
                                style={{
                                  left: 'clamp(10px, 2vw, 15px)',
                                  bottom: 'clamp(10px, 2vw, 15px)'
                                }}
                              >
                                {model.modelCode}
                              </div>
                            </div>
                          </div>

                          {/* Specifications - positioned below the card */}
                          <div className="space-y-2 sm:space-y-3">
                            <div className="text-blaupunkt-dark text-sm sm:text-base font-normal">
                              Maximum Power: {model.maximumPower}
                            </div>
                            <div className="text-blaupunkt-dark text-sm sm:text-base font-normal">
                              Current: {model.current}
                            </div>
                            <div className="text-blaupunkt-dark text-sm sm:text-base font-normal">
                              Cable Length: {model.cableLength}
                            </div>
                            <div className="text-blaupunkt-dark text-sm sm:text-base font-normal">
                              Phase Type: {model.phaseType}
                            </div>
                          </div>
                        </div>
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
