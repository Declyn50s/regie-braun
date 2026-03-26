import type { ReactNode } from 'react'

export function DataTable({
  headers,
  children,
}: {
  headers: string[]
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#e2d7cf] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#efe6df]">
          <thead className="bg-[#faf6f2]">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-[#816d62]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1e9e2]">{children}</tbody>
        </table>
      </div>
    </div>
  )
}
