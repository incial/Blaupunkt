import React from 'react'
import { FiCheck, FiZap, FiShield, FiTruck } from 'react-icons/fi'

const ChargingCables = () => {
  const cables = [
    {
      id: 1,
      name: "Type 2 Cable",
      description: "Standard European charging cable for AC charging",
      price: "$149",
      features: ["22kW Fast Charging", "IP54 Weather Protection", "5m Length", "2 Year Warranty"]
    },
    {
      id: 2,
      name: "CCS Cable",
      description: "Combined Charging System cable for DC fast charging",
      price: "$299",
      features: ["150kW DC Charging", "Liquid Cooled", "4m Length", "3 Year Warranty"]
    },
    {
      id: 3,
      name: "CHAdeMO Cable",
      description: "Japanese standard charging cable for DC fast charging",
      price: "$279",
      features: ["100kW DC Charging", "Temperature Monitoring", "3.5m Length", "2 Year Warranty"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Charging Cables
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Premium quality charging cables for all your electric vehicle needs
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cables.map((cable) => (
            <div key={cable.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{cable.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">{cable.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{cable.description}</p>
                  <ul className="mt-6 space-y-2">
                  {cable.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <FiCheck className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Our Charging Cables?
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">              <div className="text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <FiCheck className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Certified Quality</h3>
                <p className="mt-2 text-sm text-gray-600">All cables meet international safety standards</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <FiZap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Charging</h3>
                <p className="mt-2 text-sm text-gray-600">Optimized for maximum charging speeds</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <FiShield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Durable Build</h3>
                <p className="mt-2 text-sm text-gray-600">Weather-resistant and long-lasting design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChargingCables