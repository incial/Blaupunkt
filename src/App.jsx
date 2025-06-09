import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import ChargingCables from './Pages/ChargingCables'
import ChargingStations from './Pages/ChargingStations'
import DCChargingStation from './Pages/DCChargingStation'
import DCFastChargingStation from './Pages/DCFastChargingStation'
import PortableEVCharging from './Pages/PortableEVCharging'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow pt-20 lg:pt-24'>
          {' '}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/charging-cables' element={<ChargingCables />} />
            <Route path='/charging-stations' element={<ChargingStations />} />
            <Route
              path='/dc-charging-station'
              element={<DCChargingStation />}
            />
            <Route
              path='/dc-fast-charging-station'
              element={<DCFastChargingStation />}
            />
            <Route
              path='/portable-ev-charging'
              element={<PortableEVCharging />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
