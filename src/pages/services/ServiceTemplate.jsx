import { useState } from "react";
import { Link } from "react-router-dom";
import "./serviceTemplate.css";

/* =========================
   COMPONENTE ITEM INTERNO (CARDS)
========================= */
function ItemServico({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card-service"
      style={{ borderLeft: `5px solid ${data.color}` }}
    >
      {data.destaque && (
        <span className="badge-destaque" style={{ background: data.color }}>
          DESTAQUE
        </span>
      )}

      <h3 className="card-header" onClick={() => setOpen(!open)}>
        <span style={{ color: data.color }}>{open ? "▼" : "▶"}</span>
        {data.nome}
      </h3>

      <p style={{ color: "#9aa5b1", fontSize: "14px", margin: "8px 0" }}>
        {data.descricao}
      </p>

      <div className="card-category" style={{ color: data.color }}>
        {data.categoria}
      </div>

      <div className="card-info-box">
        <div className="info-title" style={{ color: data.color }}>
          {data.descricaoCurta}
        </div>
        <div className="info-desc">
          {data.descricaoLonga}
        </div>
      </div>

      {open && (
        <ul className="card-list-items" style={{ borderTop: `1px solid ${data.color}33` }}>
          {data.itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================
   PÁGINA SERVICE TEMPLATE
========================= */
export default function ServiceTemplate({ title, subtitle, description, items }) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>

      {/* CARD DE DESCRIÇÃO GERAL (PADRONIZADO) */}
      <div 
        className="card-service" 
        style={{ borderLeft: "5px solid #2563eb", marginBottom: "40px", cursor: "default" }}
      >
        <div className="card-category" style={{ color: "#2563eb", marginBottom: "10px" }}>
          Visão Geral da Solução
        </div>
        <div className="description-text" style={{ marginTop: "0", fontSize: "16px" }}>
          {description}
        </div>
      </div>

      <div className="grid">
        {items.map((item, index) => (
          <ItemServico key={index} data={item} />
        ))}
      </div>

      <div className="buttons-section">
        <Link to="/contato">
          <button className="btn-primary">Solicitar Orçamento</button>
        </Link>
      </div>
    </div>
  );
}
