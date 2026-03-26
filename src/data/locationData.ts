import type { Property, PropertyFilters } from '../types/property'
import { parsePrice, parseRooms } from '../utils/propertyFilters'

export const defaultPropertyFilters: PropertyFilters = {
  type: 'indifferent',
  region: 'indifferent',
  budgetMax: 3000,
  roomsMin: 3.5,
}

const rawProperties = [
  {
    id: 'belmont-burenoz-35a',
    title: 'Appartement 4.5 pièces',
    type: 'Appartement',
    region: 'Lausanne et environs',
    city: 'Belmont-sur-Lausanne',
    address: 'Route du Burenoz 35A',
    area: 111,
    rooms: '4.5 pièces',
    price: 'CHF 2’450.–',
    availability: 'Dès le 01.04.2026',
    badge: 'À louer',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pully-iris-18',
    title: 'Appartement 3.5 pièces',
    type: 'Appartement',
    region: 'Pully',
    city: 'Pully',
    address: 'Chemin des Iris 18',
    area: 84,
    rooms: '3.5 pièces',
    price: 'CHF 2’190.–',
    availability: 'Disponible immédiatement',
    badge: 'Nouveau',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lausanne-chailly-22',
    title: 'Appartement 5 pièces',
    type: 'Appartement',
    region: 'Chailly',
    city: 'Lausanne',
    address: 'Avenue de Chailly 22',
    area: 128,
    rooms: '5 pièces',
    price: 'CHF 2’980.–',
    availability: 'Dès le 15.04.2026',
    badge: 'À louer',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lausanne-bourg-9',
    title: 'Studio 2.5 pièces',
    type: 'Studio',
    region: 'Centre ville',
    city: 'Lausanne',
    address: 'Rue de Bourg 9',
    area: 58,
    rooms: '2.5 pièces',
    price: 'CHF 1’690.–',
    availability: 'Dès le 01.05.2026',
    badge: 'Centre-ville',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'prilly-centrale-14',
    title: 'Appartement 4 pièces',
    type: 'Appartement',
    region: 'Prilly',
    city: 'Prilly',
    address: 'Rue Centrale 14',
    area: 97,
    rooms: '4 pièces',
    price: 'CHF 2’320.–',
    availability: 'Disponible immédiatement',
    badge: 'Visite rapide',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lausanne-roche-7',
    title: 'Loft 3 pièces',
    type: 'Loft',
    region: 'Lausanne',
    city: 'Lausanne',
    address: 'Chemin de la Roche 7',
    area: 72,
    rooms: '3 pièces',
    price: 'CHF 1’980.–',
    availability: 'Dès le 01.06.2026',
    badge: 'Balcon',
    image:
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80',
  },
] as const

export const properties: Property[] = rawProperties.map((property) => ({
  ...property,
  price: parsePrice(property.price),
  rooms: parseRooms(property.rooms),
}))
