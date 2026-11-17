const numberFormatter = new Intl.NumberFormat('en-US', { notation: 'compact' })

export function formatCompactNumber(value: number) {
  return numberFormatter.format(value)
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date))
}
