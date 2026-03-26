import type { PressArticle } from '../../data/publicationsData'

type PressCardProps = {
  article: PressArticle
}

export function PressCard({ article }: PressCardProps) {
  const hasArticleLink = Boolean(article.href)

  return (
    <article className="rounded-[1.5rem] border border-[#e2d7cf] bg-white p-5 shadow-sm transition hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#f4ede7] px-3 py-1.5 text-xs font-semibold text-[#8f6d5a]">
          {article.date}
        </span>
        <span className="rounded-full border border-[#ddd1c6] px-3 py-1.5 text-xs font-semibold text-[#6a564b]">
          {article.category}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#321d15]">{article.title}</h3>
      <p className="mt-3 text-sm leading-8 text-[#66554a]">{article.description}</p>

      {hasArticleLink ? (
        <a
          href={article.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
        >
          Lire l&apos;article
        </a>
      ) : (
        <span className="mt-5 inline-flex rounded-full border border-[#eaded5] bg-[#fcfaf8] px-5 py-3 text-sm font-semibold text-[#8f6d5a]">
          Référence presse disponible sur demande
        </span>
      )}
    </article>
  )
}
