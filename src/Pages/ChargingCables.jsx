import React from 'react'
import HeroSection from '../Components/CommonPages/HeroSection'
import { Entirepagedata } from '../Utils/data.js'
import productImage from '../assets/Images/Product_image.png'
import Overview from '../Components/CommonPages/Overview.jsx'

const ChargingCables = () => {
  // Get data from Entirepagedata
  const {
    title,
    description,
    breadcrumbs,
    buttonText,
    imageAlt,
    OverviewData,
  } = Entirepagedata.chargingCables;
  // Process thumbnails with actual images
  const thumbnails = Entirepagedata.chargingCables.thumbnails.map(thumb => ({
    ...thumb,
    image: productImage,
    alt: thumb.alt
  }));
  // Process overview data with actual image
  const processedOverviewData = {
    ...OverviewData,
    image: productImage,    imageHeight: {
      mobile: '400px',
      desktop: '500px'
    },
    imageMinHeight: {
      mobile: '300px',
      desktop: '400px'
    }
  };

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
      <Overview 
        overviewData={processedOverviewData}
      />
    </div>
  )
}

export default ChargingCables