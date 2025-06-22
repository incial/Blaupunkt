// =============================================================================
// DC FAST CHARGING STATION DATA
// =============================================================================
// Complete data configuration for DC Fast Charging Station section
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
  dcFastChargingStationImages,
  dcFastChargingStationBgImages,
  dcFastChargingStationProductImages,
  createDCFastChargingStationThumbnails,
  DC_FAST_CHARGING_STATION_IMAGES
} from './assets.js'

// =============================================================================
// DC FAST CHARGING STATION MAIN DATA
// =============================================================================

export const dcFastChargingStationData = {
  title: 'DC Fast Charging Station',
  description: 'Ultra-high power DC charging for the fastest charging experience.',
  active: true,
  breadcrumbs: createBreadcrumbs('DC Fast Charging Station', '/dc-fast-charging-station'),
  buttonText: BUTTON_TEXTS.explore,
  mainImage: DC_FAST_CHARGING_STATION_IMAGES.MAIN,
  imageAlt: 'DC Fast Charging Station',
  thumbnails: createDCFastChargingStationThumbnails(),
  
  OverviewData: {
    BgImage: dcFastChargingStationBgImages.overview,
    
    para: {
      active: true,
      data: [
        {
          subheading: 'Ultra-Fast Charging Technology',
          text: "Blaupunkt's DC Fast Charging Station represents the pinnacle of charging technology, delivering up to 350kW of power for the fastest possible charging experience. Charge from 10% to 80% in under 20 minutes."
        },
        {
          subheading: 'Future-Proof Infrastructure',
          text: "Designed for next-generation electric vehicles with 800V architecture, our DC fast chargers are equipped with the latest charging protocols and can adapt to evolving industry standards."
        },
        {
          subheading: 'Enterprise-Grade Performance',
          text: "Built for high-throughput commercial operations, featuring advanced thermal management, modular design for easy maintenance, and comprehensive remote monitoring capabilities.",
          active: true
        },
        createMontaIntegrationData(true, 'DC fast charging station')
      ]
    },
    
    list: {
      active: true,
      title: 'Advanced Features',
      data: [
        'Power output: 150kW, 250kW, or 350kW configurations',
        'Support for 400V and 800V vehicle architectures',
        'Dynamic power sharing between multiple charging ports',
        'Advanced liquid cooling with redundant safety systems',
        'Modular design for scalability and easy maintenance',
        'Real-time monitoring and predictive maintenance',
        'Payment integration with multiple authentication methods',
        'Future-ready for autonomous vehicle charging'
      ]
    },
    
    IdealandFeaturesImage: dcFastChargingStationProductImages.feature,
    features: createStandardFeatures([
      'Ultra-fast charging up to 350kW power output',
      'Support for next-generation 800V vehicle architecture',
      'Dynamic power management and load balancing',
      'Advanced thermal management with liquid cooling',
      'Modular design for easy scalability and maintenance'
    ]),
    
    ideal: {
      active: true,
      title: 'Ideal Applications',
      data: [
        'Highway charging corridors and truck stops',
        'Urban fast charging hubs and transportation centers',
        'Fleet charging for commercial and delivery vehicles',
        'Premium retail locations and destination charging',
        'Future-ready installations for autonomous vehicles'
      ]
    },
    
    image: dcFastChargingStationProductImages.main
  },
  
  highlightsData: createHighlightsData('Advanced Features', [
    { 
      title: 'Ultra-Fast Power', 
      description: 'Up to 350kW for the fastest charging experience', 
      icon: 'lightning' 
    },
    { 
      title: 'Future Ready', 
      description: 'Supports next-gen 800V vehicle architecture', 
      icon: 'future' 
    },
    { 
      title: 'Smart Management', 
      description: 'Dynamic power sharing and load balancing', 
      icon: 'smart' 
    },
    { 
      title: 'Enterprise Grade', 
      description: 'Built for high-throughput commercial use', 
      icon: 'enterprise' 
    }
  ]),
  
  specificationsData: createSpecificationsData('Technical Specifications', [
    { label: 'Power Output', value: '150kW / 250kW / 350kW' },
    { label: 'Input Voltage', value: '400V AC 3-phase' },
    { label: 'Output Voltage', value: '200V - 800V DC' },
    { label: 'Connector Types', value: 'CCS, CHAdeMO, Type 2' },
    { label: 'Charging Ports', value: '1-4 simultaneous ports' },
    { label: 'Protection Rating', value: 'IP54' },
    { label: 'Cooling System', value: 'Advanced liquid cooling' },
    { label: 'Weight', value: '1200kg - 1800kg' }
  ]),
  
  modelsData: createChargerModels([
    {
      name: '150kW Series',
      description: 'High-performance charging for premium locations',
      models: [
        {
          modelCode: 'BP-DCFAST-150-1',
          maximumPower: '150kW',
          connectorType: 'CCS + CHAdeMO',
          outputVoltage: '200V - 800V DC',
          dimensions: '2000 x 900 x 450mm',
          weight: '1200kg'
        },
        {
          modelCode: 'BP-DCFAST-150-2',
          maximumPower: '150kW',
          connectorType: 'Dual CCS',
          outputVoltage: '200V - 800V DC',
          dimensions: '2000 x 900 x 450mm',
          weight: '1200kg',
          popular: true
        }
      ]
    },
    {
      name: '250kW Series',
      description: 'Ultra-fast charging for high-traffic locations',
      models: [
        {
          modelCode: 'BP-DCFAST-250-1',
          maximumPower: '250kW',
          connectorType: 'CCS + CHAdeMO',
          outputVoltage: '200V - 800V DC',
          dimensions: '2200 x 1000 x 500mm',
          weight: '1500kg',
          popular: true
        },
        {
          modelCode: 'BP-DCFAST-250-2',
          maximumPower: '250kW',
          connectorType: 'Dual CCS',
          outputVoltage: '200V - 800V DC',
          dimensions: '2200 x 1000 x 500mm',
          weight: '1500kg'
        }
      ]
    },
    {
      name: '350kW Series',
      description: 'Maximum power for next-generation vehicles',
      models: [
        {
          modelCode: 'BP-DCFAST-350-1',
          maximumPower: '350kW',
          connectorType: 'CCS + CHAdeMO',
          outputVoltage: '200V - 800V DC',
          dimensions: '2400 x 1200 x 600mm',
          weight: '1800kg'
        },
        {
          modelCode: 'BP-DCFAST-350-2',
          maximumPower: '350kW',
          connectorType: 'Dual CCS',
          outputVoltage: '200V - 800V DC',
          dimensions: '2400 x 1200 x 600mm',
          weight: '1800kg',
          popular: true
        }
      ]
    }
  ]),
  
  supplierData: {
    manufacturer: 'Blaupunkt Technologies',
    suppliers: [
      {
        name: 'UltraFast Charging Systems',
        region: 'Europe',
        contact: 'ultrafast@ufcs.eu',
        specialization: 'High-power DC charging infrastructure'
      },
      {
        name: 'MegaCharge Corporation',
        region: 'North America',
        contact: 'sales@megacharge.com',
        specialization: 'Enterprise charging solutions'
      },
      {
        name: 'HyperCharge Technologies',
        region: 'Asia Pacific',
        contact: 'info@hypercharge-tech.com',
        specialization: 'Ultra-fast charging systems'
      }
    ]
  }
}

// =============================================================================
// EASY ACCESS EXPORTS
// =============================================================================

export const dcFastChargingStationConfig = {
  // Main data
  data: dcFastChargingStationData,
  
  // Quick access to images
  images: dcFastChargingStationImages,
  backgroundImages: dcFastChargingStationBgImages,
  productImages: dcFastChargingStationProductImages,
  
  // Quick access to key sections
  overview: dcFastChargingStationData.OverviewData,
  highlights: dcFastChargingStationData.highlightsData,
  specifications: dcFastChargingStationData.specificationsData,
  models: dcFastChargingStationData.modelsData,
  supplier: dcFastChargingStationData.supplierData
}

// Default export
export default dcFastChargingStationData
