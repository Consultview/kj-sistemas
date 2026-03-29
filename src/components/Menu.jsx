import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-menu">
      <div className="menu-container">


           
       
               <Link to="/" style={{ textDecoration: "none" }}>
                   <h1 className="menu-logo">
                     <strong> 🌿 DETOX IT </strong>
                     <strong style={{ color: "white" }}>SOLUTIONS </strong>
                   </h1>
                 </Link>
                   
       

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
          <Link to="/" onClick={() => setOpen(false)}>INICIO</Link>

                   <Link to="/produtos" onClick={() =>
   setOpen(false)}>PRODUTOS</Link>
          
          <Link to="/servicos" onClick={() => setOpen(false)}>SERVIÇOS</Link>
          
          <Link to="/contato" onClick={() => setOpen(false)}>CONTATO</Link>

          
          <Link to="/sobre" onClick={() => setOpen(false)}>SOBRE</Link>
        </nav>

      </div>
    </header>
  );
}
