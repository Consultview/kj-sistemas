import ServiceTemplate from "./ServiceTemplate";

export default function Hardware() {
  return (
    <ServiceTemplate
      title="Engenharia de Hardware & Performance"
      subtitle="Manutenção avançada, otimização de ativos e arquitetura de estações de alto desempenho."
      description={`
        Equipamentos subdimensionados ou com manutenção negligenciada são responsáveis por quedas drásticas de produtividade e custos inesperados com substituição precoce. Nossa abordagem foca no ciclo de vida completo do hardware, desde a montagem estratégica até o monitoramento de saúde dos componentes.

        Garantimos que sua infraestrutura física opere em temperatura e voltagem ideais, maximizando a vida útil e extraindo o potencial máximo de processamento de cada máquina.

        ⚠️ Gargalos de Hardware que Resolvemos:
        - Lentidão sistêmica causada por thermal throttling (superaquecimento).
        - Falhas intermitentes e desligamentos inesperados em máquinas de missão crítica.
        - Equipamentos obsoletos que travam o fluxo de trabalho de softwares modernos.
        - Acúmulo de sujidade e oxidação que causam curto-circuitos e perda total.
        - Falta de padronização de peças que dificulta a manutenção rápida.

        ⚠️ Riscos da Negligência de Hardware:
        - Perda definitiva de dados por falha mecânica em unidades de armazenamento (HD/SSD).
        - Interrupção abrupta da operação (Downtime) por queima de fontes ou placas.
        - Gastos elevados com trocas de emergência que poderiam ser evitadas com upgrades.
        - Desempenho abaixo do nominal por falta de configuração correta de firmware/BIOS.

        ⚠️ Requisitos Técnicos para Intervenção:
        - Inventário atualizado dos equipamentos e data da última manutenção.
        - Acesso físico aos dispositivos ou envio para laboratório especializado.
        - Especificações técnicas dos softwares utilizados para cálculo de upgrade.
        - Janelas de manutenção programadas para evitar impacto na operação.

        O objetivo é garantir que o hardware seja uma fundação sólida e invisível, permitindo que sua equipe produza sem interrupções técnicas.
      `}
      items={[
        {
          nome: "🛠️ Manutenção Preventiva & Corretiva",
          descricao: "Gestão técnica de integridade física dos componentes.",
          categoria: "Hardware Care",
          color: "#10b981",
          destaque: true,
          descricaoCurta: "Continuidade de Operação",
          descricaoLonga: "Protocolos rigorosos de limpeza química, troca de interface térmica de alta condutividade e testes de estresse.",
          itens: [
            "Higienização interna e descontaminação",
            "Troca de pasta térmica (Prata/Cerâmica)",
            "Reparo em nível de componente (Placas)",
            "Lubrificação de sistemas de arrefecimento"
          ]
        },
        {
          nome: "🚀 Upgrades & Otimização",
          descricao: "Extensão da vida útil e ganho de velocidade.",
          categoria: "Performance",
          color: "#f59e0b",
          descricaoCurta: "Aceleração de Workflow",
          descricaoLonga: "Análise de gargalos para substituição estratégica de memórias, processadores e unidades de estado sólido (NVMe/SSD).",
          itens: [
            "Expansão de Memória RAM (DDR4/DDR5)",
            "Migração de armazenamento para SSD/NVMe",
            "Otimização de BIOS e Firmware",
            "Consultoria para balanceamento de carga"
          ]
        },
        {
          nome: "🖥️ Workstations de Alta Performance",
          descricao: "Arquitetura de máquinas para tarefas pesadas.",
          categoria: "Custom Build",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Poder de Processamento Bruto",
          descricaoLonga: "Dimensionamento e montagem de computadores para edição de vídeo, renderização 3D, IA e simulações complexas.",
          itens: [
            "Montagem personalizada (Custom Build)",
            "Gestão de fluxo de ar e Water Cooling",
            "Configuração de Raid para redundância",
            "Estações de trabalho multi-monitor"
          ]
        },
        {
          nome: "🔬 Diagnóstico Profissional",
          descricao: "Identificação precisa de falhas ocultas.",
          categoria: "Lab Services",
          color: "#6366f1",
          descricaoCurta: "Precisão Laboratorial",
          descricaoLonga: "Utilização de ferramentas de diagnóstico avançado para localizar falhas em setores de disco, trilhas e capacitores.",
          itens: [
            "Testes de integridade de Memória e CPU",
            "Verificação de saúde de armazenamento (S.M.A.R.T)",
            "Análise de estabilidade de tensão (Fontes)",
            "Diagnóstico de conectividade física"
          ]
        }
      ]}
    />
  );
}
