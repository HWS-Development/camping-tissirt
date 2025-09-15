import Hero from '../components/Hero'
import Booking from '../components/Booking'
import HavreDePaix from '../components/HavreDePaix'   // ⬅️ add this


import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Booking />

  
      <Reviews />
      <HavreDePaix /> 
      <Gallery />
        {/* ⬅️ new section */}

      <Location />
      <Contact />
    </>
  )
}
