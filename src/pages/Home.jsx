import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

/* =========================
   COMPONENTE SERVIÇO
========================= */
function Servico({
  titulo,
  descricao,
  detalhes,
  color,
  destaque,
  destaqueTitulo,
  destaqueDescricao,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ borderTop: `3px solid ${color}` }}>
      {destaque && <span className="badge">RECOMENDADO</span>}

      <h3 className="card-title" onClick={() => setOpen(!open)}>
        <span style={{ color }}>{open ? "▼" : "▶"}</span>
        {titulo}
      </h3>

      <p className="card-desc">{descricao}</p>

      <div className="card-highlight">
        <div className="highlight-title" style={{ color }}>
          {destaqueTitulo}
        </div>
        <div className="highlight-desc">{destaqueDescricao}</div>
      </div>

      {open && (
        <ul
          className="card-list"
          style={{ borderTop: `1px solid ${color}33` }}
        >
          {detalhes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* BOTÃO WHATSAPP (SÓ NO GRATUITO) */}
      {destaque && (
        <a
          href="https://wa.me/5565993546706?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Agendar Avaliação Gratuita
        </a>
      )}
    </div>
  );
}

/* =========================
   PÁGINA HOME
========================= */
export default function Home() {
  return (
    <div className="container">
      <h2 className="title">
        Inovação, Segurança e Tecnologia
      </h2>

      <p className="subtitle">
        Soluções completas em tecnologia da informação, infraestrutura e
        automação para empresas que exigem desempenho, segurança e confiabilidade operacional.
      </p>

      <div className="grid">
        <Servico
          titulo="⚪ Consultoria Inicial Gratuita"
          descricao="Diagnóstico técnico e orientação estratégica"
          color="#9ca3af"
          destaque
          destaqueTitulo="Análise técnica sem custo inicial"
          destaqueDescricao="Identificamos falhas, riscos e oportunidades no seu ambiente antes de qualquer investimento"
          detalhes={[
            "Análise inicial do ambiente",
            "Identificação de falhas e riscos",
            "Recomendações técnicas",
            "Direcionamento estratégico de TI",
          ]}
        />

        <Servico
          titulo="💻 Desenvolvimento de Sistemas"
          descricao="Criação de sistemas sob medida para operação e gestão"
          color="#2563eb"
          destaqueTitulo="Sistemas adaptados ao seu negócio"
          destaqueDescricao="Desenvolvimento focado em performance, automação e integração com seus processos internos"
          detalhes={[
            "Sistemas web personalizados",
            "Aplicativos Android nativos",
            "Integração com APIs e sistemas",
            "Automação de processos internos",
          ]}
        />

        <Servico
          titulo="🛡 Segurança Cibernética"
          descricao="Proteção avançada contra ataques e vulnerabilidades"
          color="#ef4444"
          destaqueTitulo="Defesa ativa contra ameaças digitais"
          destaqueDescricao="Implementação de estratégias para prevenção, detecção e resposta a incidentes de segurança"
          detalhes={[
            "Pentest e análise de vulnerabilidades",
            "Hardening de sistemas",
            "Monitoramento de ameaças",
            "Implementação de políticas de segurança",
          ]}
        />

        <Servico
          titulo="⚙️ Hardware Profissional"
          descricao="Manutenção, upgrades e montagem de equipamentos"
          color="#10b981"
          destaqueTitulo="Alta performance e estabilidade"
          destaqueDescricao="Otimização de equipamentos para garantir desempenho, durabilidade e eficiência operacional"
          detalhes={[
            "Diagnóstico técnico avançado",
            "Upgrade de performance",
            "Montagem de máquinas sob demanda",
            "Suporte técnico especializado",
          ]}
        />

        <Servico
          titulo="🌐 Infraestrutura e Redes"
          descricao="Implantação e gestão de ambientes corporativos"
          color="#6366f1"
          destaqueTitulo="Ambiente corporativo estruturado"
          destaqueDescricao="Projetos de rede com foco em estabilidade, segurança e escalabilidade empresarial"
          detalhes={[
            "Configuração de redes corporativas",
            "Implantação de servidores",
            "Gestão de ambientes",
            "Soluções em cloud",
          ]}
        />

        <Servico
          titulo="🤖 Automação e IA"
          descricao="Automação inteligente para ganho de eficiência"
          color="#8b5cf6"
          destaqueTitulo="Automação estratégica de processos"
          destaqueDescricao="Uso de inteligência artificial para reduzir custos, otimizar tarefas e aumentar produtividade"
          detalhes={[
            "Chatbots e assistentes",
            "Automação de tarefas operacionais",
            "Integração com sistemas",
            "Soluções com inteligência artificial",
          ]}
        />
      

   
    


       <div className="buttons">
         <Link to="/servicos">
          
             &gt;&gt; Mais
          
         </Link>
       </div>

     </div>
    </div>
  );
}
