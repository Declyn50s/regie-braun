import { useMemo, useState } from 'react'
import { DataTable } from '../../components/admin/DataTable'
import { FilterBar } from '../../components/admin/FilterBar'
import { PageHeader } from '../../components/admin/PageHeader'
import { SearchInput } from '../../components/admin/SearchInput'
import { SectionCard } from '../../components/admin/SectionCard'
import { StatusBadge } from '../../components/admin/StatusBadge'
import { Timeline } from '../../components/admin/Timeline'
import { contactMessages } from '../../data/admin/mockData'

export function AdminMessagesPage() {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState(contactMessages[0]?.id ?? '')
  const filtered = useMemo(
    () =>
      contactMessages.filter((message) =>
        [message.name, message.subject, message.email].join(' ').toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  )
  const selected = filtered.find((item) => item.id === selectedId) ?? filtered[0]

  return (
    <div>
      <PageHeader eyebrow="Messages" title="Messages entrants" description="Tri, lecture et assignation des messages de contact dans une interface simple pour les equipes non techniques." />

      <FilterBar>
        <SearchInput value={search} onChange={setSearch} placeholder="Nom, sujet, email..." />
      </FilterBar>

      <div className="grid gap-6 xl:grid-cols-[0.56fr_0.44fr]">
        <DataTable headers={['Date', 'Nom', 'Email', 'Sujet', 'Extrait', 'Statut', 'Assignation']}>
          {filtered.map((message) => (
            <tr key={message.id} className="cursor-pointer hover:bg-[#fcfaf8]" onClick={() => setSelectedId(message.id)}>
              <td className="px-4 py-4 text-sm text-[#66554a]">{message.submittedAt}</td>
              <td className="px-4 py-4 font-semibold text-[#341d15]">{message.name}</td>
              <td className="px-4 py-4 text-sm text-[#66554a]">{message.email}</td>
              <td className="px-4 py-4 text-sm text-[#341d15]">{message.subject}</td>
              <td className="px-4 py-4 text-sm text-[#66554a]">{message.excerpt}</td>
              <td className="px-4 py-4"><StatusBadge status={message.status} /></td>
              <td className="px-4 py-4 text-sm text-[#66554a]">{message.assignee}</td>
            </tr>
          ))}
        </DataTable>

        {selected ? (
          <SectionCard title={selected.subject} eyebrow="Detail message" description={`Recu le ${selected.submittedAt} par ${selected.name}`}>
            <div className="space-y-5">
              <div className="rounded-2xl bg-[#fcfaf8] p-4 text-sm leading-7 text-[#66554a]">{selected.message}</div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Email</div><div className="mt-2 font-semibold text-[#341d15]">{selected.email}</div></div>
                <div className="rounded-2xl bg-[#fcfaf8] p-4"><div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">Assignation</div><div className="mt-2 font-semibold text-[#341d15]">{selected.assignee}</div></div>
              </div>
              <Timeline items={selected.history.map((item) => ({ ...item, title: item.label, detail: '', author: undefined }))} />
            </div>
          </SectionCard>
        ) : null}
      </div>
    </div>
  )
}

