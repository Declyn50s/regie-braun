import { Search } from 'lucide-react'

export function SearchInput({
  value,
  onChange,
  placeholder = 'Rechercher',
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <label className="relative block min-w-[240px]">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8c6a58]" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-[#dfd1c6] bg-white px-11 py-2.5 text-sm text-[#3d2a21] outline-none transition focus:border-[#b99683] focus:ring-2 focus:ring-[#eadfd5]"
      />
    </label>
  )
}
