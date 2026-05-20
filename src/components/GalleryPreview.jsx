import { Link } from 'react-router-dom'
import { galleryImages } from '../data/galleryImages'

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Gallery</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">A first look at the place</h2>
            <p className="mt-4 text-lg text-slate-600">
              A dedicated gallery page keeps all images in one place, while the homepage stays focused on the main information visitors need.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-4 font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50"
          >
            Open full gallery
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_25px_80px_rgba(14,165,233,0.1)]">
            <img src={previewImages[0].src} alt={previewImages[0].alt} className="h-[25rem] w-full rounded-[1.5rem] object-cover transition duration-300 hover:scale-[1.02] sm:h-[32rem]" loading="lazy" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {previewImages.slice(1).map((image, index) => (
              <div key={`${image.src}-${index}`} className="overflow-hidden rounded-[1.6rem] border border-white/70 bg-white p-2 shadow-lg shadow-sky-100/60">
                <img src={image.src} alt={image.alt} className="h-44 w-full rounded-[1.2rem] object-cover transition duration-300 hover:scale-[1.03] sm:h-52" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
