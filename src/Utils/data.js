// =============================================================================
// BLAUPUNKT EV CHARGING DATA CONFIGURATION
// =============================================================================
// This file contains all product data, configurations, and content for the
// Blaupunkt EV Charging application. It's structured for easy maintenance
// and updates with modular helper functions.
// =============================================================================

// Import background images from assets
import { bgImgs, evCableImgs } from './assets.js'

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Creates breadcrumb navigation for pages
 * @param {string} pageName - Display name for the page
 * @param {string} path - URL path for the page
 * @returns {Array} Array of breadcrumb objects
 */
const createBreadcrumbs = (pageName, path) => [
  { text: 'Home', path: '/' },
  { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
  { text: pageName, path, active: true }
]

/**
 * Creates thumbnail images array with consistent structure
 * @param {string} imageName - Base image filename
 * @param {number} count - Number of thumbnails (default: 5)
 * @returns {Array} Array of thumbnail objects
 */
const createThumbnails = (imageName, count = 5) => 
  Array.from({ length: count }, (_, i) => ({
    src: imageName,
    alt: `${imageName.split('.')[0]} View ${i + 1}`
  }))

/**
 * Creates EV charging cable thumbnails with different images
 * @returns {Array} Array of EV cable thumbnail objects
 */
const createEVCableThumbnails = () => [
  {
    image: evCableImgs.cable1,
    alt: 'EV Charging Cable - Cable 1'
  },
  {
    image: evCableImgs.cable2,
    alt: 'EV Charging Cable - Cable 2'
  },
  {
    image: evCableImgs.cable3,
    alt: 'EV Charging Cable - Cable 3'
  },
  {
    image: evCableImgs.cable4,
    alt: 'EV Charging Cable - Cable 4'
  }
]

/**
 * Creates Monta backend integration data
 * @param {boolean} isActive - Whether the integration is active
 * @returns {Object} Monta integration configuration
 */
const createMontaIntegrationData = (isActive = true) => ({
  subheading: 'Advantages Monta Backend Integration:',
  active: isActive,
  listItems: [
    'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box.',
    'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions.',
    'Optimized Charging Efficiency: The pre-configuration ensures optimal power delivery based on the model.',
    'Integrated Safety Features: Highest level of protection for your home and vehicle.',
    'Future-Ready Technology: Automatic updates and continuous feature enhancements via the Monta backend.'
  ]
})

/**
 * Creates standard product features
 * @param {Array} customFeatures - Optional custom features to add
 * @returns {Object} Features configuration object
 */
const createStandardFeatures = (customFeatures = []) => ({
  active: true,
  title: 'Features',
  data: [
    'High-quality copper conductors for efficient power transfer',
    'Flexible and durable PVC insulation for long-lasting performance',
    'Ergonomic design for easy handling and connection',
    'Built-in LED indicator for charging status',
    'Reinforced connectors for secure and stable connections',
    ...customFeatures
  ]
})

/**
 * Creates supplier data structure
 * @param {string} manufacturer - Primary manufacturer name
 * @param {Array} suppliers - Array of supplier objects
 * @returns {Object} Supplier data configuration
 */
const createSupplierData = (manufacturer, suppliers) => ({
  manufacturer,
  suppliers: suppliers.map(supplier => ({
    name: supplier.name,
    region: supplier.region,
    contact: supplier.contact,
    specialization: supplier.specialization
  }))
})

/**
 * Creates highlights data with consistent structure
 * @param {string} title - Section title
 * @param {Array} features - Array of feature objects
 * @returns {Object} Highlights configuration
 */
const createHighlightsData = (title, features) => ({
  title,
  features: features.map(feature => ({
    title: feature.title,
    description: feature.description,
    icon: feature.icon
  }))
})

/**
 * Creates specifications data structure
 * @param {string} title - Section title
 * @param {Array} specs - Array of specification objects
 * @returns {Object} Specifications configuration
 */
const createSpecificationsData = (title, specs) => ({
  title,
  specs: specs.map(spec => ({
    label: spec.label,
    value: spec.value
  }))
})

/**
 * Creates cable models data structure for product pages
 * @param {Array} sections - Array of model sections
 * @returns {Object} Models configuration
 */
const createCableModels = (sections) => ({
  title: 'Models',
  groupingMethod: 'section',
  sections: sections.map(section => ({
    name: section.name,
    categories: [{
      name: 'Standard Models',
      description: 'Professional grade charging cables',
      models: section.models.map(model => ({
        modelCode: model.modelCode,
        connectorType: model.connectorType,
        current: model.current,
        cableLength: model.cableLength,
        ipClass: model.ipClass || '65',
        phaseType: model.phaseType,
        popular: model.popular || false
      }))
    }]
  }))
})

// =============================================================================
// PRODUCT CONFIGURATION CONSTANTS
// =============================================================================

const PRODUCT_IMAGES = {
  chargingCables: evCableImgs.main,
  chargingStations: 'Charging_Stations.png',
  dcCharging: 'DC_Charging_Station.png',
  dcFastCharging: 'DC_Fast_Charging_Station.png',
  portableCharging: 'Portable_EV_Charging.png',
  heroVideo: 'HeoIntro.mp4'
}

const BUTTON_TEXTS = {
  connect: 'Connect',
  learnMore: 'Learn More',
  explore: 'Explore',
  discover: 'Discover',
  viewDetails: 'View Details',
  exploreProducts: 'Explore Products',
  viewAll: 'View All'
}

// =============================================================================
// MAIN DATA EXPORT
// =============================================================================

export const Entirepagedata = {
  
  // =========================================================================
  // CHARGING CABLES SECTION
  // =========================================================================
  chargingCables: {
    title: 'EV Charging Cables',
    description: 'Durable, efficient, and compatible with most electric vehicles.',
    active: true,
    breadcrumbs: createBreadcrumbs('EV Charging Cables', '/charging-cables'),
    buttonText: BUTTON_TEXTS.connect,
    mainImage: PRODUCT_IMAGES.chargingCables,
    imageAlt: 'EV Charging Cable',
    thumbnails: createEVCableThumbnails(),
    
    OverviewData: {
      BgImage: bgImgs.evChargingCables,
      
      para: {
        active: true,
        data: [
          {
            subheading: 'Superior Build Quality',
            text: 'Our EV charging cables are engineered with premium materials and cutting-edge technology to ensure reliable, safe, and efficient charging for your electric vehicle.'
          },
          {
            subheading: 'Universal Compatibility',
            text: 'Designed to work seamlessly with most electric vehicles, our cables feature industry-standard connectors and are compatible with both Type 1 and Type 2 charging ports.'
          },
          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          createMontaIntegrationData(false)
        ]
      },
      
      list: {
        active: false,
        title: 'Product Specifications',
        data: [
          'Compatible with Type 1 & Type 2 connectors supports up to 3-phase charging',
          'Rated for up to 32A safely delivers a charging power of up to 22 kW',
          'Cable length up to 8 meters offers maximum flexibility and reach',
          'IP54 rated – weather-resistant and safe for outdoor use',
          'Includes a durable carry case for easy transport and protection',
          'CE certified by a leading independent testing laboratory',          'Engineered with Blaupunkt commitment to quality and safety'
        ]
      },
      
      IdealandFeaturesImage: evCableImgs.cable3,
      features: createStandardFeatures(),
      
      ideal: {
        active: false,
        title: 'Ideal',
        data: [
          'Home charging stations for electric vehicles',
          'Commercial charging points in parking lots and garages',
          'Fleet management for electric car rental services',
          'Emergency charging solutions for long-distance travel'        ]
      },
      
      image: evCableImgs.cable4
    },
    
    highlightsData: createHighlightsData('Key Features', [
      { 
        title: 'Universal Compatibility', 
        description: 'Works with Tesla, BMW, Audi, and all major EV brands', 
        icon: 'compatibility' 
      },
      { 
        title: 'Weather Resistant', 
        description: 'IP67 rated for all-weather outdoor use', 
        icon: 'weather' 
      },
      { 
        title: 'Fast Charging', 
        description: 'Supports up to 32A charging current', 
        icon: 'speed' 
      },
      { 
        title: 'Portable Design', 
        description: 'Lightweight and easy to store in your vehicle', 
        icon: 'portable' 
      }
    ]),
    
    specificationsData: createSpecificationsData('Specifications', [
      { label: 'Charging Current', value: '16A / 32A' },
      { label: 'Voltage', value: '230V AC' },
      { label: 'Cable Length', value: '5m / 7.5m / 10m' },
      { label: 'Connector Type', value: 'Type 1 / Type 2' },
      { label: 'Protection Rating', value: 'IP67' },
      { label: 'Operating Temperature', value: '-30°C to +50°C' },
      { label: 'Cable Diameter', value: '32mm' },
      { label: 'Weight', value: '3.2kg (5m version)' }
    ]),
    
    modelsData: createCableModels([
      {
        name: '2 Meter Section',
        models: [
          { 
            modelCode: 'B1P16AT1', 
            connectorType: 'Type 1', 
            current: '16A', 
            cableLength: '2 Meters', 
            phaseType: 'Single - Phase' 
          },
          { 
            modelCode: 'B2P16AT1', 
            connectorType: 'Type 2', 
            current: '16A', 
            cableLength: '2 Meters', 
            phaseType: 'Single - Phase' 
          },
          { 
            modelCode: 'B2P32AT1', 
            connectorType: 'Type 2', 
            current: '32A', 
            cableLength: '2 Meters', 
            phaseType: 'Three - Phase' 
          }
        ]
      },
      {
        name: '5 Meter Section',
        models: [
          { 
            modelCode: 'B1P16AT2', 
            connectorType: 'Type 1', 
            current: '16A', 
            cableLength: '5 Meters', 
            phaseType: 'Single - Phase', 
            popular: true 
          },
          { 
            modelCode: 'B2P16AT2', 
            connectorType: 'Type 2', 
            current: '16A', 
            cableLength: '5 Meters', 
            phaseType: 'Single - Phase' 
          },
          { 
            modelCode: 'B2P32AT2', 
            connectorType: 'Type 2', 
            current: '32A', 
            cableLength: '5 Meters', 
            phaseType: 'Three - Phase', 
            popular: true 
          }
        ]
      }
    ]),
    
    supplierData: createSupplierData('Blaupunkt Technologies', [
      {
        name: 'EV Components Ltd',
        region: 'Europe',
        contact: 'europe@evcomponents.com',
        specialization: 'Cable assemblies and connectors'
      },
      {
        name: 'PowerTech Solutions',
        region: 'North America',
        contact: 'na@powertech.com',
        specialization: 'Charging infrastructure'
      },
      {
        name: 'GreenCharge Industries',
        region: 'Asia Pacific',
        contact: 'apac@greencharge.com',
        specialization: 'Portable charging solutions'
      }
    ])
  },

  // =========================================================================
  // CHARGING STATIONS SECTION
  // =========================================================================
  chargingStations: {
    title: 'Charging Stations',
    description: 'Reliable and efficient charging solutions for your electric vehicle.',
    active: true,
    breadcrumbs: createBreadcrumbs('Charging Stations', '/charging-stations'),
    buttonText: BUTTON_TEXTS.learnMore,
    mainImage: PRODUCT_IMAGES.chargingStations,
    imageAlt: 'EV Charging Station',
    thumbnails: createThumbnails(PRODUCT_IMAGES.chargingStations),
    
    OverviewData: {
      BgImage: bgImgs.chargingStations,
      
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
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
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
      
      IdealandFeaturesImage: PRODUCT_IMAGES.chargingCables,
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
      
      image: PRODUCT_IMAGES.chargingStations
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
    
    supplierData: createSupplierData('Blaupunkt Technologies', [
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
    ])
  }

  // Note: Additional sections (dcChargingStation, dcFastChargingStation, portableEVCharging, etc.)
  // would follow the same structured pattern for consistency and maintainability
}

// =============================================================================
// SPECIFICATIONS DATA BY CATEGORY
// =============================================================================

export const specificationsData = {
  chargingCables: {
    title: 'Cable Specifications',
    specs: [
      { label: 'Charging Current', value: '16A / 32A' },
      { label: 'Voltage', value: '230V AC' },
      { label: 'Cable Length', value: '5m / 7.5m / 10m' },
      { label: 'Connector Type', value: 'Type 1 / Type 2' },
      { label: 'Protection Rating', value: 'IP67' },
      { label: 'Operating Temperature', value: '-30°C to +50°C' },
      { label: 'Cable Diameter', value: '32mm' },
      { label: 'Weight', value: '3.2kg (5m version)' }
    ]
  },
  chargingStations: {
    title: 'Station Specifications',
    specs: [
      { label: 'Power Output', value: '7.4kW / 11kW / 22kW' },
      { label: 'Input Voltage', value: '400V AC 3-phase' },
      { label: 'Charging Ports', value: '1 or 2 Type 2 outlets' },
      { label: 'Protection', value: 'IP54 rated enclosure' },
      { label: 'Communication', value: 'WiFi, 4G, Ethernet' },
      { label: 'Display', value: '7-inch color touchscreen' },
      { label: 'Dimensions', value: '1200 x 300 x 200mm' },
      { label: 'Weight', value: '45kg' }
    ]
  },
  dcChargingStation: {
    title: 'DC Charging Specifications',
    specs: [
      { label: 'Power Output', value: '50kW / 100kW / 150kW' },
      { label: 'Input Voltage', value: '400V AC 3-phase' },
      { label: 'Output Voltage', value: '150V - 500V DC' },
      { label: 'Connector Types', value: 'CCS, CHAdeMO, Type 2' },
      { label: 'Protection', value: 'IP54 rated enclosure' },
      { label: 'Cooling', value: 'Liquid cooling system' },
      { label: 'Dimensions', value: '1800 x 800 x 400mm' },
      { label: 'Weight', value: '850kg' }
    ]
  },
  dcFastChargingStation: {
    title: 'DC Fast Charging Specifications',
    specs: [
      { label: 'Power Output', value: '150kW / 250kW / 350kW' },
      { label: 'Input Voltage', value: '400V AC 3-phase' },
      { label: 'Output Voltage', value: '200V - 800V DC' },
      { label: 'Connector Types', value: 'CCS, CHAdeMO, Type 2' },
      { label: 'Protection', value: 'IP54 rated enclosure' },
      { label: 'Cooling', value: 'Advanced liquid cooling' },
      { label: 'Dimensions', value: '2000 x 1000 x 500mm' },
      { label: 'Weight', value: '1200kg' }
    ]
  },
  portableEVCharging: {
    title: 'Portable Charger Specifications',
    specs: [
      { label: 'Power Output', value: '3.7kW / 7.4kW' },
      { label: 'Input Voltage', value: '230V AC single-phase' },
      { label: 'Cable Length', value: '5m charging cable' },
      { label: 'Connector Type', value: 'Type 2' },
      { label: 'Protection', value: 'IP65 rated' },
      { label: 'Weight', value: '2.5kg' },
      { label: 'Dimensions', value: '300 x 200 x 100mm' },
      { label: 'Display', value: 'LED status indicators' }
    ]
  }
}

// =============================================================================
// CONFIGURATION EXPORTS FOR EASY UPDATES
// =============================================================================

export const CONFIG = {
  PRODUCT_IMAGES,
  BUTTON_TEXTS,
  
  // Easy update functions
  updateProductImage: (product, newImage) => {
    PRODUCT_IMAGES[product] = newImage
  },
  
  updateButtonText: (action, newText) => {
    BUTTON_TEXTS[action] = newText
  }
}
