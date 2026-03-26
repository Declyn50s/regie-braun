type LocationHeroProps = {
  resultsCount: number
}

export function LocationHero({ resultsCount }: LocationHeroProps) {
  return (
    <section className="border-b border-[#e3d8cf] bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
              Recherche immobilière
            </div>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[#341d15] md:text-4xl">
              Nos biens à louer
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#66554a]">
              Consultez les objets disponibles, filtrez selon vos critères et accédez rapidement aux informations essentielles pour trouver le bien qui vous correspond.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#e2d7cf] bg-white px-5 py-4 shadow-sm">
            <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Résultats</div>
            <div className="mt-1 text-2xl font-semibold text-[#4a2a20]">
              {resultsCount} objet{resultsCount > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
