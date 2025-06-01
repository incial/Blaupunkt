import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logos } from '../../Utils/assets'
import { FiSearch, FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  const isActive = path => location.pathname === path

  return (
    <nav className='bg-white shadow-lg py-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Navigation Links */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/products'
              className={`text-base font-normal transition-colors duration-200 ${
                isActive('/products')
                  ? 'text-blue-800 font-medium'
                  : 'text-blue-700 hover:text-blue-800'
              }`}
            >
              Products
            </Link>
            <Link
              to='/services'
              className={`text-base font-normal transition-colors duration-200 ${
                isActive('/services')
                  ? 'text-blue-800 font-medium'
                  : 'text-blue-700 hover:text-blue-800'
              }`}
            >
              Services
            </Link>
            <Link
              to='/company'
              className={`text-base font-normal transition-colors duration-200 ${
                isActive('/company')
                  ? 'text-blue-800 font-medium'
                  : 'text-blue-700 hover:text-blue-800'
              }`}
            >
              Company
            </Link>
          </div>
          {/* Logo */}{' '}
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center'>
              <img src={logos.main} alt='Blaupunkt' className='h-5 w-auto' />
            </Link>
          </div>
          {/* Search Bar */}
          <div className='hidden md:flex items-center'>
            {' '}
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
          </div>{' '}
          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button className='bg-blue-100 inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-800 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
              <FiMenu className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
