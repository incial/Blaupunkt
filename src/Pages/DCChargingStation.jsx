import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewAdvantage from '../Components/Common/Overview/OverviewAdvantage'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import Models from '../Components/CommonPages/Models.jsx'
import { Entirepagedata } from '../Utils/data.js'
import dcChargingStationImage from '../assets/Images/CatImages/DC_Charging_Station.png'


const DCChargingStation = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData,
  } = Entirepagedata.dcChargingStation;
  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.dcChargingStation.thumbnails.map(thumb => ({
    ...thumb,
    image: dcChargingStationImage,
    alt: thumb.alt
  }));
  
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
      {/* Overview Header */}
      <ImageHeader
        title='Overview'
        backgroundImage={OverviewData?.BgImage}
        showBackgroundImage={!!OverviewData?.BgImage}
      />      {/* All three overview components for DC Charging Station */}
      <OverviewSection overviewData={{...OverviewData, category: 'dcChargingStation', image: dcChargingStationImage}} />
      <OverviewAdvantage overviewData={{...OverviewData, category: 'dcChargingStation'}} />
      <OverviewFeatureasandideal overviewData={{...OverviewData, category: 'dcChargingStation', IdealandFeaturesImage: dcChargingStationImage}} />        <Specifications 
        productImage={dcChargingStationImage}
        category="dcChargingStation"
      />
      <Models productImage={dcChargingStationImage} category='dcChargingStation' />
      <DownloadButton productCategory='dcChargingStation' />
    </div>
  )
}

export default DCChargingStation
