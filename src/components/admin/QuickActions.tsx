import { Link } from 'react-router-dom'

export function QuickActions({
  actions,
}: {
  actions: Array<{ label: string; detail: string; href: string }>
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {actions.map((action) => (
        <Link
          key={action.label}
          to={action.href}
          className="rounded-[1.5rem] border border-[#e2d7cf] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#cfb9ac]"
        >
          <div className="text-base font-semibold text-[#321d15]">{action.label}</div>
          <p className="mt-2 text-sm leading-7 text-[#66554a]">{action.detail}</p>
        </Link>
      ))}
    </div>
  )
}

