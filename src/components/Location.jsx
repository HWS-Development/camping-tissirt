export default function Location() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Access</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Easy to find, easy to settle into</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The campsite is located near Errachidia in a palm grove setting, with the village reachable in around five minutes on foot. It works well as a stop for travelers exploring the region or looking for a calm base for beautiful walks.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white bg-white p-6 shadow-lg shadow-sky-100/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Location details</p>
              <p className="mt-4 text-slate-700">QQM9+RR8 Errachidia, Morocco</p>
              <p className="mt-2 text-slate-700">31.7845, -4.2305</p>
              <p className="mt-2 text-slate-700">N 31°47’4.2” W 4°13’49.872”</p>
            </div>
            <div className="rounded-[1.8rem] border border-white bg-[linear-gradient(180deg,#eff6ff,#ffffff)] p-6 shadow-lg shadow-sky-100/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Why it feels easy</p>
              <p className="mt-4 text-slate-700">Secure place</p>
              <p className="mt-2 text-slate-700">Village 5 minutes walk</p>
              <p className="mt-2 text-slate-700">Beautiful walks nearby</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(14,165,233,0.1)]">
          <iframe
            title="Camping Tissirt location"
            src="https://www.google.com/maps?q=31.7845,-4.2305&z=14&output=embed"
            width="100%"
            height="460"
            style={{ border: 0, borderRadius: '1.4rem' }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
