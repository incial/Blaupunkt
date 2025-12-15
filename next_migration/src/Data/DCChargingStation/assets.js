// =============================================================================
// DC CHARGING STATION ASSETS
// =============================================================================
// Image and asset imports specific to DC Charging Stations
// =============================================================================

// Define DC Charging Station Image Paths
const dcChargingStationUrl = '/assets/Images/CatImages/DC_Charging_Station.webp'
const dcPd1 = '/assets/Images/pdImages/Dcpd1.webp'
const dcPd2 = '/assets/Images/pdImages/Dcpd2.webp'

// Define DC Station Images
const dcMid = '/assets/Images/DCchargingStation/DC-Mid.webp'
const dcMidHalf = '/assets/Images/DCchargingStation/DC-Mid-half.webp'
const dcMidSpec = '/assets/Images/DCchargingStation/DC-Mid-Spec.webp'
const dcThumb1 = '/assets/Images/DCchargingStation/Thumb-1.webp'
const dcThumb2 = '/assets/Images/DCchargingStation/Thumb-2.webp'
const dccharoverbg = '/assets/Images/DCchargingStation/dcstaionoverbg.webp'
const dccharspecbg = '/assets/Images/DCchargingStation/dcstaionsepcbg.webp'

// Main DC charging station images
export const dcChargingStationImages = {
  main: dcChargingStationUrl,
  dcMid: dcMid,
  dcMidHalf: dcMidHalf,
  dcMidSpec: dcMidSpec,
  dcPd1: dcPd1,
  dcPd2: dcPd2,
  thumb1: dcThumb1,
  thumb2: dcThumb2,
  dccharoverbg: dccharoverbg,
  dccharspecbg: dccharspecbg
}

// Background images for overview sections
export const dcChargingStationBgImages = {
  overview: dcChargingStationUrl,
  hero: dcMid,
  features: dcMidHalf,
  ideal: dcMidSpec,
  dccharoverbg: dccharoverbg,
  dccharspecbg: dccharspecbg
}

// Product images for different views
export const dcChargingStationProductImages = {
  main: dcChargingStationUrl,
  feature: dcMidHalf,
  ideal: dcMidSpec,
  background: dcChargingStationUrl,
  pd1: dcPd1,
  pd2: dcPd2,
  mid: dcMid
}

/**
 * Creates DC charging station thumbnails
 * @returns {Array} Array of DC charging station thumbnail objects
 */
export const createDCChargingStationThumbnails = () => [
  {
    image: dcChargingStationImages.thumb1,
    alt: 'DC Charging Station - View 1'
  },
  {
    image: dcChargingStationImages.thumb2,
    alt: 'DC Charging Station - View 2'
  }
]

// Easy access exports
export const DC_CHARGING_STATION_IMAGES = {
  MAIN: dcChargingStationImages.main,
  THUMBNAILS: createDCChargingStationThumbnails(),
  BACKGROUND: dcChargingStationBgImages.overview,
  FEATURE: dcChargingStationProductImages.feature,
  IDEAL: dcChargingStationProductImages.ideal
}

// Image paths for backward compatibility
export const IMAGE_PATHS = {
  main: '/assets/Images/CatImages/DC_Charging_Station.webp',
  dcMid: '/assets/Images/DCchargingStation/DC-Mid.webp',
  dcMidHalf: '/assets/Images/DCchargingStation/DC-Mid-half.webp',
  dcMidSpec: '/assets/Images/DCchargingStation/DC-Mid-Spec.webp',
  dcPd1: '/assets/Images/pdImages/Dcpd1.webp',
  dcPd2: '/assets/Images/pdImages/Dcpd2.webp'
}
