const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('nav a');

function abrirMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
}

function fecharMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    fecharMenu();
});

links.forEach(link => {
    link.addEventListener('click', fecharMenu());
});