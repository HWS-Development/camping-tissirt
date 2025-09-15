import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from '../components/Lightbox'
import { ROOM_IMAGES, getCover, getRoomImages } from '../data/roomImages'

// static pricing & folder keys
const ROOM_META = [
  { key: 'double',      priceEur: 95 },
  { key: 'triplePool',  priceEur: 110 },
  { key: 'juniorSuite', priceEur: 120 },
  { key: 'familySuite', priceEur: 140 }
]

export default function RoomsPage() {
  const { t } = useTranslation()
  const [lbOpen, setLbOpen] = useState(false)
  const [lbImages, setLbImages] = useState([])
  const [lbTitle, setLbTitle] = useState('')
  const [lbStart, setLbStart] = useState(0)

  // Build translated + sorted list once per language
  const rooms = useMemo(() => {
    const items = ROOM_META.map((m) => {
      const title = t(`roomsPage.items.${m.key}.title`)
      const desc  = t(`roomsPage.items.${m.key}.desc`)
      const priceLabel = t('roomsPage.pricePerNight', { price: `€${m.priceEur}` })
      const cover = getCover(m.key)
      return { ...m, title, desc, priceLabel, cover }
    })
    items.sort((a, b) => a.priceEur - b.priceEur)
    return items
  }, [t])

  const openLightbox = (key, startIndex = 0, title = '') => {
    const imgs = getRoomImages(key)
    if (!imgs.length) return
    setLbImages(imgs)
    setLbStart(startIndex)
    setLbTitle(title)
    setLbOpen(true)
  }

  return (
    <section className="pb-16 pt-48 bg-brand-desert/40 bg-pattern min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{t('roomsPage.title')}</h1>
        <p className="text-brand-black/70 max-w-2xl mb-12">{t('roomsPage.intro')}</p>

        <div className="grid gap-8 md:grid-cols-2">
          {rooms.map((room) => (
            <article
              key={room.key}
              className="rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5 flex flex-col"
            >
              {/* COVER IMAGE — click to open room slider */}
              <button
                type="button"
                onClick={() => openLightbox(room.key, 0, room.title)}
                className="relative group"
                aria-label={`${room.title} photos`}
              >
                <img
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  src={room.cover}
                  alt={room.title}
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-3 rounded-lg bg-black/50 text-white text-xs px-2 py-1">
                  {t('roomsHome.viewMore') ?? 'View more'}
                </span>
              </button>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold">{room.title}</h2>
                <p className="mt-2 text-brand-black/70 flex-1">{room.desc}</p>
                <div className="mt-4 flex items-center justify-between">
               
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => openLightbox(room.key, 0, room.title)}
                      className="inline-flex items-center rounded-xl border border-black/10 px-4 py-2 font-semibold hover:border-black/20"
                    >
                      {t('galleryPage.heading')}
                    </button>
                    <a href="https://camp-ourika.hotelrunner.com/bv3/search" className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-black font-semibold">
                      {t('roomsPage.book')}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox for current room */}
      <Lightbox
        open={lbOpen}
        images={lbImages}
        startIndex={lbStart}
        title={lbTitle}
        onClose={() => setLbOpen(false)}
      />
    </section>
  )
}
