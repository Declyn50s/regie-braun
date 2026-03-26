type DepartmentCardProps = {
  item: {
    title: string
    intro: string
    text: string
    strengths: string[]
  }
}

export function DepartmentCard({ item }: DepartmentCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{item.intro}</p>
      <h3 className="mt-3 text-2xl font-semibold text-[#321d15]">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#66554a]">{item.text}</p>
      <div className="mt-5 rounded-[1.25rem] bg-[#f8f3ef] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">Nos forces</p>
        <div className="mt-3 space-y-2.5">
          {item.strengths.map((strength) => (
            <div key={strength} className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8f6a56]" />
              <p className="text-sm leading-7 text-[#5d4b40]">{strength}</p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="/contact"
        className="mt-5 inline-flex rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
      >
        Nous contacter
      </a>
    </article>
  )
}
