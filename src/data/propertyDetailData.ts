import type { PropertyDetail } from '../types/property'

export const propertyDetail: PropertyDetail = {
  slug: 'bien',
  title: 'Appartement 4.5 pièces',
  address: 'Route du Burenoz 35A',
  city: '1092 Belmont-sur-Lausanne',
  availability: '01.04.2026',
  reference: '73401.00.061.40',
  heroLabel: 'Disponible dès le 01.04.2026',
  price: 'CHF 2’450.–',
  monthlyRent: 'CHF 2’250.–',
  charges: 'CHF 200.–',
  description: [
    'Surplombant le lac Léman et ses vignobles, la commune de Belmont-sur-Lausanne est située dans le district de Lavaux-Oron, à l’est de Lausanne et au nord de Pully.',
    'Situé dans un immeuble entouré de verdure, cet appartement lumineux est composé d’une entrée, d’une cuisine agencée, de trois chambres à coucher, d’une salle de bains avec WC, d’une salle d’eau avec douche et WC ainsi que d’un balcon.',
    'Une place de parc extérieure est disponible en sus du loyer à CHF 80.– par mois et une place intérieure à CHF 210.– par mois. Le bien bénéficie d’un accès rapide aux écoles, à une garderie, aux commerces, aux transports publics ainsi qu’aux axes routiers principaux.',
    'Ce logement convient parfaitement à une famille ou à un jeune couple recherchant un cadre de vie agréable entre campagne et proximité urbaine.',
  ],
  visitContact: 'M. Rimaz & Mme Naili',
  visitSchedule: 'Mercredi 25 mars 2026 de 18h00 à 19h00',
  mapAddress: 'Route du Burenoz 35A, 1092 Belmont-sur-Lausanne',
  propertyImages: [
    'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80',
  ],
  summaryStats: [
    { label: 'Loyer mensuel', value: 'CHF 2’250.–' },
    { label: 'Charges', value: 'CHF 200.–' },
    { label: 'Loyer total', value: 'CHF 2’450.–' },
    { label: 'Pièces', value: '4.5' },
    { label: 'Surface', value: '111 m²' },
    { label: 'Étage', value: '6' },
    { label: 'Disponibilité', value: '01.04.2026' },
    { label: 'Référence', value: '73401.00.061.40' },
  ],
  technicalData: [
    { label: 'Type d’immeuble', value: 'Habitation' },
    { label: 'Entrées', value: '2' },
    { label: 'Parking extérieur', value: 'CHF 80.– / mois' },
    { label: 'Parking intérieur', value: 'CHF 210.– / mois' },
  ],
  locationData: [
    { label: 'Autoroute', value: '7 minutes' },
    { label: 'Transports publics', value: 'À proximité' },
    { label: 'Commerces', value: 'Oui' },
    { label: 'École primaire', value: 'Oui' },
    { label: 'École secondaire', value: 'Oui' },
    { label: 'Garderie', value: 'Oui' },
    { label: 'Environnement', value: 'Urbain et verdoyant' },
    { label: 'Centre de Lausanne', value: '10 minutes' },
  ],
  comfortData: [
    { label: 'Ascenseur', value: 'Oui' },
    { label: 'Service immeuble', value: 'Sur place' },
    { label: 'Lave-linge', value: 'Communs' },
    { label: 'Sèche-linge', value: 'Communs' },
    { label: 'Balcon', value: 'Oui' },
    { label: 'Cuisine agencée', value: 'Oui' },
  ],
  similarProperties: [
    {
      title: 'Appartement 3.5 pièces',
      location: 'Pully',
      price: 'CHF 2’050 / mois',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Appartement 4 pièces',
      location: 'Lausanne',
      price: 'CHF 2’390 / mois',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Appartement 5 pièces',
      location: 'Belmont-sur-Lausanne',
      price: 'CHF 2’780 / mois',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    },
  ],
}
