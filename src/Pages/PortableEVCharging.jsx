import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewAdvantage from '../Components/Common/Overview/OverviewAdvantage'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import Models from '../Components/CommonPages/Models.jsx'
import {
  Entirepagedata,
  portableEvChargingProductImages
} from '../Data/index.js'
import { portableEvChargingData, portableEvChargingConfig } from '../Data/PortableEVCharging/index.js'

const PortableEVCharging = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData
  } = Entirepagedata.portableEVCharging

  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.portableEVCharging.thumbnails.map(
    thumb => ({
      ...thumb,
      image: thumb.image, // Use the actual thumbnail image instead of hardcoded image
      alt: thumb.alt
    })
  )

  return (
    <div>      <HeroSection
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={
          Entirepagedata.portableEVCharging.mainImage ||
          portableEvChargingProductImages.main
        }
        imageAlt={imageAlt}
        thumbnails={thumbnails}
        thumbnailObjectFit='object-cover'
        mainImageObjectFit='object-cover'
      />
      {/* Overview Header */}
      <ImageHeader
        title='Overview'
        backgroundImage={OverviewData?.BgImage}
        showBackgroundImage={!!OverviewData?.BgImage}
      />{' '}
      {/* All three overview components for Portable EV Charging */}
      <OverviewSection
        overviewData={{
          ...OverviewData,
          category: 'portableEVCharging',
          image: OverviewData?.image || portableEvChargingProductImages.main
        }}
      />      <OverviewFeatureasandideal
        overviewData={{
          ...OverviewData,
          category: 'portableEVCharging',
          IdealandFeaturesImage:
            OverviewData?.IdealandFeaturesImage ||
            portableEvChargingProductImages.feature
        }}
      />{' '}
      <OverviewAdvantage
        overviewData={{ ...OverviewData, category: 'portableEVCharging' }}
      />
      <Specifications
        productImage={portableEvChargingProductImages.specifications}
        category='portableEVCharging'
      />
      <Models
        category='portableEVCharging'
        modelsData={portableEvChargingData.modelsData}
      />
      <DownloadButton 
        productCategory='portableEVCharging' 
        downloadData={portableEvChargingConfig.downloads}
      />
    </div>
  )
}

export default PortableEVCharging
