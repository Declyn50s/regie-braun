type GuideSectionCardProps = {
  section: {
    id: string
    title: string
    short: string
    content: string
    bullets: string[]
  }
}

export function GuideSectionCard({ section }: GuideSectionCardProps) {
  return (
    <article id={section.id} className="scroll-mt-24 rounded-[1.75rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{section.short}</p>
      <h3 className="mt-3 text-2xl font-semibold text-[#321d15]">{section.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#66554a]">{section.content}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {section.bullets.map((item) => (
          <div key={item} className="rounded-2xl bg-[#f8f3ef] p-4 text-sm leading-7 text-[#5d4b40]">
            {item}
          </div>
        ))}
      </div>
    </article>
  )
}
