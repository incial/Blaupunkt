'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Breadcrumb from '../Components/Common/Breadcrumb'
import { createSimpleBreadcrumbs } from '../Data/Common/utilities'
import { SAMPLE_PRODUCTS } from '../Components/Products/productsData'
import SearchBar from '../Components/Products/SearchBar'
import FilterDropdown from '../Components/Products/FilterDropdown'
import FiltersContainer from '../Components/Products/FiltersContainer'
import ProductGrid from '../Components/Products/ProductGrid'
import Pagination from '../Components/Products/Pagination'
import { filterProducts, sortProducts } from '../Components/Products/filterUtils'

import { useTranslations } from 'next-intl'

/**
 * Products Page - Main product listing page with filtering and sorting
 */
const Products = () => {
  const t = useTranslations('Products')
  const router = useRouter();
  const searchParams = useSearchParams()

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
    const params = new URLSearchParams(searchParams.toString())
    if (searchQuery) {
      params.set('search', searchQuery)
    } else {
      params.delete('search')
    }
    // Simple update without navigation if possible, or use replace
    // router.replace(`?${params.toString()}`)
    // Actually, original code used setSearchParams from react-router.
    // In Next, we push/replace.
    // Debouncing is better, but sticking to logic:
    // Original effect: if searchQuery changes, update URL.
    // We should probably rely on router.push for explicit changes, but keep the effect sync if needed.
    // However, updating URL on every keystroke (if searchQuery updates on keystroke) is bad.
    // Assuming SearchBar updates searchQuery on keystroke?
    // Let's assume yes.
    // For migration, I'll update URL.
    if (searchQuery !== (searchParams.get('search') || '')) {
      router.replace(`?${params.toString()}`, { scroll: false })
    }
  }, [searchQuery, router, searchParams])

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

  // Handler to navigate to the corresponding category page
  const handleProductCardClick = (product) => {
    // Map product type/category to route path
    // Adjust these mappings as per your route structure
    let path = '/products';
    if (product.type) {
      switch (product.type) {
        case 'Charging Stations':
          path = '/charging-stations';
          break;
        case 'DC Charging Station':
          path = '/dc-charging-station';
          break;
        case 'DC Fast Charging':
          path = '/dc-super-fast-charging-station';
          break;
        case 'Cables':
          path = '/charging-cables';
          break;
        case 'Portable Charging':
          path = '/portable-ev-charging';
          break;
        default:
          path = '/products';
      }
    }
    // Optionally, pass product id or code as state or param
    router.push(path);
  }

  const breadcrumbItems = createSimpleBreadcrumbs('Products')

  return (
    <div className="bg-white">
      {/* Navbar Removed (Handled by Layout) */}

      {/* Main Content */}
      <div className=""> {/* Removed padding pt-24 because layout handles it? No, layout has pt-20. Check if more needed */}
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="sr-only">{t('seo.h1')}</h1>
          <h2 className="sr-only">{t('seo.h2_1')}</h2>
          <h2 className="sr-only">{t('seo.h2_2')}</h2>
          <div className="text-3xl sm:text-4xl font-semibold text-blaupunkt-dark font-myriad mb-6 text-center">
            {t('title')}
          </div>

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
              label={t('filters.itemsPerPage')}
              value={String(productsPerPage)}
              setValue={(v) => { setProductsPerPage(parseInt(v, 10)); setCurrentPage(1) }}
              options={["12", "24", "48", "96"]}
              t={t}
              isItemsPerPage={true}
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
            onProductCardClick={handleProductCardClick}
          />

          {/* Pagination Navigation */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
