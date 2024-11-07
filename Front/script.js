// Classe Produto
class Produto {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

// Classe Estoque
class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        alert(`Produto ${produto.nome} adicionado ao estoque.`);
    }

    listarProdutos() {
        return this.produtos;
    }
}

// Classe Funcionario
class Funcionario {
    constructor(nome) {
        this.nome = nome;
        this.ponto = [];
    }

    marcarPonto(tipo) {
        const dataHora = new Date().toLocaleString();
        this.ponto.push({ tipo, dataHora });
        return `${tipo} marcado às ${dataHora}`;
    }

    verHistoricoPonto() {
        return this.ponto;
    }
}

// Instâncias de Estoque e Funcionário
const estoque = new Estoque();
const funcionario = new Funcionario("João Silva");

// Função para alternar entre as abas
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Eventos de navegação
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        switchTab(tabId);
    });
});

// Controle de Estoque
document.getElementById('addProductForm').addEventListener('submit', event => {
    event.preventDefault();
    const nome = document.getElementById('productName').value;
    const quantidade = parseInt(document.getElementById('productQuantity').value, 10);
    const novoProduto = new Produto(nome, quantidade);
    estoque.adicionarProduto(novoProduto);
    document.getElementById('addProductForm').reset();
});

document.getElementById('viewStockBtn').addEventListener('click', () => {
    const lista = estoque.listarProdutos();
    const productList = document.getElementById('productList');
    productList.innerHTML = "<strong>Produtos em Estoque:</strong><ul>" +
        lista.map(produto => `<li>${produto.nome} - Quantidade: ${produto.quantidade}</li>`).join('') +
        "</ul>";
});

// Marcação de Ponto
document.getElementById('checkInBtn').addEventListener('click', () => {
    const resultado = funcionario.marcarPonto("Entrada");
    document.getElementById('pontoStatus').innerText = resultado;
});

document.getElementById('checkOutBtn').addEventListener('click', () => {
    const resultado = funcionario.marcarPonto("Saída");
    document.getElementById('pontoStatus').innerText = resultado;
});

// Visualização de Estoque Completo
document.getElementById('refreshStockBtn').addEventListener('click', () => {
    const lista = estoque.listarProdutos();
    const stockView = document.getElementById('stockView');
    stockView.innerHTML = "<strong>Estoque Completo:</strong><ul>" +
        lista.map(produto => `<li>${produto.nome} - Quantidade: ${produto.quantidade}</li>`).join('') +
        "</ul>";
});
