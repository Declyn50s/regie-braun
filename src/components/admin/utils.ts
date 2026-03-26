export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatCurrency(value: number, transaction: 'location' | 'sale' = 'location') {
  const formatted = new Intl.NumberFormat('fr-CH', {
    style: 'currency',
    currency: 'CHF',
    maximumFractionDigits: 0,
  }).format(value)

  return transaction === 'location' ? `${formatted} / mois` : formatted
}

export function formatDateLabel(value: string) {
  if (!value) return 'Aucune date'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('fr-CH', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
