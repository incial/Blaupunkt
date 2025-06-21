/**
 * Component Update Utility
 * Handles updating components when data changes
 */

import { Entirepagedata } from './data.js'

export class ComponentUpdater {
  /**
   * Update a component's props or data dynamically
   * @param {string} componentName - Name of the component to update
   * @param {Object} newData - New data to apply
   */
  static updateComponentData(componentName, newData) {
    // This would be implemented to update specific components
    // For now, it's a placeholder for future dynamic updates
    console.log(`Updating ${componentName} with:`, newData)
    
    // In a real implementation, this could:
    // 1. Update component state
    // 2. Trigger re-renders
    // 3. Update localStorage/sessionStorage
    // 4. Send updates to components via context
    
    return newData
  }

  /**
   * Get current data for a specific component
   * @param {string} componentPath - Path to data in Entirepagedata
   * @returns {Object} Component data
   */
  static getComponentData(componentPath) {
    const pathArray = componentPath.split('.')
    let data = Entirepagedata
    
    for (const key of pathArray) {
      if (data && typeof data === 'object' && key in data) {
        data = data[key]
      } else {
        console.warn(`Path ${componentPath} not found in data`)
        return null
      }
    }
    
    return data
  }

  /**
   * Update assets references in components
   * @param {Object} assetMap - Map of old to new asset paths
   */
  static updateAssetReferences(assetMap) {
    // This would update asset references throughout the application
    console.log('Updating asset references:', assetMap)
    
    // Implementation would:
    // 1. Find all asset references in components
    // 2. Update import statements
    // 3. Update asset URLs
    // 4. Refresh component cache
  }

  /**
   * Validate data structure before update
   * @param {Object} newData - Data to validate
   * @param {string} schemaType - Type of schema to validate against
   * @returns {boolean} True if valid
   */
  static validateDataStructure(newData, schemaType = 'default') {
    if (!newData || typeof newData !== 'object') {
      return false
    }

    // Basic validation - could be extended with JSON Schema
    switch (schemaType) {
      case 'modelsData':
        return this.validateModelsData(newData)
      case 'productData':
        return this.validateProductData(newData)
      default:
        return true // Basic validation passed
    }
  }

  /**
   * Validate models data structure
   * @private
   */
  static validateModelsData(data) {
    if (!data.sections || !Array.isArray(data.sections)) {
      console.error('Invalid models data: sections must be an array')
      return false
    }

    for (const section of data.sections) {
      if (!section.name || !section.categories) {
        console.error('Invalid section: must have name and categories')
        return false
      }

      if (!Array.isArray(section.categories)) {
        console.error('Invalid section: categories must be an array')
        return false
      }

      for (const category of section.categories) {
        if (!category.name || !category.models || !Array.isArray(category.models)) {
          console.error('Invalid category: must have name and models array')
          return false
        }
      }
    }

    return true
  }

  /**
   * Validate product data structure
   * @private
   */
  static validateProductData(data) {
    // Add specific validation for product data
    if (!data.title || !data.description) {
      console.error('Invalid product data: must have title and description')
      return false
    }

    return true
  }
}

export default ComponentUpdater
