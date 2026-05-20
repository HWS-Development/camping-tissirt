import { useEffect, useState } from 'react'

const reviews = [
  {
    author: 'Todoespossible',
    date: '16/05/2026',
    rating: '5/5',
    text: 'Was ein liebevoller, sauberer Campingplatz. Wir hatten auch ein Magen-Darm Problem und uns wurde so unglaublich lieb geholfen. Wir sagen DANKE und empfehlen diesen schoenen Platz in der Oase unbedingt.'
  },
  {
    author: 'clarissektt',
    date: '15/05/2026',
    rating: '5/5',
    text: 'Camping tres bien entretenu au milieu de la palmeraie. Sanitaires propres. Nous n’avons pas mange sur place mais les plats servis aux autres invites semblaient delicieux. Ali est tres gentil, il nous a donne le contact pour passer la nuit dans le desert avec un chamelier, loin des grands campements de luxe bondes. Nous recommandons ++++ clarisse et Valentin'
  },
  {
    author: 'cani80',
    date: '13/05/2026',
    rating: '5/5',
    text: 'Wunderbarer kleiner Campingplatz, sehr friedlich und ruhig, absolut sauber, der Chef ist diskret, sehr freundlich. Das Essen am Abend (Berberpizza) war fantastisch. Sanitaeranlagen einfach, aber zu jedem Zeitpunkt sehr sauber. Absolut empfehlenswert!'
  },
  {
    author: 'boulekes',
    date: '08/05/2026',
    rating: '5/5',
    text: 'Le camping est tres bien tenu. Les sanitaires sont tres propres et Ali fait en sorte que vous ayez de l’eau chaude pour la douche. Ali est aux petits soins et vous emmene visiter le village et sa palmeraie. Les repas sont copieux et le pain cuit sur place est un delice. Une etape a ne pas rater.'
  },
  {
    author: 'Clarinette24',
    date: '28/04/2026',
    rating: '5/5',
    text: 'Un lieu unique, bien plus qu’un simple camping. L’accueil est tres chaleureux : Ali Hassan et toute sa famille sont attentionnes et toujours disponibles. Ils nous font decouvrir leur culture avec generosite. Situe dans la palmeraie, l’endroit est paisible, ideal pour se detendre ou partir en balade. Une experience authentique, riche en rencontres et vraiment inoubliable.'
  },
  {
    author: 'alexisanta',
    date: '25/04/2026',
    rating: '5/5',
    text: 'Tres bien a tous les niveaux. Ali est super. Nous recommandons la visite du Ksar.'
  },
  {
    author: 'katoche3356',
    date: '08/04/2026',
    rating: '5/5',
    text: 'Excellent accueil d hassan de ses filles et de sa femme qui sont adorables y un. Ali, le gardien est un guide exceptionnel pour la palmeraie et le village.ksar, c’est un homme adorable, gros coup de coeur. L’endroit est paisible, calme, tres propre, accepte les chiens, le couscous et le tajine sont faits avec les legumes du jardin. Eau chaude sanitaire, propre wi-fi, terrasse, facilite de se garer.'
  },
  {
    author: 'sabkau',
    date: '07/04/2026',
    rating: '5/5',
    text: 'Es war ein wunderschoener Aufenthalt bei Ali! Wir wurden mit China-Rosen beschenkt. Die Berberpizza war super, der Spaziergang im Palmenhain wunderbar! Duschen sauber, gross und mit Warmwasser (fuer ca. 5 Personen) dann muss man warten bis es wieder aufgeheizt hat! Ist aber voll ok!'
  },
  {
    author: 'Giorgio13456',
    date: '04/04/2026',
    rating: '4/5',
    text: 'Un ottima sosta in un campeggio fra le palme con accoglienza calorosa terreno in pari bagni datati ma spaziosi all\'occorrenza ci tornerei'
  },
  {
    author: 'fliegernorbert',
    date: '01/03/2026',
    rating: '5/5',
    text: 'Ein sehr schoener Platz mit freundlichem Inhaber. Man kann hier sehr schoen wandern. Alles sehr gepflegt.'
  }
]

function getVisibleCount() {
  if (typeof window === 'undefined') {
    return 3
  }

  return window.innerWidth >= 1024 ? 3 : 1
}

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onResize = () => {
      setVisibleCount(getVisibleCount())
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(reviews.length - visibleCount, 0)))
  }, [visibleCount])

  const maxIndex = Math.max(reviews.length - visibleCount, 0)
  const pageCount = Math.ceil(reviews.length / visibleCount)
  const activePage = Math.floor(index / visibleCount)

  const prev = () => {
    setIndex((current) => {
      if (current === 0) {
        return maxIndex
      }

      return Math.max(current - visibleCount, 0)
    })
  }

  const next = () => {
    setIndex((current) => {
      if (current >= maxIndex) {
        return 0
      }

      return Math.min(current + visibleCount, maxIndex)
    })
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((current) => {
        if (current >= maxIndex) {
          return 0
        }

        return Math.min(current + visibleCount, maxIndex)
      })
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [maxIndex, visibleCount])

  const visibleReviews = reviews.slice(index, index + visibleCount)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Reviews</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">What visitors say about Camping Tissirt</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Real visitor impressions about the welcome, the palm grove atmosphere, the clean facilities, and the calm of the campsite.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow-sm transition hover:bg-sky-50"
              aria-label="Previous reviews"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow-sm transition hover:bg-sky-50"
              aria-label="Next reviews"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className={`mt-10 grid gap-6 ${visibleCount === 3 ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
          {visibleReviews.map((review) => (
            <article key={`${review.author}-${review.date}`} className="rounded-[2rem] border border-white bg-white/90 p-7 shadow-[0_20px_60px_rgba(56,189,248,0.12)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{review.author}</h3>
                  <p className="mt-1 text-sm text-slate-500">{review.date}</p>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-700">{review.rating}</span>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">{review.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: pageCount }).map((_, pageIndex) => {
            const targetIndex = Math.min(pageIndex * visibleCount, maxIndex)
            const isActive = pageIndex === activePage

            return (
              <button
                key={pageIndex}
                type="button"
                onClick={() => setIndex(targetIndex)}
                className={`h-3 rounded-full transition ${isActive ? 'w-10 bg-sky-600' : 'w-3 bg-sky-200 hover:bg-sky-300'}`}
                aria-label={`Go to review page ${pageIndex + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
