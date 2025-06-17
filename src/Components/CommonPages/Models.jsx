import React, { useState, useEffect, useRef, useMemo } from 'react'
import ImageHeader from '../Common/ImageHeader'
import FiltersContainer from '../Products/FiltersContainer'
import ModelCard from './ModelCard'
import { Entirepagedata } from '../../Utils/data'

// Simple icon components
const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const RefreshIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
)

const Models = ({ productImage, category }) => {
  // Filter and sorting state
  const [sortBy, setSortBy] = useState('Popularity')
  const [productType, setProductType] = useState('All')
  const [chargingSpeed, setChargingSpeed] = useState('All')
  const [connectorType, setConnectorType] = useState('All')
  const [phaseType, setPhaseType] = useState('All')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Reset filters function
  const resetFilters = () => {
    setSortBy('Popularity')
    setProductType('All')
    setChargingSpeed('All')
    setConnectorType('All')
    setPhaseType('All')
  }

  // Dropdown menus open/close state
  const [sortByOpen, setSortByOpen] = useState(false)
  const [productTypeOpen, setProductTypeOpen] = useState(false)
  const [chargingSpeedOpen, setChargingSpeedOpen] = useState(false)
  const [connectorTypeOpen, setConnectorTypeOpen] = useState(false)
  const [phaseTypeOpen, setPhaseTypeOpen] = useState(false)

  // Get models data based on category with error handling
  const getModelsData = () => {
    try {
      switch (category) {
        case 'chargingCables':
          return Entirepagedata.chargingCables?.modelsData || { models: [] }
        case 'chargingStations':
          return Entirepagedata.chargingStations?.modelsData || { models: [] }
        case 'dcChargingStation':
          return Entirepagedata.dcChargingStation?.modelsData || { models: [] }
        case 'dcFastChargingStation':
          return Entirepagedata.dcFastChargingStation?.modelsData || { models: [] }
        case 'portableEVCharging':
          return Entirepagedata.portableEVCharging?.modelsData || { models: [] }
        default:
          return { models: [] }
      }
    } catch (error) {
      console.error('Error getting models data:', error)
      return { models: [] }
    }
  }

  const modelsData = getModelsData()
  const [filteredModels, setFilteredModels] = useState(modelsData.models || [])

  // Update filtered models when modelsData changes
  useEffect(() => {
    setFilteredModels(modelsData.models || [])
  }, [modelsData])

  // Get unique filter options from current models data using useMemo
  const { connectorTypes, phaseTypes } = useMemo(() => {
    const models = modelsData.models || []
    
    const connectorTypes = ['All', ...new Set(models.map(model => 
      model.connectorType || model.connector
    ).filter(Boolean))]
    
    const phaseTypes = ['All', ...new Set(models.map(model => 
      model.phaseType || model.phase
    ).filter(Boolean))]
    
    return { connectorTypes, phaseTypes }
  }, [modelsData.models])

  // Filter models based on current filters
  useEffect(() => {
    setIsLoading(true)
    
    // Add a small delay to show loading state for better UX
    const filterTimeout = setTimeout(() => {
      let filtered = modelsData.models || []

      // Apply product type filter (for multi-category filtering)
      if (productType !== 'All') {
        switch (productType) {
          case 'Charging Cables':
            // Only show if current category is charging cables
            if (category !== 'chargingCables') {
              filtered = []
            }
            break
          case 'Charging Stations':
            // Only show if current category is charging stations
            if (!['chargingStations', 'dcChargingStation', 'dcFastChargingStation', 'portableEVCharging'].includes(category)) {
              filtered = []
            }
            break
          case 'Portable Chargers':
            // Only show if current category is portable charging
            if (category !== 'portableEVCharging') {
              filtered = []
            }
            break
        }
      }

      // Apply connector type filter
      if (connectorType !== 'All') {
        filtered = filtered.filter(model => {
          const modelConnectorType = model.connectorType || model.connector || ''
          return modelConnectorType.toLowerCase().includes(connectorType.toLowerCase().replace('type ', ''))
        })
      }

      // Apply phase type filter
      if (phaseType !== 'All') {
        filtered = filtered.filter(model => {
          const modelPhaseType = model.phaseType || model.phase || ''
          return modelPhaseType.toLowerCase().includes(phaseType.toLowerCase().replace(' phase', '').replace('-', '').trim())
        })
      }

      // Apply charging speed filter
      if (chargingSpeed !== 'All') {
        filtered = filtered.filter(model => {
          const current = parseInt(model.current || model.ratedCurrent || '0')
          const power = parseInt(model.power || model.maxPower || '0')
          
          switch (chargingSpeed) {
            case 'Slow':
              return current <= 16 || power <= 11
            case 'Fast':
              return (current > 16 && current <= 32) || (power > 11 && power <= 22)
            case 'Rapid':
              return current > 32 || power > 22
            default:
              return true
          }
        })
      }

      // Sort by the selected criteria
      switch (sortBy) {
        case 'Price: Low to High':
          // Sort by current (lower current = lower price typically)
          filtered.sort((a, b) => {
            const currentA = parseInt(a.current || a.ratedCurrent || '0')
            const currentB = parseInt(b.current || b.ratedCurrent || '0')
            return currentA - currentB
          })
          break
        case 'Price: High to Low':
          // Sort by current (higher current = higher price typically)
          filtered.sort((a, b) => {
            const currentA = parseInt(a.current || a.ratedCurrent || '0')
            const currentB = parseInt(b.current || b.ratedCurrent || '0')
            return currentB - currentA
          })
          break
        case 'Newest':
          // Sort by model code (assuming newer models have higher codes)
          filtered.sort((a, b) => {
            if (a.popular && !b.popular) return -1
            if (!a.popular && b.popular) return 1
            const modelCodeA = a.modelCode || a.name || ''
            const modelCodeB = b.modelCode || b.name || ''
            return modelCodeB.localeCompare(modelCodeA)
          })
          break
        default: // Popularity
          filtered.sort((a, b) => {
            if (a.popular && !b.popular) return -1
            if (!a.popular && b.popular) return 1
            return 0
          })
      }

      setFilteredModels(filtered)
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(filterTimeout)
  }, [modelsData.models, sortBy, productType, chargingSpeed, connectorType, phaseType, category])

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
                    className='flex items-center gap-1.5 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-3 rounded text-sm transition-colors duration-200'
                    onClick={() => setSortByOpen(!sortByOpen)}
                  >
                    <span>Sort: {sortBy}</span>
                    <ChevronDownIcon className='w-3.5 h-3.5' />
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
                    className='flex items-center gap-1.5 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-3 rounded text-sm transition-colors duration-200'
                    onClick={() => setProductTypeOpen(!productTypeOpen)}
                  >
                    <span>Type: {productType}</span>
                    <ChevronDownIcon className='w-3.5 h-3.5' />
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
                    className='flex items-center gap-1.5 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-3 rounded text-sm transition-colors duration-200'
                    onClick={() => setChargingSpeedOpen(!chargingSpeedOpen)}
                  >
                    <span>Speed: {chargingSpeed}</span>
                    <ChevronDownIcon className='w-3.5 h-3.5' />
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
                    className='flex items-center gap-1.5 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-3 rounded text-sm transition-colors duration-200'
                    onClick={() => setConnectorTypeOpen(!connectorTypeOpen)}
                  >
                    <span>Connector: {connectorType}</span>
                    <ChevronDownIcon className='w-3.5 h-3.5' />
                  </button>
                  {/* Dropdown Menu */}
                  {connectorTypeOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                      {connectorTypes.map(option => (
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

                {/* Phase Type Filter */}
                <div className='relative' ref={dropdownRefs.phaseType}>
                  <button
                    className='flex items-center gap-1.5 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-3 rounded text-sm transition-colors duration-200'
                    onClick={() => setPhaseTypeOpen(!phaseTypeOpen)}
                  >
                    <span>Phase: {phaseType}</span>
                    <ChevronDownIcon className='w-3.5 h-3.5' />
                  </button>
                  {/* Dropdown Menu */}
                  {phaseTypeOpen && (
                    <div className='absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {phaseTypes.map(option => (
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

                {/* Reset Filters Button */}
                <button
                  onClick={resetFilters}
                  className='flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded text-sm transition-colors duration-200'
                >
                  <RefreshIcon className='w-3.5 h-3.5' />
                  Reset
                </button>
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

      {/* Product Grid */}
      <div className='container mx-auto px-8 py-8'>
        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {[...Array(8)].map((_, index) => (
              <div key={`skeleton-${index}`} className='animate-pulse'>
                <div className='bg-gray-200 rounded-xl aspect-square mb-4'></div>
                <div className='space-y-2'>
                  <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                  <div className='h-3 bg-gray-200 rounded w-full'></div>
                  <div className='h-3 bg-gray-200 rounded w-5/6'></div>
                  <div className='h-3 bg-gray-200 rounded w-4/5'></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredModels && filteredModels.length > 0 ? (
          <>
            <div className='mb-4 text-gray-600'>
              Showing {filteredModels.length} of {modelsData.models?.length || 0} models
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredModels.map((model, index) => (
                <div key={model.modelCode || model.name || `model-${index}`}>
                  <ModelCard
                    image={productImage}
                    modelCode={model.modelCode || model.name || `Model ${index + 1}`}
                    connectorType={model.connectorType || model.connector || 'N/A'}
                    current={model.current || model.ratedCurrent || model.amperage || 'N/A'}
                    cableLength={model.cableLength || model.dimensions || model.length || 'N/A'}
                    ipClass={model.ipClass || model.protection || model.ipRating || 'N/A'}
                    phaseType={model.phaseType || model.phase || model.phases || 'N/A'}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='text-center py-12'>
            <div className='mb-4'>
              <svg className='w-16 h-16 text-gray-300 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
            </div>
            <p className='text-gray-500 text-lg mb-2'>
              No models found matching your criteria
            </p>
            <p className='text-gray-400 text-sm'>
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Models
