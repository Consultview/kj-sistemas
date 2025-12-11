import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Sobre from "./pages/About";
import Servicos from "./pages/Services";
import Contato from "./pages/Contact";
import Footer from "./components/Footer";
import "./styles/whats.css";
import "./styles.css";
import whatsappIcon from "./assets/whatsapp.svg";

export default function App() {
  return (
    <Router>
      {/* MENU FIXO */}
      <Menu />

      {/* WRAPPER DO CONTEÚDO */}
      <div className="content-wrapper">
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
      </div>

       <a


   href="https://wa.me/5565993546706?text=Olá!%20Gostaria%20de%20informações
   %20sobre%20produtos%20e%20serviços.%20Pode%20me%20ajudar?"


           className="whatsapp-float"
           target="_blank"
           rel="noopener noreferrer"
        >
           <img src={whatsappIcon} alt="WhatsApp"
   className="whatsapp-icon" />
        </a>


      {/* FOOTER FORA DO CONTAINER */}
      <Footer />
    </Router>
  );
}
