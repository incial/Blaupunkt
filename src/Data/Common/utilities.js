// =============================================================================
// COMMON UTILITY FUNCTIONS
// =============================================================================
// Shared utility functions used across all product sections
// =============================================================================

/**
 * Creates breadcrumb navigation for pages
 * @param {string} pageName - Display name for the page
 * @param {string} path - URL path for the page
 * @returns {Array} Array of breadcrumb objects
 */
export const createBreadcrumbs = (pageName, path) => [
  { text: 'Home', path: '/' },
  { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
  { text: pageName, path, active: true }
]

/**
 * Creates thumbnail images array with consistent structure
 * @param {string} imageName - Base image filename
 * @param {number} count - Number of thumbnails (default: 5)
 * @returns {Array} Array of thumbnail objects
 */
export const createThumbnails = (imageName, count = 5) => 
  Array.from({ length: count }, (_, i) => ({
    src: imageName,
    alt: `${imageName.split('.')[0]} View ${i + 1}`
  }))

/**
 * Creates standard product features
 * @param {Array} customFeatures - Optional custom features to add
 * @param {boolean} isListFormat - Whether to display as list (true) or paragraphs (false)
 * @returns {Object} Features configuration object
 */
export const createStandardFeatures = (customFeatures = [], isListFormat = true) => ({
  active: true,
  title: 'User-Friendly and Intuitive Operation',
  isListFormat, // true for list, false for paragraph
  data: [
    ...customFeatures
  ]
})

/**
 * Creates supplier data structure
 * @param {string} manufacturer - Primary manufacturer name
 * @param {Array} suppliers - Array of supplier objects
 * @returns {Object} Supplier data configuration
 */
export const createSupplierData = (manufacturer, suppliers) => ({
  manufacturer,
  suppliers: suppliers.map(supplier => ({
    name: supplier.name,
    region: supplier.region,
    contact: supplier.contact,
    specialization: supplier.specialization
  }))
})

/**
 * Creates highlights data with consistent structure
 * @param {string} title - Section title
 * @param {Array} features - Array of feature objects
 * @returns {Object} Highlights configuration
 */
export const createHighlightsData = (title, features) => ({
  title,
  features: features.map(feature => ({
    title: feature.title,
    description: feature.description,
    icon: feature.icon
  }))
})

/**
 * Creates specifications data structure
 * @param {string} title - Section title
 * @param {Array} specs - Array of specification objects
 * @returns {Object} Specifications configuration
 */
export const createSpecificationsData = (title, specs) => ({
  title,
  specs: specs.map(spec => ({
    label: spec.label,
    value: spec.value
  }))
})

/**
 * Creates cable models data structure for product pages
 * @param {Array} sections - Array of model sections
 * @returns {Object} Models configuration
 */
export const createCableModels = (sections) => ({
  title: 'Models',
  groupingMethod: 'section',
  sections: sections.map(section => ({
    name: section.name,
    categories: [{
      name: 'Standard Models',
      description: 'Professional grade charging cables',
      models: section.models.map(model => ({
        modelCode: model.modelCode,
        connectorType: model.connectorType,
        current: model.current,
        cableLength: model.cableLength,
        ipClass: model.ipClass || '65',
        phaseType: model.phaseType,
        popular: model.popular || false
      }))
    }]
  }))
})

/**
 * Creates charger models data structure for DC charging stations
 * @param {Array} sections - Array of charger model sections
 * @returns {Object} Charger models configuration object
 */
export const createChargerModels = (sections) => ({
  title: 'Models',
  groupingMethod: 'section',
  sections: sections.map(section => ({
    name: section.name,
    description: section.description,
    categories: [{
      name: 'DC Charger Models',
      description: section.description,
      models: section.models.map(model => ({
        modelCode: model.modelCode,
        maximumPower: model.maximumPower,
        connectorType: model.connectorType,
        outputVoltage: model.outputVoltage,
        dimensions: model.dimensions,
        weight: model.weight,
        popular: model.popular || false
      }))
    }]
  }))
})

/**
 * Creates flat cable models data structure for Models component
 * @param {Array} sections - Array of cable model sections
 * @returns {Object} Cable models configuration object with flat models array
 */
export const createFlatCableModels = (sections) => {
  // Flatten all models from all sections into a single array
  const flatModels = [];
  
  sections.forEach(section => {
    section.models.forEach(model => {
      flatModels.push({
        modelCode: model.modelCode,
        connectorType: model.connectorType,
        current: model.current,
        cableLength: model.cableLength,
        ipClass: model.ipClass || 'IP65',
        phaseType: model.phaseType,
        popular: model.popular || false,
        image: model.image || null, // Include image property
        section: section.name // Add section info for grouping
      });
    });
  });

  return {
    title: 'Models',
    groupingMethod: 'section',
    models: flatModels,
  };
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const BUTTON_TEXTS = {
  connect: 'Connect',
  learnMore: 'Learn More',
  explore: 'Explore',
  discover: 'Discover',
  viewDetails: 'View Details',
  exploreProducts: 'Explore Products',
  viewAll: 'View All'
}

export const DEFAULT_SUPPLIER_DATA = {
  manufacturer: 'Blaupunkt Technologies',
  suppliers: [
    {
      name: 'EV Components Ltd',
      region: 'Europe',
      contact: 'europe@evcomponents.com',
      specialization: 'Cable assemblies and connectors'
    },
    {
      name: 'PowerTech Solutions',
      region: 'North America',
      contact: 'na@powertech.com',
      specialization: 'Charging infrastructure'
    },
    {
      name: 'GreenCharge Industries',
      region: 'Asia Pacific',
      contact: 'apac@greencharge.com',
      specialization: 'Portable charging solutions'
    }
  ]
}
