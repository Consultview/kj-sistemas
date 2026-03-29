import ServiceTemplate from "./ServiceTemplate";

export default function Seguranca() {
  return (
    <ServiceTemplate
      title="Segurança da Informação & Cyber Defense"
      subtitle="Proteção multicamada, resiliência contra ataques e governança de dados críticos."
      description={`
        A segurança da informação não é um produto, mas um processo contínuo de mitigação de riscos. Em um cenário de ameaças cada vez mais sofisticadas, a proteção reativa (apenas antivírus e firewall comum) é insuficiente. Nossa metodologia foca na blindagem proativa de ativos e na detecção precoce de vetores de ataque.

        Implementamos frameworks de segurança que garantem a tríade fundamental: Confidencialidade, Integridade e Disponibilidade dos seus dados e sistemas.

        ⚠️ Vulnerabilidades Críticas que Resolvemos:
        - Brechas de segurança em aplicações web e infraestruturas expostas.
        - Falta de controle de privilégios que permite movimentação lateral de invasores.
        - Servidores e sistemas desatualizados com exploits públicos conhecidos.
        - Ausência de monitoramento de logs para detecção de exfiltração de dados.
        - Configurações padrão (Default) que facilitam o acesso não autorizado.

        ⚠️ Riscos da Exposição Digital:
        - Sequestro de dados (Ransomware) com interrupção total da operação.
        - Vazamento de informações sensíveis de clientes e segredos de negócio.
        - Multas pesadas e sanções por descumprimento da LGPD.
        - Danos irreversíveis à reputação e perda de confiança do mercado.

        ⚠️ Requisitos Técnicos para Implementação:
        - Mapeamento detalhado do inventário de ativos e superfícies de ataque.
        - Autorização formal para realização de testes de intrusão (Pentest).
        - Acesso aos registros de log e configurações de ativos de rede.
        - Alinhamento sobre janelas de remediação e aplicação de patches.

        O objetivo é estabelecer uma postura de defesa inabalável, reduzindo a superfície de ataque ao mínimo e garantindo a continuidade do negócio.
      `}
      items={[
        {
          nome: "🛡️ Pentest & Offensive Security",
          descricao: "Simulação de ataques reais para identificar falhas.",
          categoria: "Cyber Defense",
          color: "#ef4444",
          destaque: true,
          descricaoCurta: "Teste de Intrusão Profissional",
          descricaoLonga: "Realizamos testes de invasão (Black/Grey/White Box) para encontrar vulnerabilidades antes que um atacante real as explore.",
          itens: [
            "Análise de vulnerabilidades externas e internas",
            "Exploração controlada de falhas de segurança",
            "Relatórios técnicos com prova de conceito",
            "Recomendações de remediação prioritárias"
          ]
        },
        {
          nome: "🔒 Hardening & Blindagem",
          descricao: "Configuração de segurança reforçada em sistemas.",
          categoria: "SecOps",
          color: "#2563eb",
          destaque: true,
          descricaoCurta: "Redução de Superfície de Ataque",
          descricaoLonga: "Aplicação de protocolos rigorosos de segurança em servidores, bancos de dados e sistemas operacionais para travar acessos indevidos.",
          itens: [
            "Desativação de serviços e portas desnecessárias",
            "Configuração de políticas de senhas e MFA",
            "Segurança em camadas de rede e aplicação",
            "Criptografia de discos e comunicações"
          ]
        },
        {
          nome: "📋 Auditoria & Compliance (LGPD)",
          descricao: "Conformidade com normas e leis de proteção.",
          categoria: "Governance",
          color: "#10b981",
          descricaoCurta: "Governança e Integridade",
          descricaoLonga: "Avaliação completa do ambiente para garantir que o tratamento de dados esteja alinhado às melhores práticas e legislações vigentes.",
          itens: [
            "Auditoria de permissões e acessos (IAM)",
            "Análise de conformidade com a LGPD",
            "Criação de políticas de segurança interna",
            "Gestão de ciclo de vida da informação"
          ]
        },
        {
          nome: "👁️ SOC & Resposta a Incidentes",
          descricao: "Monitoramento constante e ação rápida.",
          categoria: "Security Monitoring",
          color: "#f59e0b",
          descricaoCurta: "Detecção e Resposta (EDR/XDR)",
          descricaoLonga: "Implementação de sistemas de detecção que alertam sobre comportamentos anômalos e tentativas de invasão em tempo real.",
          itens: [
            "Monitoramento de logs e SIEM",
            "Plano de resposta a incidentes de segurança",
            "Análise forense pós-incidente",
            "Bloqueio automático de ameaças detectadas"
          ]
        }
      ]}
    />
  );
}
