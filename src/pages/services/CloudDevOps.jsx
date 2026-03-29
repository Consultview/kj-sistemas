import ServiceTemplate from "./ServiceTemplate";

export default function CloudDevOps() {
  return (
    <ServiceTemplate
      title="Cloud Computing & DevOps"
      subtitle="Infraestrutura elástica, automação de deploys e alta disponibilidade resiliente."
      description={`
        A migração para a nuvem sem uma estratégia de DevOps resulta em custos elevados e ambientes subutilizados. Nossa abordagem foca em transformar a infraestrutura em código (IaC), garantindo que sua operação seja escalável, segura e totalmente automatizada.

        Eliminamos gargalos de entrega e garantimos que sua aplicação suporte picos de demanda sem degradação de performance ou perda de dados.

        ⚠️ Gargalos de Infraestrutura que Resolvemos:
        - Provisionamento manual de servidores lento e propenso a erros.
        - Ambientes instáveis que saem do ar durante picos de acesso.
        - Ciclos de deploy demorados e falta de padronização entre ambientes.
        - Custos de nuvem descontrolados por falta de monitoramento e governança.
        - Ausência de políticas de backup e recuperação de desastres (DRP).

        ⚠️ Riscos da Infraestrutura Legada:
        - Downtime prolongado gerando prejuízo financeiro e de imagem.
        - Vulnerabilidades críticas por falta de isolamento de rede e firewalls.
        - Incapacidade de escalar rapidamente para atender novos usuários.
        - Falta de observabilidade sobre a saúde das aplicações.

        ⚠️ Requisitos Técnicos para Implementação:
        - Definição do provedor cloud (AWS, Azure ou Google Cloud).
        - Acesso administrativo ao console de gerenciamento de nuvem.
        - Mapeamento da arquitetura atual e stack tecnológica utilizada.
        - Estabelecimento de janelas de migração e critérios de homologação.

        O objetivo é entregar um ecossistema Cloud Native, onde a infraestrutura se adapta dinamicamente à demanda do seu negócio.
      `}
      items={[
        {
          nome: "☁️ Arquitetura em Nuvem",
          descricao: "Design e migração de infraestrutura elástica.",
          categoria: "Cloud Infrastructure",
          color: "#06b6d4",
          destaque: true,
          descricaoCurta: "Alta Disponibilidade e Resiliência",
          descricaoLonga: "Projetamos ambientes escaláveis utilizando os principais provedores (AWS/Azure/GCP) com foco em custo-benefício.",
          itens: [
            "Migração de servidores (Lift & Shift)",
            "Configuração de Auto-scaling",
            "Gestão de instâncias e armazenamento",
            "Otimização de custos (FinOps)"
          ]
        },
        {
          nome: "⚙️ CI/CD & Automação",
          descricao: "Esteiras de entrega contínua de software.",
          categoria: "DevOps Culture",
          color: "#6366f1",
          destaque: true,
          descricaoCurta: "Agilidade no Ciclo de Entrega",
          descricaoLonga: "Automatizamos todo o processo de build, teste e deploy, eliminando intervenções manuais e erros operacionais.",
          itens: [
            "Implementação de Pipelines (GitLab/GitHub/Azure)",
            "Infraestrutura como Código (Terraform/Ansible)",
            "Automação de testes integrados",
            "Versionamento de ambiente"
          ]
        },
        {
          nome: "🛡️ Segurança em Cloud",
          descricao: "Blindagem de infraestrutura e dados na nuvem.",
          categoria: "Cybersecurity",
          color: "#ef4444",
          descricaoCurta: "Conformidade e Proteção",
          descricaoLonga: "Aplicação de políticas rigorosas de acesso e criptografia para garantir que seus dados estejam protegidos contra vazamentos.",
          itens: [
            "Firewalls de Aplicação (WAF)",
            "Gestão de Identidade e Acesso (IAM)",
            "Criptografia de dados em repouso e trânsito",
            "Auditoria e monitoramento de logs"
          ]
        },
        {
          nome: "📦 Containerização",
          descricao: "Gerenciamento de microsserviços modernos.",
          categoria: "Orquestração",
          color: "#2563eb",
          descricaoCurta: "Isolamento e Portabilidade",
          descricaoLonga: "Utilização de containers para garantir que a aplicação rode perfeitamente em qualquer ambiente, facilitando a gestão.",
          itens: [
            "Docker & Kubernetes (K8s)",
            "Orquestração de microsserviços",
            "Gestão de imagens e repositórios",
            "Observabilidade e métricas de container"
          ]
        }
      ]}
    />
  );
}
