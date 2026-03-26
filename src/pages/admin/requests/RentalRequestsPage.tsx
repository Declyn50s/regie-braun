import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from '../../../components/admin/DataTable'
import { FilterBar } from '../../../components/admin/FilterBar'
import { PageHeader } from '../../../components/admin/PageHeader'
import { SearchInput } from '../../../components/admin/SearchInput'
import { StatusBadge } from '../../../components/admin/StatusBadge'
import { rentalRequests } from '../../../data/admin/mockData'
import { formatCurrency } from '../../../components/admin/utils'

export function RentalRequestsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [managerFilter, setManagerFilter] = useState('all')

  const filtered = useMemo(() => {
    return rentalRequests.filter((request) => {
      const matchesSearch =
        [request.reference, request.candidateName, request.propertyTitle].join(' ').toLowerCase().includes(search.toLowerCase())
      const matchesStatus = statusFilter === 'all' || request.status === statusFilter
      const matchesManager = managerFilter === 'all' || request.manager === managerFilter
      return matchesSearch && matchesStatus && matchesManager
    })
  }, [search, statusFilter, managerFilter])

  return (
    <div>
      <PageHeader
        eyebrow="Demandes"
        title="Demandes de location"
        description="Pipeline locatif lisible avec filtres fixes, suivi du dossier et actions rapides sur chaque candidature."
      />

      <FilterBar alignRight={<div className="text-sm text-[#6d5a50]">{filtered.length} demande(s)</div>}>
        <SearchInput value={search} onChange={setSearch} placeholder="Reference, candidat, bien..." />
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-full border border-[#dfd1c6] bg-white px-4 py-2.5 text-sm">
          <option value="all">Tous statuts</option>
          <option value="new">Nouveau</option>
          <option value="to-review">A verifier</option>
          <option value="incomplete">Incomplet</option>
          <option value="analysis">En analyse</option>
          <option value="decision-pending">En attente</option>
        </select>
        <select value={managerFilter} onChange={(event) => setManagerFilter(event.target.value)} className="rounded-full border border-[#dfd1c6] bg-white px-4 py-2.5 text-sm">
          <option value="all">Tous gestionnaires</option>
          {[...new Set(rentalRequests.map((request) => request.manager))].map((manager) => (
            <option key={manager} value={manager}>
              {manager}
            </option>
          ))}
        </select>
      </FilterBar>

      <DataTable headers={['Date', 'Reference', 'Candidat', 'Bien', 'Loyer', 'Completude', 'Statut', 'Gestionnaire', 'Derniere action']}>
        {filtered.map((request) => (
          <tr key={request.id} className="hover:bg-[#fcfaf8]">
            <td className="px-4 py-3 text-sm text-[#66554a]">{request.submittedAt}</td>
            <td className="px-4 py-3">
              <Link to={`/admin/demandes/${request.id}`} className="font-semibold text-[#341d15]">
                {request.reference}
              </Link>
            </td>
            <td className="px-4 py-3 text-sm">
              <div className="font-semibold text-[#341d15]">{request.candidateName}</div>
              <div className="text-[#6f5d52]">{request.email}</div>
            </td>
            <td className="px-4 py-3 text-sm text-[#66554a]">
              {request.propertyTitle}
              <div className="text-xs uppercase tracking-[0.12em] text-[#8c6a58]">{request.propertyCity}</div>
            </td>
            <td className="px-4 py-3 text-sm text-[#341d15]">{formatCurrency(request.rent)}</td>
            <td className="px-4 py-3 text-sm">
              <div className="font-semibold text-[#341d15]">{request.completeness}%</div>
              <div className="mt-1 h-2 w-24 rounded-full bg-[#efe4dc]">
                <div className="h-2 rounded-full bg-[#8f6a56]" style={{ width: `${request.completeness}%` }} />
              </div>
            </td>
            <td className="px-4 py-3"><StatusBadge status={request.status} /></td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{request.manager}</td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{request.lastAction}</td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
