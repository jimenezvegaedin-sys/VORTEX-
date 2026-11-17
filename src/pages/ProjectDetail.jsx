import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Breadcrumbs from "../components/ui/Breadcrumbs";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <div className="section"><div className="container"><h1>Proyecto no encontrado</h1><Link to="/proyectos" className="btn btn-primary">Volver</Link></div></div>;
  return (
    <>
      <section className="section" style={{background:"var(--white-blue)"}}>
        <div className="container">
          <Breadcrumbs items={[{label:'Inicio',to:'/'},{label:'Proyectos',to:'/proyectos'},{label:project.title}]} />
          <span className="badge-demo">PROYECTO SIMULADO</span>
          <h1 style={{marginTop:12}}>{project.title}</h1>
          <p className="muted">{project.code} · {project.sector} · {project.location} · {project.year}</p>
        </div>
      </section>
      <section className="section"><div className="container grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28,alignItems:"start"}}>
        <img src={project.image} alt={project.title} style={{width:"100%",borderRadius:18}} />
        <div>
          <h3>Objetivo</h3><p>{project.objective}</p>
          <h3>Descripción</h3><p>{project.description}</p>
          <h3>Equipos involucrados</h3><ul>{project.equipment.map(e=> <li key={e}>{e}</li>)}</ul>
          <h3>Resultado esperado del escenario</h3><p>{project.outcome}</p>
          <div className="notice">Fotografía ilustrativa. No representa una obra realmente ejecutada por VORTEX JFSCM S.A.C.</div>
        </div>
      </div></section>
    </>
  );
}
