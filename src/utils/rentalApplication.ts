import { getRequiredDocuments } from '../data/rentalDocuments'
import type {
  RentalApplicationFormData,
  RentalStepDefinition,
  RentalStepId,
  StepValidationErrors,
} from '../types/rentalApplication'

export const RENTAL_STEPS: RentalStepDefinition[] = [
  {
    id: 'property',
    title: 'Bien demandé',
    shortTitle: 'Bien',
    description: "Référence, type de location et modalités d'entrée.",
  },
  {
    id: 'applicant',
    title: 'Identité du preneur du bail',
    shortTitle: 'Identité',
    description: 'Coordonnées personnelles et informations de contact.',
  },
  {
    id: 'household',
    title: 'Situation personnelle',
    shortTitle: 'Logement',
    description: 'Logement actuel, composition du foyer et contexte de départ.',
  },
  {
    id: 'income',
    title: 'Situation professionnelle',
    shortTitle: 'Finances',
    description: "Activité, employeur, revenu mensuel et éventuel co-candidat.",
  },
  {
    id: 'coApplicant',
    title: 'Co-candidat ou conjoint',
    shortTitle: 'Co-candidat',
    description: 'Informations complémentaires si une autre personne rejoint le dossier.',
  },
  {
    id: 'banking',
    title: 'Coordonnées bancaires',
    shortTitle: 'Banque',
    description: 'Références de paiement et de remboursement.',
  },
  {
    id: 'documents',
    title: 'Documents justificatifs',
    shortTitle: 'Documents',
    description: 'Liste personnalisée des pièces à joindre.',
  },
  {
    id: 'review',
    title: 'Validation finale',
    shortTitle: 'Vérification',
    description: 'Relisez votre dossier avant envoi.',
  },
]

export const createEmptyRentalApplication = (): RentalApplicationFormData => ({
  property: {
    reference: '',
    address: '',
    rentalType: 'appartement',
    rooms: '',
    monthlyRent: '',
    monthlyCharges: '',
    annexes: '',
    desiredMoveInDate: '',
  },
  applicant: {
    lastName: '',
    firstName: '',
    birthDate: '',
    nationality: '',
    maritalStatus: '',
    placeOfOrigin: '',
    currentAddress: '',
    postalCode: '',
    city: '',
    country: 'Suisse',
    phoneHome: '',
    phoneMobile: '',
    email: '',
  },
  household: {
    currentAddressSince: '',
    occupantsCount: '',
    childrenCount: '',
    childrenAges: '',
    currentRegie: '',
    references: '',
    departureReason: '',
    residencePermit: '',
    hasDebtCollectionProceedings: null,
  },
  income: {
    status: 'salarie',
    profession: '',
    employer: '',
    workplace: '',
    employmentSince: '',
    monthlyIncome: '',
  },
  coApplicant: {
    enabled: false,
    role: 'Conjoint',
    lastName: '',
    firstName: '',
    birthDate: '',
    nationality: '',
    profession: '',
    employer: '',
    monthlyIncome: '',
    phoneMobile: '',
  },
  banking: {
    bankName: '',
    accountHolder: '',
    ibanBank: '',
    ibanPost: '',
    useBankAccountForRent: true,
    usePostalAccountForRefund: false,
  },
  uploads: [],
  finalChecks: {
    informationConfirmed: false,
    verificationAuthorized: false,
    importantNoticeAccepted: false,
    secureProcessingAccepted: false,
  },
})

const isFilled = (value: string) => value.trim().length > 0

export const getVisibleSteps = (data: RentalApplicationFormData) =>
  RENTAL_STEPS.filter((step) => step.id !== 'coApplicant' || data.coApplicant.enabled)

export function getRequiredDocumentsForForm(data: RentalApplicationFormData) {
  return getRequiredDocuments(data.property.rentalType, data.income.status)
}

export function validateRentalStep(
  stepId: RentalStepId,
  data: RentalApplicationFormData,
): StepValidationErrors {
  const errors: StepValidationErrors = {}

  if (stepId === 'property') {
    if (!isFilled(data.property.reference)) errors['property.reference'] = 'Référence requise.'
    if (!isFilled(data.property.address)) errors['property.address'] = 'Adresse requise.'
    if (!isFilled(data.property.rooms)) errors['property.rooms'] = 'Nombre de pièces requis.'
    if (!isFilled(data.property.monthlyRent)) errors['property.monthlyRent'] = 'Loyer requis.'
    if (!isFilled(data.property.monthlyCharges)) errors['property.monthlyCharges'] = 'Charges requises.'
    if (!isFilled(data.property.desiredMoveInDate)) {
      errors['property.desiredMoveInDate'] = "Date d'entrée souhaitée requise."
    }
  }

  if (stepId === 'applicant') {
    ;[
      ['applicant.lastName', data.applicant.lastName],
      ['applicant.firstName', data.applicant.firstName],
      ['applicant.birthDate', data.applicant.birthDate],
      ['applicant.nationality', data.applicant.nationality],
      ['applicant.maritalStatus', data.applicant.maritalStatus],
      ['applicant.currentAddress', data.applicant.currentAddress],
      ['applicant.postalCode', data.applicant.postalCode],
      ['applicant.city', data.applicant.city],
      ['applicant.phoneMobile', data.applicant.phoneMobile],
      ['applicant.email', data.applicant.email],
    ].forEach(([key, value]) => {
      if (!isFilled(value)) errors[key] = 'Champ requis.'
    })
  }

  if (stepId === 'household') {
    ;[
      ['household.currentAddressSince', data.household.currentAddressSince],
      ['household.occupantsCount', data.household.occupantsCount],
      ['household.childrenCount', data.household.childrenCount],
      ['household.currentRegie', data.household.currentRegie],
      ['household.departureReason', data.household.departureReason],
      ['household.residencePermit', data.household.residencePermit],
    ].forEach(([key, value]) => {
      if (!isFilled(value)) errors[key] = 'Champ requis.'
    })

    if (data.household.hasDebtCollectionProceedings === null) {
      errors['household.hasDebtCollectionProceedings'] = 'Veuillez sélectionner une réponse.'
    }
  }

  if (stepId === 'income') {
    ;[
      ['income.profession', data.income.profession],
      ['income.employer', data.income.employer],
      ['income.workplace', data.income.workplace],
      ['income.employmentSince', data.income.employmentSince],
      ['income.monthlyIncome', data.income.monthlyIncome],
    ].forEach(([key, value]) => {
      if (!isFilled(value)) errors[key] = 'Champ requis.'
    })
  }

  if (stepId === 'coApplicant' && data.coApplicant.enabled) {
    ;[
      ['coApplicant.lastName', data.coApplicant.lastName],
      ['coApplicant.firstName', data.coApplicant.firstName],
      ['coApplicant.birthDate', data.coApplicant.birthDate],
      ['coApplicant.nationality', data.coApplicant.nationality],
      ['coApplicant.profession', data.coApplicant.profession],
      ['coApplicant.employer', data.coApplicant.employer],
      ['coApplicant.monthlyIncome', data.coApplicant.monthlyIncome],
      ['coApplicant.phoneMobile', data.coApplicant.phoneMobile],
    ].forEach(([key, value]) => {
      if (!isFilled(value)) errors[key] = 'Champ requis.'
    })
  }

  if (stepId === 'banking') {
    ;[
      ['banking.bankName', data.banking.bankName],
      ['banking.accountHolder', data.banking.accountHolder],
    ].forEach(([key, value]) => {
      if (!isFilled(value)) errors[key] = 'Champ requis.'
    })

    if (!isFilled(data.banking.ibanBank) && !isFilled(data.banking.ibanPost)) {
      errors['banking.ibanBank'] = 'Renseignez au moins un IBAN.'
      errors['banking.ibanPost'] = 'Renseignez au moins un IBAN.'
    }

    if (!data.banking.useBankAccountForRent && !data.banking.usePostalAccountForRefund) {
      errors['banking.accountUsage'] = 'Sélectionnez au moins un usage de compte.'
    }
  }

  if (stepId === 'documents') {
    const uploadedIds = new Set(
      data.uploads.filter((item) => item.status === 'uploaded').map((item) => item.requirementId),
    )

    getRequiredDocumentsForForm(data).forEach((document) => {
      if (document.required && !uploadedIds.has(document.id)) {
        errors[`documents.${document.id}`] = 'Document requis manquant.'
      }
    })
  }

  if (stepId === 'review') {
    if (!data.finalChecks.informationConfirmed) {
      errors['finalChecks.informationConfirmed'] = 'Confirmation requise.'
    }
    if (!data.finalChecks.verificationAuthorized) {
      errors['finalChecks.verificationAuthorized'] = 'Autorisation requise.'
    }
    if (!data.finalChecks.importantNoticeAccepted) {
      errors['finalChecks.importantNoticeAccepted'] = 'Confirmation requise.'
    }
    if (!data.finalChecks.secureProcessingAccepted) {
      errors['finalChecks.secureProcessingAccepted'] = 'Confirmation requise.'
    }
  }

  return errors
}

export function buildRentalApplicationPayload(data: RentalApplicationFormData) {
  return {
    submittedAt: new Date().toISOString(),
    property: data.property,
    applicant: data.applicant,
    household: data.household,
    income: data.income,
    coApplicant: data.coApplicant.enabled ? data.coApplicant : null,
    banking: data.banking,
    documents: data.uploads,
    finalChecks: data.finalChecks,
  }
}
