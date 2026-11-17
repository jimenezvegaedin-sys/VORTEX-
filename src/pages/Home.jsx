import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Bolt, Cog, Factory, HardHat, Leaf, Wrench, CheckCircle2, Zap, Building2 } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import ProductGrid from "../components/products/ProductGrid";
import { featuredProducts } from "../data/products";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { faqs } from "../data/faqs";
import { useQuote } from "../context/QuoteContext";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
  const { addItem } = useQuote();
  const specialties = [
    { icon: Zap, title: "Transformadores eléctricos", text: "Distribución y potencia para requerimientos industriales." },
    { icon: Cog, title: "Equipamiento industrial", text: "Tableros, regulación y componentes para entornos técnicos." },
    { icon: Wrench, title: "Mantenimiento especializado", text: "Servicios preventivos y correctivos de carácter referencial." },
    { icon: Bolt, title: "Ingeniería y automatización", text: "Integración de energía, control y operación." },
  ];
  const industries = [
    { icon: Factory, name: "Industria", text: "Suministro y transformación para procesos productivos.", img: "/images/projects/proyecto-1.jpg" },
    { icon: Leaf, name: "Agroindustria", text: "Aplicaciones en plantas y operaciones agroalimentarias.", img: "/images/projects/proyecto-2.jpg" },
    { icon: HardHat, name: "Construcción e infraestructura", text: "Equipamiento para infraestructura eléctrica.", img: "/images/projects/proyecto-4.jpg" },
    { icon: Building2, name: "Distribución eléctrica", text: "Componentes y soluciones para redes de distribución.", img: "/images/projects/proyecto-3.jpg" },
  ];
  const steps = [
    { n: "01", t: "Explora equipos y servicios", d: "Revisa el catálogo y las soluciones disponibles." },
    { n: "02", t: "Selecciona lo necesario", d: "Agrega productos a tu solicitud de cotización." },
    { n: "03", t: "Completa la solicitud", d: "Ingresa datos y observaciones técnicas." },
    { n: "04", t: "Genera la cotización", d: "Obtén un resumen local imprimible o en PDF." },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero/hero-main.jpg" alt="Infraestructura eléctrica industrial" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <div className="eyebrow">Soluciones eléctricas e ingeniería industrial</div>
            <h1>Nuestro <span>compromiso</span> con la energía industrial</h1>
            <p className="hero-lead">VORTEX JFSCM S.A.C. presenta una propuesta especializada en transformadores, equipamiento y servicios técnicos de ingeniería eléctrica para proyectos que exigen confiabilidad y precisión.</p>
            <div className="hero-actions">
              <Link to="/productos" className="btn btn-primary">Conocer más <ArrowRight size={16}/></Link>
              <Link to="/cotizaciones" className="btn btn-outline">Solicitar cotización</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-stats-bar">
        <div className="container hero-stats-inner">
          <div className="hero-stat"><strong>24+</strong><span>Productos en catálogo</span></div>
          <div className="hero-stat"><strong>8</strong><span>Servicios especializados</span></div>
          <div className="hero-stat"><strong>4</strong><span>Sectores de aplicación</span></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
            {specialties.map((s)=>(
              <div key={s.title} style={{padding:"4px 0"}}>
                <s.icon color="var(--accent)" size={22} />
                <h3 style={{fontSize:"1.05rem",margin:"12px 0 6px"}}>{s.title}</h3>
                <p style={{margin:0,fontSize:".95rem"}}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:48,alignItems:"center"}}>
          <div className="split-media">
            <img src="/images/services/servicio-5.jpg" alt="Ingeniería eléctrica" />
          </div>
          <div>
            <SectionHeading eyebrow="Sobre la empresa" accent="Nuestra" title="visión de ingeniería" text="VORTEX JFSCM es una propuesta empresarial orientada a la comercialización de transformadores y soluciones técnicas, con un enfoque demostrativo que integra equipamiento, servicios e ingeniería." />
            <ul style={{listStyle:"none",padding:0,display:"grid",gap:10,marginBottom:24}}>
              {["Especialización técnica","Soluciones adaptadas","Compromiso con la seguridad"].map(t=> <li key={t} style={{display:"flex",gap:8,alignItems:"center",color:"var(--slate)"}}><BadgeCheck size={18} color="var(--accent)"/>{t}</li>)}
            </ul>
            <Link to="/nosotros" className="btn btn-secondary">Descubrir nuestra empresa</Link>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <SectionHeading eyebrow="Catálogo destacado" accent="Equipos" title="eléctricos para cada necesidad" text="Selección demostrativa de transformadores y equipos industriales con fichas técnicas y cotización referencial." />
          <ProductGrid products={featuredProducts} onQuote={addItem} />
          <div style={{textAlign:"center",marginTop:32}}><Link to="/productos" className="btn btn-outline">Ver catálogo completo</Link></div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="container">
          <SectionHeading eyebrow="Servicios especializados" accent="Soluciones" title="técnicas en cada etapa" text="Servicios demostrativos orientados a instalación, pruebas, mantenimiento e ingeniería." />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
            {services.slice(0,6).map((s)=>(
              <div key={s.slug} className="card">
                <img src={s.image} alt={s.title} loading="lazy" style={{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderBottom:"1px solid var(--border)"}} />
                <div className="card-body">
                  <h3 style={{fontSize:"1.08rem",margin:"0 0 6px"}}>{s.title}</h3>
                  <p style={{marginBottom:12}}>{s.short}</p>
                  <Link to={`/servicios/${s.slug}`} className="btn btn-text">Ver detalle <ArrowRight size={16}/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <SectionHeading eyebrow="Soluciones por sectores" accent="Aplicaciones" title="para distintos entornos" text="Enfoques demostrativos adaptados a necesidades industriales y de infraestructura." />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
            {industries.map((ind)=>(
              <div key={ind.name} className="card">
                <img src={ind.img} alt={ind.name} loading="lazy" style={{width:"100%",aspectRatio:"4/3",objectFit:"cover",borderBottom:"1px solid var(--border)"}} />
                <div className="card-body">
                  <h3 style={{margin:"0 0 6px",fontSize:"1.08rem"}}>{ind.name}</h3>
                  <p style={{marginBottom:10}}>{ind.text}</p>
                  <Link to="/soluciones" className="btn btn-text">Conocer solución <ArrowRight size={16}/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="container">
          <SectionHeading eyebrow="Proceso de atención" accent="De tu necesidad" title="a una solución técnica" center />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
            {steps.map((s)=>(
              <div key={s.n} className="card"><div className="card-body"><div style={{fontFamily:"var(--font-heading)",fontSize:"2rem",color:"var(--oc-red)",fontWeight:700,marginBottom:6}}>{s.n}</div><h3 style={{fontSize:"1.05rem"}}>{s.t}</h3><p style={{margin:0}}>{s.d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <SectionHeading eyebrow="Proyectos simulados" accent="Casos" title="demostrativos de aplicación" text="Ejemplos ficticios para ilustrar el alcance de equipamiento y servicios." />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
            {projects.slice(0,3).map(p=> (
              <article key={p.slug} className="card">
                <img src={p.image} alt={p.title} loading="lazy" style={{width:"100%",aspectRatio:"16/10",objectFit:"cover"}}/>
                <div className="card-body">
                  <span className="badge-demo">CASO DEMOSTRATIVO</span>
                  <h3 style={{fontSize:"1.08rem",marginTop:10}}>{p.title}</h3>
                  <p>{p.description}</p>
                  <Link to={`/proyectos/${p.slug}`} className="btn btn-text">Ver proyecto <ArrowRight size={16}/></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="container">
          <SectionHeading eyebrow="Indicadores del escenario" accent="Cifras" title="del modelo de proyecto" text="Las cifras pertenecen al modelo académico de constitución, no a resultados comerciales reales." center />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
            {[{v:"5",l:"Socios fundadores proyectados"},{v:"S/ 150 mil",l:"Capital social propuesto"},{v:"3",l:"Áreas: equipos, servicios e ingeniería"},{v:"4",l:"Sectores de aplicación destacados"}].map(k=> (
              <div key={k.l} className="kpi"><strong>{k.v}</strong><span className="muted">{k.l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container" style={{maxWidth:900}}>
          <SectionHeading eyebrow="Preguntas frecuentes" accent="Respuestas" title="rápidas" center />
          <Accordion items={faqs.slice(0,8)} />
        </div>
      </section>

      <section className="section section-dark" style={{textAlign:"center"}}>
        <div className="container">
          <h2 style={{color:"#fff"}}><span style={{color:"var(--oc-red)"}}>Solicita</span> una cotización demostrativa</h2>
          <p style={{maxWidth:680,margin:"0 auto 24px",color:"#d1d1d1"}}>Explora el catálogo y prepara una solicitud referencial con equipos y servicios de ingeniería eléctrica.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link to="/productos" className="btn btn-primary">Ver productos</Link>
            <Link to="/cotizaciones" className="btn btn-outline" style={{borderColor:"#fff",color:"#fff"}}>Preparar cotización</Link>
          </div>
        </div>
      </section>
    </>
  );
}

