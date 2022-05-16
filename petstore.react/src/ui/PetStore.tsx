import React from 'react';
import {CreatePet} from "./CreatePet";
import {ListPets} from "./ListPets";

export const PetStore = () => {
    return <>
        <header className="App-header">
            Petstore
        </header>
        <CreatePet />
        <ListPets />
    </>
}
