import React from 'react'

const SetupGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blaupunkt-primary-darker mb-6">
        Data & Asset Manager Setup Guide
      </h2>
      
      <div className="space-y-8">
        {/* Server Setup */}
        <div className="border-l-4 border-blaupunkt-primary pl-4">
          <h3 className="text-lg font-semibold mb-3">1. Server Setup</h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              Navigate to the server directory and install dependencies:
            </p>
            <div className="bg-gray-100 p-3 rounded font-mono text-sm">
              cd server<br/>
              npm install
            </div>
            <p className="text-gray-700">
              Start the development server:
            </p>
            <div className="bg-gray-100 p-3 rounded font-mono text-sm">
              npm run dev
            </div>
            <p className="text-xs text-gray-500">
              The server will run on http://localhost:3001
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-lg font-semibold mb-3">2. Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <div>
                <strong>Data Management:</strong> Edit the application's JSON data structure directly through a user-friendly interface
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <div>
                <strong>Asset Upload:</strong> Upload images, videos, and other assets that are automatically organized into appropriate folders
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <div>
                <strong>Auto-update:</strong> Assets are automatically referenced in the assets.js file after upload
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <div>
                <strong>Backup:</strong> Automatic backup of data.js before updates
              </div>
            </li>
          </ul>
        </div>

        {/* File Structure */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold mb-3">3. File Organization</h3>
          <div className="text-gray-700 space-y-2">
            <p>Assets are automatically organized based on type and filename:</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li><strong>Images:</strong> src/assets/Images/</li>
              <li><strong>Videos:</strong> src/assets/Videos/</li>
              <li><strong>Logos:</strong> Automatically detected and categorized</li>
              <li><strong>Product Images:</strong> Files containing "product", "charger", or "charging"</li>
            </ul>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-lg font-semibold mb-3">4. Usage Instructions</h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <h4 className="font-medium">Data Management:</h4>
              <p className="text-sm">
                1. Switch to the "Data Management" tab<br/>
                2. Edit the JSON data in the text area<br/>
                3. Click "Update Data" to save changes
              </p>
            </div>
            <div>
              <h4 className="font-medium">Asset Management:</h4>
              <p className="text-sm">
                1. Switch to the "Asset Management" tab<br/>
                2. Drag and drop files or click to upload<br/>
                3. Review selected assets<br/>
                4. Click "Upload Assets" to save to project
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-red-50 border border-red-200 rounded p-4">
          <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Important Notes</h3>
          <ul className="space-y-1 text-red-700 text-sm">
            <li>• The server must be running for the Data Manager to function</li>
            <li>• Always validate JSON before updating data</li>
            <li>• Backup files are created automatically but verify important changes</li>
            <li>• Maximum file size for uploads is 10MB</li>
            <li>• Only image and video files are accepted for asset uploads</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SetupGuide
