package de.agros_place.petstore.ws.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import de.agros_place.api.PetsApiDelegate;
import de.agros_place.model.PetTO;
import de.agros_place.petstore.ws.mapper.PetMapper;
import de.agros_place.petstore.ws.repository.PetRepository;

@Service
public class PetDelegate implements PetsApiDelegate {
  private final PetRepository petRepository;
  private final PetMapper petMapper;

  public PetDelegate(PetRepository petRepository, PetMapper petMapper) {
    this.petRepository = petRepository;
    this.petMapper = petMapper;
  }

  @Override
  public ResponseEntity<Void> createPet(PetTO petTO) {
    petRepository.save(petMapper.toEntity(petTO));
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @Override
  public ResponseEntity<List<PetTO>> listPets(Integer limit) {
    List<PetTO> pets = petRepository.findAll().stream().map(petMapper::toTO).collect(Collectors.toList());
    return ResponseEntity.ok(pets);
  }

  @Override
  public ResponseEntity<PetTO> showPetById(String petId) {
    return ResponseEntity.ok(petMapper.toTO(petRepository.findById(Long.valueOf(petId)).orElseThrow()));
  }

}
