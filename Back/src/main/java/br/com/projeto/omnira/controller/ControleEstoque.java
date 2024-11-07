package br.com.projeto.omnira.controller;

import br.com.projeto.omnira.domain.Produto;
import br.com.projeto.omnira.service.ServicoEstoque;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/produtos")
public class ControleEstoque {

    @Autowired
    private ServicoEstoque servicoEstoque;

    @GetMapping
    public String listarProdutos(Model model) {
        model.addAttribute("produtos", servicoEstoque.listarTodos());
        return "produtos/listar";
    }

    @GetMapping("/cadastro")
    public String mostrarFormularioCadastro(Model model) {
        model.addAttribute("produto", new Produto());
        return "produtos/cadastro";
    }

    @PostMapping
    public String cadastrarProduto(@ModelAttribute Produto produto) {
        servicoEstoque.cadastrarProduto(produto);
        return "redirect:/produtos";
    }
}
