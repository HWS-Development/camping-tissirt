import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_28%)]" />
      <div className="min-h-[50vh]">
        <div className="relative mx-auto grid min-h-[50vh] max-w-7xl gap-0 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="flex flex-col justify-center border-b border-white/10 py-16 lg:border-b-0 lg:border-r lg:pr-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{t('footerSection.eyebrow')}</p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{t('footerSection.title')}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t('footerSection.body')}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/212662141378"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] bg-white p-6 text-slate-900 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:bg-sky-50"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">WhatsApp</p>
                <p className="mt-3 text-2xl font-bold">0662141378</p>
              </a>

              <a
                href="mailto:lahcenahdo1@gmail.com"
                className="rounded-[1.8rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">{t('footerSection.email')}</p>
                <p className="mt-3 text-xl font-semibold">lahcenahdo1@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center py-16 lg:pl-12">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">{t('footerSection.detailsTitle')}</p>
              <p className="mt-4 text-lg font-semibold text-white">{t('footerSection.detailsHeading')}</p>
              <p className="mt-3 leading-7 text-slate-300">{t('footerSection.detailsBody')}</p>
              <p className="mt-4 text-slate-300">QQM9+RR8 Errachidia, Morocco</p>
              <p className="mt-1 text-slate-300">31.7845, -4.2305</p>
            </div>

            <nav className="mt-10 flex flex-wrap gap-5 text-sm">
              <a href="/#home" className="transition hover:text-white">{t('nav.home')}</a>
              <a href="/#services" className="transition hover:text-white">{t('nav.services')}</a>
              <a href="/#stay" className="transition hover:text-white">{t('nav.stay')}</a>
              <a href="/#restaurant" className="transition hover:text-white">{t('nav.restaurant')}</a>
              <a href="/gallery" className="transition hover:text-white">{t('nav.gallery')}</a>
              <a href="/#contact" className="transition hover:text-white">{t('nav.contact')}</a>
            </nav>

            <p className="mt-8 text-sm">© {year} Camping Tissirt. {t('footerSection.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
