import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-white relative w-full">
      {/* Main content area */}
      <div className=" py-12 items-center justify-center">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm overflow-x-auto">
            <span className="text-blaupunkt-secondary-light font-myriad whitespace-nowrap">Home</span>
            <span className="text-blaupunkt-secondary-light font-myriad">/</span>
            <span className="text-blaupunkt-secondary font-myriad whitespace-nowrap">Services</span>
          </div>
        </div>

        {/* Services Header */}
        <div className="container mx-auto px-7 mb-16 items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-blaupunkt-dark mb-2.5">Our Services</h1>
            <p className="text-blaupunkt-primary text-lg max-w-[600px] mx-auto py-6">
              From reliable EV chargers to expert installation and ongoing support
              Blaupunkt offers end-to-end solutions to power your electric journey.
            </p>
          </div>
        </div>

        {/* Services Content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
            {/* Left Column - Service descriptions */}
            <div className="flex-1 flex flex-col gap-20">
              {/* Charging Solutions */}
              <div className="relative">
                <h2 className="text-3xl font-medium text-blaupunkt-blue mb-6">Charging Solutions</h2>
                <p className="text-lg font-light text-blaupunkt-primary-darker mb-6">
                  Blaupunkt offers a wide range of high-performance EV charging products tailored for homes, businesses, and public spaces. From portable chargers to DC fast charging stations, our solutions are built for efficiency, safety, and seamless user experience.
                </p>
                <div className="flex gap-4">
                  <button className="border-2 border-blaupunkt-secondary rounded-xl px-5 py-2 text-blaupunkt-secondary font-medium text-sm">
                    Contact
                  </button>
                  <button className="border-2 border-blaupunkt-secondary rounded-xl px-5 py-2 text-blaupunkt-secondary font-medium text-sm">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Installation Services */}
              <div className="relative">
                <h2 className="text-3xl font-medium text-blaupunkt-blue mb-6">Installation Services</h2>
                <p className="text-lg font-light text-blaupunkt-primary-darker mb-6">
                  Our certified partners provide professional installation services to ensure your EV charging setup is safe, compliant, and optimized for performance. We handle everything from site inspection to final setup—whether it's a home garage or a commercial lot.
                </p>
                <div className="flex gap-4">
                  <button className="border-2 border-blaupunkt-secondary rounded-xl px-5 py-2 text-blaupunkt-secondary font-medium text-sm">
                    Contact
                  </button>
                </div>
              </div>

              {/* Maintenance & Support */}
              <div className="relative">
                <h2 className="text-3xl font-medium text-blaupunkt-blue mb-6">Maintenance & Support</h2>
                <p className="text-lg font-light text-blaupunkt-primary-darker mb-6">
                  Blaupunkt stands by your side even after installation. Our maintenance services include regular inspections, system updates, and on-call support to ensure uninterrupted performance and peace of mind.
                </p>
                <div className="flex gap-4">
                  <button className="border-2 border-blaupunkt-secondary rounded-xl px-5 py-2 text-blaupunkt-secondary font-medium text-sm">
                    Contact
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-[397px]">
              <div className="rounded-2xl h-full w-full overflow-hidden bg-gray-200">
                <img
                  src="/src/assets/Images/ChargIngStations/stationoverbg.png"
                  alt="Blaupunkt EV Charging Station"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
