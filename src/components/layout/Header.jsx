import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/soluciones", label: "Soluciones" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setMenuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="VORTEX JFSCM inicio">
            <img src="/images/logo-vortex.svg" alt="VORTEX JFSCM" className="brand-logo" />
          </Link>
          <nav className="nav-desktop" aria-label="Principal">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>{n.label}</NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <Link to="/cotizaciones" className="btn btn-primary header-cta">Cotizar</Link>
            <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
      <aside className={`mobile-panel ${menuOpen ? "open" : ""}`} aria-label="Menú móvil">
        <div className="mobile-panel-head">
          <span className="mobile-panel-title">Menú</span>
          <button className="menu-toggle" onClick={() => setMenuOpen(false)} aria-label="Cerrar"><X size={20}/></button>
        </div>
        <nav className="mobile-nav">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className="nav-link" onClick={() => setMenuOpen(false)}>{n.label}</NavLink>
          ))}
          <NavLink to="/formalizacion" className="nav-link" onClick={() => setMenuOpen(false)}>Formalización</NavLink>
          <NavLink to="/marco-legal" className="nav-link" onClick={() => setMenuOpen(false)}>Marco legal</NavLink>
          <NavLink to="/preguntas-frecuentes" className="nav-link" onClick={() => setMenuOpen(false)}>Preguntas frecuentes</NavLink>
        </nav>
        <Link to="/cotizaciones" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Cotizar ahora</Link>
      </aside>
    </>
  );
}
