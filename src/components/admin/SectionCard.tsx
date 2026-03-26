import type { ReactNode } from 'react'

export function SectionCard({
  title,
  eyebrow,
  description,
  action,
  children,
  className = '',
}: {
  title: string
  eyebrow?: string
  description?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`rounded-[1.75rem] border border-[#e2d7cf] bg-white p-5 shadow-sm ${className}`}>
      <div className="mb-4 flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between">
        <div>
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6a58]">{eyebrow}</p> : null}
          <h2 className="mt-1.5 text-xl font-semibold text-[#311d16] md:text-2xl">{title}</h2>
          {description ? <p className="mt-1.5 max-w-3xl text-sm leading-6 text-[#66554a]">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  )
}
