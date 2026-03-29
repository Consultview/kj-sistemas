import ServiceTemplate from "./ServiceTemplate";

export default function MarketingDigital() {
  return (
    <ServiceTemplate
      title="Marketing Digital & Growth"
      subtitle="Engenharia de aquisição, autoridade de marca e escala de conversão online."
      description={`
        No mercado digital saturado, ter apenas presença nas redes sociais não garante faturamento. O sucesso depende de um ecossistema de aquisição que une tráfego qualificado, retenção e conversão. Nossa atuação foca em transformar cliques em ativos financeiros através de funis otimizados e análise de dados bruta.

        Implementamos estratégias que posicionam sua empresa onde seu cliente realmente está, garantindo que cada centavo investido em publicidade retorne como lucro previsível.

        ⚠️ Gargalos Digitais que Resolvemos:
        - Investimento em anúncios que geram cliques, mas zero vendas reais.
        - Sites invisíveis nos mecanismos de busca (Google) por falta de otimização técnica.
        - Presença digital amadora que não passa credibilidade ao ticket médio elevado.
        - Falta de rastreamento de dados para saber de onde vêm os melhores clientes.
        - Conteúdo genérico que não converte e não gera autoridade no nicho.

        ⚠️ Riscos da Invisibilidade Online:
        - Perda constante de mercado para concorrentes com melhor posicionamento.
        - Dependência exclusiva de indicação (boca a boca) para sobreviver.
        - Alto custo de aquisição de cliente (CAC) por falta de segmentação correta.
        - Desperdício de verba em canais que não trazem o público-alvo ideal.

        ⚠️ Requisitos para o Sucesso da Estratégia:
        - Definição clara do perfil de cliente ideal (ICP) e proposta de valor.
        - Acesso às contas de anúncios (Meta Ads / Google Ads) e analytics.
        - Disponibilidade de equipe para atendimento rápido aos leads gerados.
        - Orçamento mínimo viável para fases de teste e validação de público.

        O objetivo é construir uma máquina de vendas previsível, onde o marketing deixa de ser gasto e passa a ser o motor de crescimento do negócio.
      `}
      items={[
        {
          nome: "🔍 SEO & Autoridade Orgânica",
          descricao: "Otimização técnica para os mecanismos de busca.",
          categoria: "Search Engine Optimization",
          color: "#10b981",
          destaque: true,
          descricaoCurta: "Tráfego Qualificado Gratuito",
          descricaoLonga: "Implementação de SEO técnico (On-page/Off-page) e arquitetura de conteúdo para garantir que sua empresa lidere as buscas orgânicas.",
          itens: [
            "Auditoria técnica e Core Web Vitals",
            "Pesquisa estratégica de palavras-chave",
            "Otimização de conversão (CRO)",
            "Link Building e autoridade de domínio"
          ]
        },
        {
          nome: "🚀 Gestão de Tráfego Pago (Ads)",
          descricao: "Campanhas de alta conversão em Google e Meta.",
          categoria: "Paid Media",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Escala de Vendas Imediata",
          descricaoLonga: "Criação e gestão de campanhas focadas em ROI, utilizando algoritmos de aprendizado de máquina para encontrar o público comprador.",
          itens: [
            "Google Ads (Pesquisa, Display e Youtube)",
            "Meta Ads (Instagram e Facebook)",
            "Retargeting estratégico para conversão",
            "Otimização constante de CTR e CPA"
          ]
        },
        {
          nome: "🎯 Inbound Marketing & Leads",
          descricao: "Atração e nutrição de potenciais clientes.",
          categoria: "Lead Generation",
          color: "#f59e0b",
          descricaoCurta: "Funis de Vendas Automáticos",
          descricaoLonga: "Desenvolvimento de Landing Pages e réguas de relacionamento que preparam o lead até o momento da decisão de compra.",
          itens: [
            "Criação de Landing Pages de alta conversão",
            "Automação de e-mail marketing",
            "Gestão de base de leads (CRM)",
            "Nutrição de leads com conteúdo rico"
          ]
        },
        {
          nome: "📈 Analytics & Inteligência",
          descricao: "Decisões baseadas em dados reais.",
          categoria: "Data Intelligence",
          color: "#6366f1",
          descricaoCurta: "Cultura de Dados (Data-Driven)",
          descricaoLonga: "Implementação de rastreamento avançado para medir o comportamento do usuário e a eficácia de cada canal de aquisição.",
          itens: [
            "Configuração de Google Analytics 4 (GA4)",
            "Dashboards em tempo real (Looker Studio)",
            "Mapeamento de jornada do cliente",
            "Análise de ROI por canal de vendas"
          ]
        }
      ]}
    />
  );
}
