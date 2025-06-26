import React from 'react'
import { Link } from 'react-router-dom'
import { logos } from '../../Data/assets.js'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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
    { href: '/products', label: 'Products', },
    { href: '/services', label: 'Services', target: '_blank' },
    {
      href: 'https://blaupunkt.com/company',
      label: 'Company',
      target: '_blank'
    }
  ]

  return (
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
          <div className='flex items-center bg-blaupunkt-secondary-light rounded-2xl px-4 py-2 w-64'>
            {' '}
            <svg
              className='w-4 h-4 text-blaupunkt-primary-darker mr-3'
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
            <input
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='bg-transparent text-blaupunkt-primary-darker placeholder-blaupunkt-primary-darker focus:outline-none flex-1 text-base'
            />
          </div>
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
            <div className='flex items-center bg-blaupunkt-secondary-light rounded-full px-4 py-2 w-64'>
              <svg
                className='w-4 h-4 text-blaupunkt-primary-darker mr-3'
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
              <input
                type='text'
                placeholder='Search'
                className='bg-transparent text-blaupunkt-primary-darker placeholder-blaupunkt-primary-darker focus:outline-none flex-1'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
