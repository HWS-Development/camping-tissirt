import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const [solid, setSolid] = useState(pathname !== '/')

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40 || pathname !== '/')
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const switchTo = (lng) => i18n.changeLanguage(lng)

  return (
    <header id="siteHeader" className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl shadow-soft glass text-white">
          <nav className="flex items-center justify-between p-4">
            <Link className="hover:text-brand-orange flex items-center gap-4" to="/">
              <img src="/images/Logo-Fin.webp" alt="Ourika Camp Logo" className="h-16 w-16 rounded-full" />
              <span className="text-lg sm:text-xl font-semibold tracking-wide">Ourika Camp</span>
            </Link>
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/20 px-3 py-2"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/></svg>
            </button>
            <ul className="hidden lg:flex items-center gap-6">
              <li><Link className="hover:text-brand-orange" to="/">{t('nav.home')}</Link></li>
              <li><Link className="hover:text-brand-orange" to="/rooms">{t('nav.rooms')}</Link></li>
              <li><Link className="hover:text-brand-orange" to="/gallery">{t('nav.gallery')}</Link></li>
              {/* <li><a className="hover:text-brand-orange" href="/#location">{t('nav.location')}</a></li> */}
              <li><a className="hover:text-brand-orange" href="/contact">{t('nav.contact')}</a></li>
              <li><a className="ml-2 inline-flex items-center rounded-xl bg-primary px-4 py-2 font-semibold text-black" href="https://camp-ourika.hotelrunner.com/bv3/search">{t('nav.book')}</a></li>
              
          <div className="ml-3 flex items-center gap-2 text-sm">
            <button onClick={() => switchTo('en')} className="px-2 py-1 rounded hover:bg-black/10">EN</button>
            <span className="opacity-40">|</span>
            <button onClick={() => switchTo('fr')} className="px-2 py-1 rounded hover:bg-black/10">FR</button>
          </div>
            </ul>
          </nav>
          {open && (
            <div className="lg:hidden border-t border-white/10">
              <ul className="p-4 grid gap-2 text-white/90">
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/" onClick={() => setOpen(false)}>{t('nav.home')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/rooms" onClick={() => setOpen(false)}>{t('nav.rooms')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/gallery" onClick={() => setOpen(false)}>{t('nav.gallery')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/contact" onClick={() => setOpen(false)}>{t('nav.contact')}</Link></li>
                <li><a className="mt-2 block rounded-lg bg-primary px-3 py-2 text-black font-semibold" href="https://camp-ourika.hotelrunner.com/bv3/search" onClick={() => setOpen(false)}>Book Now</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
