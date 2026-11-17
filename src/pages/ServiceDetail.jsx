import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import Breadcrumbs from "../components/ui/Breadcrumbs";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <div className="section"><div className="container"><h1>Servicio no encontrado</h1><Link to="/servicios" className="btn btn-primary">Volver a servicios</Link></div></div>;
  const related = services.filter(s => s.slug !== slug).slice(0,3);
  return (
    <>
      <section className="section" className="section section-dark">
        <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24,alignItems:"center"}}>
          <div>
            <Breadcrumbs items={[{label:'Inicio',to:'/'},{label:'Servicios',to:'/servicios'},{label:service.title}]} />
            <h1 style={{color:"#fff"}}>{service.title}</h1>
            <p style={{color:"#d7e5f2"}}>{service.short}</p>
            <Link to="/cotizaciones" className="btn btn-primary">Solicitar cotización demo</Link>
          </div>
          <img src={service.image} alt={service.title} style={{width:"100%",borderRadius:18,background:"#fff",padding:10}}/>
        </div>
      </section>
      <section className="section"><div className="container grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
        <div className="card"><div className="card-body"><h3>Alcance</h3><ul>{service.scope.map(x=> <li key={x}>{x}</li>)}</ul></div></div>
        <div className="card"><div className="card-body"><h3>Beneficios</h3><ul>{service.benefits.map(x=> <li key={x}>{x}</li>)}</ul></div></div>
        <div className="card"><div className="card-body"><h3>Aplicaciones</h3><ul>{service.applications.map(x=> <li key={x}>{x}</li>)}</ul></div></div>
        <div className="card"><div className="card-body"><h3>Etapas generales</h3><ol style={{paddingLeft:'1.2rem'}}>{service.stages.map(x=> <li key={x}>{x}</li>)}</ol></div></div>
      </div></section>
      <section className="section section-alt"><div className="container">
        <div className="notice" style={{marginBottom:24}}>Contenido descriptivo y demostrativo. No constituye una guía para que personas sin cualificación intervengan equipos eléctricos peligrosos.</div>
        <h2>Otros servicios relacionados</h2>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
          {related.map(r=> <div key={r.slug} className="card"><div className="card-body"><h3 style={{fontSize:"1.1rem"}}>{r.title}</h3><p>{r.short}</p><Link to={`/servicios/${r.slug}`} className="btn btn-text">Ver detalle</Link></div></div>)}
        </div>
      </div></section>
    </>
  );
}
