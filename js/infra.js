const infras = [

    // docker
    {
        titulo: "docker",
        texto: "Utilização de containers para executar, configurar e organizar diferentes serviços de forma isolada.",
        tags: [
            "Docker",
            "Compose",
            "Containers"
        ]
    },

    // zima os
    {
        titulo: "zima os",
        texto: "Homelab baseado em ZimaOS, utilizado para gerenciar serviços self-hosted, armazenamento e aplicações.",
        tags: [
            "ZimaOS",
            "Homelab",
            "Self-hosting"
        ]
    },

    // immich
    {
        titulo: "immich",
        texto: "Implementação de uma plataforma pessoal para armazenamento e gerenciamento de fotos, hospedada no meu próprio servidor.",
        tags: [
            "Self-hosting",
            "Storage",
            "Docker"
        ]
    },

    // dns
    {
        titulo: "rede & dns",
        texto: "Configuração do DNS da rede doméstica para bloquear anúncios em todos os dispositivos conectados.",
        tags: [
            "DNS",
            "Networking",
            "Ad Blocking"
        ]
    },

    // n8n + IA
    {
        titulo: "n8n + IA",
        texto: "Criação de automações integrando APIs, serviços e modelos de IA, com suporte a interações pelo Telegram e WhatsApp.",
        tags: [
            "n8n",
            "Evolution API",
            "Automação"
        ]
    },

    // openrouter
    {
        titulo: "openrouter",
        texto: "Integração com diferentes modelos de IA através de uma única API, utilizando modelos diferentes conforme cada tarefa.",
        tags: [
            "OpenRouter",
            "LLMs",
            "API"
        ]
    },

];

const container_infra = document.getElementById("infra-container");
const tag_qtd_infra = document.getElementById("qtd-itens-infra").innerText = "HOME LAB / " + infras.length;

infras.forEach(infra => {
    const card = document.createElement("div");

    card.className = `
    group flex flex-col gap-5 p-10
    border-b border-borda
    [&:last-child]:border-b-0
    hover:bg-cinza/20

    md:border-r
    md:[&:nth-child(even)]:border-r-0
    md:[&:nth-last-child(-n+2)]:border-b-0

    lg:border-r
    lg:border-b
    lg:[&:nth-child(even)]:border-r
    lg:[&:nth-child(3n)]:border-r-0
    lg:[&:nth-last-child(-n+3)]:border-b-0
    `;

    card.innerHTML = `
        <h2 class="uppercase font-bold">${infra.titulo}</h2>

        <p class="text-sm text-cinza">${infra.texto}</p>

        <div class="flex gap-2">
            ${infra.tags.map(tag => `<span class="text-xs text-cinza px-1.5 border border-borda group-hover:border-principal group-hover:text-principal">${tag}</span>`).join("")}
        </div>
    `;

    container_infra.appendChild(card);
})