import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const files = [
  '0aae7b19-7564-4a0b-8951-69f61f112923.jpg','1d02a86b-5294-4108-8957-7799f2dfa0cf.jpg','1d5c777b-64a8-4b8e-a0df-7db0639bdc11.jpg',
  '53c21403-64f3-4343-b059-8f14f04f2756.jpg','8e76de73-a983-4e1c-87d9-e3e3e1d8a70e.jpg','2025-06-11 (5).jpg','94c414dd-2859-4cd6-b3d6-cff950e8d91a.jpg',"155532.png"
]

export default function Gallery() {
  const { t } = useTranslation()

  // Build full public URLs (handles spaces/parentheses)
  const urls = useMemo(
    () => files.map((f) => `${process.env.PUBLIC_URL}/images/tout/${encodeURIComponent(f)}`),
    []
  )

  // Lightbox state
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const openAt = (i) => { setIdx(i); setOpen(true) }
  const close = () => setOpen(false)
  const prev = () => setIdx((i) => (i - 1 + urls.length) % urls.length)
  const next = () => setIdx((i) => (i + 1) % urls.length)

  // Keyboard support
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, urls.length])

  // Touch swipe
  const startX = useRef(null)
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    const dx = (endX - (startX.current ?? endX))
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next())
    startX.current = null
  }

  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('gallery.heading')}</h2>
        </div>

        {/* Thumbnails grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {urls.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(i)}
              className="group relative overflow-hidden rounded-xl focus:outline-none"
              aria-label={t('gallery.alt', { n: i + 1, defaultValue: `Gallery image ${i + 1}` })}
            >
              <img
                className="h-44 w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.03]"
                src={src}
                alt={t('gallery.alt', { n: i + 1, defaultValue: `Gallery image ${i + 1}` })}
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/0 group-hover:ring-2 group-hover:ring-white/80 transition" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox slider */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Slide image */}
            <img
              src={urls[idx]}
              alt={t('gallery.alt', { n: idx + 1, defaultValue: `Gallery image ${idx + 1}` })}
              className="w-full max-h-[82vh] object-contain rounded-xl shadow-soft bg-black"
            />

            {/* Controls */}
            {urls.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 backdrop-blur text-white text-xl"
                  aria-label={t('gallery.prev', 'Previous')}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 backdrop-blur text-white text-xl"
                  aria-label={t('gallery.next', 'Next')}
                >
                  ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                  {urls.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={t('gallery.goto', { n: i + 1, defaultValue: `Go to slide ${i + 1}` })}
                      className={`h-2 w-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/60'}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Counter + Close */}
            <div className="absolute -bottom-12 inset-x-0 flex items-center justify-center gap-4 text-white">
              <span className="text-sm opacity-80">
                {t('gallery.counter', { current: idx + 1, total: urls.length, defaultValue: `${idx + 1} / ${urls.length}` })}
              </span>
              <button
                onClick={close}
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold"
              >
                {t('gallery.close', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
