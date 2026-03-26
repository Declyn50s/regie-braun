import { PROPERTY_TYPE_OPTIONS, ROOMS_MIN_OPTIONS } from '../../data/propertyFilterOptions'
import { REGION_OPTIONS } from '../../data/regions'
import type { PropertyFilters as PropertyFiltersState } from '../../types/property'

type PropertyFiltersProps = {
  filters: PropertyFiltersState
  onChange: (filters: PropertyFiltersState) => void
  onReset: () => void
}

export function PropertyFilters({ filters, onChange, onReset }: PropertyFiltersProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
      <div className="rounded-[2rem] border border-[#dfd1c6] bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="rounded-2xl bg-[#f8f3ef] p-3.5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
              Type de bien
            </label>
            <select
              value={filters.type}
              onChange={(event) => onChange({ ...filters, type: event.target.value })}
              className="w-full rounded-xl border border-[#e0d4cb] bg-white px-4 py-3 text-sm text-[#4e3a30] outline-none"
            >
              {PROPERTY_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl bg-[#f8f3ef] p-3.5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
              Région
            </label>
            <select
              value={filters.region}
              onChange={(event) => onChange({ ...filters, region: event.target.value })}
              className="w-full rounded-xl border border-[#e0d4cb] bg-white px-4 py-3 text-sm text-[#4e3a30] outline-none"
            >
              {REGION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl bg-[#f8f3ef] p-3.5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
              Budget max.
            </label>
            <input
              type="number"
              min="0"
              step="100"
              value={filters.budgetMax ?? ''}
              onChange={(event) =>
                onChange({
                  ...filters,
                  budgetMax: event.target.value ? Number(event.target.value) : null,
                })
              }
              placeholder="ex. 3000"
              className="w-full rounded-xl border border-[#e0d4cb] bg-white px-4 py-3 text-sm text-[#4e3a30] outline-none"
            />
          </div>

          <div className="rounded-2xl bg-[#f8f3ef] p-3.5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
              Pièces min.
            </label>
            <select
              value={filters.roomsMin ?? ''}
              onChange={(event) =>
                onChange({
                  ...filters,
                  roomsMin: event.target.value ? Number(event.target.value) : null,
                })
              }
              className="w-full rounded-xl border border-[#e0d4cb] bg-white px-4 py-3 text-sm text-[#4e3a30] outline-none"
            >
              {ROOMS_MIN_OPTIONS.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-[#d7c8bc] bg-[#fcfaf8] px-4 py-2 text-sm font-medium text-[#5a473d]">
            Filtrage dynamique
          </span>
          <span className="rounded-full border border-[#d7c8bc] bg-[#fcfaf8] px-4 py-2 text-sm font-medium text-[#5a473d]">
            Résultats instantanés
          </span>
          <button
            type="button"
            onClick={onReset}
            className="ml-auto rounded-full border border-[#d7c8bc] bg-white px-5 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </section>
  )
}
