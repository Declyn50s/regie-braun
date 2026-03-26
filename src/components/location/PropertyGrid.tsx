import type { Property } from '../../types/property'
import { PropertyCard } from './PropertyCard'

type PropertyGridProps = {
  properties: Property[]
  totalProperties: number
  onReset: () => void
}

export function PropertyGrid({ properties, totalProperties, onReset }: PropertyGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-[#6d5b50]">
          <span className="font-semibold text-[#3f2b22]">{properties.length}</span> bien
          {properties.length > 1 ? 's' : ''} affiché{properties.length > 1 ? 's' : ''} sur{' '}
          <span className="font-semibold text-[#3f2b22]">{totalProperties}</span>
        </div>
        <div className="rounded-full border border-[#d7c8bc] bg-white px-4 py-2 text-sm font-semibold text-[#4a2a20]">
          Filtrage cumulatif actif
        </div>
      </div>

      {properties.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-[#e2d7cf] bg-white px-8 py-12 text-center shadow-sm">
          <div className="mx-auto max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">
              Aucun bien trouvé
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#311d16]">
              Aucun objet ne correspond à vos critères actuels.
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#66554a]">
              Essayez d’élargir la région, d’augmenter légèrement le budget maximum ou de réduire le nombre minimal de pièces.
            </p>
            <button
              type="button"
              onClick={onReset}
              className="mt-6 rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
