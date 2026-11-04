const infras = [

    // docker
    {
        titulo: "docker",
        texto: "Uso containers e Docker Compose para rodar cada serviço do meu servidor de forma isolada, fácil de atualizar e de reproduzir.",
        tags: [
            "Docker",
            "Compose",
            "Containers"
        ]
    },

    // zima os
    {
        titulo: "zima os",
        texto: "Homelab rodando em ZimaOS, onde hospedo meus serviços, armazenamento e aplicações. Tudo fica acessível de qualquer lugar de forma segura com Tailscale.",
        tags: [
            "ZimaOS",
            "Homelab",
            "Self-hosting"
        ]
    },

    // immich
    {
        titulo: "immich",
        texto: "Alternativa self-hosted ao Google Fotos: minhas fotos ficam no meu próprio servidor, com backup, busca e acesso pelo celular.",
        tags: [
            "Self-hosting",
            "Storage",
            "Docker"
        ]
    },

    // adguard home
    {
        titulo: "adguard home",
        texto: "AdGuard Home como servidor DNS da rede, configurado direto no modem. Todo aparelho conectado ao Wi-Fi tem bloqueio de anúncios e rastreadores, sem precisar instalar nada.",
        tags: [
            "AdGuard Home",
            "DNS",
            "Networking"
        ]
    },

    // bot de ia
    {
        titulo: "bot de ia",
        texto: "Assistente pessoal criado no n8n que conversa pelo Telegram e WhatsApp, guarda memória das conversas e controla a casa inteligente por comando de texto.",
        tags: [
            "n8n",
            "Evolution API",
            "Automação"
        ]
    },

    // openrouter
    {
        titulo: "openrouter",
        texto: "Acesso a vários modelos de IA por uma única API, escolhendo o modelo certo para cada tarefa e equilibrando qualidade, velocidade e custo.",
        tags: [
            "OpenRouter",
            "LLMs",
            "API"
        ]
    },

];

const container_infra = document.getElementById("infra-container");

// balão de conversa único, fica no body pra não ser cortado pelo overflow do terminal
const balao = document.createElement("div");
balao.className = "balao";
balao.setAttribute("role", "tooltip");
balao.innerHTML = `<p class="balao-titulo"></p><p class="balao-texto"></p>`;
document.body.appendChild(balao);

let linha_ativa = null;

function posicionarBalao(linha, mouseX) {
    const ret_linha = linha.getBoundingClientRect();
    const largura = balao.offsetWidth;
    const altura = balao.offsetHeight;
    const margem = 12;

    // centraliza no mouse, mas sem sair da tela
    const x = mouseX ?? ret_linha.left + ret_linha.width / 2;
    const left = Math.min(Math.max(x - largura / 2, margem), window.innerWidth - largura - margem);
    const top = ret_linha.top - altura - 14;

    balao.style.left = `${left}px`;
    balao.style.top = `${top}px`;

    // rabinho aponta pro mouse
    const rabo = Math.min(Math.max(x - left, 16), largura - 16);
    balao.style.setProperty("--rabo-x", `${rabo}px`);
}

function mostrarBalao(linha, infra, mouseX) {
    linha_ativa = linha;
    balao.querySelector(".balao-titulo").textContent = infra.titulo;
    balao.querySelector(".balao-texto").textContent = infra.texto;
    posicionarBalao(linha, mouseX);
    balao.classList.add("visivel");
}

function esconderBalao() {
    linha_ativa = null;
    balao.classList.remove("visivel");
}

// esconde ao rolar a página/terminal (a posição é fixa)
window.addEventListener("scroll", esconderBalao, { passive: true });
container_infra.closest(".overflow-x-auto")?.addEventListener("scroll", esconderBalao, { passive: true });

// toque fora fecha o balão (mobile)
document.addEventListener("click", e => {
    if (linha_ativa && !linha_ativa.contains(e.target)) esconderBalao();
});

// cada item vira uma linha do "docker ps" no terminal
infras.forEach(infra => {
    const linha = document.createElement("tr");

    linha.className = "border-t border-borda hover:bg-superficie cursor-help";

    linha.addEventListener("pointerenter", e => {
        if (e.pointerType === "mouse") mostrarBalao(linha, infra, e.clientX);
    });
    linha.addEventListener("pointermove", e => {
        if (e.pointerType === "mouse") posicionarBalao(linha, e.clientX);
    });
    linha.addEventListener("pointerleave", e => {
        if (e.pointerType === "mouse") esconderBalao();
    });

    // no mobile não tem hover: toque abre/fecha
    linha.addEventListener("click", e => {
        if (e.pointerType === "mouse") return;
        if (linha_ativa === linha) esconderBalao();
        else mostrarBalao(linha, infra, e.clientX);
    });

    linha.innerHTML = `
        <td class="py-3 pr-4 font-bold">${infra.titulo.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</td>
        <td class="py-3 pr-4 text-cinza">${infra.tags.slice(0, 3).join(" + ").toLowerCase()}</td>
        <td class="py-3 text-green-500 whitespace-nowrap">● up</td>
    `;

    container_infra.appendChild(linha);
})