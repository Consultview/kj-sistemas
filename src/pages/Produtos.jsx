import { useState } from "react";


import { Link } from "react-router-dom";

/* =========================
   COMPONENTE PRODUTO/MARCA
========================= */
function Marca({ nome, descricao, itens, color, destaque, categoria, descricaoCurta, descricaoLonga }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      style={{
        borderLeft: `5px solid ${color}`,
        transition: "all 0.3s ease",
        boxShadow: open ? "0 0 0 2px rgba(0,0,0,0.06)" : "none",
        position: "relative",
      }}
    >
      {destaque && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: color,
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
          }}
        >
          MAIS UTILIZADO
        </span>
      )}

      <h3
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color }}>{open ? "▼" : "▶"}</span>
        {nome}
      </h3>

      <p style={{ color: "#9aa5b1" }}>{descricao}</p>

      <div style={{ fontSize: "12px", marginTop: "6px", color }}>
        {categoria}
      </div>

      {/* DESCRIÇÃO ESPECÍFICA */}
      <div style={{ marginTop: "12px" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold", color }}>
          {descricaoCurta}
        </div>

        <div style={{ fontSize: "14px", color: "#9aa5b1" }}>
          {descricaoLonga}
        </div>
      </div>

      {open && (
        <ul
          style={{
            marginTop: "16px",
            paddingLeft: "20px",
            paddingTop: "12px",
            borderTop: `1px solid ${color}33`,
          }}
        >
          {itens.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

/* =========================
   PÁGINA PRODUTOS / MARCAS
========================= */
export default function Marcas() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Equipamentos e Soluções</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        Aqui você encontra os produtos mais utilizados, incluindo infraestrutura, segurança, redes e dispositivos.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >



        {/* HARDWARE */}
        <Marca
          nome="💻 Dell / Lenovo / HP"
          descricao="Computadores e servidores corporativos"
          categoria="Hardware"
          color="#2563eb"
          destaque
          descricaoCurta="Infraestrutura computacional corporativa"
          descricaoLonga="Equipamentos voltados para empresas que precisam de desempenho, confiabilidade e suporte, incluindo notebooks, desktops e servidores"
          itens={[
            "Notebooks empresariais",
            "Desktops corporativos",
            "Servidores dedicados",
            "Workstations",
          ]}
        />

        {/* MOBILE */}
        <Marca
          nome="📱 Xiaomi / Samsung / Motorola"
          descricao="Dispositivos móveis e mobilidade"
          categoria="Mobilidade"
          color="#f97316"
          descricaoCurta="Mobilidade corporativa e operação externa"
          descricaoLonga="Smartphones e dispositivos móveis para equipes operacionais, vendas e gestão remota com alto desempenho e conectividade"
          itens={[
            "Smartphones Android",
            "Dispositivos para equipe externa",
            "Integração com sistemas",
            "Alta autonomia e desempenho",
          ]}
        />

        {/* PERIFÉRICOS */}
        <Marca
          nome="⌨️ Logitech / Redragon"
          descricao="Periféricos e produtividade"
          categoria="Acessórios"
          color="#10b981"
          descricaoCurta="Produtividade e ergonomia no ambiente de trabalho"
          descricaoLonga="Equipamentos essenciais para operação diária, garantindo conforto, precisão e eficiência para usuários corporativos"
          itens={[
            "Teclados profissionais",
            "Mouses de precisão",
            "Headsets corporativos",
            "Acessórios ergonômicos",
          ]}
        />

        {/* REDES */}
        <Marca
          nome="📡 Ubiquiti / Mikrotik / TP-Link"
          descricao="Infraestrutura de redes"
          categoria="Redes"
          color="#6366f1"
          destaque
          descricaoCurta="Conectividade corporativa e redes escaláveis"
          descricaoLonga="Soluções para redes empresariais com controle, estabilidade e expansão, garantindo conectividade segura e de alta performance"
          itens={[
            "Access Points",
            "Roteadores corporativos",
            "Switches gerenciáveis",
            "Infraestrutura de rede",
          ]}
        />

        {/* SEGURANÇA */}
        <Marca
          nome="🛡️ Fortinet / Sophos"
          descricao="Segurança e firewall"
          categoria="Cybersecurity"
          color="#ef4444"
          destaque
          descricaoCurta="Proteção avançada contra ameaças digitais"
          descricaoLonga="Soluções de segurança para proteção de dados, controle de acessos e prevenção de ataques em ambientes corporativos"
          itens={[
            "Firewall corporativo",
            "VPN segura",
            "Controle de acesso",
            "Proteção contra ameaças",
          ]}
        />

        {/* CLOUD */}
        <Marca
          nome="☁️ Microsoft / Google"
          descricao="Cloud e produtividade"
          categoria="Cloud"
          color="#0ea5e9"
          descricaoCurta="Serviços em nuvem e colaboração"
          descricaoLonga="Plataformas para armazenamento, colaboração e gestão empresarial com alta disponibilidade e segurança"
          itens={[
            "Microsoft 365",
            "Google Workspace",
            "Armazenamento em nuvem",
            "E-mails corporativos",
          ]}
        />

        {/* BACKUP */}
        <Marca
          nome="💾 Veeam / Acronis"
          descricao="Backup e recuperação"
          categoria="Backup"
          color="#8b5cf6"
          descricaoCurta="Proteção e recuperação de dados"
          descricaoLonga="Soluções de backup para garantir continuidade do negócio e recuperação rápida em caso de falhas ou ataques"
          itens={[
            "Backup automático",
            "Recuperação de desastres",
            "Proteção contra ransomware",
            "Gestão de dados",
          ]}
        />
        {/* ENERGIA */}
        <Marca
          nome="🔋 APC / SMS"
          descricao="Proteção elétrica e continuidade operacional"
          categoria="Energia"
          color="#f59e0b"
          descricaoCurta="Continuidade e proteção de energia"
          descricaoLonga="Soluções para evitar paradas causadas por falhas elétricas, protegendo equipamentos críticos e garantindo operação contínua"
          itens={[
            "Nobreaks corporativos",
            "Proteção contra surtos",
            "Energia redundante",
            "Estabilização elétrica",
          ]}
        />

        {/* INFRAESTRUTURA */}
        <Marca
          nome="🗄️ Racks / Cabeamento"
          descricao="Estrutura física de TI"
          categoria="Infraestrutura"
          color="#64748b"
          descricaoCurta="Organização e padronização de ambientes"
          descricaoLonga="Infraestrutura física essencial para organização de servidores e redes, garantindo eficiência, segurança e escalabilidade"
          itens={[
            "Racks de servidor",
            "Patch panels",
            "Cabeamento estruturado",
            "Organização de rede",
          ]}
        />
        

        {/* IOT */}
        <Marca
          nome="🏢 IoT / Automação"
          descricao="Automação e tecnologia inteligente"
          categoria="Inovação"
          color="#14b8a6"
          destaque
          descricaoCurta="Ambientes inteligentes e conectados"
          descricaoLonga="Soluções de automação para controle de ambientes, sensores inteligentes e integração com sistemas para aumentar eficiência operacional"
          itens={[
            "Sensores inteligentes",
            "Automação de ambientes",
            "Monitoramento remoto",
            "Integração com sistemas",
          ]}
        />




   <div className="buttons">



         <Link to="/contato/" 
           className="link-mais" 
           style={{ 
             display: 'inline-block',
             padding: '10px 25px',
             backgroundColor: 'rgba(0, 43, 94, 0.6)', 
             border: '2px solid #007bff',            
             color: '#ffffff',                       
             borderRadius: '5px',                    
             textDecoration: 'none',                 
             fontWeight: 'bold'
           }}
         >
           Saiba Mais
         </Link>
         
        </div>
      
</div>
</div>

  




  
    
  );


}
