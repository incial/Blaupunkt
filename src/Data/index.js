// =============================================================================
// MAIN DATA INDEX
// =============================================================================
// Central export file for all product data and assets
// This replaces the original data.js file with modular structure
// =============================================================================

// Import all product data
export * from './ChargingCables/index.js'
export * from './ChargingStations/index.js'
export * from './DCChargingStation/index.js'
export * from './DCFastChargingStation/index.js'
export * from './PortableEVCharging/index.js'

// Import common utilities
export * from './Common/utilities.js'

// Import individual product configurations
import { chargingCablesConfig } from './ChargingCables/index.js'
import { chargingStationsConfig } from './ChargingStations/index.js'
import { dcChargingStationConfig } from './DCChargingStation/index.js'
import { dcFastChargingStationConfig } from './DCFastChargingStation/index.js'
import { portableEvChargingConfig } from './PortableEVCharging/index.js'

// =============================================================================
// CONSOLIDATED DATA OBJECT (Backward compatibility)
// =============================================================================

export const Entirepagedata = {
  chargingCables: chargingCablesConfig.data,
  chargingStations: chargingStationsConfig.data,
  dcChargingStation: dcChargingStationConfig.data,
  dcFastChargingStation: dcFastChargingStationConfig.data,
  portableEVCharging: portableEvChargingConfig.data
}

// =============================================================================
// PRODUCT CONFIGURATIONS (Easy access to all sections)
// =============================================================================

export const ProductConfigs = {
  chargingCables: chargingCablesConfig,
  chargingStations: chargingStationsConfig,
  dcChargingStation: dcChargingStationConfig,
  dcFastChargingStation: dcFastChargingStationConfig,
  portableEVCharging: portableEvChargingConfig
}

// =============================================================================
// PRODUCT IMAGES (Easy access to all images)
// =============================================================================

export const ProductImages = {
  chargingCables: chargingCablesConfig.images,
  chargingStations: chargingStationsConfig.images,
  dcChargingStation: dcChargingStationConfig.images,
  dcFastChargingStation: dcFastChargingStationConfig.images,
  portableEVCharging: portableEvChargingConfig.images
}

// =============================================================================
// BACKGROUND IMAGES (Easy access to all background images)
// =============================================================================

export const BackgroundImages = {
  chargingCables: chargingCablesConfig.backgroundImages,
  chargingStations: chargingStationsConfig.backgroundImages,
  dcChargingStation: dcChargingStationConfig.backgroundImages,
  dcFastChargingStation: dcFastChargingStationConfig.backgroundImages,
  portableEVCharging: portableEvChargingConfig.backgroundImages
}

// =============================================================================
// SPECIFICATIONS DATA (Easy access to all specifications)
// =============================================================================

export const AllSpecifications = {
  chargingCables: {
    title: 'Charging Cable Specifications',
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
    title: 'Charging Station Specifications',
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
    title: 'DC Charging Station Specifications',
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
// UTILITY FUNCTIONS FOR EASY ACCESS
// =============================================================================

/**
 * Get product data by name
 * @param {string} productName - Name of the product section
 * @returns {Object} Product data configuration
 */
export const getProductData = (productName) => {
  return ProductConfigs[productName]?.data || null
}

/**
 * Get product images by name
 * @param {string} productName - Name of the product section
 * @returns {Object} Product images configuration
 */
export const getProductImages = (productName) => {
  return ProductImages[productName] || null
}

/**
 * Get product specifications by name
 * @param {string} productName - Name of the product section
 * @returns {Object} Product specifications
 */
export const getProductSpecifications = (productName) => {
  return AllSpecifications[productName] || null
}

/**
 * Get all product names
 * @returns {Array} Array of available product names
 */
export const getAvailableProducts = () => {
  return Object.keys(ProductConfigs)
}

// =============================================================================
// DEFAULT EXPORT (Main data object for backward compatibility)
// =============================================================================

export default Entirepagedata
