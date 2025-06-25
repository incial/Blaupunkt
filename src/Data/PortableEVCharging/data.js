// =============================================================================
// PORTABLE EV CHARGING DATA
// =============================================================================
// Complete data configuration for Portable EV Charging section
// =============================================================================

import { 
  createBreadcrumbs, 
  createStandardFeatures,
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
const createMontaIntegrationData = (isActive = true) => ({
  subheading: 'Monta Backend Integration Advantages',
  active: isActive,
  text: `What sets this portable charger apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.`,
  listItems: [
    'Effortless Setup: With pre-configuration, your portable charger is ready to use right out of the box.',
    'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions.',
    'Optimized Charging Efficiency: The pre-configuration ensures optimal power delivery for portable charging.',
    'Integrated Safety Features: Highest level of protection for mobile charging scenarios.',
    'Future-Ready Technology: Automatic updates and continuous feature enhancements via the Monta backend.'
  ]
})

// =============================================================================
// PORTABLE EV CHARGING SPECIFIC UTILITIES
// =============================================================================

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
        createMontaIntegrationData(false)
      ]
    },
    
    list: {
      active: false,
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

      imageHeight: {
      spec: {
        mobile: '400px',
        desktop: '500px'
      },
      overview: {
        mobile: '400px',
        desktop: '1000px'
      }
    },
    
    image: portableEvChargingProductImages.specifications
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
    specificationsData: createSpecificationsData('Specifications', [
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
  ]),  modelsData: (() => {
    // Create sections for portable EV charging models
    const sections = [
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
            current: '16A',
            cableLength: '5 Meters',
            phaseType: 'Single - Phase',
            protectionRating: 'IP65',
            popular: true,
            image: portableEvChargingProductImages.cable1
          },
          {
            modelCode: 'BP-PORT-10A',
            maximumPower: '2.3kW',
            connectorType: 'Type 2',
            outputVoltage: '230V AC',
            dimensions: '280 x 180 x 90mm',
            weight: '2.0kg',
            current: '10A',
            cableLength: '5 Meters',
            phaseType: 'Single - Phase',
            protectionRating: 'IP65',
            image: portableEvChargingProductImages.cable2
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
            current: '16A',
            cableLength: '5 Meters',
            phaseType: 'Single - Phase',
            protectionRating: 'IP65',
            smartFeatures: 'WiFi, App Control',
            popular: true,
            image: portableEvChargingProductImages.cable3
          },
          {
            modelCode: 'BP-PORT-10A-SMART',
            maximumPower: '2.3kW',
            connectorType: 'Type 2',
            outputVoltage: '230V AC',
            dimensions: '300 x 190 x 100mm',
            weight: '2.7kg',
            current: '10A',
            cableLength: '5 Meters',
            phaseType: 'Single - Phase',
            protectionRating: 'IP65',
            smartFeatures: 'WiFi, App Control',
            image: portableEvChargingProductImages.pd1
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
