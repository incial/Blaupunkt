
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logos } from '../../Utils/assets'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logos } from '../../Data/assets.js'
import { useState, useEffect } from 'react'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigate = useNavigate()


  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to products page with search query
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      // Close mobile menu if open
      setIsMenuOpen(false)
      // Clear search input after a brief delay to show the search was performed
      setTimeout(() => {
        setSearchQuery('')
      }, 100)
    }
  }

  // Handle search input keydown
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    } // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])
  const navigationLinks = [
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/company', label: 'Company' }
  ]

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

    <>
      {' '}
      {/* Desktop Navigation */}
      <nav className='hidden lg:flex items-center px-16 py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
        {/* Navigation Links - Left */}{' '}
        <div className='flex space-x-8 flex-1'>
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className='text-blaupunkt-primary-dark hover:text-blaupunkt-primary transition-colors duration-300 font-normal text-base'

            >
              {link.label}
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

          ))}
        </div>{' '}
        {/* Logo - Center */}
        <div className='h-auto w-42 cursor-pointer flex-shrink-0'>
          <Link to='/'>
            <img src={logos.main} alt='Blaupunkt' />
          </Link>
        </div>
        {/* Search Bar - Right */}
        <div className='flex-1 flex justify-end'>
          <form onSubmit={handleSearch} className='flex items-center bg-blaupunkt-secondary-light rounded-2xl px-4 py-2 w-64'>
            {' '}
            <button type="submit" className="mr-3">
              <svg
                className='w-4 h-4 text-blaupunkt-primary-darker hover:text-blaupunkt-primary transition-colors cursor-pointer'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
            <input
              type='text'
              placeholder='Search products...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className='bg-transparent text-blaupunkt-primary-darker placeholder-blaupunkt-primary-darker focus:outline-none flex-1 text-base'
            />
          </form>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className='lg:hidden items-center flex justify-between px-8 py-8 md:px-12 bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
        {/* Empty div for spacing */}
        <div className='w-8'></div>{' '}
        <div className='h-auto w-40 md:w-24 cursor-pointer'>
          {/* Logo */}
          <Link to='/'>
            <img src={logos.main} alt='Blaupunkt' />
          </Link>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='relative w-6 h-4 '>
            <span
              className={`absolute h-0.5 w-full bg-blaupunkt-primary-dark transition-all duration-300 ${
                isMenuOpen ? 'top-2 rotate-45' : 'top-1'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-blaupunkt-primary-dark transition-all duration-300 ${
                isMenuOpen ? 'top-2 -rotate-45' : 'top-3'
              }`}
            ></span>
          </div>
        </div>
      </nav>{' '}
      {/* Full-screen navigation menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-8 overflow-hidden'>
          {/* Close button */}
          <div
            className='absolute top-8 right-8 md:top-12 md:right-12 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}
          >
            <div className='relative w-6 h-6'>
              <span className='absolute top-2.5 h-0.5 w-full bg-blaupunkt-primary-dark rotate-45 transition-all duration-300'></span>
              <span className='absolute top-2.5 h-0.5 w-full bg-blaupunkt-primary-dark -rotate-45 transition-all duration-300'></span>
            </div>
          </div>{' '}
          {/* Navigation Links */}
          <nav className='flex flex-col items-center space-y-14 text-xl md:text-3xl lg:text-4xl font-normal'>
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                target={link.target}
                rel={
                  link.target === '_blank' ? 'noopener noreferrer' : undefined
                }
                className='text-blaupunkt-primary-dark hover:text-blaupunkt-primary transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Search bar */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <form onSubmit={handleSearch} className='flex items-center bg-blaupunkt-secondary-light rounded-full px-4 py-2 w-64'>
              <button type="submit" className="mr-3">
                <svg
                  className='w-4 h-4 text-blaupunkt-primary-darker hover:text-blaupunkt-primary transition-colors cursor-pointer'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
              <input
                type='text'
                placeholder='Search products...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='bg-[#96B2D1] text-blue-800 placeholder-blue-800 rounded-xl pr-10 pl-4 py-1.5 text-base font-normal focus:outline-none focus:ring-0 focus:ring-blue-500 focus:bg-blue-100 transition-colors duration-200 w-48'
              />
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                <FiSearch className='h-4 w-4 text-blue-800' />
              </div>
            </div>

                onKeyDown={handleSearchKeyDown}
                className='bg-transparent text-blaupunkt-primary-darker placeholder-blaupunkt-primary-darker focus:outline-none flex-1'
              />
            </form>

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
    </>
  )
}

export default Navbar