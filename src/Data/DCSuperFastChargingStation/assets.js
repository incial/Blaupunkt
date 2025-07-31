// =============================================================================
// DC SUPER FAST CHARGING STATION ASSETS
// =============================================================================
// Image and asset imports specific to DC Super Fast Charging Stations
// =============================================================================

// Import DC Super Fast Charging Station Images
import dcSuperFastChargingUrl from '../../assets/Images/CatImages/DC_Fast_Charging_Station.png'
import fastPd1 from '../../assets/Images/pdImages/Fastpd1.png'

// Import DC Super Fast Charging Station Images
import fastMid from '../../assets/Images/DCFastChrg/Fast-mid.png'
import fastHigh from '../../assets/Images/DCFastChrg/FastHigh.png'
import fastMid2 from '../../assets/Images/DCFastChrg/FastMid-2.png'
import fastSpec from '../../assets/Images/DCFastChrg/FastSpec.png'
import fastThumb1 from '../../assets/Images/DCFastChrg/Thumb-1.png'
import fastThumb2 from '../../assets/Images/DCFastChrg/Thumb-2.png'
import fastThumb3 from '../../assets/Images/DCFastChrg/Thumb-3.png'

// Main DC super fast charging station images
export const dcSuperFastChargingStationImages = {
  main: dcSuperFastChargingUrl,
  fastMid: fastMid,
  fastHigh: fastHigh,
  fastMid2: fastMid2,
  fastSpec: fastSpec,
  fastPd1: fastPd1,
  thumb1: fastThumb1,
  thumb2: fastThumb2,
  thumb3: fastThumb3,
}

// Background images for overview sections
export const dcSuperFastChargingStationBgImages = {
  overview: dcSuperFastChargingUrl,
  hero: fastMid,
  features: fastHigh,
  ideal: fastSpec
}

// Product images for different views
export const dcSuperFastChargingStationProductImages = {
  main: dcSuperFastChargingUrl,
  feature: fastHigh,
  ideal: fastSpec,
  background: dcSuperFastChargingUrl,
  pd1: fastPd1,
  mid: fastMid,
  mid2: fastMid2,
  spec: fastSpec
}

/**
 * Creates DC super fast charging station thumbnails
 * @returns {Array} Array of DC super fast charging station thumbnail objects
 */
export const createDCSuperFastChargingStationThumbnails = () => [
  {
    image: dcSuperFastChargingStationImages.thumb1,
    alt: 'DC Super Fast Charging Station - View 1'
  },
  {
    image: dcSuperFastChargingStationImages.thumb2,
    alt: 'DC Super Fast Charging Station - View 2'
  }
]

// Easy access exports
export const DC_SUPER_FAST_CHARGING_STATION_IMAGES = {
  MAIN: dcSuperFastChargingStationImages.main,
  THUMBNAILS: createDCSuperFastChargingStationThumbnails(),
  BACKGROUND: dcSuperFastChargingStationBgImages.overview,
  FEATURE: dcSuperFastChargingStationProductImages.feature,
  IDEAL: dcSuperFastChargingStationProductImages.ideal
}

// Image paths for backward compatibility
export const IMAGE_PATHS = {
  main: '/src/assets/Images/CatImages/DC_Fast_Charging_Station.png',
  fastMid: '/src/assets/Images/DCFastChrg/Fast-mid.png',
  fastHigh: '/src/assets/Images/DCFastChrg/FastHigh.png',
  fastMid2: '/src/assets/Images/DCFastChrg/FastMid-2.png',
  fastSpec: '/src/assets/Images/DCFastChrg/FastSpec.png',
  fastPd1: '/src/assets/Images/pdImages/Fastpd1.png'
}
