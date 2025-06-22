import React from 'react'
import ImageHeader from '../Common/ImageHeader'
import { AllSpecifications } from '../../Data/index.js'

const Specifications = ({ productImage, category }) => {
  // Get specifications data based on category
  const getSpecificationsData = category => {
    if (category && AllSpecifications[category]) {
      return AllSpecifications[category]
    }

    // Default specifications data if category not found
    return {
      title: 'Technical Specifications',
      specs: [
        { label: 'Working Voltage:', value: '110V – 250V' },
        { label: 'Rated Current:', value: 'Up to 32A' },
        { label: 'Insulation Resistance:', value: '>1000 MΩ' },
        { label: 'Dielectric Strength:', value: '2000V' },
        { label: 'Contact Resistance:', value: '< 0.5 mΩ' },
        { label: 'Insertion & Extraction Force:', value: '80N – 100N' },
        {
          label: 'Main Materials:',
          value: 'Thermoplastic, Silicon Rubber, Copper Alloy'
        },
        { label: 'Cable Specification:', value: '3×2.5mm² + 2×0.5mm²' },
        { label: 'Cable Length:', value: '8 meters' },
        { label: 'Fire Rating:', value: 'UL94 V-0 (Flame Retardant)' },
        { label: 'Operating Temperature:', value: '-30°C to +50°C' },
        { label: 'Net Weight:', value: '1.8 kg' }
      ]
    }
  }

  const specificationsInfo = getSpecificationsData(category)
  const specsToDisplay = specificationsInfo.specs
  const imageToDisplay = productImage || '/src/assets/Images/charger.jpg'

  return (
    <div className='w-full py-6'>
      {' '}
      <ImageHeader
        title={specificationsInfo.title || 'Specifications'}
        backgroundImage={'/src/assets/Images/charger.jpg'}
        showBackgroundImage={true}
        textColor={{
          mobile: 'text-white',
          desktop: 'text-gray-800'
        }}
        className='font-bold'
        desktopClassName='py-0'
        mobileClassName='py-0'
      />
      <div className='max-w-7xl mx-auto px-6'>
        {' '}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-36 items-center '>
          {/* Specifications Table */}
          <div className='w-full overflow-hidden'>
            <div className='overflow-x-auto'>
              {' '}
              <table className='w-full'>
                <thead className='bg-gray-50'>
                  <tr></tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {specsToDisplay.map((spec, index) => (
                    <tr key={index}>
                      <td className='px-6 py-4 text-base text-gray-700 font-normal'>
                        {spec.label}
                      </td>
                      <td className='px-6 py-4 text-base text-gray-900 font-medium'>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>{' '}
          {/* Product Image */}
          <div className='flex justify-center lg:justify-end w-full h-full min-h-[400px]'>
            <div className='relative  rounded-2xl  flex items-center justify-center'>
              <img
                src={imageToDisplay}
                alt='EV Charging Cable'
                className='w-full h-full object-cover rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specifications
