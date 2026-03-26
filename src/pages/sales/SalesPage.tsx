import { Link } from 'react-router-dom'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { CommissionCalculatorSection } from '../../components/sales/CommissionCalculatorSection'
import { SaleCard } from '../../components/sales/SaleCard'
import { buyCriteria, buyTips, featuredSales, sellerServices, team } from '../../data/salesData'

export function SalesPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/vente" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Acheter / Vendre' }]} />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.16),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                Courtage immobilier
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl">
                Acheter ou vendre avec un courtier qui connaît vraiment le marché vaudois.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#66554a] md:text-lg">
                Régie Braun Courtage SA accompagne les vendeurs et les acquéreurs depuis plus de 40
                ans, avec une approche locale, sérieuse et orientée confiance sur l’ensemble de la
                région lémanique.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428]"
                >
                  Demander une estimation
                </Link>
                <a
                  href="#biens"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Voir les biens à vendre
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-4 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80"
                  alt="Bien immobilier mis en vente"
                  className="h-[230px] w-full object-cover md:h-[280px]"
                />
              </div>
              <div className="mt-4 rounded-[1.5rem] bg-[#f4ede7] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7568]">À votre service pour…</p>
                <div className="mt-4 space-y-3">
                  {sellerServices.map((item) => (
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
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Acheter</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Bien préparer son projet d’acquisition.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#66554a]">
                Avant d’accéder à la propriété immobilière, il est important de clarifier vos besoins,
                vos priorités, votre capacité de financement et les critères indispensables liés au
                bien recherché.
              </p>
              <div className="mt-6 space-y-3">
                {buyTips.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl bg-[#f8f3ef] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#4a2a20] shadow-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-[#5d4b40]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Recherche pratique</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Rechercher avec méthode et avec les bons interlocuteurs.
              </h2>
              <div className="mt-6 grid gap-4">
                {buyCriteria.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-[#f8f3ef] p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">{item.label}</div>
                    <div className="mt-2 text-sm leading-7 text-[#5d4b40]">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-[#4a2a20] p-5 text-white">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Budget & plan financier</div>
                <p className="mt-3 text-sm leading-7 text-[#f3e7df]">
                  Pour estimer l’ordre de grandeur des mensualités propriétaires selon le prix de vente
                  et les fonds propres investis, le calculateur d’honoraires ci-dessous offre un premier
                  repère clair.
                </p>
                <a
                  href="#honoraires"
                  className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]"
                >
                  Voir les honoraires
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efe6df] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Vendre</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                  Confiez-nous votre mandat de vente.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-8 text-[#66554a]">
                  <p>
                    Que vous décidiez de vendre ou d’acquérir un bien immobilier, le courtier est un
                    partenaire déterminant à chaque étape de la transaction.
                  </p>
                  <p>
                    Le courtier procède d’abord à une estimation du bien, puis établit une notice de
                    vente et accompagne l’ensemble des démarches jusqu’à la vente ou l’achat d’un
                    appartement, d’une villa ou d’un terrain.
                  </p>
                  <p>
                    Membre de l’USPI Vaud, Régie Braun Courtage SA s’inscrit dans une éthique
                    professionnelle fondée sur la confiance, la qualité du conseil et la sécurité des
                    transactions.
                  </p>
                </div>
                <div className="mt-6 grid gap-3">
                  {sellerServices.map((item) => (
                    <div key={item} className="rounded-2xl bg-[#f8f3ef] p-4 text-sm leading-7 text-[#5d4b40]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Qui sommes-nous ?</p>
                <h2 className="mt-3 text-3xl font-semibold">Régie Braun Courtage SA</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-[#f3e7df]">
                  <p>
                    Notre société a vu le jour en 1974 et reste fidèle à son identité d’entreprise de
                    service. Depuis plus de 40 ans, elle exerce principalement une activité de courtage
                    immobilier dans la région lémanique.
                  </p>
                  <p>
                    Cette expérience permet une bonne connaissance du marché immobilier actuel, tant dans
                    la fixation de la valeur vénale d’un bien que dans les étapes à suivre pour accéder à
                    la propriété.
                  </p>
                  <p>
                    Au travers de différentes promotions et mandats de courtage, la société a satisfait
                    de nombreux vendeurs et acheteurs grâce à une relation de proximité et un accompagnement
                    de qualité.
                  </p>
                </div>
                <div className="mt-6 grid gap-3">
                  {team.map((member) => (
                    <div key={member.role} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.14em] text-[#e7d3c7]">{member.role}</div>
                      <div className="mt-2 text-sm text-white/90">{member.names}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="biens" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Biens à vendre</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Une sélection de biens présentée de manière plus qualitative.
              </h2>
            </div>
            <span className="rounded-full border border-[#e0d5cc] bg-white px-5 py-3 text-sm font-semibold text-[#8f6d5a]">
              Sélection en cours d’enrichissement
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredSales.map((property) => (
              <SaleCard key={`${property.address}-${property.city}`} property={property} />
            ))}
          </div>
        </section>

        <CommissionCalculatorSection />
      </main>

      <SiteFooter />
    </div>
  )
}
