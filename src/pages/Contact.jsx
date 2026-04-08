import { useState } from "react";

/* =========================
   COMPONENTE CARD CONTATO
========================= */
function CardContato({ titulo, principal, descricao, color, destaque }) {
  const [open, setOpen] = useState(false);

  // Define se é o card de emergência para forçar o vermelho e fundo suave
  const isEmergencia = titulo.includes("Crítico") || titulo.includes("Segurança");
  const activeColor = isEmergencia ? "#ef4444" : color;
  
  // Cores de fundo com transparência (RGBA)
  const bgSoft = isEmergencia ? "rgba(239, 68, 68, 0.1)" : "rgba(37, 211, 102, 0.1)";

  return (
    <div
      className="card"
      style={{
        borderLeft: `5px solid ${activeColor}`,
        transition: "all 0.3s ease",
        boxShadow: open ? "0 0 0 2px rgba(0,0,0,0.06)" : "none",
        position: "relative",
        backgroundColor: destaque ? (isEmergencia ? "rgba(239, 68, 68, 0.03)" : "rgba(37, 211, 102, 0.03)") : "transparent"
      }}
    >
      {destaque && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: bgSoft, // Fundo mais transparente
            color: activeColor, // Texto na cor sólida
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
            border: `1px solid ${activeColor}33` // Borda bem clarinha
          }}
        >
          {isEmergencia ? "URGENTE" : "PRIORIDADE"}
        </span>
      )}

      <h3
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", display: "flex", gap: "8px" }}
      >
        <span style={{ color: activeColor }}>{open ? "▼" : "▶"}</span>
        {titulo}
      </h3>

      <p style={{ fontWeight: "bold", color: activeColor }}>{principal}</p>

      {/* POSICIONAMENTO */}
      <div style={{ marginTop: "10px" }}>
        <div style={{ fontSize: "14px", color: "#9aa5b1" }}>
          {descricao}
        </div>
      </div>

      {/* BOTÃO WHATSAPP / EMERGÊNCIA */}
      {destaque && (


            <a

    href="https://wa.me/5565993546706?text=Ol%C3%A1,%20preciso%20de%20um%20help!%20"

          
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "14px",
            background: bgSoft, // Removido o fundo sólido, agora transparente
            color: activeColor,
            border: `1px solid ${activeColor}`,
            transition: "0.3s"
          }}
        >
          {isEmergencia ? "Acionar Emergência" : "Chamar Suporte"}
        </a>
      )}
    </div>
  );
}

/* =========================
   PÁGINA CONTATO
========================= */
export default function Contact() {
  return (
    <div className="container" style={{ padding: "40px", fontFamily: "sans-serif" }}>

      <h2 style={{ fontSize: "32px" }}>Entre em Contato</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        Atendimento técnico e comercial especializado para empresas que buscam soluções em tecnologia, segurança e infraestrutura.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <CardContato
          titulo="📱 WhatsApp"
          principal="+55 (65) 99354-6706"
          color="#25D366"
          destaque
          descricao="Canal direto com especialista para dúvidas, propostas e suporte rápido em tempo real"
        />

    
        <CardContato
          titulo="⏱ Suporte Crítico 24/7"
          principal="Atendimento emergencial"
          color="#ef4444"
          destaque
          descricao="Resposta imediata para incidentes, falhas em servidores, ataques e indisponibilidade de sistemas"
        />

        <CardContato
          titulo="📅 Agendamento Técnico"
          principal="Consultoria especializada"
          color="#8b5cf6"
          descricao="Reuniões estratégicas para planejamento, diagnóstico e definição de soluções tecnológicas"
        />

        <CardContato
          titulo="🕒 Horário Comercial"
          principal="Seg a Sex — 08h às 18h"
          color="#f59e0b"
          descricao="Atendimento padrão com possibilidade de suporte estendido para contratos corporativos"
        />

        <CardContato
          titulo="🔐 Canal de Segurança"
          principal="Relato de vulnerabilidades"
          color="#dc2626"
          descricao="Comunicação segura para reportar falhas, acessos indevidos ou riscos em sistemas"
        />

        <CardContato
          titulo="📍 Atendimento"
          principal="Cobertura nacional"
          color="#10b981"
          descricao="Atendimento remoto e presencial conforme necessidade e complexidade do projeto"
        />
      </div>
    </div>
  );
}
