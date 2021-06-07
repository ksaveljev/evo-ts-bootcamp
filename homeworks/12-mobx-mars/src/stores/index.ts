import { createContext } from "../utils";
import { MarsViewerStore } from "./MarsViewerStore";
import { RouterStore } from "./RouterStore";
import { FavouritesStore } from "./FavouritesStore";

const routerStore = new RouterStore();
const marsViewerStore = new MarsViewerStore();
const favouritesStore = new FavouritesStore(marsViewerStore);

export const { StoreProvider, useStore } = createContext({
    MarsViewer: marsViewerStore,
    Router: routerStore,
    Favourites: favouritesStore
});
