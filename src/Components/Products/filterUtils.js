/**
 * Filter products based on search query and filter criteria
 */
export const filterProducts = (
  products,
  { searchQuery, productType, chargingSpeed, connectorType, phaseType }
) => {
  return products.filter(product => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specifications
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      product.productCode.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = productType === 'All' || product.type === productType
    const matchesSpeed =
      chargingSpeed === 'All' || product.chargingSpeed === chargingSpeed
    const matchesConnector =
      connectorType === 'All' || product.connectorType === connectorType
    const matchesPhase = phaseType === 'All' || product.phaseType === phaseType

    return (
      matchesSearch &&
      matchesType &&
      matchesSpeed &&
      matchesConnector &&
      matchesPhase
    )
  })
}

/**
 * Sort products based on sort option
 */
export const sortProducts = (products, sortBy) => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'Price Low to High':
        return a.price - b.price
      case 'Price High to Low':
        return b.price - a.price
      case 'Newest First':
        return b.id - a.id
      case 'Popularity':
      default:
        return a.id - b.id
    }
  })
}
