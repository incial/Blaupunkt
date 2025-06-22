import React from 'react'
import ProductCard from './Common/ProductCard'
import { chargingImgs } from '../Data/assets.js'
import { useNavigate } from 'react-router-dom'

const OurProducts = () => {
  const navigate = useNavigate()
  const productData = [
    {
      id: 1,
      title: 'EV Charging Cables',
      specifications: '22 kWh | 8 Meter | 3 Phase | Type 2',
      productCode: 'A3P32AT2',
      image: chargingImgs.productImage
    },
    {
      id: 2,
      title: 'Charging Stations',
      specifications: '7.4 kWh | Wall Mount | AC Charging',
      productCode: 'CS7400AC',
      image: chargingImgs.productImage
    },
    {
      id: 3,
      title: 'DC Charging Station',
      specifications: '50 kWh | Fast Charging | CCS2',
      productCode: 'DC50CCS2',
      image: chargingImgs.productImage
    }
  ]
  return (
    <div
      className='py-8 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8'
      style={{ backgroundColor: '#96B2D1' }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 className='text-3xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20'>
          Our Products
        </h2>{' '}
        {/* Products Grid/Scroll */}
        <div className='block sm:hidden'>
          {/* Mobile: Horizontal Scroll - matching Figma design */}
          <div className='flex overflow-x-auto gap-6 px-6 pb-4 scrollbar-hide snap-x snap-mandatory'>
            {productData.map(product => (
              <div key={product.id} className='flex-none snap-center w-[280px]'>
                <ProductCard
                  title={product.title}
                  specifications={product.specifications}
                  productCode={product.productCode}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid Layout */}
        <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center max-w-6xl mx-auto'>
          {productData.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              specifications={product.specifications}
              productCode={product.productCode}
              image={product.image}
            />
          ))}
        </div>
        {/* View All Products Button */}
        <div className='flex justify-center mt-12 sm:mt-16 lg:mt-20'>
          <button
            className='bg-white text-blue-800 px-6 py-3 sm:px-8 sm:py-4 rounded-3xl font-semibold text-base sm:text-lg lg:text-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer'
            onClick={() => navigate('/products')}
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurProducts
