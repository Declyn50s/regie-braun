import type {
  DocumentRequirement,
  RentalApplicationFormData,
  RentalStepDefinition,
} from '../../types/rentalApplication'

type SummarySidebarProps = {
  currentStep: RentalStepDefinition
  completedStepsCount: number
  totalSteps: number
  data: RentalApplicationFormData
  requiredDocuments: DocumentRequirement[]
}

export function SummarySidebar({
  currentStep,
  completedStepsCount,
  totalSteps,
  data,
  requiredDocuments,
}: SummarySidebarProps) {
  const uploadedCount = data.uploads.filter((item) => item.status === 'uploaded').length
  const progress = totalSteps > 0 ? (completedStepsCount / totalSteps) * 100 : 0

  return (
    <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
      <section className="rounded-[2rem] bg-[#4a2a20] p-7 text-white shadow-[0_24px_60px_rgba(51,28,19,0.18)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Progression</p>
        <h2 className="mt-3 text-2xl font-semibold">{currentStep.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#f3e7df]">{currentStep.description}</p>
        <div className="mt-6 h-2 rounded-full bg-white/10">
          <div className="h-2 rounded-full bg-white transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 text-sm text-[#f3e7df]">
          {completedStepsCount} étape{completedStepsCount > 1 ? 's' : ''} validée
          {completedStepsCount > 1 ? 's' : ''} sur {totalSteps}
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Bien demandé</p>
        <div className="mt-4 space-y-3 text-sm text-[#5d4b40]">
          <div className="rounded-2xl bg-[#f8f3ef] p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-[#8f6d5a]">Référence</div>
            <div className="mt-1 font-semibold text-[#3f2b22]">{data.property.reference || 'À compléter'}</div>
          </div>
          <div className="rounded-2xl bg-[#f8f3ef] p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-[#8f6d5a]">Adresse</div>
            <div className="mt-1 font-semibold text-[#3f2b22]">{data.property.address || 'À compléter'}</div>
          </div>
          <div className="rounded-2xl bg-[#f8f3ef] p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-[#8f6d5a]">Date d’entrée</div>
            <div className="mt-1 font-semibold text-[#3f2b22]">
              {data.property.desiredMoveInDate || 'À définir'}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Documents</p>
        <div className="mt-4 rounded-2xl bg-[#f8f3ef] p-4">
          <div className="text-2xl font-semibold text-[#4a2a20]">{uploadedCount}</div>
          <div className="mt-1 text-sm text-[#6d5b50]">
            document{uploadedCount > 1 ? 's' : ''} ajouté{uploadedCount > 1 ? 's' : ''} sur{' '}
            {requiredDocuments.length}
          </div>
        </div>
      </section>
    </aside>
  )
}
