import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* === Top row === */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-black/70">
            © {year} Ourika Camp. {t('footer.rights')}
          </p>

          <nav className="text-sm flex items-center gap-4">
            <a href="/#home" className="hover:text-brand-orange">
              {t('footer.top')}
            </a>
            <a href="/rooms" className="hover:text-brand-orange">
              {t('footer.rooms')}
            </a>
            <a href="/#contact" className="hover:text-brand-orange">
              {t('footer.contact')}
            </a>

            {/* === Conditions Générales link with yellow underline === */}
            <a
              href="/conditions-generales"
              className="text-black relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] hover:text-brand-orange  after:rounded-full"
            >
             {t('footer.conditions') ?? 'Conditions Générales'}
            </a>
          </nav>
        </div>

        {/* === Payment and Security Logos === */}
        <div className="mt-4   flex flex-wrap justify-center items-center gap-4 sm:gap- max-w-3xl mx-auto">
  <img
    src="/images/securelogo.png"
    alt="3D Secure"
    className="h-8 sm:h-10 object-contain"
  />
  <img
    src="/images/paylogos.png"
    alt="Payment methods" 
    className="h-8 sm:h-10 object-contain"
  />
</div>



      </div>
    </footer>
  )
}
