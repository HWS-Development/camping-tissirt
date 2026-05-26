import { useTranslation } from 'react-i18next'

const overviewImage = `${process.env.PUBLIC_URL}/images/hall/${encodeURIComponent('_DSC3564-HDR.jpg')}`

export default function Overview() {
  const { t } = useTranslation()
  const features = t('overview.features', { returnObjects: true })
  const overviewFeatures = Array.isArray(features)
    ? features
    : [
        'Pretty little campsite closed in a palm grove',
        'Excellent welcome from Hassan and Ali',
        'Village only 5 minutes away on foot',
        'Beautiful walks around the campsite'
      ]

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">{t('overview.eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">{t('overview.title')}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t('overview.body')}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {overviewFeatures.map((feature) => (
              <div key={feature} className="rounded-[1.8rem] border border-white bg-white/90 p-5 text-slate-700 shadow-lg shadow-sky-100/60">
                <span className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">+</span>
                  <span>{feature}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-xl shadow-sky-100/70 backdrop-blur-sm">
            <img
              src={overviewImage}
              alt={t('overview.imageAlt')}
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{t('overview.detailsTitle')}</p>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-sm text-sky-200">{t('overview.coordinates')}</p>
                <p className="mt-1 text-lg font-semibold">31.7845, -4.2305</p>
                <p className="mt-1 text-sm text-slate-300">N 31°47’4.2” W 4°13’49.872”</p>
              </div>
              <div>
                <p className="text-sm text-sky-200">{t('overview.plusCode')}</p>
                <p className="mt-1 text-lg font-semibold">QQM9+RR8 Errachidia, Morocco</p>
              </div>
              <div>
                <p className="text-sm text-sky-200">{t('overview.pitchType')}</p>
                <p className="mt-1 text-lg font-semibold">{t('overview.pitchValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
