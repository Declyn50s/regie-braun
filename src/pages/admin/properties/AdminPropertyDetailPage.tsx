import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { EmptyState } from '../../../components/admin/EmptyState'
import { PageHeader } from '../../../components/admin/PageHeader'
import { SimplePropertyEditor } from '../../../components/admin/SimplePropertyEditor'
import { properties } from '../../../data/admin/mockData'

export function AdminPropertyDetailPage() {
  const { id } = useParams()
  const property = useMemo(() => properties.find((item) => item.id === id), [id])

  if (!property) {
    return <EmptyState title="Bien introuvable" description="Le bien demande n est pas present dans les donnees de demonstration." />
  }

  return (
    <div>
      <PageHeader eyebrow="Edition bien" title={`${property.title} - ${property.reference}`} description="Fiche admin simplifiee pour l edition quotidienne, avec resume protege et actions claires." />
      <SimplePropertyEditor property={property} />
    </div>
  )
}
