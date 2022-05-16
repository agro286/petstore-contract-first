import React, {useCallback, useEffect, useState} from 'react';
import {useApiContext} from "../Context/ApiContext";
import {Pet} from "../api-gen";

export const ListPets = () => {
    const {apiObjects} = useApiContext();
    const [pets, setPets] = useState<Array<Pet>>([]);
    const fetchPets = useCallback(() => {
        apiObjects.petsApi
            .listPets({})
            .then(result => setPets(result))
    }, [apiObjects.petsApi, setPets]);

    useEffect(() => {
        fetchPets()
    }, [fetchPets])

    return <>
        <button type='button' onClick={fetchPets}>refresh</button>
        <table>
            {pets.map(pet => (
                <tr>
                    <td>ID: {pet.id}</td>
                    <td>Name: {pet.name}</td>
                    <td>Tag: {pet.tag}</td>
                </tr>
            ))}
        </table>
    </>
}
