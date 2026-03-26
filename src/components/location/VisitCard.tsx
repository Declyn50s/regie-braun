type VisitCardProps = {
  contact: string
  schedule: string
}

export function VisitCard({ contact, schedule }: VisitCardProps) {
  return (
    <section className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Visite</p>
      <h3 className="mt-3 text-xl font-semibold text-[#311d16]">Prochaine visite prévue</h3>
      <p className="mt-4 text-sm leading-7 text-[#66554a]">
        Contact locataires : <span className="font-medium text-[#3b241b]">{contact}</span>
      </p>
      <p className="mt-2 text-sm leading-7 text-[#66554a]">
        <span className="font-medium text-[#3b241b]">{schedule}</span>
      </p>
      <button className="mt-5 rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]">
        Poser une question
      </button>
    </section>
  )
}
