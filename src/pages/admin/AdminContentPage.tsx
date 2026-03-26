import { PageHeader } from '../../components/admin/PageHeader'
import { SectionCard } from '../../components/admin/SectionCard'
import { StatusBadge } from '../../components/admin/StatusBadge'
import { cmsPages } from '../../data/admin/mockData'

export function AdminContentPage() {
  return (
    <div>
      <PageHeader eyebrow="Contenus" title="Contenus institutionnels" description="Edition par sections pour les pages cles du site sans exposer des champs techniques inutiles." />

      <div className="grid gap-6">
        {cmsPages.map((page) => (
          <SectionCard
            key={page.id}
            title={page.title}
            eyebrow={page.slug}
            description={`Derniere mise a jour ${page.updatedAt} · Responsable ${page.owner}`}
            action={<StatusBadge status={page.status} />}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {page.sections.map((section) => (
                <div key={section.id} className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-5">
                  <div className="text-base font-semibold text-[#321d15]">{section.label}</div>
                  <p className="mt-2 text-sm leading-7 text-[#66554a]">{section.description}</p>
                  <div className="mt-4 space-y-3">
                    {section.fields.map((field) => (
                      <div key={field.id} className="rounded-2xl bg-white p-4">
                        <div className="text-xs uppercase tracking-[0.14em] text-[#8c6a58]">{field.label}</div>
                        <div className="mt-2 text-sm leading-7 text-[#341d15]">{field.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  )
}
