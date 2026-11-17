import { useMemo, useState } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductGrid from "../components/products/ProductGrid";
import ProductFilters from "../components/products/ProductFilters";
import EmptyState from "../components/ui/EmptyState";
import SectionHeading from "../components/ui/SectionHeading";
import { useQuote } from "../context/QuoteContext";

export default function Products() {
  const { addItem } = useQuote();
  const catNames = categories.map(c=>c.name);
  const types = Array.from(new Set(products.map(p=>p.type))).sort();
  const [filters, setFilters] = useState({ q:'', category:'', type:'', min:'', max:'', stock:'', sort:'az', featured:'', types, count: products.length });

  const filtered = useMemo(() => {
    let list = [...products];
    const q = filters.q.trim().toLowerCase();
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q));
    if (filters.category) list = list.filter(p => p.category === filters.category);
    if (filters.type) list = list.filter(p => p.type === filters.type);
    if (filters.min !== '') list = list.filter(p => p.price >= Number(filters.min));
    if (filters.max !== '') list = list.filter(p => p.price <= Number(filters.max));
    if (filters.stock === 'in') list = list.filter(p => p.stock > 0);
    if (filters.stock === 'low') list = list.filter(p => p.stock <= 3);
    if (filters.featured === 'yes') list = list.filter(p => p.featured);
    switch (filters.sort) {
      case 'za': list.sort((a,b)=>b.name.localeCompare(a.name,'es')); break;
      case 'plh': list.sort((a,b)=>a.price-b.price); break;
      case 'phl': list.sort((a,b)=>b.price-a.price); break;
      case 'feat': list.sort((a,b)=>(b.featured?1:0)-(a.featured?1:0) || a.name.localeCompare(b.name,'es')); break;
      default: list.sort((a,b)=>a.name.localeCompare(b.name,'es'));
    }
    return list;
  }, [filters]);

  // keep count in sync without causing loop: derive in render for UI by passing filtered.length
  const uiFilters = { ...filters, types, count: filtered.length };

  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Catálogo" title="Catálogo de equipamiento eléctrico" text="Explora nuestra selección demostrativa de transformadores, equipos de protección y soluciones eléctricas industriales." />
        <ProductFilters filters={uiFilters} setFilters={setFilters} categories={catNames} />
        {filtered.length ? <ProductGrid products={filtered} onQuote={(p)=>addItem(p,1)} /> : <EmptyState title="Sin coincidencias" text="No se encontraron productos con los filtros seleccionados." actionTo="/productos" actionLabel="Limpiar filtros" />}
        <div style={{marginTop:40}}>
          <h3>Categorías</h3>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{catNames.map(c=> <span key={c} className="chip">{c}</span>)}</div>
        </div>
      </div>
    </div>
  );
}
