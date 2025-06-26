// =============================================================================
// DC CHARGING STATION DATA
// =============================================================================
// Complete data configuration for DC Charging Station section
// =============================================================================

import { 
  createBreadcrumbs, 
  createHighlightsData,
  createSpecificationsData,
  BUTTON_TEXTS
} from '../Common/utilities.js'

import { 
  dcChargingStationImages,
  dcChargingStationBgImages,
  dcChargingStationProductImages,
  createDCChargingStationThumbnails,
  DC_CHARGING_STATION_IMAGES
} from './assets.js'

// =============================================================================
// DC CHARGING STATION SPECIFIC UTILITIES
// =============================================================================

/**
 * Creates Monta backend integration data specific to DC charging stations
 * @param {boolean} isActive - Whether the integration is active
 * @returns {Object} Monta integration configuration
 */
const createMontaIntegrationData = (isActive = true) => ({
  subheading: 'Advantages Monta Backend Integration:',
  active: isActive,
  listItems: [
    'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',

    'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',

    'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
  ]
})

// =============================================================================
// DC CHARGING STATION MAIN DATA
// =============================================================================

export const dcChargingStationData = {
  title: 'DC Charging Station',
  description: 'High-power DC charging solution for commercial and public use.',
  active: true,
  breadcrumbs: createBreadcrumbs('DC Charging Station', '/dc-charging-station'),
  buttonText: BUTTON_TEXTS.learnMore,
  mainImage: DC_CHARGING_STATION_IMAGES.MAIN,
  imageAlt: 'DC Charging Station',
  thumbnails: createDCChargingStationThumbnails(),
  
  OverviewData: {
    BgImage: dcChargingStationImages.dccharoverbg,
    
    para: {
      active: true,
      data: [
        {
          subheading: 'Powerful Performance in a Compact Design',
          text: "The Blaupunkt 30-40 kW DC Charger delivers rapid, reliable charging in a compact footprint, ideal for mid-power applications. Designed for versatility, this charger provides efficient charging times suited for commercial environments like parking facilities, office complexes, and retail centers."
        },
        {
          subheading: 'Durability and Safety You Can Rely On',
          text: "Engineered for performance and reliability, Blaupunkt’s 30-40 kW DC Charger is built to last in any environment. Its robust design ensures dependable charging whether installed indoors or outdoors, and its IP54-rated enclosure provides superior protection against dust, water, and other elements, guaranteeing long-term performance under a wide range of weather conditions."        },
        createMontaIntegrationData(true)
      ]
    },
    
    list: {
      active: false,
      title: 'Key Specifications',
      data: [
        'Power output: 50kW, 100kW, or 150kW configurations',
        'Input voltage: 400V AC 3-phase',
        'Output voltage: 150V - 500V DC variable',
        'Multiple connector types: CCS, CHAdeMO, Type 2',
        'IP54 rated enclosure for outdoor installation',
        'Liquid cooling system for optimal performance',
        'Advanced safety systems including ground fault protection',
        'Remote monitoring and diagnostics capabilities'
      ]
    },
      IdealandFeaturesImage: dcChargingStationProductImages.feature,
    features: {
      active: true,
      title: 'User-Friendly and Intuitive Operation',
      isListFormat: false, // true for list, false for paragraph
      data: [
        'This DC charger is equipped with an easy-to-use interface, ensuring smooth operation for both new and experienced users. With RFID authorization, access to the charger is secure, allowing only authorized users to charge their vehicles. Additionally, the OCPP 1.6 compatibility ensures seamless integration into existing charging networks for remote monitoring and control. Ideal For: Commercial sites that require reliable, mid-speed EV charging solutions. Office buildings or small fleets that need faster charging than typical AC units. Locations seeking a balance of speed, affordability, and durability.'
      ]
    },
      ideal: {
      active: true,
      title: 'Ideal For',
      isListFormat: true, // true for list, false for paragraph
      data: [
        'Highway rest stops and service areas',
        'Commercial parking facilities and shopping centers',
        'Fleet charging depots for commercial vehicles',
        'Public charging networks and hubs',
        'Destination charging at hotels and businesses'
      ]
    },
    
      imageHeight: {
      spec: {
        mobile: '400px',
        desktop: '1000px'
      },
      overview: {
        mobile: '400px',
        desktop: '1000px'
      }
    },
    
    image: dcChargingStationImages.dcMid
  },
  
  highlightsData: createHighlightsData('Key Features', [
    { 
      title: 'Rapid Charging', 
      description: 'Up to 150kW power output for ultra-fast charging', 
      icon: 'speed' 
    },
    { 
      title: 'Universal Compatibility', 
      description: 'Supports CCS, CHAdeMO, and Type 2 connectors', 
      icon: 'compatibility' 
    },
    { 
      title: 'Weather Resistant', 
      description: 'IP54 rated for reliable outdoor operation', 
      icon: 'weather' 
    },
    { 
      title: 'Smart Monitoring', 
      description: 'Remote diagnostics and real-time monitoring', 
      icon: 'smart' 
    }
  ]),
    specificationsData: createSpecificationsData('Specifications', [
    { label: 'Product Dimensions', value: '780 × 580 × 205.5 mm (H × W × D)' },
    { label: 'Work Altitude', value: 'Up to 2000m' },
    { label: 'Operating Temperature', value: '-20°C to +55°C' },
    { label: 'Storage Temperature', value: '-40°C to +85°C' },
    { label: 'Installation', value: 'Wall-Mount or Pole-Mount' },
    { label: 'Ingress Protection', value: 'IP54' },
    { label: 'Net Weight', value: '67 kg' },
    { label: 'Start Mode', value: 'POS / RFID Reader / Plug & Play / Mobile App' },
    { label: 'Communication', value: 'LAN / 4G' },
    { label: 'Input Voltage', value: '380V AC ±15%, 3P+N+PE' },
    { label: 'Rated Power', value: '30 kW / 40 kW' },
    { label: 'Voltage Range', value: '150–1000V DC' },
    { label: 'Rated Current', value: '5–100A' },
    { label: 'Safety Features', value: 'Short Circuit Protection, Overload Protection, Over Temperature Protection, Leakage Protection, Over and Under Input Voltage Protection, Over and Under Output Voltage Protection, Over-current Protection' }
  ]),modelsData: (() => {
    // Create flat models array from sections for Models component compatibility
    const sections = [
      {
        name: '50kW Series',
        description: 'Entry-level DC fast charging for moderate-traffic locations',
        models: [
          {
            modelCode: 'BP-DC50-CCS',
            maximumPower: '50kW',
            current: '125A',
            cableLength: '5 Meters',
            connectorType: 'CCS',
            outputVoltage: '150V - 500V DC',
            dimensions: '1600 x 700 x 350mm',
            weight: '650kg',
            protectionRating: 'IP54',
            coolingSystem: 'Liquid cooling',
            phaseType: 'Three - Phase',
            image: dcChargingStationImages.dcPd1
          },
          {
            modelCode: 'BP-DC50-CHD',
            maximumPower: '50kW',
            current: '125A',
            cableLength: '5 Meters',
            connectorType: 'CHAdeMO',
            outputVoltage: '150V - 500V DC',
            dimensions: '1600 x 700 x 350mm',
            weight: '650kg',
            protectionRating: 'IP54',
            coolingSystem: 'Liquid cooling',
            phaseType: 'Three - Phase',
            image: dcChargingStationImages.dcPd2
          }
        ]
      }
    ];

    // Flatten all models from all sections into a single array
    const flatModels = [];
    sections.forEach(section => {
      section.models.forEach(model => {
        flatModels.push({
          ...model,
          section: section.name
        });
      });
    });

    return {
      title: 'Models',
      groupingMethod: 'section',
      models: flatModels,
    };
  })(),
  
  supplierData: {
    manufacturer: 'Blaupunkt Technologies',
    suppliers: [
      {
        name: 'DCPower Solutions',
        region: 'Europe',
        contact: 'dc@dcpower.eu',
        specialization: 'High-power DC charging infrastructure'
      },
      {
        name: 'FastCharge America',
        region: 'North America',
        contact: 'sales@fastcharge-am.com',
        specialization: 'Commercial DC charging networks'
      },
      {
        name: 'PowerTech Asia',
        region: 'Asia Pacific',
        contact: 'info@powertech-asia.com',
        specialization: 'DC fast charging solutions'
      }
    ]
  }
}

// =============================================================================
// EASY ACCESS EXPORTS
// =============================================================================

export const dcChargingStationConfig = {
  // Main data
  data: dcChargingStationData,
  
  // Quick access to images
  images: dcChargingStationImages,
  backgroundImages: dcChargingStationBgImages,
  productImages: dcChargingStationProductImages,
  
  // Quick access to key sections
  overview: dcChargingStationData.OverviewData,
  highlights: dcChargingStationData.highlightsData,
  specifications: dcChargingStationData.specificationsData,
  models: dcChargingStationData.modelsData,
  supplier: dcChargingStationData.supplierData
}

// Default export
export default dcChargingStationData
