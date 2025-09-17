import { useTranslation } from 'react-i18next'

export default function Reviews() {
  const { t } = useTranslation()
  const reviews = t('reviews.items', { returnObjects: true })

  return (
    <section id="reviews" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('reviews.heading')}</h2>
          <p className="mt-2 text-brand-black/70">{t('reviews.sub')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {reviews.map((r, i) => (
    <article key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-2">
        {/* Stars now flow like text (no fixed 40px box) */}
        <span className="text-amber-500 text-base leading-none" aria-hidden>★★★★★</span>
        {r.name && <h3 className="font-semibold">{r.name}</h3>}
      </div>

      <p className="mt-3 text-sm text-brand-black/80">{r.text}</p>
    </article>
  ))}
</div>

      </div>
    </section>
  )
}
