import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Inovação, Segurança e Tecnologia</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        Serviços e soluções moderna em tecnologia da informação, comunicação e automação.
        <br />
        Tudo pensado para quem busca alta performance, estabilidade e confiança.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <div className="card">
          <h3>💻 Desenvolvimento de Sistemas</h3>
          <p>
            Criamos sistemas web, aplicativos Android, APIs, plataformas
            inteligentes e automações que aumentam produtividade e reduzem custos.
          </p>
        </div>

        <div className="card">
          <h3>🛡 Segurança Cibernética</h3>
          <p>
            Pentest, auditoria, monitoramento e proteção avançada para manter sua
            empresa segura contra ameaças digitais.
          </p>
        </div>

        <div className="card">
          <h3>⚙️ Hardware Profissional</h3>
          <p>
            Manutenção completa, upgrades de alto desempenho, diagnósticos
            detalhados e montagem de equipamentos sob medida.
          </p>
        </div>

        <div className="card">
          <h3>🌐 Infraestrutura e Redes</h3>
          <p>
            Implementação e suporte de redes, servidores, ambientes corporativos e
            soluções em nuvem.
          </p>
        </div>

        <div className="card">
          <h3>🤖 Automação e IA</h3>
          <p>
            Chatbots, assistentes inteligentes, automações de tarefas e soluções
            avançadas com Inteligência Artificial.
          </p>
        </div>
      </div>

      {/* BOTÃO MAIS SERVIÇOS */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/servicos" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #2563eb, #1e40af)",
              color: "#fff",
            }}
          >
            &gt;&gt; Mais Serviços
          </button>
        </Link>
      </div>
    </div>
  );
}
