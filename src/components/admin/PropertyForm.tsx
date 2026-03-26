import type { Property } from '../../types/admin'
import { SectionCard } from './SectionCard'

const fieldClass =
  'w-full rounded-2xl border border-[#dfd1c6] bg-white px-4 py-3 text-sm text-[#3d2a21] outline-none transition focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]'

export function PropertyForm({ property }: { property?: Property }) {
  return (
    <div className="grid gap-6">
      <SectionCard title="Informations generales" eyebrow="Fiche bien">
        <div className="grid gap-4 md:grid-cols-2">
          <input defaultValue={property?.title} className={fieldClass} placeholder="Titre commercial" />
          <input defaultValue={property?.reference} className={fieldClass} placeholder="Reference" />
          <select defaultValue={property?.transaction} className={fieldClass}>
            <option value="location">Location</option>
            <option value="sale">Vente</option>
          </select>
          <input defaultValue={property?.type} className={fieldClass} placeholder="Type de bien" />
          <textarea defaultValue={property?.descriptionShort} className={`${fieldClass} min-h-[110px] md:col-span-2`} placeholder="Description courte" />
          <textarea defaultValue={property?.descriptionLong} className={`${fieldClass} min-h-[160px] md:col-span-2`} placeholder="Description longue" />
        </div>
      </SectionCard>

      <SectionCard title="Localisation et caracteristiques" description="Regrouper les informations utiles a la fiche publique et aux recherches admin.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <input defaultValue={property?.address} className={`${fieldClass} lg:col-span-2`} placeholder="Adresse" />
          <input defaultValue={property?.city} className={fieldClass} placeholder="Ville" />
          <input defaultValue={property?.district} className={fieldClass} placeholder="Secteur" />
          <input defaultValue={property?.rooms} className={fieldClass} placeholder="Pieces" />
          <input defaultValue={property?.surface} className={fieldClass} placeholder="Surface m2" />
          <input defaultValue={property?.price} className={fieldClass} placeholder="Prix ou loyer" />
          <input defaultValue={property?.availableFrom} className={fieldClass} placeholder="Disponibilite" />
        </div>
      </SectionCard>

      <SectionCard title="Media et publication" description="Preparer la diffusion publique, les badges et la visibilite.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-dashed border-[#d7c8bc] bg-[#fcfaf8] p-5 text-sm text-[#67564b]">
            Image principale
            <div className="mt-3 rounded-2xl bg-white p-4">Deposer une image hero</div>
          </div>
          <div className="rounded-2xl border border-dashed border-[#d7c8bc] bg-[#fcfaf8] p-5 text-sm text-[#67564b]">
            Galerie photos
            <div className="mt-3 rounded-2xl bg-white p-4">Ajouter ou reordonner les visuels</div>
          </div>
          <div className="rounded-2xl border border-dashed border-[#d7c8bc] bg-[#fcfaf8] p-5 text-sm text-[#67564b]">
            Documents PDF
            <div className="mt-3 rounded-2xl bg-white p-4">Bail, brochure, plans</div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]">
            Sauvegarder en brouillon
          </button>
          <button className="rounded-full bg-[#4a2a20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428]">
            Publier le bien
          </button>
          <button className="rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]">
            Dupliquer
          </button>
        </div>
      </SectionCard>
    </div>
  )
}
