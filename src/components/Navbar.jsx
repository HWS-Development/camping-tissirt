import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function TentLogo() {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-900/20">
      <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 46 30 14a2 2 0 0 1 3.3 0L56 46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 46 32 28l10 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 28v24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </span>
  )
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const homeLinks = [
    { label: t('nav.home'), href: '/#home' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.stay'), href: '/#stay' },
    { label: t('nav.restaurant'), href: '/#restaurant' },
    { label: t('nav.contact'), href: '/#contact' }
  ]
  const languages = ['en', 'fr', 'es']

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navShell = 'border border-white/70 bg-white/88 text-slate-900 shadow-2xl shadow-sky-100/60 backdrop-blur-xl'

  return (
    <header className="relative z-40 w-full">
      <div className={`w-full max-w-none rounded-none ${navShell}`}>
        <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label={t('brand.homeAria')}>
            <div className="rounded-[1.4rem] bg-white/10 p-1">
              <TentLogo />
            </div>
            <div>
              <p className="text-lg font-bold tracking-[0.18em] uppercase">{t('brand.name')}</p>
              <p className="text-xs text-slate-500">{t('brand.tagline')}</p>
            </div>
          </Link>

          <button
            type="button"
            className="inline-flex rounded-2xl bg-sky-50 px-3 py-2 text-sky-700 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={t('nav.toggle')}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-sky-100 bg-white px-2 py-2">
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => i18n.changeLanguage(language)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${i18n.resolvedLanguage === language ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}
                >
                  {t(`languages.${language}`)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 rounded-full bg-slate-50 px-2 py-2">
              {homeLinks.map((item) => (
                <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-sky-600">
                  {item.label}
                </a>
              ))}
              <Link to="/gallery" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-sky-600">
                {t('nav.gallery')}
              </Link>
            </div>
            <a
              href="https://wa.me/212662141378"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              {t('nav.whatsapp')}
            </a>
          </div>
        </nav>

        {open && (
          <div className="border-t border-sky-100 px-4 pb-4 pt-3 lg:hidden">
            <div className="grid gap-2">
              <div className="mb-2 flex items-center gap-2">
                {languages.map((language) => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => i18n.changeLanguage(language)}
                    className={`rounded-full px-3 py-2 text-xs font-semibold transition ${i18n.resolvedLanguage === language ? 'bg-sky-600 text-white' : 'bg-sky-50 text-sky-700'}`}
                  >
                    {t(`languages.${language}`)}
                  </button>
                ))}
              </div>
              {homeLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/gallery"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-700"
              >
                {t('nav.gallery')}
              </Link>
              <a
                href="https://wa.me/212662141378"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white"
              >
                {t('nav.contactWhatsapp')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
