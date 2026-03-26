import { Link } from 'react-router-dom'

export function LocationCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[#4a2a20] p-8 text-white shadow-[0_24px_60px_rgba(51,28,19,0.18)]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Alerte e-mail</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            Vous ne trouvez pas encore l’objet souhaité ?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#f3e7df]">
            Recevez automatiquement les nouveaux biens correspondant à vos critères et soyez informé dès qu’un objet pertinent est disponible.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="votre@email.ch"
              className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/70 outline-none"
            />
            <button className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3e7df]">
              M’inscrire
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Location</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#311d16]">
            Un parcours plus simple pour consulter et candidater.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-8 text-[#66554a]">
            <p>Chaque bien met en avant le loyer total, la disponibilité, la surface et les informations de visite dès les premiers écrans.</p>
            <p>La lecture est plus claire, les photos sont mieux valorisées et l’accès à la demande de location est plus direct.</p>
          </div>
          <Link
            to="/guide-du-locataire"
            className="mt-6 inline-flex rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
          >
            Voir le guide du locataire
          </Link>
        </div>
      </div>
    </section>
  )
}
