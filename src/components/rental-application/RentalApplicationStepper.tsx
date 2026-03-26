import type { RentalStepDefinition, RentalStepId } from '../../types/rentalApplication'

type RentalApplicationStepperProps = {
  steps: RentalStepDefinition[]
  currentStepId: RentalStepId
  completedStepIds: RentalStepId[]
  onStepSelect: (stepId: RentalStepId) => void
}

export function RentalApplicationStepper({
  steps,
  currentStepId,
  completedStepIds,
  onStepSelect,
}: RentalApplicationStepperProps) {
  return (
    <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
        {steps.map((step, index) => {
          const isActive = step.id === currentStepId
          const isCompleted = completedStepIds.includes(step.id)
          const isClickable = isCompleted || isActive

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => isClickable && onStepSelect(step.id)}
              className={`flex min-w-0 flex-1 items-center gap-4 rounded-2xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 ${
                isActive
                  ? 'border-[#4a2a20] bg-[#4a2a20] text-white'
                  : isCompleted
                    ? 'border-[#d7c8bc] bg-[#fcfaf8] text-[#4a2a20] hover:bg-[#f3ebe5]'
                    : 'border-[#eaded5] bg-white text-[#8f6d5a]'
              } ${isClickable ? '' : 'cursor-default'}`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  isActive
                    ? 'bg-white text-[#4a2a20]'
                    : isCompleted
                      ? 'bg-[#eadfd5] text-[#4a2a20]'
                      : 'bg-[#f8f3ef] text-[#8f6d5a]'
                }`}
              >
                {isCompleted && !isActive ? '✓' : index + 1}
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.14em] opacity-80">{step.shortTitle}</div>
                <div className="mt-1 text-sm font-semibold">{step.title}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
