import { Search, SlidersHorizontal } from "lucide-react";

export default function ProductFilters({ filters, setFilters, categories }) {
  const update = (k, v) => setFilters((f) => ({ ...f, [k]: v }));
  return (
    <div className="card" style={{marginBottom:24}}>
      <div className="card-body">
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,fontWeight:700,color:"var(--blue-corporate)"}}><SlidersHorizontal size={18}/> Filtros y búsqueda</div>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))"}}>
          <div className="field"><label>Buscar</label><div style={{position:"relative"}}><Search size={16} style={{position:"absolute",left:12,top:12,color:"var(--gray-text)"}}/><input className="input" style={{paddingLeft:36}} placeholder="Nombre o código" value={filters.q} onChange={e=>update('q',e.target.value)} /></div></div>
          <div className="field"><label>Categoría</label><select className="select" value={filters.category} onChange={e=>update('category',e.target.value)}><option value="">Todas</option>{categories.map(c=><option key={c} value={c}>{c}</option>)}</select></div>
          <div className="field"><label>Tipo</label><select className="select" value={filters.type} onChange={e=>update('type',e.target.value)}><option value="">Todos</option>{filters.types?.map(t=><option key={t} value={t}>{t}</option>)}</select></div>
          <div className="field"><label>Precio mín (S/)</label><input className="input" type="number" min="0" value={filters.min} onChange={e=>update('min',e.target.value)} /></div>
          <div className="field"><label>Precio máx (S/)</label><input className="input" type="number" min="0" value={filters.max} onChange={e=>update('max',e.target.value)} /></div>
          <div className="field"><label>Disponibilidad</label><select className="select" value={filters.stock} onChange={e=>update('stock',e.target.value)}><option value="">Todas</option><option value="in">Disponible</option><option value="low">Stock bajo (&le;3)</option></select></div>
          <div className="field"><label>Ordenar</label><select className="select" value={filters.sort} onChange={e=>update('sort',e.target.value)}><option value="az">Nombre A–Z</option><option value="za">Nombre Z–A</option><option value="plh">Precio menor a mayor</option><option value="phl">Precio mayor a menor</option><option value="feat">Más destacados</option></select></div>
          <div className="field"><label>Solo destacados</label><select className="select" value={filters.featured} onChange={e=>update('featured',e.target.value)}><option value="">No</option><option value="yes">Sí</option></select></div>
        </div>
        <div style={{marginTop:14,display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <span className="muted">Resultados: <strong style={{color:'var(--blue-corporate)'}}>{filters.count}</strong></span>
          <button className="btn btn-outline" onClick={()=>setFilters({q:'',category:'',type:'',min:'',max:'',stock:'',sort:'az',featured:'',types:filters.types,count:filters.count})}>Limpiar filtros</button>
        </div>
      </div>
    </div>
  );
}
