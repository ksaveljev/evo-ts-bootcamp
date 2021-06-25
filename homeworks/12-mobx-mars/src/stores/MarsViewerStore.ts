import { makeAutoObservable, runInAction } from "mobx";

import nasa, { NasaResponse } from "../api/nasa";

export enum Status {
    IDLE = "idle",
    LOADING = "loading"
};

export type PhotoId = number;

export type RoverPhoto = {
    id: PhotoId;
    imgSrc: string;
    roverName: string;
    cameraFullName: string;
};

export class MarsViewerStore {
    status: Status = Status.IDLE;
    selectedSol: number = 1;
    sols: { [key: number]: PhotoId[] } = {};
    photos: RoverPhoto[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public async fetchSol(): Promise<void> {
        this.status = Status.LOADING;

        const sol = this.selectedSol;
        const response = await nasa.get<NasaResponse>('/', { params: { sol } });
        const { photos } = response.data;
        const roverPhotos: RoverPhoto[] = photos.map((p) => ({
            id: p.id,
            imgSrc: p.img_src,
            roverName: p.rover.name,
            cameraFullName: p.camera.full_name
        }));
        const roverPhotoIds = photos.map((p) => p.id);
        runInAction(() => {
            this.addPhotos(roverPhotos);
            this.addDays(sol, roverPhotoIds);
            this.status = Status.IDLE;
        });
    }

    public addPhotos(photos: RoverPhoto[]): void {
        this.photos.push(...photos);
    }

    public addDays(sol: number, photos: PhotoId[]): void {
        this.sols[sol] = photos;
    }

    public changeSelectedSol(sol: number): void {
        this.selectedSol = sol;
    }

    get solPhotos(): RoverPhoto[] | null {
        const photoIds = this.sols[this.selectedSol];
        if (photoIds === undefined) {
            return null;
        }

        return this.photos.filter((p) => photoIds.includes(p.id));
    }
}
