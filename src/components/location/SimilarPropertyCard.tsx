import { Link } from 'react-router-dom'
import type { SimilarProperty } from '../../types/property'

type SimilarPropertyCardProps = {
  property: SimilarProperty
}

export function SimilarPropertyCard({ property }: SimilarPropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#e2d7cf] bg-white shadow-sm transition hover:-translate-y-1">
      <img src={property.image} alt={property.title} className="h-52 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">{property.location}</p>
        <h4 className="mt-2 text-lg font-semibold text-[#321d15]">{property.title}</h4>
        <div className="mt-4 flex items-center justify-between text-sm text-[#6c5b50]">
          <span>À louer</span>
          <span className="font-semibold text-[#4a2a20]">{property.price}</span>
        </div>
        <Link
          to="/location/bien"
          className="mt-4 inline-flex w-full justify-center rounded-full border border-[#cdb9ac] px-4 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
        >
          Voir le bien
        </Link>
      </div>
    </article>
  )
}
