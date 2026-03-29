import ServiceTemplate from "./ServiceTemplate";

export default function Consultoria() {
  return (
    <ServiceTemplate
      title="Consultoria Tecnológica Estratégica"
      subtitle="Alinhamento entre infraestrutura digital e objetivos de negócio para máxima eficiência."
      description={`
        A tecnologia deve ser uma alavanca de crescimento, não um centro de custos estagnado. Nossa consultoria atua na intersecção entre visão de negócio e viabilidade técnica, eliminando investimentos ineficientes e direcionando recursos para soluções que trazem retorno real (ROI).

        Transformamos ambientes complexos em ativos estratégicos, garantindo que sua arquitetura tecnológica suporte a escala futura da empresa.

        ⚠️ Gargalos Estratégicos que Resolvemos:
        - Investimentos em softwares e hardwares que não entregam o resultado esperado.
        - Falta de um roadmap tecnológico claro para os próximos anos.
        - Sistemas legados que travam a inovação e a produtividade da equipe.
        - Processos de tomada de decisão baseados em tecnologias obsoletas.
        - Desperdício de recursos por falta de uma gestão de TI profissionalizada.

        ⚠️ Riscos da Gestão de TI Reativa:
        - Obsolescência técnica que coloca a empresa atrás da concorrência.
        - Gastos emergenciais elevados por falta de planejamento preventivo.
        - Incompatibilidade entre novas ferramentas e sistemas antigos.
        - Perda de oportunidades de mercado por lentidão tecnológica.

        ⚠️ Requisitos para o Sucesso da Consultoria:
        - Transparência total sobre os desafios operacionais e financeiros atuais.
        - Acesso aos dados de performance e inventário técnico existente.
        - Envolvimento da diretoria para definição das metas de curto e longo prazo.
        - Abertura para reestruturação de processos internos em prol da agilidade.

        Nosso objetivo é converter a TI em uma unidade de inteligência estratégica, reduzindo atritos operacionais e maximizando a lucratividade.
      `}
      items={[
        {
          nome: "📊 Planejamento de TI",
          descricao: "Roadmap estratégico de curto, médio e longo prazo.",
          categoria: "Estratégia",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Visão 360º da Infraestrutura",
          descricaoLonga: "Desenvolvemos um plano diretor de TI alinhado ao crescimento da empresa, evitando gastos desnecessários e focando em escala.",
          itens: [
            "Auditoria de sistemas e processos",
            "Análise de viabilidade técnica",
            "Planejamento de investimentos (CAPEX/OPEX)",
            "Roadmap de transformação digital"
          ]
        },
        {
          nome: "🔄 Modernização de Sistemas",
          descricao: "Migração e atualização de tecnologias legadas.",
          categoria: "Inovação",
          color: "#8b5cf6",
          descricaoCurta: "Eficiência e Nova Performance",
          descricaoLonga: "Identificamos gargalos em sistemas antigos e propomos migrações seguras para plataformas modernas e integradas.",
          itens: [
            "Refatoração de arquitetura de software",
            "Integração de sistemas isolados",
            "Migração para soluções SaaS/Cloud",
            "Redução de dívida técnica"
          ]
        },
        {
          nome: "🛡️ Gestão de Riscos (IT Risk)",
          descricao: "Identificação e mitigação de vulnerabilidades.",
          categoria: "Segurança",
          color: "#ef4444",
          destaque: true,
          descricaoCurta: "Continuidade de Negócio",
          descricaoLonga: "Análise técnica profunda para identificar pontos falhos que podem causar paradas críticas ou perda de dados.",
          itens: [
            "Análise de Impacto de Negócio (BIA)",
            "Plano de Recuperação de Desastres (DRP)",
            "Avaliação de conformidade técnica",
            "Auditoria de segurança e acessos"
          ]
        },
        {
          nome: "📈 Apoio Especializado (vCTO)",
          descricao: "Mentoria técnica para tomada de decisão.",
          categoria: "Advisory",
          color: "#10b981",
          descricaoCurta: "Suporte à Decisão Executiva",
          descricaoLonga: "Atuamos como um braço técnico especializado para auxiliar a diretoria em escolhas críticas de fornecedores e ferramentas.",
          itens: [
            "Seleção de fornecedores (Vendor Selection)",
            "Acompanhamento de projetos técnicos",
            "Mentoria para equipes internas de TI",
            "Otimização de processos operacionais"
          ]
        }
      ]}
    />
  );
}
