export type PropertyType =
  | 'Appartement'
  | 'Maison'
  | 'Studio'
  | 'Loft'
  | 'Bureau'
  | 'Commerce'
  | 'Parking'
  | 'Dépôt'
  | 'Terrain'
  | string

export type Property = {
  id: string
  title: string
  type: PropertyType
  region: string
  city: string
  price: number
  rooms: number
  area?: number
  image?: string
  isReserved?: boolean
  address: string
  availability: string
  badge: string
}

export type PropertyFilters = {
  type: string
  region: string
  budgetMax: number | null
  roomsMin: number | null
}

export type PropertyStat = {
  label: string
  value: string
}

export type SimilarProperty = {
  title: string
  location: string
  price: string
  image: string
}

export type PropertyDetail = {
  slug: string
  title: string
  address: string
  city: string
  availability: string
  reference: string
  heroLabel: string
  price: string
  monthlyRent: string
  charges: string
  description: string[]
  visitContact: string
  visitSchedule: string
  mapAddress: string
  propertyImages: string[]
  summaryStats: PropertyStat[]
  technicalData: PropertyStat[]
  locationData: PropertyStat[]
  comfortData: PropertyStat[]
  similarProperties: SimilarProperty[]
}
