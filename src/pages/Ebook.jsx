export default function Ebook() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Biblioteca de E-books</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        Biblioteca digital profissional com conteúdos técnicos e estratégicos
        voltados para tecnologia, segurança da informação, desenvolvimento,
        infraestrutura e negócios digitais.
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
          <h3>📚 Acervo Digital</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            20 E-books Profissionais
          </p>
          <p>
            Conteúdo técnico aprofundado, focado em aplicação real no mercado de
            TI e tecnologia corporativa.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>💰 Valor Único</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            R$ 100,00
          </p>
          <p>
            Pagamento único com acesso completo a toda a biblioteca, sem
            mensalidades ou taxas ocultas.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>🔓 Acesso Vitalício</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Permanente
          </p>
          <p>
            Após a compra, o acesso aos e-books é definitivo, incluindo futuras
            atualizações do acervo.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3>🧠 Conteúdo Técnico</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Nível Profissional
          </p>
          <p>
            Desenvolvido para profissionais de TI, estudantes avançados,
            gestores, analistas e empreendedores.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <h3>🖥 Formato Digital</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            PDF / Online
          </p>
          <p>
            Compatível com computadores, tablets e smartphones, permitindo
            leitura em qualquer ambiente.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="card">
          <h3>🔐 Conteúdo Exclusivo</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Produção Própria
          </p>
          <p>
            Material autoral, sem conteúdo genérico, focado em conhecimento
            técnico e estratégico de alto nível.
          </p>
        </div>

        {/* CARD 7 */}
        <div className="card">
          <h3>📈 Atualizações</h3>
          <p className="primary-info" style={{ fontWeight: "bold" }}>
            Inclusas
          </p>
          <p>
            Novos e-books adicionados futuramente sem custo adicional para quem
            já adquiriu a biblioteca.
          </p>
        </div>
      </div>
    </div>
  );
}
