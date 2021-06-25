import { makeAutoObservable } from "mobx";

import { MarsViewerStore, PhotoId, RoverPhoto } from "./MarsViewerStore";

export class FavouritesStore {
    marsViewerStore: MarsViewerStore;
    photoIds: PhotoId[] = [];

    constructor(marsViewerStore: MarsViewerStore) {
        makeAutoObservable(this);
        this.marsViewerStore = marsViewerStore;
    }

    public add(photoId: PhotoId): void {
        this.photoIds.push(photoId);
    }

    public remove(photoId: PhotoId): void {
        const index = this.photoIds.indexOf(photoId);
        if (index !== -1) {
            this.photoIds.splice(index, 1);
        }
    }

    get favouritePhotos(): RoverPhoto[] {
        return this.marsViewerStore.photos.filter((p) => this.photoIds.includes(p.id));
    }
}
