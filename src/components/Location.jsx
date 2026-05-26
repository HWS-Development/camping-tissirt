import { useTranslation } from 'react-i18next'

export default function Location() {
  const { t } = useTranslation()
  const easeItems = t('locationSection.easeItems', { returnObjects: true })
  const translatedEaseItems = Array.isArray(easeItems)
    ? easeItems
    : ['Secure place', 'Village 5 minutes walk', 'Beautiful walks nearby']

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">{t('locationSection.eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">{t('locationSection.title')}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t('locationSection.body')}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white bg-white p-6 shadow-lg shadow-sky-100/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{t('locationSection.detailsTitle')}</p>
              <p className="mt-4 text-slate-700">QQM9+RR8 Errachidia, Morocco</p>
              <p className="mt-2 text-slate-700">31.7845, -4.2305</p>
              <p className="mt-2 text-slate-700">N 31°47’4.2” W 4°13’49.872”</p>
            </div>
            <div className="rounded-[1.8rem] border border-white bg-[linear-gradient(180deg,#eff6ff,#ffffff)] p-6 shadow-lg shadow-sky-100/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{t('locationSection.easeTitle')}</p>
              {translatedEaseItems.map((item) => (
                <p key={item} className="mt-4 text-slate-700 first:mt-4">{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(14,165,233,0.1)]">
          <iframe
            title={t('locationSection.mapTitle')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.485019575265!2d-4.232987924571568!3d31.784528974094155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd99c57f0c0d7f29%3A0xb0da97057ea8bb8f!2sCamping%20Tissirt!5e0!3m2!1sen!2sus!4v1779816482298!5m2!1sen!2sus"
            width="100%"
            height="460"
            style={{ border: 0, borderRadius: '1.4rem' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
