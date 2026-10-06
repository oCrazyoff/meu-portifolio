const projetos =
    [

        // ecoflow
        {
            titulo: "EcoFlow",
            descricao: "Sistema de gestão financeira para controle de receitas, despesas e organização financeira.",
            img: "/img/projetos/ecoflow.png",
            destaque: "em uso real",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "JavaScript"
            ],
            deploy: "https://ecoflow.kesug.com/"
        },

        // walyflix
        {
            titulo: "WalyFlix",
            descricao: "Plataforma de streaming inspirada na Netflix, desenvolvida como projeto de estudo.",
            img: "/img/projetos/walyflix.png",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "JavaScript"
            ],
            deploy: "https://walyflix.kesug.com/"
        },

        // cantina
        {
            titulo: "Cantina da ETEC",
            descricao: "Sistema PDV desenvolvido para automatizar as vendas e o controle da cantina da ETEC.",
            img: "/img/projetos/cantina.png",
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

    card.className = "flex flex-col gap-5";

    card.innerHTML = `
        <div class="h-60 p-2 border border-borda overflow-hidden relative">
            ${projeto.destaque ? `<span class="uppercase absolute left-4 top-4 bg-principal text-sm px-3 py-1 shadow-md text-black z-10">${projeto.destaque}</span>` : ""}
            <img class="w-full h-full object-cover hover:scale-105" src="${projeto.img}" alt="Print do projeto ${projeto.titulo}">
        </div>
        
        <div class="flex justify-between gap-3">
            <div class="flex flex-col gap-1">
                <h3 class="text-2xl font-semibold uppercase">${projeto.titulo}</h3>
                
                <p class="text-sm text-cinza">
                ${projeto.descricao}
                </p>
                
                <div class="flex flex-wrap gap-2">
                    ${projeto.tags.map(tag => `<span class="text-xs text-cinza px-1.5 border border-borda">${tag}</span>`).join("")}
                </div>
            </div>
            
            <div class="flex flex-col gap-3">

                ${projeto.github ? `
                <a class="text-sm whitespace-nowrap border border-borda py-1 px-3 hover:bg-white hover:text-black" 
                href="${projeto.github}" target="_blank"> CÓDIGO <i class="bi bi-code-slash"></i></a>
                ` : ""}

                ${projeto.deploy ? `
                <a class="text-sm text-principal whitespace-nowrap border border-principal py-1 px-3 hover:bg-principal hover:text-black" 
                href="${projeto.deploy}" target="_blank"> VER SITE <i class="bi bi-arrow-up-right"></i></a>
                ` : ""}

            </div>
        </div>
    `;

    container.appendChild(card);
})