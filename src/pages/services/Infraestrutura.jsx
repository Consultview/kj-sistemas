import ServiceTemplate from "./ServiceTemplate";

export default function Infraestrutura() {
  return (
    <ServiceTemplate
      title="Infraestrutura & Suporte Especializado"
      subtitle="Arquitetura de redes, administração de servidores e sustentação de ambientes críticos."
      description={`
        Uma infraestrutura subdimensionada ou sem monitoramento ativo é uma bomba-relógio para a continuidade do negócio. Nossa atuação foca na construção de ambientes resilientes, onde a redundância e a segurança de camada física e lógica garantem que sua operação nunca pare, independentemente da carga ou de falhas isoladas.

        Implementamos padrões de governança de TI que transformam o suporte reativo em uma operação proativa, identificando incidentes antes que eles afetem o usuário final.

        ⚠️ Gargalos de Infraestrutura que Resolvemos:
        - Quedas constantes de conexão e instabilidade em redes Wi-Fi/Cabeadas.
        - Servidores sobrecarregados com tempos de resposta lentos e travamentos.
        - Falta de controle sobre o que entra e sai da rede (vulnerabilidades de borda).
        - Processos de backup manuais, lentos ou que nunca foram testados.
        - Suporte técnico demorado que trava a produtividade da equipe interna.

        ⚠️ Riscos da Infraestrutura Desatualizada:
        - Parada total da operação (Downtime) por falta de redundância.
        - Perda irreparável de dados críticos por ausência de políticas de Disaster Recovery.
        - Invasões e sequestro de dados (Ransomware) por falta de firewalls gerenciados.
        - Gargalos de crescimento por impossibilidade de expandir a rede atual.

        ⚠️ Requisitos Técnicos para Implementação:
        - Levantamento do inventário de hardware e topologia de rede atual.
        - Acesso administrativo aos ativos de rede (Switches, Roteadores, Firewalls).
        - Definição de janelas de manutenção para atualizações de firmware e sistema.
        - Mapeamento das aplicações críticas que exigem prioridade de tráfego (QoS).

        O objetivo é entregar uma fundação tecnológica invisível e inabalável, permitindo que a empresa foque exclusivamente em sua atividade fim.
      `}
      items={[
        {
          nome: "🖥️ Gestão de Servidores & Virtualização",
          descricao: "Administração avançada de ambientes Windows e Linux.",
          categoria: "Server Management",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Alta Disponibilidade e Performance",
          descricaoLonga: "Configuração e sustentação de servidores físicos e virtuais (VMware/Hyper-V), garantindo o isolamento de serviços e otimização de recursos.",
          itens: [
            "Active Directory (AD) e gestão de acessos",
            "Virtualização e orquestração de containers",
            "Servidores de arquivos e banco de dados",
            "Hardening e atualização de patches"
          ]
        },
        {
          nome: "📡 Redes & Segurança de Borda",
          descricao: "Infraestrutura de conectividade segura e gerenciável.",
          categoria: "Networking",
          color: "#6366f1",
          destaque: true,
          descricaoCurta: "Conectividade Sem Gargalos",
          descricaoLonga: "Projeto e implementação de redes corporativas com segmentação (VLANs), VPNs para acesso remoto e firewalls de próxima geração.",
          itens: [
            "Firewall e UTM (Gerenciamento de ameaças)",
            "Configuração de roteamento e switches L3",
            "Redes Wi-Fi corporativas de alta densidade",
            "Monitoramento de tráfego em tempo real"
          ]
        },
        {
          nome: "💾 Backup & Disaster Recovery",
          descricao: "Proteção de dados e planos de continuidade.",
          categoria: "Data Protection",
          color: "#ef4444",
          descricaoCurta: "Blindagem Contra Perda de Dados",
          descricaoLonga: "Implementação de rotinas automáticas de backup (Local e Cloud) com protocolos de recuperação rápida em caso de desastres.",
          itens: [
            "Backup em nuvem (Offsite)",
            "Plano de Recuperação de Desastres (DRP)",
            "Testes periódicos de restauração",
            "Criptografia de volumes de dados"
          ]
        },
        {
          nome: "🛠️ Suporte & Monitoramento 24/7",
          descricao: "Atendimento técnico e vigilância proativa.",
          categoria: "Managed Services",
          color: "#10b981",
          descricaoCurta: "Resposta Rápida e Eficaz",
          descricaoLonga: "Central de atendimento para resolução de incidentes e ferramentas de monitoramento que alertam sobre falhas antes que ocorram.",
          itens: [
            "Suporte N1, N2 e N3 especializado",
            "Monitoramento de saúde de ativos (Zabbix/Grafana)",
            "Gestão de inventário e ativos de TI",
            "Acesso remoto seguro para suporte"
          ]
        }
      ]}
    />
  );
}
