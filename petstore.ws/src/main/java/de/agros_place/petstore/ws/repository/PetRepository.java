package de.agros_place.petstore.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.agros_place.petstore.ws.entity.PetEntity;

@Repository
public interface PetRepository extends JpaRepository<PetEntity, Long> {
}
