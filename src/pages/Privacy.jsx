import SectionHeading from "../components/ui/SectionHeading";

export default function Privacy() {
  return (
    <div className="section">
      <div className="container" style={{maxWidth:900}}>
        <SectionHeading eyebrow="Legal" title="Política de privacidad demostrativa" text="Documento informativo de prueba para el prototipo VORTEX JFSCM S.A.C." />
        <div className="card"><div className="card-body" style={{display:"grid",gap:12}}>
          <p>Este sitio es un <strong>proyecto demostrativo</strong>. No existe backend, base de datos ni transmisión real de datos a servidores de la empresa.</p>
          <h3>Datos ingresados en formularios</h3>
          <p>La información escrita en formularios de contacto o cotización se utiliza únicamente para validaciones y visualización local en el navegador. No se envía a terceros ni se almacena en servidores.</p>
          <h3>Almacenamiento local</h3>
          <p>Las cotizaciones pueden guardarse temporalmente en <code>localStorage</code> del navegador para conservar la selección en el mismo dispositivo. Estos datos pueden eliminarse limpiando el almacenamiento del navegador o usando las opciones del sitio.</p>
          <h3>Recomendaciones</h3>
          <p>No ingreses información sensible o personal real. Utiliza datos ficticios o de prueba.</p>
          <p className="muted">Última actualización de referencia: demostración académica.</p>
        </div></div>
      </div>
    </div>
  );
}
