import React, { useState, useEffect, useRef } from 'react'
import ImageHeader from '../Common/ImageHeader'
import FiltersContainer from '../Products/FiltersContainer'

const Models = () => {
  // Filter and sorting state
  const [sortBy, setSortBy] = useState('Popularity')
  const [productType, setProductType] = useState('All')
  const [chargingSpeed, setChargingSpeed] = useState('All')
  const [connectorType, setConnectorType] = useState('All')
  const [phaseType, setPhaseType] = useState('All')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Dropdown menus open/close state
  const [sortByOpen, setSortByOpen] = useState(false)
  const [productTypeOpen, setProductTypeOpen] = useState(false)
  const [chargingSpeedOpen, setChargingSpeedOpen] = useState(false)
  const [connectorTypeOpen, setConnectorTypeOpen] = useState(false)
  const [phaseTypeOpen, setPhaseTypeOpen] = useState(false)

  // Close dropdowns when clicking outside
  const dropdownRefs = {
    sortBy: useRef(null),
    productType: useRef(null),
    chargingSpeed: useRef(null),
    connectorType: useRef(null),
    phaseType: useRef(null)
  }

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
    <div className='w-full py-6'>
      {/* Header and Filters Container */}
      <div className='w-full'>
        {/* Mobile Layout - Stacked */}
        <div className='block lg:hidden'>
          <ImageHeader
            title='Models'
            backgroundImage={'/src/assets/Images/charger.jpg'}
            showBackgroundImage={true}
            textColor={{
              mobile: 'text-white',
              desktop: 'text-gray-800'
            }}
            className='font-semibold md:text-left px-40'
            desktopClassName='py-0'
            mobileClassName='py-0'
          />

          {/* Filters */}
          <FiltersContainer
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
            productType={productType}
            setProductType={setProductType}
            chargingSpeed={chargingSpeed}
            setChargingSpeed={setChargingSpeed}
            connectorType={connectorType}
            setConnectorType={setConnectorType}
            phaseType={phaseType}
            setPhaseType={setPhaseType}
          />
        </div>

        {/* Desktop Layout - Single line with heading and filters */}
        <div className='hidden lg:block'>
          <div className='container mx-auto px-8'>
            <div className='flex flex-row items-center justify-between py-4'>
              {/* Models Title */}
              <div>
                <h1 className='text-4xl font-semibold text-gray-800'>Models</h1>
              </div>

              {/* All filters as dropdown buttons in a single row */}
              <div className='flex items-center gap-4'>
                {/* Sort By Filter */}
                <div className='relative' ref={dropdownRefs.sortBy}>
                  <button
                    className='flex items-center gap-2 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200'
                    onClick={() => setSortByOpen(!sortByOpen)}
                  >
                    <span>Sort By: {sortBy}</span>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {sortByOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {[
                          'Popularity',
                          'Price: Low to High',
                          'Price: High to Low',
                          'Newest'
                        ].map(option => (
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

                {/* Product Type Filter */}
                <div className='relative' ref={dropdownRefs.productType}>
                  <button
                    className='flex items-center gap-2 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200'
                    onClick={() => setProductTypeOpen(!productTypeOpen)}
                  >
                    <span>Product Type: {productType}</span>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {productTypeOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {[
                          'All',
                          'Charging Stations',
                          'Charging Cables',
                          'Portable Chargers'
                        ].map(option => (
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

                {/* Charging Speed Filter */}
                <div className='relative' ref={dropdownRefs.chargingSpeed}>
                  <button
                    className='flex items-center gap-2 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200'
                    onClick={() => setChargingSpeedOpen(!chargingSpeedOpen)}
                  >
                    <span>Charging Speed: {chargingSpeed}</span>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {chargingSpeedOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {['All', 'Slow', 'Fast', 'Rapid'].map(option => (
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

                {/* Connector Type Filter */}
                <div className='relative' ref={dropdownRefs.connectorType}>
                  <button
                    className='flex items-center gap-2 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200'
                    onClick={() => setConnectorTypeOpen(!connectorTypeOpen)}
                  >
                    <span>Connector Type: {connectorType}</span>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {connectorTypeOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {['All', 'Type 1', 'Type 2', 'CCS', 'CHAdeMO'].map(
                          option => (
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
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Phase Type Filter */}
                <div className='relative' ref={dropdownRefs.phaseType}>
                  <button
                    className='flex items-center gap-2 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200'
                    onClick={() => setPhaseTypeOpen(!phaseTypeOpen)}
                  >
                    <span>Phase Type: {phaseType}</span>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  {phaseTypeOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {['All', 'Single Phase', 'Three Phase'].map(option => (
                          <button
                            key={option}
                            className={`${
                              phaseType === option
                                ? 'bg-gray-100 text-blaupunkt-primary-darker'
                                : 'text-gray-700'
                            } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100`}
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

          {/* Hidden FiltersContainer to maintain state but not show the default UI */}
          <div className='hidden'>
            <FiltersContainer
              showMobileFilters={showMobileFilters}
              setShowMobileFilters={setShowMobileFilters}
              sortBy={sortBy}
              setSortBy={setSortBy}
              productType={productType}
              setProductType={setProductType}
              chargingSpeed={chargingSpeed}
              setChargingSpeed={setChargingSpeed}
              connectorType={connectorType}
              setConnectorType={setConnectorType}
              phaseType={phaseType}
              setPhaseType={setPhaseType}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models
