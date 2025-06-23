// =============================================================================
// CHARGING CABLES DATA
// =============================================================================
// Complete data configuration for EV Charging Cables section
// =============================================================================

import { 
  createBreadcrumbs, 
  createStandardFeatures,
  createHighlightsData,
  createSpecificationsData,
  createFlatCableModels,
  BUTTON_TEXTS,
  DEFAULT_SUPPLIER_DATA
} from '../Common/utilities.js'

import { 
  chargingCableImages,
  chargingCableBgImages,
  chargingCableProductImages,
  createEVCableThumbnails,
  CHARGING_CABLES_IMAGES
} from './assets.js'

// =============================================================================
// CHARGING CABLES SPECIFIC UTILITIES
// =============================================================================

/**
 * Creates Monta backend integration data specific to charging cables
 * @param {boolean} isActive - Whether the integration is active
 * @returns {Object} Monta integration configuration
 */

// =============================================================================
// CHARGING CABLES MAIN DATA
// =============================================================================

export const chargingCablesData = {
  title: 'EV Charging Cables',
  description: 'Durable, efficient, and compatible with most electric vehicles.',
  active: true,
  breadcrumbs: createBreadcrumbs('EV Charging Cables', '/charging-cables'),
  buttonText: BUTTON_TEXTS.connect,
  mainImage: CHARGING_CABLES_IMAGES.MAIN,
  imageAlt: 'EV Charging Cable',
  thumbnails: createEVCableThumbnails(),
  
  OverviewData: {
    BgImage: chargingCableBgImages.overview,
    
    para: {
      active: false,
      data: [
        {
          subheading: 'Superior Build Quality',
          text: 'Our EV charging cables are engineered with premium materials and cutting-edge technology to ensure reliable, safe, and efficient charging for your electric vehicle.'
        },
        {
          subheading: 'Universal Compatibility',
          text: 'Designed to work seamlessly with most electric vehicles, our cables feature industry-standard connectors and are compatible with both Type 1 and Type 2 charging ports.'
        },
        {
          subheading: 'Pre-Configured for Seamless Integration',
          text: 'What sets this charging cable apart is its compatibility with charging stations pre-configured with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.',
          active: true
        },
      ]
    },
    
    list: {
      active: true,
      title: 'Product Specifications',
      data: [
        'Compatible with Type 1 & Type 2 connectors supports up to 3-phase charging',
        'Rated for up to 32A safely delivers a charging power of up to 22 kW',
        'Cable length up to 8 meters offers maximum flexibility and reach',
        'IP54 rated – weather-resistant and safe for outdoor use',
        'Includes a durable carry case for easy transport and protection',
        'CE certified by a leading independent testing laboratory',
        'Engineered with Blaupunkt commitment to quality and safety'
      ]
    },
    
    IdealandFeaturesImage: chargingCableProductImages.feature,
    features: createStandardFeatures(),
    
    ideal: {
      active: false,
      title: 'Ideal',
      data: [
        'Home charging stations for electric vehicles',
        'Commercial charging points in parking lots and garages',
        'Fleet management for electric car rental services',
        'Emergency charging solutions for long-distance travel'
      ]
    },
    
    image: chargingCableProductImages.overview
  },
  
  highlightsData: createHighlightsData('Key Features', [
    { 
      title: 'Universal Compatibility', 
      description: 'Works with Tesla, BMW, Audi, and all major EV brands', 
      icon: 'compatibility' 
    },
    { 
      title: 'Weather Resistant', 
      description: 'IP67 rated for all-weather outdoor use', 
      icon: 'weather' 
    },
    { 
      title: 'Fast Charging', 
      description: 'Supports up to 32A charging current', 
      icon: 'speed' 
    },
    { 
      title: 'Portable Design', 
      description: 'Lightweight and easy to store in your vehicle', 
      icon: 'portable' 
    }
  ]),
    specificationsData: createSpecificationsData('Specifications', [
    { label: 'Working Voltage', value: '110V – 250V' },
    { label: 'Rated Current', value: 'Up to 32A' },
    { label: 'Insulation Resistance', value: '>1000 MΩ' },
    { label: 'Dielectric Strength', value: '2000V' },
    { label: 'Contact Resistance', value: '< 0.5 mΩ' },
    { label: 'Insertion & Extraction Force', value: '80N – 100N' },
    { label: 'Main Materials', value: 'Thermoplastic, Silicon Rubber, Copper Alloy' },
    { label: 'Cable Specification', value: '3×2.5mm² + 2×0.5mm²' },
    { label: 'Cable Length', value: '8 meters' },
    { label: 'Fire Rating', value: 'UL94 V-0 (Flame Retardant)' },
    { label: 'Operating Temperature', value: '-30°C to +50°C' },
    { label: 'Net Weight', value: '1.8 kg' }
  ]),
    modelsData: createFlatCableModels([
    {
      name: '2 Meter Section',
      models: [
        { 
          modelCode: 'B1P16AT1', 
          connectorType: 'Type 1', 
          current: '16A', 
          cableLength: '2 Meters', 
          phaseType: 'Single - Phase',
          image: chargingCableImages.cablePd1
        },
        { 
          modelCode: 'B2P16AT1', 
          connectorType: 'Type 2', 
          current: '16A', 
          cableLength: '2 Meters', 
          phaseType: 'Single - Phase',
          image: chargingCableImages.cablePd1
        }
      ]
    },
    {
      name: '5 Meter Section',
      models: [
        { 
          modelCode: 'B1P16AT2', 
          connectorType: 'Type 1', 
          current: '16A', 
          cableLength: '5 Meters', 
          phaseType: 'Single - Phase', 
          popular: true,
          image: chargingCableImages.cablePd2
        },
        { 
          modelCode: 'B2P16AT2', 
          connectorType: 'Type 2', 
          current: '16A', 
          cableLength: '5 Meters', 
          phaseType: 'Single - Phase',
          image: chargingCableImages.cablePd2
        },
        { 
          modelCode: 'B2P32AT2', 
          connectorType: 'Type 2', 
          current: '32A', 
          cableLength: '5 Meters', 
          phaseType: 'Three - Phase',
          image: chargingCableImages.cablePd2
        },
        { 
          modelCode: 'B2P16AT3', 
          connectorType: 'Type 2', 
          current: '16A', 
          cableLength: '5 Meters', 
          phaseType: 'Three - Phase',
          image: chargingCableImages.cablePd2
        },
        { 
          modelCode: 'B2P32AT3', 
          connectorType: 'Type 2', 
          current: '32A', 
          cableLength: '5 Meters', 
          phaseType: 'Three - Phase',
          image: chargingCableImages.cablePd2
        },
        { 
          modelCode: 'B2P16AT4', 
          connectorType: 'Type 2', 
          current: '16A', 
          cableLength: '5 Meters', 
          phaseType: 'Single - Phase',
          image: chargingCableImages.cablePd2
        }
      ]
    }
  ]),
  
  supplierData: DEFAULT_SUPPLIER_DATA
}

// =============================================================================
// EASY ACCESS EXPORTS
// =============================================================================

export const chargingCablesConfig = {
  // Main data
  data: chargingCablesData,
  
  // Quick access to images
  images: chargingCableImages,
  backgroundImages: chargingCableBgImages,
  productImages: chargingCableProductImages,
  
  // Quick access to key sections
  overview: chargingCablesData.OverviewData,
  highlights: chargingCablesData.highlightsData,
  specifications: chargingCablesData.specificationsData,
  models: chargingCablesData.modelsData,
  supplier: chargingCablesData.supplierData
}

// Default export
export default chargingCablesData
