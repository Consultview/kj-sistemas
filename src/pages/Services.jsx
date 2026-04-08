import { useState } from "react";
import { Link } from "react-router-dom";

/* =========================
   COMPONENTE CARD SERVIÇO
========================= */
function CardServico({ titulo, link, descricao, detalhes, color, destaque }) {
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
          PRINCIPAL
        </span>
      )}

      <h3
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", display: "flex", gap: "8px" }}
      >
        <span style={{ color }}>{open ? "▼" : "▶"}</span>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          {titulo}
        </Link>
      </h3>

      <p style={{ color: "#9aa5b1" }}>{descricao}</p>

      {/* POSICIONAMENTO */}
      <div style={{ marginTop: "12px" }}>
        <div style={{ fontWeight: "bold", color }}>{detalhes.titulo}</div>
        <div style={{ fontSize: "14px", color: "#9aa5b1" }}>
          {detalhes.descricao}
        </div>
      </div>

      {/* DETALHES */}
      {open && (
        <ul
          style={{
            marginTop: "16px",
            paddingLeft: "20px",
            borderTop: `1px solid ${color}33`,
            paddingTop: "12px",
          }}
        >
          {detalhes.lista.map((item, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================
   PÁGINA SERVICES
========================= */
export default function Services() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Nossos Serviços</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        Soluções completas para empresas que buscam performance, segurança e escalabilidade em seus ambientes tecnológicos.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >


        <CardServico
          titulo="🚀 Implantação de Sistemas"
          link="/servicos/implantacao"
          color="#2563eb"
          destaque
          descricao="Configuração e integração de softwares no seu negócio"
          detalhes={{
            titulo: "Eficiência na transição",
            descricao: "Implementamos soluções de software garantindo a correta configuração, migração de dados e treinamento da equipe.",
            lista: [
              "Configuração de ERPs e CRMs",
              "Migração de banco de dados",
              "Integração entre plataformas",
              "Treinamento e suporte pós-implantação",
            ],
          }}
        />
        

        <CardServico
          titulo="🛡 Segurança da Informação"
          link="/servicos/seguranca"
          color="#ef4444"
          destaque
          descricao="Proteção contra ataques e vulnerabilidades"
          detalhes={{
            titulo: "Defesa cibernética",
            descricao: "Estratégias para proteger dados, sistemas e operações contra ameaças digitais",
            lista: [
              "Pentest",
              "Análise de vulnerabilidades",
              "Hardening",
              "Monitoramento de segurança",
            ],
          }}
        />

        <CardServico
          titulo="🛠 Infraestrutura & Suporte"
          link="/servicos/infraestrutura"
          color="#6366f1"
          descricao="Ambientes corporativos estáveis e seguros"
          detalhes={{
            titulo: "Base tecnológica sólida",
            descricao: "Implantação e manutenção de ambientes com alta disponibilidade",
            lista: [
              "Servidores",
              "Redes corporativas",
              "Backup",
              "Monitoramento",
            ],
          }}
        />

        <CardServico
          titulo="⚙️ Hardware"
          link="/servicos/hardware"
          color="#10b981"
          descricao="Manutenção e otimização de equipamentos"
          detalhes={{
            titulo: "Performance e durabilidade",
            descricao: "Ajustes técnicos para melhorar desempenho e vida útil",
            lista: [
              "Upgrade de hardware",
              "Diagnóstico",
              "Reparo técnico",
              "Montagem personalizada",
            ],
          }}
        />

        <CardServico
          titulo="🤖 Automação & IA"
          link="/servicos/automacao-ia"
          color="#8b5cf6"
          descricao="Automação inteligente de processos"
          detalhes={{
            titulo: "Eficiência operacional",
            descricao: "Redução de tarefas manuais com uso de inteligência artificial",
            lista: [
              "Chatbots",
              "Scripts automáticos",
              "Integração de sistemas",
              "IA aplicada",
            ],
          }}
        />

        <CardServico
          titulo="📊 Consultoria Tecnológica"
          link="/servicos/consultoria"
          color="#f59e0b"
          descricao="Planejamento e estratégia de TI"
          detalhes={{
            titulo: "Visão estratégica",
            descricao: "Análise do ambiente e definição de melhorias tecnológicas",
            lista: [
              "Diagnóstico técnico",
              "Planejamento",
              "Modernização",
              "Acompanhamento",
            ],
          }}
        />

        <CardServico
          titulo="📢 Marketing Digital"
          link="/servicos/marketing-digital"
          color="#ec4899"
          descricao="Posicionamento e crescimento online"
          detalhes={{
            titulo: "Presença digital",
            descricao: "Estratégias para atrair clientes e aumentar visibilidade",
            lista: [
              "Tráfego pago",
              "SEO",
              "Campanhas",
              "Branding",
            ],
          }}
        />

        <CardServico
          titulo="☁️ Cloud & DevOps"
          link="/servicos/cloud"
          color="#06b6d4"
          descricao="Infraestrutura em nuvem escalável"
          detalhes={{
            titulo: "Alta disponibilidade",
            descricao: "Ambientes em nuvem com automação e escalabilidade",
            lista: [
              "Deploy cloud",
              "CI/CD",
              "Infraestrutura automatizada",
              "Escalabilidade",
            ],
          }}
        />

        <CardServico
          titulo="📈 Monitoramento"
          link="/servicos/monitoramento"
          color="#84cc16"
          descricao="Controle e análise contínua"
          detalhes={{
            titulo: "Visibilidade total",
            descricao: "Monitoramento de sistemas para evitar falhas e otimizar performance",
            lista: [
              "Logs",
              "Uptime",
              "Performance",
              "Alertas",
            ],
          }}
        />
       
      


          <div className="buttons">


         <Link to="/produtos/" 
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
           Mais Produtos
         </Link>
         
         </div>
       </div>
    </div>
  );
}
