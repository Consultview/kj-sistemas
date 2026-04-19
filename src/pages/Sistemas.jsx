import "../styles/home.css";

function CardSistema({ titulo, descricao, url, cor }) {
  return (
    <div className="card" style={{ borderTop: `3px solid ${cor}`, display: "flex", flexDirection: "column" }}>
      <h3 className="card-title" style={{ color: cor }}>
        <span style={{ marginRight: '8px' }}>🚀</span>
        {titulo}
      </h3>

      <p className="card-desc" style={{ flexGrow: 1, marginTop: '10px' }}>
        {descricao}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-mais"
        style={{
          textAlign: "center",
          marginTop: "20px",
          display: "block",
          padding: "12px",
          backgroundColor: cor,
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        Acessar Sistema →
      </a>
    </div>
  );
}

export default function Sistemas() {
  const sistemas = [
    
    {
      titulo: "City House",
      descricao: "Plataforma moderna de gestão imobiliária e catálogo digital para visualização de propriedades.",
      url: "https://cityhouse.onrender.com/",
      cor: "#10b981" // Verde
    }
  ];

  return (
    <div className="container" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <h2 className="title">Nossas Soluções em Sistemas</h2>
      <p className="subtitle">Tecnologia e performance aplicadas em nossos projetos ativos.</p>

      <div className="grid">
        {sistemas.map((sistema, index) => (
          <CardSistema key={index} {...sistema} />
        ))}
      </div>
    </div>
  );
}
