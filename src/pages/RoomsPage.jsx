import { useTranslation } from 'react-i18next';

export default function RoomsPage() {
    const { t } = useTranslation();
    
    const rooms = [
        { key: 'double', price: t('roomsPage.pricePerNight', { price: '€95' }), img: 'chambreStandard/e34fc386-d995-4b88-a4aa-d759bdef18ac.jpg', title: t('roomsPage.items.double.title'), desc: t('roomsPage.items.double.desc') },
        { key: 'familySuite', price: t('roomsPage.pricePerNight', { price: '€140' }), img: 'suiteFamill/2b544e45-02eb-4d3b-832a-504f6e5085a2.jpg', title: t('roomsPage.items.familySuite.title'), desc: t('roomsPage.items.familySuite.desc') },
        { key: 'juniorSuite', price: t('roomsPage.pricePerNight', { price: '€120' }), img: 'suiteJunior/43bc7c69-8a3e-4307-bdf3-3600de8d6def.jpg', title: t('roomsPage.items.juniorSuite.title'), desc: t('roomsPage.items.juniorSuite.desc') },
        { key: 'triplePool', price: t('roomsPage.pricePerNight', { price: '€110' }), img: 'tripleRoom/7f3300d4-6cde-4c08-838e-b63b7aa12aa4.jpg', title: t('roomsPage.items.triplePool.title'), desc: t('roomsPage.items.triplePool.desc') }
      ];
      
  
    return (
      <section className="pb-16 pt-48 bg-brand-desert/40 bg-pattern min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Rooms</h1>
          <p className="text-brand-black/70 max-w-2xl mb-12">
            Discover our selection of rooms and suites, each designed to reflect the charm of Marrakech with modern comfort.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {rooms.map((room, index) => (
              <article 
                key={index} 
                className="rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5 flex flex-col"
              >
                <img className="h-64 w-full object-cover" src={'/images/'+room.img} alt={room.title} />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-semibold">{room.title}</h2>
                  <p className="mt-2 text-brand-black/70 flex-1">{room.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold">{room.price}</span>
                    <a href="/#booking" className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-black font-semibold">
                      Book
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  