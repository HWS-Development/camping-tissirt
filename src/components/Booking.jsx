import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Booking() {
  const { t } = useTranslation()
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('2 adults')
  const [promo, setPromo] = useState('')
  const [msg, setMsg] = useState({ text: '', error: false })

  useEffect(() => {
    const today = new Date()
    const pad = (n) => String(n).padStart(2, '0')
    const fmt = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    const d1 = new Date(today); d1.setDate(d1.getDate() + 1)
    const d2 = new Date(today); d2.setDate(d2.getDate() + 3)
    setCheckin(fmt(d1)); setCheckout(fmt(d2))
  }, [])

  const nights = useMemo(() => {
    if (!checkin || !checkout) return 0
    const a = new Date(checkin); const b = new Date(checkout)
    return Math.max(0, Math.round((b - a) / (1000 * 60 * 60 * 24)))
  }, [checkin, checkout])

  useEffect(() => {
    if (!checkin || !checkout) { setMsg({ text: '', error: false }); return }
    if (nights <= 0) setMsg({ text: t('booking.invalid'), error: true })
    else setMsg({ text: t('booking.nights', { count: nights }), error: false })
  }, [nights, checkin, checkout, t])

  const onSearch = (e) => {
    e.preventDefault();
    if (nights <= 0) return;
  
    // Extract first number from the guests label (handles EN/FR text)
    const adults = (() => {
      const m = (guests || '').match(/\d+/);
      return m ? parseInt(m[0], 10) : 2;
    })();
  
    // Build the HotelRunner payload
    const payload = {
      checkin_date:  checkin,          // "YYYY-MM-DD"
      checkout_date: checkout,         // "YYYY-MM-DD"
      day_count:     nights,           // int
      coupon_code:   promo?.trim() || "", // empty string if none
      total_adult:   adults,
      total_child:   0,
      rooms: [
        {
          adult_count: adults,
          guest_count: adults,
          child_count: 0,
          child_ages: []
        }
      ],
      guest_rooms: {
        "0": {
          adult_count: adults,
          guest_count: adults,
          child_count: 0
        }
      }
    };
  
    const base = "https://camp-ourika.hotelrunner.com/bv3/search";
    const url = `${base}?search=${encodeURIComponent(JSON.stringify(payload))}`;
  
    window.open(url, "_blank");
    // or: window.location.href = url;
  };
  

  const todayStr = new Date().toISOString().slice(0, 10)
  const guestOptions = t('booking.guestsOptions', { returnObjects: true })

  return (
    <section id="booking" className="relative -mt-12 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-soft p-6 sm:p-8 border-t-[10px] border-[#ca9d75]">
          <form onSubmit={onSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-brand-black/80">{t('booking.labels.checkin')}</label>
              <input type="date" min={todayStr} value={checkin} onChange={e => setCheckin(e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-black/80">{t('booking.labels.checkout')}</label>
              <input type="date" min={todayStr} value={checkout} onChange={e => setCheckout(e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-black/80">{t('booking.labels.guests')}</label>
              <select value={guests} onChange={e => setGuests(e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange">
                {guestOptions.map((label, i) => <option key={i}>{label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-black/80">{t('booking.labels.promo')}</label>
              <input type="text" placeholder="Optional" value={promo} onChange={e => setPromo(e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            </div>
            <div className="md:col-span-1">
              <button className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-black shadow-soft">
                {t('booking.labels.search')}
              </button>
            </div>
          </form>
          {!!msg.text && (
            <p className={`mt-3 text-sm ${msg.error ? 'text-red-600' : 'text-brand-black/70'}`}>{msg.text}</p>
          )}
        </div>
      </div>
    </section>
  )
}
