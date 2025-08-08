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
  description:
    'Durable, efficient, and compatible with most electric vehicles.',
  active: true,
  breadcrumbs: createBreadcrumbs('EV Charging Cables', '/charging-cables'),
  buttonText: BUTTON_TEXTS.connect,
  mainImage: CHARGING_CABLES_IMAGES.MAIN,
  imageAlt: 'EV Charging Cable',
  thumbnails: createEVCableThumbnails(),

  OverviewData: {
    BgImage: chargingCableBgImages.evmoboverbg,

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
        }
      ]
    },

    list: {
      active: true,
      title: 'Product Specifications',
      data: [
        'Compatible with Type 1, Type 2, NACS cable and GBT cable connectors supports up to 3-phase charging',
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

    imageHeight: {
      spec: {
        mobile: '600px',
        desktop: '800px'
      }
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
    { label: 'Working Voltage', value: '110V – 440V' },
    { label: 'Rated Current', value: 'Up to 32A' },
    { label: 'Insulation Resistance', value: '>1000 MΩ' },
    { label: 'Dielectric Strength', value: '2000V' },
    { label: 'Contact Resistance', value: '< 0.5 mΩ' },
    { label: 'Insertion & Extraction Force', value: '80N – 100N' },
    {
      label: 'Main Materials',
      value: 'Thermoplastic, Silicon Rubber, Copper Alloy'
    },
    { label: 'Cable Specification', value: '3×2.5mm² + 2×0.5mm²' },
    { label: 'Cable Length', value: '8 meters' },
    { label: 'Fire Rating', value: 'UL94 V-0 (Flame Retardant)' },
    { label: 'Operating Temperature', value: '-30°C to +50°C' },
    { label: 'Net Weight', value: '1.8 kg' }
  ]),
  modelsData: {
    title: 'Models',
    groupingMethod: 'none',
    models: [
      {
        modelCode: 'A1P16AT2',
        connectorType: 'Type 2 to Type 2',
        current: '16A',
        cableLength: '8 Meters',
        phaseType: 'Single - Phase',
        ipClass: '54',
        popular: false,
        image: chargingCableImages.cablePd2
      },
      {
        modelCode: 'A1P32AT2',
        connectorType: 'Type 2 to Type 2',
        current: '32A',
        cableLength: '8 Meters',
        phaseType: 'Single - Phase',
        ipClass: '54',
        popular: false,
        image: chargingCableImages.cablePd2
      },
      {
        modelCode: 'A3P16AT2',
        connectorType: 'Type 2 to Type 2',
        current: '16A',
        cableLength: '8 Meters',
        phaseType: 'Three - Phase',
        ipClass: '54',
        popular: false,
        image: chargingCableImages.cablePd2
      },
      {
        modelCode: 'A3P32AT2',
        connectorType: 'Type 2 to Type 2',
        current: '32A',
        cableLength: '8 Meters',
        phaseType: 'Three - Phase',
        ipClass: '54',
        popular: false,
        image: chargingCableImages.cablePd2
      },
      {
        modelCode: 'A1P16AT1',
        connectorType: 'Type 1 to Type 2',
        current: '16A',
        cableLength: '5 Meters',
        phaseType: 'Single - Phase',
        ipClass: '54',
        popular: false,
        image: chargingCableImages.cablePd2
      },
      {
        modelCode: 'A1P32AT1',
        connectorType: 'Type 1 to Type 2',
        current: '32A',
        cableLength: '5 Meters',
        phaseType: 'Single - Phase',
        ipClass: '54',
        popular: false,
        image: chargingCableImages.cablePd2
      },
      {
        modelCode: 'B1P16AT1',
        connectorType: 'Type 1 to Type 2',
        current: '16A',
        cableLength: '2 Meters',
        phaseType: 'Single - Phase',
        ipClass: '65',
        popular: false,
        image: chargingCableImages.cablePd1
      },
      {
        modelCode: 'B1P16AT2',
        connectorType: 'Type 1 to Type 2',
        current: '16A',
        cableLength: '2 Meters',
        phaseType: 'Single - Phase',
        ipClass: '65',
        popular: false,
        image: chargingCableImages.cablePd1
      }
    ]
  },

  // =============================================================================
  // DOWNLOAD DATA SECTION
  // =============================================================================
  downloadData: {
    title: 'Downloads & Documentation',
    description:
      'Access technical specifications, installation guides, and certification documents',
    categories: [
      {
        name: 'Technical Specifications',
        description:
          'Detailed product specifications and technical documentation',
        files: [
          {
            name: 'Type 1 Cable Specifications (B1P16AT1)',
            description:
              'Technical specifications for B1P16AT1 model',
            url: '/src/assets/pdf/Cables/datasheet/B1P16AT1 - en_web.pdf',
            size: '2.1 MB',
            type: 'PDF',
            modelCodes: ['B1P16AT1']
          },
          {
            name: 'Type 1 Cable Specifications (B1P16AT2)',
            description: 'Technical specifications for B1P16AT2 model',
            url: '/src/assets/pdf/Cables/datasheet/B1P16AT2 - en_web.pdf',
            size: '1.9 MB',
            type: 'PDF',
            modelCodes: ['B1P16AT2']
          },
          {
            name: 'Type 1 Cable Specifications (A1P Series)',
            description:
              'Technical specifications for A1P16AT1 and A1P32AT1 models',
            url: '/src/assets/pdf/Cables/datasheet/A1P16AT1- A1P32AT1.pdf',
            size: '1.8 MB',
            type: 'PDF',
            modelCodes: ['A1P16AT1', 'A1P32AT1']
          },
          {
            name: 'Type 2 to Type 2 Cable Specifications',
            description: 'Comprehensive specifications for Type 2 to Type 2 cables',
            url: '/src/assets/pdf/Cables/datasheet/Type2 to Type2 A1P16AT2,A1P32AT2,A3P16AT2,A3P32AT2.pdf',
            size: '2.5 MB',
            type: 'PDF',
            modelCodes: ['A1P16AT2', 'A1P32AT2', 'A3P16AT2', 'A3P32AT2']
          },
          {
            name: 'C3P Series Cable Specifications',
            description:
              'Technical specifications for C3P16AT2 and C3P32AT2 models',
            url: '/src/assets/pdf/Cables/datasheet/C3P16AT2_ C3P32AT2_web.pdf',
            size: '1.9 MB',
            type: 'PDF',
            modelCodes: ['C3P16AT2', 'C3P32AT2']
          }
        ]
      },
      {
        name: 'Certification Documents',
        description: 'CE certification and compliance documentation',
        files: [
          {
            name: 'Declaration of Conformity - C3P Series',
            description: 'CE certification document for C3P16AT2 cable model',
            url: '/src/assets/pdf/Cables/Delecration/Declaration of conformity C3P16AT2.pdf',
            size: '850 KB',
            type: 'PDF',
            modelCodes: ['C3P16AT2']
          }
        ]
      }
    ]
  },

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
  evmoboverbg: chargingCableBgImages.evmoboverbg,
  evmodelbg: chargingCableBgImages.evmodelbg,
  overview: chargingCablesData.OverviewData,
  highlights: chargingCablesData.highlightsData,
  specifications: chargingCablesData.specificationsData,
  models: chargingCablesData.modelsData,
  downloads: chargingCablesData.downloadData,
  supplier: chargingCablesData.supplierData
}

// Default export
export default chargingCablesData
