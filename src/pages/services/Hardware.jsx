import ServiceTemplate from "../../components/ServiceTemplate";

export default function Hardware() {
return (
<ServiceTemplate
title="Serviços de Hardware"
subtitle="Manutenção profissional e alta performance"
description="
Oferecemos serviços especializados em hardware,
garantindo confiabilidade, desempenho e maior
vida útil dos equipamentos.
"
items={[
"Manutenção preventiva e corretiva",
"Upgrades e otimização",
"Diagnóstico profissional",
"Montagem de máquinas de alto desempenho",
"Substituição de componentes",
]}
/>
);
}
