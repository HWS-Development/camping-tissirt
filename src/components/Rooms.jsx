import { useTranslation } from 'react-i18next'
import { getCover } from '../data/roomImages'

export default function Rooms() {
  const { t } = useTranslation()

  const featured = [
    {
      key: 'double',
      img: getCover('double')
    },
    {
      key: 'triplePool',
      img: getCover('triplePool')
    },
    {
      key: 'juniorSuite',
      img: getCover('juniorSuite')
    },
    {
      key: 'familySuite',
      img: getCover('familySuite')
    }
  ]

  return (
    <section id="rooms" className="py-16 bg-brand-desert/40 bg-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('roomsHome.heading')}</h2>
          <p className="mt-2 text-brand-black/70">{t('roomsHome.sub')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((room) => (
            <article key={room.key} className="rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5">
              <img className="h-48 w-full object-cover" src={room.img} alt={t(`roomsPage.items.${room.key}.title`)} />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{t(`roomsPage.items.${room.key}.title`)}</h3>
                <p className="mt-1 text-sm text-brand-black/70">{t(`roomsPage.items.${room.key}.desc`)}</p>
                <div className="mt-4 flex justify-end">
                  <a href="https://camp-ourika.hotelrunner.com/bv3/search" className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-black font-semibold">
                    {t('roomsPage.book')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="/rooms" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 font-semibold hover:border-black/20 shadow-soft">
            {t('roomsHome.viewMore')}
          </a>
        </div>
      </div>
    </section>
  )
}
