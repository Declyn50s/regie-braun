import { REGION_OPTIONS } from '../data/regions'
import type { Property, PropertyFilters } from '../types/property'

export function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’'`]/g, '')
    .replace(/saint/g, 'st')
    .replace(/\benv\b/g, 'environs')
    .replace(/\bet\b/g, '')
    .replace(/[/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function parsePrice(value: number | string) {
  if (typeof value === 'number') {
    return value
  }

  const normalized = value.replace(/[^\d]/g, '')
  return normalized ? Number(normalized) : 0
}

export function parseRooms(value: number | string) {
  if (typeof value === 'number') {
    return value
  }

  const match = value.replace(',', '.').match(/[\d.]+/)
  return match ? Number(match[0]) : 0
}

export function formatPrice(price: number) {
  return `CHF ${new Intl.NumberFormat('fr-CH').format(price)}.–`
}

export function formatRooms(rooms: number) {
  return `${rooms.toString().replace('.', '.')} pièces`
}

export function formatArea(area?: number) {
  if (!area) {
    return '—'
  }

  return `${new Intl.NumberFormat('fr-CH').format(area)} m²`
}

const getRegionLabel = (value: string) =>
  REGION_OPTIONS.find((option) => option.value === value)?.label ?? value

export function matchesType(propertyType: string, selectedType: string) {
  if (selectedType === 'indifferent') {
    return true
  }

  return normalizeText(propertyType) === normalizeText(selectedType)
}

export function matchesRegion(propertyRegion: string, selectedRegion: string) {
  if (selectedRegion === 'indifferent') {
    return true
  }

  const selectedLabel = getRegionLabel(selectedRegion)
  const normalizedPropertyRegion = normalizeText(propertyRegion)
  const normalizedSelectedRegion = normalizeText(selectedLabel)

  if (normalizedSelectedRegion === normalizeText('Lausanne')) {
    return normalizedPropertyRegion === normalizeText('Lausanne')
  }

  if (normalizedSelectedRegion === normalizeText('Lausanne et env.')) {
    return normalizedPropertyRegion === normalizeText('Lausanne et environs')
  }

  return normalizedPropertyRegion === normalizedSelectedRegion
}

export function filterProperties(properties: Property[], filters: PropertyFilters) {
  return properties.filter((property) => {
    const matchesSelectedType = matchesType(property.type, filters.type)
    const matchesSelectedRegion = matchesRegion(property.region, filters.region)
    const matchesSelectedBudget =
      filters.budgetMax === null ? true : parsePrice(property.price) <= filters.budgetMax
    const matchesSelectedRooms =
      filters.roomsMin === null ? true : parseRooms(property.rooms) >= filters.roomsMin

    return (
      matchesSelectedType &&
      matchesSelectedRegion &&
      matchesSelectedBudget &&
      matchesSelectedRooms
    )
  })
}

export function createFilterSearchParams(filters: PropertyFilters) {
  const params = new URLSearchParams()

  if (filters.type !== 'indifferent') {
    params.set('type', filters.type)
  }

  if (filters.region !== 'indifferent') {
    params.set('region', filters.region)
  }

  if (filters.budgetMax !== null) {
    params.set('budgetMax', filters.budgetMax.toString())
  }

  if (filters.roomsMin !== null) {
    params.set('roomsMin', filters.roomsMin.toString())
  }

  return params
}

export function getFiltersFromSearchParams(
  search: string,
  defaultFilters: PropertyFilters,
): PropertyFilters {
  const params = new URLSearchParams(search)
  const budgetMax = params.get('budgetMax')
  const roomsMin = params.get('roomsMin')

  return {
    type: params.get('type') || defaultFilters.type,
    region: params.get('region') || defaultFilters.region,
    budgetMax: budgetMax ? Number(budgetMax) : defaultFilters.budgetMax,
    roomsMin: roomsMin ? Number(roomsMin) : defaultFilters.roomsMin,
  }
}
