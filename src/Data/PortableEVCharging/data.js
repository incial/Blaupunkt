// =============================================================================
// PORTABLE EV CHARGING DATA
// =============================================================================
// Complete data configuration for Portable EV Charging section
// =============================================================================

import { 
  createBreadcrumbs, 
  createHighlightsData,
  createSpecificationsData,
  BUTTON_TEXTS
} from '../Common/utilities.js'

import { 
  portableEvChargingImages,
  portableEvChargingBgImages,
  portableEvChargingProductImages,
  createPortableEvChargingThumbnails,
  PORTABLE_EV_CHARGING_IMAGES
} from './assets.js'

// =============================================================================
// PORTABLE EV CHARGING SPECIFIC UTILITIES
// =============================================================================

/**
 * Creates Monta backend integration data specific to portable EV chargers
 * @param {boolean} isActive - Whether the integration is active
 * @returns {Object} Monta integration configuration
 */

// =============================================================================
// PORTABLE EV CHARGING SPECIFIC UTILITIES
// =============================================================================

// =============================================================================
// PORTABLE EV CHARGING MAIN DATA
// =============================================================================

export const portableEvChargingData = {
  title: 'Portable EV Charging',
  description: 'Charge Anywhere, Anytime.',
  active: true,
  breadcrumbs: createBreadcrumbs('Portable EV Charging', '/portable-ev-charging'),
  buttonText: BUTTON_TEXTS.discover,
  mainImage: PORTABLE_EV_CHARGING_IMAGES.MAIN,
  imageAlt: 'Portable EV Charger',
  thumbnails: createPortableEvChargingThumbnails(),
  
  OverviewData: {
    BgImage: portableEvChargingImages.cable2,
      para: {
      active: true,
      data: [        {
          subheading: 'Portable, powerful, and ready for every journey',
          text: [
            "Blaupunkt's Portable EV Chargers (Mode 2) offer maximum flexibility, allowing you to charge your electric vehicle wherever a 230V or 400V outlet is available."
          ]
        },
        {
          text: [
            "Designed for both single-phase and three-phase setups, these chargers adapt to your environment, delivering up to 3.7 kW (Single Phase) or 11 kW (Three Phase) of charging power. Adjustable amperage settings (8–16A) ensure optimal performance based on the available power source."
          ]
        },
        {
          text: [
            "Safety is prioritized with an integrated RCD sensor and 6mA DC fault protection (Type B)."
          ]
        },
      ]
    },
      list: {
      active: false,
      title: 'Key Features',
      data: [
        'Mode 2 portable charging capability',
        'Compatible with 230V and 400V outlets',
        'Single-phase (3.7kW) and three-phase (11kW) options',
        'Adjustable amperage settings (8A-16A)',
        'Integrated RCD sensor and DC fault protection',
        'Type 2 connector for universal EV compatibility',
        '8-meter cable for maximum reach',
        'Protective carrying case included',
        'IP54/IP65 weather protection rating'
      ]
    },
      IdealandFeaturesImage: portableEvChargingImages.cable2,    features: {
      active: true,
      title: '',
      isListFormat: false, // true for list, false for paragraph
      data: [
        'Built to withstand real-world conditions, the chargers feature an IP54/IP65 rating for water and dust resistance.',
        'With an 8-meter cable for maximum reach and a protective carry case included for easy transport and storage, Blaupunkt\'s Portable Chargers are the perfect companions for EV drivers needing reliable, on-the-go charging.',
        'Compatible with all electric vehicles using a Type 2 connector.'
      ]
    },    ideal: {
      active: false,
      title: 'Ideal For',
      isListFormat: true, // true for list, false for paragraph
      data: [
        'Home charging for daily EV use',
        'Emergency charging when on the road',
        'Workplace charging solutions',
        'Holiday homes and temporary locations'
      ]
    },


      imageHeight: {
      spec: {
        mobile: '400px',
        desktop: '600px'
      },
      overview: {
        mobile: '400px',
        desktop: '500px'
      }
    },
    
    image: portableEvChargingProductImages.cable1
  },
    highlightsData: createHighlightsData('Key Benefits', [
    { 
      title: 'Flexible Power', 
      description: '3.7kW single-phase or 11kW three-phase charging', 
      icon: 'portable' 
    },
    { 
      title: 'Adjustable Current', 
      description: 'Amperage settings from 8A to 16A for optimal performance', 
      icon: 'easy' 
    },
    { 
      title: 'Advanced Safety', 
      description: 'Integrated RCD sensor and 6mA DC fault protection', 
      icon: 'safety' 
    },
    { 
      title: 'Weather Resistant', 
      description: 'IP54/IP65 rated for water and dust protection', 
      icon: 'weather' 
    }
  ]),specificationsData: createSpecificationsData('Technical Specifications', [
    { label: 'Rated Current', value: '8–10–13–16A' },
    { label: 'Insulation Resistance', value: '>1000MΩ' },
    { label: 'Resistance Voltage', value: '2000V' },
    { label: 'Contact Resistance', value: 'Less than 0.5mΩ' },
    { label: 'Insertion / Extraction Force', value: '80N < F < 100N' },
    { label: 'Main Material', value: 'Thermoplastic / Silicon Rubber / Copper Alloy' },
    { label: 'Cable Length', value: '8 meters' },
    { label: 'Fire Rating', value: 'UL94 V-0' },
    { label: 'Operating Temperature', value: '-30°C to +50°C' },
    { label: 'Net Weight', value: '2.8 kg' }
  ]),
  modelsData: (() => {
    // Create sections for portable EV charging models
    const sections = [
      {
        name: 'Mode 2 Portable Chargers',
        description: 'Flexible charging solutions for all environments',
        models: [
          {
            modelCode: 'P1PM2T2',
            maximumPower: '3.7kW',
            connectorType: 'Type 2',
            chargingPower: '3.7 kW',
            powerPhase: 'Single-Phase',
            ipClass: 'IP54',
            workingVoltage: '110V~250V',
            cable: '3 x 2.5mm² + 2 x 0.5mm²',
            dimensions: '300 x 200 x 100mm',
            weight: '2.5kg',
            current: '16A',
            cableLength: '8 Meters',
            phaseType: 'Single - Phase',
            protectionRating: 'IP54',
            popular: true,
            image: portableEvChargingImages.portEvPd1
          },
          {
            modelCode: 'P3PM2T2',
            maximumPower: '11kW',
            connectorType: 'Type 2',
            chargingPower: '11 kW',
            powerPhase: 'Three-Phase',
            ipClass: 'IP54',
            workingVoltage: '380~400V',
            cable: '5 x 2.5mm² + 2 x 0.5mm²',
            dimensions: '320 x 220 x 110mm',
            weight: '3.2kg',
            current: '16A',
            cableLength: '8 Meters',
            phaseType: 'Three - Phase',
            protectionRating: 'IP65',
            image: portableEvChargingImages.portEvPd1
          }
        ]
      }
    ];

    // Flatten all models from all sections into a single array for Models component
    const flatModels = [];
    sections.forEach(section => {
      section.models.forEach(model => {
        flatModels.push({
          ...model,
          section: section.name,
          sectionDescription: section.description
        });
      });
    });

    return flatModels;
  })(),
  
  supplierData: {
    manufacturer: 'Blaupunkt Technologies',
    suppliers: [
      {
        name: 'PortableCharge Ltd',
        region: 'Europe',
        contact: 'portable@portablecharge.eu',
        specialization: 'Portable charging solutions and accessories'
      },
      {
        name: 'MobileEV Solutions',
        region: 'North America',
        contact: 'sales@mobileev.com',
        specialization: 'Portable and mobile charging devices'
      },
      {
        name: 'FlexCharge Asia',
        region: 'Asia Pacific',
        contact: 'info@flexcharge-asia.com',
        specialization: 'Compact charging solutions'
      }
    ]
  },

  // =============================================================================
  // DOWNLOAD DATA SECTION
  // =============================================================================
  downloadData: {
    title: 'Downloads & Documentation',
    description:
      'Access technical specifications, user manuals, and certification documents',
    categories: [
      {
        name: 'Technical Specifications',
        description:
          'Detailed product specifications and technical documentation',
        files: [
          {
            name: 'P1PM2T2 - Technical Specifications (English)',
            description:
              'Technical specifications for P1PM2T2 model',
            url: '/src/assets/pdf/PortStation/datasheet/P1PM2T2 - Datasheet_web.pdf',
            size: '2.1 MB',
            type: 'PDF',
            modelCodes: ['P1PM2T2']
          },
          {
            name: 'P1PM2T2 - Technical Specifications (German)',
            description:
              'Technical specifications for P1PM2T2 model in German',
            url: '/src/assets/pdf/PortStation/datasheet/P1PM2T2 - Datasheet_ger_web.pdf',
            size: '1.8 MB',
            type: 'PDF',
            modelCodes: ['P1PM2T2']
          },
          {
            name: 'P1P6MT2L - Technical Specifications (English)',
            description:
              'Technical specifications for P1P6MT2L model',
            url: '/src/assets/pdf/PortStation/datasheet/P1P6MT2L.pdf',
            size: '1.9 MB',
            type: 'PDF',
            modelCodes: ['P1P6MT2L']
          },
          {
            name: 'P1P6MT2L - Technical Specifications (German)',
            description:
              'Technical specifications for P1P6MT2L model in German',
            url: '/src/assets/pdf/PortStation/datasheet/P1P6MT2L_DE.pdf',
            size: '1.9 MB',
            type: 'PDF',
            modelCodes: ['P1P6MT2L']
          },
          {
            name: 'P3PM2T2 - Technical Specifications (English)',
            description:
              'Technical specifications for P3PM2T2 model',
            url: '/src/assets/pdf/PortStation/datasheet/P3PM2T2.pdf',
            size: '2.0 MB',
            type: 'PDF',
            modelCodes: ['P3PM2T2']
          },
          {
            name: 'P3PM2T2 - Technical Specifications (German)',
            description:
              'Technical specifications for P3PM2T2 model in German',
            url: '/src/assets/pdf/PortStation/datasheet/P3PM2T2_DE.pdf',
            size: '2.0 MB',
            type: 'PDF',
            modelCodes: ['P3PM2T2']
          },
          {
            name: 'P3P6MT2 - Technical Specifications (English)',
            description:
              'Technical specifications for P3P6MT2 model',
            url: '/src/assets/pdf/PortStation/datasheet/P3P6MT2.pdf',
            size: '2.1 MB',
            type: 'PDF',
            modelCodes: ['P3P6MT2']
          },
          {
            name: 'P3P6MT2 - Technical Specifications (German)',
            description:
              'Technical specifications for P3P6MT2 model in German',
            url: '/src/assets/pdf/PortStation/datasheet/P3P6MT2_DE.pdf',
            size: '2.1 MB',
            type: 'PDF',
            modelCodes: ['P3P6MT2']
          }
        ]
      },
      {
        name: 'Certification Documents',
        description: 'CE certification and compliance documentation',
        files: [
          {
            name: 'Declaration of Conformity - P1PM2T2',
            description: 'CE certification document for P1PM2T2 model',
            url: '/src/assets/pdf/PortStation/Delecration/Declaration of conformity P1PM2T2.pdf',
            size: '850 KB',
            type: 'PDF',
            modelCodes: ['P1PM2T2']
          }
        ]
      }
    ]
  }
}

// =============================================================================
// EASY ACCESS EXPORTS
// =============================================================================

export const portableEvChargingConfig = {
  // Main data
  data: portableEvChargingData,
  
  // Quick access to images
  images: portableEvChargingImages,
  backgroundImages: portableEvChargingBgImages,
  productImages: portableEvChargingProductImages,
  
  // Quick access to key sections
  overview: portableEvChargingData.OverviewData,
  highlights: portableEvChargingData.highlightsData,
  specifications: portableEvChargingData.specificationsData,
  models: portableEvChargingData.modelsData,
  downloads: portableEvChargingData.downloadData,
  supplier: portableEvChargingData.supplierData
}

// Default export
export default portableEvChargingData
