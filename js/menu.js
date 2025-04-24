const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');

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