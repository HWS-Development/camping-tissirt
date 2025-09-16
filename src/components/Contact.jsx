import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('contact.heading')}</h2>
            <p className="mt-2 text-brand-black/70">{t('contact.sub')}</p>

            <div className="mt-6 rounded-2xl bg-white p-6 shadow-soft border border-black/10">
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-brand-black/80">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-brand-black/80">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                {/* ✅ Optional phone number */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brand-black/80">
                    {t('contact.form.phoneOpt', 'Numéro de téléphone (facultatif)')}
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+212 6 12 34 56 78"
                    pattern="^\+?[0-9\s().-]{6,}$"
                    title={t('contact.form.phoneTitle', 'Entrez un numéro de téléphone valide.')}
                    className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                  <p className="mt-1 text-xs text-brand-black/60">
                    {t('contact.form.phoneHint', 'Optionnel — si vous préférez être contacté·e par téléphone.')}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brand-black/80">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    rows="5"
                    required
                    className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-black shadow-soft">
                    {t('contact.form.send')}
                  </button>
                </div>
              </form>
            </div>

            {sent && (
              <p className="mt-3 text-sm text-brand-black/70">
                {t('contact.form.thanks')}
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">{t('contact.direct.heading')}</h3>
            <ul className="mt-4 space-y-3 text-brand-black/80">
              <li>{t('contact.direct.phone')}</li>
              <li>{t('contact.direct.email')}</li>
              <li>{t('contact.direct.address')}</li>
            </ul>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <h3 className="mt-6 text-xl font-semibold">{t('contact.follow')}</h3>

            <div className="mt-3 flex items-center gap-3">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:shadow-md hover:bg-black/5 transition"
                href="https://www.instagram.com/ourikacampsuiteshotel/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <defs>
                    <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="40%" stopColor="#dd2a7b" />
                      <stop offset="70%" stopColor="#8134af" />
                      <stop offset="100%" stopColor="#515bd4" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGradient)" />
                  <circle cx="12" cy="12" r="4.25" fill="none" stroke="#fff" strokeWidth="2" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
