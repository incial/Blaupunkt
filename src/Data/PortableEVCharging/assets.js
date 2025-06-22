// =============================================================================
// PORTABLE EV CHARGING ASSETS
// =============================================================================
// Image and asset imports specific to Portable EV Charging
// =============================================================================

// Import Portable EV Charging Images
import portableEvChargingUrl from '../../assets/Images/CatImages/Portable_EV_Charging.png'
import portEvPd1 from '../../assets/Images/pdImages/PortEvPd1.png'

// Import Portable EV Charging Images
import portEvMid1 from '../../assets/Images/PortEvCable/PortEvMid1.png'
import portEvMid2 from '../../assets/Images/PortEvCable/PortEvMid2.png'
import portEvMidSpec from '../../assets/Images/PortEvCable/PortEvMidSpec.png'

// Main portable EV charging images
export const portableEvChargingImages = {
  main: portableEvChargingUrl,
  portEvPd1: portEvPd1,
  cable1: portEvMid1,
  cable2: portEvMid2,
  cable3: portEvMidSpec,
}

// Background images for overview sections
export const portableEvChargingBgImages = {
  overview: portableEvChargingUrl,
  hero: portableEvChargingUrl,
  features: portEvMid1,
  ideal: portEvMid2
}

// Product images for different views
export const portableEvChargingProductImages = {
  main: portableEvChargingUrl,
  feature: portEvMid1,
  ideal: portEvMid2,
  background: portableEvChargingUrl,
  pd1: portEvPd1,
  cable3: portEvMidSpec
}

/**
 * Creates portable EV charging thumbnails
 * @returns {Array} Array of portable EV charging thumbnail objects
 */
export const createPortableEvChargingThumbnails = () => [
  {
    image: portableEvChargingImages.main,
    alt: 'Portable EV Charging - Main View'
  },
  {
    image: portableEvChargingImages.cable1,
    alt: 'Portable EV Charging - Cable View 1'
  },
  {
    image: portableEvChargingImages.cable2,
    alt: 'Portable EV Charging - Cable View 2'
  },
  {
    image: portableEvChargingImages.cable3,
    alt: 'Portable EV Charging - Cable View 3'
  },
  {
    image: portableEvChargingImages.portEvPd1,
    alt: 'Portable EV Charging - Product Detail'
  }
]

// Easy access exports
export const PORTABLE_EV_CHARGING_IMAGES = {
  MAIN: portableEvChargingImages.main,
  THUMBNAILS: createPortableEvChargingThumbnails(),
  BACKGROUND: portableEvChargingBgImages.overview,
  FEATURE: portableEvChargingProductImages.feature,
  IDEAL: portableEvChargingProductImages.ideal
}

// Image paths for backward compatibility
export const IMAGE_PATHS = {
  main: '/src/assets/Images/CatImages/Portable_EV_Charging.png',
  portEvPd1: '/src/assets/Images/pdImages/PortEvPd1.png',
  cable1: '/src/assets/Images/PortEvCable/PortEvCable1.png',
  cable2: '/src/assets/Images/PortEvCable/PortEvCable2.png',
  cable3: '/src/assets/Images/PortEvCable/PortEvCable3.png'
}
