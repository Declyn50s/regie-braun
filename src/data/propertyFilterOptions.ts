import type { PropertyType } from '../types/property'

export const PROPERTY_TYPE_OPTIONS: Array<{ label: string; value: PropertyType | 'indifferent' }> = [
  { label: 'Tous / Indifférent', value: 'indifferent' },
  { label: 'Appartement', value: 'Appartement' },
  { label: 'Maison', value: 'Maison' },
  { label: 'Studio', value: 'Studio' },
  { label: 'Loft', value: 'Loft' },
  { label: 'Bureau', value: 'Bureau' },
  { label: 'Commerce', value: 'Commerce' },
  { label: 'Parking', value: 'Parking' },
  { label: 'Dépôt', value: 'Dépôt' },
  { label: 'Terrain', value: 'Terrain' },
]

export const ROOMS_MIN_OPTIONS = [
  { label: 'Indifférent', value: '' },
  { label: '1 pièce', value: '1' },
  { label: '2 pièces', value: '2' },
  { label: '2.5 pièces', value: '2.5' },
  { label: '3 pièces', value: '3' },
  { label: '3.5 pièces', value: '3.5' },
  { label: '4 pièces', value: '4' },
  { label: '4.5 pièces', value: '4.5' },
  { label: '5 pièces', value: '5' },
]
