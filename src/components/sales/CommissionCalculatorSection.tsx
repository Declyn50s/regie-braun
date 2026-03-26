import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type CommissionTier = {
  label: string
  rate: number
  min: number
  max: number | null
}

const COMMISSION_TIERS: CommissionTier[] = [
  { label: "De 0 à CHF 500'000.–", rate: 0.05, min: 0, max: 500000 },
  { label: "De CHF 500'000.– à 4 millions", rate: 0.03, min: 500000, max: 4000000 },
  { label: 'De 4 millions et plus', rate: 0.02, min: 4000000, max: null },
]

const QUICK_AMOUNTS = [500000, 1000000, 2000000, 4000000]

const formatCurrency = (value: number) =>
  `CHF ${new Intl.NumberFormat('fr-CH', { maximumFractionDigits: 0 }).format(value)}.–`

const parseAmount = (value: string) => {
  const digits = value.replace(/[^\d]/g, '')
  return digits ? Number(digits) : 0
}

const formatAmountInput = (value: string) => {
  const digits = value.replace(/[^\d]/g, '')

  if (!digits) return ''

  return new Intl.NumberFormat('fr-CH', { maximumFractionDigits: 0 })
    .format(Number(digits))
    .replace(/\u202F/g, "'")
    .replace(/\s/g, "'")
}

const calculateCommission = (salePrice: number) => {
  return COMMISSION_TIERS.reduce(
    (accumulator, tier) => {
      if (salePrice <= tier.min) {
        accumulator.breakdown.push({ ...tier, taxableAmount: 0, commission: 0 })
        return accumulator
      }

      const upperBound = tier.max ?? salePrice
      const taxableAmount = Math.max(Math.min(salePrice, upperBound) - tier.min, 0)
      const commission = taxableAmount * tier.rate

      accumulator.total += commission
      accumulator.breakdown.push({ ...tier, taxableAmount, commission })

      return accumulator
    },
    {
      total: 0,
      breakdown: [] as Array<CommissionTier & { taxableAmount: number; commission: number }>,
    },
  )
}

export function CommissionCalculatorSection() {
  const [salePriceInput, setSalePriceInput] = useState(formatAmountInput('1000000'))
  const salePrice = parseAmount(salePriceInput)

  const { total, breakdown } = useMemo(() => calculateCommission(salePrice), [salePrice])
  const effectiveRate = salePrice > 0 ? (total / salePrice) * 100 : 0

  return (
    <section id="honoraires" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e2d7cf] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8c6a58]">Honoraires</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#311d16] md:text-4xl">
            Tarifs et honoraires de courtage.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-[#66554a]">
            Estimez instantanément le montant indicatif de la commission HT selon votre prix de vente
            souhaité. Le calcul reste informatif et doit être confirmé avec la régie selon votre dossier.
          </p>

          <div className="mt-5 rounded-[1.75rem] bg-[#f8f3ef] p-4">
            <label htmlFor="sale-price" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">
              Prix de vente souhaité
            </label>
            <div className="mt-3 flex items-center rounded-2xl border border-[#dfd1c6] bg-white px-4 py-3">
              <span className="text-sm font-semibold text-[#8f6d5a]">CHF</span>
              <input
                id="sale-price"
                inputMode="numeric"
                value={salePriceInput}
                onChange={(event) => setSalePriceInput(formatAmountInput(event.target.value))}
                className="w-full bg-transparent px-3 text-lg font-semibold text-[#4e3a30] outline-none"
                placeholder="1'000'000"
              />
              <span className="text-sm text-[#8f6d5a]">.–</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {QUICK_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSalePriceInput(formatAmountInput(amount.toString()))}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    salePrice === amount
                      ? 'border-[#4a2a20] bg-[#4a2a20] text-white'
                      : 'border-[#d7c8bc] bg-white text-[#4a2a20] hover:bg-[#f3ebe5]'
                  }`}
                >
                  {formatCurrency(amount)}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">
                  Commission estimée (HT)
                </div>
                <div className="mt-3 text-3xl font-semibold text-[#4a2a20]">{formatCurrency(total)}</div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6d5a]">
                  Taux effectif
                </div>
                <div className="mt-3 text-3xl font-semibold text-[#4a2a20]">{effectiveRate.toFixed(2)}%</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 text-sm leading-8 text-[#66554a] shadow-sm">
              Le calcul est progressif par tranches. Pour un bien à {formatCurrency(salePrice || 0)},
              la commission est calculée en appliquant chaque taux uniquement à la portion concernée.
            </div>

            <div className="mt-6 space-y-3">
              {breakdown.map((tier) => (
                <div
                  key={tier.label}
                  className="flex flex-col gap-2 rounded-2xl border border-[#eaded5] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#3f2b22]">{tier.label}</div>
                    <div className="mt-1 text-sm text-[#6d5b50]">
                      Base prise en compte : {formatCurrency(tier.taxableAmount)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-[0.14em] text-[#8f6d5a]">
                      {Math.round(tier.rate * 100)}%
                    </div>
                    <div className="mt-1 text-lg font-semibold text-[#4a2a20]">
                      {formatCurrency(tier.commission)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full border border-[#cdb9ac] px-5 py-3 text-sm font-semibold text-[#4a2a20] transition hover:bg-[#f3ebe5]"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
