// pegando o ano atual
document.getElementById("ano").textContent = new Date().getFullYear();

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

// animação botão formulário
document.getElementById('form-contato').addEventListener('submit', function (event) {
    // 1. Impede o recarregamento da página
    event.preventDefault();

    const form = event.target;
    const btn = document.getElementById('btn-enviar');

    // 2. Inicia a animação
    btn.classList.add('is-loading');

    // 3. Captura os dados e os converte para JSON (exigência do StaticForms para AJAX)
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); // Transforma em um objeto {nome: "...", email: "..."}

    // 4. Envia os dados
    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Avisa a API que estamos enviando JSON
            'Accept': 'application/json'        // Pede a resposta em JSON
        },
        body: JSON.stringify(data)              // Transforma o objeto em texto JSON
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // 5. Sucesso! Redireciona para a página de obrigado
                window.location.href = '/obrigado';
            } else {
                // Se a API retornar erro (ex: accessKey inválida)
                console.error('Erro da API:', result);
                alert('Ocorreu um erro: ' + (result.message || 'Tente novamente.'));
                btn.classList.remove('is-loading');
            }
        })
        .catch(error => {
            // Erro de rede/internet
            console.error('Erro de conexão:', error);
            alert('Verifique sua conexão e tente novamente.');
            btn.classList.remove('is-loading');
        });
});