import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import OverviewAdvantage from '../Components/Common/Overview/OverviewAdvantage'
import OverviewFeatureasandideal from '../Components/Common/Overview/OverviewFeatureasandideal'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import ChargingStationModels from '../Components/CommonPages/ChargingStationModels.jsx'
import { Entirepagedata } from '../Utils/data.js'
import chargingStationsImage from '../assets/Images/Charging_Stations.png'

const ChargingStations = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData
  } = Entirepagedata.chargingStations

  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.chargingStations.thumbnails.map(thumb => ({
    ...thumb,
    image: chargingStationsImage,
    alt: thumb.alt
  }))
  return (
    <div>
      <HeroSection
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={chargingStationsImage}
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      {/* Overview Header */}
      <div className='gap-y-'>
        <ImageHeader
          title='Overview'
          backgroundImage={OverviewData?.BgImage}
          showBackgroundImage={!!OverviewData?.BgImage}
        />{' '}
        {/* All three overview components for Charging Stations */}
        <OverviewSection
          overviewData={{
            ...OverviewData,
            category: 'chargingStations',
            image: chargingStationsImage
          }}
        />
        <OverviewAdvantage
          overviewData={{ ...OverviewData, category: 'chargingStations' }}
        />
        <OverviewFeatureasandideal
          overviewData={{
            ...OverviewData,
            category: 'chargingStations',
            IdealandFeaturesImage: chargingStationsImage
          }}
        />
      </div>{' '}      <Specifications
        productImage={chargingStationsImage}
        category='chargingStations'
      />
      <ChargingStationModels category='chargingStations' />
      <DownloadButton productCategory='chargingStations' />
    </div>
  )
}

export default ChargingStations
