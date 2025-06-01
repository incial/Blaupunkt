import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { whiteLogo } from '../../Utils/assets'
import { FiChevronDown } from 'react-icons/fi'

// Constants
const REGIONS = [
  { name: 'International' },
  { name: 'العربية (Arabic)' },
  { name: 'Asia' },
  { name: 'Australia' },
  { name: 'Belgium' },
  { name: 'China' },
  { name: 'Eastern Europe' },
  { name: 'France' },
  { name: 'Germany' },
  { name: 'India' },
  { name: 'Latin America' },
  { name: 'Middle East' },
  { name: 'Netherlands' },
  { name: 'Poland' },
  { name: 'South Africa' },
  { name: 'Spain' },
  { name: 'Taiwan' },
  { name: 'Thailand' },
  { name: 'Türkiye' },
  { name: 'United States' },
  { name: '대한민국 (South Korea)' }
]

const FOOTER_LINKS = [
  { to: '/international', text: 'International' },
  { to: '/imprint', text: 'Imprint' },
  { to: '/search', text: 'Search' },
  { to: '/privacy', text: 'Privacy Statement' }
]

const Footer = () => {
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('International')

  const toggleDropdown = () => setIsRegionDropdownOpen(!isRegionDropdownOpen)

  const selectRegion = regionName => {
    setSelectedRegion(regionName)
    setIsRegionDropdownOpen(false)
  }

  const getRegionButtonClass = region => {
    let backgroundClass = ''
    if (selectedRegion === region.name) {
      backgroundClass = 'bg-gray-600'
    } else if (region.highlighted) {
      backgroundClass = 'bg-blue-600'
    }

    return `w-full px-3 py-1 text-left text-sm text-blaupunkt-secondary-light font-myriad transition-all duration-200 ease-in-out hover:bg-gray-700 hover:text-white hover:shadow-md ${backgroundClass}`
  }
  return (
    <footer className='relative text-white py-14 bg-blaupunkt-dark'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-32'>
          {/* Left Section - Logo */}
          <div className='flex justify-start'>
            <Link to='/'>
              <img
                src={whiteLogo}
                alt='Blaupunkt Logo'
                className='h-6 w-auto'
              />
            </Link>
          </div>

          {/* Middle Section - Region Selector */}
          <div className='flex justify-center'>
            <div className='flex flex-col'>
              <span className='text-xs font-normal mb-2 text-blaupunkt-secondary-light font-myriad'>
                Select region:
              </span>
              <div className='relative'>
                <button
                  onClick={toggleDropdown}
                  className='flex items-center justify-between px-5 py-2 border border-blaupunkt-secondary-light text-blaupunkt-secondary-light rounded-lg text-sm bg-transparent min-w-[120px] font-myriad'
                >
                  <span>{selectedRegion}</span>
                  <FiChevronDown
                    className={`w-4 h-4 ml-2 transition-transform ${
                      isRegionDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isRegionDropdownOpen && (
                  <div className='absolute bottom-full left-0 mb-1 w-full border border-blaupunkt-secondary-light bg-blaupunkt-dark rounded-lg py-2 z-10'>
                    {REGIONS.map((region, index) => (
                      <button
                        key={index}
                        className={getRegionButtonClass(region)}
                        onClick={() => selectRegion(region.name)}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Footer Links */}
          <div className='flex justify-end'>
            <div className='grid grid-cols-2 gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4'>
              {FOOTER_LINKS.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className='text-base text-blaupunkt-secondary-light hover:text-blaupunkt-white transition-colors duration-200 font-myriad'
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
