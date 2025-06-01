import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import HomePage from './Pages/HomePage'
import ChargingCables from './Pages/ChargingCables'
import ChargingStations from './Pages/ChargingStations'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/charging-cables" element={<ChargingCables />} />
            <Route path="/charging-stations" element={<ChargingStations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App