import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './LogoMark'

type SiteHeaderProps = {
  currentPath?: string
}

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Louer', href: '/location' },
  { label: 'Acheter / Vendre', href: '/vente' },
  { label: 'Gérance', href: '/gerance' },
  { label: 'La Régie', href: '/la-regie' },
  { label: 'Ressources', href: '/telechargements' },
]

const getActiveSection = (pathname: string) => {
  if (pathname === '/') return '/'
  if (
    pathname === '/location' ||
    pathname.startsWith('/location/') ||
    pathname === '/guide-du-locataire' ||
    pathname === '/demande-location'
  ) {
    return '/location'
  }
  if (pathname === '/vente') return '/vente'
  if (pathname === '/gerance') return '/gerance'
  if (pathname === '/la-regie' || pathname === '/rse' || pathname === '/publications') {
    return '/la-regie'
  }
  if (pathname === '/jobs') return '/jobs'
  if (pathname === '/telechargements') return '/telechargements'
  return ''
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const location = useLocation()
  const pathname = currentPath ?? location.pathname
  const activeSection = useMemo(() => getActiveSection(pathname), [pathname])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  const desktopLinkClass = (href: string) =>
    `relative pb-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 ${
      href === activeSection ? 'text-[#4a2a20]' : 'hover:text-[#4a2a20]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd1c8] bg-[#f7f3ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eadfd5] text-[#8b6a58] shadow-sm sm:h-12 sm:w-12">
            <LogoMark />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-[#3b2118] sm:text-lg sm:tracking-[0.22em]">
              Régie Braun SA
            </p>
            <p className="text-[11px] text-[#7c6a5f] sm:text-xs">Location · Gérance · Vente</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#5e4c42] lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const isActive = item.href === activeSection

            return (
              <NavLink key={item.label} to={item.href} className={desktopLinkClass(item.href)}>
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px rounded-full bg-[#8b6a58] transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 ${
              pathname === '/contact'
                ? 'bg-[#5a3428] text-white'
                : 'bg-[#4a2a20] text-white hover:bg-[#5a3428]'
            }`}
          >
            Nous contacter
          </Link>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c8bc] bg-white text-[#4a2a20] shadow-sm transition hover:bg-[#f8f3ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-[#2f241f]/35 backdrop-blur-[2px]"
          />
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 border-b border-[#ddd1c8] bg-[#f7f3ef] shadow-[0_18px_40px_rgba(60,36,24,0.12)]"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <nav className="space-y-2" aria-label="Navigation mobile">
                {navItems.map((item) => {
                  const isActive = item.href === activeSection

                  return (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 ${
                        isActive
                          ? 'border-[#cdb9ac] bg-[#f1e6de] text-[#4a2a20]'
                          : 'border-[#e2d7cf] bg-white text-[#5e4c42] hover:bg-[#fcfaf8]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[#8f6d5a]">{isActive ? '•' : '→'}</span>
                    </NavLink>
                  )
                })}
              </nav>

              <Link
                to="/contact"
                className={`mt-4 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2 ${
                  pathname === '/contact'
                    ? 'bg-[#5a3428] text-white'
                    : 'bg-[#4a2a20] text-white hover:bg-[#5a3428]'
                }`}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
