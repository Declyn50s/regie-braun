import type { ContactMessageStatus, CmsPageStatus, DownloadVisibility, PropertyStatus, RentalRequestStatus, UserRole, VisibilityStatus } from '../../types/admin'
import { cn } from './utils'

type BadgeVariant =
  | RentalRequestStatus
  | PropertyStatus
  | ContactMessageStatus
  | CmsPageStatus
  | DownloadVisibility
  | VisibilityStatus
  | UserRole
  | 'active'
  | 'pending'
  | 'disabled'
  | 'complete'
  | 'incomplete'

const badgeMap: Record<BadgeVariant, { label: string; className: string }> = {
  new: { label: 'Nouveau', className: 'bg-[#f8efe6] text-[#925f41]' },
  'to-review': { label: 'A verifier', className: 'bg-[#f5ead8] text-[#8f653f]' },
  incomplete: { label: 'Incomplet', className: 'bg-[#fbe8e4] text-[#a14d3d]' },
  analysis: { label: 'En analyse', className: 'bg-[#ece7fb] text-[#5f4c8d]' },
  'visit-planned': { label: 'Visite prevue', className: 'bg-[#e8f4f1] text-[#2d6c62]' },
  'decision-pending': { label: 'En attente', className: 'bg-[#f3efdc] text-[#80703c]' },
  accepted: { label: 'Accepte', className: 'bg-[#e6f5ec] text-[#2f7c57]' },
  rejected: { label: 'Refuse', className: 'bg-[#f6e4e2] text-[#9d473d]' },
  archived: { label: 'Archive', className: 'bg-[#ece7e2] text-[#6d5a50]' },
  draft: { label: 'Brouillon', className: 'bg-[#efeae5] text-[#6d5a50]' },
  published: { label: 'Publie', className: 'bg-[#e6f4ec] text-[#2d7a55]' },
  reserved: { label: 'Reserve', className: 'bg-[#f7eedc] text-[#8c6834]' },
  rented: { label: 'Loue', className: 'bg-[#e7f2f6] text-[#305f76]' },
  sold: { label: 'Vendu', className: 'bg-[#ece7fb] text-[#5f4c8d]' },
  visible: { label: 'Visible', className: 'bg-[#e6f4ec] text-[#2d7a55]' },
  hidden: { label: 'Masque', className: 'bg-[#f2ece7] text-[#6d5a50]' },
  read: { label: 'Lu', className: 'bg-[#f1ebe3] text-[#6d5a50]' },
  'in-progress': { label: 'En cours', className: 'bg-[#e9effc] text-[#3d5da0]' },
  resolved: { label: 'Traite', className: 'bg-[#e6f4ec] text-[#2d7a55]' },
  review: { label: 'Relecture', className: 'bg-[#f4ecd8] text-[#8a6b39]' },
  public: { label: 'Public', className: 'bg-[#e6f4ec] text-[#2d7a55]' },
  private: { label: 'Prive', className: 'bg-[#f5ece8] text-[#755b4d]' },
  'super-admin': { label: 'Super admin', className: 'bg-[#ece7fb] text-[#5f4c8d]' },
  'content-admin': { label: 'Admin contenu', className: 'bg-[#e7f2f6] text-[#305f76]' },
  'rental-manager': { label: 'Gest. location', className: 'bg-[#f8efe6] text-[#925f41]' },
  'sales-manager': { label: 'Gest. vente', className: 'bg-[#f3efdc] text-[#80703c]' },
  reader: { label: 'Lecteur', className: 'bg-[#efeae5] text-[#6d5a50]' },
  active: { label: 'Actif', className: 'bg-[#e6f4ec] text-[#2d7a55]' },
  pending: { label: 'En attente', className: 'bg-[#f7eedc] text-[#8c6834]' },
  disabled: { label: 'Desactive', className: 'bg-[#f6e4e2] text-[#9d473d]' },
  complete: { label: 'Complet', className: 'bg-[#e6f4ec] text-[#2d7a55]' },
}

export function StatusBadge({ status }: { status: BadgeVariant }) {
  const badge = badgeMap[status]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]',
        badge.className,
      )}
    >
      {badge.label}
    </span>
  )
}

