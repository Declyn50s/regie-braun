type ReviewSectionCardProps = {
  title: string
  description: string
  onEdit: () => void
  rows: Array<{ label: string; value: string }>
}

export function ReviewSectionCard({ title, description, onEdit, rows }: ReviewSectionCardProps) {
  return (
    <section className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{description}</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#321d15]">{title}</h3>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="rounded-full border border-[#cdb9ac] px-4 py-2 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
        >
          Modifier
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label} className="rounded-2xl bg-[#f8f3ef] p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-[#8f6d5a]">{row.label}</div>
            <div className="mt-2 text-sm font-medium text-[#3f2b22]">{row.value || '—'}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
