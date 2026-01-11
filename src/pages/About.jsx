export default function About() {
  return (
    <div className="container">
      <h2 style={{ fontSize: "32px" }}>Sobre a KJ Sistemas</h2>

      <p style={{ fontSize: "18px", color: "#9aa5b1" }}>
        A Nossa empresa é pensada para soluções tecnológicas.
        Nosso foco é entregar performance, estabilidade e inovação para
        empresas de todos os tamanhos.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <div className="card">
          <h3>🏢 Nossa História</h3>
          <p>
            Pensado e criada para atender a transformação e evolução da tecnologia da informação, comunicação e automação.
            evoluímos oferecendo soluções robustas, seguras e modernas.
          </p>
        </div>

        <div className="card">
          <h3>🎯 Nossa Missão</h3>
          <p>
            Levar inovação, segurança e eficiência a toda a infraestrutura tecnológica através de serviços e sistemas inteligentes de alto desempenho.
          </p>
        </div>

        <div className="card">
          <h3>⚙️ Nosso Diferencial</h3>
          <p>
            Entregamos soluções completas: software, hardware, cloud, atuando em toda a cadeia tecnológica garantindo a continuidade dos processos - tudo em um só lugar.
          </p>
        </div>

        <div className="card">
          <h3>🛡 Segurança como prioridade</h3>
          <p>
            Aplicamos padrões profissionais, hardening, auditorias e
            práticas avançadas para garantir a segurança cibernética.
            
          </p>
        </div>

        <div className="card">
          <h3>📈 Tecnologia moderna</h3>
          <p>
            Utilizamos ferramentas atuais, desenvolvimento otimizado e
            arquiteturas escaláveis para garantir performance real.
          </p>
        </div>

        <div className="card">
          <h3>🤝 Compromisso com o cliente</h3>
          <p>
            Atendimento direto, rápido e profissional. Estamos presentes
            em todas as etapas: planejamento, execução e suporte contínuo.
          </p>
        </div>

        <div className="card">
          <h3>🌐 Infraestrutura e Cloud</h3>
          <p>
            Servidores, redes, otimizações, monitoramento e
            soluções em nuvem para garantir alta disponibilidade.
          </p>
        </div>

        <div className="card">
          <h3>📊 Foco em resultados</h3>
          <p>
            Cada serviço é projetado para melhorar desempenho, reduzir custos
            operacionais e aumentar a produtividade da sua empresa.
          </p>
        </div>
      </div>
    </div>
  );
}
