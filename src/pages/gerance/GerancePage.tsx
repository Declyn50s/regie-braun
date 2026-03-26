import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'

const servicePillars = [
  {
    title: 'PPE / copropriété',
    description:
      'Nous accompagnons les copropriétaires avec une gestion structurée, lisible et apaisée du quotidien comme des décisions importantes.',
    points: [
      'Préparation et suivi des assemblées',
      'Coordination des décisions collectives',
      'Gestion des parties communes',
      'Vision claire et transparente des échanges',
    ],
  },
  {
    title: 'Gestion technique',
    description:
      'Nous assurons le suivi de l’entretien courant et la coordination des interventions pour préserver la qualité d’usage et la valeur du bâtiment.',
    points: [
      'Suivi de l’entretien et de la maintenance',
      'Coordination des prestataires et entreprises',
      'Réactivité en cas de besoin ou d’imprévu',
      'Vision durable du patrimoine immobilier',
    ],
  },
  {
    title: 'Gestion administrative',
    description:
      'Nous prenons en charge la gestion courante avec rigueur, clarté et continuité pour offrir un cadre fiable aux propriétaires comme aux copropriétaires.',
    points: [
      'Suivi des dossiers et correspondances',
      'Organisation des documents et échéances',
      'Coordination fluide des échanges',
      'Rigueur administrative au quotidien',
    ],
  },
]

const keyHighlights = [
  { value: 'Locale', label: 'présence lausannoise et proximité terrain' },
  { value: 'Clarté', label: 'échanges structurés et interlocuteurs identifiés' },
  { value: 'Suivi', label: 'vision rigoureuse des priorités et interventions' },
  { value: 'Durable', label: 'gestion pensée dans la continuité du patrimoine' },
]

const differentiators = [
  {
    title: 'Proximité réelle',
    text: 'Une équipe ancrée localement, capable de suivre les immeubles avec attention et de répondre avec discernement.',
  },
  {
    title: 'Interlocuteurs identifiés',
    text: 'Des échanges plus simples, plus lisibles et plus directs pour éviter les zones floues dans la gestion courante.',
  },
  {
    title: 'Rigueur de pilotage',
    text: 'Un cadre clair pour les priorités, les interventions, les documents et la coordination avec les différents partenaires.',
  },
  {
    title: 'Approche humaine',
    text: 'Une gérance attentive aux réalités de chaque immeuble, de chaque PPE et de chaque propriétaire.',
  },
]

const stewardshipPoints = [
  'Suivi lisible et méthodique',
  'Coordination claire des décisions',
  'Préservation durable du patrimoine',
  'Expérience sobre, rassurante et professionnelle',
]

function ServiceCard({
  item,
  index,
}: {
  item: (typeof servicePillars)[number]
  index: number
}) {
  return (
    <article
      className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 ${
        index === 1 ? 'border-[#cfb9ac] bg-[#f2e8e1]' : 'border-[#e2d7cf] bg-white'
      }`}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eadfd5] text-[#6d4b3b]">
        <span className="text-lg font-semibold">0{index + 1}</span>
      </div>
      <h3 className="text-2xl font-semibold text-[#341d15]">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#645247]">{item.description}</p>
      <div className="mt-6 space-y-3">
        {item.points.map((point) => (
          <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/75 p-4">
            <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8f6a56]" />
            <p className="text-sm leading-7 text-[#5d4b40]">{point}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export function GerancePage() {
  return (
    <div className="bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/gerance" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Gérance' }]} />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(220,205,194,0.65),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#d7c7bb] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d4b3b]">
                Gérance immobilière
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl lg:text-6xl">
                Une gestion claire, rigoureuse et durable pour vos biens.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#655349] md:text-lg">
                Nous accompagnons propriétaires, PPE et copropriétés avec une approche locale, structurée et réactive, pensée pour simplifier le quotidien et préserver durablement la valeur du patrimoine.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428]"
                >
                  Parlons de votre bien
                </a>
                <a
                  href="#nos-services"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Découvrir nos prestations
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {keyHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#dfd1c6] bg-white/85 p-4 shadow-sm">
                    <div className="text-2xl font-semibold text-[#4a2a20]">{item.value}</div>
                    <div className="mt-1 text-sm text-[#7a685d]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-4 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                  alt="Gestion immobilière premium"
                  className="h-[230px] w-full object-cover md:h-[280px]"
                />
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-[#f4ede7] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7568]">
                  Notre rôle
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    'Structurer la gestion avec des repères clairs',
                    'Coordonner les intervenants et les priorités',
                    'Faciliter les décisions et les échanges',
                    'Assurer une continuité fiable dans la durée',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8f6a56]" />
                      <p className="text-sm leading-7 text-[#59483e]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nos-services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Nos services</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Trois pôles pensés pour une gérance lisible et rassurante.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#68574c]">
              Chaque service est présenté de manière claire pour permettre aux propriétaires et aux copropriétaires d’identifier rapidement la nature de notre accompagnement.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {servicePillars.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="border-y border-[#e3d8cf] bg-white/65">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Notre approche</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                  Pourquoi confier la gérance à Régie Braun SA.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#68574c]">
                Une gérance convaincante ne repose pas uniquement sur des tâches exécutées, mais sur la qualité de suivi, la lisibilité des échanges et la continuité du service.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {differentiators.map((item) => (
                <article key={item.title} className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eadfd5] text-sm font-semibold text-[#6d4b3b]">
                    {item.title.slice(0, 1)}
                  </div>
                  <h3 className="text-xl font-semibold text-[#321d15]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#66554a]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efe6df] py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
            <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9c0b3]">Vision de gestion</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Une gestion construite pour durer, pas simplement pour réagir.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#f3e7df]">
                Chaque immeuble, chaque PPE et chaque propriétaire a ses spécificités. Notre rôle est d’assurer une gestion structurée, lisible et réactive, tout en préservant la valeur du patrimoine dans la durée.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#f3e7df]">
                Cette approche associe proximité, méthode et continuité afin de donner à chaque interlocuteur des repères clairs, des décisions mieux accompagnées et une relation de confiance durable.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#d3c1b5] bg-[#f8f3ef] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Ce que cela change</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {stewardshipPoints.map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-base font-semibold text-[#40271e]">{item}</div>
                    <p className="mt-2 text-sm leading-7 text-[#6d5a50]">
                      Une organisation pensée pour rendre la gérance plus fluide, plus fiable et plus confortable à vivre au quotidien.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Prendre contact</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Parlons de la gestion de votre bien dans un cadre clair et professionnel.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#f3e7df]">
                  Que votre besoin concerne une PPE, une gestion technique ou un accompagnement administratif, nous pouvons vous orienter vers la bonne prestation avec une approche locale et soignée.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]"
                >
                  Nous contacter
                </a>
                <a
                  href="/la-regie"
                  className="inline-flex justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Découvrir la régie
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
