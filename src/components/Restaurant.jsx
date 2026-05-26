import { useTranslation } from 'react-i18next'

const restaurantImage = `${process.env.PUBLIC_URL}/images/hall/${encodeURIComponent('_DSC3559-HDR.jpg')}`

export default function Restaurant() {
  const { t } = useTranslation()
  const cards = t('restaurantSection.cards', { returnObjects: true })
  const restaurantCards = Array.isArray(cards)
    ? cards
    : [
        { title: 'On-site meals', text: 'Restaurant service directly at the camp for residents and passing travelers.' },
        { title: 'Homemade bread', text: 'Fresh bread can be prepared on order, a useful and welcoming touch for campers.' },
        { title: 'Good base for walking days', text: 'After local walks or hiking on demand, guests can return to showers, food, Wi-Fi, and a quieter palm grove atmosphere.' }
      ]

  return (
    <section id="restaurant" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="rounded-[2.4rem] bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{t('restaurantSection.eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-bold">{t('restaurantSection.title')}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {t('restaurantSection.body')}
          </p>
          <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10">
            <img
              src={restaurantImage}
              alt={t('restaurantSection.imageAlt')}
              className="h-64 w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white bg-white p-6 shadow-lg shadow-sky-100/70">
            <h3 className="text-xl font-semibold text-slate-950">{restaurantCards[0].title}</h3>
            <p className="mt-3 text-slate-600">{restaurantCards[0].text}</p>
          </div>
          <div className="rounded-[2rem] border border-white bg-white p-6 shadow-lg shadow-sky-100/70">
            <h3 className="text-xl font-semibold text-slate-950">{restaurantCards[1].title}</h3>
            <p className="mt-3 text-slate-600">{restaurantCards[1].text}</p>
          </div>
          <div className="rounded-[2rem] border border-white bg-[linear-gradient(180deg,#eff6ff,#ffffff)] p-6 shadow-lg shadow-sky-100/70 sm:col-span-2">
            <h3 className="text-xl font-semibold text-slate-950">{restaurantCards[2].title}</h3>
            <p className="mt-3 text-slate-600">{restaurantCards[2].text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
