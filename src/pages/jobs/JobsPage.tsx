import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'

const jobs = [
  {
    title: 'Assistant(e) de gerance confirme(e)',
    department: 'Service technique',
    contract: '100%',
    location: 'Lausanne',
    availability: 'De suite ou a convenir',
    email: 'stanislas.burnand@regiebraun.ch',
    accent: 'Urgent',
    mission: [
      'Fixation des etats des lieux d entree et de sortie',
      'Suivi des sinistres et des contrats de maintenance',
      'Planification des renovations des appartements et du grand entretien',
      'Suivi des bons, demandes de devis et adjudications',
      'Accueil physique et telephonique, soutien au departement technique',
    ],
    profile: [
      'CFC ou maturite commerciale',
      'Bonnes connaissances techniques',
      'Plusieurs annees d experience comme assistant(e) de gerance',
      'Maitrise des outils informatiques',
      'Organisation, autonomie et bonne gestion du stress',
      'Presentation soignee requise',
    ],
    benefits: [
      'Des valeurs humaines',
      'Un environnement dynamique et une ambiance agreable',
      'Des prestations sociales tres avantageuses',
      'Une formation continue',
      'Confidentialite assuree',
    ],
  },
  {
    title: 'Candidatures spontanees',
    department: 'Regie Braun SA',
    contract: 'Selon opportunite',
    location: 'Lausanne',
    availability: 'Toute l annee',
    email: 'stanislas.burnand@regiebraun.ch',
    accent: 'Ouvert',
    mission: [
      'Nous restons ouverts aux profils solides dans la gerance, la technique, l administration et le courtage',
      'Votre candidature peut etre conservee pour des besoins futurs',
    ],
    profile: [
      'Profil serieux et coherent avec les metiers de l immobilier',
      'Bonne presentation et sens du service',
      'Capacite a travailler dans un cadre exigeant',
    ],
    benefits: [
      'Etude attentive des candidatures',
      'Confidentialite',
      'Environnement local et structure reconnue',
    ],
  },
] as const

const values = [
  {
    title: 'Ambiance de travail saine',
    text: 'Une structure a taille humaine, des echanges directs et une culture de travail serieuse sans lourdeur inutile.',
  },
  {
    title: 'Formation continue',
    text: 'La montee en competence fait partie du quotidien, avec une vraie logique de progression dans la duree.',
  },
  {
    title: 'Ancrage local',
    text: 'Une regie bien implantee a Lausanne, avec une connaissance concrete du terrain et des metiers immobiliers.',
  },
  {
    title: 'Valeurs humaines',
    text: 'Le travail se fait dans le respect, la fiabilite et l attention portee aux personnes comme aux responsabilites.',
  },
] as const

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl bg-[#f8f3ef] p-4 text-sm leading-7 text-[#5f4c42]"
        >
          <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8f6d5a]" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

function JobCard({
  job,
}: {
  job: (typeof jobs)[number]
}) {
  return (
    <article className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-5 border-b border-[#efe6df] pb-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6d5a]">
            {job.accent}
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-[#321d15]">{job.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[#67554a]">
            {job.department} · {job.contract} · {job.location}
          </p>
        </div>
        <div className="grid gap-3 rounded-[1.5rem] bg-[#f8f3ef] p-5 sm:grid-cols-2 lg:min-w-[330px]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">Disponibilite</div>
            <div className="mt-2 text-sm font-medium text-[#3f2b22]">{job.availability}</div>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">Candidature</div>
            <div className="mt-2 break-all text-sm font-medium text-[#3f2b22]">{job.email}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Missions</p>
          <div className="mt-4">
            <BulletList items={job.mission} />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Profil recherche</p>
          <div className="mt-4">
            <BulletList items={job.profile} />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Ce que nous offrons</p>
          <div className="mt-4">
            <BulletList items={job.benefits} />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-[#efe6df] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-[#67554a]">
          Si ce profil vous correspond, merci d envoyer votre dossier de candidature a{' '}
          <span className="font-semibold text-[#4a2a20]">{job.email}</span>.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.jobup.ch/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#c8b3a6] bg-white px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
          >
            Voir sur Jobup
          </a>
          <a
            href={`mailto:${job.email}`}
            className="rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
          >
            Postuler
          </a>
        </div>
      </div>
    </article>
  )
}

export function JobsPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/jobs" />

      <main>
        <section className="relative overflow-hidden border-b border-[#e3d8cf] bg-white/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,106,88,0.16),_transparent_28%),radial-gradient(circle_at_left,_rgba(220,205,194,0.55),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
            <div>
              <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                Recrutement
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-[0.95] text-[#a06f4d] md:text-7xl">
                Nous recrutons.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#66554a] md:text-lg">
                Regie Braun SA recherche des profils solides, fiables et serieux pour renforcer ses equipes.
                Decouvrez les opportunites ouvertes et postulez directement en envoyant votre dossier.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offres"
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5a3428]"
                >
                  Voir les postes ouverts
                </a>
                <a
                  href="mailto:stanislas.burnand@regiebraun.ch"
                  className="rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Candidature spontanee
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dcccc0] bg-white/90 p-5 shadow-[0_30px_80px_rgba(69,42,28,0.12)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#f4ede7] p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8f6d5a]">Poste en avant</div>
                <h2 className="mt-4 text-3xl font-semibold text-[#321d15]">
                  Assistant(e) de gerance confirme(e) au service technique a 100%
                </h2>
                <p className="mt-4 text-sm leading-8 text-[#5f4c42]">
                  Un poste cle pour une personne organisee, autonome, a l aise avec le suivi technique,
                  les etats des lieux, les sinistres et le soutien au departement.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Service', 'Technique'],
                    ['Taux', '100%'],
                    ['Disponibilite', 'De suite ou a convenir'],
                    ['Confidentialite', 'Assuree'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[#8f6d5a]">{label}</div>
                      <div className="mt-2 text-sm font-semibold text-[#3f2b22]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offres" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Opportunites</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#311d16] md:text-4xl">Postes actuellement ouverts</h2>
            </div>
            <div className="rounded-[1.5rem] border border-[#e2d7cf] bg-white px-6 py-4 shadow-sm">
              <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Recrutement</div>
              <div className="mt-1 text-2xl font-semibold text-[#4a2a20]">{jobs.length} opportunites</div>
            </div>
          </div>

          <div className="space-y-8">
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </section>

        <section className="bg-[#efe6df] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Pourquoi nous rejoindre</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
                  Une regie serieuse, locale et humaine.
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-[#66554a]">
                  Cette page jobs donne une image plus claire, plus credible et plus qualitative que de simples
                  visuels de recrutement publies isolement. L objectif est de presenter les postes, les attentes
                  et les benefices dans un cadre coherent avec le reste du site.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
                    <div className="text-lg font-semibold text-[#321d15]">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-[#66554a]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#4a2a20] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Postuler</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Envoyez votre dossier de candidature directement a la regie.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#f3e7df]">
                  Si votre profil correspond a l un des postes ouverts, transmettez votre dossier a l adresse
                  suivante. La confidentialite est assuree.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e7d3c7]">Adresse de candidature</div>
                <div className="mt-4 break-all text-3xl font-semibold">stanislas.burnand@regiebraun.ch</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:stanislas.burnand@regiebraun.ch"
                    className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]"
                  >
                    Envoyer une candidature
                  </a>
                  <a
                    href="https://www.jobup.ch/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Ouvrir Jobup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
