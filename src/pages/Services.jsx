import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import { services } from "../data/services";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
      <section className="section" style={{background:"linear-gradient(135deg,#f8fbfd,#eef5fb)"}}>
        <div className="container">
          <SectionHeading eyebrow="Servicios" title="Servicios especializados de ingeniería eléctrica" text="Soluciones demostrativas que acompañan las etapas de selección, instalación, operación y mejora de equipamiento eléctrico." />
        </div>
      </section>
      {services.map((s, i) => (
        <section key={s.slug} className={`section ${i % 2 === 1 ? 'section-alt' : ''}`}>
          <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:32,alignItems:"center",direction: i%2===1 ? 'rtl' : 'ltr'}}>
            <div style={{direction:'ltr'}}>
              <img src={s.image} alt={s.title} style={{width:"100%",borderRadius:18,border:"1px solid var(--gray-border)"}} />
            </div>
            <div style={{direction:'ltr'}}>
              <div className="eyebrow">Servicio {String(i+1).padStart(2,'0')}</div>
              <h2>{s.title}</h2>
              <p>{s.short}</p>
              <h4>Alcance</h4>
              <ul>{s.scope.map(x=> <li key={x}>{x}</li>)}</ul>
              <h4 style={{marginTop:12}}>Beneficios</h4>
              <ul>{s.benefits.map(x=> <li key={x}>{x}</li>)}</ul>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:16}}>
                <Link to={`/servicios/${s.slug}`} className="btn btn-secondary">Ver detalle <ArrowRight size={16}/></Link>
                <Link to="/cotizaciones" className="btn btn-outline">Cotización demo</Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
