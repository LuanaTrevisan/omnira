package br.com.omnira.omnira;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class OmniraApplicationTests {

	@Test
	void contextLoads() {
	}

}
