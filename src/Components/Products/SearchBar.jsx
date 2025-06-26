/* eslint-disable */
import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

/**
 * SearchBar Component - Search bar for filtering products
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="w-full mb-8">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FiSearch className="w-5 h-5 text-blaupunkt-primary-darker" />
      </div>
      <input
        type="text"
        placeholder="Search products, specifications, or codes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border-2 border-blaupunkt-secondary-light rounded-2xl bg-white text-blaupunkt-primary-darker placeholder-blaupunkt-primary-darker focus:outline-none focus:border-blaupunkt-secondary font-myriad text-sm sm:text-base"
      />
      {searchQuery && (
        <motion.button
          onClick={() => setSearchQuery('')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blaupunkt-primary-darker hover:text-blaupunkt-secondary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiX className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  </div>
)

export default SearchBar