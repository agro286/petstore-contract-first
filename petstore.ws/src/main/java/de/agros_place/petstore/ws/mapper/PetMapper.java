package de.agros_place.petstore.ws.mapper;

import org.springframework.stereotype.Service;

import de.agros_place.model.PetTO;
import de.agros_place.petstore.ws.entity.PetEntity;

@Service
public class PetMapper {

  public PetEntity toEntity(PetTO pet) {
    return new PetEntity().setId(pet.getId()).setName(pet.getName()).setTag(pet.getTag());
  }

  public PetTO toTO(PetEntity pet) {
    PetTO to = new PetTO();
    to.setId(pet.getId());
    to.setName(pet.getName());
    to.setTag(pet.getTag());

    return to;
  }
}
