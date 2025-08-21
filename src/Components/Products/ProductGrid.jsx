/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../Common/ProductCard'

/**
 * ProductGrid Component - Grid display of filtered products
 */
const ProductGrid = ({
  products,
  handleClearFilters,
  searchQuery,
  indexOfFirstProduct,
  indexOfLastProduct,
  sortedProducts
}) => {
  // State to track if device is mobile
  const [isMobile, setIsMobile] = useState(false)

  // Use effect to check device width on mount and resize
  useEffect(() => {
    // Function to check if we're on a mobile device based on screen width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640) // 640px is the sm breakpoint in TailwindCSS
    }

    // Check initially
    checkIfMobile()

    // Add event listener to window resize
    window.addEventListener('resize', checkIfMobile)

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <>
      {/* Results Info */}
      <div className='mb-6 text-center'>
        <p className='text-blaupunkt-dark font-myriad text-sm'>
          Showing {Math.min(indexOfFirstProduct + 1, sortedProducts.length)}-
          {Math.min(indexOfLastProduct, sortedProducts.length)} of{' '}
          {sortedProducts.length} products
          {searchQuery && (
            <span className='ml-2 text-blaupunkt-secondary'>
              for "{searchQuery}"
            </span>
          )}
        </p>
      </div>{' '}
      {/* Products Grid Container */}
      {products.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              specifications={product.specifications}
              productCode={product.productCode}
              addBorder={isMobile}
            />
          ))}
        </div>
      ) : (
        <div className='text-center py-16'>
          <p className='text-blaupunkt-dark font-myriad text-lg mb-4'>
            No products found matching your criteria
          </p>
          <motion.button
            onClick={handleClearFilters}
            className='bg-blaupunkt-primary text-white px-6 py-2 rounded-lg font-myriad hover:bg-blaupunkt-primary transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear All Filters
          </motion.button>
        </div>
      )}
    </>
  )
}

export default ProductGrid
