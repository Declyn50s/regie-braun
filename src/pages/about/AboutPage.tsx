import { DepartmentCard } from '../../components/about/DepartmentCard'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { departments, figures, keyStats, newsItems, organigramme } from '../../data/aboutData'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/la-regie" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'La Régie' }]} />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.16),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                À propos de la régie
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl">
                Une régie lausannoise engagée, structurée et durable.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#66554a] md:text-lg">
                Fondée en 1942, devenue société anonyme en 1971, la Régie Braun SA accompagne propriétaires et locataires avec une expertise historique, une équipe de professionnels et un ancrage fort sur Lausanne et sa proche banlieue.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#66554a] md:text-lg">
                Très impliquée dans la démarche du développement durable, elle a notamment équipé l'immeuble de la rue Centrale 5 à Lausanne de 43 panneaux solaires photovoltaïques et a été la première gérance en Suisse à mettre à disposition de l'ensemble de ses clients tous les plans des objets gérés.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {keyStats.map((item) => (
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
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
                  alt="Bâtiment et bureaux de régie"
                  className="h-[230px] w-full object-cover md:h-[280px]"
                />
              </div>
              <div className="mt-4 rounded-[1.5rem] bg-[#f4ede7] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7568]">Repères clés</p>
                <div className="mt-4 space-y-3">
                  {[
                    'Portefeuille immobilier important sur Lausanne et sa proche banlieue',
                    'Services concrets pour locataires et propriétaires',
                    'Culture de transparence et accès rapide aux bons interlocuteurs',
                    "Engagement historique dans la durabilité et l'innovation métier",
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

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">La régie</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Une société de services immobiliers construite dans la durée.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-8 text-[#66554a]">
                <p>Forte de 35 collaborateurs et collaboratrices, la Régie Braun SA gère un important portefeuille immobilier pour le compte de nombreux propriétaires sur Lausanne et sa proche banlieue.</p>
                <p>Grâce à une équipe de professionnels qui composent quotidiennement avec les tâches liées à la gestion d'un bien immobilier, la régie met à disposition de ses clients un ensemble de services concrets et immédiatement utiles.</p>
                <p>La transparence, la qualité d'exécution, la stabilité et la capacité à répondre rapidement aux besoins de tous structurent l'image de la régie.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Actualités</p>
              <h2 className="mt-3 text-3xl font-semibold">Vie de la régie et publications récentes.</h2>
              <div className="mt-6 space-y-4">
                {newsItems.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.14em] text-[#e7d3c7]">{item.category}</div>
                    <div className="mt-2 text-sm font-semibold text-white">{item.title}</div>
                    <div className="mt-2 text-sm leading-7 text-white/80">{item.description}</div>
                  </div>
                ))}
              </div>
              <a
                href="/publications"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]"
              >
                Voir toutes les publications
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#efe6df] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Organisation</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                  Une structure lisible, pensée dans un esprit de transparence.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#68574c]">
                Par souci de transparence, la Régie Braun SA met en avant les décideurs de chacun de ses départements afin de faciliter l'accès rapide à la bonne compétence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {organigramme.map((block) => (
                <div key={block.title} className="rounded-[1.75rem] bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{block.title}</p>
                  <div className="mt-5 space-y-3">
                    {block.people.map((person) => (
                      <div key={person} className="rounded-2xl bg-[#f8f3ef] px-4 py-3 text-sm font-medium text-[#3f2b22]">
                        {person}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">La régie en chiffres</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">Transparence = confiance.</h2>
              <div className="mt-6 space-y-4 text-sm leading-8 text-[#66554a]">
                <p><span className="font-semibold text-[#3b241b]">Forme juridique :</span> Société anonyme au capital de CHF 800'000.00, entièrement libéré.</p>
                <p><span className="font-semibold text-[#3b241b]">Conseil d'administration :</span> Philippe Braun, président, et Dominique Fasel, avocat, administrateur.</p>
                <p><span className="font-semibold text-[#3b241b]">Organe de contrôle :</span> Fidinter SA à Lausanne.</p>
                <p><span className="font-semibold text-[#3b241b]">Date de constitution :</span> 1971, par reprise d'activité de l'étude Braun notaire, service des gérances fondée en 1942.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {figures.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-[#e2d7cf] bg-white p-5 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">Quelques chiffres au 31.12.2021</div>
                  <div className="mt-3 text-2xl font-semibold text-[#4a2a20]">{item.value}</div>
                  <div className="mt-2 text-sm leading-7 text-[#67564b]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Nos expertises</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                  Les grands pôles de compétence de la régie.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#68574c]">
                Une page institutionnelle qui présente clairement les métiers, les forces et les expertises historiques de Régie Braun SA.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {departments.map((item) => (
                <DepartmentCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
