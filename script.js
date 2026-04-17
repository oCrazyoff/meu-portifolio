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
    // 1. Impede que a página recarregue imediatamente
    event.preventDefault();

    const form = event.target;
    const btn = document.getElementById('btn-enviar');

    // 2. Inicia a animação de loading no botão
    btn.classList.add('is-loading');

    // 3. Captura todos os dados preenchidos
    const formData = new FormData(form);

    // 4. Envia os dados para o action do form (StaticForms) silenciosamente
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json' // Pede a resposta no formato JSON
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // 5. Redireciona para a tela de obrigado após o sucesso
                window.location.href = '/obrigado';
            } else {
                // Remove o loading e avisa se a API recusar o envio
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                btn.classList.remove('is-loading');
            }
        })
        .catch(error => {
            // Remove o loading e avisa se houver queda de internet
            console.error('Erro de conexão:', error);
            alert('Verifique sua conexão e tente novamente.');
            btn.classList.remove('is-loading');
        });
});