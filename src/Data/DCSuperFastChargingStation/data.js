// =============================================================================
// DC SUPER FAST CHARGING STATION DATA
// =============================================================================
// Complete data configuration for DC Super Fast Charging Station section
// =============================================================================

import {
  createBreadcrumbs,
  createHighlightsData,
  createSpecificationsData,
  BUTTON_TEXTS
} from '../Common/utilities.js'

import {
  dcSuperFastChargingStationImages,
  dcSuperFastChargingStationBgImages,
  dcSuperFastChargingStationProductImages,
  createDCSuperFastChargingStationThumbnails,
  DC_SUPER_FAST_CHARGING_STATION_IMAGES
} from './assets.js'

// =============================================================================
// DC SUPER FAST CHARGING STATION SPECIFIC UTILITIES
// =============================================================================

/**
 * Creates Monta backend integration data specific to DC super fast charging stations
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
// DC SUPER FAST CHARGING STATION MAIN DATA
// =============================================================================

export const dcSuperFastChargingStationData = {
  title: 'DC Super Fast Charging Station',
  description:
    'Ultra-high power DC charging for the fastest charging experience.',
  active: true,
  breadcrumbs: createBreadcrumbs(
    'DC Super Fast Charging Station',
    '/dc-super-fast-charging-station'
  ),
  buttonText: BUTTON_TEXTS.explore,
  mainImage: DC_SUPER_FAST_CHARGING_STATION_IMAGES.MAIN,
  imageAlt: 'DC Super Fast Charging Station',
  thumbnails: createDCSuperFastChargingStationThumbnails(),

  OverviewData: {
    BgImage: dcSuperFastChargingStationBgImages.hero,

    para: {
      active: true,
      data: [
        {
          subheading: 'Maximum Power for High-Intensity Environments',
          text: 'The Blaupunkt 60-160 kW DC Super Fast Charger is designed to meet the demands of high-traffic locations where charging speed and capacity are paramount. With ultra-fast charging capabilities, this charger is perfect for service stations, highway rest stops, and fleet depots.'
        },
        {
          subheading: 'Power, Durability, and Safety Combined',
          text: "For high-demand environments, Blaupunkt's 60-160 kW DC Super Fast Charger delivers the perfect blend of power and durability. Its IP54-rated enclosure ensures that it can handle any outdoor condition while maintaining peak performance. Built for heavy daily use, this charger is ideal for locations where fast and efficient charging is essential."
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

    IdealandFeaturesImage: dcSuperFastChargingStationProductImages.mid2,

    features: {
      active: true,
      title: 'User-Friendly and Intuitive Operation',
      isListFormat: false, // true for list, false for paragraph
      data: [
        'This DC Super Fast charger is equipped with an easy-to-use interface, ensuring smooth operation for both new and experienced users. With RFID authorization, access to the charger is secure, allowing only authorized users to charge their vehicles. Additionally, the OCPP 1.6 compatibility ensures seamless integration into existing charging networks for remote monitoring and control.'
      ]
    },

    ideal: {
      active: true,
      title: 'Ideal For',
      isListFormat: true, // true for list, false for paragraph
      data: [
        'Commercial sites that require reliable, ultra-fast EV charging solutions.',
        'Office buildings or small fleets that need the fastest charging available.',
        'Locations seeking maximum speed, affordability, and durability'
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

    image: dcSuperFastChargingStationProductImages.hero
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
        name: 'CCS2 Chargers',
        description: '',
        models: [
          {
            modelCode: 'BPDC40EU2G',
            maximumPower: '40kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '5A - 125A',
            dimensions: '780 × 580 × 205.5 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-20°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '380V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd1
          },
          {
            modelCode: 'BPDC60EU',
            maximumPower: '60kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '5A - 100A',
            dimensions: '780 × 580 × 205.5 mm (H × W × D)',
            weight: '327 kg',
            operatingTemp: '-20°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '380V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd2
          },
          {
            modelCode: 'BPDC80EU',
            maximumPower: '80kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '150A - 1000A',
            dimensions: '780 × 580 × 205.5 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-20°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '380V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            popular: true,
            image: dcSuperFastChargingStationImages.fastPd2
          },
          {
            modelCode: 'BPDC120EU',
            maximumPower: '120kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '150A - 1000A',
            dimensions: '780 × 580 × 205.5 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-20°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '380V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd2
          },
          {
            modelCode: 'BPDC160EU',
            maximumPower: '160kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '150A - 1000A',
            dimensions: '780 × 580 × 205.5 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-20°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '380V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd2
          }
        ]
      },
      {
        name: 'GBT Chargers',
        description: '',
        models: [
          {
            modelCode: 'BPDC60EUGBT',
            maximumPower: '60kW',
            connectorType: 'CCS2 to GB/T',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '60A',
            dimensions: '1960 × 1040 × 500 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-30°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '400V AC ±15%',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd3
          },
          {
            modelCode: 'BPDC80EUGBT',
            maximumPower: '80kW',
            connectorType: 'CCS2 to GB/T',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '80A',
            dimensions: '1960 × 1040 × 500 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-30°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '400V AC ±15%',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd3
          },
          {
            modelCode: 'BPDC160EUGBT',
            maximumPower: '160kW',
            connectorType: 'CCS2 to GB/T',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '160A',
            dimensions: '1960 × 1040 × 500 mm (H × W × D)',
            weight: '368 kg',
            operatingTemp: '-30°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '400V AC ±15%',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '1',
            image: dcSuperFastChargingStationImages.fastPd3
          }
        ]
      },
      {
        name: 'RC Chargers',
        description: '',
        models: [
          {
            modelCode: 'RCD2060A-2-B',
            maximumPower: '60kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '87A',
            dimensions: '1100 × 700 × 200 mm (H × W × D)',
            weight: '101 kg',
            operatingTemp: '-20°C to +50°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP55',
            installation: 'Wall-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App / QR Code',
            communication: 'Bluetooth / LAN / 4G / Wi-Fi / CAN / RS485',
            inputVoltage: '260Vac ~ 485Vac, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '2',
            image: dcSuperFastChargingStationImages.fastPd4
          },
          {
            modelCode: 'RCD2080A-2-B',
            maximumPower: '80kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '116A',
            dimensions: '1100 × 700 × 200 mm (H × W × D)',
            weight: '101 kg',
            operatingTemp: '-20°C to +50°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP55',
            installation: 'Wall-Stand',
            startMode: 'RFID Reader / Plug & Play / Mobile App / QR Code',
            communication: 'Bluetooth / LAN / 4G / Wi-Fi / CAN / RS485',
            inputVoltage: '260Vac ~ 485Vac, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '2',
            popular: true,
            image: dcSuperFastChargingStationImages.fastPd4
          },
          {
            modelCode: 'RCD2120A-2-L',
            maximumPower: '120kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '150A - 1000A',
            dimensions: '1700 × 700 × 550 mm (H × W × D)',
            weight: '<160 kg',
            operatingTemp: '-20°C to +50°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP55',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / QR Code / Mobile App',
            communication: 'LAN / 4G / CAN / RS485',
            inputVoltage: '380V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '2',
            image: dcSuperFastChargingStationImages.fastPd5
          },
          {
            modelCode: 'RCD-DC-160KW-2-ESF',
            maximumPower: '160kW',
            connectorType: 'CCS2',
            outputVoltage: '150V - 1000V DC',
            outputCurrent: '400A',
            dimensions: '800 × 600 × 1800 mm (H × W × D)',
            weight: '300 kg',
            operatingTemp: '-30°C to +55°C',
            storageTemp: '-40°C to +85°C',
            protectionRating: 'IP54',
            installation: 'Floor-Stand',
            startMode: 'RFID Reader / Mobile App',
            communication: 'LAN / 4G',
            inputVoltage: '400V AC ±15%, 3P+N+PE',
            inputFrequency: '50/60 Hz',
            workAltitude: 'Up to 2000m',
            chargingPorts: '2',
            image: dcSuperFastChargingStationImages.fastPd6
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
      models: flatModels,
      sections: sections // Include sections for potential use in filtering/grouping
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

export const dcSuperFastChargingStationConfig = {
  // Main data
  data: dcSuperFastChargingStationData,

  // Quick access to images
  images: dcSuperFastChargingStationImages,
  backgroundImages: dcSuperFastChargingStationBgImages,
  productImages: dcSuperFastChargingStationProductImages,

  // Quick access to key sections
  overview: dcSuperFastChargingStationData.OverviewData,
  highlights: dcSuperFastChargingStationData.highlightsData,
  specifications: dcSuperFastChargingStationData.specificationsData,
  models: dcSuperFastChargingStationData.modelsData,
  supplier: dcSuperFastChargingStationData.supplierData,
  downloads: dcSuperFastChargingStationData.downloadData
}

// Default export
export default dcSuperFastChargingStationData
