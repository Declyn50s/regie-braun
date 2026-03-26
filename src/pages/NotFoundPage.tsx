import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#2f241f]">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <section className="rounded-[2rem] border border-[#e2d7cf] bg-white p-8 shadow-sm md:p-12">
          <div className="inline-flex rounded-full border border-[#d9cbc0] bg-[#f8f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6a58]">
            Page introuvable
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-[#341d15] md:text-5xl">
            Cette page n&apos;est pas disponible ou l&apos;adresse est incorrecte.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#66554a]">
            Nous avons conservé une navigation simple pour vous permettre de revenir rapidement vers
            les contenus utiles du site.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex justify-center rounded-full bg-[#4a2a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-full border border-[#c9b5a8] bg-white px-6 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6d5a] focus-visible:ring-offset-2"
            >
              Contacter la régie
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
