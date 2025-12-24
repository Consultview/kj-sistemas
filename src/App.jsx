import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";

import Home from "./pages/Home";
import Sobre from "./pages/About";
import Servicos from "./pages/Services";
import Contato from "./pages/Contact";
import Planos from "./pages/Planos";

import Desenvolvimento from "./pages/services/Desenvolvimento";
import Seguranca from "./pages/services/Seguranca";
import Infraestrutura from "./pages/services/Infraestrutura";
import Hardware from "./pages/services/Hardware";
import AutomacaoIA from "./pages/services/AutomacaoIA";
import Consultoria from "./pages/services/Consultoria";
import RedesSociais from "./pages/services/RedesSociais";
import MarketingDigital from "./pages/services/MarketingDigital";
import CloudDevOps from "./pages/services/CloudDevOps";
import Monitoramento from "./pages/services/Monitoramento";

import whatsappIcon from "./assets/whatsapp.svg";
import "./styles.css";
import "./styles/whats.css";
import "./styles/breadcrumb.css";

export default function App() {
  return (
    <Router>
      {/* MENU FIXO */}
      <Menu />

      {/* BREADCRUMB FIXO ABAIXO DO MENU */}
      <Breadcrumb />

      {/* CONTEÚDO */}
      <div className="content-wrapper">
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />

            <Route path="/servicos/desenvolvimento" element={<Desenvolvimento />} />
            <Route path="/servicos/seguranca" element={<Seguranca />} />
            <Route path="/servicos/infraestrutura" element={<Infraestrutura />} />
            <Route path="/servicos/hardware" element={<Hardware />} />
            <Route path="/servicos/automacao-ia" element={<AutomacaoIA />} />
            <Route path="/servicos/consultoria" element={<Consultoria />} />
            <Route path="/servicos/redes-sociais" element={<RedesSociais />} />
            <Route path="/servicos/marketing-digital" element={<MarketingDigital />} />
            <Route path="/servicos/cloud" element={<CloudDevOps />} />
            <Route path="/servicos/monitoramento" element={<Monitoramento />} />
          </Routes>
        </main>
      </div>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5565993546706?text=Olá!%20Gostaria%20de%20informações%20sobre%20produtos%20e%20serviços.%20Pode%20me%20ajudar?"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}
