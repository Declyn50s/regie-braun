import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReviewSectionCard } from './ReviewSectionCard'
import { RentalApplicationStepper } from './RentalApplicationStepper'
import { SummarySidebar } from './SummarySidebar'
import { UploadCard } from './UploadCard'
import type { RentalApplicationFormData, RentalStepId } from '../../types/rentalApplication'
import {
  buildRentalApplicationPayload,
  createEmptyRentalApplication,
  getRequiredDocumentsForForm,
  getVisibleSteps,
  validateRentalStep,
} from '../../utils/rentalApplication'

const cardClass = 'rounded-[2rem] border border-[#e2d7cf] bg-white p-5 shadow-sm'
const fieldClass =
  'w-full rounded-2xl border border-[#dfd1c6] bg-[#fcfaf8] px-4 py-3 text-sm text-[#4e3a30] transition outline-none placeholder:text-[#a0897c] focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]'
const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]'
const sectionTitleClass = 'text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]'
const errorClass = 'mt-2 text-sm text-[#b55a46]'

const getPrefilledData = (search: string) => {
  const params = new URLSearchParams(search)
  const data = createEmptyRentalApplication()

  data.property.reference = params.get('reference') ?? ''
  data.property.address = params.get('address') ?? ''
  data.property.rooms = params.get('rooms') ?? ''
  data.property.monthlyRent = params.get('rent') ?? ''
  data.property.monthlyCharges = params.get('charges') ?? ''

  const rentalType = params.get('rentalType')
  if (rentalType === 'appartement' || rentalType === 'parking-garage') {
    data.property.rentalType = rentalType
  }

  return data
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null
  return <p className={errorClass}>{message}</p>
}

export function RentalApplicationForm() {
  const location = useLocation()
  const [formData, setFormData] = useState<RentalApplicationFormData>(() => getPrefilledData(location.search))
  const [currentStepId, setCurrentStepId] = useState<RentalStepId>('property')
  const [completedStepIds, setCompletedStepIds] = useState<RentalStepId[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const visibleSteps = useMemo(() => getVisibleSteps(formData), [formData])
  const currentStep = visibleSteps.find((step) => step.id === currentStepId) ?? visibleSteps[0]
  const currentStepIndex = visibleSteps.findIndex((step) => step.id === currentStep.id)
  const requiredDocuments = useMemo(() => getRequiredDocumentsForForm(formData), [formData])

  useEffect(() => {
    if (!visibleSteps.some((step) => step.id === currentStepId)) {
      setCurrentStepId(visibleSteps[0]?.id ?? 'property')
    }
  }, [currentStepId, visibleSteps])

  const updateProperty = <K extends keyof RentalApplicationFormData['property']>(
    field: K,
    value: RentalApplicationFormData['property'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      property: { ...previous.property, [field]: value },
    }))
  }

  const updateApplicant = <K extends keyof RentalApplicationFormData['applicant']>(
    field: K,
    value: RentalApplicationFormData['applicant'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      applicant: { ...previous.applicant, [field]: value },
    }))
  }

  const updateHousehold = <K extends keyof RentalApplicationFormData['household']>(
    field: K,
    value: RentalApplicationFormData['household'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      household: { ...previous.household, [field]: value },
    }))
  }

  const updateIncome = <K extends keyof RentalApplicationFormData['income']>(
    field: K,
    value: RentalApplicationFormData['income'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      income: { ...previous.income, [field]: value },
    }))
  }

  const updateCoApplicant = <K extends keyof RentalApplicationFormData['coApplicant']>(
    field: K,
    value: RentalApplicationFormData['coApplicant'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      coApplicant: { ...previous.coApplicant, [field]: value },
    }))
  }

  const updateBanking = <K extends keyof RentalApplicationFormData['banking']>(
    field: K,
    value: RentalApplicationFormData['banking'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      banking: { ...previous.banking, [field]: value },
    }))
  }

  const updateFinalChecks = <K extends keyof RentalApplicationFormData['finalChecks']>(
    field: K,
    value: RentalApplicationFormData['finalChecks'][K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      finalChecks: { ...previous.finalChecks, [field]: value },
    }))
  }

  const toggleCoApplicant = (enabled: boolean) => {
    setFormData((previous) => ({
      ...previous,
      coApplicant: enabled
        ? { ...previous.coApplicant, enabled: true }
        : { ...createEmptyRentalApplication().coApplicant, enabled: false },
    }))
  }

  const goNext = () => {
    const nextErrors = validateRentalStep(currentStep.id, formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setCompletedStepIds((previous) =>
      previous.includes(currentStep.id) ? previous : [...previous, currentStep.id],
    )

    if (visibleSteps[currentStepIndex + 1]) {
      setCurrentStepId(visibleSteps[currentStepIndex + 1].id)
    }
  }

  const submit = () => {
    const nextErrors = validateRentalStep('review', formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    console.log('rental-application-submit', buildRentalApplicationPayload(formData))
    setIsSubmitted(true)
  }

  const reviewRows = [
    { label: 'Référence', value: formData.property.reference || 'Non renseignée' },
    { label: 'Adresse', value: formData.property.address || 'Non renseignée' },
    { label: 'Nom', value: formData.applicant.lastName || 'Non renseigné' },
    { label: 'Prénom', value: formData.applicant.firstName || 'Non renseigné' },
    { label: 'Email', value: formData.applicant.email || 'Non renseigné' },
    { label: 'Téléphone', value: formData.applicant.phoneMobile || 'Non renseigné' },
  ]

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <RentalApplicationStepper
          steps={visibleSteps}
          currentStepId={currentStep.id}
          completedStepIds={completedStepIds}
          onStepSelect={setCurrentStepId}
        />

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-5">
            {isSubmitted ? (
              <div className={cardClass}>
                <p className={sectionTitleClass}>Dossier prêt</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#311d16]">
                  Votre demande a bien été préparée.
                </h2>
                <p className="mt-4 text-sm leading-8 text-[#66554a]">
                  Cette démonstration confirme la cohérence du dossier et des pièces jointes. Aucune
                  transmission serveur n’est effectuée depuis cette interface locale.
                </p>
              </div>
            ) : null}

            {currentStep.id === 'property' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Bien demandé</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ['reference', 'Référence du bien'],
                    ['address', 'Adresse du bien'],
                    ['rooms', 'Nombre de pièces'],
                    ['monthlyRent', 'Loyer mensuel'],
                    ['monthlyCharges', 'Charges mensuelles'],
                    ['annexes', 'Annexes'],
                  ].map(([key, label]) => {
                    const inputId = `property-${key}`
                    const errorKey = `property.${key}`
                    return (
                      <div key={key}>
                        <label htmlFor={inputId} className={labelClass}>
                          {label}
                        </label>
                        <input
                          id={inputId}
                          className={fieldClass}
                          aria-invalid={Boolean(errors[errorKey])}
                          value={formData.property[key as keyof typeof formData.property] as string}
                          onChange={(event) =>
                            updateProperty(key as keyof typeof formData.property, event.target.value as never)
                          }
                        />
                        <ErrorMessage message={errors[errorKey]} />
                      </div>
                    )
                  })}

                  <div>
                    <label htmlFor="property-rental-type" className={labelClass}>
                      Type de location
                    </label>
                    <select
                      id="property-rental-type"
                      className={fieldClass}
                      value={formData.property.rentalType}
                      onChange={(event) => updateProperty('rentalType', event.target.value as never)}
                    >
                      <option value="appartement">Appartement</option>
                      <option value="parking-garage">Place de parc / garage</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="property-move-in" className={labelClass}>
                      Date d’entrée souhaitée
                    </label>
                    <input
                      id="property-move-in"
                      type="date"
                      className={fieldClass}
                      aria-invalid={Boolean(errors['property.desiredMoveInDate'])}
                      value={formData.property.desiredMoveInDate}
                      onChange={(event) => updateProperty('desiredMoveInDate', event.target.value)}
                    />
                    <ErrorMessage message={errors['property.desiredMoveInDate']} />
                  </div>
                </div>
              </section>
            ) : null}

            {currentStep.id === 'applicant' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Identité du preneur du bail</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ['lastName', 'Nom'],
                    ['firstName', 'Prénom'],
                    ['birthDate', 'Date de naissance'],
                    ['nationality', 'Nationalité'],
                    ['maritalStatus', 'État civil'],
                    ['placeOfOrigin', 'Lieu d’origine'],
                    ['currentAddress', 'Adresse actuelle'],
                    ['postalCode', 'NPA'],
                    ['city', 'Localité'],
                    ['country', 'Pays'],
                    ['phoneHome', 'Téléphone privé'],
                    ['phoneMobile', 'Téléphone portable'],
                    ['email', 'Email'],
                  ].map(([key, label]) => {
                    const inputId = `applicant-${key}`
                    const errorKey = `applicant.${key}`
                    const type = key === 'email' ? 'email' : 'text'
                    return (
                      <div key={key}>
                        <label htmlFor={inputId} className={labelClass}>
                          {label}
                        </label>
                        <input
                          id={inputId}
                          type={type}
                          className={fieldClass}
                          aria-invalid={Boolean(errors[errorKey])}
                          value={formData.applicant[key as keyof typeof formData.applicant]}
                          onChange={(event) =>
                            updateApplicant(key as keyof typeof formData.applicant, event.target.value as never)
                          }
                        />
                        <ErrorMessage message={errors[errorKey]} />
                      </div>
                    )
                  })}
                </div>
              </section>
            ) : null}

            {currentStep.id === 'household' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Situation personnelle / logement actuel</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ['currentAddressSince', 'Adresse actuelle depuis le'],
                    ['occupantsCount', 'Nombre de personnes'],
                    ['childrenCount', 'Nombre d’enfants'],
                    ['childrenAges', 'Âge des enfants'],
                    ['currentRegie', 'Gérance actuelle'],
                    ['references', 'Références'],
                    ['departureReason', 'Motif du départ'],
                    ['residencePermit', 'Permis de séjour'],
                  ].map(([key, label]) => {
                    const inputId = `household-${key}`
                    const errorKey = `household.${key}`
                    return (
                      <div key={key}>
                        <label htmlFor={inputId} className={labelClass}>
                          {label}
                        </label>
                        <input
                          id={inputId}
                          className={fieldClass}
                          aria-invalid={Boolean(errors[errorKey])}
                          value={formData.household[key as keyof typeof formData.household] as string}
                          onChange={(event) =>
                            updateHousehold(key as keyof typeof formData.household, event.target.value as never)
                          }
                        />
                        <ErrorMessage message={errors[errorKey]} />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-5">
                  <p className={labelClass}>Poursuites en cours</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { label: 'Oui', value: true },
                      { label: 'Non', value: false },
                    ].map((option) => (
                      <label key={option.label} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#dfd1c6] bg-[#fcfaf8] px-4 py-4 text-sm font-medium text-[#4e3a30]">
                        <input
                          type="radio"
                          name="has-debt-collection"
                          checked={formData.household.hasDebtCollectionProceedings === option.value}
                          onChange={() => updateHousehold('hasDebtCollectionProceedings', option.value)}
                          className="h-4 w-4 accent-[#4a2a20]"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage message={errors['household.hasDebtCollectionProceedings']} />
                </div>
              </section>
            ) : null}

            {currentStep.id === 'income' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Situation professionnelle / financière</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="income-status" className={labelClass}>
                      Statut
                    </label>
                    <select
                      id="income-status"
                      className={fieldClass}
                      value={formData.income.status}
                      onChange={(event) => updateIncome('status', event.target.value as never)}
                    >
                      <option value="salarie">Salarié</option>
                      <option value="independant">Indépendant</option>
                      <option value="etudiant">Étudiant</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {[
                    ['profession', 'Profession'],
                    ['employer', 'Employeur'],
                    ['workplace', 'Lieu de travail'],
                    ['employmentSince', 'Depuis le'],
                    ['monthlyIncome', 'Revenu mensuel'],
                  ].map(([key, label]) => {
                    const inputId = `income-${key}`
                    const errorKey = `income.${key}`
                    return (
                      <div key={key}>
                        <label htmlFor={inputId} className={labelClass}>
                          {label}
                        </label>
                        <input
                          id={inputId}
                          className={fieldClass}
                          aria-invalid={Boolean(errors[errorKey])}
                          value={formData.income[key as keyof typeof formData.income] as string}
                          onChange={(event) =>
                            updateIncome(key as keyof typeof formData.income, event.target.value as never)
                          }
                        />
                        <ErrorMessage message={errors[errorKey]} />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-[#f8f3ef] p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#321d15]">Ajouter un co-candidat</p>
                      <p className="mt-1 text-sm leading-7 text-[#66554a]">
                        Activez cette option si un conjoint, un co-débiteur ou un autre occupant doit
                        figurer dans le dossier.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleCoApplicant(!formData.coApplicant.enabled)}
                      className={`inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                        formData.coApplicant.enabled
                          ? 'bg-[#4a2a20] text-white hover:bg-[#5a3428]'
                          : 'border border-[#cdb9ac] bg-white text-[#4a2a20] hover:bg-[#f3ebe5]'
                      }`}
                    >
                      {formData.coApplicant.enabled ? 'Co-candidat activé' : 'Activer le co-candidat'}
                    </button>
                  </div>
                </div>
              </section>
            ) : null}

            {currentStep.id === 'coApplicant' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Co-candidat / conjoint / co-débiteur / occupant</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="co-applicant-role" className={labelClass}>
                      Rôle
                    </label>
                    <select
                      id="co-applicant-role"
                      className={fieldClass}
                      value={formData.coApplicant.role}
                      onChange={(event) => updateCoApplicant('role', event.target.value as never)}
                    >
                      <option value="Conjoint">Conjoint</option>
                      <option value="Co-candidat">Co-candidat</option>
                      <option value="Co-débiteur">Co-débiteur</option>
                      <option value="Occupant">Occupant</option>
                    </select>
                  </div>

                  {[
                    ['lastName', 'Nom'],
                    ['firstName', 'Prénom'],
                    ['birthDate', 'Date de naissance'],
                    ['nationality', 'Nationalité'],
                    ['profession', 'Profession'],
                    ['employer', 'Employeur'],
                    ['monthlyIncome', 'Revenu mensuel'],
                    ['phoneMobile', 'Téléphone portable'],
                  ].map(([key, label]) => {
                    const inputId = `co-applicant-${key}`
                    const errorKey = `coApplicant.${key}`
                    return (
                      <div key={key}>
                        <label htmlFor={inputId} className={labelClass}>
                          {label}
                        </label>
                        <input
                          id={inputId}
                          className={fieldClass}
                          aria-invalid={Boolean(errors[errorKey])}
                          value={formData.coApplicant[key as keyof typeof formData.coApplicant] as string}
                          onChange={(event) =>
                            updateCoApplicant(
                              key as keyof typeof formData.coApplicant,
                              event.target.value as never,
                            )
                          }
                        />
                        <ErrorMessage message={errors[errorKey]} />
                      </div>
                    )
                  })}
                </div>
              </section>
            ) : null}

            {currentStep.id === 'banking' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Coordonnées bancaires</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ['bankName', 'Nom de la banque'],
                    ['accountHolder', 'Titulaire du compte'],
                    ['ibanBank', 'IBAN bancaire'],
                    ['ibanPost', 'IBAN postal'],
                  ].map(([key, label]) => {
                    const inputId = `banking-${key}`
                    const errorKey = `banking.${key}`
                    return (
                      <div key={key}>
                        <label htmlFor={inputId} className={labelClass}>
                          {label}
                        </label>
                        <input
                          id={inputId}
                          className={fieldClass}
                          aria-invalid={Boolean(errors[errorKey])}
                          value={formData.banking[key as keyof typeof formData.banking] as string}
                          onChange={(event) =>
                            updateBanking(key as keyof typeof formData.banking, event.target.value as never)
                          }
                        />
                        <ErrorMessage message={errors[errorKey]} />
                      </div>
                    )
                  })}
                </div>

                <div className="mt-5">
                  <p className={labelClass}>Usage des comptes</p>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 rounded-2xl bg-[#f8f3ef] p-4">
                      <input
                        type="checkbox"
                        checked={formData.banking.useBankAccountForRent}
                        onChange={(event) => updateBanking('useBankAccountForRent', event.target.checked)}
                        className="mt-1 h-5 w-5 accent-[#4a2a20]"
                      />
                      <span className="text-sm font-medium text-[#3f2b22]">
                        Utiliser ce compte pour le paiement du loyer
                      </span>
                    </label>
                    <label className="flex items-start gap-3 rounded-2xl bg-[#f8f3ef] p-4">
                      <input
                        type="checkbox"
                        checked={formData.banking.usePostalAccountForRefund}
                        onChange={(event) =>
                          updateBanking('usePostalAccountForRefund', event.target.checked)
                        }
                        className="mt-1 h-5 w-5 accent-[#4a2a20]"
                      />
                      <span className="text-sm font-medium text-[#3f2b22]">
                        Utiliser ce compte pour les remboursements
                      </span>
                    </label>
                  </div>
                  <ErrorMessage message={errors['banking.accountUsage']} />
                </div>
              </section>
            ) : null}

            {currentStep.id === 'documents' ? (
              <section className={cardClass}>
                <p className={sectionTitleClass}>Documents à fournir</p>
                <div className="mt-5 space-y-4">
                  {requiredDocuments.map((requirement) => (
                    <UploadCard
                      key={requirement.id}
                      requirement={requirement}
                      uploadedFile={formData.uploads.find((item) => item.requirementId === requirement.id)}
                      error={errors[`documents.${requirement.id}`]}
                      onFileSelect={(requirementId, fileName) =>
                        setFormData((previous) => ({
                          ...previous,
                          uploads: [
                            ...previous.uploads.filter((item) => item.requirementId !== requirementId),
                            { requirementId, fileName, status: 'uploaded' },
                          ],
                        }))
                      }
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {currentStep.id === 'review' ? (
              <div className="space-y-6">
                <ReviewSectionCard
                  title="Résumé du dossier"
                  description="Vérification finale"
                  onEdit={() => setCurrentStepId('property')}
                  rows={reviewRows}
                />
                <section className={cardClass}>
                  <p className={sectionTitleClass}>Confirmations</p>
                  <div className="mt-5 space-y-4">
                    {[
                      ['informationConfirmed', 'Je confirme l’exactitude des informations.'],
                      ['verificationAuthorized', 'J’autorise la vérification du dossier.'],
                      ['importantNoticeAccepted', 'J’ai pris connaissance de l’avis important.'],
                      ['secureProcessingAccepted', 'J’accepte le traitement sécurisé des documents.'],
                    ].map(([key, label]) => {
                      const errorKey = `finalChecks.${key}`
                      return (
                        <div key={key}>
                          <label className="flex items-start gap-3 rounded-2xl bg-[#f8f3ef] p-4">
                            <input
                              type="checkbox"
                              checked={formData.finalChecks[key as keyof typeof formData.finalChecks]}
                              onChange={(event) =>
                                updateFinalChecks(
                                  key as keyof typeof formData.finalChecks,
                                  event.target.checked as never,
                                )
                              }
                              className="mt-1 h-5 w-5 accent-[#4a2a20]"
                            />
                            <span className="text-sm font-medium text-[#3f2b22]">{label}</span>
                          </label>
                          <ErrorMessage message={errors[errorKey]} />
                        </div>
                      )
                    })}
                  </div>
                </section>
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => currentStepIndex > 0 && setCurrentStepId(visibleSteps[currentStepIndex - 1].id)}
                disabled={currentStepIndex === 0}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 ${
                  currentStepIndex === 0
                    ? 'cursor-not-allowed border border-[#eaded5] bg-white text-[#b7a79c]'
                    : 'border border-[#cdb9ac] bg-white text-[#4a2a20] hover:bg-[#f3ebe5]'
                }`}
              >
                Étape précédente
              </button>

              {currentStep.id === 'review' ? (
                <button
                  type="button"
                  onClick={submit}
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                >
                  Préparer le dossier
                </button>
              ) : (
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                >
                  Continuer
                </button>
              )}
            </div>
          </div>

          <SummarySidebar
            currentStep={currentStep}
            completedStepsCount={completedStepIds.length}
            totalSteps={visibleSteps.length}
            data={formData}
            requiredDocuments={requiredDocuments}
          />
        </div>
      </section>
    </main>
  )
}
