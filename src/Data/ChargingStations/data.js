// =============================================================================
// CHARGING STATIONS DATA
// =============================================================================
// Complete data configuration for Charging Stations section
// =============================================================================

import { 
  createBreadcrumbs, 
  createMontaIntegrationData, 
  createStandardFeatures,
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
// CHARGING STATIONS MAIN DATA
// =============================================================================

export const chargingStationsData = {
  title: 'Charging Stations',
  description: 'Reliable and efficient charging solutions for your electric vehicle.',
  active: true,
  breadcrumbs: createBreadcrumbs('Charging Stations', '/charging-stations'),
  buttonText: BUTTON_TEXTS.learnMore,
  mainImage: CHARGING_STATIONS_IMAGES.MAIN,
  imageAlt: 'EV Charging Station',
  thumbnails: createChargingStationThumbnails(),
  
  OverviewData: {
    BgImage: chargingStationBgImages.overview,
    
    para: {
      active: true,
      data: [
        {
          subheading: 'Reliable and Robust: Blaupunkt Three-Phase Charging Station',
          text: "Charging your electric car is more than just a task – it's a matter of trust. That's why Blaupunkt's three-phase charging station is engineered to meet and exceed all applicable electrical safety requirements. Every product is rigorously tested and certified by leading independent laboratories, ensuring you receive only the highest quality equipment."
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
        createMontaIntegrationData(true, 'charging station')
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
    
    IdealandFeaturesImage: chargingStationProductImages.feature,
    features: createStandardFeatures(),
    
    ideal: {
      active: true,
      title: 'Ideal For',
      data: [
        'Residential charging solutions',
        'Business and workplace installations',
        'Public parking facilities',
        'Fleet management systems'
      ]
    },
    
    imageHeight: {
      mobile: '400px',
      desktop: '1000px'
    },
    
    image: chargingStationProductImages.main
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
    { label: 'Power Output', value: '7.4kW / 11kW / 22kW' },
    { label: 'Input Voltage', value: '400V AC 3-phase' },
    { label: 'Charging Ports', value: '1 or 2 Type 2 outlets' },
    { label: 'Protection', value: 'IP54 rated enclosure' },
    { label: 'Communication', value: 'WiFi, 4G, Ethernet' },
    { label: 'Display', value: '7-inch color touchscreen' },
    { label: 'Dimensions', value: '1200 x 300 x 200mm' },
    { label: 'Weight', value: '45kg' }
  ]),
  
  modelsData: {
    title: 'Models',
    groupingMethod: 'section',
    additionalText: '',
    descriptiveText: 'Our comprehensive range of charging stations is designed to meet the diverse needs of residential, commercial, and public charging applications. Each model combines German engineering excellence with cutting-edge technology to deliver reliable, efficient, and safe charging solutions.',
    
    sections: [
      {
        name: 'Stations With Cable',
        categories: [
          {
            name: 'Basic',
            description: 'Users who need a reliable and secure charging solution without advanced connectivity features.',
            models: [
              {
                modelCode: 'BW3P32ACB',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_cable.png'
              },
              {
                modelCode: 'BW3P16ACB',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_cable.png'
              },
              {
                modelCode: 'BW1P32ACB',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: 'charging_station_cable.png'
              }
            ]
          },
          {
            name: 'Smart',
            description: 'Users requiring advanced features like remote management, energy monitoring, and integration with smart home systems.',
            models: [
              {
                modelCode: 'BW3P32ACS',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_cable.png'
              },
              {
                modelCode: 'BW3P16ACS',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_cable.png'
              },
              {
                modelCode: 'BW1P32ACS',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: 'charging_station_cable.png'
              }
            ]
          },
          {
            name: 'Full',
            description: 'Users who need the highest level of connectivity and control, especially in areas with unstable internet connections.',
            models: [
              {
                modelCode: 'BW3P32ACF',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_cable.png'
              },
              {
                modelCode: 'BW3P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_cable.png'
              },
              {
                modelCode: 'BW1P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: 'charging_station_cable.png'
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
            description: 'Users who need a reliable and secure charging solution without advanced connectivity features.',
            models: [
              {
                modelCode: 'BW3P32ACB',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_socket.png'
              },
              {
                modelCode: 'BW3P16ACB',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_socket.png'
              },
              {
                modelCode: 'BW1P32ACB',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: 'charging_station_socket.png'
              }
            ]
          },
          {
            name: 'Smart',
            description: 'Users requiring advanced features like remote management, energy monitoring, and integration with smart home systems.',
            models: [
              {
                modelCode: 'BW3P32ACS',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_socket.png'
              },
              {
                modelCode: 'BW3P16ACS',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_socket.png'
              },
              {
                modelCode: 'BW1P32ACS',
                maximumPower: '7.4 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: 'charging_station_socket.png'
              }
            ]
          },
          {
            name: 'Full',
            description: 'Users who need the highest level of connectivity and control, especially in areas with unstable internet connections.',
            models: [
              {
                modelCode: 'BW3P32ACF',
                maximumPower: '22 kWh',
                current: '32A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_socket.png'
              },
              {
                modelCode: 'BW3P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Three - Phase',
                image: 'charging_station_socket.png'
              },
              {
                modelCode: 'BW1P16ACF',
                maximumPower: '11 kWh',
                current: '16A',
                cableLength: '5 Meters',
                phaseType: 'Single - Phase',
                image: 'charging_station_socket.png'
              }
            ]
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
  supplier: chargingStationsData.supplierData
}

// Default export
export default chargingStationsData
