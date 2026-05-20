import { Link } from 'react-router-dom'

const stayOptions = [
  {
    title: 'Tent pitches',
    text: 'A simple, pleasant base for travelers crossing the region with their own camping setup.',
    tag: 'Independent camping'
  },
  {
    title: 'Caravan welcome',
    text: 'Suitable for caravans looking for a calm stop with services and easy village access.',
    tag: 'Road trip stop'
  },
  {
    title: 'Four on-site rooms',
    text: 'For guests who prefer more fixed comfort while staying in the same natural setting.',
    tag: 'Extra comfort'
  }
]

export default function StayOptions() {
  return (
    <section id="stay" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,249,255,0.95))] p-8 shadow-[0_30px_80px_rgba(14,165,233,0.08)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Stay options</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">For tents, caravans, and room stays</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Camping Tissirt works well for independent campers, road travelers, and guests who want a room on site. The atmosphere stays small-scale and welcoming rather than crowded.
            </p>
            <Link
              to="/gallery"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              See the gallery
            </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stayOptions.map((option) => (
                <article key={option.title} className="rounded-[2rem] border border-white bg-white p-6 shadow-lg shadow-sky-100/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">{option.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{option.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
