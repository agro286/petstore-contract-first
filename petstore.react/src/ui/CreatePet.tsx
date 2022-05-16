import React, {useState} from 'react';
import {Pet} from 'api-gen/models'
import {useApiContext} from "../Context/ApiContext";

const INITIAL_PET = {name: ''};

export const CreatePet = () => {
    const {apiObjects} = useApiContext();
    const [pet, setPet] = useState<Pet>(INITIAL_PET);
    const save = () =>
        apiObjects.petsApi
            .createPet({pet})
            .then(() => setPet(INITIAL_PET))

    return (
        <form>
            <input
                type='text'
                value={pet.name}
                onChange={e => setPet(value => ({...value, name: e.target.value}))}
            />
            <input
                type='text'
                value={pet.tag}
                onChange={e => setPet(value => ({...value, tag: e.target.value}))}
            />
            <button type='button' onClick={save}>Save</button>
        </form>
    );
}
