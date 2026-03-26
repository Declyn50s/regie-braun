import { Download, FileCheck2, UserRound } from 'lucide-react'
import { formatCurrency } from './utils'
import { StatusBadge } from './StatusBadge'
import type { RentalRequest } from '../../types/admin'

export function RequestDetailPanel({ request }: { request: RentalRequest }) {
  return (
    <aside className="rounded-[1.75rem] border border-[#d8c8bc] bg-[#4a2a20] p-6 text-white shadow-[0_24px_60px_rgba(51,28,19,0.18)] lg:sticky lg:top-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8c0b3]">Resume dossier</p>
      <h2 className="mt-3 text-2xl font-semibold">{request.candidateName}</h2>
      <p className="mt-2 text-sm text-[#f3e7df]">{request.reference}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <StatusBadge status={request.status} />
        <StatusBadge status={request.isComplete ? 'complete' : 'incomplete'} />
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="flex items-center gap-3 text-[#f2ddd0]">
            <UserRound className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">Candidat</span>
          </div>
          <p className="mt-3 text-sm text-white/90">{request.email}</p>
          <p className="mt-1 text-sm text-white/90">{request.phone}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f2ddd0]">Bien concerne</div>
          <p className="mt-3 text-sm text-white/90">{request.propertyTitle}</p>
          <p className="mt-1 text-sm text-white/80">{formatCurrency(request.rent)}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="flex items-center gap-3 text-[#f2ddd0]">
            <FileCheck2 className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">Completude</span>
          </div>
          <p className="mt-3 text-2xl font-semibold">{request.completeness}%</p>
          <p className="mt-1 text-sm text-white/80">Gestionnaire: {request.manager}</p>
        </div>
      </div>

      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]">
        <Download className="h-4 w-4" />
        Exporter le dossier
      </button>
    </aside>
  )
}

