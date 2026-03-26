export function PropertyInquiryCard() {
  return (
    <section className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Votre demande</p>
      <div className="mt-5 space-y-4">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
            Avez-vous déjà visité ce bien ?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-2xl border border-[#ccb7aa] bg-[#f8f3ef] px-4 py-3 text-sm font-semibold text-[#4a2a20]">
              Oui
            </button>
            <button className="rounded-2xl border border-[#ccb7aa] bg-white px-4 py-3 text-sm font-semibold text-[#4a2a20]">
              Non
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
            Place de parc souhaitée
          </label>
          <select className="w-full rounded-2xl border border-[#dfd1c6] bg-[#fcfaf8] px-4 py-3 text-sm text-[#4e3a30] outline-none">
            <option>Aucune</option>
            <option>Garage</option>
            <option>Place extérieure</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
            Date d’entrée souhaitée
          </label>
          <input
            type="text"
            defaultValue="01.04.2026"
            className="w-full rounded-2xl border border-[#dfd1c6] bg-[#fcfaf8] px-4 py-3 text-sm text-[#4e3a30] outline-none"
          />
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[#f8f3ef] p-4 text-sm leading-7 text-[#66554a]">
        Vos données sont traitées de manière confidentielle. Vous pourrez compléter votre demande dans l’étape suivante.
      </div>

      <button className="mt-5 w-full rounded-full bg-[#4a2a20] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5a3428]">
        Réserver
      </button>
    </section>
  )
}
