import ServiceTemplate from "./ServiceTemplate";

export default function Monitoramento() {
  return (
    <ServiceTemplate
      title="Monitoramento & Observabilidade"
      subtitle="Vigilância técnica 24/7, telemetria de ativos e resposta autônoma a incidentes."
      description={`
        Operar uma infraestrutura sem monitoramento em tempo real é aceitar a indisponibilidade como parte do negócio. Nossa metodologia de observabilidade vai além de simples alertas; implementamos uma camada de telemetria profunda que analisa a saúde de servidores, aplicações e redes, permitindo uma postura proativa e preditiva.

        Garantimos visibilidade total sobre o seu ecossistema digital, transformando dados brutos de logs em inteligência operacional para evitar paradas críticas.

        ⚠️ Gargalos de Visibilidade que Resolvemos:
        - Descoberta de falhas apenas após a reclamação do usuário final.
        - Dificuldade em identificar a causa raiz (Root Cause) de lentidões intermitentes.
        - Falta de métricas históricas para planejamento de upgrade de hardware/cloud.
        - Inundação de alertas irrelevantes que escondem incidentes realmente graves.
        - Ausência de painéis (Dashboards) centralizados para tomada de decisão técnica.

        ⚠️ Riscos da Operação "No Escuro":
        - Downtime prolongado por demora na detecção e diagnóstico de erros.
        - Degradamento silencioso de performance que afeta a conversão de vendas.
        - Exposição a ataques de negação de serviço (DDoS) sem detecção imediata.
        - Estouro de orçamento de nuvem por falta de monitoramento de consumo.

        ⚠️ Requisitos Técnicos para Implementação:
        - Definição dos ativos críticos (Servidores, Bancos de Dados, Links de Internet).
        - Acesso para instalação de agentes de coleta ou configuração de protocolos (SNMP/IPMI).
        - Mapeamento das janelas de disponibilidade e SLAs (Acordos de Nível de Serviço).
        - Configuração de canais de notificação (Telegram, Slack, E-mail ou SMS).

        O objetivo é garantir a continuidade absoluta da operação através de uma vigilância técnica ininterrupta e inteligente.
      `}
      items={[
        {
          nome: "📊 Dashboards & Telemetria",
          descricao: "Visualização centralizada de métricas de saúde.",
          categoria: "Observability",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Visibilidade em Tempo Real",
          descricaoLonga: "Implementação de painéis dinâmicos (Zabbix/Grafana) que consolidam dados de performance de todo o parque tecnológico.",
          itens: [
            "Monitoramento de CPU, Memória e Disco",
            "Gráficos de latência e vazão de rede",
            "Métricas de tempo de resposta de aplicações",
            "Consumo de recursos em ambientes Cloud"
          ]
        },
        {
          nome: "🚨 Alertas & Resposta Proativa",
          descricao: "Notificação inteligente e automação de correção.",
          categoria: "Incident Response",
          color: "#ef4444",
          destaque: true,
          descricaoCurta: "Antecipação de Incidentes",
          descricaoLonga: "Configuração de gatilhos inteligentes que disparam alertas e scripts de autocorreção antes que o serviço saia do ar.",
          itens: [
            "Notificações instantâneas (Multicanal)",
            "Escalonamento automático de chamados",
            "Scripts de reinicialização de serviços",
            "Detecção de anomalias baseada em histórico"
          ]
        },
        {
          nome: "🌐 Monitoramento de Experiência (Uptime)",
          descricao: "Vigilância externa da disponibilidade do serviço.",
          categoria: "Web Monitoring",
          color: "#10b981",
          descricaoCurta: "Garantia de Disponibilidade",
          descricaoLonga: "Simulação de acesso de usuários de diferentes regiões para garantir que o seu site ou sistema esteja sempre acessível.",
          itens: [
            "Verificação de Uptime (HTTP/HTTPS/Portas)",
            "Monitoramento de validade de certificados SSL",
            "Análise de tempo de carregamento (TTFB)",
            "Vigilância de DNS e Domínios"
          ]
        },
        {
          nome: "💾 Monitoramento de Backups & Segurança",
          descricao: "Integridade dos dados e proteção de borda.",
          categoria: "Compliance",
          color: "#f59e0b",
          descricaoCurta: "Segurança de Dados",
          descricaoLonga: "Acompanhamento rigoroso de rotinas de backup e logs de acesso para identificar tentativas de invasão ou falhas de cópia.",
          itens: [
            "Validação de sucesso/erro de backups",
            "Monitoramento de tentativas de Brute Force",
            "Auditoria de logs de acesso administrativo",
            "Alertas de integridade de banco de dados"
          ]
        }
      ]}
    />
  );
}
