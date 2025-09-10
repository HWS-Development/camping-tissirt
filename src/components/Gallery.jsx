import { useTranslation } from 'react-i18next'

const images = [
  '0aae7b19-7564-4a0b-8951-69f61f112923.jpg','1d02a86b-5294-4108-8957-7799f2dfa0cf.jpg','1d5c777b-64a8-4b8e-a0df-7db0639bdc11.jpg','4b87dd45-4392-46cc-9dd3-70e76341e99a.jpg',
  '53c21403-64f3-4343-b059-8f14f04f2756.jpg','8e76de73-a983-4e1c-87d9-e3e3e1d8a70e.jpg','2025-06-11 (5).jpg','94c414dd-2859-4cd6-b3d6-cff950e8d91a.jpg',
]

export default function Gallery() {
  const { t } = useTranslation()
  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('gallery.heading')}</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <img key={i} className="h-44 w-full object-cover rounded-xl" src={'/images/tout/'+src} alt={`Gallery ${i+1}`} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}
