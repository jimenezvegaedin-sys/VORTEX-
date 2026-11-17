import SectionHeading from "../components/ui/SectionHeading";

export default function Terms() {
  return (
    <div className="section">
      <div className="container" style={{maxWidth:900}}>
        <SectionHeading eyebrow="Legal" title="Términos de uso" text="Condiciones demostrativas para el uso del prototipo web." />
        <div className="card"><div className="card-body" style={{display:"grid",gap:12}}>
          <p>El acceso y uso de este sitio tiene fines exclusivamente <strong>académicos y demostrativos</strong>. Los productos, precios, servicios, proyectos y documentos mostrados son ficticios o referenciales.</p>
          <h3>Sin validez comercial ni legal</h3>
          <p>Las cotizaciones generadas, contenidos informativos y referencias normativas no constituyen ofertas, contratos, asesoría legal, tributaria ni certificaciones oficiales.</p>
          <h3>Propiedad y marcas</h3>
          <p>La identidad visual presentada corresponde al proyecto demostrativo VORTEX JFSCM S.A.C. No se reivindican relaciones comerciales reales con terceros.</p>
          <h3>Limitación</h3>
          <p>El sitio puede contener simplificaciones propias de un prototipo. Cualquier uso distinto al demostrativo requiere verificación independiente y fuentes oficiales actualizadas.</p>
        </div></div>
      </div>
    </div>
  );
}
