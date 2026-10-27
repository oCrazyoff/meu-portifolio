const projetos =
    [

        // ecoflow
        {
            numero: "01",
            categoria: "sistema",
            titulo: "EcoFlow",
            descricao: "Sistema de gestão financeira para controle de receitas, despesas e organização financeira.",
            img: "/img/projetos/ecoflow/1.png",
            destaque: "em uso real",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "JavaScript"
            ],
            deploy: "https://ecoflow.kesug.com/"
        },

        // homelab
        {
            numero: "08",
            categoria: "infraestrutura",
            titulo: "HomeLab",
            descricao: "Servidor doméstico baseado em ZimaOS para hospedar serviços e automações.",
            img: "/img/projetos/homelab/1.png",
            tags: [
                "Docker",
                "Linux",
                "Tailscale",
                "Self-hosting"
            ],
            info: true
        },

        // cantina
        {
            numero: "03",
            categoria: "sistema",
            titulo: "Cantina da ETEC",
            descricao: "Sistema PDV desenvolvido para automatizar as vendas e o controle da cantina da ETEC.",
            img: "/img/projetos/cantina/1.png",
            destaque: "em produção",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "JavaScript"
            ],
            github: null,
            deploy: "https://cantinaetec.com.br/"
        }
    ];

const container = document.getElementById("projetos-container");

projetos.forEach(projeto => {
    const card = document.createElement("div");

    card.className = "group flex flex-col bg-card border border-borda hover:border-principal/60";

    card.innerHTML = `
        <div class="relative h-56 overflow-hidden bg-superficie border-b border-borda">
            <span class="absolute left-3 top-3 z-10 px-2 py-0.5 bg-principal text-black font-jetbrains text-[11px] font-bold">${projeto.numero}</span>
            <span class="absolute right-3 top-3 z-10 px-2 py-0.5 bg-fundo border border-borda font-jetbrains text-[10px] uppercase tracking-widest">${projeto.categoria}</span>
            ${projeto.destaque ? `
            <span class="absolute left-3 bottom-3 z-10 flex items-center gap-2 px-2 py-0.5 bg-fundo/90 font-jetbrains text-[10px] uppercase tracking-widest">
                <span class="size-1.5 rounded-full bg-green-500"></span> ${projeto.destaque}
            </span>` : ""}
            <img class="w-full h-full object-cover object-top group-hover:scale-105" src="${projeto.img}" alt="Print do projeto ${projeto.titulo}">
        </div>

        <div class="flex flex-col gap-4 flex-1 p-5">
            <h3 class="text-xl font-bold uppercase tracking-tight">${projeto.titulo}</h3>

            <p class="text-sm text-white/60 leading-relaxed">${projeto.descricao}</p>

            <div class="flex flex-wrap gap-2 mt-auto">
                ${projeto.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>

            <div class="flex flex-wrap gap-5 pt-4 border-t border-borda font-jetbrains text-xs font-bold uppercase tracking-wider text-principal">
                ${projeto.deploy ? `
                <a class="flex items-center gap-2 hover:gap-4" href="${projeto.deploy}" target="_blank">Ver site <i class="bi bi-arrow-up-right"></i></a>
                ` : ""}

                ${projeto.github ? `
                <a class="flex items-center gap-2 hover:gap-4" href="${projeto.github}" target="_blank">Código <i class="bi bi-code-slash"></i></a>
                ` : ""}

                ${projeto.info ? `
                <a class="flex items-center gap-2 hover:gap-4" href="/projetos">Saber mais <i class="bi bi-arrow-right"></i></a>
                ` : ""}
            </div>
        </div>
    `;

    container.appendChild(card);
})
