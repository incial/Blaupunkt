// =============================================================================
// DC FAST CHARGING STATION INDEX
// =============================================================================
// Main export file for DC Fast Charging Station section
// =============================================================================

export { 
  dcFastChargingStationData,
  dcFastChargingStationConfig,
  default as dcFastChargingStation
} from './data.js'

export {
  dcFastChargingStationImages,
  dcFastChargingStationBgImages,
  dcFastChargingStationProductImages,
  createDCFastChargingStationThumbnails,
  DC_FAST_CHARGING_STATION_IMAGES,
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
