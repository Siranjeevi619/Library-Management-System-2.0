package com.example.lms_20;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.example.lms_20", "com.book", "com.users"})
@EnableJpaRepositories(basePackages ={ "com.book.repository", "com.users.repo" })
@EntityScan(basePackages = {"com.book.model", "com.users.model"})
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}

