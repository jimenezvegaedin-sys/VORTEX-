import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Proyectos" title="Proyectos y casos demostrativos" text="Galería de escenarios ficticios que ilustran aplicaciones de equipamiento e ingeniería eléctrica." />
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
          {projects.map(p => (
            <article key={p.slug} className="card">
              <img src={p.image} alt={p.title} style={{width:"100%",aspectRatio:"16/10",objectFit:"cover"}} />
              <div className="card-body">
                <span className="badge-demo">PROYECTO SIMULADO</span>
                <div style={{fontFamily:"var(--font-mono)",fontSize:".8rem",marginTop:8,color:"var(--blue-steel)"}}>{p.code} · {p.year}</div>
                <h3 style={{fontSize:"1.1rem",margin:"8px 0"}}>{p.title}</h3>
                <p className="muted" style={{marginBottom:8}}>{p.sector} · {p.location}</p>
                <p>{p.description}</p>
                <Link to={`/proyectos/${p.slug}`} className="btn btn-secondary">Ver detalle</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
