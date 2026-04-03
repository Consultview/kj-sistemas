import ServiceTemplate from "./ServiceTemplate";

export default function ImplantacaoSistemas() {
  return (
    <ServiceTemplate
      title="Implantação de Sistemas e Softwares"
      subtitle="Transformamos ferramentas de software em resultados operacionais através de uma implementação técnica rigorosa."
      description={`
        A simples compra de um software não garante eficiência. A implantação é a fase crítica onde configuramos a ferramenta 
        para refletir a realidade do seu negócio. Atuamos na instalação, parametrização e integração de sistemas para garantir 
        que a transição tecnológica seja suave e sem interrupções.

        Nossa metodologia elimina a subutilização de recursos e garante que sua equipe extraia o máximo potencial das novas ferramentas 
        desde o primeiro dia de operação.

        ⚠️ Problemas Comuns que Resolvemos na Implantação:
        - Sistemas instalados mas que ninguém sabe usar corretamente.
        - Dados dispersos em planilhas que precisam ser centralizados no novo sistema.
        - Configurações genéricas que não atendem às particularidades do seu fluxo de trabalho.
        - Falta de integração entre o novo software e as ferramentas que você já utiliza.
        - Interrupção da operação por falhas na migração de sistemas antigos.

        ⚠️ Riscos de uma Implantação Mal Planejada:
        - Rejeição da equipe ao novo sistema por falta de treinamento adequado.
        - Perda ou corrupção de dados históricos durante a migração.
        - Processos travados por parametrização incorreta de impostos ou regras de negócio.
        - Desperdício financeiro com mensalidades de softwares que não entram em produção.

        ⚠️ O que Entregamos para o Sucesso do Projeto:
        - Mapeamento detalhado dos processos atuais antes da configuração.
        - Migração técnica assistida de bancos de dados legados.
        - Treinamento prático focado nas funções vitais para cada setor.
        - Suporte intensivo no "Go-Live" (primeiros dias de uso real).

        Nosso compromisso é garantir que o sistema contratado se torne o coração da sua operação, trazendo organização e dados confiáveis para a gestão.
      `}
      items={[
        {
          nome: "🚀 Configuração de ERP/CRM",
          descricao: "Parametrização completa de sistemas de gestão.",
          categoria: "Execução",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Sistemas Prontos para Uso",
          descricaoLonga: "Configuramos todas as regras de negócio, fluxos de caixa, emissão de notas e cadastros base dentro do seu novo software.",
          itens: [
            "Parametrização de módulos financeiros e fiscais",
            "Configuração de fluxos de aprovação",
            "Personalização de dashboards de indicadores",
            "Ajuste de permissões e níveis de acesso"
          ]
        },
        {
          nome: "🔄 Migração de Dados",
          descricao: "Transferência segura de informações de sistemas antigos.",
          categoria: "Dados",
          color: "#8b5cf6",
          descricaoCurta: "Saneamento e Importação",
          descricaoLonga: "Extraímos dados de planilhas ou sistemas legados, tratamos as informações e importamos para o novo ambiente sem perdas.",
          itens: [
            "Limpeza e padronização de cadastros",
            "Mapeamento de campos entre sistemas",
            "Importação de saldos e histórico",
            "Validação de integridade de dados"
          ]
        },
        {
          nome: "🔌 Integração de APIs",
          descricao: "Conexão entre diferentes ferramentas de software.",
          categoria: "Conectividade",
          color: "#10b981",
          destaque: true,
          descricaoCurta: "Ecossistema Integrado",
          descricaoLonga: "Fazemos com que seus diferentes softwares (E-commerce, CRM, ERP) conversem entre si de forma automática.",
          itens: [
            "Automação de fluxo de pedidos",
            "Sincronização de estoque em tempo real",
            "Integração com gateways de pagamento",
            "Webhooks e notificações automáticas"
          ]
        },
        {
          nome: "🎓 Treinamento Operacional",
          descricao: "Capacitação técnica para os usuários do sistema.",
          categoria: "Suporte",
          color: "#f59e0b",
          descricaoCurta: "Adoção Tecnológica",
          descricaoLonga: "Realizamos sessões práticas de treinamento para reduzir a curva de aprendizado e garantir o uso correto das ferramentas.",
          itens: [
            "Manuais de processos personalizados",
            "Treinamento por perfil de usuário",
            "Acompanhamento presencial no dia do lançamento",
            "Suporte técnico pós-implantação"
          ]
        }
      ]}
    />
  );
}
