import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logos } from '../../Utils/assets'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = path => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className='bg-white shadow-lg py-3 relative z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-8'>
              <Link
                to='/products'
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive('/products')
                    ? 'text-blaupunkt-primary-dark font-medium'
                    : 'text-blaupunkt-primary-dark hover:text-blaupunkt-primary'
                }`}
              >
                Products
              </Link>
              <Link
                to='/services'
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive('/services')
                    ? 'text-blaupunkt-primary-dark font-medium'
                    : 'text-blaupunkt-primary-dark hover:text-blaupunkt-primary'
                }`}
              >
                Services
              </Link>
              <Link
                to='/company'
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive('/company')
                    ? 'text-blaupunkt-primary-dark font-medium'
                    : 'text-blaupunkt-primary-dark hover:text-blaupunkt-primary'
                }`}
              >
                Company
              </Link>
            </div>{' '}
            {/* Logo */}
            <div className='flex-shrink-0 hidden md:block'>
              <Link to='/' className='flex items-center'>
                <img src={logos.main} alt='Blaupunkt' className='h-5 w-auto' />
              </Link>
            </div>
            {/* Search Bar */}
            <div className='hidden md:flex items-center'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FiSearch className='h-4 w-4 text-blue-800' />
                </div>
                <input
                  type='text'
                  placeholder='Search'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='bg-blue-200 text-blue-800 placeholder-blue-800 rounded-2xl pl-10 pr-4 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-100 transition-colors duration-200 w-48'
                />
              </div>
            </div>
            {/* Mobile Layout */}
            <div className='md:hidden flex items-center justify-between w-full relative'>
              {/* Logo - Centered */}
              <div className='absolute left-1/2 transform -translate-x-1/2'>
                <Link to='/' className='flex items-center'>
                  <img
                    src={logos.main}
                    alt='Blaupunkt'
                    className='h-5 w-auto'
                  />
                </Link>
              </div>{' '}
              {/* Mobile menu button - Right corner */}
              <div className='ml-auto'>
                <button
                  onClick={toggleMobileMenu}
                  className='inline-flex items-center justify-center p-2 focus:outline-none'
                >
                  {/* Animated Menu/Cross Icon */}
                  <div className='w-6 h-6 flex flex-col justify-center space-y-1 relative'>
                    <div
                      className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                          ? 'rotate-45 translate-y-1'
                          : 'rotate-0 translate-y-0'
                      }`}
                    ></div>
                    <div
                      className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                          ? '-rotate-45 -translate-y-1'
                          : 'rotate-0 translate-y-0'
                      }`}
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 z-40 md:hidden'
          onClick={closeMobileMenu}
        />
      )}{' '}
      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex flex-col h-full py-10'>
          {/* Header */}
          <div className='flex items-center justify-center p-6 relative'>
            <img src={logos.main} alt='Blaupunkt' className='h-5 w-auto' />
            <button
              onClick={closeMobileMenu}
              className='absolute right-6 p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200'
            >
              <FiX className='h-6 w-6' />
            </button>
          </div>
          {/* Navigation Links - Centered */}
          <div className='flex-1 flex items-center justify-center px-6'>
            <div className='text-center space-y-20'>
              <Link
                to='/products'
                onClick={closeMobileMenu}
                className={`block text-xl font-normal transition-colors duration-200 ${
                  isActive('/products')
                    ? 'text-blue-800'
                    : 'text-blue-700 hover:text-blue-800'
                }`}
              >
                Products
              </Link>
              <Link
                to='/services'
                onClick={closeMobileMenu}
                className={`block text-xl font-normal transition-colors duration-200 ${
                  isActive('/services')
                    ? 'text-blue-800'
                    : 'text-blue-700 hover:text-blue-800'
                }`}
              >
                Services
              </Link>
              <Link
                to='/company'
                onClick={closeMobileMenu}
                className={`block text-xl font-normal transition-colors duration-200 ${
                  isActive('/company')
                    ? 'text-blue-800'
                    : 'text-blue-700 hover:text-blue-800'
                }`}
              >
                Company
              </Link>
            </div>
          </div>{' '}
          {/* Mobile Search - Bottom */}
          <div className='p-6 flex justify-center'>
            <div className='relative w-4/5'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <FiSearch className='h-5 w-5 text-blue-800' />
              </div>
              <input
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full items-center bg-blue-200 text-blue-800 placeholder-blue-800 rounded-2xl pl-12 pr-4 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-100 transition-colors duration-200'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
