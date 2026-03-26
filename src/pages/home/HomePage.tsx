import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { defaultPropertyFilters } from '../../data/locationData'
import { PROPERTY_TYPE_OPTIONS, ROOMS_MIN_OPTIONS } from '../../data/propertyFilterOptions'
import { REGION_OPTIONS } from '../../data/regions'
import type { PropertyFilters } from '../../types/property'
import { createFilterSearchParams } from '../../utils/propertyFilters'

const featuredProperties = [
  {
    title: 'Appartement 4.5 pièces',
    location: 'Belmont-sur-Lausanne',
    price: 'CHF 2’450 / mois',
    surface: '111 m²',
    tag: 'À louer',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    href: '/location/bien',
    cta: 'Voir le bien',
  },
  {
    title: 'Appartement 3.5 pièces',
    location: 'Pully',
    price: 'CHF 2’190 / mois',
    surface: '84 m²',
    tag: 'Nouveau',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    href: '/location',
    cta: 'Voir les disponibilités',
  },
  {
    title: 'Appartement 5 pièces',
    location: 'Lausanne · Chailly',
    price: 'CHF 2’980 / mois',
    surface: '128 m²',
    tag: 'Visites en cours',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    href: '/location',
    cta: 'Voir les disponibilités',
  },
]

const services = [
  {
    title: 'Location',
    text: 'Consultez les biens disponibles, retrouvez les documents utiles et déposez une demande locative digitale dans un parcours clair.',
    cta: 'Voir les biens à louer',
    href: '/location',
  },
  {
    title: 'Gérance',
    text: 'Une approche rigoureuse de la gestion locative, de la PPE et de l’accompagnement des propriétaires, dans la durée.',
    cta: 'Découvrir la gérance',
    href: '/gerance',
  },
  {
    title: 'Vente',
    text: 'Un accompagnement sérieux pour l’estimation, la mise en vente et la commercialisation de votre bien en Suisse romande.',
    cta: 'Découvrir la vente',
    href: '/vente',
  },
]

const quickLinks = [
  { label: 'Biens à louer', href: '/location' },
  { label: 'Biens à vendre', href: '/vente' },
  { label: 'Guide du locataire', href: '/guide-du-locataire' },
  { label: 'Documents utiles', href: '/telechargements' },
  { label: 'Prendre rendez-vous', href: '/contact' },
  { label: 'Contacter la régie', href: '/contact' },
]

const highlights = [
  { value: '1971', label: 'année de constitution en SA' },
  { value: '80+', label: 'ans d’ancrage immobilier' },
  { value: 'Lausanne', label: 'présence locale' },
  { value: '3', label: 'expertises principales' },
]

const expertiseAreas = [
  {
    title: 'Gestion locative',
    description:
      'Prise en charge complète de la location, du suivi administratif, de la relation locataire et de la gestion quotidienne des immeubles.',
  },
  {
    title: 'PPE / copropriété',
    description:
      'Administration de copropriétés avec une gouvernance claire, une gestion rigoureuse et une communication structurée avec les copropriétaires.',
  },
  {
    title: 'Gestion technique',
    description:
      'Suivi de l´état technique des immeubles, coordination des interventions, entretien courant et accompagnement des rénovations.',
  },
  {
    title: 'Gestion administrative',
    description:
      'Pilotage des tâches administratives et financières, gestion des dossiers, suivi des prestations et communication avec les parties prenantes.',
  },
]

const fieldClass =
  'w-full rounded-xl border border-[#e0d4cb] bg-white px-4 py-3 text-sm text-[#4e3a30] transition outline-none placeholder:text-[#a0897c] focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]'

function FeaturedPropertyCard({ property }: { property: (typeof featuredProperties)[number] }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[#e2d7cf] bg-white shadow-[0_12px_30px_rgba(60,36,24,0.06)] transition duration-300 hover:-translate-y-1">
      <div className="relative">
        <img src={property.image} alt={property.title} className="h-60 w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#4a2a20] shadow-sm">
          {property.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6d5a]">{property.location}</p>
        <h3 className="mt-2 text-xl font-semibold text-[#321d15]">{property.title}</h3>
        <div className="mt-4 flex items-center justify-between text-sm text-[#6c5b50]">
          <span>{property.surface}</span>
          <span className="font-semibold text-[#4a2a20]">{property.price}</span>
        </div>
        <Link
          to={property.href}
          className="mt-5 inline-flex w-full justify-center rounded-full bg-[#4a2a20] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
        >
          {property.cta}
        </Link>
      </div>
    </article>
  )
}

export function HomePage() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<PropertyFilters>(defaultPropertyFilters)

  const locationSearchHref = useMemo(() => {
    const params = createFilterSearchParams(filters)
    const queryString = params.toString()

    return queryString ? `/location?${queryString}` : '/location'
  }, [filters])

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/" />

      <main>
        <section id="accueil" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(220,205,194,0.65),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#d7c7bb] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d4b3b]">
                Lausanne et environs
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl lg:text-6xl">
                L’immobilier avec clarté, exigence et proximité.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#655349] md:text-lg">
                Régie Braun SA vous accompagne pour la location, la gérance et la vente de biens
                immobiliers avec une approche locale, sérieuse et orientée service.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/location"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                >
                  Rechercher un bien
                </Link>
                <Link
                  to="/la-regie"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                >
                  Découvrir la régie
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#dfd1c6] bg-white/85 p-4 shadow-sm">
                    <div className="text-2xl font-semibold text-[#4a2a20]">{item.value}</div>
                    <div className="mt-1 text-sm text-[#7a685d]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-4 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
                    alt="Vue urbaine premium"
                    className="h-[230px] w-full object-cover md:h-[280px]"
                  />
                </div>

                <form
                  className="mt-4 rounded-[1.5rem] bg-[#f4ede7] p-4"
                  onSubmit={(event) => {
                    event.preventDefault()
                    navigate(locationSearchHref)
                  }}
                >
                  <div className="mb-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#7a6658]">
                    <span className="rounded-full bg-white px-3 py-2">Location</span>
                    <span className="rounded-full bg-white px-3 py-2">Vente</span>
                    <span className="rounded-full bg-white px-3 py-2">Gérance</span>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <label htmlFor="home-type" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                        Type de bien
                      </label>
                      <select
                        id="home-type"
                        value={filters.type}
                        onChange={(event) => setFilters({ ...filters, type: event.target.value })}
                        className={fieldClass}
                      >
                        {PROPERTY_TYPE_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <label htmlFor="home-region" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                        Région
                      </label>
                      <select
                        id="home-region"
                        value={filters.region}
                        onChange={(event) => setFilters({ ...filters, region: event.target.value })}
                        className={fieldClass}
                      >
                        {REGION_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <label htmlFor="home-budget" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                        Budget max.
                      </label>
                      <input
                        id="home-budget"
                        type="number"
                        min="0"
                        step="100"
                        value={filters.budgetMax ?? ''}
                        onChange={(event) =>
                          setFilters({
                            ...filters,
                            budgetMax: event.target.value ? Number(event.target.value) : null,
                          })
                        }
                        placeholder="ex. 3000"
                        className={fieldClass}
                      />
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <label htmlFor="home-rooms" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                        Pièces min.
                      </label>
                      <select
                        id="home-rooms"
                        value={filters.roomsMin ?? ''}
                        onChange={(event) =>
                          setFilters({
                            ...filters,
                            roomsMin: event.target.value ? Number(event.target.value) : null,
                          })
                        }
                        className={fieldClass}
                      >
                        {ROOMS_MIN_OPTIONS.map((option) => (
                          <option key={option.label} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 inline-flex w-full justify-center rounded-full bg-[#4a2a20] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                  >
                    Lancer la recherche
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e3d8cf] bg-white/65">
          <div className="mx-auto grid max-w-7xl gap-3 px-6 py-6 sm:grid-cols-2 lg:grid-cols-6 lg:px-10">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-2xl border border-[#e2d7cf] bg-white px-5 py-3 text-left text-sm font-medium text-[#4c392f] shadow-sm transition hover:border-[#c9b5a8] hover:bg-[#fcfaf8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Nos services</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Une organisation pensée pour chaque besoin immobilier.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#68574c]">
              Accédez rapidement au bon service, avec des parcours plus lisibles, des contenus mieux
              structurés et des actions utiles mises en avant au bon endroit.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 ${
                  index === 1 ? 'border-[#cfb9ac] bg-[#f2e8e1]' : 'border-[#e2d7cf] bg-white'
                }`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eadfd5] text-[#6d4b3b]">
                  <span className="text-lg font-semibold">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#341d15]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#645247]">{service.text}</p>
                <Link
                  to={service.href}
                  className="mt-6 inline-flex rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#efe6df] py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
            <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9c0b3]">La régie</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Une présence locale fondée sur la confiance et la continuité.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#f3e7df]">
                Régie Braun SA accompagne ses clients à Lausanne et dans la région avec une approche
                sérieuse, stable et attentive à la qualité du service.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#f3e7df]">
                Le site met mieux en valeur les annonces, les services de gérance, les ressources
                utiles et les points de contact, dans une expérience plus fluide et plus crédible.
              </p>
              <Link
                to="/la-regie"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f2e7de] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a2a20]"
              >
                En savoir plus
              </Link>
            </div>

            <div>
              <div className="mb-6 flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Sélection</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                    Biens actuellement mis en avant.
                  </h2>
                </div>
                <Link
                  to="/location"
                  className="hidden rounded-full border border-[#c8b3a6] px-5 py-3 text-sm font-semibold text-[#4a2a20] lg:block"
                >
                  Tous les biens
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {featuredProperties.map((property) => (
                  <FeaturedPropertyCard key={property.title} property={property} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Gérance</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Une gérance rigoureuse au service des propriétaires et des copropriétés.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-8 text-[#66554a]">
                <p>
                  Régie Braun SA accompagne les propriétaires avec une gestion locative structurée, un suivi administratif fiable et une attention constante portée à la qualité de service.
                </p>
                <p>
                  La régie intervient aussi dans l’administration de PPE, la coordination technique, le pilotage financier et la valorisation des immeubles dans la durée.
                </p>
                <p>
                  Chaque parcours est pensé pour rendre les prestations plus lisibles, faciliter les échanges et donner rapidement accès au bon interlocuteur.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d3c1b5] bg-[#f8f3ef] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Pôles d’expertise</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {expertiseAreas.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-base font-semibold text-[#40271e]">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[#6d5a50]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div className="rounded-[2rem] border border-[#e3d8cf] bg-[#faf6f2] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Vente</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Un parcours plus direct pour vendre, estimer ou entrer en relation.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#66554a]">
                La section vente met davantage en avant l’accompagnement, l’échange humain et la
                demande d’estimation, avec une écriture plus simple et plus claire.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8f6a56]">Estimation</div>
                  <p className="mt-3 text-sm leading-7 text-[#68574c]">
                    Demande rapide d’estimation ou de rendez-vous pour lancer un projet de vente.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8f6a56]">Accompagnement</div>
                  <p className="mt-3 text-sm leading-7 text-[#68574c]">
                    Présentation claire des étapes de commercialisation, du positionnement au suivi.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold">Parlons de votre projet immobilier.</h2>
              <div className="mt-6 space-y-4">
                {[
                  ['Service concerné', 'Location, vente, gérance'],
                  ['Téléphone', '021 342 52 52'],
                  ['Email', 'contact@regiebraun.ch'],
                  ['Prise de rendez-vous', 'Accueil sur rendez-vous à Lausanne'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.14em] text-[#e7d3c7]">{label}</div>
                    <div className="mt-2 text-sm text-white/85">{value}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a2a20]"
              >
                Contacter la régie
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

