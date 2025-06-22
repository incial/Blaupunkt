// =============================================================================
// DC CHARGING STATION INDEX
// =============================================================================
// Main export file for DC Charging Station section
// =============================================================================

export { 
  dcChargingStationData,
  dcChargingStationConfig,
  default as dcChargingStation
} from './data.js'

export {
  dcChargingStationImages,
  dcChargingStationBgImages,
  dcChargingStationProductImages,
  createDCChargingStationThumbnails,
  DC_CHARGING_STATION_IMAGES,
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
