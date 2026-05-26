import Hero from '../components/Hero'
import Overview from '../components/Overview'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import StayOptions from '../components/StayOptions'
import Rooms from '../components/Rooms'
import Restaurant from '../components/Restaurant'
import GalleryPreview from '../components/GalleryPreview'
import Location from '../components/Location'

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Reviews />
      <Services />
      <StayOptions />
      <Rooms />
      <Restaurant />
      <GalleryPreview />
      <Location />
    </>
  )
}
