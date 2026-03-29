import { useState } from "react";

/* =========================
   COMPONENTE PLANO
========================= */
function Plano({
  titulo,
  subtitulo,
  itens,
  color,
  gratuito = false,
  descricaoCurta,
  descricaoLonga,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      style={{
        borderLeft: `5px solid ${color}`,
        transition: "all 0.3s ease",
        boxShadow: open ? "0 0 0 2px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <h3
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color }}>{open ? "▼" : "▶"}</span>
        {titulo}
      </h3>

      <p style={{ color: "#9aa5b1" }}>{subtitulo}</p>

      {/* BLOCO PROFISSIONAL (SEM PREÇO) */}
      <div style={{ marginTop: "12px" }}>
        {gratuito ? (
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color,
            }}
          >
            Diagnóstico técnico inicial
          </div>
        ) : (
          <>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color,
              }}
            >
              {descricaoCurta}
            </div>

            <div style={{ fontSize: "14px", color: "#9aa5b1" }}>
              {descricaoLonga}
            </div>
          </>
        )}
      </div>

      {/* DETALHES */}
      {open && (
        <ul
          style={{
            marginTop: "16px",
            paddingLeft: "20px",
            paddingTop: "12px",
            borderTop: `1px solid ${color}33`,
          }}
        >
          {itens.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      )}

   
    </div>
  );
}

/* =========================
   PÁGINA PLANOS
========================= */
export default function Planos() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Planos e Pacotes</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        Soluções profissionais em TI com foco em desempenho, segurança e continuidade operacional.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {/* PLANO FREE */}
        <Plano
          titulo="⚪ Plano Free"
          subtitulo="Consultoria técnica inicial e orientação especializada"
          color="#9ca3af"
          gratuito
          descricaoCurta="Diagnóstico técnico inicial"
          descricaoLonga="Ideal para avaliar seu ambiente, identificar falhas e receber direcionamento profissional antes de qualquer investimento"
          itens={[
            "Diagnóstico inicial do ambiente",
            "Consultoria técnica especializada",
            "Atendimento remoto",
            "Orientações para melhoria de infraestrutura",
            "Horários: 08h às 11h | 14h às 17h",
            "Sujeito à disponibilidade",
          ]}
        />

        {/* PLANO ESSENCIAL */}
        <Plano
          titulo="🟢 Plano Essencial"
          subtitulo="Suporte contínuo para pequenas operações"
          color="#22c55e"
          descricaoCurta="Suporte técnico e manutenção contínua"
          descricaoLonga="Perfeito para pequenas operações que precisam manter sistemas funcionando com estabilidade, evitando falhas e interrupções"
          itens={[
            "Suporte técnico remoto contínuo",
            "Manutenção preventiva",
            "Correções operacionais",
            "Monitoramento básico",
            "Relatório mensal de atividades",
          ]}
        />

        {/* PLANO PROFISSIONAL */}
        <Plano
          titulo="🔵 Plano Profissional"
          subtitulo="Estruturação e gestão de ambientes em crescimento"
          color="#3b82f6"
          descricaoCurta="Gestão estruturada de TI"
          descricaoLonga="Indicado para empresas em crescimento que precisam organizar servidores, processos e garantir continuidade operacional com suporte estratégico"
          itens={[
            "Suporte remoto e presencial",
            "Gestão de servidores e serviços",
            "Rotinas de backup automatizado",
            "Consultoria técnica recorrente",
            "Atendimento prioritário",
          ]}
        />

        {/* PLANO AVANÇADO */}
        <Plano
          titulo="🟣 Plano Avançado"
          subtitulo="Foco em segurança, estabilidade e performance"
          color="#8b5cf6"
          descricaoCurta="Segurança e performance avançada"
          descricaoLonga="Voltado para ambientes que exigem proteção contra vulnerabilidades, monitoramento contínuo e otimização de desempenho"
          itens={[
            "Monitoramento contínuo do ambiente",
            "Hardening de sistemas",
            "Análise de vulnerabilidades",
            "Gestão de atualizações e patches",
            "Relatórios técnicos avançados",
          ]}
        />

        {/* PLANO ENTERPRISE */}
        <Plano
          titulo="🔴 Plano Enterprise"
          subtitulo="Gestão completa para ambientes críticos"
          color="#ef4444"
          descricaoCurta="Operação crítica e alta disponibilidade"
          descricaoLonga="Para empresas que não podem parar, com suporte 24/7, resposta imediata a incidentes e gestão completa da infraestrutura"
          itens={[
            "Suporte dedicado 24/7",
            "Testes de segurança (Pentest)",
            "Infraestrutura Cloud e DevOps",
            "Plano de contingência e recuperação",
            "Relatórios executivos e estratégicos",
          ]}
        />
      </div>
    </div>
  );
}
