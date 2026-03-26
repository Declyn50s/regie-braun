export type RentalType = 'appartement' | 'parking-garage'

export type EmploymentStatus = 'salarie' | 'independant' | 'etudiant' | 'autre'

export type CoApplicantRole = 'Conjoint' | 'Co-candidat' | 'Co-débiteur' | 'Occupant'

export type DocumentRequirement = {
  id: string
  title: string
  description: string
  required: boolean
}

export type UploadedDocument = {
  requirementId: string
  fileName: string
  status: 'pending' | 'uploaded'
}

export type RentalPropertyInfo = {
  reference: string
  address: string
  rentalType: RentalType
  rooms: string
  monthlyRent: string
  monthlyCharges: string
  annexes: string
  desiredMoveInDate: string
}

export type RentalApplicantIdentity = {
  lastName: string
  firstName: string
  birthDate: string
  nationality: string
  maritalStatus: string
  placeOfOrigin: string
  currentAddress: string
  postalCode: string
  city: string
  country: string
  phoneHome: string
  phoneMobile: string
  email: string
}

export type RentalHouseholdInfo = {
  currentAddressSince: string
  occupantsCount: string
  childrenCount: string
  childrenAges: string
  currentRegie: string
  references: string
  departureReason: string
  residencePermit: string
  hasDebtCollectionProceedings: boolean | null
}

export type RentalIncomeInfo = {
  status: EmploymentStatus
  profession: string
  employer: string
  workplace: string
  employmentSince: string
  monthlyIncome: string
}

export type RentalCoApplicant = {
  enabled: boolean
  role: CoApplicantRole
  lastName: string
  firstName: string
  birthDate: string
  nationality: string
  profession: string
  employer: string
  monthlyIncome: string
  phoneMobile: string
}

export type RentalBankingInfo = {
  bankName: string
  accountHolder: string
  ibanBank: string
  ibanPost: string
  useBankAccountForRent: boolean
  usePostalAccountForRefund: boolean
}

export type RentalFinalChecks = {
  informationConfirmed: boolean
  verificationAuthorized: boolean
  importantNoticeAccepted: boolean
  secureProcessingAccepted: boolean
}

export type RentalApplicationFormData = {
  property: RentalPropertyInfo
  applicant: RentalApplicantIdentity
  household: RentalHouseholdInfo
  income: RentalIncomeInfo
  coApplicant: RentalCoApplicant
  banking: RentalBankingInfo
  uploads: UploadedDocument[]
  finalChecks: RentalFinalChecks
}

export type RentalStepId =
  | 'property'
  | 'applicant'
  | 'household'
  | 'income'
  | 'coApplicant'
  | 'banking'
  | 'documents'
  | 'review'

export type RentalStepDefinition = {
  id: RentalStepId
  title: string
  shortTitle: string
  description: string
}

export type StepValidationErrors = Record<string, string>
