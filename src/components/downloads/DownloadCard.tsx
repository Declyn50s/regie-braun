type DownloadCardProps = {
  document: {
    title: string
    description: string
    format: string
    size: string
    category: string
    icon: string
    href: string
  }
}

export function DownloadCard({ document }: DownloadCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-[#e2d7cf] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(60,36,24,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ede7] text-xs font-semibold tracking-[0.14em] text-[#4a2a20]">
            {document.icon}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6d5a]">{document.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#321d15]">{document.title}</h3>
          </div>
        </div>
        <span className="rounded-full border border-[#ddd1c6] bg-[#fcfaf8] px-3 py-1.5 text-xs font-semibold text-[#6a564b]">
          {document.format}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#66554a]">{document.description}</p>

      <div className="mt-5 flex flex-col gap-3 border-t border-[#efe6df] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-[#6b594e]">
          <span className="rounded-full bg-[#f8f3ef] px-3 py-2 font-medium">Fichier {document.format}</span>
          <span>{document.size}</span>
        </div>
        <a
          href={document.href}
          target="_blank"
          rel="noreferrer"
          download
          className="inline-flex rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
        >
          Télécharger
        </a>
      </div>
    </article>
  )
}
