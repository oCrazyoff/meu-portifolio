const span = document.getElementById('digita');
const texto = span.textContent.trim();
span.textContent = '';
let i = 0;

function escrever() {
    if (i < texto.length) {
        span.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 200);
    }
}

escrever();
