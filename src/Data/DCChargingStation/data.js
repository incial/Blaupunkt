// =============================================================================
// DC CHARGING STATION DATA
// =============================================================================
// Complete data configuration for DC Charging Station section
// =============================================================================

import { 
  createBreadcrumbs, 
  createMontaIntegrationData, 
  createStandardFeatures,
  createHighlightsData,
  createSpecificationsData,
  createChargerModels,
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
    BgImage: dcChargingStationBgImages.overview,
    
    para: {
      active: true,
      data: [
        {
          subheading: 'High-Power DC Charging Technology',
          text: "Blaupunkt's DC charging station delivers rapid charging capabilities with power outputs ranging from 50kW to 150kW, enabling electric vehicles to charge from 10% to 80% in as little as 30 minutes."
        },
        {
          subheading: 'Commercial-Grade Reliability',
          text: "Engineered for heavy-duty commercial use, our DC charging stations feature robust construction, advanced cooling systems, and comprehensive safety features to ensure reliable operation in high-traffic environments."
        },
        {
          subheading: 'Universal Compatibility',
          text: "Supports all major connector types including CCS, CHAdeMO, and Type 2, ensuring compatibility with virtually all electric vehicles on the market today.",
          active: true
        },
        createMontaIntegrationData(true, 'DC charging station')
      ]
    },
    
    list: {
      active: true,
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
    features: createStandardFeatures([
      'Rapid charging capabilities up to 150kW',
      'Multiple connector support for universal compatibility',
      'Advanced thermal management system',
      'Remote diagnostics and monitoring',
      'Modular design for easy maintenance'
    ]),
    
    ideal: {
      active: true,
      title: 'Ideal Applications',
      data: [
        'Highway rest stops and service areas',
        'Commercial parking facilities and shopping centers',
        'Fleet charging depots for commercial vehicles',
        'Public charging networks and hubs',
        'Destination charging at hotels and businesses'
      ]
    },
    
    image: dcChargingStationProductImages.main
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
  
  specificationsData: createSpecificationsData('Technical Specifications', [
    { label: 'Power Output', value: '50kW / 100kW / 150kW' },
    { label: 'Input Voltage', value: '400V AC 3-phase' },
    { label: 'Output Voltage', value: '150V - 500V DC' },
    { label: 'Connector Types', value: 'CCS, CHAdeMO, Type 2' },
    { label: 'Protection Rating', value: 'IP54' },
    { label: 'Cooling System', value: 'Liquid cooling' },
    { label: 'Dimensions', value: '1800 x 800 x 400mm' },
    { label: 'Weight', value: '850kg' }
  ]),
  
  modelsData: createChargerModels([
    {
      name: '50kW Series',
      description: 'Entry-level DC fast charging for moderate-traffic locations',
      models: [
        {
          modelCode: 'BP-DC50-CCS',
          maximumPower: '50kW',
          connectorType: 'CCS',
          outputVoltage: '150V - 500V DC',
          dimensions: '1600 x 700 x 350mm',
          weight: '650kg'
        },
        {
          modelCode: 'BP-DC50-CHD',
          maximumPower: '50kW',
          connectorType: 'CHAdeMO',
          outputVoltage: '150V - 500V DC',
          dimensions: '1600 x 700 x 350mm',
          weight: '650kg'
        }
      ]
    },
    {
      name: '100kW Series',
      description: 'Balanced performance for commercial applications',
      models: [
        {
          modelCode: 'BP-DC100-CCS',
          maximumPower: '100kW',
          connectorType: 'CCS',
          outputVoltage: '150V - 500V DC',
          dimensions: '1700 x 750 x 375mm',
          weight: '750kg',
          popular: true
        },
        {
          modelCode: 'BP-DC100-CHD',
          maximumPower: '100kW',
          connectorType: 'CHAdeMO',
          outputVoltage: '150V - 500V DC',
          dimensions: '1700 x 750 x 375mm',
          weight: '750kg'
        }
      ]
    },
    {
      name: '150kW Series',
      description: 'High-performance charging for premium locations',
      models: [
        {
          modelCode: 'BP-DC150-CCS',
          maximumPower: '150kW',
          connectorType: 'CCS',
          outputVoltage: '150V - 500V DC',
          dimensions: '1800 x 800 x 400mm',
          weight: '850kg',
          popular: true
        },
        {
          modelCode: 'BP-DC150-CHD',
          maximumPower: '150kW',
          connectorType: 'CHAdeMO',
          outputVoltage: '150V - 500V DC',
          dimensions: '1800 x 800 x 400mm',
          weight: '850kg'
        }
      ]
    }
  ]),
  
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
