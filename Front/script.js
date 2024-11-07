// scripts.js

// Comentários explicando a lógica do JS
document.addEventListener("DOMContentLoaded", function() {
    // Aqui podemos adicionar lógica de navegação e de autenticação mais tarde, por exemplo:
    // Verificar se o usuário está autenticado ao tentar acessar páginas sem fazer login.

    // Exemplo básico de validação de login (isso é apenas um exemplo)
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir envio do formulário para validar os dados

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar login com usuário e senha (isso é apenas um exemplo)
        if (username === 'admin' && password === 'admin') {
            // Se for válido, redireciona para a página inicial
            window.location.href = 'home.html';
        } else {
            // Caso contrário, exibe uma mensagem de erro
            alert('Usuário ou senha incorretos!');
        }
    });
});
