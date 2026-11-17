import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section" style={{minHeight:"60vh",display:"flex",alignItems:"center"}}>
      <div className="container" style={{textAlign:"center"}}>
        <div className="eyebrow" style={{justifyContent:"center"}}>Error 404</div>
        <h1>Página no encontrada</h1>
        <p>La ruta solicitada no existe en este sitio demostrativo de VORTEX JFSCM S.A.C.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <Link to="/" className="btn btn-primary">Ir al inicio</Link>
          <Link to="/productos" className="btn btn-outline">Ver productos</Link>
        </div>
      </div>
    </div>
  );
}
