package de.agros_place.petstore.ws.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name=PetEntity.TABLE_NAME)
public class PetEntity {

  public final static String TABLE_NAME = "pet";

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;
  private String name;
  private String tag;
}
