export default function Contact() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Entre em Contato</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        A KJ Sistemas oferece atendimento especializado para empresas que buscam
        suporte técnico, desenvolvimento, infraestrutura, segurança cibernética
        e soluções corporativas. Estamos disponíveis pelos canais abaixo.
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
          <h3>📧 E-mail Comercial</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            contato@kjsistemas.com
          </p>
          <p>Suporte, propostas, projetos e atendimento geral.</p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>📱 WhatsApp</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            (00) 00000-0000
          </p>
          <p>Resposta rápida | Atendimento direto com especialistas.</p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>⏱ Suporte 24/7</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Disponível para empresas
          </p>
          <p>
            Incidentes críticos, falhas em servidores, ataques, quedas de
            sistemas e emergências.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3>📅 Agendar Reunião</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Consultoria e Projetos
          </p>
          <p>
            Agende uma vídeo-chamada com um especialista para falar sobre
            soluções, planejamento e estratégias.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <h3>🕒 Horário Comercial</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Seg a Sex — 08h às 18h
          </p>
          <p>
            Suporte ampliado disponível mediante contrato corporativo premium.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="card">
          <h3>🔐 Canal de Segurança</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Incidentes e Vulnerabilidades
          </p>
          <p>
            Reporte falhas, vulnerabilidades, acessos indevidos ou comportamentos
            suspeitos em sistemas.
          </p>
        </div>

        {/* CARD 7 */}
        <div className="card">
          <h3>📍 Atuação Nacional</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Brasil inteiro
          </p>
          <p>Suporte remoto ou presencial conforme a necessidade do cliente.</p>
        </div>
      </div>
    </div>
  );
}
