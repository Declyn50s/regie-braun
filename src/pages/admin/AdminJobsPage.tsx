import { PageHeader } from '../../components/admin/PageHeader'
import { SectionCard } from '../../components/admin/SectionCard'
import { StatusBadge } from '../../components/admin/StatusBadge'

const adminJobs = [
  {
    id: 'job-1',
    title: 'Assistant(e) de gerance confirme(e)',
    department: 'Service technique',
    contract: '100%',
    location: 'Lausanne',
    status: 'published' as const,
    visibility: 'visible' as const,
    updatedAt: '2026-03-25',
    applications: 6,
    email: 'stanislas.burnand@regiebraun.ch',
  },
  {
    id: 'job-2',
    title: 'Candidatures spontanees',
    department: 'Regie Braun SA',
    contract: 'Selon opportunite',
    location: 'Lausanne',
    status: 'draft' as const,
    visibility: 'visible' as const,
    updatedAt: '2026-03-24',
    applications: 2,
    email: 'stanislas.burnand@regiebraun.ch',
  },
] as const

const publicationChecks = [
  'Verifier que l email de candidature est a jour sur chaque fiche.',
  'Confirmer la coherence entre statut de publication et visibilite.',
  'Maintenir une version publique et une version archivee des offres cloturees.',
] as const

export function AdminJobsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Jobs"
        title="Offres et candidatures"
        description="Pilotage simple des postes visibles sur le site, de leur statut et du canal de candidature."
        secondaryAction={
          <button className="inline-flex items-center rounded-full border border-[#ccb7aa] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]">
            Nouvelle offre
          </button>
        }
      />

      <SectionCard
        title="Vue d ensemble"
        description="Suivi rapide des offres actuellement gerees dans l espace admin."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Offres actives</div>
            <div className="mt-3 text-3xl font-semibold text-[#321d15]">
              {adminJobs.filter((job) => job.status === 'published').length}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Brouillons</div>
            <div className="mt-3 text-3xl font-semibold text-[#321d15]">
              {adminJobs.filter((job) => job.status === 'draft').length}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Candidatures recues</div>
            <div className="mt-3 text-3xl font-semibold text-[#321d15]">
              {adminJobs.reduce((total, job) => total + job.applications, 0)}
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Offres publiees et brouillons"
        description="Chaque fiche reprend le statut, la visibilite et l adresse de candidature affichee sur le site."
      >
        <div className="space-y-4">
          {adminJobs.map((job) => (
            <div
              key={job.id}
              className="grid gap-4 rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5 xl:grid-cols-[1.3fr_160px_140px_140px_1fr] xl:items-center"
            >
              <div>
                <div className="text-base font-semibold text-[#321d15]">{job.title}</div>
                <p className="mt-2 text-sm leading-7 text-[#66554a]">
                  {job.department} · {job.contract} · {job.location}
                </p>
                <div className="mt-2 text-sm text-[#6d5a50]">{job.email}</div>
              </div>
              <div>
                <StatusBadge status={job.status} />
              </div>
              <div>
                <StatusBadge status={job.visibility} />
              </div>
              <div className="text-sm text-[#66554a]">{job.updatedAt}</div>
              <div className="text-sm font-semibold text-[#4a2a20]">{job.applications} candidatures</div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Controle editorial"
        description="Reference rapide pour garder la page jobs propre, visible et a jour."
      >
        <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
          <div className="space-y-3">
            {publicationChecks.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5 text-sm leading-7 text-[#66554a]">
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] bg-[#4a2a20] p-6 text-white shadow-[0_18px_40px_rgba(60,36,24,0.16)]">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Canal de candidature</div>
            <div className="mt-3 text-2xl font-semibold">stanislas.burnand@regiebraun.ch</div>
            <p className="mt-4 text-sm leading-7 text-[#f3e7df]">
              Adresse actuellement exposee sur la page publique jobs pour les postes ouverts et les candidatures spontanees.
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
