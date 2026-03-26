import { PageHeader } from '../../components/admin/PageHeader'
import { SectionCard } from '../../components/admin/SectionCard'
import { StatusBadge } from '../../components/admin/StatusBadge'
import { adminUsers, roleLabels } from '../../data/admin/mockData'

export function AdminUsersPage() {
  return (
    <div>
      <PageHeader eyebrow="Utilisateurs" title="Acces et roles" description="Gestion des comptes admin, de leur role metier et de leur statut d activation." />

      <SectionCard title="Utilisateurs actifs et invites" description="Base de roles minimale et lisible pour piloter les permissions avant branchement backend.">
        <div className="space-y-4">
          {adminUsers.map((user) => (
            <div key={user.id} className="grid gap-4 rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5 lg:grid-cols-[1fr_220px_160px_120px] lg:items-center">
              <div>
                <div className="text-base font-semibold text-[#321d15]">{user.name}</div>
                <div className="mt-1 text-sm text-[#66554a]">{user.email}</div>
              </div>
              <div><StatusBadge status={user.role} /></div>
              <div><StatusBadge status={user.status} /></div>
              <div className="text-sm text-[#66554a]">{user.lastLogin}</div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Roles disponibles" description="Reference fonctionnelle des profils actuellement configures.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {Object.entries(roleLabels).map(([role, label]) => (
            <div key={role} className="rounded-[1.5rem] border border-[#eadfd5] bg-white p-5 shadow-sm">
              <StatusBadge status={role as keyof typeof roleLabels} />
              <div className="mt-3 text-base font-semibold text-[#321d15]">{label}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

