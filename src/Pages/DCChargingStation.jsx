import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewAdvantage from '../Components/Common/Overview/OverviewAdvantage'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import Models from '../Components/CommonPages/Models.jsx'
import { Entirepagedata, dcChargingStationProductImages } from '../Data/index.js'


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
    image: thumb.image, // Use the actual thumbnail image instead of productImage
    alt: thumb.alt
  }));
  
  return (
    <div>      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      {/* Overview Header */}
      <ImageHeader
        title='Overview'
        backgroundImage={OverviewData?.BgImage}
        showBackgroundImage={!!OverviewData?.BgImage}
      />      {/* All three overview components for DC Charging Station */}
      <OverviewSection overviewData={{...OverviewData, category: 'dcChargingStation', image: OverviewData?.image || ""}} />
      <OverviewAdvantage overviewData={{...OverviewData, category: 'dcChargingStation'}} />
      <OverviewFeatureasandideal overviewData={{...OverviewData, category: 'dcChargingStation', IdealandFeaturesImage: OverviewData?.IdealandFeaturesImage || ""}} />      <Specifications 
        productImage={dcChargingStationProductImages.main}
        category="dcChargingStation"
      />
      <Models category='dcChargingStation' />
      <DownloadButton productCategory='dcChargingStation' />
    </div>
  )
}

export default DCChargingStation
