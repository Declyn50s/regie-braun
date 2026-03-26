import { Link } from 'react-router-dom'
import type { PropertyStat } from '../../types/property'

type PropertySummaryCardProps = {
  price: string
  stats: PropertyStat[]
  applicationHref?: string
}

export function PropertySummaryCard({
  price,
  stats,
  applicationHref = '/demande-location',
}: PropertySummaryCardProps) {
  return (
    <section className="rounded-[2rem] border border-[#d8c8bc] bg-[#4a2a20] p-7 text-white shadow-[0_24px_60px_rgba(51,28,19,0.18)]">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Résumé</p>
      <div className="mt-4 text-4xl font-semibold">{price}</div>
      <div className="mt-1 text-sm text-[#f3e7df]">Loyer total mensuel</div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#e7d3c7]">{item.label}</div>
            <div className="mt-2 text-sm font-medium text-white">{item.value}</div>
          </div>
        ))}
      </div>

      <Link
        to={applicationHref}
        className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a2a20]"
      >
        Continuer la demande
      </Link>
      <Link
        to="/contact"
        className="mt-3 inline-flex w-full justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a2a20]"
      >
        Contacter la régie
      </Link>
    </section>
  )
}
