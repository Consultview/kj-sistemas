import { useState } from "react";

/* =========================
   UTILITÁRIOS
========================= */
function calcularParcelas(valor, parcelas = 12, juros = 0.19) {
  const total = valor * (1 + juros);
  return (total / parcelas).toFixed(2);
}

function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

/* =========================
   COMPONENTE PLANO
========================= */
function Plano({
  titulo,
  subtitulo,
  itens,
  color,
  precoOriginal,
  precoPromocional,
  gratuito = false,
}) {
  const [open, setOpen] = useState(false);

  const mensagem = encodeURIComponent(
    `Quero contratar o ${titulo} agora`
  );

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

      {/* PREÇOS */}
      <div style={{ marginTop: "12px" }}>
        {gratuito ? (
          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color,
            }}
          >
            GRATUITO
          </div>
        ) : (
          <>
            <div
              style={{
                textDecoration: "line-through",
                color: "#9aa5b1",
                fontSize: "14px",
              }}
            >
              {formatar(precoOriginal)}
            </div>

            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                color,
              }}
            >
              {formatar(precoPromocional)}
            </div>

            <div style={{ fontSize: "14px", color: "#9aa5b1" }}>
              ou 12x de{" "}
              {formatar(
                Number(calcularParcelas(precoPromocional))
              )}{" "}
              com juros de 19%
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

      {/* BOTÃO WHATSAPP */}
      <a
        href={`https://wa.me/5565993546706?text=${encodeURIComponent(
          gratuito
            ? "Quero utilizar o Plano Free de consultoria técnica"
            : `Quero comprar o ${titulo} agora`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          marginTop: "20px",
          textAlign: "center",
          padding: "12px",
          borderRadius: "8px",
          backgroundColor: "#25D366",
          color: "#fff",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        💬 {gratuito ? "Falar com um consultor" : "Quero comprar este plano agora"}
      </a>
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
        Contrato mínimo de <strong>6 meses</strong> para planos pagos.
        Atendimento remoto especializado incluso no plano Free.
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
          subtitulo="Consultoria técnica remota gratuita"
          color="#9ca3af"
          gratuito
          itens={[
            "Consultoria técnica especializada em TI",
            "Atendimento remoto",
            "Auxílio técnico e orientações gerais",
            "Horários de atendimento:",
            "• Manhã: 08h às 11h",
            "• Tarde: 14h às 17h",
           
            "Sujeito à disponibilidade",
          ]}
        />

        {/* PLANO ESSENCIAL */}
        <Plano
          titulo="🟢 Plano Essencial"
          subtitulo="Ideal para pequenos negócios"
          color="#22c55e"
          precoOriginal={850}
          precoPromocional={690}
          itens={[
            "Suporte técnico remoto",
            "Manutenção preventiva",
            "Correções básicas",
            "Monitoramento",
            "Relatório mensal",
          ]}
        />

        {/* PLANO PROFISSIONAL */}
        <Plano
          titulo="🔵 Plano Profissional"
          subtitulo="Empresas em crescimento"
          color="#3b82f6"
          precoOriginal={4500}
          precoPromocional={2100}
          itens={[
            "Suporte remoto e presencial",
            "Gestão de servidores",
            "Backup automatizado",
            "Consultoria mensal",
            "Atendimento especializado",
          ]}
        />

        {/* PLANO AVANÇADO */}
        <Plano
          titulo="🟣 Plano Avançado"
          subtitulo="Alta performance e segurança"
          color="#8b5cf6"
          precoOriginal={8900}
          precoPromocional={7000}
          itens={[
          "Desenvolvimento de sistemas",
            "Monitoramento contínuo",
            "Hardening de sistemas",
            "Análise de vulnerabilidades",
            "Gestão de patches",
            "Relatórios avançados",
          ]}
        />

        {/* PLANO ENTERPRISE */}
        <Plano
          titulo="🔴 Plano Enterprise"
          subtitulo="Ambientes críticos"
          color="#ef4444"
          precoOriginal={19000}
          precoPromocional={17500}
          itens={[
            "Suporte dedicado 24/7",
            "Pentest periódico",
            "Cloud & DevOps",
            "Plano de contingência",
            "Relatórios executivos",
          ]}
        />
      </div>
    </div>
  );
}
