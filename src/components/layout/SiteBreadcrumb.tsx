import { Link } from 'react-router-dom'

type BreadcrumbItem = {
  label: string
  href?: string
}

type SiteBreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function SiteBreadcrumb({ items }: SiteBreadcrumbProps) {
  return (
    <div className="border-b border-[#e3d8cf] bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-[#7e6c61] lg:px-10">
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <div key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span>/</span> : null}
              {item.href ? (
                <Link
                  to={item.href}
                  className="transition hover:text-[#4a2a20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#4a2a20]">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
