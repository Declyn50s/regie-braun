import { Link } from 'react-router-dom'
import { DownloadCard } from '../../components/downloads/DownloadCard'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { documents, quickLinks } from '../../data/downloadsData'

export function DownloadsPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/telechargements" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Ressources' }, { label: 'Téléchargements' }]} />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.16),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                Centre de ressources
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl">
                Téléchargez les documents utiles en un seul endroit.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#66554a] md:text-lg">
                Retrouvez les formulaires et documents de référence indispensables pour vos démarches
                locatives, les logements subventionnés, les règles usuelles du canton de Vaud et les
                directives liées au chauffage.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#documents"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428]"
                >
                  Voir les documents
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Besoin d’aide ?
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-4 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#4a2a20] p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Accès rapide</p>
                <div className="mt-4 grid gap-3">
                  {quickLinks.map((item) => (
                    <a
                      key={item}
                      href="#documents"
                      className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-4 text-left text-sm font-medium text-white/95 transition hover:bg-white/15"
                    >
                      <span>{item}</span>
                      <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Téléchargements</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Documents disponibles
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-[#e2d7cf] bg-white px-6 py-4 shadow-sm">
              <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Ressources</div>
              <div className="mt-1 text-2xl font-semibold text-[#4a2a20]">{documents.length} documents</div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {documents.map((document) => (
              <DownloadCard key={document.title} document={document} />
            ))}
          </div>
        </section>

        <section className="bg-[#efe6df] py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Informations utiles</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                Des ressources regroupées selon leur usage réel.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-8 text-[#66554a]">
                <p>
                  La demande de location classique et la demande pour logement subventionné sont les
                  deux formulaires d’entrée les plus importants pour les candidats locataires.
                </p>
                <p>
                  Le RULV complète les règles pratiques liées au bail, tandis que les directives de
                  chauffage apportent un cadre de référence pour l’établissement du décompte annuel de
                  chauffage et d’eau chaude.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Besoin d’accompagnement ?</p>
              <h2 className="mt-3 text-3xl font-semibold">La régie reste votre bon point de contact.</h2>
              <div className="mt-6 space-y-4 text-sm leading-8 text-[#f3e7df]">
                <p>
                  Si vous ne savez pas quel document télécharger, si vous avez une question sur votre
                  dossier ou si vous cherchez un formulaire spécifique, la régie peut vous orienter
                  rapidement.
                </p>
                <p>
                  Cette page remplace une simple liste brute par une vraie page ressource plus claire,
                  plus utile et plus cohérente avec le reste du site.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]"
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
