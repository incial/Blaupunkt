/* eslint-disable */
import React from 'react'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import FilterDropdown from './FilterDropdown'
import { useTranslations } from 'next-intl'
import {
  SORT_OPTIONS,
  PRODUCT_TYPE_OPTIONS,
  CHARGING_SPEED_OPTIONS,
  CONNECTOR_TYPE_OPTIONS,
  PHASE_TYPE_OPTIONS
} from './productsData'

/**
 * MobileFilters Component - Modal for mobile filter display
 */
const MobileFilters = ({
  showMobileFilters,
  setShowMobileFilters,
  sortBy,
  setSortBy,
  productType,
  setProductType,
  chargingSpeed,
  setChargingSpeed,
  connectorType,
  setConnectorType,
  phaseType,
  setPhaseType,
  productsPerPage,
  setProductsPerPage
}) => {
  const t = useTranslations('Products')

  return (
    <AnimatePresence>
      {showMobileFilters && (
        <div className='lg:hidden fixed inset-0 z-50'>
          {/* Background Overlay with Blur */}
          <motion.div
            className='absolute inset-0 bg-black/60 backdrop-blur-sm'
            onClick={() => setShowMobileFilters(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal Content */}
          <div className='relative flex items-start justify-start h-full'>
            <motion.div
              className='bg-white h-full w-full max-w-sm overflow-y-auto shadow-2xl border-r-2 border-gray-100'
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Modal Header with enhanced styling */}
              <div className='flex items-center justify-between px-6 py-5 border-b-2 border-gray-100 bg-white sticky top-0 z-10 shadow-sm'>
                <div>
                  <h3 className='text-xl font-bold text-blaupunkt-dark font-myriad'>
                    {t('filters.mobileButton')}
                  </h3>
                  <p className='text-sm text-blaupunkt-primary-darker font-myriad mt-1'>
                    Refine your search
                  </p>
                </div>
                <motion.button
                  onClick={() => setShowMobileFilters(false)}
                  className='p-2 text-blaupunkt-primary-darker hover:text-blaupunkt-secondary transition-all duration-200 rounded-full hover:bg-gray-100 border border-gray-200'
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <FiX className='w-6 h-6' />
                </motion.button>
              </div>

              {/* Modal Content with improved spacing */}
              <div className='px-6 py-6 space-y-8 pb-28'>
                {/* Clear Filters Button */}
                <div className='flex justify-end'>
                  <motion.button
                    onClick={() => {
                      setSortBy('Popularity')
                      setProductType('All')
                      setChargingSpeed('All')
                      setConnectorType('All')
                      setPhaseType('All')
                    }}
                    className='text-sm text-blaupunkt-primary-darker hover:text-blaupunkt-primary font-myriad underline transition-colors duration-200'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('filters.clearAll')}
                  </motion.button>
                </div>

                {/* Filter sections with enhanced styling */}
                <div className='space-y-6'>
                  <FilterDropdown
                    label={t('filters.sortBy')}
                    value={t(`filters.options.${sortBy}`)}
                    setValue={setSortBy}
                    options={SORT_OPTIONS}
                    isMobile={true}
                    t={t}
                  />

                  <div className='border-t border-gray-200 pt-6'>
                    <FilterDropdown
                      label={t('filters.type')}
                      value={t(`filters.options.${productType}`)}
                      setValue={setProductType}
                      options={PRODUCT_TYPE_OPTIONS}
                      isMobile={true}
                      t={t}
                    />
                  </div>

                  <div className='border-t border-gray-200 pt-6'>
                    <FilterDropdown
                      label={t('filters.speed')}
                      value={t(`filters.options.${chargingSpeed}`)}
                      setValue={setChargingSpeed}
                      options={CHARGING_SPEED_OPTIONS}
                      isMobile={true}
                      t={t}
                    />
                  </div>

                  <div className='border-t border-gray-200 pt-6'>
                    <FilterDropdown
                      label={t('filters.connector')}
                      value={t(`filters.options.${connectorType}`)}
                      setValue={setConnectorType}
                      options={CONNECTOR_TYPE_OPTIONS}
                      isMobile={true}
                      t={t}
                    />
                  </div>

                  <div className='border-t border-gray-200 pt-6'>
                    <FilterDropdown
                      label={t('filters.phase')}
                      value={t(`filters.options.${phaseType}`)}
                      setValue={setPhaseType}
                      options={PHASE_TYPE_OPTIONS}
                      isMobile={true}
                      t={t}
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Apply Button */}
              <div className='sticky bottom-0 px-6 py-5 bg-white border-t-2 border-gray-100 shadow-lg'>
                <div className='space-y-3'>
                  {/* Items per page - compact */}
                  <div className='border-t border-gray-200 pt-6'>
                    <FilterDropdown
                      label={t('filters.itemsPerPage')}
                      value={String(productsPerPage)}
                      setValue={(v) => setProductsPerPage(parseInt(v, 10))}
                      options={['12', '24', '48', '96']}
                      isMobile={true}
                      t={t}
                      isItemsPerPage={true}
                    />
                  </div>
                  <motion.button
                    onClick={() => setShowMobileFilters(false)}
                    className='w-full bg-blaupunkt-primary text-white px-6 py-4 rounded-xl font-myriad text-base font-semibold hover:bg-blaupunkt-primary transition-all duration-200 shadow-lg'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('filters.apply')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default MobileFilters
