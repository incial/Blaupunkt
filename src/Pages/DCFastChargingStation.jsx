import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import { Entirepagedata } from '../Utils/data.js'
import dcFastChargingStationImage from '../assets/Images/DC_Fast_Charging_Station.png'
import Overview from '../Components/CommonPages/Overview.jsx'

const DCFastChargingStation = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData,
  } = Entirepagedata.dcFastChargingStation;
  
  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.dcFastChargingStation.thumbnails.map(thumb => ({
    ...thumb,
    image: dcFastChargingStationImage,
    alt: thumb.alt
  }));
  // Process overview data with actual image
  const processedOverviewData = {
    ...OverviewData,
    image: dcFastChargingStationImage,    imageHeight: {
      mobile: '450px',
      desktop: '550px'
    },
    imageMinHeight: {
      mobile: '350px',
      desktop: '950px'
    }
  };

  return (
    <div>
      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={dcFastChargingStationImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}      />
      <Overview 
        overviewData={processedOverviewData}
      />
    </div>
  )
}

export default DCFastChargingStation