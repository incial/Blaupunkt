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
    <div className='flex items-center justify-center'>
      <div className='flex flex-nowrap items-center gap-4'>
        {/* Sort By Filter */}
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Sort By:
          </span>
          <div className='relative'>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className='appearance-none bg-blaupunkt-secondary text-white px-3 py-2 pr-8 rounded-lg font-myriad text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors w-[150px]'
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
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Type:
          </span>
          <div className='relative'>
            <select
              value={productType}
              onChange={e => setProductType(e.target.value)}
              className='appearance-none bg-blaupunkt-secondary text-white px-3 py-2 pr-8 rounded-lg font-myriad text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors w-[130px]'
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
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Speed:
          </span>
          <div className='relative'>
            <select
              value={chargingSpeed}
              onChange={e => setChargingSpeed(e.target.value)}
              className='appearance-none bg-blaupunkt-secondary text-white px-3 py-2 pr-8 rounded-lg font-myriad text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors w-[100px]'
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
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Connector:
          </span>
          <div className='relative'>
            <select
              value={connectorType}
              onChange={e => setConnectorType(e.target.value)}
              className='appearance-none bg-blaupunkt-secondary text-white px-3 py-2 pr-8 rounded-lg font-myriad text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors w-[110px]'
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
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Phase:
          </span>
          <div className='relative'>
            <select
              value={phaseType}
              onChange={e => setPhaseType(e.target.value)}
              className='appearance-none bg-blaupunkt-secondary text-white px-3 py-2 pr-8 rounded-lg font-myriad text-sm font-normal cursor-pointer hover:bg-blaupunkt-secondary/90 transition-colors w-[130px]'
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
