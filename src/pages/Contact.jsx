import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { company } from "../data/company";
import { validateContactForm } from "../utils/validation";
import { MapPin, Mail, Clock, Copy, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'', accept:false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const update = (k,v)=> setForm(f=>({...f,[k]:v}));
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validateContactForm(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
  };
  const copyText = async () => {
    const text = `Nombre: ${form.name}\nCorreo: ${form.email}\nAsunto: ${form.subject}\nMensaje: ${form.message}`;
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(()=>setCopied(false),2000); } catch {}
  };
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Contacto" title="Hablemos de tu próximo proyecto" text="Explora nuestras soluciones y utiliza el formulario demostrativo para preparar una consulta." />
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:32,alignItems:"start"}}>
          <div>
            <div className="card" style={{marginBottom:16}}><div className="card-body" style={{display:"grid",gap:14}}>
              <div style={{display:"flex",gap:10}}><MapPin color="var(--oc-red)"/><div><strong>Ubicación</strong><p style={{margin:0}}>{company.contact.location}</p></div></div>
              <div style={{display:"flex",gap:10}}><Phone color="var(--oc-red)"/><div><strong>Teléfono</strong><p style={{margin:0}}><a href="tel:+51910062007">{company.contact.phone}</a></p></div></div>
              <div style={{display:"flex",gap:10}}><Mail color="var(--oc-red)"/><div><strong>Correos de referencia</strong><p style={{margin:0}}>{company.contact.email}<br/>{company.contact.sales}<br/>{company.contact.institutionalEmail}</p></div></div>
              <div style={{display:"flex",gap:10}}><Clock color="var(--oc-red)"/><div><strong>Horario simulado</strong><p style={{margin:0}}>{company.contact.hoursWeek}<br/>{company.contact.hoursSat}</p></div></div>
            </div></div>
            <div className="card"><div className="card-body">
              <h3 style={{fontSize:"1.05rem"}}>Ubicación geográfica general</h3>
              <div style={{borderRadius:12,overflow:"hidden",border:"1px solid var(--gray-border)",background:"var(--gray-surface)",aspectRatio:"16/10",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:20}}>
                <div><MapPin size={32} color="var(--oc-red)"/><p style={{margin:"8px 0 0"}}><strong>Jaén, Cajamarca, Perú</strong><br/><span className="muted">Referencia geográfica general (sin dirección exacta).</span></p></div>
              </div>
              <p className="muted" style={{marginTop:10,fontSize:".9rem"}}>Datos de contacto de referencia para el prototipo académico; no se muestra una dirección exacta inexistente.</p>
            </div></div>
          </div>
          <div>
            <form className="card" onSubmit={onSubmit} noValidate><div className="card-body">
              <h3>Formulario demostrativo</h3>
              <div className="field"><label htmlFor="cname">Nombre</label><input id="cname" className="input" value={form.name} onChange={e=>update('name',e.target.value)} />{errors.name && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.name}</span>}</div>
              <div className="field" style={{marginTop:12}}><label htmlFor="cemail">Correo</label><input id="cemail" type="email" className="input" value={form.email} onChange={e=>update('email',e.target.value)} />{errors.email && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.email}</span>}</div>
              <div className="field" style={{marginTop:12}}><label htmlFor="csub">Asunto</label><input id="csub" className="input" value={form.subject} onChange={e=>update('subject',e.target.value)} />{errors.subject && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.subject}</span>}</div>
              <div className="field" style={{marginTop:12}}><label htmlFor="cmsg">Mensaje</label><textarea id="cmsg" className="textarea" value={form.message} onChange={e=>update('message',e.target.value)} maxLength={800} />{errors.message && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.message}</span>}</div>
              <label style={{display:"flex",gap:8,alignItems:"flex-start",marginTop:12,fontSize:".95rem"}}><input type="checkbox" checked={form.accept} onChange={e=>update('accept',e.target.checked)} /> <span>Acepto el aviso de privacidad de prueba y comprendo que este formulario es demostrativo.</span></label>
              {errors.accept && <span style={{color:'var(--danger)',fontSize:'.85rem'}}>{errors.accept}</span>}
              <button className="btn btn-primary" type="submit" style={{marginTop:16}}>Enviar consulta demostrativa</button>
              {sent && <div className="notice" style={{marginTop:16}}><strong>Confirmación demostrativa:</strong> tu mensaje fue validado localmente. No se realizó ninguna solicitud de red ni se entregó información a una empresa. <button type="button" className="btn btn-text" onClick={copyText} style={{marginLeft:8}}><Copy size={14}/> {copied?'Copiado':'Copiar contenido'}</button></div>}
            </div></form>
          </div>
        </div>
      </div>
    </div>
  );
}

