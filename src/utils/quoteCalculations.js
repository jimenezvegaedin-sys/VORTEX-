export function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function calculateQuote(items, igvRate = 0.18, pricesIncludeIgv = false) {
  const subtotalBase = calculateSubtotal(items)
  const igv = pricesIncludeIgv ? 0 : subtotalBase * igvRate
  const total = pricesIncludeIgv ? subtotalBase : subtotalBase + igv
  return { subtotal: subtotalBase, igv, total, igvRate, pricesIncludeIgv }
}

export function nextQuoteCode(history = []) {
  const year = new Date().getFullYear()
  const prefix = `DEMO-COT-${year}-`
  const seq = history
    .map((q) => q.code || '')
    .filter((c) => c.startsWith(prefix))
    .map((c) => Number(c.slice(prefix.length)))
    .filter((n) => !Number.isNaN(n))
  const next = (seq.length ? Math.max(...seq) : 0) + 1
  return `${prefix}${String(next).padStart(4, '0')}`
}