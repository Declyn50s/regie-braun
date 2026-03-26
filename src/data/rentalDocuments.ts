import type { DocumentRequirement, EmploymentStatus, RentalType } from '../types/rentalApplication'

const APARTMENT_DOCUMENTS: DocumentRequirement[] = [
  {
    id: 'identity-document',
    title: 'Pièce d’identité',
    description: 'Carte d’identité, passeport ou permis valable.',
    required: true,
  },
  {
    id: 'debt-collection-extract',
    title: 'Extrait des poursuites de moins de 3 mois',
    description: 'Document récent permettant de compléter l’étude du dossier.',
    required: true,
  },
  {
    id: 'household-insurance',
    title: 'Assurance ménage',
    description: 'Attestation ou police d’assurance ménage.',
    required: true,
  },
]

const PARKING_DOCUMENTS: DocumentRequirement[] = [
  {
    id: 'identity-document',
    title: 'Pièce d’identité',
    description: 'Carte d’identité, passeport ou permis valable.',
    required: true,
  },
  {
    id: 'debt-collection-extract',
    title: 'Extrait des poursuites de moins de 3 mois',
    description: 'Document récent permettant de compléter l’étude du dossier.',
    required: true,
  },
]

const EMPLOYMENT_DOCUMENTS: Record<EmploymentStatus, DocumentRequirement[]> = {
  salarie: [
    {
      id: 'salary-slips',
      title: '3 dernières fiches de salaire',
      description: 'Ou contrat de travail si vous êtes en période d’essai.',
      required: true,
    },
  ],
  independant: [
    {
      id: 'last-taxation',
      title: 'Dernière taxation fiscale',
      description: 'Copie de la dernière taxation disponible.',
      required: true,
    },
    {
      id: 'commercial-register',
      title: 'Inscription au registre du commerce',
      description: 'Extrait récent si votre activité y est inscrite.',
      required: true,
    },
  ],
  etudiant: [
    {
      id: 'student-certificate',
      title: 'Attestation d’études',
      description: 'Justificatif de scolarité ou de formation.',
      required: true,
    },
    {
      id: 'student-id',
      title: 'Carte de légitimation ou attestation scolaire',
      description: 'Document complémentaire confirmant votre statut.',
      required: true,
    },
  ],
  autre: [],
}

export function getRequiredDocuments(
  rentalType: RentalType,
  employmentStatus: EmploymentStatus,
): DocumentRequirement[] {
  const baseDocuments = rentalType === 'appartement' ? APARTMENT_DOCUMENTS : PARKING_DOCUMENTS
  const profileDocuments = EMPLOYMENT_DOCUMENTS[employmentStatus] ?? []

  return [...baseDocuments, ...profileDocuments]
}
