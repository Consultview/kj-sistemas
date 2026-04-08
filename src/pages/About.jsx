import { useState } from "react";
import { Link } from "react-router-dom";
/* =========================
   COMPONENTE CARD ABOUT (PADRÃO SISTEMA)
========================= */
function CardAbout({ titulo, descricao, detalhes, color, destaque }) {
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
          INSTITUCIONAL
        </span>
      )}

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

      {/* DESCRIÇÃO (SEMPRE VISÍVEL) */}
      <p style={{ color: "#9aa5b1" }}>{descricao}</p>

      {/* DETALHES (EXPANSÍVEL IGUAL OUTROS) */}
      {open && (
        <ul
          style={{
            marginTop: "16px",
            paddingLeft: "20px",
            paddingTop: "12px",
            borderTop: `1px solid ${color}33`,
          }}
        >
          {detalhes.map((item, index) => (
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
   PÁGINA ABOUT
========================= */
export default function About() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Sobre nós</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        A DETOX IT SOLUTIONS possui soluções tecnológicas completas,
        com foco em performance, estabilidade e inovação. Atuamos no desenvolvimento
        de sistemas, infraestrutura, segurança cibernética e automação, atendendo
        empresas que buscam evolução tecnológica com confiança e eficiência.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <CardAbout
          titulo="🏢 Nossa História"
          color="#2563eb"
          destaque
          descricao="A DETOX IT SOLUTIONS foi criada com o objetivo de acompanhar a evolução da tecnologia e oferecer soluções modernas e seguras."
          detalhes={[
            "Evolução constante em tecnologia",
            "Foco em inovação e segurança",
            "Atuação em múltiplos segmentos",
          ]}
        />

        <CardAbout
          titulo="🎯 Nossa Missão"
          color="#22c55e"
          descricao="Levar inovação, segurança e eficiência para ambientes tecnológicos corporativos."
          detalhes={[
            "Aumento de produtividade",
            "Redução de riscos operacionais",
            "Alta performance em sistemas",
          ]}
        />

        <CardAbout
          titulo="⚙️ Nosso Diferencial"
          color="#8b5cf6"
          destaque
          descricao="Soluções completas integrando software, hardware, infraestrutura e cloud."
          detalhes={[
            "Atuação ponta a ponta",
            "Um único parceiro tecnológico",
            "Controle total do ambiente",
          ]}
        />

        <CardAbout
          titulo="🛡 Segurança como prioridade"
          color="#ef4444"
          descricao="Proteção avançada contra ameaças digitais e vulnerabilidades."
          detalhes={[
            "Hardening de sistemas",
            "Análise de vulnerabilidades",
            "Monitoramento contínuo",
          ]}
        />

        <CardAbout
          titulo="📈 Tecnologia moderna"
          color="#f59e0b"
          descricao="Uso de arquiteturas escaláveis e tecnologias atuais."
          detalhes={[
            "Alta performance",
            "Escalabilidade",
            "Sustentabilidade tecnológica",
          ]}
        />

        <CardAbout
          titulo="🤝 Compromisso com o cliente"
          color="#10b981"
          descricao="Atendimento direto e acompanhamento completo do projeto."
          detalhes={[
            "Planejamento estratégico",
            "Execução técnica",
            "Suporte contínuo",
          ]}
        />

     

        <CardAbout
          titulo="📊 Foco em resultados"
          color="#ec4899"
          destaque
          descricao="Projetos voltados para eficiência e redução de custos."
          detalhes={[
            "Otimização de processos",
            "Redução de custos",
            "Aumento de produtividade",
          ]}
        />


        
 




    <div className="buttons">
          <Link to="/contato/"
            className="link-mais"
            style={{
              display: 'inline-block',
              padding: '10px 25px',
              backgroundColor: 'rgba(0, 43, 94, 0.6)',
              border: '2px solid #007bff',
              color: '#ffffff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold'
           }}
        >
           Fale Conosco!
        </Link>

        </div>

        
      </div>
    </div>
  );
}
