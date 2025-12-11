export default function Home() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Inovação, Segurança e Tecnologia</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        A KJ Sistemas entrega soluções modernas e profissionais em software,
        infraestrutura, segurança cibernética e hardware — tudo pensado para
        empresas que buscam alta performance, estabilidade e confiança.
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
          <h3>💻 Desenvolvimento de Sistemas</h3>
          <p>
            Criamos sistemas web, aplicativos Android, APIs, plataformas
            inteligentes e automações que aumentam produtividade e reduzem custos.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>🛡 Segurança Cibernética</h3>
          <p>
            Pentest, auditoria, monitoramento e proteção avançada para manter sua
            empresa segura contra ameaças digitais.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>⚙️ Hardware Profissional</h3>
          <p>
            Manutenção completa, upgrades de alto desempenho, diagnósticos
            detalhados e montagem de equipamentos sob medida.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3>🌐 Infraestrutura e Redes</h3>
          <p>
            Implementação e suporte de redes, servidores, ambientes corporativos e
            soluções em nuvem.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <h3>🤖 Automação e IA</h3>
          <p>
            Chatbots, assistentes inteligentes, automações de tarefas e soluções
            avançadas com Inteligência Artificial.
          </p>
        </div>
      </div>
    </div>
  );
}
