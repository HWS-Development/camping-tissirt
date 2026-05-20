import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'


export default function App() {
  return (
    <div className="font-sans bg-white text-slate-950">
      <Navbar />
      <FloatingWhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
