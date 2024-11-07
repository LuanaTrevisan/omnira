// Seleciona os botões pelo ID
const addProductBtn = document.getElementById('addProductBtn');
const viewStockBtn = document.getElementById('viewStockBtn');

// Adiciona um evento de clique ao botão "Adicionar Produto"
addProductBtn.addEventListener('click', () => {
    // Aqui, um modal ou formulário de adição de produto poderia ser exibido.
    // Vamos usar um alerta para simulação.
    alert('Abrir formulário para adicionar novo produto.');
});

// Adiciona um evento de clique ao botão "Visualizar Estoque"
viewStockBtn.addEventListener('click', () => {
    // Em uma aplicação real, esse botão mostraria uma lista de produtos em estoque.
    // Para simulação, vamos exibir uma mensagem.
    alert('Exibindo a lista de produtos em estoque.');
});
