const API_URL = "http://localhost:8080/api"; // URL base do backend

// Funções para o módulo de Produto
async function cadastrarProduto() {
    const produto = {
        nome: "Produto Exemplo",
        preco: 19.99,
        quantidade: 10
    };

    try {
        const response = await fetch(`${API_URL}/produtos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });
        
        if (response.ok) {
            alert("Produto cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar produto");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

async function atualizarProduto(id) {
    const produtoAtualizado = {
        nome: "Produto Atualizado",
        preco: 29.99,
        quantidade: 5
    };

    try {
        const response = await fetch(`${API_URL}/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produtoAtualizado)
        });

        if (response.ok) {
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Erro ao atualizar produto");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

async function removerProduto(id) {
    try {
        const response = await fetch(`${API_URL}/produtos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert("Produto removido com sucesso!");
        } else {
            alert("Erro ao remover produto");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

async function consultarProduto(id) {
    try {
        const response = await fetch(`${API_URL}/produtos/${id}`, {
            method: 'GET'
        });

        if (response.ok) {
            const produto = await response.json();
            alert(`Produto: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`);
        } else {
            alert("Erro ao consultar produto");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

// Funções para o módulo de Registro de Ponto
async function registrarEntrada(idFuncionario) {
    try {
        const response = await fetch(`${API_URL}/ponto/entrada`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idFuncionario: idFuncionario })
        });

        if (response.ok) {
            alert("Entrada registrada com sucesso!");
        } else {
            alert("Erro ao registrar entrada");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

async function registrarSaida(idFuncionario) {
    try {
        const response = await fetch(`${API_URL}/ponto/saida`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idFuncionario: idFuncionario })
        });

        if (response.ok) {
            alert("Saída registrada com sucesso!");
        } else {
            alert("Erro ao registrar saída");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

async function consultarHistoricoPonto(idFuncionario) {
    try {
        const response = await fetch(`${API_URL}/ponto/historico/${idFuncionario}`, {
            method: 'GET'
        });

        if (response.ok) {
            const historico = await response.json();
            let historicoTexto = "Histórico de ponto:\n";
            historico.forEach((ponto) => {
                historicoTexto += `Data: ${ponto.data}, Entrada: ${ponto.horaEntrada}, Saída: ${ponto.horaSaida}\n`;
            });
            alert(historicoTexto);
        } else {
            alert("Erro ao consultar histórico de ponto");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}
