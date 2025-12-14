// =============================================================================
// CHARGING CABLES ASSETS
// =============================================================================
// Image and asset imports specific to EV Charging Cables
// =============================================================================

// Import EV Charging Cable Images
// Define EV Charging Cable Image Paths
const evCab1Url = '/assets/Images/EvCables/EVCab-1.webp'
const evCab2Url = '/assets/Images/EvCables/EVCab-2.webp'
const evCab3Url = '/assets/Images/EvCables/EVCab-3.webp'
const evCab4Url = '/assets/Images/EvCables/EVCab-4.webp'
const evCabMidUrl = '/assets/Images/EvCables/EVCab-Mid.webp'
const evCabMidRightUrl = '/assets/Images/EvCables/EVCab-Mid-Right.webp'
const evmoboverbg = '/assets/Images/EvCables/EVOverviewBgmob.webp'
const evmodelbg = '/assets/Images/EvCables/EVOModelBgmob.webp'
const evspecmob = '/assets/Images/EvCables/EVSpecBgmob.webp'

// Define Product Images for Charging Cables
const evCabPd1 = '/assets/Images/pdImages/EVCab-Pd-1.webp'
const evCabPd2 = '/assets/Images/pdImages/EVCab-pd-2.webp'

// Main charging cable images
export const chargingCableImages = {
  main: evCabMidUrl,
  cable1: evCab1Url,
  cable2: evCab2Url,
  cable3: evCab3Url,
  cable4: evCab4Url,
  cableMid: evCabMidUrl,
  cableMidRight: evCabMidRightUrl,
  cablePd1: evCabPd1,
  cablePd2: evCabPd2,
}

// Background images for overview sections
export const chargingCableBgImages = {
  overview: evCabMidRightUrl,
  hero: evCabMidUrl,
  features: evCab3Url,
  specifications: evCabMidRightUrl,
  ideal: evCab4Url,
  evmoboverbg: evmoboverbg,
  evmodelbg: evmodelbg,
  evspecmob: evspecmob
}

// Product images for different views
export const chargingCableProductImages = {
  main: evCabMidUrl,
  feature: evCab3Url,
  overview: evCabMidUrl,
  specifications: evCabMidRightUrl,
  ideal: evCab4Url,
  background: evCabMidRightUrl,
  pd1: evCabPd1,
  pd2: evCabPd2,
}

/**
 * Creates EV charging cable thumbnails with different images
 * @returns {Array} Array of EV cable thumbnail objects
 */
export const createEVCableThumbnails = () => [
  {
    image: chargingCableImages.cable1,
    alt: 'EV Charging Cable - Cable 1'
  },
  {
    image: chargingCableImages.cable2,
    alt: 'EV Charging Cable - Cable 2'
  },
  {
    image: chargingCableImages.cable3,
    alt: 'EV Charging Cable - Cable 3'
  },
  {
    image: chargingCableImages.cable4,
    alt: 'EV Charging Cable - Cable 4'
  }
]

// Easy access exports
export const CHARGING_CABLES_IMAGES = {
  MAIN: chargingCableImages.main,
  THUMBNAILS: createEVCableThumbnails(),
  BACKGROUND: chargingCableBgImages.overview,
  FEATURE: chargingCableProductImages.feature,
  IDEAL: chargingCableProductImages.ideal
}

// Image paths for backward compatibility
export const IMAGE_PATHS = {
  main: '/assets/Images/EvCables/EVCab-Mid.webp',
  cable1: '/assets/Images/EvCables/EVCab-1.webp',
  cable2: '/assets/Images/EvCables/EVCab-2.webp',
  cable3: '/assets/Images/EvCables/EVCab-3.webp',
  cable4: '/assets/Images/EvCables/EVCab-4.webp',
  cableMidRight: '/assets/Images/EvCables/EVCab-Mid-Right.webp',
  cablePd1: '/assets/Images/pdImages/EVCab-Pd-1.webp',
  cablePd2: '/assets/Images/pdImages/EVCab-pd-2.webp'
}
