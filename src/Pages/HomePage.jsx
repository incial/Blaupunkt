import React from 'react'
import HeroSection from '../Components/HeroSection'
import Category from '../Components/Category'
import OurProducts from '../Components/OurProducts'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <OurProducts />
    </div>
  )
}

export default HomePage