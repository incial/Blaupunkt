// =============================================================================
// DC CHARGING STATION ASSETS
// =============================================================================
// Image and asset imports specific to DC Charging Stations
// =============================================================================

// Import DC Charging Station Images
import dcChargingStationUrl from '../../assets/Images/CatImages/DC_Charging_Station.png'
import dcPd1 from '../../assets/Images/pdImages/Dcpd1.png'
import dcPd2 from '../../assets/Images/pdImages/Dcpd2.png'

// Import DC Station Images
import dcMid from '../../assets/Images/DCchargingStation/DC-Mid.png'
import dcMidHalf from '../../assets/Images/DCchargingStation/DC-Mid-half.png'
import dcMidSpec from '../../assets/Images/DCchargingStation/DC-Mid-Spec.png'
import dcThumb1 from '../../assets/Images/DCchargingStation/Thumb-1.png'
import dcThumb2 from '../../assets/Images/DCchargingStation/Thumb-2.png'

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
}

// Background images for overview sections
export const dcChargingStationBgImages = {
  overview: dcChargingStationUrl,
  hero: dcMid,
  features: dcMidHalf,
  ideal: dcMidSpec
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
  main: '/src/assets/Images/CatImages/DC_Charging_Station.png',
  dcMid: '/src/assets/Images/DCchargingStation/DC-Mid.png',
  dcMidHalf: '/src/assets/Images/DCchargingStation/DC-Mid-half.png',
  dcMidSpec: '/src/assets/Images/DCchargingStation/DC-Mid-Spec.png',
  dcPd1: '/src/assets/Images/pdImages/Dcpd1.png',
  dcPd2: '/src/assets/Images/pdImages/Dcpd2.png'
}
