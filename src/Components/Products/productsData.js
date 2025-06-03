import { productImgs } from "../../Utils/assets"

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
export const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: 'EV Charging Cables',
    specifications: '22 kWh | 8 Meter | 3 Phase | Type 2',
    productCode: 'A3P32AT2',
    image: productImgs.chargingCables,
    type: 'Cables',
    chargingSpeed: '22 kWh',
    connectorType: 'Type 2',
    phaseType: 'Three - Phase',
    price: 299
  },
  {
    id: 2,
    title: 'Fast Charging Station',
    specifications: '50 kWh | DC Fast | CCS | Commercial',
    productCode: 'FS50CCS',
    image: productImgs.chargingCables,
    type: 'Charging Stations',
    chargingSpeed: '50 kWh',
    connectorType: 'CCS',
    phaseType: 'Three - Phase',
    price: 2999
  },
  {
    id: 3,
    title: 'Type 1 to Type 2 Adapter',
    specifications: '11 kWh | Portable | Type 1/Type 2',
    productCode: 'AD11T1T2',
    image: productImgs.chargingCables,
    type: 'Adapters',
    chargingSpeed: '11 kWh',
    connectorType: 'Type 1',
    phaseType: 'Single - Phase',
    price: 89
  },
  {
    id: 4,
    title: 'Portable EV Charger',
    specifications: '7.4 kWh | 5 Meter | Single Phase | Type 2',
    productCode: 'PC74T2',
    image: productImgs.chargingCables,
    type: 'Cables',
    chargingSpeed: '7.4 kWh',
    connectorType: 'Type 2',
    phaseType: 'Single - Phase',
    price: 199
  },
  {
    id: 5,
    title: 'Wall Mount Charging Station',
    specifications: '22 kWh | Wall Mount | Type 2 | Smart',
    productCode: 'WM22T2S',
    image: productImgs.chargingCables,
    type: 'Charging Stations',
    chargingSpeed: '22 kWh',
    connectorType: 'Type 2',
    phaseType: 'Three - Phase',
    price: 899
  },
  {
    id: 6,
    title: 'CHAdeMO Adapter',
    specifications: '50 kWh | Fast Charging | CHAdeMO',
    productCode: 'CH50ADP',
    image: productImgs.chargingCables,
    type: 'Adapters',
    chargingSpeed: '50 kWh',
    connectorType: 'CHAdeMO',
    phaseType: 'Three - Phase',
    price: 159
  },
  {
    id: 7,
    title: 'Basic EV Cable',
    specifications: '3.7 kWh | 3 Meter | Single Phase | Type 1',
    productCode: 'BC37T1',
    image: productImgs.chargingCables,
    type: 'Cables',
    chargingSpeed: '3.7 kWh',
    connectorType: 'Type 1',
    phaseType: 'Single - Phase',
    price: 129
  },
  {
    id: 8,
    title: 'Premium Charging Station',
    specifications: '50 kWh | Floor Stand | Dual Port | CCS',
    productCode: 'PS50CCS',
    image: productImgs.chargingCables,
    type: 'Charging Stations',
    chargingSpeed: '50 kWh',
    connectorType: 'CCS',
    phaseType: 'Three - Phase',
    price: 3999
  },
  {
    id: 9,
    title: 'Cable Management Kit',
    specifications: 'Universal | Wall Mount | Accessories',
    productCode: 'CMK001',
    image: productImgs.chargingCables,
    type: 'Accessories',
    chargingSpeed: 'N/A',
    connectorType: 'Universal',
    phaseType: 'N/A',
    price: 49
  },
  {
    id: 10,
    title: 'Heavy Duty EV Cable',
    specifications: '22 kWh | 10 Meter | 3 Phase | Type 2',
    productCode: 'HD22T2',
    image: productImgs.chargingCables,
    type: 'Cables',
    chargingSpeed: '22 kWh',
    connectorType: 'Type 2',
    phaseType: 'Three - Phase',
    price: 349
  },
  {
    id: 11,
    title: 'Smart Charging Hub',
    specifications: '22 kWh | WiFi Enabled | App Control',
    productCode: 'SCH22W',
    image: productImgs.chargingCables,
    type: 'Charging Stations',
    chargingSpeed: '22 kWh',
    connectorType: 'Type 2',
    phaseType: 'Three - Phase',
    price: 1299
  },
  {
    id: 12,
    title: 'Travel Adapter Set',
    specifications: 'Multi-connector | Portable | Travel Kit',
    productCode: 'TAS001',
    image: productImgs.chargingCables,
    type: 'Accessories',
    chargingSpeed: '11 kWh',
    connectorType: 'Multi',
    phaseType: 'Universal',
    price: 199
  },
  {
    id: 13,
    title: 'Travel Adapter Set',
    specifications: 'Multi-connector | Portable | Travel Kit',
    productCode: 'TAS001',
    image: productImgs.chargingCables,
    type: 'Accessories',
    chargingSpeed: '11 kWh',
    connectorType: 'Multi',
    phaseType: 'Universal',
    price: 199
  }
]