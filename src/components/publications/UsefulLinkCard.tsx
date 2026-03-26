import type { UsefulLink } from '../../data/publicationsData'

type UsefulLinkCardProps = {
  item: UsefulLink
}

export function UsefulLinkCard({ item }: UsefulLinkCardProps) {
  const isAvailable = Boolean(item.href)

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#e2d7cf] bg-white shadow-sm transition hover:-translate-y-1">
      <div className="grid md:grid-cols-[140px_1fr]">
        <img src={item.image} alt={item.title} className="h-36 w-full object-cover md:h-full" />
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">Lien utile</p>
          <h3 className="mt-2 text-xl font-semibold text-[#321d15]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#66554a]">{item.subtitle}</p>

          {isAvailable ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
            >
              Ouvrir le site
            </a>
          ) : (
            <span className="mt-5 inline-flex rounded-full border border-[#eaded5] bg-[#fcfaf8] px-5 py-3 text-sm font-semibold text-[#8f6d5a]">
              Lien bientôt disponible
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
