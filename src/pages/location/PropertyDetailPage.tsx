import { Link } from 'react-router-dom'
import { InfoGrid } from '../../components/location/InfoGrid'
import { PropertyGallery } from '../../components/location/PropertyGallery'
import { PropertyInquiryCard } from '../../components/location/PropertyInquiryCard'
import { PropertySummaryCard } from '../../components/location/PropertySummaryCard'
import { SimilarPropertyCard } from '../../components/location/SimilarPropertyCard'
import { VisitCard } from '../../components/location/VisitCard'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { propertyDetail } from '../../data/propertyDetailData'

export function PropertyDetailPage() {
  const applicationHref = `/demande-location?reference=${encodeURIComponent(propertyDetail.reference)}&address=${encodeURIComponent(`${propertyDetail.address}, ${propertyDetail.city}`)}&rentalType=${encodeURIComponent('appartement')}&rooms=${encodeURIComponent(propertyDetail.summaryStats.find((item) => item.label === 'Pièces')?.value ?? '')}&rent=${encodeURIComponent(propertyDetail.monthlyRent)}&charges=${encodeURIComponent(propertyDetail.charges)}`

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/location" />
      <SiteBreadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Louer', href: '/location' },
          { label: 'Biens à louer', href: '/location' },
          { label: propertyDetail.title },
        ]}
      />

      <main>
        <section className="border-b border-[#e3d8cf] bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                  {propertyDetail.heroLabel}
                </div>
                <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#341d15] md:text-5xl">
                  {propertyDetail.title} · {propertyDetail.address}, {propertyDetail.city}
                </h1>
                <p className="mt-3 text-sm text-[#77655a]">Réf. {propertyDetail.reference}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/location"
                  className="rounded-full border border-[#ccb7aa] bg-white px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Retour à la liste
                </Link>
                <button className="rounded-full border border-[#ccb7aa] bg-white px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]">
                  Partager
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
            <div>
              <PropertyGallery images={propertyDetail.propertyImages} title={propertyDetail.title} />

              <section className="mt-8 rounded-[2rem] border border-[#e2d7cf] bg-white p-7 shadow-sm">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Le bien</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#311d16] md:text-3xl">
                      Un appartement lumineux entre ville, verdure et panorama.
                    </h2>
                  </div>
                  <a
                    href="#demande"
                    className="inline-flex rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
                  >
                    Je suis intéressé
                  </a>
                </div>

                <div className="mt-6 space-y-5 text-sm leading-8 text-[#66554a]">
                  {propertyDetail.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
              <PropertySummaryCard
                price={propertyDetail.price}
                stats={propertyDetail.summaryStats}
                applicationHref={applicationHref}
              />
              <VisitCard contact={propertyDetail.visitContact} schedule={propertyDetail.visitSchedule} />
              <div id="demande">
                <PropertyInquiryCard />
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="overflow-hidden rounded-[2rem] border border-[#e2d7cf] bg-white shadow-sm">
                <div className="flex flex-col gap-4 border-b border-[#eee4dc] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Localisation</p>
                    <h3 className="mt-1 text-xl font-semibold text-[#321d15]">Belmont-sur-Lausanne</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7e6c61]">
                    <span className="rounded-full bg-[#f4ede7] px-3 py-2">Plan</span>
                    <span className="rounded-full bg-[#f4ede7] px-3 py-2">Satellite</span>
                    <span className="rounded-full bg-[#f4ede7] px-3 py-2">Street View</span>
                  </div>
                </div>
                <div className="h-[380px] bg-[linear-gradient(135deg,#d9c7b8,#f1e9e2)] p-6">
                  <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_35%),linear-gradient(135deg,#b8a08f,#ddd0c3)] text-center text-[#4a2a20] shadow-inner">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c6a58]">Carte interactive</div>
                      <div className="mt-3 text-2xl font-semibold">{propertyDetail.address}</div>
                      <div className="mt-2 text-sm">{propertyDetail.city}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <InfoGrid title="Caractéristiques du bien" items={propertyDetail.technicalData} />
                <InfoGrid title="Cadre de vie et accessibilité" items={propertyDetail.locationData} />
                <InfoGrid title="Confort et équipements" items={propertyDetail.comfortData} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Biens similaires</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                D’autres opportunités à découvrir.
              </h2>
            </div>
            <Link
              to="/location"
              className="hidden rounded-full border border-[#c8b3a6] px-5 py-3 text-sm font-semibold text-[#4a2a20] lg:block"
            >
              Retour aux résultats
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {propertyDetail.similarProperties.map((property) => (
              <SimilarPropertyCard key={property.title} property={property} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
