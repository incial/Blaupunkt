import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import {
  SORT_OPTIONS,
  PRODUCT_TYPE_OPTIONS,
  CHARGING_SPEED_OPTIONS,
  CONNECTOR_TYPE_OPTIONS,
  PHASE_TYPE_OPTIONS
} from './productsData'

/**
 * DesktopFilters Component - Desktop filter display
 */
const DesktopFilters = ({
  sortBy,
  setSortBy,
  productType,
  setProductType,
  chargingSpeed,
  setChargingSpeed,
  connectorType,
  setConnectorType,
  phaseType,
  setPhaseType
}) => (
  <div className='hidden lg:block'>
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-end gap-4 lg:gap-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-6'>
        {/* Sort By Filter */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm sm:text-base font-light whitespace-nowrap'>
            Sort By:
          </span>
          <div className='relative min-w-0 flex-1 sm:flex-initial'>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className='w-full appearance-none bg-blaupunkt-secondary text-white px-3 sm:px-4 py-2 pr-8 rounded-lg font-myriad text-xs sm:text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors'
            >
              {SORT_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
              <FiChevronDown className='w-3 h-3' color='white' />
            </div>
          </div>
        </div>

        {/* Product Type Filter */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm sm:text-base font-light whitespace-nowrap'>
            Product Type:
          </span>
          <div className='relative min-w-0 flex-1 sm:flex-initial'>
            <select
              value={productType}
              onChange={e => setProductType(e.target.value)}
              className='w-full appearance-none bg-blaupunkt-secondary text-white px-3 sm:px-4 py-2 pr-8 rounded-lg font-myriad text-xs sm:text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors'
            >
              {PRODUCT_TYPE_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
              <FiChevronDown className='w-3 h-3' color='white' />
            </div>
          </div>
        </div>

        {/* Charging Speed Filter */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm sm:text-base font-light whitespace-nowrap'>
            Charging Speed:
          </span>
          <div className='relative min-w-0 flex-1 sm:flex-initial'>
            <select
              value={chargingSpeed}
              onChange={e => setChargingSpeed(e.target.value)}
              className='w-full appearance-none bg-blaupunkt-secondary text-white px-3 sm:px-4 py-2 pr-8 rounded-lg font-myriad text-xs sm:text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors'
            >
              {CHARGING_SPEED_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
              <FiChevronDown className='w-3 h-3' color='white' />
            </div>
          </div>
        </div>

        {/* Connector Type Filter */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm sm:text-base font-light whitespace-nowrap'>
            Connector Type:
          </span>
          <div className='relative min-w-0 flex-1 sm:flex-initial'>
            <select
              value={connectorType}
              onChange={e => setConnectorType(e.target.value)}
              className='w-full appearance-none bg-blaupunkt-secondary text-white px-3 sm:px-4 py-2 pr-8 rounded-lg font-myriad text-xs sm:text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors'
            >
              {CONNECTOR_TYPE_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
              <FiChevronDown className='w-3 h-3' color='white' />
            </div>
          </div>
        </div>

        {/* Phase Type Filter */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm sm:text-base font-light whitespace-nowrap'>
            Phase Type:
          </span>
          <div className='relative min-w-0 flex-1 sm:flex-initial'>
            <select
              value={phaseType}
              onChange={e => setPhaseType(e.target.value)}
              className='w-full appearance-none bg-blaupunkt-secondary text-white px-3 sm:px-4 py-2 pr-8 rounded-lg font-myriad text-xs sm:text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors'
            >
              {PHASE_TYPE_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
              <FiChevronDown className='w-3 h-3' color='white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DesktopFilters
