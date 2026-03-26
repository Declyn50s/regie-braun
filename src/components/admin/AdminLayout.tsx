import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AdminSidebar } from './AdminSidebar'
import { AdminTopbar } from './AdminTopbar'
import { cn } from './utils'

export function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <AdminSidebar collapsed={collapsed} />
        </div>

        <div className="flex-1">
          <AdminTopbar onToggleSidebar={() => setCollapsed((value) => !value)} />
          <main className="px-4 py-5 md:px-6 lg:px-8">
            <div className={cn('mx-auto', collapsed ? 'max-w-[1440px]' : 'max-w-[1480px]')}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
