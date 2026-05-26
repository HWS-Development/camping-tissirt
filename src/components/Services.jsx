import { useTranslation } from 'react-i18next'

const items = [
  {
    title: 'Sanitary comfort',
    text: 'Very clean sanitary blocks with hot, spacious showers included in the stay.',
    icon: 'shower'
  },
  {
    title: 'Electricity',
    text: 'Power access is available for a practical and comfortable camping setup.',
    icon: 'bolt'
  },
  {
    title: 'Free Wi-Fi',
    text: 'Wireless internet is available on site for guests.',
    icon: 'wifi'
  },
  {
    title: 'Restaurant & snacks',
    text: 'Restaurant service, snacks, and homemade bread available on order.',
    icon: 'meal'
  },
  {
    title: 'Secure place',
    text: 'A calm and secure place for campers, caravans, and travelers stopping in the region.',
    icon: 'shield'
  },
  {
    title: 'Walks & hiking',
    text: 'Beautiful walks nearby and randonnée available based on demand.',
    icon: 'trail'
  }
]

function Icon({ icon }) {
  if (icon === 'shower') {
    return <path d="M9 9a5 5 0 1 1 10 0c0 3-2.5 4-5 4H9m10 3-1 2m-3-2-1 2m-3-2-1 2" />
  }

  if (icon === 'bolt') {
    return <path d="m14 3-5 9h4l-3 9 9-11h-4l3-7Z" />
  }

  if (icon === 'wifi') {
    return <path d="M4 10a12 12 0 0 1 16 0M7 13a8 8 0 0 1 10 0m-7 3a4 4 0 0 1 4 0m-2 3h.01" />
  }

  if (icon === 'meal') {
    return <path d="M7 4v7M10 4v7M7 8h3m4-4v17m0-9h3" />
  }

  if (icon === 'shield') {
    return <path d="M12 3c2.8 2 5.3 2.8 8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6c2.7-.2 5.2-1 8-3Z" />
  }

  return <path d="M4 18c4-8 8-10 8-10s4 2 8 10M12 8v10" />
}

export default function Services() {
  const { t } = useTranslation()
  const translatedItems = t('servicesSection.items', { returnObjects: true })
  const serviceItems = Array.isArray(translatedItems)
    ? translatedItems
    : items.map(({ title, text }) => ({ title, text }))

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">{t('servicesSection.eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">{t('servicesSection.title')}</h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('servicesSection.body')}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="rounded-[2rem] border border-white bg-white/90 p-7 shadow-[0_20px_60px_rgba(56,189,248,0.12)] transition hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <Icon icon={item.icon} />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-sky-400">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{serviceItems[index].title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{serviceItems[index].text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
