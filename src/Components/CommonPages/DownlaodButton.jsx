import React from 'react'
import { Entirepagedata } from '../../Utils/data'
import { FiDownload } from 'react-icons/fi'

/**
 * DownloadButton component for displaying downloadable resources
 * Fetches data from the global downloadData structure
 *
 * @param {Object} props - Component props
 * @param {string} props.productCategory - Optional category to filter appropriate downloads for specific product
 * @param {string} props.className - Optional additional CSS classes
 */
const DownloadButton = ({ productCategory, className = '' }) => {
  // Get download data from the main data structure
  const { downloadData } = Entirepagedata

  // Get the appropriate download files based on product category
  const getDownloadFiles = () => {
    // Default files
    let dataSheet = downloadData?.categories?.[0]?.files?.[1] // Technical Specifications Guide
    let conformity = downloadData?.categories?.[2]?.files?.[0] // CE Certification Documents

    // Customize files based on product category if needed
    switch (productCategory) {
      case 'chargingCables':
        dataSheet = downloadData?.categories?.[0]?.files?.[1] || dataSheet
        break
      case 'chargingStations':
        dataSheet = downloadData?.categories?.[1]?.files?.[0] || dataSheet // AC Charging Station Installation
        break
      case 'dcChargingStation':
      case 'dcFastChargingStation':
        dataSheet = downloadData?.categories?.[1]?.files?.[1] || dataSheet // DC Fast Charger Setup Guide
        break
      case 'portableEVCharging':
        // Use default data sheet
        break
      default:
      // Use default files
    }

    return { dataSheet, conformity }
  }

  const { dataSheet, conformity } = getDownloadFiles()
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 ${className}`}
    >
      <h2 className='text-3xl sm:text-3xl lg:text-4xl font-semibold mb-8'>
        Downloads
      </h2>

      <div className='flex flex-col sm:flex-row gap-4'>
        {/* Data Sheet Button */}
        <a
          href={dataSheet?.url || '/downloads/tech-specs.pdf'}
          className='flex items-center justify-between border-2 rounded-lg px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group border-blaupunkt-secondary text-blaupunkt-secondary bg-transparent'
          target='_blank'
          rel='noopener noreferrer'
        >
            <span className='mr-4 text-blaupunkt-secondary group-hover:text-blaupunkt-primary-dark transition-colors font-medium'>
            Data Sheet
          </span>

          <FiDownload className='h-4 w-4 text-blaupunkt-primary' />
        </a>

        {/* Declaration of Conformity Button */}
        <a
          href={conformity?.url || '/downloads/ce-certs.pdf'}
          className='flex items-center justify-between border-2 rounded-lg px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group border-blaupunkt-secondary text-blaupunkt-secondary bg-transparent'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='mr-4 text-blaupunkt-secondary group-hover:text-blaupunkt-primary-dark transition-colors font-medium'>
            Declaration of Conformity
          </span>

          <FiDownload className='h-4 w-4 text-blaupunkt-primary' />
        </a>
      </div>
    </div>
  )
}

export default DownloadButton
