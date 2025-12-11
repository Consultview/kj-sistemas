import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-menu">
      <div className="menu-container">

        <h1 className="menu-logo">KJ SISTEMAS</h1>

        {/* Botão hamburguer */}
        <div
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links com React Router */}
        <nav className={`menu-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Início</Link>
          <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          <Link to="/servicos" onClick={() => setOpen(false)}>Serviços</Link>
          <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link>
        </nav>

      </div>
    </header>
  );
}
