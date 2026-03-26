export type PropertyTransaction = 'location' | 'sale'
export type PropertyStatus = 'draft' | 'published' | 'reserved' | 'rented' | 'sold' | 'archived'
export type VisibilityStatus = 'visible' | 'hidden'
export type RentalRequestStatus =
  | 'new'
  | 'to-review'
  | 'incomplete'
  | 'analysis'
  | 'visit-planned'
  | 'decision-pending'
  | 'accepted'
  | 'rejected'
  | 'archived'
export type ContactMessageStatus = 'new' | 'read' | 'in-progress' | 'resolved' | 'archived'
export type DownloadVisibility = 'public' | 'private' | 'draft'
export type CmsPageStatus = 'draft' | 'review' | 'published'
export type UserRole = 'super-admin' | 'content-admin' | 'rental-manager' | 'sales-manager' | 'reader'

export type ActivityItem = {
  id: string
  title: string
  detail: string
  timestamp: string
  type: 'request' | 'property' | 'message' | 'content' | 'download' | 'team' | 'user'
}

export type AdminAlert = {
  id: string
  title: string
  detail: string
  severity: 'low' | 'medium' | 'high'
  actionLabel: string
  actionHref: string
}

export type RentalRequest = {
  id: string
  submittedAt: string
  reference: string
  candidateName: string
  email: string
  phone: string
  propertyId: string
  propertyTitle: string
  propertyCity: string
  rent: number
  completeness: number
  isComplete: boolean
  status: RentalRequestStatus
  manager: string
  lastAction: string
  moveInDate: string
  householdSize: number
  professionalStatus: string
  employer: string
  monthlyIncome: number
  documents: Array<{ label: string; status: 'received' | 'missing' | 'pending' }>
  checklist: Array<{ label: string; done: boolean }>
  notes: string[]
  history: Array<{ id: string; title: string; author: string; timestamp: string; detail: string }>
}

export type Property = {
  id: string
  title: string
  reference: string
  transaction: PropertyTransaction
  type: string
  city: string
  district: string
  price: number
  charges: number
  rooms: number
  surface: number
  status: PropertyStatus
  visibility: VisibilityStatus
  updatedAt: string
  availableFrom: string
  heroImage: string
  gallery: string[]
  hasDocuments: boolean
  isFeatured: boolean
  descriptionShort: string
  descriptionLong: string
  address: string
}

export type TeamMember = {
  id: string
  firstName: string
  lastName: string
  role: string
  department: string
  email: string
  phone: string
  isActive: boolean
  displayOrder: number
  photo: string
}

export type ContactMessage = {
  id: string
  submittedAt: string
  name: string
  email: string
  subject: string
  excerpt: string
  message: string
  status: ContactMessageStatus
  assignee: string
  history: Array<{ id: string; label: string; timestamp: string }>
}

export type DownloadItem = {
  id: string
  title: string
  category: string
  description: string
  fileName: string
  visibility: DownloadVisibility
  order: number
  updatedAt: string
}

export type CmsSection = {
  id: string
  label: string
  description: string
  fields: Array<{ id: string; label: string; type: 'text' | 'textarea' | 'cta'; value: string }>
}

export type CmsPage = {
  id: string
  title: string
  slug: string
  status: CmsPageStatus
  updatedAt: string
  owner: string
  sections: CmsSection[]
}

export type AdminUser = {
  id: string
  name: string
  email: string
  role: UserRole
  status: 'active' | 'pending' | 'disabled'
  lastLogin: string
}
