import SectionHeading from "../components/ui/SectionHeading";
import { risks } from "../data/formalization";

export default function LegalInformation() {
  return (
    <>
      <section className="section" className="section section-dark">
        <div className="container"><SectionHeading eyebrow="Marco normativo" title="Marco legal, tributario y laboral" text="Información académica basada en el estudio del proyecto. No constituye portal oficial ni asesoría legal automatizada." light /></div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Marco societario" title="Comparación de formas empresariales" text="Resumen informativo de opciones consideradas en el documento." />
          <div className="table-wrap"><table>
            <thead><tr><th>Forma</th><th>Características generales</th><th>Enfoque del estudio</th></tr></thead>
            <tbody>
              <tr><td>Persona natural con negocio</td><td>Gestión individual, menor formalidad inicial.</td><td>Limitada para el proyecto con varios socios y proyección.</td></tr>
              <tr><td>EIRL</td><td>Titular único con patrimonio separado.</td><td>No se ajusta a la estructura de cinco socios.</td></tr>
              <tr><td>SRL</td><td>Participaciones sociales, estructura cerrada.</td><td>Opción viable, pero el estudio opta por SAC por flexibilidad societaria referencial.</td></tr>
              <tr><td><strong>SAC (propuesta)</strong></td><td>Hasta 20 accionistas, acciones nominativas, órgano de dirección definido.</td><td><strong>Forma propuesta</strong> para cinco socios fundadores en el escenario académico.</td></tr>
              <tr><td>SAA</td><td>Orientada a mayor número de accionistas y esquemas más complejos.</td><td>No corresponde a la escala del proyecto planteado.</td></tr>
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Régimen tributario" title="Comparación informativa" text="Referencias del estudio académico; tasas y condiciones deben verificarse según vigencia. Año de referencia: documento del proyecto." />
          <div className="table-wrap"><table>
            <thead><tr><th>Régimen</th><th>Perfil general</th><th>Notas</th></tr></thead>
            <tbody>
              <tr><td>NRUS</td><td>Personas naturales con actividades y límites reducidos.</td><td>No aplicable a la estructura societaria propuesta.</td></tr>
              <tr><td>RER</td><td>Régimen simplificado para ciertos contribuyentes.</td><td>Requiere evaluación de actividad y condiciones.</td></tr>
              <tr><td><strong>Régimen MYPE Tributario (propuesto)</strong></td><td>Orientado a micro y pequeñas empresas según parámetros vigentes.</td><td><strong>Régimen propuesto por el estudio</strong> para el escenario de VORTEX.</td></tr>
              <tr><td>Régimen General</td><td>Régimen amplio aplicable a diversos contribuyentes.</td><td>Alternativa según crecimiento y condiciones.</td></tr>
            </tbody>
          </table></div>
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",marginTop:20}}>
            {['RUC: inscripción y actualización de datos del contribuyente.','Impuesto a la renta: según régimen y resultados del periodo.','IGV: impuesto general a las ventas según operaciones gravadas.','Registros de compras y ventas: control contable/tributario referencial.','Comprobantes electrónicos: emisión según normativa aplicable.','Obligaciones declarativas: periodicidad y formas según régimen.'].map(t=> <div key={t} className="card"><div className="card-body"><p style={{margin:0}}>{t}</p></div></div>)}
          </div>
          <p className="muted" style={{marginTop:12,fontSize:".9rem"}}>No se desarrolla un sistema de declaraciones tributarias. Tasas, límites y referencias están sujetas a verificación de vigencia.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Régimen laboral" title="Marco laboral referencial" text="Comparación basada en el informe académico, con fecha de referencia del estudio." />
          <div className="table-wrap"><table>
            <thead><tr><th>Aspecto</th><th>Microempresa</th><th>Pequeña empresa</th><th>Régimen general</th></tr></thead>
            <tbody>
              <tr><td>Ámbito (referencial)</td><td>REMYPE - categoría micro</td><td>REMYPE - categoría pequeña</td><td>Fuera de beneficios REMYPE</td></tr>
              <tr><td>Vacaciones</td><td>Según condiciones del régimen</td><td>Según condiciones del régimen</td><td>30 días calendario (referencial)</td></tr>
              <tr><td>CTS / Gratificaciones</td><td>Beneficios con particularidades</td><td>Beneficios con particularidades</td><td>Esquema general completo</td></tr>
              <tr><td>Seguro de salud</td><td>Afiliación según corresponda</td><td>Afiliación según corresponda</td><td>EsSalud u opción aplicable</td></tr>
              <tr><td>Seguridad laboral</td><td>Obligaciones de SST aplicables</td><td>Obligaciones de SST aplicables</td><td>Obligaciones de SST aplicables</td></tr>
            </tbody>
          </table></div>
          <p className="muted" style={{marginTop:10}}>No se implementan planillas ni cálculos laborales oficiales.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Seguridad y salud" title="Prevención y condiciones operativas" />
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
            {[{t:'Prevención del riesgo eléctrico',d:'Identificación de peligros, señalización y procedimientos referenciales.'},{t:'Equipos de protección',d:'Uso adecuado de EPP según tarea y evaluación de riesgos.'},{t:'Seguridad en instalaciones',d:'Orden, accesos controlados y condiciones seguras de trabajo.'},{t:'Almacenamiento de transformadores',d:'Ubicación estable, protección física y control de condiciones.'},{t:'Aceites dieléctricos',d:'Manejo responsable, contención y disposición adecuada referencial.'},{t:'Procedimientos y capacitación',d:'Instrucciones internas, formación y mejora continua en SST.'}].map(x=> <div key={x.t} className="card"><div className="card-body"><h3 style={{fontSize:"1.05rem"}}>{x.t}</h3><p style={{margin:0}}>{x.d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Riesgos de formalización" title="Matriz referencial de riesgos y medidas" />
          <div className="table-wrap"><table><thead><tr><th>Riesgo / problema</th><th>Medida preventiva general</th></tr></thead><tbody>
            {risks.map(r=> <tr key={r.risk}><td>{r.risk}</td><td>{r.measure}</td></tr>)}
          </tbody></table></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Fuentes" title="Referencias documentales" text="Contenido académico diferenciado del contenido comercial del prototipo." />
          <div className="card"><div className="card-body">
            <ul>
              <li>Normas y lineamientos citados en el estudio de constitución empresarial de VORTEX JFSCM S.A.C.</li>
              <li>SUNAT — inscripción, RUC y regímenes tributarios (referencia institucional).</li>
              <li>SUNARP — constitución e inscripción de personas jurídicas (referencia institucional).</li>
              <li>Municipalidades — licencias y autorizaciones de funcionamiento (según competencia).</li>
              <li>MTPE y normativa laboral aplicable — régimen laboral y seguridad y salud en el trabajo.</li>
              <li>Ley General de Sociedades y normativa complementaria citada en el informe.</li>
            </ul>
            <p className="muted" style={{marginTop:12,fontSize:".9rem"}}>No se inventan enlaces específicos ni se afirma vigencia actual sin verificación. La información debe contrastarse con fuentes oficiales actualizadas antes de uso distinto al demostrativo.</p>
          </div></div>
        </div>
      </section>
    </>
  );
}
