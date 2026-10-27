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

// cada item vira uma linha do "docker ps" no terminal
infras.forEach(infra => {
    const linha = document.createElement("tr");

    linha.className = "border-t border-borda hover:bg-superficie";
    linha.title = infra.texto;

    linha.innerHTML = `
        <td class="py-3 pr-4 font-bold">${infra.titulo.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</td>
        <td class="py-3 pr-4 text-cinza">${infra.tags.slice(0, 2).join(" + ").toLowerCase()}</td>
        <td class="py-3 text-green-500 whitespace-nowrap">● up</td>
    `;

    container_infra.appendChild(linha);
})