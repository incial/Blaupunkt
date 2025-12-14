'use client'

import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import Models from '../Components/CommonPages/Models.jsx'
import DownloadButton from '../Components/CommonPages/DownlaodButton'
import { Entirepagedata, chargingCableProductImages } from '../Data/index.js'
import { chargingCablesConfig } from '../Data/ChargingCables/index.js'

const ChargingCables = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData
  } = Entirepagedata.chargingCables // Process thumbnails with actual images
  const thumbnails = Entirepagedata.chargingCables.thumbnails.map(thumb => ({
    ...thumb,
    image: thumb.image, // Use the actual thumbnail image instead of productImage
    alt: thumb.alt
  }))
  return (
    <div>
      <h1 className="sr-only">EV Charging Cables in UAE — Type 2 & 22kW</h1>
      <h2 className="sr-only">Type 2 charging cables compatible with major EV brands</h2>
      <h2 className="sr-only">High-power 22kW cables for faster AC charging</h2>
      <HeroSection
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        imageAlt={imageAlt}
        thumbnails={thumbnails}
      />
      {/* Overview Header */}
      <div>
        <ImageHeader
          title='Overview'
          backgroundImage={OverviewData?.BgImage}
          showBackgroundImage={!!OverviewData?.BgImage}
        />{' '}
        {/* Only Overview Section for Charging Cables */}
        <OverviewSection
          overviewData={{
            ...OverviewData,
            category: 'chargingCables',
            image: OverviewData?.image || ''
          }}
        />{' '}
      </div>
      <Specifications
        productImage={chargingCableProductImages.specifications}
        category='chargingCables'
      />
      <Models category='chargingCables' />
      <DownloadButton
        productCategory='chargingCables'
        downloadData={chargingCablesConfig.downloads}
      />
    </div>
  )
}

export default ChargingCables
