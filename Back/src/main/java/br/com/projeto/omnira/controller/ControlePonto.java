package br.com.projeto.omnira.controller;

import br.com.projeto.omnira.domain.RegistroPonto;
import br.com.projeto.omnira.service.ServicoPonto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/pontos")
public class ControlePonto {

    @Autowired
    private ServicoPonto servicoPonto;

    @GetMapping
    public String listarRegistros(Model model) {
        List<RegistroPonto> registros = servicoPonto.listarTodos();
        model.addAttribute("registros", registros);
        return "pontos/listar";
    }

    @GetMapping("/registro")
    public String mostrarFormularioRegistro(Model model) {
        model.addAttribute("registro", new RegistroPonto());
        return "pontos/registro";
    }

    @PostMapping
    public String registrarPonto(@ModelAttribute RegistroPonto registro) {
        servicoPonto.registrarPonto(registro);
        return "redirect:/pontos";
    }
}
