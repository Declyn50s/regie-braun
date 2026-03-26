import type { ReactNode } from 'react'

export function FilterBar({
  children,
  alignRight,
}: {
  children: ReactNode
  alignRight?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 rounded-[1.5rem] border border-[#e2d7cf] bg-[#fcfaf8] p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-3">{children}</div>
      {alignRight ? <div className="flex flex-wrap items-center gap-3">{alignRight}</div> : null}
    </div>
  )
}

