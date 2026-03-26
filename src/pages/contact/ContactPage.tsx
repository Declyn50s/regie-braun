import { useState } from 'react'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteBreadcrumb } from '../../components/layout/SiteBreadcrumb'
import { SiteHeader } from '../../components/layout/SiteHeader'

const contactCards = [
  {
    eyebrow: 'Accueil',
    title: 'Rendez-vous et informations',
    text: 'Notre équipe vous répond pour vos demandes de location, de gérance, de vente ou pour toute question administrative.',
    cta: '021 342 52 52',
  },
  {
    eyebrow: 'E-mail',
    title: 'Un contact clair et rapide',
    text: 'Écrivez-nous à tout moment. Nous revenons vers vous avec une réponse soignée et orientée solution.',
    cta: 'contact@regiebraun.ch',
  },
  {
    eyebrow: 'Adresse',
    title: 'Régie Braun SA',
    text: 'Nous vous accueillons à Lausanne sur rendez-vous pour vous accompagner dans votre projet immobilier.',
    cta: 'Rue Centrale 5, Lausanne',
  },
]

const officeHours = [
  { day: 'Lundi à vendredi', hours: '08h30–12h00 · 13h30–16h30' },
  { day: 'Téléphone', hours: 'Réponse pendant les heures d’ouverture' },
  { day: 'Visites en agence', hours: 'Sur rendez-vous' },
]

const serviceTopics = ['Location', 'Gérance', 'Vente', 'Demande administrative']

const fieldClass =
  'w-full rounded-2xl border border-[#dfd1c6] bg-[#fcfaf8] px-4 py-3 text-sm text-[#4e3a30] transition outline-none placeholder:text-[#a0897c] focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]'

export function ContactPage() {
  const [isSent, setIsSent] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader currentPath="/contact" />
      <SiteBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]} />

      <main>
        <section className="border-b border-[#e3d8cf] bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
            <div className="mt-2 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
                  Votre interlocuteur immobilier
                </div>
                <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-[#341d15] md:text-4xl">
                  Parlons de votre projet avec une équipe locale, disponible et attentive.
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#66554a]">
                  Que vous cherchiez un logement, une régie de confiance ou un accompagnement pour
                  une vente, nous vous orientons vers le bon interlocuteur avec une réponse claire et
                  rapide.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-5 shadow-sm">
                <div className="text-sm uppercase tracking-[0.14em] text-[#8f6d5a]">Coordonnées directes</div>
                <a href="tel:+41213425252" className="mt-3 block text-3xl font-semibold text-[#4a2a20]">
                  021 342 52 52
                </a>
                <a href="mailto:contact@regiebraun.ch" className="mt-2 block text-sm text-[#6d5b50]">
                  contact@regiebraun.ch
                </a>
                <div className="mt-4 rounded-2xl bg-[#f8f3ef] px-4 py-3 text-sm text-[#5a473d]">
                  Lun–Ven · 08h30–12h00 · 13h30–16h30
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[#e2d7cf] bg-white p-5 shadow-sm transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6d5a]">{card.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#321d15]">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#66554a]">{card.text}</p>
                <div className="mt-6 text-base font-semibold text-[#4a2a20]">{card.cta}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[#e2d7cf] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Formulaire</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#311d16]">
                    Dites-nous comment nous pouvons vous aider.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-[#d8c8bc] bg-[#fcfaf8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6c584d]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <form
                className="mt-6 grid gap-4 md:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  setIsSent(true)
                }}
              >
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                    Nom et prénom
                  </label>
                  <input id="contact-name" type="text" placeholder="Votre nom" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                    Adresse e-mail
                  </label>
                  <input id="contact-email" type="email" placeholder="nom@email.ch" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                    Téléphone
                  </label>
                  <input id="contact-phone" type="tel" placeholder="021 000 00 00" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-topic" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                    Sujet
                  </label>
                  <select id="contact-topic" className={fieldClass} defaultValue={serviceTopics[0]}>
                    {serviceTopics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7568]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Décrivez brièvement votre demande."
                    className="w-full rounded-[1.5rem] border border-[#dfd1c6] bg-[#fcfaf8] px-4 py-4 text-sm text-[#4e3a30] transition outline-none placeholder:text-[#a0897c] focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="flex flex-col gap-3 rounded-[1.5rem] bg-[#f8f3ef] p-4 text-sm leading-6 text-[#66554a] sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p>
                        Vos informations sont traitées de manière confidentielle et utilisées
                        uniquement pour répondre à votre demande.
                      </p>
                      {isSent ? (
                        <p className="mt-2 font-medium text-[#4d7559]">
                          Votre message est prêt côté interface. Cette démo locale ne transmet pas
                          encore les données à un serveur.
                        </p>
                      ) : null}
                    </div>
                    <button className="rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428]">
                      Envoyer la demande
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              <section className="rounded-[2rem] bg-[#4a2a20] p-7 text-white shadow-[0_24px_60px_rgba(51,28,19,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9c0b3]">Horaires</p>
                <h3 className="mt-3 text-2xl font-semibold">Une présence claire et accessible.</h3>
                <div className="mt-6 space-y-3">
                  {officeHours.map((item) => (
                    <div key={item.day} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-[#e7d3c7]">{item.day}</div>
                      <div className="mt-2 text-sm font-medium text-white">{item.hours}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="overflow-hidden rounded-[2rem] border border-[#e2d7cf] bg-white shadow-sm">
                <div className="border-b border-[#eee4dc] px-6 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Nous situer</p>
                  <h3 className="mt-1 text-xl font-semibold text-[#321d15]">Lausanne</h3>
                </div>
                <div className="h-[320px] bg-[linear-gradient(135deg,#d9c7b8,#f1e9e2)] p-6">
                  <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_35%),linear-gradient(135deg,#b8a08f,#ddd0c3)] text-center text-[#4a2a20] shadow-inner">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c6a58]">Agence</div>
                      <div className="mt-3 text-2xl font-semibold">Régie Braun SA</div>
                      <div className="mt-2 text-sm">Rue Centrale 5 · 1003 Lausanne</div>
                    </div>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
