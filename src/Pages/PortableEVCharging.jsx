import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import { Entirepagedata } from '../Utils/data.js'
import portableEVChargingImage from '../assets/Images/Portable_EV_Charging.png'
import Overview from '../Components/CommonPages/Overview.jsx'

const PortableEVCharging = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData,
  } = Entirepagedata.portableEVCharging;
  
  // Get overview data
  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.portableEVCharging.thumbnails.map(thumb => ({
    ...thumb,
    image: portableEVChargingImage,
    alt: thumb.alt
  }));
  // Process overview data with actual image
  const processedOverviewData = {
    ...OverviewData,
    image: portableEVChargingImage,
    imageHeight: {
      mobile: '350px',
      desktop: '450px'
    },
    imageMinHeight: {
      mobile: '250px',
      desktop: '350px'
    }
  };

  return (
    <div>
      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={portableEVChargingImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}      />
      <Overview 
        overviewData={processedOverviewData}
      />
    </div>
  )
}

export default PortableEVCharging