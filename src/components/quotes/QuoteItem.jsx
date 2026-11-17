import { Trash2 } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function QuoteItem({ item, onUpdate, onRemove }) {
  return (
    <div className="card" style={{marginBottom:12}}>
      <div className="card-body" style={{display:"grid",gridTemplateColumns:"80px 1fr auto",gap:16,alignItems:"center"}}>
        <img src={item.image} alt={item.name} style={{width:80,height:80,objectFit:"contain",background:"var(--gray-surface)",borderRadius:10}}/>
        <div>
          <div style={{fontWeight:700,color:"var(--blue-corporate)"}}>{item.name}</div>
          <div className="muted" style={{fontSize:".85rem"}}>{item.code} · {formatCurrency(item.price)} c/u</div>
          <div style={{marginTop:8,display:"flex",alignItems:"center",gap:8}}>
            <label htmlFor={`q-${item.id}`} style={{fontSize:".85rem"}}>Cantidad</label>
            <input id={`q-${item.id}`} className="input" type="number" min="1" max="99" value={item.quantity} onChange={e=>onUpdate(item.id, e.target.value)} style={{width:90}} />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontWeight:700}}>{formatCurrency(item.price * item.quantity)}</div>
          <button className="btn btn-text" onClick={()=>onRemove(item.id)} aria-label="Eliminar"><Trash2 size={18}/> Quitar</button>
        </div>
      </div>
    </div>
  );
}
