const projetos =
    [

        // ecoflow
        {
            titulo: "EcoFlow",
            descricao: "Sistema de gestão financeira feito com PHP",
            img: "/img/projetos/ecoflow.png",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "Java Script"
            ],
            github: "https://github.com/oCrazyoff/ecoflow",
            deploy: "https://ecoflow.kesug.com/"
        },

        // cantina
        {
            titulo: "Cantina da ETEC",
            descricao: "Sistema PDV feito para a cantina da Escola ETEC",
            img: "/img/projetos/cantina.png",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "Java Script"
            ],
            github: null,
            deploy: "https://cantina-etec.kesug.com"
        },

        // walyflix
        {
            titulo: "WalyFlix",
            descricao: "Clone da Netflix funcional para estudo",
            img: "/img/projetos/walyflix.png",
            tags: [
                "PHP",
                "TailwindCSS",
                "MySql",
                "Java Script"
            ],
            github: "https://github.com/oCrazyoff/walyflix",
            deploy: "https://walyflix.kesug.com/"
        },

        // isainfo
        {
            titulo: "IsaInfo",
            descricao: "Landing Page feita para um provedor de internet",
            img: "/img/projetos/isainfo.png",
            tags: [
                "HTML",
                "CSS",
                "Java Script"
            ],
            github: "https://github.com/LeandroArantesDev/isainfo-site",
            deploy: "https://www.isainfofibra.com.br/"
        },

        // site da etec
        {
            titulo: "Site da ETEC",
            descricao: "Landing Page para a escola técnia Antônio Junqueira da Veiga",
            img: "/img/projetos/etec.png",
            tags: [
                "HTML",
                "CSS",
                "Java Script"
            ],
            github: "https://github.com/EtecIgarapava/site-etec",
            deploy: "https://etecigarapava.github.io/site-etec/"
        },

        // planet clicker
        {
            titulo: "Planet Clicker",
            descricao: "Jogo clicker feito com Java Script incremental sobre planetas",
            img: "/img/projetos/planet.png",
            tags: [
                "HTML",
                "CSS",
                "Java Script"
            ],
            github: "https://github.com/oCrazyoff/planet-clicker",
            deploy: "https://ocrazyoff.github.io/planet-clicker/"
        },
    ];

const container = document.getElementById("projetos-container");
const tag_qtd = document.getElementById("qtd-itens").innerText = projetos.length + " / ITENS";

projetos.forEach(projeto => {
    const card = document.createElement("div");

    card.className = "flex flex-col gap-5";

    card.innerHTML = `
        <div class="h-60 p-2 border border-borda overflow-hidden">
            <img class="w-full h-full object-cover hover:scale-105" src="${projeto.img}" alt="Print do projeto ${projeto.titulo}">
        </div>
        
        <div class="flex justify-between gap-2">
            <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-semibold uppercase">${projeto.titulo}</h3>
                
                <p class="text-sm text-cinza">
                ${projeto.descricao}
                </p>
                
                <div class="flex gap-3">
                    ${projeto.tags.map(tag => `<span class="text-xs text-cinza px-1.5 border border-borda">${tag}</span>`).join("")}
                </div>
            </div>
            
            <div class="flex flex-col gap-2">

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