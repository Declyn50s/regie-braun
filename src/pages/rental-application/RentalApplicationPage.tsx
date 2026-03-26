import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { RentalApplicationForm } from '../../components/rental-application/RentalApplicationForm'

export function RentalApplicationPage() {
  return (
    <div className="bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/location" />
      <SiteBreadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Louer', href: '/location' },
          { label: 'Demande de location' },
        ]}
      />
      <RentalApplicationForm />
      <SiteFooter />
    </div>
  )
}
