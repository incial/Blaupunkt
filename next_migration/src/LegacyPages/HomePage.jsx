'use client'

import React from 'react'
import HeroSection from '../Components/HeroSection'
import Category from '../Components/Category'
import OurProducts from '../Components/OurProducts'

const HomePage = () => {
  return (
    <div>
      <h1 className="sr-only">EV Charger UAE — Blaupunkt EV Charging Solutions</h1>
      <h2 className="sr-only">DEWA-approved home and commercial EV chargers</h2>
      <h2 className="sr-only">High-quality AC and DC chargers for UAE homes and businesses</h2>
      <HeroSection />
      <Category />
      <OurProducts />
    </div>
  )
}

export default HomePage