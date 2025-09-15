import { useTranslation } from 'react-i18next'

export default function HavreDePaix() {
  const { t } = useTranslation()
  const cards = t('haven.cards', { returnObjects: true }) || []

  return (
    <section id="haven" className="py-16 bg-brand-desert/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('haven.heading')}</h2>
          <p className="mt-2 text-brand-black/70">{t('haven.intro')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-xl">
                  {c.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-black/70 whitespace-pre-line">
                    {c.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
