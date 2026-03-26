export function Timeline({
  items,
}: {
  items: Array<{ id: string; title: string; detail: string; timestamp: string; author?: string }>
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="relative rounded-[1.25rem] border border-[#eadfd5] bg-[#fcfaf8] p-4 pl-6">
          <div className="absolute left-3 top-5 h-2.5 w-2.5 rounded-full bg-[#8f6a56]" />
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-[#341f16]">{item.title}</p>
              <p className="mt-1 text-sm leading-7 text-[#67564b]">{item.detail}</p>
            </div>
            <div className="text-xs uppercase tracking-[0.12em] text-[#8c6a58]">
              {item.author ? `${item.author} · ` : ''}
              {item.timestamp}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

