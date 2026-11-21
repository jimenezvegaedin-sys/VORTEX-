import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useQuote } from "../context/QuoteContext";
import ProductGallery from "../components/products/ProductGallery";
import ProductSpecs from "../components/products/ProductSpecs";
import ProductGrid from "../components/products/ProductGrid";
import Tabs from "../components/ui/Tabs";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { formatCurrency } from "../utils/formatCurrency";
import { Minus, Plus, FileText } from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useQuote();
  const product = products.find(p => p.slug === slug);
  const [qty, setQty] = useState(1);
  const related = useMemo(() => products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4), [product]);
  if (!product) return <div className="section"><div className="container"><h1>Producto no encontrado</h1><p className="muted">El producto solicitado no existe en el catálogo demostrativo.</p><Link to="/productos" className="btn btn-primary">Volver al catálogo</Link></div></div>;
  const tabs = [
    { label: 'Descripción', content: <div><p>{product.description}</p><p className="muted">{product.short}</p></div> },
    { label: 'Ficha técnica', content: <><p className="muted">Especificaciones ilustrativas de referencia para el prototipo académico. No son datos certificados por fabricante.</p><ProductSpecs specs={product.specifications} /></> },
    { label: 'Aplicaciones', content: <ul>{product.applications?.map(a => <li key={a}>{a}</li>)}</ul> },
    { label: 'Documentación demostrativa', content: <div className="notice">Ficha técnica y documentación de referencia disponibles solo como material demostrativo del prototipo. No corresponden a documentos oficiales del fabricante.</div> },
  ];
  const specLabels = { power: 'Potencia', phases: 'Fases', primary: 'Tensión primaria', secondary: 'Tensión secundaria', frequency: 'Frecuencia', vectorGroup: 'Conexión', temperature: 'Clase térmica', insulation: 'Aislamiento', cooling: 'Enfriamiento', standard: 'Norma', impedance: 'Impedancia', losses: 'Pérdidas', protection: 'Protección', mounting: 'Montaje', range: 'Rango', ratedCurrent: 'Corriente', packaging: 'Presentación', dimensions: 'Dimensiones', weight: 'Peso' };
  const specEntries = Object.entries(product.specifications).filter(([, v]) => v && v !== 'N/A' && v !== 'No aplica');
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Productos', to: '/productos' }, { label: product.name }]} />
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, alignItems: 'start' }}>
          <div>
            <ProductGallery images={product.gallery || [product.image]} alt={product.name} />
            <p className="muted" style={{ fontSize: '.85rem', marginTop: 8 }}>Vistas interiores de referencia: núcleo, bobinados y conexiones del equipo.</p>
          </div>
          <div>
            <span className="chip">{product.category}</span>
            <h1 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", marginTop: 12 }}>{product.name}</h1>
            <div style={{ fontFamily: "var(--font-mono)", color: "#141212", marginBottom: 8 }}>{product.code}</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2231a", margin: "8px 0" }}>{formatCurrency(product.price)} <span style={{ fontSize: '.9rem', fontWeight: 500, color: '#666' }}>(precio demo)</span></div>
            <p><strong>Disponibilidad ficticia:</strong> {product.stock} {product.unit}</p>
            {specEntries.length > 0 && (
              <div style={{ marginBottom: 16, padding: 14, background: '#f4f6f8', borderRadius: 10, border: '1px solid #e8e8e8' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1rem', color: '#141212' }}>Especificaciones destacadas</h3>
                <ul style={{ margin: 0, paddingLeft: 16, fontSize: '.9rem' }}>
                  {specEntries.slice(0, 6).map(([k, v]) => <li key={k} style={{ marginBottom: 4 }}><strong style={{ color: '#666' }}>{specLabels[k] || k}:</strong> {v}</li>)}
                </ul>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontWeight: 600 }}>Cantidad:</span>
              <button className="btn btn-outline" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Menos"><Minus size={16} /></button>
              <input className="input" type="number" min="1" max="99" value={qty} onChange={e => setQty(Math.max(1, Math.min(99, Number(e.target.value) || 1)))} style={{ width: 90, textAlign: 'center' }} />
              <button className="btn btn-outline" onClick={() => setQty(q => Math.min(99, q + 1))} aria-label="Más"><Plus size={16} /></button>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => addItem(product, qty)}><FileText size={18} /> Agregar a cotización</button>
              <Link to="/productos" className="btn btn-outline">Consultar otros productos</Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 36 }}><Tabs tabs={tabs} /></div>
        {related.length > 0 && <div style={{ marginTop: 48 }}><h2>Productos relacionados</h2><ProductGrid products={related} onQuote={(p) => addItem(p, 1)} /></div>}
      </div>
    </div>
  );
}
