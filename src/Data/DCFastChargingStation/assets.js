// =============================================================================
// DC FAST CHARGING STATION ASSETS
// =============================================================================
// Image and asset imports specific to DC Fast Charging Stations
// =============================================================================

// Import DC Fast Charging Station Images
import dcFastChargingUrl from '../../assets/Images/CatImages/DC_Fast_Charging_Station.png'
import fastPd1 from '../../assets/Images/pdImages/Fastpd1.png'

// Import DC Fast Charging Station Images
import fastMid from '../../assets/Images/DCFastChrg/Fast-mid.png'
import fastHigh from '../../assets/Images/DCFastChrg/FastHigh.png'
import fastMid2 from '../../assets/Images/DCFastChrg/FastMid-2.png'
import fastSpec from '../../assets/Images/DCFastChrg/FastSpec.png'
import fastThumb1 from '../../assets/Images/DCFastChrg/Thumb-1.png'
import fastThumb2 from '../../assets/Images/DCFastChrg/Thumb-2.png'
import fastThumb3 from '../../assets/Images/DCFastChrg/Thumb-3.png'

// Main DC fast charging station images
export const dcFastChargingStationImages = {
  main: dcFastChargingUrl,
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
export const dcFastChargingStationBgImages = {
  overview: dcFastChargingUrl,
  hero: fastMid,
  features: fastHigh,
  ideal: fastSpec
}

// Product images for different views
export const dcFastChargingStationProductImages = {
  main: dcFastChargingUrl,
  feature: fastHigh,
  ideal: fastSpec,
  background: dcFastChargingUrl,
  pd1: fastPd1,
  mid: fastMid,
  mid2: fastMid2,
  spec: fastSpec
}

/**
 * Creates DC fast charging station thumbnails
 * @returns {Array} Array of DC fast charging station thumbnail objects
 */
export const createDCFastChargingStationThumbnails = () => [
  {
    image: dcFastChargingStationImages.thumb1,
    alt: 'DC Fast Charging Station - View 1'
  },
  {
    image: dcFastChargingStationImages.thumb2,
    alt: 'DC Fast Charging Station - View 2'
  },
  {
    image: dcFastChargingStationImages.thumb3,
    alt: 'DC Fast Charging Station - View 3'
  },
  {
    image: dcFastChargingStationImages.fastMid,
    alt: 'DC Fast Charging Station - Mid View'
  },
  {
    image: dcFastChargingStationImages.fastHigh,
    alt: 'DC Fast Charging Station - High View'
  }
]

// Easy access exports
export const DC_FAST_CHARGING_STATION_IMAGES = {
  MAIN: dcFastChargingStationImages.main,
  THUMBNAILS: createDCFastChargingStationThumbnails(),
  BACKGROUND: dcFastChargingStationBgImages.overview,
  FEATURE: dcFastChargingStationProductImages.feature,
  IDEAL: dcFastChargingStationProductImages.ideal
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
