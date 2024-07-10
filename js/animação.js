document.getElementById('formulario').addEventListener('submit', function(animação) {
    animação.preventDefault();
    var botão = document.getElementById('btn-enviar');
    botão.classList.add('loading');
    botão.textContent = "";

    setTimeout(function() {
        botão.classList.remove('loading');
        botão.classList.add('success');
        
        setTimeout(function() {
            botão.classList.remove('success');
            botão.textContent = "Enviar";
        }, 1500);
        document.getElementById('formulario').submit();
    }, 1000);
});
