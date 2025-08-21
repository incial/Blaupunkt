import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../Components/Common/Navbar'
import Breadcrumb from '../Components/Common/Breadcrumb'
import { createSimpleBreadcrumbs } from '../Data/Common/utilities'
import { SAMPLE_PRODUCTS } from '../Components/Products/productsData'
import SearchBar from '../Components/Products/SearchBar'
import FilterDropdown from '../Components/Products/FilterDropdown'
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
  const [productsPerPage, setProductsPerPage] = useState(12) // Desktop default
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

  // Group by product type for a more logical default ordering (no extra buttons)
  const typeOrder = ['Charging Stations', 'DC Charging Station', 'DC Fast Charging', 'Cables', 'Portable Charging']
  const grouped = [...filteredProducts].sort((a, b) => {
    const ai = typeOrder.indexOf(a.type)
    const bi = typeOrder.indexOf(b.type)
    const aRank = ai === -1 ? Number.MAX_SAFE_INTEGER : ai
    const bRank = bi === -1 ? Number.MAX_SAFE_INTEGER : bi
    if (aRank !== bRank) return aRank - bRank
    return 0
  })
  const sortedProducts = sortProducts(grouped, sortBy)

  // Pagination logic
  const currentProductsPerPage = productsPerPage
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
  
  const breadcrumbItems = createSimpleBreadcrumbs('Products')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 lg:pt-28">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
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
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
        />

        {/* Items per page selector (desktop only) */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 justify-end">
          <div className="w-36">
            <FilterDropdown
              label="Items"
              value={String(productsPerPage)}
              setValue={(v) => { setProductsPerPage(parseInt(v, 10)); setCurrentPage(1) }}
              options={["12","24","48","96"]}
            />
          </div>
        </div>

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
