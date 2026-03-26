type RseSectionCardProps = {
  item: {
    title: string
    intro?: string
    text: string
    points: string[]
  }
}

export function RseSectionCard({ item }: RseSectionCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-7 shadow-sm">
      {item.intro ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{item.intro}</p>
      ) : null}
      <h3 className="mt-3 text-2xl font-semibold text-[#321d15]">{item.title}</h3>
      <p className="mt-4 text-sm leading-8 text-[#66554a]">{item.text}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {item.points.map((point) => (
          <div key={point} className="rounded-2xl bg-[#f8f3ef] p-4 text-sm leading-7 text-[#5d4b40]">
            {point}
          </div>
        ))}
      </div>
    </article>
  )
}
