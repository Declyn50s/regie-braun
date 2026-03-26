import { PageHeader } from '../../components/admin/PageHeader'
import { SectionCard } from '../../components/admin/SectionCard'

export function AdminSettingsPage() {
  return (
    <div>
      <PageHeader eyebrow="Paramètres" title="Paramètres transverses" description="Configuration de fonctionnement pour preparer les integrations, les notifications et les regles de publication." />

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Regles de publication" description="Piloter les exigences avant mise en ligne d un bien ou d un contenu.">
          <div className="space-y-3 text-sm text-[#66554a]">
            <div className="rounded-2xl bg-[#fcfaf8] p-4">Image principale obligatoire avant publication</div>
            <div className="rounded-2xl bg-[#fcfaf8] p-4">Au moins 4 photos pour les biens premium</div>
            <div className="rounded-2xl bg-[#fcfaf8] p-4">Checklist complete avant decision locative</div>
          </div>
        </SectionCard>

        <SectionCard title="Notifications internes" description="Centraliser les alertes metier prioritaires.">
          <div className="space-y-3 text-sm text-[#66554a]">
            <div className="rounded-2xl bg-[#fcfaf8] p-4">Email à la direction pour les demandes acceptées</div>
            <div className="rounded-2xl bg-[#fcfaf8] p-4">Relance automatique si dossier incomplet depuis 48h</div>
            <div className="rounded-2xl bg-[#fcfaf8] p-4">Alerte si message sans assignation</div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
