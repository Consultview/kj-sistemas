import { useState } from "react";


/* =========================
   COMPONENTE CARD CONTATO
========================= */
function CardContato({ titulo, principal, descricao, color, destaque }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      style={{
        borderLeft: `5px solid ${color}`,
        transition: "all 0.3s ease",
        boxShadow: open ? "0 0 0 2px rgba(0,0,0,0.06)" : "none",
        position: "relative",
      }}
    >
      {destaque && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: color,
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
          }}
        >
          PRIORIDADE
        </span>
      )}

      <h3
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", display: "flex", gap: "8px" }}
      >
        <span style={{ color }}>{open ? "▼" : "▶"}</span>
        {titulo}
      </h3>

      <p style={{ fontWeight: "bold", color }}>{principal}</p>

      {/* POSICIONAMENTO */}
      <div style={{ marginTop: "10px" }}>
        <div style={{ fontSize: "14px", color: "#9aa5b1" }}>
          {descricao}
        </div>
      </div>






      {/* BOTÃO WHATSAPP (SÓ NO GRATUITO) */}
        {destaque && (
          <a

      href="https://wa.me/5565993546706?text=Ol%C3%A1,%20gostaria%20de%20um%20suporte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Chamar Suporte
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
    <div className="container">
      

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
          titulo="📧 E-mail Comercial"
          principal="tijacksonlima@proton.me"
          color="#2563eb"
          descricao="Envio de propostas, solicitações técnicas, projetos e atendimento corporativo"
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
