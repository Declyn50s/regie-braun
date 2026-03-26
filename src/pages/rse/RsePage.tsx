import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { RseSectionCard } from '../../components/rse/RseSectionCard'
import { economySections, environmentSections, socialSections } from '../../data/rseData'

export function RsePage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/rse" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'La Régie', href: '/la-regie' }, { label: 'RSE' }]} />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(112,153,132,0.22),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6c8d77]">
                Responsabilité sociétale
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#341d15] md:text-6xl">
                Une démarche RSE construite sur des actions concrètes, pas sur du discours.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#66554a] md:text-lg">
                La Régie Braun SA structure ses engagements autour de trois piliers : le social, l’environnement et l’économie. Cette page met en valeur des actions réelles liées à la formation, à la biodiversité, à l’énergie, à la transparence et aux relations durables avec toutes les parties prenantes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-5 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=80"
                  alt="Nature, responsabilité et engagement"
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Social', 'Formation, philanthropie, ergonomie'],
                  ['Environnement', 'Biodiversité, énergie, climat'],
                  ['Économie', 'Transparence, équité, relations durables'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-[#f4ede7] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6c8d77]">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-[#4f4138]">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Pilier 1</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">Social</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {socialSections.map((item) => (
              <RseSectionCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="bg-[#eef4ef] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6c8d77]">Pilier 2</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">Environnement</h2>
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              {environmentSections.map((item) => (
                <RseSectionCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Pilier 3</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">Économie</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {economySections.map((item) => (
              <RseSectionCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="bg-[#4a2a20] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Vision</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Une RSE intégrée à l’exploitation réelle de la régie.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#f3e7df]">
                  Cette page ne présente pas un manifeste théorique. Elle montre comment la Régie Braun SA relie concrètement son activité immobilière à des engagements mesurables, visibles et cohérents avec son identité de service.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Formation continue et transmission',
                  'Biodiversité et climat',
                  'Transparence pour les propriétaires',
                  'Conditions solides pour les collaborateurs',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-5 text-sm leading-7 text-white/90 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
