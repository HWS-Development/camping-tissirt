import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  // 1) List your hero images (in /public/images/hero)
  const files = useMemo(() => [
    '717772676.jpg',
    '5f76a369-3890-4127-99d9-c195f3b29a8b.jpg',
    '7f3300d4-6cde-4c08-838e-b63b7aa12aa4.jpg'
  ], [])
  const slides = useMemo(
    () => files.map(f => `${process.env.PUBLIC_URL}/images/hero/${f}`),
    [files]
  )

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  // 2) Preload images to avoid flicker
  useEffect(() => {
    slides.forEach(src => { const img = new Image(); img.src = src })
  }, [slides])

  // 3) Controls
  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex(i => (i + 1) % slides.length)

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Auto-play (pause on hover)
  useEffect(() => {
    if (paused || slides.length <= 1) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  // Touch swipe
  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    const x = e.changedTouches[0].clientX
    const dx = x - (touchStartX.current ?? x)
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next())
    touchStartX.current = null
  }

  return (
    <section
      id="home"
      className="relative min-h-[88vh] grid place-items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides (cross-fade) */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t('galleryPage.alt', { n: i + 1 })}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Prev/Next buttons + dots (only if >1 slide) */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 focus:outline-none"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 focus:outline-none"
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Your existing text/CTAs */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
          {t('home.welcome', { city: t('home.city') })}
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">{t('home.headline')}</h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">{t('home.subtitle')}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* If your theme doesn't define bg-primary, use bg-brand-orange */}
          <a href="#booking" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-black shadow-soft">{t('home.ctaBook')}</a>
          <a href="/rooms" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:border-white/40">{t('home.ctaRooms')}</a>
        </div>
      </div>
    </section>
  )
}
