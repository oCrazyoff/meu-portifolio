const btn = document.querySelector('.btn-mobile');
const menu = document.querySelector('.menu');
const item = document.querySelector('ul');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

item.addEventListener('click', () => {
    menu.classList.toggle('active');
});