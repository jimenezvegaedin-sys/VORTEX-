import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";
import { products } from "../data/products";
import { services } from "../data/services";

const sectors = [
  { name:'Industria', img:'/images/projects/proyecto-1.jpg', needs:['Continuidad operativa','Distribución confiable','Control y protección'], solutions:['Transformadores trifásicos','Tableros y regulación','Servicios de mantenimiento e ingeniería'], prods:['VTX-006','VTX-008','VTX-020'], svcs:['ingenieria-mecanica-electrica','mantenimiento-preventivo'], caseSlug:'modernizacion-instalacion-industrial' },
  { name:'Agroindustria', img:'/images/projects/proyecto-2.jpg', needs:['Suministro estable para procesos','Adecuación de carga','Soporte técnico referencial'], solutions:['Transformadores de distribución','Accesorios y regulación','Pruebas y montaje demostrativo'], prods:['VTX-004','VTX-007','VTX-024'], svcs:['instalacion-montaje','pruebas-electricas'], caseSlug:'suministro-transformadores-agroindustria' },
  { name:'Construcción e infraestructura', img:'/images/projects/proyecto-4.jpg', needs:['Equipamiento para obras y edificaciones','Distribución organizada','Escalabilidad conceptual'], solutions:['Transformadores secos','Celdas y tableros','Consultoría y expedientes'], prods:['VTX-013','VTX-019','VTX-021'], svcs:['consultoria-tecnica','expedientes-tecnicos'], caseSlug:'distribucion-energia-infraestructura-comercial' },
  { name:'Distribución eléctrica', img:'/images/projects/proyecto-3.jpg', needs:['Protección de red','Gestión de activos','Confiabilidad de suministro'], solutions:['Transformadores de potencia','Protección eléctrica','Mantenimiento y pruebas'], prods:['VTX-010','VTX-011','VTX-023'], svcs:['mantenimiento-preventivo','pruebas-electricas'], caseSlug:'mantenimiento-preventivo-transformadores' },
];

export default function Solutions() {
  return (
    <>
      <section className="section" className="section section-dark">
        <div className="container"><SectionHeading eyebrow="Soluciones" title="Soluciones por industria" text="Enfoques demostrativos para sectores que requieren equipamiento e ingeniería eléctrica confiable." light /></div>
      </section>
      {sectors.map((s, i) => {
        const caseItem = projects.find(p=>p.slug===s.caseSlug);
        const relProds = products.filter(p=>s.prods.includes(p.code)).slice(0,3);
        const relSvcs = services.filter(x=>s.svcs.includes(x.slug));
        return (
          <section key={s.name} className={`section ${i%2===1?'section-alt':''}`}>
            <div className="container">
              <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28,alignItems:"center"}}>
                <img src={s.img} alt={s.name} style={{width:"100%",borderRadius:12,border:"1px solid var(--border)",aspectRatio:"16/10",objectFit:"cover"}} />
                <div>
                  <div className="eyebrow">Sector</div>
                  <h2>{s.name}</h2>
                  <h4>Necesidades del sector</h4>
                  <ul>{s.needs.map(n=> <li key={n}>{n}</li>)}</ul>
                  <h4 style={{marginTop:12}}>Soluciones propuestas</h4>
                  <ul>{s.solutions.map(n=> <li key={n}>{n}</li>)}</ul>
                  <Link to="/cotizaciones" className="btn btn-primary" style={{marginTop:14}}>Cotización demo</Link>
                </div>
              </div>
              <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",marginTop:24}}>
                <div className="card"><div className="card-body"><h3>Productos relacionados</h3><ul>{relProds.map(p=> <li key={p.id}><Link to={`/productos/${p.slug}`}>{p.code} — {p.name}</Link></li>)}</ul></div></div>
                <div className="card"><div className="card-body"><h3>Servicios aplicables</h3><ul>{relSvcs.map(x=> <li key={x.slug}><Link to={`/servicios/${x.slug}`}>{x.title}</Link></li>)}</ul></div></div>
                <div className="card"><div className="card-body"><span className="badge-demo">CASO DEMOSTRATIVO</span><h3 style={{marginTop:8,fontSize:"1.05rem"}}>{caseItem?.title}</h3><p>{caseItem?.description}</p><Link to={`/proyectos/${caseItem?.slug}`} className="btn btn-text">Ver caso</Link></div></div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
