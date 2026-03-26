import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function PageHeader({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  eyebrow?: string
  title: string
  description?: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: ReactNode
}) {
  return (
    <header className="mb-6 flex flex-col gap-4 border-b border-[#e4d8cf] pb-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6a58]">{eyebrow}</p> : null}
        <h1 className="mt-2 text-3xl font-semibold text-[#2f1e17] md:text-4xl">{title}</h1>
        {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-[#66554a] md:text-base">{description}</p> : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {secondaryAction}
        {primaryAction ? (
          <Link
            to={primaryAction.href}
            className="inline-flex items-center rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
          >
            {primaryAction.label}
          </Link>
        ) : null}
      </div>
    </header>
  )
}
