import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import ErrorBoundary from './Components/Common/ErrorBoundary'
import WhatsAppButton from './Components/Common/WhatsAppButton'

// Keep HomePage in the main bundle (primary landing / LCP)
import HomePage from './Pages/HomePage'

// Lazy-load secondary routes to reduce initial JS bundle size
const Products = lazy(() => import('./LegacyPages/Products'))
const ChargingCables = lazy(() => import('./LegacyPages/ChargingCables'))
const ChargingStations = lazy(() => import('./LegacyPages/ChargingStations'))
const ContactPage = lazy(() => import('./LegacyPages/Contact'))
const DCChargingStation = lazy(() => import('./LegacyPages/DCChargingStation'))
const DCSuperFastChargingStation = lazy(() =>
  import('./LegacyPages/DCSuperFastChargingStation'),
)
const PortableEVCharging = lazy(() => import('./LegacyPages/PortableEVCharging'))
const Services = lazy(() => import('./LegacyPages/Services'))
const Company = lazy(() => import('./LegacyPages/Company'))
const NotFound = lazy(() => import('./LegacyPages/NotFound'))


const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow pt-20 lg:pt-24'>
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className='w-full py-16 flex items-center justify-center text-blaupunkt-primary-darker'>
                      Loading...
                    </div>
                  }
                >
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
                      path='/dc-super-fast-charging-station'
                      element={<DCSuperFastChargingStation />}
                    />
                    <Route
                      path='/portable-ev-charging'
                      element={<PortableEVCharging />}
                    />
                    <Route path='/services' element={<Services />} />
                    <Route path='/company' element={<Company />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            {/* Global floating WhatsApp button */}
            <WhatsAppButton />
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
