import * as React from "react";

export type Context<StoresMap extends { [K: string]: object }> = {
    StoreProvider: React.FC,
    useStore:<K extends keyof StoresMap>(storeKey: K) => StoresMap[K];
};

export function createContext<StoresMap extends { [K: string]: object }>(stores: StoresMap): Context<StoresMap> {
    const StoreContext = React.createContext(stores);

    const StoreProvider: React.FC<{}> = ({ children }) => (
        <StoreContext.Provider value={stores}>
            {children}
        </StoreContext.Provider>
    );

    const useStore = <K extends keyof StoresMap>(storeKey: K): StoresMap[K] => {
        return React.useContext(StoreContext)[storeKey];
    }

    return { StoreProvider, useStore };
}
