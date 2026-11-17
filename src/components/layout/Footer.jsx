import { Link } from "react-router-dom";
import { Globe, Share2, MapPin, Mail, Clock } from "lucide-react";
import { company } from "../../data/company";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h2>Inicia tu consulta</h2>
            <p>Explora el catálogo demostrativo y prepara una solicitud referencial con la información de tu proyecto.</p>
          </div>
          <Link to="/contacto" className="btn btn-light">Contáctanos</Link>
        </div>
      </div>
      <div className="container footer-main">
        <div className="footer-col footer-brand">
          <img src="/images/logo-vortex.svg" alt="VORTEX JFSCM" className="footer-logo" />
          <p className="footer-tagline">{company.slogan}</p>
          <div className="footer-social" aria-label="Redes sociales (demostrativas)">
            <a href="#" aria-label="Sitio" onClick={(e)=>e.preventDefault()}><Globe size={18} /></a>
            <a href="#" aria-label="Red social" onClick={(e)=>e.preventDefault()}><Share2 size={18} /></a>
            <a href="#" aria-label="Contacto" onClick={(e)=>e.preventDefault()}><Mail size={18} /></a>
          </div>
          <span className="badge-demo">Proyecto académico demostrativo</span>
        </div>
        <div className="footer-col">
          <h4>Sede referencial</h4>
          <p><MapPin size={15} className="footer-icon" /> {company.contact.location}</p>
          <p><Clock size={15} className="footer-icon" /> {company.contact.hoursWeek}</p>
          <p style={{paddingLeft:23}}>{company.contact.hoursSat}</p>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p><Mail size={15} className="footer-icon" /> {company.contact.email}</p>
          <p style={{paddingLeft:23}}>{company.contact.sales}</p>
          <h4 style={{marginTop:18}}>Enlaces</h4>
          <p><Link to="/productos">Productos</Link></p>
          <p><Link to="/servicios">Servicios</Link></p>
          <p><Link to="/cotizaciones">Cotizaciones</Link></p>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <p><Link to="/nosotros">Nosotros</Link></p>
          <p><Link to="/soluciones">Soluciones</Link></p>
          <p><Link to="/proyectos">Proyectos</Link></p>
          <p><Link to="/formalizacion">Formalización</Link></p>
          <p><Link to="/marco-legal">Marco legal</Link></p>
          <p><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 VORTEX JFSCM S.A.C. · {company.demoNotice}</span>
        <span><Link to="/privacidad">Privacidad</Link> · <Link to="/terminos">Términos</Link></span>
      </div>
    </footer>
  );
}
