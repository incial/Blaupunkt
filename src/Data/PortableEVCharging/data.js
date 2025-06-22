// =============================================================================
// PORTABLE EV CHARGING DATA
// =============================================================================
// Complete data configuration for Portable EV Charging section
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
  portableEvChargingImages,
  portableEvChargingBgImages,
  portableEvChargingProductImages,
  createPortableEvChargingThumbnails,
  PORTABLE_EV_CHARGING_IMAGES
} from './assets.js'

// =============================================================================
// PORTABLE EV CHARGING MAIN DATA
// =============================================================================

export const portableEvChargingData = {
  title: 'Portable EV Charging',
  description: 'Compact and convenient portable charging solution for electric vehicles.',
  active: true,
  breadcrumbs: createBreadcrumbs('Portable EV Charging', '/portable-ev-charging'),
  buttonText: BUTTON_TEXTS.discover,
  mainImage: PORTABLE_EV_CHARGING_IMAGES.MAIN,
  imageAlt: 'Portable EV Charger',
  thumbnails: createPortableEvChargingThumbnails(),
  
  OverviewData: {
    BgImage: portableEvChargingBgImages.overview,
    
    para: {
      active: true,
      data: [
        {
          subheading: 'Portable Charging Freedom',
          text: "Blaupunkt's portable EV charger offers the ultimate flexibility for electric vehicle owners. Whether you're at home, work, or on the road, this compact charging solution ensures you're never stranded without power."
        },
        {
          subheading: 'Intelligent Safety Features',
          text: "Equipped with advanced safety systems including ground fault protection, over-voltage protection, and temperature monitoring, our portable charger provides peace of mind during every charging session."
        },
        {
          subheading: 'Universal Compatibility',
          text: "Compatible with all Type 2 electric vehicles and designed to work with standard household outlets, making it the perfect backup charging solution for any EV owner.",
          active: true
        },
        createMontaIntegrationData(false, 'portable charger')
      ]
    },
    
    list: {
      active: true,
      title: 'Key Features',
      data: [
        'Compact and lightweight design for easy portability',
        'Compatible with standard household outlets (230V)',
        'Built-in safety features and automatic fault detection',
        'LED status indicators for charging progress',
        'Weather-resistant construction (IP65 rated)',
        'Type 2 connector for universal EV compatibility',
        'Adjustable charging current (6A, 8A, 10A, 13A, 16A)',
        'Includes protective carrying case'
      ]
    },
    
    IdealandFeaturesImage: portableEvChargingProductImages.feature,
    features: createStandardFeatures([
      'Compact portable design for travel convenience',
      'Multiple current settings for different power sources',
      'Advanced safety monitoring and protection',
      'Weather-resistant IP65 construction',
      'LED charging status indicators'
    ]),
    
    ideal: {
      active: true,
      title: 'Ideal For',
      data: [
        'Emergency charging situations',
        'Travel and vacation charging needs',
        'Apartment dwellers without dedicated charging',
        'Backup charging solution for home use',
        'Workplace charging where infrastructure is limited'
      ]
    },
    
    image: portableEvChargingProductImages.main
  },
  
  highlightsData: createHighlightsData('Key Benefits', [
    { 
      title: 'Ultra Portable', 
      description: 'Lightweight design fits easily in your vehicle', 
      icon: 'portable' 
    },
    { 
      title: 'Plug & Play', 
      description: 'Works with any standard household outlet', 
      icon: 'easy' 
    },
    { 
      title: 'Smart Safety', 
      description: 'Automatic fault detection and protection', 
      icon: 'safety' 
    },
    { 
      title: 'Weather Proof', 
      description: 'IP65 rated for outdoor use in all conditions', 
      icon: 'weather' 
    }
  ]),
  
  specificationsData: createSpecificationsData('Technical Specifications', [
    { label: 'Power Output', value: '3.7kW (16A) / 2.3kW (10A)' },
    { label: 'Input Voltage', value: '230V AC single-phase' },
    { label: 'Current Settings', value: '6A, 8A, 10A, 13A, 16A' },
    { label: 'Connector Type', value: 'Type 2' },
    { label: 'Cable Length', value: '5m charging cable' },
    { label: 'Protection Rating', value: 'IP65' },
    { label: 'Weight', value: '2.5kg' },
    { label: 'Dimensions', value: '300 x 200 x 100mm' }
  ]),
  
  modelsData: createChargerModels([
    {
      name: 'Standard Series',
      description: 'Essential portable charging for everyday use',
      models: [
        {
          modelCode: 'BP-PORT-16A',
          maximumPower: '3.7kW',
          connectorType: 'Type 2',
          outputVoltage: '230V AC',
          dimensions: '300 x 200 x 100mm',
          weight: '2.5kg',
          popular: true
        },
        {
          modelCode: 'BP-PORT-10A',
          maximumPower: '2.3kW',
          connectorType: 'Type 2',
          outputVoltage: '230V AC',
          dimensions: '280 x 180 x 90mm',
          weight: '2.0kg'
        }
      ]
    },
    {
      name: 'Premium Series',
      description: 'Advanced portable charging with smart features',
      models: [
        {
          modelCode: 'BP-PORT-16A-SMART',
          maximumPower: '3.7kW',
          connectorType: 'Type 2',
          outputVoltage: '230V AC',
          dimensions: '320 x 210 x 110mm',
          weight: '3.0kg',
          popular: true
        },
        {
          modelCode: 'BP-PORT-10A-SMART',
          maximumPower: '2.3kW',
          connectorType: 'Type 2',
          outputVoltage: '230V AC',
          dimensions: '300 x 190 x 100mm',
          weight: '2.7kg'
        }
      ]
    }
  ]),
  
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
  supplier: portableEvChargingData.supplierData
}

// Default export
export default portableEvChargingData
