import { createContext, useContext, useEffect, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { calculateQuote, nextQuoteCode } from '../utils/quoteCalculations'

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [items, setItems] = useLocalStorage('vortex_quote_items', [])
  const [history, setHistory] = useLocalStorage('vortex_quote_history', [])

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id)
      if (found) {
        return prev.map((i) => i.id === product.id ? { ...i, quantity: Math.min(99, i.quantity + quantity) } : i)
      }
      return [...prev, { id: product.id, code: product.code, name: product.name, slug: product.slug, price: product.price, image: product.image, quantity }]
    })
  }

  const updateQuantity = (id, quantity) => {
    const q = Math.max(1, Math.min(99, Number(quantity) || 1))
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)))
  }

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const clearItems = () => setItems([])

  const totals = useMemo(() => calculateQuote(items, 0.18, false), [items])

  const createQuote = (form) => {
    const quote = {
      code: nextQuoteCode(history),
      date: new Date().toISOString(),
      form,
      items,
      totals,
      note: 'DOCUMENTO DEMOSTRATIVO — SIN VALIDEZ COMERCIAL, LEGAL NI TRIBUTARIA',
    }
    setHistory((prev) => [quote, ...prev])
    return quote
  }

  useEffect(() => {
    // keep storage lean
    if (history.length > 20) setHistory((h) => h.slice(0, 20))
  }, [history, setHistory])

  const value = { items, addItem, updateQuantity, removeItem, clearItems, totals, history, createQuote, clearHistory: () => setHistory([]) }
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider')
  return ctx
}