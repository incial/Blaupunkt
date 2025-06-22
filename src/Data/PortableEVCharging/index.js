// =============================================================================
// PORTABLE EV CHARGING INDEX
// =============================================================================
// Main export file for Portable EV Charging section
// =============================================================================

export { 
  portableEvChargingData,
  portableEvChargingConfig,
  default as portableEvCharging
} from './data.js'

export {
  portableEvChargingImages,
  portableEvChargingBgImages,
  portableEvChargingProductImages,
  createPortableEvChargingThumbnails,
  PORTABLE_EV_CHARGING_IMAGES,
  IMAGE_PATHS
} from './assets.js'

// Re-export common utilities for convenience
export {
  createBreadcrumbs,
  createMontaIntegrationData,
  createStandardFeatures,
  createHighlightsData,
  createSpecificationsData,
  createChargerModels,
  BUTTON_TEXTS
} from '../Common/utilities.js'
