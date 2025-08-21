import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewAdvantage from '../Components/Common/Overview/OverviewAdvantage'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import Models from '../Components/CommonPages/Models.jsx'
import { Entirepagedata, ProductImages } from '../Data/index.js'
import { dcFastChargingStationData, dcFastChargingStationConfig } from '../Data/DCFastChargingStation/index.js'

const DCFastChargingStation = () => {
  // Get data from Entirepagedata for DC Fast Charging Station
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData
  } = Entirepagedata.dcFastChargingStation

  // Get images for DC Fast Charging Station
  const dcFastChargingStationImages = ProductImages.dcFastChargingStation

  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.dcFastChargingStation.thumbnails.map(
    thumb => ({
      ...thumb,
      image: thumb.image, // Use the actual thumbnail image instead of hardcoded image
      alt: thumb.alt
    })
  )

  return (
    <div>
      {' '}
      <HeroSection
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={
          Entirepagedata.dcFastChargingStation.mainImage ||
          dcFastChargingStationImages.fastMid
        }
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      {/* Overview Header */}
      <ImageHeader
        title='Overview'
        backgroundImage={OverviewData?.BgImage}
        showBackgroundImage={!!OverviewData?.BgImage}
      />{' '}
      {/* All three overview components for DC Fast Charging Station */}
      <OverviewSection
        overviewData={{
          ...OverviewData,
          category: 'dcFastChargingStation',
          image: OverviewData?.image || dcFastChargingStationImages.fastMid
        }}
      />
      <OverviewAdvantage
        overviewData={{ ...OverviewData, category: 'dcFastChargingStation' }}
      />
      <OverviewFeatureasandideal
        overviewData={{
          ...OverviewData,
          category: 'dcFastChargingStation',
          IdealandFeaturesImage:
            OverviewData?.IdealandFeaturesImage ||
            dcFastChargingStationImages.fastMid
        }}
      />{' '}
      <Specifications
        productImage={dcFastChargingStationImages.fastSpec}
        category='dcFastChargingStation'
      />
      <Models
        category='dcFastChargingStation'
        modelsData={dcFastChargingStationData.modelsData}
      />
      <DownloadButton 
        productCategory='dcFastChargingStation' 
        downloadData={dcFastChargingStationConfig.downloads}
      />
    </div>
  )
}

export default DCFastChargingStation
