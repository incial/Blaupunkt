// =============================================================================
// PORTABLE EV CHARGING ASSETS
// =============================================================================
// Image and asset imports specific to Portable EV Charging
// =============================================================================

// Import Portable EV Charging Images
// Define Portable EV Charging Image Paths
const portableEvChargingUrl = '/assets/Images/CatImages/Portable_EV_Charging.webp'
const portEvPd1 = '/assets/Images/pdImages/PortEvPd1.webp'

// Define Portable EV Charging Cable Images
const portEvMid1 = '/assets/Images/PortEvCable/PortEvMid1.webp'
const portEvMid2 = '/assets/Images/PortEvCable/PortEvMid2.webp'
const portEvMidSpec = '/assets/Images/PortEvCable/PortEvMidSpec.webp'
const PortThumb1 = '/assets/Images/PortEvCable/Thumb-1.webp'
const PortThumb2 = '/assets/Images/PortEvCable/Thumb-2.webp'
const PortThumb3 = '/assets/Images/PortEvCable/Thumb-3.webp'
const PortThumb4 = '/assets/Images/PortEvCable/Thumb-4.webp'
const PortThumb5 = '/assets/Images/PortEvCable/Thumb-5.webp'

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
  main: '/assets/Images/CatImages/Portable_EV_Charging.webp',
  portEvPd1: '/assets/Images/pdImages/PortEvPd1.webp',
  cable1: '/assets/Images/PortEvCable/PortEvMid1.webp',
  cable2: '/assets/Images/PortEvCable/PortEvMid2.webp',
  cable3: '/assets/Images/PortEvCable/PortEvMidSpec.webp',
  thumb1: '/assets/Images/PortEvCable/Thumb-1.webp',
  thumb2: '/assets/Images/PortEvCable/Thumb-2.webp',
  thumb3: '/assets/Images/PortEvCable/Thumb-3.webp'
}
