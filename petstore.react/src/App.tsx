import React from 'react';
import {ApiContextProvider} from "./Context/ApiContext";
import {PetStore} from "./ui/PetStore";

const App = () => {
    return (
        <ApiContextProvider>
            <div className="App">
                <PetStore/>
            </div>
        </ApiContextProvider>
    );
}

export default App;
