import { PageHeader } from '../../../components/admin/PageHeader'
import { PropertyForm } from '../../../components/admin/PropertyForm'

export function AdminPropertyCreatePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Biens"
        title="Nouveau bien"
        description="Creation d une annonce structuree avec sections claires, options de publication et preparation media."
      />
      <PropertyForm />
    </div>
  )
}

