import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  // Your hero images in /public/images/hero
  const files = useMemo(
    () => [
      'Screenshot 2025-09-15 163505.png',
      'Screenshot 2025-09-15 163518.png',
      'Screenshot 2025-09-15 163530.png',
    ],
    []
  )
  const slides = useMemo(
    () => files.map((f) => `${process.env.PUBLIC_URL}/images/hero/${f}`),
    [files]
  )

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  // Preload (no flicker)
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })
  }, [slides])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Autoplay (pause on hover)
  useEffect(() => {
    if (paused || slides.length <= 1) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
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
      {/* Slides (instant switch, no fade) */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t('galleryPage.alt', { n: i + 1, defaultValue: `Hero image ${i + 1}` })}
            className={`absolute inset-0 h-full w-full object-cover object-center ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0s' }} // instant cut (no flow)
            aria-hidden={i !== index}
            draggable="false"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : undefined}
            decoding="async"
          />
        ))}
      </div>

      {/* Light, clear image + bottom gradient for text readability */}
      <div className="pointer-events-none absolute inset-0">
        {/* Very light global dim so photos stay bright */}
        <div className="absolute inset-0 bg-black/15" />
        {/* Stronger at the bottom for headings */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Controls (only if multiple slides) */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 hover:bg-white/35 focus:outline-none"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 hover:bg-white/35 focus:outline-none"
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/60'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Text + CTAs */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
          {t('home.welcome', { city: t('home.city') })}
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          {t('home.headline')}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-black shadow-soft"
          >
            {t('home.ctaBook')}
          </a>
          <a
            href="/rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:border-white/60"
          >
            {t('home.ctaRooms')}
          </a>
        </div>
      </div>
    </section>
  )
}
