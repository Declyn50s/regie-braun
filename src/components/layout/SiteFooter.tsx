import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Navigation',
    items: [
      { label: 'Accueil', href: '/', type: 'internal' },
      { label: 'Biens à louer', href: '/location', type: 'internal' },
      { label: 'Biens à vendre', href: '/vente', type: 'internal' },
      { label: 'Gérance', href: '/gerance', type: 'internal' },
      { label: 'Guide du locataire', href: '/guide-du-locataire', type: 'internal' },
      { label: 'Mentions légales', href: '/mentions-legales-confidentialite', type: 'internal' },
    ],
  },
  {
    title: 'Découvrir',
    items: [
      { label: 'La Régie', href: '/la-regie', type: 'internal' },
      { label: 'Jobs', href: '/jobs', type: 'internal' },
      { label: 'RSE', href: '/rse', type: 'internal' },
      { label: 'Publications', href: '/publications', type: 'internal' },
      { label: 'Téléchargements', href: '/telechargements', type: 'internal' },
      { label: 'Contact', href: '/contact', type: 'internal' },
    ],
  },
  {
    title: 'Coordonnées',
    items: [
      { label: '021 342 52 52', href: 'tel:+41213425252', type: 'external' },
      { label: 'contact@regiebraun.ch', href: 'mailto:contact@regiebraun.ch', type: 'external' },
      { label: 'Rue Centrale 5, 1003 Lausanne', href: '/contact', type: 'internal' },
      { label: 'Lun-Ven · 08h30-12h00 · 13h30-16h30', type: 'text' },
    ],
  },
] as const

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c9be] bg-white text-[#4a2a20] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f8f3ef]">
      {children}
    </span>
  )
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/regiebraunsa/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/regiebraun',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 8h2V4h-2c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/regiebraunsa',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 9v8" />
        <path d="M11 17v-4.2A2.8 2.8 0 0 1 13.8 10 2.2 2.2 0 0 1 16 12.2V17" />
        <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      </svg>
    ),
  },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfd4cb] bg-[#f3ede8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:px-10">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.18em] text-[#3d2319]">Régie Braun SA</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#67564b]">
            Location, gérance et vente à Lausanne avec une approche locale, claire et soignée.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
              >
                <SocialIcon>{item.icon}</SocialIcon>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8b6958]">{column.title}</p>
            <div className="mt-4 space-y-3 text-sm text-[#5e4d42]">
              {column.items.map((item) => {
                if (item.type === 'internal') {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block transition hover:text-[#4a2a20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </Link>
                  )
                }

                if (item.type === 'external') {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition hover:text-[#4a2a20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </a>
                  )
                }

                return <div key={item.label}>{item.label}</div>
              })}
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}
