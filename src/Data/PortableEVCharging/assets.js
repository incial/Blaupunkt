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
import PortThumb1 from '../../assets/Images/PortEvCable/Thumb-1.png'
import PortThumb2 from '../../assets/Images/PortEvCable/Thumb-2.png'
import PortThumb3 from '../../assets/Images/PortEvCable/Thumb-3.png'
import PortThumb4 from '../../assets/Images/PortEvCable/Thumb-4.png'
import PortThumb5 from '../../assets/Images/PortEvCable/Thumb-5.png'

// Main portable EV charging images
export const portableEvChargingImages = {
  main: portableEvChargingUrl,
  portEvPd1: portEvPd1,
  cable1: portEvMid1,
  cable2: portEvMid2,
  cable3: portEvMidSpec,
  thumb1: PortThumb1,
  thumb2: PortThumb2,
  thumb3: PortThumb3,
  thumb4: PortThumb4,
  thumb5: PortThumb5
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
  specifications: portEvMidSpec,
  background: portableEvChargingUrl,
  pd1: portEvPd1,
  cable1: portEvMid1,
  cable2: portEvMid2,
  cable3: portEvMidSpec,
  thumb1: PortThumb1,
  thumb2: PortThumb2,
  thumb3: PortThumb3,
  thumb4: PortThumb4,
  thumb5: PortThumb5
}

/**
 * Creates portable EV charging thumbnails
 * @returns {Array} Array of portable EV charging thumbnail objects
 */
export const createPortableEvChargingThumbnails = () => [
  {
    image: portableEvChargingImages.thumb1,
    alt: 'Portable EV Charging - Thumbnail 1'
  },
  {
    image: portableEvChargingImages.thumb2,
    alt: 'Portable EV Charging - Thumbnail 2'
  },
  {
    image: portableEvChargingImages.thumb3,
    alt: 'Portable EV Charging - Thumbnail 3'
  },
  {
    image: portableEvChargingImages.thumb4,
    alt: 'Portable EV Charging - Thumbnail 4'
  },
  {
    image: portableEvChargingImages.thumb5,
    alt: 'Portable EV Charging - Thumbnail 5'
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
  cable1: '/src/assets/Images/PortEvCable/PortEvMid1.png',
  cable2: '/src/assets/Images/PortEvCable/PortEvMid2.png',
  cable3: '/src/assets/Images/PortEvCable/PortEvMidSpec.png',
  thumb1: '/src/assets/Images/PortEvCable/Thumb-1.png',
  thumb2: '/src/assets/Images/PortEvCable/Thumb-2.png',
  thumb3: '/src/assets/Images/PortEvCable/Thumb-3.png'
}
