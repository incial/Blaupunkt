import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logos } from '../../Utils/assets'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const Navbar = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = path => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='bg-white shadow-lg py-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center justify-center space-x-8'>
            <Link
              to='/products'
              className={`text-base font-normal transition-colors duration-200 ${isActive('/products')
                ? 'text-blue-800 font-medium'
                : 'text-blue-700 hover:text-blue-800'
                }`}
            >
              Products
            </Link>
            <Link
              to='/services'
              className={`text-base font-normal transition-colors duration-200 ${isActive('/services')
                ? 'text-blue-800 font-medium'
                : 'text-blue-700 hover:text-blue-800'
                }`}
            >
              Services
            </Link>
            <Link
              to='/company'
              className={`text-base font-normal transition-colors duration-200 ${isActive('/company')
                ? 'text-blue-800 font-medium'
                : 'text-blue-700 hover:text-blue-800'
                }`}
            >
              Company
            </Link>
            <Link
              to='/contact'
              className={`text-base font-normal transition-colors duration-200 ${isActive('/contact')
                ? 'text-blue-800 font-medium'
                : 'text-blue-700 hover:text-blue-800'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Logo - centered in mobile view */}
          <div className='flex-shrink-0 sm:pr-36 flex justify-center md:justify-start w-full md:w-auto'>
            <Link to='/' className='flex items-center'>
              <img src={logos.main} alt='Blaupunkt' className='h-5 w-auto' />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='flex md:hidden absolute right-4'>
            <button
              onClick={toggleMobileMenu}
              className='bg-blue-100 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-800 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
            >
              <HiOutlineMenuAlt2 className='h-6 w-6' />
            </button>
          </div>

          {/* Search Bar - hidden in mobile view */}
          <div className='hidden md:flex items-center'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='bg-[#96B2D1] text-blue-800 placeholder-blue-800 rounded-xl pr-10 pl-4 py-1.5 text-base font-normal focus:outline-none focus:ring-0 focus:ring-blue-500 focus:bg-blue-100 transition-colors duration-200 w-48'
              />
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                <FiSearch className='h-4 w-4 text-blue-800' />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='/products'
                className={`block px-3 py-2 rounded-md text-base font-normal transition-colors duration-200 ${isActive('/products')
                  ? 'text-blue-800 bg-blue-100'
                  : 'text-blue-700 hover:text-blue-800 hover:bg-blue-100'
                  }`}
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
              <Link
                to='/services'
                className={`block px-3 py-2 rounded-md text-base font-normal transition-colors duration-200 ${isActive('/services')
                  ? 'text-blue-800 bg-blue-100'
                  : 'text-blue-700 hover:text-blue-800 hover:bg-blue-100'
                  }`}
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link
                to='/company'
                className={`block px-3 py-2 rounded-md text-base font-normal transition-colors duration-200 ${isActive('/company')
                  ? 'text-blue-800 bg-blue-100'
                  : 'text-blue-700 hover:text-blue-800 hover:bg-blue-100'
                  }`}
                onClick={toggleMobileMenu}
              >
                Company
              </Link>
              <Link
                to='/contact'
                className={`block px-3 py-2 rounded-md text-base font-normal transition-colors duration-200 ${isActive('/contact')
                  ? 'text-blue-800 bg-blue-100'
                  : 'text-blue-700 hover:text-blue-800 hover:bg-blue-100'
                  }`}
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar