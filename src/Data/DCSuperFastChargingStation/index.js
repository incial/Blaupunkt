// =============================================================================
// DC SUPER FAST CHARGING STATION INDEX
// =============================================================================
// Main export file for DC Super Fast Charging Station section
// =============================================================================

export { 
  dcSuperFastChargingStationData,
  dcSuperFastChargingStationConfig,
  default as dcSuperFastChargingStation
} from './data.js'

export {
  dcSuperFastChargingStationImages,
  dcSuperFastChargingStationBgImages,
  dcSuperFastChargingStationProductImages,
  createDCSuperFastChargingStationThumbnails,
  DC_SUPER_FAST_CHARGING_STATION_IMAGES,
  IMAGE_PATHS
} from './assets.js'

// Re-export common utilities for convenience
export {
  createBreadcrumbs,
  createStandardFeatures,
  createHighlightsData,
  createSpecificationsData,
  createChargerModels,
  BUTTON_TEXTS
} from '../Common/utilities.js'
