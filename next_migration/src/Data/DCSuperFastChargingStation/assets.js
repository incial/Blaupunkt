// =============================================================================
// DC SUPER FAST CHARGING STATION ASSETS
// =============================================================================
// Image and asset imports specific to DC Super Fast Charging Stations
// =============================================================================

// Import DC Super Fast Charging Station Images
// Define DC Super Fast Charging Station Image Paths
const dcSuperFastChargingUrl = '/assets/Images/CatImages/DC_Fast_Charging_Station.webp'
const fastPd1 = '/assets/Images/pdImages/Fastpd1.webp'
const fastPd2 = '/assets/Images/pdImages/Fastpd2.webp'
const fastPd3 = '/assets/Images/pdImages/Fastpd3.webp'
const fastPd4 = '/assets/Images/pdImages/Fastpd4.webp'
const fastPd5 = '/assets/Images/pdImages/Fastpd5.webp'
const fastPd6 = '/assets/Images/pdImages/Fastpd6.webp'

// Define DC Super Fast Charging Station Images
const fastMid = '/assets/Images/DCFastChrg/Fast-mid.webp'
const fastHigh = '/assets/Images/DCFastChrg/FastHigh.webp'
const fastMid2 = '/assets/Images/DCFastChrg/FastMid-2.webp'
const fastSpec = '/assets/Images/DCFastChrg/FastSpec.webp'
const fastThumb1 = '/assets/Images/DCFastChrg/Thumb-1.webp'
const fastThumb2 = '/assets/Images/DCFastChrg/Thumb-2.webp'
const fastThumb3 = '/assets/Images/DCFastChrg/Thumb-3.webp'

// Main DC super fast charging station images
export const dcSuperFastChargingStationImages = {
  main: dcSuperFastChargingUrl,
  fastMid: fastMid,
  fastHigh: fastHigh,
  fastMid2: fastMid2,
  fastSpec: fastSpec,
  fastPd1: fastPd1,
  fastPd2: fastPd2,
  fastPd3: fastPd3,
  fastPd4: fastPd4,
  fastPd5: fastPd5,
  fastPd6: fastPd6,
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
  pd2: fastPd2,
  pd3: fastPd3,
  pd4: fastPd4,
  pd5: fastPd5,
  pd6: fastPd6,
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

/**
 * Creates DC super fast charging station product detail images array
 * @returns {Array} Array of DC super fast charging station product detail images
 */
export const createDCSuperFastChargingStationPdImages = () => [
  {
    image: dcSuperFastChargingStationImages.fastPd1,
    alt: 'DC Super Fast Charging Station - Product Detail 1'
  },
  {
    image: dcSuperFastChargingStationImages.fastPd2,
    alt: 'DC Super Fast Charging Station - Product Detail 2'
  },
  {
    image: dcSuperFastChargingStationImages.fastPd3,
    alt: 'DC Super Fast Charging Station - Product Detail 3'
  },
  {
    image: dcSuperFastChargingStationImages.fastPd4,
    alt: 'DC Super Fast Charging Station - Product Detail 4'
  },
  {
    image: dcSuperFastChargingStationImages.fastPd5,
    alt: 'DC Super Fast Charging Station - Product Detail 5'
  },
  {
    image: dcSuperFastChargingStationImages.fastPd6,
    alt: 'DC Super Fast Charging Station - Product Detail 6'
  }
]

// Easy access exports
export const DC_SUPER_FAST_CHARGING_STATION_IMAGES = {
  MAIN: dcSuperFastChargingStationImages.main,
  THUMBNAILS: createDCSuperFastChargingStationThumbnails(),
  PD_IMAGES: createDCSuperFastChargingStationPdImages(),
  BACKGROUND: dcSuperFastChargingStationBgImages.overview,
  FEATURE: dcSuperFastChargingStationProductImages.feature,
  IDEAL: dcSuperFastChargingStationProductImages.ideal
}

// Image paths for backward compatibility
export const IMAGE_PATHS = {
  main: '/assets/Images/CatImages/DC_Fast_Charging_Station.webp',
  fastMid: '/assets/Images/DCFastChrg/Fast-mid.webp',
  fastHigh: '/assets/Images/DCFastChrg/FastHigh.webp',
  fastMid2: '/assets/Images/DCFastChrg/FastMid-2.webp',
  fastSpec: '/assets/Images/DCFastChrg/FastSpec.webp',
  fastPd1: '/assets/Images/pdImages/Fastpd1.webp',
  fastPd2: '/assets/Images/pdImages/Fastpd2.webp',
  fastPd3: '/assets/Images/pdImages/Fastpd3.webp',
  fastPd4: '/assets/Images/pdImages/Fastpd4.webp',
  fastPd5: '/assets/Images/pdImages/Fastpd5.webp',
  fastPd6: '/assets/Images/pdImages/Fastpd6.webp'
}
