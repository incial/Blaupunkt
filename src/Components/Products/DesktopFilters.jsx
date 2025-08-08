import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import {
  SORT_OPTIONS,
  PRODUCT_TYPE_OPTIONS,
  CHARGING_SPEED_OPTIONS,
  CONNECTOR_TYPE_OPTIONS,
  PHASE_TYPE_OPTIONS
} from './productsData'

/**
 * DesktopFilters Component - Desktop filter display with custom dropdowns
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
}) => {
  // Dropdown states
  const [sortByOpen, setSortByOpen] = useState(false)
  const [productTypeOpen, setProductTypeOpen] = useState(false)
  const [chargingSpeedOpen, setChargingSpeedOpen] = useState(false)
  const [connectorTypeOpen, setConnectorTypeOpen] = useState(false)
  const [phaseTypeOpen, setPhaseTypeOpen] = useState(false)

  // Refs for dropdowns
  const dropdownRefs = {
    sortBy: useRef(null),
    productType: useRef(null),
    chargingSpeed: useRef(null),
    connectorType: useRef(null),
    phaseType: useRef(null)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        sortByOpen &&
        dropdownRefs.sortBy.current &&
        !dropdownRefs.sortBy.current.contains(event.target)
      ) {
        setSortByOpen(false)
      }
      if (
        productTypeOpen &&
        dropdownRefs.productType.current &&
        !dropdownRefs.productType.current.contains(event.target)
      ) {
        setProductTypeOpen(false)
      }
      if (
        chargingSpeedOpen &&
        dropdownRefs.chargingSpeed.current &&
        !dropdownRefs.chargingSpeed.current.contains(event.target)
      ) {
        setChargingSpeedOpen(false)
      }
      if (
        connectorTypeOpen &&
        dropdownRefs.connectorType.current &&
        !dropdownRefs.connectorType.current.contains(event.target)
      ) {
        setConnectorTypeOpen(false)
      }
      if (
        phaseTypeOpen &&
        dropdownRefs.phaseType.current &&
        !dropdownRefs.phaseType.current.contains(event.target)
      ) {
        setPhaseTypeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [
    sortByOpen,
    productTypeOpen,
    chargingSpeedOpen,
    connectorTypeOpen,
    phaseTypeOpen,
    dropdownRefs.sortBy,
    dropdownRefs.productType,
    dropdownRefs.chargingSpeed,
    dropdownRefs.connectorType,
    dropdownRefs.phaseType
  ])

  return (
  <div className='hidden lg:block relative z-40'>
    <div className='flex items-center justify-center relative'>
      <div className='flex flex-nowrap items-center gap-4'>
        {/* Sort By Filter */}
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Sort By:
          </span>
          <div className='relative' ref={dropdownRefs.sortBy}>
            <button
              onClick={() => setSortByOpen(!sortByOpen)}
              className='flex items-center gap-1.5 bg-blaupunkt-secondary text-white px-3 py-2 rounded-lg font-myriad text-sm font-normal cursor-pointer w-[150px] justify-between'
            >
              <span className="truncate">{sortBy}</span>
              <FiChevronDown className='w-3 h-3 flex-shrink-0' color='white' />
            </button>
            {/* Dropdown Menu */}
            {sortByOpen && (
              <div className='absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu' aria-orientation='vertical'>
                  {SORT_OPTIONS.map(option => (
                    <button
                      key={option}
                      className={`${
                        sortBy === option
                          ? 'bg-gray-100 text-blaupunkt-primary-darker'
                          : 'text-gray-700'
                      } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100`}
                      onClick={() => {
                        setSortBy(option)
                        setSortByOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Type Filter */}
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Type:
          </span>
          <div className='relative' ref={dropdownRefs.productType}>
            <button
              onClick={() => setProductTypeOpen(!productTypeOpen)}
              className='flex items-center gap-1.5 bg-blaupunkt-secondary text-white px-3 py-2 rounded-lg font-myriad text-sm font-normal cursor-pointer w-[130px] justify-between'
            >
              <span className="truncate">{productType}</span>
              <FiChevronDown className='w-3 h-3 flex-shrink-0' color='white' />
            </button>
            {/* Dropdown Menu */}
            {productTypeOpen && (
              <div className='absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu' aria-orientation='vertical'>
                  {PRODUCT_TYPE_OPTIONS.map(option => (
                    <button
                      key={option}
                      className={`${
                        productType === option
                          ? 'bg-gray-100 text-blaupunkt-primary-darker'
                          : 'text-gray-700'
                      } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100`}
                      onClick={() => {
                        setProductType(option)
                        setProductTypeOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Charging Speed Filter */}
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Speed:
          </span>
          <div className='relative' ref={dropdownRefs.chargingSpeed}>
            <button
              onClick={() => setChargingSpeedOpen(!chargingSpeedOpen)}
              className='flex items-center gap-1.5 bg-blaupunkt-secondary text-white px-3 py-2 rounded-lg font-myriad text-sm font-normal cursor-pointer w-[100px] justify-between'
            >
              <span className="truncate">{chargingSpeed}</span>
              <FiChevronDown className='w-3 h-3 flex-shrink-0' color='white' />
            </button>
            {/* Dropdown Menu */}
            {chargingSpeedOpen && (
              <div className='absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu' aria-orientation='vertical'>
                  {CHARGING_SPEED_OPTIONS.map(option => (
                    <button
                      key={option}
                      className={`${
                        chargingSpeed === option
                          ? 'bg-gray-100 text-blaupunkt-primary-darker'
                          : 'text-gray-700'
                      } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100`}
                      onClick={() => {
                        setChargingSpeed(option)
                        setChargingSpeedOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Connector Type Filter */}
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Connector:
          </span>
          <div className='relative' ref={dropdownRefs.connectorType}>
            <button
              onClick={() => setConnectorTypeOpen(!connectorTypeOpen)}
              className='flex items-center gap-1.5 bg-blaupunkt-secondary text-white px-3 py-2 rounded-lg font-myriad text-sm font-normal cursor-pointer w-[110px] justify-between'
            >
              <span className="truncate">{connectorType}</span>
              <FiChevronDown className='w-3 h-3 flex-shrink-0' color='white' />
            </button>
            {/* Dropdown Menu */}
            {connectorTypeOpen && (
              <div className='absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu' aria-orientation='vertical'>
                  {CONNECTOR_TYPE_OPTIONS.map(option => (
                    <button
                      key={option}
                      className={`${
                        connectorType === option
                          ? 'bg-gray-100 text-blaupunkt-primary-darker'
                          : 'text-gray-700'
                      } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100`}
                      onClick={() => {
                        setConnectorType(option)
                        setConnectorTypeOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Phase Type Filter */}
        <div className='flex items-center gap-2 flex-shrink-0'>
          <span className='text-blaupunkt-primary-dark font-myriad text-sm font-light whitespace-nowrap'>
            Phase:
          </span>
          <div className='relative' ref={dropdownRefs.phaseType}>
            <button
              onClick={() => setPhaseTypeOpen(!phaseTypeOpen)}
              className='flex items-center gap-1.5 bg-blaupunkt-secondary text-white px-3 py-2 rounded-lg font-myriad text-sm font-normal cursor-pointer w-[130px] justify-between'
            >
              <span className="truncate">{phaseType}</span>
              <FiChevronDown className='w-3 h-3 flex-shrink-0' color='white' />
            </button>
            {/* Dropdown Menu */}
            {phaseTypeOpen && (
              <div className='absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu' aria-orientation='vertical'>
                  {PHASE_TYPE_OPTIONS.map(option => (
                    <button
                      key={option}
                      className={`${
                        phaseType === option
                          ? 'bg-gray-100 text-blaupunkt-primary-darker'
                          : 'text-gray-700'
                      } block w-full text-left px-4 py-2 text-sm`}
                      onClick={() => {
                        setPhaseType(option)
                        setPhaseTypeOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DesktopFilters
