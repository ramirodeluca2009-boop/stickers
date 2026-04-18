import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Benefits from './components/Benefits'
import DtfSection from './components/DtfSection'
import Gallery from './components/Gallery'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Benefits />
      <DtfSection />
      <Gallery />
      <CtaFinal />
      <Footer />
    </div>
  )
}

export default App
