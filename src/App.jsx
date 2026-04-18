import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Benefits from './components/Benefits'
import AlsoOffer from './components/AlsoOffer'
import CustomStickers from './components/CustomStickers'
import Pricing from './components/Pricing'
import DtfSection from './components/DtfSection'
import Catalog from './components/Catalog'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Catalog />
      <Pricing />
      <Benefits />
      <AlsoOffer />
      <CustomStickers />
      <DtfSection />
      <CtaFinal />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
