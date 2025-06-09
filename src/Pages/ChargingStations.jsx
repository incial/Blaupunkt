import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import { Entirepagedata } from '../Utils/data.js'
import chargingStationsImage from '../assets/Images/Charging_Stations.png'
import Overview from '../Components/CommonPages/Overview.jsx'

const ChargingStations = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData,
  } = Entirepagedata.chargingStations;
  
    // Process thumbnails with actual images
  const thumbnails = Entirepagedata.chargingStations.thumbnails.map(thumb => ({
    ...thumb,
    image: chargingStationsImage,
    alt: thumb.alt
  }));
  // Process overview data with actual image
  const processedOverviewData = {
    ...OverviewData,
    image: chargingStationsImage,
    imageHeight: {
      mobile: '400px',
      desktop: '800px'
    },
    imageMinHeight: {
      mobile: '300px',
      desktop: '500px'
    }
  };

  return (
    <div>
      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={chargingStationsImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}      />
      <Overview 
        overviewData={processedOverviewData}
      />
    </div>
  )
}

export default ChargingStations