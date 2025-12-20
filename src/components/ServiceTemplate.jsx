import { Link } from "react-router-dom";

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  items = [],
}) {
  return (
    <section className="service-page">
      <h1>{title}</h1>

      {subtitle && <p className="subtitle">{subtitle}</p>}

      {description && (
        <p className="description">{description}</p>
      )}

      {items.length > 0 && (
        <ul className="service-list">
          {items.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      )}

      <Link to="/contato" className="cta-button">
        Solicitar orçamento
      </Link>
    </section>
  );
}
