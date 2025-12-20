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

      {description && <p className="description">{description}</p>}

      {items.length > 0 && (
        <ul className="service-list">
          {items.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      )}

      <a href="/contato" className="cta-button">
        Solicitar orçamento
      </a>
    </section>
  );
}
