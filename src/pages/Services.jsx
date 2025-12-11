export default function Services() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Nossos Serviços</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        A KJ Sistemas oferece soluções completas para empresas:
        desenvolvimento, segurança cibernética, infraestrutura, automação,
        suporte técnico e consultoria estratégica.
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
          <h3>💻 Desenvolvimento de Software</h3>
          <p>
            Sistemas web, apps Android, APIs, automações e soluções personalizadas
            para empresas de todos os tamanhos.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>🛡 Segurança da Informação</h3>
          <p>
            Pentest, análises de vulnerabilidade, hardening, auditorias e
            proteção avançada contra ataques.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>🛠 Suporte Técnico e Infraestrutura</h3>
          <p>
            Redes, servidores, backup, manutenção, otimização e monitoramento
            para ambientes corporativos.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3>⚙️ Serviços de Hardware</h3>
          <p>
            Manutenção, upgrades, diagnóstico profissional, montagem e reparo de
            computadores de alta performance.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <h3>🤖 Automação e Inteligência Artificial</h3>
          <p>
            Chatbots, scripts avançados, automações de processos
            e assistentes inteligentes para empresas.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="card">
          <h3>📊 Consultoria Tecnológica</h3>
          <p>
            Planejamento estratégico, modernização de sistemas,
            recomendações de infraestrutura e suporte especializado.
          </p>
        </div>
      </div>
    </div>
  );
}
