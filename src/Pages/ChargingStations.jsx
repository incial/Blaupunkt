import React from 'react'
import { FiCheck, FiZap, FiWifi, FiShield, FiTruck, FiClipboard, FiSettings, FiHeadphones } from 'react-icons/fi'

const ChargingStations = () => {
  const stations = [
    {
      id: 1,
      name: "Home Wallbox",
      description: "Perfect for residential charging needs",
      price: "$899",
      power: "11kW",
      features: ["WiFi Connectivity", "Smart Scheduling", "Mobile App Control", "5 Year Warranty"]
    },
    {
      id: 2,
      name: "Commercial Fast Charger",
      description: "High-power charging for business locations",
      price: "$4,999",
      power: "50kW",
      features: ["Dual Charging Ports", "Payment Integration", "Remote Monitoring", "24/7 Support"]
    },
    {
      id: 3,
      name: "Ultra Fast DC Charger",
      description: "Ultra-fast charging for highway locations",
      price: "$24,999",
      power: "150kW",
      features: ["Liquid Cooling", "Multiple Standards", "Load Management", "Professional Installation"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Charging Stations
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Complete charging infrastructure solutions for homes and businesses
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {stations.map((station) => (
            <div key={station.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-6 py-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{station.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-green-600">{station.price}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {station.power} Power
                    </span>
                  </div>
                </div>
                  <ul className="mt-8 space-y-3">
                  {station.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <FiCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium">
                    Request Quote
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Complete Charging Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              From planning to installation and maintenance, we provide end-to-end charging infrastructure services
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                  <FiClipboard className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Site Assessment</h3>
              <p className="mt-2 text-sm text-gray-600">Professional evaluation of your charging needs</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                  <FiSettings className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Custom Installation</h3>
              <p className="mt-2 text-sm text-gray-600">Tailored installation by certified technicians</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                  <FiShield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">24/7 Monitoring</h3>
              <p className="mt-2 text-sm text-gray-600">Remote monitoring and diagnostic services</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                  <FiHeadphones className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Ongoing Support</h3>
              <p className="mt-2 text-sm text-gray-600">Comprehensive maintenance and support services</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start charging?</span>
            <span className="block text-green-400">Get a custom quote today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChargingStations