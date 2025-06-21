/**
 * API Service for Data Manager
 * Handles communication with the backend server
 */

const API_BASE_URL = 'http://localhost:3001/api'

class DataManagerService {
  /**
   * Update the data.js file with new content
   * @param {string} content - The new content for data.js
   * @returns {Promise<Object>} Response from server
   */
  async updateData(content) {
    try {
      const response = await fetch(`${API_BASE_URL}/update-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error updating data:', error)
      throw new Error(`Failed to update data: ${error.message}`)
    }
  }

  /**
   * Upload multiple assets to the server
   * @param {File[]} files - Array of files to upload
   * @returns {Promise<Object>} Response from server
   */
  async uploadAssets(files) {
    try {
      const formData = new FormData()
      files.forEach(file => {
        formData.append('assets', file)
      })

      const response = await fetch(`${API_BASE_URL}/upload-assets`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error uploading assets:', error)
      throw new Error(`Failed to upload assets: ${error.message}`)
    }
  }

  /**
   * Get current data content
   * @returns {Promise<Object>} Current data content
   */
  async getData() {
    try {
      const response = await fetch(`${API_BASE_URL}/data`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching data:', error)
      throw new Error(`Failed to fetch data: ${error.message}`)
    }
  }

  /**
   * Get list of current assets
   * @returns {Promise<Object>} List of assets
   */
  async getAssets() {
    try {
      const response = await fetch(`${API_BASE_URL}/assets`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching assets:', error)
      throw new Error(`Failed to fetch assets: ${error.message}`)
    }
  }

  /**
   * Check if the server is running
   * @returns {Promise<boolean>} True if server is running
   */
  async checkServerHealth() {
    try {
      const response = await fetch('http://localhost:3001/health')
      return response.ok
    } catch (error) {
      console.error('Server health check failed:', error)
      return false
    }
  }
}

// Export singleton instance
export const dataManagerService = new DataManagerService()
export default dataManagerService
