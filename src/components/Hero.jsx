import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const heroImage = `${process.env.PUBLIC_URL}/images/camp/${encodeURIComponent('WhatsApp Image 2026-05-26 at 11.17.50 (1).jpeg')}`
  const chips = t('hero.chips', { returnObjects: true })
  const heroChips = Array.isArray(chips) ? chips : ['Tents', 'Caravans', 'Restaurant', 'Village 5 min walk']

  return (
    <section id="home" className="relative overflow-hidden pt-10 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid min-h-[88vh] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl py-8 lg:py-16">
            <span className="inline-flex rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm shadow-sky-100/80 backdrop-blur">
              {t('hero.eyebrow')}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {t('hero.body')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/212662141378"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-200/80 transition hover:-translate-y-0.5 hover:bg-sky-500"
              >
                {t('hero.book')}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-7 py-4 font-semibold text-slate-900 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
              >
                {t('hero.contact')}
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm sm:grid-cols-3">
              <div className="rounded-[1.8rem] border border-white bg-white/90 p-5 shadow-lg shadow-sky-100/70">
                <p className="text-2xl font-bold text-slate-950">{t('hero.stats.roomsTitle')}</p>
                <p className="mt-1 text-slate-600">{t('hero.stats.roomsText')}</p>
              </div>
              <div className="rounded-[1.8rem] border border-white bg-white/90 p-5 shadow-lg shadow-sky-100/70">
                <p className="text-2xl font-bold text-slate-950">{t('hero.stats.wifiTitle')}</p>
                <p className="mt-1 text-slate-600">{t('hero.stats.wifiText')}</p>
              </div>
              <div className="rounded-[1.8rem] border border-white bg-white/90 p-5 shadow-lg shadow-sky-100/70">
                <p className="text-2xl font-bold text-slate-950">{t('hero.stats.showersTitle')}</p>
                <p className="mt-1 text-slate-600">{t('hero.stats.showersText')}</p>
              </div>
            </div>
          </div>

          <div className="relative lg:py-10">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-sky-200/40 blur-2xl lg:block" />
            <div className="absolute -right-6 bottom-8 hidden h-36 w-36 rounded-full bg-sky-300/30 blur-3xl lg:block" />

            <div className="relative rounded-[2.2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_80px_rgba(14,165,233,0.12)] backdrop-blur-sm">
              <img
                src={heroImage}
                alt={t('hero.imageAlt')}
                className="h-[26rem] w-full rounded-[1.7rem] object-cover sm:h-[34rem]"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.7rem] bg-slate-950/72 p-5 text-white backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-200">{t('brand.name')}</p>
                <p className="mt-2 text-xl font-semibold">{t('hero.overlayTitle')}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
                  {heroChips.map((chip) => (
                    <span key={chip} className="rounded-full bg-white/10 px-3 py-2">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
