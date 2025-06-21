import React, { useState, useRef, useEffect } from 'react'
import { Entirepagedata } from '../../Utils/data'
import dataManagerService from '../../Utils/dataManagerService'
import SetupGuide from './SetupGuide'

const DataManager = () => {
  const [activeTab, setActiveTab] = useState('data')
  const [jsonData, setJsonData] = useState(JSON.stringify(Entirepagedata, null, 2))
  const [assets, setAssets] = useState([])
  const [uploadStatus, setUploadStatus] = useState('')
  const [isServerRunning, setIsServerRunning] = useState(false)
  const fileInputRef = useRef(null)

  // Check server health on component mount
  useEffect(() => {
    checkServerHealth()
  }, [])

  const checkServerHealth = async () => {
    const isRunning = await dataManagerService.checkServerHealth()
    setIsServerRunning(isRunning)
    if (!isRunning) {
      setUploadStatus('Server is not running. Please start the data manager server.')
    }
  }

  // Handle JSON data update
  const handleDataUpdate = async () => {
    if (!isServerRunning) {
      setUploadStatus('Server is not running. Please start the data manager server.')
      return
    }

    try {
      // Validate JSON
      const parsedData = JSON.parse(jsonData)
      
      // Create the updated data.js content
      const dataFileContent = `// Import background images from assets
import { bgImgs } from './assets.js'

// Auto-generated data - Updated via DataManager
export const Entirepagedata = ${JSON.stringify(parsedData, null, 2)};
`

      const result = await dataManagerService.updateData(dataFileContent)
      
      if (result.success) {
        setUploadStatus('Data updated successfully!')
        setTimeout(() => setUploadStatus(''), 3000)
      } else {
        setUploadStatus(result.message || 'Error updating data')
      }
    } catch (error) {
      setUploadStatus(error.message.includes('JSON') ? 'Invalid JSON format' : error.message)
      console.error('Error updating data:', error)
    }
  }

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    setAssets(prev => [...prev, ...files.map(file => ({
      file,
      name: file.name,
      type: file.type,
      size: file.size,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    }))])
  }
  // Handle asset upload to server
  const handleAssetUpload = async () => {
    if (!isServerRunning) {
      setUploadStatus('Server is not running. Please start the data manager server.')
      return
    }

    try {
      const files = assets.map(asset => asset.file)
      const result = await dataManagerService.uploadAssets(files)

      if (result.success) {
        setUploadStatus(`${result.uploadedCount} assets uploaded successfully!`)
        setAssets([])
        setTimeout(() => setUploadStatus(''), 3000)
      } else {
        setUploadStatus(result.message || 'Error uploading assets')
      }
    } catch (error) {
      setUploadStatus(error.message)
      console.error('Error uploading assets:', error)
    }
  }

  // Remove asset from list
  const removeAsset = (index) => {
    setAssets(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">          {/* Header */}
          <div className="bg-blaupunkt-primary-darker text-white px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Data & Asset Manager</h1>
                <p className="text-blaupunkt-secondary-light mt-1">
                  Update application data and manage assets
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isServerRunning ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="text-sm">
                  Server {isServerRunning ? 'Online' : 'Offline'}
                </span>
                <button
                  onClick={checkServerHealth}
                  className="ml-2 px-2 py-1 bg-blaupunkt-primary rounded text-xs hover:bg-blaupunkt-primary-light"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Status Message */}
          {uploadStatus && (
            <div className={`px-6 py-3 ${uploadStatus.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {uploadStatus}
            </div>
          )}          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('data')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'data'
                    ? 'border-blaupunkt-primary text-blaupunkt-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Data Management
              </button>
              <button
                onClick={() => setActiveTab('assets')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'assets'
                    ? 'border-blaupunkt-primary text-blaupunkt-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Asset Management
              </button>
              <button
                onClick={() => setActiveTab('setup')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'setup'
                    ? 'border-blaupunkt-primary text-blaupunkt-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Setup Guide
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'data' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Edit Application Data
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Modify the JSON data below to update the application content. 
                    Make sure to maintain valid JSON format.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    JSON Data
                  </label>
                  <textarea
                    value={jsonData}
                    onChange={(e) => setJsonData(e.target.value)}
                    className="w-full h-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blaupunkt-primary focus:border-blaupunkt-primary font-mono text-sm"
                    placeholder="Enter JSON data..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setJsonData(JSON.stringify(Entirepagedata, null, 2))}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blaupunkt-primary"
                  >
                    Reset to Original
                  </button>
                  <button
                    onClick={handleDataUpdate}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blaupunkt-primary hover:bg-blaupunkt-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blaupunkt-primary"
                  >
                    Update Data
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'assets' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Manage Assets
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload new images, videos, and other assets. They will be automatically 
                    organized into the appropriate folders.
                  </p>
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, SVG, MP4, WebM (MAX. 10MB)</p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*,video/*,.svg"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </div>

                {/* Asset Preview */}
                {assets.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-md font-medium text-gray-900">
                      Selected Assets ({assets.length})
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {assets.map((asset, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          {asset.preview && (
                            <img
                              src={asset.preview}
                              alt={asset.name}
                              className="w-full h-32 object-cover rounded-md mb-3"
                            />
                          )}
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {asset.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {asset.type} • {(asset.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                            <button
                              onClick={() => removeAsset(index)}
                              className="w-full px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleAssetUpload}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blaupunkt-primary hover:bg-blaupunkt-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blaupunkt-primary"
                      >
                        Upload Assets
                      </button>
                    </div>
                  </div>                )}
              </div>
            )}

            {activeTab === 'setup' && (
              <SetupGuide />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataManager
