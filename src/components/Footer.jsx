import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-grid">
          {/* Sobre */}
          <div className="footer-col">
            <h2 className="footer-logo">DETOX <span>IT SOLUTIONS</span></h2>
            <p className="footer-desc">
              Suporte técnico, desenvolvimento e governança de TI.
            </p>
          </div>

        

          {/* Contato */}
          <div className="footer-col">
            <h4>Contato</h4>
            <p>Telefone: (65) 99354-6706</p>
            <p>E-mail: tijacksonlima@proton.me</p>
            <p>Uberaba - MG </p>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2026 DETOX IT SOLUTIONS. Todos os Direitos Reservados.</span>
            
          </div>
        
        </div>

      </div>
    </footer>
  );
}
