import SectionHeading from "../components/ui/SectionHeading";
import { company } from "../data/company";
import { team } from "../data/team";
import { Shield, Target, Eye, Users } from "lucide-react";

const icons = [Shield, Target, Eye, Users, Shield, Users, Target];

export default function About() {
  return (
    <>
      <section className="section section-alt" style={{borderBottom:"1px solid var(--border)"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:32,alignItems:"center"}}>
          <div>
            <div className="eyebrow">Nuestra empresa</div>
            <h1>Ingeniería, innovación y compromiso con el desarrollo energético.</h1>
            <p>Conoce la propuesta corporativa, organizativa y académica que da forma a VORTEX JFSCM S.A.C. como iniciativa demostrativa en Jaén, Cajamarca.</p>
          </div>
          <img src="/images/hero/hero-industrial.jpg" alt="Interior de transformador e ingeniería VORTEX" className="split-media" style={{width:"100%",maxHeight:420,objectFit:"cover"}}/>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth:900}}>
          <SectionHeading eyebrow="Historia" accent="Una iniciativa" title="nacida desde Jaén" />
          <p>La iniciativa VORTEX JFSCM nace como una propuesta empresarial desarrollada en Jaén, Cajamarca, por cinco socios que identifican la necesidad de articular una oferta especializada en distribución de transformadores, equipamiento eléctrico y servicios técnicos.</p>
          <p>El proyecto se plantea como un escenario académico y demostrativo que integra visión comercial, capacidad técnica y organización empresarial, con el propósito de representar cómo una empresa del sector puede estructurar soluciones confiables para industria, agroindustria e infraestructura.</p>
          <p className="muted">No se presentan fechas de fundación ni trayectoria comercial como hechos comprobados; el contenido corresponde al modelo de proyecto.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
          <div className="card" style={{padding:28}}>
            <div className="eyebrow">Misión</div>
            <h3>Misión propuesta</h3>
            <p>{company.mission}</p>
          </div>
          <div className="card" style={{padding:28,background:"var(--oc-black)",color:"#fff"}}>
            <div className="eyebrow" style={{color:"#fff",background:"var(--oc-red)"}}>Visión</div>
            <h3 style={{color:"#fff"}}>Visión propuesta</h3>
            <p style={{color:"#d7d7d7"}}>{company.vision}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Valores" accent="Principios" title="que orientan la propuesta" center />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
            {company.values.map((v,i)=>{ const I = icons[i] || Shield; return (
              <div key={v.title} className="card"><div className="card-body"><I color="var(--oc-red)"/><h3 style={{fontSize:"1.1rem",margin:"10px 0 6px"}}>{v.title}</h3><p style={{margin:0}}>{v.text}</p></div></div>
            );})}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Organización" accent="Estructura" title="organizativa proyectada" text="Integrantes y cargos propuestos para el escenario académico del proyecto." />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
            {team.map((m,i)=>(
              <div key={m.dni} className="card" style={{textAlign:"center"}}>
                <div style={{padding:20,background:"var(--gray-surface)"}}><img src={`/images/team/avatar-${(i % 5) + 1}.svg`} alt={`Avatar ilustrativo de ${m.name}`} style={{width:120,height:120,margin:"0 auto",borderRadius:16,objectFit:"cover"}}/></div>
                <div className="card-body">
                  <h3 style={{fontSize:"1.05rem",marginBottom:4}}>{m.name}</h3>
                  <div style={{color:"var(--oc-red)",fontWeight:700,marginBottom:6,fontFamily:"var(--font-subheading)",textTransform:"uppercase",fontSize:".85rem"}}>{m.role}</div>
                  <div style={{fontSize:".9rem",color:"var(--text-muted)"}}>DNI: {m.dni}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="muted" style={{marginTop:12,textAlign:"center"}}>Avatares ilustrativos. Información de integrantes registrada para el proyecto demostrativo.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Organigrama" accent="Estructura" title="funcional de referencia" center />
          <div className="card" style={{padding:24,overflow:"auto"}}>
            <div style={{minWidth:700,display:"grid",gap:18,justifyItems:"center",textAlign:"center"}}>
              <div className="chip" style={{fontSize:"1rem",padding:"10px 16px"}}>Junta General de Accionistas</div>
              <div style={{width:2,height:20,background:"var(--border)"}}></div>
              <div className="chip" style={{background:"var(--oc-black)",color:"#fff",fontSize:"1rem",padding:"10px 16px"}}>Gerencia General</div>
              <div style={{width:2,height:20,background:"var(--border)"}}></div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,width:"100%"}}>
                {['Área Comercial','Área Técnica','Administración y Finanzas','Logística y Almacén'].map(a=> <div key={a} className="kpi" style={{padding:16}}><strong style={{fontSize:"1rem"}}>{a}</strong></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
