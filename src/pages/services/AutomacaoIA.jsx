import ServiceTemplate from "./ServiceTemplate";

export default function AutomacaoIA() {
  return (
    <ServiceTemplate
      title="Automação e Inteligência Artificial"
      subtitle="Otimização de fluxos operacionais e implementação de camadas inteligentes de processamento de dados."
      description={`
        A ausência de integração entre ecossistemas e a dependência de fluxos manuais são os principais gargalos para a escalabilidade de qualquer operação moderna. Nossa atuação foca em eliminar o retrabalho e a latência operacional através de arquiteturas automatizadas e IA aplicada.

        Desenvolvemos camadas de software que conectam seus sistemas atuais, garantindo integridade de dados e autonomia em processos críticos.

        ⚠️ Gargalos Operacionais que Resolvemos:
        - Fluxos de trabalho isolados entre ERP, CRM e ferramentas de gestão.
        - Processamento manual de dados sujeito a erro humano e inconsistência.
        - Latência no atendimento e suporte por falta de triagem automatizada.
        - Dificuldade em processar grandes volumes de informação em tempo real.
        - Custo operacional elevado para execução de tarefas puramente mecânicas.

        ⚠️ Riscos da Defasagem Tecnológica:
        - Perda de eficiência perante concorrentes tecnologicamente otimizados.
        - Inchaço desnecessário da folha de pagamento para sustentar processos lentos.
        - Tomada de decisão baseada em dados fragmentados ou desatualizados.
        - Baixa capacidade de resposta a picos de demanda operacional.

        ⚠️ Requisitos Técnicos para Implementação:
        - Mapeamento detalhado dos fluxos e regras de negócio atuais.
        - Disponibilidade de APIs ou acesso direto aos bancos de dados/sistemas utilizados.
        - Definição objetiva dos indicadores de performance (KPIs) a serem otimizados.
        - Alinhamento entre as equipes técnica e operacional durante a homologação.

        O objetivo é consolidar uma infraestrutura autônoma, capaz de sustentar o crescimento do negócio sem aumento proporcional da complexidade operacional.
      `}
      items={[
        {
          nome: "🤖 RPA & Automação de Processos",
          descricao: "Execução algorítmica de tarefas repetitivas.",
          categoria: "Operação Autônoma",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Eficiência Operacional Crítica",
          descricaoLonga: "Implementação de robôs de software para substituir fluxos manuais lentos em nível de interface ou backend.",
          itens: [
            "Robotic Process Automation (RPA)",
            "Eliminação de entrada manual de dados",
            "Operação contínua 24/7 sem latência",
            "Sincronização de rotinas de backoffice"
          ]
        },
        {
          nome: "🧠 IA Conversacional & NLP",
          descricao: "Sistemas de Processamento de Linguagem Natural.",
          categoria: "Inteligência Aplicada",
          color: "#8b5cf6",
          descricaoCurta: "Suporte e Triagem Inteligente",
          descricaoLonga: "Camadas de IA para atendimento autônomo, capazes de reconhecer intenção e contexto em tempo real.",
          itens: [
            "Agentes inteligentes para triagem",
            "Processamento de Linguagem Natural (NLP)",
            "Qualificação automática de demandas",
            "Redução de carga em suporte N1"
          ]
        },
        {
          nome: "🔗 Integrações via API",
          descricao: "Conectividade técnica entre ecossistemas.",
          categoria: "Infraestrutura",
          color: "#10b981",
          destaque: true,
          descricaoCurta: "Unificação de Ecossistemas",
          descricaoLonga: "Conexão técnica via APIs e Webhooks entre ERP, CRM e ferramentas legadas para fluxo contínuo de dados.",
          itens: [
            "Desenvolvimento de Webhooks customizados",
            "Sincronização bidirecional de dados",
            "Segurança em camadas de transporte",
            "Eliminação de silos de informação"
          ]
        },
        {
          nome: "📊 Modelagem Preditiva",
          descricao: "Machine Learning aplicado a tendências.",
          categoria: "Data Science",
          color: "#f97316",
          descricaoCurta: "Decisões Baseadas em Padrões",
          descricaoLonga: "Utilização de modelos estatísticos avançados para identificar comportamentos de mercado e prever falhas.",
          itens: [
            "Análise estatística preditiva",
            "Identificação de tendências operacionais",
            "Dashboards de BI com insights de IA",
            "Monitoramento de desvios de padrão"
          ]
        }
      ]}
    />
  );
}
