import { useEffect, useState } from 'react'
import { galleryImages } from '../data/galleryImages'

export default function GalleryPage() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (selectedIndex) => {
    setIndex(selectedIndex)
    setOpen(true)
  }

  const close = () => setOpen(false)
  const prev = () => setIndex((value) => (value - 1 + galleryImages.length) % galleryImages.length)
  const next = () => setIndex((value) => (value + 1) % galleryImages.length)

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <section className="min-h-screen pb-16 pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_90px_rgba(14,165,233,0.12)] backdrop-blur-sm">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
                  Gallery hero
                </span>
                <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Camping Tissirt photo gallery</h1>
              </div>
            </div>

            <div className="px-2 pb-2 lg:px-6 lg:pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Gallery</p>
              <p className="mt-4 text-lg leading-8 text-slate-600 sm:text-xl">
                A dedicated visual tour of the campsite, its palm grove atmosphere, its calm corners, and the practical comfort that makes it easy to stop and stay.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-sky-100 bg-sky-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Mood</p>
                  <p className="mt-2 text-slate-700">Quiet, airy, and comfortable to the eye.</p>
                </div>
                <div className="rounded-[1.6rem] border border-sky-100 bg-sky-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Use</p>
                  <p className="mt-2 text-slate-700">Open any image to browse the full set in the lightbox.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, imageIndex) => (
            <button
              key={`${image.src}-${imageIndex}`}
              type="button"
              onClick={() => openAt(imageIndex)}
              className="group overflow-hidden rounded-[1.8rem] border border-white/70 bg-white p-2 shadow-[0_20px_65px_rgba(14,165,233,0.1)]"
              aria-label={`Open gallery image ${imageIndex + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full rounded-[1.3rem] object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/92 p-4" role="dialog" aria-modal="true" onClick={close}>
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={galleryImages[index].src}
              alt={galleryImages[index].alt}
              className="max-h-[82vh] w-full rounded-[1.75rem] bg-black object-contain shadow-2xl"
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-white">
              <button type="button" onClick={prev} className="rounded-full bg-white/10 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/20">
                Previous
              </button>
              <span className="text-sm text-white/80">{index + 1} / {galleryImages.length}</span>
              <button type="button" onClick={next} className="rounded-full bg-white/10 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/20">
                Next
              </button>
              <button type="button" onClick={close} className="rounded-full bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
