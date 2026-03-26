import { GuideSectionCard } from '../../components/guide/GuideSectionCard'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { emergencyNumbers, guideSections, quickAccess } from '../../data/guideData'

const pdfPath = '/GuideDuLocataire_2022.pdf'

export function GuidePage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/guide-du-locataire" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Louer', href: '/location' }, { label: 'Guide du locataire' }]} />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.16),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                Centre d’aide locataire
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl">
                Le guide du locataire, repensé en expérience claire et utile.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#66554a] md:text-lg">
                Retrouvez les réponses essentielles concernant votre arrivée, la vie dans l’immeuble, le paiement du loyer, l’entretien, l’énergie, la résiliation et l’état des lieux de sortie.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#sections"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428]"
                >
                  Consulter les sections
                </a>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Télécharger le PDF
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {quickAccess.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#dfd1c6] bg-white/85 p-4 text-sm font-medium text-[#4c392f] shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-4 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                  alt="Documents et assistance locataire"
                  className="h-[230px] w-full object-cover md:h-[280px]"
                />
              </div>
              <div className="mt-4 rounded-[1.5rem] bg-[#f4ede7] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7568]">Urgences</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {emergencyNumbers.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[#8f6d5a]">{item.label}</div>
                      <div className="mt-2 text-sm font-semibold text-[#3f2b22]">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-[#5d4b40] shadow-sm">
                  En cas d’urgence, contactez d’abord votre concierge. En dehors des heures d’ouverture, la permanence de la régie est réservée aux urgences.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sections" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
            <aside className="xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Sommaire</p>
                <div className="mt-4 space-y-2">
                  {guideSections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center justify-between rounded-2xl bg-[#f8f3ef] px-4 py-3 text-sm font-medium text-[#4c392f] transition hover:bg-[#f3ebe5]"
                    >
                      <span>{index + 1}. {section.title}</span>
                      <span className="text-[#8f6d5a]">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-5">
              {guideSections.map((section) => (
                <GuideSectionCard key={section.id} section={section} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efe6df] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Besoin d’aide ?</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                  Un guide pratique, mais aussi une équipe à votre écoute.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-8 text-[#66554a]">
                  <p>Le guide répond aux questions récurrentes sur le bail, les démarches à l’arrivée, l’entretien, la résiliation ou encore l’état des lieux de sortie.</p>
                  <p>Pour toute situation particulière, la régie reste le bon point de contact afin d’obtenir une réponse claire, documentée et adaptée à votre cas.</p>
                </div>
                <a
                  href="/contact"
                  className="mt-6 inline-flex rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Contacter la régie
                </a>
              </div>

              <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Coordonnées</p>
                <h2 className="mt-3 text-3xl font-semibold">Régie Braun SA</h2>
                <div className="mt-6 space-y-4">
                  {[
                    ['Adresse', 'Rue Centrale 5, 1002 Lausanne'],
                    ['Téléphone', '021 342 52 52'],
                    ['Horaires', 'Lun–Ven · 8h00–12h00 · 13h30–16h30'],
                    ['Site', 'www.regiebraun.ch'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.14em] text-[#e7d3c7]">{label}</div>
                      <div className="mt-2 text-sm text-white/85">{value}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]"
                >
                  Télécharger le guide complet
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
