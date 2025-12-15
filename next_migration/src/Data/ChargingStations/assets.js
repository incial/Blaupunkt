// =============================================================================
// CHARGING STATIONS ASSETS
// =============================================================================
// Image and asset imports specific to Charging Stations
// =============================================================================

// Import Charging Station Images
// Define Charging Station Image Paths
const chargingStationsUrl = '/assets/Images/CatImages/Charging_Stations.webp'
const stationPd1 = '/assets/Images/pdImages/StationPd-1.webp'
const stationPd2 = '/assets/Images/pdImages/StationPd-2.webp'

// Define Station Images
const station1 = '/assets/Images/ChargIngStations/Station1.webp'
const station2 = '/assets/Images/ChargIngStations/Station2.webp'
const stationSpec = '/assets/Images/ChargIngStations/StationSpec.webp'
const stationThumb1 = '/assets/Images/ChargIngStations/Thumb-1.webp'
const stationThumb2 = '/assets/Images/ChargIngStations/Thumb-2.webp'
const stationThumb3 = '/assets/Images/ChargIngStations/Thumb-3.webp'
const stationThumb4 = '/assets/Images/ChargIngStations/Thumb-4.webp'
const stationThumb5 = '/assets/Images/ChargIngStations/Thumb-5.webp'
const stationThumb6 = '/assets/Images/ChargIngStations/Thumb-6.webp'
const chargingStationoverbg = '/assets/Images/ChargIngStations/stationoverbg.webp'
const chargingStationspecbg = '/assets/Images/ChargIngStations/stationspecbg.webp'

// Main charging station images
export const chargingStationImages = {
  main: chargingStationsUrl,
  station1: station1,
  station2: station2,
  stationSpec: stationSpec,
  stationPd1: stationPd1,
  stationPd2: stationPd2,
  thumb1: stationThumb1,
  thumb2: stationThumb2,
  thumb3: stationThumb3,
  thumb4: stationThumb4,
  thumb5: stationThumb5,
  thumb6: stationThumb6,
  chargingStationoverbg: chargingStationoverbg,
  chargingStationspecbg: chargingStationspecbg
}

// Background images for overview sections
export const chargingStationBgImages = {
  overview: chargingStationsUrl,
  hero: chargingStationsUrl,
  features: station1,
  ideal: station2,
  chargingStationoverbg: chargingStationoverbg,
  chargingStationspecbg: chargingStationspecbg
}

// Product images for different views
export const chargingStationProductImages = {
  main: chargingStationsUrl,
  feature: station1,
  ideal: station2,
  background: chargingStationsUrl,
  pd1: stationPd1,
  pd2: stationPd2,
  spec: stationSpec,
  specifications: stationSpec
}

/**
 * Creates charging station thumbnails
 * @returns {Array} Array of charging station thumbnail objects
 */
export const createChargingStationThumbnails = () => [
  {
    image: chargingStationImages.thumb1,
    alt: 'Charging Station - View 1'
  },
  {
    image: chargingStationImages.thumb2,
    alt: 'Charging Station - View 2'
  },
  {
    image: chargingStationImages.thumb3,
    alt: 'Charging Station - View 3'
  },
  {
    image: chargingStationImages.thumb4,
    alt: 'Charging Station - View 4'
  },
  {
    image: chargingStationImages.thumb5,
    alt: 'Charging Station - View 5'
  },
  {
    image: chargingStationImages.thumb6,
    alt: 'Charging Station - View 6'
  }
]

// Easy access exports
export const CHARGING_STATIONS_IMAGES = {
  MAIN: chargingStationImages.main,
  THUMBNAILS: createChargingStationThumbnails(),
  BACKGROUND: chargingStationBgImages.overview,
  FEATURE: chargingStationProductImages.feature,
  IDEAL: chargingStationProductImages.ideal
}

// Image paths for backward compatibility
export const IMAGE_PATHS = {
  main: '/assets/Images/CatImages/Charging_Stations.webp',
  station1: '/assets/Images/ChargIngStations/Station1.webp',
  station2: '/assets/Images/ChargIngStations/Station2.webp',
  stationSpec: '/assets/Images/ChargIngStations/StationSpec.webp',
  stationPd1: '/assets/Images/pdImages/StationPd-1.webp',
  stationPd2: '/assets/Images/pdImages/StationPd-2.webp'
}
