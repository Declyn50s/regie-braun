import { useEffect, useState } from 'react'
import { LocationCTA } from '../../components/location/LocationCTA'
import { PropertyFilters } from '../../components/location/PropertyFilters'
import { PropertyGrid } from '../../components/location/PropertyGrid'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { defaultPropertyFilters, properties } from '../../data/locationData'
import type { PropertyFilters as PropertyFiltersState } from '../../types/property'
import {
  createFilterSearchParams,
  filterProperties,
  getFiltersFromSearchParams,
} from '../../utils/propertyFilters'

export function LocationPage() {
  const [filters, setFilters] = useState<PropertyFiltersState>(() =>
    getFiltersFromSearchParams(window.location.search, defaultPropertyFilters),
  )
  const filteredProperties = filterProperties(properties, filters)

  useEffect(() => {
    const params = createFilterSearchParams(filters)
    const queryString = params.toString()
    const nextUrl = queryString ? `/location?${queryString}` : '/location'

    window.history.replaceState({}, '', nextUrl)
  }, [filters])

  return (
    <div className="bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/location" />
      <SiteBreadcrumb
        items={[{ label: 'Accueil', href: '/' }, { label: 'Louer' }, { label: 'Biens à louer' }]}
      />

      <main className="pb-14">
        <PropertyFilters
          filters={filters}
          onChange={setFilters}
          onReset={() => setFilters(defaultPropertyFilters)}
        />
        <PropertyGrid
          properties={filteredProperties}
          totalProperties={properties.length}
          onReset={() => setFilters(defaultPropertyFilters)}
        />
        <LocationCTA />
      </main>

      <SiteFooter />
    </div>
  )
}
