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
                  <label className="block text-sm font-medium text-brand-black/80">{t('contact.form.name')}</label>
                  <input type="text" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"/>
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-brand-black/80">{t('contact.form.email')}</label>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brand-black/80">{t('contact.form.message')}</label>
                  <textarea rows="5" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-black shadow-soft">
                    {t('contact.form.send')}
                  </button>
                </div>
              </form>
            </div>
            {sent && <p className="mt-3 text-sm text-brand-black/70">{t('contact.form.thanks')}</p>}
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
              <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5" href="#" aria-label="Instagram">📷</a>
              <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5" href="#" aria-label="Facebook">f</a>
              <a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5" href="#" aria-label="X">𝕏</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
