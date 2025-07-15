import React from 'react'
import ProductCard from './Common/ProductCard'
import { useNavigate } from 'react-router-dom'
import { chargingCablesData } from '../Data/ChargingCables/data.js'
import { chargingStationsData } from '../Data/ChargingStations/data.js'
import { dcChargingStationData } from '../Data/DCChargingStation/data.js'

const OurProducts = () => {
  const navigate = useNavigate()
    // Get the first product model from each category
  const getFirstProduct = (categoryData, categoryLink) => {
    let firstModel = null;
    
    // For charging cables
    if (categoryData.modelsData?.models?.length > 0) {
      firstModel = categoryData.modelsData.models[0];
    }
    // For charging stations
    else if (categoryData.modelsData?.sections?.length > 0) {
      const firstSection = categoryData.modelsData.sections[0];
      if (firstSection.categories?.length > 0 && firstSection.categories[0].models?.length > 0) {
        firstModel = firstSection.categories[0].models[0];
      }
    }
    
    if (firstModel) {
      return {
        title: categoryData.title,
        specifications: `${firstModel.current || firstModel.maximumPower || ''} | ${firstModel.cableLength || ''} | ${firstModel.phaseType || ''} | ${firstModel.connectorType || ''}`.replace(/^\s*\|\s*|\s*\|\s*$/g, '').replace(/\s*\|\s*\|\s*/g, ' | '),
        productCode: firstModel.modelCode || '',
        image: firstModel.image || categoryData.mainImage,
        link: categoryLink
      };
    }
    
    return {
      title: categoryData.title,
      specifications: 'See details',
      productCode: '',
      image: categoryData.mainImage,
      link: categoryLink
    };
  };

  const productData = [
    {
      id: 1,
      ...getFirstProduct(chargingCablesData, '/charging-cables')
    },
    {
      id: 2,
      ...getFirstProduct(chargingStationsData, '/charging-stations')
    },
    {
      id: 3,
      ...getFirstProduct(dcChargingStationData, '/dc-charging-station')
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
                  onClick={() => navigate(product.link)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid Layout */}
        <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center max-w-6xl mx-auto'>
          {productData.map(product => (
            <div key={product.id} className='w-full flex justify-center'>
              <ProductCard
                title={product.title}
                specifications={product.specifications}
                productCode={product.productCode}
                image={product.image}
                onClick={() => navigate(product.link)}
              />
            </div>
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
