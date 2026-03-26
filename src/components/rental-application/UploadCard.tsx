import type { ChangeEvent } from 'react'
import type { DocumentRequirement, UploadedDocument } from '../../types/rentalApplication'

type UploadCardProps = {
  requirement: DocumentRequirement
  uploadedFile?: UploadedDocument
  error?: string
  onFileSelect: (requirementId: string, fileName: string) => void
}

export function UploadCard({ requirement, uploadedFile, error, onFileSelect }: UploadCardProps) {
  const status = uploadedFile?.status === 'uploaded' ? 'reçu' : 'en attente'
  const inputId = `upload-${requirement.id}`

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    onFileSelect(requirement.id, file.name)
  }

  return (
    <div
      className={`rounded-[1.5rem] border p-4 shadow-sm ${
        error ? 'border-[#b55a46] bg-white' : 'border-[#e2d7cf] bg-white'
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-lg font-semibold text-[#321d15]">{requirement.title}</p>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                requirement.required
                  ? 'bg-[#f1dfd4] text-[#8d4f3f]'
                  : 'bg-[#f4ede7] text-[#8f6d5a]'
              }`}
            >
              {requirement.required ? 'Obligatoire' : 'Optionnel'}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-[#66554a]">{requirement.description}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === 'reçu' ? 'bg-[#e4efe7] text-[#4d7559]' : 'bg-[#f8f3ef] text-[#8f6d5a]'
          }`}
        >
          {status}
        </span>
      </div>

      <label
        htmlFor={inputId}
        className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[#d7c8bc] bg-[#fcfaf8] px-5 py-6 text-center transition hover:bg-[#f8f3ef]"
      >
        <span className="text-sm font-semibold text-[#4a2a20]">Déposer un document</span>
        <span className="mt-2 text-sm text-[#6d5b50]">
          PDF, JPG ou PNG. Cliquez pour sélectionner un fichier.
        </span>
        {uploadedFile ? (
          <span className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#4a2a20] shadow-sm">
            {uploadedFile.fileName}
          </span>
        ) : null}
        <input id={inputId} type="file" className="sr-only" onChange={handleChange} />
      </label>

      {error ? <p className="mt-3 text-sm text-[#b55a46]">{error}</p> : null}
    </div>
  )
}
