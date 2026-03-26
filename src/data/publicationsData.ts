export type PressArticle = {
  date: string
  title: string
  description: string
  category: string
  href?: string
}

export type UsefulLink = {
  title: string
  subtitle: string
  image: string
  href?: string
}

export const pressArticles: PressArticle[] = [
  {
    date: '28.06.2024',
    title: 'Article journal · Echo du Gros-de-Vaud du 28.06.2024',
    description:
      "Article de l'Echo du Gros-de-Vaud « Les bisons d'Europe au cœur des journées de la forêt 2024 ».",
    category: 'Presse',
  },
  {
    date: '23.11.2022',
    title: 'Chronique 24 Heures du 23 novembre 2022',
    description: 'La chronique de notre directeur M. Claude Chessex au sujet de la LPPPL.',
    category: 'Chronique',
  },
  {
    date: '09.09.2020',
    title: 'Chronique du 24 Heures 09.09.2020',
    description: 'Publication presse autour des engagements et actualités de la régie.',
    category: 'Chronique',
  },
  {
    date: '18.06.2020',
    title: 'Carnet Rose · 24 Heures du 17 juin 2020',
    description: 'Mention publiée dans la presse régionale.',
    category: 'Archive',
  },
  {
    date: '15.05.2020',
    title: 'Article 24 Heures · Les bisons de Suchy',
    description: "Arrivée prochaine d'un bébé bison à Suchy.",
    category: 'Presse',
  },
  {
    date: '08.01.2020',
    title: 'Journal AGEFI du 8 janvier 2020',
    description: 'Article concernant les votations du 9 février prochain.',
    category: 'Presse',
  },
  {
    date: '04.11.2019',
    title: 'Les bisons arrivent le 7 novembre 2019',
    description: 'Publication liée au projet de réintroduction dans la forêt de Suchy.',
    category: 'Presse',
  },
  {
    date: '18.10.2019',
    title: 'Arrivée de bisons · Article 24 Heures du 18.10.2019',
    description: "Article dédié à l'arrivée de bisons dans la forêt de Suchy.",
    category: 'Presse',
  },
  {
    date: '15.10.2019',
    title: "Les bisons d'Europe bientôt à Suchy",
    description: 'Article paru dans 24 Heures le 15 octobre 2019.',
    category: 'Presse',
  },
  {
    date: '19.09.2019',
    title: 'Émissions de CO2',
    description:
      "La Régie Braun SA présente sa démarche de compensation des émissions de CO2 via des programmes MyClimate.",
    category: 'RSE',
  },
  {
    date: '05.03.2019',
    title: 'Article 24 Heures du 6 mars 2019',
    description: "Article d'archive de la rubrique presse.",
    category: 'Archive',
  },
]

export const usefulLinks: UsefulLink[] = [
  {
    title: 'CVI',
    subtitle: 'Chambre vaudoise immobilière',
    href: 'https://www.cvi.ch',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'FIR',
    subtitle: 'Fonds immobilier romand',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'FISP',
    subtitle: 'Fondation interprofessionnelle sanitaire de prévoyance',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'La Foncière',
    subtitle: 'Fonds suisse de placements immobiliers',
    href: 'https://www.lafonciere.ch',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'LESRP',
    subtitle: 'Les Retraites Populaires',
    href: 'https://www.retraitespopulaires.ch',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'USPI Vaud',
    subtitle: "Union suisse des professionnels de l'immobilier (Vaud)",
    href: 'https://www.uspi-vaud.ch',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
  },
]
