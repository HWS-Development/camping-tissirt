import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/10 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-black/70">© {year} Ourika Camp. {t('footer.rights')}</p>
          <nav className="text-sm flex items-center gap-4">
            <a href="/#home" className="hover:text-brand-orange">{t('footer.top')}</a>
            <a href="/rooms" className="hover:text-brand-orange">{t('footer.rooms')}</a>
            <a href="/#contact" className="hover:text-brand-orange">{t('footer.contact')}</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
