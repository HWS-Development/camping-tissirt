import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="home" className="relative min-h-[88vh] grid place-items-center overflow-hidden">
        <img src="/images/hero/717772676.jpg" alt="Marrakech riad courtyard" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
          {t('home.welcome', { city: t('home.city') })}
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">{t('home.headline')}</h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">{t('home.subtitle')}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#booking" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-black shadow-soft">{t('home.ctaBook')}</a>
          <a href="/rooms" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:border-white/40">{t('home.ctaRooms')}</a>
        </div>
      </div>
    </section>
  )
}
