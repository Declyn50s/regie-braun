import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { EmptyState } from '../../../components/admin/EmptyState'
import { PageHeader } from '../../../components/admin/PageHeader'
import { RequestDetailPanel } from '../../../components/admin/RequestDetailPanel'
import { SectionCard } from '../../../components/admin/SectionCard'
import { StatusBadge } from '../../../components/admin/StatusBadge'
import { Timeline } from '../../../components/admin/Timeline'
import { rentalRequests } from '../../../data/admin/mockData'
import { formatCurrency } from '../../../components/admin/utils'

export function RentalRequestDetailPage() {
  const { id } = useParams()
  const request = useMemo(() => rentalRequests.find((item) => item.id === id), [id])

  if (!request) {
    return <EmptyState title="Demande introuvable" description="La demande demandee n existe pas ou a ete archivee hors de cet espace de demonstration." />
  }

  return (
    <div>
      <PageHeader
        eyebrow="Demande detail"
        title={`${request.candidateName} · ${request.reference}`}
        description="Lecture detaillee du dossier avec synthese sticky, checklist, historique et actions metier visibles sans ambiguite."
      />

      <div className="grid gap-6 xl:grid-cols-[0.72fr_0.28fr]">
        <div className="space-y-6">
          <SectionCard title="Identite et coordonnees" eyebrow="Candidat">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Nom complet</div><div className="mt-2 font-semibold text-[#341d15]">{request.candidateName}</div></div>
              <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Telephone</div><div className="mt-2 font-semibold text-[#341d15]">{request.phone}</div></div>
              <div className="rounded-2xl bg-[#fcfaf8] p-4 md:col-span-2"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Email</div><div className="mt-2 font-semibold text-[#341d15]">{request.email}</div></div>
            </div>
          </SectionCard>

          <SectionCard title="Logement demande" eyebrow="Objet cible">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Bien</div><div className="mt-2 font-semibold text-[#341d15]">{request.propertyTitle}</div></div>
              <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Loyer</div><div className="mt-2 font-semibold text-[#341d15]">{formatCurrency(request.rent)}</div></div>
              <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Entree souhaitee</div><div className="mt-2 font-semibold text-[#341d15]">{request.moveInDate}</div></div>
            </div>
          </SectionCard>

          <SectionCard title="Situation professionnelle et financiere" eyebrow="Analyse">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#eee3da] bg-white p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Statut</div><div className="mt-2 font-semibold text-[#341d15]">{request.professionalStatus}</div><div className="mt-3 text-sm text-[#66554a]">Employeur: {request.employer}</div></div>
              <div className="rounded-2xl border border-[#eee3da] bg-white p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Revenu mensuel</div><div className="mt-2 font-semibold text-[#341d15]">{formatCurrency(request.monthlyIncome, 'sale')}</div><div className="mt-3 text-sm text-[#66554a]">Menage: {request.householdSize} personne(s)</div></div>
            </div>
          </SectionCard>

          <SectionCard title="Documents et checklist" eyebrow="Conformite">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                {request.documents.map((document) => (
                  <div key={document.label} className="flex items-center justify-between rounded-2xl bg-[#fcfaf8] p-4">
                    <span className="text-sm font-medium text-[#341d15]">{document.label}</span>
                    <StatusBadge status={document.status === 'received' ? 'complete' : 'incomplete'} />
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {request.checklist.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-[#fcfaf8] p-4">
                    <span className="text-sm font-medium text-[#341d15]">{item.label}</span>
                    <StatusBadge status={item.done ? 'complete' : 'incomplete'} />
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Notes internes et historique" eyebrow="Suivi">
            <div className="grid gap-6 xl:grid-cols-[0.44fr_0.56fr]">
              <div className="space-y-3">
                {request.notes.map((note) => (
                  <div key={note} className="rounded-2xl bg-[#fcfaf8] p-4 text-sm leading-7 text-[#66554a]">{note}</div>
                ))}
                <textarea placeholder="Ajouter une note interne..." className="min-h-[120px] w-full rounded-2xl border border-[#dfd1c6] bg-white px-4 py-3 text-sm outline-none focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]" />
              </div>
              <Timeline items={request.history} />
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <RequestDetailPanel request={request} />
          <SectionCard title="Actions rapides" eyebrow="Workflow">
            <div className="space-y-3">
              <button className="w-full rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white">Changer le statut</button>
              <button className="w-full rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20]">Assigner un gestionnaire</button>
              <button className="w-full rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20]">Marquer dossier complet</button>
              <button className="w-full rounded-full border border-[#d9b6aa] px-5 py-3 text-sm font-semibold text-[#8a3f35]">Refuser</button>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  )
}
