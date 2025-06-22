// =============================================================================
// EXAMPLE USAGE OF NEW MODULAR DATA STRUCTURE
// =============================================================================
// This file demonstrates how to use the new modular data structure
// =============================================================================

// =============================================================================
// 1. BACKWARD COMPATIBLE USAGE (Existing components work unchanged)
// =============================================================================

// Import the complete data object (same as before)
import { Entirepagedata } from '../Data/index.js'

// Usage remains the same
const HomePage = () => {
  const chargingCablesData = Entirepagedata.chargingCables
  const chargingStationsData = Entirepagedata.chargingStations
  
  return (
    <div>
      <h1>{chargingCablesData.title}</h1>
      <p>{chargingCablesData.description}</p>
      <h1>{chargingStationsData.title}</h1>
      <p>{chargingStationsData.description}</p>
    </div>
  )
}

// =============================================================================
// 2. MODULAR USAGE (Recommended for new components)
// =============================================================================

// Import only what you need for a specific component
import { 
  chargingCablesData,
  chargingCableImages,
  chargingCableBgImages,
  createEVCableThumbnails 
} from '../Data/ChargingCables/index.js'

const ChargingCablesPage = () => {
  return (
    <div>
      <h1>{chargingCablesData.title}</h1>
      <p>{chargingCablesData.description}</p>
      <img src={chargingCableImages.main} alt="Charging Cable" />
      <div style={{ backgroundImage: `url(${chargingCableBgImages.overview})` }}>
        {/* Component content */}
      </div>
      <div className="thumbnails">
        {createEVCableThumbnails().map((thumb, index) => (
          <img key={index} src={thumb.image} alt={thumb.alt} />
        ))}
      </div>
    </div>
  )
}

// =============================================================================
// 3. USING UTILITY FUNCTIONS
// =============================================================================

import { 
  getProductData,
  getProductImages,
  getProductSpecifications,
  getAvailableProducts 
} from '../Data/index.js'

const ProductComparison = () => {
  const allProducts = getAvailableProducts()
  
  return (
    <div>
      <h2>Product Comparison</h2>
      {allProducts.map(productName => {
        const data = getProductData(productName)
        const images = getProductImages(productName)
        const specs = getProductSpecifications(productName)
        
        return (
          <div key={productName}>
            <h3>{data.title}</h3>
            <img src={images.main} alt={data.title} />
            <p>{data.description}</p>
            <ul>
              {specs.specs.map((spec, index) => (
                <li key={index}>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

// =============================================================================
// 4. USING INDIVIDUAL PRODUCT CONFIGS
// =============================================================================

import { 
  chargingStationsConfig,
  dcChargingStationConfig 
} from '../Data/index.js'

const StationsComparison = () => {
  return (
    <div>
      <div>
        <h3>{chargingStationsConfig.data.title}</h3>
        <img src={chargingStationsConfig.images.main} alt="AC Station" />
        <div>
          <h4>Highlights:</h4>
          {chargingStationsConfig.highlights.features.map((feature, index) => (
            <div key={index}>
              <strong>{feature.title}:</strong> {feature.description}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3>{dcChargingStationConfig.data.title}</h3>
        <img src={dcChargingStationConfig.images.main} alt="DC Station" />
        <div>
          <h4>Highlights:</h4>
          {dcChargingStationConfig.highlights.features.map((feature, index) => (
            <div key={index}>
              <strong>{feature.title}:</strong> {feature.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// 5. USING COMMON UTILITIES
// =============================================================================

import { 
  createBreadcrumbs,
  createHighlightsData,
  createSpecificationsData,
  BUTTON_TEXTS 
} from '../Data/Common/utilities.js'

const CustomProductPage = () => {
  // Create custom breadcrumbs
  const breadcrumbs = createBreadcrumbs('Custom Product', '/custom-product')
  
  // Create custom highlights
  const highlights = createHighlightsData('Custom Features', [
    { title: 'Feature 1', description: 'Description 1', icon: 'icon1' },
    { title: 'Feature 2', description: 'Description 2', icon: 'icon2' }
  ])
  
  // Create custom specifications
  const specifications = createSpecificationsData('Custom Specs', [
    { label: 'Power', value: '22kW' },
    { label: 'Voltage', value: '400V' }
  ])
  
  return (
    <div>
      <nav>
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {crumb.text} {index < breadcrumbs.length - 1 && ' > '}
          </span>
        ))}
      </nav>
      
      <div>
        <h3>{highlights.title}</h3>
        {highlights.features.map((feature, index) => (
          <div key={index}>
            <strong>{feature.title}:</strong> {feature.description}
          </div>
        ))}
      </div>
      
      <div>
        <h3>{specifications.title}</h3>
        {specifications.specs.map((spec, index) => (
          <div key={index}>
            <strong>{spec.label}:</strong> {spec.value}
          </div>
        ))}
      </div>
      
      <button>{BUTTON_TEXTS.learnMore}</button>
    </div>
  )
}

// =============================================================================
// 6. MIXED APPROACH (Product-specific + Common assets)
// =============================================================================

import { chargingCablesData as cablesDataMixed } from '../Data/ChargingCables/index.js'
import { bgImgs, productImgs } from '../Data/assets.js' // Backward compatible imports

const MixedUsageExample = () => {
  return (
    <div>
      <h1>{cablesDataMixed.title}</h1>
      <img src={productImgs.chargingCables} alt="Cables" />
      <div style={{ backgroundImage: `url(${bgImgs.evChargingCables})` }}>
        <p>{cablesDataMixed.description}</p>
      </div>
    </div>
  )
}

// =============================================================================
// 7. ACCESSING NESTED DATA
// =============================================================================

import { dcFastChargingStationData } from '../Data/DCFastChargingStation/index.js'

const DetailedProductView = () => {
  const data = dcFastChargingStationData
  
  return (
    <div>
      <h1>{data.title}</h1>
      
      {/* Overview Data */}
      <section>
        <h2>Overview</h2>
        {data.OverviewData.para.data.map((para, index) => (
          <div key={index}>
            <h3>{para.subheading}</h3>
            <p>{para.text}</p>
          </div>
        ))}
      </section>
      
      {/* Features */}
      <section>
        <h2>{data.OverviewData.features.title}</h2>
        <ul>
          {data.OverviewData.features.data.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      
      {/* Models */}
      <section>
        <h2>{data.modelsData.title}</h2>
        {data.modelsData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3>{section.name}</h3>
            <p>{section.description}</p>
            {section.categories[0].models.map((model, modelIndex) => (
              <div key={modelIndex}>
                <h4>{model.modelCode}</h4>
                <p>Power: {model.maximumPower}</p>
                <p>Connector: {model.connectorType}</p>
                {model.popular && <span>⭐ Popular</span>}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}

export {
  HomePage,
  ChargingCablesPage,
  ProductComparison,
  StationsComparison,
  CustomProductPage,
  MixedUsageExample,
  DetailedProductView
}
