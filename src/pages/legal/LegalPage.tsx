import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'

const legalSections = [
  {
    title: 'Editeur du site',
    items: [
      'Regie Braun SA',
      'Rue Centrale 5, 1003 Lausanne',
      'Telephone: 021 342 52 52',
      'E-mail: contact@regiebraun.ch',
    ],
  },
  {
    title: 'Responsable de publication',
    items: ['La direction de Regie Braun SA.'],
  },
  {
    title: 'Hebergement',
    items: ['Informations d hebergement a completer selon votre prestataire technique de mise en production.'],
  },
  {
    title: 'Propriete intellectuelle',
    items: [
      'Les contenus, textes, visuels, logos et elements graphiques du site sont proteges par les droits applicables.',
      'Toute reproduction, representation ou reutilisation sans autorisation prealable est interdite.',
    ],
  },
] as const

const privacySections = [
  {
    title: 'Donnees collectees',
    text:
      'Les informations transmises via les formulaires du site peuvent inclure vos coordonnees, le contenu de votre demande et les informations necessaires au traitement de votre dossier.',
  },
  {
    title: 'Finalites',
    text:
      'Ces donnees sont utilisees pour repondre a vos demandes, assurer le suivi des prises de contact, traiter les candidatures et gerer la relation avec les utilisateurs du site.',
  },
  {
    title: 'Confidentialite',
    text:
      'Les donnees sont traitees de maniere confidentielle et accessibles uniquement aux personnes habilitees dans le cadre de leurs fonctions.',
  },
  {
    title: 'Conservation',
    text:
      'Les donnees sont conservees pendant la duree necessaire au traitement de la demande et au respect des obligations legales applicables.',
  },
  {
    title: 'Vos droits',
    text:
      'Vous pouvez demander l acces, la rectification ou la suppression de vos donnees, sous reserve des obligations legales de conservation. Pour toute demande, vous pouvez nous contacter a contact@regiebraun.ch.',
  },
  {
    title: 'Cookies et mesures techniques',
    text:
      'Le site peut utiliser des cookies ou outils techniques strictement necessaires a son fonctionnement et a la mesure d usage. Les parametres definitifs seront a preciser selon la configuration de production retenue.',
  },
] as const

export function LegalPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/mentions-legales-confidentialite" />
      <SiteBreadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Mentions legales et politique de confidentialite' },
        ]}
      />

      <main>
        <section className="border-b border-[#e3d8cf] bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                  Informations legales
                </div>
                <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-[#341d15] md:text-4xl">
                  Mentions legales et politique de confidentialite
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#66554a]">
                  Cette page rassemble les informations generales d identification de l editeur du site ainsi
                  que les principes de traitement des donnees personnelles.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-5 shadow-sm">
                <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Contact</div>
                <a href="mailto:contact@regiebraun.ch" className="mt-3 block text-2xl font-semibold text-[#4a2a20]">
                  contact@regiebraun.ch
                </a>
                <a href="tel:+41213425252" className="mt-2 block text-sm text-[#6d5b50]">
                  021 342 52 52
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Mentions legales</p>
              <div className="mt-6 space-y-5">
                {legalSections.map((section) => (
                  <section key={section.title} className="rounded-[1.5rem] bg-[#fcfaf8] p-5">
                    <h2 className="text-xl font-semibold text-[#321d15]">{section.title}</h2>
                    <div className="mt-4 space-y-2 text-sm leading-7 text-[#66554a]">
                      {section.items.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d8c8bc] bg-[#f8f3ef] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Confidentialite</p>
              <div className="mt-6 space-y-5">
                {privacySections.map((section) => (
                  <section key={section.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#321d15]">{section.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#66554a]">{section.text}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
