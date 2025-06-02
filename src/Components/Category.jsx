import React from 'react'
import Card from './Common/Card'

const Category = () => {
  const categoryData = [
    {
      id: 1,
      title: "EV Charging Cables",
      image: null, // You can add actual image paths here
      gradient: "from-blue-300/0 to-blue-500"
    },
    {
      id: 2,
      title: "Charging Stations",
      image: null,
      gradient: "from-blue-400/20 to-blue-600"
    },
    {
      id: 3,
      title: "DC Charging Station",
      image: null,
      gradient: "from-gray-300/0 to-blue-600"
    },
    {
      id: 4,
      title: "DC Fast Charging Station",
      image: null,
      gradient: "from-gray-300/0 to-blue-600"
    },
    {
      id: 5,
      title: "Portable EV Charging",
      image: null,
      gradient: "from-gray-300/0 to-blue-600"
    }
  ]

  return (
    <div className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">
          Category
        </h2>
          {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {categoryData.map((category) => (
            <Card
              key={category.id}
              title={category.title}
              image={category.image}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category