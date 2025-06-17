// animação do header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('ativo');
    } else {
        header.classList.remove('ativo');
    }
})

// função do menu
function toggleMenu() {
    const menu = document.querySelector('header nav');
    const overlay = document.getElementById('overlay');

    menu.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}

// Efeito de digitação
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('digitar');
    const text = 'Walysson';
    let i = 0;

    function type() {
        if (i < text.length) {
            h1.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    h1.textContent = '';
    type();
});