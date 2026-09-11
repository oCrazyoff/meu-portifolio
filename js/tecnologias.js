const tecnologias = [
    {
        nome: "PHP",
        icone: "https://cdn.simpleicons.org/php"
    },
    {
        nome: "HTML5",
        icone: "https://cdn.simpleicons.org/html5"
    },
    {
        nome: "CSS3",
        icone: "https://cdn.simpleicons.org/css3"
    },
    {
        nome: "JavaScript",
        icone: "https://cdn.simpleicons.org/javascript"
    },
    {
        nome: "Tailwind CSS",
        icone: "https://cdn.simpleicons.org/tailwindcss"
    },
    {
        nome: "Laravel",
        icone: "https://cdn.simpleicons.org/laravel"
    },
    {
        nome: "MySQL",
        icone: "https://cdn.simpleicons.org/mysql"
    },
    {
        nome: "Node.js",
        icone: "https://cdn.simpleicons.org/nodedotjs"
    },
    {
        nome: "Docker",
        icone: "https://cdn.simpleicons.org/docker"
    },
    {
        nome: "Git",
        icone: "https://cdn.simpleicons.org/git"
    },
    {
        nome: "GitHub",
        icone: "https://cdn.simpleicons.org/github"
    },
    {
        nome: "Linux",
        icone: "https://cdn.simpleicons.org/linux"
    },
];

const carrossel = document.getElementById("carrossel");

function criarTecnologia(tecnologia) {
    return `
        <div class="group flex flex-col items-center justify-center gap-3 shrink-0 cursor-pointer min-w-20">
            <img src="${tecnologia.icone}"
                alt="${tecnologia.nome}"
                class="h-10 w-10 transition-all duration-300 brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:scale-120 mt-3">

            <span class="text-white uppercase text-[9px] tracking-wider text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
                ${tecnologia.nome}
            </span>
        </div>
    `;
};

const tecnologiasHTML = tecnologias
    .map(criarTecnologia)
    .join("");

carrossel.innerHTML = tecnologiasHTML + tecnologiasHTML;