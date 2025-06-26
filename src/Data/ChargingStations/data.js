// =============================================================================
// CHARGING STATIONS DATA
// =============================================================================
// Complete data configuration for Charging Stations section
// =============================================================================

import {
  createBreadcrumbs,
  createHighlightsData,
  createSpecificationsData,
  BUTTON_TEXTS,
  DEFAULT_SUPPLIER_DATA
} from '../Common/utilities.js'

import {
  chargingStationImages,
  chargingStationBgImages,
  chargingStationProductImages,
  createChargingStationThumbnails,
  CHARGING_STATIONS_IMAGES
} from './assets.js'

// =============================================================================
// CHARGING STATIONS SPECIFIC UTILITIES
// =============================================================================

/**
 * Creates Monta backend integration data specific to charging stations
 * @param {boolean} isActive - Whether the integration is active
 * @returns {Object} Monta integration configuration
 */
const createMontaIntegrationData = (isActive = true) => ({
  subheading: 'Advantages of Monta Backend Integration:',
  active: isActive,
  listItems: [
    'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',

    'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',

    'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering up to 11KW or 22 KW of power depending on the model. The charging capacity can be set between 8A and 32A depending on the model.',

    'Integrated Safety Features: The inbuilt 6mA DC RCM provides the highest level of protection, eliminating the need for an additional DC protection RCCB during installation, ensuring your home and vehicle are safeguarded at all times.',

    'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
  ]
})

// =============================================================================
// CHARGING STATIONS MAIN DATA
// =============================================================================

export const chargingStationsData = {
  title: 'Charging Stations',
  description:
    'Reliable and efficient charging solutions for your electric vehicle.',
  active: true,
  breadcrumbs: createBreadcrumbs('Charging Stations', '/charging-stations'),
  buttonText: BUTTON_TEXTS.learnMore,
  mainImage: CHARGING_STATIONS_IMAGES.MAIN,
  imageAlt: 'EV Charging Station',
  thumbnails: createChargingStationThumbnails(),

  OverviewData: {
    BgImage: chargingStationBgImages.chargingStationoverbg,

    para: {
      active: true,
      data: [
        {
          subheading:
            'Reliable and Robust: Blaupunkt Three-Phase Charging Station',
          text: "Charging your electric car is more than just a task - it's a matter of trust. That's why Blaupunkt's three-phase charging station is engineered to meet and exceed all applicable electrical safety requirements. Every product is rigorously tested and certified by leading independent laboratories, ensuring you receive only the highest quality equipment."
        },
        {
          subheading: 'Durability and Safety You Can Rely On',
          text: "Built with durability in mind, Blaupunkt's charging station features a robust construction designed to withstand everyday use, whether installed indoors or outdoors. The IP54-rated charger provides reliable protection against the elements, ensuring long-lasting performance in various outdoor conditions."
        },
        {
          subheading: 'Pre-Configured for Seamless Integration',
          text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.',
          active: true
        },
        createMontaIntegrationData(true)
      ]
    },

    list: {
      active: false,
      title: 'Key Specifications',
      data: [
        'Three-phase charging capability for faster and more efficient charging',
        'IP54-rated for reliable protection against dust and water splashes',
        'Pre-configured with Monta backend for immediate use',
        'Rigorously tested and certified to meet all safety standards',
        'Robust construction suitable for both indoor and outdoor installation',
        'Smart connectivity with easy setup and user-friendly interface'
      ]
    },
    IdealandFeaturesImage: chargingStationProductImages.ideal,
    features: {
      active: true,
      title: 'Features',
      isListFormat: true,
      data: [
        'OCPP 1.6J Compliance: Enables integration with various third-party backends for enhanced control and monitoring.',
        'RFID Authorization: Provides secure access control, just like the Basic version.',
        'Monta Preconfiguration: Pre-configured for seamless integration with the Monta backend, offering immediate setup and enhanced monitoring features.',
        'Remote Management: Easily manage charging sessions, monitor energy usage, and set smart schedules through the Monta platform.',
        'Adjustable Charging Capacity: Offers the same flexible charging options as the Basic version.'
      ]
    },
    ideal: {
      active: true,
      title: 'Ideal For',
      isListFormat: true,
      data: [
        'Users who require advanced features like remote management, energy monitoring, and integration with smart home systems.',
        'Businesses or public spaces where monitoring and managing multiple charging stations is essential'
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

    image: chargingStationProductImages.feature,
  },

  highlightsData: createHighlightsData('Station Features', [
    {
      title: 'Smart Connectivity',
      description: 'WiFi and 4G connectivity for remote monitoring',
      icon: 'connectivity'
    },
    {
      title: 'Multiple Outlets',
      description: 'Charge up to 2 vehicles simultaneously',
      icon: 'multiple'
    },
    {
      title: 'Energy Management',
      description: 'Built-in load balancing and power management',
      icon: 'energy'
    },
    {
      title: 'User Authentication',
      description: 'RFID cards and mobile app authentication',
      icon: 'security'
    }
  ]),

  specificationsData: createSpecificationsData('Specifications', [
    { label: 'Phases:', value: 'Single-Phase & Three-Phase' },
    { label: 'Ampere:', value: '32A & 16A' },
    { label: 'Maximum Power:', value: '22KW, 11KW, 4KW' },
    { label: 'RFID Authorization:', value: 'Yes' },
    { label: 'Wi-Fi / LAN:', value: 'Yes' },
    { label: 'OCPP 1.6:', value: 'Yes' },
    { label: 'Cable Length:', value: '5 meters' },
    { label: 'Connector Type:', value: 'Type 2' }
  ]),

  modelsData: {
    title: 'Models',
    groupingMethod: 'section',
    additionalText: '',
    descriptiveText:
      'Our comprehensive range of charging stations is designed to meet the diverse needs of residential, commercial, and public charging applications. Each model combines German engineering excellence with cutting-edge technology to deliver reliable, efficient, and safe charging solutions.',

    sections: [
      {
        name: 'Stations With Cable',
        categories: [
          {
            name: 'Basic',
            description:
              'Users who need a reliable and secure charging solution without advanced connectivity features.',
            models: [
              {
                modelCode: 'BW3P32ACB',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd1
              },
              {
                modelCode: 'BW3P16ACB',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd1
              },
              {
                modelCode: 'BW1P32ACB',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: chargingStationImages.stationPd1
              }
            ]
          },
          {
            name: 'Smart',
            description:
              'Users requiring advanced features like remote management, energy monitoring, and integration with smart home systems.',
            models: [
              {
                modelCode: 'BW3P32ACS',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd1
              },
              {
                modelCode: 'BW3P16ACS',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd1
              },
              {
                modelCode: 'BW1P32ACS',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: chargingStationImages.stationPd1
              }
            ]
          },
          {
            name: 'Full',
            description:
              'Users who need the highest level of connectivity and control, especially in areas with unstable internet connections.',
            models: [
              {
                modelCode: 'BW3P32ACF',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd1
              },
              {
                modelCode: 'BW3P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd1
              },
              {
                modelCode: 'BW1P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: chargingStationImages.stationPd1
              }
            ]
          }
        ]
      },
      {
        name: 'Stations With Socket',
        categories: [
          {
            name: 'Basic',
            description:
              'Users who need a reliable and secure charging solution without advanced connectivity features.',
            models: [
              {
                modelCode: 'BW3P32ACB',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd2
              },
              {
                modelCode: 'BW3P16ACB',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd2
              },
              {
                modelCode: 'BW1P32ACB',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: chargingStationImages.stationPd2
              }
            ]
          },
          {
            name: 'Smart',
            description:
              'Users requiring advanced features like remote management, energy monitoring, and integration with smart home systems.',
            models: [
              {
                modelCode: 'BW3P32ACS',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd2
              },
              {
                modelCode: 'BW3P16ACS',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd2
              },
              {
                modelCode: 'BW1P32ACS',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: chargingStationImages.stationPd2
              }
            ]
          },
          {
            name: 'Full',
            description:
              'Users who need the highest level of connectivity and control, especially in areas with unstable internet connections.',
            models: [
              {
                modelCode: 'BW3P32ACF',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd2
              },
              {
                modelCode: 'BW3P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: chargingStationImages.stationPd2
              },
              {
                modelCode: 'BW1P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: chargingStationImages.stationPd2
              }
            ]
          }
        ]
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
            name: 'AC Charging Station Technical Specifications',
            description:
              'Complete technical specifications for all AC charging station models (Combined)',
            url: '/src/assets/pdf/Stations/datasheet/Wallbox with Screen BW1P32ACS_BW3P16ACS_BW3P32ACS.pdf',
            size: '2.3 MB',
            type: 'PDF',
            modelCodes: ['All Models']
          }
        ]
      },
      {
        name: 'Installation Guides',
        description: 'Installation and setup instructions',
        files: []
      },
      {
        name: 'Certification Documents',
        description: 'CE certification and compliance documentation',
        files: [
          {
            name: 'Declaration of Conformity - AC Charging Stations RFID/WiFi/Bluetooth/4G',
            description:
              'CE certification document for BW3P32ACS AC charging station',
            url: '/src/assets/pdf/Stations/Delecration/AC charging stations - RFID,wifi,bluetooth,4G(3) BW3P32ACS.pdf',
            size: '850 KB',
            type: 'PDF',
            modelCodes: ['BW3P32ACS']
          },
          {
            name: 'Declaration of Conformity - Socket Model',
            description: 'CE certification document for BW3P32ASS socket model',
            url: '/src/assets/pdf/Stations/Delecration/Declaration of conformity BW3P32ASS.pdf',
            size: '920 KB',
            type: 'PDF',
            modelCodes: ['BW3P32ASS']
          }
        ]
      }
    ]
  },

  supplierData: {
    manufacturer: 'Blaupunkt Technologies',
    suppliers: [
      {
        name: 'StationTech Europe',
        region: 'Europe',
        contact: 'stations@stationtech.eu',
        specialization: 'AC charging stations and infrastructure'
      },
      {
        name: 'ChargePoint Americas',
        region: 'North America',
        contact: 'info@chargepoint-am.com',
        specialization: 'Smart charging solutions'
      },
      {
        name: 'PowerGrid Asia',
        region: 'Asia Pacific',
        contact: 'sales@powergrid-asia.com',
        specialization: 'Commercial charging infrastructure'
      }
    ]
  }
}

// =============================================================================
// EASY ACCESS EXPORTS
// =============================================================================

export const chargingStationsConfig = {
  // Main data
  data: chargingStationsData,

  // Quick access to images
  images: chargingStationImages,
  backgroundImages: chargingStationBgImages,
  productImages: chargingStationProductImages,
  // Quick access to key sections
  overview: chargingStationsData.OverviewData,
  highlights: chargingStationsData.highlightsData,
  specifications: chargingStationsData.specificationsData,
  models: chargingStationsData.modelsData,
  downloads: chargingStationsData.downloadData,
  supplier: chargingStationsData.supplierData
}

// Default export
export default chargingStationsData
