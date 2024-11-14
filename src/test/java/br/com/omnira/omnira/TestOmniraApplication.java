package br.com.omnira.omnira;

import org.springframework.boot.SpringApplication;

public class TestOmniraApplication {

	public static void main(String[] args) {
		SpringApplication.from(OmniraApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
