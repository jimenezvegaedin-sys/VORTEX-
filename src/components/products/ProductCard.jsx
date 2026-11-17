import { Link } from "react-router-dom";
import { Eye, FileText } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ProductCard({ product, onQuote }) {
  return (
    <article className="card" style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div className="product-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="card-body" style={{display:"flex",flexDirection:"column",gap:8,flex:1}}>
        <span className="chip">{product.category}</span>
        <h3 style={{fontSize:"1.1rem",margin:0}}>{product.name}</h3>
        <div style={{fontFamily:"var(--font-mono)",fontSize:".85rem",color:"var(--blue-steel)"}}>{product.code}</div>
        {product.specifications?.power && <div className="muted" style={{fontSize:".9rem"}}>Potencia: {product.specifications.power}</div>}
        <div style={{fontWeight:700,color:"var(--blue-corporate)",fontSize:"1.05rem"}}>{formatCurrency(product.price)} <span style={{fontWeight:500,fontSize:".8rem",color:"var(--gray-text)"}}>(demo)</span></div>
        <div className="muted" style={{fontSize:".85rem"}}>Disponibilidad ficticia: {product.stock} {product.unit || "unid."}</div>
        <div style={{display:"flex",gap:8,marginTop:"auto",paddingTop:8,flexWrap:"wrap"}}>
          <Link to={`/productos/${product.slug}`} className="btn btn-primary" style={{flex:1}}><Eye size={16}/> Ver detalles</Link>
          <button className="btn btn-outline" onClick={() => onQuote?.(product)} style={{flex:1}}><FileText size={16}/> Cotizar</button>
        </div>
      </div>
    </article>
  );
}
