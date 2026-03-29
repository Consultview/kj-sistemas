import ServiceTemplate from "./ServiceTemplate";

export default function Desenvolvimento() {
  return (
    <ServiceTemplate
      title="Engenharia e Desenvolvimento de Software"
      subtitle="Sistemas robustos sob medida com foco em Clean Architecture e alta disponibilidade."
      description={`
        O desenvolvimento de software moderno exige mais do que apenas funcionalidade; exige resiliência, manutenibilidade e uma base técnica que permita a evolução constante. Softwares mal projetados geram dívida técnica, custos exponenciais de manutenção e travam o crescimento do negócio.

        Nossa metodologia prioriza arquiteturas desacopladas e seguras, garantindo que sua plataforma suporte grandes volumes de tráfego e integrações complexas sem perda de performance.

        ⚠️ Gargalos de Desenvolvimento que Resolvemos:
        - Sistemas lentos, instáveis ou que apresentam falhas constantes em produção.
        - Dificuldade em adicionar novas funcionalidades por falta de padrões de código.
        - Falta de integração entre o software e o restante do ecossistema da empresa.
        - Interfaces pouco intuitivas que geram fricção no uso e baixa produtividade.
        - Aplicações vulneráveis a ataques e sem protocolos de segurança de dados.

        ⚠️ Riscos de Softwares Mal Estruturados:
        - Interrupção de serviços críticos por falhas de arquitetura (Downtime).
        - Alto custo de refatoração para corrigir erros básicos de design.
        - Incompatibilidade com novos navegadores, dispositivos ou sistemas operacionais.
        - Experiência negativa do usuário final, resultando em perda de faturamento.

        ⚠️ Requisitos para o Sucesso do Projeto:
        - Levantamento detalhado de requisitos e regras de negócio.
        - Definição clara da stack tecnológica (Frontend, Backend e Mobile).
        - Acesso a ambientes de homologação e bases de dados para testes.
        - Alinhamento constante entre stakeholders e equipe de engenharia.

        O objetivo é entregar uma solução de software que seja um diferencial competitivo, pronta para escalar conforme a demanda da sua operação.
      `}
      items={[
        {
          nome: "🌐 Plataformas Web & Dashboards",
          descricao: "Sistemas corporativos de alta complexidade e performance.",
          categoria: "Web Engineering",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Experiência Digital Superior",
          descricaoLonga: "Desenvolvimento de aplicações ricas em funcionalidades (SPA/PWA), focadas em usabilidade, velocidade e segurança de dados.",
          itens: [
            "Dashboards administrativos e gerenciais",
            "Sistemas de gestão interna (ERP/CRM)",
            "Plataformas SaaS escaláveis",
            "Interfaces responsivas e intuitivas"
          ]
        },
        {
          nome: "📱 Mobile (Android Nativo/Híbrido)",
          descricao: "Aplicações móveis robustas e integradas.",
          categoria: "Mobile Development",
          color: "#10b981",
          descricaoCurta: "Mobilidade e Presença Digital",
          descricaoLonga: "Criação de aplicativos focados em performance nativa, garantindo a melhor experiência do usuário final em dispositivos móveis.",
          itens: [
            "Aplicativos Android empresariais",
            "Integração com sensores e hardware",
            "Consumo de APIs externas e internas",
            "Publicação e gestão em lojas (Play Store)"
          ]
        },
        {
          nome: "🔌 APIs REST & Microsserviços",
          descricao: "Backends robustos para integração total.",
          categoria: "Backend Services",
          color: "#6366f1",
          destaque: true,
          descricaoCurta: "Conectividade e Desacoplamento",
          descricaoLonga: "Construção de APIs escaláveis utilizando Clean Architecture para integrar sistemas, dispositivos e plataformas de forma segura.",
          itens: [
            "Arquitetura de microsserviços",
            "Integração com sistemas terceiros",
            "Documentação técnica (Swagger/OpenAPI)",
            "Autenticação e autorização (OAuth2/JWT)"
          ]
        },
        {
          nome: "🛠️ Evolução & Manutenção",
          descricao: "Suporte técnico contínuo para ativos de software.",
          categoria: "Lifecycle Management",
          color: "#f59e0b",
          descricaoCurta: "Software Sempre Atualizado",
          descricaoLonga: "Gestão do ciclo de vida do software para garantir que o sistema permaneça seguro, rápido e compatível com novas tecnologias.",
          itens: [
            "Correção de bugs e otimização de código",
            "Refatoração de dívida técnica",
            "Atualização de dependências e segurança",
            "Implementação de novas features"
          ]
        }
      ]}
    />
  );
}
