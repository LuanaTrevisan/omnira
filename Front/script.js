document.addEventListener("DOMContentLoaded", function () {

    // Função para navegação entre as páginas
    function navigateToPage(page) {
        window.location.href = page + '.html';
    }

    // Atualizar Estoque
    function updateEstoque(productId, newQuantity) {
        let productElement = document.getElementById('product-' + productId);
        if (productElement) {
            productElement.querySelector('.stock-quantity').textContent = newQuantity;
            alert(`Estoque atualizado para o Produto ${productId} com a quantidade ${newQuantity}`);
            fadeIn(productElement);
        }
    }

    // Atualizar Ponto
    function updatePonto(employeeId, newPonto) {
        let pontoElement = document.getElementById('employee-' + employeeId);
        if (pontoElement) {
            pontoElement.querySelector('.ponto-status').textContent = newPonto;
            alert(`Ponto atualizado para o Funcionário ${employeeId} com o status: ${newPonto}`);
            fadeIn(pontoElement);
        }
    }

    // Calcular total de estoque
    function calculateTotalEstoque() {
        let total = 0;
        let estoqueItems = document.querySelectorAll('.stock-item');
        estoqueItems.forEach(function (item) {
            total += parseInt(item.querySelector('.stock-quantity').textContent);
        });
        alert(`O total de itens em estoque é: ${total}`);
    }

    // Função para animar os elementos com fade-in
    function fadeIn(element) {
        element.classList.add('fade-in');
    }

    // Função para verificar validade
    function validateInput(input, minValue) {
        if (parseInt(input) < minValue) {
            alert(`O valor deve ser maior ou igual a ${minValue}`);
            return false;
        }
        return true;
    }

    // Ações dos botões
    document.getElementById('estoqueButton').addEventListener('click', function () {
        navigateToPage('estoque');
    });

    document.getElementById('pontoButton').addEventListener('click', function () {
        navigateToPage('ponto');
    });

    document.getElementById('relatorioButton').addEventListener('click', function () {
        navigateToPage('relatorio');
    });

    document.getElementById('backToHome').addEventListener('click', function () {
        navigateToPage('index');
    });

    document.getElementById('backToHomePonto').addEventListener('click', function () {
        navigateToPage('index');
    });

    document.getElementById('backToHomeRelatorio').addEventListener('click', function () {
        navigateToPage('index');
    });

    // Interações no controle de estoque
    const estoqueButton = document.querySelector('.update-btn');
    if (estoqueButton) {
        estoqueButton.addEventListener('click', function () {
            const quantityInput = prompt("Digite a nova quantidade do produto:");
            if (validateInput(quantityInput, 1)) {
                updateEstoque(1, quantityInput);
            }
        });
    }

    // Exemplo de clique para atualizar ponto
    const pontoButton = document.querySelector('.update-btn');
    if (pontoButton) {
        pontoButton.addEventListener('click', function () {
            const statusInput = prompt("Digite o status do ponto (Presente/Ausente):");
            updatePonto(1, statusInput);
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    // Função de navegação de volta
    const backToHomeButton = document.getElementById('backToHome');

    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', function () {
            // Função para voltar à página anterior
            window.history.back();
        });
    }

    // Se você preferir redirecionar para a página inicial, use:
    // window.location.href = 'index.html';  // Substitua 'index.html' pelo nome do arquivo correto.

    // Ações dos outros botões para navegação entre as telas
    document.getElementById('estoqueButton').addEventListener('click', function () {
        navigateToPage('estoque');
    });

    document.getElementById('pontoButton').addEventListener('click', function () {
        navigateToPage('ponto');
    });

    document.getElementById('relatorioButton').addEventListener('click', function () {
        navigateToPage('relatorio');
    });

    // Função para navegação entre as páginas
    function navigateToPage(page) {
        window.location.href = page + '.html';
    }
});
