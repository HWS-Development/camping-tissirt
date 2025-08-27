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
    e.preventDefault()
    if (nights <= 0) return
    const url = `https://camp-ourika.hotelrunner.com/bv3/search?search=%7B%22checkin_date%22:%22${checkin}%22,%22checkout_date%22:%22${checkout}%22,%22day_count%22:${nights},%22coupon_code%22:${promo},%22total_adult%22:${guests.split(' ')[0]},%22total_child%22:0,%22rooms%22:%5B%7B%22adult_count%22:${guests.split(' ')[0]},%22guest_count%22:${guests.split(' ')[0]},%22child_count%22:0,%22child_ages%22:%5B%5D%7D%5D,%22guest_rooms%22:%7B%220%22:%7B%22adult_count%22:${guests.split(' ')[0]},%22guest_count%22:${guests.split(' ')[0]}`
    window.open(url, '_blank')
    // window.location.href = url
  }

  const todayStr = new Date().toISOString().slice(0, 10)
  const guestOptions = t('booking.guestsOptions', { returnObjects: true })

  return (
    <section id="booking" className="relative -mt-12 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tile-top rounded-2xl bg-white shadow-soft p-6 sm:p-8">
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
