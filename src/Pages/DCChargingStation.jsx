import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import { Entirepagedata } from '../Utils/data.js'
import dcChargingStationImage from '../assets/Images/DC_Charging_Station.png'
import Overview from '../Components/CommonPages/Overview.jsx'
import Specifications from '../Components/CommonPages/Specifications'
import Highligths from '../Components/CommonPages/Highligths'
import Models from '../Components/CommonPages/Models'
import DownlaodButton from '../Components/CommonPages/DownlaodButton'

const DCChargingStation = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData,
    specificationsData,
    highlightsData,
    modelsData,
  } = Entirepagedata.dcChargingStation;
  
  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.dcChargingStation.thumbnails.map(thumb => ({
    ...thumb,
    image: dcChargingStationImage,
    alt: thumb.alt
  }));
  
  // Process overview data with actual image
  const processedOverviewData = {
    ...OverviewData,
    image: dcChargingStationImage,
    imageHeight: {
      mobile: '450px',
      desktop: '550px'
    },
    imageMinHeight: {
      mobile: '350px',
      desktop: '625px'
    }
  };

  return (
    <div>
      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={dcChargingStationImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      <Overview 
        overviewData={processedOverviewData}
      />
      {specificationsData && (
        <Specifications specificationsData={specificationsData} />
      )}
      {highlightsData && (
        <Highligths highlightsData={highlightsData} />
      )}      {modelsData && (
        <Models modelsData={modelsData} />
      )}
      <DownlaodButton title="Download DC Charging Station Brochure" />
    </div>
  )
}

export default DCChargingStation
