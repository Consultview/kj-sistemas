import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Nossos Serviços</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        A KJ Sistemas oferece soluções completas para empresas:
        desenvolvimento, segurança cibernética, infraestrutura, automação,
        marketing digital, suporte técnico e consultoria estratégica.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {/* CARD 1 */}
        <div className="card">
          <h3>
            <Link to="/servicos/desenvolvimento">
              💻 Desenvolvimento de Software
            </Link>
          </h3>
          <p>
            Sistemas web, apps Android, APIs, automações e soluções
            personalizadas para empresas.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>
            <Link to="/servicos/seguranca">
              🛡 Segurança da Informação
            </Link>
          </h3>
          <p>
            Pentest, análises de vulnerabilidade, hardening,
            auditorias e proteção contra ataques.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>
            <Link to="/servicos/infraestrutura">
              🛠 Suporte Técnico & Infraestrutura
            </Link>
          </h3>
          <p>
            Redes, servidores, backup, monitoramento, manutenção
            e otimização de ambientes corporativos.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3>
            <Link to="/servicos/hardware">
              ⚙️ Serviços de Hardware
            </Link>
          </h3>
          <p>
            Manutenção, upgrades, diagnóstico profissional,
            montagem e reparo de computadores.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <h3>
            <Link to="/servicos/automacao-ia">
              🤖 Automação & Inteligência Artificial
            </Link>
          </h3>
          <p>
            Chatbots, scripts avançados, automação de processos
            e assistentes inteligentes.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="card">
          <h3>
            <Link to="/servicos/consultoria">
              📊 Consultoria Tecnológica
            </Link>
          </h3>
          <p>
            Planejamento estratégico, modernização de sistemas
            e suporte técnico especializado.
          </p>
        </div>

        {/* CARD 7 — NOVO */}
        <div className="card">
          <h3>
            <Link to="/servicos/redes-sociais">
              📱 Gestão de Redes Sociais
            </Link>
          </h3>
          <p>
            Criação de conteúdo, planejamento estratégico,
            gestão de perfis e crescimento digital.
          </p>
        </div>

        {/* CARD 8 — NOVO */}
        <div className="card">
          <h3>
            <Link to="/servicos/marketing-digital">
              📢 Marketing Digital
            </Link>
          </h3>
          <p>
            Tráfego pago, SEO, campanhas online,
            branding e posicionamento digital.
          </p>
        </div>

        {/* CARD 9 — NOVO */}
        <div className="card">
          <h3>
            <Link to="/servicos/cloud">
              ☁️ Cloud & DevOps
            </Link>
          </h3>
          <p>
            Deploy em nuvem, Azure/AWS, CI/CD,
            automação de infraestrutura e escalabilidade.
          </p>
        </div>

        {/* CARD 10 — NOVO */}
        <div className="card">
          <h3>
            <Link to="/servicos/monitoramento">
              📈 Monitoramento & Observabilidade
            </Link>
          </h3>
          <p>
            Monitoramento de sistemas, logs,
            performance, uptime e segurança contínua.
          </p>
        </div>
      </div>
    </div>
  );
}
