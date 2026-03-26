import { PageHeader } from '../../components/admin/PageHeader'
import { SectionCard } from '../../components/admin/SectionCard'
import { StatusBadge } from '../../components/admin/StatusBadge'
import { teamMembers } from '../../data/admin/mockData'

export function AdminOrganigramPage() {
  return (
    <div>
      <PageHeader eyebrow="Organigramme" title="Equipe et organigramme" description="Gestion simple des collaborateurs, de leur ordre d affichage et de leur statut de publication." />

      <div className="grid gap-6 xl:grid-cols-[0.58fr_0.42fr]">
        <SectionCard title="Vue liste" description="Edition rapide des informations metier, de l ordre et de l activation.">
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="grid gap-4 rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-4 lg:grid-cols-[80px_1fr_auto] lg:items-center">
                <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} className="h-20 w-20 rounded-2xl object-cover" />
                <div>
                  <div className="text-lg font-semibold text-[#321d15]">{member.firstName} {member.lastName}</div>
                  <div className="mt-1 text-sm text-[#66554a]">{member.role} · {member.department}</div>
                  <div className="mt-2 text-sm text-[#6f5d52]">{member.email} · {member.phone}</div>
                </div>
                <div className="space-y-2">
                  <StatusBadge status={member.isActive ? 'active' : 'disabled'} />
                  <div className="text-xs uppercase tracking-[0.12em] text-[#8c6a58]">Ordre {member.displayOrder}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Preview organigramme" description="Lecture visuelle de la structure publiee cote site.">
          <div className="grid gap-4">
            {teamMembers
              .slice()
              .sort((a, b) => a.displayOrder - b.displayOrder)
              .map((member) => (
                <div key={member.id} className="rounded-[1.5rem] border border-[#e2d7cf] bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} className="h-16 w-16 rounded-2xl object-cover" />
                    <div>
                      <div className="font-semibold text-[#321d15]">{member.firstName} {member.lastName}</div>
                      <div className="text-sm text-[#66554a]">{member.role}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8c6a58]">{member.department}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}

