import type { PropertyStat } from '../../types/property'

type InfoGridProps = {
  title: string
  items: PropertyStat[]
}

export function InfoGrid({ title, items }: InfoGridProps) {
  return (
    <section className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#321d15]">{title}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl bg-[#f8f3ef] p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">
              {item.label}
            </div>
            <div className="mt-2 text-sm font-medium text-[#3f2b22]">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
