import {
  CalendarDays,
  Copy,
  CopyPlus,
  Eye,
  EyeOff,
  ImagePlus,
  Lock,
  Save,
  Settings2,
  SquareArrowOutUpRight,
  Trash2,
  Upload,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { Property, PropertyStatus, PropertyTransaction, VisibilityStatus } from '../../types/admin'
import { StatusBadge } from './StatusBadge'
import { cn, formatCurrency, formatDateLabel } from './utils'

const inputClass =
  'w-full rounded-2xl border border-[#dfd1c6] bg-white px-4 py-3 text-sm text-[#3d2a21] outline-none transition placeholder:text-[#9c8576] focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]'

const textareaClass = `${inputClass} resize-none`

const tabItems = [
  { id: 'annonce', label: 'Annonce' },
  { id: 'photos', label: 'Photos' },
  { id: 'options', label: 'Options' },
  { id: 'visite', label: 'Visite' },
  { id: 'publication', label: 'Publication' },
] as const

type TabId = (typeof tabItems)[number]['id']

type VisitFormState = {
  contact: string
  date: string
  startTime: string
  endTime: string
  notes: string
}

type EditorMetaState = {
  editorialStatus: string
  mapSettings: string
  seo: string
}

const optionGroups = [
  {
    title: 'Equipements principaux',
    items: ['Balcon', 'Ascenseur', 'Cave', 'Terrasse', 'Jardin'],
  },
  {
    title: 'Confort & services',
    items: ['Service immeuble', 'Lave-linge commun', 'Seche-linge commun', 'Cuisine agencee', 'Animaux autorises'],
  },
  {
    title: 'Stationnement',
    items: ['Parking exterieur', 'Parking interieur', 'Garage box', 'Moto'],
  },
] as const

const summaryLabels = {
  location: 'Location',
  sale: 'Vente',
}

const statusLabels: Record<PropertyStatus, string> = {
  draft: 'Brouillon',
  published: 'Publie',
  reserved: 'Reserve',
  rented: 'Loue',
  sold: 'Vendu',
  archived: 'Archive',
}

const visibilityLabels: Record<VisibilityStatus, string> = {
  visible: 'Visible',
  hidden: 'Masque',
}

function Panel({
  title,
  description,
  action,
  children,
  className = '',
}: {
  title: string
  description?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn('rounded-[1.75rem] border border-[#e2d7cf] bg-white p-5 shadow-sm', className)}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-[#2f1e17]">{title}</h2>
          {description ? <p className="mt-1 text-sm leading-6 text-[#6b584d]">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  )
}

function LockedSummaryItem({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-[#eadfd5] bg-[#fcfaf8] px-3.5 py-3">
      <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">
        <span>{label}</span>
        <Lock className="h-3.5 w-3.5 shrink-0" />
      </div>
      <div className="mt-1.5 flex items-center justify-between gap-3">
        <div className="min-w-0 truncate text-sm font-semibold text-[#311d16]">{value}</div>
        {accent ? <div className="shrink-0">{accent}</div> : null}
      </div>
    </div>
  )
}

function DrawerField({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{label}</span>
      {children}
    </label>
  )
}

function buildSnapshot(property: Property, selectedOptions: string[], visitForm: VisitFormState, meta: EditorMetaState) {
  return JSON.stringify({
    property,
    selectedOptions: [...selectedOptions].sort(),
    visitForm,
    meta,
  })
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10)
}

function normalizeDroppedFiles(files: FileList | File[]) {
  return Array.from(files).filter((file) => file.type.startsWith('image/'))
}

export function SimplePropertyEditor({ property }: { property: Property }) {
  const [activeTab, setActiveTab] = useState<TabId>('annonce')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [summaryUnlocked, setSummaryUnlocked] = useState(false)
  const [editableProperty, setEditableProperty] = useState<Property>(property)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'Balcon',
    'Ascenseur',
    'Cuisine agencee',
    'Parking interieur',
  ])
  const [visitForm, setVisitForm] = useState<VisitFormState>({
    contact: 'Laetitia Rey',
    date: '2026-04-11',
    startTime: '17:00',
    endTime: '18:30',
    notes:
      'Visite sans inscription prealable. Sonnette Braun Location. Merci de vous presenter avec une piece d identite.',
  })
  const [editorMeta, setEditorMeta] = useState<EditorMetaState>({
    editorialStatus: 'a-valider',
    mapSettings: `${property.address}, ${property.city}`,
    seo: `${property.title} a ${property.city} - annonce Regie Braun.`,
  })
  const [draggedPhotoIndex, setDraggedPhotoIndex] = useState<number | null>(null)
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([])
  const [saveNotice, setSaveNotice] = useState('Aucune modification enregistree pour le moment.')
  const createdUrlsRef = useRef<string[]>([])
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [lastSavedSnapshot, setLastSavedSnapshot] = useState(() =>
    buildSnapshot(
      property,
      ['Balcon', 'Ascenseur', 'Cuisine agencee', 'Parking interieur'],
      {
        contact: 'Laetitia Rey',
        date: '2026-04-11',
        startTime: '17:00',
        endTime: '18:30',
        notes:
          'Visite sans inscription prealable. Sonnette Braun Location. Merci de vous presenter avec une piece d identite.',
      },
      {
        editorialStatus: 'a-valider',
        mapSettings: `${property.address}, ${property.city}`,
        seo: `${property.title} a ${property.city} - annonce Regie Braun.`,
      },
    ),
  )

  useEffect(() => {
    setEditableProperty(property)
    setSelectedOptions(['Balcon', 'Ascenseur', 'Cuisine agencee', 'Parking interieur'])
    setVisitForm({
      contact: 'Laetitia Rey',
      date: '2026-04-11',
      startTime: '17:00',
      endTime: '18:30',
      notes:
        'Visite sans inscription prealable. Sonnette Braun Location. Merci de vous presenter avec une piece d identite.',
    })
    setEditorMeta({
      editorialStatus: 'a-valider',
      mapSettings: `${property.address}, ${property.city}`,
      seo: `${property.title} a ${property.city} - annonce Regie Braun.`,
    })
    setDraggedPhotoIndex(null)
    setSelectedPhotos([])
    setSaveNotice('Aucune modification enregistree pour le moment.')
    setLastSavedSnapshot(
      buildSnapshot(
        property,
        ['Balcon', 'Ascenseur', 'Cuisine agencee', 'Parking interieur'],
        {
          contact: 'Laetitia Rey',
          date: '2026-04-11',
          startTime: '17:00',
          endTime: '18:30',
          notes:
            'Visite sans inscription prealable. Sonnette Braun Location. Merci de vous presenter avec une piece d identite.',
        },
        {
          editorialStatus: 'a-valider',
          mapSettings: `${property.address}, ${property.city}`,
          seo: `${property.title} a ${property.city} - annonce Regie Braun.`,
        },
      ),
    )
  }, [property])

  useEffect(() => {
    return () => {
      createdUrlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  const totalRent = editableProperty.price + editableProperty.charges
  const tabLabel = tabItems.find((item) => item.id === activeTab)?.label ?? 'Annonce'
  const allPhotos = useMemo(
    () => [editableProperty.heroImage, ...editableProperty.gallery].filter((image): image is string => Boolean(image)),
    [editableProperty.gallery, editableProperty.heroImage],
  )
  const currentSnapshot = useMemo(
    () => buildSnapshot(editableProperty, selectedOptions, visitForm, editorMeta),
    [editableProperty, selectedOptions, visitForm, editorMeta],
  )
  const hasUnsavedChanges = currentSnapshot !== lastSavedSnapshot

  const summaryItems = useMemo(
    () => [
      { label: 'Ref', value: editableProperty.reference },
      { label: 'Transaction', value: summaryLabels[editableProperty.transaction] },
      { label: 'Type', value: editableProperty.type },
      { label: 'Ville', value: editableProperty.city },
      {
        label: 'Total',
        value:
          editableProperty.transaction === 'location'
            ? `${formatCurrency(editableProperty.price, 'sale')} + ${formatCurrency(editableProperty.charges, 'sale')} = ${formatCurrency(totalRent, 'location')}`
            : formatCurrency(editableProperty.price, 'sale'),
      },
      { label: 'Pieces', value: `${editableProperty.rooms}` },
      { label: 'Surface', value: `${editableProperty.surface} m2` },
      { label: 'Dispo', value: formatDateLabel(editableProperty.availableFrom) },
      { label: 'Statut', value: statusLabels[editableProperty.status], accent: <StatusBadge status={editableProperty.status} /> },
    ],
    [editableProperty.availableFrom, editableProperty.charges, editableProperty.city, editableProperty.price, editableProperty.reference, editableProperty.rooms, editableProperty.status, editableProperty.surface, editableProperty.transaction, editableProperty.type, totalRent],
  )

  function toggleOption(option: string) {
    setSelectedOptions((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    )
  }

  function updatePropertyField<K extends keyof Property>(field: K, value: Property[K]) {
    setEditableProperty((current) => ({ ...current, [field]: value }))
  }

  function updateVisitField<K extends keyof VisitFormState>(field: K, value: VisitFormState[K]) {
    setVisitForm((current) => ({ ...current, [field]: value }))
  }

  function updateMetaField<K extends keyof EditorMetaState>(field: K, value: EditorMetaState[K]) {
    setEditorMeta((current) => ({ ...current, [field]: value }))
  }

  function saveChanges(nextStatus?: PropertyStatus, nextVisibility?: VisibilityStatus) {
    setEditableProperty((current) => {
      const updatedProperty = {
        ...current,
        status: nextStatus ?? current.status,
        visibility: nextVisibility ?? current.visibility,
        updatedAt: todayIsoDate(),
      }
      setLastSavedSnapshot(buildSnapshot(updatedProperty, selectedOptions, visitForm, editorMeta))
      setSaveNotice(`Modifications enregistrees le ${formatDateLabel(updatedProperty.updatedAt)}.`)
      return updatedProperty
    })
  }

  function applyQuickStatus(action: 'save' | 'publish' | 'reserve' | 'hide') {
    if (action === 'publish') {
      saveChanges('published', 'visible')
      return
    }

    if (action === 'reserve') {
      saveChanges('reserved', 'visible')
      return
    }

    if (action === 'hide') {
      saveChanges(undefined, 'hidden')
      return
    }

    saveChanges()
  }

  function syncPhotos(nextPhotos: string[]) {
    setEditableProperty((current) => ({
      ...current,
      heroImage: nextPhotos[0] ?? '',
      gallery: nextPhotos.slice(1),
    }))
  }

  function addPhotos(files: FileList | File[]) {
    const nextFiles = normalizeDroppedFiles(files)
    if (!nextFiles.length) return

    const nextUrls = nextFiles.map((file) => URL.createObjectURL(file))
    createdUrlsRef.current.push(...nextUrls)
    syncPhotos([...allPhotos, ...nextUrls])
    setSaveNotice(`${nextFiles.length} photo${nextFiles.length > 1 ? 's ajoutees' : ' ajoutee'}. Pensez a enregistrer.`)
  }

  function togglePhotoSelection(index: number) {
    setSelectedPhotos((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    )
  }

  function deleteSelectedPhotos() {
    if (!selectedPhotos.length) return

    const selection = new Set(selectedPhotos)
    syncPhotos(allPhotos.filter((_, index) => !selection.has(index)))
    setSelectedPhotos([])
    setSaveNotice(`${selection.size} photo${selection.size > 1 ? 's supprimees' : ' supprimee'}. Pensez a enregistrer.`)
  }

  function movePhoto(fromIndex: number, toIndex: number) {
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return

    const nextPhotos = [...allPhotos]
    const [moved] = nextPhotos.splice(fromIndex, 1)
    nextPhotos.splice(toIndex, 0, moved)
    syncPhotos(nextPhotos)
    setSelectedPhotos((current) =>
      current.map((index) => {
        if (index === fromIndex) return toIndex
        if (fromIndex < toIndex && index > fromIndex && index <= toIndex) return index - 1
        if (fromIndex > toIndex && index >= toIndex && index < fromIndex) return index + 1
        return index
      }),
    )
    setSaveNotice('Ordre des photos mis a jour. Pensez a enregistrer.')
  }

  return (
    <>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-start">
        <div className="flex min-h-[calc(100vh-16rem)] flex-col gap-4">
          <Panel
            title="Publication rapide"
            description={hasUnsavedChanges ? 'Des modifications locales sont en attente d enregistrement.' : saveNotice}
          >
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyQuickStatus('publish')}
                className="rounded-full bg-[#4a2a20] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
              >
                Publier
              </button>
              <button
                type="button"
                onClick={() => applyQuickStatus('reserve')}
                className="rounded-full border border-[#cfb8a7] bg-[#fffaf6] px-5 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
              >
                Reserver
              </button>
              <button
                type="button"
                onClick={() => applyQuickStatus('hide')}
                className="rounded-full border border-[#d8c8bc] bg-white px-5 py-2.5 text-sm font-semibold text-[#5d493f] transition hover:bg-[#f8f3ef]"
              >
                Masquer
              </button>
              <button
                type="button"
                onClick={() => applyQuickStatus('save')}
                className="inline-flex items-center gap-2 rounded-full border border-[#cdb9ac] px-5 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
              >
                <Save className="h-4 w-4" />
                Enregistrer
              </button>
            </div>
          </Panel>

          <Panel
            title="Resume verrouille"
            description="Les donnees sensibles restent visibles et protegees au quotidien."
            action={
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIsAdvancedOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#cdb9ac] px-4 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  <Settings2 className="h-4 w-4" />
                  Reglages avances
                </button>
                <button
                  type="button"
                  onClick={() => setSummaryUnlocked((value) => !value)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#4a2a20] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
                >
                  {summaryUnlocked ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {summaryUnlocked ? 'Reverrouiller' : 'Deverrouiller'}
                </button>
              </div>
            }
          >
            <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
              {summaryItems.map((item) => (
                <LockedSummaryItem key={item.label} label={item.label} value={item.value} accent={item.accent} />
              ))}
            </div>
            {summaryUnlocked ? (
              <div className="mt-3 rounded-2xl border border-[#eadfd5] bg-[#f8f3ef] px-4 py-3 text-sm text-[#5d493f]">
                Mode deverrouille actif. Les ajustements sensibles restent confines au panneau avance pour eviter les erreurs.
              </div>
            ) : null}
          </Panel>

          <div className="flex min-h-0 flex-1 flex-col rounded-[1.9rem] border border-[#e2d7cf] bg-white shadow-sm">
            <div className="border-b border-[#efe4db] px-4 py-3 sm:px-5">
              <div className="flex flex-wrap gap-2">
                {tabItems.map((tab) => {
                  const isActive = tab.id === activeTab

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-semibold transition',
                        isActive
                          ? 'bg-[#4a2a20] text-white shadow-sm'
                          : 'border border-[#ddcec3] bg-[#fcfaf8] text-[#5d493f] hover:bg-[#f4ece6]',
                      )}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
              {activeTab === 'annonce' ? (
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]">
                  <Panel title="Annonce" description="Les contenus visibles sur la fiche publique.">
                    <div className="grid gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Titre front</span>
                        <input
                          value={editableProperty.title}
                          onChange={(event) => updatePropertyField('title', event.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <div className="grid gap-4 xl:grid-cols-2">
                        <label className="grid gap-2">
                          <span className="text-sm font-semibold text-[#4b372e]">Accroche</span>
                          <textarea
                            value={editableProperty.descriptionShort}
                            onChange={(event) => updatePropertyField('descriptionShort', event.target.value)}
                            className={`${textareaClass} min-h-[112px]`}
                          />
                        </label>
                        <label className="grid gap-2">
                          <span className="text-sm font-semibold text-[#4b372e]">Quartier</span>
                          <textarea
                            value={editableProperty.district}
                            onChange={(event) => updatePropertyField('district', event.target.value)}
                            className={`${textareaClass} min-h-[112px]`}
                          />
                        </label>
                      </div>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Description du bien</span>
                        <textarea
                          value={editableProperty.descriptionLong}
                          onChange={(event) => updatePropertyField('descriptionLong', event.target.value)}
                          className={`${textareaClass} min-h-[160px]`}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Arguments de confort</span>
                        <textarea
                          defaultValue="Luminosite traversante, rangements integres, espaces bien distribues et ambiance calme."
                          className={`${textareaClass} min-h-[112px]`}
                        />
                      </label>
                    </div>
                  </Panel>

                  <Panel title="Lecture rapide" description="Repere editorial pour harmoniser l annonce.">
                    <div className="space-y-3 rounded-[1.4rem] border border-[#eadfd5] bg-[#fcfaf8] p-4 text-sm text-[#5d493f]">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Adresse</div>
                        <div className="mt-1 font-semibold text-[#311d16]">{editableProperty.address}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Ton attendu</div>
                        <div className="mt-1">Sobre, rassurant et oriente qualite de vie.</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Point fort</div>
                        <div className="mt-1">Mettre en avant le balcon, la lumiere et la proximite des commodites.</div>
                      </div>
                    </div>
                  </Panel>
                </div>
              ) : null}

              {activeTab === 'photos' ? (
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]">
                  <Panel title="Photos" description="Visuels principaux et galerie secondaire.">
                    <div className="grid gap-4">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(event) => {
                          if (event.target.files?.length) {
                            addPhotos(event.target.files)
                            event.target.value = ''
                          }
                        }}
                      />
                      <div
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) => {
                          event.preventDefault()
                          if (event.dataTransfer.files?.length) {
                            addPhotos(event.dataTransfer.files)
                          }
                        }}
                        className="rounded-[1.5rem] border border-dashed border-[#cfb8a7] bg-[#fcfaf8] p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-[#311d16]">Glissez-deposez les photos ici</div>
                            <div className="mt-1 text-sm text-[#6b584d]">Ajout direct, selection rapide et reorganisation par glisser-deposer.</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center gap-2 rounded-full border border-[#cdb9ac] px-4 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                          >
                            <Upload className="h-4 w-4" />
                            Ajouter
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={deleteSelectedPhotos}
                          disabled={!selectedPhotos.length}
                          className={cn(
                            'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition',
                            selectedPhotos.length
                              ? 'border border-[#d9b6aa] bg-[#fff3f0] text-[#8a4334] hover:bg-[#fde7e0]'
                              : 'cursor-not-allowed border border-[#ebe1da] bg-[#f8f3ef] text-[#b19f93]',
                          )}
                        >
                          <Trash2 className="h-4 w-4" />
                          Supprimer la selection
                        </button>
                        <div className="text-sm text-[#6b584d]">
                          {selectedPhotos.length
                            ? `${selectedPhotos.length} photo${selectedPhotos.length > 1 ? 's selectionnees' : ' selectionnee'}`
                            : 'Selectionnez une ou plusieurs photos puis supprimez-les en un clic.'}
                        </div>
                      </div>

                      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
                        <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Photo principale</div>
                          <img
                            src={editableProperty.heroImage || 'https://placehold.co/1000x700/f4ede7/4a2a20?text=Photo+principale'}
                            alt={editableProperty.title}
                            className="mt-3 h-60 w-full rounded-[1.2rem] object-cover"
                          />
                          <div className="mt-3 text-sm text-[#6b584d]">La premiere vignette devient automatiquement la photo principale.</div>
                        </div>
                        <div className="space-y-3">
                          <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-4">
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Galerie</div>
                            <div className="mt-3 grid grid-cols-2 gap-3">
                              {(allPhotos.length ? allPhotos : ['']).map((image, index) => (
                                <div
                                  key={`${image || 'placeholder'}-${index}`}
                                  draggable={Boolean(image)}
                                  onDragStart={() => setDraggedPhotoIndex(index)}
                                  onDragOver={(event) => event.preventDefault()}
                                  onDrop={(event) => {
                                    event.preventDefault()
                                    if (event.dataTransfer.files?.length) {
                                      addPhotos(event.dataTransfer.files)
                                      return
                                    }
                                    if (draggedPhotoIndex !== null) {
                                      movePhoto(draggedPhotoIndex, index)
                                      setDraggedPhotoIndex(null)
                                    }
                                  }}
                                  onDragEnd={() => setDraggedPhotoIndex(null)}
                                  className={cn(
                                    'rounded-[1.1rem] border bg-white p-2 transition',
                                    image ? 'cursor-grab active:cursor-grabbing' : '',
                                    draggedPhotoIndex === index ? 'scale-[0.98] opacity-70' : '',
                                    selectedPhotos.includes(index) ? 'border-[#4a2a20]' : 'border-[#eadfd5]',
                                  )}
                                >
                                  <img
                                    src={image || 'https://placehold.co/400x320/f4ede7/4a2a20?text=Photo'}
                                    alt={`Galerie ${index + 1}`}
                                    className="h-24 w-full rounded-xl object-cover"
                                  />
                                  <div className="mt-2 flex items-center justify-between gap-2">
                                    <div className="space-y-1">
                                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8c6a58]">
                                        {index === 0 ? 'Principale' : `Photo ${index + 1}`}
                                      </span>
                                      {image ? <span className="block text-[11px] text-[#8c6a58]">Glisser pour changer l ordre</span> : null}
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => togglePhotoSelection(index)}
                                      className={cn(
                                        'rounded-full px-2.5 py-1 text-xs font-semibold transition',
                                        selectedPhotos.includes(index)
                                          ? 'bg-[#4a2a20] text-white'
                                          : 'border border-[#d8c8bc] text-[#5d493f] hover:bg-[#f8f3ef]',
                                      )}
                                    >
                                      {selectedPhotos.includes(index) ? 'Retirer' : 'Selectionner'}
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#cdb9ac] px-4 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                          >
                            <ImagePlus className="h-4 w-4" />
                            Ajouter une photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </Panel>

                  <Panel title="Vue front" description="Verification rapide du visuel principal.">
                    <div className="space-y-3 rounded-[1.4rem] border border-[#eadfd5] bg-[#fcfaf8] p-4">
                      <img
                        src={editableProperty.heroImage || 'https://placehold.co/800x560/f4ede7/4a2a20?text=Preview'}
                        alt={editableProperty.title}
                        className="h-36 w-full rounded-[1.15rem] object-cover"
                      />
                      <div className="text-sm font-semibold text-[#311d16]">{editableProperty.title}</div>
                      <div className="text-sm text-[#6b584d]">{editableProperty.city}</div>
                    </div>
                  </Panel>
                </div>
              ) : null}

              {activeTab === 'options' ? (
                <Panel title="Options du bien" description="Selection rapide par categories.">
                  <div className="grid gap-4 xl:grid-cols-3">
                    {optionGroups.map((group) => (
                      <div key={group.title} className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{group.title}</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {group.items.map((item) => {
                            const active = selectedOptions.includes(item)

                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => toggleOption(item)}
                                className={cn(
                                  'rounded-full border px-3.5 py-2 text-sm font-semibold transition',
                                  active
                                    ? 'border-[#4a2a20] bg-[#4a2a20] text-white'
                                    : 'border-[#d8c8bc] bg-white text-[#5f4c42] hover:bg-[#f6eee8]',
                                )}
                              >
                                {item}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              ) : null}

                {activeTab === 'visite' ? (
                  <Panel title="Visite" description="Informations pratiques pour les candidats.">
                    <div className="grid gap-4 xl:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Contact visite</span>
                        <input
                          value={visitForm.contact}
                          onChange={(event) => updateVisitField('contact', event.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Date</span>
                        <input
                          type="date"
                          value={visitForm.date}
                          onChange={(event) => updateVisitField('date', event.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Heure debut</span>
                        <input
                          type="time"
                          value={visitForm.startTime}
                          onChange={(event) => updateVisitField('startTime', event.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Heure fin</span>
                        <input
                          type="time"
                          value={visitForm.endTime}
                          onChange={(event) => updateVisitField('endTime', event.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <label className="grid gap-2 xl:col-span-2">
                        <span className="text-sm font-semibold text-[#4b372e]">Texte visite</span>
                        <textarea
                          value={visitForm.notes}
                          onChange={(event) => updateVisitField('notes', event.target.value)}
                          className={`${textareaClass} min-h-[120px]`}
                        />
                      </label>
                  </div>
                </Panel>
              ) : null}

              {activeTab === 'publication' ? (
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]">
                  <Panel title="Publication" description="Pilotage simple du statut et de la diffusion.">
                    <div className="grid gap-4 xl:grid-cols-[15rem_minmax(0,1fr)]">
                      <div className="space-y-3 rounded-[1.4rem] border border-[#eadfd5] bg-[#fcfaf8] p-4">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Statut</div>
                          <div className="mt-2"><StatusBadge status={editableProperty.status} /></div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Visibilite</div>
                          <div className="mt-2"><StatusBadge status={editableProperty.visibility} /></div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Mise a jour</div>
                          <div className="mt-2 text-sm font-semibold text-[#311d16]">{formatDateLabel(editableProperty.updatedAt)}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap content-start gap-3">
                        <button
                          type="button"
                          onClick={() => applyQuickStatus('save')}
                          className="rounded-full border border-[#cdb9ac] px-5 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                        >
                          Enregistrer
                        </button>
                        <button className="rounded-full border border-[#cdb9ac] px-5 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]">
                          Previsualiser
                        </button>
                        <button
                          type="button"
                          onClick={() => applyQuickStatus('publish')}
                          className="rounded-full bg-[#4a2a20] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
                        >
                          Publier
                        </button>
                        <button
                          type="button"
                          onClick={() => applyQuickStatus('hide')}
                          className="rounded-full border border-[#d8c8bc] bg-white px-5 py-2.5 text-sm font-semibold text-[#5d493f] transition hover:bg-[#f8f3ef]"
                        >
                          Masquer
                        </button>
                      </div>
                    </div>
                  </Panel>

                  <Panel title="Diffusion" description="Controle editorial rapide.">
                    <div className="space-y-3 rounded-[1.4rem] border border-[#eadfd5] bg-[#fcfaf8] p-4 text-sm text-[#5d493f]">
                      <div className="flex items-center justify-between gap-3">
                        <span>Visibilite site</span>
                        <strong className="text-[#311d16]">{visibilityLabels[editableProperty.visibility]}</strong>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span>Transaction</span>
                        <strong className="text-[#311d16]">{summaryLabels[editableProperty.transaction]}</strong>
                      </div>
                    </div>
                  </Panel>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-6">
          <Panel title="Actions rapides">
            <div className="space-y-2.5">
              <button className="flex w-full items-center justify-between rounded-2xl border border-[#e2d7cf] bg-[#fcfaf8] px-4 py-3 text-sm font-semibold text-[#341d15] transition hover:bg-[#f6eee8]">
                Voir la fiche publique
                <SquareArrowOutUpRight className="h-4 w-4 text-[#8c6a58]" />
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-[#e2d7cf] bg-[#fcfaf8] px-4 py-3 text-sm font-semibold text-[#341d15] transition hover:bg-[#f6eee8]">
                Copier l URL
                <Copy className="h-4 w-4 text-[#8c6a58]" />
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-[#e2d7cf] bg-[#fcfaf8] px-4 py-3 text-sm font-semibold text-[#341d15] transition hover:bg-[#f6eee8]">
                Dupliquer le bien
                <CopyPlus className="h-4 w-4 text-[#8c6a58]" />
              </button>
            </div>
          </Panel>

          <Panel title="Mini preview" description={tabLabel}>
            <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[#fcfaf8] p-3">
              <img
                src={editableProperty.heroImage || 'https://placehold.co/800x560/f4ede7/4a2a20?text=Preview'}
                alt={editableProperty.title}
                className="h-36 w-full rounded-[1.15rem] object-cover"
              />
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">{editableProperty.city}</div>
              <div className="mt-1 text-base font-semibold text-[#311d16]">{editableProperty.title}</div>
              <div className="mt-2 text-sm text-[#6b584d]">{editableProperty.descriptionShort}</div>
              <div className="mt-3 flex items-center justify-between gap-3 text-sm font-semibold text-[#311d16]">
                <span>{formatCurrency(totalRent, editableProperty.transaction)}</span>
                <StatusBadge status={editableProperty.status} />
              </div>
            </div>
          </Panel>
        </aside>
      </div>

      {isAdvancedOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#2f1e17]/22 backdrop-blur-[1px]">
          <button
            type="button"
            aria-label="Fermer les reglages avances"
            className="flex-1 cursor-default"
            onClick={() => setIsAdvancedOpen(false)}
          />
          <aside className="flex h-full w-full max-w-xl flex-col border-l border-[#dccdc1] bg-[#f8f3ef] shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#e4d8cf] px-5 py-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Reglages avances</div>
                <h3 className="mt-1 text-xl font-semibold text-[#2f1e17]">{editableProperty.reference}</h3>
                <p className="mt-1 text-sm text-[#66554a]">Les informations sensibles sont modifiables ici, hors du flux principal.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsAdvancedOpen(false)}
                className="rounded-full border border-[#d8c8bc] bg-white p-2 text-[#5d493f] transition hover:bg-[#f3ebe5]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <DrawerField label="Reference">
                    <input
                      value={editableProperty.reference}
                      onChange={(event) => updatePropertyField('reference', event.target.value)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Transaction">
                    <select
                      value={editableProperty.transaction}
                      onChange={(event) => updatePropertyField('transaction', event.target.value as PropertyTransaction)}
                      className={inputClass}
                    >
                      <option value="location">Location</option>
                      <option value="sale">Vente</option>
                    </select>
                  </DrawerField>
                  <DrawerField label="Type">
                    <input
                      value={editableProperty.type}
                      onChange={(event) => updatePropertyField('type', event.target.value)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Ville">
                    <input
                      value={editableProperty.city}
                      onChange={(event) => updatePropertyField('city', event.target.value)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Loyer">
                    <input
                      type="number"
                      value={editableProperty.price}
                      onChange={(event) => updatePropertyField('price', Number(event.target.value) || 0)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Charges">
                    <input
                      type="number"
                      value={editableProperty.charges}
                      onChange={(event) => updatePropertyField('charges', Number(event.target.value) || 0)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Pieces">
                    <input
                      type="number"
                      value={editableProperty.rooms}
                      onChange={(event) => updatePropertyField('rooms', Number(event.target.value) || 0)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Surface">
                    <input
                      type="number"
                      value={editableProperty.surface}
                      onChange={(event) => updatePropertyField('surface', Number(event.target.value) || 0)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Disponibilite">
                    <input
                      type="date"
                      value={editableProperty.availableFrom}
                      onChange={(event) => updatePropertyField('availableFrom', event.target.value)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="Statut commercial">
                    <select
                      value={editableProperty.status}
                      onChange={(event) => updatePropertyField('status', event.target.value as PropertyStatus)}
                      className={inputClass}
                    >
                      <option value="draft">Brouillon</option>
                      <option value="published">Publie</option>
                      <option value="reserved">Reserve</option>
                      <option value="rented">Loue</option>
                      <option value="sold">Vendu</option>
                      <option value="archived">Archive</option>
                    </select>
                  </DrawerField>
                  <DrawerField label="Visibilite">
                    <select
                      value={editableProperty.visibility}
                      onChange={(event) => updatePropertyField('visibility', event.target.value as VisibilityStatus)}
                      className={inputClass}
                    >
                      <option value="visible">Visible</option>
                      <option value="hidden">Masque</option>
                    </select>
                  </DrawerField>
                  <DrawerField label="Statut editorial">
                    <select
                      value={editorMeta.editorialStatus}
                      onChange={(event) => updateMetaField('editorialStatus', event.target.value)}
                      className={inputClass}
                    >
                      <option value="a-valider">A valider</option>
                      <option value="pret">Pret a publier</option>
                      <option value="archive">Archive</option>
                    </select>
                  </DrawerField>
                </div>

                <div className="grid gap-4">
                  <DrawerField label="Reglages carte">
                    <input
                      value={editorMeta.mapSettings}
                      onChange={(event) => updateMetaField('mapSettings', event.target.value)}
                      className={inputClass}
                    />
                  </DrawerField>
                  <DrawerField label="SEO">
                    <textarea
                      value={editorMeta.seo}
                      onChange={(event) => updateMetaField('seo', event.target.value)}
                      className={`${textareaClass} min-h-[96px]`}
                    />
                  </DrawerField>
                </div>

                <div className="rounded-[1.5rem] border border-[#e2d7cf] bg-white p-4 text-sm text-[#66554a]">
                  <div className="flex items-center gap-2 font-semibold text-[#311d16]">
                    <CalendarDays className="h-4 w-4 text-[#8c6a58]" />
                    Derniere mise a jour
                  </div>
                  <div className="mt-2">{formatDateLabel(editableProperty.updatedAt)}</div>
                  <div className="mt-3 rounded-2xl border border-[#eadfd5] bg-[#fcfaf8] px-3.5 py-3 text-sm text-[#5d493f]">
                    {hasUnsavedChanges ? 'Modifications en attente d enregistrement.' : saveNotice}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e4d8cf] px-5 py-4">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => applyQuickStatus('save')}
                  className="rounded-full border border-[#cdb9ac] px-5 py-2.5 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={() => setIsAdvancedOpen(false)}
                  className="rounded-full bg-[#4a2a20] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5a3428]"
                >
                  Fermer
                </button>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  )
}
