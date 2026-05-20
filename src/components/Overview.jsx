const features = [
  'Pretty little campsite closed in a palm grove',
  'Excellent welcome from Hassan and Ali',
  'Village only 5 minutes away on foot',
  'Beautiful walks around the campsite'
]

export default function Overview() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">About the campsite</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">A small-scale campsite that feels relaxed from the moment you arrive</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Camping Tissirt is designed for travelers who want peaceful nights, clean facilities, and practical comfort. The campsite welcomes tents and caravans, with hot showers, electricity, free Wi-Fi, homemade bread on order, a secure place to stay, and easy access to the village.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-[1.8rem] border border-white bg-white/90 p-5 text-slate-700 shadow-lg shadow-sky-100/60">
                <span className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">+</span>
                  <span>{feature}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-xl shadow-sky-100/70 backdrop-blur-sm">
            <img
              src={`${process.env.PUBLIC_URL}/images/tout/${encodeURIComponent('Screenshot 2025-09-24 164510.png')}`}
              alt="Palm grove at Camping Tissirt"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Useful details</p>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-sm text-sky-200">Coordinates</p>
                <p className="mt-1 text-lg font-semibold">31.7845, -4.2305</p>
                <p className="mt-1 text-sm text-slate-300">N 31°47’4.2” W 4°13’49.872”</p>
              </div>
              <div>
                <p className="text-sm text-sky-200">Plus code</p>
                <p className="mt-1 text-lg font-semibold">QQM9+RR8 Errachidia, Morocco</p>
              </div>
              <div>
                <p className="text-sm text-sky-200">Pitch type</p>
                <p className="mt-1 text-lg font-semibold">Tents, caravans, rooms and restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
