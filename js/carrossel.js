let currentPage = 1;
let intervalId;

function trocarPagina(number) {
    clearInterval(intervalId);

    currentPage = number;
    document.getElementById("pagina1").style.backgroundColor = number === 1 ? "#1f1c1c" : "#fff";
    document.getElementById("pagina2").style.backgroundColor = number === 2 ? "#1f1c1c" : "#fff";

    const carrossel = document.getElementById("carrossel");
    carrossel.style.transform = number === 1 ? "translateX(0)" : "translateX(-50%)";

    startAutoSwitch();
}

function startAutoSwitch() {
    intervalId = setInterval(() => {
        currentPage = currentPage === 1 ? 2 : 1;
        trocarPagina(currentPage);
    }, 10000);
}

startAutoSwitch();