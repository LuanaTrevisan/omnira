package br.com.projeto.omnira.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@EnableJpaRepositories(basePackages = "br.com.projeto.repository")
public class ConfiguracaoBanco {
    // Esta classe pode conter beans relacionados ao banco, se necessário
}