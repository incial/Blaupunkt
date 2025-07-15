/* eslint-disable */
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

/**
 * Pagination Component - Navigation for product pages
 */
const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage
}) =>
  totalPages > 1 && (
    <div className='flex items-center justify-center gap-4 mt-8'>
      {/* Previous Button */}
      <motion.button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-myriad text-sm transition-colors ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blaupunkt-secondary text-white hover:bg-blaupunkt-secondary/90'
        }`}
        whileHover={currentPage !== 1 ? { scale: 1.03 } : {}}
        whileTap={currentPage !== 1 ? { scale: 0.97 } : {}}
      >
        <FiChevronLeft className='w-4 h-4' />
        Previous
      </motion.button>

      {/* Page Info */}
      <div className='flex items-center gap-2'>
        <span className='text-blaupunkt-dark font-myriad text-sm'>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Next Button */}
      <motion.button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-myriad text-sm transition-colors ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blaupunkt-secondary text-white hover:bg-blaupunkt-secondary/90'
        }`}
        whileHover={currentPage !== totalPages ? { scale: 1.03 } : {}}
        whileTap={currentPage !== totalPages ? { scale: 0.97 } : {}}
      >
        Next
        <FiChevronRight className='w-4 h-4' />
      </motion.button>
    </div>
  )

export default Pagination
