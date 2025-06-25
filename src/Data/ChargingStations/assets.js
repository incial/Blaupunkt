// =============================================================================
// CHARGING STATIONS ASSETS
// =============================================================================
// Image and asset imports specific to Charging Stations
// =============================================================================

// Import Charging Station Images
import chargingStationsUrl from '../../assets/Images/CatImages/Charging_Stations.png'
import stationPd1 from '../../assets/Images/pdImages/StationPd-1.png'
import stationPd2 from '../../assets/Images/pdImages/StationPd-2.png'

// Import Station Images
import station1 from '../../assets/Images/ChargIngStations/Station1.png'
import station2 from '../../assets/Images/ChargIngStations/Station2.png'
import stationSpec from '../../assets/Images/ChargIngStations/StationSpec.png'
import stationThumb1 from '../../assets/Images/ChargIngStations/Thumb-1.png'
import stationThumb2 from '../../assets/Images/ChargIngStations/Thumb-2.png'
import stationThumb3 from '../../assets/Images/ChargIngStations/Thumb-3.png'
import stationThumb4 from '../../assets/Images/ChargIngStations/Thumb-4.png'
import stationThumb5 from '../../assets/Images/ChargIngStations/Thumb-5.png'
import stationThumb6 from '../../assets/Images/ChargIngStations/Thumb-6.png'
import chargingStationoverbg from '../../assets/Images/ChargIngStations/stationoverbg.png'
import chargingStationspecbg from '../../assets/Images/ChargIngStations/stationspecbg.png'

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
  main: '/src/assets/Images/CatImages/Charging_Stations.png',
  station1: '/src/assets/Images/ChargIngStations/Station1.png',
  station2: '/src/assets/Images/ChargIngStations/Station2.png',
  stationSpec: '/src/assets/Images/ChargIngStations/StationSpec.png',
  stationPd1: '/src/assets/Images/pdImages/StationPd-1.png',
  stationPd2: '/src/assets/Images/pdImages/StationPd-2.png'
}
