package br.com.projeto.omnira.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.projeto.omnira.domain.RegistroPonto;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ServicoPonto {
    private final JpaRepository<RegistroPonto, Long> registroPontoRepository;

    @Autowired
    public ServicoPonto(JpaRepository<RegistroPonto, Long> registroPontoRepository) {
        this.registroPontoRepository = registroPontoRepository;
    }

    public List<RegistroPonto> listarTodos() {
        return registroPontoRepository.findAll();
    }

    public void registrarPonto(RegistroPonto registroPonto) {
        registroPontoRepository.save(registroPonto);
    }

    public RegistroPonto buscarPorId(Long id) {
        return registroPontoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Registro de ponto não encontrado"));
    }

    public void deletarRegistro(Long id) {
        registroPontoRepository.deleteById(id);
    }
}
