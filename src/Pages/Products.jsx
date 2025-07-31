import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../Components/Common/Navbar'
import { SAMPLE_PRODUCTS } from '../Components/Products/productsData'
import SearchBar from '../Components/Products/SearchBar'
import FiltersContainer from '../Components/Products/FiltersContainer'
import ProductGrid from '../Components/Products/ProductGrid'
import Pagination from '../Components/Products/Pagination'
import { filterProducts, sortProducts } from '../Components/Products/filterUtils'

/**
 * Products Page - Main product listing page with filtering and sorting
 */
const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // Filter and sorting state
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Popularity')
  const [productType, setProductType] = useState('All')
  const [chargingSpeed, setChargingSpeed] = useState('All')
  const [connectorType, setConnectorType] = useState('All')
  const [phaseType, setPhaseType] = useState('All')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12) // Desktop: 12 products (3 rows × 4 columns)
  const [isMobile, setIsMobile] = useState(false)

  // Initialize search query from URL parameters
  useEffect(() => {
    const searchFromUrl = searchParams.get('search')
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl)
      // Reset to first page when search is performed
      setCurrentPage(1)
    }
  }, [searchParams])

  // Update URL when search query changes
  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ search: searchQuery })
    } else {
      setSearchParams({})
    }
  }, [searchQuery, setSearchParams])

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Apply filters and sorting
  const filteredProducts = filterProducts(SAMPLE_PRODUCTS, {
    searchQuery,
    productType,
    chargingSpeed,
    connectorType,
    phaseType
  })

  const sortedProducts = sortProducts(filteredProducts, sortBy)

  // Pagination logic
  const currentProductsPerPage = isMobile ? 6 : productsPerPage // Mobile: 6, Desktop: 12
  const indexOfLastProduct = currentPage * currentProductsPerPage
  const indexOfFirstProduct = indexOfLastProduct - currentProductsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(sortedProducts.length / currentProductsPerPage)

  // Navigation handlers
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [productType, chargingSpeed, connectorType, phaseType, searchQuery, sortBy])

  // Reset to page 1 when switching between mobile and desktop
  useEffect(() => {
    setCurrentPage(1)
  }, [isMobile])

  // Clear all filters and reset to defaults
  const handleClearFilters = () => {
    setSearchQuery('')
    setProductType('All')
    setChargingSpeed('All')
    setConnectorType('All')
    setPhaseType('All')
    setSortBy('Popularity')
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 lg:pt-28">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm overflow-x-auto">
            <span className="text-blaupunkt-secondary-light font-myriad whitespace-nowrap">
              <Link
                to="/"
                className="text-blaupunkt-secondary-light hover:text-blaupunkt-secondary transition-colors whitespace-nowrap font-myriad"
              >
                Home
              </Link>
            </span>
            <span className="text-blaupunkt-secondary-light font-myriad">/</span>
            <span className="text-blaupunkt-secondary font-myriad whitespace-nowrap">Products</span>
          </div>
        </div>


        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-blaupunkt-dark font-myriad mb-6 text-center">
            All Products
          </h1>

          {/* Search Bar */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Filters */}
        <FiltersContainer
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
          productType={productType}
          setProductType={setProductType}
          chargingSpeed={chargingSpeed}
          setChargingSpeed={setChargingSpeed}
          connectorType={connectorType}
          setConnectorType={setConnectorType}
          phaseType={phaseType}
          setPhaseType={setPhaseType}
        />

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ProductGrid
            products={currentProducts}
            handleClearFilters={handleClearFilters}
            searchQuery={searchQuery}
            indexOfFirstProduct={indexOfFirstProduct}
            indexOfLastProduct={indexOfLastProduct}
            sortedProducts={sortedProducts}
          />

          {/* Pagination Navigation */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </main>
    </div>
  )
}

export default Products
