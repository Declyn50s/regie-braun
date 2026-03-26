import { Bell, Building2, FileStack, Files, Home, Mail, Settings, Users2, BriefcaseBusiness } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { adminNavigation } from '../../data/admin/mockData'
import { cn } from './utils'

const iconMap = {
  '/admin': Home,
  '/admin/demandes': FileStack,
  '/admin/biens': Building2,
  '/admin/organigramme': Users2,
  '/admin/jobs': BriefcaseBusiness,
  '/admin/messages': Mail,
  '/admin/telechargements': Files,
  '/admin/utilisateurs': BriefcaseBusiness,
  '/admin/parametres': Settings,
} as const

export function AdminSidebar({
  collapsed,
  onClose,
}: {
  collapsed: boolean
  onClose?: () => void
}) {
  return (
    <aside
      className={cn(
        'flex h-full flex-col border-r border-[#dacdc3] bg-[#f4eee8] px-4 py-5 transition-all duration-200',
        collapsed ? 'w-[96px]' : 'w-[280px]',
      )}
    >
      <div className="flex items-center gap-3 rounded-[1.5rem] bg-white px-4 py-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eadfd5] text-[#8b6a58]">
          <Bell className="h-5 w-5" />
        </div>
        {!collapsed ? (
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3b2118]">Regie Braun</div>
            <div className="text-xs text-[#7c6a5f]">Back-office admin</div>
          </div>
        ) : null}
      </div>

      <nav className="mt-6 flex-1 space-y-2">
        {adminNavigation.map((item) => {
          const Icon = iconMap[item.href]

          return (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/admin'}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-[#4a2a20] text-white shadow-[0_14px_30px_rgba(60,36,24,0.18)]'
                    : 'text-[#5f4c42] hover:bg-white hover:text-[#3b2118]',
                )
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed ? <span>{item.label}</span> : null}
            </NavLink>
          )
        })}
      </nav>

      {!collapsed ? (
        <div className="rounded-[1.5rem] border border-[#dfd1c6] bg-white p-4 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Statut</div>
          <div className="mt-2 text-sm font-semibold text-[#341d15]">Espace pret pour connexion API</div>
          <p className="mt-2 text-sm leading-7 text-[#66554a]">
            Structuree pour brancher ensuite vos services backend, roles et workflows metier.
          </p>
        </div>
      ) : null}
    </aside>
  )
}
