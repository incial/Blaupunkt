import React, { useState, useRef, useEffect, useMemo } from 'react'

const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
)

const FiltersContainer = ({
  showMobileFilters,
  setShowMobileFilters,
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
}) => {  const [dropdownsOpen, setDropdownsOpen] = useState({
    sortBy: false,
    productType: false,
    chargingSpeed: false,
    connectorType: false,
    phaseType: false
  })

  const sortByRef = useRef(null)
  const productTypeRef = useRef(null)
  const chargingSpeedRef = useRef(null)
  const connectorTypeRef = useRef(null)
  const phaseTypeRef = useRef(null)

  const dropdownRefs = useMemo(() => ({
    sortBy: sortByRef,
    productType: productTypeRef,
    chargingSpeed: chargingSpeedRef,
    connectorType: connectorTypeRef,
    phaseType: phaseTypeRef
  }), [sortByRef, productTypeRef, chargingSpeedRef, connectorTypeRef, phaseTypeRef])
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs).forEach(key => {
        if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
          setDropdownsOpen(prev => ({ ...prev, [key]: false }))
        }
      })
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownRefs])

  const toggleDropdown = (dropdown) => {
    setDropdownsOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }))
  }

  const sortOptions = ['Popularity', 'Price: Low to High', 'Price: High to Low', 'Newest First']
  const productTypeOptions = ['All', 'AC Charging', 'DC Charging', 'Cables', 'Portable']
  const chargingSpeedOptions = ['All', 'Fast', 'Standard', 'Slow']
  const connectorTypeOptions = ['All', 'Type 1', 'Type 2', 'CCS', 'CHAdeMO']
  const phaseTypeOptions = ['All', 'Single Phase', 'Three Phase']

  const FilterDropdown = ({ 
    label, 
    value, 
    setValue, 
    options, 
    dropdownKey 
  }) => (
    <div className='relative' ref={dropdownRefs[dropdownKey]}>
      <button
        className='flex items-center justify-between w-full gap-1.5 bg-blaupunkt-primary-darker hover:bg-blaupunkt-primary-dark text-white py-2 px-3 rounded text-sm transition-colors duration-200'
        onClick={() => toggleDropdown(dropdownKey)}
      >
        <span>{label}: {value}</span>
        <ChevronDownIcon className='w-3.5 h-3.5' />
      </button>
      {dropdownsOpen[dropdownKey] && (
        <div className='absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-10'>
          {options.map((option) => (
            <button
              key={option}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                value === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => {
                setValue(option)
                setDropdownsOpen(prev => ({ ...prev, [dropdownKey]: false }))
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  if (!showMobileFilters) {
    return null
  }

  return (
    <div className='lg:hidden'>
      {/* Mobile Filter Overlay */}
      <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setShowMobileFilters(false)} />
      
      {/* Mobile Filter Panel */}
      <div className='fixed bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto'>
        <div className='p-4'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Filters</h3>
            <button
              onClick={() => setShowMobileFilters(false)}
              className='text-gray-500 hover:text-gray-700'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          <div className='space-y-4'>
            <FilterDropdown
              label="Sort"
              value={sortBy}
              setValue={setSortBy}
              options={sortOptions}
              dropdownKey="sortBy"
            />

            <FilterDropdown
              label="Product Type"
              value={productType}
              setValue={setProductType}
              options={productTypeOptions}
              dropdownKey="productType"
            />

            <FilterDropdown
              label="Charging Speed"
              value={chargingSpeed}
              setValue={setChargingSpeed}
              options={chargingSpeedOptions}
              dropdownKey="chargingSpeed"
            />

            <FilterDropdown
              label="Connector Type"
              value={connectorType}
              setValue={setConnectorType}
              options={connectorTypeOptions}
              dropdownKey="connectorType"
            />

            <FilterDropdown
              label="Phase Type"
              value={phaseType}
              setValue={setPhaseType}
              options={phaseTypeOptions}
              dropdownKey="phaseType"
            />
          </div>

          <div className='mt-6 flex gap-3'>
            <button
              onClick={() => {
                setSortBy('Popularity')
                setProductType('All')
                setChargingSpeed('All')
                setConnectorType('All')
                setPhaseType('All')
              }}
              className='flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors duration-200'
            >
              Clear All
            </button>
            <button
              onClick={() => setShowMobileFilters(false)}
              className='flex-1 py-2 px-4 bg-blaupunkt-primary-darker text-white rounded hover:bg-blaupunkt-primary-dark transition-colors duration-200'
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersContainer
