import SectionHeading from "../components/ui/SectionHeading";
import { formalizationTimeline, budget, capital } from "../data/formalization";

export default function Formalization() {
  return (
    <>
      <section className="section" className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Formalización" title="Nuestro proyecto de constitución empresarial" text="Conoce el proceso de formalización planteado para VORTEX JFSCM S.A.C., sus principales etapas, estructura organizativa y responsabilidades legales dentro del escenario académico." light />
          <div className="notice" style={{background:"rgba(255,255,255,.08)",borderColor:"rgba(255,255,255,.2)",color:"#e6f2ff"}}>Contenido académico del escenario de proyecto. No es un módulo administrativo ni un sistema de trámites.</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Línea de tiempo" title="Etapas proyectadas de formalización" />
          <div className="grid" style={{gap:16}}>
            {formalizationTimeline.map(t => (
              <div key={t.step} className="card"><div className="card-body" style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:16,alignItems:"start"}}>
                <div style={{width:42,height:42,borderRadius:12,background:"var(--blue-corporate)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800}}>{t.step}</div>
                <div>
                  <h3 style={{fontSize:"1.1rem",marginBottom:4}}>{t.title}</h3>
                  <p>{t.desc}</p>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap",fontSize:".9rem"}}>
                    <span className="chip">Entidad: {t.entity}</span>
                    <span className="chip">Referencia: {t.ref}</span>
                    <span className="chip">Plazo: {t.time}</span>
                    <span className="chip">Costo: {t.cost}</span>
                  </div>
                </div>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",alignItems:"start"}}>
          <div>
            <SectionHeading eyebrow="Capital social" title="Estructura propuesta" text="Datos del escenario académico de constitución." />
            <div className="grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
              {[['Capital proyectado',capital.total],['Socios fundadores',capital.partners],['Participación',capital.percent],['Acciones',capital.shares],['Valor nominal',capital.nominal]].map(([k,v])=> (
                <div key={k} className="kpi"><strong style={{fontSize:"1.3rem"}}>{v}</strong><span className="muted">{k}</span></div>
              ))}
            </div>
            <div style={{marginTop:16}} className="notice">Participación accionaria ilustrativa: 20% por cada socio fundador.</div>
          </div>
          <div>
            <SectionHeading eyebrow="Presupuesto" title="Presupuesto de formalización" text={budget.note} />
            <div className="table-wrap"><table><thead><tr><th>Concepto</th><th>Valor referencial</th></tr></thead><tbody>
              {budget.items.map(i=> <tr key={i.concept}><td>{i.concept}</td><td>{i.value}</td></tr>)}
            </tbody></table></div>
            <div className="kpi" style={{marginTop:16}}><strong>{budget.range}</strong><span className="muted">Rango estimado total (no incluye capital social)</span></div>
            <p className="muted" style={{marginTop:8,fontSize:".9rem"}}>Costos referenciales; no se presentan como tarifas oficiales vigentes.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Cronograma" title="Plazo aproximado: 3 a 5 semanas" text="Cronograma de ejemplo basado en el informe. No es un plazo garantizado." />
          <div className="card"><div className="card-body">
            <div style={{display:"grid",gap:12}}>
              {[{w:'Semana 1',t:'Reserva de nombre, minuta y aporte de capital (ref.)'},{w:'Semana 2',t:'Escritura pública e inscripción registral (ref.)'},{w:'Semana 3',t:'RUC, régimen tributario y gestiones municipales iniciales (ref.)'},{w:'Semana 4-5',t:'Licencias, ITSE y organización de obligaciones laborales/SST (ref.)'}].map(x=> (
                <div key={x.w} style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:12,alignItems:"center"}}><span className="chip" style={{justifyContent:"center"}}>{x.w}</span><div style={{padding:"10px 14px",background:"var(--gray-surface)",borderRadius:10}}>{x.t}</div></div>
              ))}
            </div>
          </div></div>
        </div>
      </section>
    </>
  );
}
