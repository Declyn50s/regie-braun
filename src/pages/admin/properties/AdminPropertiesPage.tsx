import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from '../../../components/admin/DataTable'
import { FilterBar } from '../../../components/admin/FilterBar'
import { PageHeader } from '../../../components/admin/PageHeader'
import { SearchInput } from '../../../components/admin/SearchInput'
import { StatusBadge } from '../../../components/admin/StatusBadge'
import { properties } from '../../../data/admin/mockData'
import { formatCurrency } from '../../../components/admin/utils'

export function AdminPropertiesPage() {
  const [search, setSearch] = useState('')
  const [transactionFilter, setTransactionFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch = [property.title, property.reference, property.city].join(' ').toLowerCase().includes(search.toLowerCase())
      const matchesTransaction = transactionFilter === 'all' || property.transaction === transactionFilter
      const matchesStatus = statusFilter === 'all' || property.status === statusFilter
      return matchesSearch && matchesTransaction && matchesStatus
    })
  }, [search, transactionFilter, statusFilter])

  return (
    <div>
      <PageHeader
        eyebrow="Biens"
        title="Gestion des annonces"
        description="Vue unifiee pour piloter les biens a louer, a vendre et leurs statuts de publication."
        primaryAction={{ label: 'Ajouter un bien', href: '/admin/biens/nouveau' }}
      />

      <FilterBar alignRight={<div className="text-sm text-[#6d5a50]">{filtered.length} bien(s)</div>}>
        <SearchInput value={search} onChange={setSearch} placeholder="Titre, reference, ville..." />
        <select value={transactionFilter} onChange={(event) => setTransactionFilter(event.target.value)} className="rounded-full border border-[#dfd1c6] bg-white px-4 py-2.5 text-sm">
          <option value="all">Location + Vente</option>
          <option value="location">Location</option>
          <option value="sale">Vente</option>
        </select>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-full border border-[#dfd1c6] bg-white px-4 py-2.5 text-sm">
          <option value="all">Tous statuts</option>
          <option value="draft">Brouillon</option>
          <option value="published">Publie</option>
          <option value="reserved">Reserve</option>
          <option value="rented">Loue</option>
          <option value="sold">Vendu</option>
        </select>
      </FilterBar>

      <DataTable headers={['Photo', 'Titre', 'Reference', 'Transaction', 'Type', 'Ville', 'Prix / Loyer', 'Pieces', 'Surface', 'Statut', 'Visibilite', 'Maj']}>
        {filtered.map((property) => (
          <tr key={property.id} className="hover:bg-[#fcfaf8]">
            <td className="px-4 py-3">
              <div className="h-14 w-20 overflow-hidden rounded-xl bg-[#efe4dc]">
                {property.heroImage ? <img src={property.heroImage} alt={property.title} className="h-full w-full object-cover" /> : null}
              </div>
            </td>
            <td className="px-4 py-3">
              <Link to={`/admin/biens/${property.id}`} className="font-semibold text-[#341d15]">
                {property.title}
              </Link>
            </td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.reference}</td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.transaction === 'location' ? 'Location' : 'Vente'}</td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.type}</td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.city}</td>
            <td className="px-4 py-3 text-sm font-semibold text-[#341d15]">{formatCurrency(property.price, property.transaction)}</td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.rooms}</td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.surface} m2</td>
            <td className="px-4 py-3"><StatusBadge status={property.status} /></td>
            <td className="px-4 py-3"><StatusBadge status={property.visibility} /></td>
            <td className="px-4 py-3 text-sm text-[#66554a]">{property.updatedAt}</td>
          </tr>
        ))}
      </DataTable>
    </div>
  )
}
