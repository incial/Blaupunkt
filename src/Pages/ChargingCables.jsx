import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import { Entirepagedata } from '../Utils/data.js'
import productImage from '../assets/Images/Product_image.png'
import Specifications from '../Components/CommonPages/Specifications.jsx'
import ImageHeader from '../Components/Common/ImageHeader'
import OverviewSection from '../Components/Common/Overview/OverviewSection'
import Models from '../Components/CommonPages/Models.jsx'
import DownloadButton from '../Components/CommonPages/DownlaodButton'

const ChargingCables = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData
  } = Entirepagedata.chargingCables
  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.chargingCables.thumbnails.map(thumb => ({
    ...thumb,
    image: productImage,
    alt: thumb.alt
  }))
  return (
    <div>
      <HeroSection
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        buttonText={buttonText}
        mainImage={productImage}
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
            image: productImage
          }}
        />      </div>
      <Specifications productImage={productImage} category='chargingCables' />
      <Models productImage={productImage} category='chargingCables' />
      <DownloadButton productCategory='chargingCables' />
    </div>
  )
}

export default ChargingCables
