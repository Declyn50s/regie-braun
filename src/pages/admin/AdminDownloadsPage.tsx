import { PageHeader } from '../../components/admin/PageHeader'
import { SectionCard } from '../../components/admin/SectionCard'
import { StatusBadge } from '../../components/admin/StatusBadge'
import { downloads } from '../../data/admin/mockData'

export function AdminDownloadsPage() {
  return (
    <div>
      <PageHeader eyebrow="Téléchargements" title="Bibliothèque documentaire" description="Gestion sobre des PDF publics ou réservés, avec categories, ordre et visibilité." />

      <SectionCard title="Documents" description="Catalogue documentaire pret à être branché à un stockage distant ou à un CMS media.">
        <div className="space-y-4">
          {downloads.map((item) => (
            <div key={item.id} className="grid gap-4 rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5 lg:grid-cols-[1fr_160px_120px_120px] lg:items-center">
              <div>
                <div className="text-base font-semibold text-[#321d15]">{item.title}</div>
                <p className="mt-2 text-sm leading-7 text-[#66554a]">{item.description}</p>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-[#8c6a58]">{item.category} · {item.fileName}</div>
              </div>
              <div className="text-sm text-[#66554a]">Ordre {item.order}</div>
              <div><StatusBadge status={item.visibility} /></div>
              <div className="text-sm text-[#66554a]">{item.updatedAt}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

