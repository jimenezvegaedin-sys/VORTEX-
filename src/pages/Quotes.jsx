import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";
import QuoteItem from "../components/quotes/QuoteItem";
import QuoteSummary from "../components/quotes/QuoteSummary";
import SectionHeading from "../components/ui/SectionHeading";
import { formatCurrency } from "../utils/formatCurrency";
import { validateQuoteForm } from "../utils/validation";
import { company } from "../data/company";
import { Printer, Trash2 } from "lucide-react";

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.04 2C6.49 2 2 6.49 2 12.04c0 1.77.464 3.5 1.344 5.02L2 22l5.06-1.326A10 10 0 0 0 12.04 22c5.55 0 10.04-4.49 10.04-10.04C22.08 6.49 17.59 2 12.04 2Z" />
    </svg>
  );
}

function buildWhatsAppUrl(q) {
  const lines = [
    `Cotización ${q.code} — ${new Date(q.date).toLocaleString('es-PE')}`,
    '',
    `Solicitante: ${q.form.name}`,
    q.form.company ? `Empresa: ${q.form.company}` : null,
    q.form.email ? `Correo: ${q.form.email}` : null,
    q.form.phone ? `Teléfono: ${q.form.phone}` : null,
    q.form.city ? `Ciudad: ${q.form.city}` : null,
    q.form.message ? `Mensaje: ${q.form.message}` : null,
    q.form.observations ? `Observaciones: ${q.form.observations}` : null,
    '',
    'Productos:',
    ...q.items.map(i => `• ${i.quantity} x ${i.name} (${i.code}) — ${formatCurrency(i.price * i.quantity)}`),
    '',
    `Subtotal: ${formatCurrency(q.totals.subtotal)}`,
    `IGV referencial: ${formatCurrency(q.totals.igv)}`,
    `Total referencial: ${formatCurrency(q.totals.total)}`,
    '',
    q.note,
  ].filter(Boolean).join('\n');
  return `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(lines)}`;
}

export default function Quotes() {
  const { items, updateQuantity, removeItem, clearItems, totals, createQuote, history, clearHistory } = useQuote();
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', city:'', message:'', observations:'' });
  const [errors, setErrors] = useState({});
  const [generated, setGenerated] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validateQuoteForm(form, items);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const q = createQuote(form);
    setGenerated(q);
    window.open(buildWhatsAppUrl(q), '_blank', 'noopener,noreferrer');
  };

  const update = (k,v)=> setForm(f=>({...f,[k]:v}));

  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Cotizaciones" title="Cotizaciones demostrativas" text="Prepara una solicitud referencial con productos del catálogo. Todo funciona localmente en tu navegador, sin backend." />
        <div className="notice" style={{marginBottom:24}}>Las cotizaciones generadas no se envían a ninguna empresa, no se comparten entre dispositivos y pueden desaparecer al limpiar los datos del navegador. Documento demostrativo, sin validez comercial, legal ni tributaria.</div>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",alignItems:'start'}}>
          <div>
            <h2>Productos seleccionados</h2>
            {items.length===0 ? <div className="card"><div className="card-body"><p>No hay productos en la solicitud.</p><Link to="/productos" className="btn btn-primary">Ir al catálogo</Link></div></div> :
              <>
                {items.map(it => <QuoteItem key={it.id} item={it} onUpdate={updateQuantity} onRemove={removeItem} />)}
                <div className="card" style={{marginTop:12}}><div className="card-body">
                  <div style={{display:'flex',justifyContent:'space-between'}}><span>Subtotal (base)</span><strong>{formatCurrency(totals.subtotal)}</strong></div>
                  <div style={{display:'flex',justifyContent:'space-between'}}><span>IGV ilustrativo (18%)</span><strong>{formatCurrency(totals.igv)}</strong></div>
                  <div style={{display:'flex',justifyContent:'space-between',borderTop:'1px solid var(--gray-border)',marginTop:8,paddingTop:8}}><span>Total referencial</span><strong>{formatCurrency(totals.total)}</strong></div>
                  <p className="muted" style={{fontSize:'.85rem',marginTop:8}}>Precios base no incluyen IGV; IGV calculado solo como referencia ilustrativa.</p>
                  <button className="btn btn-outline" onClick={clearItems}><Trash2 size={16}/> Limpiar solicitud</button>
                </div></div>
              </>
            }
          </div>
          <div>
            <h2>Datos del solicitante</h2>
            <form className="card" onSubmit={onSubmit} noValidate><div className="card-body">
              <div className="form-grid">
                <div className="field full"><label htmlFor="qname">Nombre del solicitante *</label><input id="qname" className="input" value={form.name} onChange={e=>update('name',e.target.value)} />{errors.name && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.name}</span>}</div>
                <div className="field"><label htmlFor="qcompany">Empresa ficticia (opcional)</label><input id="qcompany" className="input" value={form.company} onChange={e=>update('company',e.target.value)} /></div>
                <div className="field"><label htmlFor="qemail">Correo *</label><input id="qemail" className="input" type="email" value={form.email} onChange={e=>update('email',e.target.value)} />{errors.email && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.email}</span>}</div>
                <div className="field"><label htmlFor="qphone">Teléfono de prueba</label><input id="qphone" className="input" value={form.phone} onChange={e=>update('phone',e.target.value)} /></div>
                <div className="field"><label htmlFor="qcity">Ciudad</label><input id="qcity" className="input" value={form.city} onChange={e=>update('city',e.target.value)} /></div>
                <div className="field full"><label htmlFor="qmsg">Mensaje</label><textarea id="qmsg" className="textarea" value={form.message} onChange={e=>update('message',e.target.value)} maxLength={600} /></div>
                <div className="field full"><label htmlFor="qobs">Observaciones técnicas</label><textarea id="qobs" className="textarea" value={form.observations} onChange={e=>update('observations',e.target.value)} /></div>
              </div>
              {errors.items && <div style={{color:'var(--danger)',marginTop:8}}>{errors.items}</div>}
              <button className="btn btn-primary" type="submit" style={{marginTop:16}}><WhatsAppIcon size={16}/> Cotizar y enviar por WhatsApp</button>
            </div></form>
          </div>
        </div>

        {generated && (
          <div style={{marginTop:40}}>
            <h2>Cotización generada</h2>
            <div className="no-print" style={{display:'flex',gap:10,marginBottom:12,flexWrap:'wrap'}}>
              <button className="btn btn-whatsapp" onClick={()=>window.open(buildWhatsAppUrl(generated), '_blank', 'noopener,noreferrer')}><WhatsAppIcon size={16}/> Enviar por WhatsApp</button>
              <button className="btn btn-secondary" onClick={()=>window.print()}><Printer size={16}/> Imprimir / Guardar como PDF</button>
            </div>
            <QuoteSummary quote={generated} forPrint />
          </div>
        )}

        <div style={{marginTop:48}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <h2>Historial local</h2>
            {history.length>0 && <button className="btn btn-outline no-print" onClick={clearHistory}>Borrar historial local</button>}
          </div>
          <p className="muted">Historial guardado solo en este navegador como demostración.</p>
          {history.length===0 ? <p className="muted">Aún no hay cotizaciones generadas.</p> :
            <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
              {history.map(q => (
                <div key={q.code} className="card"><div className="card-body">
                  <div style={{fontFamily:'var(--font-mono)',fontWeight:700}}>{q.code}</div>
                  <div className="muted">{new Date(q.date).toLocaleString('es-PE')}</div>
                  <div style={{margin:'8px 0'}}>{q.items.length} ítem(s) · {formatCurrency(q.totals.total)}</div>
                  <button className="btn btn-outline" onClick={()=>setGenerated(q)}>Ver resumen</button>
                </div></div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
