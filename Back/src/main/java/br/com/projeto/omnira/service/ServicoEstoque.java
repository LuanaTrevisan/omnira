package br.com.projeto.omnira.service;

import br.com.projeto.omnira.domain.Produto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicoEstoque {
    private List<Produto> produtos = new ArrayList<>();

    public List<Produto> listarTodos() {
        return produtos;
    }

    public void cadastrarProduto(Produto produto) {
        produtos.add(produto);
    }
}
