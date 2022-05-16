import React, {createContext, FunctionComponent, PropsWithChildren, useContext, useMemo, useState} from 'react';
import {Configuration, PetsApi} from 'api-gen';
import {config} from "../environment";

const ApiContext = createContext<ApiContextModel>({
    apiObjects: {
        petsApi: new PetsApi()
    }
});

interface ApiContextModel {
    apiObjects: ApiObjects;
}

interface ApiObjects {
    petsApi: PetsApi;
}

export const ApiContextProvider: FunctionComponent<PropsWithChildren<unknown>> = ({children}) => {
    const [activeRequests, setActiveRequests] = useState<number>(0);
    const apiConfiguration = useMemo<Configuration>(() => new Configuration({
        basePath: `${config.basePath.replace(/\/+$/, '')}/${config.contextPath}`,
        credentials: 'include',
        middleware: [{
            pre: async context => {
                setActiveRequests(c => c + 1);
                return context
            },
            post: async () => setActiveRequests(c => Math.max(c - 1, 0))
        }]
    }), [setActiveRequests]);

    const apiObjects: ApiObjects = useMemo(() => ({
        petsApi: new PetsApi(apiConfiguration)
    }), [apiConfiguration]);

    return (
        <ApiContext.Provider value={{apiObjects}}>{children}</ApiContext.Provider>
    )
}

export const useApiContext = () => {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error('useApiContext must be used within a ApiContextProvider');
    }
    return context;
}
