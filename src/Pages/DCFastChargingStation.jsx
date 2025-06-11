import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewAdvantage from '../Components/Common/Overview/OverviewAdvantage'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import { Entirepagedata } from '../Utils/data.js'
import dcFastChargingStationImage from '../assets/Images/DC_Fast_Charging_Station.png'

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
  return (
    <div>
      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={dcFastChargingStationImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      {/* Overview Header */}
      <ImageHeader
        title='Overview'
        backgroundImage={OverviewData?.BgImage}
        showBackgroundImage={!!OverviewData?.BgImage}
      />      {/* All three overview components for DC Fast Charging Station */}
      <OverviewSection overviewData={{...OverviewData, category: 'dcFastChargingStation', image: dcFastChargingStationImage}} />
      <OverviewAdvantage overviewData={{...OverviewData, category: 'dcFastChargingStation'}} />
      <OverviewFeatureasandideal overviewData={{...OverviewData, category: 'dcFastChargingStation', IdealandFeaturesImage: dcFastChargingStationImage}} />
        <Specifications 
        productImage={dcFastChargingStationImage}
        category="dcFastChargingStation"
      />
      <DownloadButton productCategory='dcFastChargingStation' />
    </div>
  )
}

export default DCFastChargingStation