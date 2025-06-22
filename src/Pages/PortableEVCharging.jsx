import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import Models from '../Components/CommonPages/Models.jsx'
import { Entirepagedata } from '../Data/index.js'
import portableEVChargingImage from '../assets/Images/CatImages/Portable_EV_Charging.png'

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
  return (
    <div>
      <HeroSection 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={portableEVChargingImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      {/* Overview Header */}
      <ImageHeader
        title='Overview'
        backgroundImage={OverviewData?.BgImage}
        showBackgroundImage={!!OverviewData?.BgImage}
      />      {/* All three overview components for Portable EV Charging */}
      <OverviewSection overviewData={{...OverviewData, category: 'portableEVCharging', image: portableEVChargingImage}} />
      <OverviewFeatureasandideal overviewData={{...OverviewData, category: 'portableEVCharging', IdealandFeaturesImage: portableEVChargingImage}} />      <Specifications        productImage={portableEVChargingImage}
        category="portableEVCharging"
      />
      <Models productImage={portableEVChargingImage} category='portableEVCharging' />
      <DownloadButton productCategory='portableEVCharging' />
    </div>
  )
}

export default PortableEVCharging