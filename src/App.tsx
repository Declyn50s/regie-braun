import { Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { AdminLayout } from './components/admin/AdminLayout'
import { AboutPage } from './pages/about/AboutPage'
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage'
import { AdminDownloadsPage } from './pages/admin/AdminDownloadsPage'
import { AdminJobsPage } from './pages/admin/AdminJobsPage'
import { AdminMessagesPage } from './pages/admin/AdminMessagesPage'
import { AdminOrganigramPage } from './pages/admin/AdminOrganigramPage'
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage'
import { AdminUsersPage } from './pages/admin/AdminUsersPage'
import { AdminPropertyCreatePage } from './pages/admin/properties/AdminPropertyCreatePage'
import { AdminPropertyDetailPage } from './pages/admin/properties/AdminPropertyDetailPage'
import { AdminPropertiesPage } from './pages/admin/properties/AdminPropertiesPage'
import { RentalRequestDetailPage } from './pages/admin/requests/RentalRequestDetailPage'
import { RentalRequestsPage } from './pages/admin/requests/RentalRequestsPage'
import { ContactPage } from './pages/contact/ContactPage'
import { DownloadsPage } from './pages/downloads/DownloadsPage'
import { GerancePage } from './pages/gerance/GerancePage'
import { GuidePage } from './pages/guide/GuidePage'
import { HomePage } from './pages/home/HomePage'
import { JobsPage } from './pages/jobs/JobsPage'
import { LegalPage } from './pages/legal/LegalPage'
import { LocationPage } from './pages/location/LocationPage'
import { PropertyDetailPage } from './pages/location/PropertyDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PublicationsPage } from './pages/publications/PublicationsPage'
import { RentalApplicationPage } from './pages/rental-application/RentalApplicationPage'
import { RsePage } from './pages/rse/RsePage'
import { SalesPage } from './pages/sales/SalesPage'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="demandes" element={<RentalRequestsPage />} />
          <Route path="demandes/:id" element={<RentalRequestDetailPage />} />
          <Route path="biens" element={<AdminPropertiesPage />} />
          <Route path="biens/nouveau" element={<AdminPropertyCreatePage />} />
          <Route path="biens/:id" element={<AdminPropertyDetailPage />} />
          <Route path="organigramme" element={<AdminOrganigramPage />} />
          <Route path="jobs" element={<AdminJobsPage />} />
          <Route path="messages" element={<AdminMessagesPage />} />
          <Route path="telechargements" element={<AdminDownloadsPage />} />
          <Route path="utilisateurs" element={<AdminUsersPage />} />
          <Route path="parametres" element={<AdminSettingsPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/location/bien" element={<PropertyDetailPage />} />
        <Route path="/demande-location" element={<RentalApplicationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gerance" element={<GerancePage />} />
        <Route path="/la-regie" element={<AboutPage />} />
        <Route path="/guide-du-locataire" element={<GuidePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/mentions-legales-confidentialite" element={<LegalPage />} />
        <Route path="/vente" element={<SalesPage />} />
        <Route path="/telechargements" element={<DownloadsPage />} />
        <Route path="/rse" element={<RsePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  )
}
