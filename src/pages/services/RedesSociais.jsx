import ServiceTemplate from "./ServiceTemplate";

export default function RedesSociais() {
  return (
    <ServiceTemplate
      title="Gestão Estratégica de Redes Sociais"
      subtitle="Posicionamento de autoridade, engenharia de conteúdo e construção de ativos de audiência."
      description={`
        A presença nas redes sociais sem estratégia é apenas ruído digital. O mercado exige que marcas atuem com autoridade para converter seguidores em defensores e clientes. Nossa gestão foca no equilíbrio entre branding (percepção de valor) e performance (geração de demanda), utilizando narrativas que conectam sua solução à dor do público.

        Transformamos perfis corporativos em canais de comunicação profissionais, garantindo que sua empresa seja a primeira escolha na mente do consumidor.

        ⚠️ Gargalos de Posicionamento que Resolvemos:
        - Perfis com visual amador que afastam clientes de alto ticket.
        - Conteúdo genérico que gera curtidas, mas não atrai leads qualificados.
        - Falta de consistência e cronograma, resultando em perda de relevância.
        - Ausência de interação estratégica que humanize a marca e gere confiança.
        - Métricas de vaidade que não refletem no faturamento real da empresa.

        ⚠️ Riscos da Irrelevância Digital:
        - Perda de autoridade para concorrentes que dominam a narrativa online.
        - Dificuldade em recrutar talentos e parceiros por falta de uma marca forte.
        - Ciclo de vendas mais longo por falta de educação prévia do mercado.
        - Vulnerabilidade a crises de imagem por falta de gestão ativa de comunidade.

        ⚠️ Requisitos para o Sucesso da Presença Social:
        - Definição clara da identidade visual e tom de voz da marca.
        - Disponibilidade de materiais (fotos/vídeos) reais da operação ou produtos.
        - Alinhamento de metas: Branding, Engajamento ou Conversão Direta.
        - Acesso administrativo às plataformas (Instagram, LinkedIn, Facebook).

        O objetivo é consolidar uma presença digital inabalável, onde cada publicação reforça o valor e a autoridade da sua marca no mercado.
      `}
      items={[
        {
          nome: "📅 Planejamento & Editorial",
          descricao: "Estratégia de conteúdo baseada em funis de consciência.",
          categoria: "Social Intelligence",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Narrativa e Consistência",
          descricaoLonga: "Desenvolvimento de calendários editoriais que misturam autoridade, educação e venda direta para manter a audiência engajada.",
          itens: [
            "Definição de pilares de conteúdo",
            "Cronograma de postagens estratégico",
            "Análise de tendências do nicho",
            "Storytelling voltado para conversão"
          ]
        },
        {
          nome: "🎨 Creative Design & Copywriting",
          descricao: "Produção visual e textual de alto impacto.",
          categoria: "Branding",
          color: "#8b5cf6",
          destaque: true,
          descricaoCurta: "Identidade e Persuasão",
          descricaoLonga: "Criação de artes profissionais e legendas persuasivas que capturam a atenção e guiam o seguidor para a ação desejada.",
          itens: [
            "Design gráfico personalizado",
            "Copywriting focado em gatilhos mentais",
            "Edição de vídeos curtos (Reels/TikTok)",
            "Padronização estética do feed"
          ]
        },
        {
          nome: "💬 Gestão de Comunidade (SAC 2.0)",
          descricao: "Interação ativa e proteção da marca.",
          categoria: "Engagement",
          color: "#10b981",
          descricaoCurta: "Relacionamento e Retenção",
          descricaoLonga: "Monitoramento constante de comentários e mensagens diretas para garantir resposta rápida e fortalecer o vínculo com a audiência.",
          itens: [
            "Monitoramento de menções à marca",
            "Resposta estratégica a comentários",
            "Triagem de leads via Direct/Inbox",
            "Gestão de crises e feedbacks"
          ]
        },
        {
          nome: "📊 Data Analysis & Social ROI",
          descricao: "Métricas que realmente importam para o negócio.",
          categoria: "Analytics",
          color: "#f59e0b",
          descricaoCurta: "Decisões Baseadas em Dados",
          descricaoLonga: "Relatórios mensais detalhados comparando alcance, engajamento e conversão para ajustar a estratégia em tempo real.",
          itens: [
            "Relatórios de performance mensal",
            "Análise de crescimento de audiência",
            "Mapeamento de melhores horários e formatos",
            "Acompanhamento de metas (KPIs)"
          ]
        }
      ]}
    />
  );
}
