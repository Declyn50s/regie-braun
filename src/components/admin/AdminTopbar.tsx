import { BellDot, ChevronRight, Menu, Search, UserCircle2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { adminNavigation } from '../../data/admin/mockData'

function breadcrumbLabel(pathname: string) {
  const direct = adminNavigation.find((item) => pathname === item.href)
  if (direct) return direct.label

  if (pathname.startsWith('/admin/demandes/')) return 'Detail demande'
  if (pathname === '/admin/biens/nouveau') return 'Nouveau bien'
  if (pathname.startsWith('/admin/biens/')) return 'Edition bien'

  return 'Administration'
}

export function AdminTopbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void
}) {
  const location = useLocation()

  return (
    <div className="sticky top-0 z-20 border-b border-[#e3d8cf] bg-[#f7f3ef]/90 px-5 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c8bc] bg-white text-[#4a2a20] shadow-sm transition hover:bg-[#f8f3ef]"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8c6a58]">
              <Link to="/admin">Admin</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{breadcrumbLabel(location.pathname)}</span>
            </div>
            <div className="mt-1 text-lg font-semibold text-[#331f17]">{breadcrumbLabel(location.pathname)}</div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative block min-w-[260px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8c6a58]" />
            <input
              placeholder="Recherche globale, reference, nom, contenu..."
              className="w-full rounded-full border border-[#dfd1c6] bg-white px-11 py-3 text-sm text-[#3d2a21] outline-none transition focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]"
            />
          </label>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c8bc] bg-white text-[#4a2a20] shadow-sm">
            <BellDot className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 rounded-full border border-[#d8c8bc] bg-white px-4 py-2 shadow-sm">
            <UserCircle2 className="h-8 w-8 text-[#8b6a58]" />
            <div className="text-sm">
              <div className="font-semibold text-[#341d15]">Philippe Braun</div>
              <div className="text-[#6f5d52]">Super admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

