const btn = document.querySelector('.btn-mobile');
const menu = document.querySelector('.menu');
const item = document.querySelector('ul');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

item.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener('resize', function() {
    const listaItens = document.querySelectorAll('ul li');
    
    if (window.innerWidth <= 1020) {
        listaItens.forEach(function(li) {
            li.classList.remove('efeito');
        });
    } else {
        listaItens.forEach(function(li) {
            li.classList.add('efeito');
        });
    }
});

window.dispatchEvent(new Event('resize'));