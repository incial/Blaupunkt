/**
 * Calculate similarity between two strings using Levenshtein distance
 * Returns a value between 0 and 1, where 1 is an exact match
 */
const calculateSimilarity = (str1, str2) => {
  if (!str1 || !str2) return 0;
  
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  // If one string is contained in the other, give it a high similarity score
  if (s1.includes(s2) || s2.includes(s1)) {
    return 0.8;
  }
  
  // Calculate Levenshtein distance
  const matrix = [];
  for (let i = 0; i <= s2.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= s1.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  const distance = matrix[s2.length][s1.length];
  const maxLength = Math.max(s1.length, s2.length);
  return 1 - (distance / maxLength);
};

/**
 * Check if search query matches any field in the product with fuzzy matching
 */
const fuzzyMatch = (product, searchQuery) => {
  if (!searchQuery.trim()) return true;
  
  const query = searchQuery.toLowerCase().trim();
  const searchableFields = [
    product.title,
    product.specifications,
    product.productCode,
    product.type,
    product.chargingSpeed,
    product.connectorType,
    product.phaseType
  ].filter(Boolean); // Remove null/undefined values
  
  // Check for exact substring matches first (higher priority)
  for (const field of searchableFields) {
    if (field.toLowerCase().includes(query)) {
      return true;
    }
  }
  
  // Check for fuzzy matches with a similarity threshold
  const SIMILARITY_THRESHOLD = 0.6;
  
  for (const field of searchableFields) {
    const similarity = calculateSimilarity(field, query);
    if (similarity >= SIMILARITY_THRESHOLD) {
      return true;
    }
  }
  
  // Check for word-by-word matching (useful for multi-word queries)
  const queryWords = query.split(/\s+/).filter(word => word.length > 2);
  if (queryWords.length > 1) {
    const fieldText = searchableFields.join(' ').toLowerCase();
    const matchingWords = queryWords.filter(word => 
      fieldText.includes(word) || 
      searchableFields.some(field => calculateSimilarity(field, word) >= 0.7)
    );
    if (matchingWords.length >= Math.ceil(queryWords.length * 0.7)) {
      return true;
    }
  }
  
  return false;
};

/**
 * Filter products based on search query and filter criteria
 */
export const filterProducts = (
  products,
  { searchQuery, productType, chargingSpeed, connectorType, phaseType }
) => {
  const norm = (s) => (s || '').toString().toLowerCase().replace(/[^a-z0-9]+/g, '')
  return products.filter(product => {
    const matchesSearch = fuzzyMatch(product, searchQuery);

    const matchesType = productType === 'All' || product.type === productType
    const matchesSpeed =
      chargingSpeed === 'All' || norm(product.chargingSpeed).includes(norm(chargingSpeed))
    const matchesConnector =
      connectorType === 'All' || norm(product.connectorType).includes(norm(connectorType))
    const matchesPhase = phaseType === 'All' || norm(product.phaseType).includes(norm(phaseType))

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
  const safeNum = (v, fallback = Number.MIN_SAFE_INTEGER) =>
    typeof v === 'number' && !Number.isNaN(v) ? v : fallback

  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'Price Low to High': {
        return safeNum(a.price, Number.MAX_SAFE_INTEGER) - safeNum(b.price, Number.MAX_SAFE_INTEGER)
      }
      case 'Price High to Low': {
        return safeNum(b.price, Number.MIN_SAFE_INTEGER) - safeNum(a.price, Number.MIN_SAFE_INTEGER)
      }
      case 'Newest First': {
        // try to sort by code freshness if it contains numbers, else by creation order
        const aNum = parseInt((a.productCode || '').replace(/\D+/g, ''), 10)
        const bNum = parseInt((b.productCode || '').replace(/\D+/g, ''), 10)
        if (!Number.isNaN(aNum) && !Number.isNaN(bNum) && aNum !== bNum) {
          return bNum - aNum
        }
        return ('' + b.id).localeCompare('' + a.id)
      }
      case 'Popularity':
      default: {
        return ('' + a.id).localeCompare('' + b.id)
      }
    }
  })
}
