import { Link } from 'react-router-dom'
import type { Property } from '../../types/property'
import { formatArea, formatPrice, formatRooms } from '../../utils/propertyFilters'

type PropertyCardProps = {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#e2d7cf] bg-white shadow-[0_12px_30px_rgba(60,36,24,0.06)] transition duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#4a2a20] shadow-sm">
          {property.badge}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6d5a]">{property.city}</p>
        <h3 className="mt-2 text-xl font-semibold text-[#321d15]">{property.title}</h3>
        <p className="mt-2 text-sm text-[#6d5b50]">{property.address}</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#f8f3ef] p-3">
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#8f6d5a]">Surface</div>
            <div className="mt-1 text-sm font-medium text-[#3f2b22]">{formatArea(property.area)}</div>
          </div>
          <div className="rounded-2xl bg-[#f8f3ef] p-3">
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#8f6d5a]">Pièces</div>
            <div className="mt-1 text-sm font-medium text-[#3f2b22]">{formatRooms(property.rooms)}</div>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-[#8f6d5a]">Loyer total</div>
            <div className="mt-1 text-2xl font-semibold text-[#4a2a20]">{formatPrice(property.price)}</div>
            <div className="mt-1 text-sm text-[#6d5b50]">{property.availability}</div>
          </div>
          <Link
            to="/location/bien"
            className="inline-flex rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
          >
            Voir le bien
          </Link>
        </div>
      </div>
    </article>
  )
}
