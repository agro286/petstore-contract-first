package de.agros_place.petstore.ws;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "de.agros_place.api", "de.agros_place.petstore.ws" })
public class PetStoreApplication {
  public static void main(String[] args) {
    SpringApplication.run(PetStoreApplication.class, args);
  }
}
