// =============================================================================
// CHARGING CABLES INDEX
// =============================================================================
// Main export file for Charging Cables section
// =============================================================================

export { 
  chargingCablesData,
  chargingCablesConfig,
  default as chargingCables
} from './data.js'

export {
  chargingCableImages,
  chargingCableBgImages,
  chargingCableProductImages,
  createEVCableThumbnails,
  CHARGING_CABLES_IMAGES,
  IMAGE_PATHS
} from './assets.js'

// Re-export common utilities for convenience
export {
  createBreadcrumbs,
  createStandardFeatures,
  createHighlightsData,
  createSpecificationsData,
  createFlatCableModels,
  BUTTON_TEXTS
} from '../Common/utilities.js'
