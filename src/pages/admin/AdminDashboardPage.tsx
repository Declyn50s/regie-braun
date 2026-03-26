import { Link } from 'react-router-dom'
import { adminAlerts, adminKpis, recentActivity } from '../../data/admin/mockData'
import { KpiCard } from '../../components/admin/KpiCard'
import { PageHeader } from '../../components/admin/PageHeader'
import { QuickActions } from '../../components/admin/QuickActions'
import { SectionCard } from '../../components/admin/SectionCard'
import { Timeline } from '../../components/admin/Timeline'

const quickActions = [
  { label: 'Ajouter un bien', detail: 'Creer une nouvelle annonce location ou vente.', href: '/admin/biens/nouveau' },
  { label: 'Traiter une demande', detail: 'Aller vers le pipeline des dossiers locatifs.', href: '/admin/demandes' },
  { label: 'Modifier l organigramme', detail: 'Mettre a jour un collaborateur ou l ordre d affichage.', href: '/admin/organigramme' },
  { label: 'Ajouter un document', detail: 'Publier un nouveau PDF telechargeable.', href: '/admin/telechargements' },
]

export function AdminDashboardPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Back-office"
        title="Pilotage operationnel de la regie"
        description="Vue synthese pour suivre les demandes, les biens, les messages et les contenus sensibles sans surcharger l equipe."
        primaryAction={{ label: 'Nouveau bien', href: '/admin/biens/nouveau' }}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
        {adminKpis.map((kpi) => (
          <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} tone={kpi.tone} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Activité récente" description="Les derniers mouvements importants a surveiller dans l espace admin.">
          <Timeline items={recentActivity.map((item) => ({ ...item, author: undefined }))} />
        </SectionCard>

        <SectionCard title="Raccourcis utiles" description="Actions frequentes accessibles en un clic.">
          <QuickActions actions={quickActions} />
        </SectionCard>
      </div>

      <div className="mt-8">
        <SectionCard title="Alertes et points de vigilance" description="Elements qui necessitent une intervention ou une verification rapide.">
          <div className="grid gap-4 lg:grid-cols-2">
            {adminAlerts.map((alert) => (
              <div key={alert.id} className="rounded-[1.5rem] border border-[#e6dad1] bg-[#fcfaf8] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-[#321d15]">{alert.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[#66554a]">{alert.detail}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                      alert.severity === 'high'
                        ? 'bg-[#f8e3df] text-[#a14d3d]'
                        : alert.severity === 'medium'
                          ? 'bg-[#f7eedc] text-[#8c6834]'
                          : 'bg-[#efeae5] text-[#6d5a50]'
                    }`}
                  >
                    {alert.severity}
                  </span>
                </div>
                <Link to={alert.actionHref} className="mt-4 inline-flex text-sm font-semibold text-[#4a2a20]">
                  {alert.actionLabel}
                </Link>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}

