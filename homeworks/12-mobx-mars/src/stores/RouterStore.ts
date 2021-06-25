import { makeAutoObservable } from "mobx";

export enum Route {
    PHOTOS = "photos",
    FAVOURITES = "favourites"
};

export class RouterStore {
    selectedRoute: Route = Route.PHOTOS;

    constructor() {
        makeAutoObservable(this);
    }

    public changeRoute(route: Route): void {
        this.selectedRoute = route;
    }
}
