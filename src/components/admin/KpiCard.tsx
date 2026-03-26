export function KpiCard({
  label,
  value,
  trend,
  tone,
}: {
  label: string
  value: string
  trend: string
  tone: 'sand' | 'rose' | 'ivory' | 'cream'
}) {
  const toneMap = {
    sand: 'bg-[#f4ede7]',
    rose: 'bg-[#f5eae5]',
    ivory: 'bg-[#faf6f2]',
    cream: 'bg-[#f2ece3]',
  }

  return (
    <article className={`rounded-[1.5rem] border border-[#e3d8cf] p-5 shadow-sm ${toneMap[tone]}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{label}</p>
      <div className="mt-4 text-3xl font-semibold text-[#331f17]">{value}</div>
      <p className="mt-2 text-sm text-[#69584d]">{trend}</p>
    </article>
  )
}

