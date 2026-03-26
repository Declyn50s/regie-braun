import type { ReactNode } from 'react'

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-[#d9cbc0] bg-[#fcfaf8] px-6 py-10 text-center">
      <h3 className="text-xl font-semibold text-[#321d15]">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#67564b]">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  )
}

