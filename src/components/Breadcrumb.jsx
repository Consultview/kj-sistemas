import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  if (pathnames.length === 0) return null; // não mostra na Home

  const labels = {
    servicos: "Serviços",
    desenvolvimento: "Desenvolvimento",
    seguranca: "Segurança",
    infraestrutura: "Infraestrutura",
    hardware: "Hardware",
    "automacao-ia": "Automação & IA",
    consultoria: "Consultoria",
    "redes-sociais": "Redes Sociais",
    "marketing-digital": "Marketing Digital",
    cloud: "Cloud & DevOps",
    monitoramento: "Monitoramento",
    sobre: "Sobre",
    contato: "Contato",
  };

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-home">
        🏠 Início
      </Link>

      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const label = labels[segment] || segment;

        return (
          <span key={to} className="breadcrumb-item">
            <span className="breadcrumb-separator">›</span>

            {index === pathnames.length - 1 ? (
              <span className="breadcrumb-current">{label}</span>
            ) : (
              <Link to={to}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
