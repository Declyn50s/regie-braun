import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { PressCard } from '../../components/publications/PressCard'
import { UsefulLinkCard } from '../../components/publications/UsefulLinkCard'
import { pressArticles, usefulLinks } from '../../data/publicationsData'

export function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/publications" />
      <SiteBreadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'La Régie', href: '/la-regie' },
          { label: 'Publications' },
        ]}
      />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.16),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                Publications
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#341d15] md:text-6xl">
                Articles de presse et liens utiles réunis dans une page claire.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#66554a] md:text-lg">
                Cette page regroupe les publications de presse liées à la régie ainsi qu’une
                sélection de liens utiles vers les organismes et partenaires de référence du secteur
                immobilier.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#articles"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428]"
                >
                  Voir les articles
                </a>
                <a
                  href="#liens"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Voir les liens utiles
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-5 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#4a2a20] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Accès rapide</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Articles de presse', `${pressArticles.length} entrées`],
                    ['Liens utiles', `${usefulLinks.length} organismes`],
                    ['Références archivées', 'Consultation sur demande'],
                    ['Ressources externes', 'Liens vérifiés quand disponibles'],
                  ].map(([title, value]) => (
                    <div key={title} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.14em] text-[#e7d3c7]">{title}</div>
                      <div className="mt-2 text-sm text-white/90">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Presse</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">Articles de presse</h2>
            </div>
            <div className="rounded-[1.5rem] border border-[#e2d7cf] bg-white px-6 py-4 shadow-sm">
              <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Entrées</div>
              <div className="mt-1 text-2xl font-semibold text-[#4a2a20]">{pressArticles.length} articles</div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {pressArticles.map((article) => (
              <PressCard key={`${article.date}-${article.title}`} article={article} />
            ))}
          </div>
        </section>

        <section id="liens" className="bg-[#efe6df] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Ressources</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">Liens utiles</h2>
              </div>
              <div className="rounded-[1.5rem] border border-[#e2d7cf] bg-white px-6 py-4 shadow-sm">
                <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Organismes</div>
                <div className="mt-1 text-2xl font-semibold text-[#4a2a20]">{usefulLinks.length} liens</div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {usefulLinks.map((item) => (
                <UsefulLinkCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
