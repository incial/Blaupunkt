import React from 'react'
import ImageHeader from '../Common/ImageHeader'
import { Entirepagedata } from '../../Utils/data'
import chargingStationsImage from '../../assets/Images/CatImages/Charging_Stations.png'
import dcChargingStationImage from '../../assets/Images/CatImages/DC_Charging_Station.png'

// Use actual images from the assets folder
const chargingStationCableImage = chargingStationsImage
const chargingStationSocketImage = dcChargingStationImage

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
                    </div>                    {/* Models Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                      {category.models?.map((model, modelIndex) => (
                        <div 
                          key={modelIndex}
                          className="w-full max-w-[300px] mx-auto"
                        >                          {/* Outer container with light blue border */}
                          <div className='rounded-xl h-full'>
                            {/* White inner container */}
                            <div className='bg-white rounded-lg overflow-hidden h-full flex flex-col'>                              {/* Product Image Container */}
                              <div className='w-full aspect-square flex items-center justify-center border-3 border-[#93C5FD] rounded-xl'>
                                <div 
                                  className="w-full h-full bg-white bg-cover bg-center relative rounded-lg"
                                  style={{ 
                                    backgroundImage: `url('${section.name.includes('Cable') ? chargingStationCableImage : chargingStationSocketImage}')`,
                                    backgroundSize: section.name.includes('Cable') ? '100% 126.51%' : '103.82% 100%'
                                  }}
                                >
                                </div>
                              </div>
                                {/* Product Details */}
                              <div className='pt-10 pb-6'>
                                {/* Model Code - Primary heading */}
                                <h3 className='text-lg font-bold text-[#1E3A8A] mb-4 text-left'>
                                  {model.modelCode}
                                </h3>
                                
                                {/* Specifications List */}
                                <div className='space-y-1 text-md'>
                                  <div className='flex items-center'>
                                    <span className='font-normal text-gray-700'>Maximum Power: </span>
                                    <span className='text-gray-900 font-normal'>{model.maximumPower}</span>
                                  </div>
                                  
                                  <div className='flex items-center'>
                                    <span className='font-normal text-gray-700'>Current: </span>
                                    <span className='text-gray-900 font-normal'>{model.current}</span>
                                  </div>
                                  
                                  <div className='flex items-center'>
                                    <span className='font-normal text-gray-700'>Cable Length: </span>
                                    <span className='text-gray-900 font-normal'>{model.cableLength}</span>
                                  </div>
                                  
                                  <div className='flex items-center'>
                                    <span className='font-normal text-gray-700'>Phase Type: </span>
                                    <span className='text-gray-900 font-normal'>{model.phaseType}</span>
                                  </div>
                                </div>
                              </div>
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
