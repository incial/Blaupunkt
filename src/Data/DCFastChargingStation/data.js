// =============================================================================
// DC FAST CHARGING STATION DATA
// =============================================================================
// Complete data configuration for DC Fast Charging Station section
// =============================================================================

import {
  createBreadcrumbs,
  createHighlightsData,
  createSpecificationsData,
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
// DC FAST CHARGING STATION SPECIFIC UTILITIES
// =============================================================================

/**
 * Creates Monta backend integration data specific to DC fast charging stations
 * @param {boolean} isActive - Whether the integration is active
 * @returns {Object} Monta integration configuration
 */
const createMontaIntegrationData = (isActive = true) => ({
  subheading: 'Advantages Monta Backend Integration',
  active: isActive,
  listItems: [
    'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
    'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
    'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
  ]
})

// =============================================================================
// DC FAST CHARGING STATION MAIN DATA
// =============================================================================

export const dcFastChargingStationData = {
  title: 'DC Fast Charging Station',
  description:
    'Ultra-high power DC charging for the fastest charging experience.',
  active: true,
  breadcrumbs: createBreadcrumbs(
    'DC Fast Charging Station',
    '/dc-fast-charging-station'
  ),
  buttonText: BUTTON_TEXTS.explore,
  mainImage: DC_FAST_CHARGING_STATION_IMAGES.MAIN,
  imageAlt: 'DC Fast Charging Station',
  thumbnails: createDCFastChargingStationThumbnails(),

  OverviewData: {
    BgImage: dcFastChargingStationBgImages.hero,

    para: {
      active: true,
      data: [
        {
          subheading: 'Maximum Power for High-Intensity Environments',
          text: 'The Blaupunkt 60-160 kW DC Charger is designed to meet the demands of high-traffic locations where charging speed and capacity are paramount. With ultra-fast charging capabilities, this charger is perfect for service stations, highway rest stops, and fleet depots.'
        },
        {
          subheading: 'Power, Durability, and Safety Combined',
          text: "For high-demand environments, Blaupunkt's 60-160 kW DC Charger delivers the perfect blend of power and durability. Its IP54-rated enclosure ensures that it can handle any outdoor condition while maintaining peak performance. Built for heavy daily use, this charger is ideal for locations where fast and efficient charging is essential."
        },
        {
          subheading: 'Efficient Maintenance with Plug-In Control Module',
          text: 'Our plug-in module integrates critical components into a single, replaceable unit, including the fuse, relay, terminal block, voltage detection module, DC contactor, switch power supply, diverter, electric energy meter, monitor wafer, main control panel, and insulation protection module. In case of malfunction, operators can simply swap out the module, eliminating the need for on-site specialized technicians.',
          active: true
        },
        createMontaIntegrationData(true)
      ]
    },

    list: {
      active: false,
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

    IdealandFeaturesImage: dcFastChargingStationProductImages.mid2,

    features: {
      active: true,
      title: 'User-Friendly and Intuitive Operation',
      isListFormat: false, // true for list, false for paragraph
      data: [
        'This DC charger is equipped with an easy-to-use interface, ensuring smooth operation for both new and experienced users. With RFID authorization, access to the charger is secure, allowing only authorized users to charge their vehicles. Additionally, the OCPP 1.6 compatibility ensures seamless integration into existing charging networks for remote monitoring and control.'
      ]
    },

    ideal: {
      active: true,
      title: 'Ideal For',
      isListFormat: true, // true for list, false for paragraph
      data: [
        'Commercial sites that require reliable, mid-speed EV charging solutions.',
        'Office buildings or small fleets that need faster charging than typical AC units.',
        'Locations seeking a balance of speed, affordability, and durability'
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

    image: dcFastChargingStationProductImages.hero
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
  specificationsData: createSpecificationsData('Specifications', [
    { label: 'Product Dimensions', value: '780 × 580 × 205.5 mm (H × W × D)' },
    { label: 'Work Altitude', value: 'Up to 2000m' },
    { label: 'Operating Temperature', value: '-20°C to +55°C' },
    { label: 'Storage Temperature', value: '-40°C to +85°C' },
    { label: 'Installation', value: 'Floor-Stand' },
    { label: 'Ingress Protection', value: 'IP54' },
    { label: 'Net Weight', value: '67 kg' },
    { label: 'Start Mode', value: 'RFID Reader / Plug & Play / Mobile App' },
    { label: 'Communication', value: 'LAN / 4G' },
    { label: 'Input Frequency', value: '50/60 Hz' },
    { label: 'Input Voltage', value: '380V AC ±15%, 3P+N+PE' },
    { label: 'Voltage Range', value: '150–1000V DC' },
    { label: 'Rated Power', value: '60 kW / 80 kW / 120 kW / 160 kW' },
    {
      label: 'Safety Features',
      value:
        'Short Circuit Protection, Overload Protection, Over Temperature Protection, Leakage Protection, Over and Under Input Voltage Protection, Over and Under Output Voltage Protection, Over-current Protection'
    }
  ]),
  modelsData: (() => {
    // Create flat models array from sections for Models component compatibility
    const sections = [
      {
        name: '150kW Series',
        description: 'High-performance charging for premium locations',
        models: [
          {
            modelCode: 'BP-DCFAST-150-CCS',
            maximumPower: '150kW',
            connectorType: 'CCS',
            outputVoltage: '200V - 800V DC',
            dimensions: '2000 x 900 x 450mm',
            weight: '1200kg',
            protectionRating: 'IP54',
            coolingSystem: 'Advanced liquid cooling',
            chargingPorts: '1',
            image: dcFastChargingStationImages.fastPd1
          },
          {
            modelCode: 'BP-DCFAST-150-CHD-A',
            maximumPower: '150kW',
            connectorType: 'CHAdeMO',
            outputVoltage: '200V - 800V DC',
            dimensions: '2000 x 900 x 450mm',
            weight: '1200kg',
            protectionRating: 'IP54',
            coolingSystem: 'Advanced liquid cooling',
            chargingPorts: '1',
            popular: true,
            image: dcFastChargingStationImages.fastPd1
          },
          {
            modelCode: 'BP-DCFAST-150-CHD-B',
            maximumPower: '150kW',
            connectorType: 'CHAdeMO',
            outputVoltage: '200V - 800V DC',
            dimensions: '2000 x 900 x 450mm',
            weight: '1200kg',
            protectionRating: 'IP54',
            coolingSystem: 'Advanced liquid cooling',
            chargingPorts: '1',
            popular: true,
            image: dcFastChargingStationImages.fastPd1
          },
          {
            modelCode: 'BP-DCFAST-150-CHD-C',
            maximumPower: '150kW',
            connectorType: 'CHAdeMO',
            outputVoltage: '200V - 800V DC',
            dimensions: '2000 x 900 x 450mm',
            weight: '1200kg',
            protectionRating: 'IP54',
            coolingSystem: 'Advanced liquid cooling',
            chargingPorts: '1',
            popular: true,
            image: dcFastChargingStationImages.fastPd1
          }
        ]
      }
    ]

    // Flatten all models from all sections into a single array
    const flatModels = []
    sections.forEach(section => {
      section.models.forEach(model => {
        flatModels.push({
          ...model,
          section: section.name
        })
      })
    })

    return {
      title: 'Models',
      groupingMethod: 'section',
      models: flatModels
    }
  })(),

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
            name: 'BPDC60EU & BPDC160EU - Technical Specifications',
            description:
              'Complete technical specifications for BPDC60EU and BPDC160EU models',
            url: '/src/assets/pdf/FastStation/datasheet/BPDC60EU_BPDC160EU.pdf',
            size: '2.8 MB',
            type: 'PDF',
            modelCodes: ['BPDC60EU', 'BPDC160EU']
          }
        ]
      },
      {
        name: 'Certification Documents',
        description: 'CE certification and compliance documentation',
        files: [
          {
            name: 'Declaration of Conformity - BPDC40KEU',
            description: 'CE certification document for BPDC40KEU model',
            url: '/src/assets/pdf/FastStation/Delecration/Declaration of conformity BPDC40KEU.pdf',
            size: '850 KB',
            type: 'PDF',
            modelCodes: ['BPDC40KEU']
          }
        ]
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
  supplier: dcFastChargingStationData.supplierData,
  downloads: dcFastChargingStationData.downloadData
}

// Default export
export default dcFastChargingStationData
