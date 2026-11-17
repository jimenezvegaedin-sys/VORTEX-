import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  return (
    <div className="app-shell">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>Proyecto demostrativo — Información simulada</span>
          <span>Jaén, Cajamarca, Perú · contacto@vortexjfscm.example</span>
        </div>
      </div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollToTop />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
