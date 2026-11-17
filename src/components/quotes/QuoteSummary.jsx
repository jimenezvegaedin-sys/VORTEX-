import { formatCurrency } from "../../utils/formatCurrency";

export default function QuoteSummary({ quote, forPrint=false }) {
  if (!quote) return null;
  const d = new Date(quote.date);
  return (
    <div className={forPrint ? "quote-print" : "card"} id="quote-print-area">
      {forPrint && <div className="quote-watermark">COTIZACIÓN DEMOSTRATIVA — SIN VALIDEZ COMERCIAL</div>}
      <div className={forPrint ? "" : "card-body"}>
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap",marginBottom:16}}>
          <div>
            <h3 style={{marginBottom:4}}>VORTEX JFSCM S.A.C.</h3>
            <div className="muted">Proyecto demostrativo · Jaén, Cajamarca, Perú</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontFamily:"var(--font-mono)",fontWeight:700}}>{quote.code}</div>
            <div className="muted">Fecha: {d.toLocaleString('es-PE')}</div>
          </div>
        </div>
        <div className="notice" style={{marginBottom:16}}><strong>DOCUMENTO DEMOSTRATIVO — SIN VALIDEZ COMERCIAL, LEGAL NI TRIBUTARIA</strong></div>
        <h4>Solicitante</h4>
        <p><strong>{quote.form.name}</strong>{quote.form.company ? ` · ${quote.form.company}` : ''}<br/>{quote.form.email} · {quote.form.phone || '—'} · {quote.form.city || '—'}</p>
        <div className="table-wrap" style={{margin:"16px 0"}}>
          <table>
            <thead><tr><th>Código</th><th>Producto</th><th>Cant.</th><th>Precio ref.</th><th>Subtotal</th></tr></thead>
            <tbody>
              {quote.items.map(it => (
                <tr key={it.id}><td style={{fontFamily:"var(--font-mono)"}}>{it.code}</td><td>{it.name}</td><td>{it.quantity}</td><td>{formatCurrency(it.price)}</td><td>{formatCurrency(it.price*it.quantity)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{maxWidth:360,marginLeft:"auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",padding:"6px 0"}}><span>Subtotal (base, sin IGV)</span><strong>{formatCurrency(quote.totals.subtotal)}</strong></div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"6px 0"}}><span>IGV ilustrativo (18%)</span><strong>{formatCurrency(quote.totals.igv)}</strong></div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderTop:"1px solid var(--gray-border)"}}><span>Total referencial</span><strong>{formatCurrency(quote.totals.total)}</strong></div>
        </div>
        {(quote.form.message || quote.form.observations) && <div style={{marginTop:16}}><h4>Observaciones</h4><p>{quote.form.message} {quote.form.observations}</p></div>}
        <p className="muted" style={{marginTop:16,fontSize:".85rem"}}>Precios base sin IGV; IGV mostrado solo con fines ilustrativos. Cotización local de demostración, no enviada a servidor.</p>
      </div>
    </div>
  );
}
