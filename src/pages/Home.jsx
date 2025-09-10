import Hero from '../components/Hero'
import Booking from '../components/Booking'

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
      <Gallery />
      <Location />
      <Contact />
    </>
  )
}
