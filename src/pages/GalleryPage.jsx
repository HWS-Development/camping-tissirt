import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function GalleryPage() {
  const { t } = useTranslation();

  // List your image filenames here (inside /public/gallery/)
  const files = [
    '0aae7b19-7564-4a0b-8951-69f61f112923.jpg','1d5c777b-64a8-4b8e-a0df-7db0639bdc11.jpg','Screenshot 2025-09-15 160955.png',"Screenshot 2025-09-24 164429.png","Screenshot 2025-09-24 164537.png"
    ,'94c414dd-2859-4cd6-b3d6-cff950e8d91a.jpg',"Screenshot 2025-09-24 164510.png",'Screenshot 2025-09-15 160942.png','2025-06-11 (21).jpg',"Screenshot 2025-09-15 160254.png"
   ,'705690381.jpg',"Screenshot 2025-09-15 160942.png",'7535c6be-f515-4a02-9b19-111ca6985f55.jpg','2025-06-12.jpg','a3ef54e3-7d5e-45ba-90d6-35e1c373489a.jpg',"Screenshot 2025-09-24 164306.png","Screenshot 2025-09-24 164450.png",
    "Screenshot 2025-09-15 160955.png","Screenshot 2025-09-24 164100.png","Screenshot 2025-09-24 164129.png","Screenshot 2025-09-24 164153.png","Screenshot 2025-09-24 164230.png","Screenshot 2025-09-24 164554.png","Screenshot 2025-09-24 164343.png"
  ];

  const images = files.map((f) => `/images/tout/${f}`);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => { setIndex(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev = (e) => { e?.stopPropagation?.(); setIndex((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e?.stopPropagation?.(); setIndex((i) => (i + 1) % images.length); };

  // keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section className="pb-16 pt-48 min-h-screen bg-brand-desert/40 bg-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold">{t('galleryPage.heading')}</h1>
          <p className="mt-2 text-brand-black/70">{t('galleryPage.sub')}</p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openAt(i)}
              className="group relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label={t('galleryPage.alt', { n: i + 1 })}
            >
              <img
                src={src}
                alt={t('galleryPage.alt', { n: i + 1 })}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[index]}
              alt={t('galleryPage.alt', { n: index + 1 })}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-soft bg-black"
            />
            {/* Controls */}
            <div className="absolute inset-x-0 -bottom-12 flex items-center justify-center gap-4 text-white">
              <button
                onClick={prev}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md"
              >
                {t('galleryPage.prev')}
              </button>
              <span className="text-sm opacity-80">
                {t('galleryPage.counter', { current: index + 1, total: images.length })}
              </span>
              <button
                onClick={next}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md"
              >
                {t('galleryPage.next')}
              </button>
              <button
                onClick={close}
                className="ml-4 px-4 py-2 rounded-lg bg-primary text-black font-semibold"
              >
                {t('galleryPage.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
