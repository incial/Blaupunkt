import { productImgs } from "../../Data/assets.js"
import { chargingCablesData } from '../../Data/ChargingCables/data.js'
import { chargingStationsData } from '../../Data/ChargingStations/data.js'
import { dcChargingStationData } from '../../Data/DCChargingStation/data.js'

/**
 * Filter options constants for product filtering and sorting
 */
export const SORT_OPTIONS = ['Popularity', 'Price Low to High', 'Price High to Low', 'Newest First']
export const PRODUCT_TYPE_OPTIONS = ['All', 'Cables', 'Charging Stations', 'Adapters', 'Accessories']
export const CHARGING_SPEED_OPTIONS = ['All', '3.7 kWh', '7.4 kWh', '11 kWh', '22 kWh', '50 kWh']
export const CONNECTOR_TYPE_OPTIONS = ['All', 'Type 1', 'Type 2', 'CCS', 'CHAdeMO', 'Multi', 'Universal']
export const PHASE_TYPE_OPTIONS = ['All', 'Single - Phase', 'Three - Phase', 'Universal']

/**
 * Sample product data - in a real app this would come from an API
 */
export const PRODUCTS = [
  // EV Charging Cables
  ...((chargingCablesData.modelsData?.models || []).map(model => ({
    id: model.modelCode,
    title: chargingCablesData.title,
    specifications: `${model.current || ''} | ${model.cableLength || ''} | ${model.phaseType || ''} | ${model.connectorType || ''}`,
    productCode: model.modelCode,
    image: model.image || chargingCablesData.mainImage,
    type: 'Cables',
    chargingSpeed: chargingCablesData.specificationsData?.find(s => s.label === 'Rated Current')?.value || '',
    connectorType: model.connectorType || '',
    phaseType: model.phaseType || '',
    price: undefined // Add price if available in data
  })) || []),
  // Charging Stations
  ...((chargingStationsData.modelsData?.sections?.flatMap(section => section.categories.map(model => ({
    id: model.modelCode,
    title: chargingStationsData.title,
    specifications: `${model.maximumPower || ''} | ${model.connectorType || ''} | ${model.phaseType || ''}`,
    productCode: model.modelCode,
    image: model.image || chargingStationsData.mainImage,
    type: 'Charging Stations',
    chargingSpeed: model.maximumPower || '',
    connectorType: model.connectorType || '',
    phaseType: model.phaseType || '',
    price: undefined // Add price if available in data
  }))) || [])),
  // DC Charging Stations
  ...((dcChargingStationData.modelsData?.models || []).map(model => ({
    id: model.modelCode,
    title: dcChargingStationData.title,
    specifications: `${model.maximumPower || ''} | ${model.connectorType || ''} | ${model.phaseType || ''}`,
    productCode: model.modelCode,
    image: model.image || dcChargingStationData.mainImage,
    type: 'DC Charging Station',
    chargingSpeed: model.maximumPower || '',
    connectorType: model.connectorType || '',
    phaseType: model.phaseType || '',
    price: undefined // Add price if available in data
  }))
]

// Optionally, export filter options as before
export * from './productsData.options.js'